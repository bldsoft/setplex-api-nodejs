import type { AuthRequest, CommonRequest, CommonResponse } from './';
/**
 * Interface of the request object for call /creditcards/get
 */
export interface NoraApiAddPaymentMethodRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * Payment system type. Allowable value is GR4VY_GATEWAY
     */
    paymentSystemType: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * Before storing payment method in Gr4vy gateway, transaction have to be authorized. To void transaction, transaction Id have to be passed in the request.
     */
    voidTransactionId: string;
    /**
     * Payment method id which is stored in the Gr4vy gateway.
     */
    paymentMethodId: string;
    /**
     * Flag for default payment method for auto payments
     */
    defaultPaymentMethod: boolean;
}
/**
 * Interface of the response object for call /creditcards/get
 */
export interface NoraApiAddPaymentMethodResponse extends CommonResponse {
    result: {
        /**
         * List of credit cards
         */
        creditCards: PaymentMethodsCreditCard[];
        /**
         * List of tokenized wallets such as Paypay, Google pay, Apple pay and etc.
         */
        tokenizedWallets: PaymentMethodsTokenizedWallet[];
    };
}
export interface NoraApiGetPaymentMethodReuqest extends CommonRequest {
    auth: AuthRequest;
    /**
     * Payment system type. Allowable value is GR4VY_GATEWAY
     */
    paymentSystemType: string;
}
export interface NoraApiGetPaymentMethodResponse extends CommonResponse {
    result: {
        /**
         * List of credit cards
         */
        creditCards: PaymentMethodsCreditCard[];
        /**
         * List of tokenized wallets such as Paypay, Google pay, Apple pay and etc.
         */
        tokenizedWallets: PaymentMethodsTokenizedWallet[];
    };
}
export interface PaymentMethodsCreditCard {
    /**
     * Credit card id
     */
    creditCardId: number;
    /**
     * Last for digits of stored credit card
     */
    creditCardNumber: string;
    /**
     * Expiration info
     */
    expiration: CreditCardExpiration;
    /**
     * Credit card type
     */
    type: 'MASTER_CARD' | 'UNKNOWN' | 'VISA' | 'DINERS_CLUB' | 'DISCOVER' | 'MAESTRO' | 'AMERICAN_EXPRESS' | 'JCB';
    /**
     * Flag for default payment method for auto payments
     */
    defaultPaymentMethod: boolean;
}
export interface CreditCardExpiration {
    /**
     * Expiration month for credit card
     */
    month: number;
    /**
     * Expiration year for credit card
     */
    year: number;
}
export interface PaymentMethodsTokenizedWallet {
    /**
     * Tokenized wallet id
     */
    tokenizedWalletId: number;
    /**
     * Display name for tokenized payment wallet
     */
    name: string;
    /**
     * Type of tokenized payment wallet
     */
    type: 'AFTERPAY' | 'APPLEPAY' | 'BANKED' | 'BITPAY' | 'BOLETO' | 'CLEARPAY' | 'DANA' | 'FORTUMO' | 'GCASH' | 'GOCARDLESS' | 'GOOGLEPAY' | 'GRABPAY' | 'KLARNA' | 'OVO' | 'PAYMAYA' | 'PAYPAL' | 'PIX' | 'RABBITLINEPAY' | 'SCALAPAY' | 'SHOPEEPAY' | 'STRIPEDD' | 'TRUEMONEY' | 'TRUSTLY' | 'ZIPPAY';
    /**
     * Tokenized payment wallet identifier in the payment system where this wallet is stored
     */
    refId: string;
    /**
     * Flag for default payment method for auto payments
     */
    defaultPaymentMethod: boolean;
}
export interface NoraApiSetDefaultWalletRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSetDefaultWalletResponse extends CommonResponse {
    result: {
        /**
         * Tokenized wallet id
         */
        tokenizedWalletId: number;
        /**
         * Display name for tokenized payment wallet
         */
        name: string;
        /**
         * Type of tokenized payment wallet
         */
        type: 'AFTERPAY' | 'APPLEPAY' | 'BANKED' | 'BITPAY' | 'BOLETO' | 'CLEARPAY' | 'DANA' | 'FORTUMO' | 'GCASH' | 'GOCARDLESS' | 'GOOGLEPAY' | 'GRABPAY' | 'KLARNA' | 'OVO' | 'PAYMAYA' | 'PAYPAL' | 'PIX' | 'RABBITLINEPAY' | 'SCALAPAY' | 'SHOPEEPAY' | 'STRIPEDD' | 'TRUEMONEY' | 'TRUSTLY' | 'ZIPPAY';
        /**
         * Tokenized payment wallet identifier in the payment system where this wallet is stored
         */
        refId: string;
        /**
         * Flag for default payment method for auto payments
         */
        defaultPaymentMethod: boolean;
    };
}
export interface NoraApiDeleteWalletRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiDeleteWalletResponse extends CommonResponse {
}
/**
 * Interface of the request object for call /creditcards/create
 */
