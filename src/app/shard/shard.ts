// import {
// 	CommonModule,
// 	isPlatformBrowser,
// 	isPlatformServer,
// } from '@angular/common'
// import {
// 	HttpClient,
// 	HttpClientModule,
// 	HttpParams,
// } from '@angular/common/http'
// import {
// 	AfterContentInit,
// 	AfterViewInit,
// 	APP_ID,
// 	Component,
// 	ContentChild,
// 	ContentChildren,
// 	ɵComponentType as ComponentType,
// 	Directive,
// 	ElementRef,
// 	ErrorHandler,
// 	EventEmitter,
// 	HostListener,
// 	Inject,
// 	Injectable,
// 	Input,
// 	isDevMode,
// 	NgModule,
// 	OnInit,
// 	OnDestroy,
// 	Optional,
// 	Output,
// 	PLATFORM_ID,
// 	QueryList,
// 	Renderer2,
// 	TemplateRef,
// 	ViewChild,
// 	ViewChildren,
// } from '@angular/core'
// import {
// 	A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,


// 	BACKSPACE, ENTER, ESCAPE, SHIFT, TAB,

// 	ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE,
// 	NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR,
// 	NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE,

// 	DASH,
// 	COMMA,
// } from '@angular/cdk/keycodes'
// import {
// 	BreakpointObserver,
// 	Breakpoints,
// 	BreakpointState,
// } from '@angular/cdk/layout'
// import { FlexLayoutModule } from '@angular/flex-layout'
// import {
// 	AbstractControl,
// 	AsyncValidatorFn,
// 	FormBuilder,
// 	FormControl,
// 	FormGroup,
// 	FormsModule,
// 	NG_VALIDATORS,
// 	ReactiveFormsModule,
// 	Validator,
// 	ValidatorFn,
// 	Validators,
// } from '@angular/forms'
// import {
// 	MatColumnDef,
// 	MAT_DIALOG_DATA,
// 	MatDialog,
// 	MatDialogConfig,
// 	MatDialogRef,
// 	MatFooterRowDef,
// 	MatHeaderRowDef,
// 	MatPaginator,
// 	MatRowDef,
// 	MatSelectionList,
// 	MatSidenav,
// 	MatSnackBar,
// 	MatSort,
// 	MatProgressSpinner,
// 	MatTable,
// 	MatTableDataSource,
// } from '@angular/material'
// import {
// 	DomSanitizer,
// } from '@angular/platform-browser'
// import {
// 	ActivatedRoute,
// 	Router,
// 	RouterModule,
// } from '@angular/router'
// import {
// 	BehaviorSubject,
// 	Observable,
// 	of,
// 	fromEvent,
// } from 'rxjs'
// import {
// 	debounceTime,
// 	distinctUntilChanged,
// 	filter,
// 	map,
// 	retry,
// 	startWith,
// 	switchMap,
// 	take,
// 	tap,
// } from 'rxjs/operators'
// import * as lodash from 'lodash'

// import { environment } from '../../environments/environment'

// export {environment}

// export const CHARACTERS = [
// 	A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
// ]
// export const EXCEPTIONS = [
// 	BACKSPACE,
// 	// COMMA,
// 	DASH, 173,
// 	// 190, // DOT atau TITIK
// 	ENTER,
// 	ESCAPE,
// 	SHIFT,
// 	TAB,
// ]
// export const NUMBERS = [
// 	ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE,
// 	NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR,
// 	NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE,
// ]

// export const LOWERCASE_CHARACTER	= `abcdefghijklmnopqrstuvwxyz`
// export const NUMBER					= `0123456789`
// export const SPECIAL_CHARACTER		= `~!@#$%^&*()_+\`-=[]\\{}|;':",./<>?`
// export const UPPERCASE_CHARACTER	= `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

// export const MILLI_SECOND	=			 1
// export const SECOND			=		  1000
// export const MINUTE			=		 60000
// export const HOUR			=	   3600000
// export const DAY			=	 864000000
// export const WEEK			=	6048000000
// export const MONTH			=  25920000000
// export const YEAR			= 315360000000

// export type MemberAlias = 'admin' | 'curriculum' | 'student' | 'teacher'
// export type MiscAlias = 'department' | 'subject'

// export const NAMA_HARI = [
// 	'Senin',
// 	'Selasa',
// 	'Rabu',
// 	'Kamis',
// 	'Jumat',
// 	'Sabtu',
// 	'Minggu',
// ]

// import {
// 	FloatLabelType,
// 	MatFormFieldAppearance,
// 	MatHint,
// 	ThemePalette
// } from '@angular/material'

// export interface FormFieldProperty {
// 	appearance: MatFormFieldAppearance
// 	color: ThemePalette
// 	floatLabel: FloatLabelType
// 	hideRequiredMarker: boolean
// 	hintLabel: MatHint
// }

// export interface ControlProperty {
// 	cols				?: number
// 	dir					?: boolean
// 	disabled			?: boolean
// 	id					?: string
// 	matAutosizeMaxRows	?: number
// 	matAutosizeMinRows	?: number
// 	max					?: number
// 	maxLength			?: number
// 	maxlength			?: number
// 	min					?: number
// 	minLength			?: number
// 	minlength			?: number
// 	name				?: string
// 	pattern				?: string
// 	placeholder			?: string
// 	readOnly			?: boolean
// 	required			?: boolean
// 	rows				?: number
// 	spellcheck			?: boolean
// 	type				?: string
// 	value				?: string
// 	validity			?: ValidityState
// 	wrap				?: string
// }

// export interface Menu {
// 	icon		: string
// 	label		: string
// 	onClick		: Function
// }

// export interface Column {
// 	hidden	?: boolean
// 	name	: string
// 	label	: string
// }

// export interface DeleteConfirm {
// 	title	: string
// 	message	: string
// }

// export class Autocomplete<T> {
// 	dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
// 	get data(): T[] { return this.dataChange.getValue().slice(); }
// 	set data(data: T[]){ this.dataChange.next(data) }
// 	get valid(): Observable<number> {
// 		return this.filteredOptions
// 					.pipe(
// 						switchMap((d, i) => of(i))
// 					)
// 	}

// 	filteredOptions: Observable<T[]>;

// 	constructor(
// 		public control: AbstractControl, public _data: T[] = []
// 	){
// 		this.dataChange = new BehaviorSubject<T[]>(_data);
// 		this.filteredOptions
// 			= control.valueChanges
// 				.pipe(
// 					startWith(''),
// 					map(v => v ? this.filter(v) : this.data ),
// 				)
// 	}
// 	filter(v): T[] {
// 		return this.data.filter(option => {
// 			return Object.values(option)
// 							.join('')
// 							.toLowerCase()
// 							.indexOf(
// 								Object.values(v)
// 									.join('')
// 									.toLowerCase()
// 							) != -1
// 		}) || [];
// 	}
// }

// const SHARD_EDIT_PASSWORD_RULES: {[k: string]: ControlProperty} = {
// 	username: {
// 		maxlength			: 16,
// 		minlength			: 8,
// 		placeholder			: 'Username',
// 		type				: 'text',
// 	},
// 	password: {
// 		maxlength			: 16,
// 		minlength			: 8,
// 		placeholder			: 'Password',
// 		type				: 'password',
// 	},
// }

// const SHARD_EDIT_PASSWORD_VALIDATION_MESSAGES = {
// 	username: {
// 		required: `Tidak boleh kosong.`,
// 		minlength: `Minimal harus ${SHARD_EDIT_PASSWORD_RULES.username.minlength} karakter.`,
// 		maxlength: `Tidak boleh lebih dari ${SHARD_EDIT_PASSWORD_RULES.username.maxlength} karakter.`,
// 	},
// 	password: {
// 		required: `Tidak boleh kosong.`,
// 		minlength: `Minimal harus ${SHARD_EDIT_PASSWORD_RULES.password.minlength} karakter.`,
// 		maxlength: `Tidak boleh lebih dari ${SHARD_EDIT_PASSWORD_RULES.password.maxlength} karakter.`,
// 		lemah: `contoh Password JK89ui%$`,
// 	},
// }

// function SHARD_EDIT_PASSWORD_VALIDATORS() {
// 	const _Validators = {
// 		username: [
// 			Validators.maxLength(SHARD_EDIT_PASSWORD_RULES.username.maxlength),
// 			Validators.minLength(SHARD_EDIT_PASSWORD_RULES.username.minlength),
// 			Validators.required,
// 		],
// 		password: [
// 			Validators.maxLength(SHARD_EDIT_PASSWORD_RULES.password.maxlength),
// 			Validators.minLength(SHARD_EDIT_PASSWORD_RULES.password.minlength),
// 			Validators.required,
// 			// ShardValidators.strongPassword()
// 		],
// 	}
// 	return _Validators
// }

// function SHARD_EDIT_PASSWORD_CONTROLS_CONFIG() {
// 	const _Validators = SHARD_EDIT_PASSWORD_VALIDATORS()
// 	const CONTROLS = {
// 		username		: ['', _Validators.username],
// 		password		: ['', _Validators.password],
// 	}
// 	return CONTROLS
// }

