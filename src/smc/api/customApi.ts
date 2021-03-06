/**
 * Selligent Marketing Cloud API
 * Click the endpoint to see details. In the Parameters-section, we show an example of how the data you send along with the api-call looks like.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { DeleteJourneySuccessResponse } from '../model/deleteJourneySuccessResponse';
import { JourneyDetailsResponseModel } from '../model/journeyDetailsResponseModel';
import { JourneyEntryPointInfoResponse } from '../model/journeyEntryPointInfoResponse';
import { JourneyEntryPointResponse } from '../model/journeyEntryPointResponse';
import { TriggerJourneyEntryPointFailedResponse } from '../model/triggerJourneyEntryPointFailedResponse';
import { TriggerJourneyEntryPointResponse } from '../model/triggerJourneyEntryPointResponse';
import { TriggerJourneyEntryPointsRequest } from '../model/triggerJourneyEntryPointsRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost/Portal/Api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CustomApiApiKeys {
}

export class CustomApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CustomApiApiKeys, value: string) {
        (this.authentications as any)[CustomApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Use this endpoint to delete existing custom journey.
     * @param apiName Parameter represents API name of the custom journey.
     * @param organization 
     */
    public async customDelete (apiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeleteJourneySuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/journeys/custom/{api_name}'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling customDelete.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling customDelete.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeleteJourneySuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeleteJourneySuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Use this endpoint to check whether custom journey already exists.
     * @param apiName Parameter represents API name of the custom journey.
     * @param organization 
     */
    public async customGet (apiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: JourneyDetailsResponseModel;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/journeys/custom/{api_name}'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'type', 'name', 'api_name', 'description'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling customGet.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling customGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: JourneyDetailsResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "JourneyDetailsResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets detailed information about the entry point component.
     * @param apiName the api name of the custom journey
     * @param entrypointApiName the api name of the entry point defined in the custom journey.
     * @param organization 
     */
    public async customGetEntryPoint (apiName: string, entrypointApiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: JourneyEntryPointResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/journeys/custom/{api_name}/entrypoints/{entrypoint_api_name}'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'entrypoint_api_name' + '}', encodeURIComponent(String(entrypointApiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'system_info', 'model'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling customGetEntryPoint.');
        }

        // verify required parameter 'entrypointApiName' is not null or undefined
        if (entrypointApiName === null || entrypointApiName === undefined) {
            throw new Error('Required parameter entrypointApiName was null or undefined when calling customGetEntryPoint.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling customGetEntryPoint.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: JourneyEntryPointResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "JourneyEntryPointResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Lists all entry point components in the custom journey, usable via api.
     * @param apiName the api name of the custom journey.
     * @param organization 
     */
    public async customGetEntryPoints (apiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: JourneyEntryPointInfoResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/journeys/custom/{api_name}/entrypoints'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'system_info', 'model'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling customGetEntryPoints.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling customGetEntryPoints.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: JourneyEntryPointInfoResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "JourneyEntryPointInfoResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary This will trigger a specific start component in the custom journey
     * @param apiName 
     * @param entrypointApiName 
     * @param organization 
     * @param model 
     */
    public async customTriggerEntryPoint (apiName: string, entrypointApiName: string, organization: string, model: TriggerJourneyEntryPointsRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TriggerJourneyEntryPointResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/journeys/custom/{api_name}/entrypoints/{entrypoint_api_name}/trigger'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'entrypoint_api_name' + '}', encodeURIComponent(String(entrypointApiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'result_type', 'body', 'message', 'errors', ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling customTriggerEntryPoint.');
        }

        // verify required parameter 'entrypointApiName' is not null or undefined
        if (entrypointApiName === null || entrypointApiName === undefined) {
            throw new Error('Required parameter entrypointApiName was null or undefined when calling customTriggerEntryPoint.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling customTriggerEntryPoint.');
        }

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling customTriggerEntryPoint.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "TriggerJourneyEntryPointsRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TriggerJourneyEntryPointResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "TriggerJourneyEntryPointResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
