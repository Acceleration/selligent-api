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

export class CreateUrlMediumApiRequestModel {
    /**
    * URL for accessing server
    */
    'url': string;
    /**
    * Login for accessing server
    */
    'login': string;
    /**
    * Password associated with the Login to access the server
    */
    'password': string;
    /**
    * API Name associated with the medium
    */
    'apiName': string;
    /**
    * Name of the medium
    */
    'name': string;
    /**
    * List of organizations linked to the medium
    */
    'organizations': Array<string>;
    /**
    * Description of the medium
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "login",
            "baseName": "login",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
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
            "name": "organizations",
            "baseName": "organizations",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateUrlMediumApiRequestModel.attributeTypeMap;
    }
}

