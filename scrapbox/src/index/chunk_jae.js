import { Kl } from "./chunk_Id.js";
const jae = 60 * 1000;
export function Gae(e, t = Kl()) {
    let r = parseInt(`${e}`, 10);
    if (!isNaN(r)) {
        return r * 1000;
    }
    let n = Date.parse(`${e}`);
    if (isNaN(n)) {
        return jae;
    }
    return n - t;
}
