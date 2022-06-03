import { Injectable } from '@angular/core';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  audio!: File;
  video!: File;
  image!: File;

  ffmpeg = createFFmpeg({
    log: true
  });
  constructor() {}

  setImage(f: File) {
    this.image = f;
  }
  setAudio(f: File) {
    this.audio = f;
  }
  setVideo(f: File) {
    this.video = f;
  }

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

  async mergeAudioAndVideo() {
    console.log('[VIDEO]', this.video);
    console.log('[AUDIO]', this.audio);
    console.log('[IMAGE]', this.image);
    try {
      await this.ffmpeg.load();

      this.ffmpeg.FS('writeFile', this.video.name, await fetchFile(this.video));
      this.ffmpeg.FS('writeFile', this.audio.name, await fetchFile(this.audio));

      await this.ffmpeg.run('-i', 'v.mp4', '-i', 'a.wav', '-c:v', 'copy', '-map', '0:v:0', '-map', '1:a:0', 'new.mp4');

      const data = this.ffmpeg.FS('readFile', 'new.mp4');
      console.log('3', data);
      const videoSrc = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
      return videoSrc;
    } catch (err) {
      console.log('[ERROR]', err);
      return null;
    }
  }
}

// npm uninstall @ffmpeg/ffmpeg @ffmpeg/core
// npm install @ffmpeg/ffmpeg@0.10.0 @ffmpeg/core@0.10.0
