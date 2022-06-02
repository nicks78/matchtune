import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {
  constructor(private _fileService: FileService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this._fileService.setImage(event.target.files[0]);
  }
}
