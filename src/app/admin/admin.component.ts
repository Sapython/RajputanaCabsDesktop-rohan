import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentPanel: string = 'Panel';
  breakpoint: number = 1000;
  largeScreen: boolean = window.innerWidth > this.breakpoint;
  showSidebar: boolean = false;
  time: Date = new Date();
  date:string = this.time.toDateString();



  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const urlArr = url.split('/');
        let panel = urlArr[urlArr.length - 1];
        if(urlArr.length > 3 && urlArr[2] == 'users' ){
           panel = "User";
        }
        if(urlArr.length > 3 && urlArr[2] == 'agents' ){
          panel = "agent";
       }
        const panelWords = panel.split('-');
        panelWords.forEach((word, index) => {
          panelWords[index] = word.charAt(0).toUpperCase() + word.substring(1);
          console.log(panelWords);
          this.currentPanel=panelWords.join(' ');
          console.log(this.currentPanel);
        });
        this.currentPanel = panelWords.join(' ');
      }
    });
  }

  ngOnInit(): void {

  }

  onWindowResize() {
    this.largeScreen = window.innerWidth > this.breakpoint;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }

}
