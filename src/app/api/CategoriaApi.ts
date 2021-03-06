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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CategoriaApi {

    protected basePath = 'https://wision55.mywatson.it/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Crea una categoria
     * @summary Metodo che permette di creare una categoria
     * @param categoria La categoria da creare
     */
    public creaCategoria(categoria: models.CategoriaVO, extraHttpRequestParams?: any): Observable<models.CategoriaVO> {
        return this.creaCategoriaWithHttpInfo(categoria, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Ritorna la lista delle categorie
     * @summary Metodo che ritorna la lista delle categorie
     * @param descrizione descrizione della categoria
     */
    public findCategorie(descrizione?: string, extraHttpRequestParams?: any): Observable<Array<models.CategoriaVO>> {
        return this.findCategorieWithHttpInfo(descrizione, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Metodo che permette di creare una categoria
     * Crea una categoria
     * @param categoria La categoria da creare
     */
    public creaCategoriaWithHttpInfo(categoria: models.CategoriaVO, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/categoria';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'categoria' is not null or undefined
        if (categoria === null || categoria === undefined) {
            throw new Error('Required parameter categoria was null or undefined when calling creaCategoria.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKey) {
            headers.set('Token', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: categoria == null ? '' : JSON.stringify(categoria), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Metodo che ritorna la lista delle categorie
     * Ritorna la lista delle categorie
     * @param descrizione descrizione della categoria
     */
    public findCategorieWithHttpInfo(descrizione?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/categoria';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (descrizione !== undefined) {
            queryParameters.set('descrizione', <any>descrizione);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKey) {
            headers.set('Token', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
