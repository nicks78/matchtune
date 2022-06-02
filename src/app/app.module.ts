import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAudioComponent } from './components/input-audio/input-audio.component';
import { InputImageComponent } from './components/input-image/input-image.component';
import { InputVideoComponent } from './components/input-video/input-video.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [AppComponent, InputImageComponent, PreviewComponent, InputAudioComponent, InputVideoComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
