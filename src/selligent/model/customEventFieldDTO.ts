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
import { JsonFieldSchemaApiRequestModel } from './jsonFieldSchemaApiRequestModel';

/**
* Represents a custom event field.
*/
export class CustomEventFieldDTO {
    /**
    * Name of the custom event field.
    */
    'name': string;
    /**
    * Type of the custom event field.
    */
    'dataType': CustomEventFieldDTO.DataTypeEnum;
    /**
    * Length of custom event field.
    */
    'length'?: number;
    /**
    * Description about the custom event field.
    */
    'description'?: string;
    /**
    * Indicates whether the value of the field can be NULL.
    */
    'allowNull'?: boolean;
    /**
    * Option type of custom event field.
    */
    'content'?: CustomEventFieldDTO.ContentEnum;
    /**
    * Option list name of custom event field.
    */
    'optionlist'?: string;
    /**
    * Value definition of custom event field.
    */
    'valueDefinition'?: string;
    /**
    * Json schema for json type fields.
    */
    'jsonSchema'?: Array<JsonFieldSchemaApiRequestModel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "dataType",
            "baseName": "data_type",
            "type": "CustomEventFieldDTO.DataTypeEnum"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "allowNull",
            "baseName": "allow_null",
            "type": "boolean"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "CustomEventFieldDTO.ContentEnum"
        },
        {
            "name": "optionlist",
            "baseName": "optionlist",
            "type": "string"
        },
        {
            "name": "valueDefinition",
            "baseName": "value_definition",
            "type": "string"
        },
        {
            "name": "jsonSchema",
            "baseName": "json_schema",
            "type": "Array<JsonFieldSchemaApiRequestModel>"
        }    ];

    static getAttributeTypeMap() {
        return CustomEventFieldDTO.attributeTypeMap;
    }
}

export namespace CustomEventFieldDTO {
    export enum DataTypeEnum {
        Unknown = <any> 'Unknown',
        Boolean = <any> 'Boolean',
        Numeric = <any> 'Numeric',
        Long = <any> 'Long',
        Float = <any> 'Float',
        Date = <any> 'Date',
        DateTime = <any> 'DateTime',
        Text = <any> 'Text',
        LongText = <any> 'LongText',
        Json = <any> 'Json'
    }
    export enum ContentEnum {
        Unknown = <any> 'Unknown',
        Free = <any> 'Free',
        Single = <any> 'Single',
        Multi = <any> 'Multi',
        ComputedNonPersisted = <any> 'ComputedNonPersisted',
        ComputedPersisted = <any> 'ComputedPersisted',
        Lookup = <any> 'Lookup'
    }
}
