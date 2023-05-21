import { BaseError } from "./BaseError";

export class ForbiddenError extends BaseError {
    constructor(
        message: string = "The entered token is not authorized"
    ) {
        super(403, message)
    }
}