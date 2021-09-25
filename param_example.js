/*var player_name = 'Sakib'
var player_bio = {
    age: 36,
    hair: "black"
}
var last_3_match_runs = [40, 30, 105];

function Player(name, bio, last_3_match_runs){
    name = 'Tamim'
    bio.hair = "brown"
    last_3_match_runs.push(60)
}

Player(player_name, player_bio, last_3_match_runs);

console.log(player_name, player_bio, last_3_match_runs)*/

//ES6
let player_name = 'Sakib'
const player_bio = {
    age: 36,
    hair: "black"
}
const last_3_match_runs = [40, 30, 105];

function Player(name, bio, last_3_match_runs){
    name = 'Tamim'
    bio.hair = "brown"
    last_3_match_runs.push(60)
}

Player(player_name, player_bio, last_3_match_runs);

console.log(player_name, player_bio, last_3_match_runs)
