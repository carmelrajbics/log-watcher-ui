export class LogErrorDetails {
    source: string;
    errorCode: string;
    message: string;
    stackTrace: string;
    eolStep: string;
    url:string;
    httpMethod:string
    status: ErrorStatus;
    userEmail:string;
    dateTime: string;
    canDownloadDb: boolean;
    orderIncId:number;
    orderSqlId:number;
}

export enum ErrorStatus {
    Pending = 'Pending',
    Resolved = 'Resolved',
    InProgress = 'In Progress'
}
