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

import { RequestFile } from '../api';
import { ErrorModel } from './errorModel';

export class CancelSingleBatchJourneyFailedResponse {
    'errors'?: Array<ErrorModel>;
    'resultCode'?: CancelSingleBatchJourneyFailedResponse.ResultCodeEnum;
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorModel>"
        },
        {
            "name": "resultCode",
            "baseName": "result_code",
            "type": "CancelSingleBatchJourneyFailedResponse.ResultCodeEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CancelSingleBatchJourneyFailedResponse.attributeTypeMap;
    }
}

export namespace CancelSingleBatchJourneyFailedResponse {
    export enum ResultCodeEnum {
        Failed = <any> 'Failed',
        Succeeded = <any> 'Succeeded',
        PartiallySucceeded = <any> 'PartiallySucceeded',
        ValidationFailed = <any> 'ValidationFailed',
        NotFound = <any> 'NotFound',
        ServiceUnavailable = <any> 'ServiceUnavailable',
        InternalServerError = <any> 'InternalServerError'
    }
}
