
// module
import Axios, { AxiosInstance } from 'axios'

const useBaseService = (): AxiosInstance => {
    const axiosInstance: AxiosInstance = Axios.create()
    axiosInstance.defaults.baseURL = 'https://front-end-task.bmbzr.ir/'
    axiosInstance.defaults.headers['Content-Type'] = 'application/json'

    axiosInstance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    )
    return axiosInstance
}

export default useBaseService
