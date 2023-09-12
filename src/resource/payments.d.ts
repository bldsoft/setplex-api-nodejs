import type { PaymentsAPIDoRequest, PaymentsAPIDoResponse, PaymentsAPIDoSingleRequest, PaymentsAPIDoSingleResponse, PaymentsAPICalculateRequest, PaymentsAPICalculateResponse, PaymentsAPICalculateContentSetsRequest, PaymentsAPICalculateContentSetsResponse, PaymentsAPIPayContentSetsRequest, PaymentsAPIPayContentSetsResponse } from './types/payments.types';
import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
export declare class PaymentsAPI {
    readonly path = "/payments";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Creating payment for subscriber
     * @param data Payment data
     * @param config AxiosConfiguration
     */
    payReSubscription(data: PaymentsAPIDoRequest, config?: AxiosRequestConfig): Promise<PaymentsAPIDoResponse>;
    /**
     * Creating subscriber, credit card and make payment for subscriber
     * @param data Full data about subscriber, credit card and payment
     * @param config AxiosConfiguration
     */
    paySubscription(data: PaymentsAPIDoSingleRequest, config?: AxiosRequestConfig): Promise<PaymentsAPIDoSingleResponse>;
    /**
     * Calculates amount of subscriber's payment
     * @param data Required info for calculation
     * @param config AxiosConfiguration
     * @returns Calculation for needed subscription
     */
    calculate(data: PaymentsAPICalculateRequest, config?: AxiosRequestConfig): Promise<PaymentsAPICalculateResponse>;
    /**
     * Calculate Content Set Addon Prices
     * @param data Required info for calculation
     * @param config AxiosConfiguration
     * @returns Calculation for needed subscription
     */
    calculateContentSets(data: PaymentsAPICalculateContentSetsRequest, config?: AxiosRequestConfig): Promise<PaymentsAPICalculateContentSetsResponse>;
    /**
     * Pay Content Set Addons
     * @param data Required info for calculation
     * @param config AxiosConfiguration
     * @returns Calculation for needed subscription
     */
    payContentSets(data: PaymentsAPIPayContentSetsRequest, config?: AxiosRequestConfig): Promise<PaymentsAPIPayContentSetsResponse>;
}
