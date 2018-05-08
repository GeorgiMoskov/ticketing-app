import {
    Injectable
} from '@angular/core';

import {
    HttpClient
} from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { ResGeneric } from '../models/resGeneric';
import { Importance } from '../models/Importance';


@Injectable()
export class ImportanceService {

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private toastr: ToastrService) { }

    public getAllImportancesFromDB() {
        return this.http.get<ResGeneric<Importance[]>>('http://localhost:3001/api/importance/all');
    };

    public getAllImportances() {
        let importances;
        const resDataImportance: ResGeneric<Importance[]> = this.route.snapshot.data['importances'];
        if (resDataImportance.error) {
            this.toastr.error(resDataImportance.error, '', { closeButton: true });
        } else {
            importances = resDataImportance.data;
        }
        return importances;
    };
}
