import * as $protobuf from "protobufjs";
/** Namespace gamebase. */
export namespace gamebase {

    /** Represents a Base */
    class Base extends $protobuf.rpc.Service {

        /**
         * Constructs a new Base service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Base service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Base;

        /**
         * Calls EnterRoom.
         * @param request EnterRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and BaseEmpty
         */
        public enterRoom(request: gamebase.IEnterRoomReq, callback: gamebase.Base.EnterRoomCallback): void;

        /**
         * Calls EnterRoom.
         * @param request EnterRoomReq message or plain object
         * @returns Promise
         */
        public enterRoom(request: gamebase.IEnterRoomReq): Promise<gamebase.BaseEmpty>;

        /**
         * Calls ExitRoom.
         * @param request ExitRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and BaseEmpty
         */
        public exitRoom(request: gamebase.IExitRoomReq, callback: gamebase.Base.ExitRoomCallback): void;

        /**
         * Calls ExitRoom.
         * @param request ExitRoomReq message or plain object
         * @returns Promise
         */
        public exitRoom(request: gamebase.IExitRoomReq): Promise<gamebase.BaseEmpty>;

        /**
         * Calls HeartBeat.
         * @param request HeartBeatReq message or plain object
         * @param callback Node-style callback called with the error, if any, and BaseEmpty
         */
        public heartBeat(request: gamebase.IHeartBeatReq, callback: gamebase.Base.HeartBeatCallback): void;

        /**
         * Calls HeartBeat.
         * @param request HeartBeatReq message or plain object
         * @returns Promise
         */
        public heartBeat(request: gamebase.IHeartBeatReq): Promise<gamebase.BaseEmpty>;

        /**
         * Calls ChangeRoom.
         * @param request ChangeRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and BaseEmpty
         */
        public changeRoom(request: gamebase.IChangeRoomReq, callback: gamebase.Base.ChangeRoomCallback): void;

        /**
         * Calls ChangeRoom.
         * @param request ChangeRoomReq message or plain object
         * @returns Promise
         */
        public changeRoom(request: gamebase.IChangeRoomReq): Promise<gamebase.BaseEmpty>;
    }

    namespace Base {

        /**
         * Callback as used by {@link gamebase.Base#enterRoom}.
         * @param error Error, if any
         * @param [response] BaseEmpty
         */
        type EnterRoomCallback = (error: (Error|null), response?: gamebase.BaseEmpty) => void;

        /**
         * Callback as used by {@link gamebase.Base#exitRoom}.
         * @param error Error, if any
         * @param [response] BaseEmpty
         */
        type ExitRoomCallback = (error: (Error|null), response?: gamebase.BaseEmpty) => void;

        /**
         * Callback as used by {@link gamebase.Base#heartBeat}.
         * @param error Error, if any
         * @param [response] BaseEmpty
         */
        type HeartBeatCallback = (error: (Error|null), response?: gamebase.BaseEmpty) => void;

        /**
         * Callback as used by {@link gamebase.Base#changeRoom}.
         * @param error Error, if any
         * @param [response] BaseEmpty
         */
        type ChangeRoomCallback = (error: (Error|null), response?: gamebase.BaseEmpty) => void;
    }

    /** Represents a Game */
    class Game extends $protobuf.rpc.Service {

        /**
         * Constructs a new Game service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Game service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Game;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateRoomRsp
         */
        public createRoom(request: gamebase.ICreateRoomReq, callback: gamebase.Game.CreateRoomCallback): void;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @returns Promise
         */
        public createRoom(request: gamebase.ICreateRoomReq): Promise<gamebase.CreateRoomRsp>;

        /**
         * Calls DismissRoom.
         * @param request DismissRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DismissRoomRsp
         */
        public dismissRoom(request: gamebase.IDismissRoomReq, callback: gamebase.Game.DismissRoomCallback): void;

        /**
         * Calls DismissRoom.
         * @param request DismissRoomReq message or plain object
         * @returns Promise
         */
        public dismissRoom(request: gamebase.IDismissRoomReq): Promise<gamebase.DismissRoomRsp>;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         */
        public getRoomInfo(request: gamebase.IGetRoomInfoReq, callback: gamebase.Game.GetRoomInfoCallback): void;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @returns Promise
         */
        public getRoomInfo(request: gamebase.IGetRoomInfoReq): Promise<gamebase.GetRoomInfoRsp>;

        /**
         * Calls KickPlayer.
         * @param request KickPlayerReq message or plain object
         * @param callback Node-style callback called with the error, if any, and KickPlayerRsp
         */
        public kickPlayer(request: gamebase.IKickPlayerReq, callback: gamebase.Game.KickPlayerCallback): void;

        /**
         * Calls KickPlayer.
         * @param request KickPlayerReq message or plain object
         * @returns Promise
         */
        public kickPlayer(request: gamebase.IKickPlayerReq): Promise<gamebase.KickPlayerRsp>;

        /**
         * Calls UpdateRoomPlayer.
         * @param request UpdateRoomPlayerReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateRoomPlayerRsp
         */
        public updateRoomPlayer(request: gamebase.IUpdateRoomPlayerReq, callback: gamebase.Game.UpdateRoomPlayerCallback): void;

        /**
         * Calls UpdateRoomPlayer.
         * @param request UpdateRoomPlayerReq message or plain object
         * @returns Promise
         */
        public updateRoomPlayer(request: gamebase.IUpdateRoomPlayerReq): Promise<gamebase.UpdateRoomPlayerRsp>;
    }

    namespace Game {

        /**
         * Callback as used by {@link gamebase.Game#createRoom}.
         * @param error Error, if any
         * @param [response] CreateRoomRsp
         */
        type CreateRoomCallback = (error: (Error|null), response?: gamebase.CreateRoomRsp) => void;

