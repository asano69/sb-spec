const oD = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric"
};
export function vae(e) {
    return e in oD;
}
export function Gw(e) {
    if (vae(e)) {
        return oD[e];
    }
    return e;
}
