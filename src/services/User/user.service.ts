import { Injectable } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { EMPTY, Observable, Subject } from 'rxjs';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly user: Observable<User | null> = EMPTY;
  
  public loggedInUserData: Subject<any> = new Subject();

  public userdata:any;
  
  constructor(private auth: Auth, public dataProvider: DataProviderService, private fs: Firestore) {
    if (this.auth) {
      this.user = authState(this.auth);
      // console.log(this.user)
      this.user.subscribe((user: any) => {
        // console.log(user)
        if (user) {
          this.dataProvider.LoggedInUser = true;
          this.dataProvider.user = user;
          this.loggedInUserData.next(user)
          // console.log(this.dataProvider.user)
        }
        else {
          this.dataProvider.LoggedInUser = false;
          this.loggedInUserData.next(false)
        }
      })
    }
    else{
      console.log('logged out')
      
    }
    
  }



  public get getUserData(): Observable<User | null> {
    console.log(this.user)
    return this.user;
  }


  public addUser(data: any) {
    return addDoc(collection(this.fs, urls.users), data);
  }

  public getUser(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return getDoc(doc(this.fs, userIDUrl));
  }

  public getAllUsers() {
    return getDocs(collection(this.fs, '/users'));
  }

  public updateUser(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return updateDoc(doc(this.fs, userIDUrl), data)
  }

}
