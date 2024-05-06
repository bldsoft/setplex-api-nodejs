export declare class NoraApiError extends Error {
    response: {
        status: number;
    };
    constructor(message: any);
}
