// TweenToText3D.js
// Version: 0.0.1
// Event: On Awake
// Description: Get value from tween value and apply it to 3D Text

// @input Component.Text text {"label":"Text"}
// @input int mode = 1 {"widget":"combobox", "values":[{"label":"Set Font Size", "value":1}, {"label":"Set Letter Spacing", "value":2}, {"label":"Set Line Spacing", "value":3}]}
// @input SceneObject tween
// @input string tweenName

if (!script.text) {
    print("ERROR: Make sure Text is set.");
    return;
}

if (!script.tween) {
    print("ERROR: Make sure tween object is set.");
    return;
}

setTextValue(global.tweenManager.getGenericTweenValue(script.tween, script.tweenName));

function setTextValue(tweenVal) {
    switch (script.mode) {
        case 1:
            script.text.size = tweenVal;
            break;
        case 2:
            script.text.letterSpacing = tweenVal;
            break;
        case 3:
            script.text.lineSpacing = tweenVal;
            break;
    }
}