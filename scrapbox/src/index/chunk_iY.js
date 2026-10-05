import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { m } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { M0 } from "./chunk_jB_2.js";
const iY = e(b(), 1);
const Nve = a((e)=>new RegExp(`(${e.map(M0).map(m).join("|")})`, "i"), "makeHighlightRegExp");
export const ux = a((e)=>{
    let t = Array.isArray(e) ? Nve(e) : undefined;
    if (t) {
        return (r)=>M0(r).split(t).map((n, o)=>{
                if (o % 2 === 0) {
                    return n;
                }
                return iY.default.createElement("strong", {
                    className: "search-matched",
                    key: o
                }, n);
            });
    }
}, "createWordHighlighter");
