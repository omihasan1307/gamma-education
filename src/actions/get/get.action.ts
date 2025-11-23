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

export const getServiceList = async () => {
  try {
    const response = await axiosInstance.get(`/services/service/`);
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
// DESTINATION
// -------------------------

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

export const getEventList = async () => {
  try {
    const response = await axiosInstance.get(`/projects/project/`);
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
