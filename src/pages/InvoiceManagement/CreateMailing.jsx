import React from "react";
import { NavLink } from "react-router-dom";
import { 
    Select,
    Option,
    Button,
    Input,
} from "@material-tailwind/react";  
import saveIcon from "../../../public/img/saveIcon.svg"

export function CreateMailing() {
   
    return (
        <div className="mt-[30px] w-full bg-[#E8E9EB]">
            <div className="grid  md:grid-cols-2 justify-between my-10">
                <div>
                    <p className=" text-4xl font-semibold text-[#280559]">Create Invoice</p>
                    <p className=" text-base font text-[#9898A3]">Create or edit invoice</p>
                </div>
                <div className="flex gap-6">
                    <NavLink to="commission">
                        <Button className="bg-[#280559]  rounded-[15px]">
                            <div className="flex flex-row justify-center items-center px-[10px] py-[10px]">
                                <img src={saveIcon} alt='...'/>
                                <p className="text-white text-base font-medium px-[11px] normal-case ">Print / Preview</p>
                            </div>
                        </Button>
                    </NavLink>
                    <NavLink to="commission">
                        <Button className="bg-[#280559]  rounded-[15px]">
                            <div className="flex flex-row justify-center items-center px-[10px] py-[10px]">
                                <img src={saveIcon} alt='...'/>
                                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                            </div>
                        </Button>
                    </NavLink>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Invoice Mailing Infoo</p>
                
                <div className="grid grid-cols-1  laptop:grid-cols-2 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">Address (line 1)</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Address (line 2)</p>
                        <Input className="h-[57px]" label="Address"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="Select Country">
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone</p>
                            <Select  className="h-[57px]" label="Select Country">
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                            </Select>
                    </div>
                    
                    <div>
                        <p className=" text-base font-semibold my-4">Email Address</p>
                        <Input  className="h-[57px]" label="Email"></Input>
                    </div>
                    
                    <div >
                        <p className=" text-base font-semibold my-4">Add Field</p>
                        <button data-modal-target="defaultModal1" data-modal-toggle="defaultModal" className="w-full block text-[#BEBFC3] justify-center" type="button">
                        Click to add more field
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Bill To</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">Address (line 1)</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Address (line 2)</p>
                        <Input className="h-[57px]" label="Address"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="Select Country">
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone</p>
                            <Select  className="h-[57px]" label="Select Country">
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                                <Option>Country</Option>
                            </Select>
                    </div>
                    
                    <div>
                        <p className=" text-base font-semibold my-4">Email Address</p>
                        <Input  className="h-[57px]" label="Email"></Input>
                    </div>
                    
                    <div >
                        <p className=" text-base font-semibold my-4">Add Field</p>
                        <button data-modal-target="defaultModall" data-modal-toggle="defaultModal" className="w-full block text-[#BEBFC3] justify-center" type="button">
                        Click to add more field
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Invoice Item List</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">Item Name</p>
                        <Input className="h-[57px]" label="Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Item Quantity</p>
                        <Input className="h-[57px]" label="Quantity"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Price</p>
                        <Input  className="h-[57px]" label="USD"></Input>
                    </div>
                    
                </div>
                    <div className="my-10" >
                        <p className=" text-base font-semibold my-4">Add row</p>
                        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="w-full block text-[#BEBFC3] justify-center" type="button">
                        Click to add more field
                        </button>   
                    </div>
            </div>

            <NavLink to="commission">
                <Button className="bg-[#280559]  rounded-[15px] mt-5">
                    <div className="flex flex-row justify-center items-center px-[33px] py-[10px]">
                        <img src={saveIcon} alt='...'/>
                        <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                    </div>
                </Button>
            </NavLink>
            
        </div>
    )
        
}

export default CreateMailing;