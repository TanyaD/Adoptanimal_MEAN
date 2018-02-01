import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
//to get ID from url:
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  petId: string;
  pet:string;
  fetchError:string;
  pets=[]

  constructor(private _httpService: DataService,
    private _route: ActivatedRoute,
    private _router: Router) { }

    ngOnInit() {
      this._route.params.subscribe(data=>{
        this.petId = data.id
        this.getOnePet();
      })
    }
    getOnePet(){
      let observable = this._httpService.getOnePet(this.petId);
      observable.subscribe(data=>{
        if(data['message']=='Success'){
          this.pet = data['pet'];
        }
      })
    }

    deletePet(id){
      this._httpService.deletePet(id).subscribe(data=>{
        this.getPetsFromService()
      })
    }
    getPetsFromService(){
      let observable=this._httpService.allPets()
        observable.subscribe(data => {
          if(data['message']=="Success"){
          this.pets= data['pets'];
          this._router.navigate(['/'])
          }
          else{
            this.fetchError='OOps'
          }
      })
    }

    addLike(pet){
	    pet.like +=1;
	    this._httpService.editPet(this.pet).subscribe(data => {
	    })
	  }
}
