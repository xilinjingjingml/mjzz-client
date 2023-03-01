import * as $protobuf from "protobufjs";
/** Namespace scmj. */
export namespace scmj {

    /** Represents a Scmj */
    class Scmj extends $protobuf.rpc.Service {

        /**
         * Constructs a new Scmj service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Scmj service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Scmj;

        /**
         * Calls Operate.
         * @param request OperateRsp message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public operate(request: scmj.IOperateRsp, callback: scmj.Scmj.OperateCallback): void;

        /**
         * Calls Operate.
         * @param request OperateRsp message or plain object
         * @returns Promise
         */
        public operate(request: scmj.IOperateRsp): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Exchange.
         * @param request ExchangeRsp message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public exchange(request: scmj.IExchangeRsp, callback: scmj.Scmj.ExchangeCallback): void;

        /**
         * Calls Exchange.
         * @param request ExchangeRsp message or plain object
         * @returns Promise
         */
        public exchange(request: scmj.IExchangeRsp): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Lack.
         * @param request LackRsp message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public lack(request: scmj.ILackRsp, callback: scmj.Scmj.LackCallback): void;

        /**
         * Calls Lack.
         * @param request LackRsp message or plain object
         * @returns Promise
         */
        public lack(request: scmj.ILackRsp): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Bill.
         * @param request BillReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public bill(request: scmj.IBillReq, callback: scmj.Scmj.BillCallback): void;

        /**
         * Calls Bill.
         * @param request BillReq message or plain object
         * @returns Promise
         */
        public bill(request: scmj.IBillReq): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Complete.
         * @param request CompleteReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public complete(request: scmj.ICompleteReq, callback: scmj.Scmj.CompleteCallback): void;

        /**
         * Calls Complete.
         * @param request CompleteReq message or plain object
         * @returns Promise
         */
        public complete(request: scmj.ICompleteReq): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Auto.
         * @param request AutoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public auto(request: scmj.IAutoReq, callback: scmj.Scmj.AutoCallback): void;

        /**
         * Calls Auto.
         * @param request AutoReq message or plain object
         * @returns Promise
         */
        public auto(request: scmj.IAutoReq): Promise<scmj.ScmjEmpty>;

        /**
         * Calls Change.
         * @param request ChangeRsp message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public change(request: scmj.IChangeRsp, callback: scmj.Scmj.ChangeCallback): void;

        /**
         * Calls Change.
         * @param request ChangeRsp message or plain object
         * @returns Promise
         */
        public change(request: scmj.IChangeRsp): Promise<scmj.ScmjEmpty>;

        /**
         * Calls ChangeCardStart.
         * @param request ChangeCardStartReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public changeCardStart(request: scmj.IChangeCardStartReq, callback: scmj.Scmj.ChangeCardStartCallback): void;

        /**
         * Calls ChangeCardStart.
         * @param request ChangeCardStartReq message or plain object
         * @returns Promise
         */
        public changeCardStart(request: scmj.IChangeCardStartReq): Promise<scmj.ScmjEmpty>;

        /**
         * Calls TingTip.
         * @param request TingTipReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ScmjEmpty
         */
        public tingTip(request: scmj.ITingTipReq, callback: scmj.Scmj.TingTipCallback): void;

        /**
         * Calls TingTip.
         * @param request TingTipReq message or plain object
         * @returns Promise
         */
        public tingTip(request: scmj.ITingTipReq): Promise<scmj.ScmjEmpty>;
    }

    namespace Scmj {

        /**
         * Callback as used by {@link scmj.Scmj#operate}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type OperateCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#exchange}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type ExchangeCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#lack}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type LackCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#bill}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type BillCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#complete}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type CompleteCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#auto}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type AutoCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#change}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type ChangeCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#changeCardStart}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type ChangeCardStartCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;

        /**
         * Callback as used by {@link scmj.Scmj#tingTip}.
         * @param error Error, if any
         * @param [response] ScmjEmpty
         */
        type TingTipCallback = (error: (Error|null), response?: scmj.ScmjEmpty) => void;
    }

    /** Properties of a ScmjEmpty. */
    interface IScmjEmpty {
    }

    /** Represents a ScmjEmpty. */
    class ScmjEmpty implements IScmjEmpty {

        /**
         * Constructs a new ScmjEmpty.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IScmjEmpty);

        /**
         * Creates a new ScmjEmpty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScmjEmpty instance
         */
        public static create(properties?: scmj.IScmjEmpty): scmj.ScmjEmpty;

        /**
         * Encodes the specified ScmjEmpty message. Does not implicitly {@link scmj.ScmjEmpty.verify|verify} messages.
         * @param message ScmjEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IScmjEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScmjEmpty message, length delimited. Does not implicitly {@link scmj.ScmjEmpty.verify|verify} messages.
         * @param message ScmjEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IScmjEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScmjEmpty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScmjEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ScmjEmpty;

        /**
         * Decodes a ScmjEmpty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScmjEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ScmjEmpty;

        /**
         * Verifies a ScmjEmpty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScmjEmpty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScmjEmpty
         */
        public static fromObject(object: { [k: string]: any }): scmj.ScmjEmpty;

        /**
         * Creates a plain object from a ScmjEmpty message. Also converts values to other types if specified.
         * @param message ScmjEmpty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ScmjEmpty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScmjEmpty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientTimerNoti. */
    interface IClientTimerNoti {

        /** ClientTimerNoti chairId */
        chairId?: (number|null);

        /** ClientTimerNoti second */
        second?: (number|null);

        /** ClientTimerNoti remainCardNum */
        remainCardNum?: (number|null);
    }

    /** Represents a ClientTimerNoti. */
    class ClientTimerNoti implements IClientTimerNoti {

        /**
         * Constructs a new ClientTimerNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IClientTimerNoti);

        /** ClientTimerNoti chairId. */
        public chairId: number;

        /** ClientTimerNoti second. */
        public second: number;

        /** ClientTimerNoti remainCardNum. */
        public remainCardNum: number;

        /**
         * Creates a new ClientTimerNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientTimerNoti instance
         */
        public static create(properties?: scmj.IClientTimerNoti): scmj.ClientTimerNoti;

        /**
         * Encodes the specified ClientTimerNoti message. Does not implicitly {@link scmj.ClientTimerNoti.verify|verify} messages.
         * @param message ClientTimerNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IClientTimerNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientTimerNoti message, length delimited. Does not implicitly {@link scmj.ClientTimerNoti.verify|verify} messages.
         * @param message ClientTimerNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IClientTimerNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientTimerNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientTimerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ClientTimerNoti;

        /**
         * Decodes a ClientTimerNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientTimerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ClientTimerNoti;

        /**
         * Verifies a ClientTimerNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientTimerNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientTimerNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ClientTimerNoti;

        /**
         * Creates a plain object from a ClientTimerNoti message. Also converts values to other types if specified.
         * @param message ClientTimerNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ClientTimerNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientTimerNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MjPlayMarkNoti. */
    interface IMjPlayMarkNoti {

        /** MjPlayMarkNoti chairId */
        chairId?: (number|null);
    }

    /** Represents a MjPlayMarkNoti. */
    class MjPlayMarkNoti implements IMjPlayMarkNoti {

        /**
         * Constructs a new MjPlayMarkNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IMjPlayMarkNoti);

        /** MjPlayMarkNoti chairId. */
        public chairId: number;

        /**
         * Creates a new MjPlayMarkNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MjPlayMarkNoti instance
         */
        public static create(properties?: scmj.IMjPlayMarkNoti): scmj.MjPlayMarkNoti;

