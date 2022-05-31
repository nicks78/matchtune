import { Injectable } from '@angular/core';

export interface IFormImage {
  file: string;
  fileName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor() {}

  upload(data: IFormImage) {
    console.log('---------File is uploaded---------------', data.fileName);
  }
}
