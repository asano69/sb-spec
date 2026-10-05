import { Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_$z.js";
const qK = e(b(), 1);
export const SI = class SI extends mt {
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.subscribe(Ya.Selection);
    }
    onStoreChange() {
        let show = Ya.Selection.hasSelection();
        this.setState({
            show
        });
    }
    render() {
        if (this.state.show) {
            return qK.default.createElement("div", {
                id: "touch-layer",
                className: "touch-layer"
            });
        }
        return null;
    }
};
export const q1 = SI;
