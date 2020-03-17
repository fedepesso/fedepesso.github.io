let d_position=0;
let ricerca_d = function(pars){
    if (pars.indexOf('d') > -1){
        d_position = pars.indexOf('d');
        return true;
    }
    return false;
}

function randomNumber(max) {
    return Math.floor(Math.random()*(max)) + 1;
}

function numeroDiTiri(triplet){
    return Number(triplet.slice(0,d_position));
}


let Tiro = function(stringa){
    let totale = 0;
    let sliced = stringa.split('+');
    sliced.forEach(element => {
        if (ricerca_d(element)){
            let part=0;
            for(let i=0; i<numeroDiTiri(element);i++){
                let estratto = randomNumber(element.slice(d_position+1, element.length));
                part+=estratto;
            }
            totale+=part;
        }else{
            totale+=Number(element);
        }
    });
    return totale;
}

console.log(Tiro("10d2+10+1d20"));
