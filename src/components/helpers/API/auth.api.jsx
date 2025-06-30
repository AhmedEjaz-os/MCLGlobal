import axiosInstance from "./axios.config";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      ...data,
    });
    return response; // Return the response data
  } catch (error) {
    return {
      error: true,
      message: error,
    };
  }
};
