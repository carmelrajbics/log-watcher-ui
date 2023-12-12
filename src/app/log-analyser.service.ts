import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogErrorDetails } from './shared/models/error-details';
import { ProgressService } from './progress.service';

@Injectable({
  providedIn: 'root'
})
export class LogAnalyserService {

  private apiUrl = 'https://localhost:7215/api/log-analyser';

  constructor(private http: HttpClient, private progressService: ProgressService) { }

  getData(): Observable<any> {
    const endpoint = '/get-error-list';
    this.progressService.show();
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }

  downloadDatabase(userEmail: string, orderIncId: number, orderSqlId: number): Observable<any> {
    const endpoint = '/download-eol-database';
    const urlWithParams = `${this.apiUrl}${endpoint}/${userEmail}/${orderIncId}/${orderSqlId}`;
    this.progressService.show();
    return this.http.post<any>(urlWithParams, null);
  }

  createBugInTFS(bugTile: string, description: string): Observable<any> {
    const endpoint = '/create-tfs-items';
    const url = `${this.apiUrl}${endpoint}`;
    const requestBody = {
      bugTitle: bugTile,
      bugDescription: description,
    };

    this.progressService.show();
    return this.http.post<any>(url, requestBody);
  }
}