// const SHARD_LOGIN_RULES: {[k: string]: ControlProperty} = {
// 	password: {
// 		maxlength			: 16,
// 		minlength			: 8,
// 		placeholder			: 'Password',
// 		type				: 'password',
// 	},
// 	username: {
// 		maxlength			: 16,
// 		minlength			: 8,
// 		placeholder			: 'Username',
// 		type				: 'text',
// 	},
// }

// const SHARD_LOGIN_VALIDATION_MESSAGES = {
// 	password: {
// 		required: `Tidak boleh kosong.`,
// 		minlength: `Minimal harus ${SHARD_LOGIN_RULES.password.minlength} karakter.`,
// 		maxlength: `Tidak boleh lebih dari ${SHARD_LOGIN_RULES.password.maxlength} karakter.`,
// 	},
// 	username: {
// 		required: `Tidak boleh kosong.`,
// 		minlength: `Minimal harus ${SHARD_LOGIN_RULES.username.minlength} karakter.`,
// 		maxlength: `Tidak boleh lebih dari ${SHARD_LOGIN_RULES.username.maxlength} karakter.`,
// 	},
// }

// function SHARD_LOGIN_VALIDATORS() {
// 	const _Validators = {
// 		password: [
// 			Validators.maxLength(SHARD_LOGIN_RULES.password.maxlength),
// 			Validators.minLength(SHARD_LOGIN_RULES.password.minlength),
// 			Validators.required,
// 		],
// 		username: [
// 			Validators.maxLength(SHARD_LOGIN_RULES.username.maxlength),
// 			Validators.minLength(SHARD_LOGIN_RULES.username.minlength),
// 			Validators.required,
// 		],
// 	}
// 	return _Validators
// }

// function SHARD_LOGIN_CONTROLS_CONFIG() {
// 	const _Validators = SHARD_LOGIN_VALIDATORS()
// 	const CONTROLS = {
// 		password		: ['', _Validators.password],
// 		username		: ['', _Validators.username],
// 	}
// 	return CONTROLS
// }

// export class Dialog {
// 	private deleteDialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
// 	private formDialogRef: MatDialogRef<any>;
// 	constructor(
// 		private $_matDialog: MatDialog
// 	){}
// 	hapus({data, config: MatDialogConfig}){
// 		this.deleteDialogRef
// 			= this.$_matDialog.open(ShardDialogDeleteConfirmComponent, {
// 				width: '400px',
// 				disableClose: true,
// 				data,
// 			})
// 		return this.deleteDialogRef
// 	}
// 	buka<T, D = any>(
// 		componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
// 		config: MatDialogConfig<D>
// 	): MatDialogRef<T> {
// 		this.formDialogRef = this.$_matDialog
// 									.open(componentOrTemplateRef, config)
// 		return this.formDialogRef;
// 	}
// }

// export class Password {
// 	icon	: 'visibility' | 'visibility_off' = 'visibility'
// 	tooltip	: 'Tampilkan' | 'Sembunyikan' = 'Tampilkan'
// 	type	: 'password' | 'text' = 'password'
// 	toggle () {
// 		this.icon =  this.icon === 'visibility' ? 'visibility_off' : 'visibility'
// 		this.tooltip = this.tooltip === 'Tampilkan' ? 'Sembunyikan' : 'Tampilkan'
// 		this.type =  this.type == 'password' ? 'text' : 'password'
// 		setTimeout(() => {
// 			this.icon =  this.icon === 'visibility' ? 'visibility_off' : 'visibility'
// 			this.tooltip = this.tooltip === 'Tampilkan' ? 'Sembunyikan' : 'Tampilkan'
// 			this.type =  this.type == 'password' ? 'text' : 'password'
// 		}, 1000)
// 	}
// 	constructor() {}
// }

// export class ShardEvent {
// 	protected defaultPrevented: boolean = false
// 	constructor(
// 		public _default: Function,
// 		public _opts: any = {},
// 	){
// 		setTimeout(() => {
// 			if (!this.defaultPrevented) _default(_opts)
// 		}, 1)
// 	}
// 	preventDefault(){ this.defaultPrevented = true }
// }

// export class ShardValidators {
// 	static match(name1: string, name2: string) {
// 		return (control: AbstractControl) => {
// 			return control.get(name1).value === control.get(name2).value ? null : { match: false, mismatch: true }
// 		}
// 	}
// 	static matches(...controlNames: string[]): ValidatorFn {
// 		return (control: AbstractControl) => {
// 			const values = controlNames.map(n => control.get(n).value)
// 			const value0 = values[0]
// 			return values.every(v => v === value0) ? null : { match: false, mismatch: true }
// 		}
// 	}
// 	static passwordMatchValidator(g: FormGroup) {
// 		return g.get('password').value === g.get('password1').value
// 		? null : {'mismatch': true};
// 	}
// 	static strongPassword(): ValidatorFn {
// 		return (control: AbstractControl): {[k: string]: any} => {
// 			return strongPassword(control.value)
// 		}
// 	}
// 	static unique(api: ApiService, table: string, key: string): AsyncValidatorFn {
// 		return (control: AbstractControl): Observable<Object> => {
// 			const value = control.value
// 			return api.check(table, key, value)
// 				.pipe(
// 					debounceTime(255),
// 					distinctUntilChanged(),
// 					take(1),
// 					tap(v => console.log('unique ', v)),
// 					map((res: any) => res.duplicate ? { duplicate: true } : null)
// 				)
// 		}
// 	}
// }

// // export class ShardBaseFormComponent implements OnInit {
// // 	@Output() reset		= new EventEmitter
// // 	@Output() submit	= new EventEmitter
// // 	get controls() { return this.form.controls || {} }
// // 	get errors() { return this.form.errors || {} }
// // 	get valid() { return this.form.valid || false }
// // 	get value() { return this.form.value || {} }
// // 	get RULES() { return this.FORM.RULES || {} }
// // 	get VALIDATION_MESSAGES() { return this.FORM.VALIDATION_MESSAGES || {} }
// // 	form: FormGroup
// // 	constructor(
// // 		public s: SService,
// // 		public FORM: any = {},
// // 	) {}
// // 	ngOnInit() {}
// // 	buildForm() {
// // 		this.form = this.s.fb.group(this.FORM.CONTROLS_CONFIG)
// // 	}
// // }

// // export class ShardBaseTableComponent<T> implements OnInit {
// // 	private _handleOnRefresh() {
// // 		this.refresh.next(new ShardEvent((opts) => {
// // 			const {
// // 				where = this.where
// // 			} = opts
// // 			this.setData(where)
// // 		}, {
// // 			where: this.where
// // 		}))
// // 	}
// // 	@Input() extraMainMenus: Menu[] = []
// // 	@Input() extraRowMenus: Menu[] = []

// // 	@Input() id: string = '_id'
// // 	@Input() showActionsColumn: boolean = true
// // 	@Input() showCreateMenu: boolean = true
// // 	@Input() showDeleteMenu: boolean = true
// // 	@Input() showEditMenu: boolean = true
// // 	@Input() showMainMenuTrigger: boolean = true
// // 	@Input() columns: Column[] = []
// // 	@Input() title: string = 'judul'
// // 	@Input()
// // 	get tableName() {
// // 		return this._tableName ? this._tableName : this.title.toLowerCase()
// // 	}
// // 	set tableName(name: string) {
// // 		this._tableName = name
// // 		this.setData()
// // 	}
// // 	private _tableName: string
// // 	get where() { return this._where }
// // 	set where(where: string) {
// // 		this._where = where
// // 		this.setData()
// // 	}
// // 	private _where: string

// // 	@Output() create			= new EventEmitter
// // 	@Output() deleteById		= new EventEmitter
// // 	@Output() deleteFilter		= new EventEmitter
// // 	@Output() deleteSelected	= new EventEmitter
// // 	@Output() editById			= new EventEmitter
// // 	@Output() filterColumns		= new EventEmitter
// // 	@Output() printAll			= new EventEmitter
// // 	@Output() printById			= new EventEmitter
// // 	@Output() printFiltered		= new EventEmitter
// // 	@Output() printPerPeriod	= new EventEmitter
// // 	@Output() printSelected		= new EventEmitter
// // 	@Output() rowClick			= new EventEmitter
// // 	@Output() refresh			= new EventEmitter

// // 	dataSource = new MatTableDataSource
// // 	isLoading = true
// // 	constructor(
// // 		public s: SService,
// // 	) {}
// // 	ngOnInit() {}
// // 	handleEvent(evt: ShardTableEvent, opts: any = {}) {
// // 		this[`_handleOn${evt}`](opts)
// // 	}
// // 	setData(where = this.where) {
// // 		this.isLoading = true
// // 		this.s.api.getByQuery(this.tableName, where)
// // 			.subscribe(
// // 				(r: any) => {
// // 					this.dataSource!.data = r
// // 					this.isLoading = false
// // 					this.s.logger.log('setData success', r)
// // 				},
// // 				(r) => {
// // 					this.s.logger.log('setData error', r)
// // 				},
// // 				() => {}
// // 			)
// // 	}
// // }

