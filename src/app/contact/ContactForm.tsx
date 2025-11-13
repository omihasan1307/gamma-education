/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TContact } from "@/Types";
import { useContact } from "@/hooks/post/post.hook";
import { BD_PHONES_REGEX } from "@/shared/constant/regex.constant";
import { SubmitHandler, useForm } from "react-hook-form";

const ContactForm = () => {
  const { mutate: handleContact, isPending } = useContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContact>({ mode: "onChange" });
  const onSubmit: SubmitHandler<TContact> = (data: any) => {
    handleContact(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
        <h1 className="text-2xl font-bold mb-8">YOUR DETAILS</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl mb-3">Phone</h2>
            <input
              {...register("phone", { required: "phone is required", pattern: BD_PHONES_REGEX })}
              type="tel"
              placeholder="Phone Number"
              className={`dark:bg-black px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.phone ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm pt-1">{errors.phone.message}</p>}
            {errors.phone?.type === "pattern" && <p className="text-red-500 text-sm pt-1">Enter Valid Phone Number</p>}
          </div>
          <div>
            <h2 className="text-xl mb-3">Email Address</h2>
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
              className={`px-4 py-4 dark:bg-black rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.email ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm pt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-5">Subject</h2>
          <input
            {...register("subject", { required: "Subject is required" })}
            type="text"
            placeholder="Subject"
            className={`dark:bg-black px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.subject ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.subject && <p className="text-red-500 text-sm pt-1">{errors.subject.message}</p>}
        </div>
        <div>
          <h2 className="text-xl my-5">Comments / Questions</h2>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className={`dark:bg-black px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.message ? "border-red-500" : "hover:border-baseColor"
            }`}
            rows={4}></textarea>
          {errors.message && <p className="text-red-500 text-sm pt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" className="px-6 py-3 rounded-lg w-full bg-gradient-custom text-white font-semibold hover:bg-opacity-90 duration-300">
          {isPending ? "Loading ..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
