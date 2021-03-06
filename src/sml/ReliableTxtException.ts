export default class ReliableTxtException extends Error {
    constructor(message: string) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ReliableTxtException);
        }

    }
}
