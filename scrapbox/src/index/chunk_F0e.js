const F0e = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
const z0e = "[^\"'=<>`\\x00-\\x20]+";
const q0e = "'[^']*'";
const R0e = '"[^"]*"';
const $0e = `(?:${z0e}|${q0e}|${R0e})`;
const H0e = `(?:\\s+${F0e}(?:\\s*=\\s*${$0e})?)`;
const o$ = `<[A-Za-z][A-Za-z0-9\\-]*${H0e}*\\s*\\/?>`;
const s$ = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const j0e = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->";
const G0e = "<[?][\\s\\S]*?[?]>";
const W0e = "<![A-Za-z][^>]*>";
const V0e = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
export const a$ = new RegExp(`^(?:${o$}|${s$}|${j0e}|${G0e}|${W0e}|${V0e})`);
export const l$ = new RegExp(`^(?:${o$}|${s$})`);
const tfe = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
const rfe = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
export function N5(e, t) {
    let e_pos = e.pos;
    if (e.src.charCodeAt(e_pos) !== 60) {
        return false;
    }
    let e_pos_1 = e.pos;
    let e_posMax = e.posMax;
    while(true){
        if (++e_pos >= e_posMax) {
            return false;
        }
        let a = e.src.charCodeAt(e_pos);
        if (a === 60) {
            return false;
        }
        if (a === 62) {
            break;
        }
    }
    let s = e.src.slice(e_pos_1 + 1, e_pos);
    if (rfe.test(s)) {
        let a = e.md.normalizeLink(s);
        if (!e.md.validateLink(a)) {
            return false;
        }
        if (!t) {
            let l = e.push("link_open", "a", 1);
            l.attrs = [
                [
                    "href",
                    a
                ]
            ];
            l.markup = "autolink";
            l.info = "auto";
            let c = e.push("text", "", 0);
            c.content = e.md.normalizeLinkText(s);
            let m = e.push("link_close", "a", -1);
            m.markup = "autolink";
            m.info = "auto";
        }
        e.pos += s.length + 2;
        return true;
    }
    if (tfe.test(s)) {
        let a = e.md.normalizeLink(`mailto:${s}`);
        if (!e.md.validateLink(a)) {
            return false;
        }
        if (!t) {
            let l = e.push("link_open", "a", 1);
            l.attrs = [
                [
                    "href",
                    a
                ]
            ];
            l.markup = "autolink";
            l.info = "auto";
            let c = e.push("text", "", 0);
            c.content = e.md.normalizeLinkText(s);
            let m = e.push("link_close", "a", -1);
            m.markup = "autolink";
            m.info = "auto";
        }
        e.pos += s.length + 2;
        return true;
    }
    return false;
}
