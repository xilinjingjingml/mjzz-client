import * as $protobuf from "protobufjs";
/** Namespace room. */
export namespace room {

    /** Represents a Room */
    class Room extends $protobuf.rpc.Service {

        /**
         * Constructs a new Room service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Room service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Room;

        /**
         * Calls StartGame.
         * @param request StartJoinRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and StartJoinRoomRsp
         */
        public startGame(request: room.IStartJoinRoomReq, callback: room.Room.StartGameCallback): void;

        /**
         * Calls StartGame.
         * @param request StartJoinRoomReq message or plain object
         * @returns Promise
         */
        public startGame(request: room.IStartJoinRoomReq): Promise<room.StartJoinRoomRsp>;

        /**
         * Calls LeaveGame.
         * @param request CancelJoinRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CancelJoinRoomRsp
         */
        public leaveGame(request: room.ICancelJoinRoomReq, callback: room.Room.LeaveGameCallback): void;

        /**
         * Calls LeaveGame.
         * @param request CancelJoinRoomReq message or plain object
         * @returns Promise
         */
        public leaveGame(request: room.ICancelJoinRoomReq): Promise<room.CancelJoinRoomRsp>;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         */
        public getRoomInfo(request: room.IGetRoomInfoReq, callback: room.Room.GetRoomInfoCallback): void;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @returns Promise
         */
        public getRoomInfo(request: room.IGetRoomInfoReq): Promise<room.GetRoomInfoRsp>;

        /**
         * Calls GetCurRoomInfo.
         * @param request GetCurRoomInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetCurRoomInfoRsp
         */
        public getCurRoomInfo(request: room.IGetCurRoomInfoReq, callback: room.Room.GetCurRoomInfoCallback): void;

        /**
         * Calls GetCurRoomInfo.
         * @param request GetCurRoomInfoReq message or plain object
         * @returns Promise
         */
        public getCurRoomInfo(request: room.IGetCurRoomInfoReq): Promise<room.GetCurRoomInfoRsp>;

        /**
         * Calls GetRoomList.
         * @param request RoomListReq message or plain object
         * @param callback Node-style callback called with the error, if any, and RoomListRsp
         */
        public getRoomList(request: room.IRoomListReq, callback: room.Room.GetRoomListCallback): void;

        /**
         * Calls GetRoomList.
         * @param request RoomListReq message or plain object
         * @returns Promise
         */
        public getRoomList(request: room.IRoomListReq): Promise<room.RoomListRsp>;

        /**
         * Calls EnterRoomConfirm.
         * @param request EnterRoomConfirmReq message or plain object
         * @param callback Node-style callback called with the error, if any, and EnterRoomConfirmRsp
         */
        public enterRoomConfirm(request: room.IEnterRoomConfirmReq, callback: room.Room.EnterRoomConfirmCallback): void;

        /**
         * Calls EnterRoomConfirm.
         * @param request EnterRoomConfirmReq message or plain object
         * @returns Promise
         */
        public enterRoomConfirm(request: room.IEnterRoomConfirmReq): Promise<room.EnterRoomConfirmRsp>;
    }

    namespace Room {

        /**
         * Callback as used by {@link room.Room#startGame}.
         * @param error Error, if any
         * @param [response] StartJoinRoomRsp
         */
        type StartGameCallback = (error: (Error|null), response?: room.StartJoinRoomRsp) => void;

        /**
         * Callback as used by {@link room.Room#leaveGame}.
         * @param error Error, if any
         * @param [response] CancelJoinRoomRsp
         */
        type LeaveGameCallback = (error: (Error|null), response?: room.CancelJoinRoomRsp) => void;

        /**
         * Callback as used by {@link room.Room#getRoomInfo}.
         * @param error Error, if any
         * @param [response] GetRoomInfoRsp
         */
        type GetRoomInfoCallback = (error: (Error|null), response?: room.GetRoomInfoRsp) => void;

        /**
         * Callback as used by {@link room.Room#getCurRoomInfo}.
         * @param error Error, if any
         * @param [response] GetCurRoomInfoRsp
         */
        type GetCurRoomInfoCallback = (error: (Error|null), response?: room.GetCurRoomInfoRsp) => void;

        /**
         * Callback as used by {@link room.Room#getRoomList}.
         * @param error Error, if any
         * @param [response] RoomListRsp
         */
        type GetRoomListCallback = (error: (Error|null), response?: room.RoomListRsp) => void;

