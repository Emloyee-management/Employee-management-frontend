import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartingPageComponent } from './component/starting-page/starting-page.component';

const routes: Routes = [{ path: '', component: StartingPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
