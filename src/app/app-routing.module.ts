import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { TaxonomyCreatorComponent } from './modules/taxonomy/taxonomy-creator/taxonomy-creator.component';
import { TaxonomyViewComponent } from './modules/taxonomy/taxonomy-view/taxonomy-view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: TaxonomyCreatorComponent
  },
  {
    path: 'view/:taxonomyID',
    component: TaxonomyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
