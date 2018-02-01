import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = {_id:'',name:'', type:'',description:'',skill1:'',skill2:'',skill3:'' };
  petId:string;
  errorMsg:string;
  constructor(    private _httpService: DataService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
    this.getPetId();
  }
  getPetId(){
    this._route.params.subscribe(data=>{
      //got restaurantId
      this.petId = data.id;
      this.getOnePet();
      
    })
  }
  getOnePet(){
    let observable = this._httpService.getOnePet(this.petId);
    observable.subscribe(data=>{
      if(data['message']=='Success'){
        this.pet = data['pet'];
      }
      else{
        this.errorMsg = data['error']['errors']
      }
    })
  }
  editPet(){
    this._httpService.editPet(this.pet).subscribe(data=>{
      if(data['message']=='Success'){
        this.pet = data['pet'];
        this._router.navigate(['/details/', this.petId])

      }
      else{
        this.errorMsg = data['error']['errors']
      }

    })
  }
}
