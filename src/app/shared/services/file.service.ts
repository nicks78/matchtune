import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor() {}

  getDataUrl(file: File): Observable<any> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Observable((observer) => {
      reader.onloadend = () => {
        observer.next(reader.result);
        observer.complete();
      };
    });
  }
}
