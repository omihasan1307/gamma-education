/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContact } from "@/hooks/post/post.hook";
import { SubmitHandler, useForm } from "react-hook-form";

export type TInquiry = {
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const InquieryForm = () => {
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
        <div className="w-full">
          <input
            {...register("phone", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.phone ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm pt-1">{errors.phone.message}</p>}
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
            {...register("subject", { required: "subject is required" })}
            type="text"
            placeholder="Your Project subject"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.subject ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.subject && <p className="text-red-500 text-sm pt-1">{errors.subject.message}</p>}
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
            {isPending ? "Loading ..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquieryForm;
