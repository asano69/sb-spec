import { Ya, _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
import { mt } from "./chunk_$z.js";
const LV = e(b(), 1);
const MV = e(_a(), 1);
export const DA = class DA extends mt {
    static get propTypes() {
        return {
            url: MV.default.string.isRequired
        };
    }
    constructor(t){
        super(t);
        this.subscribe(Ya.Layout);
        c(this, "onMouseDown");
    }
    onStoreChange() {
        if (this.audio && Ya.Layout.get() !== "page") {
            this.audio.pause();
        }
    }
    onMouseDown(t) {
        t.stopPropagation();
    }
    render() {
        let { url } = this.props;
        return LV.default.createElement("audio", {
            ref: (r)=>{
                this.audio = r;
            },
            className: "audio-player",
            controls: true,
            controlsList: "nodownload",
            preload: "none",
            onMouseDown: this.onMouseDown,
            src: url
        });
    }
};
export const S1 = e(b(), 1);
export const BV = e(ge(), 1);
