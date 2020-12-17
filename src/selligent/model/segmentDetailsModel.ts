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

export class SegmentDetailsModel {
    /**
    * Type of the segment.
    */
    'type'?: SegmentDetailsModel.TypeEnum;
    /**
    * Segment API name.
    */
    'apiName'?: string;
    /**
    * Name of the segment.
    */
    'name'?: string;
    /**
    * Description of the segment.
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentDetailsModel.TypeEnum"
        },
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
        }    ];

    static getAttributeTypeMap() {
        return SegmentDetailsModel.attributeTypeMap;
    }
}

export namespace SegmentDetailsModel {
    export enum TypeEnum {
        Unknown = <any> 'Unknown',
        Dynamic = <any> 'Dynamic',
        Static = <any> 'Static',
        External = <any> 'External'
    }
}
