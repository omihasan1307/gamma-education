/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContact } from "@/hooks/post/post.hook";
import { SubmitHandler, useForm } from "react-hook-form";

export type TContact = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

const ContactForm = () => {
    const { mutate: handleContact, isSuccess, isPending } = useContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContact>();

  const onSubmit : SubmitHandler<TContact> = (data: any) => {
    console.log(data);
    handleContact(data);

    if (isSuccess && !isPending) {
      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-2xl font-bold mb-8">YOUR DETAILS</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl mb-3">First Name</h2>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.name ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm pt-1">{errors.name.message}</p>
            )}
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
              className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.email ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-5">Subject</h2>
          <input
            {...register("subject", { required: "Subject is required" })}
            type="text"
            placeholder="Subject"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.subject ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm pt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <h2 className="text-xl my-5">Comments / Questions</h2>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.message ? "border-red-500" : "hover:border-baseColor"
            }`}
            rows={4}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm pt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg w-full bg-gradient-custom text-white font-semibold hover:bg-opacity-90 duration-300"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
