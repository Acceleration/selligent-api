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
import { GetListRelationCustomeFiltersRequest } from './getListRelationCustomeFiltersRequest';

export class RelationDetailsModel {
    /**
    * Name of the relation.
    */
    'scopeName'?: string;
    /**
    * Type of the relation.
    */
    'relationType'?: RelationDetailsModel.RelationTypeEnum;
    /**
    * API name of master list.
    */
    'masterListApiName'?: string;
    /**
    * Field name of master list.
    */
    'masterListFieldName'?: string;
    /**
    * API name of slave list.
    */
    'slaveListApiName'?: string;
    /**
    * Field name of the slave list.
    */
    'slaveListFieldName'?: string;
    /**
    * Constraints of the relation.
    */
    'constraints'?: Array<GetListRelationCustomeFiltersRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scopeName",
            "baseName": "scope_name",
            "type": "string"
        },
        {
            "name": "relationType",
            "baseName": "relation_type",
            "type": "RelationDetailsModel.RelationTypeEnum"
        },
        {
            "name": "masterListApiName",
            "baseName": "master_list_api_name",
            "type": "string"
        },
        {
            "name": "masterListFieldName",
            "baseName": "master_list_field_name",
            "type": "string"
        },
        {
            "name": "slaveListApiName",
            "baseName": "slave_list_api_name",
            "type": "string"
        },
        {
            "name": "slaveListFieldName",
            "baseName": "slave_list_field_name",
            "type": "string"
        },
        {
            "name": "constraints",
            "baseName": "constraints",
            "type": "Array<GetListRelationCustomeFiltersRequest>"
        }    ];

    static getAttributeTypeMap() {
        return RelationDetailsModel.attributeTypeMap;
    }
}

export namespace RelationDetailsModel {
    export enum RelationTypeEnum {
        OneToOne = <any> 'OneToOne',
        OneToMany = <any> 'OneToMany',
        ManyToOne = <any> 'ManyToOne'
    }
}