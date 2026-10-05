let gZ;
export function hZ(e, t) {
    gZ = decodeURI(location.pathname + location.search);
    t();
}
export function bZ(e, t) {
    e.internalReferrer = gZ;
    t();
}