        /**
         * Callback as used by {@link gamebase.Game#dismissRoom}.
         * @param error Error, if any
         * @param [response] DismissRoomRsp
         */
        type DismissRoomCallback = (error: (Error|null), response?: gamebase.DismissRoomRsp) => void;

        /**
         * Callback as used by {@link gamebase.Game#getRoomInfo}.
         * @param error Error, if any
         * @param [response] GetRoomInfoRsp
         */
        type GetRoomInfoCallback = (error: (Error|null), response?: gamebase.GetRoomInfoRsp) => void;

        /**
         * Callback as used by {@link gamebase.Game#kickPlayer}.
         * @param error Error, if any
         * @param [response] KickPlayerRsp
         */
        type KickPlayerCallback = (error: (Error|null), response?: gamebase.KickPlayerRsp) => void;

        /**
         * Callback as used by {@link gamebase.Game#updateRoomPlayer}.
         * @param error Error, if any
         * @param [response] UpdateRoomPlayerRsp
         */
        type UpdateRoomPlayerCallback = (error: (Error|null), response?: gamebase.UpdateRoomPlayerRsp) => void;
    }

    /** Properties of an UpdateRoomPlayerReq. */
    interface IUpdateRoomPlayerReq {

        /** UpdateRoomPlayerReq roomId */
        roomId?: (string|null);

        /** UpdateRoomPlayerReq addList */
        addList?: ({ [k: string]: gamebase.UpdateRoomPlayerReq.IPlyData }|null);

        /** UpdateRoomPlayerReq deleteList */
        deleteList?: ((number|Long)[]|null);
    }

    /** Represents an UpdateRoomPlayerReq. */
    class UpdateRoomPlayerReq implements IUpdateRoomPlayerReq {

        /**
         * Constructs a new UpdateRoomPlayerReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IUpdateRoomPlayerReq);

        /** UpdateRoomPlayerReq roomId. */
        public roomId: string;

        /** UpdateRoomPlayerReq addList. */
        public addList: { [k: string]: gamebase.UpdateRoomPlayerReq.IPlyData };

        /** UpdateRoomPlayerReq deleteList. */
        public deleteList: (number|Long)[];

        /**
         * Creates a new UpdateRoomPlayerReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoomPlayerReq instance
         */
        public static create(properties?: gamebase.IUpdateRoomPlayerReq): gamebase.UpdateRoomPlayerReq;

        /**
         * Encodes the specified UpdateRoomPlayerReq message. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.verify|verify} messages.
         * @param message UpdateRoomPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IUpdateRoomPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoomPlayerReq message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.verify|verify} messages.
         * @param message UpdateRoomPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IUpdateRoomPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoomPlayerReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UpdateRoomPlayerReq;

        /**
         * Decodes an UpdateRoomPlayerReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UpdateRoomPlayerReq;

        /**
         * Verifies an UpdateRoomPlayerReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoomPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoomPlayerReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.UpdateRoomPlayerReq;

        /**
         * Creates a plain object from an UpdateRoomPlayerReq message. Also converts values to other types if specified.
         * @param message UpdateRoomPlayerReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.UpdateRoomPlayerReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoomPlayerReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace UpdateRoomPlayerReq {

        /** Properties of a PlyData. */
        interface IPlyData {

            /** PlyData bindId */
            bindId?: (string|null);
        }

        /** Represents a PlyData. */
        class PlyData implements IPlyData {

            /**
             * Constructs a new PlyData.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.UpdateRoomPlayerReq.IPlyData);

            /** PlyData bindId. */
            public bindId: string;

            /**
             * Creates a new PlyData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlyData instance
             */
            public static create(properties?: gamebase.UpdateRoomPlayerReq.IPlyData): gamebase.UpdateRoomPlayerReq.PlyData;

            /**
             * Encodes the specified PlyData message. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.PlyData.verify|verify} messages.
             * @param message PlyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.UpdateRoomPlayerReq.IPlyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlyData message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.PlyData.verify|verify} messages.
             * @param message PlyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.UpdateRoomPlayerReq.IPlyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlyData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UpdateRoomPlayerReq.PlyData;

            /**
             * Decodes a PlyData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UpdateRoomPlayerReq.PlyData;

            /**
             * Verifies a PlyData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlyData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlyData
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UpdateRoomPlayerReq.PlyData;

            /**
             * Creates a plain object from a PlyData message. Also converts values to other types if specified.
             * @param message PlyData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UpdateRoomPlayerReq.PlyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlyData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an UpdateRoomPlayerRsp. */
    interface IUpdateRoomPlayerRsp {

        /** UpdateRoomPlayerRsp errCode */
        errCode?: (number|null);

        /** UpdateRoomPlayerRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an UpdateRoomPlayerRsp. */
    class UpdateRoomPlayerRsp implements IUpdateRoomPlayerRsp {

        /**
         * Constructs a new UpdateRoomPlayerRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IUpdateRoomPlayerRsp);

        /** UpdateRoomPlayerRsp errCode. */
        public errCode: number;

        /** UpdateRoomPlayerRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new UpdateRoomPlayerRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoomPlayerRsp instance
         */
        public static create(properties?: gamebase.IUpdateRoomPlayerRsp): gamebase.UpdateRoomPlayerRsp;

        /**
         * Encodes the specified UpdateRoomPlayerRsp message. Does not implicitly {@link gamebase.UpdateRoomPlayerRsp.verify|verify} messages.
         * @param message UpdateRoomPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IUpdateRoomPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoomPlayerRsp message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerRsp.verify|verify} messages.
         * @param message UpdateRoomPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IUpdateRoomPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoomPlayerRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UpdateRoomPlayerRsp;

        /**
         * Decodes an UpdateRoomPlayerRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UpdateRoomPlayerRsp;

        /**
         * Verifies an UpdateRoomPlayerRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoomPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoomPlayerRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.UpdateRoomPlayerRsp;

        /**
         * Creates a plain object from an UpdateRoomPlayerRsp message. Also converts values to other types if specified.
         * @param message UpdateRoomPlayerRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.UpdateRoomPlayerRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoomPlayerRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaseEmpty. */
    interface IBaseEmpty {
    }

