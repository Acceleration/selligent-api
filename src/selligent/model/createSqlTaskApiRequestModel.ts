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
import { ApiNotificationModel } from './apiNotificationModel';
import { ApiScheduleModel } from './apiScheduleModel';
import { ApiSqlTaskStoredProcedureModel } from './apiSqlTaskStoredProcedureModel';
import { ApiTriggerCustomEventModel } from './apiTriggerCustomEventModel';

export class CreateSqlTaskApiRequestModel {
    'procedures': Array<ApiSqlTaskStoredProcedureModel>;
    'name': string;
    'description'?: string;
    'tags'?: Array<string>;
    'apiName': string;
    'scheduler'?: number;
    'schedule'?: ApiScheduleModel;
    'notifications': Array<ApiNotificationModel>;
    'triggerJourneyAfterExecution'?: string;
    'triggerCustomEventAfterExecution'?: ApiTriggerCustomEventModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "procedures",
            "baseName": "procedures",
            "type": "Array<ApiSqlTaskStoredProcedureModel>"
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
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "apiName",
            "baseName": "api_name",
            "type": "string"
        },
        {
            "name": "scheduler",
            "baseName": "scheduler",
            "type": "number"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "ApiScheduleModel"
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<ApiNotificationModel>"
        },
        {
            "name": "triggerJourneyAfterExecution",
            "baseName": "trigger_journey_after_execution",
            "type": "string"
        },
        {
            "name": "triggerCustomEventAfterExecution",
            "baseName": "trigger_custom_event_after_execution",
            "type": "ApiTriggerCustomEventModel"
        }    ];

    static getAttributeTypeMap() {
        return CreateSqlTaskApiRequestModel.attributeTypeMap;
    }
}

