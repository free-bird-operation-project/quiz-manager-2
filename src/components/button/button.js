'use strict'

import { verifyConfig } from './button-verify-config.js'
import { createNodeButton } from './button-create-node.js'
import { removeNodeButton } from './button-remove-node.js'

class Button {
	constructor(config) {
		this.config = config
	}

	_isValidConfig() {
		return verifyConfig(this.config)
	}

	createNode() {
		this._isValidConfig() ? (createNodeButton(), true) : false
	}

	removeNode() {
		removeNodeButton()
	}
}

export { Button }
