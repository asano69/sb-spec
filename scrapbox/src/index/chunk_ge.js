import { A, b, o } from "../chunks/chunk-3PYJHPBQ.js";
import { a, c, e } from "../chunks/chunk-FXCI2R73.js";
export const ge = c((SCe, F2)=>{
    (()=>{
        "use strict";
        const hasOwnProperty = {}.hasOwnProperty;
        function t(...args) {
            let o = "";
            for (const a of args){
                if (a) {
                    o = n(o, r(a));
                }
            }
            return o;
        }
        a(t, "classNames");
        function r(o) {
            if (typeof o === "string" || typeof o === "number") {
                return o;
            }
            if (typeof o !== "object") {
                return "";
            }
            if (Array.isArray(o)) {
                return t(...o);
            }
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                return o.toString();
            }
            let s = "";
            for(const a in o){
                if (hasOwnProperty.call(o, a) && o[a]) {
                    s = n(s, a);
                }
            }
            return s;
        }
        a(r, "parseValue");
        function n(o, s) {
            if (s) {
                if (o) {
                    return `${o} ${s}`;
                }
                return o + s;
            }
            return o;
        }
        a(n, "appendClass");
        if (typeof F2 !== "undefined" && F2.exports) {
            t.default = t;
            F2.exports = t;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
            define("classnames", [], ()=>t);
        } else {
            window.classNames = t;
        }
    })();
});
const z2 = e(b(), 1);
export const X = a((e, t)=>{
    let rRef = z2.useRef(t);
    rRef.current = t;
    z2.useEffect(()=>{
        if (!(e instanceof o)) {
            throw new Error('"store" is not instance of BaseStore');
        }
        if (typeof t !== "function") {
            throw new Error('"onStoreChange" must be a function');
        }
        let n = a((...o)=>rRef.current(...o), "proxyOnStoreChange");
        e.addChangeListener(n);
        return ()=>e.removeChangeListener(n);
    }, []);
}, "useStore");
export const Qu = e(b(), 1);
export const l6 = e(A(), 1);
export const K2 = e(ge(), 1);
export const Vz = e(A(), 1);
