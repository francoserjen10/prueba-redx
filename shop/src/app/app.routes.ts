import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then((a) => a.ProductsComponent)
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component').then((a) => a.CartComponent)
    }
];
