const JR = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const N0e = /\((c|tm|r)\)/i;
const C0e = /\((c|tm|r)\)/ig;
const A0e = {
    c: "©",
    r: "®",
    tm: "™"
};
export function I0e(e, t) {
    return A0e[t.toLowerCase()];
}
export function P0e(e) {
    let t = 0;
    for(let r = e.length - 1; r >= 0; r--){
        let n = e[r];
        if (n.type === "text" && !t) {
            n.content = n.content.replace(C0e, I0e);
        }
        n.type === "link_open" && n.info === "auto" && t--;
        n.type === "link_close" && n.info === "auto" && t++;
    }
}
export function O0e(e) {
    let t = 0;
    for(let r = e.length - 1; r >= 0; r--){
        let n = e[r];
        if (n.type === "text" && !t && JR.test(n.content)) {
            n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
        }
        n.type === "link_open" && n.info === "auto" && t--;
        n.type === "link_close" && n.info === "auto" && t++;
    }
}
export function e5(e) {
    let t;
    if (e.md.options.typographer) {
        for(t = e.tokens.length - 1; t >= 0; t--){
            e.tokens[t].type === "inline" && (N0e.test(e.tokens[t].content) && P0e(e.tokens[t].children), JR.test(e.tokens[t].content) && O0e(e.tokens[t].children));
        }
    }
}
