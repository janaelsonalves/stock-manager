import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  switchMap,
  filter,
  distinctUntilChanged
} from "rxjs/operators";

import { LdapService } from "./ldap.service";
import { Observable } from "rxjs";
import { User } from "./users/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  searchControl: FormControl;
  private users = [];

  constructor(private ldapService: LdapService) {
    this.searchControl = new FormControl("");
  }

  ngOnInit() {
    this.searchUser();
  }

  searchUser() {
    this.searchControl.valueChanges
      .pipe(
        filter(value => value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => this.ldapService.getUser(value))
      )
      .subscribe(results => {
        this.users = results["entries"].map(user => {
          let currentUser: User = {
            dn: user.dn,
            uid: user.attributes.uid,
            cn: user.attributes.cn,
            sn: user.attributes.sn,
            fullName: user.attributes.fullName,
            givenName: user.attributes.givenName,
            ou: user.attributes.ou
          };
          return currentUser;
        });
      });
  }
}
