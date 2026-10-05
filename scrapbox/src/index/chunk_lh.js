import { nt } from "./chunk_nt.js";
export const lh = nt;
export function m3() {
    return "history" in lh && !!lh.history;
}
export function Tle() {
    if (!("fetch" in lh)) {
        return false;
    }
    try {
        new Headers;
        new Request("data:,");
        new Response;
        return true;
    } catch  {
        return false;
    }
}
