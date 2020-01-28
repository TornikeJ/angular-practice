import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { UrlShorteningService } from './url-shortening.service';
import { Url } from './url.model';


@Component({
  selector: 'app-url-shortening',
  templateUrl: './url-shortening.component.html',
  styleUrls: ['./url-shortening.component.scss']
})
export class UrlShorteningComponent implements OnInit {

  displayStyle;
  showDesktop = false;
  innerWidth;
  hashId;
  textCoppied;
  link: string;
  linkStorage: Url[] = [];
  errorMessage;

  @ViewChild('linkInput', { static: true }) linkInput;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }

  constructor(private urlShorteningService: UrlShorteningService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkWidth();

    if (localStorage.getItem('linkStorage')) {
      this.linkStorage = JSON.parse(localStorage.getItem('linkStorage'));
    }
  }

  checkWidth() {
    if (this.innerWidth > 980) {
      this.displayStyle = 'flex';
    } else {
      this.showDesktop = false;
      this.displayStyle = 'none';
    }
  }

  menuClicked() {
    this.showDesktop = !this.showDesktop;

    if (this.showDesktop) {
      this.displayStyle = this.showDesktop && 'flex';
    }
    else {
      this.displayStyle = 'none';
    }
  }

  shortenLink(originalLink: string) {
    this.urlShorteningService.createShortenedLink(originalLink).subscribe(
      (shortenedLink) => {
  
        this.hashId = shortenedLink.hashid;
        this.link = 'https://rel.ink/' + this.hashId;


        this.linkStorage.findIndex(
          (arr) => {
            return arr.originalUrl == originalLink;
          }) === -1 ?
          this.linkStorage.push(new Url(shortenedLink.url, this.link)) : this.errorMessage = 'Link has already been added';

        localStorage.setItem('linkStorage', JSON.stringify(this.linkStorage));
        this.linkInput.reset();
      },
      (error) => {
          this.errorMessage = error;
          this.linkInput.reset();
      }
    );
  }

  copyText(text: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.textCoppied = text;
  }
}
