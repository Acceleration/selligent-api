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

export class CreateListRequestModel {
    /**
    * API name of the list.
    */
    'apiName': string;
    /**
    * Name of the list.
    */
    'name': string;
    /**
    * Type of the list.
    */
    'type': CreateListRequestModel.TypeEnum;
    /**
    * Description about the list.
    */
    'description'?: string;
    /**
    * Tags associated with the list.
    */
    'tags'?: Array<string>;
    /**
    * Enforce segment selection for user lists (Only applicable for user lists)
    */
    'enforceSegmentSelection'?: boolean;
    /**
    * Option list code type for option lists (Only applicable for option lists)
    */
    'optionlistCodetype'?: CreateListRequestModel.OptionlistCodetypeEnum;

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
            "name": "type",
            "baseName": "type",
            "type": "CreateListRequestModel.TypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "enforceSegmentSelection",
            "baseName": "enforce_segment_selection",
            "type": "boolean"
        },
        {
            "name": "optionlistCodetype",
            "baseName": "optionlist_codetype",
            "type": "CreateListRequestModel.OptionlistCodetypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateListRequestModel.attributeTypeMap;
    }
}

export namespace CreateListRequestModel {
    export enum TypeEnum {
        Unknown = <any> 'Unknown',
        Userlist = <any> 'Userlist',
        Datalist = <any> 'Datalist',
        DataSelectionList = <any> 'DataSelectionList',
        Optionlist = <any> 'Optionlist',
        Devicelist = <any> 'Devicelist'
    }
    export enum OptionlistCodetypeEnum {
        Unknown = <any> 'Unknown',
        Text = <any> 'Text',
        Numeric = <any> 'Numeric'
    }
}
