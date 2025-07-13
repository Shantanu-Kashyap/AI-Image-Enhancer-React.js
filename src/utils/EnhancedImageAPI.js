import axios from 'axios';

const API_KEY = "wxju1lxlafz95c0ox";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedImageUrl = await pollForEnhancedImage(taskId);
    return enhancedImageUrl;
  } catch (error) {
    console.error("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_KEY,
    },
  });

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  if (!data?.data?.image) {
    throw new Error("Failed to fetch enhanced image!");
  }

  return data.data.image;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  try {
    const url = await fetchEnhancedImage(taskId);
    return url;
  } catch (error) {
    if (retries >= 10) {
      throw new Error("Max retries reached. Try again later.");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }
};
