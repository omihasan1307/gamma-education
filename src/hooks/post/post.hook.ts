/* eslint-disable @typescript-eslint/no-explicit-any */
import { contactToDb, inquiryToDb } from "@/actions/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useInquiry = () => {
  return useMutation({
    mutationKey: ["INQUIRY"],
    mutationFn: async (data: any) => await inquiryToDb(data),
    onSuccess: (data) => {
      toast.success(` ${data?.data}! appointment added successfully`);
    },
    onError: (data) => {
      toast.error(data?.message || "appointment added Failed");
    },
  });
};

export const useContact = () => {
  return useMutation({
    mutationKey: ["CONTACT"],
    mutationFn: async (data: any) => await contactToDb(data),
    onSuccess: (data) => {
      toast.success(` ${data?.data?.detail} `);
    },
    onError: (data: any) => {
      toast.error(data?.details?.error || "Contact added Failed");
    },
  });
};
