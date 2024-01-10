// module
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
// custom
import useBaseService from "./base-service"

const useCrudService = <EntityModel, EntityCreateModel, EntityUpdateModel>() => {
    const baseService: AxiosInstance = useBaseService();
    
    const Create = (
        apiUri: string,
        data: EntityCreateModel,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> => {
        return baseService.post(`/${apiUri}`, data, config);
    };

    const Get = (
        apiUri: string
    ): Promise<AxiosResponse<any>> => {
        return baseService.get(`/${apiUri}`);
    };

    return { Create, Get, baseService };
}

export default useCrudService;
