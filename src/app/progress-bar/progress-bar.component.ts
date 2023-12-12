// progress-bar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  progressValue: number = 0;

  ngOnInit() {
    // Simulate progress update (you can replace this with your actual logic)
    this.updateProgress();
  }

  updateProgress() {
    const interval = setInterval(() => {
      // Update the progress value
      this.progressValue += 10;

      // If the progress reaches 100%, clear the interval
      if (this.progressValue >= 100) {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval as needed
  }
}
