"use strict";(self.webpackChunktinasaurus_openapi=self.webpackChunktinasaurus_openapi||[]).push([[9336],{65947:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"petstore/schemas/cat","title":"Cat","description":"A representation of a cat","source":"@site/docs/petstore/schemas/cat.schema.mdx","sourceDirName":"petstore/schemas","slug":"/petstore/schemas/cat","permalink":"/https://aowendev.github.io/tinasaurus-openapi/fr/docs/petstore/schemas/cat","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"cat","title":"Cat","description":"A representation of a cat","sidebar_label":"Cat","hide_title":true,"hide_table_of_contents":true,"schema":true,"sample":{"id":0,"category":{"id":0,"name":"string","sub":{"prop1":"string"}},"name":"Guru","photoUrls":["string"],"friend":{},"tags":[{"id":0,"name":"string"}],"status":"available","huntingSkill":"adventurous"},"custom_edit_url":null},"sidebar":"openApiSidebar","previous":{"title":"Pets","permalink":"/https://aowendev.github.io/tinasaurus-openapi/fr/docs/petstore/pet"},"next":{"title":"Add a new pet to the store","permalink":"/https://aowendev.github.io/tinasaurus-openapi/fr/docs/petstore/add-pet"}}');var a=i(74848),n=i(28453),s=i(95730),o=i.n(s),p=i(9303);const l={id:"cat",title:"Cat",description:"A representation of a cat",sidebar_label:"Cat",hide_title:!0,hide_table_of_contents:!0,schema:!0,sample:{id:0,category:{id:0,name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{id:0,name:"string"}],status:"available",huntingSkill:"adventurous"},custom_edit_url:null},c=void 0,d={},u=[];function m(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.default,{as:"h1",className:"openapi__heading",children:"Cat"}),"\n",(0,a.jsx)(t.p,{children:"A representation of a cat"}),"\n",(0,a.jsx)(o(),{schema:{"x-tags":["pet"],description:"A representation of a cat",allOf:[{type:"object",required:["name","photoUrls","tags"],discriminator:{propertyName:"petType",mapping:{cat:"circular(Cat)",dog:{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},bee:{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01,default:0}},required:["honeyPerDay"]}],title:"HoneyBee"}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(Pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"},title:"Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:["circular(Cat)",{description:"A representation of a dog",allOf:["circular(Pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}],title:"Dog"},{description:"A representation of a honey bee",allOf:["circular(Pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01,default:0}},required:["honeyPerDay"]}],title:"HoneyBee"}]}},xml:{name:"Pet"},title:"Pet"},{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}],title:"Cat"},schemaType:"response"})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);