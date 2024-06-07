import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
import { NoraAPIAutopayContentRentRequest, NoraAPIAutopayContentRentResponse, NoraAPIGetContentRentRequest, NoraAPIGetContentRentResponse } from './types/content-rent';
export declare class ContentRentProlongationAPI {
    readonly path = "/content-rent-prolongations";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get content allowed for auto payments.
     * @param data NoraAPIGetContentRentRequest
     * @param config AxiosConfig
     * @returns List of available subscriptions
     */
    get(data?: NoraAPIGetContentRentRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetContentRentResponse>;
    /**
     * Get all available subscriptions with addons combined by subscription plans.
     * @param data
     * @param config
     */
    getPlans(data?: NoraAPIAutopayContentRentRequest, config?: AxiosRequestConfig): Promise<NoraAPIAutopayContentRentResponse>;
}
