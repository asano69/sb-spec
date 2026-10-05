import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const fN = e(b(), 1);
export const cR = a(()=>fN.default.createElement("div", {
        className: "history-back-button",
        onClick: a(()=>{
            if (history.length > 0) {
                history.back();
            }
        }, "onClick")
    }, fN.default.createElement("span", {
        className: "kamon kamon-direction-left"
    })), "HistoryBackButton");
