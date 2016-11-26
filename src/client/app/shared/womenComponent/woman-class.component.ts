
export class Woman {
	protected activeAbilityColor: string;
	color: string;
	value: number;
	protected gameSpeed: number;
	name: string;

	constructor(activeAbilityColor: string, color: string, value: number, gameSpeed:number, name : string) {
        this.activeAbilityColor = activeAbilityColor;
        this.color = color;
        this.name = name;
        this.value = value;
        this.gameSpeed = gameSpeed;
    }

    getRandomInt(min: number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

interface abilityCallback { (callbackObj: Object): void };

export class Lusy extends Woman {

    constructor(activeAbilityColor: string, color: string, value: number, gameSpeed:number, name?: string) { 
    	super(activeAbilityColor, color, value, gameSpeed, name);
    	name ? this.name = name : this.name = 'Lusy';
    }

    ability() {
		let randomNumber = Math.random();
    	if(randomNumber <= 0.032){
    		this.color = this.activeAbilityColor;
    		let counter = 1;
    		let clear = setInterval(() => {
    			this.value += this.gameSpeed/2;
    			counter++;
    			if(counter === 13){
					this.color = '#000';
					clearInterval(clear);
    			}
    			
    		}, 100);
    	}
    }
}

export class Jenny extends Woman {

    constructor(activeAbilityColor: string, color: string, value: number, gameSpeed:number, name?: string) { 
    	super(activeAbilityColor, color, value, gameSpeed, name);
    	name ? this.name = name : this.name = 'Jenny';
    }

     ability() {
    	let randomNumber = Math.random();
    	if(randomNumber <= 0.025){
    		this.color = this.activeAbilityColor;
    		setTimeout(() => {
                let teleportValue = this.getRandomInt(-this.gameSpeed * 12, this.gameSpeed * 30)
    			this.value += teleportValue;
    			this.color = '#000';
    		}, 700);
    	}
    }
}

export class Katrin extends Woman {

    constructor(activeAbilityColor: string, color: string, value: number, gameSpeed:number, name?: string) { 
    	super(activeAbilityColor, color, value, gameSpeed, name);
    	name ? this.name = name : this.name = 'Katrin';
    }

    static freezeTime = 5000;

    ability(callback) {
    	let randomNumber = Math.random();
    	if(randomNumber <= 0.028){
    		let callbackObj = {
    			name: this.name,
    			freezeTime: Katrin.freezeTime
    		}
    		callback(callbackObj);
    		this.color = this.activeAbilityColor;
    		setTimeout(() => {
    			this.color = '#000';
    		}, Katrin.freezeTime);
    	}
    }
}
