import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./portal/portal.module").then((m) => m.PortalModule),
  },
  { path: "", redirectTo: "portal", pathMatch: "full" },
  { path: "**", redirectTo: "portal", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
