function checkMe() {
    let needsToCheck = {
        "bcoin": "cb-bcoin",
        "spg": "cb-spg",
        "mgod": "cb-mgod",
        "lus": "cb-lus",
        "ninti": "cb-ninti",
        "avax": "cb-avax",
        "mana": "cb-mana",
        "sand": "cb-sand",
        "bnb": "cb-bnb",
        "dgzv": "cb-dgzv",
        "ckg": "cb-ckg",
        "scs": "cb-scs",
        "axs": "cb-axs",
        "slp": "cb-slp",
        "ron": "cb-ron",
        "skill": "cb-skill"
    }

    //    console.log(needsToCheck);
    needsToCheck.forEach(function (value, index) {
        cb = document.getElementById(value);
        container = document.getElementById(index);
        /* Toggle with a click event would be better, one line without verifications */
        if (cb.checked == true) {
            container.classList.remove('d-none');
        } else {
            container.classList.add('d-none');
        }
    });
}


async function get() {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=Bomber-Coin%2CSpace-Crypto%2CMetaGods%2CLuna-Rush%2CNintia-Estate%2CCrystal-Kingdoms%2CShining-Crystal-Shard%2CDecentraland%2CThe-Sandbox%2Coec-binance-coin%2Cronin%2Csmooth-love-potion%2Caxie-infinity%2Cdogzverse-token%2Cbinance-peg-avalanche%2Ccryptoblades&vs_currencies=usd");
    const data = await response.json();
    //console.log(data)

    document.querySelector("#Bomber-Coin").innerHTML = data["bomber-coin"].usd.toFixed(2);
    document.querySelector("#Space-Crypto").innerHTML = data["space-crypto"].usd.toFixed(2);
    document.querySelector("#metagods").innerHTML = data["metagods"].usd.toFixed(4);
    document.querySelector("#Luna-Rush").innerHTML = data["luna-rush"].usd.toFixed(2);
    document.querySelector("#nintia-estate").innerHTML = data["nintia-estate"].usd.toFixed(4);
    document.querySelector("#binance-peg-avalanche").innerHTML = data["binance-peg-avalanche"].usd.toFixed(2);
    document.querySelector("#decentraland").innerHTML = data["decentraland"].usd.toFixed(2);
    document.querySelector("#the-sandbox").innerHTML = data["the-sandbox"].usd.toFixed(2);
    document.querySelector("#oec-binance-coin").innerHTML = data["oec-binance-coin"].usd.toFixed(2);
    document.querySelector("#dogzverse-token").innerHTML = data["dogzverse-token"].usd.toFixed(2);
    document.querySelector("#crystal-kingdoms").innerHTML = data["crystal-kingdoms"].usd.toFixed(2);
    document.querySelector("#shining-crystal-shard").innerHTML = data["shining-crystal-shard"].usd.toFixed(4);
    document.querySelector("#axie-infinity").innerHTML = data["axie-infinity"].usd.toFixed(2);
    document.querySelector("#smooth-love-potion").innerHTML = data["smooth-love-potion"].usd.toFixed(4);
    document.querySelector("#ronin").innerHTML = data["ronin"].usd.toFixed(2);
    document.querySelector("#cryptoblades").innerHTML = data["cryptoblades"].usd.toFixed(2);


}
get()

