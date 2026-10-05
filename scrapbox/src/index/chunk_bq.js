import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, c, e } from "../chunks/chunk-FXCI2R73.js";
const bq = c((R6)=>{
    "use strict";
    Object.defineProperty(R6, "__esModule", {
        value: true
    });
    R6.default = Ade;
    function Ade(e, t) {
        if (typeof e === "string" && !(!window || !document)) {
            const r = document.createElement("textarea");
            document.body.appendChild(r);
            r.setAttribute("readonly", true);
            r.style.position = "absolute";
            r.style.left = "-1000px";
            r.style.top = `${window.scrollY || document.body.scrollTop}px`;
            r.value = e;
            r.focus();
            r.setSelectionRange(0, e.length);
            const n = typeof document.execCommand === "function" && document.execCommand("copy");
            document.body.removeChild(r);
            n || (typeof t === "function" ? t(e) : window.prompt("Copy", e));
            return n;
        }
    }
    a(Ade, "copy");
});
export const yq = c((h9e, vq)=>{
    var Ide = bq().default;
    vq.exports = Ide;
});
const Pde = [
    "<",
    ">"
];
const Ode = a((e)=>/\s/.test(e) || Pde.includes(e), "shouldEncodeChars");
export const kp = a((e)=>decodeURI(e).split("").map((t)=>{
        if (Ode(t)) {
            return encodeURI(t);
        }
        return t;
    }).join(""), "decodeURIForPlainText");
export const Rb = e(b(), 1);
