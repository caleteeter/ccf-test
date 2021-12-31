
import * as ccfapp from "@microsoft/ccf-app";
import { addRole } from "@windozer/ccf-identity";
import { IRoleDefinition } from "@windozer/ccf-identity/dist/models/roleDefinition";

export function addRbacRole(request: ccfapp.Request<IRoleDefinition>): ccfapp.Response {
    let result = addRole(request.body.json());
    return { body: result };
}