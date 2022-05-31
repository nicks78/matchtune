export class GlobalConstants {
  static readonly ACCEPTED_IMAGE_EXTENSIONS: Array<string> = ['image/png', 'image/jpeg', 'image/jpg'];
  static readonly ACCEPTED_FILE_TYPE: Array<string> = [
    'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf'
  ];
  static readonly MAX_UPLOAD_FILE_SIZE: number = 15728640;
}
