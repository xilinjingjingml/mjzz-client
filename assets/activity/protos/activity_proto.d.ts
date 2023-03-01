import * as $protobuf from "protobufjs";
/** Namespace activity. */
export namespace activity {

    /** Represents an Activity */
    class Activity extends $protobuf.rpc.Service {

        /**
         * Constructs a new Activity service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Activity service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Activity;

        /**
         * Calls GetActivityProgress.
         * @param request GetActivityProgressReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetActivityProgressRsp
         */
        public getActivityProgress(request: activity.IGetActivityProgressReq, callback: activity.Activity.GetActivityProgressCallback): void;

        /**
         * Calls GetActivityProgress.
         * @param request GetActivityProgressReq message or plain object
         * @returns Promise
         */
        public getActivityProgress(request: activity.IGetActivityProgressReq): Promise<activity.GetActivityProgressRsp>;

        /**
         * Calls UptBcsAdState.
         * @param request UptBcsAdStateReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UptBcsAdStateRsp
         */
        public uptBcsAdState(request: activity.IUptBcsAdStateReq, callback: activity.Activity.UptBcsAdStateCallback): void;

        /**
         * Calls UptBcsAdState.
         * @param request UptBcsAdStateReq message or plain object
         * @returns Promise
         */
        public uptBcsAdState(request: activity.IUptBcsAdStateReq): Promise<activity.UptBcsAdStateRsp>;

        /**
         * Calls GetActivityAward.
         * @param request GetActivityAwardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetActivityAwardRsp
         */
        public getActivityAward(request: activity.IGetActivityAwardReq, callback: activity.Activity.GetActivityAwardCallback): void;

        /**
         * Calls GetActivityAward.
         * @param request GetActivityAwardReq message or plain object
         * @returns Promise
         */
        public getActivityAward(request: activity.IGetActivityAwardReq): Promise<activity.GetActivityAwardRsp>;
    }

    namespace Activity {

        /**
         * Callback as used by {@link activity.Activity#getActivityProgress}.
         * @param error Error, if any
         * @param [response] GetActivityProgressRsp
         */
        type GetActivityProgressCallback = (error: (Error|null), response?: activity.GetActivityProgressRsp) => void;

        /**
         * Callback as used by {@link activity.Activity#uptBcsAdState}.
         * @param error Error, if any
         * @param [response] UptBcsAdStateRsp
         */
        type UptBcsAdStateCallback = (error: (Error|null), response?: activity.UptBcsAdStateRsp) => void;

        /**
         * Callback as used by {@link activity.Activity#getActivityAward}.
         * @param error Error, if any
         * @param [response] GetActivityAwardRsp
         */
        type GetActivityAwardCallback = (error: (Error|null), response?: activity.GetActivityAwardRsp) => void;
    }

    /** Properties of a GetActivityProgressReq. */
    interface IGetActivityProgressReq {

        /** GetActivityProgressReq type */
        type?: (number|null);

        /** GetActivityProgressReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetActivityProgressReq. */
    class GetActivityProgressReq implements IGetActivityProgressReq {

        /**
         * Constructs a new GetActivityProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IGetActivityProgressReq);

        /** GetActivityProgressReq type. */
        public type: number;

        /** GetActivityProgressReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetActivityProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetActivityProgressReq instance
         */
        public static create(properties?: activity.IGetActivityProgressReq): activity.GetActivityProgressReq;

        /**
         * Encodes the specified GetActivityProgressReq message. Does not implicitly {@link activity.GetActivityProgressReq.verify|verify} messages.
         * @param message GetActivityProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IGetActivityProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetActivityProgressReq message, length delimited. Does not implicitly {@link activity.GetActivityProgressReq.verify|verify} messages.
         * @param message GetActivityProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IGetActivityProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetActivityProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetActivityProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.GetActivityProgressReq;

        /**
         * Decodes a GetActivityProgressReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetActivityProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.GetActivityProgressReq;

        /**
         * Verifies a GetActivityProgressReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetActivityProgressReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetActivityProgressReq
         */
        public static fromObject(object: { [k: string]: any }): activity.GetActivityProgressReq;

