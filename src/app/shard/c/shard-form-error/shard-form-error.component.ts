import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {
	AbstractControl
} from '@angular/forms'

import {
	UtilService
} from '../../s'

@Component({
	selector: 'shard-form-error',
	template: `
		<ul>
			<ng-container *ngFor='let code of codes; let i = index'>
				<li *ngIf='control.hasError(code)'>
					<mat-error>
						{{ getMessage(code) }}
					</mat-error>
				</li>
			</ng-container>
		</ul>
	`,
	styles: [`
		ul {
			margin-left: 15px !important;
			font-size: 12px;
		}
	`],
	host: {
		class: 'shard-form-error'
	},
})
export class ShardFormErrorComponent implements OnInit {
	@Input() control: AbstractControl
	@Input() validationMessages: Object = {}
	get codes() { return Object.keys(this.validationMessages) }
	constructor(
		protected util: UtilService,
	) {}
	ngOnInit() {}
	getMessage(code: string) {
		let msg: string = this.validationMessages[code]
		const err = this.control.getError(code)
		const value = this.control.value
		const length = value.length
		msg = msg.replace('$$$length', length)
		msg = msg.replace('$$$value', value)
		if ( typeof err === 'object' ) {
			for (let k in err) {
				msg = msg.replace('$$$' + k, err[k])
			}
		}
		return msg
	}
}
