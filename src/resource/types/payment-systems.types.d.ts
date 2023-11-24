import type { CommonRequest } from './index';
import type { AuthRequest } from './index';
import type { CommonResponse } from './index';
import type { AddOnType } from './constants';
/**
 * Interface of the request object for call /payment-systems/getAvailable
 */
export interface NoraAPIAvailablePaymentSystemsRequest extends CommonRequest {
    auth?: AuthRequest;
}
/**
 * Interface of the response object for call /payment-systems/getAvailable
 */
export interface NoraAPIAvailablePaymentSystemsResponse extends CommonResponse {
    /**
     * Result data. Note, if there are no available payment system - the result will be empty.
     */
    result: AvaiablePaymentSystem[];
}
export interface AvaiablePaymentSystem {
    paymentChannel: string;
    environment: string;
    autoPayAllowed: boolean;
}
/**
 * Interface of the request object for call /payment-systems/getOptions
 */
export interface NoraAPIPaymentSystemsOptionsRequest extends CommonRequest {
    auth?: AuthRequest;
    /**
     * Original amount of purchase: subscriptions with addOns and contentAddOns
     */
    amount: number;
    /**
     * ISO code of subscriber’s country location.
     * 2 letters country ISO code
     */
    country: string;
    /**
     * For auto pay. If true is passed, then the last state of the payment form for GR4VY is saved.
     */
    storePaymentMethod: boolean;
    /**
     * Value of payment system for which you need to get settings
     * There are available value of this field: GR4VY_GATEWAY
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS';
    /**
     * Data to recalculate original amount and check that amount wasn’t changed during shopping cart checkout
     */
    recalculateRequest: NoraAPIPaymentSystemsOptionsRecalculateRequest;
}
export interface NoraAPIPaymentSystemsOptionsRecalculateRequest {
    /**
     * Id of subscription
     */
    subscriptionId: string;
    /**
     * Number of ordered devices
     */
    deviceCount: number;
    /**
     * List of AddOn's Ids
     * A string can contains only letters and numbers in upper case. Max length of string is 9 characters
     */
    addOns: string[];
    /**
     * List of Content AddOn's data.
     */
    contentAddOns: NoraAPIPaymentSystemsOptionsContentAddOn[];
    /**
     * Prorate price of overriding subscription (ignored if not applicable).
     * @default false
     */
    prorateSubscription?: boolean;
}
export interface NoraAPIPaymentSystemsOptionsContentAddOn {
    externalId: string;
    priceSettingsType: AddOnType;
}
/**
 * Interface of the response object for call /payment-systems/getOptions
 */
export interface NoraAPIPaymentSystemsOptionsResponse extends CommonResponse {
    result: NoraAPIPaymentSystemsOption;
}
export interface NoraAPIPaymentSystemsOption {
    /**
     * Payment form options for GR4VY_GATEWAY payment system type
     */
    embedTokenInfo: NoraAPIPaymentSystemsOptionEmbedTokenInfo;
}
export interface NoraAPIPaymentSystemsOptionEmbedTokenInfo {
    /**
     * Gr4vy payment gateway account id
     */
    gr4vyId: string;
    /**
     * Gr4vy payment gateway account environment
     * This field have 2 possible values: sandbox, production
     */
    environment: string;
    /**
     * Auth token to make call to the Gr4vy payment gateway
     */
    embedToken: string;
    /**
     * Gr4vy payment gateway buyer id which is linked to subscriber
     */
    buyerId: string;
    /**
     * Purchase amount to authorize payment transaction in the Gr4vy payment gateway
     */
    amount: number;
    /**
     * Purchase amount currency
     * 3 letters currency code
     */
    currency: string;
    /**
     * ISO code of subscriber’s country location
     * 2 letters country ISO code
     */
    country: string;
    /**
     * Flag to automatically store new payment method in the Gr4vy payment gateway
     */
    store: boolean;
    display: string;
    /**
     * Value of payment system for which you need to get settings
     */
    paymentSystemType: string;
    /**
     * Metadata to process transaction in the Gr4vy payment gateway
     */
    metadata: NoraAPIPaymentSystemsOptionEmbedTokenInfoMetadata;
}
export interface NoraAPIPaymentSystemsOptionEmbedTokenInfoMetadata {
    [key: string]: string;
}
export interface NoraAPIPaymentSystemsAddFlowRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * ISO code of subscriber’s country location
     */
    country: string;
    /**
     * Payment system type
     * There are available value of this field: GR4VY_GATEWAY
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS';
}
export interface NoraAPIPaymentSystemsAddFlowResponse extends CommonResponse {
    result: NoraAPIPaymentSystemsOption;
}
export interface NoraAPIPaymentSystemsOption {
    /**
     * Payment form options for GR4VY_GATEWAY payment system type
     */
    embedTokenInfo: NoraAPIPaymentSystemsOptionEmbedTokenInfo;
}
