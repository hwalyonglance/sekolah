import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DeleteConfirm } from '../../i/dialog'

@Component({
	selector: 'shard-dialog-delete-confirm',
	template: `
		<mat-card>
			<mat-card-header>
				<mat-card-title>
					{{ data.title }}
				</mat-card-title>
			</mat-card-header>
			<mat-card-content>
				{{ data.message }}
			</mat-card-content>
			<mat-card-actions align='end'>
				<button (click)='delete.next()' color='warn' mat-raised-button>
					<mat-icon>delete_forever</mat-icon>
					Delete
				</button>
				<button (click)='cancel.next()' color='warn' mat-button>
					<mat-icon>cancel</mat-icon>
					Cancel
				</button>
			</mat-card-actions>
		</mat-card>
	`,
	styles: [`
		:host {
			min-width: 350px;
		}
	`],
	host: {
		class: 'shard-dialog-delete-confirm'
	}
})
export class ShardDialogDeleteConfirmComponent implements OnInit {
	cancel = new EventEmitter
	delete = new EventEmitter
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: DeleteConfirm,
		public dialogRef: MatDialogRef<ShardDialogDeleteConfirmComponent>
	) {}
	ngOnInit() {}
}
