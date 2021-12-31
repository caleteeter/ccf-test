
import * as ccfapp from "@microsoft/ccf-app";
import { addRole, assignPrincipalToRole, getRole, removeRole, updateRole } from "@windozer/ccf-identity";
import { IdentityResponse } from "@windozer/ccf-identity/dist/models/identityResponse";
import { IRoleDefinition } from "@windozer/ccf-identity/dist/models/roleDefinition";

export function addRbacRole(request: ccfapp.Request<IRoleDefinition>): ccfapp.Response<IdentityResponse> {
    const result = addRole(request.body.json());
    return { body: result };
}

export function getRbacRole(request: ccfapp.Request): ccfapp.Response<IdentityResponse | IRoleDefinition> {
    const id = request.query.split('=')[1];
    const result = getRole(id);
    return { body: result };
}

export function removeRbacRole(request: ccfapp.Request): ccfapp.Response<IdentityResponse> {
    const id = request.query.split('=')[1];
    const result = removeRole(id);
    return { body: result };
}

export function updateRbacRole(request: ccfapp.Request<IRoleDefinition>): ccfapp.Response<IdentityResponse> {
    const result = updateRole(request.body.json());
    return { body: result };
}

export function assignPrincipalToRbacRole(request: ccfapp.Request): ccfapp.Response<IdentityResponse> {
    const requestBody = request.body.json();
    let result = assignPrincipalToRole(requestBody.roleId, requestBody.principalId);
    return { body: result };
}