    /** Represents a BaseEmpty. */
    class BaseEmpty implements IBaseEmpty {

        /**
         * Constructs a new BaseEmpty.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IBaseEmpty);

        /**
         * Creates a new BaseEmpty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseEmpty instance
         */
        public static create(properties?: gamebase.IBaseEmpty): gamebase.BaseEmpty;

        /**
         * Encodes the specified BaseEmpty message. Does not implicitly {@link gamebase.BaseEmpty.verify|verify} messages.
         * @param message BaseEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IBaseEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseEmpty message, length delimited. Does not implicitly {@link gamebase.BaseEmpty.verify|verify} messages.
         * @param message BaseEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IBaseEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseEmpty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.BaseEmpty;

        /**
         * Decodes a BaseEmpty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.BaseEmpty;

        /**
         * Verifies a BaseEmpty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseEmpty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseEmpty
         */
        public static fromObject(object: { [k: string]: any }): gamebase.BaseEmpty;

        /**
         * Creates a plain object from a BaseEmpty message. Also converts values to other types if specified.
         * @param message BaseEmpty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.BaseEmpty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseEmpty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomId */
        roomId?: (string|null);

        /** RoomInfo serverId */
        serverId?: (string|null);

        /** RoomInfo gameId */
        gameId?: (string|null);

        /** RoomInfo ruleId */
        ruleId?: (string|null);

        /** RoomInfo maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** RoomInfo createTime */
        createTime?: (number|Long|null);

        /** RoomInfo metaData */
        metaData?: (string|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IRoomInfo);

        /** RoomInfo roomId. */
        public roomId: string;

        /** RoomInfo serverId. */
        public serverId: string;

        /** RoomInfo gameId. */
        public gameId: string;

        /** RoomInfo ruleId. */
        public ruleId: string;

        /** RoomInfo maxPlayerNum. */
        public maxPlayerNum: number;

        /** RoomInfo createTime. */
        public createTime: (number|Long);

        /** RoomInfo metaData. */
        public metaData: string;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: gamebase.IRoomInfo): gamebase.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): gamebase.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq reqTime */
        reqTime?: (number|Long|null);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IHeartBeatReq);

        /** HeartBeatReq reqTime. */
        public reqTime: (number|Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: gamebase.IHeartBeatReq): gamebase.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.HeartBeatReq;

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @param message HeartBeatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.HeartBeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatRsp. */
    interface IHeartBeatRsp {

        /** HeartBeatRsp reqTime */
        reqTime?: (number|Long|null);

        /** HeartBeatRsp ackTime */
        ackTime?: (number|Long|null);
    }

    /** Represents a HeartBeatRsp. */
    class HeartBeatRsp implements IHeartBeatRsp {

        /**
         * Constructs a new HeartBeatRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IHeartBeatRsp);

        /** HeartBeatRsp reqTime. */
        public reqTime: (number|Long);

        /** HeartBeatRsp ackTime. */
        public ackTime: (number|Long);

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatRsp instance
         */
        public static create(properties?: gamebase.IHeartBeatRsp): gamebase.HeartBeatRsp;

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.HeartBeatRsp;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.HeartBeatRsp;

        /**
         * Verifies a HeartBeatRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.HeartBeatRsp;

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @param message HeartBeatRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.HeartBeatRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomReq. */
    interface ICreateRoomReq {

        /** CreateRoomReq rule */
        rule?: (string|null);

        /** CreateRoomReq metaData */
        metaData?: (string|null);
    }

    /** Represents a CreateRoomReq. */
    class CreateRoomReq implements ICreateRoomReq {

        /**
         * Constructs a new CreateRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.ICreateRoomReq);

        /** CreateRoomReq rule. */
        public rule: string;

        /** CreateRoomReq metaData. */
        public metaData: string;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomReq instance
         */
        public static create(properties?: gamebase.ICreateRoomReq): gamebase.CreateRoomReq;

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gamebase.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gamebase.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.CreateRoomReq;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.CreateRoomReq;

        /**
         * Verifies a CreateRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.CreateRoomReq;

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @param message CreateRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomRsp. */
    interface ICreateRoomRsp {

        /** CreateRoomRsp errCode */
        errCode?: (number|null);

        /** CreateRoomRsp errMsg */
        errMsg?: (string|null);

        /** CreateRoomRsp roomInfo */
        roomInfo?: (gamebase.IRoomInfo|null);
    }

    /** Represents a CreateRoomRsp. */
    class CreateRoomRsp implements ICreateRoomRsp {

        /**
         * Constructs a new CreateRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.ICreateRoomRsp);

        /** CreateRoomRsp errCode. */
        public errCode: number;

        /** CreateRoomRsp errMsg. */
        public errMsg: string;

        /** CreateRoomRsp roomInfo. */
        public roomInfo?: (gamebase.IRoomInfo|null);

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRsp instance
         */
        public static create(properties?: gamebase.ICreateRoomRsp): gamebase.CreateRoomRsp;

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gamebase.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gamebase.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.CreateRoomRsp;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.CreateRoomRsp;

        /**
         * Verifies a CreateRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.CreateRoomRsp;

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @param message CreateRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.CreateRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomReq. */
    interface IEnterRoomReq {

        /** EnterRoomReq uid */
        uid?: (number|Long|null);

        /** EnterRoomReq token */
        token?: (string|null);

        /** EnterRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents an EnterRoomReq. */
    class EnterRoomReq implements IEnterRoomReq {

        /**
         * Constructs a new EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomReq);

        /** EnterRoomReq uid. */
        public uid: (number|Long);

        /** EnterRoomReq token. */
        public token: string;

        /** EnterRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomReq instance
         */
        public static create(properties?: gamebase.IEnterRoomReq): gamebase.EnterRoomReq;

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EnterRoomReq;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EnterRoomReq;

