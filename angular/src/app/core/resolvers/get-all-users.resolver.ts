import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";
import { ResGetAllUsersModel } from "../../models/resGetAllUsersModel";
import { UserService } from "../user.service";
import { ResGeneric } from "../../models/ResGeneric";
import { User } from '../../models/User';


@Injectable()
export class GetAllUsersResolver implements Resolve < Observable <ResGeneric<User[]>> > {
  constructor(private userService: UserService, private toastr: ToastrService) {}

  resolve() {
    return this.userService.getAllUsers();
  }
}

