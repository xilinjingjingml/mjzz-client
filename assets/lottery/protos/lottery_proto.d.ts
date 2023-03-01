import * as $protobuf from "protobufjs";
/** Namespace lottery. */
export namespace lottery {

    /** Represents a Lottery */
    class Lottery extends $protobuf.rpc.Service {

        /**
         * Constructs a new Lottery service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Lottery service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Lottery;

        /**
         * Calls GetLotteryCfg.
         * @param request LotteryCfgReq message or plain object
         * @param callback Node-style callback called with the error, if any, and LotteryCfgRsp
         */
        public getLotteryCfg(request: lottery.ILotteryCfgReq, callback: lottery.Lottery.GetLotteryCfgCallback): void;

        /**
         * Calls GetLotteryCfg.
         * @param request LotteryCfgReq message or plain object
         * @returns Promise
         */
        public getLotteryCfg(request: lottery.ILotteryCfgReq): Promise<lottery.LotteryCfgRsp>;

        /**
         * Calls UptLotteryAdState.
         * @param request UptLotteryAdStateReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptLotteryAdStateRsp
         */
        public uptLotteryAdState(request: lottery.IUptLotteryAdStateReq, callback: lottery.Lottery.UptLotteryAdStateCallback): void;

        /**
         * Calls UptLotteryAdState.
         * @param request UptLotteryAdStateReq message or plain object
         * @returns Promise
         */
        public uptLotteryAdState(request: lottery.IUptLotteryAdStateReq): Promise<lottery.UptLotteryAdStateRsp>;

        /**
         * Calls GetLotteryAward.
         * @param request GetLotteryAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetLotteryAwardRsp
         */
        public getLotteryAward(request: lottery.IGetLotteryAwardReq, callback: lottery.Lottery.GetLotteryAwardCallback): void;

        /**
         * Calls GetLotteryAward.
         * @param request GetLotteryAwardReq message or plain object
         * @returns Promise
         */
        public getLotteryAward(request: lottery.IGetLotteryAwardReq): Promise<lottery.GetLotteryAwardRsp>;
    }

    namespace Lottery {

        /**
         * Callback as used by {@link lottery.Lottery#getLotteryCfg}.
         * @param error Error, if any
         * @param [response] LotteryCfgRsp
         */
        type GetLotteryCfgCallback = (error: (Error|null), response?: lottery.LotteryCfgRsp) => void;

        /**
         * Callback as used by {@link lottery.Lottery#uptLotteryAdState}.
         * @param error Error, if any
         * @param [response] UptLotteryAdStateRsp
         */
        type UptLotteryAdStateCallback = (error: (Error|null), response?: lottery.UptLotteryAdStateRsp) => void;

        /**
         * Callback as used by {@link lottery.Lottery#getLotteryAward}.
         * @param error Error, if any
         * @param [response] GetLotteryAwardRsp
         */
        type GetLotteryAwardCallback = (error: (Error|null), response?: lottery.GetLotteryAwardRsp) => void;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id?: (number|null);

        /** Item num */
        num?: (number|Long|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IItem);

        /** Item id. */
        public id: number;

