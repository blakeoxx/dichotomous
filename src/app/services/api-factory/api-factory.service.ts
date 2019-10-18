import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './api-urls';
import { TaxonomyModel } from '../../data-models/taxonomy.model';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor(
    private http: HttpClient
  ) { }

  createTaxonomy(taxonomy: TaxonomyModel) {
    // return this.http.post(ApiUrls.CREATE_TAXONOMY, taxonomy);
    return this.http.get('./assets/api-stubs/create-taxonomy-success.json');
  }

  getTaxonomy(id: number) {
    // return this.http.get(ApiUrls.GET_TAXONOMY + id);
    return this.http.get('./assets/api-stubs/get-taxonomy-success.json');
  }
}
