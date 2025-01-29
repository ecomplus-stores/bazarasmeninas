(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(t,e,i){"use strict";i(210)},194:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const n=()=>{let n=s.info&&s.info[t];return!!(n&&(e&&(n=n[e]),n&&Object.keys(n).length))&&(i(n),!0)};n()||s.on(`info:${t}`,n)}}))},207:function(t,e,i){"use strict";i(5),i(19);var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},n=i(70),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},208:function(t,e,i){"use strict";var s=i(40),n=i(57),r=i(43),a=i(58),o=i(109),c=i(194);const l=(t,e)=>{const{type:i,value:s}=e;let n;if(s)return n="percentage"===i?t*(100-s)/100:t-s,n>0?n:0};var p={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(n.a)(s.r),i19from:()=>Object(n.a)(s.Gb),i19interestFree:()=>Object(n.a)(s.Ub),i19of:()=>Object(n.a)(s.Gc),i19to:()=>Object(n.a)(s.de),i19upTo:()=>Object(n.a)(s.oe),i19youEarn:()=>Object(n.a)(s.xe),price(){const t=Object(r.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(a.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(r.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(r.a)(this.product);for(let i=0;i<t.length;i++){if(Object(r.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},u=(i(193),i(70)),h=Object(u.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=h.exports},209:function(t,e,i){"use strict";i(10),i(41);var s=i(39),n=i(122),r=i(68);var a={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(n.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let n,r;for(const a in s){const o=s[a];if(void 0!==o&&t[a]){if(void 0!==r)if(null===o){if(r>=e)continue}else if(o<e||o-50<=i||null!==r&&o>r)continue;n=a,r=o}}return n})(this.src,t,i,this.containerBreakpoints),n=this.src[s],{url:r,size:a}=n||this.defaultImgObj;e=r,a&&([this.imgWidth,this.imgHeight]=a.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):e.endsWith(".avif")?t.push({srcset:e,type:"image/avif"},{srcset:e.replace(".avif",".webp"),type:"image/webp"}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(r.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,this.imgHeight&&(i.height=this.imgHeight,i.width=this.imgWidth),i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},o=(i(193),i(70)),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,n=t.type;return i("source",{key:e,attrs:{srcset:s,type:n}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},210:function(t,e,i){var s=i(240);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(192).default)("083be3a1",s,!0,{})},240:function(t,e,i){(e=i(191)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},271:function(t,e,i){"use strict";var s=i(40),n=i(57),r=i(109);const a="object"==typeof window&&window.propsShippingLine||{};var o={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0},getDeadlineStr:{type:Function,default:a.getDeadlineStr}},computed:{deadlineStr(){const t=this.shippingLine,e=t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days;let i=t.posting_deadline?t.posting_deadline.days:0;if(t.delivery_time&&(i+=t.delivery_time.days),i+=this.productionDeadline,this.getDeadlineStr){const t=this.getDeadlineStr({days:i,isWorkingDays:e,shippingLine:this.shippingLine});if(t)return t}return i>1?`${Object(n.a)(s.oe)} ${i} `+Object(n.a)(e?s.ve:s.gb).toLowerCase():Object(n.a)(1===i?s.ne:t.pick_up?s.Zc:s.kd)},freightValueStr(){const{shippingLine:t}=this,e="number"==typeof t.total_price?t.total_price:t.price;return e?Object(r.a)(e):Object(n.a)(t.pick_up?s.Bb:s.Cb)}}},c=(i(283),i(70)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shipping-line"},[i("strong",{staticClass:"mr-2"},[t._v(" "+t._s(t.deadlineStr)+" ")]),i("span",{staticClass:"mr-2"},[t._v(" "+t._s(t.freightValueStr)+" ")]),t.shippingLine.delivery_instructions?i("small",[t._v(" "+t._s(t.shippingLine.delivery_instructions)+" ")]):t._e()])}),[],!1,null,null,null);e.a=l.exports},272:function(t,e,i){var s=i(284);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(192).default)("2e497541",s,!0,{})},283:function(t,e,i){"use strict";i(272)},284:function(t,e,i){(e=i(191)(!0)).push([t.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}.active .shipping-line>small{color:inherit}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,oBAAoB,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,eAAe,CAAC,6BAA6B,aAAa",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}.active .shipping-line>small{color:inherit}"]}]),t.exports=e},488:function(t,e,i){"use strict";i.r(e);i(10),i(5),i(19);var s=i(138),n=i(14),r=i(44),a=i(189),o={name:"confirmation",components:{EcOrderInfo:i(308).a},data:()=>({canUpsertCart:!0}),computed:{...Object(s.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find((t=>{let{_id:e}=t;return e===this.orderId}))||{_id:this.orderId}},set(t){if(t&&t._id===this.orderId){const e=this.orders.concat(),i=e.find((e=>{let{_id:i}=e;return i===t._id}));i?Object.assign(i,t):e.push(t),this.setOrders(e),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(t))}})}}}},methods:{...Object(s.d)(["addOrder","setOrders","resetCart"]),...Object(s.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:t}=this.order;t&&"cancelled"!==t&&(n.a.data.completed=!0,this.orderId&&(n.a.data.orders||(n.a.data.orders=[]),n.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}},created(){const{customer:t}=this;r.a.checkAuthorization()||t.main_email&&t.doc_number&&r.a.fetchLogin(t.main_email,t.doc_number).then((()=>{this.saveCustomer({ecomPassport:r.a}),this.handleUpsertCart()}))},mounted(){r.a.checkAuthorization()&&this.handleUpsertCart()}},c=i(70),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"confirmation"}},[i("ec-order-info",{attrs:{order:t.order,isNew:!0},on:{"update:order":function(e){t.order=e}}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);