import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { Error404Component } from './application/error404/error404.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CreateComponent } from './application/crud/create/create.component';
import { UpdateComponent } from './application/crud/update/update.component';

const routes: Routes = [
  {
    path: 'tutoriel',
    children: [{ path: ':id', component: TutorielsComponent }],
  },
  { path: 'home', component: HomeComponent },
  { path: 'formulaire', component: CreateComponent },
  { path: 'crud', component: ReadComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update/:id', component: UpdateComponent },
  { path: 'fun', component: FunComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
