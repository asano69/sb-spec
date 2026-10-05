import { $a, Oa, Ya, b } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-UCL6J5NE.js";
import { a as a_1, e as e_2 } from "../chunks/chunk-FXCI2R73.js";
import { X, ge } from "./chunk_ge.js";
import { _6 } from "./chunk__6.js";
export const xb = e_2(ge(), 1);
const Ar = e_2(b(), 1);
const nq = 5;
export function E6({ show, watchProjects }) {
    let [r, setR] = Ar.useState(false);
    let oRef = Ar.useRef();
    X(Ya.ProjectListFilter, ({ event })=>{
        if (event === "focus:head" && oRef.current) {
            oRef.current.focus();
            return;
        }
    });
    Ar.useEffect(()=>{
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
    let a = !r && nq < watchProjects.length;
    let l = watchProjects;
    let foldedProjects = [];
    if (a) {
        l = e(watchProjects.sort((g, v)=>{
            if (g.updated > v.updated) {
                return -1;
            }
            return 1;
        }));
        let f = Math.max(nq, watchProjects.filter((g)=>g.updated > Date.now() / 1000 - 3600 * 24 * 3).length);
        foldedProjects = l.splice(f);
    }
    let m = l.sort((f, g)=>{
        if (f.displayName.toLowerCase() < g.displayName.toLowerCase()) {
            return -1;
        }
        return 1;
    }).map((project, g)=>{
        if (g === 0) {
            return Ar.default.createElement(S6, {
                project,
                key: g,
                listHeadDomRef: oRef
            });
        }
        return Ar.default.createElement(x6, {
            project,
            key: g
        });
    });
    return Ar.default.createElement(Ar.default.Fragment, null, m, watchProjects.length < 1 && Ar.default.createElement(wde, null, "Your watchlist is currently empty"), Ar.default.createElement(xde, {
        foldedProjects,
        onClickExpandButton
    }));
}
const iq = a_1((e)=>{
    let t = e.updated > Ya.ProjectsLastAccessed.get()[e.id];
    let className = _6.default({
        updated: t
    });
    let href = Ya.Layout.get() === "stream" ? `/stream/${e.name}/` : `/${e.name}/`;
    return {
        className,
        href,
        onMouseUpDelete: a_1(()=>{
            if (confirm(`Are you sure you want to remove the project "${e.name}" from Watch List?`)) {
                Ya.ProjectsLastAccessed.remove(e.id);
                Ya.ProjectList.remove(e);
            }
        }, "onMouseUpDelete")
    };
}, "formatProject");
export var S6 = a_1(({ project, listHeadDomRef })=>{
    let { className, href, onMouseUpDelete } = iq(project);
    let onKeyDown = a_1((a)=>{
        if (a.keyCode === Oa.UP) {
            Ya.ProjectListFilter.focusInput();
        }
    }, "onKeyDown");
    return Ar.default.createElement("li", {
        key: project.name,
        className: "guest-project"
    }, Ar.default.createElement("a", {
        href,
        className,
        ref: listHeadDomRef,
        onKeyDown,
        rel: "external"
    }, Ar.default.createElement("span", {
        className: "project-display-name"
    }, project.displayName)), Ar.default.createElement("button", {
        className: "button-delete",
        onMouseUp: onMouseUpDelete,
        title: "Remove from Watch List"
    }, Ar.default.createElement("span", {
        className: "kamon kamon-trash"
    })));
}, "WatchProjectListHeadItem");
export var x6 = a_1(({ project })=>{
    let { className, href, onMouseUpDelete } = iq(project);
    return Ar.default.createElement("li", {
        key: project.name,
        className: "guest-project"
    }, Ar.default.createElement("a", {
        href,
        className
    }, Ar.default.createElement("span", {
        className: "project-display-name"
    }, project.displayName)), Ar.default.createElement("button", {
        className: "button-delete",
        onMouseUp: onMouseUpDelete,
        title: "Remove from Watch List"
    }, Ar.default.createElement("span", {
        className: "kamon kamon-trash"
    })));
}, "WatchProjectListItem");
var xde = a_1(({ foldedProjects, onClickExpandButton })=>{
    if (foldedProjects.length < 1) {
        return null;
    }
    let r = !!foldedProjects.find((n)=>n.updated > Ya.ProjectsLastAccessed.get()[n.id]);
    return Ar.default.createElement("li", {
        key: "expand-projects",
        className: "dropdown-menu-button list-menu-button"
    }, Ar.default.createElement($a, {
        "data-keep-open": true,
        role: "menuitem",
        className: _6.default({
            updated: r
        }),
        onClick: onClickExpandButton
    }, "more (", foldedProjects.length, " projects)"));
}, "ExpandButton");
var wde = a_1(({ children })=>Ar.default.createElement(Ar.default.Fragment, null, Ar.default.createElement("li", {
        className: "disabled"
    }, Ar.default.createElement("a", null, children))), "Placeholder");
