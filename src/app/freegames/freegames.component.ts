import { Component, OnInit } from '@angular/core';
// To read about routes we need this module
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-freegames',
  templateUrl: './freegames.component.html',
  styleUrls: ['./freegames.component.css'],
})
export class FreegamesComponent implements OnInit {
  p = 1;
  FreeData = [
    {
      developer: '',
      freetogame_profile_url: '',
      game_url: '',
      genre: '',
      id: '',
      platform: '',
      publisher: '',
      release_date: '',
      short_description: '',
      thumbnail: '',
      title: '',
    },
  ];
  constructor(private mservice: MagazineService) {
    this.mservice.getFreegames().subscribe((res) => {
      this.FreeData = res;
      // console.log(res);
    });
  }
  ngOnInit(): void {}
}
