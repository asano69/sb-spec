import { Ya, p, r, y } from "../chunks/chunk-3PYJHPBQ.js";
const __e = r("src/client/js/routes/stream.js");
export async function E_e(e) {
    let { projectName } = e.params;
    try {
        let [r, n] = await Promise.all([
            Ya.CurrentProject.fetch(projectName),
            Ya.Stream.fetch(projectName)
        ]);
        Ya.CurrentProject.set(r);
        Ya.Stream.set(n);
        Ya.Layout.set("stream");
    } catch (error) {
        if (p.isCancel(error)) {
            return __e("canceled");
        }
        Ya.Error.set(error);
        Ya.Layout.set("error-page");
        if (!y(error)) {
            throw error;
        }
    }
}
