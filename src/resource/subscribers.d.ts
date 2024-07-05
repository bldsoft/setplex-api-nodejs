import type { NoraAPIGetSubscriberByEmailRequest, NoraAPIGetSubscriberByEmailResponse, NoraAPIGetSubscriberInfoRequest, NoraAPIGetSubscriberRequest, NoraAPIGetSubscriberResponse, NoraAPIGetSubscribersByParametersRequest, NoraAPIGetSubscribersByParametersResponse, NoraApiSubscriberAutoPaySubscriptionRequest, NoraApiSubscriberAutoPaySubscriptionResponse, NoraApiSubscriberCancelSubscriptionRequest, NoraApiSubscriberCancelSubscriptionResponse, NoraApiSubscriberSubscriptionContentSetsRequest, NoraApiSubscriberSubscriptionContentSetsResponse, NoraApiSubscriberSubscriptionGetRequest, NoraApiSubscriberSubscriptionGetResponse, NoraApiSubscriberSubscriptionPartnersProductsRequest, NoraApiSubscriberSubscriptionPartnersProductsResponse, NoraApiSubscriberValidateUsernameRequest, NoraApiSubscriberValidateUsernameResponse, NoraApiSusbscriberUnassignDeviceRequest, NoraApiSusbscriberUnassignDeviceResponse, NoraAPIUpdateSubscriberInfoRequest, NoraAPIUpdateSubscriberResponse } from './types/subscribers.types';
import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
export declare class SubscribersAPI {
    readonly path = "/subscribers";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get subscriber by accountNumber and last name
     * @param data Subscriber auth info
     * @param config AxiosConfig
     * @returns Subscriber detail info
     */
    get(data: NoraAPIGetSubscriberRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetSubscriberResponse>;
    /**
     * Get subscribers by email
     * @param data Subscriber email
     * @param config AxiosConfig
     * @returns Subscribers detail info
     * @deprecated
     */
    getByEmail(data: NoraAPIGetSubscriberByEmailRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetSubscriberByEmailResponse>;
    /**
     * Get subscriber by login and password
     * @param data Subscriber data info
     * @param config AxiosConfig
     * @returns Subscriber detail info
     */
    info(data: NoraAPIGetSubscriberInfoRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetSubscriberResponse>;
    /**
     * Update Subscriber
     * @description This call will update subscriber
     * @param data Subscriber data info
     * @param config AxiosConfig
     * @returns Subscriber detail info
     */
    update(data: NoraAPIUpdateSubscriberInfoRequest, config?: AxiosRequestConfig): Promise<NoraAPIUpdateSubscriberResponse>;
    /**
     * Loading subscriber subscription content sets
     * @param config AxiosConfig
     * @returns Subscription content sets info
     */
    getSubscriptionContentSets(data: NoraApiSubscriberSubscriptionContentSetsRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberSubscriptionContentSetsResponse>;
    /**
     * Loading subscriber subscription info
     * @param config AxiosConfig
     * @param data body request data
     * @returns Subscription content sets info
     */
    getSubscription(data: NoraApiSubscriberSubscriptionGetRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberSubscriptionGetResponse>;
    /**
     * Unassign device call
     * @param data auth data
     * @param deviceSerialNumber Device serial number
     * @param config axios config
     */
    unassignDevice(data: NoraApiSusbscriberUnassignDeviceRequest, deviceSerialNumber: string, config?: AxiosRequestConfig): Promise<NoraApiSusbscriberUnassignDeviceResponse>;
    /**
     * This call cancels the current subscriber’s subscription. Subscriber should have only one active subscription.
     * @param data auth data
     * @param config axios config
     * @returns
     */
    cancelSubscription(data: NoraApiSubscriberCancelSubscriptionRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberCancelSubscriptionResponse>;
    /**
     * This call updates (increase or decrease) current subscriber’s subscription. Subscriber should have only one active subscription.
     * @param data autopay & auth data
     * @param config axios config
     */
    autoPaySubscription(data: NoraApiSubscriberAutoPaySubscriptionRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberAutoPaySubscriptionResponse>;
    /**
     * Loading subscriber subscription available partner products
     * @param data
     * @param config AxiosConfig
     * @returns Subscription partners products info
     */
    getSubscriptionPartnerProducts(data: NoraApiSubscriberSubscriptionPartnersProductsRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberSubscriptionPartnersProductsResponse>;
    /**
     * Validates uniqueness username
     * @param data
     * @param config
     */
    validateUsername(data: NoraApiSubscriberValidateUsernameRequest, config?: AxiosRequestConfig): Promise<NoraApiSubscriberValidateUsernameResponse>;
    /**
     * Get subscribers by parameters
     * @description Search is allowed only by email or phone or providerType with accessToken without any combination with parameters.
     * @param data Subscriber params
     * @param config AxiosConfig
     * @returns Subscribers detail info
     */
    search(data: NoraAPIGetSubscribersByParametersRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetSubscribersByParametersResponse>;
}
