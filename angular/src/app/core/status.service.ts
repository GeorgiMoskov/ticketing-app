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
import { Status } from '../models/Status';

@Injectable()
export class StatusService {

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private toastr: ToastrService) { }

    public getAllStatusesFromDB() {
        return this.http.get<ResGeneric<Status[]>>('http://localhost:3001/api/status/all');
    };

    public getAllStatuses() {
        let statuses;
        const resDataStatus: ResGeneric<Status[]> = this.route.snapshot.data['statuses'];
        if (resDataStatus.error) {
            this.toastr.error(resDataStatus.error, '', { closeButton: true });
        } else {
            statuses = resDataStatus.data;
        }
        return statuses;
    };

}
