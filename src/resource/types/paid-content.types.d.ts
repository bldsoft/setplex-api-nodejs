import { CommonRequest, CommonResponse } from '.';
import { NoraAPIContentItemTypes } from './paid-content-items.types';
export interface NoraAPIGetPaidContentRequest extends CommonRequest {
    /** Unsigned page number */
    page: number;
    /** Unsigned elements count on one page. Max size is 50 */
    size: number;
    /** External subscription identifier */
    subscriptionIdentifier: string;
    contentType: 'CHANNEL' | 'LIVE_EVENT' | 'TV_SHOW' | 'SEASON' | 'EPISODE' | 'VOD' | 'CHANNEL_SET' | 'TV_SHOW_SET' | 'VOD_SET';
    /** Flag to filter content by geo block. Default value is true. */
    filterByAcl?: boolean;
    /** Filter already purchased content for subscriber if subscriber's account number and last name are passed in the auth request property. Default value is true. */
    filterPurchased?: boolean;
    /** Include upcoming subscription to recalculation (if prorating enabled) */
    prorateToUpcoming?: boolean;
    /** If content type is SEASON OR EPISODE - tvShowId is required. Seasons are returned for specific tv show. */
    tvShowId?: string;
    /** If content type is EPISODE and episodes assigned to season - seasonId is required. Episodes are returned for specific tv show and season. If episodes aren't assigned to season - they are returned for whole tv show. */
    seasonId?: string;
}
export interface NoraAPIGetPaidContentResponse extends CommonResponse {
    result: {
        content: NoraAPIContentItemTypes[];
        /** Unique identifier of the subscription */
        subscriptionId: string;
        /** Number of the displayed page. */
        number: number;
        /** Maximum elements, which are displayed on the page. */
        size: number;
        /** The flag which describes if the page is first. */
        first: boolean;
        /** The flag which describes if the page is last. */
        last: boolean;
    };
}
export interface NoraAPIGetItemPaidContentRequest extends CommonRequest {
    /** External subscription identifier */
    subscriptionIdentifier: string;
    /** External id of the content item */
    externalId: string;
    /** Flag to filter content by geo block. Default value is true. */
    filterByAcl?: boolean;
    /** Filter already purchased content for subscriber if subscriber's account number and last name are passed in the auth request property. Default value is true. */
    filterPurchased?: boolean;
    /** Include upcoming subscription to recalculation (if prorating enabled) */
    prorateToUpcoming?: boolean;
}
export interface NoraAPIGetItemPaidContentResponse extends CommonResponse {
    result: {
        /** Unique identifier of the subscription */
        subscriptionId: string;
        /** Paid content item type */
        contentType: 'CHANNEL' | 'EPISODE' | 'SEASON' | 'TV_SHOW' | 'LIVE_EVENT' | 'VOD';
        content: NoraAPIContentItemTypes;
    };
}
