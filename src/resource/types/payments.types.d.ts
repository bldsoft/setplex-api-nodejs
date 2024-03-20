import type { AuthRequest, CommonRequest, CommonResponse, Location } from './';
import type { AddOnType, ExternalPaymentSystemTypes, PaymentSystemTypes } from './constants';
import type { PeriodTimeUnits } from './constants';
/**
 * Interface of the request object for call /payments/doSingle
 */
export interface PaymentsAPIDoSingleRequest extends CommonRequest {
    auth?: Omit<AuthRequest, 'accountNumber' | 'lastName'>;
    /**
     * Data for creating subscriber
     */
    subscriber: SingleCallSubscriberInfo;
    /**
     * Data for creating credit card
     */
    creditCard?: SingleCallCreditCard;
    /**
     * Data of subscription
     */
    subscription: SingleCallSubscription;
    /**
     * Number of ordered devices
     */
    deviceCount: number;
    /**
     * Specify `true` if additional approval from managers required.
     */
    approvalRequired?: boolean;
    /**
     * This key will be obtained from calculate request.
       If this field is empty, total price can be changed. It can happend because rate of currency or price of subscription can be changed.
       If this field contains data from calculate request, total price can not be changed. Because payment information will be cached.
     */
    paymentKey?: string;
    /**
     * @default PaymentSystemTypes.AUTHORIZE_NET
     */
    paymentSystemType?: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * If value of "paymentSystemType" is GR4VY_GATEWAY, this value represents id of stored payment method in gr4vy payment gateway.
     * If this field is specified, this payment method will be linked to subscriber
     */
    paymentMethodExtRefId?: string;
    extPaymentSystemCustomerRefId?: string;
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    transactionId?: string;
}
export interface SingleCallSubscriberInfo {
    /**
     * First name of subscriber
     */
    firstName: string;
    /**
     * Last name of subscruber
     */
    lastName: string;
    /**
     * Phone of subscriber
     */
    phone: string;
    /**
     * Email of subscriber
     */
    email: string;
    /**
     * Address of subscriber
     */
    address: string;
    /**
     * Zip code
     */
    zipCode: string;
    /**
     * Country code.
     * Only two letters in UPPER case.
     * Value will be validate on ISO-3166-1-alpha-2.
     */
    country: string;
    /**
     * City
     */
    city: string;
    /**
     * State
     */
    state?: string;
}
export interface SingleCallCreditCard {
    /**
     * Credit card's number.
     */
    creditCardNumber?: string;
    /**
     * Card's expiration month.
     * Allowed digits from 1 (January) to 12 (December)
     */
    expirationMonth?: number;
    /**
     * Card's expiration year.
     * Allowed only 4 digts
     */
    expirationYear?: number;
    /**
     * A login of a merchant account in a payment system
     */
    paymentSystemLogin?: string;
    /**
     * The initial transaction reference in a payment system
     */
    initTransactionId?: string;
    /**
     * The currency of initial transaction.
     * Currency code have to be retrieved from ISO 4217.
     */
    initTransactionCurrency?: string;
    /**
     * Type of credit card.
     * @example 'Visa'
     * @example 'MasterCard'
     */
    cardType?: string;
    defaultPaymentMethod?: boolean;
}
export interface SingleCallSubscription {
    /**
     * Id of subscription
     */
    subscriptionId: string;
    autoPay?: boolean;
    trial?: boolean;
    /**
     * List of AddOn's Ids.
     */
    addOns?: string[];
    /**
     * List of ContentSetAddOns's configurations
     * @deprecated
     */
    contentSetAddOns?: ContentSetAddOnRequest[];
    /**
     * List of ContentSetAddOns's configurations
     */
    contentAddOns?: ContentSetAddOnRequest[];
    /**
     * List of identifiers of ordered partner products
     * Note: use externalId of PartnerProducts!
     */
    partnerProducts?: string[];
}
export interface ContentSetAddOnRequest {
    /**
     * Id of Add-on content set
     */
    externalId: string;
    /**
     * Type of monetization
     */
    priceSettingsType: 'RENT' | 'PURCHASE';
}
/**
 * Interface of the response object for call /payments/doSingle
 */
