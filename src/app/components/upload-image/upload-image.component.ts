import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/shared/services/custom-validation.service';
import { FileService } from 'src/app/shared/services/file.service';
import { UploadService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  formImage!: FormGroup;
  file!: string;

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

  async onFileChange(data: any) {
    const file: File = data.target.files[0];
    this._fileService.getDataUrl(file).subscribe(async (dataUri) => {
      this.file = dataUri;
    });
  }

  onSubmit() {
    if (this.formImage.valid) {
      const data = {
        file: this.file,
        ...this.formImage.value
      };
      this._uploadService.upload(data);
    }
  }
}
