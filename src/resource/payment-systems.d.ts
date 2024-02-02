import type { ContextAPI } from './types';
import type { AxiosRequestConfig } from 'axios';
import type { NoraAPIAvailablePaymentSystemsRequest, NoraAPIAvailablePaymentSystemsResponse, NoraAPIPaymentSystemsAddFlowRequest, NoraAPIPaymentSystemsAddFlowResponse, NoraAPIPaymentSystemsCheckResultRequest, NoraAPIPaymentSystemsCheckResultResponse, NoraAPIPaymentSystemsOptionsRequest, NoraAPIPaymentSystemsOptionsResponse } from './types/payment-systems.types';
export declare class PaymentSystemsAPI {
    readonly path = "/payment-form";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get available payment systems
     * @description Retrieves available payment system types for displaying payment form.
     * If first element in response result is GR4VY_GATEWAY - other payment systems types have to be ignored and payment
     * flow for GR4VY_GATEWAY have to be used.
     * @param data Full data about subscriber, credit card and payment
     * @param config AxiosConfiguration
     */
    getAvailable(data?: NoraAPIAvailablePaymentSystemsRequest, config?: AxiosRequestConfig): Promise<NoraAPIAvailablePaymentSystemsResponse>;
    /**
     * Get payment system options
     * @description Retrieves payment form options (currently is used for GR4VY_GATEWAY payment system flow)
     * @param data Full data about subscriber, credit card and payment
     * @param config AxiosConfiguration
     */
    getOptions(data?: NoraAPIPaymentSystemsOptionsRequest, config?: AxiosRequestConfig): Promise<NoraAPIPaymentSystemsOptionsResponse>;
    /**
     * Get payment form options to add payment method for Gr4vy gateway
     * @param data Full data about subscriber, credit card and payment
     * @param config AxiosConfiguration
     */
    addFlow(data?: NoraAPIPaymentSystemsAddFlowRequest, config?: AxiosRequestConfig): Promise<NoraAPIPaymentSystemsAddFlowResponse>;
    /**
     * Check result by payment number. Used for 2C2P Payments
     * @param data Full data about subscriber, invoice number from 2C2P
     * @param config AxiosConfiguration
     */
    checkResult(data?: NoraAPIPaymentSystemsCheckResultRequest, config?: AxiosRequestConfig): Promise<NoraAPIPaymentSystemsCheckResultResponse>;
}
