
const DEFAULTS = {
	lang: 'es',
	crystals: '6,7,8,9'
}

export default {
	get: key => localStorage.getItem(key) || DEFAULTS[key],
	
	set: (key, value) => localStorage.setItem(key, value),

	getCrystals: () => (localStorage.getItem('crystals') || DEFAULTS.crystals).split(','),

	setCrystals: (id, put) => {
	  let ids = (localStorage.getItem('crystals') || DEFAULTS.crystals).split(',')	
	  
	  if(!put) ids.splice(ids.indexOf(id), 1)
	  else ids.push(id)

	  if(!ids.length) return id;
	  else{
		localStorage.setItem('crystals', ids.join())
		return 0;
	  }
	}
}