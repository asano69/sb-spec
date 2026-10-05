import { _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { A, c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { db } from "./chunk_JB.js";
import { ge } from "./chunk_ge.js";
import { t6 } from "./chunk_j2.js";
export const Zu = e(b(), 1);
export const Wz = e(db(), 1);
export const G2 = e(_a(), 1);
export const r6 = e(ge(), 1);
const hb = e(b(), 1);
const Gz = e(ge(), 1);
export const e6 = class e6 extends hb.Component {
    constructor(t){
        super(t);
        this.container = null;
        c(this, "forceScrollToAvoidReachingUpperOrLowerEnds");
    }
    componentDidMount() {
        this.forceScrollToAvoidReachingUpperOrLowerEnds();
    }
    forceScrollToAvoidReachingUpperOrLowerEnds() {
        let container = this.container;
        if (!container) {
            return;
        }
        let r = Math.floor(container.scrollHeight - container.offsetHeight);
        if (container.scrollTop === 0) {
            container.scrollTo({
                top: 1
            });
        } else if (container.scrollTop >= r && container.scrollTop <= r + 1) {
            container.scrollTo({
                top: r - 1
            });
        }
    }
    render() {
        let className = Gz.default("touch-scrollable-container", this.props.className);
        let r = this.props.children || hb.default.createElement("div", {
            className: "content"
        });
        return hb.default.createElement("div", {
            ref: (n)=>{
                this.container = n;
            },
            className,
            onScroll: this.forceScrollToAvoidReachingUpperOrLowerEnds,
            ...A(this.props, [
                "className",
                "children"
            ])
        }, r);
    }
};
export const ff = e6;
export const bb = t6;
