"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var e=t(require("axios"));class s{path="/subscriptions";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t||{},e)}getPlans(t,e){return this.context.post(`${this.path}/plans/get`,t||{},e)}}class o{path="/payments";context;constructor(t){this.context=t}payReSubscription(t,e){return this.context.post(`${this.path}/do`,t,e)}paySubscription(t,e){return this.context.post(`${this.path}/doSingle`,t,e)}calculate(t,e){return this.context.post(`${this.path}/calculate`,t,e)}calculateContentSets(t,e){return this.context.post(`${this.path}/content-sets/calculate`,t,e)}payContentSets(t,e){return this.context.post(`${this.path}/content-sets/do`,t,e)}}const n="Setplex/External-API-node-SDK 0.0.1 (node "+process.version+"-"+process.arch+")",r={mode:process.env.SETPLEX_API_MODE||"",baseURL:process.env.SETPLEX_API_BASE_URL||"",token:process.env.SETPLEX_API_TOKEN||"",login:process.env.SETPLEX_API_LOGIN||"",headers:{"User-Agent":n}};var a=Object.freeze({__proto__:null,userAgent:n,defaultOptions:r});class i{path="/subscribers";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}getByEmail(t,e){return this.context.post(`${this.path}/search`,t,e)}info(t,e){return this.context.post(`${this.path}/info`,t,e)}update(t,e){return this.context.post(`${this.path}/update`,t,e)}getSubscriptionContentSets(t,e){return this.context.post(`${this.path}/subscription/content-sets/get`,t,e)}getSubscription(t,e){return this.context.post(`${this.path}/subscription/get`,t,e)}unassignDevice(t,e,s){return this.context.post(`${this.path}/devices/${e}/unassign`,t,s)}cancelSubscription(t,e){return this.context.post(`${this.path}/subscription/cancel`,t,e)}autoPaySubscription(t,e){return this.context.post(`${this.path}/subscription/autopay`,t,e)}}const{defaultOptions:{headers:c}}=a,p=e.create({headers:{...c}});class h extends Error{constructor(t){super(t),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}class E{path="/payment-form";context;constructor(t){this.context=t}getAvailable(t,e){return this.context.post(`${this.path}/payment-systems`,t,e)}getOptions(t,e){return this.context.post(`${this.path}/options`,t,e)}addFlow(t,e){return this.context.post(`${this.path}/options/add-flow`,t,e)}checkResult(t,e){return this.context.post(`${this.path}/check`,t,e)}}class u{path="/payment-method";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}add(t,e){return this.context.post(`${this.path}/add`,t,e)}setDefaultWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/default`,t,s)}deleteWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/delete`,t,s)}createCreditCard(t,e){return this.context.post("/creditcards/create",t,e)}setDefaultCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/default`,t,s)}deleteCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/delete`,t,s)}}class P{path="/dictionaries";context;constructor(t){this.context=t}getCountries(t,e){return this.context.post(`${this.path}/countries/get`,t||{},e)}getLanguages(t,e){return this.context.post(`${this.path}/languages/get`,t||{},e)}getCurrencies(t,e){return this.context.post(`${this.path}/currencies/get`,t||{},e)}}const{defaultOptions:{token:A,login:N,baseURL:d}}=a;var I,T,x,l,S,y,R,O,g,C,_;exports.NoraAPIPaymentSystemTypes=void 0,(I=exports.NoraAPIPaymentSystemTypes||(exports.NoraAPIPaymentSystemTypes={})).AUTHORIZE_NET="AUTHORIZE_NET",I.CASH="CASH",I.CHECK="CHECK",I.NEWEBPAY="NEWEBPAY",I.PAYPAL="PAYPAL",I.TELR="TELR",I.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",I.GR4VY_GATEWAY="GR4VY_GATEWAY",I.CCPP="CCPP",I.TRUE_MONEY="TRUE_MONEY",exports.NoraAPIExternalPaymentSystemTypes=void 0,(T=exports.NoraAPIExternalPaymentSystemTypes||(exports.NoraAPIExternalPaymentSystemTypes={})).AUTHORIZE_NET_MANUAL="AUTHORIZE_NET_MANUAL",T.WESTERN_UNION="WESTERN_UNION",T.MONEY_GRAM="MONEY_GRAM",T.PAYPAL_EXPRESS="PAYPAL_EXPRESS",exports.NoraAPIAddOnType=void 0,(x=exports.NoraAPIAddOnType||(exports.NoraAPIAddOnType={})).RENT="RENT",x.PURCHASE="PURCHASE",exports.NoraAPISubscriberPaymentStatuses=void 0,(l=exports.NoraAPISubscriberPaymentStatuses||(exports.NoraAPISubscriberPaymentStatuses={})).ACTIVE="ACTIVE",l.EXPIRED="EXPIRED",l.VOIDED="VOIDED",l.OVERRIDDEN="OVERRIDDEN",l.SKIPPED="SKIPPED",l.ON_HOLD="ON_HOLD",l.PENDING="PENDING",function(t){t.PENDING="PENDING",t.TOA_PENDING="TOA_PENDING",t.ACTIVE="ACTIVE",t.UPCOMING="UPCOMING",t.CANCELLED="CANCELLED",t.VOIDED="VOIDED",t.EXPIRED="EXPIRED"}(S||(S={})),function(t){t.OVERRIDDEN="Overridden",t.SKIPPED="Skipped"}(y||(y={})),exports.NoraAPIPaymentSystems=void 0,(R=exports.NoraAPIPaymentSystems||(exports.NoraAPIPaymentSystems={})).GR4VY_GATEWAY="GR4VY_GATEWAY",R.AUTHORIZE_NET="AUTHORIZE_NET",R.CASH="CASH",R.CHECK="CHECK",R.NEWEBPAY="NEWEBPAY",R.PAYPAL="PAYPAL",R.TELR="TELR",R.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",R.CCPP="CCPP",R.TRUE_MONEY="TRUE_MONEY",function(t){t.DAY="DAY",t.MONTH="MONTH",t.YEAR="YEAR"}(O||(O={})),exports.NoraAPIAccessoryTypes=void 0,(g=exports.NoraAPIAccessoryTypes||(exports.NoraAPIAccessoryTypes={})).BOX="BOX",g.FEE="FEE",g.SHIPPING="SHIPPING",g.EQUIPMENT="EQUIPMENT",function(t){t.STB="STB",t.PC="PC",t.IOS="iOS",t.ANDROID="Android",t.SAMSUNGTV="SamsungTV",t.OTHERS="Others",t.LG="LG",t.WEB="WEB"}(C||(C={})),function(t){t.PAID="PAID",t.FREEMIUM="FREEMIUM"}(_||(_={})),exports.NoraAPI=class{config;logger;subscribers;payments;subscriptions;paymentSystems;paymentMethods;dictionaries;constructor(t){this.config={baseURL:t?.baseURL||d,token:t?.token||A,login:t?.login||N},this.subscribers=new i(this),this.payments=new o(this),this.subscriptions=new s(this),this.paymentSystems=new E(this),this.paymentMethods=new u(this),this.dictionaries=new P(this)}send(){const{token:t,login:e}=this.config;return p.interceptors.request.use((function(s){if(Object.prototype.hasOwnProperty.call(s,"data")){const{data:o}=s;s.data={...o,auth:{token:t,login:e,...o.auth}}}else s.data={auth:{token:t,login:e}};return s})),p}async post(t,e,s){try{return(await this.send().post(`${this.config.baseURL}${t}`,e,s))?.data}catch(t){throw new h(t)}}async get(t,e){try{return(await this.send().get(`${this.config.baseURL}${t}`,e))?.data}catch(t){throw new h(t)}}};
//# sourceMappingURL=index.cjs.map
