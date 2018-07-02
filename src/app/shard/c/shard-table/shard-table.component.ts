import {
	HttpParams,
} from '@angular/common/http'
import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	QueryList,
	Renderer2,
	ViewChild,
	ViewChildren,
} from '@angular/core'
import {
	FormBuilder,
	FormGroup,
} from '@angular/forms'
import {
	MatColumnDef,
	MatDialog,
	MatDialogRef,
	MatFooterRowDef,
	MatHeaderRowDef,
	MatPaginator,
	MatRowDef,
	MatSnackBar,
	MatSort,
	MatProgressSpinner,
	MatTable,
	MatTableDataSource
} from '@angular/material'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	Observable,
	fromEvent,
} from 'rxjs'
import {
	debounceTime,
	distinctUntilChanged,
} from 'rxjs/operators'

import { environment } from '../../environment'

import {
	ShardDialogFilterColumnsComponent
} from '../shard-dialog-filter-columns/shard-dialog-filter-columns.component'
import {
	ShardDialogDeleteConfirmComponent
} from '../shard-dialog-delete-confirm/shard-dialog-delete-confirm.component'
import { ShardEvent } from '../../cl'

import { pluralToSingular } from '../../f'
import { Column, DeleteConfirm, Menu } from '../../i'
import { ApiService } from '../../s'

