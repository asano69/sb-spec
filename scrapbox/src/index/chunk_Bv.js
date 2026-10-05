import { Ja, Ma as items, Ya, _, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { bn } from "./chunk_jo.js";
import { Jp, rg } from "./chunk_Rt.js";
const Bv = e(b(), 1);
export function KX({ projectName }) {
    if (Ya.PageList.searchBackend !== "elasticsearch") {
        return null;
    }
    let sort = Ya.PageList.getSearchPageSort(projectName);
    if (!items[sort]) {
        sort = Ja;
    }
    return Bv.default.createElement("div", {
        className: "page-sort-menu"
    }, Bv.default.createElement(bn, {
        className: "dropdown"
    }, Bv.default.createElement(Jp, null, _(items[sort])), Bv.default.createElement(rg, {
        onSelect: (sort)=>Ya.PageList.setSearchPageSort({
                projectName,
                sort
            }),
        sort,
        items
    })));
}