        /**
         * Encodes the specified MjPlayMarkNoti message. Does not implicitly {@link scmj.MjPlayMarkNoti.verify|verify} messages.
         * @param message MjPlayMarkNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IMjPlayMarkNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MjPlayMarkNoti message, length delimited. Does not implicitly {@link scmj.MjPlayMarkNoti.verify|verify} messages.
         * @param message MjPlayMarkNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IMjPlayMarkNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MjPlayMarkNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MjPlayMarkNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.MjPlayMarkNoti;

        /**
         * Decodes a MjPlayMarkNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MjPlayMarkNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.MjPlayMarkNoti;

        /**
         * Verifies a MjPlayMarkNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MjPlayMarkNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MjPlayMarkNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.MjPlayMarkNoti;

        /**
         * Creates a plain object from a MjPlayMarkNoti message. Also converts values to other types if specified.
         * @param message MjPlayMarkNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.MjPlayMarkNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MjPlayMarkNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserItem. */
    interface IUserItem {

        /** UserItem uid */
        uid?: (number|Long|null);

        /** UserItem nickname */
        nickname?: (string|null);

        /** UserItem score */
        score?: (number|Long|null);
    }

    /** Represents a UserItem. */
    class UserItem implements IUserItem {

        /**
         * Constructs a new UserItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IUserItem);

        /** UserItem uid. */
        public uid: (number|Long);

        /** UserItem nickname. */
        public nickname: string;

        /** UserItem score. */
        public score: (number|Long);

        /**
         * Creates a new UserItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserItem instance
         */
        public static create(properties?: scmj.IUserItem): scmj.UserItem;

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link scmj.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link scmj.UserItem.verify|verify} messages.
         * @param message UserItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.UserItem;

        /**
         * Decodes a UserItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.UserItem;

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
        public static fromObject(object: { [k: string]: any }): scmj.UserItem;

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @param message UserItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterNotiItem. */
    interface IEnterNotiItem {

        /** EnterNotiItem chairId */
        chairId?: (number|null);

        /** EnterNotiItem ready */
        ready?: (number|null);

        /** EnterNotiItem data */
        data?: (scmj.IUserItem|null);
    }

    /** Represents an EnterNotiItem. */
    class EnterNotiItem implements IEnterNotiItem {

        /**
         * Constructs a new EnterNotiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IEnterNotiItem);

        /** EnterNotiItem chairId. */
        public chairId: number;

        /** EnterNotiItem ready. */
        public ready: number;

        /** EnterNotiItem data. */
        public data?: (scmj.IUserItem|null);

        /**
         * Creates a new EnterNotiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterNotiItem instance
         */
        public static create(properties?: scmj.IEnterNotiItem): scmj.EnterNotiItem;

        /**
         * Encodes the specified EnterNotiItem message. Does not implicitly {@link scmj.EnterNotiItem.verify|verify} messages.
         * @param message EnterNotiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IEnterNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterNotiItem message, length delimited. Does not implicitly {@link scmj.EnterNotiItem.verify|verify} messages.
         * @param message EnterNotiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IEnterNotiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterNotiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.EnterNotiItem;

        /**
         * Decodes an EnterNotiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.EnterNotiItem;

        /**
         * Verifies an EnterNotiItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterNotiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterNotiItem
         */
        public static fromObject(object: { [k: string]: any }): scmj.EnterNotiItem;

        /**
         * Creates a plain object from an EnterNotiItem message. Also converts values to other types if specified.
         * @param message EnterNotiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.EnterNotiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterNotiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterAck. */
    interface IEnterAck {

        /** EnterAck ret */
        ret?: (number|null);

        /** EnterAck items */
        items?: (scmj.IEnterNotiItem[]|null);
    }

    /** Represents an EnterAck. */
    class EnterAck implements IEnterAck {

        /**
         * Constructs a new EnterAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IEnterAck);

        /** EnterAck ret. */
        public ret: number;

        /** EnterAck items. */
        public items: scmj.IEnterNotiItem[];

        /**
         * Creates a new EnterAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterAck instance
         */
        public static create(properties?: scmj.IEnterAck): scmj.EnterAck;

        /**
         * Encodes the specified EnterAck message. Does not implicitly {@link scmj.EnterAck.verify|verify} messages.
         * @param message EnterAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IEnterAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterAck message, length delimited. Does not implicitly {@link scmj.EnterAck.verify|verify} messages.
         * @param message EnterAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IEnterAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.EnterAck;

        /**
         * Decodes an EnterAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.EnterAck;

        /**
         * Verifies an EnterAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterAck
         */
        public static fromObject(object: { [k: string]: any }): scmj.EnterAck;

        /**
         * Creates a plain object from an EnterAck message. Also converts values to other types if specified.
         * @param message EnterAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.EnterAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterNoti. */
    interface IEnterNoti {

        /** EnterNoti item */
        item?: (scmj.IEnterNotiItem|null);
    }

    /** Represents an EnterNoti. */
    class EnterNoti implements IEnterNoti {

        /**
         * Constructs a new EnterNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IEnterNoti);

        /** EnterNoti item. */
        public item?: (scmj.IEnterNotiItem|null);

        /**
         * Creates a new EnterNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterNoti instance
         */
        public static create(properties?: scmj.IEnterNoti): scmj.EnterNoti;

        /**
         * Encodes the specified EnterNoti message. Does not implicitly {@link scmj.EnterNoti.verify|verify} messages.
         * @param message EnterNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IEnterNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterNoti message, length delimited. Does not implicitly {@link scmj.EnterNoti.verify|verify} messages.
         * @param message EnterNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IEnterNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.EnterNoti;

        /**
         * Decodes an EnterNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.EnterNoti;

        /**
         * Verifies an EnterNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.EnterNoti;

        /**
         * Creates a plain object from an EnterNoti message. Also converts values to other types if specified.
         * @param message EnterNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.EnterNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeginGameNoti. */
    interface IBeginGameNoti {
    }

    /** Represents a BeginGameNoti. */
    class BeginGameNoti implements IBeginGameNoti {

        /**
         * Constructs a new BeginGameNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IBeginGameNoti);

        /**
         * Creates a new BeginGameNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeginGameNoti instance
         */
        public static create(properties?: scmj.IBeginGameNoti): scmj.BeginGameNoti;

        /**
         * Encodes the specified BeginGameNoti message. Does not implicitly {@link scmj.BeginGameNoti.verify|verify} messages.
         * @param message BeginGameNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IBeginGameNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeginGameNoti message, length delimited. Does not implicitly {@link scmj.BeginGameNoti.verify|verify} messages.
         * @param message BeginGameNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IBeginGameNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeginGameNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeginGameNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.BeginGameNoti;

        /**
         * Decodes a BeginGameNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeginGameNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.BeginGameNoti;

        /**
         * Verifies a BeginGameNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeginGameNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeginGameNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.BeginGameNoti;

        /**
         * Creates a plain object from a BeginGameNoti message. Also converts values to other types if specified.
         * @param message BeginGameNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.BeginGameNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeginGameNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaxNoti. */
    interface ITaxNoti {

        /** TaxNoti tax */
        tax?: (number|Long|null);
    }

    /** Represents a TaxNoti. */
    class TaxNoti implements ITaxNoti {

        /**
         * Constructs a new TaxNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITaxNoti);

        /** TaxNoti tax. */
        public tax: (number|Long);

        /**
         * Creates a new TaxNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaxNoti instance
         */
        public static create(properties?: scmj.ITaxNoti): scmj.TaxNoti;

