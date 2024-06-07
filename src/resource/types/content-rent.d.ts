import type { CommonRequest, CommonResponse, OperationStatusResponse } from './index';
import { NoraAPISubscriberContentRentProlongation } from './subscribers.types';
/** Interface of the request object for call /content-rent-prolongations/get */
export interface NoraAPIGetContentRentRequest extends CommonRequest {
    /** Content type allowed to update auto payment state. Currently CHANNEL and CHANNEL_SET are supported. */
    contentType: 'CHANNEL' | 'CHANNEL_SET' | 'EPISODE' | 'SEASON' | 'TV_SHOW' | 'TV_SHOW_SET' | 'VOD' | 'VOD_SET';
    /** Unsigned page number */
    page: number;
    /** Unsigned elements count on one page. Max size is 50 */
    size: number;
}
/** Interface of the response object for call /content-rent-prolongations/get */
export interface NoraAPIGetContentRentResponse {
    content: NoraAPISubscriberContentRentProlongation[];
    /** Number of the displayed page. */
    number: number;
    /** Maximum elements, which are displayed on the page. */
    size: number;
    /** The flag which describes if the page is first. */
    first: boolean;
    /** The flag which describes if the page is last. */
    last: boolean;
    status: OperationStatusResponse;
}
/** Interface of the request object for call /content-rent-prolongations/autopay */
export interface NoraAPIAutopayContentRentRequest extends CommonRequest {
    /** Content id allowed for auto payments */
    externalId: string;
    autoPay: boolean;
}
/** Interface of the response object for call /content-rent-prolongations/autopay */
export interface NoraAPIAutopayContentRentResponse extends CommonResponse {
    externalId: string;
    autoPay: boolean;
}
