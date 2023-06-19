import { API_ENDPOINTS } from '../api-endpoints'
import http from '../http'
import { useMutation } from 'react-query'
import { ICombo } from '../type';
import { chooseSaleTahsili } from '../../redux/reducer/formRedux';


async function GradeForm(input: ICombo) {
  const { data } = await http.post(API_ENDPOINTS.Grade, input);
  console.log(data)
  return {
    grade: data?.data?.grade,
  };
}
export const useGradeMutation = (setError: any) => {
  
  return useMutation((input: ICombo) => GradeForm(input), {
    onSuccess: (data) => {
      chooseSaleTahsili(data?.grade?.name)
    },
    onError: (data) => {
      console.log(data)
      setError(data)
    },
  });
};
