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

setEffectVolumeCode = "BattleSound.setEffectVolume(document.getElementById('volume-slider').value); ";
setBgmVolumeCode = "BattleSound.setBgmVolume(document.getElementById('volume-slider').value); ";
setMuteUnMuteCode = "BattleSound.setMute(true); BattleSound.setMute(false);";
setLocalStorageCode = "localStorage.setItem('replayVolume', document.getElementById('volume-slider').value)";
volume.setAttribute("onchange", setEffectVolumeCode + setBgmVolumeCode + setMuteUnMuteCode + setLocalStorageCode);


document.getElementsByClassName("replay-controls")[0].appendChild(volume);
