import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimeagoModule } from "ngx-timeago";


//3rd Party imports here

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(
      {
        positionClass:'toast-bottom-right'
      }
    ),
    NgxSpinnerModule.forRoot({
      type: 'pacman'
    }),
    FileUploadModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TimeagoModule.forRoot()
  ],
  // export imported modules since we are in the SHARED module
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxSpinnerModule,
    FileUploadModule,
    BsDatepickerModule,
    PaginationModule,
    ButtonsModule,
    ModalModule,
    TimeagoModule
  ]
})
export class SharedModule { }