// @Component({
// 	selector: 'shard-dashboard',
// 	templateUrl: './shard-dashboard.component.html',
// 	styles: [`
// 		.shard-dashboard-content{
// 			min-height: calc(100vh - 64px);
// 			padding: 32px !important;
// 		}
// 		@media(max-width: 599px){
// 			.shard-dashboard-content{
// 				min-height: calc(100vh - 56px);
// 			}
// 		}
// 	`]
// })
// export class ShardDashboardComponent {
// 	@ViewChild(MatSidenav) sidenavRef: MatSidenav
// 	isHandset$: Observable<boolean>
// 		= this.breakpointObserver.observe(Breakpoints.Handset)
// 		.pipe(
// 			map(result => result.matches)
// 		)

// 	constructor(
// 		private breakpointObserver: BreakpointObserver
// 	) {

// 	}
// 	@HostListener('swiperight', ['$event'])
// 	onSwipeRight(evt){
// 		this.sidenavRef.open()
// 	}
// }

// @Component({
// 	selector: 'shard-dialog-delete-confirm',
// 	template: `
// 		<mat-card>
// 			<mat-card-header>
// 				<mat-card-title>
// 					{{ data.title }}
// 				</mat-card-title>
// 			</mat-card-header>
// 			<mat-card-content>
// 				{{ data.message }}
// 			</mat-card-content>
// 			<mat-card-actions align='end'>
// 				<button (click)='delete.next()' color='warn' mat-raised-button>
// 					<mat-icon>delete_forever</mat-icon>
// 					Delete
// 				</button>
// 				<button (click)='cancel.next()' color='warn' mat-button>
// 					<mat-icon>cancel</mat-icon>
// 					Cancel
// 				</button>
// 			</mat-card-actions>
// 		</mat-card>
// 	`,
// 	styles: [`
// 		:host {
// 			min-width: 350px;
// 		}
// 	`],
// 	host: {
// 		class: 'shard-dialog-delete-confirm'
// 	}
// })
// export class ShardDialogDeleteConfirmComponent implements OnInit {
// 	cancel = new EventEmitter
// 	delete = new EventEmitter
// 	constructor(
// 		@Inject(MAT_DIALOG_DATA) public data: DeleteConfirm,
// 		public dialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
// 	) {}
// 	ngOnInit() {}
// }

// @Component({
// 	selector: 'shard-dialog-filter-columns',
// 	template: `
// 		<mat-card>
// 			<mat-card-header>
// 				<mat-card-title>
// 					<h3>Filter {{ data.title }} Columns</h3>
// 				</mat-card-title>
// 			</mat-card-header>
// 			<mat-card-content>
// 				<button mat-raised-button (click)="matSelectionListRef.selectAll()">{{ selectAll }}</button>
// 				&nbsp;
// 				<button mat-raised-button (click)="matSelectionListRef.deselectAll()">{{ deselectAll }}</button>
// 				<br />
// 				<br />
// 				<mat-selection-list #matSelectionListRef
// 					[(ngModel)]='selection'
// 					(ngModelChange)="ngModelOnChange($event)"
// 					>

// 					<mat-list-option *ngFor='let column of data.columns; let i = index'
// 						[selected]='!column.hidden' [value]='column.name'>

// 						<div fxFlex fxLayout='row' fxLayoutAlign='start center'>
// 							<button [disabled]='i === 0' fxFlex='40px'
// 								mat-icon-button (click)='up(column.name, i)'>
// 								<mat-icon>keyboard_arrow_up</mat-icon>
// 							</button>
// 							<button [disabled]='i === data.columns.length-1' fxFlex='40px'
// 								mat-icon-button (click)='down(column.name, i)'>
// 								<mat-icon>keyboard_arrow_down</mat-icon>
// 							</button>
// 							<span fxFlex>
// 								{{ column.label }}
// 							</span>
// 						</div>
// 					</mat-list-option>
// 				</mat-selection-list>
// 			</mat-card-content>
// 		</mat-card>
// 	`,
// 	styles: [`
// 		:host {
// 			display: flex;
// 			flex-flow: row wrap;
// 			max-height: 95vh;
// 		}
// 		.mat-selection-list {
// 			border: 1px solid rgba(0, 0, 0, 0.12);
// 			max-height: 55vh;
// 			overflow-y: auto;
// 			// margin: 20px 20px 0 0;
// 		}
// 	`],
// 	host: {
// 		class: 'shard-dialog-filter-columns'
// 	}
// })
// export class ShardDialogFilterColumnsComponent implements OnInit {
// 	get deselectAll() {
// 		return this.data.opts.deselectAll || 'Deselect All'
// 	}
// 	get selectAll() {
// 		return this.data.opts.selectAll || 'Select All'
// 	}
// 	selection
// 	constructor(
// 		private _elRef: ElementRef,
// 		@Inject(MAT_DIALOG_DATA) public data: {
// 			title: string
// 			columns: Column[],
// 			onChange: (columns: Column[]) => void,
// 			opts: any
// 		},
// 		public dialogRef: MatDialogRef<ShardDialogFilterColumnsComponent>,
// 	) {}
// 	ngOnInit() {}
// 	down(key: string, index: number) {
// 		// setTimeout(() => {
// 			// console.log('filter', key, 'down')
// 			const copiedColumns = this.data.columns.slice()
// 			const that = copiedColumns[index]
// 			that.hidden = !that.hidden
// 			const below = copiedColumns[index+1]
// 			copiedColumns[index] = below
// 			copiedColumns[index+1] = that
// 			this.data.columns = copiedColumns
// 			this.data.onChange(copiedColumns)
// 		// }, 1)
// 	}
// 	onChange(columns: string) {
// 		// setTimeout(() => {
// 			// console.log('selectionList onchange', columns)
// 			let copiedColumns = this.data.columns.slice()
// 			copiedColumns = copiedColumns.map(c => {
// 				c.hidden = !lodash.includes(columns, c.name)
// 				return c
// 			})
// 			this.data.onChange(copiedColumns)
// 		// }, 2)
// 	}
// 	ngModelOnChange(columns: string) {
// 		// setTimeout(() => {
// 			// console.log('selectionList ngModelOnChange', columns)
// 			let copiedColumns = this.data.columns.slice()
// 			copiedColumns = copiedColumns.map(c => {
// 				c.hidden = !lodash.includes(columns, c.name)
// 				return c
// 			})
// 			this.data.onChange(copiedColumns)
// 		// }, 3)
// 	}
// 	scrollToBottom() {
// 		this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight
// 	}
// 	up(key: string, index: number) {
// 		// setTimeout(() => {
// 			// console.log('filter', key, 'up')
// 			const copiedColumns = this.data.columns.slice()
// 			// console.log('copiedColumns', copiedColumns)
// 			const above = copiedColumns[index-1]
// 			// console.log('above', above)
// 			const that = copiedColumns[index]
// 			// console.log('that', that)
// 			that.hidden = !that.hidden
// 			copiedColumns[index-1] = that
// 			copiedColumns[index] = above
// 			// console.log('copiedColumns', copiedColumns)
// 			this.data.columns = copiedColumns
// 			this.data.onChange(copiedColumns)
// 		// }, 3)
// 	}
// }

// @Component({
// 	selector: 'shard-edit-password-form',
// 	template: `
// 		<mat-card>
// 			<mat-card-title>
// 				Ubah Password {{ loginAs }}
// 			</mat-card-title>
// 			<mat-card-content>
// 				<form #formRef class='full-width' [formGroup]='form'>
// 					<div fxFlex>
// 						<mat-form-field>
// 							<input #usernameRef formControlName='username' id='username' matInput
// 								[maxlength]='RULES.username.maxlength'
// 								[minlength]='RULES.username.minlength' name='username'
// 								[placeholder]='RULES.username.placeholder' [readonly]='true'
// 								[required]='true' value="">
// 						</mat-form-field>
// 						<shard-form-error [control]='controls.username'
// 							[validationMessages]='VALIDATION_MESSAGES.username'>
// 						</shard-form-error>
// 					</div>
// 					<div fxFlex>
// 						<mat-form-field>
// 							<input formControlName='password' id='password' matInput
// 								[maxlength]='RULES.password.maxlength'
// 								[minlength]='RULES.password.minlength' name='password' numeric
// 								[placeholder]='RULES.password.placeholder'
// 								[required]='true' [type]='password.type'
// 								value=''>
// 							<mat-icon (click)='password.toggle()' matSuffix
// 								[matTooltip]='password.tooltip'>
// 								{{ password.icon }}
// 							</mat-icon>
// 						</mat-form-field>
// 						<shard-form-error [control]='controls.password'
// 							[validationMessages]='VALIDATION_MESSAGES.password'>
// 						</shard-form-error>
// 					</div>
// 				</form>
// 			</mat-card-content>
// 			<mat-card-actions align='end'>
// 				<button (click)='onSubmit()' color='primary' [disabled]='!valid'
// 					mat-button>
// 						Selesai
// 				</button>
// 			</mat-card-actions>
// 		</mat-card>
// 	`,
// 	styles: [`
// 		.mat-card {
// 			width: 300px !important;
// 		}
// 	`]
// })
// export class ShardEditPasswordFormComponent implements OnDestroy, OnInit {
// 	@Input() loginAs: string = ''
// 	@Input() to: string[] = ['/']
// 	@Input()
// 	get username() {
// 		return this._username
// 	}
// 	set username(v) {
// 		this._username = v
// 		this.form.get('username').setValue(v)
// 		// setTimeout(() => {
// 		// }, 10)
// 	}
// 	private _username = ''

