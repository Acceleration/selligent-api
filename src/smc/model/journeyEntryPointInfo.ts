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

export class JourneyEntryPointInfo {
    /**
    * The type of entry point.
    */
    'entryPointType'?: string;
    /**
    * The name of entry point.
    */
    'name'?: string;
    /**
    * The api indentifier of the entry point.
    */
    'apiName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entryPointType",
            "baseName": "entry_point_type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "apiName",
            "baseName": "api_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return JourneyEntryPointInfo.attributeTypeMap;
    }
}

