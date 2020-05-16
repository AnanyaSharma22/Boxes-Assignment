import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public images =[];
  path1:any; 
  path2:any;
  path3:any;
  path4:any;
  path5:any;
  path6:any;
  constructor(
  ){}
  
  ngOnInit(): void {
    this.initializeImageArray();
  }

  initializeImageArray(){
    this.images = [{path: '/assets/images/car.jpg', description: 'image 1'}, {path: '/assets/images/cars_1.jpg', description: 'image 2'},
    {path: '/assets/images/cars_2.jpg', description: 'image 3'}, {path: '/assets/images/cars_3.jpg', description: 'image 4'},
    {path: '/assets/images/cars_4.jpg', description: 'image 5'}, {path: '/assets/images/cars_5.jpeg', description: 'image 6'}
    ];
  }

  public remove(index: number) {
    this.images.splice(index, 1);
  }

}

