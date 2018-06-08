import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {User} from './user';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private facebook: Facebook) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  createUserFacebook() {
    return this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
      alert(JSON.stringify(res));
    });
  }
}
