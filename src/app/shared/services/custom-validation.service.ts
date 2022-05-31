import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
  constructor() {}

  nameMustBeString(nameControl: AbstractControl) {
    return new Promise((resolve) => {
      if (typeof nameControl.value === 'string') {
        resolve(null);
      } else {
        resolve({ error: true, message: 'Must be a string !' });
      }
    });
  }
}
