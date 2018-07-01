import {
	Component,
	OnInit
} from '@angular/core'

import {
	Router,
} from '@angular/router'

@Component({
	selector: 'school-page-home',
	template: `
		<mat-toolbar color='primary'>
			Selamat Datang
		</mat-toolbar>
		<mat-card class='center' style='width: 300px; margin-top: 100px;'>
			<mat-card-header>
				Masuk Sebagai
			</mat-card-header>
			<mat-card-content>
				<mat-form-field>
					<mat-select #matSelectRef value='murid'>
						<mat-option value='admin'>Admin</mat-option>
						<mat-option value='kurikulum'>Kurikulum</mat-option>
						<mat-option value='guru'>Guru</mat-option>
						<mat-option value='murid'>Murid</mat-option>
					</mat-select>
				</mat-form-field>
				<button type='button' color='primary' mat-button (click)='pindah(matSelectRef.value)'>
					Pindah ke halaman login
				</button>
			</mat-card-content>
		</mat-card>
	`,
	styles: []
})
export class SchoolPageHomeComponent implements OnInit {
	constructor(
		private _router: Router,
	) {}
	ngOnInit() {}
	pindah(ke) {
		this._router.navigate(['/masuk', ke])
	}
}
