/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.item = (function() {

    /**
     * Namespace item.
     * @exports item
     * @namespace
     */
    var item = {};

    item.Relief = (function() {

        /**
         * Constructs a new Relief service.
         * @memberof item
         * @classdesc Represents a Relief
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Relief(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Relief.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Relief;

        /**
         * Creates new Relief service using the specified rpc implementation.
         * @function create
         * @memberof item.Relief
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Relief} RPC service. Useful where requests and/or responses are streamed.
         */
        Relief.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link item.Relief#getReliefInfo}.
         * @memberof item.Relief
         * @typedef GetReliefInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.GetReliefInfoRsp} [response] GetReliefInfoRsp
         */

        /**
         * Calls GetReliefInfo.
         * @function getReliefInfo
         * @memberof item.Relief
         * @instance
         * @param {item.IGetReliefInfoReq} request GetReliefInfoReq message or plain object
         * @param {item.Relief.GetReliefInfoCallback} callback Node-style callback called with the error, if any, and GetReliefInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Relief.prototype.getReliefInfo = function getReliefInfo(request, callback) {
            return this.rpcCall(getReliefInfo, $root.item.GetReliefInfoReq, $root.item.GetReliefInfoRsp, request, callback);
        }, "name", { value: "GetReliefInfo" });

        /**
         * Calls GetReliefInfo.
         * @function getReliefInfo
         * @memberof item.Relief
         * @instance
         * @param {item.IGetReliefInfoReq} request GetReliefInfoReq message or plain object
         * @returns {Promise<item.GetReliefInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Relief#uptReliefAdState}.
         * @memberof item.Relief
         * @typedef UptReliefAdStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.UptReliefAdStateRsp} [response] UptReliefAdStateRsp
         */

        /**
         * Calls UptReliefAdState.
         * @function uptReliefAdState
         * @memberof item.Relief
         * @instance
         * @param {item.IUptReliefAdStateReq} request UptReliefAdStateReq message or plain object
         * @param {item.Relief.UptReliefAdStateCallback} callback Node-style callback called with the error, if any, and UptReliefAdStateRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Relief.prototype.uptReliefAdState = function uptReliefAdState(request, callback) {
            return this.rpcCall(uptReliefAdState, $root.item.UptReliefAdStateReq, $root.item.UptReliefAdStateRsp, request, callback);
        }, "name", { value: "UptReliefAdState" });

        /**
         * Calls UptReliefAdState.
         * @function uptReliefAdState
         * @memberof item.Relief
         * @instance
         * @param {item.IUptReliefAdStateReq} request UptReliefAdStateReq message or plain object
         * @returns {Promise<item.UptReliefAdStateRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item.Relief#getReliefAwards}.
         * @memberof item.Relief
         * @typedef GetReliefAwardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item.GetReliefAwardsRsp} [response] GetReliefAwardsRsp
         */

        /**
         * Calls GetReliefAwards.
         * @function getReliefAwards
         * @memberof item.Relief
         * @instance
         * @param {item.IGetReliefAwardsReq} request GetReliefAwardsReq message or plain object
         * @param {item.Relief.GetReliefAwardsCallback} callback Node-style callback called with the error, if any, and GetReliefAwardsRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Relief.prototype.getReliefAwards = function getReliefAwards(request, callback) {
            return this.rpcCall(getReliefAwards, $root.item.GetReliefAwardsReq, $root.item.GetReliefAwardsRsp, request, callback);
        }, "name", { value: "GetReliefAwards" });

        /**
         * Calls GetReliefAwards.
         * @function getReliefAwards
         * @memberof item.Relief
         * @instance
         * @param {item.IGetReliefAwardsReq} request GetReliefAwardsReq message or plain object
         * @returns {Promise<item.GetReliefAwardsRsp>} Promise
         * @variation 2
         */

        return Relief;
    })();

    item.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof item
         * @interface IAward
         * @property {number|null} [index] Award index
         * @property {number|null} [num] Award num
         */

        /**
         * Constructs a new Award.
         * @memberof item
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {item.IAward=} [properties] Properties to set
         */
        function Award(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Award index.
         * @member {number} index
         * @memberof item.Award
         * @instance
         */
        Award.prototype.index = 0;

        /**
         * Award num.
         * @member {number} num
         * @memberof item.Award
         * @instance
         */
        Award.prototype.num = 0;

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof item.Award
         * @static
         * @param {item.IAward=} [properties] Properties to set
         * @returns {item.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link item.Award.verify|verify} messages.
         * @function encode
         * @memberof item.Award
         * @static
         * @param {item.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link item.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.Award
         * @static
         * @param {item.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof item.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.Award();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Award message.
         * @function verify
         * @memberof item.Award
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Award.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.item.Award)
                return object;
            var message = new $root.item.Award();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.Award
         * @static
         * @param {item.Award} message Award
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Award.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.num = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this Award to JSON.
         * @function toJSON
         * @memberof item.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    item.GetReliefInfoReq = (function() {

        /**
         * Properties of a GetReliefInfoReq.
         * @memberof item
         * @interface IGetReliefInfoReq
         * @property {number|Long|null} [uid] GetReliefInfoReq uid
         */

        /**
         * Constructs a new GetReliefInfoReq.
         * @memberof item
         * @classdesc Represents a GetReliefInfoReq.
         * @implements IGetReliefInfoReq
         * @constructor
         * @param {item.IGetReliefInfoReq=} [properties] Properties to set
         */
        function GetReliefInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetReliefInfoReq uid.
         * @member {number|Long} uid
         * @memberof item.GetReliefInfoReq
         * @instance
         */
        GetReliefInfoReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetReliefInfoReq instance using the specified properties.
         * @function create
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {item.IGetReliefInfoReq=} [properties] Properties to set
         * @returns {item.GetReliefInfoReq} GetReliefInfoReq instance
         */
        GetReliefInfoReq.create = function create(properties) {
            return new GetReliefInfoReq(properties);
        };

        /**
         * Encodes the specified GetReliefInfoReq message. Does not implicitly {@link item.GetReliefInfoReq.verify|verify} messages.
         * @function encode
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {item.IGetReliefInfoReq} message GetReliefInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetReliefInfoReq message, length delimited. Does not implicitly {@link item.GetReliefInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {item.IGetReliefInfoReq} message GetReliefInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetReliefInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetReliefInfoReq} GetReliefInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetReliefInfoReq();
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
         * Decodes a GetReliefInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetReliefInfoReq} GetReliefInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetReliefInfoReq message.
         * @function verify
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetReliefInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetReliefInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetReliefInfoReq} GetReliefInfoReq
         */
        GetReliefInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetReliefInfoReq)
                return object;
            var message = new $root.item.GetReliefInfoReq();
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
         * Creates a plain object from a GetReliefInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetReliefInfoReq
         * @static
         * @param {item.GetReliefInfoReq} message GetReliefInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetReliefInfoReq.toObject = function toObject(message, options) {
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
         * Converts this GetReliefInfoReq to JSON.
         * @function toJSON
         * @memberof item.GetReliefInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetReliefInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReliefInfoReq;
    })();

    item.GetReliefInfoRsp = (function() {

        /**
         * Properties of a GetReliefInfoRsp.
         * @memberof item
         * @interface IGetReliefInfoRsp
         * @property {number|null} [errCode] GetReliefInfoRsp errCode
         * @property {string|null} [errMsg] GetReliefInfoRsp errMsg
         * @property {number|null} [count] GetReliefInfoRsp count
         * @property {number|null} [money] GetReliefInfoRsp money
         */

        /**
         * Constructs a new GetReliefInfoRsp.
         * @memberof item
         * @classdesc Represents a GetReliefInfoRsp.
         * @implements IGetReliefInfoRsp
         * @constructor
         * @param {item.IGetReliefInfoRsp=} [properties] Properties to set
         */
        function GetReliefInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetReliefInfoRsp errCode.
         * @member {number} errCode
         * @memberof item.GetReliefInfoRsp
         * @instance
         */
        GetReliefInfoRsp.prototype.errCode = 0;

        /**
         * GetReliefInfoRsp errMsg.
         * @member {string} errMsg
         * @memberof item.GetReliefInfoRsp
         * @instance
         */
        GetReliefInfoRsp.prototype.errMsg = "";

        /**
         * GetReliefInfoRsp count.
         * @member {number} count
         * @memberof item.GetReliefInfoRsp
         * @instance
         */
        GetReliefInfoRsp.prototype.count = 0;

        /**
         * GetReliefInfoRsp money.
         * @member {number} money
         * @memberof item.GetReliefInfoRsp
         * @instance
         */
        GetReliefInfoRsp.prototype.money = 0;

        /**
         * Creates a new GetReliefInfoRsp instance using the specified properties.
         * @function create
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {item.IGetReliefInfoRsp=} [properties] Properties to set
         * @returns {item.GetReliefInfoRsp} GetReliefInfoRsp instance
         */
        GetReliefInfoRsp.create = function create(properties) {
            return new GetReliefInfoRsp(properties);
        };

        /**
         * Encodes the specified GetReliefInfoRsp message. Does not implicitly {@link item.GetReliefInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {item.IGetReliefInfoRsp} message GetReliefInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.money);
            return writer;
        };

        /**
         * Encodes the specified GetReliefInfoRsp message, length delimited. Does not implicitly {@link item.GetReliefInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {item.IGetReliefInfoRsp} message GetReliefInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetReliefInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetReliefInfoRsp} GetReliefInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetReliefInfoRsp();
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
                    message.count = reader.int32();
                    break;
                case 4:
                    message.money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetReliefInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetReliefInfoRsp} GetReliefInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetReliefInfoRsp message.
         * @function verify
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetReliefInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money))
                    return "money: integer expected";
            return null;
        };

        /**
         * Creates a GetReliefInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetReliefInfoRsp} GetReliefInfoRsp
         */
        GetReliefInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetReliefInfoRsp)
                return object;
            var message = new $root.item.GetReliefInfoRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.count != null)
                message.count = object.count | 0;
            if (object.money != null)
                message.money = object.money | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetReliefInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetReliefInfoRsp
         * @static
         * @param {item.GetReliefInfoRsp} message GetReliefInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetReliefInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.count = 0;
                object.money = 0;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            return object;
        };

        /**
         * Converts this GetReliefInfoRsp to JSON.
         * @function toJSON
         * @memberof item.GetReliefInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetReliefInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReliefInfoRsp;
    })();

    item.UptReliefAdStateReq = (function() {

        /**
         * Properties of an UptReliefAdStateReq.
         * @memberof item
         * @interface IUptReliefAdStateReq
         * @property {number|Long|null} [uid] UptReliefAdStateReq uid
         * @property {number|null} [state] UptReliefAdStateReq state
         */

        /**
         * Constructs a new UptReliefAdStateReq.
         * @memberof item
         * @classdesc Represents an UptReliefAdStateReq.
         * @implements IUptReliefAdStateReq
         * @constructor
         * @param {item.IUptReliefAdStateReq=} [properties] Properties to set
         */
        function UptReliefAdStateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptReliefAdStateReq uid.
         * @member {number|Long} uid
         * @memberof item.UptReliefAdStateReq
         * @instance
         */
        UptReliefAdStateReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptReliefAdStateReq state.
         * @member {number} state
         * @memberof item.UptReliefAdStateReq
         * @instance
         */
        UptReliefAdStateReq.prototype.state = 0;

        /**
         * Creates a new UptReliefAdStateReq instance using the specified properties.
         * @function create
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {item.IUptReliefAdStateReq=} [properties] Properties to set
         * @returns {item.UptReliefAdStateReq} UptReliefAdStateReq instance
         */
        UptReliefAdStateReq.create = function create(properties) {
            return new UptReliefAdStateReq(properties);
        };

        /**
         * Encodes the specified UptReliefAdStateReq message. Does not implicitly {@link item.UptReliefAdStateReq.verify|verify} messages.
         * @function encode
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {item.IUptReliefAdStateReq} message UptReliefAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptReliefAdStateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UptReliefAdStateReq message, length delimited. Does not implicitly {@link item.UptReliefAdStateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {item.IUptReliefAdStateReq} message UptReliefAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptReliefAdStateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptReliefAdStateReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UptReliefAdStateReq} UptReliefAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptReliefAdStateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UptReliefAdStateReq();
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
         * Decodes an UptReliefAdStateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UptReliefAdStateReq} UptReliefAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptReliefAdStateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptReliefAdStateReq message.
         * @function verify
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptReliefAdStateReq.verify = function verify(message) {
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
         * Creates an UptReliefAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UptReliefAdStateReq} UptReliefAdStateReq
         */
        UptReliefAdStateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UptReliefAdStateReq)
                return object;
            var message = new $root.item.UptReliefAdStateReq();
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
         * Creates a plain object from an UptReliefAdStateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UptReliefAdStateReq
         * @static
         * @param {item.UptReliefAdStateReq} message UptReliefAdStateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptReliefAdStateReq.toObject = function toObject(message, options) {
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
         * Converts this UptReliefAdStateReq to JSON.
         * @function toJSON
         * @memberof item.UptReliefAdStateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptReliefAdStateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptReliefAdStateReq;
    })();

    item.UptReliefAdStateRsp = (function() {

        /**
         * Properties of an UptReliefAdStateRsp.
         * @memberof item
         * @interface IUptReliefAdStateRsp
         * @property {number|null} [errCode] UptReliefAdStateRsp errCode
         * @property {string|null} [errMsg] UptReliefAdStateRsp errMsg
         */

        /**
         * Constructs a new UptReliefAdStateRsp.
         * @memberof item
         * @classdesc Represents an UptReliefAdStateRsp.
         * @implements IUptReliefAdStateRsp
         * @constructor
         * @param {item.IUptReliefAdStateRsp=} [properties] Properties to set
         */
        function UptReliefAdStateRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptReliefAdStateRsp errCode.
         * @member {number} errCode
         * @memberof item.UptReliefAdStateRsp
         * @instance
         */
        UptReliefAdStateRsp.prototype.errCode = 0;

        /**
         * UptReliefAdStateRsp errMsg.
         * @member {string} errMsg
         * @memberof item.UptReliefAdStateRsp
         * @instance
         */
        UptReliefAdStateRsp.prototype.errMsg = "";

        /**
         * Creates a new UptReliefAdStateRsp instance using the specified properties.
         * @function create
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {item.IUptReliefAdStateRsp=} [properties] Properties to set
         * @returns {item.UptReliefAdStateRsp} UptReliefAdStateRsp instance
         */
        UptReliefAdStateRsp.create = function create(properties) {
            return new UptReliefAdStateRsp(properties);
        };

        /**
         * Encodes the specified UptReliefAdStateRsp message. Does not implicitly {@link item.UptReliefAdStateRsp.verify|verify} messages.
         * @function encode
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {item.IUptReliefAdStateRsp} message UptReliefAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptReliefAdStateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptReliefAdStateRsp message, length delimited. Does not implicitly {@link item.UptReliefAdStateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {item.IUptReliefAdStateRsp} message UptReliefAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptReliefAdStateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptReliefAdStateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.UptReliefAdStateRsp} UptReliefAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptReliefAdStateRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.UptReliefAdStateRsp();
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
         * Decodes an UptReliefAdStateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.UptReliefAdStateRsp} UptReliefAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptReliefAdStateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptReliefAdStateRsp message.
         * @function verify
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptReliefAdStateRsp.verify = function verify(message) {
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
         * Creates an UptReliefAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.UptReliefAdStateRsp} UptReliefAdStateRsp
         */
        UptReliefAdStateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.UptReliefAdStateRsp)
                return object;
            var message = new $root.item.UptReliefAdStateRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptReliefAdStateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.UptReliefAdStateRsp
         * @static
         * @param {item.UptReliefAdStateRsp} message UptReliefAdStateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptReliefAdStateRsp.toObject = function toObject(message, options) {
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
         * Converts this UptReliefAdStateRsp to JSON.
         * @function toJSON
         * @memberof item.UptReliefAdStateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptReliefAdStateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptReliefAdStateRsp;
    })();

    item.GetReliefAwardsReq = (function() {

        /**
         * Properties of a GetReliefAwardsReq.
         * @memberof item
         * @interface IGetReliefAwardsReq
         * @property {number|Long|null} [uid] GetReliefAwardsReq uid
         * @property {number|null} [type] GetReliefAwardsReq type
         */

        /**
         * Constructs a new GetReliefAwardsReq.
         * @memberof item
         * @classdesc Represents a GetReliefAwardsReq.
         * @implements IGetReliefAwardsReq
         * @constructor
         * @param {item.IGetReliefAwardsReq=} [properties] Properties to set
         */
        function GetReliefAwardsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetReliefAwardsReq uid.
         * @member {number|Long} uid
         * @memberof item.GetReliefAwardsReq
         * @instance
         */
        GetReliefAwardsReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetReliefAwardsReq type.
         * @member {number} type
         * @memberof item.GetReliefAwardsReq
         * @instance
         */
        GetReliefAwardsReq.prototype.type = 0;

        /**
         * Creates a new GetReliefAwardsReq instance using the specified properties.
         * @function create
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {item.IGetReliefAwardsReq=} [properties] Properties to set
         * @returns {item.GetReliefAwardsReq} GetReliefAwardsReq instance
         */
        GetReliefAwardsReq.create = function create(properties) {
            return new GetReliefAwardsReq(properties);
        };

        /**
         * Encodes the specified GetReliefAwardsReq message. Does not implicitly {@link item.GetReliefAwardsReq.verify|verify} messages.
         * @function encode
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {item.IGetReliefAwardsReq} message GetReliefAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefAwardsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified GetReliefAwardsReq message, length delimited. Does not implicitly {@link item.GetReliefAwardsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {item.IGetReliefAwardsReq} message GetReliefAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefAwardsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetReliefAwardsReq message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetReliefAwardsReq} GetReliefAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefAwardsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetReliefAwardsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetReliefAwardsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetReliefAwardsReq} GetReliefAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefAwardsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetReliefAwardsReq message.
         * @function verify
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetReliefAwardsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a GetReliefAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetReliefAwardsReq} GetReliefAwardsReq
         */
        GetReliefAwardsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetReliefAwardsReq)
                return object;
            var message = new $root.item.GetReliefAwardsReq();
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
            return message;
        };

        /**
         * Creates a plain object from a GetReliefAwardsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetReliefAwardsReq
         * @static
         * @param {item.GetReliefAwardsReq} message GetReliefAwardsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetReliefAwardsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.type = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this GetReliefAwardsReq to JSON.
         * @function toJSON
         * @memberof item.GetReliefAwardsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetReliefAwardsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReliefAwardsReq;
    })();

    item.GetReliefAwardsRsp = (function() {

        /**
         * Properties of a GetReliefAwardsRsp.
         * @memberof item
         * @interface IGetReliefAwardsRsp
         * @property {number|null} [errCode] GetReliefAwardsRsp errCode
         * @property {string|null} [errMsg] GetReliefAwardsRsp errMsg
         * @property {Array.<item.IAward>|null} [awards] GetReliefAwardsRsp awards
         */

        /**
         * Constructs a new GetReliefAwardsRsp.
         * @memberof item
         * @classdesc Represents a GetReliefAwardsRsp.
         * @implements IGetReliefAwardsRsp
         * @constructor
         * @param {item.IGetReliefAwardsRsp=} [properties] Properties to set
         */
        function GetReliefAwardsRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetReliefAwardsRsp errCode.
         * @member {number} errCode
         * @memberof item.GetReliefAwardsRsp
         * @instance
         */
        GetReliefAwardsRsp.prototype.errCode = 0;

        /**
         * GetReliefAwardsRsp errMsg.
         * @member {string} errMsg
         * @memberof item.GetReliefAwardsRsp
         * @instance
         */
        GetReliefAwardsRsp.prototype.errMsg = "";

        /**
         * GetReliefAwardsRsp awards.
         * @member {Array.<item.IAward>} awards
         * @memberof item.GetReliefAwardsRsp
         * @instance
         */
        GetReliefAwardsRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetReliefAwardsRsp instance using the specified properties.
         * @function create
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {item.IGetReliefAwardsRsp=} [properties] Properties to set
         * @returns {item.GetReliefAwardsRsp} GetReliefAwardsRsp instance
         */
        GetReliefAwardsRsp.create = function create(properties) {
            return new GetReliefAwardsRsp(properties);
        };

        /**
         * Encodes the specified GetReliefAwardsRsp message. Does not implicitly {@link item.GetReliefAwardsRsp.verify|verify} messages.
         * @function encode
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {item.IGetReliefAwardsRsp} message GetReliefAwardsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefAwardsRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.item.Award.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetReliefAwardsRsp message, length delimited. Does not implicitly {@link item.GetReliefAwardsRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {item.IGetReliefAwardsRsp} message GetReliefAwardsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetReliefAwardsRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetReliefAwardsRsp message from the specified reader or buffer.
         * @function decode
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item.GetReliefAwardsRsp} GetReliefAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefAwardsRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item.GetReliefAwardsRsp();
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
                    message.awards.push($root.item.Award.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetReliefAwardsRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item.GetReliefAwardsRsp} GetReliefAwardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetReliefAwardsRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetReliefAwardsRsp message.
         * @function verify
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetReliefAwardsRsp.verify = function verify(message) {
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
                    var error = $root.item.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetReliefAwardsRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item.GetReliefAwardsRsp} GetReliefAwardsRsp
         */
        GetReliefAwardsRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.item.GetReliefAwardsRsp)
                return object;
            var message = new $root.item.GetReliefAwardsRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".item.GetReliefAwardsRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".item.GetReliefAwardsRsp.awards: object expected");
                    message.awards[i] = $root.item.Award.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetReliefAwardsRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item.GetReliefAwardsRsp
         * @static
         * @param {item.GetReliefAwardsRsp} message GetReliefAwardsRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetReliefAwardsRsp.toObject = function toObject(message, options) {
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
                    object.awards[j] = $root.item.Award.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetReliefAwardsRsp to JSON.
         * @function toJSON
         * @memberof item.GetReliefAwardsRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetReliefAwardsRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReliefAwardsRsp;
    })();

    return item;
})();

module.exports = $root.item;
