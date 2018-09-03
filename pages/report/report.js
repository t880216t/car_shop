// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowFrom1: false,
    isShowFrom2: false,
    isShowFrom3: false,
    isShowFrom4: false,
    isShowFrom5: false,
    isShowFrom6: false,
    isShowFrom7: false,
    isShowFrom8: false,
    isShowFrom9: false,
    reports: {},
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   reports: reportData
    // })
    this.setData({
      carid: options.carid
    })
    getReport(this, options.carid)
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
  showForm(e) {
    var param = e.currentTarget.id;
    console.log("param:",param)
    this.setData({
      isShowFrom1: param == 1 ? (!this.data.isShowFrom1) : false,
      isShowFrom2: param == 2 ? (!this.data.isShowFrom2) : false,
      isShowFrom3: param == 3 ? (!this.data.isShowFrom3) : false,
      isShowFrom4: param == 4 ? (!this.data.isShowFrom4) : false,
      isShowFrom5: param == 5 ? (!this.data.isShowFrom5) : false,
      isShowFrom6: param == 6 ? (!this.data.isShowFrom6) : false,
      isShowFrom7: param == 7 ? (!this.data.isShowFrom7) : false,
      isShowFrom8: param == 8 ? (!this.data.isShowFrom8) : false,
      isShowFrom9: param == 9 ? (!this.data.isShowFrom9) : false
    });
  }
})

function getReport(page, carid) {
  var appInstance = getApp()
  var host = appInstance.globalData.host
  wx.showLoading({
    title: '正在加载',
  })
  wx.request({
    url: host+'/getreport',
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
        console.log("content:", res.data.content[0].title)
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