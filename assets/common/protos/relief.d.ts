import * as $protobuf from "protobufjs";
/** Namespace item. */
export namespace item {

    /** Represents a Relief */
    class Relief extends $protobuf.rpc.Service {

        /**
         * Constructs a new Relief service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Relief service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Relief;

        /**
         * Calls GetReliefInfo.
         * @param request GetReliefInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetReliefInfoRsp
         */
        public getReliefInfo(request: item.IGetReliefInfoReq, callback: item.Relief.GetReliefInfoCallback): void;

        /**
         * Calls GetReliefInfo.
         * @param request GetReliefInfoReq message or plain object
         * @returns Promise
         */
        public getReliefInfo(request: item.IGetReliefInfoReq): Promise<item.GetReliefInfoRsp>;

        /**
         * Calls UptReliefAdState.
         * @param request UptReliefAdStateReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptReliefAdStateRsp
         */
        public uptReliefAdState(request: item.IUptReliefAdStateReq, callback: item.Relief.UptReliefAdStateCallback): void;

        /**
         * Calls UptReliefAdState.
         * @param request UptReliefAdStateReq message or plain object
         * @returns Promise
         */
        public uptReliefAdState(request: item.IUptReliefAdStateReq): Promise<item.UptReliefAdStateRsp>;

        /**
         * Calls GetReliefAwards.
         * @param request GetReliefAwardsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetReliefAwardsRsp
         */
        public getReliefAwards(request: item.IGetReliefAwardsReq, callback: item.Relief.GetReliefAwardsCallback): void;

        /**
         * Calls GetReliefAwards.
         * @param request GetReliefAwardsReq message or plain object
         * @returns Promise
         */
        public getReliefAwards(request: item.IGetReliefAwardsReq): Promise<item.GetReliefAwardsRsp>;
    }

    namespace Relief {

        /**
         * Callback as used by {@link item.Relief#getReliefInfo}.
         * @param error Error, if any
         * @param [response] GetReliefInfoRsp
         */
        type GetReliefInfoCallback = (error: (Error|null), response?: item.GetReliefInfoRsp) => void;

        /**
         * Callback as used by {@link item.Relief#uptReliefAdState}.
         * @param error Error, if any
         * @param [response] UptReliefAdStateRsp
         */
        type UptReliefAdStateCallback = (error: (Error|null), response?: item.UptReliefAdStateRsp) => void;

        /**
         * Callback as used by {@link item.Relief#getReliefAwards}.
         * @param error Error, if any
         * @param [response] GetReliefAwardsRsp
         */
        type GetReliefAwardsCallback = (error: (Error|null), response?: item.GetReliefAwardsRsp) => void;
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
        constructor(properties?: item.IAward);

        /** Award index. */
        public index: number;

        /** Award num. */
        public num: number;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: item.IAward): item.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link item.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link item.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.Award;

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
        public static fromObject(object: { [k: string]: any }): item.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetReliefInfoReq. */
    interface IGetReliefInfoReq {

        /** GetReliefInfoReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetReliefInfoReq. */
    class GetReliefInfoReq implements IGetReliefInfoReq {

        /**
         * Constructs a new GetReliefInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetReliefInfoReq);

        /** GetReliefInfoReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetReliefInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetReliefInfoReq instance
         */
        public static create(properties?: item.IGetReliefInfoReq): item.GetReliefInfoReq;

        /**
         * Encodes the specified GetReliefInfoReq message. Does not implicitly {@link item.GetReliefInfoReq.verify|verify} messages.
         * @param message GetReliefInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetReliefInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetReliefInfoReq message, length delimited. Does not implicitly {@link item.GetReliefInfoReq.verify|verify} messages.
         * @param message GetReliefInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetReliefInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetReliefInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetReliefInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetReliefInfoReq;

        /**
         * Decodes a GetReliefInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetReliefInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetReliefInfoReq;

        /**
         * Verifies a GetReliefInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetReliefInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetReliefInfoReq
         */
        public static fromObject(object: { [k: string]: any }): item.GetReliefInfoReq;

        /**
         * Creates a plain object from a GetReliefInfoReq message. Also converts values to other types if specified.
         * @param message GetReliefInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetReliefInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetReliefInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetReliefInfoRsp. */
    interface IGetReliefInfoRsp {

        /** GetReliefInfoRsp errCode */
        errCode?: (number|null);

