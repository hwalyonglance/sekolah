export class ShardEvent {
	protected _defaultPrevented: boolean = false
	constructor(
		private _default: Function,
		public _opts: any = {},
	){
		setTimeout(() => {
			if ( !this._defaultPrevented ) {
				this.default()
			}
		}, 1)
	}
	default(opts = this._opts) {
		// if ( !this._defaultPrevented ) {
			this._default(opts)
		// }
	}
	preventDefault(){ this._defaultPrevented = true }
}
