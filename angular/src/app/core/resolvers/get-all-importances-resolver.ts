
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
    ImportanceService
} from "./../importance.services";

import { ResGeneric } from "../../models/resGeneric";

import { Importance } from "../../models/Importance";


@Injectable()
export class GetAllImportanceResolver implements Resolve<Observable<ResGeneric<Importance[]>>> {
    constructor(private importanceService: ImportanceService, private toastr: ToastrService) { }

    resolve() {
        return this.importanceService.getAllImportancesFromDB();
    }
}

