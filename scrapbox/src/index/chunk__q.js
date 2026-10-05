import { e } from "../chunks/chunk-FXCI2R73.js";
import { yq } from "./chunk_bq.js";
const _q = e(yq(), 1);
export async function vn(e) {
    if (typeof navigator.clipboard?.writeText === "function") {
        await navigator.clipboard.writeText(e);
    } else {
        _q.default(e);
    }
}
