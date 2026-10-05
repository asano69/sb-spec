import { nt } from "./chunk_nt.js";
import { S0 } from "./chunk_E0.js";
import { Kl } from "./chunk_Id.js";
const xM = 1000;
export function Yl() {
    return Kl() / xM;
}
export function Rse() {
    let { performance } = nt;
    if (!performance?.now || !performance.timeOrigin) {
        return Yl;
    }
    let performance_timeOrigin = performance.timeOrigin;
    return ()=>(performance_timeOrigin + S0(()=>performance.now())) / xM;
}
