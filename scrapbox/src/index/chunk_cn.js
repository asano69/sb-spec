import { A, Fa, b, ba, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
import { vn } from "./chunk__q.js";
export const cn = e(b(), 1);
export const jA = e(A(), 1);
export const $V = e(ge(), 1);
const w1 = e(b(), 1);
export function HA({ fileId, hideModal }) {
    let [r, setR] = w1.useState(false);
    return w1.default.createElement("button", {
        className: "btn btn-primary get-text-button",
        disabled: r,
        onClick: a(async (s)=>{
            s.preventDefault();
            s.stopPropagation();
            setR(true);
            let a;
            try {
                a = await x.get(`/api/gcs/${fileId}/info`);
            } catch (error) {
                console.error(error);
                let c = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
                alert(c);
            }
            setR(false);
            if (a.data?.text?.length > 0) {
                try {
                    await vn(a.data?.text);
                    hideModal();
                } catch (error) {
                    console.error(error);
                    alert(error.message);
                }
            } else {
                alert("No text was found.");
            }
        }, "onClick")
    }, "Get text ", r ? w1.default.createElement("i", {
        className: "fa fa-spinner"
    }) : null);
}
export const XS = e(b(), 1);
export const XV = e(A(), 1);
export const N1 = e(b(), 1);
export const VV = e(ba(), 1);
export const As = e(b(), 1);
export const YV = e(ba(), 1);
export const Or = e(b(), 1);
export const Os = e(b(), 1);
export const RY = e(Fa(), 1);
export const $Y = e(ge(), 1);
