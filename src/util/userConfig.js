
const DEFAULTS = {
	lang: 'br',
	crystals: '',

}

export default {
	get: key => localStorage.getItem(key) || DEFAULTS[key],
	
	set: (key, value) => localStorage.setItem(key, value)

}