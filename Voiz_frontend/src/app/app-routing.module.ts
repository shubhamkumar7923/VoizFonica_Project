import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CreateCustomerComponent } from './create-customer/create-customer.component';
//import { CustomersListComponent } from './customers-list/customers-list.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import {CreateuserComponent} from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegComponent } from './reg/reg.component';
//import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { ContactusComponent } from './contactus/contactus.component';
import {VoizfonicaComponent} from './voizfonica/voizfonica.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import { UseregComponent } from './usereg/usereg.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserhomeComponent } from './userhome/userhome.component';
// import{ UserregComponent} from './userreg/userreg.component';
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



const routes: Routes = [
  {path:'',component:VoizfonicaComponent},
  {path:'voizfonica',component:VoizfonicaComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'loginsuccess/:emailId',component:LoginsuccessComponent},
  {path:'loginsuccess/voizfonica',component:VoizfonicaComponent},
  // {path:'voizfonica',component:VoizfonicaComponent},
  {path:'ureg',component:UseregComponent},
   { path: 'aboutus', component: AboutusComponent },
  { path: 'aboutus/:emailId', component: AboutusComponent },
  {path:'userhome',component:UserhomeComponent},
  {path:'userhome/:emailId',component:UserhomeComponent},

   { path: 'add', component: CreateuserComponent },
  { path: 'employees', component: UserdetailsComponent },
   { path: 'update/:id', component: UpdateuserComponent },
   { path: 'logout', component: VoizfonicaComponent },

  {path:'reg',component:RegComponent},
  {path:'Adminlogin',component:LoginComponent},
  {path:'contactus',component: ContactusComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'addplans',component:AddplansComponent},
  {path:'viewplans',component: ViewplansComponent},
  {path:'prepaid',component: PrepaidComponent},
  {path:'postpaid',component: PostpaidComponent},
  {path:'dongle',component: DongleComponent},
  {path:'updateprepaid/:id',component: UpdateprepaidComponent},
  {path:'updatepost/:id',component: UpdatepostComponent},
  {path:'updatedongle/:id',component: UpdatedongleComponent},
  {path:'billing',component: BillComponent},
  {path:'userpre',component: UserpreComponent},
  {path:'userpre/:emailId',component: UserpreComponent},

  {path:'userpost',component: UserpostComponent},
  {path:'userpost/:emailId',component: UserpostComponent},

  {path:'userdongle',component: UserdongleComponent},
  {path:'userdongle/:emailId',component: UserdongleComponent},

  {path:'payment',component: PaymentComponent},
  {path:'paypre/:emailId/:id',component: PaymentComponent},
  {path:'paypost/:emailId/:id',component: PaymentpostComponent},
  {path:'paydongle/:emailId/:id',component: PaymentdongleComponent},

  {path:'payoffer/:emailId',component:PaymentofferComponent},

  {path:'faq',component: FaqComponent},
  {path:'faq/:emailId',component: FaqComponent},

  {path:'paymentsuccess/:emailId',component: PaymentsuccessComponent},
  {path:'paymentsuccess/:emailId/:id',component: PaymentsuccessComponent},

  {path:'chat',component: ChatComponent},
  {path:'chat/:emailId',component: ChatComponent},

  {path:'adminprofile',component: AdminprofileComponent},
  {path:'adminprofile/:emailId',component: AdminprofileComponent},
    { path: 'userprofile', component: UserprofileComponent },
  { path: 'userprofile/:emailId', component: UserprofileComponent },

  {path:'offers',component: OffersComponent},
  {path:'offers/:emailId',component: OffersComponent},

  {path:'forgotadmin',component: ForgotadminComponent},
  {path:'forgotuser',component: ForgotuserComponent},
  {path:'transaction/:emailId',component:TransactionComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
