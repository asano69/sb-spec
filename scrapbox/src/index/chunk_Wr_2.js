import { Y, Ya, Z, b } from "../chunks/chunk-3PYJHPBQ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_$z.js";
const Wr = e(b(), 1);
export const t9 = class t9 extends mt {
    constructor(t){
        super(t);
        c(this, "onSubmit", "onDismiss");
        this.subscribe(Ya.UserScript);
        this.state = {
            waitingForApproval: Ya.UserScript.waitingForApproval,
            dismissed: false
        };
    }
    onStoreChange({ store }) {
        if (store === Ya.UserScript) {
            this.setState({
                waitingForApproval: Ya.UserScript.waitingForApproval
            });
        }
    }
    onSubmit(t) {
        t.preventDefault();
        Ya.UserScript.renderUserScriptTag();
    }
    onDismiss() {
        this.setState({
            dismissed: true
        });
    }
    render() {
        if (this.state.dismissed || !Ya.UserScript.shouldLoadScript) {
            return null;
        }
        let { waitingForApproval } = this.state;
        if (!waitingForApproval) {
            return null;
        }
        let r = Ya.CurrentUser.get();
        let n = Ya.CurrentProject.get();
        return Wr.default.createElement("div", {
            className: "container"
        }, Wr.default.createElement("div", {
            className: "alert alert-info alert-dismissible userscript-alert text-center",
            role: "alert"
        }, Wr.default.createElement("form", {
            onSubmit: this.onSubmit
        }, Wr.default.createElement("button", {
            type: "button",
            className: "close",
            onClick: this.onDismiss,
            "aria-label": "Close"
        }, Wr.default.createElement("span", {
            "aria-hidden": "true"
        }, "×")), Wr.default.createElement("span", null, waitingForApproval == "initial" ? Wr.default.createElement(Wr.default.Fragment, null, Wr.default.createElement(Y, null, "UserScriptが設定されました。"), Wr.default.createElement(Z, null, "You have UserScript set in this project. ")) : Wr.default.createElement(Wr.default.Fragment, null, Wr.default.createElement(Y, null, "UserScriptが更新されました。"), Wr.default.createElement(Z, null, "Your UserScript has been updated. ")), Wr.default.createElement(Y, null, Wr.default.createElement("a", {
            href: `/${n.name}/${r.name}`
        }, "自分のページ"), "を確認してください。"), Wr.default.createElement(Z, null, "Please check", " ", Wr.default.createElement("a", {
            href: `/${n.name}/${r.name}`
        }, "your page"), ".")), Wr.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary"
        }, waitingForApproval === "initial" ? Wr.default.createElement(Wr.default.Fragment, null, Wr.default.createElement(Y, null, "新しいUserScriptを読み込む"), Wr.default.createElement(Z, null, "Load new UserScript")) : Wr.default.createElement(Wr.default.Fragment, null, Wr.default.createElement(Y, null, "UserScriptを読み込む"), Wr.default.createElement(Z, null, "Load UserScript"))))));
    }
};
