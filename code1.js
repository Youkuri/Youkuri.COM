gdjs.TestRoomCode = {};
gdjs.TestRoomCode.forEachCount0_2 = 0;

gdjs.TestRoomCode.forEachCount1_2 = 0;

gdjs.TestRoomCode.forEachIndex2 = 0;

gdjs.TestRoomCode.forEachObjects2 = [];

gdjs.TestRoomCode.forEachTemporary2 = null;

gdjs.TestRoomCode.forEachTotalCount2 = 0;

gdjs.TestRoomCode.GDLunarArcObjects1= [];
gdjs.TestRoomCode.GDLunarArcObjects2= [];
gdjs.TestRoomCode.GDLunarArcObjects3= [];
gdjs.TestRoomCode.GDLunarArcObjects4= [];
gdjs.TestRoomCode.GDPlayerObjects1= [];
gdjs.TestRoomCode.GDPlayerObjects2= [];
gdjs.TestRoomCode.GDPlayerObjects3= [];
gdjs.TestRoomCode.GDPlayerObjects4= [];
gdjs.TestRoomCode.GDResourcePickupObjects1= [];
gdjs.TestRoomCode.GDResourcePickupObjects2= [];
gdjs.TestRoomCode.GDResourcePickupObjects3= [];
gdjs.TestRoomCode.GDResourcePickupObjects4= [];
gdjs.TestRoomCode.GDCameraObjects1= [];
gdjs.TestRoomCode.GDCameraObjects2= [];
gdjs.TestRoomCode.GDCameraObjects3= [];
gdjs.TestRoomCode.GDCameraObjects4= [];
gdjs.TestRoomCode.GDMoxieObjects1= [];
gdjs.TestRoomCode.GDMoxieObjects2= [];
gdjs.TestRoomCode.GDMoxieObjects3= [];
gdjs.TestRoomCode.GDMoxieObjects4= [];


gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDCameraObjects1Objects = Hashtable.newFrom({"Camera": gdjs.TestRoomCode.GDCameraObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDMoxieObjects1Objects = Hashtable.newFrom({"Moxie": gdjs.TestRoomCode.GDMoxieObjects1});
gdjs.TestRoomCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.TestRoomCode.GDLunarArcObjects2, gdjs.TestRoomCode.GDLunarArcObjects3);

{for(var i = 0, len = gdjs.TestRoomCode.GDLunarArcObjects3.length ;i < len;++i) {
    gdjs.TestRoomCode.GDLunarArcObjects3[i].setZOrder((gdjs.TestRoomCode.GDLunarArcObjects3[i].getPointY("")));
}
}}

}


};gdjs.TestRoomCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LunarArc"), gdjs.TestRoomCode.GDLunarArcObjects1);