export interface NoraApiCreateCreditCardsRequest extends CommonRequest {
    auth: AuthRequest;
    /**
     * Credit card's number.
     */
    creditCardNumber: string;
    /**
     * Card's expiration month.
     * Allowed digits from 1 (January) to 12 (December)
     */
    expirationMonth: number;
    /**
     * Card's expiration year.
     * Allowed only 4 digts
     */
    expirationYear: number;
    /**
     * Payment system
     */
    paymentSystemType?: 'GR4VY_GATEWAY' | 'AUTHORIZE_NET' | 'CASH' | 'CHECK' | 'NEWEBPAY' | 'PAYPAL' | 'TELR' | 'EXTERNAL_PAYMENTS' | 'CCPP' | 'TRUE_MONEY';
    /**
     * A login of a merchant account in a payment system
     */
    paymentSystemLogin?: string;
    /**
     * The initial transaction reference in a payment system.
     */
    initTransactionId?: string;
    /**
     * The currency of initial transaction.
     */
    initTransactionCurrency?: string;
    /**
     * Type of credit card.
     * @example 'Visa'
     * @example 'MasterCard'
     */
    cardType?: string;
    /**
     * Flag for default payment method for auto payments
     */
    defaultPaymentMethod?: boolean;
}
export interface NoraApiCreateCreditCardsResponse extends CommonResponse {
    result: {
        /**
         * Credit card Id.
         */
        creditCardId: number;
        /**
         * Credit card number.
         * Include 8 characters. First 4 characters are "XXXX" and last 4 characters are digits, which present last 4 characters of credit card number.
         */
        creditCardNumber: string;
    };
}
export interface NoraApiSetDefaultCreditCardRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiSetDefaultCreditCardResponse extends CommonResponse {
    result: {
        /**
         * Credit card Id.
         */
        creditCardId: number;
        /**
         * Credit card number.
         * Include 8 characters. First 4 characters are "XXXX" and last 4 characters are digits, which present last 4 characters of credit card number.
         */
        creditCardNumber: string;
        /**
         * Flag for default payment method for auto payments
         */
        defaultPaymentMethod: boolean;
    };
}
export interface NoraApiDeleteCreditCardRequest extends CommonRequest {
    auth: AuthRequest;
}
export interface NoraApiDeleteCreditCardResponse extends CommonResponse {
}
export interface NoraApiInitTrueMoneyRequest extends CommonRequest {
    auth: AuthRequest;
    /** Redirect url additional parameters */
    metadata?: {
        [key: string]: string;
    };
}
export interface NoraApiInitTrueMoneyResponse extends CommonRequest {
    /** Redirect url with code */
    result: string;
}
export interface NoraApiBindTrueMoneyRequest extends CommonRequest {
    auth: AuthRequest;
    /** Code value returned with a redirect request */
    authCode: string;
}
export interface NoraApiBindTrueMoneyResponse extends CommonRequest {
}
