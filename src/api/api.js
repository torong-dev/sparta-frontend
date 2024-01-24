import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 강의 데이터 가져오는 API
export const fetchCourseData = async () => {
  try {
    const response = await instance.get("/api");
    return response.data;
  } catch (error) {}
};
