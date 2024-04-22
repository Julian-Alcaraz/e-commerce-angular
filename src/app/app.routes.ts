import { Routes } from '@angular/router';
// import { ListComponent } from '@products/pages/list/list.component'; // lo comento por el export default del componente
// import { AboutComponent } from '@info/pages/about/about.component' ; // lo comento por el export default del componente
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
// import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        //  con esta forma carga siempre que se inicie la app el componente
        // component: ListComponent
        // con esta forma carga solo cuando esta en la ruta, pero tenes que hacer esta importacion con el then
        // loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
        // pero si agregas en listComponent export default, no hace falta el .then
        loadComponent: () => import('./domains/products/pages/list/list.component')

      },
      {
        path: 'about',
        // component: AboutComponent
        loadComponent: () => import('./domains/info/pages/about/about.component')
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component')
        // component: ProductDetailComponent,
      },
    ]
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];
