"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var e=t(require("axios"));class s{path="/subscriptions";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t||{},e)}}class n{path="/payments";context;constructor(t){this.context=t}payReSubscription(t,e){return this.context.post(`${this.path}/do`,t,e)}paySubscription(t,e){return this.context.post(`${this.path}/doSingle`,t,e)}calculate(t,e){return this.context.post(`${this.path}/calculate`,t,e)}calculateContentSets(t,e){return this.context.post(`${this.path}/content-sets/calculate`,t,e)}payContentSets(t,e){return this.context.post(`${this.path}/content-sets/do`,t,e)}}const o="Setplex/External-API-node-SDK 0.0.1 (node "+process.version+"-"+process.arch+")",r={mode:process.env.SETPLEX_API_MODE||"",baseURL:process.env.SETPLEX_API_BASE_URL||"",token:process.env.SETPLEX_API_TOKEN||"",login:process.env.SETPLEX_API_LOGIN||"",headers:{"User-Agent":o}};var a=Object.freeze({__proto__:null,userAgent:o,defaultOptions:r});class i{path="/subscribers";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}getByEmail(t,e){return this.context.post(`${this.path}/search`,t,e)}info(t,e){return this.context.post(`${this.path}/info`,t,e)}update(t,e){return this.context.post(`${this.path}/update`,t,e)}getSubscriptionContentSets(t,e){return this.context.post(`${this.path}/subscription/content-sets/get`,t,e)}getSubscription(t,e){return this.context.post(`${this.path}/subscription/get`,t,e)}unassignDevice(t,e,s){return this.context.post(`${this.path}/devices/${e}/unassign`,t,s)}cancelSubscription(t,e){return this.context.post(`${this.path}/subscription/cancel`,t,e)}autoPaySubscription(t,e){return this.context.post(`${this.path}/subscription/autopay`,t,e)}}const{defaultOptions:{headers:c}}=a,p=e.create({headers:{...c}});class h extends Error{constructor(t){super(t),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}class E{path="/payment-form";context;constructor(t){this.context=t}getAvailable(t,e){return this.context.post(`${this.path}/payment-systems`,t,e)}getOptions(t,e){return this.context.post(`${this.path}/options`,t,e)}addFlow(t,e){return this.context.post(`${this.path}/options/add-flow`,t,e)}}class u{path="/payment-method";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}add(t,e){return this.context.post(`${this.path}/add`,t,e)}setDefaultWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/default`,t,s)}deleteWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/delete`,t,s)}createCreditCard(t,e){return this.context.post("/creditcards/create",t,e)}setDefaultCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/default`,t,s)}deleteCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/delete`,t,s)}}class A{path="/dictionaries";context;constructor(t){this.context=t}getCountries(t,e){return this.context.post(`${this.path}/countries/get`,t||{},e)}getLanguages(t,e){return this.context.post(`${this.path}/languages/get`,t||{},e)}getCurrencies(t,e){return this.context.post(`${this.path}/currencies/get`,t||{},e)}}const{defaultOptions:{token:P,login:d,baseURL:N}}=a;var l,x,y,I,S,T,R,g;exports.NoraAPIPaymentSystemTypes=void 0,(l=exports.NoraAPIPaymentSystemTypes||(exports.NoraAPIPaymentSystemTypes={})).AUTHORIZE_NET="AUTHORIZE_NET",l.CASH="CASH",l.CHECK="CHECK",l.NEWEBPAY="NEWEBPAY",l.PAYPAL="PAYPAL",l.TELR="TELR",l.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",l.GR4VY_GATEWAY="GR4VY_GATEWAY",l.CCPP="CCPP",exports.NoraAPIExternalPaymentSystemTypes=void 0,(x=exports.NoraAPIExternalPaymentSystemTypes||(exports.NoraAPIExternalPaymentSystemTypes={})).AUTHORIZE_NET_MANUAL="AUTHORIZE_NET_MANUAL",x.WESTERN_UNION="WESTERN_UNION",x.MONEY_GRAM="MONEY_GRAM",x.PAYPAL_EXPRESS="PAYPAL_EXPRESS",exports.NoraAPIAddOnType=void 0,(y=exports.NoraAPIAddOnType||(exports.NoraAPIAddOnType={})).RENT="RENT",y.PURCHASE="PURCHASE",exports.NoraAPISubscriberPaymentStatuses=void 0,(I=exports.NoraAPISubscriberPaymentStatuses||(exports.NoraAPISubscriberPaymentStatuses={})).ACTIVE="ACTIVE",I.EXPIRED="EXPIRED",I.VOIDED="VOIDED",I.OVERRIDDEN="OVERRIDDEN",I.SKIPPED="SKIPPED",I.ON_HOLD="ON_HOLD",I.PENDING="PENDING",function(t){t.PENDING="PENDING",t.TOA_PENDING="TOA_PENDING",t.ACTIVE="ACTIVE",t.UPCOMING="UPCOMING",t.CANCELLED="CANCELLED",t.VOIDED="VOIDED",t.EXPIRED="EXPIRED"}(S||(S={})),function(t){t.OVERRIDDEN="Overridden",t.SKIPPED="Skipped"}(T||(T={})),exports.NoraAPIPaymentSystems=void 0,(R=exports.NoraAPIPaymentSystems||(exports.NoraAPIPaymentSystems={})).GR4VY_GATEWAY="GR4VY_GATEWAY",R.AUTHORIZE_NET="AUTHORIZE_NET",R.CASH="CASH",R.CHECK="CHECK",R.NEWEBPAY="NEWEBPAY",R.PAYPAL="PAYPAL",R.TELR="TELR",R.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",R.CCPP="CCPP",function(t){t.DAY="DAY",t.MONTH="MONTH",t.YEAR="YEAR"}(g||(g={})),exports.NoraAPI=class{config;logger;subscribers;payments;subscriptions;paymentSystems;paymentMethods;dictionaries;constructor(t){this.config={baseURL:t?.baseURL||N,token:t?.token||P,login:t?.login||d},this.subscribers=new i(this),this.payments=new n(this),this.subscriptions=new s(this),this.paymentSystems=new E(this),this.paymentMethods=new u(this),this.dictionaries=new A(this)}send(){const{token:t,login:e}=this.config;return p.interceptors.request.use((function(s){if(Object.prototype.hasOwnProperty.call(s,"data")){const{data:n}=s;s.data={...n,auth:{token:t,login:e,...n.auth}}}else s.data={auth:{token:t,login:e}};return s})),p}async post(t,e,s){try{return(await this.send().post(`${this.config.baseURL}${t}`,e,s))?.data}catch(t){throw new h(t)}}async get(t,e){try{return(await this.send().get(`${this.config.baseURL}${t}`,e))?.data}catch(t){throw new h(t)}}};
//# sourceMappingURL=index.cjs.map
