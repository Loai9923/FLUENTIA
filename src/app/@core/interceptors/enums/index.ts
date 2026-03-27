export enum AcceptHeader {
  JSON = 'application/json',
  EXCEL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ZIP = 'application/zip',
  STREAM = 'application/octet-stream',
}

export enum Observe {
  BODY = 'body',
  EVENTS = 'events',
  RESPONSE = 'response',
}
