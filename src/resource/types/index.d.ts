import type { AxiosInstance } from 'axios';
export interface AuthRequest {
    token?: string;
    login?: string;
    accountNumber?: string;
    lastName?: string;
    /**
     * JWT access token for subscriber what can be issued for nora client application.
     * If access token is specified, account number and last name validation will be skipped.
     */
    accessToken?: string;
}
export interface CommonRequest {
    auth?: AuthRequest;
}
export interface OperationStatusResponse {
    code: string;
    message: string;
}
export interface CommonResponse {
    result: unknown;
    status: OperationStatusResponse;
}
export interface APIConfig {
    baseURL: string;
    token: string;
    login: string;
}
export interface ContextAPI {
    config: APIConfig;
    logger: unknown;
    send: () => AxiosInstance;
    post<R = any, D = any>(url: string, data?: D, config?: any): Promise<R>;
}
export interface Location {
    id: number;
    name: string;
}
