import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../../../services/api-factory/api-factory.service';

@Component({
  selector: 'app-taxonomy-view',
  templateUrl: './taxonomy-view.component.html',
  styleUrls: ['./taxonomy-view.component.scss']
})
export class TaxonomyViewComponent implements OnInit {

  constructor(
    private apiFactory: ApiFactoryService
  ) { }

  ngOnInit() {
    this.apiFactory.getTaxonomy(123).subscribe(res => console.log('got taxonomy: ', res));
  }

}
