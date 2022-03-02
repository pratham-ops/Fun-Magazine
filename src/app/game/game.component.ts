import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../magazine.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: string="";
  gamedata={name:"",description_raw:"",released:"",background_image:"",website:""};
  constructor(private route: ActivatedRoute, private mservice : MagazineService) {
    this.route.params.subscribe(rec => {
      this.id = rec['id'];
      this.mservice.getGameDetails(this.id).subscribe(res => {
        this.gamedata = res;
        console.log(this.gamedata);
      })
    });
  }
  ngOnInit(): void {
  }
}
