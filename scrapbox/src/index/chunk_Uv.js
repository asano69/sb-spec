import { Ya, b, ca } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Uv = e(b(), 1);
export function _9({ disabled, projectName, searchQuery }) {
    let { targetCategories } = Ya.FileSearch;
    let onChange = a((s)=>{
        let { value } = s.target;
        Ya.FileSearch.toggleTargetCategory({
            name: value,
            projectName,
            searchQuery
        });
    }, "onChange");
    return Uv.default.createElement("div", {
        className: "search-options file-search-options"
    }, ca.map((s)=>{
        let checked = targetCategories.includes(s);
        return Uv.default.createElement("div", {
            className: "checkbox",
            key: s
        }, Uv.default.createElement("label", null, Uv.default.createElement("input", {
            type: "checkbox",
            value: s,
            checked,
            onChange,
            disabled
        }), s));
    }));
}
