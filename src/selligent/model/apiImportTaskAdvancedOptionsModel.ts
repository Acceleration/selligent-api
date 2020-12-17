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

export class ApiImportTaskAdvancedOptionsModel {
    'fileFilter'?: string;
    'triggerFile'?: string;
    'allowMultipleImports'?: boolean;
    'failIfNoFile'?: boolean;
    'failIfEmptyFile'?: boolean;
    'deleteAfterProcessing'?: boolean;
    'processFilesOneByOne'?: boolean;
    'invalidDataHandling'?: ApiImportTaskAdvancedOptionsModel.InvalidDataHandlingEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileFilter",
            "baseName": "file_filter",
            "type": "string"
        },
        {
            "name": "triggerFile",
            "baseName": "trigger_file",
            "type": "string"
        },
        {
            "name": "allowMultipleImports",
            "baseName": "allow_multiple_imports",
            "type": "boolean"
        },
        {
            "name": "failIfNoFile",
            "baseName": "fail_if_no_file",
            "type": "boolean"
        },
        {
            "name": "failIfEmptyFile",
            "baseName": "fail_if_empty_file",
            "type": "boolean"
        },
        {
            "name": "deleteAfterProcessing",
            "baseName": "delete_after_processing",
            "type": "boolean"
        },
        {
            "name": "processFilesOneByOne",
            "baseName": "process_files_one_by_one",
            "type": "boolean"
        },
        {
            "name": "invalidDataHandling",
            "baseName": "invalid_data_handling",
            "type": "ApiImportTaskAdvancedOptionsModel.InvalidDataHandlingEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApiImportTaskAdvancedOptionsModel.attributeTypeMap;
    }
}

export namespace ApiImportTaskAdvancedOptionsModel {
    export enum InvalidDataHandlingEnum {
        Unknown = <any> 'Unknown',
        Stop = <any> 'Stop',
        Keep = <any> 'Keep',
        Skip = <any> 'Skip',
        Reject = <any> 'Reject'
    }
}