        /**
         * Verifies an EnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomReq;

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @param message EnterRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomRsp. */
    interface IEnterRoomRsp {

        /** EnterRoomRsp errCode */
        errCode?: (number|null);

        /** EnterRoomRsp errMsg */
        errMsg?: (string|null);

        /** EnterRoomRsp roomInfo */
        roomInfo?: (gamebase.IRoomInfo|null);
    }

    /** Represents an EnterRoomRsp. */
    class EnterRoomRsp implements IEnterRoomRsp {

        /**
         * Constructs a new EnterRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomRsp);

        /** EnterRoomRsp errCode. */
        public errCode: number;

        /** EnterRoomRsp errMsg. */
        public errMsg: string;

        /** EnterRoomRsp roomInfo. */
        public roomInfo?: (gamebase.IRoomInfo|null);

        /**
         * Creates a new EnterRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomRsp instance
         */
        public static create(properties?: gamebase.IEnterRoomRsp): gamebase.EnterRoomRsp;

        /**
         * Encodes the specified EnterRoomRsp message. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @param message EnterRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomRsp message, length delimited. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @param message EnterRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EnterRoomRsp;

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EnterRoomRsp;

        /**
         * Verifies an EnterRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomRsp;

        /**
         * Creates a plain object from an EnterRoomRsp message. Also converts values to other types if specified.
         * @param message EnterRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomNot. */
    interface IEnterRoomNot {

        /** EnterRoomNot roomId */
        roomId?: (string|null);

        /** EnterRoomNot uid */
        uid?: (number|Long|null);

        /** EnterRoomNot nickname */
        nickname?: (string|null);

        /** EnterRoomNot money */
        money?: (number|Long|null);
    }

    /** Represents an EnterRoomNot. */
    class EnterRoomNot implements IEnterRoomNot {

        /**
         * Constructs a new EnterRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEnterRoomNot);

        /** EnterRoomNot roomId. */
        public roomId: string;

        /** EnterRoomNot uid. */
        public uid: (number|Long);

        /** EnterRoomNot nickname. */
        public nickname: string;

        /** EnterRoomNot money. */
        public money: (number|Long);

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomNot instance
         */
        public static create(properties?: gamebase.IEnterRoomNot): gamebase.EnterRoomNot;

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EnterRoomNot;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EnterRoomNot;

        /**
         * Verifies an EnterRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EnterRoomNot;

        /**
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @param message EnterRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EnterRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomReq. */
    interface IExitRoomReq {
    }

    /** Represents an ExitRoomReq. */
    class ExitRoomReq implements IExitRoomReq {

        /**
         * Constructs a new ExitRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomReq);

        /**
         * Creates a new ExitRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomReq instance
         */
        public static create(properties?: gamebase.IExitRoomReq): gamebase.ExitRoomReq;

        /**
         * Encodes the specified ExitRoomReq message. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @param message ExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @param message ExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ExitRoomReq;

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ExitRoomReq;

        /**
         * Verifies an ExitRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomReq;

        /**
         * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
         * @param message ExitRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomRsp. */
    interface IExitRoomRsp {

        /** ExitRoomRsp errCode */
        errCode?: (number|null);

        /** ExitRoomRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents an ExitRoomRsp. */
    class ExitRoomRsp implements IExitRoomRsp {

        /**
         * Constructs a new ExitRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomRsp);

        /** ExitRoomRsp errCode. */
        public errCode: number;

        /** ExitRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new ExitRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomRsp instance
         */
        public static create(properties?: gamebase.IExitRoomRsp): gamebase.ExitRoomRsp;

        /**
         * Encodes the specified ExitRoomRsp message. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @param message ExitRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomRsp message, length delimited. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @param message ExitRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ExitRoomRsp;

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ExitRoomRsp;

        /**
         * Verifies an ExitRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomRsp;

        /**
         * Creates a plain object from an ExitRoomRsp message. Also converts values to other types if specified.
         * @param message ExitRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomNot. */
    interface IExitRoomNot {

        /** ExitRoomNot roomId */
        roomId?: (string|null);

        /** ExitRoomNot uid */
        uid?: (number|Long|null);
    }

    /** Represents an ExitRoomNot. */
    class ExitRoomNot implements IExitRoomNot {

        /**
         * Constructs a new ExitRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IExitRoomNot);

        /** ExitRoomNot roomId. */
        public roomId: string;

        /** ExitRoomNot uid. */
        public uid: (number|Long);

        /**
         * Creates a new ExitRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomNot instance
         */
        public static create(properties?: gamebase.IExitRoomNot): gamebase.ExitRoomNot;

        /**
         * Encodes the specified ExitRoomNot message. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @param message ExitRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IExitRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomNot message, length delimited. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @param message ExitRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IExitRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ExitRoomNot;

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ExitRoomNot;

        /**
         * Verifies an ExitRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ExitRoomNot;

        /**
         * Creates a plain object from an ExitRoomNot message. Also converts values to other types if specified.
         * @param message ExitRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ExitRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeRoomReq. */
    interface IChangeRoomReq {
    }

    /** Represents a ChangeRoomReq. */
    class ChangeRoomReq implements IChangeRoomReq {

        /**
         * Constructs a new ChangeRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IChangeRoomReq);

        /**
         * Creates a new ChangeRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRoomReq instance
         */
        public static create(properties?: gamebase.IChangeRoomReq): gamebase.ChangeRoomReq;

        /**
         * Encodes the specified ChangeRoomReq message. Does not implicitly {@link gamebase.ChangeRoomReq.verify|verify} messages.
         * @param message ChangeRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IChangeRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeRoomReq message, length delimited. Does not implicitly {@link gamebase.ChangeRoomReq.verify|verify} messages.
         * @param message ChangeRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IChangeRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ChangeRoomReq;

        /**
         * Decodes a ChangeRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ChangeRoomReq;

        /**
         * Verifies a ChangeRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ChangeRoomReq;

        /**
         * Creates a plain object from a ChangeRoomReq message. Also converts values to other types if specified.
         * @param message ChangeRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ChangeRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeRoomRsp. */
    interface IChangeRoomRsp {

