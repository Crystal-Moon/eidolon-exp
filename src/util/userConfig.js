
const DEFAULTS = {
	lang: 'br',
	crystals: '',

}

export default {
	get: key => localStorage.getItem(key) || DEFAULTS[key],
	
	set: (key, value) => localStorage.setItem(key, value),

	getCrystals: () => (localStorage.getItem('crystals') || '').split(','),

	setCrystals: (id) => {

		let ids = (localStorage.getItem('crystals') || '').split(',')
		if(ids.includes(id)){
			
			ids.splice(ids.indexOf(id), 1)
		}else {
			ids.push(id)
		}

		localStorage.setItem('crystals', ids.join())
		return ids;
	}

}