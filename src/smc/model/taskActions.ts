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

export class TaskActions {
    /**
    * The actions of the task.
    */
    'taskaction'?: Array<TaskActions.TaskactionEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "taskaction",
            "baseName": "taskaction",
            "type": "Array<TaskActions.TaskactionEnum>"
        }    ];

    static getAttributeTypeMap() {
        return TaskActions.attributeTypeMap;
    }
}

export namespace TaskActions {
    export enum TaskactionEnum {
        Run = <any> 'Run',
        Enable = <any> 'Enable',
        Disable = <any> 'Disable'
    }
}