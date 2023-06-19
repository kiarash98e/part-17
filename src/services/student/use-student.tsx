import { API_ENDPOINTS } from '../api-endpoints'
import http from '../http'
import { useMutation } from 'react-query'
import { IStudent } from '../type';


async function StudentForm(input: IStudent) {
  const { data } = await http.post(API_ENDPOINTS.Student, input);
  return {
    ...data,
    input,
  };
}
export const useStudentMutation = () => {
  
  return useMutation((input: IStudent) => StudentForm(input), {
    onSuccess: (data) => {
      localStorage.setItem(
        "authData",
        JSON.stringify({
          ...data.input
        })
      );
    },
    onError: (data) => {
      console.log(data)
    },
  });
};
