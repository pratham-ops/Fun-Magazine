import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  m: string = "";
  Mdata:any;
  imdb_id:string = "";
  cast = {
    directors:{items:[{name:""}]},
    actors: [{name:"",image:"",asCharacter:""}],
    writers:{items:[{name:""}]}
  };
  constructor(private route: ActivatedRoute, private Mservice : MagazineService) {
    this.route.params.subscribe(rec => {
      this.Mdata ={
        poster_path:'',overview:'',release_date:'',title:"",popularity:'',imdb_id:"",genres:[{name:''}],production_companies:[{name:'',country:'',}], budget:'', revenue:'',status:'', tagline:'',runtime:'',spoken_languages:''
      };
      this.m = rec['id'];
      this.Mservice.getMovies(this.m).subscribe(res => {
        this.Mdata = res;
        this.imdb_id = res.imdb_id;
        this.Mservice.getCast(this.imdb_id).subscribe(cast => {
          this.cast = cast;

        })
      })
    });
  }
  ngOnInit(): void {
  }
}
