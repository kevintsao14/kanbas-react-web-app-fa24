import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};
export const createEnrollment = async (courseId: string, userId : string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
  };
  
  export const deleteEnrollment = async (courseId: string, userId : string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
  };
  