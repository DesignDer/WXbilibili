Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      text: "首页",
      id : 0
    },{
      text: "动画",
      id : 1
    },{
      text: "番剧",
      id : 2
    },{
      text: "国创",
      id : 3
    },{
      text: "音乐",
      id : 4
    },{
      text: "舞蹈",
      id : 5
    },{
      text: "科技",
      id : 6
    },{
      text: "游戏",
      id : 7
    }],
    currentIndexNav: 0,
    swiperList: [
      {
        link: '',
        imgSrc: '../../images/1.jpg'
      },      {
        link: '',
        imgSrc: '../../images/2.jpg'
      },
      {
        link: '',
        imgSrc: '../../images/3.jpg'
      }
    ],
    videoList: [{
			aid: 837535875,
			videos: 1,
			tid: 24,
			tname: "MAD·AMV",
			copyright: 1,
			pic: "http://i2.hdslb.com/bfs/archive/3f173b94376e7bf09f01eacc3ebe8b630b23fcdd.png",
			title: "【东方/MAD】越 共 诱 捕 器 2.0",
			pubdate: 1585317252,
			ctime: 1585317252,
			desc: "没有简介就是最好的简介",
			state: 0,
			attribute: 16384,
			duration: 280,
			mission_id: 13071,
			bvid: "BV13g4y1a7Vw"
		}, {
			aid: 882507950,
			videos: 1,
			tid: 47,
			tname: "短片·手书·配音",
			copyright: 1,
			pic: "http://i1.hdslb.com/bfs/archive/a3dcf393d98ecbaa9b1c5a9adfb8ece97638bc8d.jpg",
			title: "【啾啾的奇妙冒险外传】第二集 世界的破坏者",
			pubdate: 1585365702,
			ctime: 1585365702,
			desc: "看似一场强吻引发的血案，实际上背后隐藏着更深的阴谋。",
			state: 0,
			attribute: 16512,
			duration: 133,
			bvid: "BV1xK4y1C7e6"
		}, {
			aid: 98930336,
			videos: 1,
			tid: 86,
			tname: "特摄",
			copyright: 1,
			pic: "http://i0.hdslb.com/bfs/archive/4bb3d36c063f6e7cbafc01586ddd95174b85daa3.jpg",
			title: "【初代奥特曼】几千年前的神庙中竟然有初代的石像 难道他也曾是光的化身？",
			pubdate: 1585188797,
			ctime: 1585188797,
			desc: "",
			state: 0,
			attribute: 16768,
			duration: 654,
			bvid: "BV1W741127EJ"
		}, {
			aid: 98722774,
			videos: 1,
			tid: 47,
			tname: "短片·手书·配音",
			copyright: 1,
			pic: "http://i0.hdslb.com/bfs/archive/e2b760ae43badfcf6fe1ced4e1e7415e60e07a85.jpg",
			title: "【阴阳怪气手书】天才ロック",
			pubdate: 1585031485,
			ctime: 1585031485,
			desc: "大家好，这里是雅子masako\n请大家不要去原曲下面刷阴阳怪气手书\n曲：天才ロック\n本家：sm32214623\n演唱：SymaG\n           sm32456734\n 音源在b站的搬运：BV1aW41187HD",
			state: 0,
			attribute: 8405120,
			duration: 200,
			dynamic: "#某幻君# #中国boy# #老番茄##花少北##LexBurner##阴阳怪气男团#",
			cid: 168519639,
			bvid: "BV1X7411m78L"
		}, {
			aid: 1114242,
			videos: 1,
			tid: 24,
			tname: "MAD·AMV",
			copyright: 1,
			pic: "http://i2.hdslb.com/bfs/archive/c2ce18ef245da643138c7403d2474ac5e59ed803.jpg",
			title: "【快新】快新前提下的《柯南》是什么样（误解柯南系列其1）",
			pubdate: 1399692407,
			ctime: 1497415057,
			desc: "自制 2011年旧作《你不知道的那些事儿》高清重制版w 换了个通俗易懂的名字◑3◑~♪ 使用的素材大约到M14为止的各种TV啊OVA啊剧场版，极端误解向，小兰腐女化…如果有脑洞还想做后续的自己都很喜欢的作品。祝食用愉快~~ \n19/9/15修正音轨，将饱受诟病的音量进行调整，并为小剧场配上了BGM~ 谢谢大家喜欢w\n误解柯南系列其2——名侦探的危机：av1199756\n误解柯南系列其3——假如是ABO：av69093094",
			state: 0,
			attribute: 49408,
			duration: 317,
			bvid: "BV1Mx411T7ot"
		}, {
			aid: 62425840,
			videos: 1,
			tid: 27,
			tname: "综合",
			copyright: 1,
			pic: "http://i0.hdslb.com/bfs/archive/652d9cd85c97aa206cc07c492c4b4ca21dd28150.jpg",
			title: "这动画太可爱了！2019七月新番吐槽大盘点（第五弹）",
			pubdate: 1565064045,
			ctime: 1565056299,
			desc: "往期地址\n第一弹av59354487\n第二弹av58457908\n第三弹av58900314\n第四弹av59354487\n吐槽重来吧魔王大人av60964764\n吐槽平凡职业造就世界最强av61851244\n另外，闪耀暖暖真的太好玩啦！！！",
			state: 0,
			attribute: 16768,
			duration: 473,
			order_id: 10008916,
			bvid: "BV1ht411K7W8"
		}, {
			aid: 92988153,
			videos: 1,
			tid: 27,
			tname: "综合",
			copyright: 1,
			pic: "http://i2.hdslb.com/bfs/archive/a86b9ed4f4c79e284f5204b29149466ba6da9a5e.jpg",
			title: "身体虽然变小，身手依旧灵活！地球最速祢豆子！",
			pubdate: 1583132104,
			ctime: 1583132104,
			desc: "BGM:Running In The “90S”\n素材https://www.youtube.com/watch?v=VM3Q8Vra6Uc",
			state: 0,
			attribute: 16384,
			duration: 100,
			bvid: "BV1iE411E7YK"
		}, {
			aid: 87442734,
			videos: 1,
			tid: 24,
			tname: "MAD·AMV",
			copyright: 1,
			pic: "http://i0.hdslb.com/bfs/archive/9c6c2580b94304eb5d0b11603774b0a11be2b27c.jpg",
			title: "这首《无名之辈》送给正处低谷时期的你",
			pubdate: 1581133822,
			ctime: 1581110571,
			desc: "这段时间大家都呆在家里多少会有些不安，有担心家人朋友的，有担心工作的，有担心学习的，不管现在有多困难也不要气馁，咬咬牙，相信希望很快就会到来！希望这个视频能给你带来些许激励，加油！\nBGM：无名之辈",
			state: 0,
			attribute: 16512,
			duration: 193,
			mission_id: 12711,
			bvid: "BV1H741187BT"
		}, {
			aid: 99744185,
			videos: 1,
			tid: 27,
			tname: "综合",
			copyright: 1,
			pic: "http://i1.hdslb.com/bfs/archive/bf6275718979d15eb05f46d203b7c88ae93559a9.jpg",
			title: "疫情不决总集篇？你可能误解了总集篇！【壁家讲坛】",
			pubdate: 1585300454,
			ctime: 1585300454,
			desc: "疫情期间，越来越多的总集篇出现，然而，却并非所有总集篇都是万策休矣！总集篇历史可谓源远流长，各式各样的总集篇有很多你完全没想到的原因！这一次，就让我们来盘点一下各类总集篇出现的原因！！\n\n【壁家讲坛】疫情感染日本动画？都是外包惹的祸？：BV1DE411u7gc\n\n文案：塔塔君、 jack2002s、针妙丸、Frozen啊德\n视频制作：47\n封面制作：命运",
			state: 0,
			attribute: 20608,
			duration: 569,
			bvid: "BV1N741197oM"
		}, {
			aid: 5764804,
			videos: 1,
			tid: 47,
			tname: "短片·手书·配音",
			copyright: 1,
			pic: "http://i1.hdslb.com/bfs/archive/58f6c39e07fa28cc48be908abe4a5a065eeb64d4.jpg",
			title: "【手书】梦之咲高中生的日常",
			pubdate: 1470907834,
			ctime: 1497426777,
			desc: "自制，总之拖了很久，以及感谢晓柒的帮助！\n有人物崩坏注意，原梗来自《男子高中生的日常》",
			state: 0,
			attribute: 49152,
			duration: 92,
			bvid: "BV1Ts411y7ha"
		}]
  },
  activeNav(e) {
    this.setData({ currentIndexNav : e.target.dataset.index})
  },
  getVideoList() {
    wx.request({
      url: 'https://api.bilibili.com/x/web-interface/dynamic/region?&jsonp=jsonp&ps=10&rid=1',
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getVideoList()
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
    
  }
})