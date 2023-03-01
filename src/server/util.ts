export function toNumber(input?: string, radix = 10) {
    if (input === undefined || input === null) {
        return undefined;
    }
    return parseInt(input, radix);
}