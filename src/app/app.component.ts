import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/shared/services/custom-validation.service';
import { FileService } from 'src/app/shared/services/file.service';
import { UploadService } from 'src/app/shared/services/upload.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formImage!: FormGroup;
  file!: string;
  videoSrc!: any;

  constructor(
    private _fb: FormBuilder,
    private _fileService: FileService,
    private _uploadService: UploadService,
    private _customValidation: CustomvalidationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formImage = this._fb.group({
      fileName: ['', [Validators.required], this._customValidation.nameMustBeString.bind(this._customValidation)]
    });
  }

  onSubmit() {
    this.videoSrc = this._fileService.mergeAudioAndVideo();
  }
}
