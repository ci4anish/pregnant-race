import { Component, Input, OnInit } from '@angular/core';
import { Woman } from '../index';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'women-group',
  templateUrl: 'women-group.component.html',
  styleUrls: ['women-group.component.css'],
})

export class WomenGroupComponent {

	@Input() women: Woman[];
	@Input() config: Object;

	static katrinAbilityActive:boolean = false;

	getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	moveWomans(){
		for(let i = 0; i < this.women.length; i++){
			if(WomenGroupComponent.katrinAbilityActive && this.women[i].name !== 'Katrin'){
				continue;
			}
			this.women[i].ability(this.getEffect);
			this.women[i].value += this.getRandomInt(this.config.gameSpeed/10, this.config.gameSpeed/2);
			if(this.women[i].value >= 100){
				this.finish(this.women[i].name);
				break;
			}

		}
	}

	getEffect(callbackObj){
		if(callbackObj.name === 'Katrin'){
			WomenGroupComponent.katrinAbilityActive = true;
			setTimeout(() => {
    			WomenGroupComponent.katrinAbilityActive = false;
    		}, callbackObj.freezeTime);
		}
	}

	finish(winnerName){
		alert(`${winnerName} won!`);
		for(let i = 0; i < this.women.length; i++){
			this.women[i].value = 0;
		}
	}

}