        /** ChangeRoomRsp errCode */
        errCode?: (number|null);

        /** ChangeRoomRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a ChangeRoomRsp. */
    class ChangeRoomRsp implements IChangeRoomRsp {

        /**
         * Constructs a new ChangeRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IChangeRoomRsp);

        /** ChangeRoomRsp errCode. */
        public errCode: number;

        /** ChangeRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new ChangeRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRoomRsp instance
         */
        public static create(properties?: gamebase.IChangeRoomRsp): gamebase.ChangeRoomRsp;

        /**
         * Encodes the specified ChangeRoomRsp message. Does not implicitly {@link gamebase.ChangeRoomRsp.verify|verify} messages.
         * @param message ChangeRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IChangeRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeRoomRsp message, length delimited. Does not implicitly {@link gamebase.ChangeRoomRsp.verify|verify} messages.
         * @param message ChangeRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IChangeRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ChangeRoomRsp;

        /**
         * Decodes a ChangeRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ChangeRoomRsp;

        /**
         * Verifies a ChangeRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.ChangeRoomRsp;

        /**
         * Creates a plain object from a ChangeRoomRsp message. Also converts values to other types if specified.
         * @param message ChangeRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.ChangeRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickPlayerReq. */
    interface IKickPlayerReq {

        /** KickPlayerReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a KickPlayerReq. */
    class KickPlayerReq implements IKickPlayerReq {

        /**
         * Constructs a new KickPlayerReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IKickPlayerReq);

        /** KickPlayerReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new KickPlayerReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPlayerReq instance
         */
        public static create(properties?: gamebase.IKickPlayerReq): gamebase.KickPlayerReq;

        /**
         * Encodes the specified KickPlayerReq message. Does not implicitly {@link gamebase.KickPlayerReq.verify|verify} messages.
         * @param message KickPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IKickPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickPlayerReq message, length delimited. Does not implicitly {@link gamebase.KickPlayerReq.verify|verify} messages.
         * @param message KickPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IKickPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPlayerReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.KickPlayerReq;

        /**
         * Decodes a KickPlayerReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.KickPlayerReq;

        /**
         * Verifies a KickPlayerReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickPlayerReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.KickPlayerReq;

        /**
         * Creates a plain object from a KickPlayerReq message. Also converts values to other types if specified.
         * @param message KickPlayerReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.KickPlayerReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickPlayerReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickPlayerRsp. */
    interface IKickPlayerRsp {

        /** KickPlayerRsp errCode */
        errCode?: (number|null);

        /** KickPlayerRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a KickPlayerRsp. */
    class KickPlayerRsp implements IKickPlayerRsp {

        /**
         * Constructs a new KickPlayerRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IKickPlayerRsp);

        /** KickPlayerRsp errCode. */
        public errCode: number;

        /** KickPlayerRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new KickPlayerRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPlayerRsp instance
         */
        public static create(properties?: gamebase.IKickPlayerRsp): gamebase.KickPlayerRsp;

        /**
         * Encodes the specified KickPlayerRsp message. Does not implicitly {@link gamebase.KickPlayerRsp.verify|verify} messages.
         * @param message KickPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IKickPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickPlayerRsp message, length delimited. Does not implicitly {@link gamebase.KickPlayerRsp.verify|verify} messages.
         * @param message KickPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IKickPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPlayerRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.KickPlayerRsp;

        /**
         * Decodes a KickPlayerRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.KickPlayerRsp;

        /**
         * Verifies a KickPlayerRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickPlayerRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.KickPlayerRsp;

        /**
         * Creates a plain object from a KickPlayerRsp message. Also converts values to other types if specified.
         * @param message KickPlayerRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.KickPlayerRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickPlayerRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickPlayerNot. */
    interface IKickPlayerNot {

        /** KickPlayerNot reason */
        reason?: (number|null);

        /** KickPlayerNot msg */
        msg?: (string|null);
    }

    /** Represents a KickPlayerNot. */
    class KickPlayerNot implements IKickPlayerNot {

        /**
         * Constructs a new KickPlayerNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IKickPlayerNot);

        /** KickPlayerNot reason. */
        public reason: number;

        /** KickPlayerNot msg. */
        public msg: string;

        /**
         * Creates a new KickPlayerNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPlayerNot instance
         */
        public static create(properties?: gamebase.IKickPlayerNot): gamebase.KickPlayerNot;

        /**
         * Encodes the specified KickPlayerNot message. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @param message KickPlayerNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IKickPlayerNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickPlayerNot message, length delimited. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @param message KickPlayerNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IKickPlayerNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.KickPlayerNot;

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.KickPlayerNot;

        /**
         * Verifies a KickPlayerNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickPlayerNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickPlayerNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.KickPlayerNot;

        /**
         * Creates a plain object from a KickPlayerNot message. Also converts values to other types if specified.
         * @param message KickPlayerNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.KickPlayerNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickPlayerNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomReq. */
    interface IDismissRoomReq {

        /** DismissRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents a DismissRoomReq. */
    class DismissRoomReq implements IDismissRoomReq {

        /**
         * Constructs a new DismissRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IDismissRoomReq);

        /** DismissRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomReq instance
         */
        public static create(properties?: gamebase.IDismissRoomReq): gamebase.DismissRoomReq;

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.DismissRoomReq;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.DismissRoomReq;

        /**
         * Verifies a DismissRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.DismissRoomReq;

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @param message DismissRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.DismissRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomRsp. */
    interface IDismissRoomRsp {

        /** DismissRoomRsp errCode */
        errCode?: (number|null);