        /**
         * Encodes the specified TaxNoti message. Does not implicitly {@link scmj.TaxNoti.verify|verify} messages.
         * @param message TaxNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITaxNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaxNoti message, length delimited. Does not implicitly {@link scmj.TaxNoti.verify|verify} messages.
         * @param message TaxNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITaxNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaxNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaxNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TaxNoti;

        /**
         * Decodes a TaxNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaxNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TaxNoti;

        /**
         * Verifies a TaxNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaxNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaxNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.TaxNoti;

        /**
         * Creates a plain object from a TaxNoti message. Also converts values to other types if specified.
         * @param message TaxNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TaxNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaxNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetBankerNoti. */
    interface ISetBankerNoti {

        /** SetBankerNoti chairId */
        chairId?: (number|null);

        /** SetBankerNoti dices */
        dices?: (number[]|null);

        /** SetBankerNoti setEast */
        setEast?: (number|null);
    }

    /** Represents a SetBankerNoti. */
    class SetBankerNoti implements ISetBankerNoti {

        /**
         * Constructs a new SetBankerNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ISetBankerNoti);

        /** SetBankerNoti chairId. */
        public chairId: number;

        /** SetBankerNoti dices. */
        public dices: number[];

        /** SetBankerNoti setEast. */
        public setEast: number;

        /**
         * Creates a new SetBankerNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetBankerNoti instance
         */
        public static create(properties?: scmj.ISetBankerNoti): scmj.SetBankerNoti;

        /**
         * Encodes the specified SetBankerNoti message. Does not implicitly {@link scmj.SetBankerNoti.verify|verify} messages.
         * @param message SetBankerNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ISetBankerNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetBankerNoti message, length delimited. Does not implicitly {@link scmj.SetBankerNoti.verify|verify} messages.
         * @param message SetBankerNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ISetBankerNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetBankerNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetBankerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.SetBankerNoti;

        /**
         * Decodes a SetBankerNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetBankerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.SetBankerNoti;

        /**
         * Verifies a SetBankerNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetBankerNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetBankerNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.SetBankerNoti;

        /**
         * Creates a plain object from a SetBankerNoti message. Also converts values to other types if specified.
         * @param message SetBankerNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.SetBankerNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetBankerNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateCardsNoti. */
    interface IUpdateCardsNoti {

        /** UpdateCardsNoti chairId */
        chairId?: (number|null);

        /** UpdateCardsNoti handcards */
        handcards?: (number[]|null);

        /** UpdateCardsNoti leftcards */
        leftcards?: (number[]|null);

        /** UpdateCardsNoti dispcards */
        dispcards?: (number[]|null);

        /** UpdateCardsNoti hucards */
        hucards?: (number[]|null);

        /** UpdateCardsNoti card */
        card?: (number|null);
    }

    /** Represents an UpdateCardsNoti. */
    class UpdateCardsNoti implements IUpdateCardsNoti {

        /**
         * Constructs a new UpdateCardsNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IUpdateCardsNoti);

        /** UpdateCardsNoti chairId. */
        public chairId: number;

        /** UpdateCardsNoti handcards. */
        public handcards: number[];

        /** UpdateCardsNoti leftcards. */
        public leftcards: number[];

        /** UpdateCardsNoti dispcards. */
        public dispcards: number[];

        /** UpdateCardsNoti hucards. */
        public hucards: number[];

        /** UpdateCardsNoti card. */
        public card: number;

        /**
         * Creates a new UpdateCardsNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateCardsNoti instance
         */
        public static create(properties?: scmj.IUpdateCardsNoti): scmj.UpdateCardsNoti;

        /**
         * Encodes the specified UpdateCardsNoti message. Does not implicitly {@link scmj.UpdateCardsNoti.verify|verify} messages.
         * @param message UpdateCardsNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IUpdateCardsNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateCardsNoti message, length delimited. Does not implicitly {@link scmj.UpdateCardsNoti.verify|verify} messages.
         * @param message UpdateCardsNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IUpdateCardsNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateCardsNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateCardsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.UpdateCardsNoti;

        /**
         * Decodes an UpdateCardsNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateCardsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.UpdateCardsNoti;

        /**
         * Verifies an UpdateCardsNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateCardsNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateCardsNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.UpdateCardsNoti;

        /**
         * Creates a plain object from an UpdateCardsNoti message. Also converts values to other types if specified.
         * @param message UpdateCardsNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.UpdateCardsNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateCardsNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeReq. */
    interface IExchangeReq {

        /** ExchangeReq cards */
        cards?: (number[]|null);
    }

    /** Represents an ExchangeReq. */
    class ExchangeReq implements IExchangeReq {

        /**
         * Constructs a new ExchangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IExchangeReq);

        /** ExchangeReq cards. */
        public cards: number[];

        /**
         * Creates a new ExchangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeReq instance
         */
        public static create(properties?: scmj.IExchangeReq): scmj.ExchangeReq;

        /**
         * Encodes the specified ExchangeReq message. Does not implicitly {@link scmj.ExchangeReq.verify|verify} messages.
         * @param message ExchangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IExchangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeReq message, length delimited. Does not implicitly {@link scmj.ExchangeReq.verify|verify} messages.
         * @param message ExchangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IExchangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ExchangeReq;

        /**
         * Decodes an ExchangeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ExchangeReq;

        /**
         * Verifies an ExchangeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.ExchangeReq;

        /**
         * Creates a plain object from an ExchangeReq message. Also converts values to other types if specified.
         * @param message ExchangeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ExchangeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeRsp. */
    interface IExchangeRsp {

        /** ExchangeRsp cards */
        cards?: (number[]|null);
    }

    /** Represents an ExchangeRsp. */
    class ExchangeRsp implements IExchangeRsp {

        /**
         * Constructs a new ExchangeRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IExchangeRsp);

        /** ExchangeRsp cards. */
        public cards: number[];

        /**
         * Creates a new ExchangeRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeRsp instance
         */
        public static create(properties?: scmj.IExchangeRsp): scmj.ExchangeRsp;

        /**
         * Encodes the specified ExchangeRsp message. Does not implicitly {@link scmj.ExchangeRsp.verify|verify} messages.
         * @param message ExchangeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IExchangeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeRsp message, length delimited. Does not implicitly {@link scmj.ExchangeRsp.verify|verify} messages.
         * @param message ExchangeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IExchangeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ExchangeRsp;

        /**
         * Decodes an ExchangeRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ExchangeRsp;

        /**
         * Verifies an ExchangeRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.ExchangeRsp;

        /**
         * Creates a plain object from an ExchangeRsp message. Also converts values to other types if specified.
         * @param message ExchangeRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ExchangeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeConfirmNoti. */
    interface IExchangeConfirmNoti {

        /** ExchangeConfirmNoti chairId */
        chairId?: (number|null);

        /** ExchangeConfirmNoti status */
        status?: (number|null);
    }

    /** Represents an ExchangeConfirmNoti. */
    class ExchangeConfirmNoti implements IExchangeConfirmNoti {

        /**
         * Constructs a new ExchangeConfirmNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IExchangeConfirmNoti);

        /** ExchangeConfirmNoti chairId. */
        public chairId: number;

        /** ExchangeConfirmNoti status. */
        public status: number;

        /**
         * Creates a new ExchangeConfirmNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeConfirmNoti instance
         */
        public static create(properties?: scmj.IExchangeConfirmNoti): scmj.ExchangeConfirmNoti;

