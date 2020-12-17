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

export class StructureFieldExampleModel {
    /**
    * Name of the list field.
    */
    'name'?: string;
    /**
    * Type of the list field.
    */
    'dataType'?: StructureFieldExampleModel.DataTypeEnum;
    /**
    * Length of list field.
    */
    'length'?: number;
    /**
    * Flag indicating if the field is nullable or not.
    */
    'allowNull'?: boolean;

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
            "type": "StructureFieldExampleModel.DataTypeEnum"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "allowNull",
            "baseName": "allow_null",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StructureFieldExampleModel.attributeTypeMap;
    }
}

export namespace StructureFieldExampleModel {
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
}
