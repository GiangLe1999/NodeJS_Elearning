"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../form-input";
import BtnWithIcon from "../btn-with-icon";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name!")
    .min(2, "Name must has at least 2 characters"),
  email: Yup.string()
    .email("Your email is invalid!")
    .required("Please enter your email!"),
  password: Yup.string()
    .required("Please enter you password!")
    .min(6, "Password must has at least 6 characters"),
});

interface Props {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setRoute: Dispatch<SetStateAction<string>>;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Signup: FC<Props> = ({ setRoute, setOpenModal }): JSX.Element => {
  const [show, setShow] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, watch, reset } = form;

  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = () => {};

  return (
    <div>
      <h3 className="form-title">Join in Elearning</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormInput
          id="name"
          label="Name"
          register={register("name")}
          errorMsg={errors.name?.message}
          placeholder="John Doe"
        />

        <FormInput
          id="email"
          label="Email"
          register={register("email")}
          errorMsg={errors.email?.message}
          placeholder="Example@gmail.com"
        />

        <div className="relative">
          <FormInput
            id="password"
            label="Password"
            type={show ? "text" : "password"}
            register={register("password")}
            errorMsg={errors.password?.message}
            placeholder="At least 6 characters"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </div>
        </div>

        <BtnWithIcon content="LOG IN" customClasses="w-full mt-6 !py-3" />

        <p className="mt-8 mb-2 text-center">Or join with</p>
        <div className="flex items-center justify-center gap-x-2">
          <FcGoogle size={30} className="cursor-pointer" />
          <AiFillGithub size={30} className="cursor-pointer" />
        </div>

        <p className="text-center mt-8">
          Not have any account?
          <span
            className="text-secondary font-bold ml-2"
            onClick={() => setRoute("signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
