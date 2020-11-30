import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
//import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { VoizfonicaComponent } from './voizfonica/voizfonica.component';
import { DataTablesModule } from 'angular-datatables';
import { DummyComponent } from './dummy/dummy.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UseregComponent } from './usereg/usereg.component';
import { DongleService, EmployeeService, PaymentService, PostpaidService, PrepaidService, RegiService } from './regi.service';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AddplansComponent } from './addplans/addplans.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { UpdateprepaidComponent } from './updateprepaid/updateprepaid.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { UpdatedongleComponent } from './updatedongle/updatedongle.component';
import { BillComponent } from './bill/bill.component';
import { UserpreComponent } from './userpre/userpre.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserdongleComponent } from './userdongle/userdongle.component';
import { PaymentComponent } from './payment/payment.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { ChatComponent } from './chat/chat.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { OffersComponent } from './offers/offers.component';
import { ForgotadminComponent } from './forgotadmin/forgotadmin.component';
import { ForgotuserComponent } from './forgotuser/forgotuser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PaymentpostComponent } from './paymentpost/paymentpost.component';
import { PaymentdongleComponent } from './paymentdongle/paymentdongle.component';
import { PaymentofferComponent } from './paymentoffer/paymentoffer.component';
import { NgxSpinnerModule } from "ngx-spinner";
//import { UserregComponent } from './userreg/userreg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    LoginsuccessComponent,
    // CreateEmployeeComponent,
    //  EmployeeListComponent,
    // UpdateEmployeeComponent,
    VoizfonicaComponent,
    DummyComponent,
    UserloginComponent,
    UseregComponent,
    CreateuserComponent,
    UserdetailsComponent,
    UpdateuserComponent,
    AboutusComponent,
    ContactusComponent,
    UserhomeComponent,
    AddplansComponent,
    ViewplansComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    UpdateprepaidComponent,
    UpdatepostComponent,
    UpdatedongleComponent,
    BillComponent,
    UserpreComponent,
    UserpostComponent,
    UserdongleComponent,
    PaymentComponent,
    FaqComponent,
    PaymentsuccessComponent,
    ChatComponent,
    AdminprofileComponent,
    OffersComponent,
    ForgotadminComponent,
    ForgotuserComponent,
    UserprofileComponent,
    TransactionComponent,
    PaymentpostComponent,
    PaymentdongleComponent,
    PaymentofferComponent,
    //UserregComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
    DataTablesModule,
    NgxSpinnerModule,
  ],
  providers: [RegiService,EmployeeService,PrepaidService,PostpaidService,DongleService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
