!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("three")):"function"==typeof define&&define.amd?define(["three"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).THREE=e.THREE||{},e.THREE.CameraFacingGroup=t(e.THREE))}(this,(function(e){"use strict";let t=new e.Quaternion,n=class extends e.Mesh{onBeforeRender(e,n,o){this.setRotationFromQuaternion(o.getWorldQuaternion(t))}};return n.prototype.isCameraFacingGroup=!0,n}));