        /**
         * Encodes the specified ExchangeConfirmNoti message. Does not implicitly {@link scmj.ExchangeConfirmNoti.verify|verify} messages.
         * @param message ExchangeConfirmNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IExchangeConfirmNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeConfirmNoti message, length delimited. Does not implicitly {@link scmj.ExchangeConfirmNoti.verify|verify} messages.
         * @param message ExchangeConfirmNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IExchangeConfirmNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeConfirmNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeConfirmNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ExchangeConfirmNoti;

        /**
         * Decodes an ExchangeConfirmNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeConfirmNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ExchangeConfirmNoti;

        /**
         * Verifies an ExchangeConfirmNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeConfirmNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeConfirmNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ExchangeConfirmNoti;

        /**
         * Creates a plain object from an ExchangeConfirmNoti message. Also converts values to other types if specified.
         * @param message ExchangeConfirmNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ExchangeConfirmNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeConfirmNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExchangeCompleteNoti. */
    interface IExchangeCompleteNoti {

        /** ExchangeCompleteNoti way */
        way?: (number|null);
    }

    /** Represents an ExchangeCompleteNoti. */
    class ExchangeCompleteNoti implements IExchangeCompleteNoti {

        /**
         * Constructs a new ExchangeCompleteNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IExchangeCompleteNoti);

        /** ExchangeCompleteNoti way. */
        public way: number;

        /**
         * Creates a new ExchangeCompleteNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeCompleteNoti instance
         */
        public static create(properties?: scmj.IExchangeCompleteNoti): scmj.ExchangeCompleteNoti;

        /**
         * Encodes the specified ExchangeCompleteNoti message. Does not implicitly {@link scmj.ExchangeCompleteNoti.verify|verify} messages.
         * @param message ExchangeCompleteNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IExchangeCompleteNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeCompleteNoti message, length delimited. Does not implicitly {@link scmj.ExchangeCompleteNoti.verify|verify} messages.
         * @param message ExchangeCompleteNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IExchangeCompleteNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeCompleteNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeCompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ExchangeCompleteNoti;

        /**
         * Decodes an ExchangeCompleteNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeCompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ExchangeCompleteNoti;

        /**
         * Verifies an ExchangeCompleteNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeCompleteNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeCompleteNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ExchangeCompleteNoti;

        /**
         * Creates a plain object from an ExchangeCompleteNoti message. Also converts values to other types if specified.
         * @param message ExchangeCompleteNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ExchangeCompleteNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeCompleteNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LackReq. */
    interface ILackReq {

        /** LackReq lack */
        lack?: (number|null);
    }

    /** Represents a LackReq. */
    class LackReq implements ILackReq {

        /**
         * Constructs a new LackReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ILackReq);

        /** LackReq lack. */
        public lack: number;

        /**
         * Creates a new LackReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LackReq instance
         */
        public static create(properties?: scmj.ILackReq): scmj.LackReq;

        /**
         * Encodes the specified LackReq message. Does not implicitly {@link scmj.LackReq.verify|verify} messages.
         * @param message LackReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ILackReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LackReq message, length delimited. Does not implicitly {@link scmj.LackReq.verify|verify} messages.
         * @param message LackReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ILackReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LackReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LackReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.LackReq;

        /**
         * Decodes a LackReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LackReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.LackReq;

        /**
         * Verifies a LackReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LackReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LackReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.LackReq;

        /**
         * Creates a plain object from a LackReq message. Also converts values to other types if specified.
         * @param message LackReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.LackReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LackReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LackRsp. */
    interface ILackRsp {

        /** LackRsp lack */
        lack?: (number|null);
    }

    /** Represents a LackRsp. */
    class LackRsp implements ILackRsp {

        /**
         * Constructs a new LackRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ILackRsp);

        /** LackRsp lack. */
        public lack: number;

        /**
         * Creates a new LackRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LackRsp instance
         */
        public static create(properties?: scmj.ILackRsp): scmj.LackRsp;

        /**
         * Encodes the specified LackRsp message. Does not implicitly {@link scmj.LackRsp.verify|verify} messages.
         * @param message LackRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ILackRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LackRsp message, length delimited. Does not implicitly {@link scmj.LackRsp.verify|verify} messages.
         * @param message LackRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ILackRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LackRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LackRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.LackRsp;

        /**
         * Decodes a LackRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LackRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.LackRsp;

        /**
         * Verifies a LackRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LackRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LackRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.LackRsp;

        /**
         * Creates a plain object from a LackRsp message. Also converts values to other types if specified.
         * @param message LackRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.LackRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LackRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LackNoti. */
    interface ILackNoti {

        /** LackNoti chairId */
        chairId?: (number|null);

        /** LackNoti lack */
        lack?: (number|null);
    }

    /** Represents a LackNoti. */
    class LackNoti implements ILackNoti {

        /**
         * Constructs a new LackNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ILackNoti);

        /** LackNoti chairId. */
        public chairId: number;

        /** LackNoti lack. */
        public lack: number;

        /**
         * Creates a new LackNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LackNoti instance
         */
        public static create(properties?: scmj.ILackNoti): scmj.LackNoti;

        /**
         * Encodes the specified LackNoti message. Does not implicitly {@link scmj.LackNoti.verify|verify} messages.
         * @param message LackNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ILackNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LackNoti message, length delimited. Does not implicitly {@link scmj.LackNoti.verify|verify} messages.
         * @param message LackNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ILackNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LackNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LackNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.LackNoti;

        /**
         * Decodes a LackNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LackNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.LackNoti;

        /**
         * Verifies a LackNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LackNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LackNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.LackNoti;

        /**
         * Creates a plain object from a LackNoti message. Also converts values to other types if specified.
         * @param message LackNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.LackNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LackNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OperateReq. */
    interface IOperateReq {

        /** OperateReq opcodes */
        opcodes?: (number[]|null);

        /** OperateReq card */
        card?: (number|null);

        /** OperateReq serialId */
        serialId?: (number|null);

        /** OperateReq tingCards */
        tingCards?: (scmj.ITingCards[]|null);
    }

    /** Represents an OperateReq. */
    class OperateReq implements IOperateReq {

        /**
         * Constructs a new OperateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IOperateReq);

        /** OperateReq opcodes. */
        public opcodes: number[];

        /** OperateReq card. */
        public card: number;

        /** OperateReq serialId. */
        public serialId: number;

        /** OperateReq tingCards. */
        public tingCards: scmj.ITingCards[];

        /**
         * Creates a new OperateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateReq instance
         */
        public static create(properties?: scmj.IOperateReq): scmj.OperateReq;

        /**
         * Encodes the specified OperateReq message. Does not implicitly {@link scmj.OperateReq.verify|verify} messages.
         * @param message OperateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link scmj.OperateReq.verify|verify} messages.
         * @param message OperateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.OperateReq;

        /**
         * Decodes an OperateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.OperateReq;

        /**
         * Verifies an OperateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.OperateReq;

        /**
         * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
         * @param message OperateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.OperateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OperateRsp. */
    interface IOperateRsp {

        /** OperateRsp opcode */
        opcode?: (number|null);

        /** OperateRsp card */
        card?: (number|null);

        /** OperateRsp opCards */
        opCards?: (number[]|null);

        /** OperateRsp serialId */
        serialId?: (number|null);
    }

    /** Represents an OperateRsp. */
    class OperateRsp implements IOperateRsp {

        /**
         * Constructs a new OperateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IOperateRsp);

        /** OperateRsp opcode. */
        public opcode: number;

        /** OperateRsp card. */
        public card: number;

        /** OperateRsp opCards. */
        public opCards: number[];

        /** OperateRsp serialId. */
        public serialId: number;

        /**
         * Creates a new OperateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateRsp instance
         */
        public static create(properties?: scmj.IOperateRsp): scmj.OperateRsp;

