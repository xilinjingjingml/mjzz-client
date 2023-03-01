/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gamebase = (function() {

    /**
     * Namespace gamebase.
     * @exports gamebase
     * @namespace
     */
    var gamebase = {};

    gamebase.Base = (function() {

        /**
         * Constructs a new Base service.
         * @memberof gamebase
         * @classdesc Represents a Base
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Base(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Base.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Base;

        /**
         * Creates new Base service using the specified rpc implementation.
         * @function create
         * @memberof gamebase.Base
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Base} RPC service. Useful where requests and/or responses are streamed.
         */
        Base.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gamebase.Base#enterRoom}.
         * @memberof gamebase.Base
         * @typedef EnterRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.BaseEmpty} [response] BaseEmpty
         */

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IEnterRoomReq} request EnterRoomReq message or plain object
         * @param {gamebase.Base.EnterRoomCallback} callback Node-style callback called with the error, if any, and BaseEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Base.prototype.enterRoom = function enterRoom(request, callback) {
            return this.rpcCall(enterRoom, $root.gamebase.EnterRoomReq, $root.gamebase.BaseEmpty, request, callback);
        }, "name", { value: "EnterRoom" });

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IEnterRoomReq} request EnterRoomReq message or plain object
         * @returns {Promise<gamebase.BaseEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Base#exitRoom}.
         * @memberof gamebase.Base
         * @typedef ExitRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.BaseEmpty} [response] BaseEmpty
         */

        /**
         * Calls ExitRoom.
         * @function exitRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IExitRoomReq} request ExitRoomReq message or plain object
         * @param {gamebase.Base.ExitRoomCallback} callback Node-style callback called with the error, if any, and BaseEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Base.prototype.exitRoom = function exitRoom(request, callback) {
            return this.rpcCall(exitRoom, $root.gamebase.ExitRoomReq, $root.gamebase.BaseEmpty, request, callback);
        }, "name", { value: "ExitRoom" });

        /**
         * Calls ExitRoom.
         * @function exitRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IExitRoomReq} request ExitRoomReq message or plain object
         * @returns {Promise<gamebase.BaseEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Base#heartBeat}.
         * @memberof gamebase.Base
         * @typedef HeartBeatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.BaseEmpty} [response] BaseEmpty
         */

        /**
         * Calls HeartBeat.
         * @function heartBeat
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IHeartBeatReq} request HeartBeatReq message or plain object
         * @param {gamebase.Base.HeartBeatCallback} callback Node-style callback called with the error, if any, and BaseEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Base.prototype.heartBeat = function heartBeat(request, callback) {
            return this.rpcCall(heartBeat, $root.gamebase.HeartBeatReq, $root.gamebase.BaseEmpty, request, callback);
        }, "name", { value: "HeartBeat" });

        /**
         * Calls HeartBeat.
         * @function heartBeat
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IHeartBeatReq} request HeartBeatReq message or plain object
         * @returns {Promise<gamebase.BaseEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Base#changeRoom}.
         * @memberof gamebase.Base
         * @typedef ChangeRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.BaseEmpty} [response] BaseEmpty
         */

        /**
         * Calls ChangeRoom.
         * @function changeRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IChangeRoomReq} request ChangeRoomReq message or plain object
         * @param {gamebase.Base.ChangeRoomCallback} callback Node-style callback called with the error, if any, and BaseEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Base.prototype.changeRoom = function changeRoom(request, callback) {
            return this.rpcCall(changeRoom, $root.gamebase.ChangeRoomReq, $root.gamebase.BaseEmpty, request, callback);
        }, "name", { value: "ChangeRoom" });

        /**
         * Calls ChangeRoom.
         * @function changeRoom
         * @memberof gamebase.Base
         * @instance
         * @param {gamebase.IChangeRoomReq} request ChangeRoomReq message or plain object
         * @returns {Promise<gamebase.BaseEmpty>} Promise
         * @variation 2
         */

        return Base;
    })();

    gamebase.Game = (function() {

        /**
         * Constructs a new Game service.
         * @memberof gamebase
         * @classdesc Represents a Game
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Game(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Game.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Game;

        /**
         * Creates new Game service using the specified rpc implementation.
         * @function create
         * @memberof gamebase.Game
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Game} RPC service. Useful where requests and/or responses are streamed.
         */
        Game.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gamebase.Game#createRoom}.
         * @memberof gamebase.Game
         * @typedef CreateRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.CreateRoomRsp} [response] CreateRoomRsp
         */

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.ICreateRoomReq} request CreateRoomReq message or plain object
         * @param {gamebase.Game.CreateRoomCallback} callback Node-style callback called with the error, if any, and CreateRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.createRoom = function createRoom(request, callback) {
            return this.rpcCall(createRoom, $root.gamebase.CreateRoomReq, $root.gamebase.CreateRoomRsp, request, callback);
        }, "name", { value: "CreateRoom" });

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.ICreateRoomReq} request CreateRoomReq message or plain object
         * @returns {Promise<gamebase.CreateRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Game#dismissRoom}.
         * @memberof gamebase.Game
         * @typedef DismissRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.DismissRoomRsp} [response] DismissRoomRsp
         */

        /**
         * Calls DismissRoom.
         * @function dismissRoom
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IDismissRoomReq} request DismissRoomReq message or plain object
         * @param {gamebase.Game.DismissRoomCallback} callback Node-style callback called with the error, if any, and DismissRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.dismissRoom = function dismissRoom(request, callback) {
            return this.rpcCall(dismissRoom, $root.gamebase.DismissRoomReq, $root.gamebase.DismissRoomRsp, request, callback);
        }, "name", { value: "DismissRoom" });

        /**
         * Calls DismissRoom.
         * @function dismissRoom
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IDismissRoomReq} request DismissRoomReq message or plain object
         * @returns {Promise<gamebase.DismissRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Game#getRoomInfo}.
         * @memberof gamebase.Game
         * @typedef GetRoomInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.GetRoomInfoRsp} [response] GetRoomInfoRsp
         */

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @param {gamebase.Game.GetRoomInfoCallback} callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.getRoomInfo = function getRoomInfo(request, callback) {
            return this.rpcCall(getRoomInfo, $root.gamebase.GetRoomInfoReq, $root.gamebase.GetRoomInfoRsp, request, callback);
        }, "name", { value: "GetRoomInfo" });

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @returns {Promise<gamebase.GetRoomInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Game#kickPlayer}.
         * @memberof gamebase.Game
         * @typedef KickPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.KickPlayerRsp} [response] KickPlayerRsp
         */

        /**
         * Calls KickPlayer.
         * @function kickPlayer
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IKickPlayerReq} request KickPlayerReq message or plain object
         * @param {gamebase.Game.KickPlayerCallback} callback Node-style callback called with the error, if any, and KickPlayerRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.kickPlayer = function kickPlayer(request, callback) {
            return this.rpcCall(kickPlayer, $root.gamebase.KickPlayerReq, $root.gamebase.KickPlayerRsp, request, callback);
        }, "name", { value: "KickPlayer" });

        /**
         * Calls KickPlayer.
         * @function kickPlayer
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IKickPlayerReq} request KickPlayerReq message or plain object
         * @returns {Promise<gamebase.KickPlayerRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gamebase.Game#updateRoomPlayer}.
         * @memberof gamebase.Game
         * @typedef UpdateRoomPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gamebase.UpdateRoomPlayerRsp} [response] UpdateRoomPlayerRsp
         */

        /**
         * Calls UpdateRoomPlayer.
         * @function updateRoomPlayer
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IUpdateRoomPlayerReq} request UpdateRoomPlayerReq message or plain object
         * @param {gamebase.Game.UpdateRoomPlayerCallback} callback Node-style callback called with the error, if any, and UpdateRoomPlayerRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.updateRoomPlayer = function updateRoomPlayer(request, callback) {
            return this.rpcCall(updateRoomPlayer, $root.gamebase.UpdateRoomPlayerReq, $root.gamebase.UpdateRoomPlayerRsp, request, callback);
        }, "name", { value: "UpdateRoomPlayer" });

        /**
         * Calls UpdateRoomPlayer.
         * @function updateRoomPlayer
         * @memberof gamebase.Game
         * @instance
         * @param {gamebase.IUpdateRoomPlayerReq} request UpdateRoomPlayerReq message or plain object
         * @returns {Promise<gamebase.UpdateRoomPlayerRsp>} Promise
         * @variation 2
         */

        return Game;
    })();

    gamebase.UpdateRoomPlayerReq = (function() {

        /**
         * Properties of an UpdateRoomPlayerReq.
         * @memberof gamebase
         * @interface IUpdateRoomPlayerReq
         * @property {string|null} [roomId] UpdateRoomPlayerReq roomId
         * @property {Object.<string,gamebase.UpdateRoomPlayerReq.IPlyData>|null} [addList] UpdateRoomPlayerReq addList
         * @property {Array.<number|Long>|null} [deleteList] UpdateRoomPlayerReq deleteList
         */

        /**
         * Constructs a new UpdateRoomPlayerReq.
         * @memberof gamebase
         * @classdesc Represents an UpdateRoomPlayerReq.
         * @implements IUpdateRoomPlayerReq
         * @constructor
         * @param {gamebase.IUpdateRoomPlayerReq=} [properties] Properties to set
         */
        function UpdateRoomPlayerReq(properties) {
            this.addList = {};
            this.deleteList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoomPlayerReq roomId.
         * @member {string} roomId
         * @memberof gamebase.UpdateRoomPlayerReq
         * @instance
         */
        UpdateRoomPlayerReq.prototype.roomId = "";

        /**
         * UpdateRoomPlayerReq addList.
         * @member {Object.<string,gamebase.UpdateRoomPlayerReq.IPlyData>} addList
         * @memberof gamebase.UpdateRoomPlayerReq
         * @instance
         */
        UpdateRoomPlayerReq.prototype.addList = $util.emptyObject;

        /**
         * UpdateRoomPlayerReq deleteList.
         * @member {Array.<number|Long>} deleteList
         * @memberof gamebase.UpdateRoomPlayerReq
         * @instance
         */
        UpdateRoomPlayerReq.prototype.deleteList = $util.emptyArray;

        /**
         * Creates a new UpdateRoomPlayerReq instance using the specified properties.
         * @function create
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {gamebase.IUpdateRoomPlayerReq=} [properties] Properties to set
         * @returns {gamebase.UpdateRoomPlayerReq} UpdateRoomPlayerReq instance
         */
        UpdateRoomPlayerReq.create = function create(properties) {
            return new UpdateRoomPlayerReq(properties);
        };

        /**
         * Encodes the specified UpdateRoomPlayerReq message. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {gamebase.IUpdateRoomPlayerReq} message UpdateRoomPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomPlayerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.addList != null && Object.hasOwnProperty.call(message, "addList"))
                for (var keys = Object.keys(message.addList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.gamebase.UpdateRoomPlayerReq.PlyData.encode(message.addList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.deleteList != null && message.deleteList.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.deleteList.length; ++i)
                    writer.int64(message.deleteList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UpdateRoomPlayerReq message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {gamebase.IUpdateRoomPlayerReq} message UpdateRoomPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomPlayerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoomPlayerReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UpdateRoomPlayerReq} UpdateRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomPlayerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UpdateRoomPlayerReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    if (message.addList === $util.emptyObject)
                        message.addList = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.gamebase.UpdateRoomPlayerReq.PlyData.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.addList[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                case 3:
                    if (!(message.deleteList && message.deleteList.length))
                        message.deleteList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.deleteList.push(reader.int64());
                    } else
                        message.deleteList.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRoomPlayerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UpdateRoomPlayerReq} UpdateRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomPlayerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoomPlayerReq message.
         * @function verify
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoomPlayerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.addList != null && message.hasOwnProperty("addList")) {
                if (!$util.isObject(message.addList))
                    return "addList: object expected";
                var key = Object.keys(message.addList);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "addList: integer|Long key{k:int64} expected";
                    {
                        var error = $root.gamebase.UpdateRoomPlayerReq.PlyData.verify(message.addList[key[i]]);
                        if (error)
                            return "addList." + error;
                    }
                }
            }
            if (message.deleteList != null && message.hasOwnProperty("deleteList")) {
                if (!Array.isArray(message.deleteList))
                    return "deleteList: array expected";
                for (var i = 0; i < message.deleteList.length; ++i)
                    if (!$util.isInteger(message.deleteList[i]) && !(message.deleteList[i] && $util.isInteger(message.deleteList[i].low) && $util.isInteger(message.deleteList[i].high)))
                        return "deleteList: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates an UpdateRoomPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UpdateRoomPlayerReq} UpdateRoomPlayerReq
         */
        UpdateRoomPlayerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UpdateRoomPlayerReq)
                return object;
            var message = new $root.gamebase.UpdateRoomPlayerReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.addList) {
                if (typeof object.addList !== "object")
                    throw TypeError(".gamebase.UpdateRoomPlayerReq.addList: object expected");
                message.addList = {};
                for (var keys = Object.keys(object.addList), i = 0; i < keys.length; ++i) {
                    if (typeof object.addList[keys[i]] !== "object")
                        throw TypeError(".gamebase.UpdateRoomPlayerReq.addList: object expected");
                    message.addList[keys[i]] = $root.gamebase.UpdateRoomPlayerReq.PlyData.fromObject(object.addList[keys[i]]);
                }
            }
            if (object.deleteList) {
                if (!Array.isArray(object.deleteList))
                    throw TypeError(".gamebase.UpdateRoomPlayerReq.deleteList: array expected");
                message.deleteList = [];
                for (var i = 0; i < object.deleteList.length; ++i)
                    if ($util.Long)
                        (message.deleteList[i] = $util.Long.fromValue(object.deleteList[i])).unsigned = false;
                    else if (typeof object.deleteList[i] === "string")
                        message.deleteList[i] = parseInt(object.deleteList[i], 10);
                    else if (typeof object.deleteList[i] === "number")
                        message.deleteList[i] = object.deleteList[i];
                    else if (typeof object.deleteList[i] === "object")
                        message.deleteList[i] = new $util.LongBits(object.deleteList[i].low >>> 0, object.deleteList[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoomPlayerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UpdateRoomPlayerReq
         * @static
         * @param {gamebase.UpdateRoomPlayerReq} message UpdateRoomPlayerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoomPlayerReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.deleteList = [];
            if (options.objects || options.defaults)
                object.addList = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            var keys2;
            if (message.addList && (keys2 = Object.keys(message.addList)).length) {
                object.addList = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.addList[keys2[j]] = $root.gamebase.UpdateRoomPlayerReq.PlyData.toObject(message.addList[keys2[j]], options);
            }
            if (message.deleteList && message.deleteList.length) {
                object.deleteList = [];
                for (var j = 0; j < message.deleteList.length; ++j)
                    if (typeof message.deleteList[j] === "number")
                        object.deleteList[j] = options.longs === String ? String(message.deleteList[j]) : message.deleteList[j];
                    else
                        object.deleteList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.deleteList[j]) : options.longs === Number ? new $util.LongBits(message.deleteList[j].low >>> 0, message.deleteList[j].high >>> 0).toNumber() : message.deleteList[j];
            }
            return object;
        };

        /**
         * Converts this UpdateRoomPlayerReq to JSON.
         * @function toJSON
         * @memberof gamebase.UpdateRoomPlayerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoomPlayerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UpdateRoomPlayerReq.PlyData = (function() {

            /**
             * Properties of a PlyData.
             * @memberof gamebase.UpdateRoomPlayerReq
             * @interface IPlyData
             * @property {string|null} [bindId] PlyData bindId
             */

            /**
             * Constructs a new PlyData.
             * @memberof gamebase.UpdateRoomPlayerReq
             * @classdesc Represents a PlyData.
             * @implements IPlyData
             * @constructor
             * @param {gamebase.UpdateRoomPlayerReq.IPlyData=} [properties] Properties to set
             */
            function PlyData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlyData bindId.
             * @member {string} bindId
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @instance
             */
            PlyData.prototype.bindId = "";

            /**
             * Creates a new PlyData instance using the specified properties.
             * @function create
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {gamebase.UpdateRoomPlayerReq.IPlyData=} [properties] Properties to set
             * @returns {gamebase.UpdateRoomPlayerReq.PlyData} PlyData instance
             */
            PlyData.create = function create(properties) {
                return new PlyData(properties);
            };

            /**
             * Encodes the specified PlyData message. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.PlyData.verify|verify} messages.
             * @function encode
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {gamebase.UpdateRoomPlayerReq.IPlyData} message PlyData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlyData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bindId != null && Object.hasOwnProperty.call(message, "bindId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.bindId);
                return writer;
            };

            /**
             * Encodes the specified PlyData message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerReq.PlyData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {gamebase.UpdateRoomPlayerReq.IPlyData} message PlyData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlyData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlyData message from the specified reader or buffer.
             * @function decode
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamebase.UpdateRoomPlayerReq.PlyData} PlyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlyData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UpdateRoomPlayerReq.PlyData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bindId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PlyData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamebase.UpdateRoomPlayerReq.PlyData} PlyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlyData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlyData message.
             * @function verify
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlyData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bindId != null && message.hasOwnProperty("bindId"))
                    if (!$util.isString(message.bindId))
                        return "bindId: string expected";
                return null;
            };

            /**
             * Creates a PlyData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamebase.UpdateRoomPlayerReq.PlyData} PlyData
             */
            PlyData.fromObject = function fromObject(object) {
                if (object instanceof $root.gamebase.UpdateRoomPlayerReq.PlyData)
                    return object;
                var message = new $root.gamebase.UpdateRoomPlayerReq.PlyData();
                if (object.bindId != null)
                    message.bindId = String(object.bindId);
                return message;
            };

            /**
             * Creates a plain object from a PlyData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @static
             * @param {gamebase.UpdateRoomPlayerReq.PlyData} message PlyData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlyData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.bindId = "";
                if (message.bindId != null && message.hasOwnProperty("bindId"))
                    object.bindId = message.bindId;
                return object;
            };

            /**
             * Converts this PlyData to JSON.
             * @function toJSON
             * @memberof gamebase.UpdateRoomPlayerReq.PlyData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlyData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PlyData;
        })();

        return UpdateRoomPlayerReq;
    })();

    gamebase.UpdateRoomPlayerRsp = (function() {

        /**
         * Properties of an UpdateRoomPlayerRsp.
         * @memberof gamebase
         * @interface IUpdateRoomPlayerRsp
         * @property {number|null} [errCode] UpdateRoomPlayerRsp errCode
         * @property {string|null} [errMsg] UpdateRoomPlayerRsp errMsg
         */

        /**
         * Constructs a new UpdateRoomPlayerRsp.
         * @memberof gamebase
         * @classdesc Represents an UpdateRoomPlayerRsp.
         * @implements IUpdateRoomPlayerRsp
         * @constructor
         * @param {gamebase.IUpdateRoomPlayerRsp=} [properties] Properties to set
         */
        function UpdateRoomPlayerRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoomPlayerRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @instance
         */
        UpdateRoomPlayerRsp.prototype.errCode = 0;

        /**
         * UpdateRoomPlayerRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @instance
         */
        UpdateRoomPlayerRsp.prototype.errMsg = "";

        /**
         * Creates a new UpdateRoomPlayerRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {gamebase.IUpdateRoomPlayerRsp=} [properties] Properties to set
         * @returns {gamebase.UpdateRoomPlayerRsp} UpdateRoomPlayerRsp instance
         */
        UpdateRoomPlayerRsp.create = function create(properties) {
            return new UpdateRoomPlayerRsp(properties);
        };

        /**
         * Encodes the specified UpdateRoomPlayerRsp message. Does not implicitly {@link gamebase.UpdateRoomPlayerRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {gamebase.IUpdateRoomPlayerRsp} message UpdateRoomPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomPlayerRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UpdateRoomPlayerRsp message, length delimited. Does not implicitly {@link gamebase.UpdateRoomPlayerRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {gamebase.IUpdateRoomPlayerRsp} message UpdateRoomPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomPlayerRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoomPlayerRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UpdateRoomPlayerRsp} UpdateRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomPlayerRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UpdateRoomPlayerRsp();
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
         * Decodes an UpdateRoomPlayerRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UpdateRoomPlayerRsp} UpdateRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomPlayerRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoomPlayerRsp message.
         * @function verify
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoomPlayerRsp.verify = function verify(message) {
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
         * Creates an UpdateRoomPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UpdateRoomPlayerRsp} UpdateRoomPlayerRsp
         */
        UpdateRoomPlayerRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UpdateRoomPlayerRsp)
                return object;
            var message = new $root.gamebase.UpdateRoomPlayerRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoomPlayerRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @static
         * @param {gamebase.UpdateRoomPlayerRsp} message UpdateRoomPlayerRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoomPlayerRsp.toObject = function toObject(message, options) {
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
         * Converts this UpdateRoomPlayerRsp to JSON.
         * @function toJSON
         * @memberof gamebase.UpdateRoomPlayerRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoomPlayerRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateRoomPlayerRsp;
    })();

    gamebase.BaseEmpty = (function() {

        /**
         * Properties of a BaseEmpty.
         * @memberof gamebase
         * @interface IBaseEmpty
         */

        /**
         * Constructs a new BaseEmpty.
         * @memberof gamebase
         * @classdesc Represents a BaseEmpty.
         * @implements IBaseEmpty
         * @constructor
         * @param {gamebase.IBaseEmpty=} [properties] Properties to set
         */
        function BaseEmpty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BaseEmpty instance using the specified properties.
         * @function create
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {gamebase.IBaseEmpty=} [properties] Properties to set
         * @returns {gamebase.BaseEmpty} BaseEmpty instance
         */
        BaseEmpty.create = function create(properties) {
            return new BaseEmpty(properties);
        };

        /**
         * Encodes the specified BaseEmpty message. Does not implicitly {@link gamebase.BaseEmpty.verify|verify} messages.
         * @function encode
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {gamebase.IBaseEmpty} message BaseEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseEmpty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BaseEmpty message, length delimited. Does not implicitly {@link gamebase.BaseEmpty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {gamebase.IBaseEmpty} message BaseEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseEmpty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseEmpty message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.BaseEmpty} BaseEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseEmpty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.BaseEmpty();
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
         * Decodes a BaseEmpty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.BaseEmpty} BaseEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseEmpty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseEmpty message.
         * @function verify
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseEmpty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BaseEmpty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.BaseEmpty} BaseEmpty
         */
        BaseEmpty.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.BaseEmpty)
                return object;
            return new $root.gamebase.BaseEmpty();
        };

        /**
         * Creates a plain object from a BaseEmpty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.BaseEmpty
         * @static
         * @param {gamebase.BaseEmpty} message BaseEmpty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseEmpty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BaseEmpty to JSON.
         * @function toJSON
         * @memberof gamebase.BaseEmpty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseEmpty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaseEmpty;
    })();

    gamebase.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof gamebase
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {string|null} [gameId] RoomInfo gameId
         * @property {string|null} [ruleId] RoomInfo ruleId
         * @property {number|null} [maxPlayerNum] RoomInfo maxPlayerNum
         * @property {number|Long|null} [createTime] RoomInfo createTime
         * @property {string|null} [metaData] RoomInfo metaData
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof gamebase
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {gamebase.IRoomInfo=} [properties] Properties to set
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
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo gameId.
         * @member {string} gameId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = "";

        /**
         * RoomInfo ruleId.
         * @member {string} ruleId
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.ruleId = "";

        /**
         * RoomInfo maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.maxPlayerNum = 0;

        /**
         * RoomInfo createTime.
         * @member {number|Long} createTime
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomInfo metaData.
         * @member {string} metaData
         * @memberof gamebase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.metaData = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo=} [properties] Properties to set
         * @returns {gamebase.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo} message RoomInfo message or plain object to encode
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
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxPlayerNum);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
            if (message.metaData != null && Object.hasOwnProperty.call(message, "metaData"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.metaData);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gamebase.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.RoomInfo();
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
                case 5:
                    message.maxPlayerNum = reader.int32();
                    break;
                case 6:
                    message.createTime = reader.int64();
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
         * @memberof gamebase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.RoomInfo} RoomInfo
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
         * @memberof gamebase.RoomInfo
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
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                if (!$util.isString(message.metaData))
                    return "metaData: string expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.RoomInfo)
                return object;
            var message = new $root.gamebase.RoomInfo();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
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
            if (object.metaData != null)
                message.metaData = String(object.metaData);
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.RoomInfo
         * @static
         * @param {gamebase.RoomInfo} message RoomInfo
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
                object.maxPlayerNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
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
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                object.metaData = message.metaData;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof gamebase.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    gamebase.HeartBeatReq = (function() {

        /**
         * Properties of a HeartBeatReq.
         * @memberof gamebase
         * @interface IHeartBeatReq
         * @property {number|Long|null} [reqTime] HeartBeatReq reqTime
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof gamebase
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {gamebase.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq reqTime.
         * @member {number|Long} reqTime
         * @memberof gamebase.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.reqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq=} [properties] Properties to set
         * @returns {gamebase.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqTime != null && Object.hasOwnProperty.call(message, "reqTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqTime);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link gamebase.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.HeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (!$util.isInteger(message.reqTime) && !(message.reqTime && $util.isInteger(message.reqTime.low) && $util.isInteger(message.reqTime.high)))
                    return "reqTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.HeartBeatReq} HeartBeatReq
         */
        HeartBeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.HeartBeatReq)
                return object;
            var message = new $root.gamebase.HeartBeatReq();
            if (object.reqTime != null)
                if ($util.Long)
                    (message.reqTime = $util.Long.fromValue(object.reqTime)).unsigned = false;
                else if (typeof object.reqTime === "string")
                    message.reqTime = parseInt(object.reqTime, 10);
                else if (typeof object.reqTime === "number")
                    message.reqTime = object.reqTime;
                else if (typeof object.reqTime === "object")
                    message.reqTime = new $util.LongBits(object.reqTime.low >>> 0, object.reqTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.HeartBeatReq
         * @static
         * @param {gamebase.HeartBeatReq} message HeartBeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqTime = options.longs === String ? "0" : 0;
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (typeof message.reqTime === "number")
                    object.reqTime = options.longs === String ? String(message.reqTime) : message.reqTime;
                else
                    object.reqTime = options.longs === String ? $util.Long.prototype.toString.call(message.reqTime) : options.longs === Number ? new $util.LongBits(message.reqTime.low >>> 0, message.reqTime.high >>> 0).toNumber() : message.reqTime;
            return object;
        };

        /**
         * Converts this HeartBeatReq to JSON.
         * @function toJSON
         * @memberof gamebase.HeartBeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatReq;
    })();

    gamebase.HeartBeatRsp = (function() {

        /**
         * Properties of a HeartBeatRsp.
         * @memberof gamebase
         * @interface IHeartBeatRsp
         * @property {number|Long|null} [reqTime] HeartBeatRsp reqTime
         * @property {number|Long|null} [ackTime] HeartBeatRsp ackTime
         */

        /**
         * Constructs a new HeartBeatRsp.
         * @memberof gamebase
         * @classdesc Represents a HeartBeatRsp.
         * @implements IHeartBeatRsp
         * @constructor
         * @param {gamebase.IHeartBeatRsp=} [properties] Properties to set
         */
        function HeartBeatRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatRsp reqTime.
         * @member {number|Long} reqTime
         * @memberof gamebase.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.reqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HeartBeatRsp ackTime.
         * @member {number|Long} ackTime
         * @memberof gamebase.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.ackTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp=} [properties] Properties to set
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp instance
         */
        HeartBeatRsp.create = function create(properties) {
            return new HeartBeatRsp(properties);
        };

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqTime != null && Object.hasOwnProperty.call(message, "reqTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqTime);
            if (message.ackTime != null && Object.hasOwnProperty.call(message, "ackTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ackTime);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link gamebase.HeartBeatRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.HeartBeatRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqTime = reader.int64();
                    break;
                case 2:
                    message.ackTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatRsp message.
         * @function verify
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (!$util.isInteger(message.reqTime) && !(message.reqTime && $util.isInteger(message.reqTime.low) && $util.isInteger(message.reqTime.high)))
                    return "reqTime: integer|Long expected";
            if (message.ackTime != null && message.hasOwnProperty("ackTime"))
                if (!$util.isInteger(message.ackTime) && !(message.ackTime && $util.isInteger(message.ackTime.low) && $util.isInteger(message.ackTime.high)))
                    return "ackTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.HeartBeatRsp} HeartBeatRsp
         */
        HeartBeatRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.HeartBeatRsp)
                return object;
            var message = new $root.gamebase.HeartBeatRsp();
            if (object.reqTime != null)
                if ($util.Long)
                    (message.reqTime = $util.Long.fromValue(object.reqTime)).unsigned = false;
                else if (typeof object.reqTime === "string")
                    message.reqTime = parseInt(object.reqTime, 10);
                else if (typeof object.reqTime === "number")
                    message.reqTime = object.reqTime;
                else if (typeof object.reqTime === "object")
                    message.reqTime = new $util.LongBits(object.reqTime.low >>> 0, object.reqTime.high >>> 0).toNumber();
            if (object.ackTime != null)
                if ($util.Long)
                    (message.ackTime = $util.Long.fromValue(object.ackTime)).unsigned = false;
                else if (typeof object.ackTime === "string")
                    message.ackTime = parseInt(object.ackTime, 10);
                else if (typeof object.ackTime === "number")
                    message.ackTime = object.ackTime;
                else if (typeof object.ackTime === "object")
                    message.ackTime = new $util.LongBits(object.ackTime.low >>> 0, object.ackTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.HeartBeatRsp
         * @static
         * @param {gamebase.HeartBeatRsp} message HeartBeatRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ackTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ackTime = options.longs === String ? "0" : 0;
            }
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (typeof message.reqTime === "number")
                    object.reqTime = options.longs === String ? String(message.reqTime) : message.reqTime;
                else
                    object.reqTime = options.longs === String ? $util.Long.prototype.toString.call(message.reqTime) : options.longs === Number ? new $util.LongBits(message.reqTime.low >>> 0, message.reqTime.high >>> 0).toNumber() : message.reqTime;
            if (message.ackTime != null && message.hasOwnProperty("ackTime"))
                if (typeof message.ackTime === "number")
                    object.ackTime = options.longs === String ? String(message.ackTime) : message.ackTime;
                else
                    object.ackTime = options.longs === String ? $util.Long.prototype.toString.call(message.ackTime) : options.longs === Number ? new $util.LongBits(message.ackTime.low >>> 0, message.ackTime.high >>> 0).toNumber() : message.ackTime;
            return object;
        };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @function toJSON
         * @memberof gamebase.HeartBeatRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatRsp;
    })();

    gamebase.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof gamebase
         * @interface ICreateRoomReq
         * @property {string|null} [rule] CreateRoomReq rule
         * @property {string|null} [metaData] CreateRoomReq metaData
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof gamebase
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {gamebase.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq rule.
         * @member {string} rule
         * @memberof gamebase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.rule = "";

        /**
         * CreateRoomReq metaData.
         * @member {string} metaData
         * @memberof gamebase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.metaData = "";

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {gamebase.ICreateRoomReq=} [properties] Properties to set
         * @returns {gamebase.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gamebase.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {gamebase.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rule != null && Object.hasOwnProperty.call(message, "rule"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rule);
            if (message.metaData != null && Object.hasOwnProperty.call(message, "metaData"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.metaData);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gamebase.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {gamebase.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rule = reader.string();
                    break;
                case 2:
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
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rule != null && message.hasOwnProperty("rule"))
                if (!$util.isString(message.rule))
                    return "rule: string expected";
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                if (!$util.isString(message.metaData))
                    return "metaData: string expected";
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.CreateRoomReq)
                return object;
            var message = new $root.gamebase.CreateRoomReq();
            if (object.rule != null)
                message.rule = String(object.rule);
            if (object.metaData != null)
                message.metaData = String(object.metaData);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.CreateRoomReq
         * @static
         * @param {gamebase.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rule = "";
                object.metaData = "";
            }
            if (message.rule != null && message.hasOwnProperty("rule"))
                object.rule = message.rule;
            if (message.metaData != null && message.hasOwnProperty("metaData"))
                object.metaData = message.metaData;
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomReq;
    })();

    gamebase.CreateRoomRsp = (function() {

        /**
         * Properties of a CreateRoomRsp.
         * @memberof gamebase
         * @interface ICreateRoomRsp
         * @property {number|null} [errCode] CreateRoomRsp errCode
         * @property {string|null} [errMsg] CreateRoomRsp errMsg
         * @property {gamebase.IRoomInfo|null} [roomInfo] CreateRoomRsp roomInfo
         */

        /**
         * Constructs a new CreateRoomRsp.
         * @memberof gamebase
         * @classdesc Represents a CreateRoomRsp.
         * @implements ICreateRoomRsp
         * @constructor
         * @param {gamebase.ICreateRoomRsp=} [properties] Properties to set
         */
        function CreateRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.errCode = 0;

        /**
         * CreateRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.errMsg = "";

        /**
         * CreateRoomRsp roomInfo.
         * @member {gamebase.IRoomInfo|null|undefined} roomInfo
         * @memberof gamebase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.roomInfo = null;

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {gamebase.ICreateRoomRsp=} [properties] Properties to set
         * @returns {gamebase.CreateRoomRsp} CreateRoomRsp instance
         */
        CreateRoomRsp.create = function create(properties) {
            return new CreateRoomRsp(properties);
        };

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gamebase.CreateRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {gamebase.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.gamebase.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gamebase.CreateRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {gamebase.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.CreateRoomRsp();
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
                    message.roomInfo = $root.gamebase.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRsp message.
         * @function verify
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                var error = $root.gamebase.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.CreateRoomRsp} CreateRoomRsp
         */
        CreateRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.CreateRoomRsp)
                return object;
            var message = new $root.gamebase.CreateRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".gamebase.CreateRoomRsp.roomInfo: object expected");
                message.roomInfo = $root.gamebase.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.CreateRoomRsp
         * @static
         * @param {gamebase.CreateRoomRsp} message CreateRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.roomInfo = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                object.roomInfo = $root.gamebase.RoomInfo.toObject(message.roomInfo, options);
            return object;
        };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.CreateRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRsp;
    })();

    gamebase.EnterRoomReq = (function() {

        /**
         * Properties of an EnterRoomReq.
         * @memberof gamebase
         * @interface IEnterRoomReq
         * @property {number|Long|null} [uid] EnterRoomReq uid
         * @property {string|null} [token] EnterRoomReq token
         * @property {string|null} [roomId] EnterRoomReq roomId
         */

        /**
         * Constructs a new EnterRoomReq.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomReq.
         * @implements IEnterRoomReq
         * @constructor
         * @param {gamebase.IEnterRoomReq=} [properties] Properties to set
         */
        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomReq uid.
         * @member {number|Long} uid
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterRoomReq token.
         * @member {string} token
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.token = "";

        /**
         * EnterRoomReq roomId.
         * @member {string} roomId
         * @memberof gamebase.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.roomId = "";

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq=} [properties] Properties to set
         * @returns {gamebase.EnterRoomReq} EnterRoomReq instance
         */
        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link gamebase.EnterRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
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
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomReq message.
         * @function verify
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomReq} EnterRoomReq
         */
        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomReq)
                return object;
            var message = new $root.gamebase.EnterRoomReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomReq
         * @static
         * @param {gamebase.EnterRoomReq} message EnterRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.token = "";
                object.roomId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this EnterRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomReq;
    })();

    gamebase.EnterRoomRsp = (function() {

        /**
         * Properties of an EnterRoomRsp.
         * @memberof gamebase
         * @interface IEnterRoomRsp
         * @property {number|null} [errCode] EnterRoomRsp errCode
         * @property {string|null} [errMsg] EnterRoomRsp errMsg
         * @property {gamebase.IRoomInfo|null} [roomInfo] EnterRoomRsp roomInfo
         */

        /**
         * Constructs a new EnterRoomRsp.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomRsp.
         * @implements IEnterRoomRsp
         * @constructor
         * @param {gamebase.IEnterRoomRsp=} [properties] Properties to set
         */
        function EnterRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.errCode = 0;

        /**
         * EnterRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.errMsg = "";

        /**
         * EnterRoomRsp roomInfo.
         * @member {gamebase.IRoomInfo|null|undefined} roomInfo
         * @memberof gamebase.EnterRoomRsp
         * @instance
         */
        EnterRoomRsp.prototype.roomInfo = null;

        /**
         * Creates a new EnterRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp=} [properties] Properties to set
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp instance
         */
        EnterRoomRsp.create = function create(properties) {
            return new EnterRoomRsp(properties);
        };

        /**
         * Encodes the specified EnterRoomRsp message. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp} message EnterRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.gamebase.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRsp message, length delimited. Does not implicitly {@link gamebase.EnterRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.IEnterRoomRsp} message EnterRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomRsp();
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
                    message.roomInfo = $root.gamebase.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRsp message.
         * @function verify
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                var error = $root.gamebase.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomRsp} EnterRoomRsp
         */
        EnterRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomRsp)
                return object;
            var message = new $root.gamebase.EnterRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".gamebase.EnterRoomRsp.roomInfo: object expected");
                message.roomInfo = $root.gamebase.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomRsp
         * @static
         * @param {gamebase.EnterRoomRsp} message EnterRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.roomInfo = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                object.roomInfo = $root.gamebase.RoomInfo.toObject(message.roomInfo, options);
            return object;
        };

        /**
         * Converts this EnterRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomRsp;
    })();

    gamebase.EnterRoomNot = (function() {

        /**
         * Properties of an EnterRoomNot.
         * @memberof gamebase
         * @interface IEnterRoomNot
         * @property {string|null} [roomId] EnterRoomNot roomId
         * @property {number|Long|null} [uid] EnterRoomNot uid
         * @property {string|null} [nickname] EnterRoomNot nickname
         * @property {number|Long|null} [money] EnterRoomNot money
         */

        /**
         * Constructs a new EnterRoomNot.
         * @memberof gamebase
         * @classdesc Represents an EnterRoomNot.
         * @implements IEnterRoomNot
         * @constructor
         * @param {gamebase.IEnterRoomNot=} [properties] Properties to set
         */
        function EnterRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.roomId = "";

        /**
         * EnterRoomNot uid.
         * @member {number|Long} uid
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterRoomNot nickname.
         * @member {string} nickname
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.nickname = "";

        /**
         * EnterRoomNot money.
         * @member {number|Long} money
         * @memberof gamebase.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot=} [properties] Properties to set
         * @returns {gamebase.EnterRoomNot} EnterRoomNot instance
         */
        EnterRoomNot.create = function create(properties) {
            return new EnterRoomNot(properties);
        };

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link gamebase.EnterRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EnterRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomNot message.
         * @function verify
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            return null;
        };

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EnterRoomNot} EnterRoomNot
         */
        EnterRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EnterRoomNot)
                return object;
            var message = new $root.gamebase.EnterRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EnterRoomNot
         * @static
         * @param {gamebase.EnterRoomNot} message EnterRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            return object;
        };

        /**
         * Converts this EnterRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.EnterRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomNot;
    })();

    gamebase.ExitRoomReq = (function() {

        /**
         * Properties of an ExitRoomReq.
         * @memberof gamebase
         * @interface IExitRoomReq
         */

        /**
         * Constructs a new ExitRoomReq.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomReq.
         * @implements IExitRoomReq
         * @constructor
         * @param {gamebase.IExitRoomReq=} [properties] Properties to set
         */
        function ExitRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq=} [properties] Properties to set
         * @returns {gamebase.ExitRoomReq} ExitRoomReq instance
         */
        ExitRoomReq.create = function create(properties) {
            return new ExitRoomReq(properties);
        };

        /**
         * Encodes the specified ExitRoomReq message. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link gamebase.ExitRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomReq();
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
         * Decodes an ExitRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomReq message.
         * @function verify
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomReq} ExitRoomReq
         */
        ExitRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomReq)
                return object;
            return new $root.gamebase.ExitRoomReq();
        };

        /**
         * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomReq
         * @static
         * @param {gamebase.ExitRoomReq} message ExitRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomReq;
    })();

    gamebase.ExitRoomRsp = (function() {

        /**
         * Properties of an ExitRoomRsp.
         * @memberof gamebase
         * @interface IExitRoomRsp
         * @property {number|null} [errCode] ExitRoomRsp errCode
         * @property {string|null} [errMsg] ExitRoomRsp errMsg
         */

        /**
         * Constructs a new ExitRoomRsp.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomRsp.
         * @implements IExitRoomRsp
         * @constructor
         * @param {gamebase.IExitRoomRsp=} [properties] Properties to set
         */
        function ExitRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.ExitRoomRsp
         * @instance
         */
        ExitRoomRsp.prototype.errCode = 0;

        /**
         * ExitRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.ExitRoomRsp
         * @instance
         */
        ExitRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new ExitRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp=} [properties] Properties to set
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp instance
         */
        ExitRoomRsp.create = function create(properties) {
            return new ExitRoomRsp(properties);
        };

        /**
         * Encodes the specified ExitRoomRsp message. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp} message ExitRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomRsp message, length delimited. Does not implicitly {@link gamebase.ExitRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.IExitRoomRsp} message ExitRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomRsp();
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
         * Decodes an ExitRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomRsp message.
         * @function verify
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomRsp.verify = function verify(message) {
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
         * Creates an ExitRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomRsp} ExitRoomRsp
         */
        ExitRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomRsp)
                return object;
            var message = new $root.gamebase.ExitRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an ExitRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomRsp
         * @static
         * @param {gamebase.ExitRoomRsp} message ExitRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this ExitRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomRsp;
    })();

    gamebase.ExitRoomNot = (function() {

        /**
         * Properties of an ExitRoomNot.
         * @memberof gamebase
         * @interface IExitRoomNot
         * @property {string|null} [roomId] ExitRoomNot roomId
         * @property {number|Long|null} [uid] ExitRoomNot uid
         */

        /**
         * Constructs a new ExitRoomNot.
         * @memberof gamebase
         * @classdesc Represents an ExitRoomNot.
         * @implements IExitRoomNot
         * @constructor
         * @param {gamebase.IExitRoomNot=} [properties] Properties to set
         */
        function ExitRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.ExitRoomNot
         * @instance
         */
        ExitRoomNot.prototype.roomId = "";

        /**
         * ExitRoomNot uid.
         * @member {number|Long} uid
         * @memberof gamebase.ExitRoomNot
         * @instance
         */
        ExitRoomNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ExitRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot=} [properties] Properties to set
         * @returns {gamebase.ExitRoomNot} ExitRoomNot instance
         */
        ExitRoomNot.create = function create(properties) {
            return new ExitRoomNot(properties);
        };

        /**
         * Encodes the specified ExitRoomNot message. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot} message ExitRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomNot message, length delimited. Does not implicitly {@link gamebase.ExitRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.IExitRoomNot} message ExitRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ExitRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
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
         * Decodes an ExitRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomNot message.
         * @function verify
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates an ExitRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ExitRoomNot} ExitRoomNot
         */
        ExitRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ExitRoomNot)
                return object;
            var message = new $root.gamebase.ExitRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
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
         * Creates a plain object from an ExitRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ExitRoomNot
         * @static
         * @param {gamebase.ExitRoomNot} message ExitRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this ExitRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.ExitRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomNot;
    })();

    gamebase.ChangeRoomReq = (function() {

        /**
         * Properties of a ChangeRoomReq.
         * @memberof gamebase
         * @interface IChangeRoomReq
         */

        /**
         * Constructs a new ChangeRoomReq.
         * @memberof gamebase
         * @classdesc Represents a ChangeRoomReq.
         * @implements IChangeRoomReq
         * @constructor
         * @param {gamebase.IChangeRoomReq=} [properties] Properties to set
         */
        function ChangeRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ChangeRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {gamebase.IChangeRoomReq=} [properties] Properties to set
         * @returns {gamebase.ChangeRoomReq} ChangeRoomReq instance
         */
        ChangeRoomReq.create = function create(properties) {
            return new ChangeRoomReq(properties);
        };

        /**
         * Encodes the specified ChangeRoomReq message. Does not implicitly {@link gamebase.ChangeRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {gamebase.IChangeRoomReq} message ChangeRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ChangeRoomReq message, length delimited. Does not implicitly {@link gamebase.ChangeRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {gamebase.IChangeRoomReq} message ChangeRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ChangeRoomReq} ChangeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ChangeRoomReq();
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
         * Decodes a ChangeRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ChangeRoomReq} ChangeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeRoomReq message.
         * @function verify
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ChangeRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ChangeRoomReq} ChangeRoomReq
         */
        ChangeRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ChangeRoomReq)
                return object;
            return new $root.gamebase.ChangeRoomReq();
        };

        /**
         * Creates a plain object from a ChangeRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ChangeRoomReq
         * @static
         * @param {gamebase.ChangeRoomReq} message ChangeRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ChangeRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.ChangeRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeRoomReq;
    })();

    gamebase.ChangeRoomRsp = (function() {

        /**
         * Properties of a ChangeRoomRsp.
         * @memberof gamebase
         * @interface IChangeRoomRsp
         * @property {number|null} [errCode] ChangeRoomRsp errCode
         * @property {string|null} [errMsg] ChangeRoomRsp errMsg
         */

        /**
         * Constructs a new ChangeRoomRsp.
         * @memberof gamebase
         * @classdesc Represents a ChangeRoomRsp.
         * @implements IChangeRoomRsp
         * @constructor
         * @param {gamebase.IChangeRoomRsp=} [properties] Properties to set
         */
        function ChangeRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.ChangeRoomRsp
         * @instance
         */
        ChangeRoomRsp.prototype.errCode = 0;

        /**
         * ChangeRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.ChangeRoomRsp
         * @instance
         */
        ChangeRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new ChangeRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {gamebase.IChangeRoomRsp=} [properties] Properties to set
         * @returns {gamebase.ChangeRoomRsp} ChangeRoomRsp instance
         */
        ChangeRoomRsp.create = function create(properties) {
            return new ChangeRoomRsp(properties);
        };

        /**
         * Encodes the specified ChangeRoomRsp message. Does not implicitly {@link gamebase.ChangeRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {gamebase.IChangeRoomRsp} message ChangeRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified ChangeRoomRsp message, length delimited. Does not implicitly {@link gamebase.ChangeRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {gamebase.IChangeRoomRsp} message ChangeRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.ChangeRoomRsp} ChangeRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.ChangeRoomRsp();
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
         * Decodes a ChangeRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.ChangeRoomRsp} ChangeRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeRoomRsp message.
         * @function verify
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeRoomRsp.verify = function verify(message) {
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
         * Creates a ChangeRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.ChangeRoomRsp} ChangeRoomRsp
         */
        ChangeRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.ChangeRoomRsp)
                return object;
            var message = new $root.gamebase.ChangeRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a ChangeRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.ChangeRoomRsp
         * @static
         * @param {gamebase.ChangeRoomRsp} message ChangeRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this ChangeRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.ChangeRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeRoomRsp;
    })();

    gamebase.KickPlayerReq = (function() {

        /**
         * Properties of a KickPlayerReq.
         * @memberof gamebase
         * @interface IKickPlayerReq
         * @property {number|Long|null} [uid] KickPlayerReq uid
         */

        /**
         * Constructs a new KickPlayerReq.
         * @memberof gamebase
         * @classdesc Represents a KickPlayerReq.
         * @implements IKickPlayerReq
         * @constructor
         * @param {gamebase.IKickPlayerReq=} [properties] Properties to set
         */
        function KickPlayerReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickPlayerReq uid.
         * @member {number|Long} uid
         * @memberof gamebase.KickPlayerReq
         * @instance
         */
        KickPlayerReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new KickPlayerReq instance using the specified properties.
         * @function create
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {gamebase.IKickPlayerReq=} [properties] Properties to set
         * @returns {gamebase.KickPlayerReq} KickPlayerReq instance
         */
        KickPlayerReq.create = function create(properties) {
            return new KickPlayerReq(properties);
        };

        /**
         * Encodes the specified KickPlayerReq message. Does not implicitly {@link gamebase.KickPlayerReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {gamebase.IKickPlayerReq} message KickPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified KickPlayerReq message, length delimited. Does not implicitly {@link gamebase.KickPlayerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {gamebase.IKickPlayerReq} message KickPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickPlayerReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.KickPlayerReq} KickPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.KickPlayerReq();
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
         * Decodes a KickPlayerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.KickPlayerReq} KickPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickPlayerReq message.
         * @function verify
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickPlayerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a KickPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.KickPlayerReq} KickPlayerReq
         */
        KickPlayerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.KickPlayerReq)
                return object;
            var message = new $root.gamebase.KickPlayerReq();
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
         * Creates a plain object from a KickPlayerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.KickPlayerReq
         * @static
         * @param {gamebase.KickPlayerReq} message KickPlayerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickPlayerReq.toObject = function toObject(message, options) {
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
         * Converts this KickPlayerReq to JSON.
         * @function toJSON
         * @memberof gamebase.KickPlayerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickPlayerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickPlayerReq;
    })();

    gamebase.KickPlayerRsp = (function() {

        /**
         * Properties of a KickPlayerRsp.
         * @memberof gamebase
         * @interface IKickPlayerRsp
         * @property {number|null} [errCode] KickPlayerRsp errCode
         * @property {string|null} [errMsg] KickPlayerRsp errMsg
         */

        /**
         * Constructs a new KickPlayerRsp.
         * @memberof gamebase
         * @classdesc Represents a KickPlayerRsp.
         * @implements IKickPlayerRsp
         * @constructor
         * @param {gamebase.IKickPlayerRsp=} [properties] Properties to set
         */
        function KickPlayerRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickPlayerRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.KickPlayerRsp
         * @instance
         */
        KickPlayerRsp.prototype.errCode = 0;

        /**
         * KickPlayerRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.KickPlayerRsp
         * @instance
         */
        KickPlayerRsp.prototype.errMsg = "";

        /**
         * Creates a new KickPlayerRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {gamebase.IKickPlayerRsp=} [properties] Properties to set
         * @returns {gamebase.KickPlayerRsp} KickPlayerRsp instance
         */
        KickPlayerRsp.create = function create(properties) {
            return new KickPlayerRsp(properties);
        };

        /**
         * Encodes the specified KickPlayerRsp message. Does not implicitly {@link gamebase.KickPlayerRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {gamebase.IKickPlayerRsp} message KickPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified KickPlayerRsp message, length delimited. Does not implicitly {@link gamebase.KickPlayerRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {gamebase.IKickPlayerRsp} message KickPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickPlayerRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.KickPlayerRsp} KickPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.KickPlayerRsp();
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
         * Decodes a KickPlayerRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.KickPlayerRsp} KickPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickPlayerRsp message.
         * @function verify
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickPlayerRsp.verify = function verify(message) {
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
         * Creates a KickPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.KickPlayerRsp} KickPlayerRsp
         */
        KickPlayerRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.KickPlayerRsp)
                return object;
            var message = new $root.gamebase.KickPlayerRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a KickPlayerRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.KickPlayerRsp
         * @static
         * @param {gamebase.KickPlayerRsp} message KickPlayerRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickPlayerRsp.toObject = function toObject(message, options) {
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
         * Converts this KickPlayerRsp to JSON.
         * @function toJSON
         * @memberof gamebase.KickPlayerRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickPlayerRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickPlayerRsp;
    })();

    gamebase.KickPlayerNot = (function() {

        /**
         * Properties of a KickPlayerNot.
         * @memberof gamebase
         * @interface IKickPlayerNot
         * @property {number|null} [reason] KickPlayerNot reason
         * @property {string|null} [msg] KickPlayerNot msg
         */

        /**
         * Constructs a new KickPlayerNot.
         * @memberof gamebase
         * @classdesc Represents a KickPlayerNot.
         * @implements IKickPlayerNot
         * @constructor
         * @param {gamebase.IKickPlayerNot=} [properties] Properties to set
         */
        function KickPlayerNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickPlayerNot reason.
         * @member {number} reason
         * @memberof gamebase.KickPlayerNot
         * @instance
         */
        KickPlayerNot.prototype.reason = 0;

        /**
         * KickPlayerNot msg.
         * @member {string} msg
         * @memberof gamebase.KickPlayerNot
         * @instance
         */
        KickPlayerNot.prototype.msg = "";

        /**
         * Creates a new KickPlayerNot instance using the specified properties.
         * @function create
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot=} [properties] Properties to set
         * @returns {gamebase.KickPlayerNot} KickPlayerNot instance
         */
        KickPlayerNot.create = function create(properties) {
            return new KickPlayerNot(properties);
        };

        /**
         * Encodes the specified KickPlayerNot message. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot} message KickPlayerNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified KickPlayerNot message, length delimited. Does not implicitly {@link gamebase.KickPlayerNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.IKickPlayerNot} message KickPlayerNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPlayerNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.KickPlayerNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickPlayerNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPlayerNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickPlayerNot message.
         * @function verify
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickPlayerNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a KickPlayerNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.KickPlayerNot} KickPlayerNot
         */
        KickPlayerNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.KickPlayerNot)
                return object;
            var message = new $root.gamebase.KickPlayerNot();
            if (object.reason != null)
                message.reason = object.reason | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a KickPlayerNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.KickPlayerNot
         * @static
         * @param {gamebase.KickPlayerNot} message KickPlayerNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickPlayerNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.msg = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this KickPlayerNot to JSON.
         * @function toJSON
         * @memberof gamebase.KickPlayerNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickPlayerNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickPlayerNot;
    })();

    gamebase.DismissRoomReq = (function() {

        /**
         * Properties of a DismissRoomReq.
         * @memberof gamebase
         * @interface IDismissRoomReq
         * @property {string|null} [roomId] DismissRoomReq roomId
         */

        /**
         * Constructs a new DismissRoomReq.
         * @memberof gamebase
         * @classdesc Represents a DismissRoomReq.
         * @implements IDismissRoomReq
         * @constructor
         * @param {gamebase.IDismissRoomReq=} [properties] Properties to set
         */
        function DismissRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomReq roomId.
         * @member {string} roomId
         * @memberof gamebase.DismissRoomReq
         * @instance
         */
        DismissRoomReq.prototype.roomId = "";

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq=} [properties] Properties to set
         * @returns {gamebase.DismissRoomReq} DismissRoomReq instance
         */
        DismissRoomReq.create = function create(properties) {
            return new DismissRoomReq(properties);
        };

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gamebase.DismissRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.DismissRoomReq();
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
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomReq message.
         * @function verify
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.DismissRoomReq} DismissRoomReq
         */
        DismissRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.DismissRoomReq)
                return object;
            var message = new $root.gamebase.DismissRoomReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.DismissRoomReq
         * @static
         * @param {gamebase.DismissRoomReq} message DismissRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomReq.toObject = function toObject(message, options) {
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
         * Converts this DismissRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.DismissRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomReq;
    })();

    gamebase.DismissRoomRsp = (function() {

        /**
         * Properties of a DismissRoomRsp.
         * @memberof gamebase
         * @interface IDismissRoomRsp
         * @property {number|null} [errCode] DismissRoomRsp errCode
         * @property {string|null} [errMsg] DismissRoomRsp errMsg
         */

        /**
         * Constructs a new DismissRoomRsp.
         * @memberof gamebase
         * @classdesc Represents a DismissRoomRsp.
         * @implements IDismissRoomRsp
         * @constructor
         * @param {gamebase.IDismissRoomRsp=} [properties] Properties to set
         */
        function DismissRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.DismissRoomRsp
         * @instance
         */
        DismissRoomRsp.prototype.errCode = 0;

        /**
         * DismissRoomRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.DismissRoomRsp
         * @instance
         */
        DismissRoomRsp.prototype.errMsg = "";

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp=} [properties] Properties to set
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp instance
         */
        DismissRoomRsp.create = function create(properties) {
            return new DismissRoomRsp(properties);
        };

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gamebase.DismissRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.DismissRoomRsp();
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
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomRsp message.
         * @function verify
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomRsp.verify = function verify(message) {
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
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.DismissRoomRsp} DismissRoomRsp
         */
        DismissRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.DismissRoomRsp)
                return object;
            var message = new $root.gamebase.DismissRoomRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.DismissRoomRsp
         * @static
         * @param {gamebase.DismissRoomRsp} message DismissRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomRsp.toObject = function toObject(message, options) {
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
         * Converts this DismissRoomRsp to JSON.
         * @function toJSON
         * @memberof gamebase.DismissRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomRsp;
    })();

    gamebase.SetRoomPlayerReq = (function() {

        /**
         * Properties of a SetRoomPlayerReq.
         * @memberof gamebase
         * @interface ISetRoomPlayerReq
         * @property {string|null} [roomId] SetRoomPlayerReq roomId
         * @property {Array.<number|Long>|null} [players] SetRoomPlayerReq players
         */

        /**
         * Constructs a new SetRoomPlayerReq.
         * @memberof gamebase
         * @classdesc Represents a SetRoomPlayerReq.
         * @implements ISetRoomPlayerReq
         * @constructor
         * @param {gamebase.ISetRoomPlayerReq=} [properties] Properties to set
         */
        function SetRoomPlayerReq(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetRoomPlayerReq roomId.
         * @member {string} roomId
         * @memberof gamebase.SetRoomPlayerReq
         * @instance
         */
        SetRoomPlayerReq.prototype.roomId = "";

        /**
         * SetRoomPlayerReq players.
         * @member {Array.<number|Long>} players
         * @memberof gamebase.SetRoomPlayerReq
         * @instance
         */
        SetRoomPlayerReq.prototype.players = $util.emptyArray;

        /**
         * Creates a new SetRoomPlayerReq instance using the specified properties.
         * @function create
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {gamebase.ISetRoomPlayerReq=} [properties] Properties to set
         * @returns {gamebase.SetRoomPlayerReq} SetRoomPlayerReq instance
         */
        SetRoomPlayerReq.create = function create(properties) {
            return new SetRoomPlayerReq(properties);
        };

        /**
         * Encodes the specified SetRoomPlayerReq message. Does not implicitly {@link gamebase.SetRoomPlayerReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {gamebase.ISetRoomPlayerReq} message SetRoomPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRoomPlayerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.players != null && message.players.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.players.length; ++i)
                    writer.int64(message.players[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SetRoomPlayerReq message, length delimited. Does not implicitly {@link gamebase.SetRoomPlayerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {gamebase.ISetRoomPlayerReq} message SetRoomPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRoomPlayerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetRoomPlayerReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.SetRoomPlayerReq} SetRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRoomPlayerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.SetRoomPlayerReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.players.push(reader.int64());
                    } else
                        message.players.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetRoomPlayerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.SetRoomPlayerReq} SetRoomPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRoomPlayerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetRoomPlayerReq message.
         * @function verify
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetRoomPlayerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i)
                    if (!$util.isInteger(message.players[i]) && !(message.players[i] && $util.isInteger(message.players[i].low) && $util.isInteger(message.players[i].high)))
                        return "players: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SetRoomPlayerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.SetRoomPlayerReq} SetRoomPlayerReq
         */
        SetRoomPlayerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.SetRoomPlayerReq)
                return object;
            var message = new $root.gamebase.SetRoomPlayerReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gamebase.SetRoomPlayerReq.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i)
                    if ($util.Long)
                        (message.players[i] = $util.Long.fromValue(object.players[i])).unsigned = false;
                    else if (typeof object.players[i] === "string")
                        message.players[i] = parseInt(object.players[i], 10);
                    else if (typeof object.players[i] === "number")
                        message.players[i] = object.players[i];
                    else if (typeof object.players[i] === "object")
                        message.players[i] = new $util.LongBits(object.players[i].low >>> 0, object.players[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a SetRoomPlayerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.SetRoomPlayerReq
         * @static
         * @param {gamebase.SetRoomPlayerReq} message SetRoomPlayerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetRoomPlayerReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    if (typeof message.players[j] === "number")
                        object.players[j] = options.longs === String ? String(message.players[j]) : message.players[j];
                    else
                        object.players[j] = options.longs === String ? $util.Long.prototype.toString.call(message.players[j]) : options.longs === Number ? new $util.LongBits(message.players[j].low >>> 0, message.players[j].high >>> 0).toNumber() : message.players[j];
            }
            return object;
        };

        /**
         * Converts this SetRoomPlayerReq to JSON.
         * @function toJSON
         * @memberof gamebase.SetRoomPlayerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetRoomPlayerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetRoomPlayerReq;
    })();

    gamebase.SetRoomPlayerRsp = (function() {

        /**
         * Properties of a SetRoomPlayerRsp.
         * @memberof gamebase
         * @interface ISetRoomPlayerRsp
         * @property {number|null} [errCode] SetRoomPlayerRsp errCode
         * @property {string|null} [errMsg] SetRoomPlayerRsp errMsg
         */

        /**
         * Constructs a new SetRoomPlayerRsp.
         * @memberof gamebase
         * @classdesc Represents a SetRoomPlayerRsp.
         * @implements ISetRoomPlayerRsp
         * @constructor
         * @param {gamebase.ISetRoomPlayerRsp=} [properties] Properties to set
         */
        function SetRoomPlayerRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetRoomPlayerRsp errCode.
         * @member {number} errCode
         * @memberof gamebase.SetRoomPlayerRsp
         * @instance
         */
        SetRoomPlayerRsp.prototype.errCode = 0;

        /**
         * SetRoomPlayerRsp errMsg.
         * @member {string} errMsg
         * @memberof gamebase.SetRoomPlayerRsp
         * @instance
         */
        SetRoomPlayerRsp.prototype.errMsg = "";

        /**
         * Creates a new SetRoomPlayerRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {gamebase.ISetRoomPlayerRsp=} [properties] Properties to set
         * @returns {gamebase.SetRoomPlayerRsp} SetRoomPlayerRsp instance
         */
        SetRoomPlayerRsp.create = function create(properties) {
            return new SetRoomPlayerRsp(properties);
        };

        /**
         * Encodes the specified SetRoomPlayerRsp message. Does not implicitly {@link gamebase.SetRoomPlayerRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {gamebase.ISetRoomPlayerRsp} message SetRoomPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRoomPlayerRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified SetRoomPlayerRsp message, length delimited. Does not implicitly {@link gamebase.SetRoomPlayerRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {gamebase.ISetRoomPlayerRsp} message SetRoomPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRoomPlayerRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetRoomPlayerRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.SetRoomPlayerRsp} SetRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRoomPlayerRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.SetRoomPlayerRsp();
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
         * Decodes a SetRoomPlayerRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.SetRoomPlayerRsp} SetRoomPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRoomPlayerRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetRoomPlayerRsp message.
         * @function verify
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetRoomPlayerRsp.verify = function verify(message) {
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
         * Creates a SetRoomPlayerRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.SetRoomPlayerRsp} SetRoomPlayerRsp
         */
        SetRoomPlayerRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.SetRoomPlayerRsp)
                return object;
            var message = new $root.gamebase.SetRoomPlayerRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a SetRoomPlayerRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.SetRoomPlayerRsp
         * @static
         * @param {gamebase.SetRoomPlayerRsp} message SetRoomPlayerRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetRoomPlayerRsp.toObject = function toObject(message, options) {
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
         * Converts this SetRoomPlayerRsp to JSON.
         * @function toJSON
         * @memberof gamebase.SetRoomPlayerRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetRoomPlayerRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetRoomPlayerRsp;
    })();

    gamebase.GetRoomInfoReq = (function() {

        /**
         * Properties of a GetRoomInfoReq.
         * @memberof gamebase
         * @interface IGetRoomInfoReq
         * @property {string|null} [roomId] GetRoomInfoReq roomId
         */

        /**
         * Constructs a new GetRoomInfoReq.
         * @memberof gamebase
         * @classdesc Represents a GetRoomInfoReq.
         * @implements IGetRoomInfoReq
         * @constructor
         * @param {gamebase.IGetRoomInfoReq=} [properties] Properties to set
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
         * @memberof gamebase.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.roomId = "";

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {gamebase.IGetRoomInfoReq=} [properties] Properties to set
         * @returns {gamebase.GetRoomInfoReq} GetRoomInfoReq instance
         */
        GetRoomInfoReq.create = function create(properties) {
            return new GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gamebase.GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {gamebase.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
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
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gamebase.GetRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {gamebase.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.GetRoomInfoReq();
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
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.GetRoomInfoReq} GetRoomInfoReq
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
         * @memberof gamebase.GetRoomInfoReq
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
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.GetRoomInfoReq} GetRoomInfoReq
         */
        GetRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.GetRoomInfoReq)
                return object;
            var message = new $root.gamebase.GetRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.GetRoomInfoReq
         * @static
         * @param {gamebase.GetRoomInfoReq} message GetRoomInfoReq
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
         * @memberof gamebase.GetRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoReq;
    })();

    gamebase.GetRoomInfoRsp = (function() {

        /**
         * Properties of a GetRoomInfoRsp.
         * @memberof gamebase
         * @interface IGetRoomInfoRsp
         * @property {gamebase.IRoomInfo|null} [roomInfo] GetRoomInfoRsp roomInfo
         */

        /**
         * Constructs a new GetRoomInfoRsp.
         * @memberof gamebase
         * @classdesc Represents a GetRoomInfoRsp.
         * @implements IGetRoomInfoRsp
         * @constructor
         * @param {gamebase.IGetRoomInfoRsp=} [properties] Properties to set
         */
        function GetRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoRsp roomInfo.
         * @member {gamebase.IRoomInfo|null|undefined} roomInfo
         * @memberof gamebase.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.roomInfo = null;

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {gamebase.IGetRoomInfoRsp=} [properties] Properties to set
         * @returns {gamebase.GetRoomInfoRsp} GetRoomInfoRsp instance
         */
        GetRoomInfoRsp.create = function create(properties) {
            return new GetRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gamebase.GetRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {gamebase.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.gamebase.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gamebase.GetRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {gamebase.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.GetRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomInfo = $root.gamebase.RoomInfo.decode(reader, reader.uint32());
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
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.GetRoomInfoRsp} GetRoomInfoRsp
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
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                var error = $root.gamebase.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.GetRoomInfoRsp} GetRoomInfoRsp
         */
        GetRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.GetRoomInfoRsp)
                return object;
            var message = new $root.gamebase.GetRoomInfoRsp();
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".gamebase.GetRoomInfoRsp.roomInfo: object expected");
                message.roomInfo = $root.gamebase.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.GetRoomInfoRsp
         * @static
         * @param {gamebase.GetRoomInfoRsp} message GetRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomInfo = null;
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
                object.roomInfo = $root.gamebase.RoomInfo.toObject(message.roomInfo, options);
            return object;
        };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof gamebase.GetRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomInfoRsp;
    })();

    gamebase.EventGameResultNot = (function() {

        /**
         * Properties of an EventGameResultNot.
         * @memberof gamebase
         * @interface IEventGameResultNot
         * @property {string|null} [gameId] EventGameResultNot gameId
         * @property {string|null} [rule] EventGameResultNot rule
         * @property {number|Long|null} [uid] EventGameResultNot uid
         * @property {string|null} [roomId] EventGameResultNot roomId
         * @property {number|null} [round] EventGameResultNot round
         * @property {number|Long|null} [checkoutTime] EventGameResultNot checkoutTime
         * @property {string|null} [reason] EventGameResultNot reason
         * @property {Object.<string,number|Long>|null} [itemChanges] EventGameResultNot itemChanges
         * @property {Object.<string,string>|null} [params] EventGameResultNot params
         */

        /**
         * Constructs a new EventGameResultNot.
         * @memberof gamebase
         * @classdesc Represents an EventGameResultNot.
         * @implements IEventGameResultNot
         * @constructor
         * @param {gamebase.IEventGameResultNot=} [properties] Properties to set
         */
        function EventGameResultNot(properties) {
            this.itemChanges = {};
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventGameResultNot gameId.
         * @member {string} gameId
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.gameId = "";

        /**
         * EventGameResultNot rule.
         * @member {string} rule
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.rule = "";

        /**
         * EventGameResultNot uid.
         * @member {number|Long} uid
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EventGameResultNot roomId.
         * @member {string} roomId
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.roomId = "";

        /**
         * EventGameResultNot round.
         * @member {number} round
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.round = 0;

        /**
         * EventGameResultNot checkoutTime.
         * @member {number|Long} checkoutTime
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.checkoutTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EventGameResultNot reason.
         * @member {string} reason
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.reason = "";

        /**
         * EventGameResultNot itemChanges.
         * @member {Object.<string,number|Long>} itemChanges
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.itemChanges = $util.emptyObject;

        /**
         * EventGameResultNot params.
         * @member {Object.<string,string>} params
         * @memberof gamebase.EventGameResultNot
         * @instance
         */
        EventGameResultNot.prototype.params = $util.emptyObject;

        /**
         * Creates a new EventGameResultNot instance using the specified properties.
         * @function create
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {gamebase.IEventGameResultNot=} [properties] Properties to set
         * @returns {gamebase.EventGameResultNot} EventGameResultNot instance
         */
        EventGameResultNot.create = function create(properties) {
            return new EventGameResultNot(properties);
        };

        /**
         * Encodes the specified EventGameResultNot message. Does not implicitly {@link gamebase.EventGameResultNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {gamebase.IEventGameResultNot} message EventGameResultNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventGameResultNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.rule != null && Object.hasOwnProperty.call(message, "rule"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rule);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomId);
            if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.round);
            if (message.checkoutTime != null && Object.hasOwnProperty.call(message, "checkoutTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.checkoutTime);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.reason);
            if (message.itemChanges != null && Object.hasOwnProperty.call(message, "itemChanges"))
                for (var keys = Object.keys(message.itemChanges), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.itemChanges[keys[i]]).ldelim();
            if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventGameResultNot message, length delimited. Does not implicitly {@link gamebase.EventGameResultNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {gamebase.IEventGameResultNot} message EventGameResultNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventGameResultNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventGameResultNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EventGameResultNot} EventGameResultNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventGameResultNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EventGameResultNot(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.string();
                    break;
                case 2:
                    message.rule = reader.string();
                    break;
                case 3:
                    message.uid = reader.int64();
                    break;
                case 4:
                    message.roomId = reader.string();
                    break;
                case 5:
                    message.round = reader.int32();
                    break;
                case 6:
                    message.checkoutTime = reader.int64();
                    break;
                case 7:
                    message.reason = reader.string();
                    break;
                case 14:
                    if (message.itemChanges === $util.emptyObject)
                        message.itemChanges = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int32();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.itemChanges[key] = value;
                    break;
                case 15:
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
         * Decodes an EventGameResultNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EventGameResultNot} EventGameResultNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventGameResultNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventGameResultNot message.
         * @function verify
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventGameResultNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.rule != null && message.hasOwnProperty("rule"))
                if (!$util.isString(message.rule))
                    return "rule: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.checkoutTime != null && message.hasOwnProperty("checkoutTime"))
                if (!$util.isInteger(message.checkoutTime) && !(message.checkoutTime && $util.isInteger(message.checkoutTime.low) && $util.isInteger(message.checkoutTime.high)))
                    return "checkoutTime: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.itemChanges != null && message.hasOwnProperty("itemChanges")) {
                if (!$util.isObject(message.itemChanges))
                    return "itemChanges: object expected";
                var key = Object.keys(message.itemChanges);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "itemChanges: integer key{k:int32} expected";
                    if (!$util.isInteger(message.itemChanges[key[i]]) && !(message.itemChanges[key[i]] && $util.isInteger(message.itemChanges[key[i]].low) && $util.isInteger(message.itemChanges[key[i]].high)))
                        return "itemChanges: integer|Long{k:int32} expected";
                }
            }
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
         * Creates an EventGameResultNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EventGameResultNot} EventGameResultNot
         */
        EventGameResultNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EventGameResultNot)
                return object;
            var message = new $root.gamebase.EventGameResultNot();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.rule != null)
                message.rule = String(object.rule);
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
            if (object.round != null)
                message.round = object.round | 0;
            if (object.checkoutTime != null)
                if ($util.Long)
                    (message.checkoutTime = $util.Long.fromValue(object.checkoutTime)).unsigned = false;
                else if (typeof object.checkoutTime === "string")
                    message.checkoutTime = parseInt(object.checkoutTime, 10);
                else if (typeof object.checkoutTime === "number")
                    message.checkoutTime = object.checkoutTime;
                else if (typeof object.checkoutTime === "object")
                    message.checkoutTime = new $util.LongBits(object.checkoutTime.low >>> 0, object.checkoutTime.high >>> 0).toNumber();
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.itemChanges) {
                if (typeof object.itemChanges !== "object")
                    throw TypeError(".gamebase.EventGameResultNot.itemChanges: object expected");
                message.itemChanges = {};
                for (var keys = Object.keys(object.itemChanges), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.itemChanges[keys[i]] = $util.Long.fromValue(object.itemChanges[keys[i]])).unsigned = false;
                    else if (typeof object.itemChanges[keys[i]] === "string")
                        message.itemChanges[keys[i]] = parseInt(object.itemChanges[keys[i]], 10);
                    else if (typeof object.itemChanges[keys[i]] === "number")
                        message.itemChanges[keys[i]] = object.itemChanges[keys[i]];
                    else if (typeof object.itemChanges[keys[i]] === "object")
                        message.itemChanges[keys[i]] = new $util.LongBits(object.itemChanges[keys[i]].low >>> 0, object.itemChanges[keys[i]].high >>> 0).toNumber();
            }
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".gamebase.EventGameResultNot.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an EventGameResultNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EventGameResultNot
         * @static
         * @param {gamebase.EventGameResultNot} message EventGameResultNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventGameResultNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.itemChanges = {};
                object.params = {};
            }
            if (options.defaults) {
                object.gameId = "";
                object.rule = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.roomId = "";
                object.round = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.checkoutTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.checkoutTime = options.longs === String ? "0" : 0;
                object.reason = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.rule != null && message.hasOwnProperty("rule"))
                object.rule = message.rule;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.checkoutTime != null && message.hasOwnProperty("checkoutTime"))
                if (typeof message.checkoutTime === "number")
                    object.checkoutTime = options.longs === String ? String(message.checkoutTime) : message.checkoutTime;
                else
                    object.checkoutTime = options.longs === String ? $util.Long.prototype.toString.call(message.checkoutTime) : options.longs === Number ? new $util.LongBits(message.checkoutTime.low >>> 0, message.checkoutTime.high >>> 0).toNumber() : message.checkoutTime;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            var keys2;
            if (message.itemChanges && (keys2 = Object.keys(message.itemChanges)).length) {
                object.itemChanges = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.itemChanges[keys2[j]] === "number")
                        object.itemChanges[keys2[j]] = options.longs === String ? String(message.itemChanges[keys2[j]]) : message.itemChanges[keys2[j]];
                    else
                        object.itemChanges[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.itemChanges[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.itemChanges[keys2[j]].low >>> 0, message.itemChanges[keys2[j]].high >>> 0).toNumber() : message.itemChanges[keys2[j]];
            }
            if (message.params && (keys2 = Object.keys(message.params)).length) {
                object.params = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.params[keys2[j]] = message.params[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this EventGameResultNot to JSON.
         * @function toJSON
         * @memberof gamebase.EventGameResultNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventGameResultNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventGameResultNot;
    })();

    gamebase.EventPlayerEnterRoom = (function() {

        /**
         * Properties of an EventPlayerEnterRoom.
         * @memberof gamebase
         * @interface IEventPlayerEnterRoom
         * @property {string|null} [gameId] EventPlayerEnterRoom gameId
         * @property {string|null} [ruleId] EventPlayerEnterRoom ruleId
         * @property {number|Long|null} [uid] EventPlayerEnterRoom uid
         * @property {string|null} [roomId] EventPlayerEnterRoom roomId
         * @property {string|null} [serverId] EventPlayerEnterRoom serverId
         */

        /**
         * Constructs a new EventPlayerEnterRoom.
         * @memberof gamebase
         * @classdesc Represents an EventPlayerEnterRoom.
         * @implements IEventPlayerEnterRoom
         * @constructor
         * @param {gamebase.IEventPlayerEnterRoom=} [properties] Properties to set
         */
        function EventPlayerEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventPlayerEnterRoom gameId.
         * @member {string} gameId
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         */
        EventPlayerEnterRoom.prototype.gameId = "";

        /**
         * EventPlayerEnterRoom ruleId.
         * @member {string} ruleId
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         */
        EventPlayerEnterRoom.prototype.ruleId = "";

        /**
         * EventPlayerEnterRoom uid.
         * @member {number|Long} uid
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         */
        EventPlayerEnterRoom.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EventPlayerEnterRoom roomId.
         * @member {string} roomId
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         */
        EventPlayerEnterRoom.prototype.roomId = "";

        /**
         * EventPlayerEnterRoom serverId.
         * @member {string} serverId
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         */
        EventPlayerEnterRoom.prototype.serverId = "";

        /**
         * Creates a new EventPlayerEnterRoom instance using the specified properties.
         * @function create
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {gamebase.IEventPlayerEnterRoom=} [properties] Properties to set
         * @returns {gamebase.EventPlayerEnterRoom} EventPlayerEnterRoom instance
         */
        EventPlayerEnterRoom.create = function create(properties) {
            return new EventPlayerEnterRoom(properties);
        };

        /**
         * Encodes the specified EventPlayerEnterRoom message. Does not implicitly {@link gamebase.EventPlayerEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {gamebase.IEventPlayerEnterRoom} message EventPlayerEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPlayerEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serverId);
            return writer;
        };

        /**
         * Encodes the specified EventPlayerEnterRoom message, length delimited. Does not implicitly {@link gamebase.EventPlayerEnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {gamebase.IEventPlayerEnterRoom} message EventPlayerEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPlayerEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventPlayerEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EventPlayerEnterRoom} EventPlayerEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPlayerEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EventPlayerEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.uid = reader.int64();
                    break;
                case 4:
                    message.roomId = reader.string();
                    break;
                case 5:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventPlayerEnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EventPlayerEnterRoom} EventPlayerEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPlayerEnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventPlayerEnterRoom message.
         * @function verify
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventPlayerEnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            return null;
        };

        /**
         * Creates an EventPlayerEnterRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EventPlayerEnterRoom} EventPlayerEnterRoom
         */
        EventPlayerEnterRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EventPlayerEnterRoom)
                return object;
            var message = new $root.gamebase.EventPlayerEnterRoom();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
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
            return message;
        };

        /**
         * Creates a plain object from an EventPlayerEnterRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EventPlayerEnterRoom
         * @static
         * @param {gamebase.EventPlayerEnterRoom} message EventPlayerEnterRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventPlayerEnterRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = "";
                object.ruleId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.roomId = "";
                object.serverId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            return object;
        };

        /**
         * Converts this EventPlayerEnterRoom to JSON.
         * @function toJSON
         * @memberof gamebase.EventPlayerEnterRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventPlayerEnterRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventPlayerEnterRoom;
    })();

    gamebase.EventPlayerExitRoom = (function() {

        /**
         * Properties of an EventPlayerExitRoom.
         * @memberof gamebase
         * @interface IEventPlayerExitRoom
         * @property {string|null} [gameId] EventPlayerExitRoom gameId
         * @property {string|null} [ruleId] EventPlayerExitRoom ruleId
         * @property {number|Long|null} [uid] EventPlayerExitRoom uid
         * @property {string|null} [roomId] EventPlayerExitRoom roomId
         */

        /**
         * Constructs a new EventPlayerExitRoom.
         * @memberof gamebase
         * @classdesc Represents an EventPlayerExitRoom.
         * @implements IEventPlayerExitRoom
         * @constructor
         * @param {gamebase.IEventPlayerExitRoom=} [properties] Properties to set
         */
        function EventPlayerExitRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventPlayerExitRoom gameId.
         * @member {string} gameId
         * @memberof gamebase.EventPlayerExitRoom
         * @instance
         */
        EventPlayerExitRoom.prototype.gameId = "";

        /**
         * EventPlayerExitRoom ruleId.
         * @member {string} ruleId
         * @memberof gamebase.EventPlayerExitRoom
         * @instance
         */
        EventPlayerExitRoom.prototype.ruleId = "";

        /**
         * EventPlayerExitRoom uid.
         * @member {number|Long} uid
         * @memberof gamebase.EventPlayerExitRoom
         * @instance
         */
        EventPlayerExitRoom.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EventPlayerExitRoom roomId.
         * @member {string} roomId
         * @memberof gamebase.EventPlayerExitRoom
         * @instance
         */
        EventPlayerExitRoom.prototype.roomId = "";

        /**
         * Creates a new EventPlayerExitRoom instance using the specified properties.
         * @function create
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {gamebase.IEventPlayerExitRoom=} [properties] Properties to set
         * @returns {gamebase.EventPlayerExitRoom} EventPlayerExitRoom instance
         */
        EventPlayerExitRoom.create = function create(properties) {
            return new EventPlayerExitRoom(properties);
        };

        /**
         * Encodes the specified EventPlayerExitRoom message. Does not implicitly {@link gamebase.EventPlayerExitRoom.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {gamebase.IEventPlayerExitRoom} message EventPlayerExitRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPlayerExitRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ruleId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EventPlayerExitRoom message, length delimited. Does not implicitly {@link gamebase.EventPlayerExitRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {gamebase.IEventPlayerExitRoom} message EventPlayerExitRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPlayerExitRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventPlayerExitRoom message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EventPlayerExitRoom} EventPlayerExitRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPlayerExitRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EventPlayerExitRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.uid = reader.int64();
                    break;
                case 4:
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
         * Decodes an EventPlayerExitRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EventPlayerExitRoom} EventPlayerExitRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPlayerExitRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventPlayerExitRoom message.
         * @function verify
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventPlayerExitRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates an EventPlayerExitRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EventPlayerExitRoom} EventPlayerExitRoom
         */
        EventPlayerExitRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EventPlayerExitRoom)
                return object;
            var message = new $root.gamebase.EventPlayerExitRoom();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
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
            return message;
        };

        /**
         * Creates a plain object from an EventPlayerExitRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EventPlayerExitRoom
         * @static
         * @param {gamebase.EventPlayerExitRoom} message EventPlayerExitRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventPlayerExitRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = "";
                object.ruleId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.roomId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this EventPlayerExitRoom to JSON.
         * @function toJSON
         * @memberof gamebase.EventPlayerExitRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventPlayerExitRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventPlayerExitRoom;
    })();

    gamebase.EventCreateRoomNot = (function() {

        /**
         * Properties of an EventCreateRoomNot.
         * @memberof gamebase
         * @interface IEventCreateRoomNot
         * @property {string|null} [roomId] EventCreateRoomNot roomId
         * @property {string|null} [serverId] EventCreateRoomNot serverId
         * @property {string|null} [ruleId] EventCreateRoomNot ruleId
         * @property {string|null} [gameId] EventCreateRoomNot gameId
         * @property {number|null} [maxPlayerNum] EventCreateRoomNot maxPlayerNum
         * @property {number|Long|null} [createTime] EventCreateRoomNot createTime
         */

        /**
         * Constructs a new EventCreateRoomNot.
         * @memberof gamebase
         * @classdesc Represents an EventCreateRoomNot.
         * @implements IEventCreateRoomNot
         * @constructor
         * @param {gamebase.IEventCreateRoomNot=} [properties] Properties to set
         */
        function EventCreateRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventCreateRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.roomId = "";

        /**
         * EventCreateRoomNot serverId.
         * @member {string} serverId
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.serverId = "";

        /**
         * EventCreateRoomNot ruleId.
         * @member {string} ruleId
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.ruleId = "";

        /**
         * EventCreateRoomNot gameId.
         * @member {string} gameId
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.gameId = "";

        /**
         * EventCreateRoomNot maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.maxPlayerNum = 0;

        /**
         * EventCreateRoomNot createTime.
         * @member {number|Long} createTime
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         */
        EventCreateRoomNot.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new EventCreateRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {gamebase.IEventCreateRoomNot=} [properties] Properties to set
         * @returns {gamebase.EventCreateRoomNot} EventCreateRoomNot instance
         */
        EventCreateRoomNot.create = function create(properties) {
            return new EventCreateRoomNot(properties);
        };

        /**
         * Encodes the specified EventCreateRoomNot message. Does not implicitly {@link gamebase.EventCreateRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {gamebase.IEventCreateRoomNot} message EventCreateRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventCreateRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ruleId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameId);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxPlayerNum);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
            return writer;
        };

        /**
         * Encodes the specified EventCreateRoomNot message, length delimited. Does not implicitly {@link gamebase.EventCreateRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {gamebase.IEventCreateRoomNot} message EventCreateRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventCreateRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventCreateRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EventCreateRoomNot} EventCreateRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventCreateRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EventCreateRoomNot();
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
                    message.ruleId = reader.string();
                    break;
                case 4:
                    message.gameId = reader.string();
                    break;
                case 5:
                    message.maxPlayerNum = reader.int32();
                    break;
                case 6:
                    message.createTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventCreateRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EventCreateRoomNot} EventCreateRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventCreateRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventCreateRoomNot message.
         * @function verify
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventCreateRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            return null;
        };

        /**
         * Creates an EventCreateRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EventCreateRoomNot} EventCreateRoomNot
         */
        EventCreateRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EventCreateRoomNot)
                return object;
            var message = new $root.gamebase.EventCreateRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
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
            return message;
        };

        /**
         * Creates a plain object from an EventCreateRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EventCreateRoomNot
         * @static
         * @param {gamebase.EventCreateRoomNot} message EventCreateRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventCreateRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
                object.ruleId = "";
                object.gameId = "";
                object.maxPlayerNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            return object;
        };

        /**
         * Converts this EventCreateRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.EventCreateRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventCreateRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventCreateRoomNot;
    })();

    gamebase.EventDismissRoomNot = (function() {

        /**
         * Properties of an EventDismissRoomNot.
         * @memberof gamebase
         * @interface IEventDismissRoomNot
         * @property {string|null} [serverId] EventDismissRoomNot serverId
         * @property {string|null} [roomId] EventDismissRoomNot roomId
         * @property {string|null} [ruleId] EventDismissRoomNot ruleId
         */

        /**
         * Constructs a new EventDismissRoomNot.
         * @memberof gamebase
         * @classdesc Represents an EventDismissRoomNot.
         * @implements IEventDismissRoomNot
         * @constructor
         * @param {gamebase.IEventDismissRoomNot=} [properties] Properties to set
         */
        function EventDismissRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventDismissRoomNot serverId.
         * @member {string} serverId
         * @memberof gamebase.EventDismissRoomNot
         * @instance
         */
        EventDismissRoomNot.prototype.serverId = "";

        /**
         * EventDismissRoomNot roomId.
         * @member {string} roomId
         * @memberof gamebase.EventDismissRoomNot
         * @instance
         */
        EventDismissRoomNot.prototype.roomId = "";

        /**
         * EventDismissRoomNot ruleId.
         * @member {string} ruleId
         * @memberof gamebase.EventDismissRoomNot
         * @instance
         */
        EventDismissRoomNot.prototype.ruleId = "";

        /**
         * Creates a new EventDismissRoomNot instance using the specified properties.
         * @function create
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {gamebase.IEventDismissRoomNot=} [properties] Properties to set
         * @returns {gamebase.EventDismissRoomNot} EventDismissRoomNot instance
         */
        EventDismissRoomNot.create = function create(properties) {
            return new EventDismissRoomNot(properties);
        };

        /**
         * Encodes the specified EventDismissRoomNot message. Does not implicitly {@link gamebase.EventDismissRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {gamebase.IEventDismissRoomNot} message EventDismissRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventDismissRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serverId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ruleId);
            return writer;
        };

        /**
         * Encodes the specified EventDismissRoomNot message, length delimited. Does not implicitly {@link gamebase.EventDismissRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {gamebase.IEventDismissRoomNot} message EventDismissRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventDismissRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventDismissRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.EventDismissRoomNot} EventDismissRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventDismissRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.EventDismissRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                case 2:
                    message.roomId = reader.string();
                    break;
                case 3:
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
         * Decodes an EventDismissRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.EventDismissRoomNot} EventDismissRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventDismissRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventDismissRoomNot message.
         * @function verify
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventDismissRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            return null;
        };

        /**
         * Creates an EventDismissRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.EventDismissRoomNot} EventDismissRoomNot
         */
        EventDismissRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.EventDismissRoomNot)
                return object;
            var message = new $root.gamebase.EventDismissRoomNot();
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            return message;
        };

        /**
         * Creates a plain object from an EventDismissRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.EventDismissRoomNot
         * @static
         * @param {gamebase.EventDismissRoomNot} message EventDismissRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventDismissRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverId = "";
                object.roomId = "";
                object.ruleId = "";
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            return object;
        };

        /**
         * Converts this EventDismissRoomNot to JSON.
         * @function toJSON
         * @memberof gamebase.EventDismissRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventDismissRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventDismissRoomNot;
    })();

    gamebase.RoomMsgNot = (function() {

        /**
         * Properties of a RoomMsgNot.
         * @memberof gamebase
         * @interface IRoomMsgNot
         * @property {number|null} [code] RoomMsgNot code
         * @property {string|null} [reason] RoomMsgNot reason
         */

        /**
         * Constructs a new RoomMsgNot.
         * @memberof gamebase
         * @classdesc Represents a RoomMsgNot.
         * @implements IRoomMsgNot
         * @constructor
         * @param {gamebase.IRoomMsgNot=} [properties] Properties to set
         */
        function RoomMsgNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomMsgNot code.
         * @member {number} code
         * @memberof gamebase.RoomMsgNot
         * @instance
         */
        RoomMsgNot.prototype.code = 0;

        /**
         * RoomMsgNot reason.
         * @member {string} reason
         * @memberof gamebase.RoomMsgNot
         * @instance
         */
        RoomMsgNot.prototype.reason = "";

        /**
         * Creates a new RoomMsgNot instance using the specified properties.
         * @function create
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {gamebase.IRoomMsgNot=} [properties] Properties to set
         * @returns {gamebase.RoomMsgNot} RoomMsgNot instance
         */
        RoomMsgNot.create = function create(properties) {
            return new RoomMsgNot(properties);
        };

        /**
         * Encodes the specified RoomMsgNot message. Does not implicitly {@link gamebase.RoomMsgNot.verify|verify} messages.
         * @function encode
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {gamebase.IRoomMsgNot} message RoomMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMsgNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified RoomMsgNot message, length delimited. Does not implicitly {@link gamebase.RoomMsgNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {gamebase.IRoomMsgNot} message RoomMsgNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMsgNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomMsgNot message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.RoomMsgNot} RoomMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMsgNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.RoomMsgNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomMsgNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.RoomMsgNot} RoomMsgNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMsgNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomMsgNot message.
         * @function verify
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomMsgNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a RoomMsgNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.RoomMsgNot} RoomMsgNot
         */
        RoomMsgNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.RoomMsgNot)
                return object;
            var message = new $root.gamebase.RoomMsgNot();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a RoomMsgNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.RoomMsgNot
         * @static
         * @param {gamebase.RoomMsgNot} message RoomMsgNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomMsgNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.reason = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this RoomMsgNot to JSON.
         * @function toJSON
         * @memberof gamebase.RoomMsgNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomMsgNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomMsgNot;
    })();

    return gamebase;
})();

module.exports = $root.gamebase;
