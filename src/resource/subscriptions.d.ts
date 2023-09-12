import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
import type { NoraAPIGetSubscriptionsRequest, NoraAPIGetSubscriptionsResponse } from './types/subscriptions.types';
export declare class SubscriptionsAPI {
    readonly path = "/subscriptions";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get info about available subscriptions
     * @param data SubscriptionsAPIGetRequest
     * @param config AxiosConfig
     * @returns List of available subscriptions
     */
    get(data?: NoraAPIGetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetSubscriptionsResponse>;
}
