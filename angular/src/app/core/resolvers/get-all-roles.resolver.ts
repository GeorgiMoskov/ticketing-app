import {
  Injectable
} from "@angular/core";
import {
  Resolve
} from "@angular/router";
import {
  Observable
} from "rxjs/Observable";
import {
  RoleService
} from "../role.service";
import {
  ToastrService
} from "ngx-toastr";
import { ResGeneric } from "../../models/resGeneric";
import { Role } from "../../models/Role";


@Injectable()
export class GetAllRolesResolver implements Resolve < Observable <ResGeneric<Role[]>> > {
  constructor(private roleService: RoleService, private toastr: ToastrService) {}

  resolve() {
    return this.roleService.getAllRoles();
  }
}