        /** GetReliefInfoRsp errMsg */
        errMsg?: (string|null);

        /** GetReliefInfoRsp count */
        count?: (number|null);

        /** GetReliefInfoRsp money */
        money?: (number|null);
    }

    /** Represents a GetReliefInfoRsp. */
    class GetReliefInfoRsp implements IGetReliefInfoRsp {

        /**
         * Constructs a new GetReliefInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetReliefInfoRsp);

        /** GetReliefInfoRsp errCode. */
        public errCode: number;

        /** GetReliefInfoRsp errMsg. */
        public errMsg: string;

        /** GetReliefInfoRsp count. */
        public count: number;

        /** GetReliefInfoRsp money. */
        public money: number;

        /**
         * Creates a new GetReliefInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetReliefInfoRsp instance
         */
        public static create(properties?: item.IGetReliefInfoRsp): item.GetReliefInfoRsp;

        /**
         * Encodes the specified GetReliefInfoRsp message. Does not implicitly {@link item.GetReliefInfoRsp.verify|verify} messages.
         * @param message GetReliefInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetReliefInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetReliefInfoRsp message, length delimited. Does not implicitly {@link item.GetReliefInfoRsp.verify|verify} messages.
         * @param message GetReliefInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetReliefInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetReliefInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetReliefInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetReliefInfoRsp;

        /**
         * Decodes a GetReliefInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetReliefInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetReliefInfoRsp;

        /**
         * Verifies a GetReliefInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetReliefInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetReliefInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): item.GetReliefInfoRsp;

        /**
         * Creates a plain object from a GetReliefInfoRsp message. Also converts values to other types if specified.
         * @param message GetReliefInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetReliefInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetReliefInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptReliefAdStateReq. */
    interface IUptReliefAdStateReq {

        /** UptReliefAdStateReq uid */
        uid?: (number|Long|null);

        /** UptReliefAdStateReq state */
        state?: (number|null);
    }

    /** Represents an UptReliefAdStateReq. */
    class UptReliefAdStateReq implements IUptReliefAdStateReq {

        /**
         * Constructs a new UptReliefAdStateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUptReliefAdStateReq);

        /** UptReliefAdStateReq uid. */
        public uid: (number|Long);

        /** UptReliefAdStateReq state. */
        public state: number;

        /**
         * Creates a new UptReliefAdStateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptReliefAdStateReq instance
         */
        public static create(properties?: item.IUptReliefAdStateReq): item.UptReliefAdStateReq;

        /**
         * Encodes the specified UptReliefAdStateReq message. Does not implicitly {@link item.UptReliefAdStateReq.verify|verify} messages.
         * @param message UptReliefAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUptReliefAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptReliefAdStateReq message, length delimited. Does not implicitly {@link item.UptReliefAdStateReq.verify|verify} messages.
         * @param message UptReliefAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUptReliefAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptReliefAdStateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptReliefAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UptReliefAdStateReq;

        /**
         * Decodes an UptReliefAdStateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptReliefAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UptReliefAdStateReq;

        /**
         * Verifies an UptReliefAdStateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptReliefAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptReliefAdStateReq
         */
        public static fromObject(object: { [k: string]: any }): item.UptReliefAdStateReq;

        /**
         * Creates a plain object from an UptReliefAdStateReq message. Also converts values to other types if specified.
         * @param message UptReliefAdStateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UptReliefAdStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptReliefAdStateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptReliefAdStateRsp. */
    interface IUptReliefAdStateRsp {

        /** UptReliefAdStateRsp errCode */
        errCode?: (number|null);

        /** UptReliefAdStateRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptReliefAdStateRsp. */
    class UptReliefAdStateRsp implements IUptReliefAdStateRsp {

        /**
         * Constructs a new UptReliefAdStateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IUptReliefAdStateRsp);

        /** UptReliefAdStateRsp errCode. */
        public errCode: number;

        /** UptReliefAdStateRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptReliefAdStateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptReliefAdStateRsp instance
         */
        public static create(properties?: item.IUptReliefAdStateRsp): item.UptReliefAdStateRsp;

