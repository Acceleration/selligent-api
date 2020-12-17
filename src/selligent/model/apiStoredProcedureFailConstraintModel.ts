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

export class ApiStoredProcedureFailConstraintModel {
    'operator': ApiStoredProcedureFailConstraintModel.OperatorEnum;
    'value': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "ApiStoredProcedureFailConstraintModel.OperatorEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ApiStoredProcedureFailConstraintModel.attributeTypeMap;
    }
}

export namespace ApiStoredProcedureFailConstraintModel {
    export enum OperatorEnum {
        Unknown = <any> 'Unknown',
        EqualTo = <any> 'EqualTo',
        NotEqualTo = <any> 'NotEqualTo',
        GreaterThan = <any> 'GreaterThan',
        GreaterThanOrEqualTo = <any> 'GreaterThanOrEqualTo',
        LessThan = <any> 'LessThan',
        LessThanOrEqualTo = <any> 'LessThanOrEqualTo'
    }
}
