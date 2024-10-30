import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
import type { NoraApiCreateCreditCardsRequest, NoraApiCreateCreditCardsResponse, NoraApiDeleteCreditCardRequest, NoraApiSetDefaultCreditCardRequest, NoraApiSetDefaultCreditCardResponse, NoraApiGetPaymentMethodResponse, NoraApiGetPaymentMethodReuqest, NoraApiSetDefaultWalletRequest, NoraApiSetDefaultWalletResponse, NoraApiDeleteWalletRequest, NoraApiDeleteWalletResponse, NoraApiDeleteCreditCardResponse, NoraApiAddPaymentMethodRequest, NoraApiAddPaymentMethodResponse, NoraApiInitTrueMoneyRequest, NoraApiInitTrueMoneyResponse, NoraApiBindTrueMoneyRequest, NoraApiBindTrueMoneyResponse, NoraApiInitDCBRequest, NoraApiInitDCBResponse, NoraApiVerifyCertIdDCBRequest, NoraApiVerifyCertIdDCBResponse, NoraApiVerifyOtpDCBRequest, NoraApiVerifyOtpDCBResponse } from './types/payment-method.types';
export declare class PaymentMethodsAPI {
    readonly path = "/payment-method";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get saved tokenized payment methods for subscriber
     * @param data
     * @param config
     */
    get(data: NoraApiGetPaymentMethodReuqest, config?: AxiosRequestConfig): Promise<NoraApiGetPaymentMethodResponse>;
    /**
     * Add tokenized payment method
     * @param data tokenized wallet data
     * @param config axios config
     * @returns
     */
    add(data: NoraApiAddPaymentMethodRequest, config?: AxiosRequestConfig): Promise<NoraApiAddPaymentMethodResponse>;
    /**
     * Set tokenized wallet as default payment method for auto payments
     * @param data auth data
     * @param walletId walletId
     * @param config axios config
     * @returns
     */
    setDefaultWallet(data: NoraApiSetDefaultWalletRequest, walletId: number, config?: AxiosRequestConfig): Promise<NoraApiSetDefaultWalletResponse>;
    /**
     * Delete subscriber’s stored wallet
     * @param data auth data
     * @param creditCardId wallet Id
     * @param config AxiosConfiguration
     */
    deleteWallet(data: NoraApiDeleteWalletRequest, walletId: number, config?: AxiosRequestConfig): Promise<NoraApiDeleteWalletResponse>;
    /**
     * This call creates new credit card for Subscriber with given accountNumber and lastName.
     * @param data Credit card info
     * @param config AxiosConfiguration
     * @returns Created credit card Id
     */
    createCreditCard(data: NoraApiCreateCreditCardsRequest, config?: AxiosRequestConfig): Promise<NoraApiCreateCreditCardsResponse>;
    /**
     * Set credit card as default payment method for auto payments
     * @param data Auth info
     * @param creditCardId creditCardId
     * @param config AxiosConfiguration
     */
    setDefaultCreditCard(data: NoraApiSetDefaultCreditCardRequest, creditCardId: number, config?: AxiosRequestConfig): Promise<NoraApiSetDefaultCreditCardResponse>;
    /**
     * Delete subscriber’s stored credit card
     * @param data auth data
     * @param creditCardId credit card Id
     * @param config AxiosConfiguration
     */
    deleteCreditCard(data: NoraApiDeleteCreditCardRequest, creditCardId: number, config?: AxiosRequestConfig): Promise<NoraApiDeleteCreditCardResponse>;
    /**
     * Initiates the binding process of a TrueMoney account for a subscriber with a specified identifier.
     * Returns a deeplink which a client application should provide to the subscriber in some form (like QR-code or something else).
     * The deeplink redirects the subscriber to TMN application where he can accept binding.
     * @param data auth data
     * @param metadata redirect url additional parameters
     * @param config AxiosConfiguration
     */
    initTrueMoney(data: NoraApiInitTrueMoneyRequest, config?: AxiosRequestConfig): Promise<NoraApiInitTrueMoneyResponse>;
    /**
     * Finishes the binding process of a TrueMoney account after the subscriber has given the necessary consent
     * and auth code has been retrieved by a client application.
     * @param data auth data
     * @param authCode code for binding true money
     * @param config AxiosConfiguration
     */
    bindTrueMoney(data: NoraApiBindTrueMoneyRequest, config?: AxiosRequestConfig): Promise<NoraApiBindTrueMoneyResponse>;
    /**
     * Check state of DCB payment method and prepare for...
     * 0 - Success
     * 2 - Invalid request
     * 158 - True Online Subscriber lookup failed
     * 162 - SMS limit reached
     * 164 - circuitId/msisdn is required
     */
    initDCB(data: NoraApiInitDCBRequest, config?: AxiosRequestConfig): Promise<NoraApiInitDCBResponse>;
    /**
     * Verify OTP for DCB payment methods (TrueOnline/TrueMove-H)
     * Possible status codes: 0, 2, 159, 163, 165
     */
    verifyOtpDCB(data: NoraApiVerifyOtpDCBRequest, config?: AxiosRequestConfig): Promise<NoraApiVerifyOtpDCBResponse>;
    /**
     * Verify Certificate ID (Thai ID, Passport, or Alien Number). Used for True Online Payments
     * Possible status codes: 0, 2, 160, 161, 163
     */
    verifyCertIdDCB(data: NoraApiVerifyCertIdDCBRequest, config?: AxiosRequestConfig): Promise<NoraApiVerifyCertIdDCBResponse>;
}
