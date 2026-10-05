import { Ya, b, ba, r, z } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const x7 = a((e)=>e.replace(/[\r\n\u2028\u2029]/g, ""), "removeLineFeed");
export const zJ = a((e)=>e.replace(/[\b]/gm, ""), "removeTofu");
const Fye = z() ? `${location.protocol}//${location.host}` : process.env.APP_URL;
const zye = new RegExp(`${Fye}/files/([a-z0-9]{24})(?:|\\.[a-zA-Z0-9]+)`);
const w7 = a((e)=>zye.test(e), "shouldCheckFileUrls");
export const qJ = r("src/client/js/components/project-settings-page/project-page-data-form/import-pages.jsx");
export const qye = {
    pages: [
        {
            title: "page1title",
            lines: [
                "page1title",
                "line2",
                "line3"
            ]
        },
        {
            title: "page2title",
            lines: [
                "page2title"
            ]
        }
    ]
};
export const T7 = a((e)=>{
    let duplicatePages = [];
    let newPages = [];
    let deleteFlagPages = [];
    for (let o of e){
        if (o.delete) {
            deleteFlagPages.push(o);
        } else if (Ya.QuickSearch.find(o.title)?.exists) {
            duplicatePages.push(o);
        } else {
            newPages.push(o);
        }
    }
    return {
        duplicatePages,
        newPages,
        deleteFlagPages
    };
}, "classifyPages");
export const Rye = a((e)=>e.some((t)=>{
        if (t.delete) {
            return false;
        }
        return t.lines.some((r)=>{
            switch(typeof r){
                case "string":
                    return w7(r);
                case "object":
                    return w7(r.text);
                default:
                    return false;
            }
        });
    }), "checkIncludeFile");
export const ha = e(b(), 1);
export const HJ = e(ba(), 1);
export const jJ = e(ge(), 1);