        /**
         * Creates a plain object from a GetActivityProgressReq message. Also converts values to other types if specified.
         * @param message GetActivityProgressReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.GetActivityProgressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetActivityProgressReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardItem. */
    interface IAwardItem {

        /** AwardItem propId */
        propId?: (number|null);

        /** AwardItem minNum */
        minNum?: (number|Long|null);

        /** AwardItem maxNum */
        maxNum?: (number|Long|null);

        /** AwardItem effectTime */
        effectTime?: (number|Long|null);

        /** AwardItem propIndex */
        propIndex?: (number|Long|null);

        /** AwardItem tip */
        tip?: (string|null);
    }

    /** Represents an AwardItem. */
    class AwardItem implements IAwardItem {

        /**
         * Constructs a new AwardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IAwardItem);

        /** AwardItem propId. */
        public propId: number;

        /** AwardItem minNum. */
        public minNum: (number|Long);

        /** AwardItem maxNum. */
        public maxNum: (number|Long);

        /** AwardItem effectTime. */
        public effectTime: (number|Long);

        /** AwardItem propIndex. */
        public propIndex: (number|Long);

        /** AwardItem tip. */
        public tip: string;

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardItem instance
         */
        public static create(properties?: activity.IAwardItem): activity.AwardItem;

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link activity.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link activity.AwardItem.verify|verify} messages.
         * @param message AwardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IAwardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.AwardItem;

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.AwardItem;

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
        public static fromObject(object: { [k: string]: any }): activity.AwardItem;

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @param message AwardItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.AwardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityItem. */
    interface IActivityItem {

        /** ActivityItem uid */
        uid?: (number|Long|null);

        /** ActivityItem progId */
        progId?: (string|null);

        /** ActivityItem activityId */
        activityId?: (number|null);

        /** ActivityItem type */
        type?: (number|null);

        /** ActivityItem title */
        title?: (string|null);

        /** ActivityItem desc */
        desc?: (string|null);

        /** ActivityItem curNum */
        curNum?: (number|Long|null);

        /** ActivityItem condNum */
        condNum?: (number|Long|null);

        /** ActivityItem awards */
        awards?: (activity.IAwardItem[]|null);

        /** ActivityItem status */
        status?: (number|null);
    }

    /** Represents an ActivityItem. */
    class ActivityItem implements IActivityItem {

        /**
         * Constructs a new ActivityItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IActivityItem);

        /** ActivityItem uid. */
        public uid: (number|Long);

        /** ActivityItem progId. */
        public progId: string;

        /** ActivityItem activityId. */
        public activityId: number;

        /** ActivityItem type. */
        public type: number;

        /** ActivityItem title. */
        public title: string;

        /** ActivityItem desc. */
        public desc: string;

        /** ActivityItem curNum. */
        public curNum: (number|Long);

        /** ActivityItem condNum. */
        public condNum: (number|Long);

        /** ActivityItem awards. */
        public awards: activity.IAwardItem[];

        /** ActivityItem status. */
        public status: number;

        /**
         * Creates a new ActivityItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityItem instance
         */
        public static create(properties?: activity.IActivityItem): activity.ActivityItem;

        /**
         * Encodes the specified ActivityItem message. Does not implicitly {@link activity.ActivityItem.verify|verify} messages.
         * @param message ActivityItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IActivityItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityItem message, length delimited. Does not implicitly {@link activity.ActivityItem.verify|verify} messages.
         * @param message ActivityItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IActivityItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.ActivityItem;

        /**
         * Decodes an ActivityItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.ActivityItem;

        /**
         * Verifies an ActivityItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityItem
         */
        public static fromObject(object: { [k: string]: any }): activity.ActivityItem;

        /**
         * Creates a plain object from an ActivityItem message. Also converts values to other types if specified.
         * @param message ActivityItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.ActivityItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetActivityProgressRsp. */
    interface IGetActivityProgressRsp {

        /** GetActivityProgressRsp errCode */
        errCode?: (number|null);

        /** GetActivityProgressRsp errMsg */
        errMsg?: (string|null);

        /** GetActivityProgressRsp activityItems */
        activityItems?: (activity.IActivityItem[]|null);
    }

