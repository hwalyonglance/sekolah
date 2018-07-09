import {
	Component,
	OnInit,
} from '@angular/core'
import {
	FormArray,
	FormBuilder,
	FormGroup,
} from '@angular/forms'

@Component({
	selector: 'x-form-array',
	template: `
		<form *ngIf='form' [formGroup]='form' fxLayout='column' style='padding: 32px'>
			<div *ngFor='let f of form.controls; index as i' [formArrayName]='i' fxLayout='row' fxLayoutGap='32px'>
				<div fxFlex>
					<mat-form-field>
						<input formControlName='foo' matInput value='foo {{i}}'>
						<mat-hint>{{form?.controls[i]?.get('foo')?.value}}</mat-hint>
					</mat-form-field>
				</div>
				<div fxFlex>
					<mat-form-field>
						<input formControlName='bar' matInput value='bar {{i}}'>
						<mat-hint>{{form?.controls[i]?.get('bar')?.value}}</mat-hint>
					</mat-form-field>
				</div>
				<div fxFlex>
					<mat-form-field>
						<input formControlName='baz' matInput value='baz {{i}}'>
						<mat-hint>{{form?.controls[i]?.get('baz')?.value}}</mat-hint>
					</mat-form-field>
				</div>
			</div>
		</form>
	`,
	styles: []
})
export class XFormArrayComponent implements OnInit {
	form: FormArray
	constructor(
		private _fb: FormBuilder,
	) {}
	ngOnInit() {
		setTimeout(() => {
			this.form = this._fb.array([
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
				this._fb.group({ foo: 'foo', bar: 'bar', baz: 'baz' }),
			])
			console.log(this.form)
		}, 3000)
	}
}
