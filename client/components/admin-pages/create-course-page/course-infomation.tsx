"use client";

import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { CourseInfoValues, initialCourseInfo } from "./create-course-form";
import FormInput from "@/components/form-input";
import { MdUpload } from "react-icons/md";
import ContainNextImage from "@/components/contain-next-image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import BtnWithIcon from "@/components/btn-with-icon";

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  courseInfo: CourseInfoValues;
  setCourseInfo: Dispatch<SetStateAction<CourseInfoValues>>;
}

const courseInfoSchema = Yup.object({
  name: Yup.string().required("Please enter course's name"),
  description: Yup.string().required("Please enter course's description"),
  price: Yup.string().required("Please enter course's price"),
  estimatedPrice: Yup.string().required(
    "Please enter course's estimated price"
  ),
  tags: Yup.string().required("Please enter course's tags"),
  level: Yup.string().required("Please enter course's level"),
  demoUrl: Yup.string().required("Please enter course's demo video url"),
  thumbnail: Yup.string().required("Please upload course thumbnail image"),
});

const CourseInfomation: FC<Props> = ({
  active,
  setActive,
  setCourseInfo,
  courseInfo,
}): JSX.Element => {
  const [dragging, setDragging] = useState(false);

  const courseInfoForm = useForm<CourseInfoValues>({
    defaultValues: initialCourseInfo,
    resolver: yupResolver(courseInfoSchema),
  });

  const { register, handleSubmit, formState, setValue, watch, getValues } =
    courseInfoForm;
  const { errors } = formState;

  const thumbnail = watch("thumbnail");

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setValue("thumbnail", reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const onSubmit = (data: CourseInfoValues) => {
    setActive(active + 1);
    setCourseInfo(data);
  };

  const dragOverHandler = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const dropHandler = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setValue("thumbnail", reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setValue("name", courseInfo.name);
    setValue("description", courseInfo.description);
    setValue("price", courseInfo.price);
    setValue("estimatedPrice", courseInfo.estimatedPrice);
    setValue("level", courseInfo.level);
    setValue("tags", courseInfo.tags);
    setValue("demoUrl", courseInfo.demoUrl);
    setValue("thumbnail", courseInfo.thumbnail);
  }, [active]);

  return (
    <div className="w-[80%] mx-auto mt-24 mb-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          label="Course Name"
          register={register("name")}
          errorMsg={errors.name?.message}
          placeholder="MERN stack LMS platform with Next13"
        />

        <FormInput
          id="description"
          label="Course Description"
          register={register("description")}
          errorMsg={errors.description?.message}
          textarea
          rows={10}
          placeholder="Write something amazing"
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            type="number"
            id="price"
            label="Course Price"
            register={register("price")}
            errorMsg={errors.price?.message}
            placeholder="29"
          />

          <FormInput
            type="number"
            id="estimatedPrice"
            label="Estimated Price (Optional)"
            register={register("estimatedPrice")}
            errorMsg={errors.estimatedPrice?.message}
            placeholder="79"
          />
        </div>

        <FormInput
          id="tags"
          label="Course Tags"
          register={register("tags")}
          errorMsg={errors.tags?.message}
          placeholder="MERN,Next 13,Socket.io,..."
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="level"
            label="Course Level"
            register={register("level")}
            errorMsg={errors.level?.message}
            placeholder="Beginner/Intermediate/Expert"
          />

          <FormInput
            id="demoUrl"
            label="Demo URL"
            register={register("demoUrl")}
            errorMsg={errors.demoUrl?.message}
            placeholder="79"
          />
        </div>

        <label htmlFor="thumbnail" className="form-input-label">
          Course Thumbnail
        </label>
        <label
          htmlFor="thumbnail"
          className={`w-full min-h-[250px] relative dark:border-white p-3 rounded-[5px] cursor-pointer border flex flex-col justify-center ${
            dragging ? "bg-blue-500" : "bg-transparent"
          }`}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDrop={dropHandler}
        >
          {thumbnail ? (
            <ContainNextImage
              src={thumbnail}
              alt="Thumbnail"
              className="py-3"
            />
          ) : (
            <span className="text-center">
              <MdUpload size={40} className="mx-auto mb-2" />
              Drag and drop your thumbnail here or click to browse
            </span>
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          id="thumbnail"
          hidden
          onChange={fileChangeHandler}
        />

        <BtnWithIcon
          type="submit"
          content="NEXT"
          customClasses="!bg-blue-500 mt-4 ml-auto"
        />
      </form>
    </div>
  );
};

export default CourseInfomation;
