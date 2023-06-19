import { API_ENDPOINTS } from '../api-endpoints'
import http from '../http'
import { useQuery } from 'react-query'

async function getGrade() {
    const {data}:any= await http.get(API_ENDPOINTS.Grade);
    return data?.data?.grade
}

export const useGrade = () => {
    return useQuery([API_ENDPOINTS.Grade],
    getGrade)
}