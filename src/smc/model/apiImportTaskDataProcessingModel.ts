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
import { ApiStoredProcedureFailConstraintModel } from './apiStoredProcedureFailConstraintModel';
import { ApiStoredProcedureParameterValueModel } from './apiStoredProcedureParameterValueModel';

export class ApiImportTaskDataProcessingModel {
    'spName': string;
    'failConstraint'?: ApiStoredProcedureFailConstraintModel;
    'parameterValues'?: Array<ApiStoredProcedureParameterValueModel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "spName",
            "baseName": "sp_name",
            "type": "string"
        },
        {
            "name": "failConstraint",
            "baseName": "fail_constraint",
            "type": "ApiStoredProcedureFailConstraintModel"
        },
        {
            "name": "parameterValues",
            "baseName": "parameter_values",
            "type": "Array<ApiStoredProcedureParameterValueModel>"
        }    ];

    static getAttributeTypeMap() {
        return ApiImportTaskDataProcessingModel.attributeTypeMap;
    }
}

