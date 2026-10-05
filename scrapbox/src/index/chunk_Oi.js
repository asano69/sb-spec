import { Fa, r } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const Oi = e(Fa(), 1);
const b_e = r("src/client/js/lib/scroll.js");
const xZ = a((e)=>{
    let t = e ? "visible" : "hidden";
    let r = document.querySelector(".page-list");
    let n = document.querySelector(".col-page");
    if (r) {
        r.style.visibility = t;
    }
    if (n) {
        n.style.visibility = t;
    }
}, "togglePageVisibility");
const wZ = new Map;
export function TZ(e, t) {
    wZ.set(e, t);
}
export function Hx(e) {
    let t = wZ.get(e) || 0;
    b_e("restoreScrollPosition", e, t);
    if (window.pageYOffset !== t) {
        xZ(false);
        window.requestAnimationFrame(()=>{
            window.scrollTo(0, t);
            window.requestAnimationFrame(()=>{
                xZ(true);
            });
        });
    }
}
