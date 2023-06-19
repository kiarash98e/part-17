import { API_ENDPOINTS } from '../api-endpoints'
import http from '../http'
import { useQuery } from 'react-query'

async function getMajor() {
    const {data}:any= await http.get(API_ENDPOINTS.Major);
    return data?.data?.major
}

export const useMajor = () => {
    return useQuery([API_ENDPOINTS.Major],
    getMajor)
}