/*
document.getElementById('inputBcoin').addEventListener('change', bomber);
document.getElementById('input_spg').addEventListener('change', space);
document.getElementById('input_mgod').addEventListener('change', metagods);
document.getElementById('input_lus').addEventListener('change', luna);
document.getElementById('input_ninti').addEventListener('change', nintia);
document.getElementById('input_avax').addEventListener('change', avalanche);
document.getElementById('input_mana').addEventListener('change', decentraland);
document.getElementById('input_sand').addEventListener('change', sandbox);
document.getElementById('input_bnb').addEventListener('change', binance);
document.getElementById('input_dgzv').addEventListener('change', dogzverse);
document.getElementById('input_ckg').addEventListener('change', crystal);
document.getElementById('input_scs').addEventListener('change', shining);
document.getElementById('input_axs').addEventListener('change', axie);
document.getElementById('input_slp').addEventListener('change', smooth);
document.getElementById('input_ron').addEventListener('change', ronin);

function bomber(){
    document.getElementById('total_Bcoin').innerHTML = document.getElementById('inputBcoin').value * document.getElementById('Bomber-Coin').innerHTML;
    console.log(total_Bcoin)

}



function space(){
    document.getElementById('total_spg').innerHTML = document.getElementById('input_spg').value * document.getElementById('Space-Crypto').innerHTML;
    getsetTotal()
}
function metagods(){

    document.getElementById('total_mgod').innerHTML = document.getElementById('input_mgod').value * document.getElementById('metagods').innerHTML;
}
function luna(){

    document.getElementById('total_lus').innerHTML = document.getElementById('input_lus').value * document.getElementById('Luna-Rush').innerHTML;
}
function nintia(){

    document.getElementById('total_ninti').innerHTML = document.getElementById('input_ninti').value * document.getElementById('nintia-estate').innerHTML;
}
function avalanche(){

    document.getElementById('total_avax').innerHTML = document.getElementById('input_avax').value * document.getElementById('binance-peg-avalanche').innerHTML;
}
function decentraland(){
    document.getElementById('total_mana').innerHTML = document.getElementById('input_mana').value * document.getElementById('decentraland').innerHTML;
}
function sandbox(){

    document.getElementById('total_sand').innerHTML = document.getElementById('input_sand').value * document.getElementById('the-sandbox').innerHTML;
}
function binance(){
    document.getElementById('total_bnb').innerHTML = document.getElementById('input_bnb').value * document.getElementById('oec-binance-coin').innerHTML;
}
function dogzverse(){

    document.getElementById('total_dgzv').innerHTML = document.getElementById('input_dgzv').value * document.getElementById('dogzverse-token').innerHTML;
}
function crystal(){

    document.getElementById('total_ckg').innerHTML = document.getElementById('input_ckg').value * document.getElementById('crystal-kingdoms').innerHTML;
}
function shining(){

    document.getElementById('total_scs').innerHTML = document.getElementById('input_scs').value * document.getElementById('shining-crystal-shard').innerHTML;
}
function axie(){

    document.getElementById('total_axs').innerHTML = document.getElementById('input_axs').value * document.getElementById('axie-infinity').innerHTML;
}
function smooth(){

    document.getElementById('total_slp').innerHTML = document.getElementById('input_slp').value * document.getElementById('smooth-love-potion').innerHTML;
}
function ronin(){

    document.getElementById('total_ron').innerHTML = document.getElementById('input_ron').value * document.getElementById('ronin').innerHTML;
}
*/

//
//function getsetTotal() {
//    var arr = document.getElementById('total_Bcoin').value;
//    console.log(arr)
//    var arr2 = document.getElementById('total_spg').value;
//    console.log(arr)
//
//    total = arr + arr2;
//    document.getElementById('balance').innerHTML = total;
//}
//getsetTotal()
let inputBcoin = document.getElementById('inputBcoin');
let input_spg = document.getElementById('input_spg');
let input_mgod = document.getElementById('input_mgod');
let input_lus = document.getElementById('input_lus');
let input_ninti = document.getElementById('input_ninti');
let input_mana = document.getElementById('input_mana');
let input_avax = document.getElementById('input_avax');
let input_sand = document.getElementById('input_sand');
let input_bnb = document.getElementById('input_bnb');
let input_dgzv = document.getElementById('input_dgzv');
let input_ckg = document.getElementById('input_ckg');
let input_scs = document.getElementById('input_scs');
let input_axs = document.getElementById('input_axs');
let input_slp = document.getElementById('input_slp');
let input_ron = document.getElementById('input_ron');
let input_skill = document.getElementById('input_skill');
let empty_balance = document.getElementById('enter_token');
let empty_balance_bcoin = document.getElementById('enter_token_bcoin');
let empty_balance_spg = document.getElementById('enter_token_spg');
let empty_balance_mgod = document.getElementById('enter_token_mgod');
let empty_balance_lus = document.getElementById('enter_token_lus');
let empty_balance_ninti = document.getElementById('enter_token_ninti');
let empty_balance_mana = document.getElementById('enter_token_mana');
let empty_balance_avax = document.getElementById('enter_token_avax');
let empty_balance_sand = document.getElementById('enter_token_sand');
let empty_balance_bnb = document.getElementById('enter_token_bnb');
let empty_balance_dgzv = document.getElementById('enter_token_dgzv');
let empty_balance_ckg = document.getElementById('enter_token_ckg');
let empty_balance_scs = document.getElementById('enter_token_scs');
let empty_balance_axs = document.getElementById('enter_token_axs');
let empty_balance_slp = document.getElementById('enter_token_slp');
let empty_balance_ron = document.getElementById('enter_token_ron');
let empty_balance_skill = document.getElementById('enter_token_skill');


