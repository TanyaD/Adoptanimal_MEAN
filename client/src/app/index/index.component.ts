import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pets = [];
  fetchError:string;

  constructor(private _httpService: DataService) { }

  ngOnInit() {
    this.getPetsFromService()
  }

  getPetsFromService(){
    let observable=this._httpService.allPets()
      observable.subscribe(data => {
        if(data['message']=="Success"){
        this.pets= data['pets'];
        }
        else{
          this.fetchError='OOps'
        }
    })
  }

}
