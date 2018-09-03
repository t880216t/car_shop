/**  
 * 获取当前的地理位置、速度。  
 * 1、fType：         默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标     选填  
 * 2、cbSuccessFun： 接口调用成功的回调函数，返回内容详见返回参数说明。 必填  
 * 3、cbFailFun：    接口调用失败的回调函数 选填  
 * 4、cbCompleteFun：接口调用结束的回调函数（调用成功、失败都会执行） 选填  
 */
function getLocationFun(fType, cbSuccessFun, cbFailFun, cbCompleteFun) {
  var getObj = {};
  getObj.type = "wgs84";
  if (fType) {
    getObj.type = fType;
  }
  getObj.success = function (res) {
    var _res = res;
    if (cbSuccessFun) {
      cbSuccessFun(_res);
    }
  }
  getObj.fail = function (res) {
    if (cbFailFun) {
      cbFailFun();
    } else {
      console.log("getLocation fail:" + res.errMsg);
    }
  }
  getObj.complete = function (res) {
    if (cbCompleteFun) {
      cbCompleteFun();
    }
  }
  wx.getLocation(getObj);
}

/**  
 * 使用微信内置地图查看位置  
 * 1、latitude：     纬度，范围为-90~90，负数表示南纬 必填  
 * 2、longitude：    经度，范围为-180~180，负数表示西经 必填  
 * 3、scale：        缩放比例，范围1~28，默认为28 选填  
 * 4、name：         位置名 选填  
 * 5、address：      地址的详细说明 选填  
 * 6、cbSuccessFun： 接口调用成功的回调函数 选填  
 * 7、cbFailFun：    接口调用失败的回调函数 选填  
 * 8、cbCompleteFun：接口调用结束的回调函数（调用成功、失败都会执行） 选填  
 */
function openLocationFun(latitude, longitude, scale, name, address, cbSuccessFun, cbFailFun, cbCompleteFun) {
  var openObj = {};
  openObj.latitude = latitude;
  openObj.longitude = longitude;
  openObj.scale = 15;
  if (scale > 0 && scale < 29) {
    openObj.scale = scale;
  }
  if (name) {
    openObj.name = name;
  }
  if (address) {
    openObj.address = address;
  }
  openObj.success = function (res) {
    if (cbSuccessFun) {
      cbSuccessFun();
    }
  }
  openObj.fail = function (res) {
    if (cbFailFun) {
      cbFailFun();
    } else {
      console.log("openLocation fail:" + res.errMsg);
    }
  }
  openObj.complete = function (res) {
    if (cbCompleteFun) {
      cbCompleteFun();
    }
  }
  wx.openLocation(openObj);
}

module.exports = {
  getLocationFun: getLocationFun,
  openLocationFun: openLocationFun
}  