        /**
         * Callback as used by {@link room.Room#enterRoomConfirm}.
         * @param error Error, if any
         * @param [response] EnterRoomConfirmRsp
         */
        type EnterRoomConfirmCallback = (error: (Error|null), response?: room.EnterRoomConfirmRsp) => void;
    }

    /** Properties of a GameData. */
    interface IGameData {

        /** GameData roomId */
        roomId?: (string|null);

        /** GameData ruleId */
        ruleId?: (string|null);

        /** GameData serverId */
        serverId?: (string|null);

        /** GameData gameId */
        gameId?: (string|null);
    }

    /** Represents a GameData. */
    class GameData implements IGameData {

        /**
         * Constructs a new GameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IGameData);

        /** GameData roomId. */
        public roomId: string;

        /** GameData ruleId. */
        public ruleId: string;

        /** GameData serverId. */
        public serverId: string;

        /** GameData gameId. */
        public gameId: string;

        /**
         * Creates a new GameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameData instance
         */
        public static create(properties?: room.IGameData): room.GameData;

        /**
         * Encodes the specified GameData message. Does not implicitly {@link room.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link room.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.GameData;

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.GameData;

        /**
         * Verifies a GameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameData
         */
        public static fromObject(object: { [k: string]: any }): room.GameData;

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @param message GameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameData to JSON.
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

        /** RoomInfo metaData */
        metaData?: (string|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IRoomInfo);

        /** RoomInfo roomId. */
        public roomId: string;

        /** RoomInfo serverId. */
        public serverId: string;

        /** RoomInfo gameId. */
        public gameId: string;

        /** RoomInfo ruleId. */
        public ruleId: string;

