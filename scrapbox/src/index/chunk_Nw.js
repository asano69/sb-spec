export const Nw = "_sentrySpan";
const eue = /Minified React error #\d+;/i;
export function tue(e) {
    if (e && eue.test(e.message)) {
        return 1;
    }
    return 0;
}