        /**
         * Encodes the specified OperateRsp message. Does not implicitly {@link scmj.OperateRsp.verify|verify} messages.
         * @param message OperateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IOperateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateRsp message, length delimited. Does not implicitly {@link scmj.OperateRsp.verify|verify} messages.
         * @param message OperateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IOperateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.OperateRsp;

        /**
         * Decodes an OperateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.OperateRsp;

        /**
         * Verifies an OperateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.OperateRsp;

        /**
         * Creates a plain object from an OperateRsp message. Also converts values to other types if specified.
         * @param message OperateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.OperateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OperateNoti. */
    interface IOperateNoti {

        /** OperateNoti chairId */
        chairId?: (number|null);

        /** OperateNoti opcode */
        opcode?: (number|null);

        /** OperateNoti card */
        card?: (number|null);
    }

    /** Represents an OperateNoti. */
    class OperateNoti implements IOperateNoti {

        /**
         * Constructs a new OperateNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IOperateNoti);

        /** OperateNoti chairId. */
        public chairId: number;

        /** OperateNoti opcode. */
        public opcode: number;

        /** OperateNoti card. */
        public card: number;

        /**
         * Creates a new OperateNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateNoti instance
         */
        public static create(properties?: scmj.IOperateNoti): scmj.OperateNoti;

        /**
         * Encodes the specified OperateNoti message. Does not implicitly {@link scmj.OperateNoti.verify|verify} messages.
         * @param message OperateNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IOperateNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateNoti message, length delimited. Does not implicitly {@link scmj.OperateNoti.verify|verify} messages.
         * @param message OperateNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IOperateNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.OperateNoti;

        /**
         * Decodes an OperateNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.OperateNoti;

        /**
         * Verifies an OperateNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.OperateNoti;

        /**
         * Creates a plain object from an OperateNoti message. Also converts values to other types if specified.
         * @param message OperateNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.OperateNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AutoReq. */
    interface IAutoReq {

        /** AutoReq auto */
        auto?: (number|null);
    }

    /** Represents an AutoReq. */
    class AutoReq implements IAutoReq {

        /**
         * Constructs a new AutoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IAutoReq);

        /** AutoReq auto. */
        public auto: number;

        /**
         * Creates a new AutoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoReq instance
         */
        public static create(properties?: scmj.IAutoReq): scmj.AutoReq;

        /**
         * Encodes the specified AutoReq message. Does not implicitly {@link scmj.AutoReq.verify|verify} messages.
         * @param message AutoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IAutoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AutoReq message, length delimited. Does not implicitly {@link scmj.AutoReq.verify|verify} messages.
         * @param message AutoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IAutoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.AutoReq;

        /**
         * Decodes an AutoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.AutoReq;

        /**
         * Verifies an AutoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AutoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AutoReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.AutoReq;

        /**
         * Creates a plain object from an AutoReq message. Also converts values to other types if specified.
         * @param message AutoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.AutoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AutoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AutoNoti. */
    interface IAutoNoti {

        /** AutoNoti chairId */
        chairId?: (number|null);

        /** AutoNoti auto */
        auto?: (number|null);
    }

    /** Represents an AutoNoti. */
    class AutoNoti implements IAutoNoti {

        /**
         * Constructs a new AutoNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IAutoNoti);

        /** AutoNoti chairId. */
        public chairId: number;

        /** AutoNoti auto. */
        public auto: number;

        /**
         * Creates a new AutoNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoNoti instance
         */
        public static create(properties?: scmj.IAutoNoti): scmj.AutoNoti;

        /**
         * Encodes the specified AutoNoti message. Does not implicitly {@link scmj.AutoNoti.verify|verify} messages.
         * @param message AutoNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IAutoNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AutoNoti message, length delimited. Does not implicitly {@link scmj.AutoNoti.verify|verify} messages.
         * @param message AutoNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IAutoNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.AutoNoti;

        /**
         * Decodes an AutoNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AutoNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.AutoNoti;

        /**
         * Verifies an AutoNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AutoNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AutoNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.AutoNoti;

        /**
         * Creates a plain object from an AutoNoti message. Also converts values to other types if specified.
         * @param message AutoNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.AutoNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AutoNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScoreChangeItem. */
    interface IScoreChangeItem {

        /** ScoreChangeItem chairId */
        chairId?: (number|null);

        /** ScoreChangeItem presentScore */
        presentScore?: (number|Long|null);

        /** ScoreChangeItem totalScore */
        totalScore?: (number|Long|null);
    }

    /** Represents a ScoreChangeItem. */
    class ScoreChangeItem implements IScoreChangeItem {

        /**
         * Constructs a new ScoreChangeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IScoreChangeItem);

        /** ScoreChangeItem chairId. */
        public chairId: number;

        /** ScoreChangeItem presentScore. */
        public presentScore: (number|Long);

        /** ScoreChangeItem totalScore. */
        public totalScore: (number|Long);

        /**
         * Creates a new ScoreChangeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreChangeItem instance
         */
        public static create(properties?: scmj.IScoreChangeItem): scmj.ScoreChangeItem;

        /**
         * Encodes the specified ScoreChangeItem message. Does not implicitly {@link scmj.ScoreChangeItem.verify|verify} messages.
         * @param message ScoreChangeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IScoreChangeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScoreChangeItem message, length delimited. Does not implicitly {@link scmj.ScoreChangeItem.verify|verify} messages.
         * @param message ScoreChangeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IScoreChangeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScoreChangeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreChangeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ScoreChangeItem;

        /**
         * Decodes a ScoreChangeItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreChangeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ScoreChangeItem;

        /**
         * Verifies a ScoreChangeItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScoreChangeItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScoreChangeItem
         */
        public static fromObject(object: { [k: string]: any }): scmj.ScoreChangeItem;

        /**
         * Creates a plain object from a ScoreChangeItem message. Also converts values to other types if specified.
         * @param message ScoreChangeItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ScoreChangeItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScoreChangeItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScoreChangeNoti. */
    interface IScoreChangeNoti {

        /** ScoreChangeNoti items */
        items?: (scmj.IScoreChangeItem[]|null);
    }

    /** Represents a ScoreChangeNoti. */
    class ScoreChangeNoti implements IScoreChangeNoti {

        /**
         * Constructs a new ScoreChangeNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IScoreChangeNoti);

        /** ScoreChangeNoti items. */
        public items: scmj.IScoreChangeItem[];

        /**
         * Creates a new ScoreChangeNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreChangeNoti instance
         */
        public static create(properties?: scmj.IScoreChangeNoti): scmj.ScoreChangeNoti;

        /**
         * Encodes the specified ScoreChangeNoti message. Does not implicitly {@link scmj.ScoreChangeNoti.verify|verify} messages.
         * @param message ScoreChangeNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IScoreChangeNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScoreChangeNoti message, length delimited. Does not implicitly {@link scmj.ScoreChangeNoti.verify|verify} messages.
         * @param message ScoreChangeNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IScoreChangeNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScoreChangeNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ScoreChangeNoti;

        /**
         * Decodes a ScoreChangeNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ScoreChangeNoti;

        /**
         * Verifies a ScoreChangeNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScoreChangeNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScoreChangeNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ScoreChangeNoti;

        /**
         * Creates a plain object from a ScoreChangeNoti message. Also converts values to other types if specified.
         * @param message ScoreChangeNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ScoreChangeNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScoreChangeNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BillReq. */
    interface IBillReq {
    }

    /** Represents a BillReq. */
    class BillReq implements IBillReq {