        /** RoomInfo metaData. */
        public metaData: string;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: room.IRoomInfo): room.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link room.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link room.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): room.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomReq. */
    interface IStartJoinRoomReq {

        /** StartJoinRoomReq uid */
        uid?: (number|Long|null);

        /** StartJoinRoomReq gameId */
        gameId?: (string|null);

        /** StartJoinRoomReq ruleId */
        ruleId?: (string|null);

        /** StartJoinRoomReq params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents a StartJoinRoomReq. */
    class StartJoinRoomReq implements IStartJoinRoomReq {

        /**
         * Constructs a new StartJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IStartJoinRoomReq);

        /** StartJoinRoomReq uid. */
        public uid: (number|Long);

        /** StartJoinRoomReq gameId. */
        public gameId: string;

        /** StartJoinRoomReq ruleId. */
        public ruleId: string;

        /** StartJoinRoomReq params. */
        public params: { [k: string]: string };

        /**
         * Creates a new StartJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomReq instance
         */
        public static create(properties?: room.IStartJoinRoomReq): room.StartJoinRoomReq;

        /**
         * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link room.StartJoinRoomReq.verify|verify} messages.
         * @param message StartJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link room.StartJoinRoomReq.verify|verify} messages.
         * @param message StartJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IStartJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.StartJoinRoomReq;

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.StartJoinRoomReq;

        /**
         * Verifies a StartJoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): room.StartJoinRoomReq;

        /**
         * Creates a plain object from a StartJoinRoomReq message. Also converts values to other types if specified.
         * @param message StartJoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.StartJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomRsp. */
    interface IStartJoinRoomRsp {

        /** StartJoinRoomRsp errCode */
        errCode?: (number|null);

        /** StartJoinRoomRsp errMsg */
        errMsg?: (string|null);

        /** StartJoinRoomRsp gameData */
        gameData?: (room.IGameData|null);
    }

    /** Represents a StartJoinRoomRsp. */
    class StartJoinRoomRsp implements IStartJoinRoomRsp {

        /**
         * Constructs a new StartJoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IStartJoinRoomRsp);

        /** StartJoinRoomRsp errCode. */
        public errCode: number;

        /** StartJoinRoomRsp errMsg. */
        public errMsg: string;

        /** StartJoinRoomRsp gameData. */
        public gameData?: (room.IGameData|null);

        /**
         * Creates a new StartJoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomRsp instance
         */
        public static create(properties?: room.IStartJoinRoomRsp): room.StartJoinRoomRsp;

        /**
         * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link room.StartJoinRoomRsp.verify|verify} messages.
         * @param message StartJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link room.StartJoinRoomRsp.verify|verify} messages.
         * @param message StartJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IStartJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.StartJoinRoomRsp;

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.StartJoinRoomRsp;

        /**
         * Verifies a StartJoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): room.StartJoinRoomRsp;

        /**
         * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
         * @param message StartJoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.StartJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartJoinRoomNot. */
    interface IStartJoinRoomNot {

        /** StartJoinRoomNot gameId */
        gameId?: (string|null);

        /** StartJoinRoomNot ruleId */
        ruleId?: (string|null);
    }

    /** Represents a StartJoinRoomNot. */
    class StartJoinRoomNot implements IStartJoinRoomNot {

        /**
         * Constructs a new StartJoinRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IStartJoinRoomNot);

        /** StartJoinRoomNot gameId. */
        public gameId: string;

        /** StartJoinRoomNot ruleId. */
        public ruleId: string;

        /**
         * Creates a new StartJoinRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartJoinRoomNot instance
         */
        public static create(properties?: room.IStartJoinRoomNot): room.StartJoinRoomNot;

        /**
         * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link room.StartJoinRoomNot.verify|verify} messages.
         * @param message StartJoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link room.StartJoinRoomNot.verify|verify} messages.
         * @param message StartJoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IStartJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.StartJoinRoomNot;

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.StartJoinRoomNot;

        /**
         * Verifies a StartJoinRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartJoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartJoinRoomNot
         */
        public static fromObject(object: { [k: string]: any }): room.StartJoinRoomNot;

        /**
         * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
         * @param message StartJoinRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.StartJoinRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartJoinRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomConfirmReq. */
    interface IEnterRoomConfirmReq {

        /** EnterRoomConfirmReq confirmed */
        confirmed?: (boolean|null);
    }

    /** Represents an EnterRoomConfirmReq. */
    class EnterRoomConfirmReq implements IEnterRoomConfirmReq {

        /**
         * Constructs a new EnterRoomConfirmReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IEnterRoomConfirmReq);

        /** EnterRoomConfirmReq confirmed. */
        public confirmed: boolean;

        /**
         * Creates a new EnterRoomConfirmReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomConfirmReq instance
         */
        public static create(properties?: room.IEnterRoomConfirmReq): room.EnterRoomConfirmReq;

        /**
         * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link room.EnterRoomConfirmReq.verify|verify} messages.
         * @param message EnterRoomConfirmReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link room.EnterRoomConfirmReq.verify|verify} messages.
         * @param message EnterRoomConfirmReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IEnterRoomConfirmReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.EnterRoomConfirmReq;

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.EnterRoomConfirmReq;

        /**
         * Verifies an EnterRoomConfirmReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomConfirmReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomConfirmReq
         */
        public static fromObject(object: { [k: string]: any }): room.EnterRoomConfirmReq;

        /**
         * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
         * @param message EnterRoomConfirmReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.EnterRoomConfirmReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomConfirmReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomConfirmRsp. */
    interface IEnterRoomConfirmRsp {

        /** EnterRoomConfirmRsp errCode */
        errCode?: (number|null);

        /** EnterRoomConfirmRsp errMsg */
        errMsg?: (string|null);

        /** EnterRoomConfirmRsp room */
        room?: (room.IRoomInfo|null);
    }

    /** Represents an EnterRoomConfirmRsp. */
    class EnterRoomConfirmRsp implements IEnterRoomConfirmRsp {

        /**
         * Constructs a new EnterRoomConfirmRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IEnterRoomConfirmRsp);

        /** EnterRoomConfirmRsp errCode. */
        public errCode: number;

        /** EnterRoomConfirmRsp errMsg. */
        public errMsg: string;

        /** EnterRoomConfirmRsp room. */
        public room?: (room.IRoomInfo|null);

        /**
         * Creates a new EnterRoomConfirmRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomConfirmRsp instance
         */
        public static create(properties?: room.IEnterRoomConfirmRsp): room.EnterRoomConfirmRsp;

        /**
         * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link room.EnterRoomConfirmRsp.verify|verify} messages.
         * @param message EnterRoomConfirmRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link room.EnterRoomConfirmRsp.verify|verify} messages.
         * @param message EnterRoomConfirmRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IEnterRoomConfirmRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.EnterRoomConfirmRsp;

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.EnterRoomConfirmRsp;

        /**
         * Verifies an EnterRoomConfirmRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomConfirmRsp
         */
        public static fromObject(object: { [k: string]: any }): room.EnterRoomConfirmRsp;

        /**
         * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
         * @param message EnterRoomConfirmRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.EnterRoomConfirmRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomConfirmRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelJoinRoomReq. */
    interface ICancelJoinRoomReq {

        /** CancelJoinRoomReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a CancelJoinRoomReq. */
    class CancelJoinRoomReq implements ICancelJoinRoomReq {

        /**
         * Constructs a new CancelJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.ICancelJoinRoomReq);

        /** CancelJoinRoomReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new CancelJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelJoinRoomReq instance
         */
        public static create(properties?: room.ICancelJoinRoomReq): room.CancelJoinRoomReq;

        /**
         * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link room.CancelJoinRoomReq.verify|verify} messages.
         * @param message CancelJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link room.CancelJoinRoomReq.verify|verify} messages.
         * @param message CancelJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.ICancelJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.CancelJoinRoomReq;

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.CancelJoinRoomReq;

        /**
         * Verifies a CancelJoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelJoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): room.CancelJoinRoomReq;

        /**
         * Creates a plain object from a CancelJoinRoomReq message. Also converts values to other types if specified.
         * @param message CancelJoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.CancelJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelJoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelJoinRoomRsp. */
    interface ICancelJoinRoomRsp {

        /** CancelJoinRoomRsp errCode */
        errCode?: (number|null);

        /** CancelJoinRoomRsp errMsg */
        errMsg?: (string|null);
    }

    /** Represents a CancelJoinRoomRsp. */
    class CancelJoinRoomRsp implements ICancelJoinRoomRsp {

        /**
         * Constructs a new CancelJoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.ICancelJoinRoomRsp);

        /** CancelJoinRoomRsp errCode. */
        public errCode: number;

        /** CancelJoinRoomRsp errMsg. */
        public errMsg: string;

        /**
         * Creates a new CancelJoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelJoinRoomRsp instance
         */
        public static create(properties?: room.ICancelJoinRoomRsp): room.CancelJoinRoomRsp;

        /**
         * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link room.CancelJoinRoomRsp.verify|verify} messages.
         * @param message CancelJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link room.CancelJoinRoomRsp.verify|verify} messages.
         * @param message CancelJoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.ICancelJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.CancelJoinRoomRsp;

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.CancelJoinRoomRsp;

        /**
         * Verifies a CancelJoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelJoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): room.CancelJoinRoomRsp;

        /**
         * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
         * @param message CancelJoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.CancelJoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelJoinRoomRsp to JSON.
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
        constructor(properties?: room.IGetRoomInfoReq);

        /** GetRoomInfoReq roomId. */
        public roomId: string;

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoReq instance
         */
        public static create(properties?: room.IGetRoomInfoReq): room.GetRoomInfoReq;

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link room.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link room.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.GetRoomInfoReq;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.GetRoomInfoReq;

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
        public static fromObject(object: { [k: string]: any }): room.GetRoomInfoReq;

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoomInfoRsp. */
    interface IGetRoomInfoRsp {

        /** GetRoomInfoRsp errCode */
        errCode?: (number|null);

        /** GetRoomInfoRsp errMsg */
        errMsg?: (string|null);

        /** GetRoomInfoRsp room */
        room?: (room.IRoomInfo|null);
    }

    /** Represents a GetRoomInfoRsp. */
    class GetRoomInfoRsp implements IGetRoomInfoRsp {

        /**
         * Constructs a new GetRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IGetRoomInfoRsp);

        /** GetRoomInfoRsp errCode. */
        public errCode: number;

        /** GetRoomInfoRsp errMsg. */
        public errMsg: string;

        /** GetRoomInfoRsp room. */
        public room?: (room.IRoomInfo|null);

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoRsp instance
         */
        public static create(properties?: room.IGetRoomInfoRsp): room.GetRoomInfoRsp;

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link room.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link room.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.GetRoomInfoRsp;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.GetRoomInfoRsp;

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
        public static fromObject(object: { [k: string]: any }): room.GetRoomInfoRsp;

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCurRoomInfoReq. */
    interface IGetCurRoomInfoReq {

        /** GetCurRoomInfoReq uid */
        uid?: (number|Long|null);
    }

    /** Represents a GetCurRoomInfoReq. */
    class GetCurRoomInfoReq implements IGetCurRoomInfoReq {

        /**
         * Constructs a new GetCurRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IGetCurRoomInfoReq);

        /** GetCurRoomInfoReq uid. */
        public uid: (number|Long);

        /**
         * Creates a new GetCurRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurRoomInfoReq instance
         */
        public static create(properties?: room.IGetCurRoomInfoReq): room.GetCurRoomInfoReq;

        /**
         * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link room.GetCurRoomInfoReq.verify|verify} messages.
         * @param message GetCurRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link room.GetCurRoomInfoReq.verify|verify} messages.
         * @param message GetCurRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IGetCurRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.GetCurRoomInfoReq;

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.GetCurRoomInfoReq;

        /**
         * Verifies a GetCurRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCurRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCurRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): room.GetCurRoomInfoReq;

        /**
         * Creates a plain object from a GetCurRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetCurRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.GetCurRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCurRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCurRoomInfoRsp. */
    interface IGetCurRoomInfoRsp {

        /** GetCurRoomInfoRsp errCode */
        errCode?: (number|null);

        /** GetCurRoomInfoRsp errMsg */
        errMsg?: (string|null);

        /** GetCurRoomInfoRsp room */
        room?: (room.IRoomInfo|null);
    }

    /** Represents a GetCurRoomInfoRsp. */
    class GetCurRoomInfoRsp implements IGetCurRoomInfoRsp {

        /**
         * Constructs a new GetCurRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IGetCurRoomInfoRsp);

        /** GetCurRoomInfoRsp errCode. */
        public errCode: number;

        /** GetCurRoomInfoRsp errMsg. */
        public errMsg: string;

        /** GetCurRoomInfoRsp room. */
        public room?: (room.IRoomInfo|null);

        /**
         * Creates a new GetCurRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurRoomInfoRsp instance
         */
        public static create(properties?: room.IGetCurRoomInfoRsp): room.GetCurRoomInfoRsp;

        /**
         * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link room.GetCurRoomInfoRsp.verify|verify} messages.
         * @param message GetCurRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link room.GetCurRoomInfoRsp.verify|verify} messages.
         * @param message GetCurRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IGetCurRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.GetCurRoomInfoRsp;

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.GetCurRoomInfoRsp;

        /**
         * Verifies a GetCurRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCurRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): room.GetCurRoomInfoRsp;

        /**
         * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetCurRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.GetCurRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCurRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListReq. */
    interface IRoomListReq {
    }

    /** Represents a RoomListReq. */
    class RoomListReq implements IRoomListReq {

        /**
         * Constructs a new RoomListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IRoomListReq);

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListReq instance
         */
        public static create(properties?: room.IRoomListReq): room.RoomListReq;

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link room.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link room.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.RoomListReq;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.RoomListReq;

        /**
         * Verifies a RoomListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListReq
         */
        public static fromObject(object: { [k: string]: any }): room.RoomListReq;

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @param message RoomListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.RoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListRsp. */
    interface IRoomListRsp {

        /** RoomListRsp errCode */
        errCode?: (number|null);

        /** RoomListRsp errMsg */
        errMsg?: (string|null);

        /** RoomListRsp roomList */
        roomList?: (room.IRoomInfo[]|null);
    }

    /** Represents a RoomListRsp. */
    class RoomListRsp implements IRoomListRsp {

        /**
         * Constructs a new RoomListRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IRoomListRsp);

        /** RoomListRsp errCode. */
        public errCode: number;

        /** RoomListRsp errMsg. */
        public errMsg: string;

        /** RoomListRsp roomList. */
        public roomList: room.IRoomInfo[];

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListRsp instance
         */
        public static create(properties?: room.IRoomListRsp): room.RoomListRsp;

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link room.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link room.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.RoomListRsp;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.RoomListRsp;

        /**
         * Verifies a RoomListRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListRsp
         */
        public static fromObject(object: { [k: string]: any }): room.RoomListRsp;

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @param message RoomListRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.RoomListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CacheRoom. */
    interface ICacheRoom {

        /** CacheRoom roomId */
        roomId?: (string|null);

        /** CacheRoom ruleId */
        ruleId?: (string|null);

        /** CacheRoom gameId */
        gameId?: (string|null);

        /** CacheRoom serverId */
        serverId?: (string|null);

        /** CacheRoom maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** CacheRoom createTime */
        createTime?: (number|Long|null);

        /** CacheRoom players */
        players?: ({ [k: string]: (number|Long) }|null);

        /** CacheRoom loadingPlayers */
        loadingPlayers?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a CacheRoom. */
    class CacheRoom implements ICacheRoom {

        /**
         * Constructs a new CacheRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.ICacheRoom);

        /** CacheRoom roomId. */
        public roomId: string;

        /** CacheRoom ruleId. */
        public ruleId: string;

        /** CacheRoom gameId. */
        public gameId: string;

        /** CacheRoom serverId. */
        public serverId: string;

        /** CacheRoom maxPlayerNum. */
        public maxPlayerNum: number;

        /** CacheRoom createTime. */
        public createTime: (number|Long);

        /** CacheRoom players. */
        public players: { [k: string]: (number|Long) };

        /** CacheRoom loadingPlayers. */
        public loadingPlayers: { [k: string]: (number|Long) };

        /**
         * Creates a new CacheRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CacheRoom instance
         */
        public static create(properties?: room.ICacheRoom): room.CacheRoom;

        /**
         * Encodes the specified CacheRoom message. Does not implicitly {@link room.CacheRoom.verify|verify} messages.
         * @param message CacheRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.ICacheRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CacheRoom message, length delimited. Does not implicitly {@link room.CacheRoom.verify|verify} messages.
         * @param message CacheRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.ICacheRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CacheRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CacheRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.CacheRoom;

        /**
         * Decodes a CacheRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CacheRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.CacheRoom;

        /**
         * Verifies a CacheRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CacheRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CacheRoom
         */
        public static fromObject(object: { [k: string]: any }): room.CacheRoom;

        /**
         * Creates a plain object from a CacheRoom message. Also converts values to other types if specified.
         * @param message CacheRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.CacheRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CacheRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CachePlayer. */
    interface ICachePlayer {

        /** CachePlayer uid */
        uid?: (number|Long|null);

        /** CachePlayer roomId */
        roomId?: (string|null);

        /** CachePlayer serverId */
        serverId?: (string|null);

        /** CachePlayer matchRuleId */
        matchRuleId?: (string|null);

        /** CachePlayer matchingTime */
        matchingTime?: (number|Long|null);

        /** CachePlayer frontId */
        frontId?: (string|null);

        /** CachePlayer guid */
        guid?: (string|null);

        /** CachePlayer loadingRoomId */
        loadingRoomId?: (string|null);
    }

    /** Represents a CachePlayer. */
    class CachePlayer implements ICachePlayer {

        /**
         * Constructs a new CachePlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.ICachePlayer);

        /** CachePlayer uid. */
        public uid: (number|Long);

        /** CachePlayer roomId. */
        public roomId: string;

        /** CachePlayer serverId. */
        public serverId: string;

        /** CachePlayer matchRuleId. */
        public matchRuleId: string;

        /** CachePlayer matchingTime. */
        public matchingTime: (number|Long);

        /** CachePlayer frontId. */
        public frontId: string;

        /** CachePlayer guid. */
        public guid: string;

        /** CachePlayer loadingRoomId. */
        public loadingRoomId: string;

        /**
         * Creates a new CachePlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CachePlayer instance
         */
        public static create(properties?: room.ICachePlayer): room.CachePlayer;

        /**
         * Encodes the specified CachePlayer message. Does not implicitly {@link room.CachePlayer.verify|verify} messages.
         * @param message CachePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.ICachePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CachePlayer message, length delimited. Does not implicitly {@link room.CachePlayer.verify|verify} messages.
         * @param message CachePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.ICachePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CachePlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CachePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.CachePlayer;

        /**
         * Decodes a CachePlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CachePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.CachePlayer;

        /**
         * Verifies a CachePlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CachePlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CachePlayer
         */
        public static fromObject(object: { [k: string]: any }): room.CachePlayer;

        /**
         * Creates a plain object from a CachePlayer message. Also converts values to other types if specified.
         * @param message CachePlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.CachePlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CachePlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
