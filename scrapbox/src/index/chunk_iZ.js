import { Fa, ba } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const iZ = /^assets-\d{8}-\d{6}$/;
export async function oZ() {
    return (await caches.keys()).find((e)=>iZ.test(e));
}
export function sZ() {
    let e = document.getElementsByTagName("html")[0].getAttribute("data-assets-version");
    if (!iZ.test(e)) {
        throw new Error('Assets version "${version}" is invalid.');
    }
    return e;
}
export const uZ = e(Fa(), 1);
export const k9 = e(ba(), 1);