// 	@Output() reset = new EventEmitter
// 	@Output() submit = new EventEmitter

// 	private _openSnackBar(msg: string){
// 		this._snackBar.open(msg)._dismissAfter(4000)
// 	}

// 	readonly RULES = SHARD_EDIT_PASSWORD_RULES
// 	readonly VALIDATION_MESSAGES = SHARD_EDIT_PASSWORD_VALIDATION_MESSAGES

// 	readonly password = new Password()
// 	get controls() { return this.form.controls || {} }
// 	get errors() { return this.form.errors || {} }
// 	get valid() { return this.form.valid || false }
// 	get value() { return this.form.value || {} }
// 	form: FormGroup
// 	constructor(
// 		private _api: ApiService,
// 		private _fb: FormBuilder,
// 		private _router: Router,
// 		private _snackBar: MatSnackBar,
// 		public auth: AuthService,
// 	) {
// 		this.buildForm()
// 		// console.log(this.form)
// 	}
// 	ngOnDestroy() {
// 	}
// 	ngOnInit() {}
// 	buildForm() {
// 		this.form = this._fb.group(SHARD_EDIT_PASSWORD_CONTROLS_CONFIG())
// 	}
// 	onSubmit() {
// 		const {
// 			username,
// 			password,
// 		} = this.value
// 		if (confirm('Yakin ingin mengubah password?')) {
// 			this.submit.next(new ShardEvent((opts) => {
// 				const {
// 					to = this.to,
// 					successMessage = '',
// 					errorMessage = '',
// 				} = opts
// 				this._api.updateBy('members', 'username', username, {password})
// 					.subscribe(
// 						(r) => {
// 							console.log('eDt password success', r)
// 							this._router.navigate(to)
// 							this._openSnackBar(successMessage)
// 						},
// 						(r) => {
// 							console.log('eDt password error', r)
// 							this._openSnackBar(errorMessage)
// 						},
// 					)
// 			}, ...this.value))
// 		}
// 	}
// }

// @Component({
// 	selector: 'shard-form-error',
// 	template: `
// 		<ul>
// 			<ng-container *ngFor='let code of codes; let i = index'>
// 				<li *ngIf='control.hasError(code)'>
// 					<mat-error>
// 						{{ getMessage(code) }}
// 					</mat-error>
// 				</li>
// 			</ng-container>
// 		</ul>
// 	`,
// 	styles: [`
// 		ul {
// 			margin-left: 15px !important;
// 			font-size: 12px;
// 		}
// 	`],
// 	host: {
// 		class: 'shard-form-error'
// 	},
// })
// export class ShardFormErrorComponent implements OnInit {
// 	@Input() control: AbstractControl
// 	@Input() validationMessages: Object = {}
// 	get codes() { return Object.keys(this.validationMessages) }
// 	constructor(
// 		protected util: UtilService,
// 	) {}
// 	ngOnInit() {}
// 	getMessage(code: string) {
// 		let msg: string = this.validationMessages[code]
// 		const err = this.control.getError(code)
// 		const value = this.control.value
// 		const length = value.length
// 		msg = msg.replace('$$$length', length)
// 		msg = msg.replace('$$$value', value)
// 		if ( typeof err === 'object' ) {
// 			for (let k in err) {
// 				msg = msg.replace('$$$' + k, err[k])
// 			}
// 		}
// 		return msg
// 	}
// }

// @Component({
// 	selector: 'shard-login-form',
// 	template: `
// 		<mat-card>
// 			<mat-card-title>
// 				Masuk sebagai {{ loginAs }}
// 			</mat-card-title>
// 			<mat-card-content>
// 				<form #formRef class='full-width' [formGroup]='form'>
// 					<div fxFlex>
// 						<mat-form-field>
// 							<input #usernameRef formControlName='username' id='username' matInput
// 								[maxlength]='RULES.username.maxlength'
// 								[minlength]='RULES.username.minlength' name='username'
// 								[placeholder]='RULES.username.placeholder'
// 								[required]='true' value="">
// 						</mat-form-field>
// 						<shard-form-error [control]='controls.username'
// 							[validationMessages]='VALIDATION_MESSAGES.username'>
// 						</shard-form-error>
// 					</div>
// 					<div fxFlex>
// 						<mat-form-field>
// 							<input formControlName='password' id='password' matInput
// 								[maxlength]='RULES.password.maxlength'
// 								[minlength]='RULES.password.minlength' name='password' numeric
// 								[placeholder]='RULES.password.placeholder'
// 								[required]='true' [type]='password.type'
// 								value=''>
// 							<mat-icon (click)='password.toggle()' matSuffix
// 								[matTooltip]='password.tooltip'>
// 								{{ password.icon }}
// 							</mat-icon>
// 						</mat-form-field>
// 						<shard-form-error [control]='controls.password'
// 							[validationMessages]='VALIDATION_MESSAGES.password'>
// 						</shard-form-error>
// 					</div>
// 				</form>
// 			</mat-card-content>
// 			<mat-card-actions align='end'>
// 				<button (click)='onSubmit()' color='primary' [disabled]='!valid'
// 					mat-button>
// 						Masuk
// 				</button>
// 			</mat-card-actions>
// 		</mat-card>
// 	`,
// 	styles: [`
// 		.mat-card {
// 			width: 400px !important;
// 		}
// 	`],
// 	host: {
// 		class: 'shard-login-form'
// 	}
// })
// export class ShardLoginFormComponent implements OnDestroy, OnInit {
// 	@Input() loginAs: string = ''
// 	@Input() role: string = ''
// 	@Input() to: string[] = ['/']

// 	@Output() reset = new EventEmitter
// 	@Output() submit = new EventEmitter

// 	private _openSnackBar(msg: string){
// 		this._snackBar.open(msg)._dismissAfter(4000)
// 	}

// 	readonly RULES = SHARD_LOGIN_RULES
// 	readonly VALIDATION_MESSAGES = SHARD_LOGIN_VALIDATION_MESSAGES

// 	readonly password = new Password()
// 	get controls() { return this.form.controls || {} }
// 	get errors() { return this.form.errors || {} }
// 	get valid() { return this.form.valid }
// 	get value() { return this.form.value }
// 	checkState$: Observable<boolean>
// 	form: FormGroup
// 	constructor(
// 		private _api: ApiService,
// 		private _fb: FormBuilder,
// 		private _router: Router,
// 		private _snackBar: MatSnackBar,
// 		public auth: AuthService,
// 	) {
// 		this.checkState$ = null
// 		this.buildForm()
// 		// console.log(this.form)
// 	}
// 	ngOnDestroy() {
// 		this.checkState$ = null
// 	}
// 	ngOnInit() {
// 		// console.log('checkState ', this.role)
// 		this.checkState$ = null
// 		this.checkState$ = this.auth.checkState(this.role)
// 		this.checkState$.subscribe(
// 			(authenticated) => {
// 				console.log('shardFormLogin success', authenticated)
// 				if ( authenticated ) {
// 					console.log('redirected by', this.role, 'to', this.to)
// 					this._router.navigate(this.to)
// 				}
// 			},
// 			(err) => {
// 				console.log('checkState', this.role, ' error', err)
// 			}
// 		)
// 	}
// 	buildForm() {
// 		this.form = this._fb.group(SHARD_LOGIN_CONTROLS_CONFIG())
// 	}
// 	onSubmit() {
// 		const {
// 			username,
// 			password,
// 		} = this.value
// 		this.submit.next(new ShardEvent((opts) => {
// 			const {
// 				to				= this.to,
// 				authenticated	= 'Authenticated as ',
// 				wrong			= 'Username/Password wrong.'
// 			} = opts
// 			this.auth
// 				.login(this.role, username, password, {
// 					to,
// 					authenticated,
// 					wrong,
// 				})
// 				.subscribe(
// 					(r: any) => {
// 						// console.log(r)
// 					},
// 					(r: any) => {
// 						// console.log(r)
// 					},
// 					() => {
// 						// console.log('login complete')
// 					}
// 				)
// 		}, /*opts*/))
// 	}
// }

// @Component({
// 	selector: 'shard-table',
// 	templateUrl: './shard-table.component.html',
// 	styles: [`
// 		:host {
// 			display: block;
// 			width: 100%;
// 		}
// 		.loading-wrapper{
// 			padding: 64px;
// 		}
// 		.table-wrapper {
// 			max-width: auto;
// 			min-width: 100%;
// 			width: 100%;
// 			overflow-x: auto;
// 		}
// 		.mat-table {
// 			width: 100%;
// 		}
// 		.mat-cell {
// 			padding-left: 4px;
// 			padding-right: 4px;
// 		}
// 	`],
// 	host: {
// 		class: 'shard-table mat-elevation-z2'
// 	}
// })
// export class ShardTableComponent<T = any>
// 	implements AfterViewInit, AfterContentInit, OnDestroy, OnInit {

// 	private _deleteConfirmDialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
// 	private _filterColumnsDialogRef: MatDialogRef<ShardDialogFilterColumnsComponent>

