/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ad = (function() {

    /**
     * Namespace ad.
     * @exports ad
     * @namespace
     */
    var ad = {};

    ad.Ad = (function() {

        /**
         * Constructs a new Ad service.
         * @memberof ad
         * @classdesc Represents an Ad
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Ad(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Ad.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Ad;

        /**
         * Creates new Ad service using the specified rpc implementation.
         * @function create
         * @memberof ad.Ad
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Ad} RPC service. Useful where requests and/or responses are streamed.
         */
        Ad.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link ad.Ad#initAdOrder}.
         * @memberof ad.Ad
         * @typedef InitAdOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ad.InitAdOrderAck} [response] InitAdOrderAck
         */

        /**
         * Calls InitAdOrder.
         * @function initAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IInitAdOrderReq} request InitAdOrderReq message or plain object
         * @param {ad.Ad.InitAdOrderCallback} callback Node-style callback called with the error, if any, and InitAdOrderAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Ad.prototype.initAdOrder = function initAdOrder(request, callback) {
            return this.rpcCall(initAdOrder, $root.ad.InitAdOrderReq, $root.ad.InitAdOrderAck, request, callback);
        }, "name", { value: "InitAdOrder" });

        /**
         * Calls InitAdOrder.
         * @function initAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IInitAdOrderReq} request InitAdOrderReq message or plain object
         * @returns {Promise<ad.InitAdOrderAck>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ad.Ad#getAdOrder}.
         * @memberof ad.Ad
         * @typedef GetAdOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ad.GetAdOrderAck} [response] GetAdOrderAck
         */

        /**
         * Calls GetAdOrder.
         * @function getAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdOrderReq} request GetAdOrderReq message or plain object
         * @param {ad.Ad.GetAdOrderCallback} callback Node-style callback called with the error, if any, and GetAdOrderAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Ad.prototype.getAdOrder = function getAdOrder(request, callback) {
            return this.rpcCall(getAdOrder, $root.ad.GetAdOrderReq, $root.ad.GetAdOrderAck, request, callback);
        }, "name", { value: "GetAdOrder" });

        /**
         * Calls GetAdOrder.
         * @function getAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdOrderReq} request GetAdOrderReq message or plain object
         * @returns {Promise<ad.GetAdOrderAck>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ad.Ad#updateAdOrder}.
         * @memberof ad.Ad
         * @typedef UpdateAdOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ad.UpdateAdOrderAck} [response] UpdateAdOrderAck
         */

        /**
         * Calls UpdateAdOrder.
         * @function updateAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IUpdateAdOrderReq} request UpdateAdOrderReq message or plain object
         * @param {ad.Ad.UpdateAdOrderCallback} callback Node-style callback called with the error, if any, and UpdateAdOrderAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Ad.prototype.updateAdOrder = function updateAdOrder(request, callback) {
            return this.rpcCall(updateAdOrder, $root.ad.UpdateAdOrderReq, $root.ad.UpdateAdOrderAck, request, callback);
        }, "name", { value: "UpdateAdOrder" });

        /**
         * Calls UpdateAdOrder.
         * @function updateAdOrder
         * @memberof ad.Ad
         * @instance
         * @param {ad.IUpdateAdOrderReq} request UpdateAdOrderReq message or plain object
         * @returns {Promise<ad.UpdateAdOrderAck>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ad.Ad#getAdAwards}.
         * @memberof ad.Ad
         * @typedef GetAdAwardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ad.GetAdAwardsAck} [response] GetAdAwardsAck
         */

        /**
         * Calls GetAdAwards.
         * @function getAdAwards
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdAwardsReq} request GetAdAwardsReq message or plain object
         * @param {ad.Ad.GetAdAwardsCallback} callback Node-style callback called with the error, if any, and GetAdAwardsAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Ad.prototype.getAdAwards = function getAdAwards(request, callback) {
            return this.rpcCall(getAdAwards, $root.ad.GetAdAwardsReq, $root.ad.GetAdAwardsAck, request, callback);
        }, "name", { value: "GetAdAwards" });

        /**
         * Calls GetAdAwards.
         * @function getAdAwards
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdAwardsReq} request GetAdAwardsReq message or plain object
         * @returns {Promise<ad.GetAdAwardsAck>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ad.Ad#getAdSpots}.
         * @memberof ad.Ad
         * @typedef GetAdSpotsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ad.GetAdSpotsAck} [response] GetAdSpotsAck
         */

        /**
         * Calls GetAdSpots.
         * @function getAdSpots
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdSpotsReq} request GetAdSpotsReq message or plain object
         * @param {ad.Ad.GetAdSpotsCallback} callback Node-style callback called with the error, if any, and GetAdSpotsAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Ad.prototype.getAdSpots = function getAdSpots(request, callback) {
            return this.rpcCall(getAdSpots, $root.ad.GetAdSpotsReq, $root.ad.GetAdSpotsAck, request, callback);
        }, "name", { value: "GetAdSpots" });

        /**
         * Calls GetAdSpots.
         * @function getAdSpots
         * @memberof ad.Ad
         * @instance
         * @param {ad.IGetAdSpotsReq} request GetAdSpotsReq message or plain object
         * @returns {Promise<ad.GetAdSpotsAck>} Promise
         * @variation 2
         */

        return Ad;
    })();

    /**
     * AdOrderState enum.
     * @name ad.AdOrderState
     * @enum {number}
     * @property {number} Init=0 Init value
     * @property {number} Cancel=1 Cancel value
     * @property {number} Finish=2 Finish value
     * @property {number} Complete=3 Complete value
     */
    ad.AdOrderState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Init"] = 0;
        values[valuesById[1] = "Cancel"] = 1;
        values[valuesById[2] = "Finish"] = 2;
        values[valuesById[3] = "Complete"] = 3;
        return values;
    })();

    ad.AwardConfig = (function() {

        /**
         * Properties of an AwardConfig.
         * @memberof ad
         * @interface IAwardConfig
         * @property {number|null} [index] AwardConfig index
         * @property {number|null} [minNum] AwardConfig minNum
         * @property {number|null} [maxNum] AwardConfig maxNum
         */

        /**
         * Constructs a new AwardConfig.
         * @memberof ad
         * @classdesc Represents an AwardConfig.
         * @implements IAwardConfig
         * @constructor
         * @param {ad.IAwardConfig=} [properties] Properties to set
         */
        function AwardConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardConfig index.
         * @member {number} index
         * @memberof ad.AwardConfig
         * @instance
         */
        AwardConfig.prototype.index = 0;

        /**
         * AwardConfig minNum.
         * @member {number} minNum
         * @memberof ad.AwardConfig
         * @instance
         */
        AwardConfig.prototype.minNum = 0;

        /**
         * AwardConfig maxNum.
         * @member {number} maxNum
         * @memberof ad.AwardConfig
         * @instance
         */
        AwardConfig.prototype.maxNum = 0;

        /**
         * Creates a new AwardConfig instance using the specified properties.
         * @function create
         * @memberof ad.AwardConfig
         * @static
         * @param {ad.IAwardConfig=} [properties] Properties to set
         * @returns {ad.AwardConfig} AwardConfig instance
         */
        AwardConfig.create = function create(properties) {
            return new AwardConfig(properties);
        };

        /**
         * Encodes the specified AwardConfig message. Does not implicitly {@link ad.AwardConfig.verify|verify} messages.
         * @function encode
         * @memberof ad.AwardConfig
         * @static
         * @param {ad.IAwardConfig} message AwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.minNum != null && Object.hasOwnProperty.call(message, "minNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minNum);
            if (message.maxNum != null && Object.hasOwnProperty.call(message, "maxNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxNum);
            return writer;
        };

        /**
         * Encodes the specified AwardConfig message, length delimited. Does not implicitly {@link ad.AwardConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.AwardConfig
         * @static
         * @param {ad.IAwardConfig} message AwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardConfig message from the specified reader or buffer.
         * @function decode
         * @memberof ad.AwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.AwardConfig} AwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.AwardConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.minNum = reader.int32();
                    break;
                case 3:
                    message.maxNum = reader.int32();
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
         * @memberof ad.AwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.AwardConfig} AwardConfig
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
         * @memberof ad.AwardConfig
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
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                if (!$util.isInteger(message.minNum))
                    return "minNum: integer expected";
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (!$util.isInteger(message.maxNum))
                    return "maxNum: integer expected";
            return null;
        };

        /**
         * Creates an AwardConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.AwardConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.AwardConfig} AwardConfig
         */
        AwardConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.AwardConfig)
                return object;
            var message = new $root.ad.AwardConfig();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.minNum != null)
                message.minNum = object.minNum | 0;
            if (object.maxNum != null)
                message.maxNum = object.maxNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an AwardConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.AwardConfig
         * @static
         * @param {ad.AwardConfig} message AwardConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.minNum = 0;
                object.maxNum = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.minNum != null && message.hasOwnProperty("minNum"))
                object.minNum = message.minNum;
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                object.maxNum = message.maxNum;
            return object;
        };

        /**
         * Converts this AwardConfig to JSON.
         * @function toJSON
         * @memberof ad.AwardConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardConfig;
    })();

    ad.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof ad
         * @interface IAward
         * @property {number|null} [index] Award index
         * @property {number|null} [num] Award num
         */

        /**
         * Constructs a new Award.
         * @memberof ad
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {ad.IAward=} [properties] Properties to set
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
         * @memberof ad.Award
         * @instance
         */
        Award.prototype.index = 0;

        /**
         * Award num.
         * @member {number} num
         * @memberof ad.Award
         * @instance
         */
        Award.prototype.num = 0;

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof ad.Award
         * @static
         * @param {ad.IAward=} [properties] Properties to set
         * @returns {ad.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link ad.Award.verify|verify} messages.
         * @function encode
         * @memberof ad.Award
         * @static
         * @param {ad.IAward} message Award message or plain object to encode
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
         * Encodes the specified Award message, length delimited. Does not implicitly {@link ad.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.Award
         * @static
         * @param {ad.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof ad.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.Award();
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
         * @memberof ad.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.Award} Award
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
         * @memberof ad.Award
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
         * @memberof ad.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.Award)
                return object;
            var message = new $root.ad.Award();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.Award
         * @static
         * @param {ad.Award} message Award
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
         * @memberof ad.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    ad.Pair = (function() {

        /**
         * Properties of a Pair.
         * @memberof ad
         * @interface IPair
         * @property {string|null} [key] Pair key
         * @property {string|null} [value] Pair value
         */

        /**
         * Constructs a new Pair.
         * @memberof ad
         * @classdesc Represents a Pair.
         * @implements IPair
         * @constructor
         * @param {ad.IPair=} [properties] Properties to set
         */
        function Pair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pair key.
         * @member {string} key
         * @memberof ad.Pair
         * @instance
         */
        Pair.prototype.key = "";

        /**
         * Pair value.
         * @member {string} value
         * @memberof ad.Pair
         * @instance
         */
        Pair.prototype.value = "";

        /**
         * Creates a new Pair instance using the specified properties.
         * @function create
         * @memberof ad.Pair
         * @static
         * @param {ad.IPair=} [properties] Properties to set
         * @returns {ad.Pair} Pair instance
         */
        Pair.create = function create(properties) {
            return new Pair(properties);
        };

        /**
         * Encodes the specified Pair message. Does not implicitly {@link ad.Pair.verify|verify} messages.
         * @function encode
         * @memberof ad.Pair
         * @static
         * @param {ad.IPair} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Pair message, length delimited. Does not implicitly {@link ad.Pair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.Pair
         * @static
         * @param {ad.IPair} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pair message from the specified reader or buffer.
         * @function decode
         * @memberof ad.Pair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.Pair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.Pair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pair message.
         * @function verify
         * @memberof ad.Pair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.Pair
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.Pair} Pair
         */
        Pair.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.Pair)
                return object;
            var message = new $root.ad.Pair();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Pair message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.Pair
         * @static
         * @param {ad.Pair} message Pair
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pair.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Pair to JSON.
         * @function toJSON
         * @memberof ad.Pair
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pair.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pair;
    })();

    ad.IdItem = (function() {

        /**
         * Properties of an IdItem.
         * @memberof ad
         * @interface IIdItem
         * @property {number|null} [channel] IdItem channel
         * @property {string|null} [id] IdItem id
         * @property {number|null} [percentage] IdItem percentage
         */

        /**
         * Constructs a new IdItem.
         * @memberof ad
         * @classdesc Represents an IdItem.
         * @implements IIdItem
         * @constructor
         * @param {ad.IIdItem=} [properties] Properties to set
         */
        function IdItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdItem channel.
         * @member {number} channel
         * @memberof ad.IdItem
         * @instance
         */
        IdItem.prototype.channel = 0;

        /**
         * IdItem id.
         * @member {string} id
         * @memberof ad.IdItem
         * @instance
         */
        IdItem.prototype.id = "";

        /**
         * IdItem percentage.
         * @member {number} percentage
         * @memberof ad.IdItem
         * @instance
         */
        IdItem.prototype.percentage = 0;

        /**
         * Creates a new IdItem instance using the specified properties.
         * @function create
         * @memberof ad.IdItem
         * @static
         * @param {ad.IIdItem=} [properties] Properties to set
         * @returns {ad.IdItem} IdItem instance
         */
        IdItem.create = function create(properties) {
            return new IdItem(properties);
        };

        /**
         * Encodes the specified IdItem message. Does not implicitly {@link ad.IdItem.verify|verify} messages.
         * @function encode
         * @memberof ad.IdItem
         * @static
         * @param {ad.IIdItem} message IdItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.percentage != null && Object.hasOwnProperty.call(message, "percentage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.percentage);
            return writer;
        };

        /**
         * Encodes the specified IdItem message, length delimited. Does not implicitly {@link ad.IdItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.IdItem
         * @static
         * @param {ad.IIdItem} message IdItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdItem message from the specified reader or buffer.
         * @function decode
         * @memberof ad.IdItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.IdItem} IdItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.IdItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.percentage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.IdItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.IdItem} IdItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdItem message.
         * @function verify
         * @memberof ad.IdItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.percentage != null && message.hasOwnProperty("percentage"))
                if (!$util.isInteger(message.percentage))
                    return "percentage: integer expected";
            return null;
        };

        /**
         * Creates an IdItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.IdItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.IdItem} IdItem
         */
        IdItem.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.IdItem)
                return object;
            var message = new $root.ad.IdItem();
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.percentage != null)
                message.percentage = object.percentage | 0;
            return message;
        };

        /**
         * Creates a plain object from an IdItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.IdItem
         * @static
         * @param {ad.IdItem} message IdItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.id = "";
                object.percentage = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.percentage != null && message.hasOwnProperty("percentage"))
                object.percentage = message.percentage;
            return object;
        };

        /**
         * Converts this IdItem to JSON.
         * @function toJSON
         * @memberof ad.IdItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdItem;
    })();

    ad.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof ad
         * @interface IOrder
         * @property {string|null} [id] Order id
         * @property {string|null} [service] Order service
         * @property {number|Long|null} [uid] Order uid
         * @property {number|null} [aid] Order aid
         * @property {Array.<ad.IAward>|null} [awards] Order awards
         * @property {ad.AdOrderState|null} [state] Order state
         * @property {number|Long|null} [createTime] Order createTime
         * @property {number|Long|null} [updateTime] Order updateTime
         */

        /**
         * Constructs a new Order.
         * @memberof ad
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {ad.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order id.
         * @member {string} id
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.id = "";

        /**
         * Order service.
         * @member {string} service
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.service = "";

        /**
         * Order uid.
         * @member {number|Long} uid
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Order aid.
         * @member {number} aid
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.aid = 0;

        /**
         * Order awards.
         * @member {Array.<ad.IAward>} awards
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.awards = $util.emptyArray;

        /**
         * Order state.
         * @member {ad.AdOrderState} state
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.state = 0;

        /**
         * Order createTime.
         * @member {number|Long} createTime
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Order updateTime.
         * @member {number|Long} updateTime
         * @memberof ad.Order
         * @instance
         */
        Order.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof ad.Order
         * @static
         * @param {ad.IOrder=} [properties] Properties to set
         * @returns {ad.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link ad.Order.verify|verify} messages.
         * @function encode
         * @memberof ad.Order
         * @static
         * @param {ad.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
            if (message.aid != null && Object.hasOwnProperty.call(message, "aid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.aid);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.ad.Award.encode(message.awards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.state);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createTime);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.updateTime);
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link ad.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.Order
         * @static
         * @param {ad.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof ad.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.Order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.service = reader.string();
                    break;
                case 3:
                    message.uid = reader.int64();
                    break;
                case 4:
                    message.aid = reader.int32();
                    break;
                case 5:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.ad.Award.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.createTime = reader.int64();
                    break;
                case 8:
                    message.updateTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof ad.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.aid != null && message.hasOwnProperty("aid"))
                if (!$util.isInteger(message.aid))
                    return "aid: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.ad.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.Order)
                return object;
            var message = new $root.ad.Order();
            if (object.id != null)
                message.id = String(object.id);
            if (object.service != null)
                message.service = String(object.service);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.aid != null)
                message.aid = object.aid | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".ad.Order.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".ad.Order.awards: object expected");
                    message.awards[i] = $root.ad.Award.fromObject(object.awards[i]);
                }
            }
            switch (object.state) {
            case "Init":
            case 0:
                message.state = 0;
                break;
            case "Cancel":
            case 1:
                message.state = 1;
                break;
            case "Finish":
            case 2:
                message.state = 2;
                break;
            case "Complete":
            case 3:
                message.state = 3;
                break;
            }
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.Order
         * @static
         * @param {ad.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (options.defaults) {
                object.id = "";
                object.service = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.aid = 0;
                object.state = options.enums === String ? "Init" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.aid != null && message.hasOwnProperty("aid"))
                object.aid = message.aid;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.ad.Award.toObject(message.awards[j], options);
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.ad.AdOrderState[message.state] : message.state;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof ad.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    ad.Record = (function() {

        /**
         * Properties of a Record.
         * @memberof ad
         * @interface IRecord
         * @property {number|null} [area] Record area
         * @property {number|null} [type] Record type
         * @property {number|null} [curNum] Record curNum
         * @property {number|null} [maxNum] Record maxNum
         * @property {Array.<ad.IAwardConfig>|null} [awards] Record awards
         * @property {string|null} [desc] Record desc
         * @property {Array.<ad.IIdItem>|null} [ids] Record ids
         */

        /**
         * Constructs a new Record.
         * @memberof ad
         * @classdesc Represents a Record.
         * @implements IRecord
         * @constructor
         * @param {ad.IRecord=} [properties] Properties to set
         */
        function Record(properties) {
            this.awards = [];
            this.ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Record area.
         * @member {number} area
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.area = 0;

        /**
         * Record type.
         * @member {number} type
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.type = 0;

        /**
         * Record curNum.
         * @member {number} curNum
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.curNum = 0;

        /**
         * Record maxNum.
         * @member {number} maxNum
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.maxNum = 0;

        /**
         * Record awards.
         * @member {Array.<ad.IAwardConfig>} awards
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.awards = $util.emptyArray;

        /**
         * Record desc.
         * @member {string} desc
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.desc = "";

        /**
         * Record ids.
         * @member {Array.<ad.IIdItem>} ids
         * @memberof ad.Record
         * @instance
         */
        Record.prototype.ids = $util.emptyArray;

        /**
         * Creates a new Record instance using the specified properties.
         * @function create
         * @memberof ad.Record
         * @static
         * @param {ad.IRecord=} [properties] Properties to set
         * @returns {ad.Record} Record instance
         */
        Record.create = function create(properties) {
            return new Record(properties);
        };

        /**
         * Encodes the specified Record message. Does not implicitly {@link ad.Record.verify|verify} messages.
         * @function encode
         * @memberof ad.Record
         * @static
         * @param {ad.IRecord} message Record message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Record.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.area);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.curNum != null && Object.hasOwnProperty.call(message, "curNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curNum);
            if (message.maxNum != null && Object.hasOwnProperty.call(message, "maxNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxNum);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.ad.AwardConfig.encode(message.awards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.desc);
            if (message.ids != null && message.ids.length)
                for (var i = 0; i < message.ids.length; ++i)
                    $root.ad.IdItem.encode(message.ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Record message, length delimited. Does not implicitly {@link ad.Record.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.Record
         * @static
         * @param {ad.IRecord} message Record message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Record.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Record message from the specified reader or buffer.
         * @function decode
         * @memberof ad.Record
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.Record} Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Record.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.Record();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.area = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.curNum = reader.int32();
                    break;
                case 4:
                    message.maxNum = reader.int32();
                    break;
                case 5:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.ad.AwardConfig.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.desc = reader.string();
                    break;
                case 7:
                    if (!(message.ids && message.ids.length))
                        message.ids = [];
                    message.ids.push($root.ad.IdItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Record message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.Record
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.Record} Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Record.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Record message.
         * @function verify
         * @memberof ad.Record
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Record.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isInteger(message.area))
                    return "area: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                if (!$util.isInteger(message.curNum))
                    return "curNum: integer expected";
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                if (!$util.isInteger(message.maxNum))
                    return "maxNum: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.ad.AwardConfig.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.ids != null && message.hasOwnProperty("ids")) {
                if (!Array.isArray(message.ids))
                    return "ids: array expected";
                for (var i = 0; i < message.ids.length; ++i) {
                    var error = $root.ad.IdItem.verify(message.ids[i]);
                    if (error)
                        return "ids." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Record message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.Record
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.Record} Record
         */
        Record.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.Record)
                return object;
            var message = new $root.ad.Record();
            if (object.area != null)
                message.area = object.area | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.curNum != null)
                message.curNum = object.curNum | 0;
            if (object.maxNum != null)
                message.maxNum = object.maxNum | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".ad.Record.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".ad.Record.awards: object expected");
                    message.awards[i] = $root.ad.AwardConfig.fromObject(object.awards[i]);
                }
            }
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".ad.Record.ids: array expected");
                message.ids = [];
                for (var i = 0; i < object.ids.length; ++i) {
                    if (typeof object.ids[i] !== "object")
                        throw TypeError(".ad.Record.ids: object expected");
                    message.ids[i] = $root.ad.IdItem.fromObject(object.ids[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Record message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.Record
         * @static
         * @param {ad.Record} message Record
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Record.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.awards = [];
                object.ids = [];
            }
            if (options.defaults) {
                object.area = 0;
                object.type = 0;
                object.curNum = 0;
                object.maxNum = 0;
                object.desc = "";
            }
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.curNum != null && message.hasOwnProperty("curNum"))
                object.curNum = message.curNum;
            if (message.maxNum != null && message.hasOwnProperty("maxNum"))
                object.maxNum = message.maxNum;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.ad.AwardConfig.toObject(message.awards[j], options);
            }
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (var j = 0; j < message.ids.length; ++j)
                    object.ids[j] = $root.ad.IdItem.toObject(message.ids[j], options);
            }
            return object;
        };

        /**
         * Converts this Record to JSON.
         * @function toJSON
         * @memberof ad.Record
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Record.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Record;
    })();

    ad.InitAdOrderReq = (function() {

        /**
         * Properties of an InitAdOrderReq.
         * @memberof ad
         * @interface IInitAdOrderReq
         * @property {string|null} [service] InitAdOrderReq service
         * @property {number|Long|null} [uid] InitAdOrderReq uid
         * @property {number|null} [aid] InitAdOrderReq aid
         * @property {Array.<ad.IAward>|null} [awards] InitAdOrderReq awards
         * @property {Array.<ad.IPair>|null} [params] InitAdOrderReq params
         */

        /**
         * Constructs a new InitAdOrderReq.
         * @memberof ad
         * @classdesc Represents an InitAdOrderReq.
         * @implements IInitAdOrderReq
         * @constructor
         * @param {ad.IInitAdOrderReq=} [properties] Properties to set
         */
        function InitAdOrderReq(properties) {
            this.awards = [];
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitAdOrderReq service.
         * @member {string} service
         * @memberof ad.InitAdOrderReq
         * @instance
         */
        InitAdOrderReq.prototype.service = "";

        /**
         * InitAdOrderReq uid.
         * @member {number|Long} uid
         * @memberof ad.InitAdOrderReq
         * @instance
         */
        InitAdOrderReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InitAdOrderReq aid.
         * @member {number} aid
         * @memberof ad.InitAdOrderReq
         * @instance
         */
        InitAdOrderReq.prototype.aid = 0;

        /**
         * InitAdOrderReq awards.
         * @member {Array.<ad.IAward>} awards
         * @memberof ad.InitAdOrderReq
         * @instance
         */
        InitAdOrderReq.prototype.awards = $util.emptyArray;

        /**
         * InitAdOrderReq params.
         * @member {Array.<ad.IPair>} params
         * @memberof ad.InitAdOrderReq
         * @instance
         */
        InitAdOrderReq.prototype.params = $util.emptyArray;

        /**
         * Creates a new InitAdOrderReq instance using the specified properties.
         * @function create
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {ad.IInitAdOrderReq=} [properties] Properties to set
         * @returns {ad.InitAdOrderReq} InitAdOrderReq instance
         */
        InitAdOrderReq.create = function create(properties) {
            return new InitAdOrderReq(properties);
        };

        /**
         * Encodes the specified InitAdOrderReq message. Does not implicitly {@link ad.InitAdOrderReq.verify|verify} messages.
         * @function encode
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {ad.IInitAdOrderReq} message InitAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitAdOrderReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.aid != null && Object.hasOwnProperty.call(message, "aid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.aid);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.ad.Award.encode(message.awards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.ad.Pair.encode(message.params[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InitAdOrderReq message, length delimited. Does not implicitly {@link ad.InitAdOrderReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {ad.IInitAdOrderReq} message InitAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitAdOrderReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitAdOrderReq message from the specified reader or buffer.
         * @function decode
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.InitAdOrderReq} InitAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitAdOrderReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.InitAdOrderReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.service = reader.string();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.aid = reader.int32();
                    break;
                case 4:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.ad.Award.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push($root.ad.Pair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitAdOrderReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.InitAdOrderReq} InitAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitAdOrderReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitAdOrderReq message.
         * @function verify
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitAdOrderReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.aid != null && message.hasOwnProperty("aid"))
                if (!$util.isInteger(message.aid))
                    return "aid: integer expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.ad.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.ad.Pair.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InitAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.InitAdOrderReq} InitAdOrderReq
         */
        InitAdOrderReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.InitAdOrderReq)
                return object;
            var message = new $root.ad.InitAdOrderReq();
            if (object.service != null)
                message.service = String(object.service);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.aid != null)
                message.aid = object.aid | 0;
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".ad.InitAdOrderReq.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".ad.InitAdOrderReq.awards: object expected");
                    message.awards[i] = $root.ad.Award.fromObject(object.awards[i]);
                }
            }
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".ad.InitAdOrderReq.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".ad.InitAdOrderReq.params: object expected");
                    message.params[i] = $root.ad.Pair.fromObject(object.params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InitAdOrderReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.InitAdOrderReq
         * @static
         * @param {ad.InitAdOrderReq} message InitAdOrderReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitAdOrderReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.awards = [];
                object.params = [];
            }
            if (options.defaults) {
                object.service = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.aid = 0;
            }
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.aid != null && message.hasOwnProperty("aid"))
                object.aid = message.aid;
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.ad.Award.toObject(message.awards[j], options);
            }
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.ad.Pair.toObject(message.params[j], options);
            }
            return object;
        };

        /**
         * Converts this InitAdOrderReq to JSON.
         * @function toJSON
         * @memberof ad.InitAdOrderReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitAdOrderReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitAdOrderReq;
    })();

    ad.InitAdOrderAck = (function() {

        /**
         * Properties of an InitAdOrderAck.
         * @memberof ad
         * @interface IInitAdOrderAck
         * @property {number|null} [errCode] InitAdOrderAck errCode
         * @property {string|null} [errMsg] InitAdOrderAck errMsg
         * @property {string|null} [oid] InitAdOrderAck oid
         */

        /**
         * Constructs a new InitAdOrderAck.
         * @memberof ad
         * @classdesc Represents an InitAdOrderAck.
         * @implements IInitAdOrderAck
         * @constructor
         * @param {ad.IInitAdOrderAck=} [properties] Properties to set
         */
        function InitAdOrderAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitAdOrderAck errCode.
         * @member {number} errCode
         * @memberof ad.InitAdOrderAck
         * @instance
         */
        InitAdOrderAck.prototype.errCode = 0;

        /**
         * InitAdOrderAck errMsg.
         * @member {string} errMsg
         * @memberof ad.InitAdOrderAck
         * @instance
         */
        InitAdOrderAck.prototype.errMsg = "";

        /**
         * InitAdOrderAck oid.
         * @member {string} oid
         * @memberof ad.InitAdOrderAck
         * @instance
         */
        InitAdOrderAck.prototype.oid = "";

        /**
         * Creates a new InitAdOrderAck instance using the specified properties.
         * @function create
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {ad.IInitAdOrderAck=} [properties] Properties to set
         * @returns {ad.InitAdOrderAck} InitAdOrderAck instance
         */
        InitAdOrderAck.create = function create(properties) {
            return new InitAdOrderAck(properties);
        };

        /**
         * Encodes the specified InitAdOrderAck message. Does not implicitly {@link ad.InitAdOrderAck.verify|verify} messages.
         * @function encode
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {ad.IInitAdOrderAck} message InitAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitAdOrderAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.oid != null && Object.hasOwnProperty.call(message, "oid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.oid);
            return writer;
        };

        /**
         * Encodes the specified InitAdOrderAck message, length delimited. Does not implicitly {@link ad.InitAdOrderAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {ad.IInitAdOrderAck} message InitAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitAdOrderAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitAdOrderAck message from the specified reader or buffer.
         * @function decode
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.InitAdOrderAck} InitAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitAdOrderAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.InitAdOrderAck();
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
                    message.oid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitAdOrderAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.InitAdOrderAck} InitAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitAdOrderAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitAdOrderAck message.
         * @function verify
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitAdOrderAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.oid != null && message.hasOwnProperty("oid"))
                if (!$util.isString(message.oid))
                    return "oid: string expected";
            return null;
        };

        /**
         * Creates an InitAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.InitAdOrderAck} InitAdOrderAck
         */
        InitAdOrderAck.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.InitAdOrderAck)
                return object;
            var message = new $root.ad.InitAdOrderAck();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.oid != null)
                message.oid = String(object.oid);
            return message;
        };

        /**
         * Creates a plain object from an InitAdOrderAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.InitAdOrderAck
         * @static
         * @param {ad.InitAdOrderAck} message InitAdOrderAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitAdOrderAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.oid = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.oid != null && message.hasOwnProperty("oid"))
                object.oid = message.oid;
            return object;
        };

        /**
         * Converts this InitAdOrderAck to JSON.
         * @function toJSON
         * @memberof ad.InitAdOrderAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitAdOrderAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitAdOrderAck;
    })();

    ad.GetAdOrderReq = (function() {

        /**
         * Properties of a GetAdOrderReq.
         * @memberof ad
         * @interface IGetAdOrderReq
         * @property {number|Long|null} [uid] GetAdOrderReq uid
         * @property {number|Long|null} [date] GetAdOrderReq date
         * @property {string|null} [oid] GetAdOrderReq oid
         */

        /**
         * Constructs a new GetAdOrderReq.
         * @memberof ad
         * @classdesc Represents a GetAdOrderReq.
         * @implements IGetAdOrderReq
         * @constructor
         * @param {ad.IGetAdOrderReq=} [properties] Properties to set
         */
        function GetAdOrderReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdOrderReq uid.
         * @member {number|Long} uid
         * @memberof ad.GetAdOrderReq
         * @instance
         */
        GetAdOrderReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetAdOrderReq date.
         * @member {number|Long} date
         * @memberof ad.GetAdOrderReq
         * @instance
         */
        GetAdOrderReq.prototype.date = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetAdOrderReq oid.
         * @member {string} oid
         * @memberof ad.GetAdOrderReq
         * @instance
         */
        GetAdOrderReq.prototype.oid = "";

        /**
         * Creates a new GetAdOrderReq instance using the specified properties.
         * @function create
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {ad.IGetAdOrderReq=} [properties] Properties to set
         * @returns {ad.GetAdOrderReq} GetAdOrderReq instance
         */
        GetAdOrderReq.create = function create(properties) {
            return new GetAdOrderReq(properties);
        };

        /**
         * Encodes the specified GetAdOrderReq message. Does not implicitly {@link ad.GetAdOrderReq.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {ad.IGetAdOrderReq} message GetAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdOrderReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.date);
            if (message.oid != null && Object.hasOwnProperty.call(message, "oid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.oid);
            return writer;
        };

        /**
         * Encodes the specified GetAdOrderReq message, length delimited. Does not implicitly {@link ad.GetAdOrderReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {ad.IGetAdOrderReq} message GetAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdOrderReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdOrderReq message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdOrderReq} GetAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdOrderReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdOrderReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.date = reader.int64();
                    break;
                case 3:
                    message.oid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAdOrderReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdOrderReq} GetAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdOrderReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdOrderReq message.
         * @function verify
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdOrderReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isInteger(message.date) && !(message.date && $util.isInteger(message.date.low) && $util.isInteger(message.date.high)))
                    return "date: integer|Long expected";
            if (message.oid != null && message.hasOwnProperty("oid"))
                if (!$util.isString(message.oid))
                    return "oid: string expected";
            return null;
        };

        /**
         * Creates a GetAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdOrderReq} GetAdOrderReq
         */
        GetAdOrderReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdOrderReq)
                return object;
            var message = new $root.ad.GetAdOrderReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.date != null)
                if ($util.Long)
                    (message.date = $util.Long.fromValue(object.date)).unsigned = false;
                else if (typeof object.date === "string")
                    message.date = parseInt(object.date, 10);
                else if (typeof object.date === "number")
                    message.date = object.date;
                else if (typeof object.date === "object")
                    message.date = new $util.LongBits(object.date.low >>> 0, object.date.high >>> 0).toNumber();
            if (object.oid != null)
                message.oid = String(object.oid);
            return message;
        };

        /**
         * Creates a plain object from a GetAdOrderReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdOrderReq
         * @static
         * @param {ad.GetAdOrderReq} message GetAdOrderReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdOrderReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.date = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.date = options.longs === String ? "0" : 0;
                object.oid = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.date != null && message.hasOwnProperty("date"))
                if (typeof message.date === "number")
                    object.date = options.longs === String ? String(message.date) : message.date;
                else
                    object.date = options.longs === String ? $util.Long.prototype.toString.call(message.date) : options.longs === Number ? new $util.LongBits(message.date.low >>> 0, message.date.high >>> 0).toNumber() : message.date;
            if (message.oid != null && message.hasOwnProperty("oid"))
                object.oid = message.oid;
            return object;
        };

        /**
         * Converts this GetAdOrderReq to JSON.
         * @function toJSON
         * @memberof ad.GetAdOrderReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdOrderReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdOrderReq;
    })();

    ad.GetAdOrderAck = (function() {

        /**
         * Properties of a GetAdOrderAck.
         * @memberof ad
         * @interface IGetAdOrderAck
         * @property {number|null} [errCode] GetAdOrderAck errCode
         * @property {string|null} [errMsg] GetAdOrderAck errMsg
         * @property {Array.<ad.IOrder>|null} [orders] GetAdOrderAck orders
         */

        /**
         * Constructs a new GetAdOrderAck.
         * @memberof ad
         * @classdesc Represents a GetAdOrderAck.
         * @implements IGetAdOrderAck
         * @constructor
         * @param {ad.IGetAdOrderAck=} [properties] Properties to set
         */
        function GetAdOrderAck(properties) {
            this.orders = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdOrderAck errCode.
         * @member {number} errCode
         * @memberof ad.GetAdOrderAck
         * @instance
         */
        GetAdOrderAck.prototype.errCode = 0;

        /**
         * GetAdOrderAck errMsg.
         * @member {string} errMsg
         * @memberof ad.GetAdOrderAck
         * @instance
         */
        GetAdOrderAck.prototype.errMsg = "";

        /**
         * GetAdOrderAck orders.
         * @member {Array.<ad.IOrder>} orders
         * @memberof ad.GetAdOrderAck
         * @instance
         */
        GetAdOrderAck.prototype.orders = $util.emptyArray;

        /**
         * Creates a new GetAdOrderAck instance using the specified properties.
         * @function create
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {ad.IGetAdOrderAck=} [properties] Properties to set
         * @returns {ad.GetAdOrderAck} GetAdOrderAck instance
         */
        GetAdOrderAck.create = function create(properties) {
            return new GetAdOrderAck(properties);
        };

        /**
         * Encodes the specified GetAdOrderAck message. Does not implicitly {@link ad.GetAdOrderAck.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {ad.IGetAdOrderAck} message GetAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdOrderAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.orders != null && message.orders.length)
                for (var i = 0; i < message.orders.length; ++i)
                    $root.ad.Order.encode(message.orders[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAdOrderAck message, length delimited. Does not implicitly {@link ad.GetAdOrderAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {ad.IGetAdOrderAck} message GetAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdOrderAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdOrderAck message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdOrderAck} GetAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdOrderAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdOrderAck();
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
                    if (!(message.orders && message.orders.length))
                        message.orders = [];
                    message.orders.push($root.ad.Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAdOrderAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdOrderAck} GetAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdOrderAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdOrderAck message.
         * @function verify
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdOrderAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.orders != null && message.hasOwnProperty("orders")) {
                if (!Array.isArray(message.orders))
                    return "orders: array expected";
                for (var i = 0; i < message.orders.length; ++i) {
                    var error = $root.ad.Order.verify(message.orders[i]);
                    if (error)
                        return "orders." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdOrderAck} GetAdOrderAck
         */
        GetAdOrderAck.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdOrderAck)
                return object;
            var message = new $root.ad.GetAdOrderAck();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.orders) {
                if (!Array.isArray(object.orders))
                    throw TypeError(".ad.GetAdOrderAck.orders: array expected");
                message.orders = [];
                for (var i = 0; i < object.orders.length; ++i) {
                    if (typeof object.orders[i] !== "object")
                        throw TypeError(".ad.GetAdOrderAck.orders: object expected");
                    message.orders[i] = $root.ad.Order.fromObject(object.orders[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAdOrderAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdOrderAck
         * @static
         * @param {ad.GetAdOrderAck} message GetAdOrderAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdOrderAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.orders = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.orders && message.orders.length) {
                object.orders = [];
                for (var j = 0; j < message.orders.length; ++j)
                    object.orders[j] = $root.ad.Order.toObject(message.orders[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAdOrderAck to JSON.
         * @function toJSON
         * @memberof ad.GetAdOrderAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdOrderAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdOrderAck;
    })();

    ad.UpdateAdOrderReq = (function() {

        /**
         * Properties of an UpdateAdOrderReq.
         * @memberof ad
         * @interface IUpdateAdOrderReq
         * @property {string|null} [oid] UpdateAdOrderReq oid
         * @property {number|null} [state] UpdateAdOrderReq state
         */

        /**
         * Constructs a new UpdateAdOrderReq.
         * @memberof ad
         * @classdesc Represents an UpdateAdOrderReq.
         * @implements IUpdateAdOrderReq
         * @constructor
         * @param {ad.IUpdateAdOrderReq=} [properties] Properties to set
         */
        function UpdateAdOrderReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAdOrderReq oid.
         * @member {string} oid
         * @memberof ad.UpdateAdOrderReq
         * @instance
         */
        UpdateAdOrderReq.prototype.oid = "";

        /**
         * UpdateAdOrderReq state.
         * @member {number} state
         * @memberof ad.UpdateAdOrderReq
         * @instance
         */
        UpdateAdOrderReq.prototype.state = 0;

        /**
         * Creates a new UpdateAdOrderReq instance using the specified properties.
         * @function create
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {ad.IUpdateAdOrderReq=} [properties] Properties to set
         * @returns {ad.UpdateAdOrderReq} UpdateAdOrderReq instance
         */
        UpdateAdOrderReq.create = function create(properties) {
            return new UpdateAdOrderReq(properties);
        };

        /**
         * Encodes the specified UpdateAdOrderReq message. Does not implicitly {@link ad.UpdateAdOrderReq.verify|verify} messages.
         * @function encode
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {ad.IUpdateAdOrderReq} message UpdateAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdOrderReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oid != null && Object.hasOwnProperty.call(message, "oid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oid);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UpdateAdOrderReq message, length delimited. Does not implicitly {@link ad.UpdateAdOrderReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {ad.IUpdateAdOrderReq} message UpdateAdOrderReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdOrderReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAdOrderReq message from the specified reader or buffer.
         * @function decode
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.UpdateAdOrderReq} UpdateAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdOrderReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.UpdateAdOrderReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oid = reader.string();
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
         * Decodes an UpdateAdOrderReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.UpdateAdOrderReq} UpdateAdOrderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdOrderReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAdOrderReq message.
         * @function verify
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAdOrderReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oid != null && message.hasOwnProperty("oid"))
                if (!$util.isString(message.oid))
                    return "oid: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates an UpdateAdOrderReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.UpdateAdOrderReq} UpdateAdOrderReq
         */
        UpdateAdOrderReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.UpdateAdOrderReq)
                return object;
            var message = new $root.ad.UpdateAdOrderReq();
            if (object.oid != null)
                message.oid = String(object.oid);
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdateAdOrderReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.UpdateAdOrderReq
         * @static
         * @param {ad.UpdateAdOrderReq} message UpdateAdOrderReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAdOrderReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.oid = "";
                object.state = 0;
            }
            if (message.oid != null && message.hasOwnProperty("oid"))
                object.oid = message.oid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this UpdateAdOrderReq to JSON.
         * @function toJSON
         * @memberof ad.UpdateAdOrderReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAdOrderReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAdOrderReq;
    })();

    ad.UpdateAdOrderAck = (function() {

        /**
         * Properties of an UpdateAdOrderAck.
         * @memberof ad
         * @interface IUpdateAdOrderAck
         * @property {number|null} [errCode] UpdateAdOrderAck errCode
         * @property {string|null} [errMsg] UpdateAdOrderAck errMsg
         * @property {ad.IOrder|null} [order] UpdateAdOrderAck order
         */

        /**
         * Constructs a new UpdateAdOrderAck.
         * @memberof ad
         * @classdesc Represents an UpdateAdOrderAck.
         * @implements IUpdateAdOrderAck
         * @constructor
         * @param {ad.IUpdateAdOrderAck=} [properties] Properties to set
         */
        function UpdateAdOrderAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAdOrderAck errCode.
         * @member {number} errCode
         * @memberof ad.UpdateAdOrderAck
         * @instance
         */
        UpdateAdOrderAck.prototype.errCode = 0;

        /**
         * UpdateAdOrderAck errMsg.
         * @member {string} errMsg
         * @memberof ad.UpdateAdOrderAck
         * @instance
         */
        UpdateAdOrderAck.prototype.errMsg = "";

        /**
         * UpdateAdOrderAck order.
         * @member {ad.IOrder|null|undefined} order
         * @memberof ad.UpdateAdOrderAck
         * @instance
         */
        UpdateAdOrderAck.prototype.order = null;

        /**
         * Creates a new UpdateAdOrderAck instance using the specified properties.
         * @function create
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {ad.IUpdateAdOrderAck=} [properties] Properties to set
         * @returns {ad.UpdateAdOrderAck} UpdateAdOrderAck instance
         */
        UpdateAdOrderAck.create = function create(properties) {
            return new UpdateAdOrderAck(properties);
        };

        /**
         * Encodes the specified UpdateAdOrderAck message. Does not implicitly {@link ad.UpdateAdOrderAck.verify|verify} messages.
         * @function encode
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {ad.IUpdateAdOrderAck} message UpdateAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdOrderAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                $root.ad.Order.encode(message.order, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateAdOrderAck message, length delimited. Does not implicitly {@link ad.UpdateAdOrderAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {ad.IUpdateAdOrderAck} message UpdateAdOrderAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAdOrderAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAdOrderAck message from the specified reader or buffer.
         * @function decode
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.UpdateAdOrderAck} UpdateAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdOrderAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.UpdateAdOrderAck();
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
                    message.order = $root.ad.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAdOrderAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.UpdateAdOrderAck} UpdateAdOrderAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAdOrderAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAdOrderAck message.
         * @function verify
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAdOrderAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.order != null && message.hasOwnProperty("order")) {
                var error = $root.ad.Order.verify(message.order);
                if (error)
                    return "order." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateAdOrderAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.UpdateAdOrderAck} UpdateAdOrderAck
         */
        UpdateAdOrderAck.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.UpdateAdOrderAck)
                return object;
            var message = new $root.ad.UpdateAdOrderAck();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.order != null) {
                if (typeof object.order !== "object")
                    throw TypeError(".ad.UpdateAdOrderAck.order: object expected");
                message.order = $root.ad.Order.fromObject(object.order);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateAdOrderAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.UpdateAdOrderAck
         * @static
         * @param {ad.UpdateAdOrderAck} message UpdateAdOrderAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAdOrderAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
                object.order = null;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = $root.ad.Order.toObject(message.order, options);
            return object;
        };

        /**
         * Converts this UpdateAdOrderAck to JSON.
         * @function toJSON
         * @memberof ad.UpdateAdOrderAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAdOrderAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAdOrderAck;
    })();

    ad.GetAdAwardsReq = (function() {

        /**
         * Properties of a GetAdAwardsReq.
         * @memberof ad
         * @interface IGetAdAwardsReq
         * @property {string|null} [oid] GetAdAwardsReq oid
         */

        /**
         * Constructs a new GetAdAwardsReq.
         * @memberof ad
         * @classdesc Represents a GetAdAwardsReq.
         * @implements IGetAdAwardsReq
         * @constructor
         * @param {ad.IGetAdAwardsReq=} [properties] Properties to set
         */
        function GetAdAwardsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdAwardsReq oid.
         * @member {string} oid
         * @memberof ad.GetAdAwardsReq
         * @instance
         */
        GetAdAwardsReq.prototype.oid = "";

        /**
         * Creates a new GetAdAwardsReq instance using the specified properties.
         * @function create
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {ad.IGetAdAwardsReq=} [properties] Properties to set
         * @returns {ad.GetAdAwardsReq} GetAdAwardsReq instance
         */
        GetAdAwardsReq.create = function create(properties) {
            return new GetAdAwardsReq(properties);
        };

        /**
         * Encodes the specified GetAdAwardsReq message. Does not implicitly {@link ad.GetAdAwardsReq.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {ad.IGetAdAwardsReq} message GetAdAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdAwardsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oid != null && Object.hasOwnProperty.call(message, "oid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oid);
            return writer;
        };

        /**
         * Encodes the specified GetAdAwardsReq message, length delimited. Does not implicitly {@link ad.GetAdAwardsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {ad.IGetAdAwardsReq} message GetAdAwardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdAwardsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdAwardsReq message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdAwardsReq} GetAdAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdAwardsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdAwardsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAdAwardsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdAwardsReq} GetAdAwardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdAwardsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdAwardsReq message.
         * @function verify
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdAwardsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oid != null && message.hasOwnProperty("oid"))
                if (!$util.isString(message.oid))
                    return "oid: string expected";
            return null;
        };

        /**
         * Creates a GetAdAwardsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdAwardsReq} GetAdAwardsReq
         */
        GetAdAwardsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdAwardsReq)
                return object;
            var message = new $root.ad.GetAdAwardsReq();
            if (object.oid != null)
                message.oid = String(object.oid);
            return message;
        };

        /**
         * Creates a plain object from a GetAdAwardsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdAwardsReq
         * @static
         * @param {ad.GetAdAwardsReq} message GetAdAwardsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdAwardsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.oid = "";
            if (message.oid != null && message.hasOwnProperty("oid"))
                object.oid = message.oid;
            return object;
        };

        /**
         * Converts this GetAdAwardsReq to JSON.
         * @function toJSON
         * @memberof ad.GetAdAwardsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdAwardsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdAwardsReq;
    })();

    ad.GetAdAwardsAck = (function() {

        /**
         * Properties of a GetAdAwardsAck.
         * @memberof ad
         * @interface IGetAdAwardsAck
         * @property {number|null} [errCode] GetAdAwardsAck errCode
         * @property {string|null} [errMsg] GetAdAwardsAck errMsg
         * @property {Array.<ad.IAward>|null} [awards] GetAdAwardsAck awards
         */

        /**
         * Constructs a new GetAdAwardsAck.
         * @memberof ad
         * @classdesc Represents a GetAdAwardsAck.
         * @implements IGetAdAwardsAck
         * @constructor
         * @param {ad.IGetAdAwardsAck=} [properties] Properties to set
         */
        function GetAdAwardsAck(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdAwardsAck errCode.
         * @member {number} errCode
         * @memberof ad.GetAdAwardsAck
         * @instance
         */
        GetAdAwardsAck.prototype.errCode = 0;

        /**
         * GetAdAwardsAck errMsg.
         * @member {string} errMsg
         * @memberof ad.GetAdAwardsAck
         * @instance
         */
        GetAdAwardsAck.prototype.errMsg = "";

        /**
         * GetAdAwardsAck awards.
         * @member {Array.<ad.IAward>} awards
         * @memberof ad.GetAdAwardsAck
         * @instance
         */
        GetAdAwardsAck.prototype.awards = $util.emptyArray;

        /**
         * Creates a new GetAdAwardsAck instance using the specified properties.
         * @function create
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {ad.IGetAdAwardsAck=} [properties] Properties to set
         * @returns {ad.GetAdAwardsAck} GetAdAwardsAck instance
         */
        GetAdAwardsAck.create = function create(properties) {
            return new GetAdAwardsAck(properties);
        };

        /**
         * Encodes the specified GetAdAwardsAck message. Does not implicitly {@link ad.GetAdAwardsAck.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {ad.IGetAdAwardsAck} message GetAdAwardsAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdAwardsAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.ad.Award.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAdAwardsAck message, length delimited. Does not implicitly {@link ad.GetAdAwardsAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {ad.IGetAdAwardsAck} message GetAdAwardsAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdAwardsAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdAwardsAck message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdAwardsAck} GetAdAwardsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdAwardsAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdAwardsAck();
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
                    message.awards.push($root.ad.Award.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAdAwardsAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdAwardsAck} GetAdAwardsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdAwardsAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdAwardsAck message.
         * @function verify
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdAwardsAck.verify = function verify(message) {
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
                    var error = $root.ad.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAdAwardsAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdAwardsAck} GetAdAwardsAck
         */
        GetAdAwardsAck.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdAwardsAck)
                return object;
            var message = new $root.ad.GetAdAwardsAck();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".ad.GetAdAwardsAck.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".ad.GetAdAwardsAck.awards: object expected");
                    message.awards[i] = $root.ad.Award.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAdAwardsAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdAwardsAck
         * @static
         * @param {ad.GetAdAwardsAck} message GetAdAwardsAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdAwardsAck.toObject = function toObject(message, options) {
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
                    object.awards[j] = $root.ad.Award.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAdAwardsAck to JSON.
         * @function toJSON
         * @memberof ad.GetAdAwardsAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdAwardsAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdAwardsAck;
    })();

    ad.GetAdSpotsReq = (function() {

        /**
         * Properties of a GetAdSpotsReq.
         * @memberof ad
         * @interface IGetAdSpotsReq
         * @property {number|Long|null} [uid] GetAdSpotsReq uid
         */

        /**
         * Constructs a new GetAdSpotsReq.
         * @memberof ad
         * @classdesc Represents a GetAdSpotsReq.
         * @implements IGetAdSpotsReq
         * @constructor
         * @param {ad.IGetAdSpotsReq=} [properties] Properties to set
         */
        function GetAdSpotsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdSpotsReq uid.
         * @member {number|Long} uid
         * @memberof ad.GetAdSpotsReq
         * @instance
         */
        GetAdSpotsReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetAdSpotsReq instance using the specified properties.
         * @function create
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {ad.IGetAdSpotsReq=} [properties] Properties to set
         * @returns {ad.GetAdSpotsReq} GetAdSpotsReq instance
         */
        GetAdSpotsReq.create = function create(properties) {
            return new GetAdSpotsReq(properties);
        };

        /**
         * Encodes the specified GetAdSpotsReq message. Does not implicitly {@link ad.GetAdSpotsReq.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {ad.IGetAdSpotsReq} message GetAdSpotsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdSpotsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetAdSpotsReq message, length delimited. Does not implicitly {@link ad.GetAdSpotsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {ad.IGetAdSpotsReq} message GetAdSpotsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdSpotsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdSpotsReq message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdSpotsReq} GetAdSpotsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdSpotsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdSpotsReq();
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
         * Decodes a GetAdSpotsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdSpotsReq} GetAdSpotsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdSpotsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdSpotsReq message.
         * @function verify
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdSpotsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetAdSpotsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdSpotsReq} GetAdSpotsReq
         */
        GetAdSpotsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdSpotsReq)
                return object;
            var message = new $root.ad.GetAdSpotsReq();
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
         * Creates a plain object from a GetAdSpotsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdSpotsReq
         * @static
         * @param {ad.GetAdSpotsReq} message GetAdSpotsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdSpotsReq.toObject = function toObject(message, options) {
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
         * Converts this GetAdSpotsReq to JSON.
         * @function toJSON
         * @memberof ad.GetAdSpotsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdSpotsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdSpotsReq;
    })();

    ad.GetAdSpotsAck = (function() {

        /**
         * Properties of a GetAdSpotsAck.
         * @memberof ad
         * @interface IGetAdSpotsAck
         * @property {number|null} [errCode] GetAdSpotsAck errCode
         * @property {string|null} [errMsg] GetAdSpotsAck errMsg
         * @property {Array.<ad.IRecord>|null} [records] GetAdSpotsAck records
         */

        /**
         * Constructs a new GetAdSpotsAck.
         * @memberof ad
         * @classdesc Represents a GetAdSpotsAck.
         * @implements IGetAdSpotsAck
         * @constructor
         * @param {ad.IGetAdSpotsAck=} [properties] Properties to set
         */
        function GetAdSpotsAck(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAdSpotsAck errCode.
         * @member {number} errCode
         * @memberof ad.GetAdSpotsAck
         * @instance
         */
        GetAdSpotsAck.prototype.errCode = 0;

        /**
         * GetAdSpotsAck errMsg.
         * @member {string} errMsg
         * @memberof ad.GetAdSpotsAck
         * @instance
         */
        GetAdSpotsAck.prototype.errMsg = "";

        /**
         * GetAdSpotsAck records.
         * @member {Array.<ad.IRecord>} records
         * @memberof ad.GetAdSpotsAck
         * @instance
         */
        GetAdSpotsAck.prototype.records = $util.emptyArray;

        /**
         * Creates a new GetAdSpotsAck instance using the specified properties.
         * @function create
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {ad.IGetAdSpotsAck=} [properties] Properties to set
         * @returns {ad.GetAdSpotsAck} GetAdSpotsAck instance
         */
        GetAdSpotsAck.create = function create(properties) {
            return new GetAdSpotsAck(properties);
        };

        /**
         * Encodes the specified GetAdSpotsAck message. Does not implicitly {@link ad.GetAdSpotsAck.verify|verify} messages.
         * @function encode
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {ad.IGetAdSpotsAck} message GetAdSpotsAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdSpotsAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.ad.Record.encode(message.records[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAdSpotsAck message, length delimited. Does not implicitly {@link ad.GetAdSpotsAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {ad.IGetAdSpotsAck} message GetAdSpotsAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAdSpotsAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAdSpotsAck message from the specified reader or buffer.
         * @function decode
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.GetAdSpotsAck} GetAdSpotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdSpotsAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.GetAdSpotsAck();
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
                    if (!(message.records && message.records.length))
                        message.records = [];
                    message.records.push($root.ad.Record.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAdSpotsAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.GetAdSpotsAck} GetAdSpotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAdSpotsAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAdSpotsAck message.
         * @function verify
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAdSpotsAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.records != null && message.hasOwnProperty("records")) {
                if (!Array.isArray(message.records))
                    return "records: array expected";
                for (var i = 0; i < message.records.length; ++i) {
                    var error = $root.ad.Record.verify(message.records[i]);
                    if (error)
                        return "records." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAdSpotsAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.GetAdSpotsAck} GetAdSpotsAck
         */
        GetAdSpotsAck.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.GetAdSpotsAck)
                return object;
            var message = new $root.ad.GetAdSpotsAck();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.records) {
                if (!Array.isArray(object.records))
                    throw TypeError(".ad.GetAdSpotsAck.records: array expected");
                message.records = [];
                for (var i = 0; i < object.records.length; ++i) {
                    if (typeof object.records[i] !== "object")
                        throw TypeError(".ad.GetAdSpotsAck.records: object expected");
                    message.records[i] = $root.ad.Record.fromObject(object.records[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAdSpotsAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.GetAdSpotsAck
         * @static
         * @param {ad.GetAdSpotsAck} message GetAdSpotsAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAdSpotsAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.records = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.records && message.records.length) {
                object.records = [];
                for (var j = 0; j < message.records.length; ++j)
                    object.records[j] = $root.ad.Record.toObject(message.records[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAdSpotsAck to JSON.
         * @function toJSON
         * @memberof ad.GetAdSpotsAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAdSpotsAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAdSpotsAck;
    })();

    ad.AdSpotDispNoti = (function() {

        /**
         * Properties of an AdSpotDispNoti.
         * @memberof ad
         * @interface IAdSpotDispNoti
         * @property {number|null} [aid] AdSpotDispNoti aid
         * @property {Array.<ad.IPair>|null} [params] AdSpotDispNoti params
         */

        /**
         * Constructs a new AdSpotDispNoti.
         * @memberof ad
         * @classdesc Represents an AdSpotDispNoti.
         * @implements IAdSpotDispNoti
         * @constructor
         * @param {ad.IAdSpotDispNoti=} [properties] Properties to set
         */
        function AdSpotDispNoti(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdSpotDispNoti aid.
         * @member {number} aid
         * @memberof ad.AdSpotDispNoti
         * @instance
         */
        AdSpotDispNoti.prototype.aid = 0;

        /**
         * AdSpotDispNoti params.
         * @member {Array.<ad.IPair>} params
         * @memberof ad.AdSpotDispNoti
         * @instance
         */
        AdSpotDispNoti.prototype.params = $util.emptyArray;

        /**
         * Creates a new AdSpotDispNoti instance using the specified properties.
         * @function create
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {ad.IAdSpotDispNoti=} [properties] Properties to set
         * @returns {ad.AdSpotDispNoti} AdSpotDispNoti instance
         */
        AdSpotDispNoti.create = function create(properties) {
            return new AdSpotDispNoti(properties);
        };

        /**
         * Encodes the specified AdSpotDispNoti message. Does not implicitly {@link ad.AdSpotDispNoti.verify|verify} messages.
         * @function encode
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {ad.IAdSpotDispNoti} message AdSpotDispNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdSpotDispNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aid != null && Object.hasOwnProperty.call(message, "aid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.aid);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.ad.Pair.encode(message.params[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdSpotDispNoti message, length delimited. Does not implicitly {@link ad.AdSpotDispNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {ad.IAdSpotDispNoti} message AdSpotDispNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdSpotDispNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdSpotDispNoti message from the specified reader or buffer.
         * @function decode
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.AdSpotDispNoti} AdSpotDispNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdSpotDispNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.AdSpotDispNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aid = reader.int32();
                    break;
                case 2:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push($root.ad.Pair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdSpotDispNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.AdSpotDispNoti} AdSpotDispNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdSpotDispNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdSpotDispNoti message.
         * @function verify
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdSpotDispNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aid != null && message.hasOwnProperty("aid"))
                if (!$util.isInteger(message.aid))
                    return "aid: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.ad.Pair.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AdSpotDispNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.AdSpotDispNoti} AdSpotDispNoti
         */
        AdSpotDispNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.AdSpotDispNoti)
                return object;
            var message = new $root.ad.AdSpotDispNoti();
            if (object.aid != null)
                message.aid = object.aid | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".ad.AdSpotDispNoti.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".ad.AdSpotDispNoti.params: object expected");
                    message.params[i] = $root.ad.Pair.fromObject(object.params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AdSpotDispNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.AdSpotDispNoti
         * @static
         * @param {ad.AdSpotDispNoti} message AdSpotDispNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdSpotDispNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.aid = 0;
            if (message.aid != null && message.hasOwnProperty("aid"))
                object.aid = message.aid;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.ad.Pair.toObject(message.params[j], options);
            }
            return object;
        };

        /**
         * Converts this AdSpotDispNoti to JSON.
         * @function toJSON
         * @memberof ad.AdSpotDispNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdSpotDispNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdSpotDispNoti;
    })();

    ad.PublishNoti = (function() {

        /**
         * Properties of a PublishNoti.
         * @memberof ad
         * @interface IPublishNoti
         * @property {Object.<string,string>|null} [params] PublishNoti params
         */

        /**
         * Constructs a new PublishNoti.
         * @memberof ad
         * @classdesc Represents a PublishNoti.
         * @implements IPublishNoti
         * @constructor
         * @param {ad.IPublishNoti=} [properties] Properties to set
         */
        function PublishNoti(properties) {
            this.params = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublishNoti params.
         * @member {Object.<string,string>} params
         * @memberof ad.PublishNoti
         * @instance
         */
        PublishNoti.prototype.params = $util.emptyObject;

        /**
         * Creates a new PublishNoti instance using the specified properties.
         * @function create
         * @memberof ad.PublishNoti
         * @static
         * @param {ad.IPublishNoti=} [properties] Properties to set
         * @returns {ad.PublishNoti} PublishNoti instance
         */
        PublishNoti.create = function create(properties) {
            return new PublishNoti(properties);
        };

        /**
         * Encodes the specified PublishNoti message. Does not implicitly {@link ad.PublishNoti.verify|verify} messages.
         * @function encode
         * @memberof ad.PublishNoti
         * @static
         * @param {ad.IPublishNoti} message PublishNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                for (var keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PublishNoti message, length delimited. Does not implicitly {@link ad.PublishNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ad.PublishNoti
         * @static
         * @param {ad.IPublishNoti} message PublishNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublishNoti message from the specified reader or buffer.
         * @function decode
         * @memberof ad.PublishNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ad.PublishNoti} PublishNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ad.PublishNoti(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes a PublishNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ad.PublishNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ad.PublishNoti} PublishNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PublishNoti message.
         * @function verify
         * @memberof ad.PublishNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublishNoti.verify = function verify(message) {
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
         * Creates a PublishNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ad.PublishNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ad.PublishNoti} PublishNoti
         */
        PublishNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.ad.PublishNoti)
                return object;
            var message = new $root.ad.PublishNoti();
            if (object.params) {
                if (typeof object.params !== "object")
                    throw TypeError(".ad.PublishNoti.params: object expected");
                message.params = {};
                for (var keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                    message.params[keys[i]] = String(object.params[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PublishNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ad.PublishNoti
         * @static
         * @param {ad.PublishNoti} message PublishNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublishNoti.toObject = function toObject(message, options) {
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
         * Converts this PublishNoti to JSON.
         * @function toJSON
         * @memberof ad.PublishNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublishNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PublishNoti;
    })();

    return ad;
})();

module.exports = $root.ad;
