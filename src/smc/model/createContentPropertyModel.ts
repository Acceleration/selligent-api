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

export class CreateContentPropertyModel {
    'name': string;
    'description'?: string;
    'apiName': string;
    'tags'?: Array<string>;
    'languages': Array<string>;
    'defaultLanguage'?: string;
    'emptyLanguage'?: string;
    'audienceApiName': string;
    'folder'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "apiName",
            "baseName": "api_name",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<string>"
        },
        {
            "name": "defaultLanguage",
            "baseName": "default_language",
            "type": "string"
        },
        {
            "name": "emptyLanguage",
            "baseName": "empty_language",
            "type": "string"
        },
        {
            "name": "audienceApiName",
            "baseName": "audience_api_name",
            "type": "string"
        },
        {
            "name": "folder",
            "baseName": "folder",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateContentPropertyModel.attributeTypeMap;
    }
}

