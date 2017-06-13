import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GreetService {

    private greetUrl = 'api/greeting';

    constructor(private http: Http) { }

    getGreeting(): Promise<string> {
        return this.http.get(this.greetUrl)
            .toPromise()
            .then(response => response.json().value as string)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }
}