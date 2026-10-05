import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const uC = e(b(), 1);
export function EH({ show }) {
    if (show) {
        return uC.default.createElement("div", {
            className: "overlay-box"
        }, "Uploading Image ", uC.default.createElement("i", {
            className: "fa fa-spinner"
        }));
    }
    return null;
}
