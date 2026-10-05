import { Tse, Xs, fl, nt } from "./chunk_nt.js";
export const Xe = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
export function kse() {
    dw().enabled = true;
}
export function Nse() {
    dw().enabled = false;
}
export function dM() {
    return dw().enabled;
}
export function pw(e, ...t) {
    if (Xe && dM()) {
        Xs(()=>{
            nt.console[e](`${Tse}[${e}]:`, ...t);
        });
    }
}
export function dw() {
    if (Xe) {
        return fl("loggerSettings", ()=>({
                enabled: false
            }));
    }
    return {
        enabled: false
    };
}
