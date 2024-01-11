import t from"axios";class e{path="/subscriptions";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t||{},e)}}class s{path="/payments";context;constructor(t){this.context=t}payReSubscription(t,e){return this.context.post(`${this.path}/do`,t,e)}paySubscription(t,e){return this.context.post(`${this.path}/doSingle`,t,e)}calculate(t,e){return this.context.post(`${this.path}/calculate`,t,e)}calculateContentSets(t,e){return this.context.post(`${this.path}/content-sets/calculate`,t,e)}payContentSets(t,e){return this.context.post(`${this.path}/content-sets/do`,t,e)}}const n="Setplex/External-API-node-SDK 0.0.1 (node "+process.version+"-"+process.arch+")",o={mode:process.env.SETPLEX_API_MODE||"",baseURL:process.env.SETPLEX_API_BASE_URL||"",token:process.env.SETPLEX_API_TOKEN||"",login:process.env.SETPLEX_API_LOGIN||"",headers:{"User-Agent":n}};var r=Object.freeze({__proto__:null,userAgent:n,defaultOptions:o});class i{path="/subscribers";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}getByEmail(t,e){return this.context.post(`${this.path}/get/by-email`,t,e)}info(t,e){return this.context.post(`${this.path}/info`,t,e)}update(t,e){return this.context.post(`${this.path}/update`,t,e)}getSubscriptionContentSets(t,e){return this.context.post(`${this.path}/subscription/content-sets/get`,t,e)}getSubscription(t,e){return this.context.post(`${this.path}/subscription/get`,t,e)}unassignDevice(t,e,s){return this.context.post(`${this.path}/devices/${e}/unassign`,t,s)}cancelSubscription(t,e){return this.context.post(`${this.path}/subscription/cancel`,t,e)}autoPaySubscription(t,e){return this.context.post(`${this.path}/subscription/autopay`,t,e)}}const{defaultOptions:{headers:a}}=r,c=t.create({headers:{...a}});class h extends Error{constructor(t){super(t),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}class p{path="/payment-form";context;constructor(t){this.context=t}getAvailable(t,e){return this.context.post(`${this.path}/payment-systems`,t,e)}getOptions(t,e){return this.context.post(`${this.path}/options`,t,e)}addFlow(t,e){return this.context.post(`${this.path}/options/add-flow`,t,e)}}class E{path="/payment-method";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}add(t,e){return this.context.post(`${this.path}/add`,t,e)}setDefaultWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/default`,t,s)}deleteWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/delete`,t,s)}createCreditCard(t,e){return this.context.post("/creditcards/create",t,e)}setDefaultCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/default`,t,s)}deleteCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/delete`,t,s)}}class u{path="/dictionaries";context;constructor(t){this.context=t}getCountries(t,e){return this.context.post(`${this.path}/countries/get`,t||{},e)}getLanguages(t,e){return this.context.post(`${this.path}/languages/get`,t||{},e)}getCurrencies(t,e){return this.context.post(`${this.path}/currencies/get`,t||{},e)}}const{defaultOptions:{token:A,login:d,baseURL:P}}=r;class l{config;logger;subscribers;payments;subscriptions;paymentSystems;paymentMethods;dictionaries;constructor(t){this.config={baseURL:t?.baseURL||P,token:t?.token||A,login:t?.login||d},this.subscribers=new i(this),this.payments=new s(this),this.subscriptions=new e(this),this.paymentSystems=new p(this),this.paymentMethods=new E(this),this.dictionaries=new u(this)}send(){const{token:t,login:e}=this.config;return c.interceptors.request.use((function(s){if(Object.prototype.hasOwnProperty.call(s,"data")){const{data:n}=s;s.data={...n,auth:{token:t,login:e,...n.auth}}}else s.data={auth:{token:t,login:e}};return s})),c}async post(t,e,s){try{return(await this.send().post(`${this.config.baseURL}${t}`,e,s))?.data}catch(t){throw new h(t)}}async get(t,e){try{return(await this.send().get(`${this.config.baseURL}${t}`,e))?.data}catch(t){throw new h(t)}}}var N,T,R,x,g,I,S,O;!function(t){t.AUTHORIZE_NET="AUTHORIZE_NET",t.CASH="CASH",t.CHECK="CHECK",t.NEWEBPAY="NEWEBPAY",t.PAYPAL="PAYPAL",t.TELR="TELR",t.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",t.GR4VY_GATEWAY="GR4VY_GATEWAY"}(N||(N={})),function(t){t.AUTHORIZE_NET_MANUAL="AUTHORIZE_NET_MANUAL",t.WESTERN_UNION="WESTERN_UNION",t.MONEY_GRAM="MONEY_GRAM",t.PAYPAL_EXPRESS="PAYPAL_EXPRESS"}(T||(T={})),function(t){t.RENT="RENT",t.PURCHASE="PURCHASE"}(R||(R={})),function(t){t.ACTIVE="ACTIVE",t.EXPIRED="EXPIRED",t.VOIDED="VOIDED",t.OVERRIDDEN="OVERRIDDEN",t.SKIPPED="SKIPPED",t.ON_HOLD="ON_HOLD",t.PENDING="PENDING"}(x||(x={})),function(t){t.PENDING="PENDING",t.TOA_PENDING="TOA_PENDING",t.ACTIVE="ACTIVE",t.UPCOMING="UPCOMING",t.CANCELLED="CANCELLED",t.VOIDED="VOIDED",t.EXPIRED="EXPIRED"}(g||(g={})),function(t){t.OVERRIDDEN="Overridden",t.SKIPPED="Skipped"}(I||(I={})),function(t){t.GR4VY_GATEWAY="GR4VY_GATEWAY",t.AUTHORIZE_NET="AUTHORIZE_NET",t.CASH="CASH",t.CHECK="CHECK",t.NEWEBPAY="NEWEBPAY",t.PAYPAL="PAYPAL",t.TELR="TELR",t.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS"}(S||(S={})),function(t){t.DAY="DAY",t.MONTH="MONTH",t.YEAR="YEAR"}(O||(O={}));export{l as NoraAPI,R as NoraAPIAddOnType,T as NoraAPIExternalPaymentSystemTypes,N as NoraAPIPaymentSystemTypes,S as NoraAPIPaymentSystems,x as NoraAPISubscriberPaymentStatuses};
//# sourceMappingURL=index.js.map
