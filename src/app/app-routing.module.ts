import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./Auth/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./Auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgetPassword', loadChildren: () => import('./Auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'resetPassword', loadChildren: () => import('./Auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) },
  // { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
  // { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule) },
  // { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
