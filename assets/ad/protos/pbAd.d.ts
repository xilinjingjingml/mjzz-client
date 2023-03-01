import * as $protobuf from "protobufjs";
/** Namespace ad. */
export namespace ad {

    /** Represents an Ad */
    class Ad extends $protobuf.rpc.Service {

        /**
         * Constructs a new Ad service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Ad service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Ad;

        /**
         * Calls InitAdOrder.
         * @param request InitAdOrderReq message or plain object
         * @param callback Node-style callback called with the error, if any, and InitAdOrderAck
         */
        public initAdOrder(request: ad.IInitAdOrderReq, callback: ad.Ad.InitAdOrderCallback): void;

        /**
         * Calls InitAdOrder.
         * @param request InitAdOrderReq message or plain object
         * @returns Promise
         */
        public initAdOrder(request: ad.IInitAdOrderReq): Promise<ad.InitAdOrderAck>;

        /**
         * Calls GetAdOrder.
         * @param request GetAdOrderReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAdOrderAck
         */
        public getAdOrder(request: ad.IGetAdOrderReq, callback: ad.Ad.GetAdOrderCallback): void;

        /**
         * Calls GetAdOrder.
         * @param request GetAdOrderReq message or plain object
         * @returns Promise
         */
        public getAdOrder(request: ad.IGetAdOrderReq): Promise<ad.GetAdOrderAck>;

        /**
         * Calls UpdateAdOrder.
         * @param request UpdateAdOrderReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateAdOrderAck
         */
        public updateAdOrder(request: ad.IUpdateAdOrderReq, callback: ad.Ad.UpdateAdOrderCallback): void;

        /**
         * Calls UpdateAdOrder.
         * @param request UpdateAdOrderReq message or plain object
         * @returns Promise
         */
        public updateAdOrder(request: ad.IUpdateAdOrderReq): Promise<ad.UpdateAdOrderAck>;

        /**
         * Calls GetAdAwards.
         * @param request GetAdAwardsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAdAwardsAck
         */
        public getAdAwards(request: ad.IGetAdAwardsReq, callback: ad.Ad.GetAdAwardsCallback): void;

        /**
         * Calls GetAdAwards.
         * @param request GetAdAwardsReq message or plain object
         * @returns Promise
         */
        public getAdAwards(request: ad.IGetAdAwardsReq): Promise<ad.GetAdAwardsAck>;

        /**
         * Calls GetAdSpots.
         * @param request GetAdSpotsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAdSpotsAck
         */
        public getAdSpots(request: ad.IGetAdSpotsReq, callback: ad.Ad.GetAdSpotsCallback): void;

        /**
         * Calls GetAdSpots.
         * @param request GetAdSpotsReq message or plain object
         * @returns Promise
         */
        public getAdSpots(request: ad.IGetAdSpotsReq): Promise<ad.GetAdSpotsAck>;
    }

    namespace Ad {

        /**
         * Callback as used by {@link ad.Ad#initAdOrder}.
         * @param error Error, if any
         * @param [response] InitAdOrderAck
         */
        type InitAdOrderCallback = (error: (Error|null), response?: ad.InitAdOrderAck) => void;

        /**
         * Callback as used by {@link ad.Ad#getAdOrder}.
         * @param error Error, if any
         * @param [response] GetAdOrderAck
         */
        type GetAdOrderCallback = (error: (Error|null), response?: ad.GetAdOrderAck) => void;

        /**
         * Callback as used by {@link ad.Ad#updateAdOrder}.
         * @param error Error, if any
         * @param [response] UpdateAdOrderAck
         */
        type UpdateAdOrderCallback = (error: (Error|null), response?: ad.UpdateAdOrderAck) => void;

        /**
         * Callback as used by {@link ad.Ad#getAdAwards}.
         * @param error Error, if any
         * @param [response] GetAdAwardsAck
         */
        type GetAdAwardsCallback = (error: (Error|null), response?: ad.GetAdAwardsAck) => void;

        /**
         * Callback as used by {@link ad.Ad#getAdSpots}.
         * @param error Error, if any
         * @param [response] GetAdSpotsAck
         */
        type GetAdSpotsCallback = (error: (Error|null), response?: ad.GetAdSpotsAck) => void;
    }

