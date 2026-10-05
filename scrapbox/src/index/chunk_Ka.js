import { J, L, X, Ya, _, b } from "../chunks/chunk-3PYJHPBQ.js";
import { n } from "../chunks/chunk-UCL6J5NE.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { Nu } from "./chunk_zK.js";
import { U1 } from "./chunk__K.js";
const Ka = e(b(), 1);
const SK = "synonyms";
export function mI({ tableId, title, text, indent, isCursorLine }) {
    let { setCharIndex, emptyCharIndex } = Nu(isCursorLine);
    let l = Ya.Line.lines.getTitle();
    let c = title === SK && J(l) === "settings";
    let m = a(()=>{
        let v = isCursorLine ? text.replace(/^\s+/, "") : title;
        let href = `/api/table/${Ya.CurrentProject.get().name}/${L(l)}/${encodeURIComponent(title)}.csv`;
        return Ka.default.createElement("span", {
            className: "table-block-start"
        }, !isCursorLine && emptyCharIndex(6), Ka.default.createElement("a", {
            href,
            target: "_blank",
            rel: "noreferrer"
        }, setCharIndex(v)), c && Ka.default.createElement("span", {
            className: "kamon kamon-link-on synonyms-dictionary-mark",
            title: _({
                ja: "類義語辞書",
                en: "synonyms dictionary"
            })
        }));
    }, "renderTableStart");
    indent -= 1;
    let f = X(indent);
    return Ka.default.createElement(Ka.default.Fragment, null, Ka.default.createElement(U1, {
        key: tableId,
        tableId,
        isCursorLine,
        indent
    }), Ka.default.createElement("span", {
        className: "table-block"
    }, a(()=>{
        let v = setCharIndex(n(Array(indent), Ka.default.createElement("span", {
            className: "pad"
        }, "	")));
        return Ka.default.createElement("span", {
            className: "indent-mark",
            style: {
                width: f
            }
        }, v, indent > 0 && Ka.default.createElement("span", {
            className: "start dot"
        }));
    }, "renderIndentMark")(), Ka.default.createElement("span", {
        key: "indent",
        className: "indent",
        style: {
            marginLeft: f
        }
    }, m())));
}