        /** Item num. */
        public num: (number|Long);

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: lottery.IItem): lottery.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link lottery.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link lottery.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): lottery.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award itemId */
        itemId?: (number|null);

        /** Award itemMin */
        itemMin?: (number|Long|null);

        /** Award itemMax */
        itemMax?: (number|Long|null);

        /** Award itemIndex */
        itemIndex?: (number|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IAward);

        /** Award itemId. */
        public itemId: number;

        /** Award itemMin. */
        public itemMin: (number|Long);

        /** Award itemMax. */
        public itemMax: (number|Long);

        /** Award itemIndex. */
        public itemIndex: number;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: lottery.IAward): lottery.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link lottery.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link lottery.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.Award;

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
        public static fromObject(object: { [k: string]: any }): lottery.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryCfgReq. */
    interface ILotteryCfgReq {

        /** LotteryCfgReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a LotteryCfgReq. */
    class LotteryCfgReq implements ILotteryCfgReq {

        /**
         * Constructs a new LotteryCfgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.ILotteryCfgReq);

        /** LotteryCfgReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new LotteryCfgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotteryCfgReq instance
         */
        public static create(properties?: lottery.ILotteryCfgReq): lottery.LotteryCfgReq;

        /**
         * Encodes the specified LotteryCfgReq message. Does not implicitly {@link lottery.LotteryCfgReq.verify|verify} messages.
         * @param message LotteryCfgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.ILotteryCfgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotteryCfgReq message, length delimited. Does not implicitly {@link lottery.LotteryCfgReq.verify|verify} messages.
         * @param message LotteryCfgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.ILotteryCfgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotteryCfgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryCfgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.LotteryCfgReq;

        /**
         * Decodes a LotteryCfgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotteryCfgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.LotteryCfgReq;

        /**
         * Verifies a LotteryCfgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotteryCfgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryCfgReq
         */
        public static fromObject(object: { [k: string]: any }): lottery.LotteryCfgReq;

        /**
         * Creates a plain object from a LotteryCfgReq message. Also converts values to other types if specified.
         * @param message LotteryCfgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.LotteryCfgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryCfgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryCfgRsp. */
    interface ILotteryCfgRsp {

        /** LotteryCfgRsp errCode */
        errCode?: (number|null);

        /** LotteryCfgRsp errMsg */
        errMsg?: (string|null);

        /** LotteryCfgRsp bAble */
        bAble?: (boolean|null);

        /** LotteryCfgRsp awards */
        awards?: (lottery.IAward[]|null);
    }

    /** Represents a LotteryCfgRsp. */
    class LotteryCfgRsp implements ILotteryCfgRsp {

        /**
         * Constructs a new LotteryCfgRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.ILotteryCfgRsp);

        /** LotteryCfgRsp errCode. */
        public errCode: number;

        /** LotteryCfgRsp errMsg. */
        public errMsg: string;

        /** LotteryCfgRsp bAble. */
        public bAble: boolean;

        /** LotteryCfgRsp awards. */
        public awards: lottery.IAward[];

        /**
         * Creates a new LotteryCfgRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotteryCfgRsp instance
         */
        public static create(properties?: lottery.ILotteryCfgRsp): lottery.LotteryCfgRsp;

        /**
         * Encodes the specified LotteryCfgRsp message. Does not implicitly {@link lottery.LotteryCfgRsp.verify|verify} messages.
         * @param message LotteryCfgRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.ILotteryCfgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotteryCfgRsp message, length delimited. Does not implicitly {@link lottery.LotteryCfgRsp.verify|verify} messages.
         * @param message LotteryCfgRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.ILotteryCfgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotteryCfgRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryCfgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.LotteryCfgRsp;

        /**
         * Decodes a LotteryCfgRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotteryCfgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.LotteryCfgRsp;

        /**
         * Verifies a LotteryCfgRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotteryCfgRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryCfgRsp
         */
        public static fromObject(object: { [k: string]: any }): lottery.LotteryCfgRsp;

        /**
         * Creates a plain object from a LotteryCfgRsp message. Also converts values to other types if specified.
         * @param message LotteryCfgRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.LotteryCfgRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryCfgRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetLotteryAwardReq. */
    interface IGetLotteryAwardReq {

        /** GetLotteryAwardReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetLotteryAwardReq. */
    class GetLotteryAwardReq implements IGetLotteryAwardReq {

        /**
         * Constructs a new GetLotteryAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IGetLotteryAwardReq);

        /** GetLotteryAwardReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetLotteryAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLotteryAwardReq instance
         */
        public static create(properties?: lottery.IGetLotteryAwardReq): lottery.GetLotteryAwardReq;

        /**
         * Encodes the specified GetLotteryAwardReq message. Does not implicitly {@link lottery.GetLotteryAwardReq.verify|verify} messages.
         * @param message GetLotteryAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IGetLotteryAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLotteryAwardReq message, length delimited. Does not implicitly {@link lottery.GetLotteryAwardReq.verify|verify} messages.
         * @param message GetLotteryAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IGetLotteryAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLotteryAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLotteryAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.GetLotteryAwardReq;

        /**
         * Decodes a GetLotteryAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLotteryAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.GetLotteryAwardReq;

        /**
         * Verifies a GetLotteryAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLotteryAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLotteryAwardReq
         */
        public static fromObject(object: { [k: string]: any }): lottery.GetLotteryAwardReq;

        /**
         * Creates a plain object from a GetLotteryAwardReq message. Also converts values to other types if specified.
         * @param message GetLotteryAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.GetLotteryAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLotteryAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetLotteryAwardRsp. */
    interface IGetLotteryAwardRsp {

        /** GetLotteryAwardRsp errCode */
        errCode?: (number|null);

        /** GetLotteryAwardRsp errMsg */
        errMsg?: (string|null);

        /** GetLotteryAwardRsp awardIdx */
        awardIdx?: (number|null);

        /** GetLotteryAwardRsp awards */
        awards?: (lottery.IItem[]|null);
    }

    /** Represents a GetLotteryAwardRsp. */
    class GetLotteryAwardRsp implements IGetLotteryAwardRsp {

        /**
         * Constructs a new GetLotteryAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IGetLotteryAwardRsp);

        /** GetLotteryAwardRsp errCode. */
        public errCode: number;

        /** GetLotteryAwardRsp errMsg. */
        public errMsg: string;

        /** GetLotteryAwardRsp awardIdx. */
        public awardIdx: number;

        /** GetLotteryAwardRsp awards. */
        public awards: lottery.IItem[];

        /**
         * Creates a new GetLotteryAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLotteryAwardRsp instance
         */
        public static create(properties?: lottery.IGetLotteryAwardRsp): lottery.GetLotteryAwardRsp;

        /**
         * Encodes the specified GetLotteryAwardRsp message. Does not implicitly {@link lottery.GetLotteryAwardRsp.verify|verify} messages.
         * @param message GetLotteryAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IGetLotteryAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLotteryAwardRsp message, length delimited. Does not implicitly {@link lottery.GetLotteryAwardRsp.verify|verify} messages.
         * @param message GetLotteryAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IGetLotteryAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLotteryAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLotteryAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.GetLotteryAwardRsp;

        /**
         * Decodes a GetLotteryAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLotteryAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.GetLotteryAwardRsp;

        /**
         * Verifies a GetLotteryAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLotteryAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLotteryAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): lottery.GetLotteryAwardRsp;

        /**
         * Creates a plain object from a GetLotteryAwardRsp message. Also converts values to other types if specified.
         * @param message GetLotteryAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.GetLotteryAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLotteryAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptLotteryAdStateReq. */
    interface IUptLotteryAdStateReq {

        /** UptLotteryAdStateReq uid */
        uid?: (number|Long|null);

        /** UptLotteryAdStateReq state */
        state?: (number|null);
    }

    /** Represents an UptLotteryAdStateReq. */
    class UptLotteryAdStateReq implements IUptLotteryAdStateReq {

        /**
         * Constructs a new UptLotteryAdStateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IUptLotteryAdStateReq);

        /** UptLotteryAdStateReq uid. */
        public uid: (number|Long);

        /** UptLotteryAdStateReq state. */
        public state: number;

        /**
         * Creates a new UptLotteryAdStateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptLotteryAdStateReq instance
         */
        public static create(properties?: lottery.IUptLotteryAdStateReq): lottery.UptLotteryAdStateReq;

        /**
         * Encodes the specified UptLotteryAdStateReq message. Does not implicitly {@link lottery.UptLotteryAdStateReq.verify|verify} messages.
         * @param message UptLotteryAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IUptLotteryAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptLotteryAdStateReq message, length delimited. Does not implicitly {@link lottery.UptLotteryAdStateReq.verify|verify} messages.
         * @param message UptLotteryAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IUptLotteryAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptLotteryAdStateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptLotteryAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.UptLotteryAdStateReq;

        /**
         * Decodes an UptLotteryAdStateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptLotteryAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.UptLotteryAdStateReq;

        /**
         * Verifies an UptLotteryAdStateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptLotteryAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptLotteryAdStateReq
         */
        public static fromObject(object: { [k: string]: any }): lottery.UptLotteryAdStateReq;

        /**
         * Creates a plain object from an UptLotteryAdStateReq message. Also converts values to other types if specified.
         * @param message UptLotteryAdStateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.UptLotteryAdStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptLotteryAdStateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptLotteryAdStateRsp. */
    interface IUptLotteryAdStateRsp {

        /** UptLotteryAdStateRsp errCode */
        errCode?: (number|null);

        /** UptLotteryAdStateRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptLotteryAdStateRsp. */
    class UptLotteryAdStateRsp implements IUptLotteryAdStateRsp {

        /**
         * Constructs a new UptLotteryAdStateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.IUptLotteryAdStateRsp);

        /** UptLotteryAdStateRsp errCode. */
        public errCode: number;

        /** UptLotteryAdStateRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptLotteryAdStateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptLotteryAdStateRsp instance
         */
        public static create(properties?: lottery.IUptLotteryAdStateRsp): lottery.UptLotteryAdStateRsp;

        /**
         * Encodes the specified UptLotteryAdStateRsp message. Does not implicitly {@link lottery.UptLotteryAdStateRsp.verify|verify} messages.
         * @param message UptLotteryAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.IUptLotteryAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptLotteryAdStateRsp message, length delimited. Does not implicitly {@link lottery.UptLotteryAdStateRsp.verify|verify} messages.
         * @param message UptLotteryAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.IUptLotteryAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptLotteryAdStateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptLotteryAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.UptLotteryAdStateRsp;

        /**
         * Decodes an UptLotteryAdStateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptLotteryAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.UptLotteryAdStateRsp;

        /**
         * Verifies an UptLotteryAdStateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptLotteryAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptLotteryAdStateRsp
         */
        public static fromObject(object: { [k: string]: any }): lottery.UptLotteryAdStateRsp;

        /**
         * Creates a plain object from an UptLotteryAdStateRsp message. Also converts values to other types if specified.
         * @param message UptLotteryAdStateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.UptLotteryAdStateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptLotteryAdStateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryAwardNot. */
    interface ILotteryAwardNot {
    }

    /** Represents a LotteryAwardNot. */
    class LotteryAwardNot implements ILotteryAwardNot {

        /**
         * Constructs a new LotteryAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: lottery.ILotteryAwardNot);

        /**
         * Creates a new LotteryAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotteryAwardNot instance
         */
        public static create(properties?: lottery.ILotteryAwardNot): lottery.LotteryAwardNot;

        /**
         * Encodes the specified LotteryAwardNot message. Does not implicitly {@link lottery.LotteryAwardNot.verify|verify} messages.
         * @param message LotteryAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lottery.ILotteryAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotteryAwardNot message, length delimited. Does not implicitly {@link lottery.LotteryAwardNot.verify|verify} messages.
         * @param message LotteryAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lottery.ILotteryAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotteryAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery.LotteryAwardNot;

        /**
         * Decodes a LotteryAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotteryAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery.LotteryAwardNot;

        /**
         * Verifies a LotteryAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotteryAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryAwardNot
         */
        public static fromObject(object: { [k: string]: any }): lottery.LotteryAwardNot;

        /**
         * Creates a plain object from a LotteryAwardNot message. Also converts values to other types if specified.
         * @param message LotteryAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lottery.LotteryAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
