// pages/submit/submit.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carTypeList: ['请选择', '三厢轿车', '两厢轿车', 'SUV', 'MPV', '跑车', '面包车', '皮卡', '货车'],
    carTypeIndex: 0,
    carTime: '请选择时间',
    dangList: ['请选择', '手动档', '自动档'],
    dangIndex: 0,
    isChecked: false,
    reports: { content: [{ reportTitle: '排除重大事故', reportTarget: '全部正常', detailContent: [{ "title": "右前减震器座", "status": true }, { "title": "左前减震器座", "status": true }, { "title": "防火墙", "status": true }, { "title": "车体左右对称性", "status": true }, { "title": "右底大边", "status": true }, { "title": "左底大边", "status": true }, { "title": "右C柱", "status": true }, { "title": "左C柱", "status": true }, { "title": "右B柱", "status": true }, { "title": "左B柱", "status": true }, { "title": "右A柱", "status": true }, { "title": "左A柱", "status": true }, { "title": "元宝梁", "status": true }, { "title": "左后纵梁", "status": true }, { "title": "右后纵梁", "status": true }, { "title": "后防撞钢梁", "status": true }, { "title": "前防撞钢梁-可拆卸式", "status": true }, { "title": "后吸能盒", "status": true }, { "title": "前吸能盒", "status": true }, { "title": "左前纵梁", "status": true }, { "title": "右前纵梁", "status": true }, { "title": "检测故障码", "status": true }, { "title": "车顶", "status": true }] }, { reportTitle: '排除火烧车', reportTarget: '全部正常', id: 2, detailContent: [{ "title": "防火墙无火烧或熏黑痕迹", "status": true }, { "title": "发动机线束无火烧或熏黑痕迹", "status": true }, { "title": "车辆覆盖件无火烧或熏黑痕迹", "status": true }, { "title": "舱内保险丝盒无火烧或熏黑痕迹", "status": true }] }, { reportTitle: '排除水泡车', reportTarget: '全部正常', id: 3, detailContent: [{ "title": "仪表台座内电线和接头无异味或泥沙", "status": true }, { "title": "座椅底部金属件无锈蚀", "status": true }, { "title": "座椅弹簧和内套绒布无异味或泥沙", "status": true }, { "title": "安全带根部无泥沙", "status": true }, { "title": "水箱及水箱前板无异味或泥沙", "status": true }, { "title": "散热片及引擎旁零件无异味或泥沙", "status": true }, { "title": "发动机缸盖无发霉点", "status": true }] }, { reportTitle: '电子控制系统', reportTarget: '全部正常', id: 4, detailContent: [{ "title": "安全带报警功能", "status": true }, { "title": "空调出风系统", "status": true }, { "title": "空调制热系统", "status": true }, { "title": "空调制冷系统", "status": true }, { "title": "空调内外循环系统", "status": true }, { "title": "多媒体", "status": true },] }, { reportTitle: '常用功能开关', reportTarget: '全部正常', id: 5, detailContent: [{ "title": "后备箱液压支撑杆", "status": true }, { "title": "儿童锁", "status": true }, { "title": "车内中控锁", "status": true }, { "title": "遮阳帘闭合", "status": true }, { "title": "敞篷闭合", "status": true }, { "title": "油箱盖", "status": true }, { "title": "玻璃升降", "status": true }, { "title": "前雨刮器", "status": true }, { "title": "后雨刮器", "status": true }, { "title": "点烟器", "status": true }, { "title": "方向盘调节", "status": true }, { "title": "方向盘按键", "status": true }, { "title": "车内喇叭", "status": true }] }, { reportTitle: '灯光系统', reportTarget: '全部正常', id: 6, detailContent: [{ "title": "室内灯调节功能", "status": true }, { "title": "右前大灯", "status": true }, { "title": "前雾灯/转向灯", "status": true }, { "title": "左前大灯", "status": true }, { "title": "后尾灯", "status": true }] }, { reportTitle: '玻璃、后视镜', reportTarget: '全部正常', id: 7, detailContent: [{ "title": "外后视镜", "status": true }, { "title": "左后视镜", "status": true }, { "title": "右后视镜", "status": true }, { "title": "车内后视镜", "status": true }, { "title": "天窗", "status": true }, { "title": "右后车门玻璃", "status": true }, { "title": "右前车门玻璃", "status": true }, { "title": "左后车门玻璃", "status": true }, { "title": "左前车门玻璃", "status": true }, { "title": "前挡风玻璃", "status": true }, { "title": "后挡风玻璃", "status": true }] }, { reportTitle: '随车附件', reportTarget: '全部正常', id: 8, detailContent: [{ "title": "遥控钥匙", "status": true }, { "title": "千斤顶", "status": true }, { "title": "随车工具", "status": true }, { "title": "三角警示牌", "status": true }, { "title": "灭火器", "status": true }, { "title": "备胎", "status": true },] }] },
    isShowFrom1: false,
    isShowFrom2: false,
    isShowFrom3: false,
    isShowFrom4: false,
    isShowFrom5: false,
    isShowFrom6: false,
    isShowFrom7: false,
    isShowFrom8: false,
    isShowFrom9: false,
    carinfo: {
      "title": "",
      "price": "",
      "oldPrice": "",
      "gongLi": "",
      "city": "",
      "pailiang": "",
      "carOut": "",
      "carTime": "请选择时间",
      "dang": "",
      "cartype": "",
      "desc": "",
      "firstPay": "",
      "payTime": "",
      "mPay": "",
      "isPay": false,
    },
    param: 0,
    src: "../../images/photo.png",
    images: [],
    imageIds: [],
    host: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInstance = getApp()
    var host = appInstance.globalData.host
    this.setData({
      host: host,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changecarType(e) {
    this.setData({ carTypeIndex: e.detail.value }, () => {
      this.data.carinfo.cartype = this.data.carTypeList[e.detail.value]
    });
  },
  changeDang(e) {
    this.setData({ dangIndex: e.detail.value }, () => {
      this.data.carinfo.dang = this.data.dangList[e.detail.value]
    });
  },
  changeFenqi() {
    this.data.carinfo.isPay = !this.data.carinfo.isPay
    this.setData({
      isChecked: !this.data.isChecked
    })
  },
  carTimeChange(e) {
    this.data.carinfo.carTime = e.detail.value
    this.setData({
      carTime: e.detail.value
    })
  },
  showForm(e) {
    var param = e.currentTarget.id;
    this.setData({
      isShowFrom1: param == 1 ? (!this.data.isShowFrom1) : false,
      isShowFrom2: param == 2 ? (!this.data.isShowFrom2) : false,
      isShowFrom3: param == 3 ? (!this.data.isShowFrom3) : false,
      isShowFrom4: param == 4 ? (!this.data.isShowFrom4) : false,
      isShowFrom5: param == 5 ? (!this.data.isShowFrom5) : false,
      isShowFrom6: param == 6 ? (!this.data.isShowFrom6) : false,
      isShowFrom7: param == 7 ? (!this.data.isShowFrom7) : false,
      isShowFrom8: param == 8 ? (!this.data.isShowFrom8) : false,
      isShowFrom9: param == 9 ? (!this.data.isShowFrom9) : false,
      param: param,
    });
  },

  changeSwitch(e) {
    console.log("id:", e.currentTarget.id)
    var id = e.currentTarget.id
    var index = this.data.param - 1
    var initReport = this.data.reports
    initReport.content[index].detailContent[id].status = !this.data.reports.content[index].detailContent[id].status
    var arr = initReport.content[index].detailContent
    var target = this.isFalse(arr)
    initReport.content[index].reportTarget = target
    this.setData({
      reports: initReport
    })
  },
  isFalse(arr) {
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i].status === false) {
        var target = "";
        return target
      }
    }
    var target = "全部正常"
    return target
  },
  uploadPhoto() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        upload(that, tempFilePaths);
      }
    })
  },
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.images;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  inputChange(e) {
    var id = e.currentTarget.id;
    if (id === "titleInput") {
      this.data.carinfo.title = e.detail.value;
    }
    if (id === "priceInput") {
      this.data.carinfo.price = e.detail.value;
    }
    if (id === "oldPriceInput") {
      this.data.carinfo.oldPrice = e.detail.value;
    }
    if (id === "gongLiInput") {
      this.data.carinfo.gongLi = e.detail.value;
    }
    if (id === "cityInput") {
      this.data.carinfo.city = e.detail.value;
    }
    if (id === "pailiangInput") {
      this.data.carinfo.pailiang = e.detail.value;
    }
    if (id === "carOutInput") {
      this.data.carinfo.carOut = e.detail.value;
    }
    if (id === "descInput") {
      this.data.carinfo.desc = e.detail.value;
    }
    if (id === "firstPayInput") {
      this.data.carinfo.firstPay = e.detail.value;
    }
    if (id === "payTimeInput") {
      this.data.carinfo.payTime = e.detail.value;
    }
    if (id === "mPayInput") {
      this.data.carinfo.mPay = e.detail.value;
    }
  },
  handleSubmit() {
    var appInstance = getApp()
    var host = appInstance.globalData.host
    wx.showLoading({
      title: '正在提交',
    })
    wx.request({
      url: host + '/addcar',
      method: "POST",
      data: {
        carinfo: this.data.carinfo,
        imageIds: this.data.imageIds,
        reports: this.data.reports,
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        wx.hideLoading()
        var code = res.data.code
        if (code === 0) {
          wx: wx.navigateBack({
            delta: 1,
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
      },
      fail: function (e) {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '网络异常，请稍后重试',
          showCancel: false
        })
      },
    })
  }

})

function upload(page, path) {
  var appInstance = getApp()
  var host = appInstance.globalData.host
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    wx.uploadFile({
    url: host + "/uploadimage",
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var response = JSON.parse(res.data)
        var imageIds = page.data.imageIds
        var newImages = page.data.images
        newImages.push(path[0])
        imageIds.push(response.imageId)
        page.setData({  //上传成功修改显示头像
          src: path[0],
          images: newImages,
          imageIds: imageIds,
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}