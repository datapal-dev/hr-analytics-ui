import { Component , Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  msgs: Message[] = [];
  previousUrl: string;
  blockedDocument: boolean = false;
  constructor(private renderer: Renderer2, private router: Router, private messageService: MessageService) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug === 'login') {
            this.renderer.addClass(document.body, 'bgimage');
          }
          else{
            this.renderer.removeClass(document.body, 'bgimage');
          }
        }
      });
 
  }
  showSuccess(m) {
        this.messageService.add({severity:'success', summary:'Success', detail:m});
    }
    
    showError(m) {
        this.messageService.add({severity:'error', summary:'Error', detail:m});
    }
    showWarning(m) {
        this.messageService.add({severity:'warning', summary:'Warning', detail:m});
    }
    
    showInfo(m) {
        this.messageService.add({severity:'info', summary:'Information', detail:m});
    }
    clear() {
        this.messageService.clear();
    }
    loading(a){
      this.blockedDocument = a;
    }
}
