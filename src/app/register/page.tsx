import FWButton from "@/components/buttons/FWButton";
import InputComponent from "@/components/form/InputComponent";
import Link from "next/link";

const Register = () => {
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
          <InputComponent
            label="Name"
            placeholder="name"
            type="text"
            id="text"
          />
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
          <InputComponent
            label="Confirm password"
            placeholder="Enter password"
            type="password"
            id="confirm_password"
          />
          <FWButton text="Create an account" />
          <div className="flex justify-end">
            <div className="flex gap-2">
              <span className="text-sm">{`already have an account?`}</span>
              <Link href={"/login"} className="text-sm text-blue-500">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
