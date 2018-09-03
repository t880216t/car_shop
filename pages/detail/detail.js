// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    autoplay: true,
    interval: 3000,
    duration: 1000,
    carid: '',
    isAdmin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInstance = getApp()
    var nickName = appInstance.globalData.userInfo.nickName
    if (nickName === 'A·J') {
      this.setData({
        carid: options.carid,
        isAdmin: true,
      })
    } else {
      this.setData({
        carid: options.carid
      })
    }
    getDetail(this, options.carid)
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
  dispatchBind() {
    var carid = this.data.carid
    wx: wx.navigateTo({
      url: '/pages/report/report?carid=' + carid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.detail.imageURLs;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  goFenqi() {
    var carid = this.data.carid
    wx: wx.navigateTo({
      url: '/pages/fenqi/fenqi?carid=' + carid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  handleDelete() {
    const carid = this.data.carid;
    wx.showModal({
      title: '提示',
      content: '是否确认删除？',
      success: function (res) {
        if (res.confirm) {
          deleteCar(this, carid)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handleUnable() {
    const carid = this.data.carid;
    wx.showModal({
      title: '提示',
      content: '是否确认下架？',
      success: function (res) {
        if (res.confirm) {
          unableCar(this, carid);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})

function getDetail(page, carid) {
  var appInstance = getApp()
  var host = appInstance.globalData.host
  wx.showLoading({
    title: '正在加载',
  })
  wx.request({
    url: host + '/getdetail',
    method: "POST",
    data: {
      carid: carid,
    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      var code = res.data.code
      wx.hideLoading()
      if (code === 0) {
        page.setData({
          detail: res.data.content[0]
        }
        )

      } else {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false
        })
      }
    },
    fail: function (e) {
      console.log(e);
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '网络异常，请稍后重试',
        showCancel: false
      })
    },
  })
}
function deleteCar(page, carid) {
  var appInstance = getApp()
  var host = appInstance.globalData.host
  wx.request({
    url: host + '/deleteCar',
    method: "POST",
    data: {
      carid: carid,
    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      var code = res.data.code
      if (code === 0) {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 2000
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
      console.log(e);
      wx.showModal({
        title: '提示',
        content: '网络异常，请稍后重试',
        showCancel: false
      })
    },
  })
}
function unableCar(page, carid) {
  var appInstance = getApp()
  var host = appInstance.globalData.host
  wx.request({
    url: host + '/unableCar',
    method: "POST",
    data: {
      carid: carid,
    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      var code = res.data.code
      if (code === 0) {
        wx.showToast({
          title: '下架成功',
          icon: 'success',
          duration: 2000
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
      console.log(e);
      wx.showModal({
        title: '提示',
        content: '网络异常，请稍后重试',
        showCancel: false
      })
    },
  })
}