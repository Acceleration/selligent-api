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

export class GetListDetailsEmailQualityAction {
    'fieldName'?: string;
    'fieldValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldName",
            "baseName": "field_name",
            "type": "string"
        },
        {
            "name": "fieldValue",
            "baseName": "field_value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetListDetailsEmailQualityAction.attributeTypeMap;
    }
}

