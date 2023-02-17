import React from "react";
import {
  Card,
  CardHeader,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import saveIcon from "../../../public/img/saveIcon.svg"
import { NavLink } from "react-router-dom";


export function Create() {

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] px-14 my-20 flex flex-col gap-8">
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Create or edit Currency</h3>
                <p className="text-[#9898A3] text-lg text-left">Create or edit Currency</p>
            </div>
            <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </div>
        <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4 flex-col w-full justify-between items-center"
        >
            <div className="mb-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Currency Details</h3>
            </div>  
            <div className="px-4 grid grid-cols-1 laptop:grid-cols-3 gap-3">
                <div className="mb-10">
                    <p className="mb-4 font-medium text-base">Currency Name (ISO code)</p>
                    <div className=" h-[57px]">
                        <Select label="USD">
                            <Option>USD</Option>
                            <Option>COIN</Option>
                            <Option>BTN</Option>
                        </Select>
                    </div>
                </div>
                <div className="h-[57px] mb-10">
                    <p className="mb-4 font-medium text-base">Currency Name</p>
                    <div className="">
                        <Input label="US dollar" />
                    </div>
                </div>
                <div className=" h-[57px] mb-10">
                    <p className="mb-4 font-medium text-base">Exchange Rate</p>
                    <div className="">
                        <Input label="1" />
                    </div>
                </div>
            </div>
            <div className="px-4 flex mb-16">
                <div className="h-[57px]">
                    <p className="mb-4 font-semibold text-lg">Status</p>
                    <Select label="Default">
                        <Option>USD</Option>
                        <Option>COIN</Option>
                        <Option>BTN</Option>
                    </Select>
                </div>
            </div>
            <div className="px-4 flex">
                <div className="w-[420px] h-[57px] mb-3">
                    <p className="mb-4 font-medium text-base">Add Field</p>
                    <div className="">
                        <Input disabled label="Click to add more field" className=" outline-none"/>
                    </div>
                </div>
            </div>
        </CardHeader>
        </Card>
        <NavLink to ='Currency'>
            <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </NavLink>
    </div>
  );
}

export default Create;
