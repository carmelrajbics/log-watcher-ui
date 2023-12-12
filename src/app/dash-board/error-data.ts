import { ErrorStatus, LogErrorDetails } from "../shared/models/error-details";

export const errorDetails: LogErrorDetails[] = [
  {
    "source": "EOL",
    "errorCode": "ERR-001",
    "message": "An error occurred during initialization",
    "stackTrace": "at AppModule.initialize (app.module.ts:123)",
    "status": ErrorStatus.Pending,
    "dateTime": "2023-12-06T15:30:00.000Z",
    "canDownloadDb": false,
    "eolStep": "Step 1",
    "httpMethod": "Get",
    "url": "https://sample.com/",
    "userEmail": "carmelrajmelkior@eurofins.com",
    "orderIncId":76072,
    "orderSqlId":76072
  },
  // {
  //   "source": "Guided Ordering",
  //   "code": "ERR-102",
  //   "message": "Invalid request parameters",
  //   "stackTrace": "at ApiService.validateRequest (api.service.ts:456)",
  //   "status": ErrorStatus.Resolved,
  //   "dataTime": "2023-12-06T16:45:00.000Z",
  //   "canDownloadDb": true
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // },
  // {
  //   "source": "EOL",
  //   "code": "ERR-503",
  //   "message": "Failed to establish a connection to the database",
  //   "stackTrace": "at DatabaseConnection.connect (db.connection.ts:789)",
  //   "status": ErrorStatus.InProgress,
  //   "dataTime": "2023-12-06T18:20:00.000Z",
  //   "canDownloadDb": false
  // }
];
