import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';
import { take } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { NgControlStatusGroup } from '@angular/forms';


// Can use THIS directive to check if the user has a specific role ==> Instead of *ngIf in the HTML 
// Example:  *appRoleOfUser='["Admin", "Moderator"]'...

@Directive({
  // enforce structural directive
  selector: '[appRoleOfUser]'
})
export class RoleOfUserDirective implements OnInit{
  @Input() appRoleOfUser: string[]  = [];
  user: User = {} as User; // Empty user object

  constructor(
     private serviceAccount:AccountService 
    ,private refTemplate: TemplateRef<any> 
    ,private refContainerView: ViewContainerRef) {}

  // This will run when the directive is initialized
  ngOnInit(): void {

    this.serviceAccount.currentUser$.pipe(take(1)).subscribe({
      next: u => {
        if (u){
          // get user from account service
          this.user = u;
        }
      }
    })

    console.log("user app role in role-of-dire:", this.user.roles);

    // .some will return true if the user has any of the roles in the array
    // .includes will check appRoleOfUser array if it contains any of the roles in the user object --> if this is true, our * will display

    if (this.user.roles && this.user.roles.some(x => this.appRoleOfUser.includes(x))){

      this.refContainerView.createEmbeddedView(this.refTemplate);
    } // user does not have any of the roles in the array 
    else {
      this.refContainerView.clear(); // removing the element from the DOM --> works like *ngIf
    }
  }

}
