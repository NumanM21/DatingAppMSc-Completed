import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TimeagoModule, TimeagoPipe } from 'ngx-timeago';
import { MessageUser } from 'src/app/_models/MessageUser';
import { MessageService } from 'src/app/_services/message.service';

// Will be a child component of member-detail
@Component({
  selector: 'app-member-messagetab',
  templateUrl: './member-messagetab.component.html',
  styleUrls: ['./member-messagetab.component.css'],
  standalone: true,
  imports: [CommonModule, TimeagoModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush // removes console error we had
})
export class MemberMessagetabComponent implements OnInit {
  msgContent = '';
  @Input() username: string | undefined;
  @ViewChild('msgForm') msgForm?: NgForm;
  load = false;


  constructor(public serviceMessage: MessageService) { }

  ngOnInit(): void {
  }

  messageSend() {
    if (!this.username) return;
    this.load = true;
    this.serviceMessage.messageSender(this.username, this.
      msgContent)
      // use .then() when we want to do something after the promise is resolved
      .then(() => {
        
        // reset the form
        this.msgForm?.reset();
      })
      .finally(() => this.load = false);

  }
  
  scrollToBottom() {
    const chatCard = document.querySelector('.chat-card');
    if (chatCard) {
      chatCard.scrollTop = chatCard.scrollHeight;
    }
  }



}
