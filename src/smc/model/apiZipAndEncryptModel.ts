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
import { ApiPgpEncryptionModel } from './apiPgpEncryptionModel';
import { ApiZipArchiveModel } from './apiZipArchiveModel';

export class ApiZipAndEncryptModel {
    'mode'?: ApiZipAndEncryptModel.ModeEnum;
    'zipArchive'?: ApiZipArchiveModel;
    'pgpEncryption'?: ApiPgpEncryptionModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "ApiZipAndEncryptModel.ModeEnum"
        },
        {
            "name": "zipArchive",
            "baseName": "zip_archive",
            "type": "ApiZipArchiveModel"
        },
        {
            "name": "pgpEncryption",
            "baseName": "pgp_encryption",
            "type": "ApiPgpEncryptionModel"
        }    ];

    static getAttributeTypeMap() {
        return ApiZipAndEncryptModel.attributeTypeMap;
    }
}

export namespace ApiZipAndEncryptModel {
    export enum ModeEnum {
        Unknown = <any> 'Unknown',
        Zip = <any> 'Zip',
        Encrypt = <any> 'Encrypt',
        ZipAndEncrypt = <any> 'ZipAndEncrypt',
        EncryptAndZip = <any> 'EncryptAndZip'
    }
}