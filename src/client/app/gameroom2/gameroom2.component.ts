import { Component, OnInit } from '@angular/core';
import { Woman } from '../shared/womenComponent/index';
import { Lusy } from '../shared/womenComponent/index';
import { Jenny } from '../shared/womenComponent/index';
import { Katrin } from '../shared/womenComponent/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-gameroom-2',
  templateUrl: 'gameroom2.component.html',
  styleUrls: ['gameroom2.component.css'],
})

export class gameroomSecondComponent {
static gameSpeed:number = 0.5;

	women:Woman[] = [
		new Lusy('#ea5b5b', '#000', 0, gameroomSecondComponent.gameSpeed),
		new Katrin('#6e6ef3', '#000', 0, gameroomSecondComponent.gameSpeed, 'Isabel')
	]

    gameConfig = {
		gameSpeed: gameroomSecondComponent.gameSpeed
	}
}
