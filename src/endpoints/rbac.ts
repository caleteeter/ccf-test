
import * as ccfapp from "@microsoft/ccf-app";
import { addRole, assignPrincipalToRole, getRole, isInRole, removePrincipalFromRole, removeRole, updateRole } from "@windozer/ccf-identity";
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
    const result = assignPrincipalToRole(requestBody.roleId, requestBody.principalId);
    return { body: result };
}

export function removePrincipalFromRbacRole(request: ccfapp.Request): ccfapp.Response<IdentityResponse> {
    const requestBody = request.body.json();
    const result = removePrincipalFromRole(requestBody.roleId, requestBody.principalId);
    return { body: result };
}

export function isInRbacRole(request: ccfapp.Request): ccfapp.Response<boolean> {
    const roleId = request.query.split('=')[1];
    const prinId = request.query.split('=')[2];
    const result = isInRole(roleId, prinId);
    return { body: result };
}