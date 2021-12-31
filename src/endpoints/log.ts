
import * as ccfapp from '@microsoft/ccf-app';

interface LogItem {
    msg: string;
}

const logMap = ccfapp.typedKv('log', ccfapp.uint32, ccfapp.json<LogItem>());

export function getLogItem(request: ccfapp.Request): ccfapp.Response<LogItem> {
    const id = parseInt(request.query.split('=')[1]);
    if (!logMap.has(id)) {
        return {
            statusCode: 404
        };
    }
    return { body: logMap.get(id) };
}

export function setLogItem(request: ccfapp.Request<LogItem>): ccfapp.Response {
    const id = parseInt(request.query.split('=')[1]);
    logMap.set(id, request.body.json());
    return { body: request.body.json() };
}