    /** AdOrderState enum. */
    enum AdOrderState {
        Init = 0,
        Cancel = 1,
        Finish = 2,
        Complete = 3
    }

    /** Properties of an AwardConfig. */
    interface IAwardConfig {

        /** AwardConfig index */
        index?: (number|null);

        /** AwardConfig minNum */
        minNum?: (number|null);

        /** AwardConfig maxNum */
        maxNum?: (number|null);
    }

    /** Represents an AwardConfig. */
    class AwardConfig implements IAwardConfig {

        /**
         * Constructs a new AwardConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IAwardConfig);

        /** AwardConfig index. */
        public index: number;

        /** AwardConfig minNum. */
        public minNum: number;

        /** AwardConfig maxNum. */
        public maxNum: number;

        /**
         * Creates a new AwardConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardConfig instance
         */
        public static create(properties?: ad.IAwardConfig): ad.AwardConfig;

        /**
         * Encodes the specified AwardConfig message. Does not implicitly {@link ad.AwardConfig.verify|verify} messages.
         * @param message AwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link ad.AwardConfig.verify|verify} messages.
         * @param message AwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.AwardConfig;

        /**
         * Decodes an AwardConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.AwardConfig;

        /**
         * Verifies an AwardConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardConfig
         */
        public static fromObject(object: { [k: string]: any }): ad.AwardConfig;

        /**
         * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
         * @param message AwardConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.AwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award index */
        index?: (number|null);

        /** Award num */
        num?: (number|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IAward);

        /** Award index. */
        public index: number;

        /** Award num. */
        public num: number;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: ad.IAward): ad.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link ad.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link ad.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.Award;

        /**
         * Verifies an Award message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Award
         */
        public static fromObject(object: { [k: string]: any }): ad.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pair. */
    interface IPair {

        /** Pair key */
        key?: (string|null);

        /** Pair value */
        value?: (string|null);
    }

    /** Represents a Pair. */
    class Pair implements IPair {

        /**
         * Constructs a new Pair.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IPair);

        /** Pair key. */
        public key: string;

        /** Pair value. */
        public value: string;

        /**
         * Creates a new Pair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pair instance
         */
        public static create(properties?: ad.IPair): ad.Pair;

        /**
         * Encodes the specified Pair message. Does not implicitly {@link ad.Pair.verify|verify} messages.
         * @param message Pair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pair message, length delimited. Does not implicitly {@link ad.Pair.verify|verify} messages.
         * @param message Pair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.Pair;

        /**
         * Decodes a Pair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.Pair;

        /**
         * Verifies a Pair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pair
         */
        public static fromObject(object: { [k: string]: any }): ad.Pair;

        /**
         * Creates a plain object from a Pair message. Also converts values to other types if specified.
         * @param message Pair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IdItem. */
    interface IIdItem {

        /** IdItem channel */
        channel?: (number|null);

        /** IdItem id */
        id?: (string|null);

        /** IdItem percentage */
        percentage?: (number|null);
    }

    /** Represents an IdItem. */
    class IdItem implements IIdItem {

        /**
         * Constructs a new IdItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IIdItem);

        /** IdItem channel. */
        public channel: number;

        /** IdItem id. */
        public id: string;

        /** IdItem percentage. */
        public percentage: number;

        /**
         * Creates a new IdItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdItem instance
         */
        public static create(properties?: ad.IIdItem): ad.IdItem;

        /**
         * Encodes the specified IdItem message. Does not implicitly {@link ad.IdItem.verify|verify} messages.
         * @param message IdItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IIdItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdItem message, length delimited. Does not implicitly {@link ad.IdItem.verify|verify} messages.
         * @param message IdItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IIdItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.IdItem;

        /**
         * Decodes an IdItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.IdItem;

        /**
         * Verifies an IdItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdItem
         */
        public static fromObject(object: { [k: string]: any }): ad.IdItem;

        /**
         * Creates a plain object from an IdItem message. Also converts values to other types if specified.
         * @param message IdItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.IdItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order id */
        id?: (string|null);

        /** Order service */
        service?: (string|null);

        /** Order uid */
        uid?: (number|Long|null);

        /** Order aid */
        aid?: (number|null);

        /** Order awards */
        awards?: (ad.IAward[]|null);

        /** Order state */
        state?: (ad.AdOrderState|null);

