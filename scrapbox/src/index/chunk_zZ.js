import { Ya, ta } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FXCI2R73.js";
const zZ = a(()=>document.getElementById("favicon"), "findFaviconTag");
const F_e = zZ().href;
export function z_e() {
    let e = ta(Ya.CurrentProject.get().image);
    let t = zZ();
    if (t) {
        t.href = e || F_e;
    }
}
