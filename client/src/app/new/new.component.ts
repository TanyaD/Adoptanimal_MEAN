import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newP={name:'', type:'',description:'',skill1:'',skill2:'',skill3:'' };
  errorMsg: string;

  constructor(private _httpService: DataService, private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let observable = this._httpService.addPet(this.newP);
      observable.subscribe(data=>{
        if(data['message']=="Success"){
        this.newP={name:'', type:'',description:'',skill1:'',skill2:'',skill3:'' };
        this._router.navigate(['/'])
        }
        else{
          this.errorMsg = data['error']['errors']
        }
      })
    }

}
