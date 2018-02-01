import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'


@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {
    this.allPets()
  }

allPets(){
  return this._http.get('/pets');
}
addPet(newP){
  return this._http.post('/new', newP)
}
getOnePet(id){
  return this._http.get('/pets/'+id);
}
deletePet(id){
  return this._http.delete('/pets/'+id)
}
editPet(pet){
  return this._http.put('/edit', pet)
}
}
