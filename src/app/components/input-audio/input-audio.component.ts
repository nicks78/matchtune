import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'app-input-audio',
  templateUrl: './input-audio.component.html',
  styleUrls: ['./input-audio.component.scss']
})
export class InputAudioComponent implements OnInit {
  constructor(private _fileService: FileService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this._fileService.setAudio(event.target.files[0]);
  }
}
