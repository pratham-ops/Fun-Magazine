import { Component, OnInit } from '@angular/core';
// To read about routes we need this module
import { MagazineService } from '../magazine.service';
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  DeveloperData =[{id:"",name:"",image_background:"",games_count:""}];
  constructor(private mservice : MagazineService) { 
    this.mservice.getGames('developers').subscribe(res => {
      this.DeveloperData = res.results;

    })
  }
  ngOnInit(): void {
  }

}
