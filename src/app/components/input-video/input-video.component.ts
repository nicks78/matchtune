import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'app-input-video',
  templateUrl: './input-video.component.html',
  styleUrls: ['./input-video.component.scss']
})
export class InputVideoComponent implements OnInit {
  constructor(private _fileService: FileService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this._fileService.setVideo(event.target.files[0]);
  }
}
