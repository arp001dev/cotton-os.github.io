var scr = document.getElementById("scripts")
var iso = document.getElementById("iso")
iso.style.display = 'none'
scr.style.display = 'none'



function contrib(){
    alert("you can contribute to the script in github or sugesst a customization or tool to be preinstalled in issuses panel in github")
}
function isob(){
    scr.style.display = 'none';
    iso.style.display = 'block';
}
function scrb(){
    iso.style.display = 'none'
    scr.style.display = 'block';
}