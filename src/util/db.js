
import userConfig from './userConfig';

const GO = (file) => new Promise(done=>{
	fetch(`https://raw.githubusercontent.com/Crystal-Moon/eidolon-exp/master/database/${file}.json`)
	.then(r=> done(r.json()))
});

const CRYSTALS = GO('crystals')
const COMPARE_GRAL = GO('compare-gral')
const EXP = GO('exp')

export default {
	getCrystals: id => !id? CRYSTALS : CRYSTALS.then(cc=>cc.find(c=>c.id==id)),

	getCrystalsUser: () => CRYSTALS.then(cc=>{
		let ids = userConfig.getCrystals();
		let crystals = cc.filter(c=> ids.includes(String(c.id))).sort((a,b)=> b.id - a.id)
		console.log('los crys del user', crystals)
		return crystals;
	}),

	getExp: ()=> EXP,

	getCompareGral: ()=> CRYSTALS.then(cc=>
	  COMPARE_GRAL.then(arr=>arr.map(x=>
	    ({ ...x, 
	  	  item_a: cc.find(c=>c.id==x.item_a),
	  	  item_b: cc.find(c=>c.id==x.item_b)
	  	}))
	))
}
