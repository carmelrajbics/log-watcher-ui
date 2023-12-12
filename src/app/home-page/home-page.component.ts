import { Component, OnInit } from '@angular/core';
import { LogErrorDetails } from '../shared/models/error-details';
import { errorDetails } from '../dash-board/error-data';
import { LogAnalyserService } from '../log-analyser.service';
import { ModalService } from '../modal.service';
import { ProgressService } from '../progress.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  showProgress = false;
  private progressSubscription: Subscription;

  constructor(private logErrorDetails: LogErrorDetails,
    private logAnalyserService: LogAnalyserService,
    private modalService: ModalService,
    private progressService: ProgressService) {
    this.progressSubscription = this.progressService.getProgress().subscribe((value) => {
      this.showProgress = value;
    });
  }

  ngOnInit(): void {
    this.logAnalyserService.getData().subscribe((data) => {
      this.logDetails = data;
      this.progressService.hide();
    });
  }
  logDetails: LogErrorDetails[];

  prepareData() {
    return errorDetails;
  }

  changeStatus(value) {

  }

  openModal(logs) {
    this.modalService.openModal(logs);
  }

  createBug(data: LogErrorDetails) {
    this.showProgress = true;
    const bugTile = data.message;
    const desc = "<div style='width:100%;border-collapse:separate;border-spacing:0;margin-top:10px;border:1px solid #000;'><table><tbody><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Application Source</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.source + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Error Code</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.errorCode + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'> Method Type</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.httpMethod + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Which step in EOL this error occurred?</span></td><td style='border:1px solid #000;padding:8px;'>" + data.eolStep + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Order Key(IncId,SqlId)</span></td><td style='border:1px solid #000;padding:8px;'>(" + data.orderIncId + "," + data.orderSqlId + ")</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>URL</span></td><td style='border:1px solid #000;padding:8px;'>" + data.url + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>User Email</span></td><td style='border:1px solid #000;padding:8px;'>" + data.userEmail + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Date Time</span></td><td style='border:1px solid #000;padding:8px;'>" + data.dateTime + "</td></tr></tbody></table><br><h3>Message</h3><p>" + data.message + "</p><h3>Stack Trace</h3><p style='background-color:rgb(234,234,75);'>" + data.stackTrace + "</p></div>";
    this.logAnalyserService.createBugInTFS(bugTile, desc).subscribe((data) => {
      alert('"Bug Successfully Created: Bug # ' + data)
      this.progressService.hide();
      this.showProgress = false;
    });
  }

  download(data: LogErrorDetails) {
    this.showProgress = true;
    this.logAnalyserService.downloadDatabase(data.userEmail, data.orderIncId, data.orderSqlId)
      .subscribe((data) => {
        alert('Database successfully downloaded!');
        this.showProgress = false;
      });
  }
}