for (gdjs.TestRoomCode.forEachIndex2 = 0;gdjs.TestRoomCode.forEachIndex2 < gdjs.TestRoomCode.GDLunarArcObjects1.length;++gdjs.TestRoomCode.forEachIndex2) {
gdjs.TestRoomCode.GDLunarArcObjects2.length = 0;


gdjs.TestRoomCode.forEachTemporary2 = gdjs.TestRoomCode.GDLunarArcObjects1[gdjs.TestRoomCode.forEachIndex2];
gdjs.TestRoomCode.GDLunarArcObjects2.push(gdjs.TestRoomCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TestRoomCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestRoomCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.TestRoomCode.GDMoxieObjects2, gdjs.TestRoomCode.GDMoxieObjects3);

gdjs.copyArray(gdjs.TestRoomCode.GDResourcePickupObjects2, gdjs.TestRoomCode.GDResourcePickupObjects3);

{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects3.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects3[i].setZOrder((gdjs.TestRoomCode.GDResourcePickupObjects3[i].getPointY("")));
}
for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects3.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects3[i].setZOrder((gdjs.TestRoomCode.GDMoxieObjects3[i].getPointY("")));
}
}}

}


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestRoomCode.GDPlayerObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects = Hashtable.newFrom({"LunarArc": gdjs.TestRoomCode.GDLunarArcObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects = Hashtable.newFrom({"LunarArc": gdjs.TestRoomCode.GDLunarArcObjects1});
gdjs.TestRoomCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
gdjs.TestRoomCode.GDCameraObjects1.length = 0;

gdjs.TestRoomCode.GDMoxieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDCameraObjects1Objects, (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDMoxieObjects1Objects, (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.TestRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDPlayerObjects1[i].hide();
}
}
{ //Subevents
gdjs.TestRoomCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResourcePickup"), gdjs.TestRoomCode.GDResourcePickupObjects1);

gdjs.TestRoomCode.forEachTotalCount2 = 0;
gdjs.TestRoomCode.forEachObjects2.length = 0;
gdjs.TestRoomCode.forEachCount0_2 = gdjs.TestRoomCode.GDResourcePickupObjects1.length;
gdjs.TestRoomCode.forEachTotalCount2 += gdjs.TestRoomCode.forEachCount0_2;
gdjs.TestRoomCode.forEachObjects2.push.apply(gdjs.TestRoomCode.forEachObjects2,gdjs.TestRoomCode.GDResourcePickupObjects1);
gdjs.TestRoomCode.forEachCount1_2 = gdjs.TestRoomCode.GDMoxieObjects1.length;
gdjs.TestRoomCode.forEachTotalCount2 += gdjs.TestRoomCode.forEachCount1_2;
gdjs.TestRoomCode.forEachObjects2.push.apply(gdjs.TestRoomCode.forEachObjects2,gdjs.TestRoomCode.GDMoxieObjects1);
for (gdjs.TestRoomCode.forEachIndex2 = 0;gdjs.TestRoomCode.forEachIndex2 < gdjs.TestRoomCode.forEachTotalCount2;++gdjs.TestRoomCode.forEachIndex2) {
gdjs.TestRoomCode.GDMoxieObjects2.length = 0;

gdjs.TestRoomCode.GDResourcePickupObjects2.length = 0;


if (gdjs.TestRoomCode.forEachIndex2 < gdjs.TestRoomCode.forEachCount0_2) {
    gdjs.TestRoomCode.GDResourcePickupObjects2.push(gdjs.TestRoomCode.forEachObjects2[gdjs.TestRoomCode.forEachIndex2]);
}
else if (gdjs.TestRoomCode.forEachIndex2 < gdjs.TestRoomCode.forEachCount0_2+gdjs.TestRoomCode.forEachCount1_2) {
    gdjs.TestRoomCode.GDMoxieObjects2.push(gdjs.TestRoomCode.forEachObjects2[gdjs.TestRoomCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TestRoomCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LunarArc"), gdjs.TestRoomCode.GDLunarArcObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects, gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDLunarArcObjects1 */
/* Reuse gdjs.TestRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestRoomCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDCameraObjects1[i].getBehavior("Tween").addObjectPositionTween2("Position", (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene()), "linear", 0.1, false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TestRoomCode.GDCameraObjects1.length !== 0 ? gdjs.TestRoomCode.GDCameraObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].setPosition((( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getPointX("")),(( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResourcePickup"), gdjs.TestRoomCode.GDResourcePickupObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].setPosition((( gdjs.TestRoomCode.GDMoxieObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDMoxieObjects1[0].getPointX("PickupPoint")),(( gdjs.TestRoomCode.GDMoxieObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDMoxieObjects1[0].getPointY("PickupPoint")));
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].setZOrder((( gdjs.TestRoomCode.GDMoxieObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDMoxieObjects1[0].getPointY("")) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects1[k] = gdjs.TestRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8747796);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Tween").addVariableTween3("Facing", gdjs.TestRoomCode.GDMoxieObjects1[i].getVariables().getFromIndex(0), -(1), "easeOutQuad", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").getXVelocity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects1[k] = gdjs.TestRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8748204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Tween").addVariableTween3("Facing", gdjs.TestRoomCode.GDMoxieObjects1[i].getVariables().getFromIndex(0), 1, "easeOutQuad", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDMoxieObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDMoxieObjects1[i].getVariableNumber(gdjs.TestRoomCode.GDMoxieObjects1[i].getVariables().getFromIndex(0)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDMoxieObjects1[k] = gdjs.TestRoomCode.GDMoxieObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDMoxieObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDMoxieObjects1 */
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDMoxieObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDMoxieObjects1[i].getVariableNumber(gdjs.TestRoomCode.GDMoxieObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDMoxieObjects1[k] = gdjs.TestRoomCode.GDMoxieObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDMoxieObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDMoxieObjects1 */
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Scale").setScaleX(Math.abs(gdjs.TestRoomCode.GDMoxieObjects1[i].getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ResourcePickup"), gdjs.TestRoomCode.GDResourcePickupObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].getBehavior("Effect").setEffectStringParameter("Color1", "newColor", gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(0).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(1).getAsString()).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(2).getAsString()).getChild("Color1").getAsString());
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].getBehavior("Effect").setEffectStringParameter("Color2", "newColor", gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(0).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(1).getAsString()).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(2).getAsString()).getChild("Color2").getAsString());
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].getBehavior("Effect").setEffectStringParameter("Color3", "newColor", gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(0).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(1).getAsString()).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(2).getAsString()).getChild("Color3").getAsString());
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDResourcePickupObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDResourcePickupObjects1[i].getBehavior("Effect").setEffectStringParameter("Color4", "newColor", gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(0).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(1).getAsString()).getChild(gdjs.TestRoomCode.GDResourcePickupObjects1[i].getVariables().getFromIndex(2).getAsString()).getChild("Color4").getAsString());
}
}}

}


};

gdjs.TestRoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestRoomCode.GDLunarArcObjects1.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects2.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects3.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects4.length = 0;
gdjs.TestRoomCode.GDPlayerObjects1.length = 0;
gdjs.TestRoomCode.GDPlayerObjects2.length = 0;
gdjs.TestRoomCode.GDPlayerObjects3.length = 0;
gdjs.TestRoomCode.GDPlayerObjects4.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects1.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects2.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects3.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects4.length = 0;
gdjs.TestRoomCode.GDCameraObjects1.length = 0;
gdjs.TestRoomCode.GDCameraObjects2.length = 0;
gdjs.TestRoomCode.GDCameraObjects3.length = 0;
gdjs.TestRoomCode.GDCameraObjects4.length = 0;
gdjs.TestRoomCode.GDMoxieObjects1.length = 0;
gdjs.TestRoomCode.GDMoxieObjects2.length = 0;
gdjs.TestRoomCode.GDMoxieObjects3.length = 0;
gdjs.TestRoomCode.GDMoxieObjects4.length = 0;

gdjs.TestRoomCode.eventsList3(runtimeScene);

return;

}

gdjs['TestRoomCode'] = gdjs.TestRoomCode;
