import type { AuthRequest, CommonRequest, CommonResponse } from './';
import type { AccessoryTypes } from './constants';
export interface NoraAPIGetSubscriptionsRequest extends CommonRequest {
    auth?: AuthRequest;
    networkId?: string;
}
export interface NoraAPIGetSubscriptionsResponse extends CommonResponse {
    result: NoraAPISubscription[];
}
export interface NoraAPISubscription {
    /**
     * Id of subscription
     */
    subscriptionId: string;
    /**
     * Name of subscription
     */
    name: string;
    /**
     * Description of subscription
     */
    description: string;
    /**
     * -
     */
    coverImageUrl: string;
    /**
     * There is a field which contains info about count of days or months which subscription is active.
     * This field doesn't work alone. This field works with lengthType.
     */
    length: number;
    autoPay: boolean;
    /**
     * There is a field which contains info about interval of time which subscription is active.
     * This field doesn't work alone. This field works with length field.
     */
    lengthType: 'DAYS' | 'MONTHS';
    /**
     * Number of devices which can be paid
     */
    maxDevices: number;
    /**
     * Total amount of Subscription (it includes amount types: PRICE, TAX_VAT, EXTRA_CHARGE)
     */
    amount: number;
    /**
     * Code of currency.
     */
    currencyCode: string;
    subscriptionType: string;
    trial?: NoraApiSubscriptionTrial;
    /**
     * List of allowed Add-on content sets
     */
    contentSetAddOns: NoraAPISubscriptionAddOnContentSet[];
    /**
     * List of allowed addons.
     */
    allowedAddOns: NoraAPISubscriptionAddOn[];
}
export interface NoraApiSubscriptionTrial {
    length: number;
    lengthType: 'DAYS' | 'MONTHS';
}
export interface NoraAPISubscriptionAddOnContentSet {
    /**
     * Id of Add-on content set
     */
    externalId: string;
    /**
     * Name of Add-on Content set
     */
    name: string;
    /**
     * Description of Add-on Content set
     */
    description: string;
    /**
     * -
     */
    coverImageUrl: string;
    /**
     * Type of content in content set
     */
    contentType: 'VOD' | 'CHANNEL' | 'TV_SHOW' | 'LIVE_EVENT';
    /**
     * -
     */
    purchased: boolean;
    /**
     * Include information about BUY content set purchase option
     */
    purchaseAddOn: NoraAPIAddOnContentSetPurchase;
    /**
     * Include information about RENT content set purchase option
     */
    rentAddOn: NoraAPIAddOnContentSetRent;
}
export interface NoraAPIAddOnContentSetPurchase {
    /**
     * Type of monetization
     */
    priceType: 'PURCHASE';
    /**
     * Price of Add-on content set:
     * if add-on content set is monetized per bundle - the response should give a price per bundle;
     * if add-on content set is monetized per item - the response should give total price of all items from the add-on content set.
     */
    amount: number;
    /**
     * Code of currency.
     */
    currencyCode: string;
}
export interface NoraAPIAddOnContentSetRent {
    /**
     * Type of monetization
     */
    priceType: 'RENT';
    /**
     * Price of Add-on content set:
     * if add-on content set is monetized per bundle - the response should give a price per bundle;
     * if add-on content set is monetized per item - the response should give total price of all items from the add-on content set.
     */
    amount: number;
    /**
     * Code of currency.
     */
    currencyCode: string;
    /**
     * There is a field which contains info about count of days or months which content set add-on is active.
     * This field doesn't work alone. This field works with subscriptionLengthType.
     */
    length: number;
    /**
     * There is a field which contains info about interval of time which content set add-on is active.
     * This field doesn't work alone. This field works with length field.
     */
    subscriptionLengthType: 'DAY' | 'MONTH' | 'YEAR';
    proratedAmount: NoraAPIAddOnContentSetRentProratedAmount;
}
export interface NoraAPIAddOnContentSetRentProratedAmount {
    amount: number;
    proratedRentLengthInDays: number;
}
export interface NoraAPISubscriptionAddOn {
    /**
     * Id of addon
     */
    addOnId: string;
    /**
     * Name of addon
     */
    name: string;
    /**
     * Code of currency.
     */
    currencyCode: string;
    /**
     * Total amount of Add-on (it includes amount types: PRICE, TAX_VAT, EXTRA_CHARGE)
     */
    amount: number;
    /**
     * Addon type.
     */
    accessoryType: AccessoryTypes;
}
