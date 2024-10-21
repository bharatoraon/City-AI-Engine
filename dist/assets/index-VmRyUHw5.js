import{r as c,u as m,j as e,U as h,S as p,R as g,B as f,C as j,X as b,Y as y,T as v,L as N,a as w,b as C,G as D,c as S,D as u,M as z,d as A,e as E,f as F,g as I}from"./vendor-B8eMG5wo.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const L=({onFileUpload:t})=>{const l=c.useCallback(r=>{console.log("File uploaded:",r[0].name),t()},[t]),{getRootProps:a,getInputProps:n,isDragActive:s}=m({onDrop:l,accept:{"text/csv":[".csv"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/pdf":[".pdf"],"application/geo+json":[".geojson"],"application/x-shapefile":[".shp",".shx",".dbf"]},multiple:!1});return e.jsxs("div",{...a(),className:"border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors",children:[e.jsx("input",{...n()}),e.jsx(h,{className:"mx-auto text-gray-400",size:24}),s?e.jsx("p",{className:"text-sm text-gray-600",children:"Drop the file here ..."}):e.jsx("p",{className:"text-sm text-gray-600",children:"Drag 'n' drop a file here, or click to select"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Supported formats: CSV, XLSX, PDF, GeoJSON, Shapefile (.shp, .shx, .dbf)"})]})},O=()=>{const[t,l]=c.useState([]),[a,n]=c.useState(""),s=c.useRef(null),r=()=>{var o;(o=s.current)==null||o.scrollIntoView({behavior:"smooth"})};c.useEffect(r,[t]);const i=()=>{if(a.trim()){const o={id:Date.now(),text:a,sender:"user"};l(d=>[...d,o]),n(""),setTimeout(()=>{const d={id:Date.now(),text:"I'm processing your request. Here's a placeholder response.",sender:"ai"};l(x=>[...x,d])},1e3)}};return e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex-grow overflow-y-auto mb-4 space-y-4",children:[t.map(o=>e.jsx("div",{className:`flex ${o.sender==="user"?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${o.sender==="user"?"bg-blue-500 text-white":"bg-gray-200 text-gray-800"}`,children:o.text})},o.id)),e.jsx("div",{ref:s})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"text",value:a,onChange:o=>n(o.target.value),onKeyPress:o=>o.key==="Enter"&&i(),placeholder:"Ask about census data...",className:"flex-grow mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("button",{onClick:i,className:"p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors",children:e.jsx(p,{size:20})})]})]})},P=[{name:"Category A",value:400},{name:"Category B",value:300},{name:"Category C",value:200},{name:"Category D",value:278},{name:"Category E",value:189}],T="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json",B=({type:t})=>t==="visualizations"?e.jsxs("div",{className:"h-full",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-800",children:"Data Visualization"}),e.jsx("div",{className:"bg-white rounded-lg shadow-md p-6",children:e.jsx(g,{width:"100%",height:400,children:e.jsxs(f,{data:P,children:[e.jsx(j,{strokeDasharray:"3 3"}),e.jsx(b,{dataKey:"name"}),e.jsx(y,{}),e.jsx(v,{}),e.jsx(N,{}),e.jsx(w,{dataKey:"value",fill:"#4F46E5"})]})})})]}):t==="map"?e.jsxs("div",{className:"h-full",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-800",children:"Geographic Visualization"}),e.jsx("div",{className:"bg-white rounded-lg shadow-md p-6",children:e.jsx(C,{projectionConfig:{scale:147},children:e.jsx(D,{geography:T,children:({geographies:l})=>l.map(a=>e.jsx(S,{geography:a,fill:"#DDD",stroke:"#FFF",style:{default:{outline:"none"},hover:{fill:"#4F46E5",outline:"none"},pressed:{outline:"none"}}},a.rsmKey))})})})]}):null,M=({data:t})=>{if(!t||t.length===0)return null;const l=Object.keys(t[0]);return e.jsx("div",{className:"overflow-x-auto shadow-md rounded-lg",children:e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{className:"bg-blue-500 text-white",children:e.jsx("tr",{children:l.map(a=>e.jsx("th",{className:"py-3 px-4 text-left",children:a},a))})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:t.map((a,n)=>e.jsx("tr",{className:n%2===0?"bg-gray-50":"bg-white",children:l.map(s=>e.jsx("td",{className:"py-2 px-4",children:a[s]},`${n}-${s}`))},n))})]})})};function R(){const[t,l]=c.useState("chat"),[a,n]=c.useState(!1),s={chat:z,visualizations:A,map:E,table:F},r=()=>{switch(t){case"chat":return e.jsx(O,{});case"visualizations":case"map":return e.jsx(B,{type:t});case"table":return e.jsx(M,{data:[{id:1,name:"John Doe",age:30,city:"New York"},{id:2,name:"Jane Smith",age:25,city:"Los Angeles"},{id:3,name:"Bob Johnson",age:35,city:"Chicago"}]});default:return null}};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col",children:[e.jsxs("header",{className:"bg-white shadow-md p-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(u,{className:"text-blue-600 mr-2",size:32}),e.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"City Engine AI"})]}),e.jsx("nav",{className:"flex space-x-2",children:Object.entries(s).map(([i,o])=>e.jsx("button",{className:`p-2 rounded-md transition-colors ${t===i?"bg-blue-100 text-blue-600":"text-gray-600 hover:bg-gray-100"}`,onClick:()=>l(i),children:e.jsx(o,{size:20})},i))})]}),e.jsxs("main",{className:"flex-grow flex p-6 space-x-6",children:[e.jsx("aside",{className:"w-64 bg-white rounded-lg shadow-md p-4",children:e.jsx(L,{onFileUpload:()=>n(!0)})}),e.jsx("section",{className:"flex-grow bg-white rounded-lg shadow-md p-6",children:a?r():e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-600",children:[e.jsx(u,{size:48,className:"mb-4 text-blue-500"}),e.jsx("p",{className:"text-xl font-semibold mb-2",children:"No Data Uploaded"}),e.jsx("p",{className:"text-center",children:"Please upload a census data file to begin your analysis."})]})})]}),e.jsx("footer",{className:"bg-white shadow-md p-4 text-center text-gray-600",children:"© 2024 City Engine AI. All rights reserved."})]})}I(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(R,{})}));
