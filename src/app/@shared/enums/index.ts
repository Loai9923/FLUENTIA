export const enum Pagination {
  TAKE = 5,
  SKIP = 0,
}

export enum SelectAllBehavior {
  All = 1,
  Visible,
}

export enum ActiveStatus {
  Active = 1,
  Inactive = 2,
}

export enum AllowedFileTypes {
  Images = 'image/jpeg, image/jpg, image/png, image/gif, image/bmp',
  Excel = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
  CSV = 'text/csv',
  PDF = 'application/pdf',
}

