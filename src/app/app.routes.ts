import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';

export const routes: Routes = [
    { path: "", component: ListComponent },
    {path:"list", redirectTo:""},
    { path: "detail/:id", component: DetailComponent },
    { path: "ajouter", component: AjouterComponent },
    {path: "ajouterreactif", component: AjouterComponent},
    {path:"**",component:PageNotFoundComponent},
];