    /** Represents a GetActivityProgressRsp. */
    class GetActivityProgressRsp implements IGetActivityProgressRsp {

        /**
         * Constructs a new GetActivityProgressRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IGetActivityProgressRsp);

        /** GetActivityProgressRsp errCode. */
        public errCode: number;

        /** GetActivityProgressRsp errMsg. */
        public errMsg: string;

        /** GetActivityProgressRsp activityItems. */
        public activityItems: activity.IActivityItem[];

        /**
         * Creates a new GetActivityProgressRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetActivityProgressRsp instance
         */
        public static create(properties?: activity.IGetActivityProgressRsp): activity.GetActivityProgressRsp;

        /**
         * Encodes the specified GetActivityProgressRsp message. Does not implicitly {@link activity.GetActivityProgressRsp.verify|verify} messages.
         * @param message GetActivityProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IGetActivityProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetActivityProgressRsp message, length delimited. Does not implicitly {@link activity.GetActivityProgressRsp.verify|verify} messages.
         * @param message GetActivityProgressRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IGetActivityProgressRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetActivityProgressRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetActivityProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.GetActivityProgressRsp;

        /**
         * Decodes a GetActivityProgressRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetActivityProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.GetActivityProgressRsp;

        /**
         * Verifies a GetActivityProgressRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetActivityProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetActivityProgressRsp
         */
        public static fromObject(object: { [k: string]: any }): activity.GetActivityProgressRsp;

        /**
         * Creates a plain object from a GetActivityProgressRsp message. Also converts values to other types if specified.
         * @param message GetActivityProgressRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.GetActivityProgressRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetActivityProgressRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetActivityAwardReq. */
    interface IGetActivityAwardReq {

        /** GetActivityAwardReq progIds */
        progIds?: (string|null);

        /** GetActivityAwardReq uid */
        uid?: (number|Long|null);

        /** GetActivityAwardReq type */
        type?: (number|null);

        /** GetActivityAwardReq double */
        double?: (number|null);
    }

    /** Represents a GetActivityAwardReq. */
    class GetActivityAwardReq implements IGetActivityAwardReq {

        /**
         * Constructs a new GetActivityAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IGetActivityAwardReq);

        /** GetActivityAwardReq progIds. */
        public progIds: string;

        /** GetActivityAwardReq uid. */
        public uid: (number|Long);

        /** GetActivityAwardReq type. */
        public type: number;

        /** GetActivityAwardReq double. */
        public double: number;

        /**
         * Creates a new GetActivityAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetActivityAwardReq instance
         */
        public static create(properties?: activity.IGetActivityAwardReq): activity.GetActivityAwardReq;

        /**
         * Encodes the specified GetActivityAwardReq message. Does not implicitly {@link activity.GetActivityAwardReq.verify|verify} messages.
         * @param message GetActivityAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IGetActivityAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetActivityAwardReq message, length delimited. Does not implicitly {@link activity.GetActivityAwardReq.verify|verify} messages.
         * @param message GetActivityAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IGetActivityAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetActivityAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetActivityAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.GetActivityAwardReq;

        /**
         * Decodes a GetActivityAwardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetActivityAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.GetActivityAwardReq;

        /**
         * Verifies a GetActivityAwardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetActivityAwardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetActivityAwardReq
         */
        public static fromObject(object: { [k: string]: any }): activity.GetActivityAwardReq;

        /**
         * Creates a plain object from a GetActivityAwardReq message. Also converts values to other types if specified.
         * @param message GetActivityAwardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.GetActivityAwardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetActivityAwardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetActivityAwardRsp. */
    interface IGetActivityAwardRsp {

        /** GetActivityAwardRsp errCode */
        errCode?: (number|null);

        /** GetActivityAwardRsp errMsg */
        errMsg?: (string|null);

        /** GetActivityAwardRsp awards */
        awards?: (activity.IAwardItem[]|null);
    }

    /** Represents a GetActivityAwardRsp. */
    class GetActivityAwardRsp implements IGetActivityAwardRsp {

        /**
         * Constructs a new GetActivityAwardRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IGetActivityAwardRsp);

        /** GetActivityAwardRsp errCode. */
        public errCode: number;

