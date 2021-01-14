
import db from './db';

export default async({ xpEido, xpNeed, limits }) =>{

  const user = await db.getCrystalsUser().then(u=>u);
  //const exp = await db.getExp().then(x=>x);
      
 
    console.log('el user', user)
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
        console.log('no hay user c',c, user[c], user[c-1])

        //if(N[key].cant) N[key].cant++
        //else N[key].pack++
        N[key].cant++
        xpNeed=0;
      }else{
        key=String(user[c].id);


        if(!N[key]) N[key] = { cant: 0, pack: 0, item: user[c] };
        if(xpNeed >= user[c].xp){
          N[key].cant++;
          xpNeed -= user[c].xp;
          //if(limits) console.log('el limits key en cada vuelta', limits[key])
          if(limits && N[key].cant>=limits[key].cant){
            //N[key].pack++;
            //N[key].cant=0;
            c++;
          }
        }else if(N[key].cant>100){
        	let resto = N[key].cant % 100;
        	N[key].cant -= resto;

          	xpNeed += user[c].xp * resto
          //N[key].cant=0;
          	c++
        }else c++
        //console.log('N en cada vuelta',N, expNecesaria)
      }
    }

      console.log('despues del for')
      console.log(xpEido, expNecesaria1)
      console.log(N)
  

  	return ({ need: N, xpNeed: expNecesaria1, xpEido: xpEido })


	
}