// 	private _handleOnCreate() {
// 		this.create.next(new ShardEvent((opts) => {
// 			const {
// 				to	= ['/admin', this.tableName, 'create'],
// 			} = opts
// 			console.log('onCreate navigate to', to)
// 			this._router.navigate(to)
// 		}))
// 	}
// 	private _handleOnDeleteById([key, value]) {
// 		this.deleteById.next(new ShardEvent((_opts) => {
// 			let {
// 				ask		= `Are You sure want to delete this data?`,
// 				deleted	= `deleted`,
// 				error	= 'Error when to try delete data',
// 				cancel	= 'Canceling delete',
// 				table	= _opts.table || this.tableName
// 			} = _opts || {}
// 			this._deleteConfirmDialogRef
// 				= this._dialog
// 					.open(ShardDialogDeleteConfirmComponent, {
// 						data: {
// 							title: this.title,
// 							message: ask,
// 						}
// 					})
// 			this._deleteConfirmDialogRef.componentInstance
// 				.delete.subscribe(() => {
// 					const members = [
// 						'admins',
// 						'curriculums',
// 						'students',
// 						'teachers',
// 					]
// 					if (members.includes(table)) {
// 						table = 'members'
// 					}
// 					const misc = [
// 						'departments',
// 						'subjects',
// 					]
// 					if (misc.includes(table)) {
// 						table = 'misc'
// 					}
// 					const scores = [
// 						'students_in_scores_v'
// 					]
// 					if (scores.includes(table)) {
// 						table = 'scores'
// 					}
// 					if (table.endsWith('_v')) {
// 						table = table.replace('_v', '')
// 					}
// 					if (['members', 'misc'].includes(table)) {
// 						key = '_id'
// 					}
// 					console.log('deleteBy: table, key, value', table, key, value)
// 					this._api.deleteBy(table, key, value)
// 						.subscribe(
// 							(r: any) => {
// 								console.log(r)
// 								if ( r.result ) {
// 									const data = this.dataSource.data.slice()
// 									this.dataSource.data
// 										= data.filter((d: any) => d[this.id] != value)
// 									this._openSnackBar(deleted)
// 								} else {
// 									this._openSnackBar(error)
// 								}
// 							},
// 							(r) => {
// 								console.log(r)
// 								this._openSnackBar(error)
// 							},
// 							() => {
// 								this._deleteConfirmDialogRef.close()
// 								this._deleteConfirmDialogRef = null
// 							}
// 						)
// 				})
// 			this._deleteConfirmDialogRef.componentInstance
// 				.cancel.subscribe(
// 					() => {
// 						this._openSnackBar(cancel)
// 						this._deleteConfirmDialogRef.close()
// 						this._deleteConfirmDialogRef = null
// 					}
// 				)
// 		}, {
// 			_id: value
// 		}))
// 	}
// 	private _handleOnDeleteFilter() {
// 		this.deleteFilter.next(new ShardEvent((opts) => {
// 			// console.log('default')
// 			const {

// 			} = opts
// 		}, {

// 		}))
// 	}
// 	private _handleOnDeleteSelected() {
// 		this.deleteSelected.next(new ShardEvent((opts) => {
// 			// console.log('default')
// 			const {

// 			} = opts
// 		}, {

// 		}))
// 	}
// 	private _handleOnEditById(row) {
// 		// console.log(`editById`, this.id, row, this._router.url)
// 		this.editById.next(new ShardEvent((opts) => {
// 			const {
// 				to = ['/admin', this.tableName, row[this.id], 'edit']
// 			} = opts
// 			console.log('onEdit navigate to', to)
// 			this._router.navigate(to)
// 		} , {
// 			...row
// 		}))
// 	}
// 	private _handleOnFilterColumns() {
// 		console.log('_handleOnFilterColumns')
// 		this.filterColumns.next(new ShardEvent((opts) => {
// 			const {
// 				selectAll	= 'Pilih semua',
// 				deselectAll	= 'Hapus semua pilihan',
// 			} = opts
// 			this._filterColumnsDialogRef = this._dialog.open(ShardDialogFilterColumnsComponent, {
// 				data: {
// 					title: this.title,
// 					columns: this.columns,
// 					onChange: (columns: Column[]) => {
// 						// console.log('filterColumnChange', columns)
// 						// for( let col of columns ){
// 						// 	console.log(col)
// 						// }
// 						this.columns = columns
// 					},
// 					opts: {
// 						selectAll,
// 						deselectAll,
// 					}
// 				},
// 			})
// 			this._filterColumnsDialogRef.afterClosed().subscribe(() => {
// 				this._filterColumnsDialogRef = null
// 			})
// 		}, {

// 		}))
// 	}
// 	private _handleOnPrintAll() {
// 		this.printAll.next(new ShardEvent((opts) => {
// 			// console.log('default _handleOnPrintAll')
// 			const {

// 			} = opts
// 		}, {

// 		}))
// 	}
// 	private _handleOnPrintById(_id) {
// 		this.printById.next(new ShardEvent(() => {
// 			const aTag: HTMLAnchorElement = this._renderer.createElement('a')
// 			aTag.download = `${this._router.url}/${_id}/print`
// 			aTag.dispatchEvent(new MouseEvent('click'))
// 		}, {

// 		}))
// 	}
// 	private _handleOnPrintFiltered() {
// 		this.printFiltered.next(new ShardEvent((opts) => {
// 			const {

// 			} = opts
// 			// console.log('default _handleOnPrintFilter')
// 		}, {

// 		}))
// 	}
// 	private _handleOnPrintPerPeriod() {
// 		this.printPerPeriod.next(new ShardEvent((opts) => {
// 			// console.log('default _handleOnPrintPerPeriod')
// 			const {

// 			} = opts
// 		}, {

// 		}))
// 	}
// 	private _handleOnPrintSelected() {
// 		this.printSelected.next(new ShardEvent((opts) => {
// 			// console.log('default _handleOnPrintSelected')
// 			const {

// 			} = opts
// 		}, {

// 		}))
// 	}
// 	private _handleOnRowClick(row) {
// 		this.rowClick.next(new ShardEvent((opts) => {
// 			// console.log('default _handleOnRowClick', row)
// 			const {

// 			} = opts
// 		}, {
// 			...row,
// 		}))
// 	}
// 	private _handleOnRefresh() {
// 		this.refresh.next(new ShardEvent((opts) => {
// 			const {
// 				where = {}
// 			} = opts
// 			this.setData(where).subscribe()
// 		}, {
// 			where: {}
// 		}))
// 	}
// 	private _openSnackBar(msg: string) {
// 		this._snackBar.open(msg)._dismissAfter(4000)
// 	}

// 	@Input()
// 	get columns() { return this._columns }
// 	set columns(columns: Column[]) {
// 		this._columns = columns
// 		const controlName = {}
// 		columns.forEach(c => {
// 			controlName[c.name] = ''
// 		})
// 		// console.log('controlName', controlName)
// 		this.form = this._fb.group({
// 			...controlName
// 		})
// 		console.log('form', this.form)
// 	}
// 	private _columns: Column[] = []
// 	@Input() title: string = 'judul'
// 	@Input()
// 	get tableName() {
// 		return this._tableName ? this._tableName : this.title.toLowerCase()
// 	}
// 	set tableName(name: string) {
// 		this._tableName = name
// 	}
// 	private _tableName: string

// 	@Input() extraMainMenus: Menu[] = []
// 	@Input() extraRowMenus: Menu[] = []

// 	@Input() id: string = '_id'
// 	@Input() showCreateMenu: boolean = true
// 	@Input() showDeleteMenu: boolean = true
// 	@Input() showEditMenu: boolean = true

// 	@Input() showMainMenuTrigger: boolean = true
// 	@Input() showRowMenuTrigger: boolean = true

// 	@Output() create			= new EventEmitter
// 	@Output() deleteById		= new EventEmitter
// 	@Output() deleteFilter		= new EventEmitter
// 	@Output() deleteSelected	= new EventEmitter
// 	@Output() editById			= new EventEmitter
// 	@Output() filterColumns		= new EventEmitter
// 	@Output() printAll			= new EventEmitter
// 	@Output() printById			= new EventEmitter
// 	@Output() printFiltered		= new EventEmitter
// 	@Output() printPerPeriod	= new EventEmitter
// 	@Output() printSelected		= new EventEmitter
// 	@Output() rowClick			= new EventEmitter
// 	@Output() refresh			= new EventEmitter

// 	// @ViewChild('filter') filter: ElementRef
// 	@ViewChild(MatPaginator) paginatorRef: MatPaginator
// 	@ViewChild(MatSort) sortRef: MatSort
// 	@ViewChild(MatTable) tableRef: MatTable<T>

// 	@ViewChildren(MatHeaderRowDef) header: QueryList<MatHeaderRowDef>

// 	get displayedColumns() {
// 		let columns = [
// 			'_index',
// 			...this.columns.filter(c => !c.hidden).map(c => c.name)
// 		]
// 		if ( this.showRowMenuTrigger) {
// 			columns = ['_actions', ...columns]
// 		}
// 		return columns
// 	}
// 	get displayedColumns2() {
// 		return this.displayedColumns.map(c => c+'2')
// 	}

