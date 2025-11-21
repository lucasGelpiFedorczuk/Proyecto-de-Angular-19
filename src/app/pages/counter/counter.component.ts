import { Component } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class CounterComponent {

    counter = 10;

    increaseByOne (value: number) {
        this.counter += value
    }

    decreaseByOne (value: number) {
        this.counter -= value
    }

    reset () {
        this.counter = 10
    }

}