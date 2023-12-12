import { Component, OnInit } from '@angular/core';
import { LogErrorDetails } from '../shared/models/error-details';
import { errorDetails } from './error-data';
import { LogAnalyserService } from '../log-analyser.service';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';
import { ProgressService } from '../progress.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  private list;
  private toggle;
  totalErrorCount: number;
  pendingErrorsCount: number;
  resolvedErrorCount: number;
  inProgressErrorCount: number;
  logDetails: LogErrorDetails[];
  showProgress = false;
  private progressSubscription: Subscription;


  constructor(private logErrorDetails: LogErrorDetails,
    private logAnalyserService: LogAnalyserService,
    private modalService: ModalService,
    private progressService: ProgressService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.list = document.querySelectorAll(".navigation li");

    this.showProgress = true;
    this.logAnalyserService.getData().subscribe((data) => {
      data.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

      this.logDetails = data.slice(0, 8);
      this.calculateDashboardStatistic(data);
      this.progressService.hide();
      this.showProgress = false;
    });
  }

  createBug(data: LogErrorDetails) {
    this.showProgress = true;
    const bugTile = data.message;
    const desc = "<div style='width:100%;border-collapse:separate;border-spacing:0;margin-top:10px;border:1px solid #000;'><table><tbody><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Application Source</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.source + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Error Code</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.errorCode + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'> Method Type</span> </td><td style='border:1px solid #000;padding:8px;'>" + data.httpMethod + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Which step in EOL this error occurred?</span></td><td style='border:1px solid #000;padding:8px;'>" + data.eolStep + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Order Key(IncId,SqlId)</span></td><td style='border:1px solid #000;padding:8px;'>(" + data.orderIncId + "," + data.orderSqlId + ")</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>URL</span></td><td style='border:1px solid #000;padding:8px;'>" + data.url + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>User Email</span></td><td style='border:1px solid #000;padding:8px;'>" + data.userEmail + "</td></tr><tr style='color:#222;border-bottom:1px solid rgba(0, 0, 0, 0.1);'><td style='border:1px solid #000;padding:8px;'><span style='font-weight:bold;line-height:1.5;color:#7e4203;'>Date Time</span></td><td style='border:1px solid #000;padding:8px;'>" + data.dateTime + "</td></tr></tbody></table><br><h3>Message</h3><p>" + data.message + "</p><h3>Stack Trace</h3><p style='background-color:rgb(234,234,75);'>" + data.stackTrace + "</p></div>";
    this.logAnalyserService.createBugInTFS(bugTile, desc).subscribe((data) => {
      this.showProgress = false;
      // alert('"Bug Successfully Created: Bug # ' + data)
      this.showSuccess('Bug Successfully Created: Bug # ' + data);
      this.progressService.hide();

    });
  }
  showSuccess(message) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }

  openModal(logs) {
    this.modalService.openModal(logs);
  }

  calculateDashboardStatistic(data: LogErrorDetails[]) {
    const totalRecord = data.length;
    const countInProgress: number = data.filter(item => item.status === 'In Progress').length;
    const countResolved: number = data.filter(item => item.status === 'Resolved').length;
    const pendingResolved: number = data.filter(item => item.status === 'Pending').length;


    this.totalErrorCount = totalRecord;
    this.resolvedErrorCount = countResolved;
    this.inProgressErrorCount = countInProgress;
    this.pendingErrorsCount = pendingResolved;
  }

  download(data: LogErrorDetails) {
    this.showProgress = true;
    this.logAnalyserService.downloadDatabase(data.userEmail, data.orderIncId, data.orderSqlId)
      .subscribe(() => {
        this.showProgress = false;
        this.showSuccess('Database successfully downloaded!')
        this.progressService.hide();
      });
  }

  activeLink(event: MouseEvent) {
    this.list.forEach(item => {
      (item as HTMLElement).classList.remove('hovered');
    });

    const target = event.target as HTMLElement;
    target.classList.add('hovered');
  }


  toggleMenu() {
    debugger;
    const navigation = document.querySelector('.navigation') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;

    navigation.classList.toggle('active');
    main.classList.toggle('active');
  }


  prepareData() {
    return errorDetails;
  }

  changeStatus(value) {

  }
}