inputBcoin.oninput = () => {
    let output = (parseFloat(inputBcoin.value)) * document.getElementById('Bomber-Coin').innerHTML;
    document.getElementById('total_Bcoin').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_bcoin.remove('enter_token_bcoin');
    setTotal();
};

input_spg.oninput = () => {
    let output = (parseFloat(input_spg.value)) * document.getElementById('Space-Crypto').innerHTML;
    document.getElementById('total_spg').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_spg.remove('enter_token_spg');
    setTotal();
};

input_mgod.oninput = () => {
    let output = (parseFloat(input_mgod.value)) * document.getElementById('metagods').innerHTML;
    document.getElementById('total_mgod').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_mgod.remove('enter_token_mgod');
    setTotal();
};

input_lus.oninput = () => {
    let output = (parseFloat(input_lus.value)) * document.getElementById('Luna-Rush').innerHTML;
    document.getElementById('total_lus').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_lus.remove('enter_token_lus');
    setTotal();
};

input_ninti.oninput = () => {
    let output = (parseFloat(input_ninti.value)) * document.getElementById('nintia-estate').innerHTML;
    document.getElementById('total_ninti').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_ninti.remove('enter_token_ninti');
    setTotal();
};

input_mana.oninput = () => {
    let output = (parseFloat(input_mana.value)) * document.getElementById('decentraland').innerHTML;
    document.getElementById('total_mana').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_mana.remove('enter_token_mana');
    setTotal();
};

input_avax.oninput = () => {
    let output = (parseFloat(input_avax.value)) * document.getElementById('binance-peg-avalanche').innerHTML;
    document.getElementById('total_avax').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_avax.remove('enter_token_avax');
    setTotal();
};

input_sand.oninput = () => {
    let output = (parseFloat(input_sand.value)) * document.getElementById('the-sandbox').innerHTML;
    document.getElementById('total_sand').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_sand.remove('enter_token_sand');
    setTotal();
};
input_bnb.oninput = () => {
    let output = (parseFloat(input_bnb.value)) * document.getElementById('oec-binance-coin').innerHTML;
    document.getElementById('total_bnb').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_bnb.remove('enter_token_bnb');
    setTotal();
};

input_dgzv.oninput = () => {
    let output = (parseFloat(input_dgzv.value)) * document.getElementById('dogzverse-token').innerHTML;
    document.getElementById('total_dgzv').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_dgzv.remove('enter_token_dgzv');
    setTotal();
};

input_ckg.oninput = () => {
    let output = (parseFloat(input_ckg.value)) * document.getElementById('crystal-kingdoms').innerHTML;
    document.getElementById('total_ckg').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_ckg.remove('enter_token_ckg');
    setTotal();
};

input_scs.oninput = () => {
    let output = (parseFloat(input_scs.value)) * document.getElementById('shining-crystal-shard').innerHTML;
    document.getElementById('total_scs').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_scs.remove('enter_token_scs');
    setTotal();
};

input_axs.oninput = () => {
    let output = (parseFloat(input_axs.value)) * document.getElementById('axie-infinity').innerHTML;
    document.getElementById('total_axs').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_axs.remove('enter_token_axs');
    setTotal();
};

input_slp.oninput = () => {
    let output = (parseFloat(input_slp.value)) * document.getElementById('smooth-love-potion').innerHTML;
    document.getElementById('total_slp').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_slp.remove('enter_token_slp');
    setTotal();
};

input_ron.oninput = () => {
    let output = (parseFloat(input_ron.value)) * document.getElementById('ronin').innerHTML;
    document.getElementById('total_ron').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_ron.remove('enter_token_ron');
    setTotal();
};
input_skill.oninput = () => {
    let output = (parseFloat(input_skill.value)) * document.getElementById('cryptoblades').innerHTML;
    document.getElementById('total_skill').innerHTML = parseFloat(output.toFixed(2));
    empty_balance.remove('enter_token');
    empty_balance_skill.remove('enter_token_skill');
    setTotal();
};

function setTotal() {
    let total = document.querySelectorAll('.usd');
    let sum = 0;
    if (total.length > 1) {
        total.forEach(function (value, index) {
            if (!value.closest('.coin').classList.contains('d-none')) {
                //console.log(value.innerHTML);
                sum += parseFloat(value.innerHTML);
            }
        });
    } else {
        sum = total;
    }
    //console.log(sum);
    document.getElementById('balance').innerHTML = sum.toFixed(2);
}
