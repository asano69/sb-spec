import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { aY } from "./chunk_ki.js";
const lY = /^([^\d]{3,})\s*([\d\-./()<>{}（）月火水木金土日年春夏秋冬]+|\d+ - [a-zA-Z])$/;
const Bve = /^対応\sby\s[^\s]+.*\d+\/\d+\/\d+/;
export function uY(e) {
    if (lY.test(e)) {
        let [, stackName] = e.match(lY);
        return {
            stackName,
            stackPreviewSize: 3
        };
    }
    let t = Ya.CurrentProject.get();
    if (t?.additionalPlans.kcs && Bve.test(e)) {
        return {
            stackName: aY(t).callLog,
            stackPreviewSize: 0
        };
    }
    return {
        stackName: null,
        stackPreviewSize: 3
    };
}
export const Et = e(b(), 1);