        /**
         * Constructs a new BillReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IBillReq);

        /**
         * Creates a new BillReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BillReq instance
         */
        public static create(properties?: scmj.IBillReq): scmj.BillReq;

        /**
         * Encodes the specified BillReq message. Does not implicitly {@link scmj.BillReq.verify|verify} messages.
         * @param message BillReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IBillReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BillReq message, length delimited. Does not implicitly {@link scmj.BillReq.verify|verify} messages.
         * @param message BillReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IBillReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BillReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.BillReq;

        /**
         * Decodes a BillReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.BillReq;

        /**
         * Verifies a BillReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BillReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BillReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.BillReq;

        /**
         * Creates a plain object from a BillReq message. Also converts values to other types if specified.
         * @param message BillReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.BillReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BillReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BillItem. */
    interface IBillItem {

        /** BillItem op */
        op?: (number|null);

        /** BillItem fan */
        fan?: (number|null);

        /** BillItem ratio */
        ratio?: (number|null);

        /** BillItem score */
        score?: (number|Long|null);

        /** BillItem position */
        position?: (string|null);

        /** BillItem type */
        type?: (number|null);

        /** BillItem cards */
        cards?: (number[]|null);
    }

    /** Represents a BillItem. */
    class BillItem implements IBillItem {

        /**
         * Constructs a new BillItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IBillItem);

        /** BillItem op. */
        public op: number;

        /** BillItem fan. */
        public fan: number;

        /** BillItem ratio. */
        public ratio: number;

        /** BillItem score. */
        public score: (number|Long);

        /** BillItem position. */
        public position: string;

        /** BillItem type. */
        public type: number;

        /** BillItem cards. */
        public cards: number[];

        /**
         * Creates a new BillItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BillItem instance
         */
        public static create(properties?: scmj.IBillItem): scmj.BillItem;

        /**
         * Encodes the specified BillItem message. Does not implicitly {@link scmj.BillItem.verify|verify} messages.
         * @param message BillItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IBillItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BillItem message, length delimited. Does not implicitly {@link scmj.BillItem.verify|verify} messages.
         * @param message BillItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IBillItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BillItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BillItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.BillItem;

        /**
         * Decodes a BillItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BillItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.BillItem;

        /**
         * Verifies a BillItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BillItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BillItem
         */
        public static fromObject(object: { [k: string]: any }): scmj.BillItem;

        /**
         * Creates a plain object from a BillItem message. Also converts values to other types if specified.
         * @param message BillItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.BillItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BillItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BillRsp. */
    interface IBillRsp {

        /** BillRsp score */
        score?: (number|Long|null);

        /** BillRsp items */
        items?: (scmj.IBillItem[]|null);
    }

    /** Represents a BillRsp. */
    class BillRsp implements IBillRsp {

        /**
         * Constructs a new BillRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IBillRsp);

        /** BillRsp score. */
        public score: (number|Long);

        /** BillRsp items. */
        public items: scmj.IBillItem[];

        /**
         * Creates a new BillRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BillRsp instance
         */
        public static create(properties?: scmj.IBillRsp): scmj.BillRsp;

        /**
         * Encodes the specified BillRsp message. Does not implicitly {@link scmj.BillRsp.verify|verify} messages.
         * @param message BillRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IBillRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BillRsp message, length delimited. Does not implicitly {@link scmj.BillRsp.verify|verify} messages.
         * @param message BillRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IBillRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BillRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.BillRsp;

        /**
         * Decodes a BillRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.BillRsp;

        /**
         * Verifies a BillRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BillRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BillRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.BillRsp;

        /**
         * Creates a plain object from a BillRsp message. Also converts values to other types if specified.
         * @param message BillRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.BillRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BillRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LevelExp. */
    interface ILevelExp {

        /** LevelExp prevLevel */
        prevLevel?: (number|null);

        /** LevelExp curLevel */
        curLevel?: (number|null);

        /** LevelExp incExp */
        incExp?: (number|null);

        /** LevelExp prevLevelExp */
        prevLevelExp?: (number|null);

        /** LevelExp prevLeftExp */
        prevLeftExp?: (number|null);

        /** LevelExp levelExp */
        levelExp?: (number|null);

        /** LevelExp leftExp */
        leftExp?: (number|null);

        /** LevelExp money */
        money?: (number|null);
    }

    /** Represents a LevelExp. */
    class LevelExp implements ILevelExp {

        /**
         * Constructs a new LevelExp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ILevelExp);

        /** LevelExp prevLevel. */
        public prevLevel: number;

        /** LevelExp curLevel. */
        public curLevel: number;

        /** LevelExp incExp. */
        public incExp: number;

        /** LevelExp prevLevelExp. */
        public prevLevelExp: number;

        /** LevelExp prevLeftExp. */
        public prevLeftExp: number;

        /** LevelExp levelExp. */
        public levelExp: number;

        /** LevelExp leftExp. */
        public leftExp: number;

        /** LevelExp money. */
        public money: number;

        /**
         * Creates a new LevelExp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LevelExp instance
         */
        public static create(properties?: scmj.ILevelExp): scmj.LevelExp;

        /**
         * Encodes the specified LevelExp message. Does not implicitly {@link scmj.LevelExp.verify|verify} messages.
         * @param message LevelExp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ILevelExp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LevelExp message, length delimited. Does not implicitly {@link scmj.LevelExp.verify|verify} messages.
         * @param message LevelExp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ILevelExp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LevelExp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LevelExp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.LevelExp;

        /**
         * Decodes a LevelExp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LevelExp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.LevelExp;

        /**
         * Verifies a LevelExp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LevelExp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LevelExp
         */
        public static fromObject(object: { [k: string]: any }): scmj.LevelExp;

        /**
         * Creates a plain object from a LevelExp message. Also converts values to other types if specified.
         * @param message LevelExp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.LevelExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LevelExp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultNoti. */
    interface IResultNoti {

        /** ResultNoti score */
        score?: (number|Long|null);

        /** ResultNoti items */
        items?: (scmj.IBillItem[]|null);

        /** ResultNoti level */
        level?: (scmj.ILevelExp|null);
    }

    /** Represents a ResultNoti. */
    class ResultNoti implements IResultNoti {

        /**
         * Constructs a new ResultNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IResultNoti);

        /** ResultNoti score. */
        public score: (number|Long);

        /** ResultNoti items. */
        public items: scmj.IBillItem[];

        /** ResultNoti level. */
        public level?: (scmj.ILevelExp|null);

        /**
         * Creates a new ResultNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultNoti instance
         */
        public static create(properties?: scmj.IResultNoti): scmj.ResultNoti;

        /**
         * Encodes the specified ResultNoti message. Does not implicitly {@link scmj.ResultNoti.verify|verify} messages.
         * @param message ResultNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IResultNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultNoti message, length delimited. Does not implicitly {@link scmj.ResultNoti.verify|verify} messages.
         * @param message ResultNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IResultNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ResultNoti;

        /**
         * Decodes a ResultNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ResultNoti;

        /**
         * Verifies a ResultNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ResultNoti;

        /**
         * Creates a plain object from a ResultNoti message. Also converts values to other types if specified.
         * @param message ResultNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ResultNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompleteReq. */
    interface ICompleteReq {
    }

    /** Represents a CompleteReq. */
    class CompleteReq implements ICompleteReq {

        /**
         * Constructs a new CompleteReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ICompleteReq);

        /**
         * Creates a new CompleteReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompleteReq instance
         */
        public static create(properties?: scmj.ICompleteReq): scmj.CompleteReq;

