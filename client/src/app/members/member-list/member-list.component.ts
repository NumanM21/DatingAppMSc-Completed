import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Member } from 'src/app/_models/Member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = []; // stores our members as array 

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.memberLoad();
  }

  memberLoad()
  {
    //.getMembers returns observal so we .subscribe, Then we use {} to access the observable object we subscribed to
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    })

  }

}
