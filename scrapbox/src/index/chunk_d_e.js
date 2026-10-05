import { Na, Ya, r } from "../chunks/chunk-3PYJHPBQ.js";
const d_e = r("src/client/js/routes/middlewares/restore-last-accessed-page.js");
export function vZ() {
    if ([
        "list",
        "page"
    ].includes(Ya.Layout.get())) {
        try {
            Na.set("lastPagePath", location.pathname);
            d_e("saved", location.pathname);
        } catch (error) {
            console.error(error);
        }
    }
}
