gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDLunarArcObjects1= [];
gdjs.SplashScreenCode.GDLunarArcObjects2= [];
gdjs.SplashScreenCode.GDPlayerObjects1= [];
gdjs.SplashScreenCode.GDPlayerObjects2= [];
gdjs.SplashScreenCode.GDResourcePickupObjects1= [];
gdjs.SplashScreenCode.GDResourcePickupObjects2= [];
gdjs.SplashScreenCode.GDCameraObjects1= [];
gdjs.SplashScreenCode.GDCameraObjects2= [];
gdjs.SplashScreenCode.GDMoxieObjects1= [];
gdjs.SplashScreenCode.GDMoxieObjects2= [];


gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TestRoom", false);
}}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDLunarArcObjects1.length = 0;
gdjs.SplashScreenCode.GDLunarArcObjects2.length = 0;
gdjs.SplashScreenCode.GDPlayerObjects1.length = 0;
gdjs.SplashScreenCode.GDPlayerObjects2.length = 0;
gdjs.SplashScreenCode.GDResourcePickupObjects1.length = 0;
gdjs.SplashScreenCode.GDResourcePickupObjects2.length = 0;
gdjs.SplashScreenCode.GDCameraObjects1.length = 0;
gdjs.SplashScreenCode.GDCameraObjects2.length = 0;
gdjs.SplashScreenCode.GDMoxieObjects1.length = 0;
gdjs.SplashScreenCode.GDMoxieObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
