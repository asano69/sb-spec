import { Fa, Ya } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const A9 = e(Fa(), 1);
export function vg(e, t) {
    let r = Ya.CurrentUser.get();
    if (!r || !Ya.CurrentUser.hasRemoteData()) {
        return t();
    }
    if (r.requireProfileSetup) {
        if (e.path !== "/") {
            A9.default(`/setup-profile?redirect=${e.path}`);
        } else {
            A9.default("/setup-profile");
        }
        return;
    }
    return t();
}
