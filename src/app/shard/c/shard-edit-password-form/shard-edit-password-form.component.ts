import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms'
import {
	MatSnackBar,
} from '@angular/material'
import {
	Router,
} from '@angular/router'
import {
	BehaviorSubject,
	Observable,
} from 'rxjs'
import {
	map,
	retry,
	tap,
} from 'rxjs/operators'

import {
	Password,
	ShardEvent,
} from '../../cl'
import {
	pluralToSingular,
} from '../../f'
import {
	ApiService,
	AuthService,
} from '../../s'

import { SHARD_EDIT_PASSWORD_FORM } from './shard-edit-password-form.form'

@Component({
	selector: 'shard-edit-password-form',
	template: `
		<mat-card>
			<mat-card-title>
				Ubah Password {{ loginAs }}
			</mat-card-title>
			<mat-card-content>
				<form #formRef class='full-width' [formGroup]='form'>
					<div fxFlex>
						<mat-form-field>
							<input #usernameRef formControlName='username' id='username' matInput
								[maxlength]='RULES.username.maxlength'
								[minlength]='RULES.username.minlength' name='username'
								[placeholder]='RULES.username.placeholder' [readonly]='true'
								[required]='true' value="">
						</mat-form-field>
						<shard-form-error [control]='controls.username'
							[validationMessages]='VALIDATION_MESSAGES.username'>
						</shard-form-error>
					</div>
					<div fxFlex>
						<mat-form-field>
							<input formControlName='password' id='password' matInput
								[maxlength]='RULES.password.maxlength'
								[minlength]='RULES.password.minlength' name='password' numneric
								[placeholder]='RULES.password.placeholder'
								[required]='true' [type]='password.type'
								value=''>
							<mat-icon (click)='password.toggle()' matSuffix
								[matTooltip]='password.tooltip'>
								{{ password.icon }}
							</mat-icon>
						</mat-form-field>
						<shard-form-error [control]='controls.password'
							[validationMessages]='VALIDATION_MESSAGES.password'>
						</shard-form-error>
					</div>
				</form>
			</mat-card-content>
			<mat-card-actions align='end'>
				<button (click)='onSubmit()' color='primary' [disabled]='!valid'
					mat-button>
						Selesai
				</button>
			</mat-card-actions>
		</mat-card>
	`,
	styles: [`
		.mat-card {
			width: 300px !important;
		}
	`]
})
export class ShardEditPasswordFormComponent implements OnDestroy, OnInit {
	@Input() loginAs: string = ''
	@Input() to: string[] = ['/']
	@Input()
	get username() {
		return this._username
	}
	set username(v) {
		this._username = v
		this.form.get('username').setValue(v)
		// setTimeout(() => {
		// }, 10)
	}
	private _username = ''

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	private _openSnackBar(msg: string){
		this._snackBar.open(msg)._dismissAfter(4000)
	}

	readonly RULES = SHARD_EDIT_PASSWORD_FORM.RULES
	readonly VALIDATION_MESSAGES = SHARD_EDIT_PASSWORD_FORM.VALIDATION_MESSAGES

	readonly password = new Password()
	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get valid() { return this.form.valid || false }
	get value() { return this.form.value || {} }
	form: FormGroup
	constructor(
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		private _snackBar: MatSnackBar,
		public auth: AuthService,
	) {
		this.buildForm()
		// console.log(this.form)
	}
	ngOnDestroy() {
	}
	ngOnInit() {}
	buildForm() {
		this.form = this._fb.group(SHARD_EDIT_PASSWORD_FORM.CONTROLS_CONFIG())
	}
	onSubmit() {
		const {
			username,
			password,
		} = this.value
		if (confirm('Yakin ingin mengubah password?')) {
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.to,
					successMessage = 'Berhasil mengubah Password.',
					errorMessage = 'Gagal mengubah Password.',
				} = opts
				this._api.updateBy('members', 'username', username, {password})
					.subscribe(
						(r) => {
							console.log('eDt password success', r)
							this._router.navigate(to)
							this._openSnackBar(successMessage)
						},
						(r) => {
							console.log('eDt password error', r)
							this._openSnackBar(errorMessage)
						},
					)
			}, ...this.value))
		}
	}
}
