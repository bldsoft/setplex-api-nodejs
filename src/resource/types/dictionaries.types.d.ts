import type { AuthRequest, CommonRequest, CommonResponse } from '.';
export interface NoraAPIGetCountriesRequest extends CommonRequest {
    auth?: AuthRequest;
}
export interface NoraAPIGetCountriesResponse extends CommonResponse {
    result: NoraApiCountryItem[];
}
export interface NoraApiCountryItem {
    key: string;
    value: string;
}
export interface NoraAPIGetLanguagesRequest extends CommonRequest {
    auth?: AuthRequest;
}
export interface NoraAPIGetLanguagesResponse extends CommonResponse {
    result: NoraApiLanguageItem[];
}
export interface NoraApiLanguageItem {
    key: string;
    value: string;
}
export interface NoraAPIGetCurrenciesRequest extends CommonRequest {
    auth?: AuthRequest;
}
export interface NoraAPIGetCurrenciesResponse extends CommonResponse {
    result: NoraApiCurrencyItem[];
}
export interface NoraApiCurrencyItem {
    key: string;
    value: string;
}
