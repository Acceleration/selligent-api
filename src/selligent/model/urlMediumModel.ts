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

export class UrlMediumModel {
    /**
    * Type of the Medium (FTP / REPOSITORY / URL).
    */
    'type'?: UrlMediumModel.TypeEnum;
    /**
    * API name of the Medium.
    */
    'apiName'?: string;
    /**
    * Name of the Medium.
    */
    'name'?: string;
    /**
    * Description.
    */
    'description'?: string;
    /**
    * Represents organizations associated with the medium and can be accessed by the API Application.
    */
    'organizations'?: Array<string>;
    /**
    * Represents number of organizations associated with the medium and cannot be accessed by the API Application.
    */
    'notAccessibleOrganizationsCount'?: number;
    /**
    * url link details.
    */
    'url'?: string;
    /**
    * Name of login user.
    */
    'login'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "UrlMediumModel.TypeEnum"
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "organizations",
            "baseName": "organizations",
            "type": "Array<string>"
        },
        {
            "name": "notAccessibleOrganizationsCount",
            "baseName": "not_accessible_organizations_count",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "login",
            "baseName": "login",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UrlMediumModel.attributeTypeMap;
    }
}

export namespace UrlMediumModel {
    export enum TypeEnum {
        Ftp = <any> 'Ftp',
        Repository = <any> 'Repository',
        Url = <any> 'Url'
    }
}
