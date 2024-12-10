import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlickerSearchComponent } from './components/flicker-search/flicker-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'flickr-search', pathMatch: 'full' },
  {
    path: 'flickr-search',
    component: FlickerSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlickerSearchRoutingModule {}
