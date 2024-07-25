import { AxiosRequestConfig } from 'axios';
import { ContextAPI } from './types';
import { NoraAPIGetItemPaidContentRequest, NoraAPIGetItemPaidContentResponse, NoraAPIGetPaidContentRequest, NoraAPIGetPaidContentResponse } from './types/paid-content.types';
export declare class PaidContentAPI {
    readonly path = "/content";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    withUrlVersion(config: AxiosRequestConfig | undefined, version?: string): AxiosRequestConfig;
    /**
     * This method returns paid content for further purchase.
     * Can be filtered by geo block and already purchased content if subscriber's account number and last name is send in the auth request.
     * @param data NoraAPIGetPaidContentRequest
     * @param config AxiosRequestConfig
     * @returns List of available content
     */
    get(data?: NoraAPIGetPaidContentRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetPaidContentResponse>;
    /**
     * This method returns paid content item for further purchase.
     * Can be filtered by geo block and already purchased content if subscriber's account number and last name is send in the auth request.
     * @param data NoraAPIGetItemPaidContentRequest
     * @param config AxiosRequestConfig
     * @returns List of available content
     */
    getItem(data?: NoraAPIGetItemPaidContentRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetItemPaidContentResponse>;
}
