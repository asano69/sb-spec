import { Fa, Ya, ea, p, r, t as source, y } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FTBZRL4G.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
import { Hx } from "./chunk_Oi.js";
const MZ = e(a(), 1);
const P9 = e(Fa(), 1);
const DZ = e(ea(), 1);
const OZ = r("src/client/js/routes/page-list.js");
export async function LZ(e) {
    let { projectName } = e.params;
    if (!projectName) {
        let c = Ya.CurrentProject.name;
        if (c) {
            requestAnimationFrame(()=>{
                P9.default.replace(`/${c}/`);
            });
        }
        return;
    }
    let r = e.query.q;
    let n = false;
    let o = null;
    let s = false;
    if (document.getElementsByClassName("drawer").length > 0) {
        OZ("wait until drawer close");
        await DZ.default(350);
    }
    let l = a_1(({ project, pageList })=>{
        if (project?.data?.name && e.path === `/${projectName}`) {
            P9.default.replace(`/${project.data.name}/`, null, null, false);
        }
        if (!n) {
            let f = MZ.default(".page-wrapper");
            if (f.css("display") === "block") {
                f.addClass("leave");
            }
            Ya.PageAccess.leave();
        }
        if (project) {
            Ya.CurrentProject.set(project);
        }
        if (pageList) {
            Ya.PageList.set(pageList);
        }
        if (r) {
            Ya.SearchForm.set({
                value: r
            });
        }
        if (!n) {
            o = setTimeout(()=>{
                if (s) {
                    Hx(location.pathname);
                }
                let scrollToTop = !s;
                Ya.Layout.set("list", {
                    scrollToTop
                });
            }, 100);
        }
        n = true;
    }, "setStore");
    try {
        let c = Ya.CurrentProject.hasRemoteData(projectName) && Ya.PageList.hasRemoteData({
            projectName,
            searchQuery: r
        });
        s = c && e.isNavigationByBrowser;
        if (c) {
            l({
                project: null,
                pageList: null
            });
        } else {
            let [g, v] = await Promise.all([
                Ya.CurrentProject.getCache(projectName),
                Ya.PageList.getCache({
                    projectName,
                    searchQuery: r,
                    skip: 0
                })
            ]);
            if (g && v) {
                l({
                    project: {
                        data: await g.json(),
                        source
                    },
                    pageList: {
                        data: await v.json(),
                        source
                    }
                });
            }
        }
        if (s) {
            return;
        }
        let [project, pageList] = await Promise.all([
            Ya.CurrentProject.fetch(projectName),
            Ya.PageList.fetch({
                projectName,
                searchQuery: r,
                skip: 0
            })
        ]);
        l({
            project,
            pageList
        });
        if (r && Ya.PageList.searchBackend === "elasticsearch") {
            await Ya.FileSearch.search({
                projectName,
                searchQuery: r
            });
        }
    } catch (error) {
        if (p.isCancel(error)) {
            return OZ("canceled");
        }
        if (o) {
            clearTimeout(o);
        }
        Ya.Error.set(error);
        Ya.Layout.set("error-page");
        if (!y(error)) {
            throw error;
        }
    }
}
