export const bfe = /^xn--/;
export const vfe = /[^\0-\x7F]/;
export const yfe = /[\x2E\u3002\uFF0E\uFF61]/g;
const _fe = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
};
export const B5 = 35;
export const du = Math.floor;
export const U5 = String.fromCharCode;
export function Pp(e) {
    throw new RangeError(_fe[e]);
}
