// import { Response , Http  } from '@angular/http';
import { HttpClient,
         HttpHeaders,
         HttpParams,
         HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable} from 'rxjs/Observable';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
 // import { FUNCTION_TYPE } from '@angular/compiler';
import 'rxjs/Rx.js';

@Injectable()
export class DataStorageServise {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }
  storeRecipes() {
   /* const token = this.authService.getToken();

    return this.httpClient.put('https://wizz-lib.firebaseio.com/recipes.json?auth='
    + token, this.recipeService.getRecipes(), {
      observe: 'body',
      headers: new HttpHeaders().set('Autorization', 'Bearer afdklasflaldf') // this
      // wont work becouse firebase dosent expect it
    });

    */
  const req = new HttpRequest('PUT', 'https://wizz-lib.firebaseio.com/recipes.json?auth=',
  this.recipeService.getRecipes(), {reportProgress: true});
  // {reportProgress: true, params: new HttpParams().set('auth', token)});
   // this is useful for upload or download data
  return this.httpClient.request(req);

  /*
 put('https://wizz-lib.firebaseio.com/recipes.json?auth=' + token,
    this.recipeService.getRecipes());
    */
  }
  getRecipes() {
    this.httpClient.get<Recipe[]>('https://wizz-lib.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
