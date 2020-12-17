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

export class ApiImportTaskFileOptionsModel {
    'checkMd5'?: boolean;
    'maxColumnCount'?: number;
    'sheetName'?: string;
    'rowsToSkip'?: number;
    'rootNode'?: string;
    'encoding'?: ApiImportTaskFileOptionsModel.EncodingEnum;
    'delimiter'?: string;
    'useTextQuotes'?: boolean;
    'firstLineHasColumnNames'?: boolean;
    'maxFileSize'?: number;
    'lineBreak'?: ApiImportTaskFileOptionsModel.LineBreakEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkMd5",
            "baseName": "check_md5",
            "type": "boolean"
        },
        {
            "name": "maxColumnCount",
            "baseName": "max_column_count",
            "type": "number"
        },
        {
            "name": "sheetName",
            "baseName": "sheet_name",
            "type": "string"
        },
        {
            "name": "rowsToSkip",
            "baseName": "rows_to_skip",
            "type": "number"
        },
        {
            "name": "rootNode",
            "baseName": "root_node",
            "type": "string"
        },
        {
            "name": "encoding",
            "baseName": "encoding",
            "type": "ApiImportTaskFileOptionsModel.EncodingEnum"
        },
        {
            "name": "delimiter",
            "baseName": "delimiter",
            "type": "string"
        },
        {
            "name": "useTextQuotes",
            "baseName": "use_text_quotes",
            "type": "boolean"
        },
        {
            "name": "firstLineHasColumnNames",
            "baseName": "first_line_has_column_names",
            "type": "boolean"
        },
        {
            "name": "maxFileSize",
            "baseName": "max_file_size",
            "type": "number"
        },
        {
            "name": "lineBreak",
            "baseName": "line_break",
            "type": "ApiImportTaskFileOptionsModel.LineBreakEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApiImportTaskFileOptionsModel.attributeTypeMap;
    }
}

export namespace ApiImportTaskFileOptionsModel {
    export enum EncodingEnum {
        Unknown = <any> 'Unknown',
        BIG5 = <any> 'BIG5',
        CP866 = <any> 'CP866',
        CP875 = <any> 'CP875',
        EUCJP = <any> 'EUC_JP',
        EUCKR = <any> 'EUC_KR',
        GB2312 = <any> 'GB2312',
        IBM037 = <any> 'IBM037',
        IBM1026 = <any> 'IBM1026',
        IBM290 = <any> 'IBM290',
        IBM437 = <any> 'IBM437',
        IBM500 = <any> 'IBM500',
        IBM737 = <any> 'IBM737',
        IBM775 = <any> 'IBM775',
        IBM850 = <any> 'IBM850',
        IBM852 = <any> 'IBM852',
        IBM855 = <any> 'IBM855',
        IBM857 = <any> 'IBM857',
        IBM860 = <any> 'IBM860',
        IBM861 = <any> 'IBM861',
        IBM863 = <any> 'IBM863',
        IBM865 = <any> 'IBM865',
        IBM869 = <any> 'IBM869',
        ISO2022JP = <any> 'ISO_2022_JP',
        ISO88591 = <any> 'ISO_8859_1',
        ISO885913 = <any> 'ISO_8859_13',
        ISO885915 = <any> 'ISO_8859_15',
        ISO88592 = <any> 'ISO_8859_2',
        ISO88594 = <any> 'ISO_8859_4',
        ISO88595 = <any> 'ISO_8859_5',
        ISO88597 = <any> 'ISO_8859_7',
        ISO88599 = <any> 'ISO_8859_9',
        JOHAB = <any> 'JOHAB',
        KOI8R = <any> 'KOI8_R',
        KOI8U = <any> 'KOI8_U',
        KSC56011987 = <any> 'KS_C_5601_1987',
        MACINTOSH = <any> 'MACINTOSH',
        UNICODEFFFE = <any> 'UNICODEFFFE',
        USASCII = <any> 'US_ASCII',
        UTF16 = <any> 'UTF_16',
        UTF8 = <any> 'UTF_8',
        WINDOWS1250 = <any> 'WINDOWS_1250',
        WINDOWS1251 = <any> 'WINDOWS_1251',
        WINDOWS1252 = <any> 'WINDOWS_1252',
        WINDOWS1253 = <any> 'WINDOWS_1253',
        WINDOWS1254 = <any> 'WINDOWS_1254',
        WINDOWS1255 = <any> 'WINDOWS_1255',
        WINDOWS1256 = <any> 'WINDOWS_1256',
        WINDOWS1257 = <any> 'WINDOWS_1257',
        WINDOWS1258 = <any> 'WINDOWS_1258',
        WINDOWS874 = <any> 'WINDOWS_874',
        XCHINESECNS = <any> 'X_CHINESE_CNS',
        XCP20261 = <any> 'X_CP20261',
        XCP20936 = <any> 'X_CP20936',
        XCP20949 = <any> 'X_CP20949',
        XCP21027 = <any> 'X_CP21027',
        XMACCE = <any> 'X_MAC_CE',
        XMACCHINESESIMP = <any> 'X_MAC_CHINESESIMP',
        XMACCHINESETRAD = <any> 'X_MAC_CHINESETRAD',
        XMACCROATIAN = <any> 'X_MAC_CROATIAN',
        XMACCYRILLIC = <any> 'X_MAC_CYRILLIC',
        XMACGREEK = <any> 'X_MAC_GREEK',
        XMACICELANDIC = <any> 'X_MAC_ICELANDIC',
        XMACJAPANESE = <any> 'X_MAC_JAPANESE',
        XMACKOREAN = <any> 'X_MAC_KOREAN',
        XMACROMANIAN = <any> 'X_MAC_ROMANIAN',
        XMACTURKISH = <any> 'X_MAC_TURKISH',
        XMACUKRAINIAN = <any> 'X_MAC_UKRAINIAN'
    }
    export enum LineBreakEnum {
        Unknown = <any> 'Unknown',
        Windows = <any> 'Windows',
        Unix = <any> 'Unix'
    }
}
