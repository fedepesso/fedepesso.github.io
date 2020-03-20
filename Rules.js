const difesa_universale = 10;
const attacco_universale = 3; 

export const Damage_system = function(Attivo, Passivo){
    let danno=0;
    let stats_needed = Attivo.attacker.stat_bonus[0];
    let type_of_damage=Attivo.attacker.damage_type;

    let valore_difensivo = difesa_universale/(difesa_universale*Passivo.defender[type_of_damage]);

    let danno_arma = Math.floor(Math.random() * Attivo.attacker.damage[1] + Attivo.attacker.damage[0]);
    let bonus_danno = (Attivo.stats[stats_needed]/2) * Attivo.attacker.stat_bonus[1] * attacco_universale;
    let somma_danni = danno_arma + bonus_danno;

    let tiro_critico = Math.floor(Math.random() * 100);
    if(tiro_critico>Attivo.attacker.crit[0]){
        somma_danni *=Attivo.attacker.crit[1];
    }

    danno = Math.floor(somma_danni*valore_difensivo);

    return danno;
}