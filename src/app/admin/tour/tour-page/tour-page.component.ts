import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss']
})
export class TourPageComponent {
  active:boolean = false;
  imageSrc = '';
      messageText = '';
      imageButtons = [
        {
          src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         
        },
        {
          src: 'https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
         
        },
        {
          src: 'https://images.unsplash.com/photo-1600258881621-796a58df721e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         
        },{
          src:"https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        }
      ]
    
  ngOnInit(): void {
    this.imageSrc = this.imageButtons[0].src;
   
  }
  toggleActive() {
    this.active = !this.active;
  }
  onClick(imageNameObject: { src: string }) {
    this.imageSrc = imageNameObject.src;
  }
}
