import {
	Component,
	ElementRef,
	EventEmitter,
	Inject,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatSelectionList,
} from '@angular/material';

import { includes } from 'lodash'

import { Column } from '../../i/dialog'

@Component({
	selector: 'shard-dialog-filter-columns',
	template: `
		<mat-card>
			<mat-card-header>
				<mat-card-title>
					<h3>Filter {{ data.title }} Columns</h3>
				</mat-card-title>
			</mat-card-header>
			<mat-card-content>
				<button mat-raised-button (click)="matSelectionListRef.selectAll()">{{ selectAll }}</button>
				&nbsp;
				<button mat-raised-button (click)="matSelectionListRef.deselectAll()">{{ deselectAll }}</button>
				<br />
				<br />
				<mat-selection-list #matSelectionListRef
					[(ngModel)]='selection'
					(ngModelChange)="ngModelOnChange($event)"
					>

					<mat-list-option *ngFor='let column of data.columns; let i = index'
						[selected]='!column.hidden' [value]='column.name'>

						<div fxFlex fxLayout='row' fxLayoutAlign='start center'>
							<button [disabled]='i === 0' fxFlex='40px'
								mat-icon-button (click)='up(column.name, i)'>
								<mat-icon>keyboard_arrow_up</mat-icon>
							</button>
							<button [disabled]='i === data.columns.length-1' fxFlex='40px'
								mat-icon-button (click)='down(column.name, i)'>
								<mat-icon>keyboard_arrow_down</mat-icon>
							</button>
							<span fxFlex>
								{{ column | json }}
							</span>
						</div>
					</mat-list-option>
				</mat-selection-list>
			</mat-card-content>
		</mat-card>
	`,
	styles: [`
		:host {
			display: flex;
			flex-flow: row wrap;
			max-height: 95vh;
		}
		.mat-selection-list {
			border: 1px solid rgba(0, 0, 0, 0.12);
			max-height: 55vh;
			overflow-y: auto;
			// margin: 20px 20px 0 0;
		}
	`],
	host: {
		class: 'shard-dialog-filter-columns'
	}
})
export class ShardDialogFilterColumnsComponent implements OnInit {
	get deselectAll() {
		return this.data.opts.deselectAll || 'Deselect All'
	}
	get selectAll() {
		return this.data.opts.selectAll || 'Select All'
	}
	selection
	constructor(
		private _elRef: ElementRef,
		@Inject(MAT_DIALOG_DATA) public data: {
			title: string
			columns: Column[],
			onChange: (columns: Column[]) => void,
			opts: any
		},
		public dialogRef: MatDialogRef<ShardDialogFilterColumnsComponent>,
	) {
		alert(JSON.stringify(data.columns))
	}
	ngOnInit() {}
	down(key: string, index: number) {
		// setTimeout(() => {
			// console.log('filter', key, 'down')
			const copiedColumns = this.data.columns.slice()
			const that = copiedColumns[index]
			that.hidden = !that.hidden
			const below = copiedColumns[index+1]
			copiedColumns[index] = below
			copiedColumns[index+1] = that
			this.data.columns = copiedColumns
			this.data.onChange(copiedColumns)
		// }, 1)
	}
	onChange(columns: string) {
		// setTimeout(() => {
			// console.log('selectionList onchange', columns)
			let copiedColumns = this.data.columns.slice()
			copiedColumns = copiedColumns.map(c => {
				c.hidden = !includes(columns, c.name)
				return c
			})
			this.data.onChange(copiedColumns)
		// }, 2)
	}
	ngModelOnChange(columns: string) {
		// setTimeout(() => {
			// console.log('selectionList ngModelOnChange', columns)
			let copiedColumns = this.data.columns.slice()
			copiedColumns = copiedColumns.map(c => {
				c.hidden = !includes(columns, c.name)
				return c
			})
			this.data.onChange(copiedColumns)
		// }, 3)
	}
	scrollToBottom() {
		this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight
	}
	up(key: string, index: number) {
		// setTimeout(() => {
			// console.log('filter', key, 'up')
			const copiedColumns = this.data.columns.slice()
			// console.log('copiedColumns', copiedColumns)
			const above = copiedColumns[index-1]
			// console.log('above', above)
			const that = copiedColumns[index]
			// console.log('that', that)
			that.hidden = !that.hidden
			copiedColumns[index-1] = that
			copiedColumns[index] = above
			// console.log('copiedColumns', copiedColumns)
			this.data.columns = copiedColumns
			this.data.onChange(copiedColumns)
		// }, 3)
	}
}
