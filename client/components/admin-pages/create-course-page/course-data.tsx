import BtnWithIcon from "@/components/btn-with-icon";
import FormInput from "@/components/form-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

type IValue = { title: string }[];

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  benefits: IValue;
  setBenefits: Dispatch<SetStateAction<IValue>>;
  prerequisites: IValue;
  setPrerequisites: Dispatch<SetStateAction<IValue>>;
}

type CourseDataValues = {
  benefits: IValue;
  prerequisites: IValue;
};

const schema: any = yup.object({
  benefits: yup.lazy(() =>
    yup.array().of(
      yup.object({
        title: yup.string().required("Please fill this benefit field"),
      })
    )
  ),
  prerequisites: yup.lazy(() =>
    yup.array().of(
      yup.object({
        title: yup.string().required("Please fill this prerequisite field"),
      })
    )
  ),
});

const CourseData: FC<Props> = ({
  active,
  setActive,
  setBenefits,
  setPrerequisites,
  benefits,
  prerequisites,
}): JSX.Element => {
  const form = useForm<CourseDataValues>({
    defaultValues: {
      benefits: [{ title: "" }],
      prerequisites: [{ title: "" }],
    },
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const {
    fields: benefitFields,
    append: benefitAppend,
    remove: benefitRemove,
  } = useFieldArray({
    name: "benefits",
    control,
  });

  const {
    fields: prerequisiteFields,
    append: prerequisiteAppend,
    remove: prerequisiteRemove,
  } = useFieldArray({
    name: "prerequisites",
    control,
  });

  const backHandler = () => {
    setActive(active - 1);
  };

  const onSubmit = (data: CourseDataValues) => {
    setActive(active + 1);
    setBenefits(data.benefits);
    setPrerequisites(data.prerequisites);
  };

  useEffect(() => {
    setValue("benefits", benefits);
    setValue("prerequisites", prerequisites);
  }, [active]);

  return (
    <form
      className="w-[80%] mx-auto mt-24 my-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Benefits */}
      <h2 className="text-xl font-bold mb-4">
        What are some benefits when take part in this course?
      </h2>
      <div className="">
        {benefitFields.map((field, index) => (
          <div className="relative" key={field.id}>
            <FormInput
              id="benefits"
              label={`Benefit ${index + 1}`}
              register={register(`benefits.${index}.title` as const)}
              placeholder="You will be able to build a full stack LMS Platform ..."
              errorMsg={errors?.benefits?.[index]?.title?.message}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => benefitRemove(index)}
                className="absolute top-0 right-0 flex items-center gap-1 text-sm"
              >
                <RemoveCircle style={{ fontSize: "15px" }} /> Remove this
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => benefitAppend({ title: "" })}
          className="flex items-center gap-1"
        >
          <AddCircle /> Add more benefit
        </button>
      </div>

      {/* Prerequisites */}
      <h2 className="text-xl font-bold mb-4 mt-12">
        What are some prequesites for starting this course?
      </h2>
      <div className="">
        {prerequisiteFields.map((field, index) => (
          <div className="relative" key={field.id}>
            <FormInput
              id="prerequisites"
              label={`Prerequisite ${index + 1}`}
              register={register(`prerequisites.${index}.title` as const)}
              placeholder="You need basic knowledge of MERN stack"
              errorMsg={errors?.prerequisites?.[index]?.title?.message}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => prerequisiteRemove(index)}
                className="absolute top-0 right-0 flex items-center gap-1 text-sm"
              >
                <RemoveCircle style={{ fontSize: "15px" }} /> Remove this
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => prerequisiteAppend({ title: "" })}
          className="flex items-center gap-1"
        >
          <AddCircle /> Add more prerequisite
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <BtnWithIcon
          content="PREV"
          customClasses="!bg-blue-500"
          type="button"
          onClick={backHandler}
        />
        <BtnWithIcon
          content="NEXT"
          customClasses="!bg-blue-500"
          type="submit"
        />
      </div>
    </form>
  );
};

export default CourseData;