        /** Order createTime */
        createTime?: (number|Long|null);

        /** Order updateTime */
        updateTime?: (number|Long|null);
    }

    /** Represents an Order. */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IOrder);

        /** Order id. */
        public id: string;

        /** Order service. */
        public service: string;

        /** Order uid. */
        public uid: (number|Long);

        /** Order aid. */
        public aid: number;

        /** Order awards. */
        public awards: ad.IAward[];

        /** Order state. */
        public state: ad.AdOrderState;

        /** Order createTime. */
        public createTime: (number|Long);

        /** Order updateTime. */
        public updateTime: (number|Long);

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: ad.IOrder): ad.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link ad.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link ad.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): ad.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Record. */
    interface IRecord {

        /** Record area */
        area?: (number|null);

        /** Record type */
        type?: (number|null);

        /** Record curNum */
        curNum?: (number|null);

        /** Record maxNum */
        maxNum?: (number|null);

        /** Record awards */
        awards?: (ad.IAwardConfig[]|null);

        /** Record desc */
        desc?: (string|null);

        /** Record ids */
        ids?: (ad.IIdItem[]|null);
    }

    /** Represents a Record. */
    class Record implements IRecord {

        /**
         * Constructs a new Record.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IRecord);

        /** Record area. */
        public area: number;

        /** Record type. */
        public type: number;

        /** Record curNum. */
        public curNum: number;

        /** Record maxNum. */
        public maxNum: number;

        /** Record awards. */
        public awards: ad.IAwardConfig[];

        /** Record desc. */
        public desc: string;

        /** Record ids. */
        public ids: ad.IIdItem[];

        /**
         * Creates a new Record instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Record instance
         */
        public static create(properties?: ad.IRecord): ad.Record;

        /**
         * Encodes the specified Record message. Does not implicitly {@link ad.Record.verify|verify} messages.
         * @param message Record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Record message, length delimited. Does not implicitly {@link ad.Record.verify|verify} messages.
         * @param message Record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Record message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.Record;

        /**
         * Decodes a Record message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.Record;

        /**
         * Verifies a Record message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Record message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Record
         */
        public static fromObject(object: { [k: string]: any }): ad.Record;

        /**
         * Creates a plain object from a Record message. Also converts values to other types if specified.
         * @param message Record
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.Record, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Record to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitAdOrderReq. */
    interface IInitAdOrderReq {

        /** InitAdOrderReq service */
        service?: (string|null);

        /** InitAdOrderReq uid */
        uid?: (number|Long|null);

        /** InitAdOrderReq aid */
        aid?: (number|null);

        /** InitAdOrderReq awards */
        awards?: (ad.IAward[]|null);

        /** InitAdOrderReq params */
        params?: (ad.IPair[]|null);
    }

    /** Represents an InitAdOrderReq. */
    class InitAdOrderReq implements IInitAdOrderReq {

        /**
         * Constructs a new InitAdOrderReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IInitAdOrderReq);

        /** InitAdOrderReq service. */
        public service: string;

        /** InitAdOrderReq uid. */
        public uid: (number|Long);

        /** InitAdOrderReq aid. */
        public aid: number;

        /** InitAdOrderReq awards. */
        public awards: ad.IAward[];

        /** InitAdOrderReq params. */
        public params: ad.IPair[];

        /**
         * Creates a new InitAdOrderReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitAdOrderReq instance
         */
        public static create(properties?: ad.IInitAdOrderReq): ad.InitAdOrderReq;

        /**
         * Encodes the specified InitAdOrderReq message. Does not implicitly {@link ad.InitAdOrderReq.verify|verify} messages.
         * @param message InitAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IInitAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitAdOrderReq message, length delimited. Does not implicitly {@link ad.InitAdOrderReq.verify|verify} messages.
         * @param message InitAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IInitAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitAdOrderReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.InitAdOrderReq;

        /**
         * Decodes an InitAdOrderReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.InitAdOrderReq;

        /**
         * Verifies an InitAdOrderReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitAdOrderReq
         */
        public static fromObject(object: { [k: string]: any }): ad.InitAdOrderReq;

        /**
         * Creates a plain object from an InitAdOrderReq message. Also converts values to other types if specified.
         * @param message InitAdOrderReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.InitAdOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitAdOrderReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitAdOrderAck. */
    interface IInitAdOrderAck {

        /** InitAdOrderAck errCode */
        errCode?: (number|null);

        /** InitAdOrderAck errMsg */
        errMsg?: (string|null);

        /** InitAdOrderAck oid */
        oid?: (string|null);
    }

    /** Represents an InitAdOrderAck. */
    class InitAdOrderAck implements IInitAdOrderAck {

        /**
         * Constructs a new InitAdOrderAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IInitAdOrderAck);

        /** InitAdOrderAck errCode. */
        public errCode: number;

        /** InitAdOrderAck errMsg. */
        public errMsg: string;

        /** InitAdOrderAck oid. */
        public oid: string;

        /**
         * Creates a new InitAdOrderAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitAdOrderAck instance
         */
        public static create(properties?: ad.IInitAdOrderAck): ad.InitAdOrderAck;

        /**
         * Encodes the specified InitAdOrderAck message. Does not implicitly {@link ad.InitAdOrderAck.verify|verify} messages.
         * @param message InitAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IInitAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitAdOrderAck message, length delimited. Does not implicitly {@link ad.InitAdOrderAck.verify|verify} messages.
         * @param message InitAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IInitAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitAdOrderAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.InitAdOrderAck;

        /**
         * Decodes an InitAdOrderAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.InitAdOrderAck;

        /**
         * Verifies an InitAdOrderAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitAdOrderAck
         */
        public static fromObject(object: { [k: string]: any }): ad.InitAdOrderAck;

        /**
         * Creates a plain object from an InitAdOrderAck message. Also converts values to other types if specified.
         * @param message InitAdOrderAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.InitAdOrderAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitAdOrderAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdOrderReq. */
    interface IGetAdOrderReq {

        /** GetAdOrderReq uid */
        uid?: (number|Long|null);

        /** GetAdOrderReq date */
        date?: (number|Long|null);

        /** GetAdOrderReq oid */
        oid?: (string|null);
    }

    /** Represents a GetAdOrderReq. */
    class GetAdOrderReq implements IGetAdOrderReq {

        /**
         * Constructs a new GetAdOrderReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdOrderReq);

        /** GetAdOrderReq uid. */
        public uid: (number|Long);

        /** GetAdOrderReq date. */
        public date: (number|Long);

        /** GetAdOrderReq oid. */
        public oid: string;

        /**
         * Creates a new GetAdOrderReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdOrderReq instance
         */
        public static create(properties?: ad.IGetAdOrderReq): ad.GetAdOrderReq;

        /**
         * Encodes the specified GetAdOrderReq message. Does not implicitly {@link ad.GetAdOrderReq.verify|verify} messages.
         * @param message GetAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdOrderReq message, length delimited. Does not implicitly {@link ad.GetAdOrderReq.verify|verify} messages.
         * @param message GetAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdOrderReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdOrderReq;

        /**
         * Decodes a GetAdOrderReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdOrderReq;

        /**
         * Verifies a GetAdOrderReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdOrderReq
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdOrderReq;

        /**
         * Creates a plain object from a GetAdOrderReq message. Also converts values to other types if specified.
         * @param message GetAdOrderReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdOrderReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdOrderAck. */
    interface IGetAdOrderAck {

        /** GetAdOrderAck errCode */
        errCode?: (number|null);

        /** GetAdOrderAck errMsg */
        errMsg?: (string|null);

        /** GetAdOrderAck orders */
        orders?: (ad.IOrder[]|null);
    }

    /** Represents a GetAdOrderAck. */
    class GetAdOrderAck implements IGetAdOrderAck {

        /**
         * Constructs a new GetAdOrderAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdOrderAck);

        /** GetAdOrderAck errCode. */
        public errCode: number;

        /** GetAdOrderAck errMsg. */
        public errMsg: string;

        /** GetAdOrderAck orders. */
        public orders: ad.IOrder[];

        /**
         * Creates a new GetAdOrderAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdOrderAck instance
         */
        public static create(properties?: ad.IGetAdOrderAck): ad.GetAdOrderAck;

        /**
         * Encodes the specified GetAdOrderAck message. Does not implicitly {@link ad.GetAdOrderAck.verify|verify} messages.
         * @param message GetAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdOrderAck message, length delimited. Does not implicitly {@link ad.GetAdOrderAck.verify|verify} messages.
         * @param message GetAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdOrderAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdOrderAck;

        /**
         * Decodes a GetAdOrderAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdOrderAck;

        /**
         * Verifies a GetAdOrderAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdOrderAck
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdOrderAck;

        /**
         * Creates a plain object from a GetAdOrderAck message. Also converts values to other types if specified.
         * @param message GetAdOrderAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdOrderAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdOrderAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAdOrderReq. */
    interface IUpdateAdOrderReq {

        /** UpdateAdOrderReq oid */
        oid?: (string|null);

        /** UpdateAdOrderReq state */
        state?: (number|null);
    }

    /** Represents an UpdateAdOrderReq. */
    class UpdateAdOrderReq implements IUpdateAdOrderReq {

        /**
         * Constructs a new UpdateAdOrderReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IUpdateAdOrderReq);

        /** UpdateAdOrderReq oid. */
        public oid: string;

        /** UpdateAdOrderReq state. */
        public state: number;

        /**
         * Creates a new UpdateAdOrderReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAdOrderReq instance
         */
        public static create(properties?: ad.IUpdateAdOrderReq): ad.UpdateAdOrderReq;

        /**
         * Encodes the specified UpdateAdOrderReq message. Does not implicitly {@link ad.UpdateAdOrderReq.verify|verify} messages.
         * @param message UpdateAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IUpdateAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAdOrderReq message, length delimited. Does not implicitly {@link ad.UpdateAdOrderReq.verify|verify} messages.
         * @param message UpdateAdOrderReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IUpdateAdOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAdOrderReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.UpdateAdOrderReq;

        /**
         * Decodes an UpdateAdOrderReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.UpdateAdOrderReq;

        /**
         * Verifies an UpdateAdOrderReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAdOrderReq
         */
        public static fromObject(object: { [k: string]: any }): ad.UpdateAdOrderReq;

        /**
         * Creates a plain object from an UpdateAdOrderReq message. Also converts values to other types if specified.
         * @param message UpdateAdOrderReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.UpdateAdOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAdOrderReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAdOrderAck. */
    interface IUpdateAdOrderAck {

        /** UpdateAdOrderAck errCode */
        errCode?: (number|null);

        /** UpdateAdOrderAck errMsg */
        errMsg?: (string|null);

        /** UpdateAdOrderAck order */
        order?: (ad.IOrder|null);
    }

    /** Represents an UpdateAdOrderAck. */
    class UpdateAdOrderAck implements IUpdateAdOrderAck {

        /**
         * Constructs a new UpdateAdOrderAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IUpdateAdOrderAck);

        /** UpdateAdOrderAck errCode. */
        public errCode: number;

        /** UpdateAdOrderAck errMsg. */
        public errMsg: string;

        /** UpdateAdOrderAck order. */
        public order?: (ad.IOrder|null);

        /**
         * Creates a new UpdateAdOrderAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAdOrderAck instance
         */
        public static create(properties?: ad.IUpdateAdOrderAck): ad.UpdateAdOrderAck;

        /**
         * Encodes the specified UpdateAdOrderAck message. Does not implicitly {@link ad.UpdateAdOrderAck.verify|verify} messages.
         * @param message UpdateAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IUpdateAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAdOrderAck message, length delimited. Does not implicitly {@link ad.UpdateAdOrderAck.verify|verify} messages.
         * @param message UpdateAdOrderAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IUpdateAdOrderAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAdOrderAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.UpdateAdOrderAck;

        /**
         * Decodes an UpdateAdOrderAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.UpdateAdOrderAck;

        /**
         * Verifies an UpdateAdOrderAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAdOrderAck
         */
        public static fromObject(object: { [k: string]: any }): ad.UpdateAdOrderAck;

        /**
         * Creates a plain object from an UpdateAdOrderAck message. Also converts values to other types if specified.
         * @param message UpdateAdOrderAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.UpdateAdOrderAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAdOrderAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdAwardsReq. */
    interface IGetAdAwardsReq {

        /** GetAdAwardsReq oid */
        oid?: (string|null);
    }

    /** Represents a GetAdAwardsReq. */
    class GetAdAwardsReq implements IGetAdAwardsReq {

        /**
         * Constructs a new GetAdAwardsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdAwardsReq);

        /** GetAdAwardsReq oid. */
        public oid: string;

        /**
         * Creates a new GetAdAwardsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdAwardsReq instance
         */
        public static create(properties?: ad.IGetAdAwardsReq): ad.GetAdAwardsReq;

        /**
         * Encodes the specified GetAdAwardsReq message. Does not implicitly {@link ad.GetAdAwardsReq.verify|verify} messages.
         * @param message GetAdAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdAwardsReq message, length delimited. Does not implicitly {@link ad.GetAdAwardsReq.verify|verify} messages.
         * @param message GetAdAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdAwardsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdAwardsReq;

        /**
         * Decodes a GetAdAwardsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdAwardsReq;

        /**
         * Verifies a GetAdAwardsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdAwardsReq
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdAwardsReq;

        /**
         * Creates a plain object from a GetAdAwardsReq message. Also converts values to other types if specified.
         * @param message GetAdAwardsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdAwardsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdAwardsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdAwardsAck. */
    interface IGetAdAwardsAck {

        /** GetAdAwardsAck errCode */
        errCode?: (number|null);

        /** GetAdAwardsAck errMsg */
        errMsg?: (string|null);

        /** GetAdAwardsAck awards */
        awards?: (ad.IAward[]|null);
    }

    /** Represents a GetAdAwardsAck. */
    class GetAdAwardsAck implements IGetAdAwardsAck {

        /**
         * Constructs a new GetAdAwardsAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdAwardsAck);

        /** GetAdAwardsAck errCode. */
        public errCode: number;

        /** GetAdAwardsAck errMsg. */
        public errMsg: string;

        /** GetAdAwardsAck awards. */
        public awards: ad.IAward[];

        /**
         * Creates a new GetAdAwardsAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdAwardsAck instance
         */
        public static create(properties?: ad.IGetAdAwardsAck): ad.GetAdAwardsAck;

        /**
         * Encodes the specified GetAdAwardsAck message. Does not implicitly {@link ad.GetAdAwardsAck.verify|verify} messages.
         * @param message GetAdAwardsAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdAwardsAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdAwardsAck message, length delimited. Does not implicitly {@link ad.GetAdAwardsAck.verify|verify} messages.
         * @param message GetAdAwardsAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdAwardsAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdAwardsAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdAwardsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdAwardsAck;

        /**
         * Decodes a GetAdAwardsAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdAwardsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdAwardsAck;

        /**
         * Verifies a GetAdAwardsAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdAwardsAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdAwardsAck
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdAwardsAck;

        /**
         * Creates a plain object from a GetAdAwardsAck message. Also converts values to other types if specified.
         * @param message GetAdAwardsAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdAwardsAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdAwardsAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdSpotsReq. */
    interface IGetAdSpotsReq {

        /** GetAdSpotsReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetAdSpotsReq. */
    class GetAdSpotsReq implements IGetAdSpotsReq {

        /**
         * Constructs a new GetAdSpotsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdSpotsReq);

        /** GetAdSpotsReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetAdSpotsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdSpotsReq instance
         */
        public static create(properties?: ad.IGetAdSpotsReq): ad.GetAdSpotsReq;

        /**
         * Encodes the specified GetAdSpotsReq message. Does not implicitly {@link ad.GetAdSpotsReq.verify|verify} messages.
         * @param message GetAdSpotsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdSpotsReq message, length delimited. Does not implicitly {@link ad.GetAdSpotsReq.verify|verify} messages.
         * @param message GetAdSpotsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdSpotsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdSpotsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdSpotsReq;

        /**
         * Decodes a GetAdSpotsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdSpotsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdSpotsReq;

        /**
         * Verifies a GetAdSpotsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdSpotsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdSpotsReq
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdSpotsReq;

        /**
         * Creates a plain object from a GetAdSpotsReq message. Also converts values to other types if specified.
         * @param message GetAdSpotsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdSpotsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdSpotsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAdSpotsAck. */
    interface IGetAdSpotsAck {

        /** GetAdSpotsAck errCode */
        errCode?: (number|null);

        /** GetAdSpotsAck errMsg */
        errMsg?: (string|null);

        /** GetAdSpotsAck records */
        records?: (ad.IRecord[]|null);
    }

    /** Represents a GetAdSpotsAck. */
    class GetAdSpotsAck implements IGetAdSpotsAck {

        /**
         * Constructs a new GetAdSpotsAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IGetAdSpotsAck);

        /** GetAdSpotsAck errCode. */
        public errCode: number;

        /** GetAdSpotsAck errMsg. */
        public errMsg: string;

        /** GetAdSpotsAck records. */
        public records: ad.IRecord[];

        /**
         * Creates a new GetAdSpotsAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAdSpotsAck instance
         */
        public static create(properties?: ad.IGetAdSpotsAck): ad.GetAdSpotsAck;

        /**
         * Encodes the specified GetAdSpotsAck message. Does not implicitly {@link ad.GetAdSpotsAck.verify|verify} messages.
         * @param message GetAdSpotsAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IGetAdSpotsAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAdSpotsAck message, length delimited. Does not implicitly {@link ad.GetAdSpotsAck.verify|verify} messages.
         * @param message GetAdSpotsAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IGetAdSpotsAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAdSpotsAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAdSpotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.GetAdSpotsAck;

        /**
         * Decodes a GetAdSpotsAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAdSpotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.GetAdSpotsAck;

        /**
         * Verifies a GetAdSpotsAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAdSpotsAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAdSpotsAck
         */
        public static fromObject(object: { [k: string]: any }): ad.GetAdSpotsAck;

        /**
         * Creates a plain object from a GetAdSpotsAck message. Also converts values to other types if specified.
         * @param message GetAdSpotsAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.GetAdSpotsAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAdSpotsAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdSpotDispNoti. */
    interface IAdSpotDispNoti {

        /** AdSpotDispNoti aid */
        aid?: (number|null);

        /** AdSpotDispNoti params */
        params?: (ad.IPair[]|null);
    }

    /** Represents an AdSpotDispNoti. */
    class AdSpotDispNoti implements IAdSpotDispNoti {

        /**
         * Constructs a new AdSpotDispNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IAdSpotDispNoti);

        /** AdSpotDispNoti aid. */
        public aid: number;

        /** AdSpotDispNoti params. */
        public params: ad.IPair[];

        /**
         * Creates a new AdSpotDispNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdSpotDispNoti instance
         */
        public static create(properties?: ad.IAdSpotDispNoti): ad.AdSpotDispNoti;

        /**
         * Encodes the specified AdSpotDispNoti message. Does not implicitly {@link ad.AdSpotDispNoti.verify|verify} messages.
         * @param message AdSpotDispNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IAdSpotDispNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdSpotDispNoti message, length delimited. Does not implicitly {@link ad.AdSpotDispNoti.verify|verify} messages.
         * @param message AdSpotDispNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IAdSpotDispNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdSpotDispNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdSpotDispNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.AdSpotDispNoti;

        /**
         * Decodes an AdSpotDispNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdSpotDispNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.AdSpotDispNoti;

        /**
         * Verifies an AdSpotDispNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdSpotDispNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdSpotDispNoti
         */
        public static fromObject(object: { [k: string]: any }): ad.AdSpotDispNoti;

        /**
         * Creates a plain object from an AdSpotDispNoti message. Also converts values to other types if specified.
         * @param message AdSpotDispNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.AdSpotDispNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdSpotDispNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PublishNoti. */
    interface IPublishNoti {

        /** PublishNoti params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents a PublishNoti. */
    class PublishNoti implements IPublishNoti {

        /**
         * Constructs a new PublishNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: ad.IPublishNoti);

        /** PublishNoti params. */
        public params: { [k: string]: string };

        /**
         * Creates a new PublishNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishNoti instance
         */
        public static create(properties?: ad.IPublishNoti): ad.PublishNoti;

        /**
         * Encodes the specified PublishNoti message. Does not implicitly {@link ad.PublishNoti.verify|verify} messages.
         * @param message PublishNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ad.IPublishNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishNoti message, length delimited. Does not implicitly {@link ad.PublishNoti.verify|verify} messages.
         * @param message PublishNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ad.IPublishNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ad.PublishNoti;

        /**
         * Decodes a PublishNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ad.PublishNoti;

        /**
         * Verifies a PublishNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishNoti
         */
        public static fromObject(object: { [k: string]: any }): ad.PublishNoti;

        /**
         * Creates a plain object from a PublishNoti message. Also converts values to other types if specified.
         * @param message PublishNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ad.PublishNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
