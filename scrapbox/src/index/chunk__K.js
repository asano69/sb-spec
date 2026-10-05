import { Ga, Ya, _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_$z.js";
const _K = e(b(), 1);
const tx = e(_a(), 1);
const EK = e(Ga(), 1);
export const dI = class dI extends mt {
    constructor(t){
        super(t);
        this.state = {
            widths: []
        };
        c(this, "applyColWidths");
        this.subscribe(Ya.TableBlock);
    }
    static get propTypes() {
        return {
            tableId: tx.default.string.isRequired,
            indent: tx.default.number.isRequired,
            isCursorLine: tx.default.bool.isRequired
        };
    }
    applyColWidths() {
        let { tableId } = this.props;
        let colWidths = Ya.TableBlock.getTable(tableId).colWidths;
        this.setState({
            widths: colWidths
        });
    }
    onStoreChange({ store, event }) {
        let { tableId } = this.props;
        switch(store){
            case Ya.TableBlock:
                {
                    if (event.tableId !== tableId) {
                        break;
                    }
                    this.applyColWidths();
                    if (event.forceUpdate) {
                        this.forceUpdate();
                    }
                    break;
                }
        }
    }
    shouldComponentUpdate(t, r) {
        let { indent, isCursorLine } = this.props;
        if (indent !== t.indent) {
            return true;
        }
        return !(isCursorLine || EK.default(this.state.widths, r.widths) || !isCursorLine && t.isCursorLine);
    }
    componentDidUpdate() {
        Ya.LineDOM.update();
    }
    render() {
        let { tableId } = this.props;
        let { widths } = this.state;
        if (!widths) {
            return null;
        }
        let n = [];
        for(let o = 1; o <= widths.length; o++){
            let width = widths[o];
            if (!width || width < 0) {
                continue;
            }
            let a = `.col-${o}[data-table-id='${tableId}'] { min-width: ${width}px; }`;
            n.push(a);
        }
        return _K.default.createElement("style", null, n.join(`
`));
    }
};
export const U1 = dI;
export const fI = e(b(), 1);
