import * as $protobuf from "protobufjs";
/** Namespace sign. */
export namespace sign {

    /** Represents a Sign */
    class Sign extends $protobuf.rpc.Service {

        /**
         * Constructs a new Sign service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Sign service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Sign;

        /**
         * Calls GetSignProgress.
         * @param request GetSignProgressReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetSignProgressRsp
         */
        public getSignProgress(request: sign.IGetSignProgressReq, callback: sign.Sign.GetSignProgressCallback): void;

        /**
         * Calls GetSignProgress.
         * @param request GetSignProgressReq message or plain object
         * @returns Promise
         */
        public getSignProgress(request: sign.IGetSignProgressReq): Promise<sign.GetSignProgressRsp>;

        /**
         * Calls UptSignAdState.
         * @param request UptSignAdStateReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptSignAdStateRsp
         */
        public uptSignAdState(request: sign.IUptSignAdStateReq, callback: sign.Sign.UptSignAdStateCallback): void;

        /**
         * Calls UptSignAdState.
         * @param request UptSignAdStateReq message or plain object
         * @returns Promise
         */
        public uptSignAdState(request: sign.IUptSignAdStateReq): Promise<sign.UptSignAdStateRsp>;

        /**
         * Calls GetSignAward.
         * @param request GetSignAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetSignAwardRsp
         */
        public getSignAward(request: sign.IGetSignAwardReq, callback: sign.Sign.GetSignAwardCallback): void;

        /**
         * Calls GetSignAward.
         * @param request GetSignAwardReq message or plain object
         * @returns Promise
         */
        public getSignAward(request: sign.IGetSignAwardReq): Promise<sign.GetSignAwardRsp>;
    }

    namespace Sign {

        /**
         * Callback as used by {@link sign.Sign#getSignProgress}.
         * @param error Error, if any
         * @param [response] GetSignProgressRsp
         */
        type GetSignProgressCallback = (error: (Error|null), response?: sign.GetSignProgressRsp) => void;

        /**
         * Callback as used by {@link sign.Sign#uptSignAdState}.
         * @param error Error, if any
         * @param [response] UptSignAdStateRsp
         */
        type UptSignAdStateCallback = (error: (Error|null), response?: sign.UptSignAdStateRsp) => void;

        /**
         * Callback as used by {@link sign.Sign#getSignAward}.
         * @param error Error, if any
         * @param [response] GetSignAwardRsp
         */
        type GetSignAwardCallback = (error: (Error|null), response?: sign.GetSignAwardRsp) => void;
    }

    /** Properties of a GetSignProgressReq. */
    interface IGetSignProgressReq {

        /** GetSignProgressReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetSignProgressReq. */
    class GetSignProgressReq implements IGetSignProgressReq {

        /**
         * Constructs a new GetSignProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IGetSignProgressReq);

        /** GetSignProgressReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetSignProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSignProgressReq instance
         */
        public static create(properties?: sign.IGetSignProgressReq): sign.GetSignProgressReq;

        /**
         * Encodes the specified GetSignProgressReq message. Does not implicitly {@link sign.GetSignProgressReq.verify|verify} messages.
         * @param message GetSignProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IGetSignProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSignProgressReq message, length delimited. Does not implicitly {@link sign.GetSignProgressReq.verify|verify} messages.
         * @param message GetSignProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IGetSignProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSignProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSignProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.GetSignProgressReq;

        /**
         * Decodes a GetSignProgressReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSignProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.GetSignProgressReq;

        /**
         * Verifies a GetSignProgressReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSignProgressReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSignProgressReq
         */
        public static fromObject(object: { [k: string]: any }): sign.GetSignProgressReq;

        /**
         * Creates a plain object from a GetSignProgressReq message. Also converts values to other types if specified.
         * @param message GetSignProgressReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.GetSignProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSignProgressReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardItem. */
    interface IAwardItem {

        /** AwardItem id */
        id?: (number|null);

        /** AwardItem num */
        num?: (number|Long|null);

