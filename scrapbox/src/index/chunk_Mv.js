import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Mv = e(b(), 1);
export const RX = a(({ status })=>{
    let t = status === "past_due";
    let r = status?.startsWith("incomplete");
    if (t) {
        return Mv.default.createElement("div", {
            className: "alert alert-danger"
        }, "Unable to process payment. Please update your card details or try a new card.");
    }
    if (r) {
        return Mv.default.createElement("div", {
            className: "alert alert-danger"
        }, "Payment has not been completed (status:", status, ").", Mv.default.createElement("br", null), "Your card issuer may require additional verification to complete the payment.", Mv.default.createElement("br", null), "Please update your card information. You may have received a verification request via email or SMS (e.g., 3D Secure authentication).");
    }
    return null;
}, "StatusError");
