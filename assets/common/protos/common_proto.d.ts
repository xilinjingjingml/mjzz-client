import * as $protobuf from "protobufjs";
/** Namespace common. */
export namespace common {

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
        constructor(properties?: common.IGameData);

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
        public static create(properties?: common.IGameData): common.GameData;

        /**
         * Encodes the specified GameData message. Does not implicitly {@link common.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link common.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GameData;

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GameData;

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
        public static fromObject(object: { [k: string]: any }): common.GameData;

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @param message GameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SysError. */
    interface ISysError {

        /** SysError code */
        code?: (string|null);

        /** SysError msg */
        msg?: (string|null);

        /** SysError metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a SysError. */
    class SysError implements ISysError {

        /**
         * Constructs a new SysError.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISysError);

        /** SysError code. */
        public code: string;

        /** SysError msg. */
        public msg: string;

        /** SysError metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new SysError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SysError instance
         */
        public static create(properties?: common.ISysError): common.SysError;

        /**
         * Encodes the specified SysError message. Does not implicitly {@link common.SysError.verify|verify} messages.
         * @param message SysError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISysError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SysError message, length delimited. Does not implicitly {@link common.SysError.verify|verify} messages.
         * @param message SysError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISysError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SysError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SysError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SysError;

        /**
         * Decodes a SysError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SysError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SysError;

        /**
         * Verifies a SysError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SysError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SysError
         */
        public static fromObject(object: { [k: string]: any }): common.SysError;

        /**
         * Creates a plain object from a SysError message. Also converts values to other types if specified.
         * @param message SysError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SysError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SysError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
