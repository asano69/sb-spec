import { Ya } from "../chunks/chunk-3PYJHPBQ.js";
const qZ = "data-project-theme";
export function RZ() {
    let e = Ya.Layout.get();
    let t = Ya.CurrentProject.get();
    if (t?.theme && ([
        "page",
        "list",
        "stream"
    ].includes(e) || e.startsWith("project-settings"))) {
        document.documentElement.setAttribute(qZ, t.theme);
        return;
    }
    document.documentElement.removeAttribute(qZ);
}
