import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth-guard.service';
import { WellcomeComponent } from './rootPage/wellcome/wellcome.component';
import { AboutComponent } from './rootPage/about/about.component';

const appRoutes: Routes = [

  { path: '', component: WellcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes',
   loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list',
  component: ShoppingListComponent },
  // {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
