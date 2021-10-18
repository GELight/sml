export default class TypeException extends TypeError {
    constructor(message: string) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TypeException);
        }

    }
}
