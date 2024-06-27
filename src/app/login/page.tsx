"use client";
import FWButton from "@/components/buttons/FWButton";
import { loginFormType } from "@/theme/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { onLogin } from "@/controllers/api";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const passwordToggle = () => {
    setPasswordShow(!passwordShow);
  };
  const loginValidationSchema = z.object({
    email: z.string().email("Please provide valid email"),
    password: z.string().min(7),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>({
    resolver: zodResolver(loginValidationSchema),
  });
  const handleOnSubmit = async (data: loginFormType) => {
    const email = data?.email;
    const password = data?.password;
    const userData = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const registerResponse = await onLogin(userData);
      if (registerResponse) {
        setLoading(false);
        router.push("/home");
      }
    } catch (errors) {
      setLoading(false);
      //pending: error message will show on front
      console.log(errors);
    }
  };
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center px-4">
      <div className="sm:w-[30vw] min-h-[70vh]">
        <div>
          <h1 className="text-3xl font-bold my-4 text-center">Login</h1>
          <h1 className="text-3xl font-bold my-4 text-theme-yellow-600 text-center">
            Money Management App
          </h1>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
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
          <div className="flex justify-end">
            <Link href={"/"} className="text-sm text-blue-500">
              Forgot password ?
            </Link>
          </div>
          <FWButton type={"submit"} text="Login" loading={loading} />
        </form>
        <div className="flex justify-end">
          <div className="flex gap-2">
            <span className="text-sm">{`Don't have and account?`}</span>
            <Link href={"/register"} className="text-sm text-blue-500">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
