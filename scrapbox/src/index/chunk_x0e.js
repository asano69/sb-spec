const x0e = /\r\n?|\n/g;
const w0e = /\0/g;
export function JN(e) {
    let t;
    t = e.src.replace(x0e, `
`);
    t = t.replace(w0e, "\uFFFD");
    e.src = t;
}
