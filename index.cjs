"use strict";var t=require("axios");function e(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var s=e(t);class o{path="/subscriptions";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t||{},e)}getPlans(t,e){return this.context.post(`${this.path}/plans/get`,t||{},e)}}class n{path="/payments";context;constructor(t){this.context=t}payReSubscription(t,e){return this.context.post(`${this.path}/do`,t,e)}paySubscription(t,e){return this.context.post(`${this.path}/doSingle`,t,e)}calculate(t,e){return this.context.post(`${this.path}/calculate`,t,e)}calculateContentSets(t,e){return this.context.post(`${this.path}/content-sets/calculate`,t,e)}payContentSets(t,e){return this.context.post(`${this.path}/content-sets/do`,t,e)}payAdditions(t,e){return this.context.post(`${this.path}/additions/do`,t,e)}calculateAdditions(t,e){return this.context.post(`${this.path}/additions/calculate`,t,e)}}const r="Setplex/External-API-node-SDK 0.0.1 (node "+process.version+"-"+process.arch+")",i={mode:process.env.SETPLEX_API_MODE||"",baseURL:process.env.SETPLEX_API_BASE_URL||"",token:process.env.SETPLEX_API_TOKEN||"",login:process.env.SETPLEX_API_LOGIN||"",headers:{"User-Agent":r}};var a=Object.freeze({__proto__:null,userAgent:r,defaultOptions:i});class c{path="/subscribers";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}getByEmail(t,e){return this.context.post(`${this.path}/search`,t,e)}info(t,e){return this.context.post(`${this.path}/info`,t,e)}update(t,e){return this.context.post(`${this.path}/update`,t,e)}getSubscriptionContentSets(t,e){return this.context.post(`${this.path}/subscription/content-sets/get`,t,e)}getSubscription(t,e){return this.context.post(`${this.path}/subscription/get`,t,e)}unassignDevice(t,e,s){return this.context.post(`${this.path}/devices/${e}/unassign`,t,s)}cancelSubscription(t,e){return this.context.post(`${this.path}/subscription/cancel`,t,e)}autoPaySubscription(t,e){return this.context.post(`${this.path}/subscription/autopay`,t,e)}getSubscriptionPartnerProducts(t,e){return this.context.post(`${this.path}/subscription/partner-products/get`,t,e)}validateUsername(t,e){return this.context.post(`${this.path}/validate/username`,t,e)}}const{defaultOptions:{headers:p}}=a,h=s.create({headers:{...p}});class u extends Error{response={status:0};constructor(e){if(Object.prototype.hasOwnProperty.call(e,"name")&&(e.name=""),super(e),this.name="NoraApiError",e instanceof t.AxiosError){const{response:t}=e;t&&(this.response.status=t.status)}Error.captureStackTrace(this,this.constructor)}}class E{path="/payment-form";context;constructor(t){this.context=t}getAvailable(t,e){return this.context.post(`${this.path}/payment-systems`,t,e)}getOptions(t,e){return this.context.post(`${this.path}/options`,t,e)}addFlow(t,e){return this.context.post(`${this.path}/options/add-flow`,t,e)}checkResult(t,e){return this.context.post(`${this.path}/check`,t,e)}}class A{path="/payment-method";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}add(t,e){return this.context.post(`${this.path}/add`,t,e)}setDefaultWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/default`,t,s)}deleteWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/delete`,t,s)}createCreditCard(t,e){return this.context.post("/creditcards/create",t,e)}setDefaultCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/default`,t,s)}deleteCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/delete`,t,s)}initTrueMoney(t,e){return this.context.post(`${this.path}/wallet/true-money/init`,t,e)}bindTrueMoney(t,e){return this.context.post(`${this.path}/wallet/true-money/bind`,t,e)}}class P{path="/dictionaries";context;constructor(t){this.context=t}getCountries(t,e){return this.context.post(`${this.path}/countries/get`,t||{},e)}getLanguages(t,e){return this.context.post(`${this.path}/languages/get`,t||{},e)}getCurrencies(t,e){return this.context.post(`${this.path}/currencies/get`,t||{},e)}}class d{path="/content-rent-prolongations";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}toggleAutopay(t,e){return this.context.post(`${this.path}/autopay`,t,e)}}const{defaultOptions:{token:l,login:N,baseURL:x}}=a;var I,y,T,S,R,g,O,m,$,C,_,b;exports.NoraAPIPaymentSystemTypes=void 0,(I=exports.NoraAPIPaymentSystemTypes||(exports.NoraAPIPaymentSystemTypes={})).AUTHORIZE_NET="AUTHORIZE_NET",I.CASH="CASH",I.CHECK="CHECK",I.NEWEBPAY="NEWEBPAY",I.PAYPAL="PAYPAL",I.TELR="TELR",I.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",I.GR4VY_GATEWAY="GR4VY_GATEWAY",I.CCPP="CCPP",I.TRUE_MONEY="TRUE_MONEY",exports.NoraAPIExternalPaymentSystemTypes=void 0,(y=exports.NoraAPIExternalPaymentSystemTypes||(exports.NoraAPIExternalPaymentSystemTypes={})).AUTHORIZE_NET_MANUAL="AUTHORIZE_NET_MANUAL",y.WESTERN_UNION="WESTERN_UNION",y.MONEY_GRAM="MONEY_GRAM",y.PAYPAL_EXPRESS="PAYPAL_EXPRESS",exports.NoraAPIAddOnType=void 0,(T=exports.NoraAPIAddOnType||(exports.NoraAPIAddOnType={})).RENT="RENT",T.PURCHASE="PURCHASE",exports.NoraAPISubscriberPaymentStatuses=void 0,(S=exports.NoraAPISubscriberPaymentStatuses||(exports.NoraAPISubscriberPaymentStatuses={})).ACTIVE="ACTIVE",S.EXPIRED="EXPIRED",S.VOIDED="VOIDED",S.OVERRIDDEN="OVERRIDDEN",S.SKIPPED="SKIPPED",S.ON_HOLD="ON_HOLD",S.PENDING="PENDING",function(t){t.PENDING="PENDING",t.TOA_PENDING="TOA_PENDING",t.ACTIVE="ACTIVE",t.UPCOMING="UPCOMING",t.CANCELLED="CANCELLED",t.VOIDED="VOIDED",t.EXPIRED="EXPIRED"}(R||(R={})),function(t){t.OVERRIDDEN="Overridden",t.SKIPPED="Skipped"}(g||(g={})),exports.NoraAPIPaymentSystems=void 0,(O=exports.NoraAPIPaymentSystems||(exports.NoraAPIPaymentSystems={})).GR4VY_GATEWAY="GR4VY_GATEWAY",O.AUTHORIZE_NET="AUTHORIZE_NET",O.CASH="CASH",O.CHECK="CHECK",O.NEWEBPAY="NEWEBPAY",O.PAYPAL="PAYPAL",O.TELR="TELR",O.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",O.CCPP="CCPP",O.TRUE_MONEY="TRUE_MONEY",function(t){t.DAY="DAY",t.MONTH="MONTH",t.YEAR="YEAR"}(m||(m={})),exports.NoraAPIAccessoryTypes=void 0,($=exports.NoraAPIAccessoryTypes||(exports.NoraAPIAccessoryTypes={})).BOX="BOX",$.FEE="FEE",$.SHIPPING="SHIPPING",$.EQUIPMENT="EQUIPMENT",function(t){t.STB="STB",t.PC="PC",t.IOS="iOS",t.ANDROID="Android",t.SAMSUNGTV="SamsungTV",t.OTHERS="Others",t.LG="LG",t.WEB="WEB"}(C||(C={})),function(t){t.PAID="PAID",t.FREEMIUM="FREEMIUM"}(_||(_={})),function(t){t.iQIYI="iQIYI"}(b||(b={})),exports.NoraAPI=class{config;logger;subscribers;payments;subscriptions;paymentSystems;paymentMethods;dictionaries;contentRent;constructor(t){this.config={baseURL:t?.baseURL||x,token:t?.token||l,login:t?.login||N};const e=this.config.token,s=this.config.login;h.interceptors.request.use((function(t){if(Object.prototype.hasOwnProperty.call(t,"data")){const{data:o}=t;t.data={...o,auth:{token:e,login:s,...o.auth}}}else t.data={auth:{token:e,login:s}};return t})),this.subscribers=new c(this),this.payments=new n(this),this.subscriptions=new o(this),this.paymentSystems=new E(this),this.paymentMethods=new A(this),this.dictionaries=new P(this),this.contentRent=new d(this)}send(){return h}async post(t,e,s){try{const o=s?s?.baseURL:null;return(await this.send().post(`${o||this.config.baseURL}${t}`,e,s))?.data}catch(t){throw new u(t)}}async get(t,e){try{const s=e?e?.baseURL:null;return(await this.send().get(`${s||this.config.baseURL}${t}`,e))?.data}catch(t){throw new u(t)}}},exports.NoraApiError=u;
//# sourceMappingURL=index.cjs.map
