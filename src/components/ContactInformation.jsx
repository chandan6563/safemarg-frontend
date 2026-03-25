"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactInformation({ contactInfo, setContactInfo, error, setError }) {
  const [contactInformation, setContactInformation] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",
    mob: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const pathname = usePathname();

  // Load from session storage
  useEffect(() => {
    const storedPayload = sessionStorage.getItem("bookingPayload");
    if (storedPayload) {
      try {
        const payload = JSON.parse(storedPayload);
        if (payload.contactInfo) {
          setContactInformation({
            ...payload.contactInfo,
            country: payload.contactInfo.country || "India",
          });
          if (setContactInfo) setContactInfo(payload.contactInfo);
        }
      } catch (err) {
        console.error("Error parsing booking payload:", err);
      }
    }
  }, [setContactInfo]);

  // Sync with parent and validate
  useEffect(() => {
    if (setContactInfo) setContactInfo(contactInformation);
    validateFields();
  }, [contactInformation]);

  const validateFields = () => {
    const errors = {};
    ["fname", "lname", "email", "mob", "address", "state", "city", "pincode"].forEach((field) => {
      if (!contactInformation[field]) errors[field] = "This field is required";
    });

    if (contactInformation.email && !/^\S+@\S+\.\S+$/.test(contactInformation.email)) {
      errors.email = "Invalid email format";
    }

    if (contactInformation.mob && !/^\d{10}$/.test(contactInformation.mob)) {
      errors.mob = "Invalid mobile number";
    }

    setFieldErrors(errors);
    setError(Object.keys(errors).length > 0 ? "Please fix the errors above" : "");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContactInformation((prev) => ({ ...prev, [name]: value }));

    const storedPayload = sessionStorage.getItem("bookingPayload");
    let payload = storedPayload ? JSON.parse(storedPayload) : {};
    payload.contactInfo = { ...contactInformation, [name]: value };
    sessionStorage.setItem("bookingPayload", JSON.stringify(payload));
  };

  return (
    <div className="rounded-md border border-gray-200 shadow-xl w-full">
      <div className="bg-[#154880] rounded-t-md pl-3 py-3 flex items-center w-full">
        <div className="text-white ml-2 text-xl font-medium">Contact Information</div>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-5 p-5">
        {[
          { label: "First Name", name: "fname", required: true },
          { label: "Last Name", name: "lname", required: true },
          { label: "Email ID", name: "email", type: "email", required: true },
          { label: "Address", name: "address", required: true },
          { label: "Country", name: "country", required: true },
          { label: "State", name: "state", required: true },
          { label: "City", name: "city", required: true },
          { label: "Pincode", name: "pincode", required: true },
          { label: "Mobile Number", name: "mob", type: "tel", required: true },
        ].map((field) => (
          <div className="flex flex-col" key={field.name}>
            <label htmlFor={field.name} className="font-medium text-[15px] flex items-center gap-1">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={contactInformation[field.name]}
              placeholder={`Enter ${field.label}`}
              className={`bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2 ${
                fieldErrors[field.name] ? "border border-red-500" : ""
              }`}
              onChange={(e) => {
                let val = e.target.value;
                if (field.name === "mob") val = val.replace(/\D/g, "").slice(0, 10);
                changeHandler({ target: { name: field.name, value: val } });
              }}
              disabled={pathname === "/booking-details"}
            />
            {fieldErrors[field.name] && (
              <span className="text-red-500 text-sm mt-1">{fieldErrors[field.name]}</span>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}


//   return (
//     <div className=" rounded-md border border-gray-200 shadow-xl w-full ">
//       <div className="bg-[#154880] rounded-t-md pl-3 py-3 flex items-center w-full">
//         {/* <Image src={Traveller} alt="discount-offers" width={30} /> */}
//         <div className="text-white ml-2 text-xl font-medium">
//           Contact Information
//         </div>
//       </div>
//       {pathname !== "/booking-details" && (
//         <form className="grid  grid-cols-3 p-5 gap-y-5 gap-x-8">
//           <div className="flex flex-col">
//             <label htmlFor="fname" className="font-medium text-[15px]">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="fname"
//               name="fname"
//               placeholder="Enter/Middle Name"
//               value={contactInformation.fname}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="lname" className="font-medium text-[15px]">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lname"
//               name="lname"
//               placeholder="Enter last name"
//               value={contactInformation.lname}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               onChange={changeHandler}
//             />
//           </div>

//           <div className="flex flex-col ">
//             <label htmlFor="email" className="font-medium text-[15px]">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.email}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="address" className="font-medium text-[15px]">
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Enter your address"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.address}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="state" className="font-medium text-[15px]">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               placeholder="Enter your country"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.country}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="state" className="font-medium text-[15px]">
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               placeholder="Enter your state"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.state}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="city" className="font-medium text-[15px]">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               placeholder="Enter your city"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.city}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="pincode" className="font-medium text-[15px]">
//               Pincode
//             </label>
//             <input
//               type="text"
//               id="pincode"
//               name="pincode"
//               placeholder="Enter your Pincode"
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.pincode}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="mob" className="font-medium text-[15px]">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mob"
//               name="mob"
//               placeholder="Enter your number"
//               value={contactInformation.mob}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               onChange={changeHandler}
//             />
//           </div>
//           <div></div>
//         </form>
//       )}

//       {
//         <form className="grid  grid-cols-3 p-5 gap-y-5 gap-x-8">
//           <div className="flex flex-col">
//             <label htmlFor="fname" className="font-medium text-[15px]">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="fname"
//               disabled={true}
//               value={contactInformation.fname}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="lname" className="font-medium text-[15px]">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lname"
//               disabled={true}
//               value={contactInformation.lname}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               onChange={changeHandler}
//             />
//           </div>

//           <div className="flex flex-col ">
//             <label htmlFor="email" className="font-medium text-[15px]">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.email}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="address" className="font-medium text-[15px]">
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.address}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="state" className="font-medium text-[15px]">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.country}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="state" className="font-medium text-[15px]">
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.state}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="city" className="font-medium text-[15px]">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.city}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <label htmlFor="pincode" className="font-medium text-[15px]">
//               Pincode
//             </label>
//             <input
//               type="text"
//               id="pincode"
//               disabled={true}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//               value={contactInformation.pincode}
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="mob" className="font-medium text-[15px]">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mob"
//               disabled={true}
//               value={contactInformation.mob}
//               className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
//             />
//           </div>
//           <div></div>
//         </form>
//       }
//     </div>
//   );
// }