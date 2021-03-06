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
import { DataSelectionModel } from './dataSelectionModel';
import { Lookup } from './lookup';
import { Scope } from './scope';

export class Item {
    /**
    * [Deprecated] Use recipient instead.
    */
    'email': string;
    /**
    * The recipient to which the content should be sent.
    */
    'recipient': string;
    /**
    * A list of scopes that should be updated on the user profile.  Currently only the MASTER scope is supported.
    */
    'profile'?: Array<Scope>;
    /**
    * The language in which the email should be sent.
    */
    'language': string;
    /**
    * Optionally you can provide a json data object that should be merged into the email.  The data object should contain a list of fields that are defined on the transactional execution.  An example of an object is:  data : {    \"requiredStringField\" : \"requiredFieldValue\",    \"requiredFloatField\" : 3.14,    \"optionalStringField\" : \"some optional data\",    \"requiredArrayField\" : [      {        \"requiredNumericField\" : 666,        \"optionalBooleanField\" : false      }    ]  }
    */
    'data'?: object;
    'dtsdata'?: Array<DataSelectionModel>;
    'lookup'?: Lookup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "Array<Scope>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "dtsdata",
            "baseName": "dtsdata",
            "type": "Array<DataSelectionModel>"
        },
        {
            "name": "lookup",
            "baseName": "lookup",
            "type": "Lookup"
        }    ];

    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }
}

