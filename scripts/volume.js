// baseURL = "https://replay.pokemonshowdown.com/";
url = window.location.toString();

if (url == "https://replay.pokemonshowdown.com/" || url.indexOf("=") > 0) // Change how replay links work so I can get the slider to load
{
    getLinksCode = "let links = document.getElementsByTagName('a');";
    forLoopCode = "for ( let link = 0; link < links.length; link ++) { href = links[link].href; if (!href.includes('javascript')) { newHref = 'javascript:window.location=`' + href + '`'; links[link].setAttribute('href', newHref); } }";
    document.getElementById("main").setAttribute("onmouseover", getLinksCode + forLoopCode);
}
else
{
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
    
    
    document.getElementsByClassName("replay-controls")[0].prepend(volume);
}
