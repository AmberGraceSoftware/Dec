"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Dec Introduction",l={unversionedId:"intro",id:"intro",title:"Dec Introduction",description:"Dec is a modern reactive UI library for building declarative, stateful, and",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/AmberGraceSoftware/Dec/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},c={},s=[{value:"Here&#39;s a Hello World written in Dec!",id:"heres-a-hello-world-written-in-dec",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dec-introduction"},"Dec Introduction"),(0,o.kt)("p",null,"Dec is a modern reactive UI library for building declarative, stateful, and\nanimated components that scale for a project's needs."),(0,o.kt)("p",null,"It includes first class support for UI components written entirely in code, as\nwell as UI components that use a template asset, depending on your project's UI asset development pipeline."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Dec is currently in early development, and a stable first release has not been\nfinished or tested..")),(0,o.kt)("p",null,"Stay tuned for a first stable release, guides, and API finalization!\nIn the meantime, feel free to share awareness about the project and provide\nfeedback!"),(0,o.kt)("p",null,"For a sneak peak at the project's paradigm, checkout the\n",(0,o.kt)("a",{parentName:"p",href:"../api/Dec"},"API Section!")),(0,o.kt)("h3",{id:"heres-a-hello-world-written-in-dec"},"Here's a Hello World written in Dec!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Create our Dec application\nlocal App = Dec.New("ScreenGui", {\n    ResetOnSpawn = false\n}, {\n    HelloLabel = Dec.New("TextLabel", {\n        Text = "Hello, World!",\n        TextColor3 = Color3.fromHex("000"),\n        TextStrokeTransparency = 1\n        BackgroundColor3 = Color3.fromHex("ddd"),\n        Position = UDim2.fromScale(0.5, 0.5),\n        AnchorPoint = Vector2.new(0.5, 0.5),\n        Size = UDim2.fromScale(2, 1),\n        SizeConstraint = Enum.SizeConstraint.RelativeYY,\n    }, {\n        RoundedRect = Dec.New("UICorner", {\n            CornerRadius = UDim.new(0.2, 0)\n        })\n    })\n})\n\n-- Render our Dec application under PlayerGui\nlocal PlayerGui = game.Players.LocalPlayer:WaitForChild("PlayerGui")\nlocal root = Dec.Root(PlayerGui)\nroot.Render(App)\n')))}d.isMDXComponent=!0}}]);