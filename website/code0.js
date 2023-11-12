gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDCaretObjects1= [];
gdjs.SplashScreenCode.GDCaretObjects2= [];
gdjs.SplashScreenCode.GDWIPObjects1= [];
gdjs.SplashScreenCode.GDWIPObjects2= [];


gdjs.SplashScreenCode.mapOfGDgdjs_9546SplashScreenCode_9546GDCaretObjects1Objects = Hashtable.newFrom({"Caret": gdjs.SplashScreenCode.GDCaretObjects1});
gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Pier Walk.ogg", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Spawn"), 1.5) <= 0.45);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8014228);
}
}
if (isConditionTrue_0) {
gdjs.SplashScreenCode.GDCaretObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SplashScreenCode.mapOfGDgdjs_9546SplashScreenCode_9546GDCaretObjects1Objects, -(14), 160, "");
}{for(var i = 0, len = gdjs.SplashScreenCode.GDCaretObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDCaretObjects1[i].setZOrder(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Caret"), gdjs.SplashScreenCode.GDCaretObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDCaretObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDCaretObjects1[i].addForce((gdjs.SplashScreenCode.GDCaretObjects1[i].getWidth()), 0, 0);
}
}}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDCaretObjects1.length = 0;
gdjs.SplashScreenCode.GDCaretObjects2.length = 0;
gdjs.SplashScreenCode.GDWIPObjects1.length = 0;
gdjs.SplashScreenCode.GDWIPObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