export interface PaymentsAPIDoSingleResponse extends CommonResponse {
    result: PayResult;
}
export interface PayResult {
    /**
     * Account number of subscriber.
     */
    accountNumber: string;
    /**
     * User name of subscriber.
     */
    userName: string;
    /**
     * Password of subscriber.
     */
    password: string;
    /**
     * Pin code of subscriber.
     */
    pinCode: string;
    /**
     * List of added contentSet AddOns's
     * @deprecated
     */
    contentSetAddOns?: ContentSetAddOnResponse[];
    /**
     * List of added contentSet AddOns's
     */
    contentAddOns: ContentSetAddOnResponse[];
    /**
     * Date of expiration time of subscriber.
     */
    expirationTime: string;
}
export interface ContentSetAddOnResponse {
    /**
     * Id of contentSet AddOn.
     */
    externalId: string;
    /**
     * Date of expiration time of contentSet AddOn.
     */
    availableTill: string;
}
export interface PaymentsAPIDoRequest extends CommonRequest {
    auth?: AuthRequest;
    /**
     * Number of ordered devices
     */
    deviceCount: number;
    /**
     * Id of subscription
     */
    subscriptionId: string;
    /**
     * Id of credit card
     */
    creditCardId?: number;
    /**
     * Specify `true` if additional approval from managers required.
     */
    approvalRequired?: boolean;
    /**
     * If “true” last payment will be overriden
     * if “false” payment will be posted as top up
     * @default 'false'
     */
    override?: boolean;
    /**
     * List of AddOn's Ids.
     */
    addOns?: string[];
    autoPay?: boolean;
    /**
     * List of content set AddOn's configurations.
     * @deprecated
     */
    contentSetAddOns?: ContentSetAddOnRequest[];
    /**
     * List of content set AddOn's configurations.
     */
    contentAddOns?: ContentSetAddOnRequest[];
    /**
     * This key will be obtained from calculate request.
     * If this field is empty, total price can be changed. It can happend because rate of currency or price of subscription can be changed.
     * If this field contains data from calculate request, total price can not be changed. Because payment information will be cached.
     */
    paymentKey?: string;
    /**
     * @default PaymentSystemTypes.AUTHORIZE_NET
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * If value of "paymentSystemType" is GR4VY_GATEWAY, this value represents id of stored payment method in gr4vy payment gateway.
     * If this field is specified, this payment method will be linked to subscriber
     */
    paymentMethodExtRefId?: string;
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    transactionId?: string;
    /**
     * Use default subscriber’s payment method to process payment for  AUTHORIZE_NET payment system. For EXTERNAL_PAYMENTS payment systems this flag will be skipped.
     */
    useDefaultPaymentMethod?: true;
    /**
     * Flag describes if the trial period is used of the selected subscription. The option is available only for new Subscribers, who have not had any Subscription.
     */
    trial?: true;
    /**
     * These fields should be specified for Cash payments. If the specifying cash location is required for payments.
     * Available values can be obtained by getting the Cash location library.
     */
    cashLocation?: Location;
    /**
     * Check number is required for payments via Checks.
     */
    checkNumber?: string;
    /**
     * Identifier of the payment currency. This field is required if the payment is made by check.
     */
    currencyId?: number;
    /**
     * Auto prolongation for content set addons. If autoPay flag in the same request is false, this flag will be skipped.
     * @default false
     */
    contentAddonsAutoPay?: boolean;
    /**
     * Prorate price of overriding subscription (ignored if not applicable).
     * @default false
     */
    prorateSubscription?: boolean;
    /**
     * List of identifiers of ordered partner products
     * Note: use externalId of PartnerProducts!
     */
    partnerProducts?: string[];
}
export interface PaymentsAPIDoResponse extends CommonResponse {
    /**
     * Result data.
     * Note, that if subscriber didn't make any success payment result data will be empty
     */
    result: RePayResult;
}
export interface RePayResult {
    /**
     * Date of expiration time of subscriber.
     */
    expirationTime: string;
    /**
     * Content set AddOns's info
     * @deprecated
     */
    contentSetAddOns?: ContentSetAddOnResponse[];
    /**
     * Content set AddOns's info
     */
    contentAddOns: ContentSetAddOnResponse[];
    /**
     * Password of subscriber.
     */
    password: string;
    /**
     * Unique number of the payment, which is used to reference Subscriber's payments and purchases.
     */
    paymentNumber: string;
}
export interface PaymentsAPICalculateRequest extends CommonRequest {
    auth?: AuthRequest;
    /**
     * Identifier of the ordered Subscription.
     */
    subscriptionId: string;
    /**
     * Number of the ordered devices.
     */
    deviceCount: number;
    /**
     * List of identifiers of Add-ons (additional services).
     */
    addOns: string[];
    /**
     * List of content set AddOn's configurations.
     * @deprecated
     */
    contentSetAddOns?: ContentAddOnCalculateRequest[];
    /**
     * List of content set AddOn's configurations.
     */
    contentAddOns?: ContentAddOnCalculateRequest[];
    /**
     * Payment system type, which is used for making payment. If the field is empty, the default payment system will be used.
     * @default PaymentSystemTypes.AUTHORIZE_NET
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * Identifier of the payment currency. It is used only for the Check payment system type.
     */
    currencyId?: number;
    /**
     * Prorate price of overriding subscription (ignored if not applicable).
     */
    prorateSubscription?: boolean;
    /**
     * List of identifiers of ordered partner products
     * Note: use externalId of PartnerProducts!
     */
    partnerProducts?: string[];
}
export interface ContentAddOnCalculateRequest {
    /**
     * External identifier of the content Add-on
     * @description pattern: ^[a-z0-9]+$ maxLength: 36
     * @example tvshow:77903b21-c295-48b4-b018-730843b2d10d
     */
    externalId: string;
    /**
     * Monetization type of the content add-on.
     * @description Available values: - RENT - with limited period of accessibility; - PURCHASE -with unlimited period accessibility.
     */
    priceSettingsType: AddOnType;
}
export interface PaymentsAPICalculateResponse extends CommonResponse {
    /**
     * Result data
     */
    result: CalculateResult;
}
export interface CalculateResult {
    /**
     * Detail calculation info by subscription
     */
    subscription: CalculateResultDTO;
    /**
     * Detail calculation info by addOns
     */
    addOns: CalculateResultDTO[];
    /**
     * Detail calculation info by devices
     */
    addDevice: CalculateResultDTO;
    /**
     * Detail calculation info by contentSet addOns
     * @deprecated
     */
    contentSetAddOns?: ContentSetAddOnCalculateResultDTO[];
    /**
     * Detail calculation info by contentSet addOns
     */
    contentAddOns: ContentSetAddOnCalculateResultDTO[];
    /**
     * Total amount
     * Note, if calculate is failed amount will be 0
     */
    totalAmount: number;
    /**
     * Code of current subscription currency.
     */
    currency: string;
    /**
     * May be different from totalAmount if subscription currency differ from currency supported by payment system.
     */
    convertedTotalAmount: number;
    /**
     * Code of current currency. May be different if subscription currency differ from currency supported by payment system.
     */
    targetCurrency: string;
    /**
     * Key for payment
     * This is a key which will be used for make payment.
     */
    paymentKey: string;
    /**
     * Expiration time of key for payment.
     */
    paymentKeyExpireTimeInMinutes: number;
    /**
     * Current subscription need to be overridden by the currently paid Subscription.
     */
    override: boolean;
}
export interface CalculateResultDTO {
    /**
     * Id of item
     */
    id: string;
    /**
     * Full price of item
     * @description pattern: ^\d{7}(\.\d{1,2})?$
     */
    fullPrice: number;
    /**
     * Include only tax price of item
     * @description pattern: ^\d{7}(\.\d{1,2})?$
     */
    taxPrice: number;
    /**
     * Initial price in case of prorating. If no prorating applied - equal to full price
     */
    initialPrice: number;
    /**
     * Discount amount in case of prorating. If no prorating applied - equal to zero.
     */
    proratedValue: number;
}
export interface ContentSetAddOnCalculateResultDTO {
    /**
     * Id of item
     */
    id: string;
    /**
     * Type of monetization the ordered content add-on: Purchased or Rented.
     */
    type: 'RENT' | 'PURCHASE';
    /**
     * Full price of item
     */
    fullPrice: number;
    /**
     * Include only tax price of item
     */
    taxPrice: number;
    /**
     * If rent length more than remaining current subscription days, pricing of rent is recalculated based on remaining subscription days
     */
    proratedAmount: ContentSetAddOnProratedAmountCalculateResultDTO;
    /**
     * Rental period length of the ordered content add-on, which is prorated.
     * @description Note: Content add-on might be unlimited, in this case period length is 0.
     */
    periodLength: number;
    /**
     * Interval of time which the prorated add-on is available during its rent period.
     */
    periodTimeUnit: PeriodTimeUnits;
    /**
     * Flag describes if the ordered content add-on is unlimited.
     */
    periodUnlimited: boolean;
}
export interface ContentSetAddOnProratedAmountCalculateResultDTO {
    /**
     * Rent amount based on the remaining subscription days
     */
    amount: number;
    /**
     * Remaining rent days in terms of the current subscription
     */
    proratedRentLengthInDays: number;
}
export interface PaymentsAPICalculateContentSetsRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * Payment System type
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * List of content set addons for calculation
     */
    contentSetAddOns: CalculateContentSets[];
}
export interface CalculateContentSets {
    /**
     * Id of Add-on content set
     */
    externalId: string;
    /**
     * Type of monetization
     */
    priceSettingsType: 'RENT' | 'PURCHASE';
}
export interface PaymentsAPICalculateContentSetsResponse extends CommonResponse {
    result: PaymentsAPICalculateContentSetsData;
}
export interface PaymentsAPICalculateContentSetsData {
    /**
     * Total amount for all content set addons specified in the request.
     */
    totalAmount: number;
    /**
     * Code of current subscription currency.
     */
    currency: string;
    /**
     * May be different from totalAmount if subscription currency differ from currency supported by payment system.
     */
    convertedTotalAmount: number;
    /**
     * Code of current currency. May be different if subscription currency differ from currency supported by payment system.
     */
    convertedCurrency: string;
    /**
     * Key for payment.
     * This is a key which will be used for make payment.
     */
    paymentKey: string;
    /**
     * Time of expiration of the payment key in minutes
     */
    paymentKeyExpireTimeInMinutes: number;
    /**
     * Calculated prices per content set
     */
    contentSetAddOns: CalculateContentSetsDataContentSetAddOn;
}
export interface CalculateContentSetsDataContentSetAddOn {
    /**
     * Id of item
     */
    id: string;
    /**
     * Type of monetization
     */
    type: 'RENT' | 'PURCHASE';
    /**
     * Full price of item
     */
    fullPrice: number;
    /**
     * Include only tax price of item
     */
    taxPrice: number;
    /**
     * If rent length more than remaining current subscription days, pricing of rent is recalculated based on remaining subscription days
     */
    proratedAmount: CalculateContentSetsDataContentSetAddOnProrated;
}
export interface CalculateContentSetsDataContentSetAddOnProrated {
    /**
     * Recalculated rent amount based on the remaining subscription days
     */
    amount: number;
    /**
     * Remaining rent days in terms of the current subscription
     */
    proratedRentLengthInDays: number;
}
export interface PaymentsAPIPayContentSetsRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * List of content set addons for calculation
     */
    contentSetAddOns: PayContentSetAddOn[];
    /**
     * Id of credit card
     */
    creditCardId?: number;
    /**
     * This key will be obtained from calculate request.
     */
    paymentKey?: string;
    /**
     * Payment System type
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS, this field must be not empty.
     */
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * If value of "paymentSystemType" is GR4VY_GATEWAY, this value represents id of stored payment method in gr4vy payment gateway.
     * If this field is specified, this payment method will be linked to subscriber
     */
    paymentMethodExtRefId?: string;
    /**
     * If value of field "paymentSystemType" is EXTERNAL_PAYMENTS or GR4VY_GATEWAY, this field must be not empty.
     * If value of field ""paymentSystemType" is AUTHORIZE_NET or TELR this field must be empty.
     */
    transactionId?: string;
    /**
     * Use default subscriber’s payment method to process payment for  AUTHORIZE_NET payment system. For EXTERNAL_PAYMENTS payment systems this flag will be skipped.
     */
    useDefaultPaymentMethod: boolean;
}
export interface PayContentSetAddOn {
    /**
     * Id of Add-on content set
     */
    externalId: string;
    /**
     * Type of monetization
     */
    priceSettingsType: 'RENT' | 'PURCHASE';
}
export interface PaymentsAPIPayContentSetsResponse extends CommonResponse {
    result: PayContentSetsResult;
}
export interface PayContentSetsResult {
    /**
     * List of purchased Content Set Addons
     */
    contentSetAddOns: PayContentSetsResultItem[];
}
export interface PayContentSetsResultItem {
    /**
     * Id of Add-on content set
     */
    externalId: number;
    /**
     * In case of RENT, rent ending date time.
     */
    availableTill: string;
}
/**
 * *
 * Payment Additions
 * *
 */
