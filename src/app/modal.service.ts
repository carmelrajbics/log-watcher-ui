import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(logs) {
    this.dialog.open(ModalComponent, {
      width: '70%',
      height: '80%',
      data: logs,
      disableClose: false,

      // other options
    });
  }
}