        /** AwardItem icon */
        icon?: (string|null);
    }

    /** Represents an AwardItem. */
    class AwardItem implements IAwardItem {

        /**
         * Constructs a new AwardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IAwardItem);

        /** AwardItem id. */
        public id: number;

        /** AwardItem num. */
        public num: (number|Long);

        /** AwardItem icon. */
        public icon: string;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardItem instance
         */
        public static create(properties?: sign.IAwardItem): sign.AwardItem;

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link sign.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link sign.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.AwardItem;

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.AwardItem;

        /**
         * Verifies an AwardItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardItem
         */
        public static fromObject(object: { [k: string]: any }): sign.AwardItem;

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @param message AwardItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailyItem. */
    interface IDailyItem {

        /** DailyItem day */
        day?: (number|null);

        /** DailyItem awardStatus */
        awardStatus?: (number|null);

        /** DailyItem awards */
        awards?: (sign.IAwardItem[]|null);
    }

    /** Represents a DailyItem. */
    class DailyItem implements IDailyItem {

        /**
         * Constructs a new DailyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IDailyItem);

        /** DailyItem day. */
        public day: number;

        /** DailyItem awardStatus. */
        public awardStatus: number;

        /** DailyItem awards. */
        public awards: sign.IAwardItem[];

        /**
         * Creates a new DailyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailyItem instance
         */
        public static create(properties?: sign.IDailyItem): sign.DailyItem;

        /**
         * Encodes the specified DailyItem message. Does not implicitly {@link sign.DailyItem.verify|verify} messages.
         * @param message DailyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IDailyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailyItem message, length delimited. Does not implicitly {@link sign.DailyItem.verify|verify} messages.
         * @param message DailyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IDailyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.DailyItem;

        /**
         * Decodes a DailyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.DailyItem;

        /**
         * Verifies a DailyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailyItem
         */
        public static fromObject(object: { [k: string]: any }): sign.DailyItem;

        /**
         * Creates a plain object from a DailyItem message. Also converts values to other types if specified.
         * @param message DailyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.DailyItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccumulateItem. */
    interface IAccumulateItem {

        /** AccumulateItem count */
        count?: (number|null);

        /** AccumulateItem awardStatus */
        awardStatus?: (number|null);

        /** AccumulateItem awards */
        awards?: (sign.IAwardItem[]|null);
    }

    /** Represents an AccumulateItem. */
    class AccumulateItem implements IAccumulateItem {

        /**
         * Constructs a new AccumulateItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IAccumulateItem);

        /** AccumulateItem count. */
        public count: number;

        /** AccumulateItem awardStatus. */
        public awardStatus: number;

        /** AccumulateItem awards. */
        public awards: sign.IAwardItem[];

        /**
         * Creates a new AccumulateItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccumulateItem instance
         */
        public static create(properties?: sign.IAccumulateItem): sign.AccumulateItem;

        /**
         * Encodes the specified AccumulateItem message. Does not implicitly {@link sign.AccumulateItem.verify|verify} messages.
         * @param message AccumulateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IAccumulateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccumulateItem message, length delimited. Does not implicitly {@link sign.AccumulateItem.verify|verify} messages.
         * @param message AccumulateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IAccumulateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.AccumulateItem;

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.AccumulateItem;

        /**
         * Verifies an AccumulateItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccumulateItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccumulateItem
         */
        public static fromObject(object: { [k: string]: any }): sign.AccumulateItem;

        /**
         * Creates a plain object from an AccumulateItem message. Also converts values to other types if specified.
         * @param message AccumulateItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.AccumulateItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccumulateItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserItem. */
    interface IUserItem {

        /** UserItem uid */
        uid?: (number|Long|null);

        /** UserItem daily */
        daily?: (string|null);

        /** UserItem dailyTime */
        dailyTime?: (number|Long|null);

        /** UserItem accumulate */
        accumulate?: (string|null);

        /** UserItem accumulateTime */
        accumulateTime?: (number|Long|null);
    }

