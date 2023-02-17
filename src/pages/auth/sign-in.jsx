import { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../../../public/img/login/loginimg.svg";
import logo from "../../../public/img/loginlogo.svg";
import XIcon from "../../../public/img/XIcon.svg";
import hideIcon from "../../../public/img/hideIcon.svg";
import {
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const [authType, setAuthType] = useState("main");
  return (
    <div className=" flex h-full flex-row bg-white ">
      <div className=" my-10 ml-16 lg-max:hidden">
        <img src={logo} />
      </div>
      <div className=" my-[100px] flex flex-row items-center justify-center bg-white">
        <div className="mt-8 flex flex-row items-center justify-center">
          <div className="w-[360px] bg-white p-5">
            <p className=" mb-2 text-[40px] font-bold text-[#280559]">
              {authType === "main" ? "Login" : "Applicant Login"}
            </p>
            <p className=" mb-14 text-[16px] font-normal text-[#667085]">
              Please fill your detail to access your account.
            </p>

            <p className=" mb-2 text-[14px] font-[500] text-[#344054]">Email</p>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-[8px] border border-[#D0D5DD]"
                placeholder="Email"
              />
              <img
                className="cursor-pointer absolute right-4 bottom-2 h-[24px] w-[24px]"
                src={XIcon}
                alt="..."
              />
            </div>
            <p className=" mt-5 mb-2 text-[14px] font-[500] text-[#344054]">
              Password
            </p>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-[8px] border border-[#D0D5DD]"
                placeholder="Password"
              />
              <img
                className="cursor-pointer absolute right-4 bottom-2 h-[24px] w-[24px]"
                src={hideIcon}
                alt="..."
              />
            </div>
            <div className="my-5 flex flex-row items-center justify-between text-[14px] font-[300]">
              <Checkbox className=" text-[#344054] " label="Remember Me" />
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="red"
                  className="ml-1 text-[14px] font-[500]"
                >
                  Forgot Password?
                </Typography>
              </Link>
            </div>
            <Link to={ authType === "main" ? "dashboard" : "applicant" }>
              <Button
                className="bg-[#280559] text-[16px] font-[500] normal-case"
                fullWidth
              >
                Sign In
              </Button>
            </Link>
            <p
              className="text-normal cursor-pointer p-10 text-center text-[#280559] underline"
              onClick={() => {
                setAuthType((prev) => (prev === "main" ? "applicant" : "main"));
              }}
            >
              {authType === "main" ? "Applicant Login" : "Main Login"}
            </p>
          </div>
        </div>
        <div className="ml-[100px] w-[1058px] lg-max:hidden">
          <img src={loginimg} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