        /**
         * Encodes the specified CompleteReq message. Does not implicitly {@link scmj.CompleteReq.verify|verify} messages.
         * @param message CompleteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ICompleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompleteReq message, length delimited. Does not implicitly {@link scmj.CompleteReq.verify|verify} messages.
         * @param message CompleteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ICompleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompleteReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.CompleteReq;

        /**
         * Decodes a CompleteReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.CompleteReq;

        /**
         * Verifies a CompleteReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompleteReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompleteReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.CompleteReq;

        /**
         * Creates a plain object from a CompleteReq message. Also converts values to other types if specified.
         * @param message CompleteReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.CompleteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompleteReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameDataItem. */
    interface IGameDataItem {

        /** GameDataItem chairId */
        chairId?: (number|null);

        /** GameDataItem lack */
        lack?: (number|null);

        /** GameDataItem giveup */
        giveup?: (boolean|null);

        /** GameDataItem auto */
        auto?: (boolean|null);

        /** GameDataItem addScore */
        addScore?: (number|Long|null);

        /** GameDataItem cards */
        cards?: (scmj.IUpdateCardsNoti|null);
    }

    /** Represents a GameDataItem. */
    class GameDataItem implements IGameDataItem {

        /**
         * Constructs a new GameDataItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IGameDataItem);

        /** GameDataItem chairId. */
        public chairId: number;

        /** GameDataItem lack. */
        public lack: number;

        /** GameDataItem giveup. */
        public giveup: boolean;

        /** GameDataItem auto. */
        public auto: boolean;

        /** GameDataItem addScore. */
        public addScore: (number|Long);

        /** GameDataItem cards. */
        public cards?: (scmj.IUpdateCardsNoti|null);

        /**
         * Creates a new GameDataItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameDataItem instance
         */
        public static create(properties?: scmj.IGameDataItem): scmj.GameDataItem;

        /**
         * Encodes the specified GameDataItem message. Does not implicitly {@link scmj.GameDataItem.verify|verify} messages.
         * @param message GameDataItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IGameDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameDataItem message, length delimited. Does not implicitly {@link scmj.GameDataItem.verify|verify} messages.
         * @param message GameDataItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IGameDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameDataItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameDataItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.GameDataItem;

        /**
         * Decodes a GameDataItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameDataItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.GameDataItem;

        /**
         * Verifies a GameDataItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameDataItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameDataItem
         */
        public static fromObject(object: { [k: string]: any }): scmj.GameDataItem;

        /**
         * Creates a plain object from a GameDataItem message. Also converts values to other types if specified.
         * @param message GameDataItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.GameDataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameDataItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompleteNoti. */
    interface ICompleteNoti {

        /** CompleteNoti state */
        state?: (number|null);

        /** CompleteNoti east */
        east?: (number|null);

        /** CompleteNoti banker */
        banker?: (number|null);

        /** CompleteNoti remainCardNum */
        remainCardNum?: (number|null);

        /** CompleteNoti baseItems */
        baseItems?: (scmj.IEnterNotiItem[]|null);

        /** CompleteNoti gameItems */
        gameItems?: (scmj.IGameDataItem[]|null);
    }

    /** Represents a CompleteNoti. */
    class CompleteNoti implements ICompleteNoti {

        /**
         * Constructs a new CompleteNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ICompleteNoti);

        /** CompleteNoti state. */
        public state: number;

        /** CompleteNoti east. */
        public east: number;

        /** CompleteNoti banker. */
        public banker: number;

        /** CompleteNoti remainCardNum. */
        public remainCardNum: number;

        /** CompleteNoti baseItems. */
        public baseItems: scmj.IEnterNotiItem[];

        /** CompleteNoti gameItems. */
        public gameItems: scmj.IGameDataItem[];

        /**
         * Creates a new CompleteNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompleteNoti instance
         */
        public static create(properties?: scmj.ICompleteNoti): scmj.CompleteNoti;

        /**
         * Encodes the specified CompleteNoti message. Does not implicitly {@link scmj.CompleteNoti.verify|verify} messages.
         * @param message CompleteNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ICompleteNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompleteNoti message, length delimited. Does not implicitly {@link scmj.CompleteNoti.verify|verify} messages.
         * @param message CompleteNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ICompleteNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompleteNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.CompleteNoti;

        /**
         * Decodes a CompleteNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.CompleteNoti;

        /**
         * Verifies a CompleteNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompleteNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompleteNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.CompleteNoti;

        /**
         * Creates a plain object from a CompleteNoti message. Also converts values to other types if specified.
         * @param message CompleteNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.CompleteNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompleteNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeReq. */
    interface IChangeReq {
    }

    /** Represents a ChangeReq. */
    class ChangeReq implements IChangeReq {

        /**
         * Constructs a new ChangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IChangeReq);

        /**
         * Creates a new ChangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeReq instance
         */
        public static create(properties?: scmj.IChangeReq): scmj.ChangeReq;

        /**
         * Encodes the specified ChangeReq message. Does not implicitly {@link scmj.ChangeReq.verify|verify} messages.
         * @param message ChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeReq message, length delimited. Does not implicitly {@link scmj.ChangeReq.verify|verify} messages.
         * @param message ChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ChangeReq;

        /**
         * Decodes a ChangeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ChangeReq;

        /**
         * Verifies a ChangeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.ChangeReq;

        /**
         * Creates a plain object from a ChangeReq message. Also converts values to other types if specified.
         * @param message ChangeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ChangeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeRsp. */
    interface IChangeRsp {

        /** ChangeRsp giveup */
        giveup?: (number|null);

        /** ChangeRsp cards */
        cards?: (number[]|null);
    }

    /** Represents a ChangeRsp. */
    class ChangeRsp implements IChangeRsp {

        /**
         * Constructs a new ChangeRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IChangeRsp);

        /** ChangeRsp giveup. */
        public giveup: number;

        /** ChangeRsp cards. */
        public cards: number[];

        /**
         * Creates a new ChangeRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRsp instance
         */
        public static create(properties?: scmj.IChangeRsp): scmj.ChangeRsp;

        /**
         * Encodes the specified ChangeRsp message. Does not implicitly {@link scmj.ChangeRsp.verify|verify} messages.
         * @param message ChangeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IChangeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeRsp message, length delimited. Does not implicitly {@link scmj.ChangeRsp.verify|verify} messages.
         * @param message ChangeRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IChangeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ChangeRsp;

        /**
         * Decodes a ChangeRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ChangeRsp;

        /**
         * Verifies a ChangeRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.ChangeRsp;

        /**
         * Creates a plain object from a ChangeRsp message. Also converts values to other types if specified.
         * @param message ChangeRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ChangeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeNoti. */
    interface IChangeNoti {

        /** ChangeNoti cards */
        cards?: (number[]|null);
    }

    /** Represents a ChangeNoti. */
    class ChangeNoti implements IChangeNoti {

        /**
         * Constructs a new ChangeNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IChangeNoti);

        /** ChangeNoti cards. */
        public cards: number[];

        /**
         * Creates a new ChangeNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeNoti instance
         */
        public static create(properties?: scmj.IChangeNoti): scmj.ChangeNoti;

        /**
         * Encodes the specified ChangeNoti message. Does not implicitly {@link scmj.ChangeNoti.verify|verify} messages.
         * @param message ChangeNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IChangeNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeNoti message, length delimited. Does not implicitly {@link scmj.ChangeNoti.verify|verify} messages.
         * @param message ChangeNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IChangeNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ChangeNoti;

        /**
         * Decodes a ChangeNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ChangeNoti;

        /**
         * Verifies a ChangeNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.ChangeNoti;

        /**
         * Creates a plain object from a ChangeNoti message. Also converts values to other types if specified.
         * @param message ChangeNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ChangeNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeCardStartReq. */
    interface IChangeCardStartReq {

