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
import { GetOrganizationAudienceModelResponseExample } from './getOrganizationAudienceModelResponseExample';
import { GetOrganizationConnectorInstanceModelResponseExample } from './getOrganizationConnectorInstanceModelResponseExample';
import { GetOrganizationDatasourceModelResponseExample } from './getOrganizationDatasourceModelResponseExample';
import { GetOrganizationLanguageModelResponseExample } from './getOrganizationLanguageModelResponseExample';
import { GetOrganizationMediumModelResponseExample } from './getOrganizationMediumModelResponseExample';
import { GetOrganizationTaglistModelResponseExample } from './getOrganizationTaglistModelResponseExample';
import { GetOrganizationTrackerModelResponseExample } from './getOrganizationTrackerModelResponseExample';

export class Organization {
    /**
    * This is the name of the organization.
    */
    'name'?: string;
    /**
    * This is the image reference.
    */
    'imageReference'?: string;
    /**
    * This is the type of image.
    */
    'imageType'?: string;
    /**
    * These are the languages supported by the organization.
    */
    'languages'?: Array<GetOrganizationLanguageModelResponseExample>;
    /**
    * These are the audiences of organization.
    */
    'audiences'?: Array<GetOrganizationAudienceModelResponseExample>;
    /**
    * These are the campaign data sources of organization.
    */
    'campaignDataSources'?: Array<GetOrganizationDatasourceModelResponseExample>;
    /**
    * These are the default languages of organization.
    */
    'defaultLanguages'?: Array<string>;
    /**
    * This is the default maildomain of organization.
    */
    'defaultMaildomain'?: string;
    /**
    * This is the default sms endpoint of organization.
    */
    'smsEndpoint'?: string;
    /**
    * This is the default mobile endpoint of organization.
    */
    'mobilePushEndpoint'?: string;
    /**
    * This is the default facebook endpoint of organization.
    */
    'facebookEndpoint'?: string;
    /**
    * This is the default google customer match endpoint of organization.
    */
    'googleCustomerMatchEndpoint'?: string;
    /**
    * These are the tracker of organization.
    */
    'trackers'?: Array<GetOrganizationTrackerModelResponseExample>;
    /**
    * These are the connector instances of organization.
    */
    'connectorInstances'?: Array<GetOrganizationConnectorInstanceModelResponseExample>;
    /**
    * These are the mediums of organization.
    */
    'mediums'?: Array<GetOrganizationMediumModelResponseExample>;
    /**
    * These are the Tag lists of organization.
    */
    'taglists'?: Array<GetOrganizationTaglistModelResponseExample>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "imageReference",
            "baseName": "image_reference",
            "type": "string"
        },
        {
            "name": "imageType",
            "baseName": "image_type",
            "type": "string"
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<GetOrganizationLanguageModelResponseExample>"
        },
        {
            "name": "audiences",
            "baseName": "audiences",
            "type": "Array<GetOrganizationAudienceModelResponseExample>"
        },
        {
            "name": "campaignDataSources",
            "baseName": "campaign_data_sources",
            "type": "Array<GetOrganizationDatasourceModelResponseExample>"
        },
        {
            "name": "defaultLanguages",
            "baseName": "default_languages",
            "type": "Array<string>"
        },
        {
            "name": "defaultMaildomain",
            "baseName": "default_maildomain",
            "type": "string"
        },
        {
            "name": "smsEndpoint",
            "baseName": "sms_endpoint",
            "type": "string"
        },
        {
            "name": "mobilePushEndpoint",
            "baseName": "mobile_push_endpoint",
            "type": "string"
        },
        {
            "name": "facebookEndpoint",
            "baseName": "facebook_endpoint",
            "type": "string"
        },
        {
            "name": "googleCustomerMatchEndpoint",
            "baseName": "google_customer_match_endpoint",
            "type": "string"
        },
        {
            "name": "trackers",
            "baseName": "trackers",
            "type": "Array<GetOrganizationTrackerModelResponseExample>"
        },
        {
            "name": "connectorInstances",
            "baseName": "connector_instances",
            "type": "Array<GetOrganizationConnectorInstanceModelResponseExample>"
        },
        {
            "name": "mediums",
            "baseName": "mediums",
            "type": "Array<GetOrganizationMediumModelResponseExample>"
        },
        {
            "name": "taglists",
            "baseName": "taglists",
            "type": "Array<GetOrganizationTaglistModelResponseExample>"
        }    ];

    static getAttributeTypeMap() {
        return Organization.attributeTypeMap;
    }
}

