import { Component, OnInit } from '@angular/core';

// To read about routes we need this module
import { MagazineService } from '../magazine.service';
@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  PublishersData =[{id:"",name:"",image_background:""}];
  constructor(private mservice : MagazineService) { 
    this.mservice.getGames('publishers').subscribe(res => {
      this.PublishersData = res.results;

    })
  }

  ngOnInit(): void {
  }

}
