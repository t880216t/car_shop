// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    banners: [{ "picUrl": '../../images/home/car1.jpg', "id": 1 }, { "picUrl": '../../images/home/car2.jpg', "id": 1 },],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    scrollTop: "0",
    loadingMoreHidden: true,
    carValue: '',
    carTime: '请选择上牌时间',
    carMileage: '',
    carContact: '',
    hiddenLoading: true,
    loadingText:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      //title: wx.getStorageSync('mallName')
      title: "车城"
    })
    // wx.request({
    //   url: 'https://api.it120.cc/' + "wow_sale" + '/banner/list',
    //   data: {
    //     key: 'mallName'
    //   },
    //   success: function (res) {
    //     if (res.data.code == 404) {
    //       wx.showModal({
    //         title: '提示',
    //         content: '请在后台添加 banner 轮播图片',
    //         showCancel: false
    //       })
    //     } else {
    //       that.setData({
    //         banners: res.data.data
    //       });
    //     }
    //   }
    // })
  },
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })

  },
  toSearch: function () {
    this.getGoodsList(this.data.activeCategoryId);
  },
  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/details/details?id=" + e.currentTarget.dataset.id
    })
  },
  tapBanner: function (e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "pages/details/details?id=" + e.currentTarget.dataset.id
      })
    }
  },
  bindTypeTap: function (e) {
    this.setData({
      selectCurrent: e.index
    })
  },
  scroll: function (e) {
    //  console.log(e) ;
    var that = this, scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })
    // console.log('e.detail.scrollTop:'+e.detail.scrollTop) ;
    // console.log('scrollTop:'+scrollTop)
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
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  carinput(e) {
    this.setData({
      carValue: e.detail.value
    }, () => { console.log('car input:', this.data.carValue) })
  },
  carTimeChange(e) {
    this.setData({
      carTime: e.detail.value
    }, () => { console.log('car time:', this.data.carTime) })
  },
  carMileageInput(e) {
    this.setData({
      carMileage: e.detail.value
    }, () => { console.log('carMileage:', this.data.carMileage) })
  },
  carContactInput(e) {
    this.setData({
      carContact: e.detail.value
    }, () => { console.log('carContact:', this.data.carContact) })
  },
  handleSubmit(){
    wx.showLoading({
      title: '正在提交...',
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }, 2000)
  },
  gofabu(){
    var appInstance = getApp()
    try{
      var nickName = appInstance.globalData.userInfo.nickName
      if (nickName === 'A·J') {
        wx: wx.navigateTo({
          url: '../submit/submit',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      } else {
        wx.showToast({
          title: '抱歉，发布功能只对管理员开放',
          icon: 'success',
          duration: 2000,
        })
      }
    }catch(e){
      wx.showToast({
        title: '抱歉，发布功能只对管理员开放',
        icon: 'success',
        duration: 2000,
      })
    }
    
    
  },
  goSale() {
    wx: wx.switchTab({
      url: '../sale/sales',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  salContact(e) {
    wx.makePhoneCall({
      phoneNumber: '13888888888'
    })
  },
  //获取经纬度
  getLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },
  //根据经纬度在地图上显示
  openLocation: function (e) {
    console.log("openLocation" + e)
    var value = e.detail.value
    wx.openLocation({
      latitude: 32.060255,
      longitude: 118.796877, 
    })
  },
})