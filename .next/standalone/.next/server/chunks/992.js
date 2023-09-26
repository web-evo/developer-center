exports.id=992,exports.ids=[992],exports.modules={5370:e=>{e.exports={actions:"editor_actions__cQ2zk"}},27992:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>E});var s=r(20997),i=r(16689),l=r(66511);r(54132);var n=r(11053),o=r(5370),c=r.n(o),d=r(54943),h=r.n(d),u=r(20149),v=r.n(u),p=r(91850),x=r(52167),m=r.n(x),g=r(78591),w=r(92226),f=r(73142),y=r(3067),b=r(53179),k=r.n(b),T=r(36600),O=r.n(T),j=e([p]);p=(j.then?(await j)():j)[0];let C=()=>({editorEffect(e){e.editor.getInputField().addEventListener("onpaste",e=>{e.preventDefault()})}}),E=e=>{let[t,r]=(0,i.useState)(e.value||""),[a,o]=(0,i.useState)(e.title||""),d=[h()(),v()(),C()],u=!!e.id,{enqueueSnackbar:x}=(0,f.useSnackbar)(),b=async e=>{let t=[];try{if(e.length>1)throw Error("一次只能上传一张图片");let r=e[0].name;if(-1!==r.indexOf(" "))throw Error("文件名不允许包含空格");let a=new g.Z("https://web-evo-server.bulv.life/"),s=await a.get("/ali/oss/policy",{}),{dir:i}=s,l=w.Z.toFormData({key:i.length?`${i}/${e[0].name}`:e[0].name,...s,file:e[0]}),{filepath:n}=await a.post(s.host,l,{"Content-Type":"multipart/form-data"});return t.push({url:n,alt:"",title:""}),t}catch(e){throw x(e.message,{variant:"error"}),new DOMException(e.message)}};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:c().actions,children:[s.jsx(y.Z,{sx:{flex:1},mr:2,children:s.jsx(k(),{label:"标题",size:"small",fullWidth:!0,value:a,onChange:({target:{value:e}})=>o(e)})}),s.jsx(O(),{variant:"outlined",sx:{mr:2},onClick:()=>{p.default.write(JSON.stringify({title:a,mark_content:t})).then(()=>x("内容已复制到剪贴板",{variant:"success"}))},children:"复制到剪贴板"}),s.jsx(O(),{variant:"outlined",onClick:u?()=>{let r={_id:e.id,title:a,markContent:t};m().put("https://web-evo-server.bulv.life/blogs",r).then(()=>x("文章修改成功",{variant:"success"})).catch(e=>x(e.message,{variant:"error"}))}:()=>{m().post("https://web-evo-server.bulv.life/blogs",{title:a,markContent:t}).then(()=>x("文章发布成功",{variant:"success"})).catch(e=>x(e.message,{variant:"error"}))},children:u?"保存修改":"发布"})]}),s.jsx(l.Editor,{value:t,plugins:d,locale:n,onChange:e=>r(e),uploadImages:b})]})};a()}catch(e){a(e)}})},54132:()=>{},11053:e=>{"use strict";e.exports=JSON.parse('{"bold":"粗体","boldText":"粗体文本","cheatsheet":"Markdown 语法","closeHelp":"关闭帮助","closeToc":"关闭目录","code":"代码","codeBlock":"代码块","codeLang":"编程语言","codeText":"代码","exitFullscreen":"退出全屏","exitPreviewOnly":"恢复默认","exitWriteOnly":"恢复默认","fullscreen":"全屏","h1":"一级标题","h2":"二级标题","h3":"三级标题","h4":"四级标题","h5":"五级标题","h6":"六级标题","headingText":"标题","help":"帮助","hr":"分割线","image":"图片","imageAlt":"alt","imageTitle":"图片描述","italic":"斜体","italicText":"斜体文本","limited":"已达最大字符数限制","lines":"行数","link":"链接","linkText":"链接描述","ol":"有序列表","olItem":"项目","preview":"预览","previewOnly":"仅预览区","quote":"引用","quotedText":"引用文本","shortcuts":"快捷键","source":"源代码","sync":"同步滚动","toc":"目录","top":"回到顶部","ul":"无序列表","ulItem":"项目","words":"字数","write":"编辑","writeOnly":"仅编辑区"}')}};