import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  singup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0VHC3fYx1zNH_7HffnV5U5THvj2IZYss',
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }
}

