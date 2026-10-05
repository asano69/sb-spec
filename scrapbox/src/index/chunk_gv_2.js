import { Za, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { $8 } from "./chunk_fJ.js";
export const gv = e(b(), 1);
const tl = e(b(), 1);
const yJ = e(Za(), 1);
const vJ = a((e)=>yJ.default.unix(e).format("YYYY-MM-DD HH:mm"), "formatTimestamp");
export function H8({ token, onDeleted }) {
    return tl.default.createElement("div", {
        className: "account-list-item"
    }, tl.default.createElement("div", {
        className: "account-info"
    }, tl.default.createElement("div", {
        className: "account-name"
    }, token.name), tl.default.createElement("code", null, token.tokenPrefix, "…")), tl.default.createElement("div", {
        className: "account-created"
    }, tl.default.createElement("span", null, "Created at: "), tl.default.createElement("span", {
        className: "account-created-at"
    }, vJ(token.created)), token.lastUsedAt && tl.default.createElement("span", {
        className: "account-last-used-at"
    }, tl.default.createElement("span", null, " / Last used at: "), vJ(token.lastUsedAt))), tl.default.createElement("div", {
        className: "actions"
    }, tl.default.createElement($8, {
        token,
        onDeleted
    })));
}
