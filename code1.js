gdjs.TestRoomCode = {};
gdjs.TestRoomCode.forEachCount0_2 = 0;

gdjs.TestRoomCode.forEachCount1_2 = 0;

gdjs.TestRoomCode.forEachIndex2 = 0;

gdjs.TestRoomCode.forEachObjects2 = [];

gdjs.TestRoomCode.forEachTemporary2 = null;

gdjs.TestRoomCode.forEachTotalCount2 = 0;

gdjs.TestRoomCode.GDChunkManagerObjects1= [];
gdjs.TestRoomCode.GDChunkManagerObjects2= [];
gdjs.TestRoomCode.GDChunkManagerObjects3= [];
gdjs.TestRoomCode.GDChunkManagerObjects4= [];
gdjs.TestRoomCode.GDChunkManagerObjects5= [];
gdjs.TestRoomCode.GDChunkManagerObjects6= [];
gdjs.TestRoomCode.GDChunkManagerObjects7= [];
gdjs.TestRoomCode.GDChunkManagerObjects8= [];
gdjs.TestRoomCode.GDLunarArcObjects1= [];
gdjs.TestRoomCode.GDLunarArcObjects2= [];
gdjs.TestRoomCode.GDLunarArcObjects3= [];
gdjs.TestRoomCode.GDLunarArcObjects4= [];
gdjs.TestRoomCode.GDLunarArcObjects5= [];
gdjs.TestRoomCode.GDLunarArcObjects6= [];
gdjs.TestRoomCode.GDLunarArcObjects7= [];
gdjs.TestRoomCode.GDLunarArcObjects8= [];
gdjs.TestRoomCode.GDPlayerObjects1= [];
gdjs.TestRoomCode.GDPlayerObjects2= [];
gdjs.TestRoomCode.GDPlayerObjects3= [];
gdjs.TestRoomCode.GDPlayerObjects4= [];
gdjs.TestRoomCode.GDPlayerObjects5= [];
gdjs.TestRoomCode.GDPlayerObjects6= [];
gdjs.TestRoomCode.GDPlayerObjects7= [];
gdjs.TestRoomCode.GDPlayerObjects8= [];
gdjs.TestRoomCode.GDResourcePickupObjects1= [];
gdjs.TestRoomCode.GDResourcePickupObjects2= [];
gdjs.TestRoomCode.GDResourcePickupObjects3= [];
gdjs.TestRoomCode.GDResourcePickupObjects4= [];
gdjs.TestRoomCode.GDResourcePickupObjects5= [];
gdjs.TestRoomCode.GDResourcePickupObjects6= [];
gdjs.TestRoomCode.GDResourcePickupObjects7= [];
gdjs.TestRoomCode.GDResourcePickupObjects8= [];
gdjs.TestRoomCode.GDCameraObjects1= [];
gdjs.TestRoomCode.GDCameraObjects2= [];
gdjs.TestRoomCode.GDCameraObjects3= [];
gdjs.TestRoomCode.GDCameraObjects4= [];
gdjs.TestRoomCode.GDCameraObjects5= [];
gdjs.TestRoomCode.GDCameraObjects6= [];
gdjs.TestRoomCode.GDCameraObjects7= [];
gdjs.TestRoomCode.GDCameraObjects8= [];
gdjs.TestRoomCode.GDMoxieObjects1= [];
gdjs.TestRoomCode.GDMoxieObjects2= [];
gdjs.TestRoomCode.GDMoxieObjects3= [];
gdjs.TestRoomCode.GDMoxieObjects4= [];
gdjs.TestRoomCode.GDMoxieObjects5= [];
gdjs.TestRoomCode.GDMoxieObjects6= [];
gdjs.TestRoomCode.GDMoxieObjects7= [];
gdjs.TestRoomCode.GDMoxieObjects8= [];
gdjs.TestRoomCode.GDTileObjects1= [];
gdjs.TestRoomCode.GDTileObjects2= [];
gdjs.TestRoomCode.GDTileObjects3= [];
gdjs.TestRoomCode.GDTileObjects4= [];
gdjs.TestRoomCode.GDTileObjects5= [];
gdjs.TestRoomCode.GDTileObjects6= [];
gdjs.TestRoomCode.GDTileObjects7= [];
gdjs.TestRoomCode.GDTileObjects8= [];
gdjs.TestRoomCode.GDLunarHoleObjects1= [];
gdjs.TestRoomCode.GDLunarHoleObjects2= [];
gdjs.TestRoomCode.GDLunarHoleObjects3= [];
gdjs.TestRoomCode.GDLunarHoleObjects4= [];
gdjs.TestRoomCode.GDLunarHoleObjects5= [];
gdjs.TestRoomCode.GDLunarHoleObjects6= [];
gdjs.TestRoomCode.GDLunarHoleObjects7= [];
gdjs.TestRoomCode.GDLunarHoleObjects8= [];
gdjs.TestRoomCode.GDLunarBoonObjects1= [];
gdjs.TestRoomCode.GDLunarBoonObjects2= [];
gdjs.TestRoomCode.GDLunarBoonObjects3= [];
gdjs.TestRoomCode.GDLunarBoonObjects4= [];
gdjs.TestRoomCode.GDLunarBoonObjects5= [];
gdjs.TestRoomCode.GDLunarBoonObjects6= [];
gdjs.TestRoomCode.GDLunarBoonObjects7= [];
gdjs.TestRoomCode.GDLunarBoonObjects8= [];
gdjs.TestRoomCode.GDWaterObjects1= [];
gdjs.TestRoomCode.GDWaterObjects2= [];
gdjs.TestRoomCode.GDWaterObjects3= [];
gdjs.TestRoomCode.GDWaterObjects4= [];
gdjs.TestRoomCode.GDWaterObjects5= [];
gdjs.TestRoomCode.GDWaterObjects6= [];
gdjs.TestRoomCode.GDWaterObjects7= [];
gdjs.TestRoomCode.GDWaterObjects8= [];


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
{gdjs.evtsExt__Noise__SetOctaves.func(runtimeScene, 4, "General", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetFrequency.func(runtimeScene, 0.5, "General", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetPersistence.func(runtimeScene, 0.75, "General", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetLacunarity.func(runtimeScene, 2, "General", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.TestRoomCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Noise__SetOctaves.func(runtimeScene, 8, "World", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetFrequency.func(runtimeScene, 0.01, "World", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetPersistence.func(runtimeScene, 0.25, "World", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__SetLacunarity.func(runtimeScene, 2, "World", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects7Objects = Hashtable.newFrom({"Tile": gdjs.TestRoomCode.GDTileObjects7});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects6Objects = Hashtable.newFrom({"Tile": gdjs.TestRoomCode.GDTileObjects6});
gdjs.TestRoomCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("WorldValue").setNumber(gdjs.evtTools.common.normalize(gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "World", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), -(1), 1) * Math.min(1, Math.abs(Math.sin(gdjs.toRad(180 * (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber())))) * Math.abs(Math.sin(gdjs.toRad(180 * (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber())))) * 2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("WorldValue").getAsNumber() >= 0.35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("WorldValue").getAsNumber() < 0.4);
}
}
if (isConditionTrue_0) {
gdjs.TestRoomCode.GDTileObjects7.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects7Objects, 8 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").getAsNumber(), 8 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y").getAsNumber(), "");
}{for(var i = 0, len = gdjs.TestRoomCode.GDTileObjects7.length ;i < len;++i) {
    gdjs.TestRoomCode.GDTileObjects7[i].getBehavior("Animation").setAnimationName("Sand");
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDTileObjects7.length ;i < len;++i) {
    gdjs.TestRoomCode.GDTileObjects7[i].setZOrder(-(12));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("WorldValue").getAsNumber() >= 0.4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("WorldValue").getAsNumber() < 1);
}
}
if (isConditionTrue_0) {
gdjs.TestRoomCode.GDTileObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects6Objects, 8 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").getAsNumber(), 8 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y").getAsNumber(), "");
}{for(var i = 0, len = gdjs.TestRoomCode.GDTileObjects6.length ;i < len;++i) {
    gdjs.TestRoomCode.GDTileObjects6[i].getBehavior("Animation").setAnimationName("Grass");
}
}{for(var i = 0, len = gdjs.TestRoomCode.GDTileObjects6.length ;i < len;++i) {
    gdjs.TestRoomCode.GDTileObjects6[i].setZOrder(-(11));
}
}}

}


};gdjs.TestRoomCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X")) > runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber() + 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("X").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Y")) < runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber();
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestRoomCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.TestRoomCode.eventsList6 = function(runtimeScene) {

{


const repeatCount5 = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber();
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestRoomCode.eventsList5(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestRoomCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Noise__SetSeed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__Create.func(runtimeScene, "General", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.TestRoomCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Noise__SetSeed.func(runtimeScene, 999999999 * gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 1, 10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (2 + gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 5, 10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__Create.func(runtimeScene, "World", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.TestRoomCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Noise__SetSeed.func(runtimeScene, 999999999 * gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 2, 20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (2 + gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 5, 20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__Create.func(runtimeScene, "Resources", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Noise__SetSeed.func(runtimeScene, 999999999 * gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 3, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (2 + gdjs.evtsExt__Noise__Noise2d.func(runtimeScene, "General", 5, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Noise__Create.func(runtimeScene, "Boons", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


const repeatCount3 = runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestRoomCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.TestRoomCode.GDPlayerObjects2});
gdjs.TestRoomCode.eventsList8 = function(runtimeScene) {

{


gdjs.TestRoomCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.TestRoomCode.GDPlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects2Objects, (1 + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").getAsNumber() * 8) / 2, (1 + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").getAsNumber() * 8) / 2, "");
}}

}


{



}


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDCameraObjects1Objects = Hashtable.newFrom({"Camera": gdjs.TestRoomCode.GDCameraObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDMoxieObjects1Objects = Hashtable.newFrom({"Moxie": gdjs.TestRoomCode.GDMoxieObjects1});
gdjs.TestRoomCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
gdjs.TestRoomCode.GDCameraObjects1.length = 0;

gdjs.TestRoomCode.GDMoxieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDCameraObjects1Objects, (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDMoxieObjects1Objects, (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.TestRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDPlayerObjects1[i].hide();
}
}}

}


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestRoomCode.GDPlayerObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.TestRoomCode.GDTileObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestRoomCode.GDPlayerObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.TestRoomCode.GDTileObjects1});
gdjs.TestRoomCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects2[k] = gdjs.TestRoomCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9822492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects2);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects2.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects2[i].getBehavior("Tween").addVariableTween3("Facing", gdjs.TestRoomCode.GDMoxieObjects2[i].getVariables().getFromIndex(0), -(1), "easeOutQuad", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getXVelocity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects2[k] = gdjs.TestRoomCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9116460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects2);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects2.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects2[i].getBehavior("Tween").addVariableTween3("Facing", gdjs.TestRoomCode.GDMoxieObjects2[i].getVariables().getFromIndex(0), 1, "easeOutQuad", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDMoxieObjects2.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDMoxieObjects2[i].getVariableNumber(gdjs.TestRoomCode.GDMoxieObjects2[i].getVariables().getFromIndex(0)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDMoxieObjects2[k] = gdjs.TestRoomCode.GDMoxieObjects2[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDMoxieObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDMoxieObjects2 */
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects2.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDMoxieObjects2.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDMoxieObjects2[i].getVariableNumber(gdjs.TestRoomCode.GDMoxieObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDMoxieObjects2[k] = gdjs.TestRoomCode.GDMoxieObjects2[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDMoxieObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDMoxieObjects2 */
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects2.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects2[i].getBehavior("Flippable").flipX(false);
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


};gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestRoomCode.GDPlayerObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects = Hashtable.newFrom({"LunarArc": gdjs.TestRoomCode.GDLunarArcObjects1});
gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDLunarArcObjects1Objects = Hashtable.newFrom({"LunarArc": gdjs.TestRoomCode.GDLunarArcObjects1});
gdjs.TestRoomCode.eventsList11 = function(runtimeScene) {

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


};gdjs.TestRoomCode.eventsList12 = function(runtimeScene) {

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


};gdjs.TestRoomCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestRoomCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(-(100000000), 100000000));
}
{ //Subevents
gdjs.TestRoomCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestRoomCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.TestRoomCode.GDTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects, gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.TestRoomCode.GDPlayerObjects1[i].getVariables().get("Status").getChild("OnWater"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.TestRoomCode.GDTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDPlayerObjects1Objects, gdjs.TestRoomCode.mapOfGDgdjs_9546TestRoomCode_9546GDTileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TestRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.TestRoomCode.GDPlayerObjects1[i].getVariables().get("Status").getChild("OnWater"), false);
}
}}

}


{


gdjs.TestRoomCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.TestRoomCode.GDPlayerObjects1[i].getVariables().get("Status").getChild("OnWater"), true) ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects1[k] = gdjs.TestRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Animation").setAnimationName("OnWater");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestRoomCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.TestRoomCode.GDPlayerObjects1[i].getVariables().get("Status").getChild("OnWater"), false) ) {
        isConditionTrue_0 = true;
        gdjs.TestRoomCode.GDPlayerObjects1[k] = gdjs.TestRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].getBehavior("Animation").setAnimationName("Normal");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestRoomCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.TestRoomCode.GDWaterObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDCameraObjects1[i].setPosition(Math.round((( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterXInScene())),Math.round((( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getCenterYInScene())));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TestRoomCode.GDCameraObjects1.length !== 0 ? gdjs.TestRoomCode.GDCameraObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.TestRoomCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDWaterObjects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Moxie"), gdjs.TestRoomCode.GDMoxieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestRoomCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestRoomCode.GDMoxieObjects1.length ;i < len;++i) {
    gdjs.TestRoomCode.GDMoxieObjects1[i].setPosition(Math.round((( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getPointX(""))),Math.round((( gdjs.TestRoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestRoomCode.GDPlayerObjects1[0].getPointY(""))));
}
}}

}


{


gdjs.TestRoomCode.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
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
gdjs.TestRoomCode.eventsList12(runtimeScene);} //Subevents end.
}
}

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

gdjs.TestRoomCode.GDChunkManagerObjects1.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects2.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects3.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects4.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects5.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects6.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects7.length = 0;
gdjs.TestRoomCode.GDChunkManagerObjects8.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects1.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects2.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects3.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects4.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects5.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects6.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects7.length = 0;
gdjs.TestRoomCode.GDLunarArcObjects8.length = 0;
gdjs.TestRoomCode.GDPlayerObjects1.length = 0;
gdjs.TestRoomCode.GDPlayerObjects2.length = 0;
gdjs.TestRoomCode.GDPlayerObjects3.length = 0;
gdjs.TestRoomCode.GDPlayerObjects4.length = 0;
gdjs.TestRoomCode.GDPlayerObjects5.length = 0;
gdjs.TestRoomCode.GDPlayerObjects6.length = 0;
gdjs.TestRoomCode.GDPlayerObjects7.length = 0;
gdjs.TestRoomCode.GDPlayerObjects8.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects1.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects2.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects3.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects4.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects5.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects6.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects7.length = 0;
gdjs.TestRoomCode.GDResourcePickupObjects8.length = 0;
gdjs.TestRoomCode.GDCameraObjects1.length = 0;
gdjs.TestRoomCode.GDCameraObjects2.length = 0;
gdjs.TestRoomCode.GDCameraObjects3.length = 0;
gdjs.TestRoomCode.GDCameraObjects4.length = 0;
gdjs.TestRoomCode.GDCameraObjects5.length = 0;
gdjs.TestRoomCode.GDCameraObjects6.length = 0;
gdjs.TestRoomCode.GDCameraObjects7.length = 0;
gdjs.TestRoomCode.GDCameraObjects8.length = 0;
gdjs.TestRoomCode.GDMoxieObjects1.length = 0;
gdjs.TestRoomCode.GDMoxieObjects2.length = 0;
gdjs.TestRoomCode.GDMoxieObjects3.length = 0;
gdjs.TestRoomCode.GDMoxieObjects4.length = 0;
gdjs.TestRoomCode.GDMoxieObjects5.length = 0;
gdjs.TestRoomCode.GDMoxieObjects6.length = 0;
gdjs.TestRoomCode.GDMoxieObjects7.length = 0;
gdjs.TestRoomCode.GDMoxieObjects8.length = 0;
gdjs.TestRoomCode.GDTileObjects1.length = 0;
gdjs.TestRoomCode.GDTileObjects2.length = 0;
gdjs.TestRoomCode.GDTileObjects3.length = 0;
gdjs.TestRoomCode.GDTileObjects4.length = 0;
gdjs.TestRoomCode.GDTileObjects5.length = 0;
gdjs.TestRoomCode.GDTileObjects6.length = 0;
gdjs.TestRoomCode.GDTileObjects7.length = 0;
gdjs.TestRoomCode.GDTileObjects8.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects1.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects2.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects3.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects4.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects5.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects6.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects7.length = 0;
gdjs.TestRoomCode.GDLunarHoleObjects8.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects1.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects2.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects3.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects4.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects5.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects6.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects7.length = 0;
gdjs.TestRoomCode.GDLunarBoonObjects8.length = 0;
gdjs.TestRoomCode.GDWaterObjects1.length = 0;
gdjs.TestRoomCode.GDWaterObjects2.length = 0;
gdjs.TestRoomCode.GDWaterObjects3.length = 0;
gdjs.TestRoomCode.GDWaterObjects4.length = 0;
gdjs.TestRoomCode.GDWaterObjects5.length = 0;
gdjs.TestRoomCode.GDWaterObjects6.length = 0;
gdjs.TestRoomCode.GDWaterObjects7.length = 0;
gdjs.TestRoomCode.GDWaterObjects8.length = 0;

gdjs.TestRoomCode.eventsList13(runtimeScene);

return;

}

gdjs['TestRoomCode'] = gdjs.TestRoomCode;
