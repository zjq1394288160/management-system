(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d13b4ce"],{"31be":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{directives:[{name:"show",rawName:"v-show",value:!e.otherInfo.menuCollapse,expression:"!otherInfo.menuCollapse"}],attrs:{size:"mini","popper-class":"transparent02"},on:{change:e.selectChange},model:{value:e.otherInfo.languageOpt,callback:function(t){e.$set(e.otherInfo,"languageOpt",t)},expression:"otherInfo.languageOpt"}},e._l(e.otherInfo.languageList,function(t,n){return a("el-option",{key:n,attrs:{value:n,label:t}},[a("span",{staticClass:"normal float-l"},[e._v(e._s(t))]),a("span",{staticClass:"normal float-r"},[e._v(e._s(n))])])}),1)},o=[],r=(a("96cf"),a("3b8d")),i={name:"SelectLanguage",data:function(){return{}},components:{},props:{},computed:{otherInfo:function(){return this.$store.getters.getOtherInfo},language:function(){return this.$store.getters.getLanguage}},watch:{"otherInfo.languageOpt":{handler:function(e,t){this.$isTrue(e)&&this.getLanguageJson()},immediate:!0,deep:!0}},methods:{selectChange:function(e){this.setOtherInfo({languageOpt:e})},setOtherInfo:function(e){this.$store.dispatch("upVuex",{mutations:"setOtherInfo",value:e})},getLanguageJson:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=a("472e")("./".concat(this.otherInfo.languageOpt,".json")),this.$store.dispatch("upVuex",{mutations:"setLanguage",value:t});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},c=i,s=a("2877"),l=Object(s["a"])(c,n,o,!1,null,null,null);t["default"]=l.exports},"472e":function(e,t,a){var n={"./en.json":"76ff","./zh-CN.json":"61b6"};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="472e"},"61b6":function(e){e.exports={"":"",element:"常用组件",eleDialog:"element-dialog",elementTiptapDemo:"tiptap",tiptap:"tiptap",tinymce:"tinymce",tinymceDemo:"tinymce",baiDuMap:"百度地图",aboutRichText:"关于富文本",uEditorWrap:"百度UEditor",mute:"静音",voice:"声音",play:"播放",stop:"停止",playOrStop:"播放或者停止",playOrStopTooltip:"状态不跟播放器同步",pageReadyAutoPlay:"页面准备好会自动播放（直接刷新的时候页面还没有准备好）",clickAdd:"点击添加",notAdd:"不能再添加啦",Remaining:"是否显示剩余时间",UnifiedPoster:"是否统一海报",WidthBasedHeight:"基于宽度的高度",autoPlay:"自动播放",playBackRates:"可选择的播放速度",videoFrequency:"视频",listMaxHeight:"列表最大高度",playerMode:"播放模式",listFolded:"列表折叠",shufflePlayer:"随机播放",floatMode:"浮动模式",miniMode:"迷你模式",muted:"静音",controlsButton:"控制按钮",showLrc:"显示歌词",autoplay:"自动播放",aboutAudioFrequency:"关于音频",musicPlayer:"音乐播放器",New:"新的文件",aMap:"高德地图",aboutmap:"关于地图",selfAdaption:"自适应",selfAdaptionEcherts:"自适应图表",selfAdaptionEchertsTooltip:"自适应图表主要针对电脑端后台管理系统进行屏幕变化自适应重绘。",docAndDocx:"word文档有doc和docx，由于拦截是按照后缀名拦截的，所以部分文件拦截出现问题增加拦截的类型即可，doc和docx只是举个增加的例子。",updateAcceptInterceptType:"更改过滤和拦截的类型",updateAcceptInterceptTypeTooltip:"过滤和拦截的类型是一致的，只是是否开启拦截而已。",selectFileAccept:"选择文件时过滤",selectFileIntercept:"选择文件后拦截",selectFileAcceptTooltip:"选择文件时过滤，并不会拦截，仍然可以更改选择文件的类型进行选择。",selectFileInterceptTooltip:"选择文件后拦截，会在选择文件后进行类型判断进行拦截。",uploadFile:"上传文件",fileTypeBad:"文件类型不正确",imgExceSize:"图片超过指定大小",uploadImg:"上传图片",uploadTools:"上传工具",permissionDemo:"以下按钮是关于v-permission权限控制的演示",dynamicCss:"动态CSS",dynamicCssAddCss:"在右侧文本框动态添加CSS",recursiveMenu:"递归菜单",aboutStyle:"关于样式",icoAndTitle:"图标和标题",clickBottomSetIcoTitle:"点击下方ico修改网站的图标和标题",clickSetIcoTitle:"设置其他图标和标题",icoUrl:"图标链接",icoPreview:"图标预览",icoUrlType:"图标的链接要为ico类型噢",title:"标题",bigHome:"大首页",twoLevMenu:"二级菜单",embHome:"内嵌首页",aboutSystem:"关于系统",showMenuLogo:"显示菜单栏logo",circleButton:"圆形按钮",aboutTheme:"关于主题",aboutHomePage:"关于首页",roundButton:"圆角按钮",plainButton:"朴素按钮",defaultValue:"默认值",urlLink:"网址链接",defaultImg:"默认图片",defaultImgTooltip:"默认图片url类型如果是网址链接点击下载会直接打开原链接，如果是base64会下载到本地",defaultUpload:"默认上传",updateUploadNum:"修改上传数量",updateUploadNumTooltip:"已经添加过的文件不受数量的限制",updateUploadSize:"修改上传文件限制大小",updateUploadSizeTooltip:"已经添加过的文件不受大小的限制",defaultUploadImgTooltip:"默认上传每张图片上传的大小最大2MB左右，最多上传10张，多则替换第一张。",defaultUploadFileTooltip:"默认上传每个文件上传的大小最大2MB左右，最多上传10个文件，多则替换第一个。(Word、Excel、PPT、PDF、Text)",notDefaultValue:"没有默认值",otherDefaultValue:"其他默认值",updataDefaultValue:"更改默认值",showSelect:"查看所选项",showLastSelect:"查看最后所选项",switchState:"切换状态",buttonState:"按钮状态",switchButtonShowState:"切换按钮显示状态",switchButtonShowMode:"切换按钮显示方式",prohibit:"禁用",hide:"隐藏",comprehensive:"综合",tableBasicUsage:"表格基本用法",tableExpandUsage:"表格展开用法",updataExpandItem:"改变展开项",tableItemShowTh:"表格项显示的标题",tableItemShowWidth:"表格项显示的列宽",isTableItemShowValueNullNotAddTooltip:"表格项显示的内容为空时不能添加",tableItemShowValue:"表格项显示的内容",tableItemShowAlignMethod:"表格项显示的对齐方式",addExpandItem:"增加展开项",addExportItem:"增加导出项",exportSelectItem:"导出所选项",isExpandItem:"是否展开项",expand:"展开",common:"常见",tableSingMultUsage:"表格单选多选用法",multipleSelect:"多选",singleSelect:"单选",multipleInd:"多个",singleInd:"单个",datePickerBasicUsage:"日期选择器基本用法",buttonBasicUsage:"按钮基本用法",iconBasicUsage:"图标基本用法",aboutSystemConfig:"关于系统配置",aboutRolePower:"关于角色权限",aboutNavMenu:"关于导航菜单",aboutLoopList:"关于循环列表",aboutECharts:"关于ECharts图表",aboutDatePicker:"关于日期选择器",aboutIcon:"关于图标",aboutButton:"关于按钮",aboutTable:"关于表格",requestResult:"请求结果",unifiedStyle:"统一风格",controlUnifiedStyle:"控制统一风格",notUnifiedStyle:"不参与统一风格",iconUnifiedStyle:"图标统一风格",iconUnifiedStyleColor:"图标统一风格颜色",iconUnifiedStyleFontSize:"图标统一风格大小",notFontTooltip:"不带文字提示",fontTooltip:"文字提示",autoDisabled:"自动禁用",showDisabledTime:"显示禁用时间",setDisabledTime:"设置禁用时间",stowOpenNavMenu:"收起或者打开左侧导航菜单栏",foldOpenNavMenu:"折叠或者张开左侧导航菜单栏",requestParamPrev:"请求参数预览",excelExport:"excel导出",excelExportTest:"excel导出测试",modify:"修改",sureAdd:"确定添加",sureRequest:"确定请求",adminTitle:"后台管理系统",subject:"蜂电科技",presetTheme:"预置主题",getInto:"进入",personal:"个人",core:"中心",setUp:"设置",openSetUp:"打开网页设置",signIn:"登录",sure:"确定",delete:"删除",cancel:"取消",home:"首页",test:"测试",device:"设备",deviceId:"设备标识",bill:"账单",phone:"手机号",park:"园区",parkName:"园区名称",parkAddress:"园区地址",manage:"管理",selectLanguage:"选择语言",signOut:"退出",signOutLogin:"退出登录",list:"列表",config:"配置",organization:"企业",system:"系统",regionalSummary:"区域汇总",region:"区域",enterpriseSummary:"企业汇总",business:"业务",module:"模块",day:"日",month:"月",shareConfigName:"配置名称",publicBooth:"公摊",publicBoothConfig:"公摊配置",groRbtConfig:"群聊机器人配置",create:"创建",docking:"对接",hosDock:"房源对接",enterpDock:"企业对接",crGeTaPuBo:"创建总表公摊",crInTaPuBo:"创建独立公摊",crModuRela:"创建模块关系",crdevrelacorr:"创建设备关系",equipartition:"均分",proportion:"比例",area:"面积",squareMeter:"平方/米",electricity:"电量",shareMethod:"分摊方式",shareType:"分摊类型",shareObj:"分摊对象",time:"时间",computingMethod:"计算方式",realTime:"实时",equDataSampType:"设备数据采样类型",deviceState:"设备状态",wattHourMeter:"电表",peakValleyMeter:"峰谷表",waterMeter:"水表",currentOptions:"当前选择",undetermined:"待定",unselected:"未选择",uninput:"未输入",onLine:"在线",offLine:"离线",sumMeter:"总表",sonMeter:"子表",boothMeter:"待摊表",sumMeterSonMeter:"总表子表",theFirst:"第一种",theSecond:"第二种",theThird:"第三种",theFourth:"第四种",theFifth:"第五种",theSixth:"第六种",theSeventh:"第七种",themeBackgroundColor:"主题背景颜色",themeTextColor:"主题文字颜色",tip:"尖",peak:"峰",flat:"平",valley:"谷",layer:"层",layerLower:"层下",add:"增加",label:"标签",billrechargemanagement:"账单充值管理",accountsReceivable:"应收账单",closedBills:"已完结账单",enterpriseName:"企业名称",billingCycle:"账单周期",paymentMode:"付费模式",currentReceivable:"本期应收",currentToBeCollected:"本期待收",realIncome:"本期实收",cumulativeRecharge:"累计充值",cumulativeExpenditure:"累计支出",accountBalance:"账户余额",contacts:"联系人",contactInFormation:"联系方式",dispatchFormMethod:"派单方式",yuan:"元",lookOver:"查看",viewDetails:"查看详情",viewBillDetails:"查看账单详情",receivables:"收款",recharge:"充值",rechargeTime:"充值时间",monthlyCheckoutSheet:"月结账单",rechargeRecord:"充值记录",energy:"能耗",complaint:"投诉",repair:"报修",repairContacts:"报修联系人",repairing:"报修中",repairForm:"报修单",repairDevName:"报修设备名称",repairDevAddress:"报修设备地址",repairDevNum:"报修设备号",abnormal:"异常",abnormalType:"异常类型",devAbnormalTime:"设备异常时间",notreported:"未上报",date:"日期",all:"所有",selectDate:"选择日期",allDevice:"所有设备",loading:"加载中",startDate:"开始日期",endDate:"结束日期",currentBalance:"当前余额",account:"账户",rechargeAmount:"充值金额",vCode:"验证码",getVCode:"获取验证码",againVCodeError:"重新发送验证码",vCodeError:"验证码错误",electricityConsumption:"用电",electricityRecording:"用电记录",notAllow:"不允许",functionNotEnabled:"功能没有开通",dataAgg:"数据汇总",allOrgDay:"所有企业天",allOrgMonth:"所有企业月",sinOrgDay:"单个企业天",sinOrgMonth:"单个企业月",orgHousBind:"企业房源绑定",inHouseSearch:"入驻房源查询",curOptHou:"当前选择房源",curOptOrg:"当前选择企业",curOptDev:"当前选择设备",allOrg:"所有企业",houseDevBind:"房源设备绑定",notBindDev:"未绑定的设备",notInOrg:"未入住的企业",ordWatMeter:"普通电表",airMeter:"空调表(分摊)",elevMeter:"电梯表(分摊)",lighMeter:"照明表(分摊)",backUpPage:"返回上一页",backUpStep:"返回上一步",reloadThisPage:"重载当前页",printCurrentElement:"打印当前元素",homeQuickNav:"首页快捷导航",tableSelfAW:"表格适应宽度",menuUnique:"单个菜单活动",menuSonUnique:"单个子菜单活动",billExport:"账单导出",allBillExport:"所有账单导出",selectBillExport:"所选账单导出",unreadMessage:"未读消息",systemLog:"系统日志",quickFeedback:"快捷反馈",serveError:"服务器错误",copy:"复制",paste:"贴贴",saveAs:"另存为",printBodyTips:"在此区域内右键点击打印当前元素可以对区域内容进行打印",rightClickMenu:"右键菜单",systemClickMenu:"系统菜单",quickClickMenu:"快捷菜单",selectPark:"选择园区",selectOrg:"选择企业",zhcnContent:"中文内容",enusContent:"英文内容",otherContent:"其他内容",parkManageMent:"园区管理",orgInHous:"企业入住房源",housManageMent:"房源管理",orgManageMent:"企业管理",refreshHou:"刷新房源",refreshOrg:"刷新企业",refreshDev:"刷新设备",searchHou:"搜索房源",searchOrg:"搜索企业",searchDev:"搜索设备",upTheHous:"修改该房源",theHousLowerAdd:"该房源下增加",deleThehous:"删除该房源",upTheOrg:"修改该企业",addNewOrg:"增加新企业",deleTheOrg:"删除该企业",shareHous:"分摊房源",meterStructure:"电表结构",meterRela:"电表关系",meterConnectProgramme:"电表连接方案",hous:"房源",housName:"房源名称",daitanElectricityCalculation:"待摊电量计算",shareProgramme:"分摊方案",distributionObj:"分配对象",distributionProgramme:"分配方案",distributionMethod:"分配方式",weight:"权重",byDayElec:"按天电量",byMonthElec:"按月电量",programmeName:"方案名称",programmeRemarks:"方案备注",remarks:"备注",fundManagement:"资金管理",accountBalanceStatistics:"账户余额统计",entryDetailsSummary:"入账明细汇总",subMerchantsList:"二级商户列表",subMerchantsManage:"二级商户管理",subMerchantsAdd:"二级商户添加",subMerchantsModify:"二级商户修改",subMerchantsInfo:"二级商户信息",recordedtTotalAmount:"已入账总金额",unRecordedtTotalAmount:"未入账总金额",freezingAmount:"冻结金额",settlementAmount:"可出金结算金额",recordedtTotalAmountMonth:"按月汇总入账金额",recordedtTotalAmountDay:"按天汇总入账金额",paymentChannel:"支付渠道",payer:"支付人",resident:"入驻人",residentPhone:"入驻人手机号",paymentMerchant:"支付给的商家",paymentMeter:"支付的电表",orderNumber:"订单号",merchantsOrderNumber:"微信商户单号",orderCreateTime:"订单创建时间",paymentOkTime:"支付完成时间",transactionAmount:"交易金额",paymentAmount:"支付金额",ABC:"中国农业银行",recordedInfo:"入账信息",excelSelectRecordedInfo:"导出所选入账信息",excelSelectRecordedInfoTooltip:"导出表格中已经被选择的项，可以全部选择进行导出。",monthlyEnquiry:"按月查询",daylyEnquiry:"按天查询",timeSlotEnquiry:"按时间段查询",businessPhoneEnquiry:"按商家手机号查询",businessNumAndPhoneEnquiry:"按商家号或者商家手机号查询",businessPhone:"商家手机号",numbersEnquiry:"按号查询",oddNumAndPhoneEnquiry:"可任意按照微信商户单号、入驻人手机号、商家手机号、商户编号查询",liquidationStateEnquiry:"按清算状态查询",orderStateEnquiry:"按账单状态查询",billState:"账单状态",billTimeSlot:"账单时间段",settledInTimeSlot:"入驻时间段",rechargeModeEnquiry:"按充值方式查询",okLiquidation:"已清算出金",selectLiquidation:"所选清算出金",selectLiquidationTooltip:"清算出金只能在账单状态为“未清算出金”情况下进行，确认表格信息后，可以选择多个账单一起进行清算出金操作。",okPayment:"已支付",unLiquidation:"未清算出金",unPayment:"未支付",invalid:"已失效",rechargeMode:"充值方式",underTheLineRecharge:"线下",weChatRecharge:"微信",alipayRecharge:"支付宝",systemRecharge:"系统",shortRent:"短租",ABCRecharge:"农业银行",ABCWeChatRecharge:"农业银行微信",queryPrompt:"查询提示：多个条件可以组合查询。",queryPromptRecordedInfo:"本页面表格为所有入账信息的查询，默认查询“最近三天”内的，订单状态为“已支付”，充值方式为“农业银行充值”的入账信息。",querySubMerchantsListInfo:"本页面表格为所有二级商户信息的查询，默认查询“最近一个月”内的，审核状态为“已通过银行审核”。",query:"查询",search:"搜索",auditState:"审核状态",waitAuthSign:"等待授权签约",continueAuthSign:"继续授权签约",continueAuthSignTooltip:"继续授权签约只能在商户的审核状态为“等待授权签约”情况下使用，提供二级商户继续进行开户申请的第二步“二级商户授权签约”功能。",okAuthSign:"已经授权签约",waitBankAudit:"等待银行审核",unBankAudit:"未通过银行审核",okBankAudit:"已通过银行审核",routeManagement:"路由管理",menuManagement:"菜单管理",admin:"超级管理员",subMerchantsName:"二级商户名称",subMerchantsId:"二级商户编号",merchantsId:"商户编号",subMerchantsType:"二级商户类型",personInChargeName:"负责人名称",personInChargeCertificatesType:"负责人证件类型",personInChargeCertificatesNum:"负责人证件编号",enterpriseCertificatesType:"企业证件类型",enterpriseCertificatesNum:"企业证件编号",receiveName:"收款户名",receiveAccount:"收款账号",receiveAccountType:"收款账户类型",payAccountType:"付款账户类型",receiveBank:"收款银行",bankReservePhone:"银行预留手机号",address:"地址",remark:"备注",statement:"声明",personInChargePhone:"负责人联系电话",subMerchantsOpenTime:"二级商户开户时间",subMerchantsAuditTime:"二级商户审核时间",naturalPerson:"自然人",enterpriseMerchant:"企业商户",IndividualBusiness:"个体工商户",personId:"身份证",passport:"护照",certificateOfficers:"军官证",otherDocuments:"其他证件",businessLicense:"营业执照",organizationCodeCertificate:"组织机构代码证",unifiedSocialCreditCode:"统一社会信用代码",debitCard:"借记卡",rightCard:"对公卡",alreadyDeclared:"已声明",unAlreadyDeclared:"未声明",alreadyDeclaredTheThirdParty:"声明已签署三方协议",summaryAccountBalanceHints:"汇总账户余额提示：默认汇总的充值方式为农业银行充值方式，可选择其他充值方式汇总，搜索时间较长，请耐心等待。",subMerchantsOpenFillIn:"二级商户开户填写",subMerchantsOpenApply:"二级商户开户申请",subMerchantsOpenConfirm:"二级商户授权签约",subMerchantsOpenTooltip:"二级商户开户提示：开户申请共有两步，请不要关闭窗口，需在第二步中填入授权验证码完成授权签约。",mustNumType:"必须为数字类型",pleaseNumber:"请输入数字",pleaseEail:"请填写邮箱",pleasePostel:"请填写邮编",pleaseTel:"请填写联系电话",pleaseCardID:"请填写身份证号码",illegalNumber:"数字格式不正确，最多两位小数。",illegalEail:"邮箱属于非法号码",illegalPostel:"邮编属于非法号码",illegalTel:"请填写正确电话，例如：012-1234567，1581234567。",illegalCardID:"身份证号码不正确",devBindHouseName:"设备绑定的房间名称",appLoginAccount:"APP登录账号",billVerify:"账单核实",billVerifyToolTip:"核实所选单笔账单是否已经完成支付",vCodeCanNotReceive:"验证码收不到，使用随机金额验证方式。",vCodeCanNotReceiveTooltip:"验证码收不到，使用随机金额验证方式。",switchVerMode:"切换验证方式",moreOperations:"更多操作",moreUsage:"更多用法",queryBalance:"查询余额",pleaseIsTableSelect:"请在表格中先选择一项",balanceAccountTooltip:"农业银行充值到账时间为次日到账",tableSelectTooltip:"表格开启了多选或者单选模式，部分功能在选择了表格中的某项后才可以使用,在最左侧选择框进行选择或者双击某一行进行选择。",orgMonthlyCheckoutSheetTooltip:"本页面为企业月结账单列表页，最左侧点击或者双击某一行选择后可以查看账单详情。",thisNotShow:"本次不再显示",foreverNotShow:"永远不再显示",tableNotShow:"相同表格不再显示",tableSwitch:"表格使用提示",email:"邮箱",tel:"电话",monthAccountDate:"每月出账日期",postPay:"后付费",prePay:"预付费",num:"号",abcStatements:"农行对账单",abcBookDate:"农行记账日期",customerAccount:"客户账号",hostSerialNumber:"主机流水号",merchantAccount:"商户账号",merchantAccountAmount:"商户动账金额",merchantCommissionFee:"商户回佣手续费",merchantInstallmentFee:"商户分期手续费",number9014:"9041流水号",orderAmount:"交易金额",orderNo:"订单编号",orderTime:"交易时间",originalOrderNo:"原订单编号",payType:"交易类型",accountManagement:"账号管理",roleManagement:"角色管理",systemManagement:"系统管理",systemPermissions:"系统权限",permissionsDemo:"权限演示",userName:"用户名",passWord:"密码",roleName:"角色名",routeName:"路由名",menuName:"菜单名",routeUrl:"路由链接",menuUrl:"菜单链接",requestMode:"请求模式",trxType:"交易类型",currencyCode:"交易币种",fee:"手续费金额",wechatOfficialAccountNo:"微信公众号账号",receiveAccName:"收款方户名",isBreakAccount:"二级商户入账",commodityType:"商品种类",splitMerchantID:"分账编号",splitAmount:"分账金额",hostDate:"银行交易日期",hostTime:"银行交易时间",batchNo:"交易批次号",pleaseSearchPark:"请搜索园区",pleaseSearchOrg:"请搜索企业",elecManageMent:"用电管理",estaManageMent:"物业管理",orgAccount:"企业账户",deviceList:"设备列表",enerAnalysis:"能耗分析",rent:"房租",property:"物业",orgRechargeRecord:"充值记录",requestAddress:"请求地址"}},"76ff":function(e){e.exports={"":"",element:"常用组件",eleDialog:"element-dialog",title:"Power Bee Intelligent Park Management System",getInto:"Get into",personal:"personal",core:"core",setUp:"Set up",signIn:"Sign in",sure:"Sure",cancel:"cancel",home:"home page",test:"test",device:"device",bill:"bill",park:"park",manage:"manage",signOut:"Sign out",list:"list",config:"config",organization:"organization",system:"system",circleButton:"radio buttons",roundButton:"rounded button",plainButton:"simple button",tableBasicUsage:"Basic usage of table",datePickerBasicUsage:"Basic usage of date picker",buttonBasicUsage:"Basic usage of button",iconBasicUsage:"Basic usage of icon",aboutSystemConfig:"About system configuration",aboutRolePower:"About role permissions",aboutNavMenu:"About navigation menu",aboutLoopList:"About circular lists",aboutECharts:"About the ECharts chart",aboutDatePicker:"About the date picker",aboutIcon:"About the icon",aboutButton:"About the button",aboutTable:"About the table",requestResult:"Request the results",unifiedStyle:"The unified style",controlUnifiedStyle:"Control unified style",notUnifiedStyle:"Do not participate in a unified style",iconUnifiedStyle:"Icon unified style",iconUnifiedStyleColor:"Icon uniform style color",iconUnifiedStyleFontSize:"Icon uniform style size",notFontTooltip:"No text prompts",fontTooltip:"The tooltip",autoDisabled:"Automatically disable",showDisabledTime:"Display disabled time",setDisabledTime:"Set disable time",stowOpenNavMenu:"Fold or open the left navigation menu bar",foldOpenNavMenu:"Fold or open the left navigation menu bar",requestParamPrev:"Request parameter preview",excelExport:"excel export",excelExportTest:"excel export test",modify:"Sure",sureAdd:"Sure add",sureRequest:"Sure request",adminTitle:"backstage management system",subject:"Bee electrical science and technology",presetTheme:"Preset theme",openSetUp:"Open web Settings",delete:"delete",deviceId:"device identification",phone:"cell phone number",parkName:"Name of the park",parkAddress:"The park address",selectLanguage:"select language",signOutLogin:"logout",regionalSummary:"Regional summary",region:"area",enterpriseSummary:"Enterprise summary",business:"business",module:"module",day:"day",month:"month",shareConfigName:"The name of the configuration",publicBooth:"Pooled",publicBoothConfig:"Equally Shared configuration",groRbtConfig:"Group chat robot configuration",create:"create",docking:"butt joint",hosDock:"Properties docking",enterpDock:"Enterprise docking",crGeTaPuBo:"Create a total table share",crInTaPuBo:"Create a separate booth",crModuRela:"Creating module relationships",crdevrelacorr:"Create device relationships",equipartition:"average",proportion:"proportion",area:"area",squareMeter:"Square/m",electricity:"electric quantity ",shareMethod:"allocation way",shareType:"allocation type",shareObj:"Share the object",time:"time",computingMethod:"formula mode ",realTime:"real time",equDataSampType:"Device data sampling type",deviceState:"Equipment Status",wattHourMeter:"electricity meter",peakValleyMeter:"The peak valley table",waterMeter:" water meter",currentOptions:"The currently selected",undetermined:"undetermined ",unselected:"unselected",uninput:"No input",onLine:"on line",offLine:"off-line",sumMeter:"summary statement",sonMeter:"Child table",boothMeter:"Prepaid table",sumMeterSonMeter:"Always watch the child table",theFirst:"The first",theSecond:"The second",theThird:"The third",theFourth:"A fourth",theFifth:"The fifth",theSixth:"6 kinds of",theSeventh:"The 7th kind of",themeBackgroundColor:"Theme background color",themeTextColor:"Theme text color",tip:"needle",peak:"peak",flat:"flat",valley:"grain",layer:"tier",layerLower:"Under the layer",add:"increase",label:"label",billrechargemanagement:"Bill recharge management",accountsReceivable:"Accounts receivable bills",closedBills:"Closed bill",enterpriseName:"the name of firm",billingCycle:"The billing cycle",paymentMode:"Payment mode",currentReceivable:"The current accounts receivable",currentToBeCollected:"This look forward to receive",realIncome:"The current paid-in",cumulativeRecharge:"The accumulated top-up",cumulativeExpenditure:"accumulated outlay",accountBalance:"balance of account ",contacts:"linkman",contactInFormation:"contact information",dispatchFormMethod:"Send a single way",yuan:"yuan",lookOver:"examine",viewDetails:"view details",viewBillDetails:"View billing details",receivables:"gathering",recharge:"recharge",rechargeTime:"recharge time",monthlyCheckoutSheet:"Monthly statement bill",rechargeRecord:"recharge record",energy:"energy consumption ",complaint:"complaint",repair:"repairs",repairContacts:"Repair contact person",repairing:"The repair of",repairForm:"maintenance form ",repairDevName:"Name of repair equipment",repairDevAddress:"Address for equipment repair",repairDevNum:"Report to repair equipment number",abnormal:"abnormal",abnormalType:"Exception types",devAbnormalTime:"Device abnormal time",notreported:"Did not report",date:"Date",all:"all",selectDate:"option date",allDevice:"All the equipment",loading:"loading",startDate:"start date ",endDate:"end date ",currentBalance:"current balance ",account:"account ",rechargeAmount:"recharge amount",vCode:"verification code",getVCode:"get code ",againVCodeError:"Resend the verification code",vCodeError:"Verification code error",electricityConsumption:"electro-",electricityRecording:"Electricity record",notAllow:"not allow",functionNotEnabled:"Function not enabled",dataAgg:"summarization of data",allOrgDay:"All business days",allOrgMonth:"All business months",sinOrgDay:"Single enterprise day",sinOrgMonth:"Single enterprise month",orgHousBind:"Corporate housing binding",inHouseSearch:"Check the housing inventory",curOptHou:"Current house selection",curOptOrg:"Currently selected enterprise",curOptDev:"Currently selected device",allOrg:"All of the enterprise",houseDevBind:"House device binding",notBindDev:"Unbound device",notInOrg:"Unused businesses",ordWatMeter:"General electric meter",airMeter:"Air-conditioning meter (apportionment)",elevMeter:"Lift schedule (apportionment)",lighMeter:"Lighting meter (apportionment)",backUpPage:"Return to previous page",backUpStep:"Go back to the previous step",reloadThisPage:"Reload current page",printCurrentElement:"Print the current element",homeQuickNav:"Home page quick navigation",tableSelfAW:"Table adaptive width",menuUnique:"Single menu activity",billExport:"Export bill",allBillExport:"Export of all bills",selectBillExport:"The selected bill is exported",unreadMessage:"unread message",systemLog:"system log ",quickFeedback:"Quick feedback",serveError:"server error",copy:"copy",paste:"parse",saveAs:"save as ",printBodyTips:"The contents of the area can be printed by right-clicking on the print current element in this area",rightClickMenu:"Right-click shortcut menu",systemClickMenu:"Right-click system menu",selectPark:"Choose to park",selectOrg:"Choose enterprise",zhcnContent:"Chinese content",enusContent:"English content",otherContent:"other guide",parkManageMent:"The park management",orgInHous:"Corporate housing",housManageMent:"Housing management",orgManageMent:"business administration ",refreshHou:"Refresh the housing",refreshOrg:"Refresh the enterprise",refreshDev:"Refresh the equipment",searchHou:"Search housing",searchOrg:"Search firms",searchDev:"search equipment",upTheHous:"Modify the availability",theHousLowerAdd:"The availability has increased",deleThehous:"Delete the listing",upTheOrg:"Modify the enterprise",addNewOrg:"Add new business",deleTheOrg:"Delete the enterprise",shareHous:"Share the housing",meterStructure:"Structure of electricity meters",meterRela:"Electric meter relationship",meterConnectProgramme:"Meter connection scheme",hous:"housing resource",housName:"housing resource name",daitanElectricityCalculation:"Calculation of unamortized power",shareProgramme:"pool schemes",distributionObj:"Allocate objects",distributionProgramme:"allocation plan; allocative decision",distributionMethod:"mode of distribution",weight:"weight ",byDayElec:"According to the day power",byMonthElec:"A monthly charge",programmeName:"scenario name",programmeRemarks:"Plan note",fundManagement:"Funds management ",accountBalanceStatistics:"Account balance statistics",entryDetailsSummary:"Account entry details summary",subMerchantsList:"Secondary merchant list",subMerchantsManage:"Secondary merchant management",subMerchantsAdd:"Secondary merchant addition",subMerchantsModify:"Secondary merchant modification",subMerchantsInfo:"Secondary merchant information",recordedtTotalAmount:"The total amount has been recorded",unRecordedtTotalAmount:"Total unrecorded amount",freezingAmount:"account frozen",settlementAmount:"Withdrawal settlement amount",recordedtTotalAmountMonth:"Collect the amount into the account on a monthly basis",recordedtTotalAmountDay:"Collect the amount of money into the account by day",paymentChannel:"channel of disbursement",payer:"payer ",resident:"In person",residentPhone:"Machine number for check-in",paymentMerchant:"Payments to merchants",paymentMeter:"Pay for the electricity meter",orderNumber:"order number",merchantsOrderNumber:"WeChat merchant order number",orderCreateTime:"Order creation time",paymentOkTime:"Payment completion time",transactionAmount:"transaction amount",paymentAmount:"payment amount",ABC:"Agricultural Bank of China",recordedInfo:"Accounting information",excelSelectRecordedInfo:"Export the selected entry information",excelSelectRecordedInfoTooltip:"Export all the selected items in the table.",monthlyEnquiry:"The query by the month",daylyEnquiry:"According to the days of the query",timeSlotEnquiry:"Query by time period",businessPhoneEnquiry:"Press the merchant mobile phone number query",businessNumAndPhoneEnquiry:"Search by merchant number or merchant mobile phone number",businessPhone:"Merchant phone number",numbersEnquiry:"According to the number query",oddNumAndPhoneEnquiry:"Can be arbitrarily according to WeChat merchant single number, the number of the registered person, the merchant mobile phone number, merchant number query",liquidationStateEnquiry:"Query by liquidation status",orderStateEnquiry:"Check by billing status",billState:"The billing state",billTimeSlot:"Billing period",settledInTimeSlot:"Entry period",rechargeModeEnquiry:"Search by recharge method",okLiquidation:"Gold has been liquidated",selectLiquidation:"The selection clears the gold",selectLiquidationTooltip:"The settlement of gold can only be carried out under the condition that the bill status is unliquidated gold After confirming the form information, multiple bills can be selected to conduct the settlement of gold together.",okPayment:"have paid",unLiquidation:"No gold has been liquidated",unPayment:"non-payment",invalid:"lost effectiveness",rechargeMode:"Top-up way",underTheLineRecharge:"below the line",weChatRecharge:"WeChat",alipayRecharge:"Alipay",systemRecharge:"system",shortRent:"short rental",ABCRecharge:"agricultural bank",ABCWeChatRecharge:"Agricultural bank WeChat",queryPrompt:"Query tip: multiple criteria can combine queries",queryPromptRecordedInfo:"The table on this page is the query of all the account entry information. The default query is within the last three days The order status is paid.",querySubMerchantsListInfo:"The form on this page is the query of all secondary merchant information.Thedefault query is  within the last month , and the audit status is has passed the bank audit",query:"query",search:"search",auditState:"audit status",waitAuthSign:"Waiting for authorization contract",continueAuthSign:"Continued authorization contract",continueAuthSignTooltip:"Continued authorization signing can only be used when the merchant's review status is waiting for authorization signing. It provides the second step authorized signing of secondary merchants function for secondary merchants to continue to apply for account opening",okAuthSign:"Authorized contract",waitBankAudit:"Waiting for bank audit",unBankAudit:"Failed bank audit",okBankAudit:"It has been approved by the bank",routeManagement:"Routing management",menuManagement:"menu management",admin:"Super Admin",subMerchantsName:"Secondary merchant name",subMerchantsId:"Secondary merchant number",merchantsId:"merchant code",subMerchantsType:"Secondary merchant type",personInChargeName:"Name of person in charge of secondary merchant type",personInChargeCertificatesType:"Certificate type of person in charge",personInChargeCertificatesNum:"Certificate number of person in charge",enterpriseCertificatesType:"Type of enterprise certificate",enterpriseCertificatesNum:"Enterprise certificate number",receiveName:"Payment account",receiveAccount:"shroff account number ",receiveAccountType:"Receiving account type",payAccountType:"Payment account type",receiveBank:"due bank",bankReservePhone:"The bank reserves the phone number",address:"site",remark:"remark",statement:"statement",personInChargePhone:"Contact number of person in charge",subMerchantsOpenTime:"Account opening time of secondary merchants",subMerchantsAuditTime:"Secondary merchant audit time",naturalPerson:"natural person",enterpriseMerchant:"Enterprise business",IndividualBusiness:"individual business",personId:" identity card ",passport:"passport",certificateOfficers:"certificate of officers",otherDocuments:"Other certificates",businessLicense:"business license",organizationCodeCertificate:"Organization Code Certificate",unifiedSocialCreditCode:"Unified social credit code",debitCard:"debit card",rightCard:"Contrary to the card",alreadyDeclared:"declared",unAlreadyDeclared:"Not a statement",alreadyDeclaredTheThirdParty:"It stated that a tripartite agreement had been signed",summaryAccountBalanceHints:"Summary account balance tip: the default summary recharge method is the agricultural bank of China recharge method. You can choose other recharge methods to summarize. The search time is longer, please wait patiently.",subMerchantsOpenFillIn:"Secondary merchant account opening fill in",subMerchantsOpenApply:"Application for secondary merchant account opening",subMerchantsOpenConfirm:"Authorized signing of secondary merchants",subMerchantsOpenTooltip:"Secondary merchant account opening reminder: there are two steps in the account opening application. Please do not close the window, and fill in the authorization verification code in the second step to complete the authorization signing.",mustNumType:"Must be a numeric type",pleaseNumber:"Please enter Numbers",pleaseEail:"Please fill in the email",pleasePostel:"Zip code, please",pleaseTel:"Please fill in the contact number",pleaseCardID:"Please fill in the id number",illegalNumber:"Incorrect number format, two decimal places at most.",illegalEail:"The mailbox is an illegal number",illegalPostel:"The zip code is an illegal number",illegalTel:"Please fill in the correct telephone number. For example:012-1234567��1581234567��",illegalCardID:"The id number is incorrect",devBindHouseName:"The name of the room the device is bound to",appLoginAccount:"APP login account",billVerify:"Bill to verify",billVerifyToolTip:"Verify that the selected bill has been paid",vCodeCanNotReceive:"Verification code not received, use random amount verification.",vCodeCanNotReceiveTooltip:"Verification code not received, use random amount verification.",switchVerMode:"Switch verification mode",moreOperations:"More operations",moreUsage:"More usage",queryBalance:"balance inquiry",pleaseIsTableSelect:"Please select one item in the form first",balanceAccountTooltip:"The time for bank of agriculture to charge to the account is the next day",tableSelectTooltip:"The table opens the mode of multi-selection or single selection. Some functions can only be used after selecting an item in the table. Select it in the left-most selection box or double-click a row to select it.",orgMonthlyCheckoutSheetTooltip:"This page is the single column table page of monthly payment of enterprises. Click or double-click a row on the leftmost to select it and you can check the bill details.",thisNotShow:"No longer displayed",foreverNotShow:"Never show again",tableNotShow:"The same table is no longer displayed",tableSwitch:"Tips for use of forms",email:"email",tel:"phone",monthAccountDate:"Monthly enter an item of expenditure in the accounts date",postPay:"post-paid",prePay:"prepayment",num:"mark",abcStatements:"Agricultural bank statement",abcBookDate:"Agricultural bank accounting date",customerAccount:"The customer account",hostSerialNumber:"Main engine current number",merchantAccount:"Business accounts",merchantAccountAmount:"Amount of merchant moving account",merchantCommissionFee:"Merchant commission commission",merchantInstallmentFee:"Merchant installment commission",number9014:"9041serial number",orderAmount:"transaction amount",orderNo:"order reference",orderTime:"trading hour; exchange hour",originalOrderNo:"Original order number",payType:"the type of transaction ",accountManagement:"account management",roleManagement:"role management",systemManagement:"system management",userName:"username",passWord:"password",roleName:"role name",routeName:"Routing,",menuName:"Menu name",routeUrl:"Routing link",menuUrl:"Menu links",requestMode:"Request mode",trxType:"the type of transaction",currencyCode:"transaction currency ",fee:"Handling amount",wechatOfficialAccountNo:"WeChat public account",receiveAccName:"Account name of recipient",isBreakAccount:"Secondary merchant entry",commodityType:"type of merchandize",splitMerchantID:"Collecting a number",splitAmount:"The fashionable amount",hostDate:"Bank transaction date",hostTime:"Bank transaction hours",batchNo:"Transaction lot number",pleaseSearchPark:"Please search the park",pleaseSearchOrg:"Please search for enterprises",elecManageMent:"power consumption management",estaManageMent:"property management",orgAccount:"business account",deviceList:"The equipment list",enerAnalysis:"energy consumption analysis",rent:"rent",property:"real estate ",orgRechargeRecord:"recharge record",requestAddress:"Request the address"}}}]);