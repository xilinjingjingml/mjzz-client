/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.room = (function() {

    /**
     * Namespace room.
     * @exports room
     * @namespace
     */
    var room = {};

    room.Room = (function() {

        /**
         * Constructs a new Room service.
         * @memberof room
         * @classdesc Represents a Room
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Room(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Room.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Room;

        /**
         * Creates new Room service using the specified rpc implementation.
         * @function create
         * @memberof room.Room
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Room} RPC service. Useful where requests and/or responses are streamed.
         */
        Room.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link room.Room#startGame}.
         * @memberof room.Room
         * @typedef StartGameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.StartJoinRoomRsp} [response] StartJoinRoomRsp
         */

        /**
         * Calls StartGame.
         * @function startGame
         * @memberof room.Room
         * @instance
         * @param {room.IStartJoinRoomReq} request StartJoinRoomReq message or plain object
         * @param {room.Room.StartGameCallback} callback Node-style callback called with the error, if any, and StartJoinRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.startGame = function startGame(request, callback) {
            return this.rpcCall(startGame, $root.room.StartJoinRoomReq, $root.room.StartJoinRoomRsp, request, callback);
        }, "name", { value: "StartGame" });

        /**
         * Calls StartGame.
         * @function startGame
         * @memberof room.Room
         * @instance
         * @param {room.IStartJoinRoomReq} request StartJoinRoomReq message or plain object
         * @returns {Promise<room.StartJoinRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link room.Room#leaveGame}.
         * @memberof room.Room
         * @typedef LeaveGameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.CancelJoinRoomRsp} [response] CancelJoinRoomRsp
         */

        /**
         * Calls LeaveGame.
         * @function leaveGame
         * @memberof room.Room
         * @instance
         * @param {room.ICancelJoinRoomReq} request CancelJoinRoomReq message or plain object
         * @param {room.Room.LeaveGameCallback} callback Node-style callback called with the error, if any, and CancelJoinRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.leaveGame = function leaveGame(request, callback) {
            return this.rpcCall(leaveGame, $root.room.CancelJoinRoomReq, $root.room.CancelJoinRoomRsp, request, callback);
        }, "name", { value: "LeaveGame" });

        /**
         * Calls LeaveGame.
         * @function leaveGame
         * @memberof room.Room
         * @instance
         * @param {room.ICancelJoinRoomReq} request CancelJoinRoomReq message or plain object
         * @returns {Promise<room.CancelJoinRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link room.Room#getRoomInfo}.
         * @memberof room.Room
         * @typedef GetRoomInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.GetRoomInfoRsp} [response] GetRoomInfoRsp
         */

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof room.Room
         * @instance
         * @param {room.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @param {room.Room.GetRoomInfoCallback} callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.getRoomInfo = function getRoomInfo(request, callback) {
            return this.rpcCall(getRoomInfo, $root.room.GetRoomInfoReq, $root.room.GetRoomInfoRsp, request, callback);
        }, "name", { value: "GetRoomInfo" });

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof room.Room
         * @instance
         * @param {room.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @returns {Promise<room.GetRoomInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link room.Room#getCurRoomInfo}.
         * @memberof room.Room
         * @typedef GetCurRoomInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.GetCurRoomInfoRsp} [response] GetCurRoomInfoRsp
         */

        /**
         * Calls GetCurRoomInfo.
         * @function getCurRoomInfo
         * @memberof room.Room
         * @instance
         * @param {room.IGetCurRoomInfoReq} request GetCurRoomInfoReq message or plain object
         * @param {room.Room.GetCurRoomInfoCallback} callback Node-style callback called with the error, if any, and GetCurRoomInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.getCurRoomInfo = function getCurRoomInfo(request, callback) {
            return this.rpcCall(getCurRoomInfo, $root.room.GetCurRoomInfoReq, $root.room.GetCurRoomInfoRsp, request, callback);
        }, "name", { value: "GetCurRoomInfo" });

        /**
         * Calls GetCurRoomInfo.
         * @function getCurRoomInfo
         * @memberof room.Room
         * @instance
         * @param {room.IGetCurRoomInfoReq} request GetCurRoomInfoReq message or plain object
         * @returns {Promise<room.GetCurRoomInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link room.Room#getRoomList}.
         * @memberof room.Room
         * @typedef GetRoomListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.RoomListRsp} [response] RoomListRsp
         */

        /**
         * Calls GetRoomList.
         * @function getRoomList
         * @memberof room.Room
         * @instance
         * @param {room.IRoomListReq} request RoomListReq message or plain object
         * @param {room.Room.GetRoomListCallback} callback Node-style callback called with the error, if any, and RoomListRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.getRoomList = function getRoomList(request, callback) {
            return this.rpcCall(getRoomList, $root.room.RoomListReq, $root.room.RoomListRsp, request, callback);
        }, "name", { value: "GetRoomList" });

        /**
         * Calls GetRoomList.
         * @function getRoomList
         * @memberof room.Room
         * @instance
         * @param {room.IRoomListReq} request RoomListReq message or plain object
         * @returns {Promise<room.RoomListRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link room.Room#enterRoomConfirm}.
         * @memberof room.Room
         * @typedef EnterRoomConfirmCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {room.EnterRoomConfirmRsp} [response] EnterRoomConfirmRsp
         */

        /**
         * Calls EnterRoomConfirm.
         * @function enterRoomConfirm
         * @memberof room.Room
         * @instance
         * @param {room.IEnterRoomConfirmReq} request EnterRoomConfirmReq message or plain object
         * @param {room.Room.EnterRoomConfirmCallback} callback Node-style callback called with the error, if any, and EnterRoomConfirmRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Room.prototype.enterRoomConfirm = function enterRoomConfirm(request, callback) {
            return this.rpcCall(enterRoomConfirm, $root.room.EnterRoomConfirmReq, $root.room.EnterRoomConfirmRsp, request, callback);
        }, "name", { value: "EnterRoomConfirm" });

        /**
         * Calls EnterRoomConfirm.
         * @function enterRoomConfirm
         * @memberof room.Room
         * @instance
         * @param {room.IEnterRoomConfirmReq} request EnterRoomConfirmReq message or plain object
         * @returns {Promise<room.EnterRoomConfirmRsp>} Promise
         * @variation 2
         */

        return Room;
    })();

    room.GameData = (function() {

        /**
         * Properties of a GameData.
         * @memberof room
         * @interface IGameData
         * @property {string|null} [roomId] GameData roomId
         * @property {string|null} [ruleId] GameData ruleId
         * @property {string|null} [serverId] GameData serverId
         * @property {string|null} [gameId] GameData gameId
         */

        /**
         * Constructs a new GameData.
         * @memberof room
         * @classdesc Represents a GameData.
         * @implements IGameData
         * @constructor
         * @param {room.IGameData=} [properties] Properties to set
         */
        function GameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameData roomId.
         * @member {string} roomId
         * @memberof room.GameData
         * @instance
         */
        GameData.prototype.roomId = "";

        /**
         * GameData ruleId.
         * @member {string} ruleId
         * @memberof room.GameData
         * @instance
         */
        GameData.prototype.ruleId = "";

        /**
         * GameData serverId.
         * @member {string} serverId
         * @memberof room.GameData
         * @instance
         */
        GameData.prototype.serverId = "";

        /**
         * GameData gameId.
         * @member {string} gameId
         * @memberof room.GameData
         * @instance
         */
        GameData.prototype.gameId = "";

        /**
         * Creates a new GameData instance using the specified properties.
         * @function create
         * @memberof room.GameData
         * @static
         * @param {room.IGameData=} [properties] Properties to set
         * @returns {room.GameData} GameData instance
         */
        GameData.create = function create(properties) {
            return new GameData(properties);
        };

        /**
         * Encodes the specified GameData message. Does not implicitly {@link room.GameData.verify|verify} messages.
         * @function encode
         * @memberof room.GameData
         * @static
         * @param {room.IGameData} message GameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link room.GameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.GameData
         * @static
         * @param {room.IGameData} message GameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @function decode
         * @memberof room.GameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.GameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.serverId = reader.string();
                    break;
                case 4:
                    message.gameId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.GameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameData message.
         * @function verify
         * @memberof room.GameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            return null;
        };

        /**
         * Creates a GameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.GameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.GameData} GameData
         */
        GameData.fromObject = function fromObject(object) {
            if (object instanceof $root.room.GameData)
                return object;
            var message = new $root.room.GameData();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.GameData
         * @static
         * @param {room.GameData} message GameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.ruleId = "";
                object.serverId = "";
                object.gameId = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this GameData to JSON.
         * @function toJSON
         * @memberof room.GameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameData;
    })();

    room.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof room
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {string|null} [gameId] RoomInfo gameId
         * @property {string|null} [ruleId] RoomInfo ruleId
         * @property {string|null} [metaData] RoomInfo metaData
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof room
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {room.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomId.
         * @member {string} roomId
         * @memberof room.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof room.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo gameId.
         * @member {string} gameId
         * @memberof room.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = "";

        /**
         * RoomInfo ruleId.
         * @member {string} ruleId
         * @memberof room.RoomInfo
         * @instance
         */
        RoomInfo.prototype.ruleId = "";

        /**
         * RoomInfo metaData.
         * @member {string} metaData
         * @memberof room.RoomInfo
         * @instance
         */
        RoomInfo.prototype.metaData = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof room.RoomInfo
         * @static
         * @param {room.IRoomInfo=} [properties] Properties to set
         * @returns {room.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link room.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof room.RoomInfo
         * @static
         * @param {room.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ruleId);
            if (message.metaData != null && Object.hasOwnProperty.call(message, "metaData"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.metaData);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link room.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.RoomInfo
         * @static
         * @param {room.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    message.serverId = reader.string();
                    break;
                case 3:
                    message.gameId = reader.string();
                    break;
                case 4:
                    message.ruleId = reader.string();
                    break;
                case 10:
                    message.metaData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof room.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                if (!$util.isString(message.metaData))
                    return "metaData: string expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.room.RoomInfo)
                return object;
            var message = new $root.room.RoomInfo();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.metaData != null)
                message.metaData = String(object.metaData);
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.RoomInfo
         * @static
         * @param {room.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
                object.gameId = "";
                object.ruleId = "";
                object.metaData = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                object.metaData = message.metaData;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof room.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    room.StartJoinRoomReq = (function() {

        /**
         * Properties of a StartJoinRoomReq.
         * @memberof room
         * @interface IStartJoinRoomReq
         * @property {number|Long|null} [uid] StartJoinRoomReq uid
         * @property {string|null} [gameId] StartJoinRoomReq gameId
         * @property {string|null} [ruleId] StartJoinRoomReq ruleId
         * @property {Object.<string,string>|null} [params] StartJoinRoomReq params
         */

        /**
         * Constructs a new StartJoinRoomReq.
         * @memberof room
         * @classdesc Represents a StartJoinRoomReq.
         * @implements IStartJoinRoomReq
         * @constructor
         * @param {room.IStartJoinRoomReq=} [properties] Properties to set
         */
        function StartJoinRoomReq(properties) {
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomReq uid.
         * @member {number|Long} uid
         * @memberof room.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StartJoinRoomReq gameId.
         * @member {string} gameId
         * @memberof room.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.gameId = "";

        /**
         * StartJoinRoomReq ruleId.
         * @member {string} ruleId
         * @memberof room.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.ruleId = "";

        /**
         * StartJoinRoomReq params.
         * @member {Object.<string,string>} params
         * @memberof room.StartJoinRoomReq
         * @instance
         */
        StartJoinRoomReq.prototype.params = $util.emptyObject;

        /**
         * Creates a new StartJoinRoomReq instance using the specified properties.
         * @function create
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {room.IStartJoinRoomReq=} [properties] Properties to set
         * @returns {room.StartJoinRoomReq} StartJoinRoomReq instance
         */
        StartJoinRoomReq.create = function create(properties) {
            return new StartJoinRoomReq(properties);
        };

        /**
         * Encodes the specified StartJoinRoomReq message. Does not implicitly {@link room.StartJoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {room.IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ruleId);
            if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomReq message, length delimited. Does not implicitly {@link room.StartJoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {room.IStartJoinRoomReq} message StartJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.StartJoinRoomReq} StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.StartJoinRoomReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.gameId = reader.string();
                    break;
                case 3:
                    message.ruleId = reader.string();
                    break;
                case 4:
                    if (message.params === $util.emptyObject)
                        message.params = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.params[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.StartJoinRoomReq} StartJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomReq message.
         * @function verify
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!$util.isObject(message.params))
                    return "params: object expected";
                var key = Object.keys(message.params);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.params[key[i]]))
                        return "params: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a StartJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.StartJoinRoomReq} StartJoinRoomReq
         */
        StartJoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.StartJoinRoomReq)
                return object;
            var message = new $root.room.StartJoinRoomReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".room.StartJoinRoomReq.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.StartJoinRoomReq
         * @static
         * @param {room.StartJoinRoomReq} message StartJoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.params = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.gameId = "";
                object.ruleId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            var keys2;
            if (message.params && (keys2 = Object.keys(message.params)).length) {
                object.params = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.params[keys2[j]] = message.params[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this StartJoinRoomReq to JSON.
         * @function toJSON
         * @memberof room.StartJoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomReq;
    })();

    room.StartJoinRoomRsp = (function() {

        /**
         * Properties of a StartJoinRoomRsp.
         * @memberof room
         * @interface IStartJoinRoomRsp
         * @property {number|null} [errCode] StartJoinRoomRsp errCode
         * @property {string|null} [errMsg] StartJoinRoomRsp errMsg
         * @property {room.IGameData|null} [gameData] StartJoinRoomRsp gameData
         */

        /**
         * Constructs a new StartJoinRoomRsp.
         * @memberof room
         * @classdesc Represents a StartJoinRoomRsp.
         * @implements IStartJoinRoomRsp
         * @constructor
         * @param {room.IStartJoinRoomRsp=} [properties] Properties to set
         */
        function StartJoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomRsp errCode.
         * @member {number} errCode
         * @memberof room.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.errCode = 0;

        /**
         * StartJoinRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof room.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.errMsg = "";

        /**
         * StartJoinRoomRsp gameData.
         * @member {room.IGameData|null|undefined} gameData
         * @memberof room.StartJoinRoomRsp
         * @instance
         */
        StartJoinRoomRsp.prototype.gameData = null;

        /**
         * Creates a new StartJoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {room.IStartJoinRoomRsp=} [properties] Properties to set
         * @returns {room.StartJoinRoomRsp} StartJoinRoomRsp instance
         */
        StartJoinRoomRsp.create = function create(properties) {
            return new StartJoinRoomRsp(properties);
        };

        /**
         * Encodes the specified StartJoinRoomRsp message. Does not implicitly {@link room.StartJoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {room.IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.gameData != null && Object.hasOwnProperty.call(message, "gameData"))
                $root.room.GameData.encode(message.gameData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomRsp message, length delimited. Does not implicitly {@link room.StartJoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {room.IStartJoinRoomRsp} message StartJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.StartJoinRoomRsp} StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.StartJoinRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                case 3:
                    message.gameData = $root.room.GameData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.StartJoinRoomRsp} StartJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomRsp message.
         * @function verify
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.gameData != null && message.hasOwnProperty("gameData")) {
                var error = $root.room.GameData.verify(message.gameData);
                if (error)
                    return "gameData." + error;
            }
            return null;
        };

        /**
         * Creates a StartJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.StartJoinRoomRsp} StartJoinRoomRsp
         */
        StartJoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.StartJoinRoomRsp)
                return object;
            var message = new $root.room.StartJoinRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.gameData != null) {
                if (typeof object.gameData !== "object")
                    throw TypeError(".room.StartJoinRoomRsp.gameData: object expected");
                message.gameData = $root.room.GameData.fromObject(object.gameData);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.StartJoinRoomRsp
         * @static
         * @param {room.StartJoinRoomRsp} message StartJoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.gameData = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.gameData != null && message.hasOwnProperty("gameData"))
                object.gameData = $root.room.GameData.toObject(message.gameData, options);
            return object;
        };

        /**
         * Converts this StartJoinRoomRsp to JSON.
         * @function toJSON
         * @memberof room.StartJoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomRsp;
    })();

    room.StartJoinRoomNot = (function() {

        /**
         * Properties of a StartJoinRoomNot.
         * @memberof room
         * @interface IStartJoinRoomNot
         * @property {string|null} [gameId] StartJoinRoomNot gameId
         * @property {string|null} [ruleId] StartJoinRoomNot ruleId
         */

        /**
         * Constructs a new StartJoinRoomNot.
         * @memberof room
         * @classdesc Represents a StartJoinRoomNot.
         * @implements IStartJoinRoomNot
         * @constructor
         * @param {room.IStartJoinRoomNot=} [properties] Properties to set
         */
        function StartJoinRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartJoinRoomNot gameId.
         * @member {string} gameId
         * @memberof room.StartJoinRoomNot
         * @instance
         */
        StartJoinRoomNot.prototype.gameId = "";

        /**
         * StartJoinRoomNot ruleId.
         * @member {string} ruleId
         * @memberof room.StartJoinRoomNot
         * @instance
         */
        StartJoinRoomNot.prototype.ruleId = "";

        /**
         * Creates a new StartJoinRoomNot instance using the specified properties.
         * @function create
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {room.IStartJoinRoomNot=} [properties] Properties to set
         * @returns {room.StartJoinRoomNot} StartJoinRoomNot instance
         */
        StartJoinRoomNot.create = function create(properties) {
            return new StartJoinRoomNot(properties);
        };

        /**
         * Encodes the specified StartJoinRoomNot message. Does not implicitly {@link room.StartJoinRoomNot.verify|verify} messages.
         * @function encode
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {room.IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            return writer;
        };

        /**
         * Encodes the specified StartJoinRoomNot message, length delimited. Does not implicitly {@link room.StartJoinRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {room.IStartJoinRoomNot} message StartJoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartJoinRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.StartJoinRoomNot} StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.StartJoinRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartJoinRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.StartJoinRoomNot} StartJoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartJoinRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartJoinRoomNot message.
         * @function verify
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartJoinRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            return null;
        };

        /**
         * Creates a StartJoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.StartJoinRoomNot} StartJoinRoomNot
         */
        StartJoinRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.room.StartJoinRoomNot)
                return object;
            var message = new $root.room.StartJoinRoomNot();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            return message;
        };

        /**
         * Creates a plain object from a StartJoinRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.StartJoinRoomNot
         * @static
         * @param {room.StartJoinRoomNot} message StartJoinRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartJoinRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = "";
                object.ruleId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            return object;
        };

        /**
         * Converts this StartJoinRoomNot to JSON.
         * @function toJSON
         * @memberof room.StartJoinRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartJoinRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartJoinRoomNot;
    })();

    room.EnterRoomConfirmReq = (function() {

        /**
         * Properties of an EnterRoomConfirmReq.
         * @memberof room
         * @interface IEnterRoomConfirmReq
         * @property {boolean|null} [confirmed] EnterRoomConfirmReq confirmed
         */

        /**
         * Constructs a new EnterRoomConfirmReq.
         * @memberof room
         * @classdesc Represents an EnterRoomConfirmReq.
         * @implements IEnterRoomConfirmReq
         * @constructor
         * @param {room.IEnterRoomConfirmReq=} [properties] Properties to set
         */
        function EnterRoomConfirmReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomConfirmReq confirmed.
         * @member {boolean} confirmed
         * @memberof room.EnterRoomConfirmReq
         * @instance
         */
        EnterRoomConfirmReq.prototype.confirmed = false;

        /**
         * Creates a new EnterRoomConfirmReq instance using the specified properties.
         * @function create
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {room.IEnterRoomConfirmReq=} [properties] Properties to set
         * @returns {room.EnterRoomConfirmReq} EnterRoomConfirmReq instance
         */
        EnterRoomConfirmReq.create = function create(properties) {
            return new EnterRoomConfirmReq(properties);
        };

        /**
         * Encodes the specified EnterRoomConfirmReq message. Does not implicitly {@link room.EnterRoomConfirmReq.verify|verify} messages.
         * @function encode
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {room.IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.confirmed != null && Object.hasOwnProperty.call(message, "confirmed"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.confirmed);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomConfirmReq message, length delimited. Does not implicitly {@link room.EnterRoomConfirmReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {room.IEnterRoomConfirmReq} message EnterRoomConfirmReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.EnterRoomConfirmReq} EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.EnterRoomConfirmReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.confirmed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomConfirmReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.EnterRoomConfirmReq} EnterRoomConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomConfirmReq message.
         * @function verify
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomConfirmReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.confirmed != null && message.hasOwnProperty("confirmed"))
                if (typeof message.confirmed !== "boolean")
                    return "confirmed: boolean expected";
            return null;
        };

        /**
         * Creates an EnterRoomConfirmReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.EnterRoomConfirmReq} EnterRoomConfirmReq
         */
        EnterRoomConfirmReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.EnterRoomConfirmReq)
                return object;
            var message = new $root.room.EnterRoomConfirmReq();
            if (object.confirmed != null)
                message.confirmed = Boolean(object.confirmed);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomConfirmReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.EnterRoomConfirmReq
         * @static
         * @param {room.EnterRoomConfirmReq} message EnterRoomConfirmReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomConfirmReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.confirmed = false;
            if (message.confirmed != null && message.hasOwnProperty("confirmed"))
                object.confirmed = message.confirmed;
            return object;
        };

        /**
         * Converts this EnterRoomConfirmReq to JSON.
         * @function toJSON
         * @memberof room.EnterRoomConfirmReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomConfirmReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomConfirmReq;
    })();

    room.EnterRoomConfirmRsp = (function() {

        /**
         * Properties of an EnterRoomConfirmRsp.
         * @memberof room
         * @interface IEnterRoomConfirmRsp
         * @property {number|null} [errCode] EnterRoomConfirmRsp errCode
         * @property {string|null} [errMsg] EnterRoomConfirmRsp errMsg
         * @property {room.IRoomInfo|null} [room] EnterRoomConfirmRsp room
         */

        /**
         * Constructs a new EnterRoomConfirmRsp.
         * @memberof room
         * @classdesc Represents an EnterRoomConfirmRsp.
         * @implements IEnterRoomConfirmRsp
         * @constructor
         * @param {room.IEnterRoomConfirmRsp=} [properties] Properties to set
         */
        function EnterRoomConfirmRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomConfirmRsp errCode.
         * @member {number} errCode
         * @memberof room.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.errCode = 0;

        /**
         * EnterRoomConfirmRsp errMsg.
         * @member {string} errMsg
         * @memberof room.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.errMsg = "";

        /**
         * EnterRoomConfirmRsp room.
         * @member {room.IRoomInfo|null|undefined} room
         * @memberof room.EnterRoomConfirmRsp
         * @instance
         */
        EnterRoomConfirmRsp.prototype.room = null;

        /**
         * Creates a new EnterRoomConfirmRsp instance using the specified properties.
         * @function create
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {room.IEnterRoomConfirmRsp=} [properties] Properties to set
         * @returns {room.EnterRoomConfirmRsp} EnterRoomConfirmRsp instance
         */
        EnterRoomConfirmRsp.create = function create(properties) {
            return new EnterRoomConfirmRsp(properties);
        };

        /**
         * Encodes the specified EnterRoomConfirmRsp message. Does not implicitly {@link room.EnterRoomConfirmRsp.verify|verify} messages.
         * @function encode
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {room.IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.room.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomConfirmRsp message, length delimited. Does not implicitly {@link room.EnterRoomConfirmRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {room.IEnterRoomConfirmRsp} message EnterRoomConfirmRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomConfirmRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.EnterRoomConfirmRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                case 3:
                    message.room = $root.room.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomConfirmRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomConfirmRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomConfirmRsp message.
         * @function verify
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomConfirmRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.room.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomConfirmRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.EnterRoomConfirmRsp} EnterRoomConfirmRsp
         */
        EnterRoomConfirmRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.EnterRoomConfirmRsp)
                return object;
            var message = new $root.room.EnterRoomConfirmRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".room.EnterRoomConfirmRsp.room: object expected");
                message.room = $root.room.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomConfirmRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.EnterRoomConfirmRsp
         * @static
         * @param {room.EnterRoomConfirmRsp} message EnterRoomConfirmRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomConfirmRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.room.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this EnterRoomConfirmRsp to JSON.
         * @function toJSON
         * @memberof room.EnterRoomConfirmRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomConfirmRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomConfirmRsp;
    })();

    room.CancelJoinRoomReq = (function() {

        /**
         * Properties of a CancelJoinRoomReq.
         * @memberof room
         * @interface ICancelJoinRoomReq
         * @property {number|Long|null} [uid] CancelJoinRoomReq uid
         */

        /**
         * Constructs a new CancelJoinRoomReq.
         * @memberof room
         * @classdesc Represents a CancelJoinRoomReq.
         * @implements ICancelJoinRoomReq
         * @constructor
         * @param {room.ICancelJoinRoomReq=} [properties] Properties to set
         */
        function CancelJoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelJoinRoomReq uid.
         * @member {number|Long} uid
         * @memberof room.CancelJoinRoomReq
         * @instance
         */
        CancelJoinRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CancelJoinRoomReq instance using the specified properties.
         * @function create
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {room.ICancelJoinRoomReq=} [properties] Properties to set
         * @returns {room.CancelJoinRoomReq} CancelJoinRoomReq instance
         */
        CancelJoinRoomReq.create = function create(properties) {
            return new CancelJoinRoomReq(properties);
        };

        /**
         * Encodes the specified CancelJoinRoomReq message. Does not implicitly {@link room.CancelJoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {room.ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified CancelJoinRoomReq message, length delimited. Does not implicitly {@link room.CancelJoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {room.ICancelJoinRoomReq} message CancelJoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.CancelJoinRoomReq} CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.CancelJoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelJoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.CancelJoinRoomReq} CancelJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelJoinRoomReq message.
         * @function verify
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelJoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a CancelJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.CancelJoinRoomReq} CancelJoinRoomReq
         */
        CancelJoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.CancelJoinRoomReq)
                return object;
            var message = new $root.room.CancelJoinRoomReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CancelJoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.CancelJoinRoomReq
         * @static
         * @param {room.CancelJoinRoomReq} message CancelJoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelJoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this CancelJoinRoomReq to JSON.
         * @function toJSON
         * @memberof room.CancelJoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelJoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelJoinRoomReq;
    })();

    room.CancelJoinRoomRsp = (function() {

        /**
         * Properties of a CancelJoinRoomRsp.
         * @memberof room
         * @interface ICancelJoinRoomRsp
         * @property {number|null} [errCode] CancelJoinRoomRsp errCode
         * @property {string|null} [errMsg] CancelJoinRoomRsp errMsg
         */

        /**
         * Constructs a new CancelJoinRoomRsp.
         * @memberof room
         * @classdesc Represents a CancelJoinRoomRsp.
         * @implements ICancelJoinRoomRsp
         * @constructor
         * @param {room.ICancelJoinRoomRsp=} [properties] Properties to set
         */
        function CancelJoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelJoinRoomRsp errCode.
         * @member {number} errCode
         * @memberof room.CancelJoinRoomRsp
         * @instance
         */
        CancelJoinRoomRsp.prototype.errCode = 0;

        /**
         * CancelJoinRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof room.CancelJoinRoomRsp
         * @instance
         */
        CancelJoinRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new CancelJoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {room.ICancelJoinRoomRsp=} [properties] Properties to set
         * @returns {room.CancelJoinRoomRsp} CancelJoinRoomRsp instance
         */
        CancelJoinRoomRsp.create = function create(properties) {
            return new CancelJoinRoomRsp(properties);
        };

        /**
         * Encodes the specified CancelJoinRoomRsp message. Does not implicitly {@link room.CancelJoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {room.ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified CancelJoinRoomRsp message, length delimited. Does not implicitly {@link room.CancelJoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {room.ICancelJoinRoomRsp} message CancelJoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelJoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.CancelJoinRoomRsp} CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.CancelJoinRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelJoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.CancelJoinRoomRsp} CancelJoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelJoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelJoinRoomRsp message.
         * @function verify
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelJoinRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            return null;
        };

        /**
         * Creates a CancelJoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.CancelJoinRoomRsp} CancelJoinRoomRsp
         */
        CancelJoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.CancelJoinRoomRsp)
                return object;
            var message = new $root.room.CancelJoinRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a CancelJoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.CancelJoinRoomRsp
         * @static
         * @param {room.CancelJoinRoomRsp} message CancelJoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelJoinRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            return object;
        };

        /**
         * Converts this CancelJoinRoomRsp to JSON.
         * @function toJSON
         * @memberof room.CancelJoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelJoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelJoinRoomRsp;
    })();

    room.GetRoomInfoReq = (function() {

        /**
         * Properties of a GetRoomInfoReq.
         * @memberof room
         * @interface IGetRoomInfoReq
         * @property {string|null} [roomId] GetRoomInfoReq roomId
         */

        /**
         * Constructs a new GetRoomInfoReq.
         * @memberof room
         * @classdesc Represents a GetRoomInfoReq.
         * @implements IGetRoomInfoReq
         * @constructor
         * @param {room.IGetRoomInfoReq=} [properties] Properties to set
         */
        function GetRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoReq roomId.
         * @member {string} roomId
         * @memberof room.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.roomId = "";

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {room.IGetRoomInfoReq=} [properties] Properties to set
         * @returns {room.GetRoomInfoReq} GetRoomInfoReq instance
         */
        GetRoomInfoReq.create = function create(properties) {
            return new GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link room.GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {room.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link room.GetRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {room.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.GetRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoReq message.
         * @function verify
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.GetRoomInfoReq} GetRoomInfoReq
         */
        GetRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.GetRoomInfoReq)
                return object;
            var message = new $root.room.GetRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.GetRoomInfoReq
         * @static
         * @param {room.GetRoomInfoReq} message GetRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @function toJSON
         * @memberof room.GetRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoReq;
    })();

    room.GetRoomInfoRsp = (function() {

        /**
         * Properties of a GetRoomInfoRsp.
         * @memberof room
         * @interface IGetRoomInfoRsp
         * @property {number|null} [errCode] GetRoomInfoRsp errCode
         * @property {string|null} [errMsg] GetRoomInfoRsp errMsg
         * @property {room.IRoomInfo|null} [room] GetRoomInfoRsp room
         */

        /**
         * Constructs a new GetRoomInfoRsp.
         * @memberof room
         * @classdesc Represents a GetRoomInfoRsp.
         * @implements IGetRoomInfoRsp
         * @constructor
         * @param {room.IGetRoomInfoRsp=} [properties] Properties to set
         */
        function GetRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoRsp errCode.
         * @member {number} errCode
         * @memberof room.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.errCode = 0;

        /**
         * GetRoomInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof room.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.errMsg = "";

        /**
         * GetRoomInfoRsp room.
         * @member {room.IRoomInfo|null|undefined} room
         * @memberof room.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.room = null;

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {room.IGetRoomInfoRsp=} [properties] Properties to set
         * @returns {room.GetRoomInfoRsp} GetRoomInfoRsp instance
         */
        GetRoomInfoRsp.create = function create(properties) {
            return new GetRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link room.GetRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {room.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.room.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link room.GetRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {room.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.GetRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                case 3:
                    message.room = $root.room.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoRsp message.
         * @function verify
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.room.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.GetRoomInfoRsp} GetRoomInfoRsp
         */
        GetRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.GetRoomInfoRsp)
                return object;
            var message = new $root.room.GetRoomInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".room.GetRoomInfoRsp.room: object expected");
                message.room = $root.room.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.GetRoomInfoRsp
         * @static
         * @param {room.GetRoomInfoRsp} message GetRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.room.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof room.GetRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoRsp;
    })();

    room.GetCurRoomInfoReq = (function() {

        /**
         * Properties of a GetCurRoomInfoReq.
         * @memberof room
         * @interface IGetCurRoomInfoReq
         * @property {number|Long|null} [uid] GetCurRoomInfoReq uid
         */

        /**
         * Constructs a new GetCurRoomInfoReq.
         * @memberof room
         * @classdesc Represents a GetCurRoomInfoReq.
         * @implements IGetCurRoomInfoReq
         * @constructor
         * @param {room.IGetCurRoomInfoReq=} [properties] Properties to set
         */
        function GetCurRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCurRoomInfoReq uid.
         * @member {number|Long} uid
         * @memberof room.GetCurRoomInfoReq
         * @instance
         */
        GetCurRoomInfoReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetCurRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {room.IGetCurRoomInfoReq=} [properties] Properties to set
         * @returns {room.GetCurRoomInfoReq} GetCurRoomInfoReq instance
         */
        GetCurRoomInfoReq.create = function create(properties) {
            return new GetCurRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetCurRoomInfoReq message. Does not implicitly {@link room.GetCurRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {room.IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetCurRoomInfoReq message, length delimited. Does not implicitly {@link room.GetCurRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {room.IGetCurRoomInfoReq} message GetCurRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.GetCurRoomInfoReq} GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.GetCurRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCurRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.GetCurRoomInfoReq} GetCurRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCurRoomInfoReq message.
         * @function verify
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCurRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetCurRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.GetCurRoomInfoReq} GetCurRoomInfoReq
         */
        GetCurRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.GetCurRoomInfoReq)
                return object;
            var message = new $root.room.GetCurRoomInfoReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetCurRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.GetCurRoomInfoReq
         * @static
         * @param {room.GetCurRoomInfoReq} message GetCurRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCurRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this GetCurRoomInfoReq to JSON.
         * @function toJSON
         * @memberof room.GetCurRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCurRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCurRoomInfoReq;
    })();

    room.GetCurRoomInfoRsp = (function() {

        /**
         * Properties of a GetCurRoomInfoRsp.
         * @memberof room
         * @interface IGetCurRoomInfoRsp
         * @property {number|null} [errCode] GetCurRoomInfoRsp errCode
         * @property {string|null} [errMsg] GetCurRoomInfoRsp errMsg
         * @property {room.IRoomInfo|null} [room] GetCurRoomInfoRsp room
         */

        /**
         * Constructs a new GetCurRoomInfoRsp.
         * @memberof room
         * @classdesc Represents a GetCurRoomInfoRsp.
         * @implements IGetCurRoomInfoRsp
         * @constructor
         * @param {room.IGetCurRoomInfoRsp=} [properties] Properties to set
         */
        function GetCurRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCurRoomInfoRsp errCode.
         * @member {number} errCode
         * @memberof room.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.errCode = 0;

        /**
         * GetCurRoomInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof room.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.errMsg = "";

        /**
         * GetCurRoomInfoRsp room.
         * @member {room.IRoomInfo|null|undefined} room
         * @memberof room.GetCurRoomInfoRsp
         * @instance
         */
        GetCurRoomInfoRsp.prototype.room = null;

        /**
         * Creates a new GetCurRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {room.IGetCurRoomInfoRsp=} [properties] Properties to set
         * @returns {room.GetCurRoomInfoRsp} GetCurRoomInfoRsp instance
         */
        GetCurRoomInfoRsp.create = function create(properties) {
            return new GetCurRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetCurRoomInfoRsp message. Does not implicitly {@link room.GetCurRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {room.IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.room.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetCurRoomInfoRsp message, length delimited. Does not implicitly {@link room.GetCurRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {room.IGetCurRoomInfoRsp} message GetCurRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.GetCurRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                case 3:
                    message.room = $root.room.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCurRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCurRoomInfoRsp message.
         * @function verify
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCurRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.room.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a GetCurRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.GetCurRoomInfoRsp} GetCurRoomInfoRsp
         */
        GetCurRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.GetCurRoomInfoRsp)
                return object;
            var message = new $root.room.GetCurRoomInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".room.GetCurRoomInfoRsp.room: object expected");
                message.room = $root.room.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCurRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.GetCurRoomInfoRsp
         * @static
         * @param {room.GetCurRoomInfoRsp} message GetCurRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCurRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.room = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.room.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this GetCurRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof room.GetCurRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCurRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCurRoomInfoRsp;
    })();

    room.RoomListReq = (function() {

        /**
         * Properties of a RoomListReq.
         * @memberof room
         * @interface IRoomListReq
         */

        /**
         * Constructs a new RoomListReq.
         * @memberof room
         * @classdesc Represents a RoomListReq.
         * @implements IRoomListReq
         * @constructor
         * @param {room.IRoomListReq=} [properties] Properties to set
         */
        function RoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @function create
         * @memberof room.RoomListReq
         * @static
         * @param {room.IRoomListReq=} [properties] Properties to set
         * @returns {room.RoomListReq} RoomListReq instance
         */
        RoomListReq.create = function create(properties) {
            return new RoomListReq(properties);
        };

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link room.RoomListReq.verify|verify} messages.
         * @function encode
         * @memberof room.RoomListReq
         * @static
         * @param {room.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link room.RoomListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.RoomListReq
         * @static
         * @param {room.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.RoomListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListReq message.
         * @function verify
         * @memberof room.RoomListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.RoomListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.RoomListReq} RoomListReq
         */
        RoomListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.room.RoomListReq)
                return object;
            return new $root.room.RoomListReq();
        };

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.RoomListReq
         * @static
         * @param {room.RoomListReq} message RoomListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RoomListReq to JSON.
         * @function toJSON
         * @memberof room.RoomListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListReq;
    })();

    room.RoomListRsp = (function() {

        /**
         * Properties of a RoomListRsp.
         * @memberof room
         * @interface IRoomListRsp
         * @property {number|null} [errCode] RoomListRsp errCode
         * @property {string|null} [errMsg] RoomListRsp errMsg
         * @property {Array.<room.IRoomInfo>|null} [roomList] RoomListRsp roomList
         */

        /**
         * Constructs a new RoomListRsp.
         * @memberof room
         * @classdesc Represents a RoomListRsp.
         * @implements IRoomListRsp
         * @constructor
         * @param {room.IRoomListRsp=} [properties] Properties to set
         */
        function RoomListRsp(properties) {
            this.roomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomListRsp errCode.
         * @member {number} errCode
         * @memberof room.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.errCode = 0;

        /**
         * RoomListRsp errMsg.
         * @member {string} errMsg
         * @memberof room.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.errMsg = "";

        /**
         * RoomListRsp roomList.
         * @member {Array.<room.IRoomInfo>} roomList
         * @memberof room.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.roomList = $util.emptyArray;

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @function create
         * @memberof room.RoomListRsp
         * @static
         * @param {room.IRoomListRsp=} [properties] Properties to set
         * @returns {room.RoomListRsp} RoomListRsp instance
         */
        RoomListRsp.create = function create(properties) {
            return new RoomListRsp(properties);
        };

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link room.RoomListRsp.verify|verify} messages.
         * @function encode
         * @memberof room.RoomListRsp
         * @static
         * @param {room.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.room.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link room.RoomListRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.RoomListRsp
         * @static
         * @param {room.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @function decode
         * @memberof room.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.RoomListRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                case 2:
                    message.errMsg = reader.string();
                    break;
                case 3:
                    if (!(message.roomList && message.roomList.length))
                        message.roomList = [];
                    message.roomList.push($root.room.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListRsp message.
         * @function verify
         * @memberof room.RoomListRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.room.RoomInfo.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.RoomListRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.RoomListRsp} RoomListRsp
         */
        RoomListRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.room.RoomListRsp)
                return object;
            var message = new $root.room.RoomListRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.roomList) {
                if (!Array.isArray(object.roomList))
                    throw TypeError(".room.RoomListRsp.roomList: array expected");
                message.roomList = [];
                for (var i = 0; i < object.roomList.length; ++i) {
                    if (typeof object.roomList[i] !== "object")
                        throw TypeError(".room.RoomListRsp.roomList: object expected");
                    message.roomList[i] = $root.room.RoomInfo.fromObject(object.roomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.RoomListRsp
         * @static
         * @param {room.RoomListRsp} message RoomListRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomList = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.roomList && message.roomList.length) {
                object.roomList = [];
                for (var j = 0; j < message.roomList.length; ++j)
                    object.roomList[j] = $root.room.RoomInfo.toObject(message.roomList[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomListRsp to JSON.
         * @function toJSON
         * @memberof room.RoomListRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListRsp;
    })();

    room.CacheRoom = (function() {

        /**
         * Properties of a CacheRoom.
         * @memberof room
         * @interface ICacheRoom
         * @property {string|null} [roomId] CacheRoom roomId
         * @property {string|null} [ruleId] CacheRoom ruleId
         * @property {string|null} [gameId] CacheRoom gameId
         * @property {string|null} [serverId] CacheRoom serverId
         * @property {number|null} [maxPlayerNum] CacheRoom maxPlayerNum
         * @property {number|Long|null} [createTime] CacheRoom createTime
         * @property {Object.<string,number|Long>|null} [players] CacheRoom players
         * @property {Object.<string,number|Long>|null} [loadingPlayers] CacheRoom loadingPlayers
         */

        /**
         * Constructs a new CacheRoom.
         * @memberof room
         * @classdesc Represents a CacheRoom.
         * @implements ICacheRoom
         * @constructor
         * @param {room.ICacheRoom=} [properties] Properties to set
         */
        function CacheRoom(properties) {
            this.players = {};
            this.loadingPlayers = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CacheRoom roomId.
         * @member {string} roomId
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.roomId = "";

        /**
         * CacheRoom ruleId.
         * @member {string} ruleId
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.ruleId = "";

        /**
         * CacheRoom gameId.
         * @member {string} gameId
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.gameId = "";

        /**
         * CacheRoom serverId.
         * @member {string} serverId
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.serverId = "";

        /**
         * CacheRoom maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.maxPlayerNum = 0;

        /**
         * CacheRoom createTime.
         * @member {number|Long} createTime
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CacheRoom players.
         * @member {Object.<string,number|Long>} players
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.players = $util.emptyObject;

        /**
         * CacheRoom loadingPlayers.
         * @member {Object.<string,number|Long>} loadingPlayers
         * @memberof room.CacheRoom
         * @instance
         */
        CacheRoom.prototype.loadingPlayers = $util.emptyObject;

        /**
         * Creates a new CacheRoom instance using the specified properties.
         * @function create
         * @memberof room.CacheRoom
         * @static
         * @param {room.ICacheRoom=} [properties] Properties to set
         * @returns {room.CacheRoom} CacheRoom instance
         */
        CacheRoom.create = function create(properties) {
            return new CacheRoom(properties);
        };

        /**
         * Encodes the specified CacheRoom message. Does not implicitly {@link room.CacheRoom.verify|verify} messages.
         * @function encode
         * @memberof room.CacheRoom
         * @static
         * @param {room.ICacheRoom} message CacheRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverId);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxPlayerNum);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                for (var keys = Object.keys(message.players), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.players[keys[i]]).ldelim();
            if (message.loadingPlayers != null && Object.hasOwnProperty.call(message, "loadingPlayers"))
                for (var keys = Object.keys(message.loadingPlayers), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.loadingPlayers[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CacheRoom message, length delimited. Does not implicitly {@link room.CacheRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.CacheRoom
         * @static
         * @param {room.ICacheRoom} message CacheRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CacheRoom message from the specified reader or buffer.
         * @function decode
         * @memberof room.CacheRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.CacheRoom} CacheRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.CacheRoom(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.gameId = reader.string();
                    break;
                case 4:
                    message.serverId = reader.string();
                    break;
                case 5:
                    message.maxPlayerNum = reader.int32();
                    break;
                case 6:
                    message.createTime = reader.int64();
                    break;
                case 10:
                    if (message.players === $util.emptyObject)
                        message.players = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.players[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                case 11:
                    if (message.loadingPlayers === $util.emptyObject)
                        message.loadingPlayers = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.loadingPlayers[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CacheRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.CacheRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.CacheRoom} CacheRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CacheRoom message.
         * @function verify
         * @memberof room.CacheRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CacheRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                var key = Object.keys(message.players);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "players: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.players[key[i]]) && !(message.players[key[i]] && $util.isInteger(message.players[key[i]].low) && $util.isInteger(message.players[key[i]].high)))
                        return "players: integer|Long{k:int64} expected";
                }
            }
            if (message.loadingPlayers != null && message.hasOwnProperty("loadingPlayers")) {
                if (!$util.isObject(message.loadingPlayers))
                    return "loadingPlayers: object expected";
                var key = Object.keys(message.loadingPlayers);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "loadingPlayers: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.loadingPlayers[key[i]]) && !(message.loadingPlayers[key[i]] && $util.isInteger(message.loadingPlayers[key[i]].low) && $util.isInteger(message.loadingPlayers[key[i]].high)))
                        return "loadingPlayers: integer|Long{k:int64} expected";
                }
            }
            return null;
        };

        /**
         * Creates a CacheRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.CacheRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.CacheRoom} CacheRoom
         */
        CacheRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.room.CacheRoom)
                return object;
            var message = new $root.room.CacheRoom();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.maxPlayerNum != null)
                message.maxPlayerNum = object.maxPlayerNum | 0;
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".room.CacheRoom.players: object expected");
                message.players = {};
                for (var keys = Object.keys(object.players), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.players[keys[i]] = $util.Long.fromValue(object.players[keys[i]])).unsigned = false;
                    else if (typeof object.players[keys[i]] === "string")
                        message.players[keys[i]] = parseInt(object.players[keys[i]], 10);
                    else if (typeof object.players[keys[i]] === "number")
                        message.players[keys[i]] = object.players[keys[i]];
                    else if (typeof object.players[keys[i]] === "object")
                        message.players[keys[i]] = new $util.LongBits(object.players[keys[i]].low >>> 0, object.players[keys[i]].high >>> 0).toNumber();
            }
            if (object.loadingPlayers) {
                if (typeof object.loadingPlayers !== "object")
                    throw TypeError(".room.CacheRoom.loadingPlayers: object expected");
                message.loadingPlayers = {};
                for (var keys = Object.keys(object.loadingPlayers), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.loadingPlayers[keys[i]] = $util.Long.fromValue(object.loadingPlayers[keys[i]])).unsigned = false;
                    else if (typeof object.loadingPlayers[keys[i]] === "string")
                        message.loadingPlayers[keys[i]] = parseInt(object.loadingPlayers[keys[i]], 10);
                    else if (typeof object.loadingPlayers[keys[i]] === "number")
                        message.loadingPlayers[keys[i]] = object.loadingPlayers[keys[i]];
                    else if (typeof object.loadingPlayers[keys[i]] === "object")
                        message.loadingPlayers[keys[i]] = new $util.LongBits(object.loadingPlayers[keys[i]].low >>> 0, object.loadingPlayers[keys[i]].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a CacheRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.CacheRoom
         * @static
         * @param {room.CacheRoom} message CacheRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CacheRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.players = {};
                object.loadingPlayers = {};
            }
            if (options.defaults) {
                object.roomId = "";
                object.ruleId = "";
                object.gameId = "";
                object.serverId = "";
                object.maxPlayerNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            var keys2;
            if (message.players && (keys2 = Object.keys(message.players)).length) {
                object.players = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.players[keys2[j]] === "number")
                        object.players[keys2[j]] = options.longs === String ? String(message.players[keys2[j]]) : message.players[keys2[j]];
                    else
                        object.players[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.players[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.players[keys2[j]].low >>> 0, message.players[keys2[j]].high >>> 0).toNumber() : message.players[keys2[j]];
            }
            if (message.loadingPlayers && (keys2 = Object.keys(message.loadingPlayers)).length) {
                object.loadingPlayers = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.loadingPlayers[keys2[j]] === "number")
                        object.loadingPlayers[keys2[j]] = options.longs === String ? String(message.loadingPlayers[keys2[j]]) : message.loadingPlayers[keys2[j]];
                    else
                        object.loadingPlayers[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.loadingPlayers[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.loadingPlayers[keys2[j]].low >>> 0, message.loadingPlayers[keys2[j]].high >>> 0).toNumber() : message.loadingPlayers[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this CacheRoom to JSON.
         * @function toJSON
         * @memberof room.CacheRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CacheRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CacheRoom;
    })();

    room.CachePlayer = (function() {

        /**
         * Properties of a CachePlayer.
         * @memberof room
         * @interface ICachePlayer
         * @property {number|Long|null} [uid] CachePlayer uid
         * @property {string|null} [roomId] CachePlayer roomId
         * @property {string|null} [serverId] CachePlayer serverId
         * @property {string|null} [matchRuleId] CachePlayer matchRuleId
         * @property {number|Long|null} [matchingTime] CachePlayer matchingTime
         * @property {string|null} [frontId] CachePlayer frontId
         * @property {string|null} [guid] CachePlayer guid
         * @property {string|null} [loadingRoomId] CachePlayer loadingRoomId
         */

        /**
         * Constructs a new CachePlayer.
         * @memberof room
         * @classdesc Represents a CachePlayer.
         * @implements ICachePlayer
         * @constructor
         * @param {room.ICachePlayer=} [properties] Properties to set
         */
        function CachePlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CachePlayer uid.
         * @member {number|Long} uid
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CachePlayer roomId.
         * @member {string} roomId
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.roomId = "";

        /**
         * CachePlayer serverId.
         * @member {string} serverId
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.serverId = "";

        /**
         * CachePlayer matchRuleId.
         * @member {string} matchRuleId
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.matchRuleId = "";

        /**
         * CachePlayer matchingTime.
         * @member {number|Long} matchingTime
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.matchingTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CachePlayer frontId.
         * @member {string} frontId
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.frontId = "";

        /**
         * CachePlayer guid.
         * @member {string} guid
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.guid = "";

        /**
         * CachePlayer loadingRoomId.
         * @member {string} loadingRoomId
         * @memberof room.CachePlayer
         * @instance
         */
        CachePlayer.prototype.loadingRoomId = "";

        /**
         * Creates a new CachePlayer instance using the specified properties.
         * @function create
         * @memberof room.CachePlayer
         * @static
         * @param {room.ICachePlayer=} [properties] Properties to set
         * @returns {room.CachePlayer} CachePlayer instance
         */
        CachePlayer.create = function create(properties) {
            return new CachePlayer(properties);
        };

        /**
         * Encodes the specified CachePlayer message. Does not implicitly {@link room.CachePlayer.verify|verify} messages.
         * @function encode
         * @memberof room.CachePlayer
         * @static
         * @param {room.ICachePlayer} message CachePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CachePlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
            if (message.matchRuleId != null && Object.hasOwnProperty.call(message, "matchRuleId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.matchRuleId);
            if (message.matchingTime != null && Object.hasOwnProperty.call(message, "matchingTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.matchingTime);
            if (message.frontId != null && Object.hasOwnProperty.call(message, "frontId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.frontId);
            if (message.guid != null && Object.hasOwnProperty.call(message, "guid"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.guid);
            if (message.loadingRoomId != null && Object.hasOwnProperty.call(message, "loadingRoomId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.loadingRoomId);
            return writer;
        };

        /**
         * Encodes the specified CachePlayer message, length delimited. Does not implicitly {@link room.CachePlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.CachePlayer
         * @static
         * @param {room.ICachePlayer} message CachePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CachePlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CachePlayer message from the specified reader or buffer.
         * @function decode
         * @memberof room.CachePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.CachePlayer} CachePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CachePlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.CachePlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.roomId = reader.string();
                    break;
                case 3:
                    message.serverId = reader.string();
                    break;
                case 4:
                    message.matchRuleId = reader.string();
                    break;
                case 5:
                    message.matchingTime = reader.int64();
                    break;
                case 6:
                    message.frontId = reader.string();
                    break;
                case 7:
                    message.guid = reader.string();
                    break;
                case 8:
                    message.loadingRoomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CachePlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.CachePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.CachePlayer} CachePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CachePlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CachePlayer message.
         * @function verify
         * @memberof room.CachePlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CachePlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.matchRuleId != null && message.hasOwnProperty("matchRuleId"))
                if (!$util.isString(message.matchRuleId))
                    return "matchRuleId: string expected";
            if (message.matchingTime != null && message.hasOwnProperty("matchingTime"))
                if (!$util.isInteger(message.matchingTime) && !(message.matchingTime && $util.isInteger(message.matchingTime.low) && $util.isInteger(message.matchingTime.high)))
                    return "matchingTime: integer|Long expected";
            if (message.frontId != null && message.hasOwnProperty("frontId"))
                if (!$util.isString(message.frontId))
                    return "frontId: string expected";
            if (message.guid != null && message.hasOwnProperty("guid"))
                if (!$util.isString(message.guid))
                    return "guid: string expected";
            if (message.loadingRoomId != null && message.hasOwnProperty("loadingRoomId"))
                if (!$util.isString(message.loadingRoomId))
                    return "loadingRoomId: string expected";
            return null;
        };

        /**
         * Creates a CachePlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.CachePlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.CachePlayer} CachePlayer
         */
        CachePlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.room.CachePlayer)
                return object;
            var message = new $root.room.CachePlayer();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.matchRuleId != null)
                message.matchRuleId = String(object.matchRuleId);
            if (object.matchingTime != null)
                if ($util.Long)
                    (message.matchingTime = $util.Long.fromValue(object.matchingTime)).unsigned = false;
                else if (typeof object.matchingTime === "string")
                    message.matchingTime = parseInt(object.matchingTime, 10);
                else if (typeof object.matchingTime === "number")
                    message.matchingTime = object.matchingTime;
                else if (typeof object.matchingTime === "object")
                    message.matchingTime = new $util.LongBits(object.matchingTime.low >>> 0, object.matchingTime.high >>> 0).toNumber();
            if (object.frontId != null)
                message.frontId = String(object.frontId);
            if (object.guid != null)
                message.guid = String(object.guid);
            if (object.loadingRoomId != null)
                message.loadingRoomId = String(object.loadingRoomId);
            return message;
        };

        /**
         * Creates a plain object from a CachePlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.CachePlayer
         * @static
         * @param {room.CachePlayer} message CachePlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CachePlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.roomId = "";
                object.serverId = "";
                object.matchRuleId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.matchingTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.matchingTime = options.longs === String ? "0" : 0;
                object.frontId = "";
                object.guid = "";
                object.loadingRoomId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.matchRuleId != null && message.hasOwnProperty("matchRuleId"))
                object.matchRuleId = message.matchRuleId;
            if (message.matchingTime != null && message.hasOwnProperty("matchingTime"))
                if (typeof message.matchingTime === "number")
                    object.matchingTime = options.longs === String ? String(message.matchingTime) : message.matchingTime;
                else
                    object.matchingTime = options.longs === String ? $util.Long.prototype.toString.call(message.matchingTime) : options.longs === Number ? new $util.LongBits(message.matchingTime.low >>> 0, message.matchingTime.high >>> 0).toNumber() : message.matchingTime;
            if (message.frontId != null && message.hasOwnProperty("frontId"))
                object.frontId = message.frontId;
            if (message.guid != null && message.hasOwnProperty("guid"))
                object.guid = message.guid;
            if (message.loadingRoomId != null && message.hasOwnProperty("loadingRoomId"))
                object.loadingRoomId = message.loadingRoomId;
            return object;
        };

        /**
         * Converts this CachePlayer to JSON.
         * @function toJSON
         * @memberof room.CachePlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CachePlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CachePlayer;
    })();

    return room;
})();

module.exports = $root.room;
