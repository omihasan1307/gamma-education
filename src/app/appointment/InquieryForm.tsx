/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContact } from "@/hooks/post/post.hook";
import { useWebsiteInfo } from "@/providers/websites.providers";
import { SubmitHandler, useForm } from "react-hook-form";

export type TInquiry = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  message: string;
};

const InquieryForm = () => {
  const websiteData = useWebsiteInfo();
  const { featured_guidelines: destinationPage }: any = websiteData?.websiteInfo || {};

  const { mutate: handleContact, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInquiry>();

  const onSubmit: SubmitHandler<TInquiry> = async (data: any) => {
    handleContact(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <div className="px-2">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8">
        {/* name */}
        <div className="w-full">
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.name ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm pt-1">{errors.name.message}</p>}
        </div>

        {/* email */}
        <div className="w-full">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Your Email"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.email ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm pt-1">{errors.email.message}</p>}
        </div>

        {/* phone */}
        <div className="w-full">
          <input
            {...register("phone", { required: "Mobile is required" })}
            type="number"
            placeholder="Your Mobile Number"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.phone ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm pt-1">{errors.phone.message}</p>}
        </div>

        {/* Destination */}
        <div>
          <select
            {...register("destination", { required: "Destination is required" })}
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 bg-white text-gray-700
      ${errors.destination ? "border-red-500" : "hover:border-baseColor"}`}
            defaultValue="">
            <option value="" disabled>
              Select your destination
            </option>

            {destinationPage?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          {errors.destination && <p className="text-red-500 text-sm pt-1">{errors.destination.message}</p>}
        </div>
        {/* Comment */}
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Comment"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.message ? "border-red-500" : "hover:border-baseColor"
            }`}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm pt-1">{errors.message.message}</p>}
        </div>
        <div className="flex justify-center ">
          <button type="submit" className="px-20 py-3 rounded-full  bg-gradient-custom text-white font-semibold hover:bg-opacity-90 duration-300">
            {isPending ? "Loading ..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquieryForm;
