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

export class EmailMessageHeaderModel {
    'fromDomain': string;
    'fromAlias': string;
    'replyEmail'?: string;
    'replyAlias'?: string;
    'toAlias': string;
    'preheader': string;
    'subject': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromDomain",
            "baseName": "from_domain",
            "type": "string"
        },
        {
            "name": "fromAlias",
            "baseName": "from_alias",
            "type": "string"
        },
        {
            "name": "replyEmail",
            "baseName": "reply_email",
            "type": "string"
        },
        {
            "name": "replyAlias",
            "baseName": "reply_alias",
            "type": "string"
        },
        {
            "name": "toAlias",
            "baseName": "to_alias",
            "type": "string"
        },
        {
            "name": "preheader",
            "baseName": "preheader",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmailMessageHeaderModel.attributeTypeMap;
    }
}

