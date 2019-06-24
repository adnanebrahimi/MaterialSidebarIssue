import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { PageEagerComponent } from './page-eager/page-eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-one', pathMatch: 'full' },
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path: 'page-one',
        loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule)
      },
      {
        path: 'page-two',
        loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule)
      },
      { path: 'page-eager', component: PageEagerComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