// 	@Input() dataSource: MatTableDataSource<T> = new MatTableDataSource([])
// 	form: FormGroup
// 	isLoading: boolean = true
// 	// isLoading: boolean = false
// 	where = {}
// 	constructor(
// 		private _activatedRoute: ActivatedRoute,
// 		private _api: ApiService,
// 		private _dialog: MatDialog,
// 		private _fb: FormBuilder,
// 		private _renderer: Renderer2,
// 		private _router: Router,
// 		private _snackBar: MatSnackBar,
// 	){}
// 	ngAfterViewInit() {
// 		// fromEvent(this.filter.nativeElement, 'keyup')
// 		// 	.pipe(
// 		// 		// debounceTime(500),
// 		// 		distinctUntilChanged(),
// 		// 	)
// 		// 	.subscribe((evt: KeyboardEvent) => {
// 		// 		// console.log('evt', evt)
// 		// 		this.paginatorRef.pageIndex = 0
// 		// 		this.dataSource.filter = evt.target['value']
// 		// 	})

// 	}
// 	ngAfterContentInit() {
// 	}
// 	ngOnDestroy() {
// 		this._deleteConfirmDialogRef = null
// 		this._filterColumnsDialogRef = null
// 	}
// 	ngOnInit() {
// 		this.dataSource!.paginator = this.paginatorRef
// 		this.dataSource!.sort = this.sortRef
// 		this.dataSource.sortingDataAccessor = (obj: any, prop: string) => {
// 			return +obj[prop] || ''
// 		}
// 		this.form.valueChanges.subscribe(v => {
// 			this.paginatorRef.pageIndex = 0
// 			this.dataSource.filter = v
// 		})
// 		this.dataSource.filterPredicate = (object: any, filter) => {
// 			// const displayedColumnKeys = Object.keys(object).filter(key => {
// 			// 	const _displayedColumnKeys = this.columns
// 			// 		.filter(col => !col.hidden)
// 			// 		.map(col => col.name)
// 			// 	return _displayedColumnKeys.includes(key)
// 			// })
// 			// const displayedColumnValues = displayedColumnKeys.map(key => {
// 			// 	return object[key]
// 			// })
// 			// return displayedColumnValues
// 			// 	.join('')
// 			// 	.toLowerCase()
// 			// 	.indexOf(filter.toLowerCase()) !== -1
// 			return Object.keys(filter)
// 				.map(k => object[k].indexOf(filter[k]) !== -1 )
// 				.every(v => v)
// 		}
// 	}
// 	handleEvent(evt: ShardTableEvent, opts: any = {}) {
// 		this[`_handleOn${evt}`](opts)
// 	}
// 	setData(where = this.where) {
// 		this.isLoading = true
// 		return new Observable((observer) => {
// 			this._api.getByQuery(this.tableName, where)
// 				.subscribe(
// 					(r: any) => {
// 						this.dataSource!.data = r
// 						this.isLoading = false
// 						console.log(r)
// 						observer.next(r)
// 					},
// 					(r) => {
// 						console.log(r)
// 						observer.error(r)
// 					},
// 					() => { observer.complete() }
// 				)
// 		})
// 	}
// }

// @Directive({
// 	selector: '[alphabet]'
// })
// export class AlphabetDirective {
// 	constructor() {}
// 	@HostListener('keydown', ['$event']) onKeydown(evt: KeyboardEvent) {
// 		if ( ![...CHARACTERS, ...EXCEPTIONS].includes(evt.keyCode) ) {
// 			evt.preventDefault()
// 		}
// 	}
// }

// @Directive({
// 	selector: '[numeric]'
// })
// export class NumericDirective {
// 	constructor() {}
// 	@HostListener('keydown', ['$event']) onKeydown(evt: KeyboardEvent) {
// 		console.log(evt.key, evt.keyCode)
// 		if ( ![...NUMBERS, ...EXCEPTIONS].includes(evt.keyCode) ) {
// 			evt.preventDefault()
// 		}
// 	}
// }

// export type ShardTableEvent
// 	=	'Create'
// 	|	'DeleteById'
// 	|	'DeleteByQuery'
// 	|	'DeleteSelected'
// 	|	'FilterColumns'
// 	|	'Edit'
// 	|	'PrintAll'
// 	|	'PrintById'
// 	|	'PrintByQuery'
// 	|	'PrintFilter'
// 	|	'PrintPerPeriod'
// 	|	'PrintSelected'
// 	|	'RowClick'
// 	|	'Refresh'

// export function addToStorage(key: string, value: string, asBase64: boolean = false) {
// 	const storage	= getStorage()
// 	storage[key]	= asBase64 ? toBase64(value) : value
// 	setStorage(storage)
// 	return storage
// }
// export function aliasToMember(role: MemberAlias, object) {
// 	let copiedtObject = {}
// 	for (let key in object) {
// 		let _key = key.replace(role, '')
// 		if (isUpperFirst(_key) && _key !== 'NIM') {
// 			_key = lodash.lowerFirst(_key)
// 		}
// 		copiedtObject[_key] = object[key]
// 	}
// 	return copiedtObject as any
// }
// export function aliasToMisc(role: MiscAlias, object) {
// 	let copiedtObject = {}
// 	for (let key in object) {
// 		let _key = key.replace(role, '')
// 		if (isUpperFirst(_key)) {
// 			_key = lodash.lowerFirst(_key)
// 		}
// 		copiedtObject[_key] = object[key]
// 	}
// 	return copiedtObject as any
// }
// export function base64ToJSON(base64EncodedString: string) {
// 	try{
// 		return JSON.parse(fromBase64(base64EncodedString))
// 	}catch{
// 		return {}
// 	}
// }
// export function coerceBoolean(value: any) {
// 	const retVal =  JSON.stringify(value) === '{}'
// 		? false
// 		: typeof value == 'object' && (JSON.stringify(value) !== '{}')
// 			? coerceBooleanObject(value)
// 			: coerceBooleanProperty(value)
// 	return retVal
// }
// export function coerceBooleanObject (obj) {
// 	return JSON.stringify(obj) !== '{}'
// }
// export function coerceBooleanProperty(value: any) {
// 	const retVal
// 		= value === ''
// 		? false
// 		: value === 0
// 			? false
// 			: Boolean(value)
// 	return retVal
// }
// export function countCharacter(str: string, min: number = 1){
// 	const STR = `${str}`
// 	const CHARACTER = LOWERCASE_CHARACTER + UPPERCASE_CHARACTER
// 	let count: number = 0
// 	STR.split('').forEach((_str) => {
// 		CHARACTER.split('').forEach((_character) => {
// 			count += _str === _character ? 1 : 0
// 		})
// 	})
// 	return count
// }
// export function countLowercaseCharacter(str: string){
// 	const STR = `${str}`
// 	let count: number = 0
// 	STR.split('').forEach((_str) => {
// 		LOWERCASE_CHARACTER.split('').forEach((_lowercase) => {
// 			count += _str === _lowercase ? 1 : 0
// 		})
// 	})
// 	return count
// }
// export function countNumber(str: string) {
// 	const STR = `${str}`
// 	let count: number = 0
// 	STR.split('').forEach((_str) => {
// 		NUMBER.split('').forEach((_number) => {
// 			count += _str === _number ? 1 : 0
// 		})
// 	})
// 	return count
// }
// export function countSpecialChar(str: string) {
// 	const STR = `${str}`
// 	let count: number = 0
// 	STR.split('').forEach((_str) => {
// 		SPECIAL_CHARACTER.split('').forEach((_symbol) => {
// 			count += _str === _symbol ? 1 : 0
// 		})
// 	})
// 	return count
// }
// export function countUppercaseCharacter(str: string) {
// 	const STR = `${str}`
// 	let count: number = 0
// 	STR.split('').forEach((_str) => {
// 		UPPERCASE_CHARACTER.split('').forEach((_uppercase) => {
// 			count += _str === _uppercase ? 1 : 0
// 		})
// 	})
// 	return count
// }
// export function dateToString(date: Date) {
// 	let y = String(date.getFullYear())
// 	let M = String(date.getMonth()+1).padStart(2,'0')
// 	let d = String(date.getDate()).padStart(2,'0')
// 	let h = String(date.getHours()).padStart(2,'0')
// 	let m = String(date.getMinutes()).padStart(2,'0')
// 	let s = String(date.getSeconds()).padStart(2,'0')
// 	return `${y}-${M}-${d} ${h}:${m}:${s}`
// }
// export function fromBase64(base64EncodedString: string) {
// 	return atob(atob(atob(base64EncodedString)))
// }
// export function getFromStorage(key: string, asRaw: boolean = false) {
// 	const storage	= getStorage()
// 	const value		= asRaw ? fromBase64(storage[key]) : storage[key]
// 	return value
// }
// export function getStorage() {
// 	return JSON.parse(base64ToJSON(localStorage.getItem(environment.app.name)))
// }
// export function JSONBase64ToObject(JSONBase64: string) {
// 	return JSON.parse(base64ToJSON(JSONBase64)) || {}
// }
// export function JSONToBase64(obj: Object) {
// 	try{
// 		return toBase64(JSON.stringify(obj))
// 	}catch{
// 		return ''
// 	}
// }
// export function isLowerFirst(str: string) {
// 	return LOWERCASE_CHARACTER.slice().split('').includes(str.substr(0, 1))
// }
// export function isUpperFirst(str: string) {
// 	return UPPERCASE_CHARACTER.slice().split('').includes(str.substr(0, 1))
// }
// export function ISOStringToString(ISOString: string) {
// 	return dateToString(new Date(ISOString))
// }
// export function maxLength(str: string | number, max: number) {
// 	return String(str).length <= max
// }
// export function ObjectToJSONBase64(object) {
// 	return JSONToBase64(JSON.stringify(object))
// }
// export function toAlias(alias: MemberAlias | MiscAlias, object) {
// 	const copiedObject = {}
// 	for (let key in object) {
// 		const _key = alias + lodash.upperFirst(key)
// 		copiedObject[_key] = object[key]
// 	}
// 	return copiedObject
// }
// export function minLength(str: string | number, min: number) {
// 	return String(str).length >= min
// }
// export function pluralToSingular(str: string) {
// 	const length = str.length
// 	let strs = str.split('')
// 	strs.pop()
// 	if (strs[strs.length-1] === 'e') {
// 		strs.pop()
// 	}
// 	return strs.join('')
// }
// export function removeFromStorage(key: string) {
// 	const storage	= getStorage()
// 	delete storage[key]
// 	setStorage(storage)
// 	return storage
// }
// export function setStorage(object) {
// 	localStorage.setItem(environment.app.name, JSONToBase64(JSON.stringify(object)))
// 	return getStorage()
// }
// export function singularToPlural(str: string) {
// 	return str + (str.endsWith('s') ? 'es' : 's')
// }
// export function strongPassword(str: string) {
// 	const STR = `${str}`
// 	const lemah: any = {
// 		length		: STR.length,
// 		lowercase	: countLowercaseCharacter(STR),
// 		number		: countNumber(STR),
// 		specialChar	: countSpecialChar(STR),
// 		uppercase	: countUppercaseCharacter(STR),
// 	}
// 	for (let i in lemah) {
// 		if (lemah[i] > 1) {
// 			delete lemah[i]
// 		}
// 	}
// 	return JSON.stringify(lemah) == '{}' ? null : { lemah }
// }
// export function toBase64(rawString: string) {
// 	return btoa(btoa(btoa(rawString)))
// }




