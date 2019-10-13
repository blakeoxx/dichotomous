import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxonomyCreatorComponent } from '../taxonomy/taxonomy-creator/taxonomy-creator.component';
import { TaxonomyViewComponent } from '../taxonomy/taxonomy-view/taxonomy-view.component';



@NgModule({
  declarations: [TaxonomyCreatorComponent, TaxonomyViewComponent],
  imports: [
    CommonModule
  ]
})
export class TaxonomyModule { }
