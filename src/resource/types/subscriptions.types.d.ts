import type { AuthRequest, CommonRequest, CommonResponse } from './';
import type { AccessoryTypes, PartnerProviders, PeriodTimeUnits, SubscriberSubscriptionType, SubscriptionPlatforms } from './constants';
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
     * Subscription heading for shopping cart
     */
    heading: string;
    /**
     * Description of subscription
     */
    description: string;
    /**
     * -
     */
    coverImageUrl: string;
    /**
     * Platforms, from which the access to the current active Subscriber's Subscription can be made.
     * Available values: - STB; - PC; - iOS; - Android; - SamsungTV; - LG; - WEB; - Others (other platform types).
     */
    platforms: SubscriptionPlatforms;
    /**
     * Subscription promo label for shopping cart
     */
    promoLabel: string;
    /**
     * There is a field which contains info about count of days or months which subscription is active.
     * This field doesn't work alone. This field works with lengthType.
     */
    length: number;
    /**
     * Flag describes if auto payment allowed for subscription.
     */
    autoPay: boolean;
    /**
     * Flag describes if the AVOD monetization is used of the selected subscription.
     */
    avod: boolean;
    /**
     * Information about payment statement=. true - if payment statement has unlimited length, false - if payment statement has limited length.
     */
    periodUnlimited: boolean;
    /**
     * There is a field which contains info about interval of time which subscription is active.
     * This field doesn't work alone. This field works with length field.
     */
    lengthType: 'DAYS' | 'MONTHS';
    /**
     * Number of devices which can be paid.
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
    /**
     * Type of the current Subscriber's Subscription.
     * Available values: - FREEMIUM (getting subscription with the Freemium status does not imply payment); - PAID.
     */
    subscriptionType: SubscriberSubscriptionType;
    /**
     * Non-null if a subscription supports a trial period. The trial period is available only for new Subscribers.
     */
    trial?: NoraApiSubscriptionTrial;
    /**
     * List of allowed Add-on content sets
     */
    contentSetAddOns: NoraAPISubscriptionAddOnContentSet[];
    /**
     * List of allowed addons.
     */
    allowedAddOns: NoraAPISubscriptionAddOn[];
    /**
     * List of allowed partner products according subscription
     */
    partnerProducts: NoraAPISubscriptionPartnerProduct[];
    free: boolean;
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
    /**
     * Flag describes that the Channel add-on is rented for unlimited period.
     * (Content add-ons of the other content types, such as VIdeo on Demand, TV show, Live Event, can not be unlimited.)
     */
    periodUnlimited: boolean;
    /**
     * Flag describes is content rent prolongation is allowed.
     */
    autoPayAllowed: boolean;
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
     * Description of addon
     */
    description: string;
    /**
     * Addon type.
     */
    accessoryType: AccessoryTypes;
}
export interface NoraAPISubscriptionPartnerProduct {
    /**
     * External identifier of the partner product
     */
    externalId: string;
    /**
     * Name of the partner product
     */
    name: string;
    /**
     * Identifier of the partner product on partner provider side
     */
    externalProductId: string;
    /**
     * Partner product cover img url
     */
    coverImageUrl: string;
    /**
     * Description of the partner product
     */
    description: string;
    /**
     * Identifier of the supported partner product providers
     */
    partnerProvider: PartnerProviders;
    /**
     * True if subscriber already has access to partner product
     */
    purchased: boolean;
    /**
     * Period how long partner product is available for subscriber
     */
    periodLength: number;
    /**
     * Partner product availability time unit
     */
    periodTimeUnit: PeriodTimeUnits;
    /**
     * Partner product price
     */
    amount: number;
    /**
     * Price currency of the of the partner product.
     */
    currency: string;
}
/**
 * GET PLANS
 */
export interface NoraAPIGetSubscriptionsPlansRequest extends CommonRequest {
    auth?: AuthRequest;
}
export interface NoraAPIGetSubscriptionsPlansResponse extends CommonResponse {
    result: NoraAPISubscriptionsPlan[];
}
export interface NoraAPISubscriptionsPlan {
    statisticId: string;
    name: string;
    description: string;
    coverImageUrl: string;
    label: string;
    additionalInfo: string;
    sortOrder: number;
    subscriptions: NoraAPISubscription[];
}
