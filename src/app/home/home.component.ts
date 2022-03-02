import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../magazine.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsData = [{
    title:'', image:'',content:'', description:'',url:'',publishedAt:'',source:{name:'',url:''}
  }];
  constructor(private mservice: MagazineService) {
    this.mservice.getLatestNews().subscribe(res => {
      this.newsData = res.articles;
      console.log(this.newsData);
    })
    
  }
  
  ngOnInit(): void {
  }

}