        /** DismissRoomRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a DismissRoomRsp. */
    class DismissRoomRsp implements IDismissRoomRsp {

        /**
         * Constructs a new DismissRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IDismissRoomRsp);

        /** DismissRoomRsp errCode. */
        public errCode: number;

        /** DismissRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomRsp instance
         */
        public static create(properties?: gamebase.IDismissRoomRsp): gamebase.DismissRoomRsp;

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.DismissRoomRsp;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.DismissRoomRsp;

        /**
         * Verifies a DismissRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.DismissRoomRsp;

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @param message DismissRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.DismissRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetRoomPlayerReq. */
    interface ISetRoomPlayerReq {

        /** SetRoomPlayerReq roomId */
        roomId?: (string|null);

        /** SetRoomPlayerReq players */
        players?: ((number|Long)[]|null);
    }

    /** Represents a SetRoomPlayerReq. */
    class SetRoomPlayerReq implements ISetRoomPlayerReq {

        /**
         * Constructs a new SetRoomPlayerReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.ISetRoomPlayerReq);

        /** SetRoomPlayerReq roomId. */
        public roomId: string;

        /** SetRoomPlayerReq players. */
        public players: (number|Long)[];

        /**
         * Creates a new SetRoomPlayerReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRoomPlayerReq instance
         */
        public static create(properties?: gamebase.ISetRoomPlayerReq): gamebase.SetRoomPlayerReq;

        /**
         * Encodes the specified SetRoomPlayerReq message. Does not implicitly {@link gamebase.SetRoomPlayerReq.verify|verify} messages.
         * @param message SetRoomPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.ISetRoomPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetRoomPlayerReq message, length delimited. Does not implicitly {@link gamebase.SetRoomPlayerReq.verify|verify} messages.
         * @param message SetRoomPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.ISetRoomPlayerReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRoomPlayerReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.SetRoomPlayerReq;

        /**
         * Decodes a SetRoomPlayerReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.SetRoomPlayerReq;

        /**
         * Verifies a SetRoomPlayerReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetRoomPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetRoomPlayerReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.SetRoomPlayerReq;

        /**
         * Creates a plain object from a SetRoomPlayerReq message. Also converts values to other types if specified.
         * @param message SetRoomPlayerReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.SetRoomPlayerReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetRoomPlayerReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetRoomPlayerRsp. */
    interface ISetRoomPlayerRsp {

        /** SetRoomPlayerRsp errCode */
        errCode?: (number|null);

        /** SetRoomPlayerRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a SetRoomPlayerRsp. */
    class SetRoomPlayerRsp implements ISetRoomPlayerRsp {

        /**
         * Constructs a new SetRoomPlayerRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.ISetRoomPlayerRsp);

        /** SetRoomPlayerRsp errCode. */
        public errCode: number;

        /** SetRoomPlayerRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new SetRoomPlayerRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRoomPlayerRsp instance
         */
        public static create(properties?: gamebase.ISetRoomPlayerRsp): gamebase.SetRoomPlayerRsp;

        /**
         * Encodes the specified SetRoomPlayerRsp message. Does not implicitly {@link gamebase.SetRoomPlayerRsp.verify|verify} messages.
         * @param message SetRoomPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.ISetRoomPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetRoomPlayerRsp message, length delimited. Does not implicitly {@link gamebase.SetRoomPlayerRsp.verify|verify} messages.
         * @param message SetRoomPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.ISetRoomPlayerRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRoomPlayerRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.SetRoomPlayerRsp;

        /**
         * Decodes a SetRoomPlayerRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.SetRoomPlayerRsp;

        /**
         * Verifies a SetRoomPlayerRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetRoomPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetRoomPlayerRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.SetRoomPlayerRsp;

        /**
         * Creates a plain object from a SetRoomPlayerRsp message. Also converts values to other types if specified.
         * @param message SetRoomPlayerRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.SetRoomPlayerRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetRoomPlayerRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoomInfoReq. */
    interface IGetRoomInfoReq {

        /** GetRoomInfoReq roomId */
        roomId?: (string|null);
    }

    /** Represents a GetRoomInfoReq. */
    class GetRoomInfoReq implements IGetRoomInfoReq {

        /**
         * Constructs a new GetRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IGetRoomInfoReq);

        /** GetRoomInfoReq roomId. */
        public roomId: string;

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoReq instance
         */
        public static create(properties?: gamebase.IGetRoomInfoReq): gamebase.GetRoomInfoReq;

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gamebase.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gamebase.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.GetRoomInfoReq;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.GetRoomInfoReq;

        /**
         * Verifies a GetRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): gamebase.GetRoomInfoReq;

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoomInfoRsp. */
    interface IGetRoomInfoRsp {

        /** GetRoomInfoRsp roomInfo */
        roomInfo?: (gamebase.IRoomInfo|null);
    }

    /** Represents a GetRoomInfoRsp. */
    class GetRoomInfoRsp implements IGetRoomInfoRsp {

        /**
         * Constructs a new GetRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IGetRoomInfoRsp);

        /** GetRoomInfoRsp roomInfo. */
        public roomInfo?: (gamebase.IRoomInfo|null);

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoRsp instance
         */
        public static create(properties?: gamebase.IGetRoomInfoRsp): gamebase.GetRoomInfoRsp;

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gamebase.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gamebase.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.GetRoomInfoRsp;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.GetRoomInfoRsp;

        /**
         * Verifies a GetRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): gamebase.GetRoomInfoRsp;

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventGameResultNot. */
    interface IEventGameResultNot {

        /** EventGameResultNot gameId */
        gameId?: (string|null);

        /** EventGameResultNot rule */
        rule?: (string|null);

        /** EventGameResultNot uid */
        uid?: (number|Long|null);

        /** EventGameResultNot roomId */
        roomId?: (string|null);

        /** EventGameResultNot round */
        round?: (number|null);