// // import { AngularFireModule }         from 'angularfire2';
// // import { AngularFireAuthModule }     from 'angularfire2/auth';
// // import { AngularFireDatabaseModule } from 'angularfire2/database';
// // import { AngularFireStorageModule } from 'angularfire2/storage';

// // import { environment } from '../environment'

// // export const FirebaseModules: any[] = [
// // 	AngularFireModule.initializeApp(environment.firebaseConfig),
// // 	AngularFireAuthModule,
// // 	AngularFireDatabaseModule,
// // 	AngularFireStorageModule,
// // ];

// // @NgModule({
// // 	exports: FirebaseModules,
// // 	imports: FirebaseModules,
// // })
// // export class FirebaseModule { }

// import {
// 	// MatAutocompleteModule,
// 	// MatBadgeModule,
// 	MatButtonModule,
// 	// MatButtonToggleModule,
// 	// MatBottomSheetModule,
// 	MatCardModule,
// 	// MatCheckboxModule,
// 	// MatChipsModule,
// 	MatCommonModule,
// 	MatDatepickerModule,
// 	MatDialogModule,
// 	// MatDividerModule,
// 	MatExpansionModule,
// 	MatFormFieldModule,
// 	// MatGridListModule,
// 	MatIconModule,
// 	MatInputModule,
// 	// MatLineModule,
// 	MatListModule,
// 	MatMenuModule,
// 	NativeDateModule,
// 	MatNativeDateModule,
// 	// MatOptionModule,
// 	MatPaginatorModule,
// 	// MatPseudoCheckboxModule,
// 	// MatProgressBarModule,
// 	MatProgressSpinnerModule,
// 	// MatRadioModule,
// 	// MatRippleModule,
// 	MatSelectModule,
// 	MatSidenavModule,
// 	// MatSliderModule,
// 	// MatSlideToggleModule,
// 	MatSnackBarModule,
// 	MatSortModule,
// 	// MatStepperModule,
// 	MatTableModule,
// 	// MatTabsModule,
// 	MatToolbarModule,
// 	MatTooltipModule,
// 	// MatTreeModule,

// 	MAT_DATE_LOCALE,
// } from '@angular/material'

// export const MaterialModules: any[] = [
// 	// MatAutocompleteModule,
// 	// MatBadgeModule,
// 	// MatBottomSheetModule,
// 	MatButtonModule,
// 	// MatButtonToggleModule,
// 	MatCardModule,
// 	// MatChipsModule,
// 	// MatCheckboxModule,
// 	MatCommonModule,
// 	MatDatepickerModule,
// 	MatDialogModule,
// 	MatExpansionModule,
// 	// MatDividerModule,
// 	MatFormFieldModule,
// 	// MatGridListModule,
// 	MatIconModule,
// 	MatInputModule,
// 	// MatLineModule,
// 	MatListModule,
// 	MatMenuModule,
// 	NativeDateModule,
// 	MatNativeDateModule,
// 	// MatOptionModule,
// 	MatPaginatorModule,
// 	// MatProgressBarModule,
// 	MatProgressSpinnerModule,
// 	// MatPseudoCheckboxModule,
// 	// MatRadioModule,
// 	// MatRippleModule,
// 	// MatSliderModule,
// 	MatSelectModule,
// 	MatSidenavModule,
// 	// MatSlideToggleModule,
// 	MatSnackBarModule,
// 	MatSortModule,
// 	// MatStepperModule,
// 	MatTableModule,
// 	// MatTabsModule,
// 	MatToolbarModule,
// 	MatTooltipModule,
// 	// MatTreeModule,
// ]

// import { A11yModule } from '@angular/cdk/a11y'
// import { LayoutModule } from '@angular/cdk/layout'
// import { OverlayModule } from '@angular/cdk/overlay'
// import { PortalModule } from '@angular/cdk/portal'

// export const CdkModules: any[] = [
// 	A11yModule,
// 	LayoutModule,
// 	OverlayModule,
// 	PortalModule,
// ]

// @NgModule({
// 	exports: CdkModules,
// 	imports: CdkModules,
// 	declarations: []
// })
// export class CdkModule { }

// @NgModule({
// 	exports: MaterialModules,
// 	imports: MaterialModules,
// 	providers: [
// 		{ provide: MAT_DATE_LOCALE, useValue: 'id-ID' },
// 	],
// 	declarations: []
// })
// export class MaterialModule { }

// // import { AngularFireModule }         from 'angularfire2';
// // import { AngularFireAuthModule }     from 'angularfire2/auth';
// // import { AngularFireDatabaseModule } from 'angularfire2/database';
// // import { AngularFireStorageModule } from 'angularfire2/storage';


// // export const FirebaseModules: any[] = [
// // 	AngularFireModule.initializeApp(environment.firebaseConfig),
// // 	AngularFireAuthModule,
// // 	AngularFireDatabaseModule,
// // 	AngularFireStorageModule,
// // ];

// // @NgModule({
// // 	exports: FirebaseModules,
// // 	imports: FirebaseModules,
// // })
// // export class FirebaseModule { }


// export const ShardComponents = [
// 	ShardTableComponent,
// 	ShardDashboardComponent,
// 	ShardFormErrorComponent,
// 	ShardLoginFormComponent,
// 	ShardDialogDeleteConfirmComponent,
// 	ShardDialogFilterColumnsComponent,
// 	ShardEditPasswordFormComponent,
// ]

// export const ShardModules = [
// 	CommonModule,
// 	RouterModule,
// 	FlexLayoutModule,
// 	FormsModule,
// 	ReactiveFormsModule,
// 	CdkModule,
// 	MaterialModule,
// 	HttpClientModule,
// 	// FirebaseModule,
// ]


// export const ShardDirectives = [
// 	AlphabetDirective,
// 	NumericDirective,
// ]

// @NgModule({
// 	declarations: [
// 		...ShardComponents,
// 		...ShardDirectives,
// 	],
// 	entryComponents: [
// 		...ShardComponents,
// 	],
// 	exports: [
// 		...ShardModules,
// 		...ShardComponents,
// 		...ShardDirectives
// 	],
// 	imports: ShardModules
// })
// export class ShardModule {}


