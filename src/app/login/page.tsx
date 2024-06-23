"use client";
import FWButton from "@/components/buttons/FWButton";
import InputComponent from "@/components/form/InputComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = () => {
    setLoading(true);
    router.push("/home");
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
        <InputComponent
          label="Email"
          placeholder="Enter your mail address"
          type="email"
          id="email"
        />
        <InputComponent
          label="Password"
          placeholder="Enter password"
          type="password"
          id="password"
        />
        <div className="flex justify-end">
          <Link href={"/"} className="text-sm text-blue-500">
            Forgot password ?
          </Link>
        </div>
        <FWButton
          type={"submit"}
          text="Login"
          handleClick={handleLogin}
          loading={loading}
        />
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
