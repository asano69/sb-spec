import { $a, A, Oa, Ya, ab, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-UCL6J5NE.js";
import { a as a_1, e as e_2 } from "../chunks/chunk-FXCI2R73.js";
import { X } from "./chunk_ge.js";
import { xb } from "./chunk_xb.js";
const Rr = e_2(b(), 1);
const h6 = e_2(A(), 1);
const eq = 10;
export function b6({ show, projects }) {
    let [r, setR] = Rr.useState(false);
    let oRef = Rr.useRef();
    X(Ya.ProjectListFilter, ({ event })=>{
        if (event === "focus:head" && oRef.current) {
            oRef.current.focus();
            return;
        }
    });
    Rr.useEffect(()=>{
        if (!show) {
            setR(false);
        }
    }, [
        show
    ]);
    let onClickExpandButton = a_1((f)=>{
        f.preventDefault();
        setR(true);
    }, "onClickExpandButton");
    if (!projects) {
        return null;
    }
    let a = !r && eq < projects.length;
    let l = projects;
    let foldedProjects = [];
    if (a) {
        l = e(projects.sort((f, g)=>{
            if (f.updated > g.updated) {
                return -1;
            }
            return 1;
        }));
        foldedProjects = l.splice(eq);
    }
    let m = l.sort((f, g)=>{
        if (f.displayName.toLowerCase() < g.displayName.toLowerCase()) {
            return -1;
        }
        return 1;
    }).map((project, g)=>{
        if (g === 0) {
            return Rr.default.createElement(v6, {
                project,
                key: g,
                listHeadDomRef: oRef
            });
        }
        return Rr.default.createElement(y6, {
            project,
            key: g
        });
    });
    return Rr.default.createElement(Rr.default.Fragment, null, m, Rr.default.createElement(Sde, {
        foldedProjects,
        onClickExpandButton
    }));
}
const tq = a_1((e)=>{
    let name = (Ya.CurrentProject.get() || {}).name;
    let selected = e.name === name;
    let n = e.updated > Ya.ProjectsLastAccessed.get()[e.id];
    let className = xb.default({
        selected,
        updated: n
    });
    let href = Ya.Layout.get() === "stream" ? `/stream/${e.name}/` : `/${e.name}/`;
    let planNotSelected = !e.plan && !e.publicVisible;
    return {
        className,
        href,
        planNotSelected
    };
}, "formatProject");
export var v6 = a_1(({ project, listHeadDomRef })=>{
    let { href, className, planNotSelected } = tq(project);
    let onKeyDown = a_1((a)=>{
        if (a.keyCode === Oa.UP) {
            Ya.ProjectListFilter.focusInput();
        }
    }, "onKeyDown");
    return Rr.default.createElement("li", {
        key: project.name
    }, Rr.default.createElement("a", {
        href,
        className: xb.default("project-list-item", className),
        ref: listHeadDomRef,
        onKeyDown,
        rel: "external"
    }, Rr.default.createElement("span", {
        className: "project-display-name"
    }, project.displayName), Rr.default.createElement(h6.When, {
        enable_billing: true
    }, planNotSelected && Rr.default.createElement("span", null, " (Select purpose)")), !project.publicVisible && Rr.default.createElement(rq, null)));
}, "ProjectListHeadItem");
export var y6 = a_1(({ project })=>{
    let { href, className, planNotSelected } = tq(project);
    return Rr.default.createElement("li", {
        key: project.name
    }, Rr.default.createElement("a", {
        href,
        className: xb.default("project-list-item", className),
        rel: "external"
    }, Rr.default.createElement("span", {
        className: "project-display-name"
    }, project.displayName), Rr.default.createElement(h6.When, {
        enable_billing: true
    }, planNotSelected && Rr.default.createElement("span", null, " (Select purpose)")), !project.publicVisible && Rr.default.createElement(rq, null)));
}, "ProjectListItem");
var rq = a_1(()=>Rr.default.createElement("span", {
        className: "private-icon"
    }, Rr.default.createElement("span", {
        className: "kamon kamon-locked"
    })), "PrivateIcon");
var Sde = a_1(({ foldedProjects, onClickExpandButton })=>{
    let r = !!foldedProjects.find((s)=>s.updated > Ya.ProjectsLastAccessed.get()[s.id]);
    let n = foldedProjects.filter((s)=>s.plan === "business");
    let o = n.length > 0 ? `more (${foldedProjects.length} ${ab("project", foldedProjects.length)}, ${n.length} ${ab("business", n.length)})` : `more (${foldedProjects.length} ${ab("project", foldedProjects.length)})`;
    if (foldedProjects.length < 1) {
        return null;
    }
    return Rr.default.createElement("li", {
        key: "expand-projects",
        className: "dropdown-menu-button list-menu-button"
    }, Rr.default.createElement($a, {
        "data-keep-open": true,
        role: "menuitem",
        className: xb.default({
            updated: r
        }),
        onClick: onClickExpandButton
    }, o));
}, "ExpandButton");
