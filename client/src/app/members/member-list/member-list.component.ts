import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Member } from 'src/app/_models/Member';
import { Pagination, ResultPaginated } from 'src/app/_models/Pagination';
import { User } from "src/app/_models/User";
import { parameterUser } from 'src/app/_models/parameterUser';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  // members$: Observable<Member[]> | undefined;
  listGender = [{ value: 'female', display: 'Female' }, { value: 'male', display: 'Male' }]
  members: Member[] = []; // this is the array of members we want to display
  pagination: Pagination | undefined;
  parameterUser: parameterUser | undefined;


  constructor(private serviceAccount: AccountService, private memberService: MembersService) {
    // account service updated in the member service ctor

    this.parameterUser = this.memberService.getParameterUser();
  }

  ngOnInit(): void {
    this.membersLoad();
  }

  membersLoad() {
    if (this.parameterUser) {
      this.memberService.setParameterUser(this.parameterUser);
      this.memberService.getMembers(this.parameterUser).subscribe({
        // response we get from our member service is the result paginated class populated
        next: response => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        }
      })
    } else return; // if parameterUser is undefined, return
  }


  // event is the page changed event

  pageChanged(event: any) {
    if (this.parameterUser && this.parameterUser?.pageNumber !== event.page) {
      this.memberService.setParameterUser(this.parameterUser);
      this.parameterUser.pageNumber = event.page;
      this.membersLoad();
    }
  }


  filtersReset() {
      this.parameterUser = this.memberService.userFilterReset();
      this.membersLoad(); // get re-setted list of users based on default parameters 
  }
}
