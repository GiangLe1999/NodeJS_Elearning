"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FaqFormValues, IFaq } from "@/app/admin/faq/page";
import {
  Control,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import BtnWithIcon from "@/components/btn-with-icon";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import BtnWithLoading from "@/components/btn-with-loading";
import { useEditLayoutMutation } from "@/store/layout/layout-api";
import toast from "react-hot-toast";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface Props {
  fields: Record<"id", string>[];
  register: UseFormRegister<FaqFormValues>;
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<FaqFormValues, "questions">;
  handleSubmit: UseFormHandleSubmit<FaqFormValues, undefined>;
}

export default function FAQAccordion({
  fields,
  register,
  remove,
  append,
  handleSubmit,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [editLayout, { isSuccess, isLoading, error }] = useEditLayoutMutation();

  const onSubmit = async (data: FaqFormValues) => {
    if (!isLoading) {
      await editLayout({ type: "FAQ", faq: data.questions });
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Update FAQ Successfully!");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow-md">
        {fields.map((field, index) => (
          <Accordion
            key={field.id}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${{ index }}d-content`}
              id={`panel${{ index }}d-header`}
            >
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none"
                  {...register(`questions.${index}.question`)}
                />
                <BtnWithIcon
                  customClasses="absolute -right-36 -top-[10px] !bg-red-800"
                  content="Remove"
                  icon={AiOutlineMinusCircle}
                  iconSize={18}
                  onClick={() => remove(index)}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <textarea
                className="w-full bg-transparent outline-none"
                {...register(`questions.${index}.answer`)}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <BtnWithIcon
          content="Add FAQ"
          icon={AiOutlinePlusCircle}
          iconSize={18}
          onClick={() => append({ question: "", answer: "" })}
          customClasses="!bg-[#3e4396]"
          type="button"
        />
        <BtnWithLoading
          content="Save"
          isLoading={isLoading}
          customClasses="!w-[130px] !bg-[#3e4396]"
          type="submit"
        />
      </div>
    </form>
  );
}
