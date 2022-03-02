import { Component, OnInit } from '@angular/core';

// USed for reading routes
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
  m: string = "";
  p:number = 1;
  Mdata:any = [];
  constructor(private route:ActivatedRoute, private Mservice:MagazineService) { 

    this.route.params.subscribe(rec => {

      this.m = rec['tag'];
      this.Mdata =[{
        poster_path:'',overview:'',release_date:'',title:"",popularity:'',id:""
      }];
      this.Mservice.getMovies(this.m).subscribe(res => {
        this.Mdata = res.results;
        console.log(this.Mdata);
      })
    });
  }
  ngOnInit(): void {
  }
}
