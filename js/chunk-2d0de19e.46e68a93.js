(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de19e"],{"83e2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("el-row",{staticClass:"margin1vw"},[a("el-col",{attrs:{span:4}},[t._v("\n      "+t._s(t.language.requestMode)+"\n      "),a("el-select",{model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[a("el-option",{attrs:{value:"get"}}),a("el-option",{attrs:{value:"post"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{placeholder:t.language.requestAddress},model:{value:t.inputUrl,callback:function(e){t.inputUrl=e},expression:"inputUrl"}})],1),a("el-col",{attrs:{span:4}},[a("mdb",{attrs:{icon:"el-icon-search",type:"primary",disabled:""==t.inputUrl,long:!0},on:{click:t.Request}},[t._v(t._s(t.language.sureRequest))])],1)],1),t._l(t.testData,function(e,s){return a("el-row",{key:s,staticClass:"margin1vw"},[a("el-col",{attrs:{offset:4,span:5}},[t._v("key："+t._s(s))]),a("el-col",{attrs:{span:11}},[t._v("value："+t._s(e))]),a("el-col",{attrs:{span:2}},[a("mi",{attrs:{icon:"el-icon-edit",tooltip:t.language.modify},on:{click:function(e){return t.modifyData(s)}}})],1),a("el-col",{attrs:{span:2}},[a("mi",{attrs:{icon:"el-icon-delete",tooltip:t.language.delete},on:{click:function(e){return t.deleData(s)}}})],1)],1)}),a("el-row",{staticClass:"margin1vw"},[a("el-col",{attrs:{offset:4,span:5}},[t._v("\n      key：\n      "),a("el-input",{staticClass:"width80",model:{value:t.inputKey,callback:function(e){t.inputKey=e},expression:"inputKey"}})],1),a("el-col",{attrs:{span:7}},[t._v("\n      value：\n      "),a("el-input",{staticClass:"width80",model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),a("el-col",{attrs:{span:4}},[t._v("\n      valueType：\n      "),a("el-select",{staticClass:"width50",model:{value:t.valueType,callback:function(e){t.valueType=e},expression:"valueType"}},[a("el-option",{attrs:{value:"string"}}),a("el-option",{attrs:{value:"number"}})],1)],1),a("el-col",{attrs:{span:4}},[a("mdb",{attrs:{type:"primary",long:!0},on:{click:t.inputAdd}},[t._v(t._s(t.language.sureAdd))])],1)],1),a("el-row",{staticClass:"margin1vw"},[t._v("\n    "+t._s(t.language.requestParamPrev)+"\n    "),a("pre",[t._v(t._s(t.testData))]),t._v("\n    "+t._s(t.language.requestResult)+"\n    "),a("pre",[t._v(t._s(t.reqTest))])])],2)},n=[],l=(a("96cf"),a("3b8d")),i={mixins:[a("a496").default],name:"RequestUtil",data:function(){return{select:"get",valueType:"string",inputUrl:"",inputKey:"",inputValue:"",testData:{},reqTest:{}}},methods:{modifyData:function(t){this.inputKey=t,this.inputValue=this.testData[t]},deleData:function(t){this.$delete(this.testData,t)},inputAdd:function(){"string"==this.valueType?this.$set(this.testData,this.inputKey,this.inputValue):this.$set(this.testData,this.inputKey,+this.inputValue)},Request:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("get"!=this.select){t.next=6;break}return t.next=3,this.$Get(this.inputUrl,this.upDataHandler);case 3:this.reqTest=t.sent,t.next=10;break;case 6:if("post"!=this.select){t.next=10;break}return t.next=9,this.$Post(this.inputUrl,this.upDataHandler);case 9:this.reqTest=t.sent;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},u=i,r=a("2877"),c=Object(r["a"])(u,s,n,!1,null,null,null);e["default"]=c.exports}}]);