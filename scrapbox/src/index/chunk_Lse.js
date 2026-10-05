const Lse = Symbol.for("sentry.skipNormalization");
const Mse = Symbol.for("sentry.overrideNormalizationDepth");
export function yM(e) {
    return !!e[Lse];
}
export function _M(e) {
    let t = e[Mse];
    if (typeof t === "number") {
        return t;
    }
}
