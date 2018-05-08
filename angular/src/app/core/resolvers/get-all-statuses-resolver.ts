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
    ToastrService
  } from "ngx-toastr";

  import {
    StatusService
  } from "./../status.service";

  import { ResGeneric } from "../../models/resGeneric";
  import { Status } from "../../models/Status";
  
  
  @Injectable()
  export class GetAllStatusResolver implements Resolve < Observable <ResGeneric<Status[]>> > {
    constructor(private statusService: StatusService, private toastr: ToastrService) {}
  
    resolve() {
      return this.statusService.getAllStatusesFromDB();
    }
  }
  
  