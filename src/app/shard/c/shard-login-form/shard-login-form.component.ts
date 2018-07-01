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

import { SHARD_LOGIN_FORM } from './shard-login-form.form'

@Component({
	selector: 'shard-login-form',
	template: `
		<mat-card>
			<mat-card-title>
				Masuk sebagai {{ loginAs }}
			</mat-card-title>
			<mat-card-content>
				<form #formRef class='full-width' [formGroup]='form'>
					<div fxFlex>
						<mat-form-field>
							<input #usernameRef formControlName='username' id='username' matInput
								[maxlength]='RULES.username.maxlength'
								[minlength]='RULES.username.minlength' name='username'
								[placeholder]='RULES.username.placeholder'
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
						Masuk
				</button>
			</mat-card-actions>
		</mat-card>
	`,
	styles: [`
		.mat-card {
			width: 400px !important;
		}
	`],
	host: {
		class: 'shard-login-form'
	}
})
export class ShardLoginFormComponent implements OnDestroy, OnInit {
	@Input() loginAs: string = ''
	@Input() role: string = ''
	@Input() to: string[] = ['/']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	private _openSnackBar(msg: string){
		this._snackBar.open(msg)._dismissAfter(4000)
	}

	readonly RULES = SHARD_LOGIN_FORM.RULES
	readonly VALIDATION_MESSAGES = SHARD_LOGIN_FORM.VALIDATION_MESSAGES

	readonly password = new Password()
	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get valid() { return this.form.valid }
	get value() { return this.form.value }
	checkState$: Observable<boolean>
	form: FormGroup
	constructor(
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		private _snackBar: MatSnackBar,
		public auth: AuthService,
	) {
		this.checkState$ = null
		this.buildForm()
		// console.log(this.form)
	}
	ngOnDestroy() {
		this.checkState$ = null
	}
	ngOnInit() {
		// console.log('checkState ', this.role)
		this.checkState$ = null
		this.checkState$ = this.auth.checkState(this.role)
		this.checkState$.subscribe(
			(authenticated) => {
				console.log('shardFormLogin success', authenticated)
				if ( authenticated ) {
					console.log('redirected by', this.role, 'to', this.to)
					this._router.navigate(this.to)
				}
			},
			(err) => {
				console.log('checkState', this.role, ' error', err)
			}
		)
	}
	buildForm() {
		this.form = this._fb.group(SHARD_LOGIN_FORM.CONTROLS_CONFIG())
	}
	onSubmit() {
		const {
			username,
			password,
		} = this.value
		this.submit.next(new ShardEvent((opts) => {
			const {
				to				= this.to,
				authenticated	= 'Authenticated as ',
				wrong			= 'Username/Password wrong.'
			} = opts
			this.auth
				.login(this.role, username, password, {
					to,
					authenticated,
					wrong,
				})
				.subscribe(
					(r: any) => {
						// console.log(r)
					},
					(r: any) => {
						// console.log(r)
					},
					() => {
						// console.log('login complete')
					}
				)
		}, /*opts*/))
	}
}
