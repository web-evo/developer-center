(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702],{31335:function(e,t,i){Promise.resolve().then(i.bind(i,66988))},66988:function(e,t,i){"use strict";i.r(t),i.d(t,{Dashboard:function(){return N}});var a=i(32003),n=i(23426),s=i(79013),d=i(65225),l=i(9770),o=i(79598),r=i(76383),c=i(60948),h=i(38546),u=i(69646),b=i(38853),f=i(48552),x=i(95669),p=i(74085),g=i(51770),j=i(31814),Z=i(13210),w=i.n(Z),m=i(97684),v=i(61476);let N=()=>{let e=(0,v.useRouter)(),t=t=>{e.push("/blogs/modify/".concat(t))},i=[{field:"_id",headerName:"ID",width:220},{field:"title",headerName:"Title",width:300},{field:"viewCount",headerName:"View Count"},{field:"createdAt",headerName:"Created At"},{field:"updatedAt",headerName:"Updated At"},{field:"actions",type:"actions",width:100,getActions:e=>[(0,a.jsx)(b.u,{icon:(0,a.jsx)(g.Z,{}),label:"Edit",onClick:()=>t(String(e.id))},"edit")]}],[Z,N]=(0,n.useState)([]);return(0,n.useEffect)(()=>{m.Z.get("".concat("https://web-evo.bulv.life/service/","dashboard/blogs")).then(e=>{console.log(e),N(e.data.data)})},[]),(0,a.jsx)(s.Z,{sx:{mb:2},children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(l.Z,{action:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(r.Z,{"aria-label":"settings",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)(w(),{href:"/dashboard/publish",children:(0,a.jsx)(c.Z,{startIcon:(0,a.jsx)(p.Z,{}),variant:"contained",children:"create a new blog"})})]}),avatar:(0,a.jsx)(h.Z,{sx:{bgcolor:x.Z[500]},"aria-label":"recipe",children:"D"}),title:"Dashboard"}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(f._$,{rows:Z,columns:i,initialState:{pagination:{paginationModel:{pageSize:10}}},getRowId:e=>{let{_id:t}=e;return t},pageSizeOptions:[5],checkboxSelection:!0,disableRowSelectionOnClick:!0})})]})})}}},function(e){e.O(0,[7831,2344,1137,4300,7879,3210,8320,9578,7912,6286,7752,9336,9065,8850,1744],function(){return e(e.s=31335)}),_N_E=e.O()}]);