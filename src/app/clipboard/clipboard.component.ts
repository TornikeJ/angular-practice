import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {
  innerWidth = 1200;
  backgroundStyle = 'url(\'assets/clipboard/bg-header-desktop.png\')';
  isLoading = false;
  loading = new Subject<void>();
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

  }
  
  constructor() { }
  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }

  checkWidth() {
    if (this.innerWidth > 880) {
      this.backgroundStyle = 'url(\'assets/clipboard/bg-header-desktop.png\')';
    } else {
      this.backgroundStyle = 'url(\'assets/clipboard/bg-header-mobile.png\')';
    }
  }

  onLoad() {
    this.loading.next();
  }

}
