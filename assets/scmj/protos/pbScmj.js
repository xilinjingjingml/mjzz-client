/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.scmj = (function() {

    /**
     * Namespace scmj.
     * @exports scmj
     * @namespace
     */
    var scmj = {};

    scmj.Scmj = (function() {

        /**
         * Constructs a new Scmj service.
         * @memberof scmj
         * @classdesc Represents a Scmj
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Scmj(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Scmj.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Scmj;

        /**
         * Creates new Scmj service using the specified rpc implementation.
         * @function create
         * @memberof scmj.Scmj
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Scmj} RPC service. Useful where requests and/or responses are streamed.
         */
        Scmj.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link scmj.Scmj#operate}.
         * @memberof scmj.Scmj
         * @typedef OperateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Operate.
         * @function operate
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IOperateRsp} request OperateRsp message or plain object
         * @param {scmj.Scmj.OperateCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.operate = function operate(request, callback) {
            return this.rpcCall(operate, $root.scmj.OperateRsp, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Operate" });

        /**
         * Calls Operate.
         * @function operate
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IOperateRsp} request OperateRsp message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#exchange}.
         * @memberof scmj.Scmj
         * @typedef ExchangeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Exchange.
         * @function exchange
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IExchangeRsp} request ExchangeRsp message or plain object
         * @param {scmj.Scmj.ExchangeCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.exchange = function exchange(request, callback) {
            return this.rpcCall(exchange, $root.scmj.ExchangeRsp, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Exchange" });

        /**
         * Calls Exchange.
         * @function exchange
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IExchangeRsp} request ExchangeRsp message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#lack}.
         * @memberof scmj.Scmj
         * @typedef LackCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Lack.
         * @function lack
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ILackRsp} request LackRsp message or plain object
         * @param {scmj.Scmj.LackCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.lack = function lack(request, callback) {
            return this.rpcCall(lack, $root.scmj.LackRsp, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Lack" });

        /**
         * Calls Lack.
         * @function lack
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ILackRsp} request LackRsp message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#bill}.
         * @memberof scmj.Scmj
         * @typedef BillCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Bill.
         * @function bill
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IBillReq} request BillReq message or plain object
         * @param {scmj.Scmj.BillCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.bill = function bill(request, callback) {
            return this.rpcCall(bill, $root.scmj.BillReq, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Bill" });

        /**
         * Calls Bill.
         * @function bill
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IBillReq} request BillReq message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#complete}.
         * @memberof scmj.Scmj
         * @typedef CompleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Complete.
         * @function complete
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ICompleteReq} request CompleteReq message or plain object
         * @param {scmj.Scmj.CompleteCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.complete = function complete(request, callback) {
            return this.rpcCall(complete, $root.scmj.CompleteReq, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Complete" });

        /**
         * Calls Complete.
         * @function complete
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ICompleteReq} request CompleteReq message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#auto}.
         * @memberof scmj.Scmj
         * @typedef AutoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Auto.
         * @function auto
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IAutoReq} request AutoReq message or plain object
         * @param {scmj.Scmj.AutoCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.auto = function auto(request, callback) {
            return this.rpcCall(auto, $root.scmj.AutoReq, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Auto" });

        /**
         * Calls Auto.
         * @function auto
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IAutoReq} request AutoReq message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#change}.
         * @memberof scmj.Scmj
         * @typedef ChangeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls Change.
         * @function change
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IChangeRsp} request ChangeRsp message or plain object
         * @param {scmj.Scmj.ChangeCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.change = function change(request, callback) {
            return this.rpcCall(change, $root.scmj.ChangeRsp, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "Change" });

        /**
         * Calls Change.
         * @function change
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IChangeRsp} request ChangeRsp message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#changeCardStart}.
         * @memberof scmj.Scmj
         * @typedef ChangeCardStartCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls ChangeCardStart.
         * @function changeCardStart
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IChangeCardStartReq} request ChangeCardStartReq message or plain object
         * @param {scmj.Scmj.ChangeCardStartCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.changeCardStart = function changeCardStart(request, callback) {
            return this.rpcCall(changeCardStart, $root.scmj.ChangeCardStartReq, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "ChangeCardStart" });

        /**
         * Calls ChangeCardStart.
         * @function changeCardStart
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.IChangeCardStartReq} request ChangeCardStartReq message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link scmj.Scmj#tingTip}.
         * @memberof scmj.Scmj
         * @typedef TingTipCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {scmj.ScmjEmpty} [response] ScmjEmpty
         */

        /**
         * Calls TingTip.
         * @function tingTip
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ITingTipReq} request TingTipReq message or plain object
         * @param {scmj.Scmj.TingTipCallback} callback Node-style callback called with the error, if any, and ScmjEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Scmj.prototype.tingTip = function tingTip(request, callback) {
            return this.rpcCall(tingTip, $root.scmj.TingTipReq, $root.scmj.ScmjEmpty, request, callback);
        }, "name", { value: "TingTip" });

        /**
         * Calls TingTip.
         * @function tingTip
         * @memberof scmj.Scmj
         * @instance
         * @param {scmj.ITingTipReq} request TingTipReq message or plain object
         * @returns {Promise<scmj.ScmjEmpty>} Promise
         * @variation 2
         */

        return Scmj;
    })();

    scmj.ScmjEmpty = (function() {

        /**
         * Properties of a ScmjEmpty.
         * @memberof scmj
         * @interface IScmjEmpty
         */

        /**
         * Constructs a new ScmjEmpty.
         * @memberof scmj
         * @classdesc Represents a ScmjEmpty.
         * @implements IScmjEmpty
         * @constructor
         * @param {scmj.IScmjEmpty=} [properties] Properties to set
         */
        function ScmjEmpty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ScmjEmpty instance using the specified properties.
         * @function create
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {scmj.IScmjEmpty=} [properties] Properties to set
         * @returns {scmj.ScmjEmpty} ScmjEmpty instance
         */
        ScmjEmpty.create = function create(properties) {
            return new ScmjEmpty(properties);
        };

        /**
         * Encodes the specified ScmjEmpty message. Does not implicitly {@link scmj.ScmjEmpty.verify|verify} messages.
         * @function encode
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {scmj.IScmjEmpty} message ScmjEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScmjEmpty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ScmjEmpty message, length delimited. Does not implicitly {@link scmj.ScmjEmpty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {scmj.IScmjEmpty} message ScmjEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScmjEmpty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScmjEmpty message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ScmjEmpty} ScmjEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScmjEmpty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ScmjEmpty();
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
         * Decodes a ScmjEmpty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ScmjEmpty} ScmjEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScmjEmpty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScmjEmpty message.
         * @function verify
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScmjEmpty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ScmjEmpty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ScmjEmpty} ScmjEmpty
         */
        ScmjEmpty.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ScmjEmpty)
                return object;
            return new $root.scmj.ScmjEmpty();
        };

        /**
         * Creates a plain object from a ScmjEmpty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ScmjEmpty
         * @static
         * @param {scmj.ScmjEmpty} message ScmjEmpty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScmjEmpty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ScmjEmpty to JSON.
         * @function toJSON
         * @memberof scmj.ScmjEmpty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScmjEmpty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ScmjEmpty;
    })();

    scmj.ClientTimerNoti = (function() {

        /**
         * Properties of a ClientTimerNoti.
         * @memberof scmj
         * @interface IClientTimerNoti
         * @property {number|null} [chairId] ClientTimerNoti chairId
         * @property {number|null} [second] ClientTimerNoti second
         * @property {number|null} [remainCardNum] ClientTimerNoti remainCardNum
         */

        /**
         * Constructs a new ClientTimerNoti.
         * @memberof scmj
         * @classdesc Represents a ClientTimerNoti.
         * @implements IClientTimerNoti
         * @constructor
         * @param {scmj.IClientTimerNoti=} [properties] Properties to set
         */
        function ClientTimerNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientTimerNoti chairId.
         * @member {number} chairId
         * @memberof scmj.ClientTimerNoti
         * @instance
         */
        ClientTimerNoti.prototype.chairId = 0;

        /**
         * ClientTimerNoti second.
         * @member {number} second
         * @memberof scmj.ClientTimerNoti
         * @instance
         */
        ClientTimerNoti.prototype.second = 0;

        /**
         * ClientTimerNoti remainCardNum.
         * @member {number} remainCardNum
         * @memberof scmj.ClientTimerNoti
         * @instance
         */
        ClientTimerNoti.prototype.remainCardNum = 0;

        /**
         * Creates a new ClientTimerNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {scmj.IClientTimerNoti=} [properties] Properties to set
         * @returns {scmj.ClientTimerNoti} ClientTimerNoti instance
         */
        ClientTimerNoti.create = function create(properties) {
            return new ClientTimerNoti(properties);
        };

        /**
         * Encodes the specified ClientTimerNoti message. Does not implicitly {@link scmj.ClientTimerNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {scmj.IClientTimerNoti} message ClientTimerNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientTimerNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.second != null && Object.hasOwnProperty.call(message, "second"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.second);
            if (message.remainCardNum != null && Object.hasOwnProperty.call(message, "remainCardNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.remainCardNum);
            return writer;
        };

        /**
         * Encodes the specified ClientTimerNoti message, length delimited. Does not implicitly {@link scmj.ClientTimerNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {scmj.IClientTimerNoti} message ClientTimerNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientTimerNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientTimerNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ClientTimerNoti} ClientTimerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientTimerNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ClientTimerNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.second = reader.int32();
                    break;
                case 3:
                    message.remainCardNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientTimerNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ClientTimerNoti} ClientTimerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientTimerNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientTimerNoti message.
         * @function verify
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientTimerNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.second != null && message.hasOwnProperty("second"))
                if (!$util.isInteger(message.second))
                    return "second: integer expected";
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                if (!$util.isInteger(message.remainCardNum))
                    return "remainCardNum: integer expected";
            return null;
        };

        /**
         * Creates a ClientTimerNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ClientTimerNoti} ClientTimerNoti
         */
        ClientTimerNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ClientTimerNoti)
                return object;
            var message = new $root.scmj.ClientTimerNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.second != null)
                message.second = object.second | 0;
            if (object.remainCardNum != null)
                message.remainCardNum = object.remainCardNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a ClientTimerNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ClientTimerNoti
         * @static
         * @param {scmj.ClientTimerNoti} message ClientTimerNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientTimerNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.second = 0;
                object.remainCardNum = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.second != null && message.hasOwnProperty("second"))
                object.second = message.second;
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                object.remainCardNum = message.remainCardNum;
            return object;
        };

        /**
         * Converts this ClientTimerNoti to JSON.
         * @function toJSON
         * @memberof scmj.ClientTimerNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientTimerNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientTimerNoti;
    })();

    scmj.MjPlayMarkNoti = (function() {

        /**
         * Properties of a MjPlayMarkNoti.
         * @memberof scmj
         * @interface IMjPlayMarkNoti
         * @property {number|null} [chairId] MjPlayMarkNoti chairId
         */

        /**
         * Constructs a new MjPlayMarkNoti.
         * @memberof scmj
         * @classdesc Represents a MjPlayMarkNoti.
         * @implements IMjPlayMarkNoti
         * @constructor
         * @param {scmj.IMjPlayMarkNoti=} [properties] Properties to set
         */
        function MjPlayMarkNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MjPlayMarkNoti chairId.
         * @member {number} chairId
         * @memberof scmj.MjPlayMarkNoti
         * @instance
         */
        MjPlayMarkNoti.prototype.chairId = 0;

        /**
         * Creates a new MjPlayMarkNoti instance using the specified properties.
         * @function create
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {scmj.IMjPlayMarkNoti=} [properties] Properties to set
         * @returns {scmj.MjPlayMarkNoti} MjPlayMarkNoti instance
         */
        MjPlayMarkNoti.create = function create(properties) {
            return new MjPlayMarkNoti(properties);
        };

        /**
         * Encodes the specified MjPlayMarkNoti message. Does not implicitly {@link scmj.MjPlayMarkNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {scmj.IMjPlayMarkNoti} message MjPlayMarkNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MjPlayMarkNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            return writer;
        };

        /**
         * Encodes the specified MjPlayMarkNoti message, length delimited. Does not implicitly {@link scmj.MjPlayMarkNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {scmj.IMjPlayMarkNoti} message MjPlayMarkNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MjPlayMarkNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MjPlayMarkNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.MjPlayMarkNoti} MjPlayMarkNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MjPlayMarkNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.MjPlayMarkNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MjPlayMarkNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.MjPlayMarkNoti} MjPlayMarkNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MjPlayMarkNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MjPlayMarkNoti message.
         * @function verify
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MjPlayMarkNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            return null;
        };

        /**
         * Creates a MjPlayMarkNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.MjPlayMarkNoti} MjPlayMarkNoti
         */
        MjPlayMarkNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.MjPlayMarkNoti)
                return object;
            var message = new $root.scmj.MjPlayMarkNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MjPlayMarkNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.MjPlayMarkNoti
         * @static
         * @param {scmj.MjPlayMarkNoti} message MjPlayMarkNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MjPlayMarkNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.chairId = 0;
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            return object;
        };

        /**
         * Converts this MjPlayMarkNoti to JSON.
         * @function toJSON
         * @memberof scmj.MjPlayMarkNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MjPlayMarkNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MjPlayMarkNoti;
    })();

    scmj.UserItem = (function() {

        /**
         * Properties of a UserItem.
         * @memberof scmj
         * @interface IUserItem
         * @property {number|Long|null} [uid] UserItem uid
         * @property {string|null} [nickname] UserItem nickname
         * @property {number|Long|null} [score] UserItem score
         */

        /**
         * Constructs a new UserItem.
         * @memberof scmj
         * @classdesc Represents a UserItem.
         * @implements IUserItem
         * @constructor
         * @param {scmj.IUserItem=} [properties] Properties to set
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
         * @memberof scmj.UserItem
         * @instance
         */
        UserItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserItem nickname.
         * @member {string} nickname
         * @memberof scmj.UserItem
         * @instance
         */
        UserItem.prototype.nickname = "";

        /**
         * UserItem score.
         * @member {number|Long} score
         * @memberof scmj.UserItem
         * @instance
         */
        UserItem.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserItem instance using the specified properties.
         * @function create
         * @memberof scmj.UserItem
         * @static
         * @param {scmj.IUserItem=} [properties] Properties to set
         * @returns {scmj.UserItem} UserItem instance
         */
        UserItem.create = function create(properties) {
            return new UserItem(properties);
        };

        /**
         * Encodes the specified UserItem message. Does not implicitly {@link scmj.UserItem.verify|verify} messages.
         * @function encode
         * @memberof scmj.UserItem
         * @static
         * @param {scmj.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
            return writer;
        };

        /**
         * Encodes the specified UserItem message, length delimited. Does not implicitly {@link scmj.UserItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.UserItem
         * @static
         * @param {scmj.IUserItem} message UserItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserItem message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.UserItem} UserItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.UserItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.score = reader.int64();
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
         * @memberof scmj.UserItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.UserItem} UserItem
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
         * @memberof scmj.UserItem
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
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.UserItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.UserItem} UserItem
         */
        UserItem.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.UserItem)
                return object;
            var message = new $root.scmj.UserItem();
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
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.UserItem
         * @static
         * @param {scmj.UserItem} message UserItem
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
                object.nickname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
            return object;
        };

        /**
         * Converts this UserItem to JSON.
         * @function toJSON
         * @memberof scmj.UserItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserItem;
    })();

    scmj.EnterNotiItem = (function() {

        /**
         * Properties of an EnterNotiItem.
         * @memberof scmj
         * @interface IEnterNotiItem
         * @property {number|null} [chairId] EnterNotiItem chairId
         * @property {number|null} [ready] EnterNotiItem ready
         * @property {scmj.IUserItem|null} [data] EnterNotiItem data
         */

        /**
         * Constructs a new EnterNotiItem.
         * @memberof scmj
         * @classdesc Represents an EnterNotiItem.
         * @implements IEnterNotiItem
         * @constructor
         * @param {scmj.IEnterNotiItem=} [properties] Properties to set
         */
        function EnterNotiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterNotiItem chairId.
         * @member {number} chairId
         * @memberof scmj.EnterNotiItem
         * @instance
         */
        EnterNotiItem.prototype.chairId = 0;

        /**
         * EnterNotiItem ready.
         * @member {number} ready
         * @memberof scmj.EnterNotiItem
         * @instance
         */
        EnterNotiItem.prototype.ready = 0;

        /**
         * EnterNotiItem data.
         * @member {scmj.IUserItem|null|undefined} data
         * @memberof scmj.EnterNotiItem
         * @instance
         */
        EnterNotiItem.prototype.data = null;

        /**
         * Creates a new EnterNotiItem instance using the specified properties.
         * @function create
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {scmj.IEnterNotiItem=} [properties] Properties to set
         * @returns {scmj.EnterNotiItem} EnterNotiItem instance
         */
        EnterNotiItem.create = function create(properties) {
            return new EnterNotiItem(properties);
        };

        /**
         * Encodes the specified EnterNotiItem message. Does not implicitly {@link scmj.EnterNotiItem.verify|verify} messages.
         * @function encode
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {scmj.IEnterNotiItem} message EnterNotiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterNotiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ready);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.scmj.UserItem.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterNotiItem message, length delimited. Does not implicitly {@link scmj.EnterNotiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {scmj.IEnterNotiItem} message EnterNotiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterNotiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterNotiItem message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.EnterNotiItem} EnterNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterNotiItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.EnterNotiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.ready = reader.int32();
                    break;
                case 3:
                    message.data = $root.scmj.UserItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterNotiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.EnterNotiItem} EnterNotiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterNotiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterNotiItem message.
         * @function verify
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterNotiItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.ready != null && message.hasOwnProperty("ready"))
                if (!$util.isInteger(message.ready))
                    return "ready: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.scmj.UserItem.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates an EnterNotiItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.EnterNotiItem} EnterNotiItem
         */
        EnterNotiItem.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.EnterNotiItem)
                return object;
            var message = new $root.scmj.EnterNotiItem();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.ready != null)
                message.ready = object.ready | 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".scmj.EnterNotiItem.data: object expected");
                message.data = $root.scmj.UserItem.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterNotiItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.EnterNotiItem
         * @static
         * @param {scmj.EnterNotiItem} message EnterNotiItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterNotiItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.ready = 0;
                object.data = null;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.scmj.UserItem.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this EnterNotiItem to JSON.
         * @function toJSON
         * @memberof scmj.EnterNotiItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterNotiItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterNotiItem;
    })();

    scmj.EnterAck = (function() {

        /**
         * Properties of an EnterAck.
         * @memberof scmj
         * @interface IEnterAck
         * @property {number|null} [ret] EnterAck ret
         * @property {Array.<scmj.IEnterNotiItem>|null} [items] EnterAck items
         */

        /**
         * Constructs a new EnterAck.
         * @memberof scmj
         * @classdesc Represents an EnterAck.
         * @implements IEnterAck
         * @constructor
         * @param {scmj.IEnterAck=} [properties] Properties to set
         */
        function EnterAck(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterAck ret.
         * @member {number} ret
         * @memberof scmj.EnterAck
         * @instance
         */
        EnterAck.prototype.ret = 0;

        /**
         * EnterAck items.
         * @member {Array.<scmj.IEnterNotiItem>} items
         * @memberof scmj.EnterAck
         * @instance
         */
        EnterAck.prototype.items = $util.emptyArray;

        /**
         * Creates a new EnterAck instance using the specified properties.
         * @function create
         * @memberof scmj.EnterAck
         * @static
         * @param {scmj.IEnterAck=} [properties] Properties to set
         * @returns {scmj.EnterAck} EnterAck instance
         */
        EnterAck.create = function create(properties) {
            return new EnterAck(properties);
        };

        /**
         * Encodes the specified EnterAck message. Does not implicitly {@link scmj.EnterAck.verify|verify} messages.
         * @function encode
         * @memberof scmj.EnterAck
         * @static
         * @param {scmj.IEnterAck} message EnterAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && Object.hasOwnProperty.call(message, "ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.scmj.EnterNotiItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterAck message, length delimited. Does not implicitly {@link scmj.EnterAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.EnterAck
         * @static
         * @param {scmj.IEnterAck} message EnterAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterAck message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.EnterAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.EnterAck} EnterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.EnterAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.scmj.EnterNotiItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.EnterAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.EnterAck} EnterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterAck message.
         * @function verify
         * @memberof scmj.EnterAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret"))
                if (!$util.isInteger(message.ret))
                    return "ret: integer expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.scmj.EnterNotiItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EnterAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.EnterAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.EnterAck} EnterAck
         */
        EnterAck.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.EnterAck)
                return object;
            var message = new $root.scmj.EnterAck();
            if (object.ret != null)
                message.ret = object.ret | 0;
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".scmj.EnterAck.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".scmj.EnterAck.items: object expected");
                    message.items[i] = $root.scmj.EnterNotiItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.EnterAck
         * @static
         * @param {scmj.EnterAck} message EnterAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults)
                object.ret = 0;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.scmj.EnterNotiItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this EnterAck to JSON.
         * @function toJSON
         * @memberof scmj.EnterAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterAck;
    })();

    scmj.EnterNoti = (function() {

        /**
         * Properties of an EnterNoti.
         * @memberof scmj
         * @interface IEnterNoti
         * @property {scmj.IEnterNotiItem|null} [item] EnterNoti item
         */

        /**
         * Constructs a new EnterNoti.
         * @memberof scmj
         * @classdesc Represents an EnterNoti.
         * @implements IEnterNoti
         * @constructor
         * @param {scmj.IEnterNoti=} [properties] Properties to set
         */
        function EnterNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterNoti item.
         * @member {scmj.IEnterNotiItem|null|undefined} item
         * @memberof scmj.EnterNoti
         * @instance
         */
        EnterNoti.prototype.item = null;

        /**
         * Creates a new EnterNoti instance using the specified properties.
         * @function create
         * @memberof scmj.EnterNoti
         * @static
         * @param {scmj.IEnterNoti=} [properties] Properties to set
         * @returns {scmj.EnterNoti} EnterNoti instance
         */
        EnterNoti.create = function create(properties) {
            return new EnterNoti(properties);
        };

        /**
         * Encodes the specified EnterNoti message. Does not implicitly {@link scmj.EnterNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.EnterNoti
         * @static
         * @param {scmj.IEnterNoti} message EnterNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item != null && Object.hasOwnProperty.call(message, "item"))
                $root.scmj.EnterNotiItem.encode(message.item, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterNoti message, length delimited. Does not implicitly {@link scmj.EnterNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.EnterNoti
         * @static
         * @param {scmj.IEnterNoti} message EnterNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.EnterNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.EnterNoti} EnterNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.EnterNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.item = $root.scmj.EnterNotiItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.EnterNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.EnterNoti} EnterNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterNoti message.
         * @function verify
         * @memberof scmj.EnterNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                var error = $root.scmj.EnterNotiItem.verify(message.item);
                if (error)
                    return "item." + error;
            }
            return null;
        };

        /**
         * Creates an EnterNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.EnterNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.EnterNoti} EnterNoti
         */
        EnterNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.EnterNoti)
                return object;
            var message = new $root.scmj.EnterNoti();
            if (object.item != null) {
                if (typeof object.item !== "object")
                    throw TypeError(".scmj.EnterNoti.item: object expected");
                message.item = $root.scmj.EnterNotiItem.fromObject(object.item);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.EnterNoti
         * @static
         * @param {scmj.EnterNoti} message EnterNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.item = null;
            if (message.item != null && message.hasOwnProperty("item"))
                object.item = $root.scmj.EnterNotiItem.toObject(message.item, options);
            return object;
        };

        /**
         * Converts this EnterNoti to JSON.
         * @function toJSON
         * @memberof scmj.EnterNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterNoti;
    })();

    scmj.BeginGameNoti = (function() {

        /**
         * Properties of a BeginGameNoti.
         * @memberof scmj
         * @interface IBeginGameNoti
         */

        /**
         * Constructs a new BeginGameNoti.
         * @memberof scmj
         * @classdesc Represents a BeginGameNoti.
         * @implements IBeginGameNoti
         * @constructor
         * @param {scmj.IBeginGameNoti=} [properties] Properties to set
         */
        function BeginGameNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BeginGameNoti instance using the specified properties.
         * @function create
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {scmj.IBeginGameNoti=} [properties] Properties to set
         * @returns {scmj.BeginGameNoti} BeginGameNoti instance
         */
        BeginGameNoti.create = function create(properties) {
            return new BeginGameNoti(properties);
        };

        /**
         * Encodes the specified BeginGameNoti message. Does not implicitly {@link scmj.BeginGameNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {scmj.IBeginGameNoti} message BeginGameNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeginGameNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BeginGameNoti message, length delimited. Does not implicitly {@link scmj.BeginGameNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {scmj.IBeginGameNoti} message BeginGameNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeginGameNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeginGameNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.BeginGameNoti} BeginGameNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeginGameNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.BeginGameNoti();
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
         * Decodes a BeginGameNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.BeginGameNoti} BeginGameNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeginGameNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeginGameNoti message.
         * @function verify
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeginGameNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BeginGameNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.BeginGameNoti} BeginGameNoti
         */
        BeginGameNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.BeginGameNoti)
                return object;
            return new $root.scmj.BeginGameNoti();
        };

        /**
         * Creates a plain object from a BeginGameNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.BeginGameNoti
         * @static
         * @param {scmj.BeginGameNoti} message BeginGameNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeginGameNoti.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BeginGameNoti to JSON.
         * @function toJSON
         * @memberof scmj.BeginGameNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeginGameNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeginGameNoti;
    })();

    scmj.TaxNoti = (function() {

        /**
         * Properties of a TaxNoti.
         * @memberof scmj
         * @interface ITaxNoti
         * @property {number|Long|null} [tax] TaxNoti tax
         */

        /**
         * Constructs a new TaxNoti.
         * @memberof scmj
         * @classdesc Represents a TaxNoti.
         * @implements ITaxNoti
         * @constructor
         * @param {scmj.ITaxNoti=} [properties] Properties to set
         */
        function TaxNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaxNoti tax.
         * @member {number|Long} tax
         * @memberof scmj.TaxNoti
         * @instance
         */
        TaxNoti.prototype.tax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TaxNoti instance using the specified properties.
         * @function create
         * @memberof scmj.TaxNoti
         * @static
         * @param {scmj.ITaxNoti=} [properties] Properties to set
         * @returns {scmj.TaxNoti} TaxNoti instance
         */
        TaxNoti.create = function create(properties) {
            return new TaxNoti(properties);
        };

        /**
         * Encodes the specified TaxNoti message. Does not implicitly {@link scmj.TaxNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.TaxNoti
         * @static
         * @param {scmj.ITaxNoti} message TaxNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaxNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tax != null && Object.hasOwnProperty.call(message, "tax"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.tax);
            return writer;
        };

        /**
         * Encodes the specified TaxNoti message, length delimited. Does not implicitly {@link scmj.TaxNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TaxNoti
         * @static
         * @param {scmj.ITaxNoti} message TaxNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaxNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaxNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TaxNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TaxNoti} TaxNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaxNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TaxNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tax = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaxNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TaxNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TaxNoti} TaxNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaxNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaxNoti message.
         * @function verify
         * @memberof scmj.TaxNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaxNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tax != null && message.hasOwnProperty("tax"))
                if (!$util.isInteger(message.tax) && !(message.tax && $util.isInteger(message.tax.low) && $util.isInteger(message.tax.high)))
                    return "tax: integer|Long expected";
            return null;
        };

        /**
         * Creates a TaxNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TaxNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TaxNoti} TaxNoti
         */
        TaxNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TaxNoti)
                return object;
            var message = new $root.scmj.TaxNoti();
            if (object.tax != null)
                if ($util.Long)
                    (message.tax = $util.Long.fromValue(object.tax)).unsigned = false;
                else if (typeof object.tax === "string")
                    message.tax = parseInt(object.tax, 10);
                else if (typeof object.tax === "number")
                    message.tax = object.tax;
                else if (typeof object.tax === "object")
                    message.tax = new $util.LongBits(object.tax.low >>> 0, object.tax.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TaxNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TaxNoti
         * @static
         * @param {scmj.TaxNoti} message TaxNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaxNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.tax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tax = options.longs === String ? "0" : 0;
            if (message.tax != null && message.hasOwnProperty("tax"))
                if (typeof message.tax === "number")
                    object.tax = options.longs === String ? String(message.tax) : message.tax;
                else
                    object.tax = options.longs === String ? $util.Long.prototype.toString.call(message.tax) : options.longs === Number ? new $util.LongBits(message.tax.low >>> 0, message.tax.high >>> 0).toNumber() : message.tax;
            return object;
        };

        /**
         * Converts this TaxNoti to JSON.
         * @function toJSON
         * @memberof scmj.TaxNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaxNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaxNoti;
    })();

    scmj.SetBankerNoti = (function() {

        /**
         * Properties of a SetBankerNoti.
         * @memberof scmj
         * @interface ISetBankerNoti
         * @property {number|null} [chairId] SetBankerNoti chairId
         * @property {Array.<number>|null} [dices] SetBankerNoti dices
         * @property {number|null} [setEast] SetBankerNoti setEast
         */

        /**
         * Constructs a new SetBankerNoti.
         * @memberof scmj
         * @classdesc Represents a SetBankerNoti.
         * @implements ISetBankerNoti
         * @constructor
         * @param {scmj.ISetBankerNoti=} [properties] Properties to set
         */
        function SetBankerNoti(properties) {
            this.dices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetBankerNoti chairId.
         * @member {number} chairId
         * @memberof scmj.SetBankerNoti
         * @instance
         */
        SetBankerNoti.prototype.chairId = 0;

        /**
         * SetBankerNoti dices.
         * @member {Array.<number>} dices
         * @memberof scmj.SetBankerNoti
         * @instance
         */
        SetBankerNoti.prototype.dices = $util.emptyArray;

        /**
         * SetBankerNoti setEast.
         * @member {number} setEast
         * @memberof scmj.SetBankerNoti
         * @instance
         */
        SetBankerNoti.prototype.setEast = 0;

        /**
         * Creates a new SetBankerNoti instance using the specified properties.
         * @function create
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {scmj.ISetBankerNoti=} [properties] Properties to set
         * @returns {scmj.SetBankerNoti} SetBankerNoti instance
         */
        SetBankerNoti.create = function create(properties) {
            return new SetBankerNoti(properties);
        };

        /**
         * Encodes the specified SetBankerNoti message. Does not implicitly {@link scmj.SetBankerNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {scmj.ISetBankerNoti} message SetBankerNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetBankerNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.dices != null && message.dices.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.dices.length; ++i)
                    writer.int32(message.dices[i]);
                writer.ldelim();
            }
            if (message.setEast != null && Object.hasOwnProperty.call(message, "setEast"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.setEast);
            return writer;
        };

        /**
         * Encodes the specified SetBankerNoti message, length delimited. Does not implicitly {@link scmj.SetBankerNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {scmj.ISetBankerNoti} message SetBankerNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetBankerNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetBankerNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.SetBankerNoti} SetBankerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetBankerNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.SetBankerNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    if (!(message.dices && message.dices.length))
                        message.dices = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dices.push(reader.int32());
                    } else
                        message.dices.push(reader.int32());
                    break;
                case 3:
                    message.setEast = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetBankerNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.SetBankerNoti} SetBankerNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetBankerNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetBankerNoti message.
         * @function verify
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetBankerNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.dices != null && message.hasOwnProperty("dices")) {
                if (!Array.isArray(message.dices))
                    return "dices: array expected";
                for (var i = 0; i < message.dices.length; ++i)
                    if (!$util.isInteger(message.dices[i]))
                        return "dices: integer[] expected";
            }
            if (message.setEast != null && message.hasOwnProperty("setEast"))
                if (!$util.isInteger(message.setEast))
                    return "setEast: integer expected";
            return null;
        };

        /**
         * Creates a SetBankerNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.SetBankerNoti} SetBankerNoti
         */
        SetBankerNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.SetBankerNoti)
                return object;
            var message = new $root.scmj.SetBankerNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.dices) {
                if (!Array.isArray(object.dices))
                    throw TypeError(".scmj.SetBankerNoti.dices: array expected");
                message.dices = [];
                for (var i = 0; i < object.dices.length; ++i)
                    message.dices[i] = object.dices[i] | 0;
            }
            if (object.setEast != null)
                message.setEast = object.setEast | 0;
            return message;
        };

        /**
         * Creates a plain object from a SetBankerNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.SetBankerNoti
         * @static
         * @param {scmj.SetBankerNoti} message SetBankerNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetBankerNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.dices = [];
            if (options.defaults) {
                object.chairId = 0;
                object.setEast = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.dices && message.dices.length) {
                object.dices = [];
                for (var j = 0; j < message.dices.length; ++j)
                    object.dices[j] = message.dices[j];
            }
            if (message.setEast != null && message.hasOwnProperty("setEast"))
                object.setEast = message.setEast;
            return object;
        };

        /**
         * Converts this SetBankerNoti to JSON.
         * @function toJSON
         * @memberof scmj.SetBankerNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetBankerNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetBankerNoti;
    })();

    scmj.UpdateCardsNoti = (function() {

        /**
         * Properties of an UpdateCardsNoti.
         * @memberof scmj
         * @interface IUpdateCardsNoti
         * @property {number|null} [chairId] UpdateCardsNoti chairId
         * @property {Array.<number>|null} [handcards] UpdateCardsNoti handcards
         * @property {Array.<number>|null} [leftcards] UpdateCardsNoti leftcards
         * @property {Array.<number>|null} [dispcards] UpdateCardsNoti dispcards
         * @property {Array.<number>|null} [hucards] UpdateCardsNoti hucards
         * @property {number|null} [card] UpdateCardsNoti card
         */

        /**
         * Constructs a new UpdateCardsNoti.
         * @memberof scmj
         * @classdesc Represents an UpdateCardsNoti.
         * @implements IUpdateCardsNoti
         * @constructor
         * @param {scmj.IUpdateCardsNoti=} [properties] Properties to set
         */
        function UpdateCardsNoti(properties) {
            this.handcards = [];
            this.leftcards = [];
            this.dispcards = [];
            this.hucards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateCardsNoti chairId.
         * @member {number} chairId
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.chairId = 0;

        /**
         * UpdateCardsNoti handcards.
         * @member {Array.<number>} handcards
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.handcards = $util.emptyArray;

        /**
         * UpdateCardsNoti leftcards.
         * @member {Array.<number>} leftcards
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.leftcards = $util.emptyArray;

        /**
         * UpdateCardsNoti dispcards.
         * @member {Array.<number>} dispcards
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.dispcards = $util.emptyArray;

        /**
         * UpdateCardsNoti hucards.
         * @member {Array.<number>} hucards
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.hucards = $util.emptyArray;

        /**
         * UpdateCardsNoti card.
         * @member {number} card
         * @memberof scmj.UpdateCardsNoti
         * @instance
         */
        UpdateCardsNoti.prototype.card = 0;

        /**
         * Creates a new UpdateCardsNoti instance using the specified properties.
         * @function create
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {scmj.IUpdateCardsNoti=} [properties] Properties to set
         * @returns {scmj.UpdateCardsNoti} UpdateCardsNoti instance
         */
        UpdateCardsNoti.create = function create(properties) {
            return new UpdateCardsNoti(properties);
        };

        /**
         * Encodes the specified UpdateCardsNoti message. Does not implicitly {@link scmj.UpdateCardsNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {scmj.IUpdateCardsNoti} message UpdateCardsNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateCardsNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.handcards != null && message.handcards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.handcards.length; ++i)
                    writer.int32(message.handcards[i]);
                writer.ldelim();
            }
            if (message.leftcards != null && message.leftcards.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.leftcards.length; ++i)
                    writer.int32(message.leftcards[i]);
                writer.ldelim();
            }
            if (message.dispcards != null && message.dispcards.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.dispcards.length; ++i)
                    writer.int32(message.dispcards[i]);
                writer.ldelim();
            }
            if (message.hucards != null && message.hucards.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.hucards.length; ++i)
                    writer.int32(message.hucards[i]);
                writer.ldelim();
            }
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.card);
            return writer;
        };

        /**
         * Encodes the specified UpdateCardsNoti message, length delimited. Does not implicitly {@link scmj.UpdateCardsNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {scmj.IUpdateCardsNoti} message UpdateCardsNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateCardsNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateCardsNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.UpdateCardsNoti} UpdateCardsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateCardsNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.UpdateCardsNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    if (!(message.handcards && message.handcards.length))
                        message.handcards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handcards.push(reader.int32());
                    } else
                        message.handcards.push(reader.int32());
                    break;
                case 3:
                    if (!(message.leftcards && message.leftcards.length))
                        message.leftcards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.leftcards.push(reader.int32());
                    } else
                        message.leftcards.push(reader.int32());
                    break;
                case 4:
                    if (!(message.dispcards && message.dispcards.length))
                        message.dispcards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dispcards.push(reader.int32());
                    } else
                        message.dispcards.push(reader.int32());
                    break;
                case 5:
                    if (!(message.hucards && message.hucards.length))
                        message.hucards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.hucards.push(reader.int32());
                    } else
                        message.hucards.push(reader.int32());
                    break;
                case 6:
                    message.card = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateCardsNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.UpdateCardsNoti} UpdateCardsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateCardsNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateCardsNoti message.
         * @function verify
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateCardsNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.handcards != null && message.hasOwnProperty("handcards")) {
                if (!Array.isArray(message.handcards))
                    return "handcards: array expected";
                for (var i = 0; i < message.handcards.length; ++i)
                    if (!$util.isInteger(message.handcards[i]))
                        return "handcards: integer[] expected";
            }
            if (message.leftcards != null && message.hasOwnProperty("leftcards")) {
                if (!Array.isArray(message.leftcards))
                    return "leftcards: array expected";
                for (var i = 0; i < message.leftcards.length; ++i)
                    if (!$util.isInteger(message.leftcards[i]))
                        return "leftcards: integer[] expected";
            }
            if (message.dispcards != null && message.hasOwnProperty("dispcards")) {
                if (!Array.isArray(message.dispcards))
                    return "dispcards: array expected";
                for (var i = 0; i < message.dispcards.length; ++i)
                    if (!$util.isInteger(message.dispcards[i]))
                        return "dispcards: integer[] expected";
            }
            if (message.hucards != null && message.hasOwnProperty("hucards")) {
                if (!Array.isArray(message.hucards))
                    return "hucards: array expected";
                for (var i = 0; i < message.hucards.length; ++i)
                    if (!$util.isInteger(message.hucards[i]))
                        return "hucards: integer[] expected";
            }
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            return null;
        };

        /**
         * Creates an UpdateCardsNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.UpdateCardsNoti} UpdateCardsNoti
         */
        UpdateCardsNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.UpdateCardsNoti)
                return object;
            var message = new $root.scmj.UpdateCardsNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.handcards) {
                if (!Array.isArray(object.handcards))
                    throw TypeError(".scmj.UpdateCardsNoti.handcards: array expected");
                message.handcards = [];
                for (var i = 0; i < object.handcards.length; ++i)
                    message.handcards[i] = object.handcards[i] | 0;
            }
            if (object.leftcards) {
                if (!Array.isArray(object.leftcards))
                    throw TypeError(".scmj.UpdateCardsNoti.leftcards: array expected");
                message.leftcards = [];
                for (var i = 0; i < object.leftcards.length; ++i)
                    message.leftcards[i] = object.leftcards[i] | 0;
            }
            if (object.dispcards) {
                if (!Array.isArray(object.dispcards))
                    throw TypeError(".scmj.UpdateCardsNoti.dispcards: array expected");
                message.dispcards = [];
                for (var i = 0; i < object.dispcards.length; ++i)
                    message.dispcards[i] = object.dispcards[i] | 0;
            }
            if (object.hucards) {
                if (!Array.isArray(object.hucards))
                    throw TypeError(".scmj.UpdateCardsNoti.hucards: array expected");
                message.hucards = [];
                for (var i = 0; i < object.hucards.length; ++i)
                    message.hucards[i] = object.hucards[i] | 0;
            }
            if (object.card != null)
                message.card = object.card | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdateCardsNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.UpdateCardsNoti
         * @static
         * @param {scmj.UpdateCardsNoti} message UpdateCardsNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateCardsNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.handcards = [];
                object.leftcards = [];
                object.dispcards = [];
                object.hucards = [];
            }
            if (options.defaults) {
                object.chairId = 0;
                object.card = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.handcards && message.handcards.length) {
                object.handcards = [];
                for (var j = 0; j < message.handcards.length; ++j)
                    object.handcards[j] = message.handcards[j];
            }
            if (message.leftcards && message.leftcards.length) {
                object.leftcards = [];
                for (var j = 0; j < message.leftcards.length; ++j)
                    object.leftcards[j] = message.leftcards[j];
            }
            if (message.dispcards && message.dispcards.length) {
                object.dispcards = [];
                for (var j = 0; j < message.dispcards.length; ++j)
                    object.dispcards[j] = message.dispcards[j];
            }
            if (message.hucards && message.hucards.length) {
                object.hucards = [];
                for (var j = 0; j < message.hucards.length; ++j)
                    object.hucards[j] = message.hucards[j];
            }
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            return object;
        };

        /**
         * Converts this UpdateCardsNoti to JSON.
         * @function toJSON
         * @memberof scmj.UpdateCardsNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateCardsNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateCardsNoti;
    })();

    scmj.ExchangeReq = (function() {

        /**
         * Properties of an ExchangeReq.
         * @memberof scmj
         * @interface IExchangeReq
         * @property {Array.<number>|null} [cards] ExchangeReq cards
         */

        /**
         * Constructs a new ExchangeReq.
         * @memberof scmj
         * @classdesc Represents an ExchangeReq.
         * @implements IExchangeReq
         * @constructor
         * @param {scmj.IExchangeReq=} [properties] Properties to set
         */
        function ExchangeReq(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeReq cards.
         * @member {Array.<number>} cards
         * @memberof scmj.ExchangeReq
         * @instance
         */
        ExchangeReq.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ExchangeReq instance using the specified properties.
         * @function create
         * @memberof scmj.ExchangeReq
         * @static
         * @param {scmj.IExchangeReq=} [properties] Properties to set
         * @returns {scmj.ExchangeReq} ExchangeReq instance
         */
        ExchangeReq.create = function create(properties) {
            return new ExchangeReq(properties);
        };

        /**
         * Encodes the specified ExchangeReq message. Does not implicitly {@link scmj.ExchangeReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.ExchangeReq
         * @static
         * @param {scmj.IExchangeReq} message ExchangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ExchangeReq message, length delimited. Does not implicitly {@link scmj.ExchangeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ExchangeReq
         * @static
         * @param {scmj.IExchangeReq} message ExchangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ExchangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ExchangeReq} ExchangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ExchangeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ExchangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ExchangeReq} ExchangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeReq message.
         * @function verify
         * @memberof scmj.ExchangeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an ExchangeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ExchangeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ExchangeReq} ExchangeReq
         */
        ExchangeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ExchangeReq)
                return object;
            var message = new $root.scmj.ExchangeReq();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".scmj.ExchangeReq.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ExchangeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ExchangeReq
         * @static
         * @param {scmj.ExchangeReq} message ExchangeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this ExchangeReq to JSON.
         * @function toJSON
         * @memberof scmj.ExchangeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeReq;
    })();

    scmj.ExchangeRsp = (function() {

        /**
         * Properties of an ExchangeRsp.
         * @memberof scmj
         * @interface IExchangeRsp
         * @property {Array.<number>|null} [cards] ExchangeRsp cards
         */

        /**
         * Constructs a new ExchangeRsp.
         * @memberof scmj
         * @classdesc Represents an ExchangeRsp.
         * @implements IExchangeRsp
         * @constructor
         * @param {scmj.IExchangeRsp=} [properties] Properties to set
         */
        function ExchangeRsp(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeRsp cards.
         * @member {Array.<number>} cards
         * @memberof scmj.ExchangeRsp
         * @instance
         */
        ExchangeRsp.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ExchangeRsp instance using the specified properties.
         * @function create
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {scmj.IExchangeRsp=} [properties] Properties to set
         * @returns {scmj.ExchangeRsp} ExchangeRsp instance
         */
        ExchangeRsp.create = function create(properties) {
            return new ExchangeRsp(properties);
        };

        /**
         * Encodes the specified ExchangeRsp message. Does not implicitly {@link scmj.ExchangeRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {scmj.IExchangeRsp} message ExchangeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ExchangeRsp message, length delimited. Does not implicitly {@link scmj.ExchangeRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {scmj.IExchangeRsp} message ExchangeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ExchangeRsp} ExchangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ExchangeRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ExchangeRsp} ExchangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeRsp message.
         * @function verify
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an ExchangeRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ExchangeRsp} ExchangeRsp
         */
        ExchangeRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ExchangeRsp)
                return object;
            var message = new $root.scmj.ExchangeRsp();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".scmj.ExchangeRsp.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ExchangeRsp
         * @static
         * @param {scmj.ExchangeRsp} message ExchangeRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this ExchangeRsp to JSON.
         * @function toJSON
         * @memberof scmj.ExchangeRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeRsp;
    })();

    scmj.ExchangeConfirmNoti = (function() {

        /**
         * Properties of an ExchangeConfirmNoti.
         * @memberof scmj
         * @interface IExchangeConfirmNoti
         * @property {number|null} [chairId] ExchangeConfirmNoti chairId
         * @property {number|null} [status] ExchangeConfirmNoti status
         */

        /**
         * Constructs a new ExchangeConfirmNoti.
         * @memberof scmj
         * @classdesc Represents an ExchangeConfirmNoti.
         * @implements IExchangeConfirmNoti
         * @constructor
         * @param {scmj.IExchangeConfirmNoti=} [properties] Properties to set
         */
        function ExchangeConfirmNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeConfirmNoti chairId.
         * @member {number} chairId
         * @memberof scmj.ExchangeConfirmNoti
         * @instance
         */
        ExchangeConfirmNoti.prototype.chairId = 0;

        /**
         * ExchangeConfirmNoti status.
         * @member {number} status
         * @memberof scmj.ExchangeConfirmNoti
         * @instance
         */
        ExchangeConfirmNoti.prototype.status = 0;

        /**
         * Creates a new ExchangeConfirmNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {scmj.IExchangeConfirmNoti=} [properties] Properties to set
         * @returns {scmj.ExchangeConfirmNoti} ExchangeConfirmNoti instance
         */
        ExchangeConfirmNoti.create = function create(properties) {
            return new ExchangeConfirmNoti(properties);
        };

        /**
         * Encodes the specified ExchangeConfirmNoti message. Does not implicitly {@link scmj.ExchangeConfirmNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {scmj.IExchangeConfirmNoti} message ExchangeConfirmNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeConfirmNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ExchangeConfirmNoti message, length delimited. Does not implicitly {@link scmj.ExchangeConfirmNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {scmj.IExchangeConfirmNoti} message ExchangeConfirmNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeConfirmNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeConfirmNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ExchangeConfirmNoti} ExchangeConfirmNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeConfirmNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ExchangeConfirmNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
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
         * Decodes an ExchangeConfirmNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ExchangeConfirmNoti} ExchangeConfirmNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeConfirmNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeConfirmNoti message.
         * @function verify
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeConfirmNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates an ExchangeConfirmNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ExchangeConfirmNoti} ExchangeConfirmNoti
         */
        ExchangeConfirmNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ExchangeConfirmNoti)
                return object;
            var message = new $root.scmj.ExchangeConfirmNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExchangeConfirmNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ExchangeConfirmNoti
         * @static
         * @param {scmj.ExchangeConfirmNoti} message ExchangeConfirmNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeConfirmNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.status = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ExchangeConfirmNoti to JSON.
         * @function toJSON
         * @memberof scmj.ExchangeConfirmNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeConfirmNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeConfirmNoti;
    })();

    scmj.ExchangeCompleteNoti = (function() {

        /**
         * Properties of an ExchangeCompleteNoti.
         * @memberof scmj
         * @interface IExchangeCompleteNoti
         * @property {number|null} [way] ExchangeCompleteNoti way
         */

        /**
         * Constructs a new ExchangeCompleteNoti.
         * @memberof scmj
         * @classdesc Represents an ExchangeCompleteNoti.
         * @implements IExchangeCompleteNoti
         * @constructor
         * @param {scmj.IExchangeCompleteNoti=} [properties] Properties to set
         */
        function ExchangeCompleteNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeCompleteNoti way.
         * @member {number} way
         * @memberof scmj.ExchangeCompleteNoti
         * @instance
         */
        ExchangeCompleteNoti.prototype.way = 0;

        /**
         * Creates a new ExchangeCompleteNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {scmj.IExchangeCompleteNoti=} [properties] Properties to set
         * @returns {scmj.ExchangeCompleteNoti} ExchangeCompleteNoti instance
         */
        ExchangeCompleteNoti.create = function create(properties) {
            return new ExchangeCompleteNoti(properties);
        };

        /**
         * Encodes the specified ExchangeCompleteNoti message. Does not implicitly {@link scmj.ExchangeCompleteNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {scmj.IExchangeCompleteNoti} message ExchangeCompleteNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeCompleteNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.way != null && Object.hasOwnProperty.call(message, "way"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.way);
            return writer;
        };

        /**
         * Encodes the specified ExchangeCompleteNoti message, length delimited. Does not implicitly {@link scmj.ExchangeCompleteNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {scmj.IExchangeCompleteNoti} message ExchangeCompleteNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeCompleteNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeCompleteNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ExchangeCompleteNoti} ExchangeCompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeCompleteNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ExchangeCompleteNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.way = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExchangeCompleteNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ExchangeCompleteNoti} ExchangeCompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeCompleteNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeCompleteNoti message.
         * @function verify
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeCompleteNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.way != null && message.hasOwnProperty("way"))
                if (!$util.isInteger(message.way))
                    return "way: integer expected";
            return null;
        };

        /**
         * Creates an ExchangeCompleteNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ExchangeCompleteNoti} ExchangeCompleteNoti
         */
        ExchangeCompleteNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ExchangeCompleteNoti)
                return object;
            var message = new $root.scmj.ExchangeCompleteNoti();
            if (object.way != null)
                message.way = object.way | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExchangeCompleteNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ExchangeCompleteNoti
         * @static
         * @param {scmj.ExchangeCompleteNoti} message ExchangeCompleteNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeCompleteNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.way = 0;
            if (message.way != null && message.hasOwnProperty("way"))
                object.way = message.way;
            return object;
        };

        /**
         * Converts this ExchangeCompleteNoti to JSON.
         * @function toJSON
         * @memberof scmj.ExchangeCompleteNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeCompleteNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExchangeCompleteNoti;
    })();

    scmj.LackReq = (function() {

        /**
         * Properties of a LackReq.
         * @memberof scmj
         * @interface ILackReq
         * @property {number|null} [lack] LackReq lack
         */

        /**
         * Constructs a new LackReq.
         * @memberof scmj
         * @classdesc Represents a LackReq.
         * @implements ILackReq
         * @constructor
         * @param {scmj.ILackReq=} [properties] Properties to set
         */
        function LackReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LackReq lack.
         * @member {number} lack
         * @memberof scmj.LackReq
         * @instance
         */
        LackReq.prototype.lack = 0;

        /**
         * Creates a new LackReq instance using the specified properties.
         * @function create
         * @memberof scmj.LackReq
         * @static
         * @param {scmj.ILackReq=} [properties] Properties to set
         * @returns {scmj.LackReq} LackReq instance
         */
        LackReq.create = function create(properties) {
            return new LackReq(properties);
        };

        /**
         * Encodes the specified LackReq message. Does not implicitly {@link scmj.LackReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.LackReq
         * @static
         * @param {scmj.ILackReq} message LackReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lack != null && Object.hasOwnProperty.call(message, "lack"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lack);
            return writer;
        };

        /**
         * Encodes the specified LackReq message, length delimited. Does not implicitly {@link scmj.LackReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.LackReq
         * @static
         * @param {scmj.ILackReq} message LackReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LackReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.LackReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.LackReq} LackReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.LackReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lack = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LackReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.LackReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.LackReq} LackReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LackReq message.
         * @function verify
         * @memberof scmj.LackReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LackReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lack != null && message.hasOwnProperty("lack"))
                if (!$util.isInteger(message.lack))
                    return "lack: integer expected";
            return null;
        };

        /**
         * Creates a LackReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.LackReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.LackReq} LackReq
         */
        LackReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.LackReq)
                return object;
            var message = new $root.scmj.LackReq();
            if (object.lack != null)
                message.lack = object.lack | 0;
            return message;
        };

        /**
         * Creates a plain object from a LackReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.LackReq
         * @static
         * @param {scmj.LackReq} message LackReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LackReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.lack = 0;
            if (message.lack != null && message.hasOwnProperty("lack"))
                object.lack = message.lack;
            return object;
        };

        /**
         * Converts this LackReq to JSON.
         * @function toJSON
         * @memberof scmj.LackReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LackReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LackReq;
    })();

    scmj.LackRsp = (function() {

        /**
         * Properties of a LackRsp.
         * @memberof scmj
         * @interface ILackRsp
         * @property {number|null} [lack] LackRsp lack
         */

        /**
         * Constructs a new LackRsp.
         * @memberof scmj
         * @classdesc Represents a LackRsp.
         * @implements ILackRsp
         * @constructor
         * @param {scmj.ILackRsp=} [properties] Properties to set
         */
        function LackRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LackRsp lack.
         * @member {number} lack
         * @memberof scmj.LackRsp
         * @instance
         */
        LackRsp.prototype.lack = 0;

        /**
         * Creates a new LackRsp instance using the specified properties.
         * @function create
         * @memberof scmj.LackRsp
         * @static
         * @param {scmj.ILackRsp=} [properties] Properties to set
         * @returns {scmj.LackRsp} LackRsp instance
         */
        LackRsp.create = function create(properties) {
            return new LackRsp(properties);
        };

        /**
         * Encodes the specified LackRsp message. Does not implicitly {@link scmj.LackRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.LackRsp
         * @static
         * @param {scmj.ILackRsp} message LackRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lack != null && Object.hasOwnProperty.call(message, "lack"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lack);
            return writer;
        };

        /**
         * Encodes the specified LackRsp message, length delimited. Does not implicitly {@link scmj.LackRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.LackRsp
         * @static
         * @param {scmj.ILackRsp} message LackRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LackRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.LackRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.LackRsp} LackRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.LackRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lack = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LackRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.LackRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.LackRsp} LackRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LackRsp message.
         * @function verify
         * @memberof scmj.LackRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LackRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lack != null && message.hasOwnProperty("lack"))
                if (!$util.isInteger(message.lack))
                    return "lack: integer expected";
            return null;
        };

        /**
         * Creates a LackRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.LackRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.LackRsp} LackRsp
         */
        LackRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.LackRsp)
                return object;
            var message = new $root.scmj.LackRsp();
            if (object.lack != null)
                message.lack = object.lack | 0;
            return message;
        };

        /**
         * Creates a plain object from a LackRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.LackRsp
         * @static
         * @param {scmj.LackRsp} message LackRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LackRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.lack = 0;
            if (message.lack != null && message.hasOwnProperty("lack"))
                object.lack = message.lack;
            return object;
        };

        /**
         * Converts this LackRsp to JSON.
         * @function toJSON
         * @memberof scmj.LackRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LackRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LackRsp;
    })();

    scmj.LackNoti = (function() {

        /**
         * Properties of a LackNoti.
         * @memberof scmj
         * @interface ILackNoti
         * @property {number|null} [chairId] LackNoti chairId
         * @property {number|null} [lack] LackNoti lack
         */

        /**
         * Constructs a new LackNoti.
         * @memberof scmj
         * @classdesc Represents a LackNoti.
         * @implements ILackNoti
         * @constructor
         * @param {scmj.ILackNoti=} [properties] Properties to set
         */
        function LackNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LackNoti chairId.
         * @member {number} chairId
         * @memberof scmj.LackNoti
         * @instance
         */
        LackNoti.prototype.chairId = 0;

        /**
         * LackNoti lack.
         * @member {number} lack
         * @memberof scmj.LackNoti
         * @instance
         */
        LackNoti.prototype.lack = 0;

        /**
         * Creates a new LackNoti instance using the specified properties.
         * @function create
         * @memberof scmj.LackNoti
         * @static
         * @param {scmj.ILackNoti=} [properties] Properties to set
         * @returns {scmj.LackNoti} LackNoti instance
         */
        LackNoti.create = function create(properties) {
            return new LackNoti(properties);
        };

        /**
         * Encodes the specified LackNoti message. Does not implicitly {@link scmj.LackNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.LackNoti
         * @static
         * @param {scmj.ILackNoti} message LackNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.lack != null && Object.hasOwnProperty.call(message, "lack"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lack);
            return writer;
        };

        /**
         * Encodes the specified LackNoti message, length delimited. Does not implicitly {@link scmj.LackNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.LackNoti
         * @static
         * @param {scmj.ILackNoti} message LackNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LackNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LackNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.LackNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.LackNoti} LackNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.LackNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.lack = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LackNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.LackNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.LackNoti} LackNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LackNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LackNoti message.
         * @function verify
         * @memberof scmj.LackNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LackNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.lack != null && message.hasOwnProperty("lack"))
                if (!$util.isInteger(message.lack))
                    return "lack: integer expected";
            return null;
        };

        /**
         * Creates a LackNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.LackNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.LackNoti} LackNoti
         */
        LackNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.LackNoti)
                return object;
            var message = new $root.scmj.LackNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.lack != null)
                message.lack = object.lack | 0;
            return message;
        };

        /**
         * Creates a plain object from a LackNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.LackNoti
         * @static
         * @param {scmj.LackNoti} message LackNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LackNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.lack = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.lack != null && message.hasOwnProperty("lack"))
                object.lack = message.lack;
            return object;
        };

        /**
         * Converts this LackNoti to JSON.
         * @function toJSON
         * @memberof scmj.LackNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LackNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LackNoti;
    })();

    scmj.OperateReq = (function() {

        /**
         * Properties of an OperateReq.
         * @memberof scmj
         * @interface IOperateReq
         * @property {Array.<number>|null} [opcodes] OperateReq opcodes
         * @property {number|null} [card] OperateReq card
         * @property {number|null} [serialId] OperateReq serialId
         * @property {Array.<scmj.ITingCards>|null} [tingCards] OperateReq tingCards
         */

        /**
         * Constructs a new OperateReq.
         * @memberof scmj
         * @classdesc Represents an OperateReq.
         * @implements IOperateReq
         * @constructor
         * @param {scmj.IOperateReq=} [properties] Properties to set
         */
        function OperateReq(properties) {
            this.opcodes = [];
            this.tingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateReq opcodes.
         * @member {Array.<number>} opcodes
         * @memberof scmj.OperateReq
         * @instance
         */
        OperateReq.prototype.opcodes = $util.emptyArray;

        /**
         * OperateReq card.
         * @member {number} card
         * @memberof scmj.OperateReq
         * @instance
         */
        OperateReq.prototype.card = 0;

        /**
         * OperateReq serialId.
         * @member {number} serialId
         * @memberof scmj.OperateReq
         * @instance
         */
        OperateReq.prototype.serialId = 0;

        /**
         * OperateReq tingCards.
         * @member {Array.<scmj.ITingCards>} tingCards
         * @memberof scmj.OperateReq
         * @instance
         */
        OperateReq.prototype.tingCards = $util.emptyArray;

        /**
         * Creates a new OperateReq instance using the specified properties.
         * @function create
         * @memberof scmj.OperateReq
         * @static
         * @param {scmj.IOperateReq=} [properties] Properties to set
         * @returns {scmj.OperateReq} OperateReq instance
         */
        OperateReq.create = function create(properties) {
            return new OperateReq(properties);
        };

        /**
         * Encodes the specified OperateReq message. Does not implicitly {@link scmj.OperateReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.OperateReq
         * @static
         * @param {scmj.IOperateReq} message OperateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opcodes != null && message.opcodes.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.opcodes.length; ++i)
                    writer.int32(message.opcodes[i]);
                writer.ldelim();
            }
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
            if (message.serialId != null && Object.hasOwnProperty.call(message, "serialId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serialId);
            if (message.tingCards != null && message.tingCards.length)
                for (var i = 0; i < message.tingCards.length; ++i)
                    $root.scmj.TingCards.encode(message.tingCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link scmj.OperateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.OperateReq
         * @static
         * @param {scmj.IOperateReq} message OperateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.OperateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.OperateReq} OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.OperateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.opcodes && message.opcodes.length))
                        message.opcodes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.opcodes.push(reader.int32());
                    } else
                        message.opcodes.push(reader.int32());
                    break;
                case 2:
                    message.card = reader.int32();
                    break;
                case 3:
                    message.serialId = reader.int32();
                    break;
                case 4:
                    if (!(message.tingCards && message.tingCards.length))
                        message.tingCards = [];
                    message.tingCards.push($root.scmj.TingCards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.OperateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.OperateReq} OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateReq message.
         * @function verify
         * @memberof scmj.OperateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opcodes != null && message.hasOwnProperty("opcodes")) {
                if (!Array.isArray(message.opcodes))
                    return "opcodes: array expected";
                for (var i = 0; i < message.opcodes.length; ++i)
                    if (!$util.isInteger(message.opcodes[i]))
                        return "opcodes: integer[] expected";
            }
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.serialId != null && message.hasOwnProperty("serialId"))
                if (!$util.isInteger(message.serialId))
                    return "serialId: integer expected";
            if (message.tingCards != null && message.hasOwnProperty("tingCards")) {
                if (!Array.isArray(message.tingCards))
                    return "tingCards: array expected";
                for (var i = 0; i < message.tingCards.length; ++i) {
                    var error = $root.scmj.TingCards.verify(message.tingCards[i]);
                    if (error)
                        return "tingCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.OperateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.OperateReq} OperateReq
         */
        OperateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.OperateReq)
                return object;
            var message = new $root.scmj.OperateReq();
            if (object.opcodes) {
                if (!Array.isArray(object.opcodes))
                    throw TypeError(".scmj.OperateReq.opcodes: array expected");
                message.opcodes = [];
                for (var i = 0; i < object.opcodes.length; ++i)
                    message.opcodes[i] = object.opcodes[i] | 0;
            }
            if (object.card != null)
                message.card = object.card | 0;
            if (object.serialId != null)
                message.serialId = object.serialId | 0;
            if (object.tingCards) {
                if (!Array.isArray(object.tingCards))
                    throw TypeError(".scmj.OperateReq.tingCards: array expected");
                message.tingCards = [];
                for (var i = 0; i < object.tingCards.length; ++i) {
                    if (typeof object.tingCards[i] !== "object")
                        throw TypeError(".scmj.OperateReq.tingCards: object expected");
                    message.tingCards[i] = $root.scmj.TingCards.fromObject(object.tingCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.OperateReq
         * @static
         * @param {scmj.OperateReq} message OperateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.opcodes = [];
                object.tingCards = [];
            }
            if (options.defaults) {
                object.card = 0;
                object.serialId = 0;
            }
            if (message.opcodes && message.opcodes.length) {
                object.opcodes = [];
                for (var j = 0; j < message.opcodes.length; ++j)
                    object.opcodes[j] = message.opcodes[j];
            }
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.serialId != null && message.hasOwnProperty("serialId"))
                object.serialId = message.serialId;
            if (message.tingCards && message.tingCards.length) {
                object.tingCards = [];
                for (var j = 0; j < message.tingCards.length; ++j)
                    object.tingCards[j] = $root.scmj.TingCards.toObject(message.tingCards[j], options);
            }
            return object;
        };

        /**
         * Converts this OperateReq to JSON.
         * @function toJSON
         * @memberof scmj.OperateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateReq;
    })();

    scmj.OperateRsp = (function() {

        /**
         * Properties of an OperateRsp.
         * @memberof scmj
         * @interface IOperateRsp
         * @property {number|null} [opcode] OperateRsp opcode
         * @property {number|null} [card] OperateRsp card
         * @property {Array.<number>|null} [opCards] OperateRsp opCards
         * @property {number|null} [serialId] OperateRsp serialId
         */

        /**
         * Constructs a new OperateRsp.
         * @memberof scmj
         * @classdesc Represents an OperateRsp.
         * @implements IOperateRsp
         * @constructor
         * @param {scmj.IOperateRsp=} [properties] Properties to set
         */
        function OperateRsp(properties) {
            this.opCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateRsp opcode.
         * @member {number} opcode
         * @memberof scmj.OperateRsp
         * @instance
         */
        OperateRsp.prototype.opcode = 0;

        /**
         * OperateRsp card.
         * @member {number} card
         * @memberof scmj.OperateRsp
         * @instance
         */
        OperateRsp.prototype.card = 0;

        /**
         * OperateRsp opCards.
         * @member {Array.<number>} opCards
         * @memberof scmj.OperateRsp
         * @instance
         */
        OperateRsp.prototype.opCards = $util.emptyArray;

        /**
         * OperateRsp serialId.
         * @member {number} serialId
         * @memberof scmj.OperateRsp
         * @instance
         */
        OperateRsp.prototype.serialId = 0;

        /**
         * Creates a new OperateRsp instance using the specified properties.
         * @function create
         * @memberof scmj.OperateRsp
         * @static
         * @param {scmj.IOperateRsp=} [properties] Properties to set
         * @returns {scmj.OperateRsp} OperateRsp instance
         */
        OperateRsp.create = function create(properties) {
            return new OperateRsp(properties);
        };

        /**
         * Encodes the specified OperateRsp message. Does not implicitly {@link scmj.OperateRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.OperateRsp
         * @static
         * @param {scmj.IOperateRsp} message OperateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opcode != null && Object.hasOwnProperty.call(message, "opcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.opcode);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
            if (message.opCards != null && message.opCards.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.opCards.length; ++i)
                    writer.int32(message.opCards[i]);
                writer.ldelim();
            }
            if (message.serialId != null && Object.hasOwnProperty.call(message, "serialId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serialId);
            return writer;
        };

        /**
         * Encodes the specified OperateRsp message, length delimited. Does not implicitly {@link scmj.OperateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.OperateRsp
         * @static
         * @param {scmj.IOperateRsp} message OperateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.OperateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.OperateRsp} OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.OperateRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.opcode = reader.int32();
                    break;
                case 2:
                    message.card = reader.int32();
                    break;
                case 3:
                    if (!(message.opCards && message.opCards.length))
                        message.opCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.opCards.push(reader.int32());
                    } else
                        message.opCards.push(reader.int32());
                    break;
                case 4:
                    message.serialId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.OperateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.OperateRsp} OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateRsp message.
         * @function verify
         * @memberof scmj.OperateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opcode != null && message.hasOwnProperty("opcode"))
                if (!$util.isInteger(message.opcode))
                    return "opcode: integer expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.opCards != null && message.hasOwnProperty("opCards")) {
                if (!Array.isArray(message.opCards))
                    return "opCards: array expected";
                for (var i = 0; i < message.opCards.length; ++i)
                    if (!$util.isInteger(message.opCards[i]))
                        return "opCards: integer[] expected";
            }
            if (message.serialId != null && message.hasOwnProperty("serialId"))
                if (!$util.isInteger(message.serialId))
                    return "serialId: integer expected";
            return null;
        };

        /**
         * Creates an OperateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.OperateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.OperateRsp} OperateRsp
         */
        OperateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.OperateRsp)
                return object;
            var message = new $root.scmj.OperateRsp();
            if (object.opcode != null)
                message.opcode = object.opcode | 0;
            if (object.card != null)
                message.card = object.card | 0;
            if (object.opCards) {
                if (!Array.isArray(object.opCards))
                    throw TypeError(".scmj.OperateRsp.opCards: array expected");
                message.opCards = [];
                for (var i = 0; i < object.opCards.length; ++i)
                    message.opCards[i] = object.opCards[i] | 0;
            }
            if (object.serialId != null)
                message.serialId = object.serialId | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.OperateRsp
         * @static
         * @param {scmj.OperateRsp} message OperateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.opCards = [];
            if (options.defaults) {
                object.opcode = 0;
                object.card = 0;
                object.serialId = 0;
            }
            if (message.opcode != null && message.hasOwnProperty("opcode"))
                object.opcode = message.opcode;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.opCards && message.opCards.length) {
                object.opCards = [];
                for (var j = 0; j < message.opCards.length; ++j)
                    object.opCards[j] = message.opCards[j];
            }
            if (message.serialId != null && message.hasOwnProperty("serialId"))
                object.serialId = message.serialId;
            return object;
        };

        /**
         * Converts this OperateRsp to JSON.
         * @function toJSON
         * @memberof scmj.OperateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateRsp;
    })();

    scmj.OperateNoti = (function() {

        /**
         * Properties of an OperateNoti.
         * @memberof scmj
         * @interface IOperateNoti
         * @property {number|null} [chairId] OperateNoti chairId
         * @property {number|null} [opcode] OperateNoti opcode
         * @property {number|null} [card] OperateNoti card
         */

        /**
         * Constructs a new OperateNoti.
         * @memberof scmj
         * @classdesc Represents an OperateNoti.
         * @implements IOperateNoti
         * @constructor
         * @param {scmj.IOperateNoti=} [properties] Properties to set
         */
        function OperateNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateNoti chairId.
         * @member {number} chairId
         * @memberof scmj.OperateNoti
         * @instance
         */
        OperateNoti.prototype.chairId = 0;

        /**
         * OperateNoti opcode.
         * @member {number} opcode
         * @memberof scmj.OperateNoti
         * @instance
         */
        OperateNoti.prototype.opcode = 0;

        /**
         * OperateNoti card.
         * @member {number} card
         * @memberof scmj.OperateNoti
         * @instance
         */
        OperateNoti.prototype.card = 0;

        /**
         * Creates a new OperateNoti instance using the specified properties.
         * @function create
         * @memberof scmj.OperateNoti
         * @static
         * @param {scmj.IOperateNoti=} [properties] Properties to set
         * @returns {scmj.OperateNoti} OperateNoti instance
         */
        OperateNoti.create = function create(properties) {
            return new OperateNoti(properties);
        };

        /**
         * Encodes the specified OperateNoti message. Does not implicitly {@link scmj.OperateNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.OperateNoti
         * @static
         * @param {scmj.IOperateNoti} message OperateNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.opcode != null && Object.hasOwnProperty.call(message, "opcode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opcode);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.card);
            return writer;
        };

        /**
         * Encodes the specified OperateNoti message, length delimited. Does not implicitly {@link scmj.OperateNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.OperateNoti
         * @static
         * @param {scmj.IOperateNoti} message OperateNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.OperateNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.OperateNoti} OperateNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.OperateNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.opcode = reader.int32();
                    break;
                case 3:
                    message.card = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.OperateNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.OperateNoti} OperateNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateNoti message.
         * @function verify
         * @memberof scmj.OperateNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.opcode != null && message.hasOwnProperty("opcode"))
                if (!$util.isInteger(message.opcode))
                    return "opcode: integer expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            return null;
        };

        /**
         * Creates an OperateNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.OperateNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.OperateNoti} OperateNoti
         */
        OperateNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.OperateNoti)
                return object;
            var message = new $root.scmj.OperateNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.opcode != null)
                message.opcode = object.opcode | 0;
            if (object.card != null)
                message.card = object.card | 0;
            return message;
        };

        /**
         * Creates a plain object from an OperateNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.OperateNoti
         * @static
         * @param {scmj.OperateNoti} message OperateNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.opcode = 0;
                object.card = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.opcode != null && message.hasOwnProperty("opcode"))
                object.opcode = message.opcode;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            return object;
        };

        /**
         * Converts this OperateNoti to JSON.
         * @function toJSON
         * @memberof scmj.OperateNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperateNoti;
    })();

    scmj.AutoReq = (function() {

        /**
         * Properties of an AutoReq.
         * @memberof scmj
         * @interface IAutoReq
         * @property {number|null} [auto] AutoReq auto
         */

        /**
         * Constructs a new AutoReq.
         * @memberof scmj
         * @classdesc Represents an AutoReq.
         * @implements IAutoReq
         * @constructor
         * @param {scmj.IAutoReq=} [properties] Properties to set
         */
        function AutoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoReq auto.
         * @member {number} auto
         * @memberof scmj.AutoReq
         * @instance
         */
        AutoReq.prototype.auto = 0;

        /**
         * Creates a new AutoReq instance using the specified properties.
         * @function create
         * @memberof scmj.AutoReq
         * @static
         * @param {scmj.IAutoReq=} [properties] Properties to set
         * @returns {scmj.AutoReq} AutoReq instance
         */
        AutoReq.create = function create(properties) {
            return new AutoReq(properties);
        };

        /**
         * Encodes the specified AutoReq message. Does not implicitly {@link scmj.AutoReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.AutoReq
         * @static
         * @param {scmj.IAutoReq} message AutoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auto != null && Object.hasOwnProperty.call(message, "auto"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.auto);
            return writer;
        };

        /**
         * Encodes the specified AutoReq message, length delimited. Does not implicitly {@link scmj.AutoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.AutoReq
         * @static
         * @param {scmj.IAutoReq} message AutoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AutoReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.AutoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.AutoReq} AutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.AutoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.auto = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AutoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.AutoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.AutoReq} AutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AutoReq message.
         * @function verify
         * @memberof scmj.AutoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AutoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auto != null && message.hasOwnProperty("auto"))
                if (!$util.isInteger(message.auto))
                    return "auto: integer expected";
            return null;
        };

        /**
         * Creates an AutoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.AutoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.AutoReq} AutoReq
         */
        AutoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.AutoReq)
                return object;
            var message = new $root.scmj.AutoReq();
            if (object.auto != null)
                message.auto = object.auto | 0;
            return message;
        };

        /**
         * Creates a plain object from an AutoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.AutoReq
         * @static
         * @param {scmj.AutoReq} message AutoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AutoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.auto = 0;
            if (message.auto != null && message.hasOwnProperty("auto"))
                object.auto = message.auto;
            return object;
        };

        /**
         * Converts this AutoReq to JSON.
         * @function toJSON
         * @memberof scmj.AutoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AutoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AutoReq;
    })();

    scmj.AutoNoti = (function() {

        /**
         * Properties of an AutoNoti.
         * @memberof scmj
         * @interface IAutoNoti
         * @property {number|null} [chairId] AutoNoti chairId
         * @property {number|null} [auto] AutoNoti auto
         */

        /**
         * Constructs a new AutoNoti.
         * @memberof scmj
         * @classdesc Represents an AutoNoti.
         * @implements IAutoNoti
         * @constructor
         * @param {scmj.IAutoNoti=} [properties] Properties to set
         */
        function AutoNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoNoti chairId.
         * @member {number} chairId
         * @memberof scmj.AutoNoti
         * @instance
         */
        AutoNoti.prototype.chairId = 0;

        /**
         * AutoNoti auto.
         * @member {number} auto
         * @memberof scmj.AutoNoti
         * @instance
         */
        AutoNoti.prototype.auto = 0;

        /**
         * Creates a new AutoNoti instance using the specified properties.
         * @function create
         * @memberof scmj.AutoNoti
         * @static
         * @param {scmj.IAutoNoti=} [properties] Properties to set
         * @returns {scmj.AutoNoti} AutoNoti instance
         */
        AutoNoti.create = function create(properties) {
            return new AutoNoti(properties);
        };

        /**
         * Encodes the specified AutoNoti message. Does not implicitly {@link scmj.AutoNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.AutoNoti
         * @static
         * @param {scmj.IAutoNoti} message AutoNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.auto != null && Object.hasOwnProperty.call(message, "auto"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.auto);
            return writer;
        };

        /**
         * Encodes the specified AutoNoti message, length delimited. Does not implicitly {@link scmj.AutoNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.AutoNoti
         * @static
         * @param {scmj.IAutoNoti} message AutoNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AutoNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.AutoNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.AutoNoti} AutoNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.AutoNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.auto = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AutoNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.AutoNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.AutoNoti} AutoNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AutoNoti message.
         * @function verify
         * @memberof scmj.AutoNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AutoNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.auto != null && message.hasOwnProperty("auto"))
                if (!$util.isInteger(message.auto))
                    return "auto: integer expected";
            return null;
        };

        /**
         * Creates an AutoNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.AutoNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.AutoNoti} AutoNoti
         */
        AutoNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.AutoNoti)
                return object;
            var message = new $root.scmj.AutoNoti();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.auto != null)
                message.auto = object.auto | 0;
            return message;
        };

        /**
         * Creates a plain object from an AutoNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.AutoNoti
         * @static
         * @param {scmj.AutoNoti} message AutoNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AutoNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.auto = 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.auto != null && message.hasOwnProperty("auto"))
                object.auto = message.auto;
            return object;
        };

        /**
         * Converts this AutoNoti to JSON.
         * @function toJSON
         * @memberof scmj.AutoNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AutoNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AutoNoti;
    })();

    scmj.ScoreChangeItem = (function() {

        /**
         * Properties of a ScoreChangeItem.
         * @memberof scmj
         * @interface IScoreChangeItem
         * @property {number|null} [chairId] ScoreChangeItem chairId
         * @property {number|Long|null} [presentScore] ScoreChangeItem presentScore
         * @property {number|Long|null} [totalScore] ScoreChangeItem totalScore
         */

        /**
         * Constructs a new ScoreChangeItem.
         * @memberof scmj
         * @classdesc Represents a ScoreChangeItem.
         * @implements IScoreChangeItem
         * @constructor
         * @param {scmj.IScoreChangeItem=} [properties] Properties to set
         */
        function ScoreChangeItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScoreChangeItem chairId.
         * @member {number} chairId
         * @memberof scmj.ScoreChangeItem
         * @instance
         */
        ScoreChangeItem.prototype.chairId = 0;

        /**
         * ScoreChangeItem presentScore.
         * @member {number|Long} presentScore
         * @memberof scmj.ScoreChangeItem
         * @instance
         */
        ScoreChangeItem.prototype.presentScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ScoreChangeItem totalScore.
         * @member {number|Long} totalScore
         * @memberof scmj.ScoreChangeItem
         * @instance
         */
        ScoreChangeItem.prototype.totalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ScoreChangeItem instance using the specified properties.
         * @function create
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {scmj.IScoreChangeItem=} [properties] Properties to set
         * @returns {scmj.ScoreChangeItem} ScoreChangeItem instance
         */
        ScoreChangeItem.create = function create(properties) {
            return new ScoreChangeItem(properties);
        };

        /**
         * Encodes the specified ScoreChangeItem message. Does not implicitly {@link scmj.ScoreChangeItem.verify|verify} messages.
         * @function encode
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {scmj.IScoreChangeItem} message ScoreChangeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreChangeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.presentScore != null && Object.hasOwnProperty.call(message, "presentScore"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.presentScore);
            if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalScore);
            return writer;
        };

        /**
         * Encodes the specified ScoreChangeItem message, length delimited. Does not implicitly {@link scmj.ScoreChangeItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {scmj.IScoreChangeItem} message ScoreChangeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreChangeItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreChangeItem message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ScoreChangeItem} ScoreChangeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreChangeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ScoreChangeItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.presentScore = reader.int64();
                    break;
                case 3:
                    message.totalScore = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScoreChangeItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ScoreChangeItem} ScoreChangeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreChangeItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScoreChangeItem message.
         * @function verify
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScoreChangeItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.presentScore != null && message.hasOwnProperty("presentScore"))
                if (!$util.isInteger(message.presentScore) && !(message.presentScore && $util.isInteger(message.presentScore.low) && $util.isInteger(message.presentScore.high)))
                    return "presentScore: integer|Long expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (!$util.isInteger(message.totalScore) && !(message.totalScore && $util.isInteger(message.totalScore.low) && $util.isInteger(message.totalScore.high)))
                    return "totalScore: integer|Long expected";
            return null;
        };

        /**
         * Creates a ScoreChangeItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ScoreChangeItem} ScoreChangeItem
         */
        ScoreChangeItem.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ScoreChangeItem)
                return object;
            var message = new $root.scmj.ScoreChangeItem();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.presentScore != null)
                if ($util.Long)
                    (message.presentScore = $util.Long.fromValue(object.presentScore)).unsigned = false;
                else if (typeof object.presentScore === "string")
                    message.presentScore = parseInt(object.presentScore, 10);
                else if (typeof object.presentScore === "number")
                    message.presentScore = object.presentScore;
                else if (typeof object.presentScore === "object")
                    message.presentScore = new $util.LongBits(object.presentScore.low >>> 0, object.presentScore.high >>> 0).toNumber();
            if (object.totalScore != null)
                if ($util.Long)
                    (message.totalScore = $util.Long.fromValue(object.totalScore)).unsigned = false;
                else if (typeof object.totalScore === "string")
                    message.totalScore = parseInt(object.totalScore, 10);
                else if (typeof object.totalScore === "number")
                    message.totalScore = object.totalScore;
                else if (typeof object.totalScore === "object")
                    message.totalScore = new $util.LongBits(object.totalScore.low >>> 0, object.totalScore.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ScoreChangeItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ScoreChangeItem
         * @static
         * @param {scmj.ScoreChangeItem} message ScoreChangeItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScoreChangeItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.presentScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.presentScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalScore = options.longs === String ? "0" : 0;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.presentScore != null && message.hasOwnProperty("presentScore"))
                if (typeof message.presentScore === "number")
                    object.presentScore = options.longs === String ? String(message.presentScore) : message.presentScore;
                else
                    object.presentScore = options.longs === String ? $util.Long.prototype.toString.call(message.presentScore) : options.longs === Number ? new $util.LongBits(message.presentScore.low >>> 0, message.presentScore.high >>> 0).toNumber() : message.presentScore;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (typeof message.totalScore === "number")
                    object.totalScore = options.longs === String ? String(message.totalScore) : message.totalScore;
                else
                    object.totalScore = options.longs === String ? $util.Long.prototype.toString.call(message.totalScore) : options.longs === Number ? new $util.LongBits(message.totalScore.low >>> 0, message.totalScore.high >>> 0).toNumber() : message.totalScore;
            return object;
        };

        /**
         * Converts this ScoreChangeItem to JSON.
         * @function toJSON
         * @memberof scmj.ScoreChangeItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScoreChangeItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ScoreChangeItem;
    })();

    scmj.ScoreChangeNoti = (function() {

        /**
         * Properties of a ScoreChangeNoti.
         * @memberof scmj
         * @interface IScoreChangeNoti
         * @property {Array.<scmj.IScoreChangeItem>|null} [items] ScoreChangeNoti items
         */

        /**
         * Constructs a new ScoreChangeNoti.
         * @memberof scmj
         * @classdesc Represents a ScoreChangeNoti.
         * @implements IScoreChangeNoti
         * @constructor
         * @param {scmj.IScoreChangeNoti=} [properties] Properties to set
         */
        function ScoreChangeNoti(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScoreChangeNoti items.
         * @member {Array.<scmj.IScoreChangeItem>} items
         * @memberof scmj.ScoreChangeNoti
         * @instance
         */
        ScoreChangeNoti.prototype.items = $util.emptyArray;

        /**
         * Creates a new ScoreChangeNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {scmj.IScoreChangeNoti=} [properties] Properties to set
         * @returns {scmj.ScoreChangeNoti} ScoreChangeNoti instance
         */
        ScoreChangeNoti.create = function create(properties) {
            return new ScoreChangeNoti(properties);
        };

        /**
         * Encodes the specified ScoreChangeNoti message. Does not implicitly {@link scmj.ScoreChangeNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {scmj.IScoreChangeNoti} message ScoreChangeNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreChangeNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.scmj.ScoreChangeItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ScoreChangeNoti message, length delimited. Does not implicitly {@link scmj.ScoreChangeNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {scmj.IScoreChangeNoti} message ScoreChangeNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreChangeNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreChangeNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ScoreChangeNoti} ScoreChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreChangeNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ScoreChangeNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.scmj.ScoreChangeItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScoreChangeNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ScoreChangeNoti} ScoreChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreChangeNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScoreChangeNoti message.
         * @function verify
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScoreChangeNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.scmj.ScoreChangeItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ScoreChangeNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ScoreChangeNoti} ScoreChangeNoti
         */
        ScoreChangeNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ScoreChangeNoti)
                return object;
            var message = new $root.scmj.ScoreChangeNoti();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".scmj.ScoreChangeNoti.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".scmj.ScoreChangeNoti.items: object expected");
                    message.items[i] = $root.scmj.ScoreChangeItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ScoreChangeNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ScoreChangeNoti
         * @static
         * @param {scmj.ScoreChangeNoti} message ScoreChangeNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScoreChangeNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.scmj.ScoreChangeItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this ScoreChangeNoti to JSON.
         * @function toJSON
         * @memberof scmj.ScoreChangeNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScoreChangeNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ScoreChangeNoti;
    })();

    scmj.BillReq = (function() {

        /**
         * Properties of a BillReq.
         * @memberof scmj
         * @interface IBillReq
         */

        /**
         * Constructs a new BillReq.
         * @memberof scmj
         * @classdesc Represents a BillReq.
         * @implements IBillReq
         * @constructor
         * @param {scmj.IBillReq=} [properties] Properties to set
         */
        function BillReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BillReq instance using the specified properties.
         * @function create
         * @memberof scmj.BillReq
         * @static
         * @param {scmj.IBillReq=} [properties] Properties to set
         * @returns {scmj.BillReq} BillReq instance
         */
        BillReq.create = function create(properties) {
            return new BillReq(properties);
        };

        /**
         * Encodes the specified BillReq message. Does not implicitly {@link scmj.BillReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.BillReq
         * @static
         * @param {scmj.IBillReq} message BillReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BillReq message, length delimited. Does not implicitly {@link scmj.BillReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.BillReq
         * @static
         * @param {scmj.IBillReq} message BillReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BillReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.BillReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.BillReq} BillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.BillReq();
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
         * Decodes a BillReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.BillReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.BillReq} BillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BillReq message.
         * @function verify
         * @memberof scmj.BillReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BillReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BillReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.BillReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.BillReq} BillReq
         */
        BillReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.BillReq)
                return object;
            return new $root.scmj.BillReq();
        };

        /**
         * Creates a plain object from a BillReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.BillReq
         * @static
         * @param {scmj.BillReq} message BillReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BillReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BillReq to JSON.
         * @function toJSON
         * @memberof scmj.BillReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BillReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BillReq;
    })();

    scmj.BillItem = (function() {

        /**
         * Properties of a BillItem.
         * @memberof scmj
         * @interface IBillItem
         * @property {number|null} [op] BillItem op
         * @property {number|null} [fan] BillItem fan
         * @property {number|null} [ratio] BillItem ratio
         * @property {number|Long|null} [score] BillItem score
         * @property {string|null} [position] BillItem position
         * @property {number|null} [type] BillItem type
         * @property {Array.<number>|null} [cards] BillItem cards
         */

        /**
         * Constructs a new BillItem.
         * @memberof scmj
         * @classdesc Represents a BillItem.
         * @implements IBillItem
         * @constructor
         * @param {scmj.IBillItem=} [properties] Properties to set
         */
        function BillItem(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BillItem op.
         * @member {number} op
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.op = 0;

        /**
         * BillItem fan.
         * @member {number} fan
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.fan = 0;

        /**
         * BillItem ratio.
         * @member {number} ratio
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.ratio = 0;

        /**
         * BillItem score.
         * @member {number|Long} score
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BillItem position.
         * @member {string} position
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.position = "";

        /**
         * BillItem type.
         * @member {number} type
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.type = 0;

        /**
         * BillItem cards.
         * @member {Array.<number>} cards
         * @memberof scmj.BillItem
         * @instance
         */
        BillItem.prototype.cards = $util.emptyArray;

        /**
         * Creates a new BillItem instance using the specified properties.
         * @function create
         * @memberof scmj.BillItem
         * @static
         * @param {scmj.IBillItem=} [properties] Properties to set
         * @returns {scmj.BillItem} BillItem instance
         */
        BillItem.create = function create(properties) {
            return new BillItem(properties);
        };

        /**
         * Encodes the specified BillItem message. Does not implicitly {@link scmj.BillItem.verify|verify} messages.
         * @function encode
         * @memberof scmj.BillItem
         * @static
         * @param {scmj.IBillItem} message BillItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
            if (message.fan != null && Object.hasOwnProperty.call(message, "fan"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fan);
            if (message.ratio != null && Object.hasOwnProperty.call(message, "ratio"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ratio);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.score);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.position);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BillItem message, length delimited. Does not implicitly {@link scmj.BillItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.BillItem
         * @static
         * @param {scmj.IBillItem} message BillItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BillItem message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.BillItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.BillItem} BillItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.BillItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.op = reader.int32();
                    break;
                case 2:
                    message.fan = reader.int32();
                    break;
                case 3:
                    message.ratio = reader.int32();
                    break;
                case 4:
                    message.score = reader.int64();
                    break;
                case 5:
                    message.position = reader.string();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BillItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.BillItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.BillItem} BillItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BillItem message.
         * @function verify
         * @memberof scmj.BillItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BillItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.op != null && message.hasOwnProperty("op"))
                if (!$util.isInteger(message.op))
                    return "op: integer expected";
            if (message.fan != null && message.hasOwnProperty("fan"))
                if (!$util.isInteger(message.fan))
                    return "fan: integer expected";
            if (message.ratio != null && message.hasOwnProperty("ratio"))
                if (!$util.isInteger(message.ratio))
                    return "ratio: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a BillItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.BillItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.BillItem} BillItem
         */
        BillItem.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.BillItem)
                return object;
            var message = new $root.scmj.BillItem();
            if (object.op != null)
                message.op = object.op | 0;
            if (object.fan != null)
                message.fan = object.fan | 0;
            if (object.ratio != null)
                message.ratio = object.ratio | 0;
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
            if (object.position != null)
                message.position = String(object.position);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".scmj.BillItem.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a BillItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.BillItem
         * @static
         * @param {scmj.BillItem} message BillItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BillItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults) {
                object.op = 0;
                object.fan = 0;
                object.ratio = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
                object.position = "";
                object.type = 0;
            }
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = message.op;
            if (message.fan != null && message.hasOwnProperty("fan"))
                object.fan = message.fan;
            if (message.ratio != null && message.hasOwnProperty("ratio"))
                object.ratio = message.ratio;
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this BillItem to JSON.
         * @function toJSON
         * @memberof scmj.BillItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BillItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BillItem;
    })();

    scmj.BillRsp = (function() {

        /**
         * Properties of a BillRsp.
         * @memberof scmj
         * @interface IBillRsp
         * @property {number|Long|null} [score] BillRsp score
         * @property {Array.<scmj.IBillItem>|null} [items] BillRsp items
         */

        /**
         * Constructs a new BillRsp.
         * @memberof scmj
         * @classdesc Represents a BillRsp.
         * @implements IBillRsp
         * @constructor
         * @param {scmj.IBillRsp=} [properties] Properties to set
         */
        function BillRsp(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BillRsp score.
         * @member {number|Long} score
         * @memberof scmj.BillRsp
         * @instance
         */
        BillRsp.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BillRsp items.
         * @member {Array.<scmj.IBillItem>} items
         * @memberof scmj.BillRsp
         * @instance
         */
        BillRsp.prototype.items = $util.emptyArray;

        /**
         * Creates a new BillRsp instance using the specified properties.
         * @function create
         * @memberof scmj.BillRsp
         * @static
         * @param {scmj.IBillRsp=} [properties] Properties to set
         * @returns {scmj.BillRsp} BillRsp instance
         */
        BillRsp.create = function create(properties) {
            return new BillRsp(properties);
        };

        /**
         * Encodes the specified BillRsp message. Does not implicitly {@link scmj.BillRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.BillRsp
         * @static
         * @param {scmj.IBillRsp} message BillRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.score);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.scmj.BillItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BillRsp message, length delimited. Does not implicitly {@link scmj.BillRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.BillRsp
         * @static
         * @param {scmj.IBillRsp} message BillRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BillRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BillRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.BillRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.BillRsp} BillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.BillRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.score = reader.int64();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.scmj.BillItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BillRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.BillRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.BillRsp} BillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BillRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BillRsp message.
         * @function verify
         * @memberof scmj.BillRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BillRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.scmj.BillItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BillRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.BillRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.BillRsp} BillRsp
         */
        BillRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.BillRsp)
                return object;
            var message = new $root.scmj.BillRsp();
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".scmj.BillRsp.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".scmj.BillRsp.items: object expected");
                    message.items[i] = $root.scmj.BillItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BillRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.BillRsp
         * @static
         * @param {scmj.BillRsp} message BillRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BillRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.scmj.BillItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this BillRsp to JSON.
         * @function toJSON
         * @memberof scmj.BillRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BillRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BillRsp;
    })();

    scmj.LevelExp = (function() {

        /**
         * Properties of a LevelExp.
         * @memberof scmj
         * @interface ILevelExp
         * @property {number|null} [prevLevel] LevelExp prevLevel
         * @property {number|null} [curLevel] LevelExp curLevel
         * @property {number|null} [incExp] LevelExp incExp
         * @property {number|null} [prevLevelExp] LevelExp prevLevelExp
         * @property {number|null} [prevLeftExp] LevelExp prevLeftExp
         * @property {number|null} [levelExp] LevelExp levelExp
         * @property {number|null} [leftExp] LevelExp leftExp
         * @property {number|null} [money] LevelExp money
         */

        /**
         * Constructs a new LevelExp.
         * @memberof scmj
         * @classdesc Represents a LevelExp.
         * @implements ILevelExp
         * @constructor
         * @param {scmj.ILevelExp=} [properties] Properties to set
         */
        function LevelExp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LevelExp prevLevel.
         * @member {number} prevLevel
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.prevLevel = 0;

        /**
         * LevelExp curLevel.
         * @member {number} curLevel
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.curLevel = 0;

        /**
         * LevelExp incExp.
         * @member {number} incExp
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.incExp = 0;

        /**
         * LevelExp prevLevelExp.
         * @member {number} prevLevelExp
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.prevLevelExp = 0;

        /**
         * LevelExp prevLeftExp.
         * @member {number} prevLeftExp
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.prevLeftExp = 0;

        /**
         * LevelExp levelExp.
         * @member {number} levelExp
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.levelExp = 0;

        /**
         * LevelExp leftExp.
         * @member {number} leftExp
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.leftExp = 0;

        /**
         * LevelExp money.
         * @member {number} money
         * @memberof scmj.LevelExp
         * @instance
         */
        LevelExp.prototype.money = 0;

        /**
         * Creates a new LevelExp instance using the specified properties.
         * @function create
         * @memberof scmj.LevelExp
         * @static
         * @param {scmj.ILevelExp=} [properties] Properties to set
         * @returns {scmj.LevelExp} LevelExp instance
         */
        LevelExp.create = function create(properties) {
            return new LevelExp(properties);
        };

        /**
         * Encodes the specified LevelExp message. Does not implicitly {@link scmj.LevelExp.verify|verify} messages.
         * @function encode
         * @memberof scmj.LevelExp
         * @static
         * @param {scmj.ILevelExp} message LevelExp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelExp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prevLevel != null && Object.hasOwnProperty.call(message, "prevLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.prevLevel);
            if (message.curLevel != null && Object.hasOwnProperty.call(message, "curLevel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curLevel);
            if (message.incExp != null && Object.hasOwnProperty.call(message, "incExp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.incExp);
            if (message.prevLevelExp != null && Object.hasOwnProperty.call(message, "prevLevelExp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.prevLevelExp);
            if (message.prevLeftExp != null && Object.hasOwnProperty.call(message, "prevLeftExp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.prevLeftExp);
            if (message.levelExp != null && Object.hasOwnProperty.call(message, "levelExp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.levelExp);
            if (message.leftExp != null && Object.hasOwnProperty.call(message, "leftExp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.leftExp);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.money);
            return writer;
        };

        /**
         * Encodes the specified LevelExp message, length delimited. Does not implicitly {@link scmj.LevelExp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.LevelExp
         * @static
         * @param {scmj.ILevelExp} message LevelExp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelExp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LevelExp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.LevelExp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.LevelExp} LevelExp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelExp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.LevelExp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.prevLevel = reader.int32();
                    break;
                case 2:
                    message.curLevel = reader.int32();
                    break;
                case 3:
                    message.incExp = reader.int32();
                    break;
                case 4:
                    message.prevLevelExp = reader.int32();
                    break;
                case 5:
                    message.prevLeftExp = reader.int32();
                    break;
                case 6:
                    message.levelExp = reader.int32();
                    break;
                case 7:
                    message.leftExp = reader.int32();
                    break;
                case 8:
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
         * Decodes a LevelExp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.LevelExp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.LevelExp} LevelExp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelExp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LevelExp message.
         * @function verify
         * @memberof scmj.LevelExp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LevelExp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.prevLevel != null && message.hasOwnProperty("prevLevel"))
                if (!$util.isInteger(message.prevLevel))
                    return "prevLevel: integer expected";
            if (message.curLevel != null && message.hasOwnProperty("curLevel"))
                if (!$util.isInteger(message.curLevel))
                    return "curLevel: integer expected";
            if (message.incExp != null && message.hasOwnProperty("incExp"))
                if (!$util.isInteger(message.incExp))
                    return "incExp: integer expected";
            if (message.prevLevelExp != null && message.hasOwnProperty("prevLevelExp"))
                if (!$util.isInteger(message.prevLevelExp))
                    return "prevLevelExp: integer expected";
            if (message.prevLeftExp != null && message.hasOwnProperty("prevLeftExp"))
                if (!$util.isInteger(message.prevLeftExp))
                    return "prevLeftExp: integer expected";
            if (message.levelExp != null && message.hasOwnProperty("levelExp"))
                if (!$util.isInteger(message.levelExp))
                    return "levelExp: integer expected";
            if (message.leftExp != null && message.hasOwnProperty("leftExp"))
                if (!$util.isInteger(message.leftExp))
                    return "leftExp: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money))
                    return "money: integer expected";
            return null;
        };

        /**
         * Creates a LevelExp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.LevelExp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.LevelExp} LevelExp
         */
        LevelExp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.LevelExp)
                return object;
            var message = new $root.scmj.LevelExp();
            if (object.prevLevel != null)
                message.prevLevel = object.prevLevel | 0;
            if (object.curLevel != null)
                message.curLevel = object.curLevel | 0;
            if (object.incExp != null)
                message.incExp = object.incExp | 0;
            if (object.prevLevelExp != null)
                message.prevLevelExp = object.prevLevelExp | 0;
            if (object.prevLeftExp != null)
                message.prevLeftExp = object.prevLeftExp | 0;
            if (object.levelExp != null)
                message.levelExp = object.levelExp | 0;
            if (object.leftExp != null)
                message.leftExp = object.leftExp | 0;
            if (object.money != null)
                message.money = object.money | 0;
            return message;
        };

        /**
         * Creates a plain object from a LevelExp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.LevelExp
         * @static
         * @param {scmj.LevelExp} message LevelExp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LevelExp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.prevLevel = 0;
                object.curLevel = 0;
                object.incExp = 0;
                object.prevLevelExp = 0;
                object.prevLeftExp = 0;
                object.levelExp = 0;
                object.leftExp = 0;
                object.money = 0;
            }
            if (message.prevLevel != null && message.hasOwnProperty("prevLevel"))
                object.prevLevel = message.prevLevel;
            if (message.curLevel != null && message.hasOwnProperty("curLevel"))
                object.curLevel = message.curLevel;
            if (message.incExp != null && message.hasOwnProperty("incExp"))
                object.incExp = message.incExp;
            if (message.prevLevelExp != null && message.hasOwnProperty("prevLevelExp"))
                object.prevLevelExp = message.prevLevelExp;
            if (message.prevLeftExp != null && message.hasOwnProperty("prevLeftExp"))
                object.prevLeftExp = message.prevLeftExp;
            if (message.levelExp != null && message.hasOwnProperty("levelExp"))
                object.levelExp = message.levelExp;
            if (message.leftExp != null && message.hasOwnProperty("leftExp"))
                object.leftExp = message.leftExp;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            return object;
        };

        /**
         * Converts this LevelExp to JSON.
         * @function toJSON
         * @memberof scmj.LevelExp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LevelExp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LevelExp;
    })();

    scmj.ResultNoti = (function() {

        /**
         * Properties of a ResultNoti.
         * @memberof scmj
         * @interface IResultNoti
         * @property {number|Long|null} [score] ResultNoti score
         * @property {Array.<scmj.IBillItem>|null} [items] ResultNoti items
         * @property {scmj.ILevelExp|null} [level] ResultNoti level
         */

        /**
         * Constructs a new ResultNoti.
         * @memberof scmj
         * @classdesc Represents a ResultNoti.
         * @implements IResultNoti
         * @constructor
         * @param {scmj.IResultNoti=} [properties] Properties to set
         */
        function ResultNoti(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultNoti score.
         * @member {number|Long} score
         * @memberof scmj.ResultNoti
         * @instance
         */
        ResultNoti.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResultNoti items.
         * @member {Array.<scmj.IBillItem>} items
         * @memberof scmj.ResultNoti
         * @instance
         */
        ResultNoti.prototype.items = $util.emptyArray;

        /**
         * ResultNoti level.
         * @member {scmj.ILevelExp|null|undefined} level
         * @memberof scmj.ResultNoti
         * @instance
         */
        ResultNoti.prototype.level = null;

        /**
         * Creates a new ResultNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ResultNoti
         * @static
         * @param {scmj.IResultNoti=} [properties] Properties to set
         * @returns {scmj.ResultNoti} ResultNoti instance
         */
        ResultNoti.create = function create(properties) {
            return new ResultNoti(properties);
        };

        /**
         * Encodes the specified ResultNoti message. Does not implicitly {@link scmj.ResultNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ResultNoti
         * @static
         * @param {scmj.IResultNoti} message ResultNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.score);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.scmj.BillItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                $root.scmj.LevelExp.encode(message.level, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResultNoti message, length delimited. Does not implicitly {@link scmj.ResultNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ResultNoti
         * @static
         * @param {scmj.IResultNoti} message ResultNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ResultNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ResultNoti} ResultNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ResultNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.score = reader.int64();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.scmj.BillItem.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.level = $root.scmj.LevelExp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResultNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ResultNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ResultNoti} ResultNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultNoti message.
         * @function verify
         * @memberof scmj.ResultNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.scmj.BillItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.level != null && message.hasOwnProperty("level")) {
                var error = $root.scmj.LevelExp.verify(message.level);
                if (error)
                    return "level." + error;
            }
            return null;
        };

        /**
         * Creates a ResultNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ResultNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ResultNoti} ResultNoti
         */
        ResultNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ResultNoti)
                return object;
            var message = new $root.scmj.ResultNoti();
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".scmj.ResultNoti.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".scmj.ResultNoti.items: object expected");
                    message.items[i] = $root.scmj.BillItem.fromObject(object.items[i]);
                }
            }
            if (object.level != null) {
                if (typeof object.level !== "object")
                    throw TypeError(".scmj.ResultNoti.level: object expected");
                message.level = $root.scmj.LevelExp.fromObject(object.level);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResultNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ResultNoti
         * @static
         * @param {scmj.ResultNoti} message ResultNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
                object.level = null;
            }
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.scmj.BillItem.toObject(message.items[j], options);
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = $root.scmj.LevelExp.toObject(message.level, options);
            return object;
        };

        /**
         * Converts this ResultNoti to JSON.
         * @function toJSON
         * @memberof scmj.ResultNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultNoti;
    })();

    scmj.CompleteReq = (function() {

        /**
         * Properties of a CompleteReq.
         * @memberof scmj
         * @interface ICompleteReq
         */

        /**
         * Constructs a new CompleteReq.
         * @memberof scmj
         * @classdesc Represents a CompleteReq.
         * @implements ICompleteReq
         * @constructor
         * @param {scmj.ICompleteReq=} [properties] Properties to set
         */
        function CompleteReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CompleteReq instance using the specified properties.
         * @function create
         * @memberof scmj.CompleteReq
         * @static
         * @param {scmj.ICompleteReq=} [properties] Properties to set
         * @returns {scmj.CompleteReq} CompleteReq instance
         */
        CompleteReq.create = function create(properties) {
            return new CompleteReq(properties);
        };

        /**
         * Encodes the specified CompleteReq message. Does not implicitly {@link scmj.CompleteReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.CompleteReq
         * @static
         * @param {scmj.ICompleteReq} message CompleteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CompleteReq message, length delimited. Does not implicitly {@link scmj.CompleteReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.CompleteReq
         * @static
         * @param {scmj.ICompleteReq} message CompleteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompleteReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.CompleteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.CompleteReq} CompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.CompleteReq();
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
         * Decodes a CompleteReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.CompleteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.CompleteReq} CompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompleteReq message.
         * @function verify
         * @memberof scmj.CompleteReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompleteReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CompleteReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.CompleteReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.CompleteReq} CompleteReq
         */
        CompleteReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.CompleteReq)
                return object;
            return new $root.scmj.CompleteReq();
        };

        /**
         * Creates a plain object from a CompleteReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.CompleteReq
         * @static
         * @param {scmj.CompleteReq} message CompleteReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CompleteReq to JSON.
         * @function toJSON
         * @memberof scmj.CompleteReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompleteReq;
    })();

    scmj.GameDataItem = (function() {

        /**
         * Properties of a GameDataItem.
         * @memberof scmj
         * @interface IGameDataItem
         * @property {number|null} [chairId] GameDataItem chairId
         * @property {number|null} [lack] GameDataItem lack
         * @property {boolean|null} [giveup] GameDataItem giveup
         * @property {boolean|null} [auto] GameDataItem auto
         * @property {number|Long|null} [addScore] GameDataItem addScore
         * @property {scmj.IUpdateCardsNoti|null} [cards] GameDataItem cards
         */

        /**
         * Constructs a new GameDataItem.
         * @memberof scmj
         * @classdesc Represents a GameDataItem.
         * @implements IGameDataItem
         * @constructor
         * @param {scmj.IGameDataItem=} [properties] Properties to set
         */
        function GameDataItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameDataItem chairId.
         * @member {number} chairId
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.chairId = 0;

        /**
         * GameDataItem lack.
         * @member {number} lack
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.lack = 0;

        /**
         * GameDataItem giveup.
         * @member {boolean} giveup
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.giveup = false;

        /**
         * GameDataItem auto.
         * @member {boolean} auto
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.auto = false;

        /**
         * GameDataItem addScore.
         * @member {number|Long} addScore
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.addScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameDataItem cards.
         * @member {scmj.IUpdateCardsNoti|null|undefined} cards
         * @memberof scmj.GameDataItem
         * @instance
         */
        GameDataItem.prototype.cards = null;

        /**
         * Creates a new GameDataItem instance using the specified properties.
         * @function create
         * @memberof scmj.GameDataItem
         * @static
         * @param {scmj.IGameDataItem=} [properties] Properties to set
         * @returns {scmj.GameDataItem} GameDataItem instance
         */
        GameDataItem.create = function create(properties) {
            return new GameDataItem(properties);
        };

        /**
         * Encodes the specified GameDataItem message. Does not implicitly {@link scmj.GameDataItem.verify|verify} messages.
         * @function encode
         * @memberof scmj.GameDataItem
         * @static
         * @param {scmj.IGameDataItem} message GameDataItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameDataItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
            if (message.lack != null && Object.hasOwnProperty.call(message, "lack"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lack);
            if (message.giveup != null && Object.hasOwnProperty.call(message, "giveup"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.giveup);
            if (message.auto != null && Object.hasOwnProperty.call(message, "auto"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.auto);
            if (message.addScore != null && Object.hasOwnProperty.call(message, "addScore"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.addScore);
            if (message.cards != null && Object.hasOwnProperty.call(message, "cards"))
                $root.scmj.UpdateCardsNoti.encode(message.cards, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameDataItem message, length delimited. Does not implicitly {@link scmj.GameDataItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.GameDataItem
         * @static
         * @param {scmj.IGameDataItem} message GameDataItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameDataItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameDataItem message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.GameDataItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.GameDataItem} GameDataItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameDataItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.GameDataItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chairId = reader.int32();
                    break;
                case 2:
                    message.lack = reader.int32();
                    break;
                case 3:
                    message.giveup = reader.bool();
                    break;
                case 4:
                    message.auto = reader.bool();
                    break;
                case 5:
                    message.addScore = reader.int64();
                    break;
                case 6:
                    message.cards = $root.scmj.UpdateCardsNoti.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameDataItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.GameDataItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.GameDataItem} GameDataItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameDataItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameDataItem message.
         * @function verify
         * @memberof scmj.GameDataItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameDataItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            if (message.lack != null && message.hasOwnProperty("lack"))
                if (!$util.isInteger(message.lack))
                    return "lack: integer expected";
            if (message.giveup != null && message.hasOwnProperty("giveup"))
                if (typeof message.giveup !== "boolean")
                    return "giveup: boolean expected";
            if (message.auto != null && message.hasOwnProperty("auto"))
                if (typeof message.auto !== "boolean")
                    return "auto: boolean expected";
            if (message.addScore != null && message.hasOwnProperty("addScore"))
                if (!$util.isInteger(message.addScore) && !(message.addScore && $util.isInteger(message.addScore.low) && $util.isInteger(message.addScore.high)))
                    return "addScore: integer|Long expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                var error = $root.scmj.UpdateCardsNoti.verify(message.cards);
                if (error)
                    return "cards." + error;
            }
            return null;
        };

        /**
         * Creates a GameDataItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.GameDataItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.GameDataItem} GameDataItem
         */
        GameDataItem.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.GameDataItem)
                return object;
            var message = new $root.scmj.GameDataItem();
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            if (object.lack != null)
                message.lack = object.lack | 0;
            if (object.giveup != null)
                message.giveup = Boolean(object.giveup);
            if (object.auto != null)
                message.auto = Boolean(object.auto);
            if (object.addScore != null)
                if ($util.Long)
                    (message.addScore = $util.Long.fromValue(object.addScore)).unsigned = false;
                else if (typeof object.addScore === "string")
                    message.addScore = parseInt(object.addScore, 10);
                else if (typeof object.addScore === "number")
                    message.addScore = object.addScore;
                else if (typeof object.addScore === "object")
                    message.addScore = new $util.LongBits(object.addScore.low >>> 0, object.addScore.high >>> 0).toNumber();
            if (object.cards != null) {
                if (typeof object.cards !== "object")
                    throw TypeError(".scmj.GameDataItem.cards: object expected");
                message.cards = $root.scmj.UpdateCardsNoti.fromObject(object.cards);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameDataItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.GameDataItem
         * @static
         * @param {scmj.GameDataItem} message GameDataItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameDataItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chairId = 0;
                object.lack = 0;
                object.giveup = false;
                object.auto = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.addScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.addScore = options.longs === String ? "0" : 0;
                object.cards = null;
            }
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            if (message.lack != null && message.hasOwnProperty("lack"))
                object.lack = message.lack;
            if (message.giveup != null && message.hasOwnProperty("giveup"))
                object.giveup = message.giveup;
            if (message.auto != null && message.hasOwnProperty("auto"))
                object.auto = message.auto;
            if (message.addScore != null && message.hasOwnProperty("addScore"))
                if (typeof message.addScore === "number")
                    object.addScore = options.longs === String ? String(message.addScore) : message.addScore;
                else
                    object.addScore = options.longs === String ? $util.Long.prototype.toString.call(message.addScore) : options.longs === Number ? new $util.LongBits(message.addScore.low >>> 0, message.addScore.high >>> 0).toNumber() : message.addScore;
            if (message.cards != null && message.hasOwnProperty("cards"))
                object.cards = $root.scmj.UpdateCardsNoti.toObject(message.cards, options);
            return object;
        };

        /**
         * Converts this GameDataItem to JSON.
         * @function toJSON
         * @memberof scmj.GameDataItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameDataItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameDataItem;
    })();

    scmj.CompleteNoti = (function() {

        /**
         * Properties of a CompleteNoti.
         * @memberof scmj
         * @interface ICompleteNoti
         * @property {number|null} [state] CompleteNoti state
         * @property {number|null} [east] CompleteNoti east
         * @property {number|null} [banker] CompleteNoti banker
         * @property {number|null} [remainCardNum] CompleteNoti remainCardNum
         * @property {Array.<scmj.IEnterNotiItem>|null} [baseItems] CompleteNoti baseItems
         * @property {Array.<scmj.IGameDataItem>|null} [gameItems] CompleteNoti gameItems
         */

        /**
         * Constructs a new CompleteNoti.
         * @memberof scmj
         * @classdesc Represents a CompleteNoti.
         * @implements ICompleteNoti
         * @constructor
         * @param {scmj.ICompleteNoti=} [properties] Properties to set
         */
        function CompleteNoti(properties) {
            this.baseItems = [];
            this.gameItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompleteNoti state.
         * @member {number} state
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.state = 0;

        /**
         * CompleteNoti east.
         * @member {number} east
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.east = 0;

        /**
         * CompleteNoti banker.
         * @member {number} banker
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.banker = 0;

        /**
         * CompleteNoti remainCardNum.
         * @member {number} remainCardNum
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.remainCardNum = 0;

        /**
         * CompleteNoti baseItems.
         * @member {Array.<scmj.IEnterNotiItem>} baseItems
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.baseItems = $util.emptyArray;

        /**
         * CompleteNoti gameItems.
         * @member {Array.<scmj.IGameDataItem>} gameItems
         * @memberof scmj.CompleteNoti
         * @instance
         */
        CompleteNoti.prototype.gameItems = $util.emptyArray;

        /**
         * Creates a new CompleteNoti instance using the specified properties.
         * @function create
         * @memberof scmj.CompleteNoti
         * @static
         * @param {scmj.ICompleteNoti=} [properties] Properties to set
         * @returns {scmj.CompleteNoti} CompleteNoti instance
         */
        CompleteNoti.create = function create(properties) {
            return new CompleteNoti(properties);
        };

        /**
         * Encodes the specified CompleteNoti message. Does not implicitly {@link scmj.CompleteNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.CompleteNoti
         * @static
         * @param {scmj.ICompleteNoti} message CompleteNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.east != null && Object.hasOwnProperty.call(message, "east"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.east);
            if (message.banker != null && Object.hasOwnProperty.call(message, "banker"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.banker);
            if (message.remainCardNum != null && Object.hasOwnProperty.call(message, "remainCardNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.remainCardNum);
            if (message.baseItems != null && message.baseItems.length)
                for (var i = 0; i < message.baseItems.length; ++i)
                    $root.scmj.EnterNotiItem.encode(message.baseItems[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gameItems != null && message.gameItems.length)
                for (var i = 0; i < message.gameItems.length; ++i)
                    $root.scmj.GameDataItem.encode(message.gameItems[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CompleteNoti message, length delimited. Does not implicitly {@link scmj.CompleteNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.CompleteNoti
         * @static
         * @param {scmj.ICompleteNoti} message CompleteNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompleteNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.CompleteNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.CompleteNoti} CompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.CompleteNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.east = reader.int32();
                    break;
                case 3:
                    message.banker = reader.int32();
                    break;
                case 4:
                    message.remainCardNum = reader.int32();
                    break;
                case 5:
                    if (!(message.baseItems && message.baseItems.length))
                        message.baseItems = [];
                    message.baseItems.push($root.scmj.EnterNotiItem.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.gameItems && message.gameItems.length))
                        message.gameItems = [];
                    message.gameItems.push($root.scmj.GameDataItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CompleteNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.CompleteNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.CompleteNoti} CompleteNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompleteNoti message.
         * @function verify
         * @memberof scmj.CompleteNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompleteNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.east != null && message.hasOwnProperty("east"))
                if (!$util.isInteger(message.east))
                    return "east: integer expected";
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (!$util.isInteger(message.banker))
                    return "banker: integer expected";
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                if (!$util.isInteger(message.remainCardNum))
                    return "remainCardNum: integer expected";
            if (message.baseItems != null && message.hasOwnProperty("baseItems")) {
                if (!Array.isArray(message.baseItems))
                    return "baseItems: array expected";
                for (var i = 0; i < message.baseItems.length; ++i) {
                    var error = $root.scmj.EnterNotiItem.verify(message.baseItems[i]);
                    if (error)
                        return "baseItems." + error;
                }
            }
            if (message.gameItems != null && message.hasOwnProperty("gameItems")) {
                if (!Array.isArray(message.gameItems))
                    return "gameItems: array expected";
                for (var i = 0; i < message.gameItems.length; ++i) {
                    var error = $root.scmj.GameDataItem.verify(message.gameItems[i]);
                    if (error)
                        return "gameItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CompleteNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.CompleteNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.CompleteNoti} CompleteNoti
         */
        CompleteNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.CompleteNoti)
                return object;
            var message = new $root.scmj.CompleteNoti();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.east != null)
                message.east = object.east | 0;
            if (object.banker != null)
                message.banker = object.banker | 0;
            if (object.remainCardNum != null)
                message.remainCardNum = object.remainCardNum | 0;
            if (object.baseItems) {
                if (!Array.isArray(object.baseItems))
                    throw TypeError(".scmj.CompleteNoti.baseItems: array expected");
                message.baseItems = [];
                for (var i = 0; i < object.baseItems.length; ++i) {
                    if (typeof object.baseItems[i] !== "object")
                        throw TypeError(".scmj.CompleteNoti.baseItems: object expected");
                    message.baseItems[i] = $root.scmj.EnterNotiItem.fromObject(object.baseItems[i]);
                }
            }
            if (object.gameItems) {
                if (!Array.isArray(object.gameItems))
                    throw TypeError(".scmj.CompleteNoti.gameItems: array expected");
                message.gameItems = [];
                for (var i = 0; i < object.gameItems.length; ++i) {
                    if (typeof object.gameItems[i] !== "object")
                        throw TypeError(".scmj.CompleteNoti.gameItems: object expected");
                    message.gameItems[i] = $root.scmj.GameDataItem.fromObject(object.gameItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CompleteNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.CompleteNoti
         * @static
         * @param {scmj.CompleteNoti} message CompleteNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.baseItems = [];
                object.gameItems = [];
            }
            if (options.defaults) {
                object.state = 0;
                object.east = 0;
                object.banker = 0;
                object.remainCardNum = 0;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.east != null && message.hasOwnProperty("east"))
                object.east = message.east;
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = message.banker;
            if (message.remainCardNum != null && message.hasOwnProperty("remainCardNum"))
                object.remainCardNum = message.remainCardNum;
            if (message.baseItems && message.baseItems.length) {
                object.baseItems = [];
                for (var j = 0; j < message.baseItems.length; ++j)
                    object.baseItems[j] = $root.scmj.EnterNotiItem.toObject(message.baseItems[j], options);
            }
            if (message.gameItems && message.gameItems.length) {
                object.gameItems = [];
                for (var j = 0; j < message.gameItems.length; ++j)
                    object.gameItems[j] = $root.scmj.GameDataItem.toObject(message.gameItems[j], options);
            }
            return object;
        };

        /**
         * Converts this CompleteNoti to JSON.
         * @function toJSON
         * @memberof scmj.CompleteNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompleteNoti;
    })();

    scmj.ChangeReq = (function() {

        /**
         * Properties of a ChangeReq.
         * @memberof scmj
         * @interface IChangeReq
         */

        /**
         * Constructs a new ChangeReq.
         * @memberof scmj
         * @classdesc Represents a ChangeReq.
         * @implements IChangeReq
         * @constructor
         * @param {scmj.IChangeReq=} [properties] Properties to set
         */
        function ChangeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ChangeReq instance using the specified properties.
         * @function create
         * @memberof scmj.ChangeReq
         * @static
         * @param {scmj.IChangeReq=} [properties] Properties to set
         * @returns {scmj.ChangeReq} ChangeReq instance
         */
        ChangeReq.create = function create(properties) {
            return new ChangeReq(properties);
        };

        /**
         * Encodes the specified ChangeReq message. Does not implicitly {@link scmj.ChangeReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.ChangeReq
         * @static
         * @param {scmj.IChangeReq} message ChangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ChangeReq message, length delimited. Does not implicitly {@link scmj.ChangeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ChangeReq
         * @static
         * @param {scmj.IChangeReq} message ChangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ChangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ChangeReq} ChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ChangeReq();
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
         * Decodes a ChangeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ChangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ChangeReq} ChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeReq message.
         * @function verify
         * @memberof scmj.ChangeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ChangeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ChangeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ChangeReq} ChangeReq
         */
        ChangeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ChangeReq)
                return object;
            return new $root.scmj.ChangeReq();
        };

        /**
         * Creates a plain object from a ChangeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ChangeReq
         * @static
         * @param {scmj.ChangeReq} message ChangeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ChangeReq to JSON.
         * @function toJSON
         * @memberof scmj.ChangeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeReq;
    })();

    scmj.ChangeRsp = (function() {

        /**
         * Properties of a ChangeRsp.
         * @memberof scmj
         * @interface IChangeRsp
         * @property {number|null} [giveup] ChangeRsp giveup
         * @property {Array.<number>|null} [cards] ChangeRsp cards
         */

        /**
         * Constructs a new ChangeRsp.
         * @memberof scmj
         * @classdesc Represents a ChangeRsp.
         * @implements IChangeRsp
         * @constructor
         * @param {scmj.IChangeRsp=} [properties] Properties to set
         */
        function ChangeRsp(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeRsp giveup.
         * @member {number} giveup
         * @memberof scmj.ChangeRsp
         * @instance
         */
        ChangeRsp.prototype.giveup = 0;

        /**
         * ChangeRsp cards.
         * @member {Array.<number>} cards
         * @memberof scmj.ChangeRsp
         * @instance
         */
        ChangeRsp.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ChangeRsp instance using the specified properties.
         * @function create
         * @memberof scmj.ChangeRsp
         * @static
         * @param {scmj.IChangeRsp=} [properties] Properties to set
         * @returns {scmj.ChangeRsp} ChangeRsp instance
         */
        ChangeRsp.create = function create(properties) {
            return new ChangeRsp(properties);
        };

        /**
         * Encodes the specified ChangeRsp message. Does not implicitly {@link scmj.ChangeRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.ChangeRsp
         * @static
         * @param {scmj.IChangeRsp} message ChangeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.giveup != null && Object.hasOwnProperty.call(message, "giveup"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.giveup);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ChangeRsp message, length delimited. Does not implicitly {@link scmj.ChangeRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ChangeRsp
         * @static
         * @param {scmj.IChangeRsp} message ChangeRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ChangeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ChangeRsp} ChangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ChangeRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.giveup = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ChangeRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ChangeRsp} ChangeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeRsp message.
         * @function verify
         * @memberof scmj.ChangeRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.giveup != null && message.hasOwnProperty("giveup"))
                if (!$util.isInteger(message.giveup))
                    return "giveup: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ChangeRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ChangeRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ChangeRsp} ChangeRsp
         */
        ChangeRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ChangeRsp)
                return object;
            var message = new $root.scmj.ChangeRsp();
            if (object.giveup != null)
                message.giveup = object.giveup | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".scmj.ChangeRsp.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangeRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ChangeRsp
         * @static
         * @param {scmj.ChangeRsp} message ChangeRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults)
                object.giveup = 0;
            if (message.giveup != null && message.hasOwnProperty("giveup"))
                object.giveup = message.giveup;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this ChangeRsp to JSON.
         * @function toJSON
         * @memberof scmj.ChangeRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeRsp;
    })();

    scmj.ChangeNoti = (function() {

        /**
         * Properties of a ChangeNoti.
         * @memberof scmj
         * @interface IChangeNoti
         * @property {Array.<number>|null} [cards] ChangeNoti cards
         */

        /**
         * Constructs a new ChangeNoti.
         * @memberof scmj
         * @classdesc Represents a ChangeNoti.
         * @implements IChangeNoti
         * @constructor
         * @param {scmj.IChangeNoti=} [properties] Properties to set
         */
        function ChangeNoti(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeNoti cards.
         * @member {Array.<number>} cards
         * @memberof scmj.ChangeNoti
         * @instance
         */
        ChangeNoti.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ChangeNoti instance using the specified properties.
         * @function create
         * @memberof scmj.ChangeNoti
         * @static
         * @param {scmj.IChangeNoti=} [properties] Properties to set
         * @returns {scmj.ChangeNoti} ChangeNoti instance
         */
        ChangeNoti.create = function create(properties) {
            return new ChangeNoti(properties);
        };

        /**
         * Encodes the specified ChangeNoti message. Does not implicitly {@link scmj.ChangeNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.ChangeNoti
         * @static
         * @param {scmj.IChangeNoti} message ChangeNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ChangeNoti message, length delimited. Does not implicitly {@link scmj.ChangeNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ChangeNoti
         * @static
         * @param {scmj.IChangeNoti} message ChangeNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ChangeNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ChangeNoti} ChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ChangeNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ChangeNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ChangeNoti} ChangeNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeNoti message.
         * @function verify
         * @memberof scmj.ChangeNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ChangeNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ChangeNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ChangeNoti} ChangeNoti
         */
        ChangeNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ChangeNoti)
                return object;
            var message = new $root.scmj.ChangeNoti();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".scmj.ChangeNoti.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangeNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ChangeNoti
         * @static
         * @param {scmj.ChangeNoti} message ChangeNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this ChangeNoti to JSON.
         * @function toJSON
         * @memberof scmj.ChangeNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeNoti;
    })();

    scmj.ChangeCardStartReq = (function() {

        /**
         * Properties of a ChangeCardStartReq.
         * @memberof scmj
         * @interface IChangeCardStartReq
         * @property {string|null} [oid] ChangeCardStartReq oid
         */

        /**
         * Constructs a new ChangeCardStartReq.
         * @memberof scmj
         * @classdesc Represents a ChangeCardStartReq.
         * @implements IChangeCardStartReq
         * @constructor
         * @param {scmj.IChangeCardStartReq=} [properties] Properties to set
         */
        function ChangeCardStartReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeCardStartReq oid.
         * @member {string} oid
         * @memberof scmj.ChangeCardStartReq
         * @instance
         */
        ChangeCardStartReq.prototype.oid = "";

        /**
         * Creates a new ChangeCardStartReq instance using the specified properties.
         * @function create
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {scmj.IChangeCardStartReq=} [properties] Properties to set
         * @returns {scmj.ChangeCardStartReq} ChangeCardStartReq instance
         */
        ChangeCardStartReq.create = function create(properties) {
            return new ChangeCardStartReq(properties);
        };

        /**
         * Encodes the specified ChangeCardStartReq message. Does not implicitly {@link scmj.ChangeCardStartReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {scmj.IChangeCardStartReq} message ChangeCardStartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeCardStartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oid != null && Object.hasOwnProperty.call(message, "oid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oid);
            return writer;
        };

        /**
         * Encodes the specified ChangeCardStartReq message, length delimited. Does not implicitly {@link scmj.ChangeCardStartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {scmj.IChangeCardStartReq} message ChangeCardStartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeCardStartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeCardStartReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.ChangeCardStartReq} ChangeCardStartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeCardStartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.ChangeCardStartReq();
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
         * Decodes a ChangeCardStartReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.ChangeCardStartReq} ChangeCardStartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeCardStartReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeCardStartReq message.
         * @function verify
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeCardStartReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oid != null && message.hasOwnProperty("oid"))
                if (!$util.isString(message.oid))
                    return "oid: string expected";
            return null;
        };

        /**
         * Creates a ChangeCardStartReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.ChangeCardStartReq} ChangeCardStartReq
         */
        ChangeCardStartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.ChangeCardStartReq)
                return object;
            var message = new $root.scmj.ChangeCardStartReq();
            if (object.oid != null)
                message.oid = String(object.oid);
            return message;
        };

        /**
         * Creates a plain object from a ChangeCardStartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.ChangeCardStartReq
         * @static
         * @param {scmj.ChangeCardStartReq} message ChangeCardStartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeCardStartReq.toObject = function toObject(message, options) {
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
         * Converts this ChangeCardStartReq to JSON.
         * @function toJSON
         * @memberof scmj.ChangeCardStartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeCardStartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeCardStartReq;
    })();

    scmj.TingCard = (function() {

        /**
         * Properties of a TingCard.
         * @memberof scmj
         * @interface ITingCard
         * @property {number|null} [card] TingCard card
         * @property {number|null} [left] TingCard left
         * @property {number|null} [ratio] TingCard ratio
         * @property {number|null} [fan] TingCard fan
         */

        /**
         * Constructs a new TingCard.
         * @memberof scmj
         * @classdesc Represents a TingCard.
         * @implements ITingCard
         * @constructor
         * @param {scmj.ITingCard=} [properties] Properties to set
         */
        function TingCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TingCard card.
         * @member {number} card
         * @memberof scmj.TingCard
         * @instance
         */
        TingCard.prototype.card = 0;

        /**
         * TingCard left.
         * @member {number} left
         * @memberof scmj.TingCard
         * @instance
         */
        TingCard.prototype.left = 0;

        /**
         * TingCard ratio.
         * @member {number} ratio
         * @memberof scmj.TingCard
         * @instance
         */
        TingCard.prototype.ratio = 0;

        /**
         * TingCard fan.
         * @member {number} fan
         * @memberof scmj.TingCard
         * @instance
         */
        TingCard.prototype.fan = 0;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @function create
         * @memberof scmj.TingCard
         * @static
         * @param {scmj.ITingCard=} [properties] Properties to set
         * @returns {scmj.TingCard} TingCard instance
         */
        TingCard.create = function create(properties) {
            return new TingCard(properties);
        };

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link scmj.TingCard.verify|verify} messages.
         * @function encode
         * @memberof scmj.TingCard
         * @static
         * @param {scmj.ITingCard} message TingCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
            if (message.left != null && Object.hasOwnProperty.call(message, "left"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.left);
            if (message.ratio != null && Object.hasOwnProperty.call(message, "ratio"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ratio);
            if (message.fan != null && Object.hasOwnProperty.call(message, "fan"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fan);
            return writer;
        };

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link scmj.TingCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TingCard
         * @static
         * @param {scmj.ITingCard} message TingCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TingCard} TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TingCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = reader.int32();
                    break;
                case 2:
                    message.left = reader.int32();
                    break;
                case 3:
                    message.ratio = reader.int32();
                    break;
                case 4:
                    message.fan = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TingCard} TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingCard message.
         * @function verify
         * @memberof scmj.TingCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            if (message.left != null && message.hasOwnProperty("left"))
                if (!$util.isInteger(message.left))
                    return "left: integer expected";
            if (message.ratio != null && message.hasOwnProperty("ratio"))
                if (!$util.isInteger(message.ratio))
                    return "ratio: integer expected";
            if (message.fan != null && message.hasOwnProperty("fan"))
                if (!$util.isInteger(message.fan))
                    return "fan: integer expected";
            return null;
        };

        /**
         * Creates a TingCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TingCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TingCard} TingCard
         */
        TingCard.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TingCard)
                return object;
            var message = new $root.scmj.TingCard();
            if (object.card != null)
                message.card = object.card | 0;
            if (object.left != null)
                message.left = object.left | 0;
            if (object.ratio != null)
                message.ratio = object.ratio | 0;
            if (object.fan != null)
                message.fan = object.fan | 0;
            return message;
        };

        /**
         * Creates a plain object from a TingCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TingCard
         * @static
         * @param {scmj.TingCard} message TingCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TingCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.card = 0;
                object.left = 0;
                object.ratio = 0;
                object.fan = 0;
            }
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            if (message.left != null && message.hasOwnProperty("left"))
                object.left = message.left;
            if (message.ratio != null && message.hasOwnProperty("ratio"))
                object.ratio = message.ratio;
            if (message.fan != null && message.hasOwnProperty("fan"))
                object.fan = message.fan;
            return object;
        };

        /**
         * Converts this TingCard to JSON.
         * @function toJSON
         * @memberof scmj.TingCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TingCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TingCard;
    })();

    scmj.TingCards = (function() {

        /**
         * Properties of a TingCards.
         * @memberof scmj
         * @interface ITingCards
         * @property {number|null} [playCard] TingCards playCard
         * @property {Array.<scmj.ITingCard>|null} [tingCards] TingCards tingCards
         */

        /**
         * Constructs a new TingCards.
         * @memberof scmj
         * @classdesc Represents a TingCards.
         * @implements ITingCards
         * @constructor
         * @param {scmj.ITingCards=} [properties] Properties to set
         */
        function TingCards(properties) {
            this.tingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TingCards playCard.
         * @member {number} playCard
         * @memberof scmj.TingCards
         * @instance
         */
        TingCards.prototype.playCard = 0;

        /**
         * TingCards tingCards.
         * @member {Array.<scmj.ITingCard>} tingCards
         * @memberof scmj.TingCards
         * @instance
         */
        TingCards.prototype.tingCards = $util.emptyArray;

        /**
         * Creates a new TingCards instance using the specified properties.
         * @function create
         * @memberof scmj.TingCards
         * @static
         * @param {scmj.ITingCards=} [properties] Properties to set
         * @returns {scmj.TingCards} TingCards instance
         */
        TingCards.create = function create(properties) {
            return new TingCards(properties);
        };

        /**
         * Encodes the specified TingCards message. Does not implicitly {@link scmj.TingCards.verify|verify} messages.
         * @function encode
         * @memberof scmj.TingCards
         * @static
         * @param {scmj.ITingCards} message TingCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playCard != null && Object.hasOwnProperty.call(message, "playCard"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playCard);
            if (message.tingCards != null && message.tingCards.length)
                for (var i = 0; i < message.tingCards.length; ++i)
                    $root.scmj.TingCard.encode(message.tingCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TingCards message, length delimited. Does not implicitly {@link scmj.TingCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TingCards
         * @static
         * @param {scmj.ITingCards} message TingCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingCards message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TingCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TingCards} TingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TingCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playCard = reader.int32();
                    break;
                case 2:
                    if (!(message.tingCards && message.tingCards.length))
                        message.tingCards = [];
                    message.tingCards.push($root.scmj.TingCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TingCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TingCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TingCards} TingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingCards message.
         * @function verify
         * @memberof scmj.TingCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playCard != null && message.hasOwnProperty("playCard"))
                if (!$util.isInteger(message.playCard))
                    return "playCard: integer expected";
            if (message.tingCards != null && message.hasOwnProperty("tingCards")) {
                if (!Array.isArray(message.tingCards))
                    return "tingCards: array expected";
                for (var i = 0; i < message.tingCards.length; ++i) {
                    var error = $root.scmj.TingCard.verify(message.tingCards[i]);
                    if (error)
                        return "tingCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TingCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TingCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TingCards} TingCards
         */
        TingCards.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TingCards)
                return object;
            var message = new $root.scmj.TingCards();
            if (object.playCard != null)
                message.playCard = object.playCard | 0;
            if (object.tingCards) {
                if (!Array.isArray(object.tingCards))
                    throw TypeError(".scmj.TingCards.tingCards: array expected");
                message.tingCards = [];
                for (var i = 0; i < object.tingCards.length; ++i) {
                    if (typeof object.tingCards[i] !== "object")
                        throw TypeError(".scmj.TingCards.tingCards: object expected");
                    message.tingCards[i] = $root.scmj.TingCard.fromObject(object.tingCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TingCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TingCards
         * @static
         * @param {scmj.TingCards} message TingCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TingCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tingCards = [];
            if (options.defaults)
                object.playCard = 0;
            if (message.playCard != null && message.hasOwnProperty("playCard"))
                object.playCard = message.playCard;
            if (message.tingCards && message.tingCards.length) {
                object.tingCards = [];
                for (var j = 0; j < message.tingCards.length; ++j)
                    object.tingCards[j] = $root.scmj.TingCard.toObject(message.tingCards[j], options);
            }
            return object;
        };

        /**
         * Converts this TingCards to JSON.
         * @function toJSON
         * @memberof scmj.TingCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TingCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TingCards;
    })();

    scmj.TingTipReq = (function() {

        /**
         * Properties of a TingTipReq.
         * @memberof scmj
         * @interface ITingTipReq
         */

        /**
         * Constructs a new TingTipReq.
         * @memberof scmj
         * @classdesc Represents a TingTipReq.
         * @implements ITingTipReq
         * @constructor
         * @param {scmj.ITingTipReq=} [properties] Properties to set
         */
        function TingTipReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TingTipReq instance using the specified properties.
         * @function create
         * @memberof scmj.TingTipReq
         * @static
         * @param {scmj.ITingTipReq=} [properties] Properties to set
         * @returns {scmj.TingTipReq} TingTipReq instance
         */
        TingTipReq.create = function create(properties) {
            return new TingTipReq(properties);
        };

        /**
         * Encodes the specified TingTipReq message. Does not implicitly {@link scmj.TingTipReq.verify|verify} messages.
         * @function encode
         * @memberof scmj.TingTipReq
         * @static
         * @param {scmj.ITingTipReq} message TingTipReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingTipReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TingTipReq message, length delimited. Does not implicitly {@link scmj.TingTipReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TingTipReq
         * @static
         * @param {scmj.ITingTipReq} message TingTipReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingTipReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingTipReq message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TingTipReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TingTipReq} TingTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingTipReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TingTipReq();
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
         * Decodes a TingTipReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TingTipReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TingTipReq} TingTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingTipReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingTipReq message.
         * @function verify
         * @memberof scmj.TingTipReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingTipReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TingTipReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TingTipReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TingTipReq} TingTipReq
         */
        TingTipReq.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TingTipReq)
                return object;
            return new $root.scmj.TingTipReq();
        };

        /**
         * Creates a plain object from a TingTipReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TingTipReq
         * @static
         * @param {scmj.TingTipReq} message TingTipReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TingTipReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TingTipReq to JSON.
         * @function toJSON
         * @memberof scmj.TingTipReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TingTipReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TingTipReq;
    })();

    scmj.TingTipRsp = (function() {

        /**
         * Properties of a TingTipRsp.
         * @memberof scmj
         * @interface ITingTipRsp
         * @property {Array.<scmj.ITingCard>|null} [tingCards] TingTipRsp tingCards
         */

        /**
         * Constructs a new TingTipRsp.
         * @memberof scmj
         * @classdesc Represents a TingTipRsp.
         * @implements ITingTipRsp
         * @constructor
         * @param {scmj.ITingTipRsp=} [properties] Properties to set
         */
        function TingTipRsp(properties) {
            this.tingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TingTipRsp tingCards.
         * @member {Array.<scmj.ITingCard>} tingCards
         * @memberof scmj.TingTipRsp
         * @instance
         */
        TingTipRsp.prototype.tingCards = $util.emptyArray;

        /**
         * Creates a new TingTipRsp instance using the specified properties.
         * @function create
         * @memberof scmj.TingTipRsp
         * @static
         * @param {scmj.ITingTipRsp=} [properties] Properties to set
         * @returns {scmj.TingTipRsp} TingTipRsp instance
         */
        TingTipRsp.create = function create(properties) {
            return new TingTipRsp(properties);
        };

        /**
         * Encodes the specified TingTipRsp message. Does not implicitly {@link scmj.TingTipRsp.verify|verify} messages.
         * @function encode
         * @memberof scmj.TingTipRsp
         * @static
         * @param {scmj.ITingTipRsp} message TingTipRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingTipRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tingCards != null && message.tingCards.length)
                for (var i = 0; i < message.tingCards.length; ++i)
                    $root.scmj.TingCard.encode(message.tingCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TingTipRsp message, length delimited. Does not implicitly {@link scmj.TingTipRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TingTipRsp
         * @static
         * @param {scmj.ITingTipRsp} message TingTipRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingTipRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingTipRsp message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TingTipRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TingTipRsp} TingTipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingTipRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TingTipRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tingCards && message.tingCards.length))
                        message.tingCards = [];
                    message.tingCards.push($root.scmj.TingCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TingTipRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TingTipRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TingTipRsp} TingTipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingTipRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingTipRsp message.
         * @function verify
         * @memberof scmj.TingTipRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingTipRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tingCards != null && message.hasOwnProperty("tingCards")) {
                if (!Array.isArray(message.tingCards))
                    return "tingCards: array expected";
                for (var i = 0; i < message.tingCards.length; ++i) {
                    var error = $root.scmj.TingCard.verify(message.tingCards[i]);
                    if (error)
                        return "tingCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TingTipRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TingTipRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TingTipRsp} TingTipRsp
         */
        TingTipRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TingTipRsp)
                return object;
            var message = new $root.scmj.TingTipRsp();
            if (object.tingCards) {
                if (!Array.isArray(object.tingCards))
                    throw TypeError(".scmj.TingTipRsp.tingCards: array expected");
                message.tingCards = [];
                for (var i = 0; i < object.tingCards.length; ++i) {
                    if (typeof object.tingCards[i] !== "object")
                        throw TypeError(".scmj.TingTipRsp.tingCards: object expected");
                    message.tingCards[i] = $root.scmj.TingCard.fromObject(object.tingCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TingTipRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TingTipRsp
         * @static
         * @param {scmj.TingTipRsp} message TingTipRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TingTipRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tingCards = [];
            if (message.tingCards && message.tingCards.length) {
                object.tingCards = [];
                for (var j = 0; j < message.tingCards.length; ++j)
                    object.tingCards[j] = $root.scmj.TingCard.toObject(message.tingCards[j], options);
            }
            return object;
        };

        /**
         * Converts this TingTipRsp to JSON.
         * @function toJSON
         * @memberof scmj.TingTipRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TingTipRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TingTipRsp;
    })();

    scmj.TingNoti = (function() {

        /**
         * Properties of a TingNoti.
         * @memberof scmj
         * @interface ITingNoti
         * @property {number|null} [isTing] TingNoti isTing
         */

        /**
         * Constructs a new TingNoti.
         * @memberof scmj
         * @classdesc Represents a TingNoti.
         * @implements ITingNoti
         * @constructor
         * @param {scmj.ITingNoti=} [properties] Properties to set
         */
        function TingNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TingNoti isTing.
         * @member {number} isTing
         * @memberof scmj.TingNoti
         * @instance
         */
        TingNoti.prototype.isTing = 0;

        /**
         * Creates a new TingNoti instance using the specified properties.
         * @function create
         * @memberof scmj.TingNoti
         * @static
         * @param {scmj.ITingNoti=} [properties] Properties to set
         * @returns {scmj.TingNoti} TingNoti instance
         */
        TingNoti.create = function create(properties) {
            return new TingNoti(properties);
        };

        /**
         * Encodes the specified TingNoti message. Does not implicitly {@link scmj.TingNoti.verify|verify} messages.
         * @function encode
         * @memberof scmj.TingNoti
         * @static
         * @param {scmj.ITingNoti} message TingNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isTing != null && Object.hasOwnProperty.call(message, "isTing"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isTing);
            return writer;
        };

        /**
         * Encodes the specified TingNoti message, length delimited. Does not implicitly {@link scmj.TingNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scmj.TingNoti
         * @static
         * @param {scmj.ITingNoti} message TingNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingNoti message from the specified reader or buffer.
         * @function decode
         * @memberof scmj.TingNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scmj.TingNoti} TingNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scmj.TingNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isTing = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TingNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scmj.TingNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scmj.TingNoti} TingNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingNoti message.
         * @function verify
         * @memberof scmj.TingNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isTing != null && message.hasOwnProperty("isTing"))
                if (!$util.isInteger(message.isTing))
                    return "isTing: integer expected";
            return null;
        };

        /**
         * Creates a TingNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scmj.TingNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scmj.TingNoti} TingNoti
         */
        TingNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.scmj.TingNoti)
                return object;
            var message = new $root.scmj.TingNoti();
            if (object.isTing != null)
                message.isTing = object.isTing | 0;
            return message;
        };

        /**
         * Creates a plain object from a TingNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scmj.TingNoti
         * @static
         * @param {scmj.TingNoti} message TingNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TingNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isTing = 0;
            if (message.isTing != null && message.hasOwnProperty("isTing"))
                object.isTing = message.isTing;
            return object;
        };

        /**
         * Converts this TingNoti to JSON.
         * @function toJSON
         * @memberof scmj.TingNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TingNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TingNoti;
    })();

    return scmj;
})();

module.exports = $root.scmj;
