import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { db } from "./chunk_JB.js";
import { ge } from "./chunk_ge.js";
const wr = e(b(), 1);
const Dq = e(db(), 1);
const zb = e(ge(), 1);
const ame = 350;
let Fb = 0;
const lme = a(()=>{
    if (Fb === 0) {
        document.body.classList.add("modal-open");
    }
    Fb += 1;
}, "lockBodyScroll");
const ume = a(()=>{
    Fb = Math.max(0, Fb - 1);
    if (Fb === 0) {
        document.body.classList.remove("modal-open");
    }
}, "unlockBodyScroll");
const BqContext = wr.createContext(null);
export function cme({ show, onHide, className, children, ...rest }) {
    let sRef = wr.useRef(null);
    let aRef = wr.useRef(null);
    let lRef = wr.useRef(false);
    let cRef = wr.useRef(onHide);
    cRef.current = onHide;
    let mRef = wr.useRef(false);
    let f = a(()=>{
        if (!mRef.current) {
            mRef.current = true;
            lme();
        }
    }, "acquireLock");
    let g = a(()=>{
        if (mRef.current) {
            mRef.current = false;
            ume();
        }
    }, "releaseLock");
    let [v, setV] = wr.useState(show);
    let [y, setY] = wr.useState(false);
    wr.useEffect(()=>{
        if (show) {
            setV(true);
        }
    }, [
        show
    ]);
    wr.useLayoutEffect(()=>{
        let sRef_current = sRef.current;
        if (!v || !sRef_current) {
            return;
        }
        if (show) {
            f();
            if (!sRef_current.open) {
                sRef_current.showModal();
            }
            sRef_current.offsetHeight;
            setY(true);
            return;
        }
        setY(false);
        let aRef_current = aRef.current;
        let P = false;
        let U = a(()=>{
            if (!P) {
                P = true;
                clearTimeout(H);
                aRef_current?.removeEventListener("transitionend", B);
                if (sRef_current.open) {
                    sRef_current.close();
                }
                g();
                setV(false);
            }
        }, "finish");
        let B = a((j)=>{
            if (j.target === aRef_current) {
                U();
            }
        }, "onTransitionEnd");
        let H = setTimeout(U, ame);
        aRef_current?.addEventListener("transitionend", B);
        return ()=>{
            P = true;
            clearTimeout(H);
            aRef_current?.removeEventListener("transitionend", B);
        };
    }, [
        show,
        v
    ]);
    wr.useLayoutEffect(()=>{
        let sRef_current = sRef.current;
        if (!sRef_current) {
            return;
        }
        let C = a((P)=>{
            P.preventDefault();
            cRef.current();
        }, "onCancel");
        sRef_current.addEventListener("cancel", C);
        return ()=>sRef_current.removeEventListener("cancel", C);
    }, [
        v
    ]);
    wr.useEffect(()=>g, []);
    if (!v) {
        return null;
    }
    let onPointerDown = a((S)=>{
        lRef.current = S.target === sRef.current;
    }, "onDialogPointerDown");
    let onClick = a((S)=>{
        if (S.target === sRef.current && lRef.current) {
            onHide();
        }
    }, "onDialogClick");
    return Dq.createPortal(wr.default.createElement("dialog", {
        ref: sRef,
        className: zb.default("modal", "fade", {
            in: y
        }, className),
        ...rest,
        onPointerDown,
        onClick
    }, wr.default.createElement(BqContext.Provider, {
        value: onHide
    }, wr.default.createElement("div", {
        className: "modal-dialog",
        ref: aRef
    }, wr.default.createElement("div", {
        className: "modal-content"
    }, children)))), document.body);
}
export function pme({ closeButton, className, children, ...rest }) {
    let o = wr.useContext(BqContext);
    return wr.default.createElement("div", {
        className: zb.default("modal-header", className),
        ...rest
    }, closeButton && wr.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: o ?? undefined
    }, wr.default.createElement("span", {
        "aria-hidden": "true"
    }, "×"), wr.default.createElement("span", {
        className: "sr-only"
    }, "Close")), children);
}
export function dme({ className, children, ...rest }) {
    return wr.default.createElement("h4", {
        className: zb.default("modal-title", className),
        ...rest
    }, children);
}
export function mme({ className, children, ...rest }) {
    return wr.default.createElement("div", {
        className: zb.default("modal-body", className),
        ...rest
    }, children);
}
export const Dt = e(b(), 1);
