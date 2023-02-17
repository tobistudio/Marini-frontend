import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";
import saveIcon from "../../../public/img/saveIcon.svg";
import print from "../../../public/img/print.svg";
// import AddField from "./AddField";
import PreviewInvoice from "./PreviewInvoice";
import AddField from "./Addfield";
  


export function CreateInvoice() {
  const [openInvoiceAddModal, setOpenInvoiceAddModal] = useState(false);
  const [openBillingAddModal, setOpenBillingAddModal] = useState(false);
  const [openInvoiceListAddModal, setOpenInvoiceListAddModal] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] font-display">
      <div className="my-10">
        <div className="flex justify-between gap-4 items-center mr-8">
        <p className=" text-4xl font-semibold text-[#280559]">
          Create Invoice
        </p>
        <div className="hidden md:flex justify-center items-center gap-6">
          <div>
          <Button className="rounded-[15px]  bg-[#280559]" onClick={() => setOpenPreviewModal(true)}>
            <div className="flex items-center justify-center">
              <img src={print} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
              Print / Preview
              </p>
            </div>
          </Button>
          <PreviewInvoice open={openPreviewModal} close={() => setOpenPreviewModal(false)} />
          </div>
        <NavLink to="commission">
          <Button className="rounded-[15px]  bg-[#280559]">
            <div className="flex flex-row items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
        </div>
        </div>
        <p className=" font text-base text-[#9898A3]">
          Create or edit invoice
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center md:hidden w-full pr-8 mt-6">
        <div>
          <Button className="rounded-[15px] mr-auto bg-[#280559]" onClick={() => setOpenPreviewModal(true)}>
            <div className="flex items-center justify-center">
              <img src={print} alt="..." />
              <p className="px-[11px] text-sm font-medium normal-case text-white p-1">
              Print / Preview
              </p>
            </div>
          </Button>
          <PreviewInvoice open={openPreviewModal} close={() => setOpenPreviewModal(false)} />
          </div>
        <NavLink to="commission">
          <Button className="rounded-[15px]  bg-[#280559]">
            <div className="flex items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-sm font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
        </div>
        
      </div>
      <div className="mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
        Invoice Mailing Info
        </p>
      
        <form>
    <div className="grid gap-6 mt-12 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Address (line 1)</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Address line 1" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Address (line 2)</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Address line 2" required/>
        </div>
        <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Country</label>
        <select className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Select Country</option>
        </select>
    </div>
    <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Phone Number</label>
            <input type="tel" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="+91 0123 456 789" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Email Address</label>
            <input type="email" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#333333]">Add Field</label>
          <button onClick={() => setOpenInvoiceAddModal(true)} type="button" className="text-[#BEBFC3] bg-[#F8F9FB] rounded-xl border-2 border-[#CBD2DC80] font-medium block w-full p-2.5">Click to add more field</button>
          <AddField open={openInvoiceAddModal} close={() => setOpenInvoiceAddModal(false)} />
        </div>
    </div>
</form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
        Bill To
        </p>
      
        <form>
        <div className="grid gap-6 mt-12 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Address (line 1)</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Address line 1" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Address (line 2)</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Address line 2" required/>
        </div>
        <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Country</label>
        <select className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Select Country</option>
        </select>
    </div>
    <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Phone Number</label>
            <input type="tel" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="+91 0123 456 789" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Email Address</label>
            <input type="email" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#333333]">Add Field</label>
          <button onClick={() => setOpenBillingAddModal(true)} type="button" className="text-[#BEBFC3] bg-[#F8F9FB] rounded-xl border-2 border-[#CBD2DC80] font-medium block w-full p-2.5">Click to add more field</button>
          <AddField open={openBillingAddModal} close={() => setOpenBillingAddModal(false)} />
        </div>
    </div>
</form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">Invoice Item List</p>
    
        <form>
    <div className="grid gap-6 mt-12 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Item Name</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Item Name" required/>
        </div>
        <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Item Quantity</label>
        <input type="number" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="1" required/>
    </div>
    <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Price</label>
        <div className="relative">
    <span className="absolute flex items-center p-3 left-0 top-0 h-full text-base font-medium text-[#333] bg-[#E5E8ED] rounded-xl uppercase">usd:</span>
    <input type="text" className="pl-16 placeholder:text-[#BEBFC3] h-full rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="0.00" required/>
</div>
        </div>
    
    </div>
    <div className="grid gap-6 mb-6 grid-cols-1">
    <div>
          <label className="block mb-2 text-sm font-semibold text-[#333333]">Add Field</label>
          <button onClick={() => setOpenInvoiceListAddModal(true)} type="button" className="text-[#BEBFC3] bg-[#F8F9FB] rounded-xl border-2 border-[#CBD2DC80] font-medium block w-full p-2.5">Click to add more field</button>
          <AddField open={openInvoiceListAddModal} close={() => setOpenInvoiceListAddModal(false)} />
        </div>
    </div>
</form>
      </div>
      
      <NavLink to="commission">
          <Button className="rounded-[15px]  bg-[#280559]">
            <div className="flex flex-row items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
    </div>
  );
}

export default CreateInvoice;

