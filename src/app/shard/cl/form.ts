import { ɵComponentType as ComponentType, TemplateRef } from '@angular/core'
import {
	AbstractControl,
	FormControl,
	FormGroup,
	NG_VALIDATORS,
	Validator,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import {
	BehaviorSubject,
	Observable,
	of,
} from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators'

import {
	ShardDialogDeleteConfirmComponent
} from '../c/shard-dialog-delete-confirm/shard-dialog-delete-confirm.component';

export class Autocomplete<T> {
	dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
	get data(): T[] { return this.dataChange.getValue().slice(); }
	set data(data: T[]){ this.dataChange.next(data) }
	get valid(): Observable<number> {
		return this.filteredOptions
					.pipe(
						switchMap((d, i) => of(i))
					)
	}

	filteredOptions: Observable<T[]>;

	constructor(
		public control: AbstractControl, public _data: T[] = []
	){
		this.dataChange = new BehaviorSubject<T[]>(_data);
		this.filteredOptions = control.valueChanges
										.pipe(
											startWith(''),
											map(v => v ? this.filter(v) : this.data )
										)
	}
	filter(v): T[] {
		return this.data.filter(option => {
			return Object.values(option)
							.join('')
							.toLowerCase()
							.indexOf(
								Object.values(v)
									.join('')
									.toLowerCase()
							) != -1
		}) || [];
	}
}

export class Dialog {
	private deleteDialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
	private formDialogRef: MatDialogRef<any>;
	constructor(
		private $_matDialog: MatDialog
	){}
	hapus({data, config: MatDialogConfig}){
		this.deleteDialogRef
			= this.$_matDialog.open(ShardDialogDeleteConfirmComponent, {
				width: '400px',
				disableClose: true,
				data,
			})
		return this.deleteDialogRef
	}
	buka<T, D = any>(
		componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
		config: MatDialogConfig<D>
	): MatDialogRef<T> {
		this.formDialogRef = this.$_matDialog
									.open(componentOrTemplateRef, config)
		return this.formDialogRef;
	}
}

export interface PasswordProp {
	icon	?: 'visibility' | 'visibility_off',
	tooltip	?: 'Tampilkan' | 'Sembunyikan',
	type	?: 'password' | 'text',
}

export class Password {
	icon	: 'visibility' | 'visibility_off' = 'visibility'
	tooltip	: 'Tampilkan' | 'Sembunyikan' = 'Tampilkan'
	type	: 'password' | 'text' = 'password'
	toggle () {
		this.icon =  this.icon === 'visibility' ? 'visibility_off' : 'visibility'
		this.tooltip = this.tooltip === 'Tampilkan' ? 'Sembunyikan' : 'Tampilkan'
		this.type =  this.type == 'password' ? 'text' : 'password'
		setTimeout(() => {
			this.icon =  this.icon === 'visibility' ? 'visibility_off' : 'visibility'
			this.tooltip = this.tooltip === 'Tampilkan' ? 'Sembunyikan' : 'Tampilkan'
			this.type =  this.type == 'password' ? 'text' : 'password'
		}, 1000)
	}
	constructor() {}
}