export interface PaymentsAPICalculateAdditionsRequest extends CommonRequest {
    auth: AuthRequest;
    paymentSystemType?: PaymentSystemTypes;
    currencyId: number;
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    /**
     * List of AddOn's Ids.
     */
    addOns?: string[];
    /**
     * List of identifiers of ordered partner products
     * Note: use externalId of PartnerProducts!
     */
    partnerProducts?: string[];
    /**
     * List of ContentSetAddOns's configurations
     */
    contentAddOns?: ContentSetAddOnRequest[];
    /**
     * Include upcoming subscription to Content Add-Ons price/length recalculation (if prorating enabled)
     */
    prorateToUpcoming?: boolean;
}
export interface PaymentsAPICalculateAdditionsResponse extends CommonResponse {
    result: CalculateAdditionsResult;
}
export interface CalculateAdditionsResult {
    /**
     * Detail calculation info by addOns
     */
    addOns: CalculateResultDTO[];
    /**
     * Information about ordered partner products.
     * It might be bought one or several partner products by the same payment.
     */
    partnerProducts: CalculateResultDTO[];
    /**
     * Detail calculation info by contentSet addOns
     */
    contentAddOns: ContentSetAddOnCalculateResultDTO[];
    /**
     * Total amount
     * Note, if calculate is failed amount will be 0
     */
    totalAmount: number;
    /**
     * Code of current subscription currency.
     */
    currency: string;
    /**
     * May be different from totalAmount if subscription currency differ from currency supported by payment system.
     */
    convertedTotalAmount: number;
    /**
     * Currency code, which is used as currency of payment, if the currency of payment is different from the currency of the order
     */
    convertedCurrency: string;
    paymentKey: string;
    paymentKeyExpireTimeInMinutes: number;
}
export interface PaymentsAPIPayAdditionsRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * List of ContentSetAddOns's configurations
     */
    contentAddOns?: ContentSetAddOnRequest[];
    /**
     * List of AddOn's Ids.
     */
    addOns?: string[];
    /**
     * List of identifiers of ordered partner products
     * Note: use externalId of PartnerProducts!
     */
    partnerProducts?: string[];
    creditCardId?: number;
    paymentKey?: string;
    paymentSystemType?: PaymentSystemTypes;
    externalPaymentSystemType?: ExternalPaymentSystemTypes;
    paymentMethodExtRefId?: string;
    transactionId?: string;
    /**
     * These fields should be specified for Cash payments. If the specifying cash location is required for payments.
     * Available values can be obtained by getting the Cash location library.
     */
    cashLocation?: Location;
    checkNumber?: string;
    currencyId?: number;
    useDefaultPaymentMethod?: boolean;
    /**
     * Include upcoming subscription to Content Add-Ons price/length recalculation (if prorating enabled)
     */
    prorateToUpcoming?: boolean;
    /**
     * Auto prolongation for content set addons.
     * If current subscription without auto pay, this flag will be skipped.
     */
    contentAddonsAutoPay?: boolean;
}
export interface PaymentsAPIPayAdditionsResponse extends CommonResponse {
    result: PayAdditionsResult;
}
export interface PayAdditionsResult {
    /**
     * Information about content paid add-ons
     */
    contentAddOns: ContentSetAddOnResponse[];
    /**
     * Information about paid add-ons
     */
    addons: string[];
    /**
     * Unique number of the payment, which is used to reference Subscriber's payments and purchases.
     */
    paymentNumber: string;
}
