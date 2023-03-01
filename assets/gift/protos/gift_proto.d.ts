import * as $protobuf from "protobufjs";
/** Namespace gift. */
export namespace gift {

    /** Represents a Gift */
    class Gift extends $protobuf.rpc.Service {

        /**
         * Constructs a new Gift service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Gift service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gift;

        /**
         * Calls GetGiftProgress.
         * @param request GetGiftProgressReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGiftProgressRsp
         */
        public getGiftProgress(request: gift.IGetGiftProgressReq, callback: gift.Gift.GetGiftProgressCallback): void;

        /**
         * Calls GetGiftProgress.
         * @param request GetGiftProgressReq message or plain object
         * @returns Promise
         */
        public getGiftProgress(request: gift.IGetGiftProgressReq): Promise<gift.GetGiftProgressRsp>;

        /**
         * Calls GetGiftAward.
         * @param request GetGiftAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGiftAwardRsp
         */
        public getGiftAward(request: gift.IGetGiftAwardReq, callback: gift.Gift.GetGiftAwardCallback): void;

        /**
         * Calls GetGiftAward.
         * @param request GetGiftAwardReq message or plain object
         * @returns Promise
         */
        public getGiftAward(request: gift.IGetGiftAwardReq): Promise<gift.GetGiftAwardRsp>;
    }

    namespace Gift {

        /**
         * Callback as used by {@link gift.Gift#getGiftProgress}.
         * @param error Error, if any
         * @param [response] GetGiftProgressRsp
         */
        type GetGiftProgressCallback = (error: (Error|null), response?: gift.GetGiftProgressRsp) => void;

        /**
         * Callback as used by {@link gift.Gift#getGiftAward}.
         * @param error Error, if any
         * @param [response] GetGiftAwardRsp
         */
        type GetGiftAwardCallback = (error: (Error|null), response?: gift.GetGiftAwardRsp) => void;
    }

    /** Properties of a GetGiftProgressReq. */
    interface IGetGiftProgressReq {

        /** GetGiftProgressReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetGiftProgressReq. */
    class GetGiftProgressReq implements IGetGiftProgressReq {

        /**
         * Constructs a new GetGiftProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IGetGiftProgressReq);

        /** GetGiftProgressReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetGiftProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGiftProgressReq instance
         */
        public static create(properties?: gift.IGetGiftProgressReq): gift.GetGiftProgressReq;

        /**
         * Encodes the specified GetGiftProgressReq message. Does not implicitly {@link gift.GetGiftProgressReq.verify|verify} messages.
         * @param message GetGiftProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IGetGiftProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGiftProgressReq message, length delimited. Does not implicitly {@link gift.GetGiftProgressReq.verify|verify} messages.
         * @param message GetGiftProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IGetGiftProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGiftProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGiftProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.GetGiftProgressReq;

        /**
         * Decodes a GetGiftProgressReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGiftProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.GetGiftProgressReq;

        /**
         * Verifies a GetGiftProgressReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGiftProgressReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGiftProgressReq
         */
        public static fromObject(object: { [k: string]: any }): gift.GetGiftProgressReq;

        /**
         * Creates a plain object from a GetGiftProgressReq message. Also converts values to other types if specified.
         * @param message GetGiftProgressReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.GetGiftProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGiftProgressReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award propId */
        propId?: (number|null);

        /** Award num */
        num?: (number|Long|null);

        /** Award icon */
        icon?: (string|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IAward);

        /** Award propId. */
        public propId: number;

        /** Award num. */
        public num: (number|Long);

        /** Award icon. */
        public icon: string;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: gift.IAward): gift.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link gift.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link gift.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.Award;

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
        public static fromObject(object: { [k: string]: any }): gift.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardConfig. */
    interface IAwardConfig {

        /** AwardConfig index */
        index?: (number|null);

        /** AwardConfig id */
        id?: (string|null);

        /** AwardConfig curNum */
        curNum?: (number|null);

        /** AwardConfig condNum */
        condNum?: (number|null);

        /** AwardConfig awards */
        awards?: (gift.IAward[]|null);

