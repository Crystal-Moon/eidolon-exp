
const DEFAULTS = {
	lang: 'br',
	crystals: '6,7,8,9,10',

}

export default {
	get: key => localStorage.getItem(key) || DEFAULTS[key],
	
	set: (key, value) => localStorage.setItem(key, value),

	getCrystals: () => (localStorage.getItem('crystals') || DEFAULTS.crystals).split(','),

	setCrystals: (id, put) => {

		let ids = (localStorage.getItem('crystals') || DEFAULTS.crystals).split(',')
		/*
		if(ids.includes(id)){
			
			ids.splice(ids.indexOf(id), 1)
		}else {
			ids.push(id)
		}*/
		if(!put){
			
			ids.splice(ids.indexOf(id), 1)
		}else {
			ids.push(id)
		}

		localStorage.setItem('crystals', ids.join())
		return ids;
	}

}