/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useInquiry } from "@/hooks/post/post.hook";
import { SubmitHandler, useForm } from "react-hook-form";

export type TInquiry = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const InquieryForm = () => {
  const { mutate: handleInquiry, isSuccess, isPending } = useInquiry();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInquiry>();

  const onSubmit: SubmitHandler<TInquiry> = async (data: any) => {
    console.log(data);

    handleInquiry(data);

    if (isSuccess && !isPending) {
      reset();
    }
  };
  return (
    <div className="px-2">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8">
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
        <div>
          <input
            {...register("budget", { required: "budget is required" })}
            type="text"
            placeholder="Your Project Budget"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.budget ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.budget && <p className="text-red-500 text-sm pt-1">{errors.budget.message}</p>}
        </div>
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Details Project"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.message ? "border-red-500" : "hover:border-baseColor"
            }`}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm pt-1">{errors.message.message}</p>}
        </div>
        <div className="flex justify-center ">
          <button type="submit" className="px-20 py-3 rounded-full  bg-gradient-custom text-white font-semibold hover:bg-opacity-90 duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquieryForm;
