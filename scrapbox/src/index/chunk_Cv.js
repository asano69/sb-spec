import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const Cv = e(b(), 1);
export const uX = a(()=>{
    let e = `${location.protocol}//${location.host}`;
    let t = Ya.CurrentProject.get();
    let r = Ya.CurrentUser.get();
    let n = `${e}/api/pages/${t.name}/${r.name}/text`;
    return Cv.default.createElement("div", null, Cv.default.createElement("h4", null, "Usage"), Cv.default.createElement("pre", null, Cv.default.createElement("code", null, "curl ", n, " -H 'x-service-account-access-key: your_access_key'")));
}, "Usage");
export const Gr = e(b(), 1);
export const pX = e(ge(), 1);
