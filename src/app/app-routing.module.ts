import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomesticCatComponent} from '..//app/domestic-cat/domestic-cat.component';
import {WildcatComponent} from '..//app/wildcat/wildcat.component';
import {BobCatComponent} from './bob-cat/bob-cat.component';
import {LionComponent} from '..//app/lion/lion.component';
import {LeopardComponent} from '..//app/leopard/leopard.component';
import {PantherComponent} from '..//app/panther/panther.component';
import {GepardComponent} from '..//app/gepard/gepard.component';
import {PumaComponent} from '..//app/puma/puma.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';








const routes: Routes = [
  
 
{path:'domestic-cat', component:DomesticCatComponent},
{path:'wildcat', component:WildcatComponent},
{path:'bob-cat', component:BobCatComponent},
{path:'lion', component:LionComponent},
{path:'leopard', component:LeopardComponent},
{path:'panther', component:PantherComponent},
{path:'gepard', component:GepardComponent},
{path:'puma', component:PumaComponent},
{path:'page-not-found', component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
