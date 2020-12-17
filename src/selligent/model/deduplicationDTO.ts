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

export class DeduplicationDTO {
    'fields': Array<string>;
    'sortField': string;
    'sortDescending': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<string>"
        },
        {
            "name": "sortField",
            "baseName": "sort_field",
            "type": "string"
        },
        {
            "name": "sortDescending",
            "baseName": "sort_descending",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DeduplicationDTO.attributeTypeMap;
    }
}

