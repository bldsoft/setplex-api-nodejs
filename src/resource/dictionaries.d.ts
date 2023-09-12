import type { NoraAPIGetCountriesResponse, NoraAPIGetLanguagesRequest, NoraAPIGetLanguagesResponse, NoraAPIGetCurrenciesRequest, NoraAPIGetCurrenciesResponse, NoraAPIGetCountriesRequest } from './types/dictionaries.types';
import type { AxiosRequestConfig } from 'axios';
import type { ContextAPI } from './types';
export declare class DictionariesAPI {
    readonly path = "/dictionaries";
    readonly context: ContextAPI;
    constructor(ctx: ContextAPI);
    /**
     * Get avaiable countries
     * @param data SubscriptionsAPIGetRequest
     * @param config AxiosConfig
     * @returns List of available subscriptions
     */
    getCountries(data?: NoraAPIGetCountriesRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetCountriesResponse>;
    /**
     * Get avaiable languages
     * @param data SubscriptionsAPIGetRequest
     * @param config AxiosConfig
     * @returns List of available subscriptions
     */
    getLanguages(data?: NoraAPIGetLanguagesRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetLanguagesResponse>;
    /**
     * Get avaiable currencies
     * @param data SubscriptionsAPIGetRequest
     * @param config AxiosConfig
     * @returns List of available subscriptions
     */
    getCurrencies(data?: NoraAPIGetCurrenciesRequest, config?: AxiosRequestConfig): Promise<NoraAPIGetCurrenciesResponse>;
}