        /** ChangeCardStartReq oid */
        oid?: (string|null);
    }

    /** Represents a ChangeCardStartReq. */
    class ChangeCardStartReq implements IChangeCardStartReq {

        /**
         * Constructs a new ChangeCardStartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.IChangeCardStartReq);

        /** ChangeCardStartReq oid. */
        public oid: string;

        /**
         * Creates a new ChangeCardStartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeCardStartReq instance
         */
        public static create(properties?: scmj.IChangeCardStartReq): scmj.ChangeCardStartReq;

        /**
         * Encodes the specified ChangeCardStartReq message. Does not implicitly {@link scmj.ChangeCardStartReq.verify|verify} messages.
         * @param message ChangeCardStartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.IChangeCardStartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeCardStartReq message, length delimited. Does not implicitly {@link scmj.ChangeCardStartReq.verify|verify} messages.
         * @param message ChangeCardStartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.IChangeCardStartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeCardStartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeCardStartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.ChangeCardStartReq;

        /**
         * Decodes a ChangeCardStartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeCardStartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.ChangeCardStartReq;

        /**
         * Verifies a ChangeCardStartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeCardStartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeCardStartReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.ChangeCardStartReq;

        /**
         * Creates a plain object from a ChangeCardStartReq message. Also converts values to other types if specified.
         * @param message ChangeCardStartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.ChangeCardStartReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeCardStartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TingCard. */
    interface ITingCard {

        /** TingCard card */
        card?: (number|null);

        /** TingCard left */
        left?: (number|null);

        /** TingCard ratio */
        ratio?: (number|null);

        /** TingCard fan */
        fan?: (number|null);
    }

    /** Represents a TingCard. */
    class TingCard implements ITingCard {

        /**
         * Constructs a new TingCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITingCard);

        /** TingCard card. */
        public card: number;

        /** TingCard left. */
        public left: number;

        /** TingCard ratio. */
        public ratio: number;

        /** TingCard fan. */
        public fan: number;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingCard instance
         */
        public static create(properties?: scmj.ITingCard): scmj.TingCard;

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link scmj.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITingCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link scmj.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITingCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TingCard;

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TingCard;

        /**
         * Verifies a TingCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TingCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TingCard
         */
        public static fromObject(object: { [k: string]: any }): scmj.TingCard;

        /**
         * Creates a plain object from a TingCard message. Also converts values to other types if specified.
         * @param message TingCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TingCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TingCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TingCards. */
    interface ITingCards {

        /** TingCards playCard */
        playCard?: (number|null);

        /** TingCards tingCards */
        tingCards?: (scmj.ITingCard[]|null);
    }

    /** Represents a TingCards. */
    class TingCards implements ITingCards {

        /**
         * Constructs a new TingCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITingCards);

        /** TingCards playCard. */
        public playCard: number;

        /** TingCards tingCards. */
        public tingCards: scmj.ITingCard[];

        /**
         * Creates a new TingCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingCards instance
         */
        public static create(properties?: scmj.ITingCards): scmj.TingCards;

        /**
         * Encodes the specified TingCards message. Does not implicitly {@link scmj.TingCards.verify|verify} messages.
         * @param message TingCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITingCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TingCards message, length delimited. Does not implicitly {@link scmj.TingCards.verify|verify} messages.
         * @param message TingCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITingCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TingCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TingCards;

        /**
         * Decodes a TingCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TingCards;

        /**
         * Verifies a TingCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TingCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TingCards
         */
        public static fromObject(object: { [k: string]: any }): scmj.TingCards;

        /**
         * Creates a plain object from a TingCards message. Also converts values to other types if specified.
         * @param message TingCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TingCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TingCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TingTipReq. */
    interface ITingTipReq {
    }

    /** Represents a TingTipReq. */
    class TingTipReq implements ITingTipReq {

        /**
         * Constructs a new TingTipReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITingTipReq);

        /**
         * Creates a new TingTipReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingTipReq instance
         */
        public static create(properties?: scmj.ITingTipReq): scmj.TingTipReq;

        /**
         * Encodes the specified TingTipReq message. Does not implicitly {@link scmj.TingTipReq.verify|verify} messages.
         * @param message TingTipReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITingTipReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TingTipReq message, length delimited. Does not implicitly {@link scmj.TingTipReq.verify|verify} messages.
         * @param message TingTipReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITingTipReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TingTipReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TingTipReq;

        /**
         * Decodes a TingTipReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TingTipReq;

        /**
         * Verifies a TingTipReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TingTipReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TingTipReq
         */
        public static fromObject(object: { [k: string]: any }): scmj.TingTipReq;

        /**
         * Creates a plain object from a TingTipReq message. Also converts values to other types if specified.
         * @param message TingTipReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TingTipReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TingTipReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TingTipRsp. */
    interface ITingTipRsp {

        /** TingTipRsp tingCards */
        tingCards?: (scmj.ITingCard[]|null);
    }

    /** Represents a TingTipRsp. */
    class TingTipRsp implements ITingTipRsp {

        /**
         * Constructs a new TingTipRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITingTipRsp);

        /** TingTipRsp tingCards. */
        public tingCards: scmj.ITingCard[];

        /**
         * Creates a new TingTipRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingTipRsp instance
         */
        public static create(properties?: scmj.ITingTipRsp): scmj.TingTipRsp;

        /**
         * Encodes the specified TingTipRsp message. Does not implicitly {@link scmj.TingTipRsp.verify|verify} messages.
         * @param message TingTipRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITingTipRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TingTipRsp message, length delimited. Does not implicitly {@link scmj.TingTipRsp.verify|verify} messages.
         * @param message TingTipRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITingTipRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TingTipRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingTipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TingTipRsp;

        /**
         * Decodes a TingTipRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingTipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TingTipRsp;

        /**
         * Verifies a TingTipRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TingTipRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TingTipRsp
         */
        public static fromObject(object: { [k: string]: any }): scmj.TingTipRsp;

        /**
         * Creates a plain object from a TingTipRsp message. Also converts values to other types if specified.
         * @param message TingTipRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TingTipRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TingTipRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TingNoti. */
    interface ITingNoti {

        /** TingNoti isTing */
        isTing?: (number|null);
    }

    /** Represents a TingNoti. */
    class TingNoti implements ITingNoti {

        /**
         * Constructs a new TingNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: scmj.ITingNoti);

        /** TingNoti isTing. */
        public isTing: number;

        /**
         * Creates a new TingNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingNoti instance
         */
        public static create(properties?: scmj.ITingNoti): scmj.TingNoti;

        /**
         * Encodes the specified TingNoti message. Does not implicitly {@link scmj.TingNoti.verify|verify} messages.
         * @param message TingNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scmj.ITingNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TingNoti message, length delimited. Does not implicitly {@link scmj.TingNoti.verify|verify} messages.
         * @param message TingNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scmj.ITingNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TingNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scmj.TingNoti;

        /**
         * Decodes a TingNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scmj.TingNoti;

        /**
         * Verifies a TingNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TingNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TingNoti
         */
        public static fromObject(object: { [k: string]: any }): scmj.TingNoti;

        /**
         * Creates a plain object from a TingNoti message. Also converts values to other types if specified.
         * @param message TingNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scmj.TingNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TingNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
