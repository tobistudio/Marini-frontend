import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react/components/Button";
import plus from "../../../public/img/plus.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import StatusData from "@/data/status-props";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ENV } from "../../config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { SketchPicker } from "react-color";
export function AddProperty() {
  const [statusstate, setStatusstate] = useState(false);
  const [property, setProperty] = useState("");
  const [type, setType] = useState(0);
  const [loading, setIsLoading] = useState(false);
  const [color, setColor] = useState("#000000");

  const params = useParams();

  const handleSubmit = async (e) => {
    console.log("submit", e);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", property);
    formData.append("Color", color);
    formData.append("Uname", localStorage.name);
    formData.append("role", localStorage.access);
    // formData.append("username", "John");
    // formData.append("email", "john@example.com");
    // formData.append("Color", "#000");

    // formData.append("type", params.id);
    // console.log("Please, HELP ME", formData.entries());
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const apiCall = await axios[params.action == 2 ? "put" : "post"](
      `${ENV.baseUrl}/${params.id}/${params.action == 2 ? "edit" : "create"}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    setIsLoading(false);
    if (apiCall.data?.success) {
      let { message } = apiCall.data;
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
    }
    // navigate("university")
  };
  return (
    <>
      <form>
        <div
          className={`mb-10 flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
            statusstate ? "hidden" : ""
          }`}
        >
          <div className="my-5">
            <p className=" mb-2 text-4xl font-semibold text-[#280559]">
              Create {params.id}
            </p>
            <p className=" font text-base text-[#9898A3]">
              Create or edit {params.id}
            </p>
          </div>
          <div className="rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              {params.id} Details
            </p>

            <div className="mt-4 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  {params.id} Name
                </label>
                <input
                  onChange={(e) => setProperty(e.target.value)}
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder={params.id + " Name"}
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                {params.id} Color
              </label>
              <SketchPicker
                color={color}
                disableAlpha={true}
                onChange={(c) => setColor(c.hex)}
              />
            </div>
          </div>
          <NavLink>
            <Button
              className="rounded-[15px]  bg-[#280559]"
              type="submit"
              onClick={handleSubmit}
            >
              <div className="flex flex-row items-center justify-center">
                <img src={saveIcon} alt="..." />
                <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                  Save Changesg
                </p>
              </div>
            </Button>
          </NavLink>
        </div>
      </form>
    </>
  );
}

export default AddProperty;
