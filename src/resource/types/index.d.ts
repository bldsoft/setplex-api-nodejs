import type { AxiosInstance } from 'axios';
export interface AuthRequest {
    token?: string;
    login?: string;
    accountNumber?: string;
    lastName?: string;
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
