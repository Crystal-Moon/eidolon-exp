
import db from './db';

export default async({ xpEido, xpNeed, limits, toq, change }) =>{

  const user = await db.getCrystalsUser().then(u=>u);
  //const exp = await db.getExp().then(x=>x);
      
 
    //console.log('el user', user)
  console.log('ell change q llega', change)
    //console.log('los limit q llegan al calcul',limits)
        //console.log('el exp', exp)

  //  let expTotalEido = exp[String(lvl)].total + ( exp[String(parseInt(lvl)+1)].xp / 100000 * percent );
  //  let expNecesaria = exp[String(lvlTo)].total - expTotalEido;
    let expNecesaria1 = xpNeed;
    let N = {};

    let key='';
    let c=0

    for (; xpNeed > 0;){
        //console.log('el user c',user[c])
      if(!user[c]){
        //console.log('no hay user c',c, user[c], user[c-1])

        //if(N[key].cant) N[key].cant++
        //else N[key].pack++
        N[key].cant++
        xpNeed=0;
      }else{
        key=String(user[c].id);


        if(!N[key]) N[key] = { cant: 0, pack: 0, item: user[c] };
        //if(xpNeed >= user[c].xp || (change && N[key].cant <= change.cant)){
        if(xpNeed >= user[c].xp || (change && N[key].cant <= change.cant)){
          N[key].cant++;
          xpNeed -= user[c].xp;

          if(change && N[key].cant >= change.cant && parseInt(change.id) >= parseInt(key)) c++;
         // else if(change && N[key].cant < change.cant && key == change.id){
       // 	console.log('el el nuevo if', key, change)
        	//N[key].cant = change.cant;
        	//c++;
    	 // }
          //if(limits) console.log('el limits key en cada vuelta', limits[key])
          /*
          if(limits && N[key].cant>=limits[key].cant){
            //N[key].pack++;
            //N[key].cant=0;
            console.log('dentro de resto',limits[key])
            console.log('el key',key)
            console.log('echi string +1 ', (user[c+1]||user[c]).id)
            limits[String((user[c+1]||user[c]).id)].cant=100;
            
            let resto = N[key].cant % 100;
        	console.log('el resto', resto)
        	N[key].cant -= resto;

          	xpNeed += user[c].xp * resto;


          	c++;
          }*/
        }else if(N[key].cant>100){
        	let resto = N[key].cant % 100;
        	//console.log('el resto', resto)
        	N[key].cant -= resto;

          	xpNeed += user[c].xp * resto
          //N[key].cant=0;
          	c++
        //}else if(change && change.cant > N[key].cant && change.id==key){
        	//console.log('en el if',change)
       // 	N[key].cant = change.cant;
        //	c++;

        }else c++
        //console.log('N en cada vuelta',N, expNecesaria)
      }
    }

    if(change && change.cant > N[change.id].cant && change.id == key){
    	console.log('en el if final',change)
    	N[change.id].cant=change.cant;
    }

      //console.log('despues del for')
      ///console.log(xpEido, expNecesaria1)
      console.log('N',N)
  

  	return ({ need: N, xpNeed: expNecesaria1, xpEido: xpEido })


	
}