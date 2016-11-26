import { Component } from '@angular/core';
import { Woman } from '../shared/womenComponent/index';
import { Lusy } from '../shared/womenComponent/index';
import { Jenny } from '../shared/womenComponent/index';
import { Katrin } from '../shared/womenComponent/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-gameroom-1',
  templateUrl: 'gameroom1.component.html',
  styleUrls: ['gameroom1.component.css'],
})

export class gameroomFirstComponent {

	static gameSpeed:number = 1;

	women:Woman[] = [
		new Lusy('#ea5b5b', '#000', 0, gameroomFirstComponent.gameSpeed),
		new Jenny('#5fbb5f', '#000', 0, gameroomFirstComponent.gameSpeed),
		new Katrin('#6e6ef3', '#000', 0, gameroomFirstComponent.gameSpeed)
	]

    gameConfig = {
		gameSpeed: gameroomFirstComponent.gameSpeed
	}

}