    /** Represents a UserItem. */
    class UserItem implements IUserItem {

        /**
         * Constructs a new UserItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IUserItem);

        /** UserItem uid. */
        public uid: (number|Long);

        /** UserItem daily. */
        public daily: string;

        /** UserItem dailyTime. */
        public dailyTime: (number|Long);

        /** UserItem accumulate. */
        public accumulate: string;

        /** UserItem accumulateTime. */
        public accumulateTime: (number|Long);

        /**
         * Creates a new UserItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserItem instance
         */
        public static create(properties?: sign.IUserItem): sign.UserItem;

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link sign.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link sign.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.UserItem;

        /**
         * Decodes a UserItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.UserItem;

        /**
         * Verifies a UserItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserItem
         */
        public static fromObject(object: { [k: string]: any }): sign.UserItem;

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @param message UserItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSignProgressRsp. */
    interface IGetSignProgressRsp {

        /** GetSignProgressRsp errCode */
        errCode?: (number|null);

        /** GetSignProgressRsp errMsg */
        errMsg?: (string|null);

        /** GetSignProgressRsp dailyTime */
        dailyTime?: (number|Long|null);

        /** GetSignProgressRsp accumulateTime */
        accumulateTime?: (number|Long|null);

        /** GetSignProgressRsp dailyItems */
        dailyItems?: (sign.IDailyItem[]|null);

        /** GetSignProgressRsp accumulateItems */
        accumulateItems?: (sign.IAccumulateItem[]|null);
    }

    /** Represents a GetSignProgressRsp. */
    class GetSignProgressRsp implements IGetSignProgressRsp {

        /**
         * Constructs a new GetSignProgressRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IGetSignProgressRsp);

        /** GetSignProgressRsp errCode. */
        public errCode: number;

        /** GetSignProgressRsp errMsg. */
        public errMsg: string;

        /** GetSignProgressRsp dailyTime. */
        public dailyTime: (number|Long);

        /** GetSignProgressRsp accumulateTime. */
        public accumulateTime: (number|Long);

        /** GetSignProgressRsp dailyItems. */
        public dailyItems: sign.IDailyItem[];

        /** GetSignProgressRsp accumulateItems. */
        public accumulateItems: sign.IAccumulateItem[];

        /**
         * Creates a new GetSignProgressRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSignProgressRsp instance
         */
        public static create(properties?: sign.IGetSignProgressRsp): sign.GetSignProgressRsp;

        /**
         * Encodes the specified GetSignProgressRsp message. Does not implicitly {@link sign.GetSignProgressRsp.verify|verify} messages.
         * @param message GetSignProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IGetSignProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSignProgressRsp message, length delimited. Does not implicitly {@link sign.GetSignProgressRsp.verify|verify} messages.
         * @param message GetSignProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IGetSignProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSignProgressRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSignProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.GetSignProgressRsp;

        /**
         * Decodes a GetSignProgressRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSignProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.GetSignProgressRsp;

        /**
         * Verifies a GetSignProgressRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSignProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSignProgressRsp
         */
        public static fromObject(object: { [k: string]: any }): sign.GetSignProgressRsp;

        /**
         * Creates a plain object from a GetSignProgressRsp message. Also converts values to other types if specified.
         * @param message GetSignProgressRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.GetSignProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSignProgressRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptSignAdStateReq. */
    interface IUptSignAdStateReq {

        /** UptSignAdStateReq uid */
        uid?: (number|Long|null);

        /** UptSignAdStateReq state */
        state?: (number|null);

        /** UptSignAdStateReq typ */
        typ?: (number|null);

        /** UptSignAdStateReq signDay */
        signDay?: (number|null);
    }

    /** Represents an UptSignAdStateReq. */
    class UptSignAdStateReq implements IUptSignAdStateReq {

        /**
         * Constructs a new UptSignAdStateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IUptSignAdStateReq);

        /** UptSignAdStateReq uid. */
        public uid: (number|Long);

        /** UptSignAdStateReq state. */
        public state: number;

