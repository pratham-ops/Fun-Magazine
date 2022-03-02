import { Component, OnInit } from '@angular/core';
// To read about routes we need this module
import { ActivatedRoute, Router } from '@angular/router';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  id:string="";
  tag:string="";
  name:string="";
  gamesdata=[{id:"",name:"", released:"",background_image:"",rating:""}];
  constructor(private route: ActivatedRoute, private mservice : MagazineService) { 

    this.route.params.subscribe(rec=>{
      this.tag= rec['tag']; 
      this.id= rec['id']; 
      this.name = rec['name'];
      if(this.tag=="developers"){
        this.mservice.getGamesByDeveloper(this.id).subscribe(res => {
          this.gamesdata = res.results;
          console.log(this.gamesdata);
        })
      }
      else if(this.tag=="genres"){
        this.mservice.getGamesByGenres(this.id).subscribe(res => {
          this.gamesdata = res.results;
          console.log(this.gamesdata);
        })
      }
      else if(this.tag=="publishers"){
        this.mservice.getGamesByPublishers(this.id).subscribe(res => {
          this.gamesdata = res.results;
          console.log(this.gamesdata);
        })
      }
      else if(this.tag=="platforms"){
        this.mservice.getGamesByPlatform(this.id).subscribe(res => {
          this.gamesdata = res.results;
          console.log(this.gamesdata);
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
