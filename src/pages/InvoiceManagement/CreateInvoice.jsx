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
        <div className="mr-8 flex items-center justify-between gap-4">
          <p className=" text-4xl font-semibold text-[#280559]">
            Create Invoice
          </p>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <div>
              <Button
                className="rounded-[15px]  bg-[#280559]"
                onClick={() => setOpenPreviewModal(true)}
              >
                <div className="flex items-center justify-center">
                  <img src={print} alt="..." />
                  <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                    Print / Preview
                  </p>
                </div>
              </Button>
              <PreviewInvoice
                open={openPreviewModal}
                close={() => setOpenPreviewModal(false)}
              />
            </div>
            <NavLink to="commission">
              <Button className="rounded-[15px]  bg-[#280559]">
                <div className="flex flex-row items-center justify-center">
                  <img src={saveIcon} alt="..." />
                  <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                    Save Changes
                  </p>
                </div>
              </Button>
            </NavLink>
          </div>
        </div>
        <p className=" font text-base text-[#9898A3]">Create or edit invoice</p>
        <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-6 pr-8 md:hidden">
          <div>
            <Button
              className="mr-auto rounded-[15px] bg-[#280559]"
              onClick={() => setOpenPreviewModal(true)}
            >
              <div className="flex items-center justify-center">
                <img src={print} alt="..." />
                <p className="p-1 px-[11px] text-sm font-medium normal-case text-white">
                  Print / Preview
                </p>
              </div>
            </Button>
            <PreviewInvoice
              open={openPreviewModal}
              close={() => setOpenPreviewModal(false)}
            />
          </div>
          <NavLink to="commission">
            <Button className="rounded-[15px]  bg-[#280559]">
              <div className="flex items-center justify-center">
                <img src={saveIcon} alt="..." />
                <p className="p-1 px-[11px] text-sm font-medium normal-case text-white">
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
          <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Address (line 1)
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address line 1"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Address (line 2)
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address line 2"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Country
              </label>
              <select className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500">
                <option selected>Select Country</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Phone Number
              </label>
              <input
                type="tel"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="+91 0123 456 789"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Add Field
              </label>
              <button
                onClick={() => setOpenInvoiceAddModal(true)}
                type="button"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
              >
                Click to add more field
              </button>
              <AddField
                open={openInvoiceAddModal}
                close={() => setOpenInvoiceAddModal(false)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">Bill To</p>

        <form>
          <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Address (line 1)
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address line 1"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Address (line 2)
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Address line 2"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Country
              </label>
              <select className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500">
                <option selected>Select Country</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Phone Number
              </label>
              <input
                type="tel"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="+91 0123 456 789"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Add Field
              </label>
              <button
                onClick={() => setOpenBillingAddModal(true)}
                type="button"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
              >
                Click to add more field
              </button>
              <AddField
                open={openBillingAddModal}
                close={() => setOpenBillingAddModal(false)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
          Invoice Item List
        </p>

        <form>
          <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Item Name
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Item Name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Item Quantity
              </label>
              <input
                type="number"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="1"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-0 top-0 flex h-full items-center rounded-xl bg-[#E5E8ED] p-3 text-base font-medium uppercase text-[#333]">
                  usd:
                </span>
                <input
                  type="text"
                  className="block h-full w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 pl-16 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6 grid grid-cols-1 gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Add Field
              </label>
              <button
                onClick={() => setOpenInvoiceListAddModal(true)}
                type="button"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
              >
                Click to add more field
              </button>
              <AddField
                open={openInvoiceListAddModal}
                close={() => setOpenInvoiceListAddModal(false)}
              />
            </div>
          </div>
        </form>
      </div>

      <NavLink to="commission">
        <Button className="rounded-[15px]  bg-[#280559]">
          <div className="flex flex-row items-center justify-center">
            <img src={saveIcon} alt="..." />
            <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
              Save Changes
            </p>
          </div>
        </Button>
      </NavLink>
    </div>
  );
}

export default CreateInvoice;