        /** AwardConfig status */
        status?: (number|null);
    }

    /** Represents an AwardConfig. */
    class AwardConfig implements IAwardConfig {

        /**
         * Constructs a new AwardConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IAwardConfig);

        /** AwardConfig index. */
        public index: number;

        /** AwardConfig id. */
        public id: string;

        /** AwardConfig curNum. */
        public curNum: number;

        /** AwardConfig condNum. */
        public condNum: number;

        /** AwardConfig awards. */
        public awards: gift.IAward[];

        /** AwardConfig status. */
        public status: number;

        /**
         * Creates a new AwardConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardConfig instance
         */
        public static create(properties?: gift.IAwardConfig): gift.AwardConfig;

        /**
         * Encodes the specified AwardConfig message. Does not implicitly {@link gift.AwardConfig.verify|verify} messages.
         * @param message AwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link gift.AwardConfig.verify|verify} messages.
         * @param message AwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.AwardConfig;

        /**
         * Decodes an AwardConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.AwardConfig;

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
        public static fromObject(object: { [k: string]: any }): gift.AwardConfig;

        /**
         * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
         * @param message AwardConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.AwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGiftProgressRsp. */
    interface IGetGiftProgressRsp {

        /** GetGiftProgressRsp code */
        code?: (number|null);

        /** GetGiftProgressRsp msg */
        msg?: (string|null);

        /** GetGiftProgressRsp configs */
        configs?: (gift.IAwardConfig[]|null);
    }

    /** Represents a GetGiftProgressRsp. */
    class GetGiftProgressRsp implements IGetGiftProgressRsp {

        /**
         * Constructs a new GetGiftProgressRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IGetGiftProgressRsp);

        /** GetGiftProgressRsp code. */
        public code: number;

        /** GetGiftProgressRsp msg. */
        public msg: string;

        /** GetGiftProgressRsp configs. */
        public configs: gift.IAwardConfig[];

        /**
         * Creates a new GetGiftProgressRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGiftProgressRsp instance
         */
        public static create(properties?: gift.IGetGiftProgressRsp): gift.GetGiftProgressRsp;

        /**
         * Encodes the specified GetGiftProgressRsp message. Does not implicitly {@link gift.GetGiftProgressRsp.verify|verify} messages.
         * @param message GetGiftProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IGetGiftProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGiftProgressRsp message, length delimited. Does not implicitly {@link gift.GetGiftProgressRsp.verify|verify} messages.
         * @param message GetGiftProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IGetGiftProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGiftProgressRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGiftProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.GetGiftProgressRsp;

        /**
         * Decodes a GetGiftProgressRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGiftProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.GetGiftProgressRsp;

        /**
         * Verifies a GetGiftProgressRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGiftProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGiftProgressRsp
         */
        public static fromObject(object: { [k: string]: any }): gift.GetGiftProgressRsp;

        /**
         * Creates a plain object from a GetGiftProgressRsp message. Also converts values to other types if specified.
         * @param message GetGiftProgressRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.GetGiftProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGiftProgressRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGiftAwardReq. */
    interface IGetGiftAwardReq {

        /** GetGiftAwardReq uid */
        uid?: (number|Long|null);

        /** GetGiftAwardReq id */
        id?: (string|null);
    }

    /** Represents a GetGiftAwardReq. */
    class GetGiftAwardReq implements IGetGiftAwardReq {

        /**
         * Constructs a new GetGiftAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IGetGiftAwardReq);

        /** GetGiftAwardReq uid. */
        public uid: (number|Long);

        /** GetGiftAwardReq id. */
        public id: string;

        /**
         * Creates a new GetGiftAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGiftAwardReq instance
         */
        public static create(properties?: gift.IGetGiftAwardReq): gift.GetGiftAwardReq;