        /**
         * Encodes the specified UptReliefAdStateRsp message. Does not implicitly {@link item.UptReliefAdStateRsp.verify|verify} messages.
         * @param message UptReliefAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IUptReliefAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptReliefAdStateRsp message, length delimited. Does not implicitly {@link item.UptReliefAdStateRsp.verify|verify} messages.
         * @param message UptReliefAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IUptReliefAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptReliefAdStateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptReliefAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.UptReliefAdStateRsp;

        /**
         * Decodes an UptReliefAdStateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptReliefAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.UptReliefAdStateRsp;

        /**
         * Verifies an UptReliefAdStateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptReliefAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptReliefAdStateRsp
         */
        public static fromObject(object: { [k: string]: any }): item.UptReliefAdStateRsp;

        /**
         * Creates a plain object from an UptReliefAdStateRsp message. Also converts values to other types if specified.
         * @param message UptReliefAdStateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.UptReliefAdStateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptReliefAdStateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetReliefAwardsReq. */
    interface IGetReliefAwardsReq {

        /** GetReliefAwardsReq uid */
        uid?: (number|Long|null);

        /** GetReliefAwardsReq type */
        type?: (number|null);
    }

    /** Represents a GetReliefAwardsReq. */
    class GetReliefAwardsReq implements IGetReliefAwardsReq {

        /**
         * Constructs a new GetReliefAwardsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetReliefAwardsReq);

        /** GetReliefAwardsReq uid. */
        public uid: (number|Long);

        /** GetReliefAwardsReq type. */
        public type: number;

        /**
         * Creates a new GetReliefAwardsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetReliefAwardsReq instance
         */
        public static create(properties?: item.IGetReliefAwardsReq): item.GetReliefAwardsReq;

        /**
         * Encodes the specified GetReliefAwardsReq message. Does not implicitly {@link item.GetReliefAwardsReq.verify|verify} messages.
         * @param message GetReliefAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetReliefAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetReliefAwardsReq message, length delimited. Does not implicitly {@link item.GetReliefAwardsReq.verify|verify} messages.
         * @param message GetReliefAwardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetReliefAwardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetReliefAwardsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetReliefAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetReliefAwardsReq;

        /**
         * Decodes a GetReliefAwardsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetReliefAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetReliefAwardsReq;

        /**
         * Verifies a GetReliefAwardsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetReliefAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetReliefAwardsReq
         */
        public static fromObject(object: { [k: string]: any }): item.GetReliefAwardsReq;

        /**
         * Creates a plain object from a GetReliefAwardsReq message. Also converts values to other types if specified.
         * @param message GetReliefAwardsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetReliefAwardsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetReliefAwardsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetReliefAwardsRsp. */
    interface IGetReliefAwardsRsp {

        /** GetReliefAwardsRsp errCode */
        errCode?: (number|null);

        /** GetReliefAwardsRsp errMsg */
        errMsg?: (string|null);

        /** GetReliefAwardsRsp awards */
        awards?: (item.IAward[]|null);
    }

    /** Represents a GetReliefAwardsRsp. */
    class GetReliefAwardsRsp implements IGetReliefAwardsRsp {

        /**
         * Constructs a new GetReliefAwardsRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: item.IGetReliefAwardsRsp);

        /** GetReliefAwardsRsp errCode. */
        public errCode: number;

        /** GetReliefAwardsRsp errMsg. */
        public errMsg: string;

        /** GetReliefAwardsRsp awards. */
        public awards: item.IAward[];

        /**
         * Creates a new GetReliefAwardsRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetReliefAwardsRsp instance
         */
        public static create(properties?: item.IGetReliefAwardsRsp): item.GetReliefAwardsRsp;

        /**
         * Encodes the specified GetReliefAwardsRsp message. Does not implicitly {@link item.GetReliefAwardsRsp.verify|verify} messages.
         * @param message GetReliefAwardsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item.IGetReliefAwardsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetReliefAwardsRsp message, length delimited. Does not implicitly {@link item.GetReliefAwardsRsp.verify|verify} messages.
         * @param message GetReliefAwardsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item.IGetReliefAwardsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetReliefAwardsRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetReliefAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item.GetReliefAwardsRsp;

        /**
         * Decodes a GetReliefAwardsRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetReliefAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item.GetReliefAwardsRsp;

        /**
         * Verifies a GetReliefAwardsRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetReliefAwardsRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetReliefAwardsRsp
         */
        public static fromObject(object: { [k: string]: any }): item.GetReliefAwardsRsp;

        /**
         * Creates a plain object from a GetReliefAwardsRsp message. Also converts values to other types if specified.
         * @param message GetReliefAwardsRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item.GetReliefAwardsRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetReliefAwardsRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
