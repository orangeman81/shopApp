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

export interface ClienteVO {
    id?: number;

    attivo?: boolean;

    attivoDal?: Date;

    attivoAl?: Date;

    saldo?: number;

    ragioneSociale?: string;

    nome?: string;

    cognome?: string;

    email?: string;

    numeroCellulare?: string;

    codiceFiscale?: string;

    partitaIva?: string;

    dataNascita?: Date;

    indirizzo?: string;

    cap?: string;

    comune?: string;

    provincia?: string;

    nazione?: string;

}