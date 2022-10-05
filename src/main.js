import util from './util.js'
import './css.css'

module.exports = function () {
	console.log('🎁', util)
	import('./util.js').then(({ default: util }) => console.log('📮', util))
}
