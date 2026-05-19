import { Routes } from '@angular/router';
import { HomeComponent } from './views/pages/user-pages/home/home.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { CarSectionListingComponent } from './views/pages/admin-pages/car-sections/car-section-listing/car-section-listing.component';
import { BookingSectionsListingComponent } from './views/pages/admin-pages/booking-sections/booking-sections-listing/booking-sections-listing.component';
import { CustomerListingComponent } from './views/pages/admin-pages/customer-listing/customer-listing.component';
import { PaymentListingComponent } from './views/pages/admin-pages/payment-listing/payment-listing.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AdminDashboardComponent } from './views/pages/admin-pages/admin-dashboard/admin-dashboard.component';
import { SignInComponent } from './views/auth/sign-in/sign-in.component';
import { SignUpComponent } from './views/auth/sign-up/sign-up.component';
export const routes: Routes = [

    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: '',
        component: SideNavbarComponent,


        children: [

            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },

            {
                path: 'cars',
                component: CarSectionListingComponent
            },
            {
                path: 'booking',
                component: BookingSectionsListingComponent
            },
            {
                path: 'customerlising',
                component: CustomerListingComponent
            },
            {
                path: 'paymentlisting',
                component: PaymentListingComponent
            },
            {
                path: 'dashboard',
                component: AdminDashboardComponent
            },

        ],

    },

    {
        path: '**',
        component: NotFoundComponent
    }

];
