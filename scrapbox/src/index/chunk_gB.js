import { a } from "../chunks/chunk-FXCI2R73.js";
import { nt } from "./chunk_nt.js";
export const gB = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
export const zr = nt;
export function x3(e, t, r) {
    if (zr.document) {
        zr.addEventListener(e, t, r);
    }
}
export function w3(e, t, r) {
    if (zr.document) {
        zr.removeEventListener(e, t, r);
    }
}
const hB = a((e)=>{
    let t = false;
    return ()=>{
        if (!t) {
            e();
            t = true;
        }
    };
}, "runOnce");
export const T3 = a((e)=>{
    let t = zr.requestIdleCallback || zr.setTimeout;
    if (zr.document?.visibilityState === "hidden") {
        e();
    } else {
        e = hB(e);
        x3("visibilitychange", e, {
            once: true,
            capture: true
        });
        x3("pagehide", e, {
            once: true,
            capture: true
        });
        t(()=>{
            e();
            w3("visibilitychange", e, {
                capture: true
            });
            w3("pagehide", e, {
                capture: true
            });
        });
    }
}, "whenIdleOrHidden");
export const x_ = {};
