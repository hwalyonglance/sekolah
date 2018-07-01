import { Injectable } from '@angular/core';

import * as lodash from 'lodash'

import * as util from '../f/util'

@Injectable({
	providedIn: 'root'
})
export class UtilService {
	readonly lodash = lodash
	readonly f = util
	constructor() {}
}
