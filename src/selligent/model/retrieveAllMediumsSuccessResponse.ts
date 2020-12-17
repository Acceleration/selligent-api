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

export class RetrieveAllMediumsSuccessResponse {
    /**
    * The type of the list.
    */
    'type'?: RetrieveAllMediumsSuccessResponse.TypeEnum;
    /**
    * The Api name for a list.
    */
    'apiName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RetrieveAllMediumsSuccessResponse.TypeEnum"
        },
        {
            "name": "apiName",
            "baseName": "api_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RetrieveAllMediumsSuccessResponse.attributeTypeMap;
    }
}

export namespace RetrieveAllMediumsSuccessResponse {
    export enum TypeEnum {
        Ftp = <any> 'Ftp',
        Repository = <any> 'Repository',
        Url = <any> 'Url'
    }
}
