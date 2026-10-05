import { Nse, dM as isEnabled, kse, pw } from "./chunk_Xe.js";
export function Cse(...e) {
    pw("log", ...e);
}
export function Ase(...e) {
    pw("warn", ...e);
}
export function Ise(...e) {
    pw("error", ...e);
}
export const Fe = {
    enable: kse,
    disable: Nse,
    isEnabled,
    log: Cse,
    warn: Ase,
    error: Ise
};
