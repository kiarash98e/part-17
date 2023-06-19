import { API_ENDPOINTS } from '../api-endpoints'
import http from '../http'
import { useMutation } from 'react-query'
import { ICombo } from '../type';
import { chooseMaqte } from '../../redux/reducer/formRedux';


async function MajorForm(input: ICombo) {
  const { data } = await http.post(API_ENDPOINTS.Grade, input);
  console.log(data)
  return {
    major: data?.data?.major,
  };
}
export const useMajorMutation = (setError: any) => {
  
  return useMutation((input: ICombo) => MajorForm(input), {
    onSuccess: (data) => {
      chooseMaqte(data?.major?.name)
    },
    onError: (data) => {
      console.log(data)
      setError(data)
    },
  });
};
