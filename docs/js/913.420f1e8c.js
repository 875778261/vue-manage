"use strict";(self["webpackChunkp_1"]=self["webpackChunkp_1"]||[]).push([[913],{11913:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sutudentList"},[e("h1",[t._v("学生列表")]),e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"mini"}},[e("el-form-item",{attrs:{label:"姓名查询"}},[e("el-input",{attrs:{placeholder:" 输入查询姓名"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.find}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.computeData,border:""}},[e("el-table-column",{attrs:{prop:"id",label:"id",align:"center"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),e("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),e("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center"}}),e("el-table-column",{attrs:{prop:"number",label:"姓名",align:"center"}}),e("el-table-column",{attrs:{prop:"class",label:"学号",align:"center"}}),e("el-table-column",{attrs:{prop:"state_text",label:"状态",align:"center"}}),e("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),e("el-table-column",{attrs:{prop:"phone",label:"手机号码",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.btn_del(n.row.id)}}})]}}])})],1),e("div",[e("span",{staticClass:"demonstration"},[t._v("完整功能")]),e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},l=[],r=n(7877),o={created(){console.log("StudentList"),this.getDate()},data(){return{tableData:[],currentPage:1,pageSize:10,total:null,formInline:{name:null}}},computed:{computeData(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},methods:{getDate(t){(0,r.qH)(t).then((t=>{200===t.data.status&&(this.tableData=[...t.data.data],this.total=t.data.total,this.tableData.forEach((t=>{1===t.sex?t.sex_text="男":t.sex_text="女","1"===t.state?t.state_text="已入学":"2"===t.state?t.state_text="未入学":t.state_text="休学中"})))}))},handleSizeChange(t){this.pageSize=t,this.currentPage=1,console.log(`每页 ${t} 条`)},handleCurrentChange(t){this.currentPage=t,console.log(`当前页: ${t}`)},btn_del(t){console.log("scope.row.id传来的值",t),(0,r.nJ)(t).then((t=>{console.log(t),200===t.data.status&&(this.$message({message:"删除数据成功",type:"success"}),this.getDate())}))},find(){console.log("submit!",this.formInline.name),this.getDate(this.formInline)},reset(){console.log("reset!"),this.formInline={},this.getDate()}}},i=o,s=n(1001),u=(0,s.Z)(i,a,l,!1,null,null,null),c=u.exports},7877:function(t,e,n){n.d(e,{Ab:function(){return c},eM:function(){return m},iq:function(){return d},k6:function(){return p},m:function(){return u},nJ:function(){return s},qH:function(){return i},x4:function(){return o}});var a=n(92617),l=n(80129),r=n.n(l);function o(t){return console.log("login接口正在请求"),(0,a.Z)({method:"post",url:"/login",data:t})}function i(t){return(0,a.Z)({method:"get",url:"/students",params:t})}function s(t){return(0,a.Z)({method:"delete",url:`/students/${t}`})}function u(t){return(0,a.Z)({method:"get",url:"/info",params:t})}function c(t){return console.log("apidata",t),t=r().stringify(t),console.log("qs_apidata",t),(0,a.Z)({method:"post",url:"/info",data:t})}function d(t){return t=r().stringify(t),(0,a.Z)({method:"put",url:"/info",data:t})}function m(t){return(0,a.Z)({method:"delete",url:`/info/${t}`})}function p(){return(0,a.Z)({method:"get",url:"/dataview"})}}}]);
//# sourceMappingURL=913.420f1e8c.js.map