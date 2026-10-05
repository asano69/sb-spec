import { b, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
export const fJ = a(async ()=>{
    let { data } = await x.get("/api/settings/personal-access-tokens");
    return data;
}, "list");
export const gJ = a(async (name)=>{
    let { data } = await x.post("/api/settings/personal-access-tokens", {
        name
    });
    return data.personalAccessToken;
}, "create");
const hJ = a(async (e)=>{
    await x.delete(`/api/settings/personal-access-tokens/${e}`);
}, "remove");
const bJ = e(b(), 1);
export function $8({ token, onDeleted }) {
    async function onClick() {
        if (confirm("Are you sure you want to delete this personal access token?")) {
            try {
                await hJ(token.id);
                onDeleted(token.id);
            } catch (error) {
                alert(error.response?.data?.message || "Can't connect to the servers. Please try again later.");
            }
        }
    }
    a(onClick, "onClick");
    return bJ.default.createElement("button", {
        className: "btn btn-sm btn-default btn-delete-personal-access-token",
        onClick
    }, "Delete");
}
