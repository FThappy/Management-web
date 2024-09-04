import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { UserPageComponent } from './components/page/user-page/user-page.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // Layout chính có header và footer
    children: [
      // { path: '', component: HomeComponent },
      { path: 'users', component: UserPageComponent }
    ]
  },
//   {
//     path: 'auth',
//     component: LayoutAuthPageComponent, // Layout cho trang login không có header và footer
//     children: [
//       { path: 'register', component: RegisterComponent },
//       { path: 'login', component: LoginComponent },
//     ],
//   },
];
