import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { ImportantNumComponent } from './important-num/important-num.component';
import { MyNumsComponent } from './my-nums/my-nums.component';

const routes: Routes = [
{
	path: '', component: HomecontentComponent
},
{
	path: 'important-num', component: ImportantNumComponent
},
{
	path: 'my-nums', component: MyNumsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
