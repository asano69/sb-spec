const Oae = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext"
];
export function Lae(e) {
    return Object.keys(e).some((t)=>Oae.includes(t));
}