        /** GetActivityAwardRsp errMsg. */
        public errMsg: string;

        /** GetActivityAwardRsp awards. */
        public awards: activity.IAwardItem[];

        /**
         * Creates a new GetActivityAwardRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetActivityAwardRsp instance
         */
        public static create(properties?: activity.IGetActivityAwardRsp): activity.GetActivityAwardRsp;

        /**
         * Encodes the specified GetActivityAwardRsp message. Does not implicitly {@link activity.GetActivityAwardRsp.verify|verify} messages.
         * @param message GetActivityAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IGetActivityAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetActivityAwardRsp message, length delimited. Does not implicitly {@link activity.GetActivityAwardRsp.verify|verify} messages.
         * @param message GetActivityAwardRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IGetActivityAwardRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetActivityAwardRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetActivityAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.GetActivityAwardRsp;

        /**
         * Decodes a GetActivityAwardRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetActivityAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.GetActivityAwardRsp;

        /**
         * Verifies a GetActivityAwardRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetActivityAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetActivityAwardRsp
         */
        public static fromObject(object: { [k: string]: any }): activity.GetActivityAwardRsp;

        /**
         * Creates a plain object from a GetActivityAwardRsp message. Also converts values to other types if specified.
         * @param message GetActivityAwardRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.GetActivityAwardRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetActivityAwardRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptBcsAdStateReq. */
    interface IUptBcsAdStateReq {

        /** UptBcsAdStateReq uid */
        uid?: (number|Long|null);

        /** UptBcsAdStateReq state */
        state?: (number|null);
    }

    /** Represents an UptBcsAdStateReq. */
    class UptBcsAdStateReq implements IUptBcsAdStateReq {

        /**
         * Constructs a new UptBcsAdStateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IUptBcsAdStateReq);

        /** UptBcsAdStateReq uid. */
        public uid: (number|Long);

        /** UptBcsAdStateReq state. */
        public state: number;

        /**
         * Creates a new UptBcsAdStateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptBcsAdStateReq instance
         */
        public static create(properties?: activity.IUptBcsAdStateReq): activity.UptBcsAdStateReq;

        /**
         * Encodes the specified UptBcsAdStateReq message. Does not implicitly {@link activity.UptBcsAdStateReq.verify|verify} messages.
         * @param message UptBcsAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IUptBcsAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptBcsAdStateReq message, length delimited. Does not implicitly {@link activity.UptBcsAdStateReq.verify|verify} messages.
         * @param message UptBcsAdStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IUptBcsAdStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptBcsAdStateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptBcsAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.UptBcsAdStateReq;

        /**
         * Decodes an UptBcsAdStateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptBcsAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.UptBcsAdStateReq;

        /**
         * Verifies an UptBcsAdStateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptBcsAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptBcsAdStateReq
         */
        public static fromObject(object: { [k: string]: any }): activity.UptBcsAdStateReq;

        /**
         * Creates a plain object from an UptBcsAdStateReq message. Also converts values to other types if specified.
         * @param message UptBcsAdStateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.UptBcsAdStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptBcsAdStateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UptBcsAdStateRsp. */
    interface IUptBcsAdStateRsp {

        /** UptBcsAdStateRsp errCode */
        errCode?: (number|null);

        /** UptBcsAdStateRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UptBcsAdStateRsp. */
    class UptBcsAdStateRsp implements IUptBcsAdStateRsp {

        /**
         * Constructs a new UptBcsAdStateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IUptBcsAdStateRsp);

        /** UptBcsAdStateRsp errCode. */
        public errCode: number;

        /** UptBcsAdStateRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UptBcsAdStateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UptBcsAdStateRsp instance
         */
        public static create(properties?: activity.IUptBcsAdStateRsp): activity.UptBcsAdStateRsp;

