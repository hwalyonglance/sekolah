import {
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms'

import {
	ApiService,
	AuthService,
	Password,
	ShardEvent,
	ShardLoginFormComponent,
	UtilService,
	validators,
} from '../../../../shard'

@Component({
	selector: 'student-login-form',
	template: `
		<shard-login-form
			loginAs='Murid'
			(submit)='onSubmit($event)'
			[role]='role'
			[to]="['/murid']">
		</shard-login-form>
	`,
	styles: [`
		:host {
			width: 300px;
		}
	`],
	host: {
		class: 'student-login-form'
	}
})
export class StudentLoginFormComponent implements OnInit {
	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	@ViewChild(ShardLoginFormComponent) shardLoginFormRef: ShardLoginFormComponent

	get controls() { return this.shardLoginFormRef.controls || {} }
	get errors() { return this.shardLoginFormRef.errors || {} }
	get valid() { return this.shardLoginFormRef.valid || false }
	get value() { return this.shardLoginFormRef.value || {} }
	role: string = 'student'
	constructor(
		private _api: ApiService,
		private _fb: FormBuilder,
		public auth: AuthService,
	) {}
	ngOnInit() {
	}
	onSubmit(evt: ShardEvent) {
		evt.preventDefault()
		evt.default({
			to				: ['/murid'],
			authenticated	: `Berhasil masuk sebagai `,
			wrong			: `Username/Password salah.`,
		})
	}
}
