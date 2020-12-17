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

export class TransactionalResponseModel {
    'apiName'?: string;
    'name'?: string;
    'launchState'?: TransactionalResponseModel.LaunchStateEnum;
    'type'?: TransactionalResponseModel.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiName",
            "baseName": "api_name",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "launchState",
            "baseName": "launch_state",
            "type": "TransactionalResponseModel.LaunchStateEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionalResponseModel.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransactionalResponseModel.attributeTypeMap;
    }
}

export namespace TransactionalResponseModel {
    export enum LaunchStateEnum {
        None = <any> 'none',
        Launch = <any> 'launch',
        Schedule = <any> 'schedule'
    }
    export enum TypeEnum {
        Unknown = <any> 'unknown',
        Singlebatch = <any> 'singlebatch',
        Transactional = <any> 'transactional',
        Ab = <any> 'ab',
        Recurring = <any> 'recurring',
        Custom = <any> 'custom'
    }
}
