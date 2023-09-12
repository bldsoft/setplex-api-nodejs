import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
import type { NoraApiCreateCreditCardsRequest, NoraApiCreateCreditCardsResponse, NoraApiDeleteCreditCardRequest, NoraApiSetDefaultCreditCardRequest, NoraApiSetDefaultCreditCardResponse, NoraApiGetPaymentMethodResponse, NoraApiGetPaymentMethodReuqest, NoraApiSetDefaultWalletRequest, NoraApiSetDefaultWalletResponse, NoraApiDeleteWalletRequest, NoraApiDeleteWalletResponse, NoraApiDeleteCreditCardResponse, NoraApiAddPaymentMethodRequest, NoraApiAddPaymentMethodResponse } from './types/payment-method.types';
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
}
