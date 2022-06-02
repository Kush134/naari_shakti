// InfoHelper.js
// Prints info message to the Logger
var audio = script.getSceneObject().getComponent("Component.AudioComponent");
if (audio && audio.audioTrack && audio.audioTrack.control.isOfType("Provider.StudioLicensedSoundProvider")) {
    print("Info, Please note that [" + audio.audioTrack.name + "] sound might not play because it's not available in your country. Find more licensed sounds and information about them in the Asset Library");
}