        /**
         * Encodes the specified GetGiftAwardReq message. Does not implicitly {@link gift.GetGiftAwardReq.verify|verify} messages.
         * @param message GetGiftAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IGetGiftAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGiftAwardReq message, length delimited. Does not implicitly {@link gift.GetGiftAwardReq.verify|verify} messages.
         * @param message GetGiftAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IGetGiftAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGiftAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGiftAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.GetGiftAwardReq;

        /**
         * Decodes a GetGiftAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGiftAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.GetGiftAwardReq;

        /**
         * Verifies a GetGiftAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGiftAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGiftAwardReq
         */
        public static fromObject(object: { [k: string]: any }): gift.GetGiftAwardReq;

        /**
         * Creates a plain object from a GetGiftAwardReq message. Also converts values to other types if specified.
         * @param message GetGiftAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.GetGiftAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGiftAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGiftAwardRsp. */
    interface IGetGiftAwardRsp {

        /** GetGiftAwardRsp code */
        code?: (number|null);

        /** GetGiftAwardRsp msg */
        msg?: (string|null);

        /** GetGiftAwardRsp awards */
        awards?: (gift.IAward[]|null);
    }

    /** Represents a GetGiftAwardRsp. */
    class GetGiftAwardRsp implements IGetGiftAwardRsp {

        /**
         * Constructs a new GetGiftAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IGetGiftAwardRsp);

        /** GetGiftAwardRsp code. */
        public code: number;

        /** GetGiftAwardRsp msg. */
        public msg: string;

        /** GetGiftAwardRsp awards. */
        public awards: gift.IAward[];

        /**
         * Creates a new GetGiftAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGiftAwardRsp instance
         */
        public static create(properties?: gift.IGetGiftAwardRsp): gift.GetGiftAwardRsp;

        /**
         * Encodes the specified GetGiftAwardRsp message. Does not implicitly {@link gift.GetGiftAwardRsp.verify|verify} messages.
         * @param message GetGiftAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IGetGiftAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGiftAwardRsp message, length delimited. Does not implicitly {@link gift.GetGiftAwardRsp.verify|verify} messages.
         * @param message GetGiftAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IGetGiftAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGiftAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGiftAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.GetGiftAwardRsp;

        /**
         * Decodes a GetGiftAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGiftAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.GetGiftAwardRsp;

        /**
         * Verifies a GetGiftAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGiftAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGiftAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): gift.GetGiftAwardRsp;

        /**
         * Creates a plain object from a GetGiftAwardRsp message. Also converts values to other types if specified.
         * @param message GetGiftAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.GetGiftAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGiftAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GiftAwardNot. */
    interface IGiftAwardNot {

        /** GiftAwardNot haveRewards */
        haveRewards?: (boolean|null);

        /** GiftAwardNot style */
        style?: (number|null);

        /** GiftAwardNot desc */
        desc?: (string|null);

        /** GiftAwardNot align */
        align?: (number|null);
    }

    /** Represents a GiftAwardNot. */
    class GiftAwardNot implements IGiftAwardNot {

        /**
         * Constructs a new GiftAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gift.IGiftAwardNot);

        /** GiftAwardNot haveRewards. */
        public haveRewards: boolean;

        /** GiftAwardNot style. */
        public style: number;

        /** GiftAwardNot desc. */
        public desc: string;

        /** GiftAwardNot align. */
        public align: number;

        /**
         * Creates a new GiftAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiftAwardNot instance
         */
        public static create(properties?: gift.IGiftAwardNot): gift.GiftAwardNot;

        /**
         * Encodes the specified GiftAwardNot message. Does not implicitly {@link gift.GiftAwardNot.verify|verify} messages.
         * @param message GiftAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gift.IGiftAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GiftAwardNot message, length delimited. Does not implicitly {@link gift.GiftAwardNot.verify|verify} messages.
         * @param message GiftAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gift.IGiftAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiftAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gift.GiftAwardNot;

        /**
         * Decodes a GiftAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GiftAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gift.GiftAwardNot;

        /**
         * Verifies a GiftAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GiftAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GiftAwardNot
         */
        public static fromObject(object: { [k: string]: any }): gift.GiftAwardNot;

        /**
         * Creates a plain object from a GiftAwardNot message. Also converts values to other types if specified.
         * @param message GiftAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gift.GiftAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GiftAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
