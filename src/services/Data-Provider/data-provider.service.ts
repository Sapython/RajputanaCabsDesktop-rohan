import { Injectable } from '@angular/core';
import { UserStructure } from 'src/structures/user.structure';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public LoggedInUser:boolean = false;
  public user: any;
 
  constructor() { }
}