// @Injectable({
// 	providedIn: ShardModule
// })
// export class ApiService {
// 	private _url = environment.app.url + '/__/api'
// 	private _objectToFormData(object) {
// 		const formData = new FormData
// 		for (let  key in object) {
// 			if (['password0', 'password1'].includes(key)) {
// 				continue
// 			}
// 			let data = object[key]
// 			if (key.endsWith('Date')) {
// 				data = dateToString(new Date(data))
// 			}
// 			formData.append(key, data)
// 		}
// 		return formData
// 	}
// 	caches = {}
// 	constructor(
// 		private http: HttpClient,
// 	) {}
// 	check(table: string, key: string, value: string) {
// 		return this.http.get(`${this._url}/check/${table}/${key}/${value}`)
// 	}
// 	authentication(role: string, username: string, password: string) {
// 		const formData = new FormData
// 		formData.append('role', role)
// 		formData.append('username', username)
// 		formData.append('password', password)
// 		return this.http.post(`${this._url}/authentication`, formData)
// 	}
// 	deleteBy(table: string, key: string, value: string) {
// 		const formData = new FormData
// 		formData.append('key', key)
// 		formData.append('value', value)
// 		return this.http.post(`${this._url}/delete_by/${table}`, formData)
// 	}
// 	deleteWhere(table: string, conditions: {[key: string]: any}) {
// 		const formData = this._objectToFormData(conditions)
// 		return this.http.post(`${this._url}/delete_where/${table}`, formData)
// 	}
// 	get(table: string, force: boolean = false) {
// 		if (force) {
// 			return new Observable((observer) => {
// 				observer.next(this.caches[table])
// 				observer.complete()
// 			})
// 		}
// 		return this.http.get(`${this._url}/get/${table}`)
// 			.pipe(
// 				tap(r => this.caches[table] = r),
// 			)
// 	}
// 	getBy(table: string, key: string, value: string) {
// 		return this.http.get(`${this._url}/get_by/${table}/${key}/${value}`)
// 	}
// 	getByQuery(table: string, conditions: {}) {
// 		const params = new HttpParams({
// 			fromObject: conditions
// 		})
// 		return this.http.get(`${this._url}/get/${table}`, { params })
// 	}
// 	update(table: string, doc: {[key: string]: any}) {
// 		const formData = this._objectToFormData(doc)
// 		return this.http.post(`${this._url}/${table}`, formData)
// 	}
// 	updateBy(table: string, key: string, value: string, obj: any) {
// 		delete obj[key]
// 		const formData = this._objectToFormData(obj)
// 		return this.http.post(`${this._url}/update_by/${table}/${key}/${value}`, formData)
// 	}
// 	updateByQuery<T = any>(table: string, where: {[key: string]: any}, set: T) {
// 		const object = {
// 			where	: JSON.stringify(where),
// 			set		: JSON.stringify(set),
// 		}
// 		const formData	= this._objectToFormData(object)
// 		return this.http.post(`${this._url}/update_by_query/${table}`, formData)
// 	}
// 	insert<T = any>(table: string, obj: T) {
// 		const formData = this._objectToFormData(obj)
// 		return this.http.post(`${this._url}/insert/${table}`, formData)
// 	}
// }

// @Injectable({
// 	providedIn: 'root'
// })
// export class AuthService {
// 	private _url = environment.app.url + '/__/api'
// 	private _openSnackBar(msg: string){
// 		this._snackBar.open(msg)._dismissAfter(4000)
// 	}
// 	role = {
// 		admin		: new BehaviorSubject(null),
// 		curriculum	: new BehaviorSubject(null),
// 		student		: new BehaviorSubject(null),
// 		teacher		: new BehaviorSubject(null),
// 	}
// 	member: any
// 	token: string
// 	constructor(
// 		private _api: ApiService,
// 		private _platform: PlatformService,
// 		private _router: Router,
// 		private _snackBar: MatSnackBar,
// 		private logger: LoggerService,
// 	) {}
// 	checkState(role: string) {
// 		// this.logger.log('checkState', role, 'begin')
// 		return new Observable<boolean>(observer => {
// 			if ( this._platform.browser ) {
// 				// this.logger.log('checkState platform')
// 				let storageBase64		= localStorage.getItem(environment.app.name)
// 				this.logger.log('storageBase64', storageBase64)
// 				let storageObject		= base64ToJSON(storageBase64)
// 				this.logger.log('storageObject', storageObject)
// 				const authTokenBase64	= storageObject[`auth_${role}_token`]
// 				this.logger.log('authTokenBase64', authTokenBase64)
// 				const authTokenObject	= base64ToJSON(authTokenBase64)
// 				this.logger.log('authTokenObject', authTokenObject)
// 				this.logger.log('JSON.stringify(authTokenObject)', JSON.stringify(authTokenObject))
// 				this.logger.log('Boolean(authTokenObject)', Boolean(authTokenObject))
// 				if ( JSON.stringify(authTokenObject) !== '{}' && Boolean(authTokenObject) ) {
// 					// this.logger.log('coerce', authTokenObject, coerceBoolean(authTokenObject))
// 					// this.logger.log('authTokenObject ', authTokenObject)
// 					// this.logger.log('role ', this.role[role])
// 					const {
// 						username,
// 						password,
// 					} = authTokenObject
// 					this._api.authentication(role, username, password)
// 						.subscribe(
// 							(r: any) => {
// 								this.role[role].next(r.account)
// 								this.logger.log('checkState', role, 'success', r)
// 								observer.next(true)
// 							},
// 							(r) => {
// 								// this.logger.log('checkState', role, 'error', r)
// 								observer.next(false)
// 								observer.error(true)
// 							},
// 							() => { observer.complete() }
// 						)
// 				} else {
// 					observer.next(false)
// 					observer.error(true)
// 					observer.complete()
// 				}
// 			}
// 		})
// 	}
// 	login(role: string, username: string, password: string, opts: any) {
// 		const {
// 			authenticated	= 'Authenticated as ',
// 			wrong			= 'Username/password is wrong.'
// 		} = opts
// 		const formData = new FormData
// 		formData.append('role', role)
// 		formData.append('username', username)
// 		formData.append('password', password)
// 		return new Observable((observer) => {
// 			this._api.authentication(role, username, password)
// 				.pipe(
// 					retry(3),
// 				)
// 				.subscribe(
// 					(r: any) => {
// 						this.logger.log('login success', role, r)
// 						if (r.authenticated) {
// 							const authTokenJSON		= JSON.stringify(r.account)
// 							// this.logger.log('r.account object to json', authTokenJSON)
// 							const authTokenBase64	= toBase64(authTokenJSON)
// 							// this.logger.log('r.account json to base64', authTokenBase64)
// 							let storageBase64		= localStorage.getItem(environment.app.name)
// 							// this.logger.log('get localStorage base64', storageBase64)
// 							let storageObject		= base64ToJSON(storageBase64)
// 							// this.logger.log('localStorage base64 to object', storageObject)
// 							storageObject[`auth_${role}_token`] = authTokenBase64
// 							// this.logger.log('storageObject', storageObject)
// 							storageBase64			= JSONToBase64(storageObject)
// 							// this.logger.log('storageObject to base64', storageBase64)
// 							localStorage.setItem(environment.app.name, storageBase64)
// 							// this.logger.log('set localStorage ', storageBase64)
// 							this.role[role].next(r.account)
// 							this._router.navigate(opts.to)
// 							this._openSnackBar(authenticated + r.account.name)
// 							observer.next(true)
// 						} else {
// 							this._openSnackBar(wrong)
// 						}
// 						observer.next(r)
// 					},
// 					(r) => {
// 						this.logger.log('login error', r)
// 						observer.error(r)
// 					},
// 					() => {
// 						observer.complete()
// 					}
// 				)
// 		})
// 	}
// 	logout(role: string, navigateTo: string[]) {
// 		this._snackBar
// 			.open('Yakin ingin keluar?', 'Ya', {
// 				duration: 16000
// 			})
// 			.onAction().subscribe(() => {
// 				this.role[role].next(null)
// 				let storageBase64		= localStorage.getItem(environment.app.name)
// 				let storageObject		= base64ToJSON(storageBase64)
// 				delete storageObject[`auth_${role}_token`]
// 				storageBase64			= JSONToBase64(storageObject)
// 				localStorage.setItem(environment.app.name, storageBase64)
// 				this._router.navigate(navigateTo)
// 			})
// 	}
// }

// @Injectable({
// 	providedIn: 'root'
// })
// export class LoggerService {
// 	constructor(private errorHandler: ErrorHandler) {}
// 	log(value: any, ...rest: any[]) {
// 		if (!environment.production) {
// 			console.log(value, ...rest)
// 		}
// 	}
// 	error(error: Error) {
// 		this.errorHandler.handleError(error)
// 	}
// 	warn(value: any, ...rest: any[]) {
// 		console.warn(value, ...rest)
// 	}
// }

// @Injectable({
// 	providedIn: 'root'
// })
// export class PlatformService {
// 	readonly browser: boolean
// 	readonly server: boolean
// 	constructor(
// 		@Inject(PLATFORM_ID) platformId: Object,
// 		@Inject(APP_ID) appId: string
// 	) {
// 		this.browser = !(this.server = isPlatformServer(platformId))
// 		console.log(platformId)
// 	// if ( platform == 'on the browser' && !isDevMode()) {
// 	// 	const swRegister = document.createElement('script')
// 	// 	swRegister.src = 'assets/sw-register.js'
// 	// 	document.body.appendChild(swRegister)
// 	// }
// 	}
// }
// // @Injectable({
// // 	providedIn: 'root',
// // })
// // export class SService {
// // 	constructor(
// // 		public route		: ActivatedRoute,
// // 		public dialog		: MatDialog,
// // 		public fb			: FormBuilder,
// // 		public http			: HttpClient,
// // 		public router		: Router,
// // 		public sanitizer	: DomSanitizer,
// // 		public snackBar		: MatSnackBar,

// // 		public api: ApiService,
// // 		public auth: AuthService,
// // 		public logger: LoggerService,
// // 		public util: UtilService,
// // 	) {}
// // 	openSnackBar(msg: string) {
// // 		this.snackBar.open(msg)._dismissAfter(4000)
// // 	}
// // }

// @Injectable({
// 	providedIn: 'root'
// })
// export class UtilService {
// 	readonly lodash = lodash
// 	constructor() {}
// }
