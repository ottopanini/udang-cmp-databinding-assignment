import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private intervalId: number;
  private times: number;

  @Output()
  afterInterval = new EventEmitter<{times: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartTimer() {
    this.times = 0;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.afterInterval.emit({times: ++this.times});
    }, 1000);
  }

  onStopTimer() {
    clearInterval(this.intervalId);
  }
}
