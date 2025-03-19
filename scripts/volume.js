let volume = document.createElement("input");
volume.type = "range";
volume.id = "volume-slider";

vol = localStorage.getItem("replayVolume");
if (vol)
{
    volume.setAttribute("value", vol);
}
else
{
    vol = 5;
    localStorage.setItem("replayVolume", vol);
    volume.setAttribute("value", vol);
}

setEffectVolumeCode = "BattleSound.setEffectVolume(localStorage.getItem('replayVolume')); ";
setBgmVolumeCode = "BattleSound.setBgmVolume(localStorage.getItem('replayVolume')); "
removeAttributeCode = "document.getElementById('main').removeAttribute('onmouseover')";
document.getElementById("main").setAttribute("onmouseover", setEffectVolumeCode + setBgmVolumeCode + removeAttributeCode);

let button = document.createElement("button");
button.id = "volume-setter";
button.textContent = "Set Volume";

setEffectVolumeCode = "BattleSound.setEffectVolume(document.getElementById('volume-slider').value); ";
setBgmVolumeCode = "BattleSound.setBgmVolume(document.getElementById('volume-slider').value); ";
setLocalStorageCode = "localStorage.setItem('replayVolume', document.getElementById('volume-slider').value)";
button.setAttribute("onclick", setEffectVolumeCode + setBgmVolumeCode + setLocalStorageCode);


document.getElementsByClassName("replay-controls")[0].appendChild(volume);
document.getElementsByClassName("replay-controls")[0].appendChild(button);
