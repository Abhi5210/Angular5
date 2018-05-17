import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { EnformComponent } from './rightbody/enform/enform.component';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { NewcourcesComponent } from './routes/newcources/newcources.component';

import { CourseService } from './course.service';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';

import { ReviewService } from './review.service';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';

import { OffercodePipe } from './pipes/offercode.pipe';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';

import { EnquiryformComponent } from './rightbody/enquiryform/enquiryform.component';
import { EnquiryService } from './enquiry.service';


const routes = [
  {path:"",component:HomeComponent},
  {path:"offers",component:OffersComponent},
  {path:"newcources",component:NewcourcesComponent},
  {path:"offices",component:OfficesComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"vclass",component:VirtualclassComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnformComponent,
    HomeComponent,
    ReviewsComponent,
    OffersComponent,
    OfficesComponent,
    VirtualclassComponent,
    NewcourcesComponent,
    CourselistComponent,
    CourseComponent,
    ReviewComponent,
    ReviewlistComponent,
    OffercodePipe,
    FiltercoursePipe,
    EnquiryformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService, ReviewService, EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
