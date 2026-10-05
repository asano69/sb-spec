const deny = [
    "forwarded",
    "-ip",
    "remote-",
    "via",
    "-user"
];
export function RD(e) {
    if (e === true) {
        return {
            userInfo: true,
            cookies: true,
            httpHeaders: {
                request: true,
                response: true
            },
            httpBodies: [
                "incomingRequest",
                "outgoingRequest",
                "incomingResponse",
                "outgoingResponse"
            ],
            urlQueryParams: true,
            graphQL: {
                document: true,
                variables: true
            },
            genAI: {
                inputs: true,
                outputs: true
            },
            databaseQueryData: true,
            stackFrameVariables: true,
            frameContextLines: 7
        };
    }
    return {
        userInfo: false,
        cookies: {
            deny
        },
        httpHeaders: {
            request: {
                deny
            },
            response: {
                deny
            }
        },
        httpBodies: [],
        urlQueryParams: {
            deny
        },
        graphQL: {
            document: true,
            variables: true
        },
        genAI: {
            inputs: false,
            outputs: false
        },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7
    };
}
export const Vae = {
    userInfo: true,
    cookies: true,
    httpHeaders: {
        request: true,
        response: true
    },
    httpBodies: [
        "incomingRequest",
        "outgoingRequest",
        "incomingResponse",
        "outgoingResponse"
    ],
    urlQueryParams: true,
    graphQL: {
        document: true,
        variables: true
    },
    genAI: {
        inputs: true,
        outputs: true
    },
    databaseQueryData: true,
    stackFrameVariables: true,
    frameContextLines: 5
};