        /** EventGameResultNot checkoutTime */
        checkoutTime?: (number|Long|null);

        /** EventGameResultNot reason */
        reason?: (string|null);

        /** EventGameResultNot itemChanges */
        itemChanges?: ({ [k: string]: (number|Long) }|null);

        /** EventGameResultNot params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents an EventGameResultNot. */
    class EventGameResultNot implements IEventGameResultNot {

        /**
         * Constructs a new EventGameResultNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEventGameResultNot);

        /** EventGameResultNot gameId. */
        public gameId: string;

        /** EventGameResultNot rule. */
        public rule: string;

        /** EventGameResultNot uid. */
        public uid: (number|Long);

        /** EventGameResultNot roomId. */
        public roomId: string;

        /** EventGameResultNot round. */
        public round: number;

        /** EventGameResultNot checkoutTime. */
        public checkoutTime: (number|Long);

        /** EventGameResultNot reason. */
        public reason: string;

        /** EventGameResultNot itemChanges. */
        public itemChanges: { [k: string]: (number|Long) };

        /** EventGameResultNot params. */
        public params: { [k: string]: string };

        /**
         * Creates a new EventGameResultNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventGameResultNot instance
         */
        public static create(properties?: gamebase.IEventGameResultNot): gamebase.EventGameResultNot;

        /**
         * Encodes the specified EventGameResultNot message. Does not implicitly {@link gamebase.EventGameResultNot.verify|verify} messages.
         * @param message EventGameResultNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEventGameResultNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventGameResultNot message, length delimited. Does not implicitly {@link gamebase.EventGameResultNot.verify|verify} messages.
         * @param message EventGameResultNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEventGameResultNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventGameResultNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventGameResultNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EventGameResultNot;

        /**
         * Decodes an EventGameResultNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventGameResultNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EventGameResultNot;

        /**
         * Verifies an EventGameResultNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventGameResultNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventGameResultNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EventGameResultNot;

        /**
         * Creates a plain object from an EventGameResultNot message. Also converts values to other types if specified.
         * @param message EventGameResultNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EventGameResultNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventGameResultNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventPlayerEnterRoom. */
    interface IEventPlayerEnterRoom {

        /** EventPlayerEnterRoom gameId */
        gameId?: (string|null);

        /** EventPlayerEnterRoom ruleId */
        ruleId?: (string|null);

        /** EventPlayerEnterRoom uid */
        uid?: (number|Long|null);

        /** EventPlayerEnterRoom roomId */
        roomId?: (string|null);

        /** EventPlayerEnterRoom serverId */
        serverId?: (string|null);
    }

    /** Represents an EventPlayerEnterRoom. */
    class EventPlayerEnterRoom implements IEventPlayerEnterRoom {

        /**
         * Constructs a new EventPlayerEnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEventPlayerEnterRoom);

        /** EventPlayerEnterRoom gameId. */
        public gameId: string;

        /** EventPlayerEnterRoom ruleId. */
        public ruleId: string;

        /** EventPlayerEnterRoom uid. */
        public uid: (number|Long);

        /** EventPlayerEnterRoom roomId. */
        public roomId: string;

        /** EventPlayerEnterRoom serverId. */
        public serverId: string;

        /**
         * Creates a new EventPlayerEnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventPlayerEnterRoom instance
         */
        public static create(properties?: gamebase.IEventPlayerEnterRoom): gamebase.EventPlayerEnterRoom;

        /**
         * Encodes the specified EventPlayerEnterRoom message. Does not implicitly {@link gamebase.EventPlayerEnterRoom.verify|verify} messages.
         * @param message EventPlayerEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEventPlayerEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventPlayerEnterRoom message, length delimited. Does not implicitly {@link gamebase.EventPlayerEnterRoom.verify|verify} messages.
         * @param message EventPlayerEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEventPlayerEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventPlayerEnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventPlayerEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EventPlayerEnterRoom;

        /**
         * Decodes an EventPlayerEnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventPlayerEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EventPlayerEnterRoom;

        /**
         * Verifies an EventPlayerEnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventPlayerEnterRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventPlayerEnterRoom
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EventPlayerEnterRoom;

        /**
         * Creates a plain object from an EventPlayerEnterRoom message. Also converts values to other types if specified.
         * @param message EventPlayerEnterRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EventPlayerEnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventPlayerEnterRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventPlayerExitRoom. */
    interface IEventPlayerExitRoom {

        /** EventPlayerExitRoom gameId */
        gameId?: (string|null);

        /** EventPlayerExitRoom ruleId */
        ruleId?: (string|null);

        /** EventPlayerExitRoom uid */
        uid?: (number|Long|null);

        /** EventPlayerExitRoom roomId */
        roomId?: (string|null);
    }

    /** Represents an EventPlayerExitRoom. */
    class EventPlayerExitRoom implements IEventPlayerExitRoom {

        /**
         * Constructs a new EventPlayerExitRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEventPlayerExitRoom);

        /** EventPlayerExitRoom gameId. */
        public gameId: string;

        /** EventPlayerExitRoom ruleId. */
        public ruleId: string;

        /** EventPlayerExitRoom uid. */
        public uid: (number|Long);

        /** EventPlayerExitRoom roomId. */
        public roomId: string;

        /**
         * Creates a new EventPlayerExitRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventPlayerExitRoom instance
         */
        public static create(properties?: gamebase.IEventPlayerExitRoom): gamebase.EventPlayerExitRoom;

