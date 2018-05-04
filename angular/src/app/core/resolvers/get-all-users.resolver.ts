import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";
import { ResGetAllUsersModel } from "../../models/resGetAllUsersModel";
import { UserService } from "../user.service";


@Injectable()
export class GetAllUsersResolver implements Resolve < Observable <ResGetAllUsersModel> > {
  constructor(private userService: UserService, private toastr: ToastrService) {}

  resolve() {
    return this.userService.getAllUsers();
  }
}