        /** UptSignAdStateReq typ. */
        public typ: number;

        /** UptSignAdStateReq signDay. */
        public signDay: number;

        /**
         * Creates a new UptSignAdStateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptSignAdStateReq instance
         */
        public static create(properties?: sign.IUptSignAdStateReq): sign.UptSignAdStateReq;

        /**
         * Encodes the specified UptSignAdStateReq message. Does not implicitly {@link sign.UptSignAdStateReq.verify|verify} messages.
         * @param message UptSignAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IUptSignAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptSignAdStateReq message, length delimited. Does not implicitly {@link sign.UptSignAdStateReq.verify|verify} messages.
         * @param message UptSignAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IUptSignAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptSignAdStateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptSignAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.UptSignAdStateReq;

        /**
         * Decodes an UptSignAdStateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptSignAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.UptSignAdStateReq;

        /**
         * Verifies an UptSignAdStateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptSignAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptSignAdStateReq
         */
        public static fromObject(object: { [k: string]: any }): sign.UptSignAdStateReq;

        /**
         * Creates a plain object from an UptSignAdStateReq message. Also converts values to other types if specified.
         * @param message UptSignAdStateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.UptSignAdStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptSignAdStateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptSignAdStateRsp. */
    interface IUptSignAdStateRsp {

        /** UptSignAdStateRsp errCode */
        errCode?: (number|null);

        /** UptSignAdStateRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptSignAdStateRsp. */
    class UptSignAdStateRsp implements IUptSignAdStateRsp {

        /**
         * Constructs a new UptSignAdStateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IUptSignAdStateRsp);

        /** UptSignAdStateRsp errCode. */
        public errCode: number;

        /** UptSignAdStateRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptSignAdStateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptSignAdStateRsp instance
         */
        public static create(properties?: sign.IUptSignAdStateRsp): sign.UptSignAdStateRsp;

        /**
         * Encodes the specified UptSignAdStateRsp message. Does not implicitly {@link sign.UptSignAdStateRsp.verify|verify} messages.
         * @param message UptSignAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IUptSignAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptSignAdStateRsp message, length delimited. Does not implicitly {@link sign.UptSignAdStateRsp.verify|verify} messages.
         * @param message UptSignAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IUptSignAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptSignAdStateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptSignAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.UptSignAdStateRsp;

        /**
         * Decodes an UptSignAdStateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptSignAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.UptSignAdStateRsp;

        /**
         * Verifies an UptSignAdStateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptSignAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptSignAdStateRsp
         */
        public static fromObject(object: { [k: string]: any }): sign.UptSignAdStateRsp;

        /**
         * Creates a plain object from an UptSignAdStateRsp message. Also converts values to other types if specified.
         * @param message UptSignAdStateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.UptSignAdStateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptSignAdStateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSignAwardReq. */
    interface IGetSignAwardReq {

        /** GetSignAwardReq uid */
        uid?: (number|Long|null);

        /** GetSignAwardReq signType */
        signType?: (number|null);

        /** GetSignAwardReq signDay */
        signDay?: (number|null);

        /** GetSignAwardReq awardType */
        awardType?: (number|null);
    }

    /** Represents a GetSignAwardReq. */
    class GetSignAwardReq implements IGetSignAwardReq {

        /**
         * Constructs a new GetSignAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IGetSignAwardReq);

        /** GetSignAwardReq uid. */
        public uid: (number|Long);

        /** GetSignAwardReq signType. */
        public signType: number;

        /** GetSignAwardReq signDay. */
        public signDay: number;

        /** GetSignAwardReq awardType. */
        public awardType: number;

        /**
         * Creates a new GetSignAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSignAwardReq instance
         */
        public static create(properties?: sign.IGetSignAwardReq): sign.GetSignAwardReq;

