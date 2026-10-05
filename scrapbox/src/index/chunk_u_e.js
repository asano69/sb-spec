import { r } from "../chunks/chunk-3PYJHPBQ.js";
export const u_e = r("src/client/js/routes/middlewares/query.js");
let dZ = 0;
export function mZ(e, t) {
    dZ += 1;
    e.count = dZ;
    return t();
}
