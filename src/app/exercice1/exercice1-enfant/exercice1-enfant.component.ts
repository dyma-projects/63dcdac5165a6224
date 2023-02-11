import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() result: number;
  @Output() updateResult = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public incrementResult(): void {
    this.result++;
    this.updateResult.emit({
      value: this.result,
    });
  }

  public decrementResult(): void {
    this.result--;
    this.updateResult.emit({
      value: this.result,
    });
  }
}
