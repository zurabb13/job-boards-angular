import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ClientsComponent } from "./pages/clients/clients.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { CommunityComponent } from "./pages/community/community.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { FindJobComponent } from "./pages/find-job/find-job.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    title: "home",
    component: HomeComponent,
  },
  {
    path: "clients",
    title: "clients",
    // loadChildren: () => import("./pages/clients/clients.component"),
    component: ClientsComponent,
  },
  {
    path: "about",
    title: "about",
    component: AboutUsComponent,
  },
  {
    path: "community",
    title: "community",
    component: CommunityComponent,
  },
  {
    path: "blog",
    title: "blog",
    component: BlogComponent,
  },
  {
    path: "find-job",
    title: "find job",
    component: FindJobComponent,
  },
];
