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
import { SingleBatchJourneyResponse } from './singleBatchJourneyResponse';

export class GetSingleBatchResponse {
    'journey'?: SingleBatchJourneyResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "journey",
            "baseName": "journey",
            "type": "SingleBatchJourneyResponse"
        }    ];

    static getAttributeTypeMap() {
        return GetSingleBatchResponse.attributeTypeMap;
    }
}
