import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'woman-item',
  templateUrl: 'woman-item.component.html',
  styleUrls: ['woman-item.component.css'],
})

export class WomanItemComponent {

	@Input() name: string;
	@Input() value: number;
	@Input() color: string;
}
