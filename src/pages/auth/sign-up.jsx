import { Link } from "react-router-dom";
import loginimg from "../../../public/img/login/loginimg.svg"
import logo from "../../../public/img/logo.svg"
import {
  Input,
  Button,
} from "@material-tailwind/react";

export function SignUp() {
  return (
    <div className="flex flex-row justify-center ">
      <div className=" top-0">
       <img src={logo}/> 
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        <div className="w-[341px] bg-white mr-24">
          <p className=" text-[#280559] text-[40px] font-bold mb-2">Sign up</p>
          <p className=" text-[#667085] text-[16px] font-normal mb-14">Please fill your detail to access your account.</p>
          <p className=" text-[#344054] text-[16px] font-normal mb-2">Name</p>
          <Input type="text" label="Name" size="lg" />
          <p className=" text-[#344054] text-[16px] font-normal mt-5 mb-2">Email</p>
          <Input type="email" label="Email" size="lg" />
          <p className=" text-[#344054] text-[16px] font-normal mt-5 mb-2">Password</p>
          <Input type="password" label="Password" size="lg" />
          
          <Button className="my-5" variant="gradient" fullWidth>
            Sign Up
          </Button>
          
          <Link to="/auth/sign-in">
            <div className="w-full flex flex-row justify-center my-3">
              <p className=" text-sm text-[#344054] font-medium mx-2">Already have an account? <span className=" text-[#0263FF]"> Sign in </span> </p>  
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[1058px]">
        <img src={loginimg}/>
      </div>
      
    </div>
  );
}

export default SignUp;