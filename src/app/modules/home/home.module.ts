import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './Components/home-template/home-template.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { BannerComponent } from './Components/banner/banner.component';
import { AboutComponent } from './Components/about/about.component';
// import { CoursesGuard } from './_guard/courses.guard';

const HomeRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeTemplateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(HomeRoute)],
})
export class HomeModule {}
