import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public images = [{path: ''}, {path: ''}, {path: ''}, {path: ''}, {path: ''}, {path: ''}
  ];
  constructor(
  ){}
  
  ngOnInit(): void {
  }

  public remove(index: number) {
    this.images[index].path=this.images[index+1].path;
    this.images[index+1].path='';
  }

  public addImage(index: number) {
    if(index==0){
      this.images[index].path='/assets/images/car.jpg'
    } else if(index==1){
      this.images[index].path='/assets/images/cars_1.jpg'
    } else if(index==2){
      this.images[index].path='/assets/images/cars_2.jpg'
    } else if(index==3){
      this.images[index].path='/assets/images/cars_3.jpg'
    } else if(index==4){
      this.images[index].path='/assets/images/cars_4.jpg'
    } else if(index==5){
      this.images[index].path='/assets/images/cars_5.jpeg'
    }
  }

}

