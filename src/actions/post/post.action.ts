/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import axiosInstance from "@/lib/AxiosInstance";

export const inquiryToDb = async (data: any) => {
    try {
      const res = await axiosInstance.post("/inquiry", data);
      return res?.data;
    } catch (error: any) {
      throw new Error(
        `Inquiry Error : ${error?.response?.data?.error?.message}`
      );
    }
  };
export const contactToDb = async (data: any) => {
    try {
      const res = await axiosInstance.post("/contact", data);
      return res?.data;
    } catch (error: any) {
      throw new Error(
        `Contact Error : ${error?.response?.data?.error?.message}`
      );
    }
  };