        /**
         * Encodes the specified GetSignAwardReq message. Does not implicitly {@link sign.GetSignAwardReq.verify|verify} messages.
         * @param message GetSignAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IGetSignAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSignAwardReq message, length delimited. Does not implicitly {@link sign.GetSignAwardReq.verify|verify} messages.
         * @param message GetSignAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IGetSignAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSignAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSignAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.GetSignAwardReq;

        /**
         * Decodes a GetSignAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSignAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.GetSignAwardReq;

        /**
         * Verifies a GetSignAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSignAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSignAwardReq
         */
        public static fromObject(object: { [k: string]: any }): sign.GetSignAwardReq;

        /**
         * Creates a plain object from a GetSignAwardReq message. Also converts values to other types if specified.
         * @param message GetSignAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.GetSignAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSignAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSignAwardRsp. */
    interface IGetSignAwardRsp {

        /** GetSignAwardRsp errCode */
        errCode?: (number|null);

        /** GetSignAwardRsp errMsg */
        errMsg?: (string|null);

        /** GetSignAwardRsp awards */
        awards?: (sign.IAwardItem[]|null);
    }

    /** Represents a GetSignAwardRsp. */
    class GetSignAwardRsp implements IGetSignAwardRsp {

        /**
         * Constructs a new GetSignAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.IGetSignAwardRsp);

        /** GetSignAwardRsp errCode. */
        public errCode: number;

        /** GetSignAwardRsp errMsg. */
        public errMsg: string;

        /** GetSignAwardRsp awards. */
        public awards: sign.IAwardItem[];

        /**
         * Creates a new GetSignAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSignAwardRsp instance
         */
        public static create(properties?: sign.IGetSignAwardRsp): sign.GetSignAwardRsp;

        /**
         * Encodes the specified GetSignAwardRsp message. Does not implicitly {@link sign.GetSignAwardRsp.verify|verify} messages.
         * @param message GetSignAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.IGetSignAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSignAwardRsp message, length delimited. Does not implicitly {@link sign.GetSignAwardRsp.verify|verify} messages.
         * @param message GetSignAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.IGetSignAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSignAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSignAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.GetSignAwardRsp;

        /**
         * Decodes a GetSignAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSignAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.GetSignAwardRsp;

        /**
         * Verifies a GetSignAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSignAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSignAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): sign.GetSignAwardRsp;

        /**
         * Creates a plain object from a GetSignAwardRsp message. Also converts values to other types if specified.
         * @param message GetSignAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.GetSignAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSignAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignAwardNot. */
    interface ISignAwardNot {

        /** SignAwardNot haveRewards */
        haveRewards?: (boolean|null);

        /** SignAwardNot style */
        style?: (number|null);

        /** SignAwardNot desc */
        desc?: (string|null);

        /** SignAwardNot align */
        align?: (number|null);

        /** SignAwardNot flip */
        flip?: (boolean|null);
    }

    /** Represents a SignAwardNot. */
    class SignAwardNot implements ISignAwardNot {

        /**
         * Constructs a new SignAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: sign.ISignAwardNot);

        /** SignAwardNot haveRewards. */
        public haveRewards: boolean;

        /** SignAwardNot style. */
        public style: number;

        /** SignAwardNot desc. */
        public desc: string;

        /** SignAwardNot align. */
        public align: number;

        /** SignAwardNot flip. */
        public flip: boolean;

        /**
         * Creates a new SignAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignAwardNot instance
         */
        public static create(properties?: sign.ISignAwardNot): sign.SignAwardNot;

        /**
         * Encodes the specified SignAwardNot message. Does not implicitly {@link sign.SignAwardNot.verify|verify} messages.
         * @param message SignAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sign.ISignAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignAwardNot message, length delimited. Does not implicitly {@link sign.SignAwardNot.verify|verify} messages.
         * @param message SignAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sign.ISignAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sign.SignAwardNot;

        /**
         * Decodes a SignAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sign.SignAwardNot;

        /**
         * Verifies a SignAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignAwardNot
         */
        public static fromObject(object: { [k: string]: any }): sign.SignAwardNot;

        /**
         * Creates a plain object from a SignAwardNot message. Also converts values to other types if specified.
         * @param message SignAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sign.SignAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