        /**
         * Encodes the specified EventPlayerExitRoom message. Does not implicitly {@link gamebase.EventPlayerExitRoom.verify|verify} messages.
         * @param message EventPlayerExitRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEventPlayerExitRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventPlayerExitRoom message, length delimited. Does not implicitly {@link gamebase.EventPlayerExitRoom.verify|verify} messages.
         * @param message EventPlayerExitRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEventPlayerExitRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventPlayerExitRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventPlayerExitRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EventPlayerExitRoom;

        /**
         * Decodes an EventPlayerExitRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventPlayerExitRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EventPlayerExitRoom;

        /**
         * Verifies an EventPlayerExitRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventPlayerExitRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventPlayerExitRoom
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EventPlayerExitRoom;

        /**
         * Creates a plain object from an EventPlayerExitRoom message. Also converts values to other types if specified.
         * @param message EventPlayerExitRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EventPlayerExitRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventPlayerExitRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventCreateRoomNot. */
    interface IEventCreateRoomNot {

        /** EventCreateRoomNot roomId */
        roomId?: (string|null);

        /** EventCreateRoomNot serverId */
        serverId?: (string|null);

        /** EventCreateRoomNot ruleId */
        ruleId?: (string|null);

        /** EventCreateRoomNot gameId */
        gameId?: (string|null);

        /** EventCreateRoomNot maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** EventCreateRoomNot createTime */
        createTime?: (number|Long|null);
    }

    /** Represents an EventCreateRoomNot. */
    class EventCreateRoomNot implements IEventCreateRoomNot {

        /**
         * Constructs a new EventCreateRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEventCreateRoomNot);

        /** EventCreateRoomNot roomId. */
        public roomId: string;

        /** EventCreateRoomNot serverId. */
        public serverId: string;

        /** EventCreateRoomNot ruleId. */
        public ruleId: string;

        /** EventCreateRoomNot gameId. */
        public gameId: string;

        /** EventCreateRoomNot maxPlayerNum. */
        public maxPlayerNum: number;

        /** EventCreateRoomNot createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new EventCreateRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventCreateRoomNot instance
         */
        public static create(properties?: gamebase.IEventCreateRoomNot): gamebase.EventCreateRoomNot;

        /**
         * Encodes the specified EventCreateRoomNot message. Does not implicitly {@link gamebase.EventCreateRoomNot.verify|verify} messages.
         * @param message EventCreateRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEventCreateRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventCreateRoomNot message, length delimited. Does not implicitly {@link gamebase.EventCreateRoomNot.verify|verify} messages.
         * @param message EventCreateRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEventCreateRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventCreateRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventCreateRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EventCreateRoomNot;

        /**
         * Decodes an EventCreateRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventCreateRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EventCreateRoomNot;

        /**
         * Verifies an EventCreateRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventCreateRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventCreateRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EventCreateRoomNot;

        /**
         * Creates a plain object from an EventCreateRoomNot message. Also converts values to other types if specified.
         * @param message EventCreateRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EventCreateRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventCreateRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventDismissRoomNot. */
    interface IEventDismissRoomNot {

        /** EventDismissRoomNot serverId */
        serverId?: (string|null);

        /** EventDismissRoomNot roomId */
        roomId?: (string|null);

        /** EventDismissRoomNot ruleId */
        ruleId?: (string|null);
    }

    /** Represents an EventDismissRoomNot. */
    class EventDismissRoomNot implements IEventDismissRoomNot {

        /**
         * Constructs a new EventDismissRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IEventDismissRoomNot);

        /** EventDismissRoomNot serverId. */
        public serverId: string;

        /** EventDismissRoomNot roomId. */
        public roomId: string;

        /** EventDismissRoomNot ruleId. */
        public ruleId: string;

        /**
         * Creates a new EventDismissRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventDismissRoomNot instance
         */
        public static create(properties?: gamebase.IEventDismissRoomNot): gamebase.EventDismissRoomNot;

        /**
         * Encodes the specified EventDismissRoomNot message. Does not implicitly {@link gamebase.EventDismissRoomNot.verify|verify} messages.
         * @param message EventDismissRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IEventDismissRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventDismissRoomNot message, length delimited. Does not implicitly {@link gamebase.EventDismissRoomNot.verify|verify} messages.
         * @param message EventDismissRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IEventDismissRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventDismissRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventDismissRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.EventDismissRoomNot;

        /**
         * Decodes an EventDismissRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventDismissRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.EventDismissRoomNot;

        /**
         * Verifies an EventDismissRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventDismissRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventDismissRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.EventDismissRoomNot;

        /**
         * Creates a plain object from an EventDismissRoomNot message. Also converts values to other types if specified.
         * @param message EventDismissRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.EventDismissRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventDismissRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomMsgNot. */
    interface IRoomMsgNot {

        /** RoomMsgNot code */
        code?: (number|null);

        /** RoomMsgNot reason */
        reason?: (string|null);
    }

    /** Represents a RoomMsgNot. */
    class RoomMsgNot implements IRoomMsgNot {

        /**
         * Constructs a new RoomMsgNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamebase.IRoomMsgNot);

        /** RoomMsgNot code. */
        public code: number;

        /** RoomMsgNot reason. */
        public reason: string;

        /**
         * Creates a new RoomMsgNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomMsgNot instance
         */
        public static create(properties?: gamebase.IRoomMsgNot): gamebase.RoomMsgNot;

        /**
         * Encodes the specified RoomMsgNot message. Does not implicitly {@link gamebase.RoomMsgNot.verify|verify} messages.
         * @param message RoomMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamebase.IRoomMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomMsgNot message, length delimited. Does not implicitly {@link gamebase.RoomMsgNot.verify|verify} messages.
         * @param message RoomMsgNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamebase.IRoomMsgNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomMsgNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.RoomMsgNot;

        /**
         * Decodes a RoomMsgNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.RoomMsgNot;

        /**
         * Verifies a RoomMsgNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomMsgNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomMsgNot
         */
        public static fromObject(object: { [k: string]: any }): gamebase.RoomMsgNot;

        /**
         * Creates a plain object from a RoomMsgNot message. Also converts values to other types if specified.
         * @param message RoomMsgNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamebase.RoomMsgNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomMsgNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
