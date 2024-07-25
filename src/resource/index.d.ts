import { SubscriptionsAPI } from './subscriptions';
import { PaymentsAPI } from './payments';
import { SubscribersAPI } from './subscribers';
import type { APIConfig, ContextAPI } from './types';
import type { AxiosInstance } from 'axios';
import { PaymentSystemsAPI } from './payment-systems';
import { PaymentMethodsAPI } from './payment-methods';
import { DictionariesAPI } from './dictionaries';
import { ContentRentProlongationAPI } from './content-rent';
import { PaidContentAPI } from './paid-content';
export declare class NoraAPI implements ContextAPI {
    readonly config: APIConfig;
    readonly logger: unknown;
    readonly subscribers: SubscribersAPI;
    readonly payments: PaymentsAPI;
    readonly subscriptions: SubscriptionsAPI;
    readonly paymentSystems: PaymentSystemsAPI;
    readonly paymentMethods: PaymentMethodsAPI;
    readonly dictionaries: DictionariesAPI;
    readonly contentRent: ContentRentProlongationAPI;
    readonly paidContent: PaidContentAPI;
    constructor(cfg?: APIConfig);
    send(): AxiosInstance;
    post<R = any, D = any>(url: string, data?: D, config?: any): Promise<R>;
    get<R = any, D = any>(url: string, config?: any): Promise<R>;
}