@Component({
	selector: 'shard-table',
	templateUrl: './shard-table.component.html',
	styles: [`
		:host {
			display: block;
			width: 100%;
		}
		.loading-wrapper{
			padding: 64px;
		}
		.table-wrapper {
			max-width: 1150px;
			overflow-x: auto;
		}
		.mat-table {
			width: 100%;
			overflow-x: auto;
		}
		.mat-cell {
			padding-left: 4px;
			padding-right: 4px;
		}
	`],
	host: {
		class: 'shard-table mat-elevation-z2'
	}
})
export class ShardTableComponent<T = any>
	implements AfterViewInit, AfterContentInit, OnDestroy, OnInit {

	private _deleteConfirmDialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
	private _filterColumnsDialogRef: MatDialogRef<ShardDialogFilterColumnsComponent>

	private _handleOnCreate() {
		this.create.next(new ShardEvent((opts) => {
			const {
				to	= ['/admin', this.tableName, 'create'],
			} = opts
			console.log('onCreate navigate to', to)
			this._router.navigate(to)
		}))
	}
	private _handleOnDeleteById([key, value]) {
		this.deleteById.next(new ShardEvent((_opts) => {
			let {
				ask		= `Are You sure want to delete this data?`,
				deleted	= `deleted`,
				error	= 'Error when to try delete data',
				cancel	= 'Canceling delete',
				table	= _opts.table || this.tableName
			} = _opts || {}
			this._deleteConfirmDialogRef
				= this._dialog
					.open(ShardDialogDeleteConfirmComponent, {
						data: {
							title: this.title,
							message: ask,
						}
					})
			this._deleteConfirmDialogRef.componentInstance
				.delete.subscribe(() => {
					const members = [
						'admins',
						'curriculums',
						'students',
						'teachers',
					]
					if (members.includes(table)) {
						table = 'members'
					}
					const misc = [
						'departments',
						'subjects',
					]
					if (misc.includes(table)) {
						table = 'misc'
					}
					const scores = [
						'students_in_scores_v'
					]
					if (scores.includes(table)) {
						table = 'scores'
					}
					if (table.endsWith('_v')) {
						table = table.replace('_v', '')
					}
					if (['members', 'misc'].includes(table)) {
						key = '_id'
					}
					console.log('deleteBy: table, key, value', table, key, value)
					this._api.deleteBy(table, key, value)
						.subscribe(
							(r: any) => {
								console.log(r)
								if ( r.result ) {
									const data = this.dataSource.data.slice()
									this.dataSource.data
										= data.filter((d: any) => d[this.id] != value)
									this._openSnackBar(deleted)
								} else {
									this._openSnackBar(error)
								}
							},
							(r) => {
								console.log(r)
								this._openSnackBar(error)
							},
							() => {
								this._deleteConfirmDialogRef.close()
								this._deleteConfirmDialogRef = null
							}
						)
				})
			this._deleteConfirmDialogRef.componentInstance
				.cancel.subscribe(
					() => {
						this._openSnackBar(cancel)
						this._deleteConfirmDialogRef.close()
						this._deleteConfirmDialogRef = null
					}
				)
		}, {
			_id: value
		}))
	}
	private _handleOnDeleteFilter() {
		this.deleteFilter.next(new ShardEvent((opts) => {
			// console.log('default')
			const {

			} = opts
		}, {

		}))
	}
	private _handleOnDeleteSelected() {
		this.deleteSelected.next(new ShardEvent((opts) => {
			// console.log('default')
			const {

			} = opts
		}, {

		}))
	}
	private _handleOnEditById(row) {
		// console.log(`editById`, this.id, row, this._router.url)
		this.editById.next(new ShardEvent((opts) => {
			const {
				to = ['/admin', this.tableName, row[this.id], 'edit']
			} = opts
			console.log('onEdit navigate to', to)
			this._router.navigate(to)
		} , {
			...row
		}))
	}
	private _handleOnFilterColumns() {
		console.log('_handleOnFilterColumns')
		this.filterColumns.next(new ShardEvent((opts) => {
			const {
				selectAll	= 'Pilih semua',
				deselectAll	= 'Hapus semua pilihan',
			} = opts
			this._filterColumnsDialogRef = this._dialog.open(ShardDialogFilterColumnsComponent, {
				data: {
					title: this.title,
					columns: this.columns,
					onChange: (columns: Column[]) => {
						// console.log('filterColumnChange', columns)
						// for( let col of columns ){
						// 	console.log(col)
						// }
						this.columns = columns
					},
					opts: {
						selectAll,
						deselectAll,
					}
				},
			})
			this._filterColumnsDialogRef.afterClosed().subscribe(() => {
				this._filterColumnsDialogRef = null
			})
		}, {

		}))
	}
	private _handleOnPrintAll() {
		this.printAll.next(new ShardEvent((opts) => {
			// console.log('default _handleOnPrintAll')
			const {

			} = opts
			const aTag: HTMLAnchorElement = this._renderer.createElement('a')
			// console.clear()

			console.log('where', this.where)
			const value = { ...this.where, ...this.form.value }
			const columnsToPrint = { ...this.where, ...this.columnsToPrint }
			// console.log('value', value)
			const f = {}
			// const l = {}
			// const v = {}
			Object.keys(columnsToPrint).forEach(k => {
				f[k] = JSON.stringify([value[k], columnsToPrint[k]])
				// v[k] = value[k]
				// l[k] = this.columnsToPrint[k]
			})
			f['__hidden'] = JSON.stringify(Object.keys(this.where))
			const params = new HttpParams({
				// fromObject: { l: JSON.stringify(l), v: JSON.stringify(v), }
				fromObject: f
			})


			// console.log('v', v)
			// console.log('l', l)
			// console.log('params', params.toString())

			aTag.href = `${environment.app.url}/laporan/pdf/${this.pdf}?${params.toString()}`
			aTag.target = '_blank'
			// aTag.download = `${this._router.url}/cetak`
			aTag.dispatchEvent(new MouseEvent('click'))

			// console.log('columnsToPrint', this.columnsToPrint)
			// console.log('params', params.toString())
			// this._router.navigate(['/cetak', 'semua', this.pdf], {
			// 	queryParams: params
			// })
		}, {

		}))
	}
	private _handleOnPrintById(_id) {
		this.printById.next(new ShardEvent(() => {
			const aTag: HTMLAnchorElement = this._renderer.createElement('a')
			aTag.download = `${this._router.url}/${_id}/print`
			aTag.dispatchEvent(new MouseEvent('click'))
		}, {

		}))
	}
	private _handleOnPrintFiltered() {
		this.printFiltered.next(new ShardEvent((opts) => {
			const {

			} = opts
			// console.log('default _handleOnPrintFilter')
		}, {

		}))
	}
	private _handleOnPrintPerPeriod() {
		this.printPerPeriod.next(new ShardEvent((opts) => {
			// console.log('default _handleOnPrintPerPeriod')
			const {

			} = opts
		}, {

		}))
	}
	private _handleOnPrintSelected() {
		this.printSelected.next(new ShardEvent((opts) => {
			// console.log('default _handleOnPrintSelected')
			const {

			} = opts
		}, {

		}))
	}
	private _handleOnRowClick(row) {
		this.rowClick.next(new ShardEvent((opts) => {
			// console.log('default _handleOnRowClick', row)
			const {

			} = opts
		}, {
			...row,
		}))
	}
	private _handleOnRefresh() {
		this.refresh.next(new ShardEvent((opts) => {
			const {
				where = this.where
			} = opts
			this.setData(where).subscribe()
		}))
	}
	private _openSnackBar(msg: string) {
		this._snackBar.open(msg)._dismissAfter(4000)
	}

	@Input()
	get columns() { return this._columns }
	set columns(columns: Column[]) {
		this._columns = columns
		const controlName = {}
		columns.forEach(c => {
			controlName[c.name] = ''
		})
		// console.log('controlName', controlName)
		this.form = this._fb.group({
			...controlName
		})
		console.log('form', this.form)
	}
	private _columns: Column[] = []
	@Input()
	get pdf() {
		return this._pdf ? this._pdf : this.title.toLowerCase()
	}
	set pdf(name: string) {
		this._pdf = name
	}
	private _pdf: string
	@Input()
	get tableName() {
		return this._tableName ? this._tableName : this.title.toLowerCase()
	}
	set tableName(name: string) {
		this._tableName = name
	}
	private _tableName: string
	@Input() title: string = 'judul'

	@Input() extraMainMenus: Menu[] = []
	@Input() extraRowMenus: Menu[] = []

	@Input() id: string = '_id'
	@Input() showCreateMenu: boolean = true
	@Input() showDeleteMenu: boolean = true
	@Input() showEditMenu: boolean = true

	@Input() showMainMenuTrigger: boolean = true
	@Input() showRowMenuTrigger: boolean = true

	@Output() create			= new EventEmitter
	@Output() deleteById		= new EventEmitter
	@Output() deleteFilter		= new EventEmitter
	@Output() deleteSelected	= new EventEmitter
	@Output() editById			= new EventEmitter
	@Output() filterColumns		= new EventEmitter
	@Output() printAll			= new EventEmitter
	@Output() printById			= new EventEmitter
	@Output() printFiltered		= new EventEmitter
	@Output() printPerPeriod	= new EventEmitter
	@Output() printSelected		= new EventEmitter
	@Output() rowClick			= new EventEmitter
	@Output() refresh			= new EventEmitter

	// @ViewChild('filter') filter: ElementRef
	@ViewChild(MatPaginator) paginatorRef: MatPaginator
	@ViewChild(MatSort) sortRef: MatSort
	@ViewChild(MatTable) tableRef: MatTable<T>

	@ViewChildren(MatHeaderRowDef) header: QueryList<MatHeaderRowDef>

	get displayedColumns() {
		let columns =  [
			{ name: '_index', label: 'No', hidden: false },
			...this.columns.filter(c => !c.hidden),
		]
		if (this.showRowMenuTrigger) {
			columns = [
				...columns,
				{ name: '_actions', label: '', hidden: false },
			]
		}
		return columns
	}
	get displayedColumns2() {
		return this.displayedColumns.map(c => {
			return {
				name: c.name+'2',
				label: c.label,
				hidden: c.hidden,
			}
		})
	}
	get displayedColumnNames() {
		return this.displayedColumns.map(c => c.name)
	}
	get displayedColumnNames2() {
		// console.log(`this.displayedColumns.map(c => c+'2')`, this.displayedColumns.map(c => c+'2'))
		return this.displayedColumns2.map(c => c.name)
	}
	get columnsToPrint() {
		return this.displayedColumns
		.filter(c => !['_index', '_actions'].includes(c.name))
		.map(c => {
			return { [c.name]: c.label }
		}).reduce((a, c) => {
			return {...a, ...c}
		}, {})
	}

	@Input() dataSource: MatTableDataSource<T> = new MatTableDataSource([])
	form: FormGroup
	isLoading: boolean = true
	// isLoading: boolean = false
	@Input()
	get where() { return this._where }
	set where(w) {
		this._where = w
		this.setData(w).subscribe()
	}
	private _where = {}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _dialog: MatDialog,
		private _fb: FormBuilder,
		private _renderer: Renderer2,
		private _router: Router,
		private _snackBar: MatSnackBar,
	){}
	ngAfterViewInit() {
		// fromEvent(this.filter.nativeElement, 'keyup')
		// 	.pipe(
		// 		// debounceTime(500),
		// 		distinctUntilChanged(),
		// 	)
		// 	.subscribe((evt: KeyboardEvent) => {
		// 		// console.log('evt', evt)
		// 		this.paginatorRef.pageIndex = 0
		// 		this.dataSource.filter = evt.target['value']
		// 	})

	}
	ngAfterContentInit() {
	}
	ngOnDestroy() {
		this._deleteConfirmDialogRef = null
		this._filterColumnsDialogRef = null
	}
	ngOnInit() {
		this.dataSource!.paginator = this.paginatorRef
		this.dataSource!.sort = this.sortRef
		this.dataSource.sortingDataAccessor = (obj: any, prop: string) => {
			return +obj[prop] || ''
		}
		this.form.valueChanges.subscribe(v => {
			this.paginatorRef.pageIndex = 0
			this.dataSource.filter = v
		})
		this.dataSource.filterPredicate = (object: any, filter) => {
			// const displayedColumnKeys = Object.keys(object).filter(key => {
			// 	const _displayedColumnKeys = this.columns
			// 		.filter(col => !col.hidden)
			// 		.map(col => col.name)
			// 	return _displayedColumnKeys.includes(key)
			// })
			// const displayedColumnValues = displayedColumnKeys.map(key => {
			// 	return object[key]
			// })
			// return displayedColumnValues
			// 	.join('')
			// 	.toLowerCase()
			// 	.indexOf(filter.toLowerCase()) !== -1
			return Object.keys(filter)
				.map(k => object[k].indexOf(filter[k]) !== -1 )
				.every(v => v)
		}
	}
	handleEvent(evt: ShardTableEvent, opts: any = {}) {
		this[`_handleOn${evt}`](opts)
	}
	setData(where = this.where) {
		this.isLoading = true
		return new Observable((observer) => {
			this._api.getByQuery(this.tableName, where)
				.subscribe(
					(r: any) => {
						this.dataSource!.data = r
						this.isLoading = false
						console.log(r)
						observer.next(r)
					},
					(r) => {
						console.log(r)
						observer.error(r)
					},
					() => { observer.complete() }
				)
		})
	}
}

export type ShardTableEvent
	=	'Create'
	|	'DeleteById'
	|	'DeleteByQuery'
	|	'DeleteSelected'
	|	'FilterColumns'
	|	'Edit'
	|	'PrintAll'
	|	'PrintById'
	|	'PrintByQuery'
	|	'PrintFilter'
	|	'PrintPerPeriod'
	|	'PrintSelected'
	|	'RowClick'
	|	'Refresh'
