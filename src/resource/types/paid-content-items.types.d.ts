export type NoraAPIContentItemTypes = NoraAPIContentItemChannel | NoraAPIContentItemEpisode | NoraAPIContentItemSeason | NoraAPIContentItemTVShow | NoraAPIContentItemLiveEvent | NoraAPIContentItemVod | NoraAPIContentItemContentSet;
export interface NoraAPIContentItemPriceSettings {
    /** Monetization type of the content. */
    type: 'RENT' | 'PURCHASE';
    /** Monetization payment method of the content. */
    paymentMethod: 'PER_ITEM' | 'PER_SET';
    /**
     * Price of the content item, if the monetization payment method is per items.
     * Or price of the whole bundle, which contains the content item, if the monetization payment method is per bundle.
     */
    price: number;
    /** Code of the currency (ISO 4217) of the content. */
    currency: string;
    /**
     * Number of days, months or years of the availability of the content item, if the monetization payment method is per item.
     * Or number of days, months or years of the availability of the bundle, which contains the content item, if the monetization payment method is per bundle.
     * This field does not work alone. This field works with the 'availabilityPeriodTimeUnit' field. Null is returned if the rent period is unlimited.
     */
    availabilityPeriodLength: number;
    /**
     * Interval of time the availability content item, or bundle, which contains the content item.
     * This field does not work alone. This field works with the 'length' field.
     */
    availabilityPeriodTimeUnit: 'DAY' | 'MONTH' | 'YEAR';
    /** */
    availabilityDueDate: string;
    /** Flag describes if the item rent period is unlimited. */
    periodUnlimited: boolean;
    /** The bundle, which the content item belongs to. Null is returned if the content item does not belong to the bundle. */
    bundle: {
        /** Content bundle external id. */
        externalId: string;
        /** The name of the bundle. */
        name: string;
        /** Content bundle cover image url. */
        coverImageUrl: string;
        /** Content bundle description. */
        description: string;
    };
}
export interface NoraAPIContentItemPurchaseInfo {
    /** Type of the purchasing content. */
    contentPurchaseType: 'BOUGHT' | 'RENTED' | 'RENTED_UNLIMITED';
    /** Date and Time (UTC standard) of the end of the accessibility of the rented content. Null is returned if the rent period is unlimited. */
    rentedUntil: string;
}
export interface NoraAPIContentItemChannel {
    /** The external identifier of the paid channel. */
    externalId: string;
    /** The name of the TV Channel. */
    name: string;
    /** The URL source, where is the logo of the Channel */
    logoUrl: string;
    /** Resolution of the paid channel. */
    resolution: 'HD' | 'SD' | 'FHD' | '_2K' | '_4K';
    /** Flag to filter content by geo block. Default value is true. */
    blockedByAcl: boolean;
    /** Price settings */
    priceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemLiveEvent {
    /** The external identifier of the paid live event. */
    externalId: string;
    /** The name of the Live event. */
    name: string;
    /** Description of the Live Event. */
    description: string;
    /** Age rating of the Live Event. */
    ageRatings: string;
    /** Status of the Live Event. */
    status: 'LIVE' | 'SOON';
    /** Date and time of the Live Event start */
    startTime: string;
    /** Date and time of the Live Event end. */
    endTime: string;
    /** URL resource, where the vertical poster of the live event is stored. */
    verticalPosterUrl: string;
    /** URL resource, where the horizontal poster of the live event is stored. */
    videoPosterUrl: string;
    /**
     * Flag, which describes if the catch-up of the live event exists.
     * Note: at the present time, catch-ups of the passed live events are not available for purchase. Only the 'false' value is available.
     */
    recorded: boolean;
    /** Date and time of the catch-up availability. */
    recordAvailableToTime: string;
    /** Price settings */
    priceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemTVShow {
    /** The external identifier of the paid TV Show. */
    externalId: string;
    /** The name of the TV Show. */
    name: string;
    /** Description of the TV Show. */
    description: string;
    /** Directors of the TV Show. */
    directors: string;
    /** Cast of the TV Show. */
    stars: string;
    /** Year of the release of the TV Show. */
    year: number;
    /** Age rating of the TV Show. */
    ageRatings: string;
    /** URL resource, where landscape image of the TV Show is stored */
    landscapeImageUrl: string;
    /** URL resource, where portrait image of the TV Show is stored */
    portraitImageUrl: string;
    /** URL resource, where the background image of the TV Show is stored */
    backgroundImageUrl: string;
    /** Flag to filter content by geo block. Default value is true. */
    blockedByAcl: boolean;
    /** Price settings */
    priceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemSeason {
    /** The external identifier of the TV Show Season. */
    externalId: string;
    /** The name of the TV Show Season. */
    name: string;
    /** Description of the TV Show Season. */
    description: string;
    /** Directors of the TV Show Season. */
    directors: string;
    /** Cast of the TV Show Season. */
    stars: string;
    /** Year of the release of the TV Show Season. */
    year: number;
    /** The sequence number for the TV Show Season, beginning at zero. */
    sortOrder: number;
    /** Number of the TV Show Season, which is displayed on a client app. */
    displayNumber: string;
    /** URL resource, where landscape image of the TV Show Season is stored */
    landscapeImageUrl: string;
    /** URL resource, where portrait image of the TV Show Season is stored */
    portraitImageUrl: string;
    /** URL resource, where the background image of the TV Show Season is stored */
    backgroundImageUrl: string;
    /** Flag to filter content by geo block. Default value is true. */
    blockedByAcl: boolean;
    /** Price information about the TV Show Season. If the TV Show is not monetized per Seasons, the array will be empty. */
    seasonPriceSettings: NoraAPIContentItemPriceSettings[];
    /** Price information about TV Show, which is monetized as entire TV Show. If the TV Show is not monetized as entire TV Show, array will be empty. */
    tvShowPriceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemEpisode {
    /** The external identifier of the TV Show Episode. */
    externalId: string;
    /** The name of the TV Show Episode. */
    name: string;
    /** Description of the TV Show Episode. */
    description: string;
    /** The sequence number for the TV Show Episode, beginning at zero. */
    sortOrder: number;
    /** Directors of the TV Show Episode. */
    directors: string;
    /** Cast of the TV Show Episode. */
    stars: string;
    /** Unix epoch time of creation TV Show Episode in Nora. */
    releaseTime: number;
    /** Resolution of the TV Show Episode. */
    resolution: 'HD' | 'SD' | 'FHD' | '_2K' | '_4K';
    /** Number of the TV Show Season, which is displayed on a client app. */
    displayNumber: string;
    /** Number of hours, minutes and seconds of TV Show Episode duration. */
    length: string;
    /** Flag to filter content by geo block. Default value is true. */
    blockedByAcl: boolean;
    /** URL resource, where landscape image of the TV Show Episode is stored */
    landscapeImageUrl: string;
    /** URL resource, where portrait image of the TV Show Episode is stored */
    portraitImageUrl: string;
    /** URL resource, where background image of the TV Show Episode is stored */
    backgroundImageUrl: string;
    /** Price information about the TV Show Episode. If the TV Show is not monetized per Episode, the array will be empty. */
    episodePriceSettings: NoraAPIContentItemPriceSettings[];
    /** Price information about the TV Show Season. If the TV Show is not monetized per Seasons, the array will be empty. */
    seasonPriceSettings: NoraAPIContentItemPriceSettings[];
    /** Price information about TV Show, which is monetized as an entire TV Show. If the TV Show is not monetized as an entire TV Show, the array will be empty. */
    tvShowPriceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemVod {
    /** The external identifier of the Movie. */
    externalId: string;
    /** The name of the Movie. */
    name: string;
    /** Description of the Movie. */
    description: string;
    /** Directors of the Movie. */
    directors: string;
    /** Cast of the Movie. */
    stars: string;
    /** Year of the release of the Movie. */
    year: number;
    /** Age rating of the Movie. */
    ageRatings: string;
    /** URL resource, where image of the Movie is stored. */
    imageUrl: string;
    /** URL resource, where the background image of the Movie is stored. */
    imageBackgroundUrl: string;
    /** URL resource, where the horizontal image of the Movie is stored. */
    imageHorizontalUrl: string;
    /** Number of hours, minutes and seconds of the Movie duration. */
    length: string;
    /** Resolution of the Movie. */
    resolution: 'HD' | 'SD' | 'FHD' | '_2K' | '_4K';
    /** Flag to filter content by geo block. Default value is true. */
    blockedByAcl: boolean;
    /** Price information about the Movie. */
    priceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
export interface NoraAPIContentItemContentSet {
    /** The external identifier of the paid bundle. */
    externalId: string;
    /** The name of the bundle. */
    name: string;
    /** Description of the bundle. */
    description: string;
    /** The URL source, where the cover image of the Bundle is stored */
    coverImageUrl: string;
    /** Quantity of the content items in the Bundle. */
    contentQuantity: number;
    /** Date and time when the bundle last changed. */
    updatedTime: string;
    /** Price settings */
    priceSettings: NoraAPIContentItemPriceSettings[];
    /** Contains info about content purchase. Null is returned, if the content is not purchased by Subscriber. */
    purchaseInfo: NoraAPIContentItemPurchaseInfo;
}
