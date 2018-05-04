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
  ResGetAllRolesnamesModel
} from "../../models/resGetAllRolesnamesModel";
import {
  RoleService
} from "../role.service";
import {
  ToastrService
} from "ngx-toastr";


@Injectable()
export class GetAllRolesResolver implements Resolve < Observable < ResGetAllRolesnamesModel >> {
  constructor(private roleService: RoleService, private toastr: ToastrService) {}

  resolve() {
    return this.roleService.getAllRoles();
  }
}

