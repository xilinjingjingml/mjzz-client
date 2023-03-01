/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.activity = (function() {

    /**
     * Namespace activity.
     * @exports activity
     * @namespace
     */
    var activity = {};

    activity.Activity = (function() {

        /**
         * Constructs a new Activity service.
         * @memberof activity
         * @classdesc Represents an Activity
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Activity(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Activity.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Activity;

        /**
         * Creates new Activity service using the specified rpc implementation.
         * @function create
         * @memberof activity.Activity
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Activity} RPC service. Useful where requests and/or responses are streamed.
         */
        Activity.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link activity.Activity#getActivityProgress}.
         * @memberof activity.Activity
         * @typedef GetActivityProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {activity.GetActivityProgressRsp} [response] GetActivityProgressRsp
         */

        /**
         * Calls GetActivityProgress.
         * @function getActivityProgress
         * @memberof activity.Activity
         * @instance
         * @param {activity.IGetActivityProgressReq} request GetActivityProgressReq message or plain object
         * @param {activity.Activity.GetActivityProgressCallback} callback Node-style callback called with the error, if any, and GetActivityProgressRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Activity.prototype.getActivityProgress = function getActivityProgress(request, callback) {
            return this.rpcCall(getActivityProgress, $root.activity.GetActivityProgressReq, $root.activity.GetActivityProgressRsp, request, callback);
        }, "name", { value: "GetActivityProgress" });

        /**
         * Calls GetActivityProgress.
         * @function getActivityProgress
         * @memberof activity.Activity
         * @instance
         * @param {activity.IGetActivityProgressReq} request GetActivityProgressReq message or plain object
         * @returns {Promise<activity.GetActivityProgressRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link activity.Activity#uptBcsAdState}.
         * @memberof activity.Activity
         * @typedef UptBcsAdStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {activity.UptBcsAdStateRsp} [response] UptBcsAdStateRsp
         */

        /**
         * Calls UptBcsAdState.
         * @function uptBcsAdState
         * @memberof activity.Activity
         * @instance
         * @param {activity.IUptBcsAdStateReq} request UptBcsAdStateReq message or plain object
         * @param {activity.Activity.UptBcsAdStateCallback} callback Node-style callback called with the error, if any, and UptBcsAdStateRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Activity.prototype.uptBcsAdState = function uptBcsAdState(request, callback) {
            return this.rpcCall(uptBcsAdState, $root.activity.UptBcsAdStateReq, $root.activity.UptBcsAdStateRsp, request, callback);
        }, "name", { value: "UptBcsAdState" });

        /**
         * Calls UptBcsAdState.
         * @function uptBcsAdState
         * @memberof activity.Activity
         * @instance
         * @param {activity.IUptBcsAdStateReq} request UptBcsAdStateReq message or plain object
         * @returns {Promise<activity.UptBcsAdStateRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link activity.Activity#getActivityAward}.
         * @memberof activity.Activity
         * @typedef GetActivityAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {activity.GetActivityAwardRsp} [response] GetActivityAwardRsp
         */

        /**
         * Calls GetActivityAward.
         * @function getActivityAward
         * @memberof activity.Activity
         * @instance
         * @param {activity.IGetActivityAwardReq} request GetActivityAwardReq message or plain object
         * @param {activity.Activity.GetActivityAwardCallback} callback Node-style callback called with the error, if any, and GetActivityAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Activity.prototype.getActivityAward = function getActivityAward(request, callback) {
            return this.rpcCall(getActivityAward, $root.activity.GetActivityAwardReq, $root.activity.GetActivityAwardRsp, request, callback);
        }, "name", { value: "GetActivityAward" });

        /**
         * Calls GetActivityAward.
         * @function getActivityAward
         * @memberof activity.Activity
         * @instance
         * @param {activity.IGetActivityAwardReq} request GetActivityAwardReq message or plain object
         * @returns {Promise<activity.GetActivityAwardRsp>} Promise
         * @variation 2
         */

        return Activity;
    })();

    activity.GetActivityProgressReq = (function() {

        /**
         * Properties of a GetActivityProgressReq.
         * @memberof activity
         * @interface IGetActivityProgressReq
         * @property {number|null} [type] GetActivityProgressReq type
         * @property {number|Long|null} [uid] GetActivityProgressReq uid
         */

        /**
         * Constructs a new GetActivityProgressReq.
         * @memberof activity
         * @classdesc Represents a GetActivityProgressReq.
         * @implements IGetActivityProgressReq
         * @constructor
         * @param {activity.IGetActivityProgressReq=} [properties] Properties to set
         */
        function GetActivityProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetActivityProgressReq type.
         * @member {number} type
         * @memberof activity.GetActivityProgressReq
         * @instance
         */
        GetActivityProgressReq.prototype.type = 0;

        /**
         * GetActivityProgressReq uid.
         * @member {number|Long} uid
         * @memberof activity.GetActivityProgressReq
         * @instance
         */
        GetActivityProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetActivityProgressReq instance using the specified properties.
         * @function create
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {activity.IGetActivityProgressReq=} [properties] Properties to set
         * @returns {activity.GetActivityProgressReq} GetActivityProgressReq instance
         */
        GetActivityProgressReq.create = function create(properties) {
            return new GetActivityProgressReq(properties);
        };

        /**
         * Encodes the specified GetActivityProgressReq message. Does not implicitly {@link activity.GetActivityProgressReq.verify|verify} messages.
         * @function encode
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {activity.IGetActivityProgressReq} message GetActivityProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetActivityProgressReq message, length delimited. Does not implicitly {@link activity.GetActivityProgressReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {activity.IGetActivityProgressReq} message GetActivityProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetActivityProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.GetActivityProgressReq} GetActivityProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.GetActivityProgressReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
         * Decodes a GetActivityProgressReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.GetActivityProgressReq} GetActivityProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityProgressReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetActivityProgressReq message.
         * @function verify
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetActivityProgressReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetActivityProgressReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.GetActivityProgressReq} GetActivityProgressReq
         */
        GetActivityProgressReq.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.GetActivityProgressReq)
                return object;
            var message = new $root.activity.GetActivityProgressReq();
            if (object.type != null)
                message.type = object.type | 0;
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
         * Creates a plain object from a GetActivityProgressReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.GetActivityProgressReq
         * @static
         * @param {activity.GetActivityProgressReq} message GetActivityProgressReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetActivityProgressReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this GetActivityProgressReq to JSON.
         * @function toJSON
         * @memberof activity.GetActivityProgressReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetActivityProgressReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetActivityProgressReq;
    })();

    activity.AwardItem = (function() {

        /**
         * Properties of an AwardItem.
         * @memberof activity
         * @interface IAwardItem
         * @property {number|null} [propId] AwardItem propId
         * @property {number|Long|null} [minNum] AwardItem minNum
         * @property {number|Long|null} [maxNum] AwardItem maxNum
         * @property {number|Long|null} [effectTime] AwardItem effectTime
         * @property {number|Long|null} [propIndex] AwardItem propIndex
         * @property {string|null} [tip] AwardItem tip
         */

        /**
         * Constructs a new AwardItem.
         * @memberof activity
         * @classdesc Represents an AwardItem.
         * @implements IAwardItem
         * @constructor
         * @param {activity.IAwardItem=} [properties] Properties to set
         */
        function AwardItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardItem propId.
         * @member {number} propId
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.propId = 0;

        /**
         * AwardItem minNum.
         * @member {number|Long} minNum
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.minNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem maxNum.
         * @member {number|Long} maxNum
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.maxNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem effectTime.
         * @member {number|Long} effectTime
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.effectTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem propIndex.
         * @member {number|Long} propIndex
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.propIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem tip.
         * @member {string} tip
         * @memberof activity.AwardItem
         * @instance
         */
        AwardItem.prototype.tip = "";

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @function create
         * @memberof activity.AwardItem
         * @static
         * @param {activity.IAwardItem=} [properties] Properties to set
         * @returns {activity.AwardItem} AwardItem instance
         */
        AwardItem.create = function create(properties) {
            return new AwardItem(properties);
        };

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link activity.AwardItem.verify|verify} messages.
         * @function encode
         * @memberof activity.AwardItem
         * @static
         * @param {activity.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.propId != null && message.hasOwnProperty("propId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minNum);
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxNum);
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.effectTime);
            if (message.propIndex != null && message.hasOwnProperty("propIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.propIndex);
            if (message.tip != null && message.hasOwnProperty("tip"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tip);
            return writer;
        };

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link activity.AwardItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.AwardItem
         * @static
         * @param {activity.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof activity.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.AwardItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propId = reader.int32();
                    break;
                case 2:
                    message.minNum = reader.int64();
                    break;
                case 3:
                    message.maxNum = reader.int64();
                    break;
                case 4:
                    message.effectTime = reader.int64();
                    break;
                case 5:
                    message.propIndex = reader.int64();
                    break;
                case 6:
                    message.tip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardItem message.
         * @function verify
         * @memberof activity.AwardItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.propId != null && message.hasOwnProperty("propId"))
                if (!$util.isInteger(message.propId))
                    return "propId: integer expected";
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                if (!$util.isInteger(message.minNum) && !(message.minNum && $util.isInteger(message.minNum.low) && $util.isInteger(message.minNum.high)))
                    return "minNum: integer|Long expected";
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (!$util.isInteger(message.maxNum) && !(message.maxNum && $util.isInteger(message.maxNum.low) && $util.isInteger(message.maxNum.high)))
                    return "maxNum: integer|Long expected";
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                if (!$util.isInteger(message.effectTime) && !(message.effectTime && $util.isInteger(message.effectTime.low) && $util.isInteger(message.effectTime.high)))
                    return "effectTime: integer|Long expected";
            if (message.propIndex != null && message.hasOwnProperty("propIndex"))
                if (!$util.isInteger(message.propIndex) && !(message.propIndex && $util.isInteger(message.propIndex.low) && $util.isInteger(message.propIndex.high)))
                    return "propIndex: integer|Long expected";
            if (message.tip != null && message.hasOwnProperty("tip"))
                if (!$util.isString(message.tip))
                    return "tip: string expected";
            return null;
        };

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.AwardItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.AwardItem} AwardItem
         */
        AwardItem.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.AwardItem)
                return object;
            var message = new $root.activity.AwardItem();
            if (object.propId != null)
                message.propId = object.propId | 0;
            if (object.minNum != null)
                if ($util.Long)
                    (message.minNum = $util.Long.fromValue(object.minNum)).unsigned = false;
                else if (typeof object.minNum === "string")
                    message.minNum = parseInt(object.minNum, 10);
                else if (typeof object.minNum === "number")
                    message.minNum = object.minNum;
                else if (typeof object.minNum === "object")
                    message.minNum = new $util.LongBits(object.minNum.low >>> 0, object.minNum.high >>> 0).toNumber();
            if (object.maxNum != null)
                if ($util.Long)
                    (message.maxNum = $util.Long.fromValue(object.maxNum)).unsigned = false;
                else if (typeof object.maxNum === "string")
                    message.maxNum = parseInt(object.maxNum, 10);
                else if (typeof object.maxNum === "number")
                    message.maxNum = object.maxNum;
                else if (typeof object.maxNum === "object")
                    message.maxNum = new $util.LongBits(object.maxNum.low >>> 0, object.maxNum.high >>> 0).toNumber();
            if (object.effectTime != null)
                if ($util.Long)
                    (message.effectTime = $util.Long.fromValue(object.effectTime)).unsigned = false;
                else if (typeof object.effectTime === "string")
                    message.effectTime = parseInt(object.effectTime, 10);
                else if (typeof object.effectTime === "number")
                    message.effectTime = object.effectTime;
                else if (typeof object.effectTime === "object")
                    message.effectTime = new $util.LongBits(object.effectTime.low >>> 0, object.effectTime.high >>> 0).toNumber();
            if (object.propIndex != null)
                if ($util.Long)
                    (message.propIndex = $util.Long.fromValue(object.propIndex)).unsigned = false;
                else if (typeof object.propIndex === "string")
                    message.propIndex = parseInt(object.propIndex, 10);
                else if (typeof object.propIndex === "number")
                    message.propIndex = object.propIndex;
                else if (typeof object.propIndex === "object")
                    message.propIndex = new $util.LongBits(object.propIndex.low >>> 0, object.propIndex.high >>> 0).toNumber();
            if (object.tip != null)
                message.tip = String(object.tip);
            return message;
        };

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.AwardItem
         * @static
         * @param {activity.AwardItem} message AwardItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.propId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.minNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.effectTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.effectTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.propIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.propIndex = options.longs === String ? "0" : 0;
                object.tip = "";
            }
            if (message.propId != null && message.hasOwnProperty("propId"))
                object.propId = message.propId;
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                if (typeof message.minNum === "number")
                    object.minNum = options.longs === String ? String(message.minNum) : message.minNum;
                else
                    object.minNum = options.longs === String ? $util.Long.prototype.toString.call(message.minNum) : options.longs === Number ? new $util.LongBits(message.minNum.low >>> 0, message.minNum.high >>> 0).toNumber() : message.minNum;
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (typeof message.maxNum === "number")
                    object.maxNum = options.longs === String ? String(message.maxNum) : message.maxNum;
                else
                    object.maxNum = options.longs === String ? $util.Long.prototype.toString.call(message.maxNum) : options.longs === Number ? new $util.LongBits(message.maxNum.low >>> 0, message.maxNum.high >>> 0).toNumber() : message.maxNum;
            if (message.effectTime != null && message.hasOwnProperty("effectTime"))
                if (typeof message.effectTime === "number")
                    object.effectTime = options.longs === String ? String(message.effectTime) : message.effectTime;
                else
                    object.effectTime = options.longs === String ? $util.Long.prototype.toString.call(message.effectTime) : options.longs === Number ? new $util.LongBits(message.effectTime.low >>> 0, message.effectTime.high >>> 0).toNumber() : message.effectTime;
            if (message.propIndex != null && message.hasOwnProperty("propIndex"))
                if (typeof message.propIndex === "number")
                    object.propIndex = options.longs === String ? String(message.propIndex) : message.propIndex;
                else
                    object.propIndex = options.longs === String ? $util.Long.prototype.toString.call(message.propIndex) : options.longs === Number ? new $util.LongBits(message.propIndex.low >>> 0, message.propIndex.high >>> 0).toNumber() : message.propIndex;
            if (message.tip != null && message.hasOwnProperty("tip"))
                object.tip = message.tip;
            return object;
        };

        /**
         * Converts this AwardItem to JSON.
         * @function toJSON
         * @memberof activity.AwardItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardItem;
    })();

    activity.ActivityItem = (function() {

        /**
         * Properties of an ActivityItem.
         * @memberof activity
         * @interface IActivityItem
         * @property {number|Long|null} [uid] ActivityItem uid
         * @property {string|null} [progId] ActivityItem progId
         * @property {number|null} [activityId] ActivityItem activityId
         * @property {number|null} [type] ActivityItem type
         * @property {string|null} [title] ActivityItem title
         * @property {string|null} [desc] ActivityItem desc
         * @property {number|Long|null} [curNum] ActivityItem curNum
         * @property {number|Long|null} [condNum] ActivityItem condNum
         * @property {Array.<activity.IAwardItem>|null} [awards] ActivityItem awards
         * @property {number|null} [status] ActivityItem status
         */

        /**
         * Constructs a new ActivityItem.
         * @memberof activity
         * @classdesc Represents an ActivityItem.
         * @implements IActivityItem
         * @constructor
         * @param {activity.IActivityItem=} [properties] Properties to set
         */
        function ActivityItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityItem uid.
         * @member {number|Long} uid
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityItem progId.
         * @member {string} progId
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.progId = "";

        /**
         * ActivityItem activityId.
         * @member {number} activityId
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.activityId = 0;

        /**
         * ActivityItem type.
         * @member {number} type
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.type = 0;

        /**
         * ActivityItem title.
         * @member {string} title
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.title = "";

        /**
         * ActivityItem desc.
         * @member {string} desc
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.desc = "";

        /**
         * ActivityItem curNum.
         * @member {number|Long} curNum
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.curNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityItem condNum.
         * @member {number|Long} condNum
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.condNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityItem awards.
         * @member {Array.<activity.IAwardItem>} awards
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.awards = $util.emptyArray;

        /**
         * ActivityItem status.
         * @member {number} status
         * @memberof activity.ActivityItem
         * @instance
         */
        ActivityItem.prototype.status = 0;

        /**
         * Creates a new ActivityItem instance using the specified properties.
         * @function create
         * @memberof activity.ActivityItem
         * @static
         * @param {activity.IActivityItem=} [properties] Properties to set
         * @returns {activity.ActivityItem} ActivityItem instance
         */
        ActivityItem.create = function create(properties) {
            return new ActivityItem(properties);
        };

        /**
         * Encodes the specified ActivityItem message. Does not implicitly {@link activity.ActivityItem.verify|verify} messages.
         * @function encode
         * @memberof activity.ActivityItem
         * @static
         * @param {activity.IActivityItem} message ActivityItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.progId != null && message.hasOwnProperty("progId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.progId);
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.activityId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.desc);
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.curNum);
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.condNum);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.activity.AwardItem.encode(message.awards[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ActivityItem message, length delimited. Does not implicitly {@link activity.ActivityItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.ActivityItem
         * @static
         * @param {activity.IActivityItem} message ActivityItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityItem message from the specified reader or buffer.
         * @function decode
         * @memberof activity.ActivityItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.ActivityItem} ActivityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.ActivityItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.progId = reader.string();
                    break;
                case 3:
                    message.activityId = reader.int32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.desc = reader.string();
                    break;
                case 7:
                    message.curNum = reader.int64();
                    break;
                case 8:
                    message.condNum = reader.int64();
                    break;
                case 9:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.activity.AwardItem.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivityItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.ActivityItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.ActivityItem} ActivityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityItem message.
         * @function verify
         * @memberof activity.ActivityItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.progId != null && message.hasOwnProperty("progId"))
                if (!$util.isString(message.progId))
                    return "progId: string expected";
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                if (!$util.isInteger(message.activityId))
                    return "activityId: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (!$util.isInteger(message.curNum) && !(message.curNum && $util.isInteger(message.curNum.low) && $util.isInteger(message.curNum.high)))
                    return "curNum: integer|Long expected";
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (!$util.isInteger(message.condNum) && !(message.condNum && $util.isInteger(message.condNum.low) && $util.isInteger(message.condNum.high)))
                    return "condNum: integer|Long expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.activity.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates an ActivityItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.ActivityItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.ActivityItem} ActivityItem
         */
        ActivityItem.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.ActivityItem)
                return object;
            var message = new $root.activity.ActivityItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.progId != null)
                message.progId = String(object.progId);
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.curNum != null)
                if ($util.Long)
                    (message.curNum = $util.Long.fromValue(object.curNum)).unsigned = false;
                else if (typeof object.curNum === "string")
                    message.curNum = parseInt(object.curNum, 10);
                else if (typeof object.curNum === "number")
                    message.curNum = object.curNum;
                else if (typeof object.curNum === "object")
                    message.curNum = new $util.LongBits(object.curNum.low >>> 0, object.curNum.high >>> 0).toNumber();
            if (object.condNum != null)
                if ($util.Long)
                    (message.condNum = $util.Long.fromValue(object.condNum)).unsigned = false;
                else if (typeof object.condNum === "string")
                    message.condNum = parseInt(object.condNum, 10);
                else if (typeof object.condNum === "number")
                    message.condNum = object.condNum;
                else if (typeof object.condNum === "object")
                    message.condNum = new $util.LongBits(object.condNum.low >>> 0, object.condNum.high >>> 0).toNumber();
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".activity.ActivityItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".activity.ActivityItem.awards: object expected");
                    message.awards[i] = $root.activity.AwardItem.fromObject(object.awards[i]);
                }
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.ActivityItem
         * @static
         * @param {activity.ActivityItem} message ActivityItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.progId = "";
                object.activityId = 0;
                object.type = 0;
                object.title = "";
                object.desc = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.curNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.curNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.condNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.condNum = options.longs === String ? "0" : 0;
                object.status = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.progId != null && message.hasOwnProperty("progId"))
                object.progId = message.progId;
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (typeof message.curNum === "number")
                    object.curNum = options.longs === String ? String(message.curNum) : message.curNum;
                else
                    object.curNum = options.longs === String ? $util.Long.prototype.toString.call(message.curNum) : options.longs === Number ? new $util.LongBits(message.curNum.low >>> 0, message.curNum.high >>> 0).toNumber() : message.curNum;
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (typeof message.condNum === "number")
                    object.condNum = options.longs === String ? String(message.condNum) : message.condNum;
                else
                    object.condNum = options.longs === String ? $util.Long.prototype.toString.call(message.condNum) : options.longs === Number ? new $util.LongBits(message.condNum.low >>> 0, message.condNum.high >>> 0).toNumber() : message.condNum;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.activity.AwardItem.toObject(message.awards[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ActivityItem to JSON.
         * @function toJSON
         * @memberof activity.ActivityItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityItem;
    })();

    activity.GetActivityProgressRsp = (function() {

        /**
         * Properties of a GetActivityProgressRsp.
         * @memberof activity
         * @interface IGetActivityProgressRsp
         * @property {number|null} [errCode] GetActivityProgressRsp errCode
         * @property {string|null} [errMsg] GetActivityProgressRsp errMsg
         * @property {Array.<activity.IActivityItem>|null} [activityItems] GetActivityProgressRsp activityItems
         */

        /**
         * Constructs a new GetActivityProgressRsp.
         * @memberof activity
         * @classdesc Represents a GetActivityProgressRsp.
         * @implements IGetActivityProgressRsp
         * @constructor
         * @param {activity.IGetActivityProgressRsp=} [properties] Properties to set
         */
        function GetActivityProgressRsp(properties) {
            this.activityItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetActivityProgressRsp errCode.
         * @member {number} errCode
         * @memberof activity.GetActivityProgressRsp
         * @instance
         */
        GetActivityProgressRsp.prototype.errCode = 0;

        /**
         * GetActivityProgressRsp errMsg.
         * @member {string} errMsg
         * @memberof activity.GetActivityProgressRsp
         * @instance
         */
        GetActivityProgressRsp.prototype.errMsg = "";

        /**
         * GetActivityProgressRsp activityItems.
         * @member {Array.<activity.IActivityItem>} activityItems
         * @memberof activity.GetActivityProgressRsp
         * @instance
         */
        GetActivityProgressRsp.prototype.activityItems = $util.emptyArray;

        /**
         * Creates a new GetActivityProgressRsp instance using the specified properties.
         * @function create
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {activity.IGetActivityProgressRsp=} [properties] Properties to set
         * @returns {activity.GetActivityProgressRsp} GetActivityProgressRsp instance
         */
        GetActivityProgressRsp.create = function create(properties) {
            return new GetActivityProgressRsp(properties);
        };

        /**
         * Encodes the specified GetActivityProgressRsp message. Does not implicitly {@link activity.GetActivityProgressRsp.verify|verify} messages.
         * @function encode
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {activity.IGetActivityProgressRsp} message GetActivityProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityProgressRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.activityItems != null && message.activityItems.length)
                for (var i = 0; i < message.activityItems.length; ++i)
                    $root.activity.ActivityItem.encode(message.activityItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetActivityProgressRsp message, length delimited. Does not implicitly {@link activity.GetActivityProgressRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {activity.IGetActivityProgressRsp} message GetActivityProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetActivityProgressRsp message from the specified reader or buffer.
         * @function decode
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.GetActivityProgressRsp} GetActivityProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityProgressRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.GetActivityProgressRsp();
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
                    if (!(message.activityItems && message.activityItems.length))
                        message.activityItems = [];
                    message.activityItems.push($root.activity.ActivityItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetActivityProgressRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.GetActivityProgressRsp} GetActivityProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityProgressRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetActivityProgressRsp message.
         * @function verify
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetActivityProgressRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.activityItems != null && message.hasOwnProperty("activityItems")) {
                if (!Array.isArray(message.activityItems))
                    return "activityItems: array expected";
                for (var i = 0; i < message.activityItems.length; ++i) {
                    var error = $root.activity.ActivityItem.verify(message.activityItems[i]);
                    if (error)
                        return "activityItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetActivityProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.GetActivityProgressRsp} GetActivityProgressRsp
         */
        GetActivityProgressRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.GetActivityProgressRsp)
                return object;
            var message = new $root.activity.GetActivityProgressRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.activityItems) {
                if (!Array.isArray(object.activityItems))
                    throw TypeError(".activity.GetActivityProgressRsp.activityItems: array expected");
                message.activityItems = [];
                for (var i = 0; i < object.activityItems.length; ++i) {
                    if (typeof object.activityItems[i] !== "object")
                        throw TypeError(".activity.GetActivityProgressRsp.activityItems: object expected");
                    message.activityItems[i] = $root.activity.ActivityItem.fromObject(object.activityItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetActivityProgressRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.GetActivityProgressRsp
         * @static
         * @param {activity.GetActivityProgressRsp} message GetActivityProgressRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetActivityProgressRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.activityItems = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.activityItems && message.activityItems.length) {
                object.activityItems = [];
                for (var j = 0; j < message.activityItems.length; ++j)
                    object.activityItems[j] = $root.activity.ActivityItem.toObject(message.activityItems[j], options);
            }
            return object;
        };

        /**
         * Converts this GetActivityProgressRsp to JSON.
         * @function toJSON
         * @memberof activity.GetActivityProgressRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetActivityProgressRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetActivityProgressRsp;
    })();

    activity.GetActivityAwardReq = (function() {

        /**
         * Properties of a GetActivityAwardReq.
         * @memberof activity
         * @interface IGetActivityAwardReq
         * @property {string|null} [progIds] GetActivityAwardReq progIds
         * @property {number|Long|null} [uid] GetActivityAwardReq uid
         * @property {number|null} [type] GetActivityAwardReq type
         * @property {number|null} [double] GetActivityAwardReq double
         */

        /**
         * Constructs a new GetActivityAwardReq.
         * @memberof activity
         * @classdesc Represents a GetActivityAwardReq.
         * @implements IGetActivityAwardReq
         * @constructor
         * @param {activity.IGetActivityAwardReq=} [properties] Properties to set
         */
        function GetActivityAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetActivityAwardReq progIds.
         * @member {string} progIds
         * @memberof activity.GetActivityAwardReq
         * @instance
         */
        GetActivityAwardReq.prototype.progIds = "";

        /**
         * GetActivityAwardReq uid.
         * @member {number|Long} uid
         * @memberof activity.GetActivityAwardReq
         * @instance
         */
        GetActivityAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetActivityAwardReq type.
         * @member {number} type
         * @memberof activity.GetActivityAwardReq
         * @instance
         */
        GetActivityAwardReq.prototype.type = 0;

        /**
         * GetActivityAwardReq double.
         * @member {number} double
         * @memberof activity.GetActivityAwardReq
         * @instance
         */
        GetActivityAwardReq.prototype.double = 0;

        /**
         * Creates a new GetActivityAwardReq instance using the specified properties.
         * @function create
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {activity.IGetActivityAwardReq=} [properties] Properties to set
         * @returns {activity.GetActivityAwardReq} GetActivityAwardReq instance
         */
        GetActivityAwardReq.create = function create(properties) {
            return new GetActivityAwardReq(properties);
        };

        /**
         * Encodes the specified GetActivityAwardReq message. Does not implicitly {@link activity.GetActivityAwardReq.verify|verify} messages.
         * @function encode
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {activity.IGetActivityAwardReq} message GetActivityAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.progIds != null && message.hasOwnProperty("progIds"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.progIds);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.double != null && message.hasOwnProperty("double"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.double);
            return writer;
        };

        /**
         * Encodes the specified GetActivityAwardReq message, length delimited. Does not implicitly {@link activity.GetActivityAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {activity.IGetActivityAwardReq} message GetActivityAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetActivityAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.GetActivityAwardReq} GetActivityAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.GetActivityAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.progIds = reader.string();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.double = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetActivityAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.GetActivityAwardReq} GetActivityAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetActivityAwardReq message.
         * @function verify
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetActivityAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.progIds != null && message.hasOwnProperty("progIds"))
                if (!$util.isString(message.progIds))
                    return "progIds: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.double != null && message.hasOwnProperty("double"))
                if (!$util.isInteger(message.double))
                    return "double: integer expected";
            return null;
        };

        /**
         * Creates a GetActivityAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.GetActivityAwardReq} GetActivityAwardReq
         */
        GetActivityAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.GetActivityAwardReq)
                return object;
            var message = new $root.activity.GetActivityAwardReq();
            if (object.progIds != null)
                message.progIds = String(object.progIds);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.double != null)
                message.double = object.double | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetActivityAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.GetActivityAwardReq
         * @static
         * @param {activity.GetActivityAwardReq} message GetActivityAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetActivityAwardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.progIds = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.type = 0;
                object.double = 0;
            }
            if (message.progIds != null && message.hasOwnProperty("progIds"))
                object.progIds = message.progIds;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.double != null && message.hasOwnProperty("double"))
                object.double = message.double;
            return object;
        };

        /**
         * Converts this GetActivityAwardReq to JSON.
         * @function toJSON
         * @memberof activity.GetActivityAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetActivityAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetActivityAwardReq;
    })();

    activity.GetActivityAwardRsp = (function() {

        /**
         * Properties of a GetActivityAwardRsp.
         * @memberof activity
         * @interface IGetActivityAwardRsp
         * @property {number|null} [errCode] GetActivityAwardRsp errCode
         * @property {string|null} [errMsg] GetActivityAwardRsp errMsg
         * @property {Array.<activity.IAwardItem>|null} [awards] GetActivityAwardRsp awards
         */

        /**
         * Constructs a new GetActivityAwardRsp.
         * @memberof activity
         * @classdesc Represents a GetActivityAwardRsp.
         * @implements IGetActivityAwardRsp
         * @constructor
         * @param {activity.IGetActivityAwardRsp=} [properties] Properties to set
         */
        function GetActivityAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetActivityAwardRsp errCode.
         * @member {number} errCode
         * @memberof activity.GetActivityAwardRsp
         * @instance
         */
        GetActivityAwardRsp.prototype.errCode = 0;

        /**
         * GetActivityAwardRsp errMsg.
         * @member {string} errMsg
         * @memberof activity.GetActivityAwardRsp
         * @instance
         */
        GetActivityAwardRsp.prototype.errMsg = "";

        /**
         * GetActivityAwardRsp awards.
         * @member {Array.<activity.IAwardItem>} awards
         * @memberof activity.GetActivityAwardRsp
         * @instance
         */
        GetActivityAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetActivityAwardRsp instance using the specified properties.
         * @function create
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {activity.IGetActivityAwardRsp=} [properties] Properties to set
         * @returns {activity.GetActivityAwardRsp} GetActivityAwardRsp instance
         */
        GetActivityAwardRsp.create = function create(properties) {
            return new GetActivityAwardRsp(properties);
        };

        /**
         * Encodes the specified GetActivityAwardRsp message. Does not implicitly {@link activity.GetActivityAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {activity.IGetActivityAwardRsp} message GetActivityAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.activity.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetActivityAwardRsp message, length delimited. Does not implicitly {@link activity.GetActivityAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {activity.IGetActivityAwardRsp} message GetActivityAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetActivityAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.GetActivityAwardRsp} GetActivityAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.GetActivityAwardRsp();
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
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.activity.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetActivityAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.GetActivityAwardRsp} GetActivityAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetActivityAwardRsp message.
         * @function verify
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetActivityAwardRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.activity.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetActivityAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.GetActivityAwardRsp} GetActivityAwardRsp
         */
        GetActivityAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.GetActivityAwardRsp)
                return object;
            var message = new $root.activity.GetActivityAwardRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".activity.GetActivityAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".activity.GetActivityAwardRsp.awards: object expected");
                    message.awards[i] = $root.activity.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetActivityAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.GetActivityAwardRsp
         * @static
         * @param {activity.GetActivityAwardRsp} message GetActivityAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetActivityAwardRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.activity.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetActivityAwardRsp to JSON.
         * @function toJSON
         * @memberof activity.GetActivityAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetActivityAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetActivityAwardRsp;
    })();

    activity.UptBcsAdStateReq = (function() {

        /**
         * Properties of an UptBcsAdStateReq.
         * @memberof activity
         * @interface IUptBcsAdStateReq
         * @property {number|Long|null} [uid] UptBcsAdStateReq uid
         * @property {number|null} [state] UptBcsAdStateReq state
         */

        /**
         * Constructs a new UptBcsAdStateReq.
         * @memberof activity
         * @classdesc Represents an UptBcsAdStateReq.
         * @implements IUptBcsAdStateReq
         * @constructor
         * @param {activity.IUptBcsAdStateReq=} [properties] Properties to set
         */
        function UptBcsAdStateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptBcsAdStateReq uid.
         * @member {number|Long} uid
         * @memberof activity.UptBcsAdStateReq
         * @instance
         */
        UptBcsAdStateReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptBcsAdStateReq state.
         * @member {number} state
         * @memberof activity.UptBcsAdStateReq
         * @instance
         */
        UptBcsAdStateReq.prototype.state = 0;

        /**
         * Creates a new UptBcsAdStateReq instance using the specified properties.
         * @function create
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {activity.IUptBcsAdStateReq=} [properties] Properties to set
         * @returns {activity.UptBcsAdStateReq} UptBcsAdStateReq instance
         */
        UptBcsAdStateReq.create = function create(properties) {
            return new UptBcsAdStateReq(properties);
        };

        /**
         * Encodes the specified UptBcsAdStateReq message. Does not implicitly {@link activity.UptBcsAdStateReq.verify|verify} messages.
         * @function encode
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {activity.IUptBcsAdStateReq} message UptBcsAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptBcsAdStateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UptBcsAdStateReq message, length delimited. Does not implicitly {@link activity.UptBcsAdStateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {activity.IUptBcsAdStateReq} message UptBcsAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptBcsAdStateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptBcsAdStateReq message from the specified reader or buffer.
         * @function decode
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.UptBcsAdStateReq} UptBcsAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptBcsAdStateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.UptBcsAdStateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UptBcsAdStateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.UptBcsAdStateReq} UptBcsAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptBcsAdStateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptBcsAdStateReq message.
         * @function verify
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptBcsAdStateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates an UptBcsAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.UptBcsAdStateReq} UptBcsAdStateReq
         */
        UptBcsAdStateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.UptBcsAdStateReq)
                return object;
            var message = new $root.activity.UptBcsAdStateReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from an UptBcsAdStateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.UptBcsAdStateReq
         * @static
         * @param {activity.UptBcsAdStateReq} message UptBcsAdStateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptBcsAdStateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.state = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this UptBcsAdStateReq to JSON.
         * @function toJSON
         * @memberof activity.UptBcsAdStateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptBcsAdStateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptBcsAdStateReq;
    })();

    activity.UptBcsAdStateRsp = (function() {

        /**
         * Properties of an UptBcsAdStateRsp.
         * @memberof activity
         * @interface IUptBcsAdStateRsp
         * @property {number|null} [errCode] UptBcsAdStateRsp errCode
         * @property {string|null} [errMsg] UptBcsAdStateRsp errMsg
         */

        /**
         * Constructs a new UptBcsAdStateRsp.
         * @memberof activity
         * @classdesc Represents an UptBcsAdStateRsp.
         * @implements IUptBcsAdStateRsp
         * @constructor
         * @param {activity.IUptBcsAdStateRsp=} [properties] Properties to set
         */
        function UptBcsAdStateRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptBcsAdStateRsp errCode.
         * @member {number} errCode
         * @memberof activity.UptBcsAdStateRsp
         * @instance
         */
        UptBcsAdStateRsp.prototype.errCode = 0;

        /**
         * UptBcsAdStateRsp errMsg.
         * @member {string} errMsg
         * @memberof activity.UptBcsAdStateRsp
         * @instance
         */
        UptBcsAdStateRsp.prototype.errMsg = "";

        /**
         * Creates a new UptBcsAdStateRsp instance using the specified properties.
         * @function create
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {activity.IUptBcsAdStateRsp=} [properties] Properties to set
         * @returns {activity.UptBcsAdStateRsp} UptBcsAdStateRsp instance
         */
        UptBcsAdStateRsp.create = function create(properties) {
            return new UptBcsAdStateRsp(properties);
        };

        /**
         * Encodes the specified UptBcsAdStateRsp message. Does not implicitly {@link activity.UptBcsAdStateRsp.verify|verify} messages.
         * @function encode
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {activity.IUptBcsAdStateRsp} message UptBcsAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptBcsAdStateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptBcsAdStateRsp message, length delimited. Does not implicitly {@link activity.UptBcsAdStateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {activity.IUptBcsAdStateRsp} message UptBcsAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptBcsAdStateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptBcsAdStateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.UptBcsAdStateRsp} UptBcsAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptBcsAdStateRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.UptBcsAdStateRsp();
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
         * Decodes an UptBcsAdStateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.UptBcsAdStateRsp} UptBcsAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptBcsAdStateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptBcsAdStateRsp message.
         * @function verify
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptBcsAdStateRsp.verify = function verify(message) {
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
         * Creates an UptBcsAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.UptBcsAdStateRsp} UptBcsAdStateRsp
         */
        UptBcsAdStateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.UptBcsAdStateRsp)
                return object;
            var message = new $root.activity.UptBcsAdStateRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptBcsAdStateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.UptBcsAdStateRsp
         * @static
         * @param {activity.UptBcsAdStateRsp} message UptBcsAdStateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptBcsAdStateRsp.toObject = function toObject(message, options) {
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
         * Converts this UptBcsAdStateRsp to JSON.
         * @function toJSON
         * @memberof activity.UptBcsAdStateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptBcsAdStateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptBcsAdStateRsp;
    })();

    activity.ActivityHeadFrameNot = (function() {

        /**
         * Properties of an ActivityHeadFrameNot.
         * @memberof activity
         * @interface IActivityHeadFrameNot
         * @property {Object.<string,string>|null} [params] ActivityHeadFrameNot params
         */

        /**
         * Constructs a new ActivityHeadFrameNot.
         * @memberof activity
         * @classdesc Represents an ActivityHeadFrameNot.
         * @implements IActivityHeadFrameNot
         * @constructor
         * @param {activity.IActivityHeadFrameNot=} [properties] Properties to set
         */
        function ActivityHeadFrameNot(properties) {
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityHeadFrameNot params.
         * @member {Object.<string,string>} params
         * @memberof activity.ActivityHeadFrameNot
         * @instance
         */
        ActivityHeadFrameNot.prototype.params = $util.emptyObject;

        /**
         * Creates a new ActivityHeadFrameNot instance using the specified properties.
         * @function create
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {activity.IActivityHeadFrameNot=} [properties] Properties to set
         * @returns {activity.ActivityHeadFrameNot} ActivityHeadFrameNot instance
         */
        ActivityHeadFrameNot.create = function create(properties) {
            return new ActivityHeadFrameNot(properties);
        };

        /**
         * Encodes the specified ActivityHeadFrameNot message. Does not implicitly {@link activity.ActivityHeadFrameNot.verify|verify} messages.
         * @function encode
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {activity.IActivityHeadFrameNot} message ActivityHeadFrameNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityHeadFrameNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.params != null && message.hasOwnProperty("params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActivityHeadFrameNot message, length delimited. Does not implicitly {@link activity.ActivityHeadFrameNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {activity.IActivityHeadFrameNot} message ActivityHeadFrameNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityHeadFrameNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityHeadFrameNot message from the specified reader or buffer.
         * @function decode
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.ActivityHeadFrameNot} ActivityHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityHeadFrameNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.ActivityHeadFrameNot(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.params === $util.emptyObject)
                        message.params = {};
                    key = reader.string();
                    reader.pos++;
                    message.params[key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivityHeadFrameNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.ActivityHeadFrameNot} ActivityHeadFrameNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityHeadFrameNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityHeadFrameNot message.
         * @function verify
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityHeadFrameNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * Creates an ActivityHeadFrameNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.ActivityHeadFrameNot} ActivityHeadFrameNot
         */
        ActivityHeadFrameNot.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.ActivityHeadFrameNot)
                return object;
            var message = new $root.activity.ActivityHeadFrameNot();
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".activity.ActivityHeadFrameNot.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivityHeadFrameNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.ActivityHeadFrameNot
         * @static
         * @param {activity.ActivityHeadFrameNot} message ActivityHeadFrameNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityHeadFrameNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.params = {};
            var keys2;
            if (message.params && (keys2 = Object.keys(message.params)).length) {
                object.params = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.params[keys2[j]] = message.params[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ActivityHeadFrameNot to JSON.
         * @function toJSON
         * @memberof activity.ActivityHeadFrameNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityHeadFrameNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityHeadFrameNot;
    })();

    activity.ActivityAwardNot = (function() {

        /**
         * Properties of an ActivityAwardNot.
         * @memberof activity
         * @interface IActivityAwardNot
         * @property {boolean|null} [haveRewards] ActivityAwardNot haveRewards
         * @property {number|null} [style] ActivityAwardNot style
         * @property {string|null} [desc] ActivityAwardNot desc
         * @property {number|null} [align] ActivityAwardNot align
         */

        /**
         * Constructs a new ActivityAwardNot.
         * @memberof activity
         * @classdesc Represents an ActivityAwardNot.
         * @implements IActivityAwardNot
         * @constructor
         * @param {activity.IActivityAwardNot=} [properties] Properties to set
         */
        function ActivityAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityAwardNot haveRewards.
         * @member {boolean} haveRewards
         * @memberof activity.ActivityAwardNot
         * @instance
         */
        ActivityAwardNot.prototype.haveRewards = false;

        /**
         * ActivityAwardNot style.
         * @member {number} style
         * @memberof activity.ActivityAwardNot
         * @instance
         */
        ActivityAwardNot.prototype.style = 0;

        /**
         * ActivityAwardNot desc.
         * @member {string} desc
         * @memberof activity.ActivityAwardNot
         * @instance
         */
        ActivityAwardNot.prototype.desc = "";

        /**
         * ActivityAwardNot align.
         * @member {number} align
         * @memberof activity.ActivityAwardNot
         * @instance
         */
        ActivityAwardNot.prototype.align = 0;

        /**
         * Creates a new ActivityAwardNot instance using the specified properties.
         * @function create
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {activity.IActivityAwardNot=} [properties] Properties to set
         * @returns {activity.ActivityAwardNot} ActivityAwardNot instance
         */
        ActivityAwardNot.create = function create(properties) {
            return new ActivityAwardNot(properties);
        };

        /**
         * Encodes the specified ActivityAwardNot message. Does not implicitly {@link activity.ActivityAwardNot.verify|verify} messages.
         * @function encode
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {activity.IActivityAwardNot} message ActivityAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityAwardNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.haveRewards);
            if (message.style != null && message.hasOwnProperty("style"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.style);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
            if (message.align != null && message.hasOwnProperty("align"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.align);
            return writer;
        };

        /**
         * Encodes the specified ActivityAwardNot message, length delimited. Does not implicitly {@link activity.ActivityAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {activity.IActivityAwardNot} message ActivityAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activity.ActivityAwardNot} ActivityAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activity.ActivityAwardNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.haveRewards = reader.bool();
                    break;
                case 2:
                    message.style = reader.int32();
                    break;
                case 3:
                    message.desc = reader.string();
                    break;
                case 4:
                    message.align = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivityAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activity.ActivityAwardNot} ActivityAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityAwardNot message.
         * @function verify
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityAwardNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                if (typeof message.haveRewards !== "boolean")
                    return "haveRewards: boolean expected";
            if (message.style != null && message.hasOwnProperty("style"))
                if (!$util.isInteger(message.style))
                    return "style: integer expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.align != null && message.hasOwnProperty("align"))
                if (!$util.isInteger(message.align))
                    return "align: integer expected";
            return null;
        };

        /**
         * Creates an ActivityAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activity.ActivityAwardNot} ActivityAwardNot
         */
        ActivityAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.activity.ActivityAwardNot)
                return object;
            var message = new $root.activity.ActivityAwardNot();
            if (object.haveRewards != null)
                message.haveRewards = Boolean(object.haveRewards);
            if (object.style != null)
                message.style = object.style | 0;
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.align != null)
                message.align = object.align | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activity.ActivityAwardNot
         * @static
         * @param {activity.ActivityAwardNot} message ActivityAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityAwardNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.haveRewards = false;
                object.style = 0;
                object.desc = "";
                object.align = 0;
            }
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                object.haveRewards = message.haveRewards;
            if (message.style != null && message.hasOwnProperty("style"))
                object.style = message.style;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.align != null && message.hasOwnProperty("align"))
                object.align = message.align;
            return object;
        };

        /**
         * Converts this ActivityAwardNot to JSON.
         * @function toJSON
         * @memberof activity.ActivityAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityAwardNot;
    })();

    return activity;
})();

module.exports = $root.activity;
