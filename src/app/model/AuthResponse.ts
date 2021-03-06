/**
 * Wision55
 * API per l'utilizzo dei servizi della piattaforma Wision55
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface AuthResponse {
    token?: string;

    tipo?: AuthResponse.TipoEnum;

    id?: number;

    dataCreazione?: Date;

    attivo?: boolean;

    ip?: string;

}
export namespace AuthResponse {
    export enum TipoEnum {
        Wision55 = <any> 'wision55',
        Negozio = <any> 'negozio',
        Pos = <any> 'pos'
    }
}
