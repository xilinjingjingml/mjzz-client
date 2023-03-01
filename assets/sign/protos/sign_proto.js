/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sign = (function() {

    /**
     * Namespace sign.
     * @exports sign
     * @namespace
     */
    var sign = {};

    sign.Sign = (function() {

        /**
         * Constructs a new Sign service.
         * @memberof sign
         * @classdesc Represents a Sign
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Sign(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Sign.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Sign;

        /**
         * Creates new Sign service using the specified rpc implementation.
         * @function create
         * @memberof sign.Sign
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Sign} RPC service. Useful where requests and/or responses are streamed.
         */
        Sign.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link sign.Sign#getSignProgress}.
         * @memberof sign.Sign
         * @typedef GetSignProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {sign.GetSignProgressRsp} [response] GetSignProgressRsp
         */

        /**
         * Calls GetSignProgress.
         * @function getSignProgress
         * @memberof sign.Sign
         * @instance
         * @param {sign.IGetSignProgressReq} request GetSignProgressReq message or plain object
         * @param {sign.Sign.GetSignProgressCallback} callback Node-style callback called with the error, if any, and GetSignProgressRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Sign.prototype.getSignProgress = function getSignProgress(request, callback) {
            return this.rpcCall(getSignProgress, $root.sign.GetSignProgressReq, $root.sign.GetSignProgressRsp, request, callback);
        }, "name", { value: "GetSignProgress" });

        /**
         * Calls GetSignProgress.
         * @function getSignProgress
         * @memberof sign.Sign
         * @instance
         * @param {sign.IGetSignProgressReq} request GetSignProgressReq message or plain object
         * @returns {Promise<sign.GetSignProgressRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link sign.Sign#uptSignAdState}.
         * @memberof sign.Sign
         * @typedef UptSignAdStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {sign.UptSignAdStateRsp} [response] UptSignAdStateRsp
         */

        /**
         * Calls UptSignAdState.
         * @function uptSignAdState
         * @memberof sign.Sign
         * @instance
         * @param {sign.IUptSignAdStateReq} request UptSignAdStateReq message or plain object
         * @param {sign.Sign.UptSignAdStateCallback} callback Node-style callback called with the error, if any, and UptSignAdStateRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Sign.prototype.uptSignAdState = function uptSignAdState(request, callback) {
            return this.rpcCall(uptSignAdState, $root.sign.UptSignAdStateReq, $root.sign.UptSignAdStateRsp, request, callback);
        }, "name", { value: "UptSignAdState" });

        /**
         * Calls UptSignAdState.
         * @function uptSignAdState
         * @memberof sign.Sign
         * @instance
         * @param {sign.IUptSignAdStateReq} request UptSignAdStateReq message or plain object
         * @returns {Promise<sign.UptSignAdStateRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link sign.Sign#getSignAward}.
         * @memberof sign.Sign
         * @typedef GetSignAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {sign.GetSignAwardRsp} [response] GetSignAwardRsp
         */

        /**
         * Calls GetSignAward.
         * @function getSignAward
         * @memberof sign.Sign
         * @instance
         * @param {sign.IGetSignAwardReq} request GetSignAwardReq message or plain object
         * @param {sign.Sign.GetSignAwardCallback} callback Node-style callback called with the error, if any, and GetSignAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Sign.prototype.getSignAward = function getSignAward(request, callback) {
            return this.rpcCall(getSignAward, $root.sign.GetSignAwardReq, $root.sign.GetSignAwardRsp, request, callback);
        }, "name", { value: "GetSignAward" });

        /**
         * Calls GetSignAward.
         * @function getSignAward
         * @memberof sign.Sign
         * @instance
         * @param {sign.IGetSignAwardReq} request GetSignAwardReq message or plain object
         * @returns {Promise<sign.GetSignAwardRsp>} Promise
         * @variation 2
         */

        return Sign;
    })();

    sign.GetSignProgressReq = (function() {

        /**
         * Properties of a GetSignProgressReq.
         * @memberof sign
         * @interface IGetSignProgressReq
         * @property {number|Long|null} [uid] GetSignProgressReq uid
         */

        /**
         * Constructs a new GetSignProgressReq.
         * @memberof sign
         * @classdesc Represents a GetSignProgressReq.
         * @implements IGetSignProgressReq
         * @constructor
         * @param {sign.IGetSignProgressReq=} [properties] Properties to set
         */
        function GetSignProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSignProgressReq uid.
         * @member {number|Long} uid
         * @memberof sign.GetSignProgressReq
         * @instance
         */
        GetSignProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetSignProgressReq instance using the specified properties.
         * @function create
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {sign.IGetSignProgressReq=} [properties] Properties to set
         * @returns {sign.GetSignProgressReq} GetSignProgressReq instance
         */
        GetSignProgressReq.create = function create(properties) {
            return new GetSignProgressReq(properties);
        };

        /**
         * Encodes the specified GetSignProgressReq message. Does not implicitly {@link sign.GetSignProgressReq.verify|verify} messages.
         * @function encode
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {sign.IGetSignProgressReq} message GetSignProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetSignProgressReq message, length delimited. Does not implicitly {@link sign.GetSignProgressReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {sign.IGetSignProgressReq} message GetSignProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSignProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.GetSignProgressReq} GetSignProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.GetSignProgressReq();
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
         * Decodes a GetSignProgressReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.GetSignProgressReq} GetSignProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignProgressReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSignProgressReq message.
         * @function verify
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSignProgressReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetSignProgressReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.GetSignProgressReq} GetSignProgressReq
         */
        GetSignProgressReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.GetSignProgressReq)
                return object;
            var message = new $root.sign.GetSignProgressReq();
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
         * Creates a plain object from a GetSignProgressReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.GetSignProgressReq
         * @static
         * @param {sign.GetSignProgressReq} message GetSignProgressReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSignProgressReq.toObject = function toObject(message, options) {
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
         * Converts this GetSignProgressReq to JSON.
         * @function toJSON
         * @memberof sign.GetSignProgressReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSignProgressReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSignProgressReq;
    })();

    sign.AwardItem = (function() {

        /**
         * Properties of an AwardItem.
         * @memberof sign
         * @interface IAwardItem
         * @property {number|null} [id] AwardItem id
         * @property {number|Long|null} [num] AwardItem num
         * @property {string|null} [icon] AwardItem icon
         */

        /**
         * Constructs a new AwardItem.
         * @memberof sign
         * @classdesc Represents an AwardItem.
         * @implements IAwardItem
         * @constructor
         * @param {sign.IAwardItem=} [properties] Properties to set
         */
        function AwardItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardItem id.
         * @member {number} id
         * @memberof sign.AwardItem
         * @instance
         */
        AwardItem.prototype.id = 0;

        /**
         * AwardItem num.
         * @member {number|Long} num
         * @memberof sign.AwardItem
         * @instance
         */
        AwardItem.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AwardItem icon.
         * @member {string} icon
         * @memberof sign.AwardItem
         * @instance
         */
        AwardItem.prototype.icon = "";

        /**
         * Creates a new AwardItem instance using the specified properties.
         * @function create
         * @memberof sign.AwardItem
         * @static
         * @param {sign.IAwardItem=} [properties] Properties to set
         * @returns {sign.AwardItem} AwardItem instance
         */
        AwardItem.create = function create(properties) {
            return new AwardItem(properties);
        };

        /**
         * Encodes the specified AwardItem message. Does not implicitly {@link sign.AwardItem.verify|verify} messages.
         * @function encode
         * @memberof sign.AwardItem
         * @static
         * @param {sign.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified AwardItem message, length delimited. Does not implicitly {@link sign.AwardItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.AwardItem
         * @static
         * @param {sign.IAwardItem} message AwardItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof sign.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.AwardItem} AwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.AwardItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                case 3:
                    message.icon = reader.string();
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
         * @memberof sign.AwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.AwardItem} AwardItem
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
         * @memberof sign.AwardItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates an AwardItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.AwardItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.AwardItem} AwardItem
         */
        AwardItem.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.AwardItem)
                return object;
            var message = new $root.sign.AwardItem();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from an AwardItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.AwardItem
         * @static
         * @param {sign.AwardItem} message AwardItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
                object.icon = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this AwardItem to JSON.
         * @function toJSON
         * @memberof sign.AwardItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardItem;
    })();

    sign.DailyItem = (function() {

        /**
         * Properties of a DailyItem.
         * @memberof sign
         * @interface IDailyItem
         * @property {number|null} [day] DailyItem day
         * @property {number|null} [awardStatus] DailyItem awardStatus
         * @property {Array.<sign.IAwardItem>|null} [awards] DailyItem awards
         */

        /**
         * Constructs a new DailyItem.
         * @memberof sign
         * @classdesc Represents a DailyItem.
         * @implements IDailyItem
         * @constructor
         * @param {sign.IDailyItem=} [properties] Properties to set
         */
        function DailyItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailyItem day.
         * @member {number} day
         * @memberof sign.DailyItem
         * @instance
         */
        DailyItem.prototype.day = 0;

        /**
         * DailyItem awardStatus.
         * @member {number} awardStatus
         * @memberof sign.DailyItem
         * @instance
         */
        DailyItem.prototype.awardStatus = 0;

        /**
         * DailyItem awards.
         * @member {Array.<sign.IAwardItem>} awards
         * @memberof sign.DailyItem
         * @instance
         */
        DailyItem.prototype.awards = $util.emptyArray;

        /**
         * Creates a new DailyItem instance using the specified properties.
         * @function create
         * @memberof sign.DailyItem
         * @static
         * @param {sign.IDailyItem=} [properties] Properties to set
         * @returns {sign.DailyItem} DailyItem instance
         */
        DailyItem.create = function create(properties) {
            return new DailyItem(properties);
        };

        /**
         * Encodes the specified DailyItem message. Does not implicitly {@link sign.DailyItem.verify|verify} messages.
         * @function encode
         * @memberof sign.DailyItem
         * @static
         * @param {sign.IDailyItem} message DailyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.awardStatus);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.sign.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DailyItem message, length delimited. Does not implicitly {@link sign.DailyItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.DailyItem
         * @static
         * @param {sign.IDailyItem} message DailyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailyItem message from the specified reader or buffer.
         * @function decode
         * @memberof sign.DailyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.DailyItem} DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.DailyItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.awardStatus = reader.int32();
                    break;
                case 3:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.sign.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DailyItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.DailyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.DailyItem} DailyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailyItem message.
         * @function verify
         * @memberof sign.DailyItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailyItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                if (!$util.isInteger(message.awardStatus))
                    return "awardStatus: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.sign.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DailyItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.DailyItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.DailyItem} DailyItem
         */
        DailyItem.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.DailyItem)
                return object;
            var message = new $root.sign.DailyItem();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.awardStatus != null)
                message.awardStatus = object.awardStatus | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".sign.DailyItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".sign.DailyItem.awards: object expected");
                    message.awards[i] = $root.sign.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DailyItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.DailyItem
         * @static
         * @param {sign.DailyItem} message DailyItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailyItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.day = 0;
                object.awardStatus = 0;
            }
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                object.awardStatus = message.awardStatus;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.sign.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this DailyItem to JSON.
         * @function toJSON
         * @memberof sign.DailyItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailyItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailyItem;
    })();

    sign.AccumulateItem = (function() {

        /**
         * Properties of an AccumulateItem.
         * @memberof sign
         * @interface IAccumulateItem
         * @property {number|null} [count] AccumulateItem count
         * @property {number|null} [awardStatus] AccumulateItem awardStatus
         * @property {Array.<sign.IAwardItem>|null} [awards] AccumulateItem awards
         */

        /**
         * Constructs a new AccumulateItem.
         * @memberof sign
         * @classdesc Represents an AccumulateItem.
         * @implements IAccumulateItem
         * @constructor
         * @param {sign.IAccumulateItem=} [properties] Properties to set
         */
        function AccumulateItem(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccumulateItem count.
         * @member {number} count
         * @memberof sign.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.count = 0;

        /**
         * AccumulateItem awardStatus.
         * @member {number} awardStatus
         * @memberof sign.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.awardStatus = 0;

        /**
         * AccumulateItem awards.
         * @member {Array.<sign.IAwardItem>} awards
         * @memberof sign.AccumulateItem
         * @instance
         */
        AccumulateItem.prototype.awards = $util.emptyArray;

        /**
         * Creates a new AccumulateItem instance using the specified properties.
         * @function create
         * @memberof sign.AccumulateItem
         * @static
         * @param {sign.IAccumulateItem=} [properties] Properties to set
         * @returns {sign.AccumulateItem} AccumulateItem instance
         */
        AccumulateItem.create = function create(properties) {
            return new AccumulateItem(properties);
        };

        /**
         * Encodes the specified AccumulateItem message. Does not implicitly {@link sign.AccumulateItem.verify|verify} messages.
         * @function encode
         * @memberof sign.AccumulateItem
         * @static
         * @param {sign.IAccumulateItem} message AccumulateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulateItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.awardStatus);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.sign.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccumulateItem message, length delimited. Does not implicitly {@link sign.AccumulateItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.AccumulateItem
         * @static
         * @param {sign.IAccumulateItem} message AccumulateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulateItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer.
         * @function decode
         * @memberof sign.AccumulateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.AccumulateItem} AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulateItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.AccumulateItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                case 2:
                    message.awardStatus = reader.int32();
                    break;
                case 3:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.sign.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccumulateItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.AccumulateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.AccumulateItem} AccumulateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulateItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccumulateItem message.
         * @function verify
         * @memberof sign.AccumulateItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccumulateItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                if (!$util.isInteger(message.awardStatus))
                    return "awardStatus: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.sign.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AccumulateItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.AccumulateItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.AccumulateItem} AccumulateItem
         */
        AccumulateItem.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.AccumulateItem)
                return object;
            var message = new $root.sign.AccumulateItem();
            if (object.count != null)
                message.count = object.count | 0;
            if (object.awardStatus != null)
                message.awardStatus = object.awardStatus | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".sign.AccumulateItem.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".sign.AccumulateItem.awards: object expected");
                    message.awards[i] = $root.sign.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AccumulateItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.AccumulateItem
         * @static
         * @param {sign.AccumulateItem} message AccumulateItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccumulateItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.count = 0;
                object.awardStatus = 0;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.awardStatus != null && message.hasOwnProperty("awardStatus"))
                object.awardStatus = message.awardStatus;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.sign.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this AccumulateItem to JSON.
         * @function toJSON
         * @memberof sign.AccumulateItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccumulateItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccumulateItem;
    })();

    sign.UserItem = (function() {

        /**
         * Properties of a UserItem.
         * @memberof sign
         * @interface IUserItem
         * @property {number|Long|null} [uid] UserItem uid
         * @property {string|null} [daily] UserItem daily
         * @property {number|Long|null} [dailyTime] UserItem dailyTime
         * @property {string|null} [accumulate] UserItem accumulate
         * @property {number|Long|null} [accumulateTime] UserItem accumulateTime
         */

        /**
         * Constructs a new UserItem.
         * @memberof sign
         * @classdesc Represents a UserItem.
         * @implements IUserItem
         * @constructor
         * @param {sign.IUserItem=} [properties] Properties to set
         */
        function UserItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserItem uid.
         * @member {number|Long} uid
         * @memberof sign.UserItem
         * @instance
         */
        UserItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserItem daily.
         * @member {string} daily
         * @memberof sign.UserItem
         * @instance
         */
        UserItem.prototype.daily = "";

        /**
         * UserItem dailyTime.
         * @member {number|Long} dailyTime
         * @memberof sign.UserItem
         * @instance
         */
        UserItem.prototype.dailyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserItem accumulate.
         * @member {string} accumulate
         * @memberof sign.UserItem
         * @instance
         */
        UserItem.prototype.accumulate = "";

        /**
         * UserItem accumulateTime.
         * @member {number|Long} accumulateTime
         * @memberof sign.UserItem
         * @instance
         */
        UserItem.prototype.accumulateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserItem instance using the specified properties.
         * @function create
         * @memberof sign.UserItem
         * @static
         * @param {sign.IUserItem=} [properties] Properties to set
         * @returns {sign.UserItem} UserItem instance
         */
        UserItem.create = function create(properties) {
            return new UserItem(properties);
        };

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link sign.UserItem.verify|verify} messages.
         * @function encode
         * @memberof sign.UserItem
         * @static
         * @param {sign.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.daily != null && message.hasOwnProperty("daily"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.daily);
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.dailyTime);
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.accumulate);
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.accumulateTime);
            return writer;
        };

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link sign.UserItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.UserItem
         * @static
         * @param {sign.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @function decode
         * @memberof sign.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.UserItem} UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.UserItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.daily = reader.string();
                    break;
                case 3:
                    message.dailyTime = reader.int64();
                    break;
                case 4:
                    message.accumulate = reader.string();
                    break;
                case 5:
                    message.accumulateTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.UserItem} UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserItem message.
         * @function verify
         * @memberof sign.UserItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.daily != null && message.hasOwnProperty("daily"))
                if (!$util.isString(message.daily))
                    return "daily: string expected";
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (!$util.isInteger(message.dailyTime) && !(message.dailyTime && $util.isInteger(message.dailyTime.low) && $util.isInteger(message.dailyTime.high)))
                    return "dailyTime: integer|Long expected";
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                if (!$util.isString(message.accumulate))
                    return "accumulate: string expected";
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (!$util.isInteger(message.accumulateTime) && !(message.accumulateTime && $util.isInteger(message.accumulateTime.low) && $util.isInteger(message.accumulateTime.high)))
                    return "accumulateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.UserItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.UserItem} UserItem
         */
        UserItem.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.UserItem)
                return object;
            var message = new $root.sign.UserItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.daily != null)
                message.daily = String(object.daily);
            if (object.dailyTime != null)
                if ($util.Long)
                    (message.dailyTime = $util.Long.fromValue(object.dailyTime)).unsigned = false;
                else if (typeof object.dailyTime === "string")
                    message.dailyTime = parseInt(object.dailyTime, 10);
                else if (typeof object.dailyTime === "number")
                    message.dailyTime = object.dailyTime;
                else if (typeof object.dailyTime === "object")
                    message.dailyTime = new $util.LongBits(object.dailyTime.low >>> 0, object.dailyTime.high >>> 0).toNumber();
            if (object.accumulate != null)
                message.accumulate = String(object.accumulate);
            if (object.accumulateTime != null)
                if ($util.Long)
                    (message.accumulateTime = $util.Long.fromValue(object.accumulateTime)).unsigned = false;
                else if (typeof object.accumulateTime === "string")
                    message.accumulateTime = parseInt(object.accumulateTime, 10);
                else if (typeof object.accumulateTime === "number")
                    message.accumulateTime = object.accumulateTime;
                else if (typeof object.accumulateTime === "object")
                    message.accumulateTime = new $util.LongBits(object.accumulateTime.low >>> 0, object.accumulateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.UserItem
         * @static
         * @param {sign.UserItem} message UserItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.daily = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dailyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dailyTime = options.longs === String ? "0" : 0;
                object.accumulate = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accumulateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accumulateTime = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.daily != null && message.hasOwnProperty("daily"))
                object.daily = message.daily;
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (typeof message.dailyTime === "number")
                    object.dailyTime = options.longs === String ? String(message.dailyTime) : message.dailyTime;
                else
                    object.dailyTime = options.longs === String ? $util.Long.prototype.toString.call(message.dailyTime) : options.longs === Number ? new $util.LongBits(message.dailyTime.low >>> 0, message.dailyTime.high >>> 0).toNumber() : message.dailyTime;
            if (message.accumulate != null && message.hasOwnProperty("accumulate"))
                object.accumulate = message.accumulate;
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (typeof message.accumulateTime === "number")
                    object.accumulateTime = options.longs === String ? String(message.accumulateTime) : message.accumulateTime;
                else
                    object.accumulateTime = options.longs === String ? $util.Long.prototype.toString.call(message.accumulateTime) : options.longs === Number ? new $util.LongBits(message.accumulateTime.low >>> 0, message.accumulateTime.high >>> 0).toNumber() : message.accumulateTime;
            return object;
        };

        /**
         * Converts this UserItem to JSON.
         * @function toJSON
         * @memberof sign.UserItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserItem;
    })();

    sign.GetSignProgressRsp = (function() {

        /**
         * Properties of a GetSignProgressRsp.
         * @memberof sign
         * @interface IGetSignProgressRsp
         * @property {number|null} [errCode] GetSignProgressRsp errCode
         * @property {string|null} [errMsg] GetSignProgressRsp errMsg
         * @property {number|Long|null} [dailyTime] GetSignProgressRsp dailyTime
         * @property {number|Long|null} [accumulateTime] GetSignProgressRsp accumulateTime
         * @property {Array.<sign.IDailyItem>|null} [dailyItems] GetSignProgressRsp dailyItems
         * @property {Array.<sign.IAccumulateItem>|null} [accumulateItems] GetSignProgressRsp accumulateItems
         */

        /**
         * Constructs a new GetSignProgressRsp.
         * @memberof sign
         * @classdesc Represents a GetSignProgressRsp.
         * @implements IGetSignProgressRsp
         * @constructor
         * @param {sign.IGetSignProgressRsp=} [properties] Properties to set
         */
        function GetSignProgressRsp(properties) {
            this.dailyItems = [];
            this.accumulateItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSignProgressRsp errCode.
         * @member {number} errCode
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.errCode = 0;

        /**
         * GetSignProgressRsp errMsg.
         * @member {string} errMsg
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.errMsg = "";

        /**
         * GetSignProgressRsp dailyTime.
         * @member {number|Long} dailyTime
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.dailyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetSignProgressRsp accumulateTime.
         * @member {number|Long} accumulateTime
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.accumulateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetSignProgressRsp dailyItems.
         * @member {Array.<sign.IDailyItem>} dailyItems
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.dailyItems = $util.emptyArray;

        /**
         * GetSignProgressRsp accumulateItems.
         * @member {Array.<sign.IAccumulateItem>} accumulateItems
         * @memberof sign.GetSignProgressRsp
         * @instance
         */
        GetSignProgressRsp.prototype.accumulateItems = $util.emptyArray;

        /**
         * Creates a new GetSignProgressRsp instance using the specified properties.
         * @function create
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {sign.IGetSignProgressRsp=} [properties] Properties to set
         * @returns {sign.GetSignProgressRsp} GetSignProgressRsp instance
         */
        GetSignProgressRsp.create = function create(properties) {
            return new GetSignProgressRsp(properties);
        };

        /**
         * Encodes the specified GetSignProgressRsp message. Does not implicitly {@link sign.GetSignProgressRsp.verify|verify} messages.
         * @function encode
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {sign.IGetSignProgressRsp} message GetSignProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignProgressRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.dailyTime);
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.accumulateTime);
            if (message.dailyItems != null && message.dailyItems.length)
                for (var i = 0; i < message.dailyItems.length; ++i)
                    $root.sign.DailyItem.encode(message.dailyItems[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.accumulateItems != null && message.accumulateItems.length)
                for (var i = 0; i < message.accumulateItems.length; ++i)
                    $root.sign.AccumulateItem.encode(message.accumulateItems[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetSignProgressRsp message, length delimited. Does not implicitly {@link sign.GetSignProgressRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {sign.IGetSignProgressRsp} message GetSignProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSignProgressRsp message from the specified reader or buffer.
         * @function decode
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.GetSignProgressRsp} GetSignProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignProgressRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.GetSignProgressRsp();
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
                    message.dailyTime = reader.int64();
                    break;
                case 4:
                    message.accumulateTime = reader.int64();
                    break;
                case 5:
                    if (!(message.dailyItems && message.dailyItems.length))
                        message.dailyItems = [];
                    message.dailyItems.push($root.sign.DailyItem.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.accumulateItems && message.accumulateItems.length))
                        message.accumulateItems = [];
                    message.accumulateItems.push($root.sign.AccumulateItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSignProgressRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.GetSignProgressRsp} GetSignProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignProgressRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSignProgressRsp message.
         * @function verify
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSignProgressRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (!$util.isInteger(message.dailyTime) && !(message.dailyTime && $util.isInteger(message.dailyTime.low) && $util.isInteger(message.dailyTime.high)))
                    return "dailyTime: integer|Long expected";
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (!$util.isInteger(message.accumulateTime) && !(message.accumulateTime && $util.isInteger(message.accumulateTime.low) && $util.isInteger(message.accumulateTime.high)))
                    return "accumulateTime: integer|Long expected";
            if (message.dailyItems != null && message.hasOwnProperty("dailyItems")) {
                if (!Array.isArray(message.dailyItems))
                    return "dailyItems: array expected";
                for (var i = 0; i < message.dailyItems.length; ++i) {
                    var error = $root.sign.DailyItem.verify(message.dailyItems[i]);
                    if (error)
                        return "dailyItems." + error;
                }
            }
            if (message.accumulateItems != null && message.hasOwnProperty("accumulateItems")) {
                if (!Array.isArray(message.accumulateItems))
                    return "accumulateItems: array expected";
                for (var i = 0; i < message.accumulateItems.length; ++i) {
                    var error = $root.sign.AccumulateItem.verify(message.accumulateItems[i]);
                    if (error)
                        return "accumulateItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetSignProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.GetSignProgressRsp} GetSignProgressRsp
         */
        GetSignProgressRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.GetSignProgressRsp)
                return object;
            var message = new $root.sign.GetSignProgressRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.dailyTime != null)
                if ($util.Long)
                    (message.dailyTime = $util.Long.fromValue(object.dailyTime)).unsigned = false;
                else if (typeof object.dailyTime === "string")
                    message.dailyTime = parseInt(object.dailyTime, 10);
                else if (typeof object.dailyTime === "number")
                    message.dailyTime = object.dailyTime;
                else if (typeof object.dailyTime === "object")
                    message.dailyTime = new $util.LongBits(object.dailyTime.low >>> 0, object.dailyTime.high >>> 0).toNumber();
            if (object.accumulateTime != null)
                if ($util.Long)
                    (message.accumulateTime = $util.Long.fromValue(object.accumulateTime)).unsigned = false;
                else if (typeof object.accumulateTime === "string")
                    message.accumulateTime = parseInt(object.accumulateTime, 10);
                else if (typeof object.accumulateTime === "number")
                    message.accumulateTime = object.accumulateTime;
                else if (typeof object.accumulateTime === "object")
                    message.accumulateTime = new $util.LongBits(object.accumulateTime.low >>> 0, object.accumulateTime.high >>> 0).toNumber();
            if (object.dailyItems) {
                if (!Array.isArray(object.dailyItems))
                    throw TypeError(".sign.GetSignProgressRsp.dailyItems: array expected");
                message.dailyItems = [];
                for (var i = 0; i < object.dailyItems.length; ++i) {
                    if (typeof object.dailyItems[i] !== "object")
                        throw TypeError(".sign.GetSignProgressRsp.dailyItems: object expected");
                    message.dailyItems[i] = $root.sign.DailyItem.fromObject(object.dailyItems[i]);
                }
            }
            if (object.accumulateItems) {
                if (!Array.isArray(object.accumulateItems))
                    throw TypeError(".sign.GetSignProgressRsp.accumulateItems: array expected");
                message.accumulateItems = [];
                for (var i = 0; i < object.accumulateItems.length; ++i) {
                    if (typeof object.accumulateItems[i] !== "object")
                        throw TypeError(".sign.GetSignProgressRsp.accumulateItems: object expected");
                    message.accumulateItems[i] = $root.sign.AccumulateItem.fromObject(object.accumulateItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetSignProgressRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.GetSignProgressRsp
         * @static
         * @param {sign.GetSignProgressRsp} message GetSignProgressRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSignProgressRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.dailyItems = [];
                object.accumulateItems = [];
            }
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dailyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dailyTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accumulateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accumulateTime = options.longs === String ? "0" : 0;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.dailyTime != null && message.hasOwnProperty("dailyTime"))
                if (typeof message.dailyTime === "number")
                    object.dailyTime = options.longs === String ? String(message.dailyTime) : message.dailyTime;
                else
                    object.dailyTime = options.longs === String ? $util.Long.prototype.toString.call(message.dailyTime) : options.longs === Number ? new $util.LongBits(message.dailyTime.low >>> 0, message.dailyTime.high >>> 0).toNumber() : message.dailyTime;
            if (message.accumulateTime != null && message.hasOwnProperty("accumulateTime"))
                if (typeof message.accumulateTime === "number")
                    object.accumulateTime = options.longs === String ? String(message.accumulateTime) : message.accumulateTime;
                else
                    object.accumulateTime = options.longs === String ? $util.Long.prototype.toString.call(message.accumulateTime) : options.longs === Number ? new $util.LongBits(message.accumulateTime.low >>> 0, message.accumulateTime.high >>> 0).toNumber() : message.accumulateTime;
            if (message.dailyItems && message.dailyItems.length) {
                object.dailyItems = [];
                for (var j = 0; j < message.dailyItems.length; ++j)
                    object.dailyItems[j] = $root.sign.DailyItem.toObject(message.dailyItems[j], options);
            }
            if (message.accumulateItems && message.accumulateItems.length) {
                object.accumulateItems = [];
                for (var j = 0; j < message.accumulateItems.length; ++j)
                    object.accumulateItems[j] = $root.sign.AccumulateItem.toObject(message.accumulateItems[j], options);
            }
            return object;
        };

        /**
         * Converts this GetSignProgressRsp to JSON.
         * @function toJSON
         * @memberof sign.GetSignProgressRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSignProgressRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSignProgressRsp;
    })();

    sign.UptSignAdStateReq = (function() {

        /**
         * Properties of an UptSignAdStateReq.
         * @memberof sign
         * @interface IUptSignAdStateReq
         * @property {number|Long|null} [uid] UptSignAdStateReq uid
         * @property {number|null} [state] UptSignAdStateReq state
         * @property {number|null} [typ] UptSignAdStateReq typ
         * @property {number|null} [signDay] UptSignAdStateReq signDay
         */

        /**
         * Constructs a new UptSignAdStateReq.
         * @memberof sign
         * @classdesc Represents an UptSignAdStateReq.
         * @implements IUptSignAdStateReq
         * @constructor
         * @param {sign.IUptSignAdStateReq=} [properties] Properties to set
         */
        function UptSignAdStateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptSignAdStateReq uid.
         * @member {number|Long} uid
         * @memberof sign.UptSignAdStateReq
         * @instance
         */
        UptSignAdStateReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptSignAdStateReq state.
         * @member {number} state
         * @memberof sign.UptSignAdStateReq
         * @instance
         */
        UptSignAdStateReq.prototype.state = 0;

        /**
         * UptSignAdStateReq typ.
         * @member {number} typ
         * @memberof sign.UptSignAdStateReq
         * @instance
         */
        UptSignAdStateReq.prototype.typ = 0;

        /**
         * UptSignAdStateReq signDay.
         * @member {number} signDay
         * @memberof sign.UptSignAdStateReq
         * @instance
         */
        UptSignAdStateReq.prototype.signDay = 0;

        /**
         * Creates a new UptSignAdStateReq instance using the specified properties.
         * @function create
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {sign.IUptSignAdStateReq=} [properties] Properties to set
         * @returns {sign.UptSignAdStateReq} UptSignAdStateReq instance
         */
        UptSignAdStateReq.create = function create(properties) {
            return new UptSignAdStateReq(properties);
        };

        /**
         * Encodes the specified UptSignAdStateReq message. Does not implicitly {@link sign.UptSignAdStateReq.verify|verify} messages.
         * @function encode
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {sign.IUptSignAdStateReq} message UptSignAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptSignAdStateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.typ != null && message.hasOwnProperty("typ"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.typ);
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.signDay);
            return writer;
        };

        /**
         * Encodes the specified UptSignAdStateReq message, length delimited. Does not implicitly {@link sign.UptSignAdStateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {sign.IUptSignAdStateReq} message UptSignAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptSignAdStateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptSignAdStateReq message from the specified reader or buffer.
         * @function decode
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.UptSignAdStateReq} UptSignAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptSignAdStateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.UptSignAdStateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.typ = reader.int32();
                    break;
                case 4:
                    message.signDay = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UptSignAdStateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.UptSignAdStateReq} UptSignAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptSignAdStateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptSignAdStateReq message.
         * @function verify
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptSignAdStateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.typ != null && message.hasOwnProperty("typ"))
                if (!$util.isInteger(message.typ))
                    return "typ: integer expected";
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                if (!$util.isInteger(message.signDay))
                    return "signDay: integer expected";
            return null;
        };

        /**
         * Creates an UptSignAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.UptSignAdStateReq} UptSignAdStateReq
         */
        UptSignAdStateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.UptSignAdStateReq)
                return object;
            var message = new $root.sign.UptSignAdStateReq();
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
            if (object.typ != null)
                message.typ = object.typ | 0;
            if (object.signDay != null)
                message.signDay = object.signDay | 0;
            return message;
        };

        /**
         * Creates a plain object from an UptSignAdStateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.UptSignAdStateReq
         * @static
         * @param {sign.UptSignAdStateReq} message UptSignAdStateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptSignAdStateReq.toObject = function toObject(message, options) {
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
                object.typ = 0;
                object.signDay = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.typ != null && message.hasOwnProperty("typ"))
                object.typ = message.typ;
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                object.signDay = message.signDay;
            return object;
        };

        /**
         * Converts this UptSignAdStateReq to JSON.
         * @function toJSON
         * @memberof sign.UptSignAdStateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptSignAdStateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptSignAdStateReq;
    })();

    sign.UptSignAdStateRsp = (function() {

        /**
         * Properties of an UptSignAdStateRsp.
         * @memberof sign
         * @interface IUptSignAdStateRsp
         * @property {number|null} [errCode] UptSignAdStateRsp errCode
         * @property {string|null} [errMsg] UptSignAdStateRsp errMsg
         */

        /**
         * Constructs a new UptSignAdStateRsp.
         * @memberof sign
         * @classdesc Represents an UptSignAdStateRsp.
         * @implements IUptSignAdStateRsp
         * @constructor
         * @param {sign.IUptSignAdStateRsp=} [properties] Properties to set
         */
        function UptSignAdStateRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptSignAdStateRsp errCode.
         * @member {number} errCode
         * @memberof sign.UptSignAdStateRsp
         * @instance
         */
        UptSignAdStateRsp.prototype.errCode = 0;

        /**
         * UptSignAdStateRsp errMsg.
         * @member {string} errMsg
         * @memberof sign.UptSignAdStateRsp
         * @instance
         */
        UptSignAdStateRsp.prototype.errMsg = "";

        /**
         * Creates a new UptSignAdStateRsp instance using the specified properties.
         * @function create
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {sign.IUptSignAdStateRsp=} [properties] Properties to set
         * @returns {sign.UptSignAdStateRsp} UptSignAdStateRsp instance
         */
        UptSignAdStateRsp.create = function create(properties) {
            return new UptSignAdStateRsp(properties);
        };

        /**
         * Encodes the specified UptSignAdStateRsp message. Does not implicitly {@link sign.UptSignAdStateRsp.verify|verify} messages.
         * @function encode
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {sign.IUptSignAdStateRsp} message UptSignAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptSignAdStateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptSignAdStateRsp message, length delimited. Does not implicitly {@link sign.UptSignAdStateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {sign.IUptSignAdStateRsp} message UptSignAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptSignAdStateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptSignAdStateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.UptSignAdStateRsp} UptSignAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptSignAdStateRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.UptSignAdStateRsp();
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
         * Decodes an UptSignAdStateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.UptSignAdStateRsp} UptSignAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptSignAdStateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptSignAdStateRsp message.
         * @function verify
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptSignAdStateRsp.verify = function verify(message) {
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
         * Creates an UptSignAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.UptSignAdStateRsp} UptSignAdStateRsp
         */
        UptSignAdStateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.UptSignAdStateRsp)
                return object;
            var message = new $root.sign.UptSignAdStateRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptSignAdStateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.UptSignAdStateRsp
         * @static
         * @param {sign.UptSignAdStateRsp} message UptSignAdStateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptSignAdStateRsp.toObject = function toObject(message, options) {
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
         * Converts this UptSignAdStateRsp to JSON.
         * @function toJSON
         * @memberof sign.UptSignAdStateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptSignAdStateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptSignAdStateRsp;
    })();

    sign.GetSignAwardReq = (function() {

        /**
         * Properties of a GetSignAwardReq.
         * @memberof sign
         * @interface IGetSignAwardReq
         * @property {number|Long|null} [uid] GetSignAwardReq uid
         * @property {number|null} [signType] GetSignAwardReq signType
         * @property {number|null} [signDay] GetSignAwardReq signDay
         * @property {number|null} [awardType] GetSignAwardReq awardType
         */

        /**
         * Constructs a new GetSignAwardReq.
         * @memberof sign
         * @classdesc Represents a GetSignAwardReq.
         * @implements IGetSignAwardReq
         * @constructor
         * @param {sign.IGetSignAwardReq=} [properties] Properties to set
         */
        function GetSignAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSignAwardReq uid.
         * @member {number|Long} uid
         * @memberof sign.GetSignAwardReq
         * @instance
         */
        GetSignAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetSignAwardReq signType.
         * @member {number} signType
         * @memberof sign.GetSignAwardReq
         * @instance
         */
        GetSignAwardReq.prototype.signType = 0;

        /**
         * GetSignAwardReq signDay.
         * @member {number} signDay
         * @memberof sign.GetSignAwardReq
         * @instance
         */
        GetSignAwardReq.prototype.signDay = 0;

        /**
         * GetSignAwardReq awardType.
         * @member {number} awardType
         * @memberof sign.GetSignAwardReq
         * @instance
         */
        GetSignAwardReq.prototype.awardType = 0;

        /**
         * Creates a new GetSignAwardReq instance using the specified properties.
         * @function create
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {sign.IGetSignAwardReq=} [properties] Properties to set
         * @returns {sign.GetSignAwardReq} GetSignAwardReq instance
         */
        GetSignAwardReq.create = function create(properties) {
            return new GetSignAwardReq(properties);
        };

        /**
         * Encodes the specified GetSignAwardReq message. Does not implicitly {@link sign.GetSignAwardReq.verify|verify} messages.
         * @function encode
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {sign.IGetSignAwardReq} message GetSignAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.signType != null && message.hasOwnProperty("signType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.signType);
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.signDay);
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardType);
            return writer;
        };

        /**
         * Encodes the specified GetSignAwardReq message, length delimited. Does not implicitly {@link sign.GetSignAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {sign.IGetSignAwardReq} message GetSignAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSignAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.GetSignAwardReq} GetSignAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.GetSignAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.signType = reader.int32();
                    break;
                case 3:
                    message.signDay = reader.int32();
                    break;
                case 4:
                    message.awardType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSignAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.GetSignAwardReq} GetSignAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSignAwardReq message.
         * @function verify
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSignAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.signType != null && message.hasOwnProperty("signType"))
                if (!$util.isInteger(message.signType))
                    return "signType: integer expected";
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                if (!$util.isInteger(message.signDay))
                    return "signDay: integer expected";
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                if (!$util.isInteger(message.awardType))
                    return "awardType: integer expected";
            return null;
        };

        /**
         * Creates a GetSignAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.GetSignAwardReq} GetSignAwardReq
         */
        GetSignAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.GetSignAwardReq)
                return object;
            var message = new $root.sign.GetSignAwardReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.signType != null)
                message.signType = object.signType | 0;
            if (object.signDay != null)
                message.signDay = object.signDay | 0;
            if (object.awardType != null)
                message.awardType = object.awardType | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetSignAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.GetSignAwardReq
         * @static
         * @param {sign.GetSignAwardReq} message GetSignAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSignAwardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.signType = 0;
                object.signDay = 0;
                object.awardType = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.signType != null && message.hasOwnProperty("signType"))
                object.signType = message.signType;
            if (message.signDay != null && message.hasOwnProperty("signDay"))
                object.signDay = message.signDay;
            if (message.awardType != null && message.hasOwnProperty("awardType"))
                object.awardType = message.awardType;
            return object;
        };

        /**
         * Converts this GetSignAwardReq to JSON.
         * @function toJSON
         * @memberof sign.GetSignAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSignAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSignAwardReq;
    })();

    sign.GetSignAwardRsp = (function() {

        /**
         * Properties of a GetSignAwardRsp.
         * @memberof sign
         * @interface IGetSignAwardRsp
         * @property {number|null} [errCode] GetSignAwardRsp errCode
         * @property {string|null} [errMsg] GetSignAwardRsp errMsg
         * @property {Array.<sign.IAwardItem>|null} [awards] GetSignAwardRsp awards
         */

        /**
         * Constructs a new GetSignAwardRsp.
         * @memberof sign
         * @classdesc Represents a GetSignAwardRsp.
         * @implements IGetSignAwardRsp
         * @constructor
         * @param {sign.IGetSignAwardRsp=} [properties] Properties to set
         */
        function GetSignAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSignAwardRsp errCode.
         * @member {number} errCode
         * @memberof sign.GetSignAwardRsp
         * @instance
         */
        GetSignAwardRsp.prototype.errCode = 0;

        /**
         * GetSignAwardRsp errMsg.
         * @member {string} errMsg
         * @memberof sign.GetSignAwardRsp
         * @instance
         */
        GetSignAwardRsp.prototype.errMsg = "";

        /**
         * GetSignAwardRsp awards.
         * @member {Array.<sign.IAwardItem>} awards
         * @memberof sign.GetSignAwardRsp
         * @instance
         */
        GetSignAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetSignAwardRsp instance using the specified properties.
         * @function create
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {sign.IGetSignAwardRsp=} [properties] Properties to set
         * @returns {sign.GetSignAwardRsp} GetSignAwardRsp instance
         */
        GetSignAwardRsp.create = function create(properties) {
            return new GetSignAwardRsp(properties);
        };

        /**
         * Encodes the specified GetSignAwardRsp message. Does not implicitly {@link sign.GetSignAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {sign.IGetSignAwardRsp} message GetSignAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.sign.AwardItem.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetSignAwardRsp message, length delimited. Does not implicitly {@link sign.GetSignAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {sign.IGetSignAwardRsp} message GetSignAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSignAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSignAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.GetSignAwardRsp} GetSignAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.GetSignAwardRsp();
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
                    message.awards.push($root.sign.AwardItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSignAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.GetSignAwardRsp} GetSignAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSignAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSignAwardRsp message.
         * @function verify
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSignAwardRsp.verify = function verify(message) {
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
                    var error = $root.sign.AwardItem.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetSignAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.GetSignAwardRsp} GetSignAwardRsp
         */
        GetSignAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.GetSignAwardRsp)
                return object;
            var message = new $root.sign.GetSignAwardRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".sign.GetSignAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".sign.GetSignAwardRsp.awards: object expected");
                    message.awards[i] = $root.sign.AwardItem.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetSignAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.GetSignAwardRsp
         * @static
         * @param {sign.GetSignAwardRsp} message GetSignAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSignAwardRsp.toObject = function toObject(message, options) {
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
                    object.awards[j] = $root.sign.AwardItem.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetSignAwardRsp to JSON.
         * @function toJSON
         * @memberof sign.GetSignAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSignAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetSignAwardRsp;
    })();

    sign.SignAwardNot = (function() {

        /**
         * Properties of a SignAwardNot.
         * @memberof sign
         * @interface ISignAwardNot
         * @property {boolean|null} [haveRewards] SignAwardNot haveRewards
         * @property {number|null} [style] SignAwardNot style
         * @property {string|null} [desc] SignAwardNot desc
         * @property {number|null} [align] SignAwardNot align
         * @property {boolean|null} [flip] SignAwardNot flip
         */

        /**
         * Constructs a new SignAwardNot.
         * @memberof sign
         * @classdesc Represents a SignAwardNot.
         * @implements ISignAwardNot
         * @constructor
         * @param {sign.ISignAwardNot=} [properties] Properties to set
         */
        function SignAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignAwardNot haveRewards.
         * @member {boolean} haveRewards
         * @memberof sign.SignAwardNot
         * @instance
         */
        SignAwardNot.prototype.haveRewards = false;

        /**
         * SignAwardNot style.
         * @member {number} style
         * @memberof sign.SignAwardNot
         * @instance
         */
        SignAwardNot.prototype.style = 0;

        /**
         * SignAwardNot desc.
         * @member {string} desc
         * @memberof sign.SignAwardNot
         * @instance
         */
        SignAwardNot.prototype.desc = "";

        /**
         * SignAwardNot align.
         * @member {number} align
         * @memberof sign.SignAwardNot
         * @instance
         */
        SignAwardNot.prototype.align = 0;

        /**
         * SignAwardNot flip.
         * @member {boolean} flip
         * @memberof sign.SignAwardNot
         * @instance
         */
        SignAwardNot.prototype.flip = false;

        /**
         * Creates a new SignAwardNot instance using the specified properties.
         * @function create
         * @memberof sign.SignAwardNot
         * @static
         * @param {sign.ISignAwardNot=} [properties] Properties to set
         * @returns {sign.SignAwardNot} SignAwardNot instance
         */
        SignAwardNot.create = function create(properties) {
            return new SignAwardNot(properties);
        };

        /**
         * Encodes the specified SignAwardNot message. Does not implicitly {@link sign.SignAwardNot.verify|verify} messages.
         * @function encode
         * @memberof sign.SignAwardNot
         * @static
         * @param {sign.ISignAwardNot} message SignAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignAwardNot.encode = function encode(message, writer) {
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
            if (message.flip != null && message.hasOwnProperty("flip"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.flip);
            return writer;
        };

        /**
         * Encodes the specified SignAwardNot message, length delimited. Does not implicitly {@link sign.SignAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sign.SignAwardNot
         * @static
         * @param {sign.ISignAwardNot} message SignAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof sign.SignAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sign.SignAwardNot} SignAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sign.SignAwardNot();
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
                case 5:
                    message.flip = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sign.SignAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sign.SignAwardNot} SignAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignAwardNot message.
         * @function verify
         * @memberof sign.SignAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignAwardNot.verify = function verify(message) {
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
            if (message.flip != null && message.hasOwnProperty("flip"))
                if (typeof message.flip !== "boolean")
                    return "flip: boolean expected";
            return null;
        };

        /**
         * Creates a SignAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sign.SignAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sign.SignAwardNot} SignAwardNot
         */
        SignAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.sign.SignAwardNot)
                return object;
            var message = new $root.sign.SignAwardNot();
            if (object.haveRewards != null)
                message.haveRewards = Boolean(object.haveRewards);
            if (object.style != null)
                message.style = object.style | 0;
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.align != null)
                message.align = object.align | 0;
            if (object.flip != null)
                message.flip = Boolean(object.flip);
            return message;
        };

        /**
         * Creates a plain object from a SignAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sign.SignAwardNot
         * @static
         * @param {sign.SignAwardNot} message SignAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignAwardNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.haveRewards = false;
                object.style = 0;
                object.desc = "";
                object.align = 0;
                object.flip = false;
            }
            if (message.haveRewards != null && message.hasOwnProperty("haveRewards"))
                object.haveRewards = message.haveRewards;
            if (message.style != null && message.hasOwnProperty("style"))
                object.style = message.style;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.align != null && message.hasOwnProperty("align"))
                object.align = message.align;
            if (message.flip != null && message.hasOwnProperty("flip"))
                object.flip = message.flip;
            return object;
        };

        /**
         * Converts this SignAwardNot to JSON.
         * @function toJSON
         * @memberof sign.SignAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignAwardNot;
    })();

    return sign;
})();

module.exports = $root.sign;
