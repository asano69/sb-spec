import { Xs } from "./chunk_nt.js";
export const e_ = "sentry.source";
export const Mw = "sentry.sample_rate";
export const MM = "sentry.previous_trace_sample_rate";
export const Dw = "sentry.op";
export const Bw = "sentry.origin";
export const DM = "gen_ai.conversation.id";
export const WM = 1;
let HM = false;
export function zw() {
    if (!HM) {
        Xs(()=>{
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        });
        HM = true;
    }
}
