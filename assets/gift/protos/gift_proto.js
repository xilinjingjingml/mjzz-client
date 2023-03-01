/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gift = (function() {

    /**
     * Namespace gift.
     * @exports gift
     * @namespace
     */
    var gift = {};

    gift.Gift = (function() {

        /**
         * Constructs a new Gift service.
         * @memberof gift
         * @classdesc Represents a Gift
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Gift(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Gift.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gift;

        /**
         * Creates new Gift service using the specified rpc implementation.
         * @function create
         * @memberof gift.Gift
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Gift} RPC service. Useful where requests and/or responses are streamed.
         */
        Gift.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gift.Gift#getGiftProgress}.
         * @memberof gift.Gift
         * @typedef GetGiftProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gift.GetGiftProgressRsp} [response] GetGiftProgressRsp
         */

        /**
         * Calls GetGiftProgress.
         * @function getGiftProgress
         * @memberof gift.Gift
         * @instance
         * @param {gift.IGetGiftProgressReq} request GetGiftProgressReq message or plain object
         * @param {gift.Gift.GetGiftProgressCallback} callback Node-style callback called with the error, if any, and GetGiftProgressRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gift.prototype.getGiftProgress = function getGiftProgress(request, callback) {
            return this.rpcCall(getGiftProgress, $root.gift.GetGiftProgressReq, $root.gift.GetGiftProgressRsp, request, callback);
        }, "name", { value: "GetGiftProgress" });

        /**
         * Calls GetGiftProgress.
         * @function getGiftProgress
         * @memberof gift.Gift
         * @instance
         * @param {gift.IGetGiftProgressReq} request GetGiftProgressReq message or plain object
         * @returns {Promise<gift.GetGiftProgressRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gift.Gift#getGiftAward}.
         * @memberof gift.Gift
         * @typedef GetGiftAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gift.GetGiftAwardRsp} [response] GetGiftAwardRsp
         */

        /**
         * Calls GetGiftAward.
         * @function getGiftAward
         * @memberof gift.Gift
         * @instance
         * @param {gift.IGetGiftAwardReq} request GetGiftAwardReq message or plain object
         * @param {gift.Gift.GetGiftAwardCallback} callback Node-style callback called with the error, if any, and GetGiftAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gift.prototype.getGiftAward = function getGiftAward(request, callback) {
            return this.rpcCall(getGiftAward, $root.gift.GetGiftAwardReq, $root.gift.GetGiftAwardRsp, request, callback);
        }, "name", { value: "GetGiftAward" });

        /**
         * Calls GetGiftAward.
         * @function getGiftAward
         * @memberof gift.Gift
         * @instance
         * @param {gift.IGetGiftAwardReq} request GetGiftAwardReq message or plain object
         * @returns {Promise<gift.GetGiftAwardRsp>} Promise
         * @variation 2
         */

        return Gift;
    })();

    gift.GetGiftProgressReq = (function() {

        /**
         * Properties of a GetGiftProgressReq.
         * @memberof gift
         * @interface IGetGiftProgressReq
         * @property {number|Long|null} [uid] GetGiftProgressReq uid
         */

        /**
         * Constructs a new GetGiftProgressReq.
         * @memberof gift
         * @classdesc Represents a GetGiftProgressReq.
         * @implements IGetGiftProgressReq
         * @constructor
         * @param {gift.IGetGiftProgressReq=} [properties] Properties to set
         */
        function GetGiftProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGiftProgressReq uid.
         * @member {number|Long} uid
         * @memberof gift.GetGiftProgressReq
         * @instance
         */
        GetGiftProgressReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetGiftProgressReq instance using the specified properties.
         * @function create
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {gift.IGetGiftProgressReq=} [properties] Properties to set
         * @returns {gift.GetGiftProgressReq} GetGiftProgressReq instance
         */
        GetGiftProgressReq.create = function create(properties) {
            return new GetGiftProgressReq(properties);
        };

        /**
         * Encodes the specified GetGiftProgressReq message. Does not implicitly {@link gift.GetGiftProgressReq.verify|verify} messages.
         * @function encode
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {gift.IGetGiftProgressReq} message GetGiftProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetGiftProgressReq message, length delimited. Does not implicitly {@link gift.GetGiftProgressReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {gift.IGetGiftProgressReq} message GetGiftProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftProgressReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGiftProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.GetGiftProgressReq} GetGiftProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.GetGiftProgressReq();
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
         * Decodes a GetGiftProgressReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.GetGiftProgressReq} GetGiftProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftProgressReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGiftProgressReq message.
         * @function verify
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGiftProgressReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetGiftProgressReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.GetGiftProgressReq} GetGiftProgressReq
         */
        GetGiftProgressReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.GetGiftProgressReq)
                return object;
            var message = new $root.gift.GetGiftProgressReq();
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
         * Creates a plain object from a GetGiftProgressReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.GetGiftProgressReq
         * @static
         * @param {gift.GetGiftProgressReq} message GetGiftProgressReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGiftProgressReq.toObject = function toObject(message, options) {
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
         * Converts this GetGiftProgressReq to JSON.
         * @function toJSON
         * @memberof gift.GetGiftProgressReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGiftProgressReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGiftProgressReq;
    })();

    gift.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof gift
         * @interface IAward
         * @property {number|null} [propId] Award propId
         * @property {number|Long|null} [num] Award num
         * @property {string|null} [icon] Award icon
         */

        /**
         * Constructs a new Award.
         * @memberof gift
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {gift.IAward=} [properties] Properties to set
         */
        function Award(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Award propId.
         * @member {number} propId
         * @memberof gift.Award
         * @instance
         */
        Award.prototype.propId = 0;

        /**
         * Award num.
         * @member {number|Long} num
         * @memberof gift.Award
         * @instance
         */
        Award.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award icon.
         * @member {string} icon
         * @memberof gift.Award
         * @instance
         */
        Award.prototype.icon = "";

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof gift.Award
         * @static
         * @param {gift.IAward=} [properties] Properties to set
         * @returns {gift.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link gift.Award.verify|verify} messages.
         * @function encode
         * @memberof gift.Award
         * @static
         * @param {gift.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.propId != null && message.hasOwnProperty("propId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.propId);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link gift.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.Award
         * @static
         * @param {gift.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof gift.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.Award();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propId = reader.int32();
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
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.Award} Award
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
         * @memberof gift.Award
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Award.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.propId != null && message.hasOwnProperty("propId"))
                if (!$util.isInteger(message.propId))
                    return "propId: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.Award)
                return object;
            var message = new $root.gift.Award();
            if (object.propId != null)
                message.propId = object.propId | 0;
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
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.Award
         * @static
         * @param {gift.Award} message Award
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Award.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.propId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
                object.icon = "";
            }
            if (message.propId != null && message.hasOwnProperty("propId"))
                object.propId = message.propId;
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
         * Converts this Award to JSON.
         * @function toJSON
         * @memberof gift.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    gift.AwardConfig = (function() {

        /**
         * Properties of an AwardConfig.
         * @memberof gift
         * @interface IAwardConfig
         * @property {number|null} [index] AwardConfig index
         * @property {string|null} [id] AwardConfig id
         * @property {number|null} [curNum] AwardConfig curNum
         * @property {number|null} [condNum] AwardConfig condNum
         * @property {Array.<gift.IAward>|null} [awards] AwardConfig awards
         * @property {number|null} [status] AwardConfig status
         */

        /**
         * Constructs a new AwardConfig.
         * @memberof gift
         * @classdesc Represents an AwardConfig.
         * @implements IAwardConfig
         * @constructor
         * @param {gift.IAwardConfig=} [properties] Properties to set
         */
        function AwardConfig(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardConfig index.
         * @member {number} index
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.index = 0;

        /**
         * AwardConfig id.
         * @member {string} id
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.id = "";

        /**
         * AwardConfig curNum.
         * @member {number} curNum
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.curNum = 0;

        /**
         * AwardConfig condNum.
         * @member {number} condNum
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.condNum = 0;

        /**
         * AwardConfig awards.
         * @member {Array.<gift.IAward>} awards
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.awards = $util.emptyArray;

        /**
         * AwardConfig status.
         * @member {number} status
         * @memberof gift.AwardConfig
         * @instance
         */
        AwardConfig.prototype.status = 0;

        /**
         * Creates a new AwardConfig instance using the specified properties.
         * @function create
         * @memberof gift.AwardConfig
         * @static
         * @param {gift.IAwardConfig=} [properties] Properties to set
         * @returns {gift.AwardConfig} AwardConfig instance
         */
        AwardConfig.create = function create(properties) {
            return new AwardConfig(properties);
        };

        /**
         * Encodes the specified AwardConfig message. Does not implicitly {@link gift.AwardConfig.verify|verify} messages.
         * @function encode
         * @memberof gift.AwardConfig
         * @static
         * @param {gift.IAwardConfig} message AwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curNum);
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.condNum);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.gift.Award.encode(message.awards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link gift.AwardConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.AwardConfig
         * @static
         * @param {gift.IAwardConfig} message AwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardConfig message from the specified reader or buffer.
         * @function decode
         * @memberof gift.AwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.AwardConfig} AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.AwardConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.curNum = reader.int32();
                    break;
                case 4:
                    message.condNum = reader.int32();
                    break;
                case 5:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.gift.Award.decode(reader, reader.uint32()));
                    break;
                case 6:
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
         * Decodes an AwardConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.AwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.AwardConfig} AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardConfig message.
         * @function verify
         * @memberof gift.AwardConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (!$util.isInteger(message.curNum))
                    return "curNum: integer expected";
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                if (!$util.isInteger(message.condNum))
                    return "condNum: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.gift.Award.verify(message.awards[i]);
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
         * Creates an AwardConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.AwardConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.AwardConfig} AwardConfig
         */
        AwardConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.AwardConfig)
                return object;
            var message = new $root.gift.AwardConfig();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.curNum != null)
                message.curNum = object.curNum | 0;
            if (object.condNum != null)
                message.condNum = object.condNum | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".gift.AwardConfig.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".gift.AwardConfig.awards: object expected");
                    message.awards[i] = $root.gift.Award.fromObject(object.awards[i]);
                }
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.AwardConfig
         * @static
         * @param {gift.AwardConfig} message AwardConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.index = 0;
                object.id = "";
                object.curNum = 0;
                object.condNum = 0;
                object.status = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                object.curNum = message.curNum;
            if (message.condNum != null && message.hasOwnProperty("condNum"))
                object.condNum = message.condNum;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.gift.Award.toObject(message.awards[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this AwardConfig to JSON.
         * @function toJSON
         * @memberof gift.AwardConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardConfig;
    })();

    gift.GetGiftProgressRsp = (function() {

        /**
         * Properties of a GetGiftProgressRsp.
         * @memberof gift
         * @interface IGetGiftProgressRsp
         * @property {number|null} [code] GetGiftProgressRsp code
         * @property {string|null} [msg] GetGiftProgressRsp msg
         * @property {Array.<gift.IAwardConfig>|null} [configs] GetGiftProgressRsp configs
         */

        /**
         * Constructs a new GetGiftProgressRsp.
         * @memberof gift
         * @classdesc Represents a GetGiftProgressRsp.
         * @implements IGetGiftProgressRsp
         * @constructor
         * @param {gift.IGetGiftProgressRsp=} [properties] Properties to set
         */
        function GetGiftProgressRsp(properties) {
            this.configs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGiftProgressRsp code.
         * @member {number} code
         * @memberof gift.GetGiftProgressRsp
         * @instance
         */
        GetGiftProgressRsp.prototype.code = 0;

        /**
         * GetGiftProgressRsp msg.
         * @member {string} msg
         * @memberof gift.GetGiftProgressRsp
         * @instance
         */
        GetGiftProgressRsp.prototype.msg = "";

        /**
         * GetGiftProgressRsp configs.
         * @member {Array.<gift.IAwardConfig>} configs
         * @memberof gift.GetGiftProgressRsp
         * @instance
         */
        GetGiftProgressRsp.prototype.configs = $util.emptyArray;

        /**
         * Creates a new GetGiftProgressRsp instance using the specified properties.
         * @function create
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {gift.IGetGiftProgressRsp=} [properties] Properties to set
         * @returns {gift.GetGiftProgressRsp} GetGiftProgressRsp instance
         */
        GetGiftProgressRsp.create = function create(properties) {
            return new GetGiftProgressRsp(properties);
        };

        /**
         * Encodes the specified GetGiftProgressRsp message. Does not implicitly {@link gift.GetGiftProgressRsp.verify|verify} messages.
         * @function encode
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {gift.IGetGiftProgressRsp} message GetGiftProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftProgressRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.configs != null && message.configs.length)
                for (var i = 0; i < message.configs.length; ++i)
                    $root.gift.AwardConfig.encode(message.configs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGiftProgressRsp message, length delimited. Does not implicitly {@link gift.GetGiftProgressRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {gift.IGetGiftProgressRsp} message GetGiftProgressRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftProgressRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGiftProgressRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.GetGiftProgressRsp} GetGiftProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftProgressRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.GetGiftProgressRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    if (!(message.configs && message.configs.length))
                        message.configs = [];
                    message.configs.push($root.gift.AwardConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGiftProgressRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.GetGiftProgressRsp} GetGiftProgressRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftProgressRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGiftProgressRsp message.
         * @function verify
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGiftProgressRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.configs != null && message.hasOwnProperty("configs")) {
                if (!Array.isArray(message.configs))
                    return "configs: array expected";
                for (var i = 0; i < message.configs.length; ++i) {
                    var error = $root.gift.AwardConfig.verify(message.configs[i]);
                    if (error)
                        return "configs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGiftProgressRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.GetGiftProgressRsp} GetGiftProgressRsp
         */
        GetGiftProgressRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.GetGiftProgressRsp)
                return object;
            var message = new $root.gift.GetGiftProgressRsp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.configs) {
                if (!Array.isArray(object.configs))
                    throw TypeError(".gift.GetGiftProgressRsp.configs: array expected");
                message.configs = [];
                for (var i = 0; i < object.configs.length; ++i) {
                    if (typeof object.configs[i] !== "object")
                        throw TypeError(".gift.GetGiftProgressRsp.configs: object expected");
                    message.configs[i] = $root.gift.AwardConfig.fromObject(object.configs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGiftProgressRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.GetGiftProgressRsp
         * @static
         * @param {gift.GetGiftProgressRsp} message GetGiftProgressRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGiftProgressRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.configs = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.configs && message.configs.length) {
                object.configs = [];
                for (var j = 0; j < message.configs.length; ++j)
                    object.configs[j] = $root.gift.AwardConfig.toObject(message.configs[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGiftProgressRsp to JSON.
         * @function toJSON
         * @memberof gift.GetGiftProgressRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGiftProgressRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGiftProgressRsp;
    })();

    gift.GetGiftAwardReq = (function() {

        /**
         * Properties of a GetGiftAwardReq.
         * @memberof gift
         * @interface IGetGiftAwardReq
         * @property {number|Long|null} [uid] GetGiftAwardReq uid
         * @property {string|null} [id] GetGiftAwardReq id
         */

        /**
         * Constructs a new GetGiftAwardReq.
         * @memberof gift
         * @classdesc Represents a GetGiftAwardReq.
         * @implements IGetGiftAwardReq
         * @constructor
         * @param {gift.IGetGiftAwardReq=} [properties] Properties to set
         */
        function GetGiftAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGiftAwardReq uid.
         * @member {number|Long} uid
         * @memberof gift.GetGiftAwardReq
         * @instance
         */
        GetGiftAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetGiftAwardReq id.
         * @member {string} id
         * @memberof gift.GetGiftAwardReq
         * @instance
         */
        GetGiftAwardReq.prototype.id = "";

        /**
         * Creates a new GetGiftAwardReq instance using the specified properties.
         * @function create
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {gift.IGetGiftAwardReq=} [properties] Properties to set
         * @returns {gift.GetGiftAwardReq} GetGiftAwardReq instance
         */
        GetGiftAwardReq.create = function create(properties) {
            return new GetGiftAwardReq(properties);
        };

        /**
         * Encodes the specified GetGiftAwardReq message. Does not implicitly {@link gift.GetGiftAwardReq.verify|verify} messages.
         * @function encode
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {gift.IGetGiftAwardReq} message GetGiftAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetGiftAwardReq message, length delimited. Does not implicitly {@link gift.GetGiftAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {gift.IGetGiftAwardReq} message GetGiftAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGiftAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.GetGiftAwardReq} GetGiftAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.GetGiftAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGiftAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.GetGiftAwardReq} GetGiftAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGiftAwardReq message.
         * @function verify
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGiftAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a GetGiftAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.GetGiftAwardReq} GetGiftAwardReq
         */
        GetGiftAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.GetGiftAwardReq)
                return object;
            var message = new $root.gift.GetGiftAwardReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetGiftAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.GetGiftAwardReq
         * @static
         * @param {gift.GetGiftAwardReq} message GetGiftAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGiftAwardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.id = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetGiftAwardReq to JSON.
         * @function toJSON
         * @memberof gift.GetGiftAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGiftAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGiftAwardReq;
    })();

    gift.GetGiftAwardRsp = (function() {

        /**
         * Properties of a GetGiftAwardRsp.
         * @memberof gift
         * @interface IGetGiftAwardRsp
         * @property {number|null} [code] GetGiftAwardRsp code
         * @property {string|null} [msg] GetGiftAwardRsp msg
         * @property {Array.<gift.IAward>|null} [awards] GetGiftAwardRsp awards
         */

        /**
         * Constructs a new GetGiftAwardRsp.
         * @memberof gift
         * @classdesc Represents a GetGiftAwardRsp.
         * @implements IGetGiftAwardRsp
         * @constructor
         * @param {gift.IGetGiftAwardRsp=} [properties] Properties to set
         */
        function GetGiftAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGiftAwardRsp code.
         * @member {number} code
         * @memberof gift.GetGiftAwardRsp
         * @instance
         */
        GetGiftAwardRsp.prototype.code = 0;

        /**
         * GetGiftAwardRsp msg.
         * @member {string} msg
         * @memberof gift.GetGiftAwardRsp
         * @instance
         */
        GetGiftAwardRsp.prototype.msg = "";

        /**
         * GetGiftAwardRsp awards.
         * @member {Array.<gift.IAward>} awards
         * @memberof gift.GetGiftAwardRsp
         * @instance
         */
        GetGiftAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetGiftAwardRsp instance using the specified properties.
         * @function create
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {gift.IGetGiftAwardRsp=} [properties] Properties to set
         * @returns {gift.GetGiftAwardRsp} GetGiftAwardRsp instance
         */
        GetGiftAwardRsp.create = function create(properties) {
            return new GetGiftAwardRsp(properties);
        };

        /**
         * Encodes the specified GetGiftAwardRsp message. Does not implicitly {@link gift.GetGiftAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {gift.IGetGiftAwardRsp} message GetGiftAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.gift.Award.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGiftAwardRsp message, length delimited. Does not implicitly {@link gift.GetGiftAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {gift.IGetGiftAwardRsp} message GetGiftAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGiftAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGiftAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.GetGiftAwardRsp} GetGiftAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.GetGiftAwardRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.gift.Award.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGiftAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.GetGiftAwardRsp} GetGiftAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGiftAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGiftAwardRsp message.
         * @function verify
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGiftAwardRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.gift.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGiftAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.GetGiftAwardRsp} GetGiftAwardRsp
         */
        GetGiftAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.GetGiftAwardRsp)
                return object;
            var message = new $root.gift.GetGiftAwardRsp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".gift.GetGiftAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".gift.GetGiftAwardRsp.awards: object expected");
                    message.awards[i] = $root.gift.Award.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGiftAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.GetGiftAwardRsp
         * @static
         * @param {gift.GetGiftAwardRsp} message GetGiftAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGiftAwardRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.gift.Award.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGiftAwardRsp to JSON.
         * @function toJSON
         * @memberof gift.GetGiftAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGiftAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGiftAwardRsp;
    })();

    gift.GiftAwardNot = (function() {

        /**
         * Properties of a GiftAwardNot.
         * @memberof gift
         * @interface IGiftAwardNot
         * @property {boolean|null} [haveRewards] GiftAwardNot haveRewards
         * @property {number|null} [style] GiftAwardNot style
         * @property {string|null} [desc] GiftAwardNot desc
         * @property {number|null} [align] GiftAwardNot align
         */

        /**
         * Constructs a new GiftAwardNot.
         * @memberof gift
         * @classdesc Represents a GiftAwardNot.
         * @implements IGiftAwardNot
         * @constructor
         * @param {gift.IGiftAwardNot=} [properties] Properties to set
         */
        function GiftAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GiftAwardNot haveRewards.
         * @member {boolean} haveRewards
         * @memberof gift.GiftAwardNot
         * @instance
         */
        GiftAwardNot.prototype.haveRewards = false;

        /**
         * GiftAwardNot style.
         * @member {number} style
         * @memberof gift.GiftAwardNot
         * @instance
         */
        GiftAwardNot.prototype.style = 0;

        /**
         * GiftAwardNot desc.
         * @member {string} desc
         * @memberof gift.GiftAwardNot
         * @instance
         */
        GiftAwardNot.prototype.desc = "";

        /**
         * GiftAwardNot align.
         * @member {number} align
         * @memberof gift.GiftAwardNot
         * @instance
         */
        GiftAwardNot.prototype.align = 0;

        /**
         * Creates a new GiftAwardNot instance using the specified properties.
         * @function create
         * @memberof gift.GiftAwardNot
         * @static
         * @param {gift.IGiftAwardNot=} [properties] Properties to set
         * @returns {gift.GiftAwardNot} GiftAwardNot instance
         */
        GiftAwardNot.create = function create(properties) {
            return new GiftAwardNot(properties);
        };

        /**
         * Encodes the specified GiftAwardNot message. Does not implicitly {@link gift.GiftAwardNot.verify|verify} messages.
         * @function encode
         * @memberof gift.GiftAwardNot
         * @static
         * @param {gift.IGiftAwardNot} message GiftAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GiftAwardNot.encode = function encode(message, writer) {
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
         * Encodes the specified GiftAwardNot message, length delimited. Does not implicitly {@link gift.GiftAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gift.GiftAwardNot
         * @static
         * @param {gift.IGiftAwardNot} message GiftAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GiftAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GiftAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof gift.GiftAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gift.GiftAwardNot} GiftAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GiftAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gift.GiftAwardNot();
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
         * Decodes a GiftAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gift.GiftAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gift.GiftAwardNot} GiftAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GiftAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GiftAwardNot message.
         * @function verify
         * @memberof gift.GiftAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GiftAwardNot.verify = function verify(message) {
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
         * Creates a GiftAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gift.GiftAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gift.GiftAwardNot} GiftAwardNot
         */
        GiftAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gift.GiftAwardNot)
                return object;
            var message = new $root.gift.GiftAwardNot();
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
         * Creates a plain object from a GiftAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gift.GiftAwardNot
         * @static
         * @param {gift.GiftAwardNot} message GiftAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GiftAwardNot.toObject = function toObject(message, options) {
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
         * Converts this GiftAwardNot to JSON.
         * @function toJSON
         * @memberof gift.GiftAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GiftAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GiftAwardNot;
    })();

    return gift;
})();

module.exports = $root.gift;
