import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full", //compatível com whitespaces
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module")
      .then(modulo => modulo.HomeModule)
  },
  {
    path: "animais",
    loadChildren: () => import("./animais/animais.module")
      .then(module => module.AnimaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
