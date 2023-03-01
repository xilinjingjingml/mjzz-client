/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lottery = (function() {

    /**
     * Namespace lottery.
     * @exports lottery
     * @namespace
     */
    var lottery = {};

    lottery.Lottery = (function() {

        /**
         * Constructs a new Lottery service.
         * @memberof lottery
         * @classdesc Represents a Lottery
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Lottery(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Lottery.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Lottery;

        /**
         * Creates new Lottery service using the specified rpc implementation.
         * @function create
         * @memberof lottery.Lottery
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Lottery} RPC service. Useful where requests and/or responses are streamed.
         */
        Lottery.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link lottery.Lottery#getLotteryCfg}.
         * @memberof lottery.Lottery
         * @typedef GetLotteryCfgCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lottery.LotteryCfgRsp} [response] LotteryCfgRsp
         */

        /**
         * Calls GetLotteryCfg.
         * @function getLotteryCfg
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.ILotteryCfgReq} request LotteryCfgReq message or plain object
         * @param {lottery.Lottery.GetLotteryCfgCallback} callback Node-style callback called with the error, if any, and LotteryCfgRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lottery.prototype.getLotteryCfg = function getLotteryCfg(request, callback) {
            return this.rpcCall(getLotteryCfg, $root.lottery.LotteryCfgReq, $root.lottery.LotteryCfgRsp, request, callback);
        }, "name", { value: "GetLotteryCfg" });

        /**
         * Calls GetLotteryCfg.
         * @function getLotteryCfg
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.ILotteryCfgReq} request LotteryCfgReq message or plain object
         * @returns {Promise<lottery.LotteryCfgRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lottery.Lottery#uptLotteryAdState}.
         * @memberof lottery.Lottery
         * @typedef UptLotteryAdStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lottery.UptLotteryAdStateRsp} [response] UptLotteryAdStateRsp
         */

        /**
         * Calls UptLotteryAdState.
         * @function uptLotteryAdState
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.IUptLotteryAdStateReq} request UptLotteryAdStateReq message or plain object
         * @param {lottery.Lottery.UptLotteryAdStateCallback} callback Node-style callback called with the error, if any, and UptLotteryAdStateRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lottery.prototype.uptLotteryAdState = function uptLotteryAdState(request, callback) {
            return this.rpcCall(uptLotteryAdState, $root.lottery.UptLotteryAdStateReq, $root.lottery.UptLotteryAdStateRsp, request, callback);
        }, "name", { value: "UptLotteryAdState" });

        /**
         * Calls UptLotteryAdState.
         * @function uptLotteryAdState
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.IUptLotteryAdStateReq} request UptLotteryAdStateReq message or plain object
         * @returns {Promise<lottery.UptLotteryAdStateRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lottery.Lottery#getLotteryAward}.
         * @memberof lottery.Lottery
         * @typedef GetLotteryAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lottery.GetLotteryAwardRsp} [response] GetLotteryAwardRsp
         */

        /**
         * Calls GetLotteryAward.
         * @function getLotteryAward
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.IGetLotteryAwardReq} request GetLotteryAwardReq message or plain object
         * @param {lottery.Lottery.GetLotteryAwardCallback} callback Node-style callback called with the error, if any, and GetLotteryAwardRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lottery.prototype.getLotteryAward = function getLotteryAward(request, callback) {
            return this.rpcCall(getLotteryAward, $root.lottery.GetLotteryAwardReq, $root.lottery.GetLotteryAwardRsp, request, callback);
        }, "name", { value: "GetLotteryAward" });

        /**
         * Calls GetLotteryAward.
         * @function getLotteryAward
         * @memberof lottery.Lottery
         * @instance
         * @param {lottery.IGetLotteryAwardReq} request GetLotteryAwardReq message or plain object
         * @returns {Promise<lottery.GetLotteryAwardRsp>} Promise
         * @variation 2
         */

        return Lottery;
    })();

    lottery.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof lottery
         * @interface IItem
         * @property {number|null} [id] Item id
         * @property {number|Long|null} [num] Item num
         */

        /**
         * Constructs a new Item.
         * @memberof lottery
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {lottery.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {number} id
         * @memberof lottery.Item
         * @instance
         */
        Item.prototype.id = 0;

        /**
         * Item num.
         * @member {number|Long} num
         * @memberof lottery.Item
         * @instance
         */
        Item.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof lottery.Item
         * @static
         * @param {lottery.IItem=} [properties] Properties to set
         * @returns {lottery.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link lottery.Item.verify|verify} messages.
         * @function encode
         * @memberof lottery.Item
         * @static
         * @param {lottery.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link lottery.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.Item
         * @static
         * @param {lottery.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.Item();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof lottery.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.Item)
                return object;
            var message = new $root.lottery.Item();
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
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.Item
         * @static
         * @param {lottery.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
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
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof lottery.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Item;
    })();

    lottery.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof lottery
         * @interface IAward
         * @property {number|null} [itemId] Award itemId
         * @property {number|Long|null} [itemMin] Award itemMin
         * @property {number|Long|null} [itemMax] Award itemMax
         * @property {number|null} [itemIndex] Award itemIndex
         */

        /**
         * Constructs a new Award.
         * @memberof lottery
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {lottery.IAward=} [properties] Properties to set
         */
        function Award(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Award itemId.
         * @member {number} itemId
         * @memberof lottery.Award
         * @instance
         */
        Award.prototype.itemId = 0;

        /**
         * Award itemMin.
         * @member {number|Long} itemMin
         * @memberof lottery.Award
         * @instance
         */
        Award.prototype.itemMin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award itemMax.
         * @member {number|Long} itemMax
         * @memberof lottery.Award
         * @instance
         */
        Award.prototype.itemMax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award itemIndex.
         * @member {number} itemIndex
         * @memberof lottery.Award
         * @instance
         */
        Award.prototype.itemIndex = 0;

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof lottery.Award
         * @static
         * @param {lottery.IAward=} [properties] Properties to set
         * @returns {lottery.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link lottery.Award.verify|verify} messages.
         * @function encode
         * @memberof lottery.Award
         * @static
         * @param {lottery.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            if (message.itemMin != null && message.hasOwnProperty("itemMin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.itemMin);
            if (message.itemMax != null && message.hasOwnProperty("itemMax"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.itemMax);
            if (message.itemIndex != null && message.hasOwnProperty("itemIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.itemIndex);
            return writer;
        };

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link lottery.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.Award
         * @static
         * @param {lottery.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.Award();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.itemMin = reader.int64();
                    break;
                case 3:
                    message.itemMax = reader.int64();
                    break;
                case 4:
                    message.itemIndex = reader.int32();
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
         * @memberof lottery.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.Award} Award
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
         * @memberof lottery.Award
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Award.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.itemMin != null && message.hasOwnProperty("itemMin"))
                if (!$util.isInteger(message.itemMin) && !(message.itemMin && $util.isInteger(message.itemMin.low) && $util.isInteger(message.itemMin.high)))
                    return "itemMin: integer|Long expected";
            if (message.itemMax != null && message.hasOwnProperty("itemMax"))
                if (!$util.isInteger(message.itemMax) && !(message.itemMax && $util.isInteger(message.itemMax.low) && $util.isInteger(message.itemMax.high)))
                    return "itemMax: integer|Long expected";
            if (message.itemIndex != null && message.hasOwnProperty("itemIndex"))
                if (!$util.isInteger(message.itemIndex))
                    return "itemIndex: integer expected";
            return null;
        };

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.Award)
                return object;
            var message = new $root.lottery.Award();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.itemMin != null)
                if ($util.Long)
                    (message.itemMin = $util.Long.fromValue(object.itemMin)).unsigned = false;
                else if (typeof object.itemMin === "string")
                    message.itemMin = parseInt(object.itemMin, 10);
                else if (typeof object.itemMin === "number")
                    message.itemMin = object.itemMin;
                else if (typeof object.itemMin === "object")
                    message.itemMin = new $util.LongBits(object.itemMin.low >>> 0, object.itemMin.high >>> 0).toNumber();
            if (object.itemMax != null)
                if ($util.Long)
                    (message.itemMax = $util.Long.fromValue(object.itemMax)).unsigned = false;
                else if (typeof object.itemMax === "string")
                    message.itemMax = parseInt(object.itemMax, 10);
                else if (typeof object.itemMax === "number")
                    message.itemMax = object.itemMax;
                else if (typeof object.itemMax === "object")
                    message.itemMax = new $util.LongBits(object.itemMax.low >>> 0, object.itemMax.high >>> 0).toNumber();
            if (object.itemIndex != null)
                message.itemIndex = object.itemIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.Award
         * @static
         * @param {lottery.Award} message Award
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Award.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.itemMin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemMin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.itemMax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemMax = options.longs === String ? "0" : 0;
                object.itemIndex = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemMin != null && message.hasOwnProperty("itemMin"))
                if (typeof message.itemMin === "number")
                    object.itemMin = options.longs === String ? String(message.itemMin) : message.itemMin;
                else
                    object.itemMin = options.longs === String ? $util.Long.prototype.toString.call(message.itemMin) : options.longs === Number ? new $util.LongBits(message.itemMin.low >>> 0, message.itemMin.high >>> 0).toNumber() : message.itemMin;
            if (message.itemMax != null && message.hasOwnProperty("itemMax"))
                if (typeof message.itemMax === "number")
                    object.itemMax = options.longs === String ? String(message.itemMax) : message.itemMax;
                else
                    object.itemMax = options.longs === String ? $util.Long.prototype.toString.call(message.itemMax) : options.longs === Number ? new $util.LongBits(message.itemMax.low >>> 0, message.itemMax.high >>> 0).toNumber() : message.itemMax;
            if (message.itemIndex != null && message.hasOwnProperty("itemIndex"))
                object.itemIndex = message.itemIndex;
            return object;
        };

        /**
         * Converts this Award to JSON.
         * @function toJSON
         * @memberof lottery.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    lottery.LotteryCfgReq = (function() {

        /**
         * Properties of a LotteryCfgReq.
         * @memberof lottery
         * @interface ILotteryCfgReq
         * @property {number|Long|null} [uid] LotteryCfgReq uid
         */

        /**
         * Constructs a new LotteryCfgReq.
         * @memberof lottery
         * @classdesc Represents a LotteryCfgReq.
         * @implements ILotteryCfgReq
         * @constructor
         * @param {lottery.ILotteryCfgReq=} [properties] Properties to set
         */
        function LotteryCfgReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotteryCfgReq uid.
         * @member {number|Long} uid
         * @memberof lottery.LotteryCfgReq
         * @instance
         */
        LotteryCfgReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LotteryCfgReq instance using the specified properties.
         * @function create
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {lottery.ILotteryCfgReq=} [properties] Properties to set
         * @returns {lottery.LotteryCfgReq} LotteryCfgReq instance
         */
        LotteryCfgReq.create = function create(properties) {
            return new LotteryCfgReq(properties);
        };

        /**
         * Encodes the specified LotteryCfgReq message. Does not implicitly {@link lottery.LotteryCfgReq.verify|verify} messages.
         * @function encode
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {lottery.ILotteryCfgReq} message LotteryCfgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryCfgReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified LotteryCfgReq message, length delimited. Does not implicitly {@link lottery.LotteryCfgReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {lottery.ILotteryCfgReq} message LotteryCfgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryCfgReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotteryCfgReq message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.LotteryCfgReq} LotteryCfgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryCfgReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.LotteryCfgReq();
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
         * Decodes a LotteryCfgReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.LotteryCfgReq} LotteryCfgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryCfgReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotteryCfgReq message.
         * @function verify
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotteryCfgReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a LotteryCfgReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.LotteryCfgReq} LotteryCfgReq
         */
        LotteryCfgReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.LotteryCfgReq)
                return object;
            var message = new $root.lottery.LotteryCfgReq();
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
         * Creates a plain object from a LotteryCfgReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.LotteryCfgReq
         * @static
         * @param {lottery.LotteryCfgReq} message LotteryCfgReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotteryCfgReq.toObject = function toObject(message, options) {
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
         * Converts this LotteryCfgReq to JSON.
         * @function toJSON
         * @memberof lottery.LotteryCfgReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotteryCfgReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LotteryCfgReq;
    })();

    lottery.LotteryCfgRsp = (function() {

        /**
         * Properties of a LotteryCfgRsp.
         * @memberof lottery
         * @interface ILotteryCfgRsp
         * @property {number|null} [errCode] LotteryCfgRsp errCode
         * @property {string|null} [errMsg] LotteryCfgRsp errMsg
         * @property {boolean|null} [bAble] LotteryCfgRsp bAble
         * @property {Array.<lottery.IAward>|null} [awards] LotteryCfgRsp awards
         */

        /**
         * Constructs a new LotteryCfgRsp.
         * @memberof lottery
         * @classdesc Represents a LotteryCfgRsp.
         * @implements ILotteryCfgRsp
         * @constructor
         * @param {lottery.ILotteryCfgRsp=} [properties] Properties to set
         */
        function LotteryCfgRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotteryCfgRsp errCode.
         * @member {number} errCode
         * @memberof lottery.LotteryCfgRsp
         * @instance
         */
        LotteryCfgRsp.prototype.errCode = 0;

        /**
         * LotteryCfgRsp errMsg.
         * @member {string} errMsg
         * @memberof lottery.LotteryCfgRsp
         * @instance
         */
        LotteryCfgRsp.prototype.errMsg = "";

        /**
         * LotteryCfgRsp bAble.
         * @member {boolean} bAble
         * @memberof lottery.LotteryCfgRsp
         * @instance
         */
        LotteryCfgRsp.prototype.bAble = false;

        /**
         * LotteryCfgRsp awards.
         * @member {Array.<lottery.IAward>} awards
         * @memberof lottery.LotteryCfgRsp
         * @instance
         */
        LotteryCfgRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new LotteryCfgRsp instance using the specified properties.
         * @function create
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {lottery.ILotteryCfgRsp=} [properties] Properties to set
         * @returns {lottery.LotteryCfgRsp} LotteryCfgRsp instance
         */
        LotteryCfgRsp.create = function create(properties) {
            return new LotteryCfgRsp(properties);
        };

        /**
         * Encodes the specified LotteryCfgRsp message. Does not implicitly {@link lottery.LotteryCfgRsp.verify|verify} messages.
         * @function encode
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {lottery.ILotteryCfgRsp} message LotteryCfgRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryCfgRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.bAble != null && message.hasOwnProperty("bAble"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bAble);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.lottery.Award.encode(message.awards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LotteryCfgRsp message, length delimited. Does not implicitly {@link lottery.LotteryCfgRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {lottery.ILotteryCfgRsp} message LotteryCfgRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryCfgRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotteryCfgRsp message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.LotteryCfgRsp} LotteryCfgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryCfgRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.LotteryCfgRsp();
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
                    message.bAble = reader.bool();
                    break;
                case 4:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.lottery.Award.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LotteryCfgRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.LotteryCfgRsp} LotteryCfgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryCfgRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotteryCfgRsp message.
         * @function verify
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotteryCfgRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.bAble != null && message.hasOwnProperty("bAble"))
                if (typeof message.bAble !== "boolean")
                    return "bAble: boolean expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.lottery.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LotteryCfgRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.LotteryCfgRsp} LotteryCfgRsp
         */
        LotteryCfgRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.LotteryCfgRsp)
                return object;
            var message = new $root.lottery.LotteryCfgRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.bAble != null)
                message.bAble = Boolean(object.bAble);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".lottery.LotteryCfgRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".lottery.LotteryCfgRsp.awards: object expected");
                    message.awards[i] = $root.lottery.Award.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LotteryCfgRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.LotteryCfgRsp
         * @static
         * @param {lottery.LotteryCfgRsp} message LotteryCfgRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotteryCfgRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.bAble = false;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.bAble != null && message.hasOwnProperty("bAble"))
                object.bAble = message.bAble;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.lottery.Award.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this LotteryCfgRsp to JSON.
         * @function toJSON
         * @memberof lottery.LotteryCfgRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotteryCfgRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LotteryCfgRsp;
    })();

    lottery.GetLotteryAwardReq = (function() {

        /**
         * Properties of a GetLotteryAwardReq.
         * @memberof lottery
         * @interface IGetLotteryAwardReq
         * @property {number|Long|null} [uid] GetLotteryAwardReq uid
         */

        /**
         * Constructs a new GetLotteryAwardReq.
         * @memberof lottery
         * @classdesc Represents a GetLotteryAwardReq.
         * @implements IGetLotteryAwardReq
         * @constructor
         * @param {lottery.IGetLotteryAwardReq=} [properties] Properties to set
         */
        function GetLotteryAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLotteryAwardReq uid.
         * @member {number|Long} uid
         * @memberof lottery.GetLotteryAwardReq
         * @instance
         */
        GetLotteryAwardReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetLotteryAwardReq instance using the specified properties.
         * @function create
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {lottery.IGetLotteryAwardReq=} [properties] Properties to set
         * @returns {lottery.GetLotteryAwardReq} GetLotteryAwardReq instance
         */
        GetLotteryAwardReq.create = function create(properties) {
            return new GetLotteryAwardReq(properties);
        };

        /**
         * Encodes the specified GetLotteryAwardReq message. Does not implicitly {@link lottery.GetLotteryAwardReq.verify|verify} messages.
         * @function encode
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {lottery.IGetLotteryAwardReq} message GetLotteryAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLotteryAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetLotteryAwardReq message, length delimited. Does not implicitly {@link lottery.GetLotteryAwardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {lottery.IGetLotteryAwardReq} message GetLotteryAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLotteryAwardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLotteryAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.GetLotteryAwardReq} GetLotteryAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLotteryAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.GetLotteryAwardReq();
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
         * Decodes a GetLotteryAwardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.GetLotteryAwardReq} GetLotteryAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLotteryAwardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLotteryAwardReq message.
         * @function verify
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLotteryAwardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetLotteryAwardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.GetLotteryAwardReq} GetLotteryAwardReq
         */
        GetLotteryAwardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.GetLotteryAwardReq)
                return object;
            var message = new $root.lottery.GetLotteryAwardReq();
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
         * Creates a plain object from a GetLotteryAwardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.GetLotteryAwardReq
         * @static
         * @param {lottery.GetLotteryAwardReq} message GetLotteryAwardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLotteryAwardReq.toObject = function toObject(message, options) {
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
         * Converts this GetLotteryAwardReq to JSON.
         * @function toJSON
         * @memberof lottery.GetLotteryAwardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLotteryAwardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetLotteryAwardReq;
    })();

    lottery.GetLotteryAwardRsp = (function() {

        /**
         * Properties of a GetLotteryAwardRsp.
         * @memberof lottery
         * @interface IGetLotteryAwardRsp
         * @property {number|null} [errCode] GetLotteryAwardRsp errCode
         * @property {string|null} [errMsg] GetLotteryAwardRsp errMsg
         * @property {number|null} [awardIdx] GetLotteryAwardRsp awardIdx
         * @property {Array.<lottery.IItem>|null} [awards] GetLotteryAwardRsp awards
         */

        /**
         * Constructs a new GetLotteryAwardRsp.
         * @memberof lottery
         * @classdesc Represents a GetLotteryAwardRsp.
         * @implements IGetLotteryAwardRsp
         * @constructor
         * @param {lottery.IGetLotteryAwardRsp=} [properties] Properties to set
         */
        function GetLotteryAwardRsp(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLotteryAwardRsp errCode.
         * @member {number} errCode
         * @memberof lottery.GetLotteryAwardRsp
         * @instance
         */
        GetLotteryAwardRsp.prototype.errCode = 0;

        /**
         * GetLotteryAwardRsp errMsg.
         * @member {string} errMsg
         * @memberof lottery.GetLotteryAwardRsp
         * @instance
         */
        GetLotteryAwardRsp.prototype.errMsg = "";

        /**
         * GetLotteryAwardRsp awardIdx.
         * @member {number} awardIdx
         * @memberof lottery.GetLotteryAwardRsp
         * @instance
         */
        GetLotteryAwardRsp.prototype.awardIdx = 0;

        /**
         * GetLotteryAwardRsp awards.
         * @member {Array.<lottery.IItem>} awards
         * @memberof lottery.GetLotteryAwardRsp
         * @instance
         */
        GetLotteryAwardRsp.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetLotteryAwardRsp instance using the specified properties.
         * @function create
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {lottery.IGetLotteryAwardRsp=} [properties] Properties to set
         * @returns {lottery.GetLotteryAwardRsp} GetLotteryAwardRsp instance
         */
        GetLotteryAwardRsp.create = function create(properties) {
            return new GetLotteryAwardRsp(properties);
        };

        /**
         * Encodes the specified GetLotteryAwardRsp message. Does not implicitly {@link lottery.GetLotteryAwardRsp.verify|verify} messages.
         * @function encode
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {lottery.IGetLotteryAwardRsp} message GetLotteryAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLotteryAwardRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awardIdx != null && message.hasOwnProperty("awardIdx"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.awardIdx);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.lottery.Item.encode(message.awards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLotteryAwardRsp message, length delimited. Does not implicitly {@link lottery.GetLotteryAwardRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {lottery.IGetLotteryAwardRsp} message GetLotteryAwardRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLotteryAwardRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLotteryAwardRsp message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.GetLotteryAwardRsp} GetLotteryAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLotteryAwardRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.GetLotteryAwardRsp();
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
                    message.awardIdx = reader.int32();
                    break;
                case 4:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.lottery.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLotteryAwardRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.GetLotteryAwardRsp} GetLotteryAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLotteryAwardRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLotteryAwardRsp message.
         * @function verify
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLotteryAwardRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.awardIdx != null && message.hasOwnProperty("awardIdx"))
                if (!$util.isInteger(message.awardIdx))
                    return "awardIdx: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.lottery.Item.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetLotteryAwardRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.GetLotteryAwardRsp} GetLotteryAwardRsp
         */
        GetLotteryAwardRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.GetLotteryAwardRsp)
                return object;
            var message = new $root.lottery.GetLotteryAwardRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awardIdx != null)
                message.awardIdx = object.awardIdx | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".lottery.GetLotteryAwardRsp.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".lottery.GetLotteryAwardRsp.awards: object expected");
                    message.awards[i] = $root.lottery.Item.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLotteryAwardRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.GetLotteryAwardRsp
         * @static
         * @param {lottery.GetLotteryAwardRsp} message GetLotteryAwardRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLotteryAwardRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.awardIdx = 0;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.awardIdx != null && message.hasOwnProperty("awardIdx"))
                object.awardIdx = message.awardIdx;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.lottery.Item.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetLotteryAwardRsp to JSON.
         * @function toJSON
         * @memberof lottery.GetLotteryAwardRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLotteryAwardRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetLotteryAwardRsp;
    })();

    lottery.UptLotteryAdStateReq = (function() {

        /**
         * Properties of an UptLotteryAdStateReq.
         * @memberof lottery
         * @interface IUptLotteryAdStateReq
         * @property {number|Long|null} [uid] UptLotteryAdStateReq uid
         * @property {number|null} [state] UptLotteryAdStateReq state
         */

        /**
         * Constructs a new UptLotteryAdStateReq.
         * @memberof lottery
         * @classdesc Represents an UptLotteryAdStateReq.
         * @implements IUptLotteryAdStateReq
         * @constructor
         * @param {lottery.IUptLotteryAdStateReq=} [properties] Properties to set
         */
        function UptLotteryAdStateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptLotteryAdStateReq uid.
         * @member {number|Long} uid
         * @memberof lottery.UptLotteryAdStateReq
         * @instance
         */
        UptLotteryAdStateReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UptLotteryAdStateReq state.
         * @member {number} state
         * @memberof lottery.UptLotteryAdStateReq
         * @instance
         */
        UptLotteryAdStateReq.prototype.state = 0;

        /**
         * Creates a new UptLotteryAdStateReq instance using the specified properties.
         * @function create
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {lottery.IUptLotteryAdStateReq=} [properties] Properties to set
         * @returns {lottery.UptLotteryAdStateReq} UptLotteryAdStateReq instance
         */
        UptLotteryAdStateReq.create = function create(properties) {
            return new UptLotteryAdStateReq(properties);
        };

        /**
         * Encodes the specified UptLotteryAdStateReq message. Does not implicitly {@link lottery.UptLotteryAdStateReq.verify|verify} messages.
         * @function encode
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {lottery.IUptLotteryAdStateReq} message UptLotteryAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptLotteryAdStateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UptLotteryAdStateReq message, length delimited. Does not implicitly {@link lottery.UptLotteryAdStateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {lottery.IUptLotteryAdStateReq} message UptLotteryAdStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptLotteryAdStateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptLotteryAdStateReq message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.UptLotteryAdStateReq} UptLotteryAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptLotteryAdStateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.UptLotteryAdStateReq();
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
         * Decodes an UptLotteryAdStateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.UptLotteryAdStateReq} UptLotteryAdStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptLotteryAdStateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptLotteryAdStateReq message.
         * @function verify
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptLotteryAdStateReq.verify = function verify(message) {
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
         * Creates an UptLotteryAdStateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.UptLotteryAdStateReq} UptLotteryAdStateReq
         */
        UptLotteryAdStateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.UptLotteryAdStateReq)
                return object;
            var message = new $root.lottery.UptLotteryAdStateReq();
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
         * Creates a plain object from an UptLotteryAdStateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.UptLotteryAdStateReq
         * @static
         * @param {lottery.UptLotteryAdStateReq} message UptLotteryAdStateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptLotteryAdStateReq.toObject = function toObject(message, options) {
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
         * Converts this UptLotteryAdStateReq to JSON.
         * @function toJSON
         * @memberof lottery.UptLotteryAdStateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptLotteryAdStateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptLotteryAdStateReq;
    })();

    lottery.UptLotteryAdStateRsp = (function() {

        /**
         * Properties of an UptLotteryAdStateRsp.
         * @memberof lottery
         * @interface IUptLotteryAdStateRsp
         * @property {number|null} [errCode] UptLotteryAdStateRsp errCode
         * @property {string|null} [errMsg] UptLotteryAdStateRsp errMsg
         */

        /**
         * Constructs a new UptLotteryAdStateRsp.
         * @memberof lottery
         * @classdesc Represents an UptLotteryAdStateRsp.
         * @implements IUptLotteryAdStateRsp
         * @constructor
         * @param {lottery.IUptLotteryAdStateRsp=} [properties] Properties to set
         */
        function UptLotteryAdStateRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UptLotteryAdStateRsp errCode.
         * @member {number} errCode
         * @memberof lottery.UptLotteryAdStateRsp
         * @instance
         */
        UptLotteryAdStateRsp.prototype.errCode = 0;

        /**
         * UptLotteryAdStateRsp errMsg.
         * @member {string} errMsg
         * @memberof lottery.UptLotteryAdStateRsp
         * @instance
         */
        UptLotteryAdStateRsp.prototype.errMsg = "";

        /**
         * Creates a new UptLotteryAdStateRsp instance using the specified properties.
         * @function create
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {lottery.IUptLotteryAdStateRsp=} [properties] Properties to set
         * @returns {lottery.UptLotteryAdStateRsp} UptLotteryAdStateRsp instance
         */
        UptLotteryAdStateRsp.create = function create(properties) {
            return new UptLotteryAdStateRsp(properties);
        };

        /**
         * Encodes the specified UptLotteryAdStateRsp message. Does not implicitly {@link lottery.UptLotteryAdStateRsp.verify|verify} messages.
         * @function encode
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {lottery.IUptLotteryAdStateRsp} message UptLotteryAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptLotteryAdStateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified UptLotteryAdStateRsp message, length delimited. Does not implicitly {@link lottery.UptLotteryAdStateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {lottery.IUptLotteryAdStateRsp} message UptLotteryAdStateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UptLotteryAdStateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UptLotteryAdStateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.UptLotteryAdStateRsp} UptLotteryAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptLotteryAdStateRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.UptLotteryAdStateRsp();
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
         * Decodes an UptLotteryAdStateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.UptLotteryAdStateRsp} UptLotteryAdStateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UptLotteryAdStateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UptLotteryAdStateRsp message.
         * @function verify
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UptLotteryAdStateRsp.verify = function verify(message) {
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
         * Creates an UptLotteryAdStateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.UptLotteryAdStateRsp} UptLotteryAdStateRsp
         */
        UptLotteryAdStateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.UptLotteryAdStateRsp)
                return object;
            var message = new $root.lottery.UptLotteryAdStateRsp();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from an UptLotteryAdStateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.UptLotteryAdStateRsp
         * @static
         * @param {lottery.UptLotteryAdStateRsp} message UptLotteryAdStateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UptLotteryAdStateRsp.toObject = function toObject(message, options) {
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
         * Converts this UptLotteryAdStateRsp to JSON.
         * @function toJSON
         * @memberof lottery.UptLotteryAdStateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UptLotteryAdStateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UptLotteryAdStateRsp;
    })();

    lottery.LotteryAwardNot = (function() {

        /**
         * Properties of a LotteryAwardNot.
         * @memberof lottery
         * @interface ILotteryAwardNot
         */

        /**
         * Constructs a new LotteryAwardNot.
         * @memberof lottery
         * @classdesc Represents a LotteryAwardNot.
         * @implements ILotteryAwardNot
         * @constructor
         * @param {lottery.ILotteryAwardNot=} [properties] Properties to set
         */
        function LotteryAwardNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LotteryAwardNot instance using the specified properties.
         * @function create
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {lottery.ILotteryAwardNot=} [properties] Properties to set
         * @returns {lottery.LotteryAwardNot} LotteryAwardNot instance
         */
        LotteryAwardNot.create = function create(properties) {
            return new LotteryAwardNot(properties);
        };

        /**
         * Encodes the specified LotteryAwardNot message. Does not implicitly {@link lottery.LotteryAwardNot.verify|verify} messages.
         * @function encode
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {lottery.ILotteryAwardNot} message LotteryAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryAwardNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LotteryAwardNot message, length delimited. Does not implicitly {@link lottery.LotteryAwardNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {lottery.ILotteryAwardNot} message LotteryAwardNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryAwardNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotteryAwardNot message from the specified reader or buffer.
         * @function decode
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lottery.LotteryAwardNot} LotteryAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryAwardNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lottery.LotteryAwardNot();
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
         * Decodes a LotteryAwardNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lottery.LotteryAwardNot} LotteryAwardNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryAwardNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotteryAwardNot message.
         * @function verify
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotteryAwardNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LotteryAwardNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lottery.LotteryAwardNot} LotteryAwardNot
         */
        LotteryAwardNot.fromObject = function fromObject(object) {
            if (object instanceof $root.lottery.LotteryAwardNot)
                return object;
            return new $root.lottery.LotteryAwardNot();
        };

        /**
         * Creates a plain object from a LotteryAwardNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lottery.LotteryAwardNot
         * @static
         * @param {lottery.LotteryAwardNot} message LotteryAwardNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotteryAwardNot.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LotteryAwardNot to JSON.
         * @function toJSON
         * @memberof lottery.LotteryAwardNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotteryAwardNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LotteryAwardNot;
    })();

    return lottery;
})();

module.exports = $root.lottery;
