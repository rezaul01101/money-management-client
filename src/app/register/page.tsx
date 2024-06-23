"use client";
import FWButton from "@/components/buttons/FWButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { userRegister } from "@/controllers/api";
interface FormPayload {
  user_name: string;
  email: string;
  password: string;
  verify_password: string;
}
const Register = () => {
  const RegisterValidationSchema = z.object({
    user_name: z.string(),
    email: z.string().email("Please provide valid email"),
    password: z.string().min(7),
    verify_password: z.string().min(8),
  });

  const [passwordShow, setPasswordShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPayload>({
    resolver: zodResolver(RegisterValidationSchema),
  });

  const passwordToggle = () => {
    setPasswordShow(!passwordShow);
  };

  const handleOnSubmit = async (data: FormPayload) => {
    const email = data?.email;
    const password = data?.password;
    const name = data?.user_name;
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const registerResponse = await userRegister(userData);
      if (registerResponse && registerResponse?.status === 200) {
        setSuccessMessage(true);
      }
    } catch (errors) {
      //pending: error message will show on front
      console.log(errors);
    }

    // if (loginResData) {
    //   router.push("/home");
    // }
    // dispatch(setAuthToken(loginResData?.data?.data?.token));
    // dispatch(setUserData(loginResData?.data?.data?.user_credential));
    // completeLogin(loginResData);
  };

  return (
    <div>
      <div className="w-full min-h-[100vh] flex items-center justify-center px-4">
        <div className="sm:w-[30vw] min-h-[70vh]">
          <div>
            <h1 className="text-3xl font-bold my-4 text-center">Register</h1>
            <h1 className="text-3xl font-bold my-4 text-theme-yellow-600 text-center">
              Money Management App
            </h1>
          </div>
          {successMessage ? (
            <div>
              <p className="text-center text-xl font-bold">
                Registration successful! Thank you for creating account.
              </p>
              <div className="text-center mt-4 font-bold">
                <Link href={"/login"} className="text-xl text-blue-500">
                  Login here
                </Link>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="relative w-full mb-6">
                  <label
                    htmlFor={"name"}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {"Name"}
                  </label>
                  <input
                    type="text"
                    id={"name"}
                    placeholder={"Name"}
                    {...register("user_name", { required: true })}
                    className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-yellow-500 focus:border-theme-yellow-500 placeholder-gray-500 placeholder-text-sm"
                  />
                  {errors.user_name && (
                    <p className="text-black text-left mt-1 text-sm">
                      {errors.user_name?.message}
                    </p>
                  )}
                </div>
                <div className="relative w-full mb-6">
                  <label
                    htmlFor={"email"}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {"Email"}
                  </label>
                  <input
                    type={"email"}
                    id={"email"}
                    {...register("email", { required: true })}
                    placeholder={"Enter your mail address"}
                    className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-yellow-500 focus:border-theme-yellow-500 placeholder-gray-500 placeholder-text-sm"
                  />
                  {errors.email && (
                    <p className="text-black text-left mt-1 text-sm">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="relative w-full mb-6">
                  <label
                    htmlFor={"password"}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {"Password"}
                  </label>
                  <input
                    type={passwordShow ? "text" : "password"}
                    id={"password"}
                    placeholder={"Enter password"}
                    {...register("password", { required: true })}
                    className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-yellow-500 focus:border-theme-yellow-500 placeholder-gray-500 placeholder-text-sm"
                  />
                  {errors.password && (
                    <p className="text-black text-left mt-1 text-sm">
                      {errors.password?.message}
                    </p>
                  )}
                  <div
                    className=" absolute right-4 top-10 cursor-pointer"
                    onClick={passwordToggle}
                  >
                    {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
                <div className="relative w-full mb-6">
                  <label
                    htmlFor={"confirm_password"}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {"Confirm Password"}
                  </label>
                  <input
                    type={passwordShow ? "text" : "password"}
                    id={"confirm_password"}
                    placeholder={"Enter password"}
                    {...register("verify_password", { required: true })}
                    className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-yellow-500 focus:border-theme-yellow-500 placeholder-gray-500 placeholder-text-sm"
                  />
                  {errors.verify_password && (
                    <p className="text-black text-left mt-1 text-sm">
                      {errors.verify_password?.message}
                    </p>
                  )}
                </div>
                <FWButton text="Create an account" type={"submit"} />
              </form>
              <div className="flex justify-end">
                <div className="flex gap-2">
                  <span className="text-sm">{`already have an account?`}</span>
                  <Link href={"/login"} className="text-sm text-blue-500">
                    Login here
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
