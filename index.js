import t,{AxiosError as e}from"axios";class s{path="/subscriptions";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t||{},e)}getPlans(t,e){return this.context.post(`${this.path}/plans/get`,t||{},e)}}class n{path="/payments";context;constructor(t){this.context=t}payReSubscription(t,e){return this.context.post(`${this.path}/do`,t,e)}paySubscription(t,e){return this.context.post(`${this.path}/doSingle`,t,e)}calculate(t,e){return this.context.post(`${this.path}/calculate`,t,e)}calculateContentSets(t,e){return this.context.post(`${this.path}/content-sets/calculate`,t,e)}payContentSets(t,e){return this.context.post(`${this.path}/content-sets/do`,t,e)}payAdditions(t,e){return this.context.post(`${this.path}/additions/do`,t,e)}calculateAdditions(t,e){return this.context.post(`${this.path}/additions/calculate`,t,e)}}const o="Setplex/External-API-node-SDK 0.0.1 (node "+process.version+"-"+process.arch+")",i={mode:process.env.SETPLEX_API_MODE||"",baseURL:process.env.SETPLEX_API_BASE_URL||"",token:process.env.SETPLEX_API_TOKEN||"",login:process.env.SETPLEX_API_LOGIN||"",headers:{"User-Agent":o}};var r=Object.freeze({__proto__:null,userAgent:o,defaultOptions:i});class a{path="/subscribers";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}getByEmail(t,e){return this.context.post(`${this.path}/search`,t,e)}info(t,e){return this.context.post(`${this.path}/info`,t,e)}update(t,e){return this.context.post(`${this.path}/update`,t,e)}getSubscriptionContentSets(t,e){return this.context.post(`${this.path}/subscription/content-sets/get`,t,e)}getSubscription(t,e){return this.context.post(`${this.path}/subscription/get`,t,e)}unassignDevice(t,e,s){return this.context.post(`${this.path}/devices/${e}/unassign`,t,s)}cancelSubscription(t,e){return this.context.post(`${this.path}/subscription/cancel`,t,e)}autoPaySubscription(t,e){return this.context.post(`${this.path}/subscription/autopay`,t,e)}getSubscriptionPartnerProducts(t,e){return this.context.post(`${this.path}/subscription/partner-products/get`,t,e)}validateUsername(t,e){return this.context.post(`${this.path}/validate/username`,t,e)}}const{defaultOptions:{headers:c}}=r,h=t.create({headers:{...c}});class p extends Error{response={status:0};constructor(t){if(Object.prototype.hasOwnProperty.call(t,"name")&&(t.name=""),super(t),this.name="NoraApiError",t instanceof e){const{response:e}=t;e&&(this.response.status=e.status)}Error.captureStackTrace(this,this.constructor)}}class u{path="/payment-form";context;constructor(t){this.context=t}getAvailable(t,e){return this.context.post(`${this.path}/payment-systems`,t,e)}getOptions(t,e){return this.context.post(`${this.path}/options`,t,e)}addFlow(t,e){return this.context.post(`${this.path}/options/add-flow`,t,e)}checkResult(t,e){return this.context.post(`${this.path}/check`,t,e)}}class E{path="/payment-method";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}add(t,e){return this.context.post(`${this.path}/add`,t,e)}setDefaultWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/default`,t,s)}deleteWallet(t,e,s){return this.context.post(`${this.path}/wallet/${e}/delete`,t,s)}createCreditCard(t,e){return this.context.post("/creditcards/create",t,e)}setDefaultCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/default`,t,s)}deleteCreditCard(t,e,s){return this.context.post(`${this.path}/creditcard/${e}/delete`,t,s)}initTrueMoney(t,e){return this.context.post(`${this.path}/wallet/true-money/init`,t,e)}bindTrueMoney(t,e){return this.context.post(`${this.path}/wallet/true-money/bind`,t,e)}}class A{path="/dictionaries";context;constructor(t){this.context=t}getCountries(t,e){return this.context.post(`${this.path}/countries/get`,t||{},e)}getLanguages(t,e){return this.context.post(`${this.path}/languages/get`,t||{},e)}getCurrencies(t,e){return this.context.post(`${this.path}/currencies/get`,t||{},e)}}class P{path="/content-rent-prolongations";context;constructor(t){this.context=t}get(t,e){return this.context.post(`${this.path}/get`,t,e)}toggleAutopay(t,e){return this.context.post(`${this.path}/autopay`,t,e)}}const{defaultOptions:{token:l,login:d,baseURL:N}}=r;class T{config;logger;subscribers;payments;subscriptions;paymentSystems;paymentMethods;dictionaries;contentRent;constructor(t){this.config={baseURL:t?.baseURL||N,token:t?.token||l,login:t?.login||d};const e=this.config.token,o=this.config.login;h.interceptors.request.use((function(t){if(Object.prototype.hasOwnProperty.call(t,"data")){const{data:s}=t;t.data={...s,auth:{token:e,login:o,...s.auth}}}else t.data={auth:{token:e,login:o}};return t})),this.subscribers=new a(this),this.payments=new n(this),this.subscriptions=new s(this),this.paymentSystems=new u(this),this.paymentMethods=new E(this),this.dictionaries=new A(this),this.contentRent=new P(this)}send(){return h}async post(t,e,s){try{const n=s?s?.baseURL:null;return(await this.send().post(`${n||this.config.baseURL}${t}`,e,s))?.data}catch(t){throw new p(t)}}async get(t,e){try{const s=e?e?.baseURL:null;return(await this.send().get(`${s||this.config.baseURL}${t}`,e))?.data}catch(t){throw new p(t)}}}var I,R,x,S,g,O,y,$,C,_,D,L;!function(t){t.AUTHORIZE_NET="AUTHORIZE_NET",t.CASH="CASH",t.CHECK="CHECK",t.NEWEBPAY="NEWEBPAY",t.PAYPAL="PAYPAL",t.TELR="TELR",t.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",t.GR4VY_GATEWAY="GR4VY_GATEWAY",t.CCPP="CCPP",t.TRUE_MONEY="TRUE_MONEY"}(I||(I={})),function(t){t.AUTHORIZE_NET_MANUAL="AUTHORIZE_NET_MANUAL",t.WESTERN_UNION="WESTERN_UNION",t.MONEY_GRAM="MONEY_GRAM",t.PAYPAL_EXPRESS="PAYPAL_EXPRESS"}(R||(R={})),function(t){t.RENT="RENT",t.PURCHASE="PURCHASE"}(x||(x={})),function(t){t.ACTIVE="ACTIVE",t.EXPIRED="EXPIRED",t.VOIDED="VOIDED",t.OVERRIDDEN="OVERRIDDEN",t.SKIPPED="SKIPPED",t.ON_HOLD="ON_HOLD",t.PENDING="PENDING"}(S||(S={})),function(t){t.PENDING="PENDING",t.TOA_PENDING="TOA_PENDING",t.ACTIVE="ACTIVE",t.UPCOMING="UPCOMING",t.CANCELLED="CANCELLED",t.VOIDED="VOIDED",t.EXPIRED="EXPIRED"}(g||(g={})),function(t){t.OVERRIDDEN="Overridden",t.SKIPPED="Skipped"}(O||(O={})),function(t){t.GR4VY_GATEWAY="GR4VY_GATEWAY",t.AUTHORIZE_NET="AUTHORIZE_NET",t.CASH="CASH",t.CHECK="CHECK",t.NEWEBPAY="NEWEBPAY",t.PAYPAL="PAYPAL",t.TELR="TELR",t.EXTERNAL_PAYMENTS="EXTERNAL_PAYMENTS",t.CCPP="CCPP",t.TRUE_MONEY="TRUE_MONEY"}(y||(y={})),function(t){t.DAY="DAY",t.MONTH="MONTH",t.YEAR="YEAR"}($||($={})),function(t){t.BOX="BOX",t.FEE="FEE",t.SHIPPING="SHIPPING",t.EQUIPMENT="EQUIPMENT"}(C||(C={})),function(t){t.STB="STB",t.PC="PC",t.IOS="iOS",t.ANDROID="Android",t.SAMSUNGTV="SamsungTV",t.OTHERS="Others",t.LG="LG",t.WEB="WEB"}(_||(_={})),function(t){t.PAID="PAID",t.FREEMIUM="FREEMIUM"}(D||(D={})),function(t){t.iQIYI="iQIYI"}(L||(L={}));export{T as NoraAPI,C as NoraAPIAccessoryTypes,x as NoraAPIAddOnType,R as NoraAPIExternalPaymentSystemTypes,I as NoraAPIPaymentSystemTypes,y as NoraAPIPaymentSystems,S as NoraAPISubscriberPaymentStatuses,p as NoraApiError};
//# sourceMappingURL=index.js.map