        /**
         * Encodes the specified UptBcsAdStateRsp message. Does not implicitly {@link activity.UptBcsAdStateRsp.verify|verify} messages.
         * @param message UptBcsAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IUptBcsAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UptBcsAdStateRsp message, length delimited. Does not implicitly {@link activity.UptBcsAdStateRsp.verify|verify} messages.
         * @param message UptBcsAdStateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IUptBcsAdStateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UptBcsAdStateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UptBcsAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.UptBcsAdStateRsp;

        /**
         * Decodes an UptBcsAdStateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UptBcsAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.UptBcsAdStateRsp;

        /**
         * Verifies an UptBcsAdStateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UptBcsAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UptBcsAdStateRsp
         */
        public static fromObject(object: { [k: string]: any }): activity.UptBcsAdStateRsp;

        /**
         * Creates a plain object from an UptBcsAdStateRsp message. Also converts values to other types if specified.
         * @param message UptBcsAdStateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.UptBcsAdStateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UptBcsAdStateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityHeadFrameNot. */
    interface IActivityHeadFrameNot {

        /** ActivityHeadFrameNot params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents an ActivityHeadFrameNot. */
    class ActivityHeadFrameNot implements IActivityHeadFrameNot {

        /**
         * Constructs a new ActivityHeadFrameNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IActivityHeadFrameNot);

        /** ActivityHeadFrameNot params. */
        public params: { [k: string]: string };

        /**
         * Creates a new ActivityHeadFrameNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityHeadFrameNot instance
         */
        public static create(properties?: activity.IActivityHeadFrameNot): activity.ActivityHeadFrameNot;

        /**
         * Encodes the specified ActivityHeadFrameNot message. Does not implicitly {@link activity.ActivityHeadFrameNot.verify|verify} messages.
         * @param message ActivityHeadFrameNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IActivityHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityHeadFrameNot message, length delimited. Does not implicitly {@link activity.ActivityHeadFrameNot.verify|verify} messages.
         * @param message ActivityHeadFrameNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IActivityHeadFrameNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityHeadFrameNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.ActivityHeadFrameNot;

        /**
         * Decodes an ActivityHeadFrameNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.ActivityHeadFrameNot;

        /**
         * Verifies an ActivityHeadFrameNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityHeadFrameNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityHeadFrameNot
         */
        public static fromObject(object: { [k: string]: any }): activity.ActivityHeadFrameNot;

        /**
         * Creates a plain object from an ActivityHeadFrameNot message. Also converts values to other types if specified.
         * @param message ActivityHeadFrameNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.ActivityHeadFrameNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityHeadFrameNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityAwardNot. */
    interface IActivityAwardNot {

        /** ActivityAwardNot haveRewards */
        haveRewards?: (boolean|null);

        /** ActivityAwardNot style */
        style?: (number|null);

        /** ActivityAwardNot desc */
        desc?: (string|null);

        /** ActivityAwardNot align */
        align?: (number|null);
    }

    /** Represents an ActivityAwardNot. */
    class ActivityAwardNot implements IActivityAwardNot {

        /**
         * Constructs a new ActivityAwardNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: activity.IActivityAwardNot);

        /** ActivityAwardNot haveRewards. */
        public haveRewards: boolean;

        /** ActivityAwardNot style. */
        public style: number;

        /** ActivityAwardNot desc. */
        public desc: string;

        /** ActivityAwardNot align. */
        public align: number;

        /**
         * Creates a new ActivityAwardNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityAwardNot instance
         */
        public static create(properties?: activity.IActivityAwardNot): activity.ActivityAwardNot;

        /**
         * Encodes the specified ActivityAwardNot message. Does not implicitly {@link activity.ActivityAwardNot.verify|verify} messages.
         * @param message ActivityAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activity.IActivityAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityAwardNot message, length delimited. Does not implicitly {@link activity.ActivityAwardNot.verify|verify} messages.
         * @param message ActivityAwardNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activity.IActivityAwardNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityAwardNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activity.ActivityAwardNot;

        /**
         * Decodes an ActivityAwardNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activity.ActivityAwardNot;

        /**
         * Verifies an ActivityAwardNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityAwardNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityAwardNot
         */
        public static fromObject(object: { [k: string]: any }): activity.ActivityAwardNot;

        /**
         * Creates a plain object from an ActivityAwardNot message. Also converts values to other types if specified.
         * @param message ActivityAwardNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activity.ActivityAwardNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityAwardNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
