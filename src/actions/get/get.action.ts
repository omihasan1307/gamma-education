/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/shared/config/axios.config";
import { ENV_CONFIG, FETCH_OPTIONS } from "@/shared/constant/app.constant";

// -------------------------
// PROJECTS
// -------------------------

export const getProjectList = async () => {
  try {
    const response = await axiosInstance.get(`/projects/project/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Projects");
  }
};

export const getSingleProject = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/projects/project/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project");
  }
};

// -------------------------
// SERVICES
// -------------------------
export const getCategoriesList = async () => {
  try {
    const response = await axiosInstance.get(`/base/categories/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Categories");
  }
};
export const getServiceList = async (search = "", category?: string) => {
  try {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    const response = await axiosInstance.get(`/services/service/?${params.toString()}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services");
  }
};

export const getSingleService = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/services/service/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Service");
  }
};

// -------------------------
// BLOGS
// -------------------------

export const getBlogList = async (search?: string) => {
  try {
    const response = await axiosInstance.get(`/blogs/blog/?search=${search || ""}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Blogs");
  }
};

export const getSingleBlog = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/blogs/blog/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Blog");
  }
};

// -------------------------
// DESTINATION
// -------------------------

export const getDestination = async (params: { q?: string; country?: string; study_level?: string }) => {
  try {
    const query = new URLSearchParams();
    if (params.q) query.set("search", params.q);
    if (params.country) query.set("country", params.country);
    if (params.study_level) query.set("study_level", params.study_level);

    const response = await axiosInstance.get(`/base/guidelines/?${query.toString()}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Destination");
  }
};

export const getSingleDestination = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/base/guidelines/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Destination");
  }
};

// -------------------------
// WEBSITE DATA (FETCH)
// -------------------------

export const getWebsite = async () => {
  try {
    const response = await fetch(`${ENV_CONFIG.baseApi}/base/website-data`, FETCH_OPTIONS);

    if (!response.ok) {
      throw new Error(`Failed to fetch website data. HTTP status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Website Fetch Error:", error);
    throw new Error(error?.message || "Failed to fetch website data");
  }
};

// -------------------------
// EVENTS
// -------------------------

export const getEventList = async (search = "", category = "") => {
  try {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    const response = await axiosInstance.get(`/projects/project/?${params.toString()}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Events");
  }
};

export const getSingleEvent = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/projects/project/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Event");
  }
};
