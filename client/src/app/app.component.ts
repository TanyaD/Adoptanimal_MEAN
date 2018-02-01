import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: DataService){}
  ngOnInit(){
  }

}
