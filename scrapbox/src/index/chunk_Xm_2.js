import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Ux } from "./chunk_hX.js";
export const Xm = e(b(), 1);
const EX = e(b(), 1);
export const SX = a(({ ipAddress })=>{
    if (Ux(ipAddress)) {
        return null;
    }
    return EX.default.createElement("span", {
        className: "ip-address-error"
    }, "invalid IP address");
}, "IpAddressError");
