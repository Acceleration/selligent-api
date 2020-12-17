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
import { ErrorDTO } from './errorDTO';
import { InvalidRecordModel } from './invalidRecordModel';

export class LoadDataResponseModel {
    /**
    * In case loading the data fails, this property contains the list of validation errors.
    */
    'errors'?: Array<ErrorDTO>;
    /**
    * Indicates the resultCode for the request
    */
    'resultCode'?: LoadDataResponseModel.ResultCodeEnum;
    /**
    * When the data load succeeded, this property contains the number of inserted records
    */
    'numberOfInsertedRecords'?: number;
    /**
    * When the data load partially succeeded, this property contains the number of failed records
    */
    'numberOfFailedRecords'?: number;
    /**
    * When the data load succeeded, this property contains the number of updated records
    */
    'numberOfUpdatedRecords'?: number;
    /**
    * When the data load succeeded, this property contains the number of duplicate records
    */
    'numberOfDuplicateRecords'?: number;
    /**
    * When the data load succeeded, this property contains the number of records not found
    */
    'numberOfRecordsNotFound'?: number;
    /**
    * When the data load partially succeeded, this property contains information about the invalid records
    */
    'invalidRecords'?: Array<InvalidRecordModel>;
    /**
    * When the data delete succeeded, this property contains information about the deleted records
    */
    'numberOfDeletedRecords'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDTO>"
        },
        {
            "name": "resultCode",
            "baseName": "result_code",
            "type": "LoadDataResponseModel.ResultCodeEnum"
        },
        {
            "name": "numberOfInsertedRecords",
            "baseName": "number_of_inserted_records",
            "type": "number"
        },
        {
            "name": "numberOfFailedRecords",
            "baseName": "number_of_failed_records",
            "type": "number"
        },
        {
            "name": "numberOfUpdatedRecords",
            "baseName": "number_of_updated_records",
            "type": "number"
        },
        {
            "name": "numberOfDuplicateRecords",
            "baseName": "number_of_duplicate_records",
            "type": "number"
        },
        {
            "name": "numberOfRecordsNotFound",
            "baseName": "number_of_records_not_found",
            "type": "number"
        },
        {
            "name": "invalidRecords",
            "baseName": "invalid_records",
            "type": "Array<InvalidRecordModel>"
        },
        {
            "name": "numberOfDeletedRecords",
            "baseName": "number_of_deleted_records",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LoadDataResponseModel.attributeTypeMap;
    }
}

export namespace LoadDataResponseModel {
    export enum ResultCodeEnum {
        Failed = <any> 'Failed',
        Succeeded = <any> 'Succeeded',
        PartiallySucceeded = <any> 'PartiallySucceeded',
        ValidationFailed = <any> 'ValidationFailed',
        NotFound = <any> 'NotFound',
        ServiceUnavailable = <any> 'ServiceUnavailable',
        InternalServerError = <any> 'InternalServerError'
    }
}
