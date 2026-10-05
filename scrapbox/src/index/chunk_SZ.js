import { Fa, Na, n } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const SZ = e(Fa(), 1);
const _Z = e(Fa(), 1);
let yZ = false;
export function EZ(e, t) {
    if (!n() || yZ) {
        return t();
    }
    yZ = true;
    let r;
    try {
        r = Na.get("lastPagePath");
    } catch (error) {
        console.error(error);
    }
    if (r) {
        _Z.default.replace(r);
    } else {
        return t();
    }
}
