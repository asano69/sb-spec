import { Ya, b, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { zA } from "./chunk_FA.js";
import { RA } from "./chunk_qA.js";
const hc = e(b(), 1);
const UV = new Map;
export function Nn({ fileId, isCursorLine }) {
    let [r, setR] = hc.useState(null);
    hc.useEffect(()=>{
        if (fileId) {
            a(async ()=>{
                try {
                    let a = Ya.CurrentProject.get().id;
                    let l = UV.get(`${a}-${fileId}`);
                    if (l) {
                        setR(l);
                        return;
                    }
                    let c = await x.get(`/api/gcs/${a}/${fileId}/permission`);
                    setR(c.data);
                    UV.set(`${a}-${fileId}`, c.data);
                } catch (error) {
                    console.error(error);
                    setR(null);
                }
            }, "fetchPermission")();
        }
    }, [
        fileId
    ]);
    let o = {
        fileId,
        isCursorLine,
        permission: r
    };
    return hc.default.createElement(hc.default.Fragment, null, r?.deletable && hc.default.createElement(RA, {
        ...o
    }), r?.duplicatable && hc.default.createElement(zA, {
        ...o
    }));
}
