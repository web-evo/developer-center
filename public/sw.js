if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const u=e=>i(e,n),r={module:{uri:n},exports:t,require:u};s[n]=Promise.all(a.map((e=>r[e]||u(e)))).then((e=>(c(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bc7312bf299014b8c26887bb836258a1"},{url:"/_next/static/SmJMR8uI3BNf5XuBIYi5I/_buildManifest.js",revision:"ee3085b0769372b7507fa8bca71aa427"},{url:"/_next/static/SmJMR8uI3BNf5XuBIYi5I/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1137-ad4d09b1fad2803d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/1254bd90-1b8bf2e4e8dc9c1d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/1265-d7af82d819b5ce2c.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/1605-d2f15ab95837063c.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/16714efa-1bbb78372a611cf4.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/2344-0b45039db8d92264.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/2398-1b38afa05cbace58.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/2551-27ec36750a18c820.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/2994-a454a10f2df22ab5.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/3210-ef98482afb028424.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/3722-acff5ae523469154.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/4300-eed5fa655b5c802b.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/4518-8496fbce3a7c542a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/4641-65606f45efe74daf.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/4805-6853d0f82746588c.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/4908-e0a1640d122f2017.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/5072-30735753380be070.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/5862-bd8ec52c6153cb65.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/6286-8d6d563d407dedb4.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/6539-518ace6e2e53f90a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/7694e0e6-db365cbc6ba243c6.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/7831-7d219df51c768964.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/7879-ddfae7b2a38e21f8.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/8041-e6669e403041aa8b.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/8320-0ae2b3260a525a2e.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/8430-458617f9a1f077b1.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/8799.b343f0e6b33baf3f.js",revision:"b343f0e6b33baf3f"},{url:"/_next/static/chunks/88-eb86ccb5dabf81a4.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/8850-64efc0634ce80b58.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/9028-f37ae0a25de4ccc2.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/9169-0188139ba3fc4368.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/9336-e437ea81ee78e298.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/9493-242681293bb5d85d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/9578-62d106f740d09c35.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/about/page-c84f72a15b1a6f5a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/blogs/page-cdbc61d4a2cd4a65.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/contact/page-1ca9fc27efe6a44c.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/dashboard/blogs/%5Bid%5D/modify/page-16aa8cb83b861431.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/dashboard/layout-020ecc59fa86cc91.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/dashboard/page-677b1f0ab5e04a6a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/dashboard/publish/page-9e0b50f3526b069d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/layout-673cfe902542910b.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/page-b0e457c81c55512d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/privacy-policy/page-7f029d830e62904a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/projects/page-32cae1aebef68a80.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/services/page-bed9331d2da03c4d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/support-us/page-9d9ba981b79c7a5d.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/app/tools/markdown-to-pdf/page-fff2b91ad54960ec.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/d3a2d874-556c42d4207418f0.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/framework-d5346d2bbca72ca6.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/main-app-8eb2a5b2bc95e5ca.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/main-cd9ec63e71282396.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/40444-d85a9047f3636990.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/_app-7eb8c4670f3afe75.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/_error-14c5a5018a3dc9dd.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/blogs/%5Bid%5D-2f489f7222b05c7a.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/courses-a72a76b899da2e4b.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/courses/%5Bid%5D-ebaf0412e7fbaa0c.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/docs-80ae077319e00fce.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/docs/%5Bid%5D-a5a9843da742d2b4.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/portfolio-0b6700240f7cc319.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/search-04d90e6f968565cd.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/pages/tools-0b50be8f5909f8af.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d8c6834844469ddc.js",revision:"SmJMR8uI3BNf5XuBIYi5I"},{url:"/_next/static/css/3316adebd22c8ace.css",revision:"3316adebd22c8ace"},{url:"/_next/static/css/b51080f7906cc7f5.css",revision:"b51080f7906cc7f5"},{url:"/_next/static/css/bdc81972d694d3a9.css",revision:"bdc81972d694d3a9"},{url:"/_next/static/css/d0f590c81109563a.css",revision:"d0f590c81109563a"},{url:"/_next/static/css/d772e88d7cbf2af1.css",revision:"d772e88d7cbf2af1"},{url:"/_next/static/css/d9757b29fb0fe634.css",revision:"d9757b29fb0fe634"},{url:"/_next/static/css/dc591582c27d0062.css",revision:"dc591582c27d0062"},{url:"/_next/static/css/dc65c80acbe9da9f.css",revision:"dc65c80acbe9da9f"},{url:"/_next/static/media/ali-red-envelope.a19dcfa6.jpg",revision:"a26c061c271cba29599a401b713f7ce3"},{url:"/_next/static/media/angular.d848aaec.svg",revision:"97a53cbfcdfd5b5d04540aafbb9c7d43"},{url:"/_next/static/media/ant-design.e83191e4.svg",revision:"f96f7694d449ce420ac40081f1a25e28"},{url:"/_next/static/media/arco-design.cd8b55e3.png",revision:"026cbd6b7a9bb736d1f250d058619003"},{url:"/_next/static/media/fluent-design.d32d1147.jpg",revision:"c3c139c1f2eeec81bd0f13ea89a0c51d"},{url:"/_next/static/media/material-design.289ad101.png",revision:"b84ecd55dacf438be1b44c21b2aae4f7"},{url:"/_next/static/media/nest.js.76342a08.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/_next/static/media/next.js.3f9181a3.png",revision:"30ca0bf83ce1907a388e089e10d6da2b"},{url:"/_next/static/media/nuxt.js.8259cac5.svg",revision:"b0f8a98a7817e0b9dd6f80d055954bd8"},{url:"/_next/static/media/semi-design.f1faf5ad.png",revision:"3fab72e546efa6190909bbcaef34fcd2"},{url:"/_next/static/media/tople-restaurant.86300ccc.png",revision:"391c6b34e04234ac38567ab5800d95a4"},{url:"/_next/static/media/undraw_analytics_re_dkf8.16faef60.svg",revision:"571e5228989f6754503722a80c477de3"},{url:"/_next/static/media/undraw_blog_post_re_fy5x.3cda16ea.svg",revision:"8741bc19bffccd597675291604c6e5d8"},{url:"/_next/static/media/undraw_contact_us_re_4qqt.4595ae9e.svg",revision:"0de10159413020111aac331bf7d7b599"},{url:"/_next/static/media/undraw_design_components_9vy6.c001a2e5.svg",revision:"bf2671750b1a44bf2ed669080f777653"},{url:"/_next/static/media/undraw_designer_re_5v95.65929b98.svg",revision:"deeeebb24da5e6ef81f322c62a0db960"},{url:"/_next/static/media/undraw_dev_productivity_re_fylf.cc791672.svg",revision:"0878026a9df8fb02d4a1aadc56edd602"},{url:"/_next/static/media/undraw_developer_activity_re_39tg.6e5e4455.svg",revision:"2aef87a4360db3f79669bfe9b12c166e"},{url:"/_next/static/media/undraw_empty_re_opql.c91519ba.svg",revision:"790973daeab4962c1624daab921e4dc0"},{url:"/_next/static/media/undraw_engineering_team_a7n2.c981b1c3.svg",revision:"ab255385e052458656712776fd7e3553"},{url:"/_next/static/media/undraw_maintenance_re_59vn.d6d0d183.svg",revision:"66b95d74c1fd5bb9a022c18f7bb92203"},{url:"/_next/static/media/undraw_next_js_-8-g5m.7d2e18ea.svg",revision:"1c8ab4bc263bbc9b107566beb3a90594"},{url:"/_next/static/media/undraw_nuxt_js_0fq9.fe528a07.svg",revision:"4dad7b2e98e785105ff597593cfb466c"},{url:"/_next/static/media/undraw_page_not_found_re_e9o6.4bd2f713.svg",revision:"f56ce81b2cad51feb7c8b1478d10e0cb"},{url:"/_next/static/media/undraw_proud_coder_re_exuy.979c0549.svg",revision:"264cddb56283816b70aec97c201a5786"},{url:"/_next/static/media/undraw_qa_engineers_dg-5-p.2a5b3be6.svg",revision:"97c82272b08ca93eb29107eda2dc6d1f"},{url:"/_next/static/media/undraw_react_y-7-wq.1ac05cd7.svg",revision:"50e0c9e7cfc74ca75adb53293eba002f"},{url:"/_next/static/media/undraw_services_re_hu5n.de083392.svg",revision:"8349626784bca50e3f9c06dedbaabd56"},{url:"/_next/static/media/undraw_software_engineer_re_tnjc.c251f4ed.svg",revision:"d471b92c41a37420f0433ef2a14f3618"},{url:"/_next/static/media/undraw_solution_mindset_re_57bf.1d3b96b8.svg",revision:"f221bd37f3f733ba2eeed9310082d5c1"},{url:"/_next/static/media/undraw_team_collaboration_re_ow29.5c81ef87.svg",revision:"4fff1cca67abb75938728db1340cf4ef"},{url:"/_next/static/media/undraw_teamwork_hpdk.ae05862c.svg",revision:"c80651496911d46cbb4634aa62af5566"},{url:"/_next/static/media/undraw_under_construction_-46-pa.78f7b58c.svg",revision:"54135d55a98cb3a77a8f8b52fcdbee1b"},{url:"/_next/static/media/uni.4a7f1e85.png",revision:"aaa661f96607623063c0a9c2bee45c69"},{url:"/_next/static/media/vue.4cf53b88.png",revision:"cf23526f451784ff137f161b8fe18d5a"},{url:"/_next/static/media/web-evo.65f0ba8d.png",revision:"26bea1d809a8e2c1667426660c2ff597"},{url:"/ads.txt",revision:"70ee876b2bb58899fb5634ad5a59e031"},{url:"/codelabs/first-flutter-app.md",revision:"d13057c3dcd446ea5b9837206b9797f9"},{url:"/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"/favicon.png",revision:"dccf457c989915e9396922c0b11c4c83"},{url:"/googlec9753c531853faac.html",revision:"be33d1fbbf6462ba068c3d19b35ffc57"},{url:"/logo192.png",revision:"f4cab382093036c7c8ef08f9576ff03f"},{url:"/logo512.png",revision:"31a2ca9435c87bde268f416380b047a6"},{url:"/manifest.json",revision:"c8cb63aa2ec35a2cf541679070f33663"},{url:"/robots.txt",revision:"4a70bbd1367866872375843d7c0f3975"},{url:"/sitemap-0.xml",revision:"38461e29abec88a9610ec2b9473467ea"},{url:"/sitemap.xml",revision:"79602c8545597111a0d4f22a291db832"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
