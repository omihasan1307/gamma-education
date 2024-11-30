/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const getProjectList = async () => {
  try {
    const response = await axiosInstance.get(`/projects/project/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Projects item");
  }
};

export const getSingleProject = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/projects/project/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};
export const getServiceList = async () => {
  try {
    const response = await axiosInstance.get(`/services/service/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services item");
  }
};

export const getSingleService = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/services/service/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services item");
  }
};

export const getWebsite = async () => {
  try {
    const response = await axiosInstance.get(`/base/website-data`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services item");
  }
};

export const getBlogList = async () => {
  try {
    const response = await axiosInstance.get(`/blogs/blog/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Blog item");
  }
};

export const getSingleBlog = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/blogs/blog/${id}/`);
    if (response?.data) {
      return response.data;
    } else {
      throw new Error("Failed to fetch Single Project item");
    }
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};
