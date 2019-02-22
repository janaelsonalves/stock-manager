import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LdapService {
  private apiUrl = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  getUser(user: any) {
    return this.http.get(`${this.apiUrl}/api/ldap/users/${user}`);
  }
}
