import { Component, OnInit } from '@angular/core';

// To read about routes we need this module
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  name:string ="";
  PlatformData =[{id:"",name:"",image_background:""}];
  constructor(private mservice : MagazineService) { 
    this.mservice.getGames('platforms').subscribe(res => {
      this.PlatformData = res.results;

    })
  }

  ngOnInit(): void {
  }

}
