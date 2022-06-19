import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthTemplateComponent } from './Components/auth-template/auth-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './Components/upload/upload.component';
import { RightComponent } from './Components/right/right.component';
// import { AuthGuard } from './_guards/auth.guard';

const AuthRoute: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    AuthTemplateComponent,
    UploadComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoute),
  ],
})
export class AuthModule {}
