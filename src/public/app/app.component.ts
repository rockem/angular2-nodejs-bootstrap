import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {GreetService} from "./greeting.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    greeting: string;

    constructor(private greetService: GreetService) {}

    ngOnInit(): void {
        this.greetService.getGreeting().then((greeting)=> {
            this.greeting = greeting;
        })
    }

}
