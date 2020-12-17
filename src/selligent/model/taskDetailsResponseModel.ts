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

export class TaskDetailsResponseModel {
    /**
    * API name of the task
    */
    'apiName'?: string;
    /**
    * Name of the task
    */
    'name'?: string;
    /**
    * Description about the task.
    */
    'description'?: string;
    /**
    * Type of the task
    */
    'type'?: TaskDetailsResponseModel.TypeEnum;
    /**
    * Tags associated with the task.
    */
    'tags'?: Array<string>;
    /**
    * Status of last execution of task.
    */
    'executionStatus'?: TaskDetailsResponseModel.ExecutionStatusEnum;
    /**
    * Last Execution Date of the task.
    */
    'lastExecution'?: Date;
    /**
    * Next Execution Date of the task.
    */
    'nextExecution'?: Date;

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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TaskDetailsResponseModel.TypeEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "executionStatus",
            "baseName": "execution_status",
            "type": "TaskDetailsResponseModel.ExecutionStatusEnum"
        },
        {
            "name": "lastExecution",
            "baseName": "last_execution",
            "type": "Date"
        },
        {
            "name": "nextExecution",
            "baseName": "next_execution",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TaskDetailsResponseModel.attributeTypeMap;
    }
}

export namespace TaskDetailsResponseModel {
    export enum TypeEnum {
        Unknown = <any> 'Unknown',
        Sql = <any> 'Sql',
        Export = <any> 'Export',
        Import = <any> 'Import',
        Batch = <any> 'Batch'
    }
    export enum ExecutionStatusEnum {
        Failed = <any> 'Failed',
        Success = <any> 'Success',
        Running = <any> 'Running',
        None = <any> 'None'
    }
}
