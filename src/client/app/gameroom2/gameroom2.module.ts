import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { gameroomSecondComponent } from './gameroom2.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [gameroomSecondComponent],
  exports: [gameroomSecondComponent],
  providers: []
})
export class gameRoomSecondModule { }
