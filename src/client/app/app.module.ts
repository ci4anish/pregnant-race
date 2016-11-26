import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FormsModule }   from '@angular/forms';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { gameRoomFirstModule } from './gameroom1/gameroom1.module';
import { gameRoomSecondModule } from './gameroom2/gameroom2.module';



@NgModule({
  imports: [
	  	FormsModule,
	    BrowserModule, 
	    HttpModule, 
	    RouterModule.forRoot(routes), 
	    AboutModule, 
	    HomeModule, 
	    gameRoomFirstModule, 
	    gameRoomSecondModule, 
	    SharedModule.forRoot()
	],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
