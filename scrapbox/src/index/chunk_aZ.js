import { Ya, r } from "../chunks/chunk-3PYJHPBQ.js";
import { oZ, sZ } from "./chunk_iZ.js";
const aZ = r("src/client/js/routes/middlewares/assets-cache.js");
export async function lZ(e, t) {
    if (e.isNavigationByBrowser || Ya.Sync.hasUnpushedOrPushingCommit || typeof window.caches !== "object") {
        return t();
    }
    let documentVersion;
    let cacheVersion;
    try {
        documentVersion = sZ();
        cacheVersion = await oZ();
    } catch (error) {
        console.error(error);
        return t();
    }
    aZ(JSON.stringify({
        cacheVersion,
        documentVersion
    }));
    if (typeof cacheVersion === "string" && typeof documentVersion === "string" && cacheVersion !== documentVersion) {
        aZ("New assets-cache available. Reload browser.");
        location.href = e.path;
        return;
    }
    return t();
}
