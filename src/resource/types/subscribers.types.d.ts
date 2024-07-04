import type { AuthRequest, CommonRequest, CommonResponse, OperationStatusResponse } from './';
import type { SubscriberOperatorsType, SubscriberPaymentStatuses, SubscriptionReason, SubscriptionStatus } from './constants';
import type { NoraAPISubscriptionPartnerProduct } from './subscriptions.types';
export interface NoraAPIGetSubscriberRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraAPIGetSubscriberInfoRequest extends CommonRequest {
    auth?: Omit<AuthRequest, 'accountNumber' | 'lastName' | 'accessToken'>;
    login: string;
    password: string;
}
export interface NoraAPIGetSubscriberResponse extends CommonResponse {
    result: NoraAPISubscriber;
}
export interface NoraAPISubscriber {
    /**
     * Subscriber account number
     */
    accountNumber: string;
    /**
     * User name of subscriber.
     */
    userName: string;
    /**
     * Pin code of subscriber.
     * 4 digits
     */
    pinCode: string;
    /**
     * First name of subscriber.
     */
    firstName: string;
    /**
     * Last name of subscriber.
     */
    lastName: string;
    /**
     * Email of subscriber.
     */
    email: string;
    /**
     * Phone of subscriber
     */
    phone: string;
    /**
     * Zip code
     */
    zipCode: string;
    /**
     * Address of subscriber.
     */
    address: string;
    /**
     * City
     */
    city: string;
    /**
     * Country code ( ISO 3166)
     */
    country: string;
    /**
     * State
     */
    state: string;
    /**
     * Subscriber's time zone
     */
    timeZone: string;
    /**
     * English name of language.
     */
    language: string;
    /**
     * Password of subscriber.
     */
    password: string;
    /**
     * Date of birth of subscriber.
     */
    dateOfBirth: string;
    /**
     * Date of expiration time of subscriber.
     */
    expirationTime: string;
    /**
     * Date of expiration time of subscriber.
     */
    deviceCount: number;
    /**
     * List of link code which are available for subscriber.
     * If subscriber doesn't has any link code activationCodes data will be empty.
     */
    activationCodes: NoraAPISubscriberExternalActivationCode[];
    /**
     * List of device which are available for subscriber.
     * If subscriber doesn't has any devices result data will be empty.
     */
    devices: NoraAPISubscriberExternalDevice[];
    /**
     * List of payment which are available for subscriber.
     * If subscriber didn't make any payment payments data will be empty.
     */
    payments: NoraAPISubscriberPayment[];
    /**
     * Current subscriber’s payment status
     */
    paymentStatus: SubscriberPaymentStatuses;
    /**
     * Current subscriber’s payment status
     */
    enabled: boolean;
    deleted: boolean;
    /**
     * Current subscriber's subscription status
     */
    currentSubscriptionStatus: NoraApiSubscriberSubscriptionStatus;
}
export interface NoraAPISubscriberExternalActivationCode {
    /**
     * Id of activation code
     */
    activationCodeId: number;
    /**
     * Code of link code
     */
    linkCode: string;
    /**
     * Date of link code expiration time
     */
    expirationTime: string;
}
export interface NoraAPISubscriberPayment {
    /**
     * Date of payment activation
     */
    activeFrom: string;
    /**
     * Date of payment deactivation
     */
    activeUntil: string;
    /**
     * Date when payment has been accepted
     */
    processDate: string;
    /**
     * List of purchased Content Addons
     */
    purchasedContentAddOns: NoraAPISubscriberPurchasedContentAddOn[];
    /**
     * Number of devices which has been paid
     */
    deviceCount: number;
    autoPay?: boolean;
    trial?: boolean;
    /**
     * Amount of payment
     */
    totalAmount: number;
    /**
     * Code of currency. All list of currency codes is described in the reference. link
     */
    currencyCode: string;
    /**
     * Paid subscription identifier
     */
    subscriptionIdentifier: string;
    /**
     * Information about paid subscription status and reasons of cancellation
     */
    subscriptionStatus: NoraApiSubscriberSubscriptionStatus;
}
export interface NoraAPISubscriberPurchasedContentAddOn {
    /**
     * Id of contentSet AddOn.
     */
    externalId: string;
    /**
     * Name of contentSet AddOn.
     */
    name: string;
    /**
     * Date of expiration time of contentSet AddOn.
     */
    availableTill: string;
    /**
     * Price of contentSet AddOn.
     */
    price: number;
    /**
     * Currency of contentSet AddOn.
     */
    currency: string;
    coverUrl: string;
    description: string;
}
export interface NoraAPISubscriberPurchasedAccessories {
    /**
     * External identifier of the purchased accessory
     */
    externalId: string;
    /**
     * Name of the purchased accessory
     */
    name: string;
    /**
     * Price of the purchased accessory
     */
    price: number;
    /**
     * Type of the purchased accessory
     */
    accessoryType: 'BOX' | 'SHIPPING' | 'FEE' | 'EQUIPMENT';
    /**
     * Code of payment currency (ISO 4217) of the purchased accessory
     */
    currency: string;
    /**
     * Description of the purchased accessory
     */
    description: string;
}
export interface NoraAPISubscriberContentRentProlongation {
    /** Content id allowed to change auto payment state. */
    externalId: string;
    /** Rented content name allowed to change auto payment state. */
    contentName: string;
    /** Rented content description allowed to change auto payment state. */
    description: string;
    /** URL for storage cover image of the Content add-on. */
    coverImageUrl: string;
    /** An amount of the of the Content add-on. */
    price: number;
    /** Price currency of the of the Content add-on. */
    currency: string;
    /** Date and time of the rented content add-on expiration. At that time auto prolongation will be applied if it enabled. */
    availableTill: string;
    /** Current prolongation state. */
    autoPayEnabled: boolean;
}
export interface NoraAPISubscriberExternalDevice {
    /**
     * Serial number of devices.
     */
    serialNumber: string;
    /**
     * MAC address of devices.
     */
    macAddress: string;
    /**
     * Name of devices.
     */
    name: string;
    /**
     * Platform of devices.
     */
    platform: string;
}
export interface NoraAPIUpdateSubscriberInfoRequest extends CommonRequest {
    /**
     * User name of subscriber.
     */
    userName: string;
    /**
     * Password of subscriber.
     */
    password?: string;
    /**
     * Pin code of subscriber.
     * 4 digits
     */
    pinCode: string;
    /**
     * First name of subscriber.
     */
    firstName: string;
    /**
     * Last name of subscriber.
     */
    lastName: string;
    /**
     * Email of subscriber.
     */
    email: string;
    /**
     * Phone of subscriber
     */
    phone: string;
    /**
     * Zip code
     */
    zipCode: string;
    /**
     * Address of subscriber.
     */
    address: string;
    /**
     * City
     */
    city: string;
    /**
     * Country code ( ISO 3166)
     */
    country: string;
    /**
     * State
     */
    state?: string;
    /**
     * Subscriber's time zone
     */
    timeZone: string;
    /**
     * English name of language.
     */
    language?: string | null;
    /**
     * Date of birth of subscriber.
     */
    dateOfBirth?: string;
}
export interface NoraAPIUpdateSubscriberResponse extends CommonResponse {
    result: NoraAPIUpdateSubscriber;
}
export interface NoraAPIUpdateSubscriber {
}
export interface NoraApiSubscriberSubscriptionContentSetsRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSubscriberSubscriptionContentSetsResponse extends CommonResponse {
    result: NoraApiSubscriberSubscriptionContentSets[];
}
export interface NoraApiSubscriberSubscriptionContentSets {
    /**
     * Id of subscription
     */
    externalId: string;
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
    contentType: 'VOD' | 'CHANNEL' | 'TV_SHOW' | 'LIVE_EVENT';
    purchased: boolean;
    /**
     * Include information about BUY content set purchase option
     */
    purchaseAddOn?: SubscriberSubscriptionPurchaseAddOn;
    /**
     * Include information about RENT content set purchase option
     */
    rentAddOn?: SubscriberSubscriptionRentAddOn;
}
export interface SubscriberSubscriptionPurchaseAddOn {
    /**
     * Type of monetization
     */
    priceType: 'PURCHASE';
    /**
     * Price of Add-on content set:
     */
    amount: number;
    /**
     * Code of currency.
     */
    currencyCode: string;
}
export interface SubscriberSubscriptionRentAddOn {
    /**
     * Type of monetization
     */
    priceType: 'RENT';
    /**
     * Price of Add-on content set:
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
    subscriptionLengthType: string;
    /**
     * If rent length more than remaining current subscription days, pricing of rent is recalculated based on remaining subscription days
     */
    proratedAmount: SubscriberSubscriptionRentAddOnProratedAmount;
}
export interface SubscriberSubscriptionRentAddOnProratedAmount {
    /**
     * Rent amount based on the remaining subscription days
     */
    amount: number;
    /**
     * Remaining rent days in terms of the current subscription
     */
    proratedRentLengthInDays: number;
}
export interface NoraApiSusbscriberUnassignDeviceRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSusbscriberUnassignDeviceResponse extends CommonResponse {
    status: OperationStatusResponse;
}
export interface NoraApiSubscriberCancelSubscriptionRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSubscriberCancelSubscriptionResponse extends CommonResponse {
    status: OperationStatusResponse;
}
export interface NoraApiSubscriberSubscriptionGetRequest extends CommonRequest {
    auth: NoraApiSubscriberSubscriptionGetAuth;
}
export interface NoraApiSubscriberSubscriptionGetAuth {
    token?: string;
    login?: string;
    accountNumber: string;
    lastName: string;
}
export interface NoraApiSubscriberSubscriptionGetResponse extends CommonResponse {
    result: NoraApiSubscriberSubscription;
}
export interface NoraApiSubscriberSubscription {
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
    heading?: string;
    /**
     * -
     */
    coverImageUrl: string;
    platforms: string[];
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
    subscriptionType: 'PAID' | 'FREEMIUM';
    trial?: NoraApiSubscriberSubscriptionTrial;
    /**
     * List of allowed Add-on content sets
     */
    contentSetAddOns: NoraApiSubscriberSubscriptionContentSetAddOn[];
    /**
     * List of allowed addons.
     */
    allowedAddOns: NoraApiSubscriberSubscriptionAddOn[];
    activeFrom: string;
    activeUntil: string;
    /**
     * List of allowed partner products according subscription
     */
    partnerProducts: NoraApiSubscriberSubscriptionPartnerProduct[];
    /**
     * Current subscriber's subscription status
     */
    currentSubscriptionStatus: NoraApiSubscriberSubscriptionStatus;
    /**
     * Indicator that the subscription is unlimited
     */
    periodUnlimited: boolean;
}
export interface NoraApiSubscriberSubscriptionTrial {
    length: number;
    lengthType: 'DAYS' | 'MONTHS';
}
export interface NoraApiSubscriberSubscriptionAddOn {
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
}
export interface NoraApiSubscriberSubscriptionContentSetAddOn {
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
    purchased: boolean;
    /**
     * Include information about BUY content set purchase option
     */
    purchaseAddOn: NoraApiSubscriberSubscriptionContentSetAddOnPurchase;
    /**
     * Include information about RENT content set purchase option
     */
    rentAddOn: NoraApiSubscriberSubscriptionContentSetAddOnRent;
}
export interface NoraApiSubscriberSubscriptionContentSetAddOnRent {
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
    proratedAmount: NoraApiSubscriberSubscriptionContentSetAddOnRentProrated;
}
export interface NoraApiSubscriberSubscriptionContentSetAddOnRentProrated {
    amount: number;
    proratedRentLengthInDays: number;
}
export interface NoraApiSubscriberSubscriptionContentSetAddOnPurchase {
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
export interface NoraApiSubscriberAutoPaySubscriptionRequest extends CommonRequest {
    auth: AuthRequest;
    autoPay: boolean;
}
export interface NoraApiSubscriberAutoPaySubscriptionResponse extends CommonResponse {
    result: NoraApiSubscriberAutoPaySubscription;
}
export interface NoraApiSubscriberAutoPaySubscription {
    autoPay: boolean;
}
export interface NoraApiSubscriberSubscriptionStatus {
    status: SubscriptionStatus;
    reason: SubscriptionReason | null;
}
export interface NoraApiSubscriberSubscriptionPartnersProductsRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSubscriberSubscriptionPartnersProductsResponse extends CommonResponse {
    result: NoraApiSubscriberSubscriptionPartnerProduct[];
}
export interface NoraApiSubscriberSubscriptionPartnerProduct extends NoraAPISubscriptionPartnerProduct {
}
export interface NoraApiSubscriberValidateUsernameRequest extends CommonRequest {
    auth?: AuthRequest;
    userName: string;
}
export interface NoraApiSubscriberValidateUsernameResponse extends CommonResponse {
}
export interface NoraAPIGetSubscriberByEmailRequest extends CommonRequest {
    /**
     * Subscriber email to search.
     */
    email: string;
    /**
     * Subscriber phone to search.
     */
    phoneNumber: string;
    /**
     * Access token of external provider
     */
    accessToken: string;
    /**
     * Type of external provider
     */
    providerType: string;
}
export interface NoraAPIGetSubscriberByEmailResponse extends CommonResponse {
    result: {
        content: NoraAPIGetSubscriberByEmail[];
        /**
         * Number of the displayed page
         */
        number: number;
        /**
         * Maximum elements, which are displayed on the page
         */
        size: number;
        /**
         * The flag which describes if the page is first
         */
        first: boolean;
        /**
         * The flag which describes if the page is last
         */
        last: boolean;
    };
}
export interface NoraAPIGetSubscriberByEmail {
    /**
     * Subscriber account number
     */
    accountNumber: string;
    /**
     * User name of subscriber.
     */
    userName: string;
    /**
     * Pin code of subscriber.
     * 4 digits
     */
    pinCode: string;
    /**
     * First name of subscriber.
     */
    firstName: string;
    /**
     * Last name of subscriber.
     */
    lastName: string;
    /**
     * Email of subscriber.
     */
    email: string;
    /**
     * Phone of subscriber
     */
    phone: string;
    /**
     * Zip code
     */
    zipCode: string;
    /**
     * Address of subscriber.
     */
    address: string;
    /**
     * City
     */
    city: string;
    /**
     * Country code ( ISO 3166)
     */
    country: string;
    /**
     * State
     */
    state: string;
    /**
     * Subscriber's time zone
     */
    timeZone: string;
    operator: SubscriberOperatorsType;
}
