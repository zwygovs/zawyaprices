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

var copybtnBcoin = document.getElementById("copy-btn-bcoin");
var copybtnspg = document.getElementById("copy-btn-spg");
var copybtnmgod = document.getElementById("copy-btn-mgod");
var copybtnlus = document.getElementById("copy-btn-lus");
var copybtnninti = document.getElementById("copy-btn-ninti");
var copybtnavax = document.getElementById("copy-btn-avax");
var copybtnmana = document.getElementById("copy-btn-mana");
var copybtnsand = document.getElementById("copy-btn-sand");
var copybtnbnb = document.getElementById("copy-btn-bnb");
var copybtndgzv = document.getElementById("copy-btn-dgzv");
var copybtnckg = document.getElementById("copy-btn-ckg");
var copybtnscs = document.getElementById("copy-btn-scs");
var copybtnaxs = document.getElementById("copy-btn-axs");
var copybtnslp = document.getElementById("copy-btn-slp");
var copybtnron = document.getElementById("copy-btn-ron");
var copybtnskill = document.getElementById("copy-btn-skill");
var link_complete_Bcoin = document.getElementById("address_complete-bcoin");
var link_complete_spg = document.getElementById("address_complete-spg");
var link_complete_mgod = document.getElementById("address_complete-mgod");
var link_complete_lus = document.getElementById("address_complete-lus");
var link_complete_ninti = document.getElementById("address_complete-ninti");
var link_complete_avax = document.getElementById("address_complete-avax");
var link_complete_mana = document.getElementById("address_complete-mana");
var link_complete_sand = document.getElementById("address_complete-sand");
var link_complete_bnb = document.getElementById("address_complete-bnb");
var link_complete_dgzv = document.getElementById("address_complete-dgzv");
var link_complete_ckg = document.getElementById("address_complete-ckg");
var link_complete_scs = document.getElementById("address_complete-scs");
var link_complete_axs = document.getElementById("address_complete-axs");
var link_complete_slp = document.getElementById("address_complete-slp");
var link_complete_ron = document.getElementById("address_complete-ron");
var link_complete_skill = document.getElementById("address_complete-mgod");
var copyfieldBcoin = document.querySelector('.copyfield-bcoin');
var copyfieldspg = document.querySelector('.copyfield-spg');
var copyfieldmgod = document.querySelector('.copyfield-mgod');
var copyfieldlus = document.querySelector('.copyfield-lus');
var copyfieldninti = document.querySelector('.copyfield-ninti');
var copyfieldavax = document.querySelector('.copyfield-avax');
var copyfieldmana = document.querySelector('.copyfield-mana');
var copyfieldsand = document.querySelector('.copyfield-sand');
var copyfieldbnb = document.querySelector('.copyfield-bnb');
var copyfielddgzv = document.querySelector('.copyfield-mgod');
var copyfieldckg = document.querySelector('.copyfield-ckg');
var copyfieldscs = document.querySelector('.copyfield-scs');
var copyfieldaxs = document.querySelector('.copyfield-axs');
var copyfieldslp = document.querySelector('.copyfield-slp');
var copyfieldron = document.querySelector('.copyfield-ron');
var copyfieldskill = document.querySelector('.copyfield-skill');

copybtnBcoin.onclick = function () {
    navigator.clipboard.writeText(link_complete_Bcoin.innerHTML);
    copybtnBcoin.innerHTML = "Copied"
    copyfieldBcoin.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnBcoin.innerHTML = "Copy Address"
        copyfieldBcoin.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnspg.onclick = function () {
    navigator.clipboard.writeText(link_complete_spg.innerHTML);
    copybtnspg.innerHTML = "Copied"
    copyfieldspg.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnspg.innerHTML = "Copy Address"
        copyfieldspg.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnmgod.onclick = function () {
    navigator.clipboard.writeText(link_complete_mgod.innerHTML);
    copybtnmgod.innerHTML = "Copied"
    copyfieldmgod.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnmgod.innerHTML = "Copy Address"
        copyfieldmgod.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnlus.onclick = function () {
    navigator.clipboard.writeText(link_complete_lus.innerHTML);
    copybtnlus.innerHTML = "Copied"
    copyfieldlus.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnlus.innerHTML = "Copy Address"
        copyfieldlus.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnninti.onclick = function () {
    navigator.clipboard.writeText(link_complete_ninti.innerHTML);
    copybtnninti.innerHTML = "Copied"
    copyfieldninti.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnninti.innerHTML = "Copy Address"
        copyfieldninti.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnavax.onclick = function () {
    navigator.clipboard.writeText(link_complete_avax.innerHTML);
    copybtnavax.innerHTML = "Copied"
    copyfieldavax.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnavax.innerHTML = "Copy Address"
        copyfieldavax.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnmana.onclick = function () {
    navigator.clipboard.writeText(link_complete_mana.innerHTML);
    copybtnmana.innerHTML = "Copied"
    copyfieldmana.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnmana.innerHTML = "Copy Address"
        copyfieldmana.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnsand.onclick = function () {
    navigator.clipboard.writeText(link_complete_sand.innerHTML);
    copybtnsand.innerHTML = "Copied"
    copyfieldsand.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnsand.innerHTML = "Copy Address"
        copyfieldsand.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnbnb.onclick = function () {
    navigator.clipboard.writeText(link_complete_bnb.innerHTML);
    copybtnbnb.innerHTML = "Copied"
    copyfieldbnb.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnbnb.innerHTML = "Copy Address"
        copyfieldbnb.style.backgroundColor = "#212121";
    }, 2000)
};
copybtndgzv.onclick = function () {
    navigator.clipboard.writeText(link_complete_dgzv.innerHTML);
    copybtndgzv.innerHTML = "Copied"
    copyfielddgzv.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtndgzv.innerHTML = "Copy Address"
        copyfielddgzv.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnckg.onclick = function () {
    navigator.clipboard.writeText(link_complete_ckg.innerHTML);
    copybtnckg.innerHTML = "Copied"
    copyfieldckg.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnckg.innerHTML = "Copy Address"
        copyfieldckg.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnscs.onclick = function () {
    navigator.clipboard.writeText(link_complete_scs.innerHTML);
    copybtnscs.innerHTML = "Copied"
    copyfieldscs.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnscs.innerHTML = "Copy Address"
        copyfieldscs.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnaxs.onclick = function () {
    navigator.clipboard.writeText(link_complete_axs.innerHTML);
    copybtnaxs.innerHTML = "Copied"
    copyfieldaxs.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnaxs.innerHTML = "Copy Address"
        copyfieldaxs.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnslp.onclick = function () {
    navigator.clipboard.writeText(link_complete_slp.innerHTML);
    copybtnslp.innerHTML = "Copied"
    copyfieldslp.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnslp.innerHTML = "Copy Address"
        copyfieldslp.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnron.onclick = function () {
    navigator.clipboard.writeText(link_complete_ron.innerHTML);
    copybtnron.innerHTML = "Copied"
    copyfieldron.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnron.innerHTML = "Copy Address"
        copyfieldron.style.backgroundColor = "#212121";
    }, 2000)
};
copybtnskill.onclick = function () {
    navigator.clipboard.writeText(link_complete_skill.innerHTML);
    copybtnskill.innerHTML = "Copied"
    copyfieldskill.style.backgroundColor = "#9FC61C"; 
    setTimeout(function (){
        copybtnskill.innerHTML = "Copy Address"
        copyfieldskill.style.backgroundColor = "#212121";
    }, 2000)
};