import { Component, OnInit } from '@angular/core';
// To read about routes we need this module
import { MagazineService } from '../magazine.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  name:string = '';
  GenresData =[{id:"",name:"",image_background:""}];
  constructor(private mservice : MagazineService, private route: ActivatedRoute) { 

    // this.route.params.subscribe(rec =>{
      // this.name = rec['name'];
      this.mservice.getGames('genres').subscribe(res => {
        this.GenresData = res.results;
        console.log(this.GenresData);
      })
    // })
   
  }

  ngOnInit(): void {
  }

}
