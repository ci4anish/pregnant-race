import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { gameroomFirstComponent } from './gameroom1.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [gameroomFirstComponent],
  exports: [gameroomFirstComponent],
  providers: []
})
export class gameRoomFirstModule { }
