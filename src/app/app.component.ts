import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  fizzBuzzList: string[] = [];

  ngOnInit() {
    this.fizzBuzzList = Array.from({ length: 100}, (_,i) => this.fizzbuzz(i+1));
  }

  fizzbuzz(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    }
    if (number % 3 === 0) {
      return 'Fizz';
    }
    if (number % 5 === 0) {
      return 'Buzz';
    }
    return number.toString();
  }
}
