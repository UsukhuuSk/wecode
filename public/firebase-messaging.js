!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(Mt,Et){"use strict";try{!(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(Mt);function n(){return"object"==typeof indexedDB}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i.prototype.create)}}class i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var i,n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],r=r?(i=n,r.replace(s,(e,t)=>{var n=i[t];return null!=n?String(n):`<${t}?>`})):"Error",r=`${this.serviceName}: ${r} (${a}).`;return new o(a,r,n)}}const s=/\{\$([^}]+)}/g;function a(e){return e&&e._delegate?e._delegate:e}function r(e,i){return new Promise((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{var t;n(`${i}: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)}})}class c{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new u(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new d(this._db.createObjectStore(e,t))}close(){this._db.close()}}class u{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new d(this._transaction.objectStore(e))}}class d{constructor(e){this._store=e}index(e){return new p(this._store.index(e))}createIndex(e,t,n){return new p(this._store.createIndex(e,t,n))}get(e){return r(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return r(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return r(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return r(this._store.clear(),"Error clearing IndexedDB object store")}}class p{constructor(e){this._index=e}get(e){return r(this._index.get(e),"Error reading from IndexedDB")}}function l(e,a,r){return new Promise((t,n)=>{try{const i=indexedDB.open(e,a);i.onsuccess=e=>{t(new c(e.target.result))},i.onerror=e=>{var t;n(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},i.onupgradeneeded=e=>{r(new c(i.result),e.oldVersion,e.newVersion,new u(i.transaction))}}catch(e){n(`Error opening indexedDB: ${e.message}`)}})}async function f(i){return new Promise((e,n)=>{try{const t=indexedDB.deleteDatabase(i);t.onsuccess=()=>{e()},t.onerror=e=>{var t;n(`Error deleting indexedDB database "${i}": ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)}}catch(e){n(`Error deleting indexedDB database "${i}": ${e.message}`)}})}class g{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}var h="@firebase/installations",w="0.5.8";const m=1e4,b=`w:${w}`,v="FIS_v2",y="https://firebaseinstallations.googleapis.com/v1",k=36e5;var I,S,T,_,C;const D=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function j(e){return e instanceof o&&e.code.includes("request-failed")}function O({projectId:e}){return`${y}/projects/${e}/installations`}function P(e){return{token:e.token,requestStatus:2,expiresIn:(e=e.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}}async function A(e,t){var n=(await t.json()).error;return D.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function M({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E(e,{refreshToken:t}){const n=M(e);return n.append("Authorization",(t=t,`${v} ${t}`)),n}async function K(e){var t=await e();return 500<=t.status&&t.status<600?e():t}function N(t){return new Promise(e=>{setTimeout(e,t)})}const x=/^[cdef][\w-]{21}$/,$="";function F(){try{const t=new Uint8Array(17),n=self.crypto||self.msCrypto;n.getRandomValues(t),t[0]=112+t[0]%16;var e=function(e){const t=function(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(t);return x.test(e)?e:$}catch(e){return $}}function B(e){return`${e.appName}!${e.appId}`}const H=new Map;function L(e,t){var n=B(e);R(n,t),function(e,t){const n=function(){!q&&"BroadcastChannel"in self&&(q=new BroadcastChannel("[Firebase] FID Change"),q.onmessage=e=>{R(e.data.key,e.data.fid)});return q}();n&&n.postMessage({key:e,fid:t});0===H.size&&q&&(q.close(),q=null)}(n,t)}function R(e,t){var n=H.get(e);if(n)for(const i of n)i(t)}let q=null;const V="firebase-installations-store";let W=null;function U(){return W=W||l("firebase-installations-database",1,(e,t)=>{0===t&&e.createObjectStore(V)}),W}async function G(e,t){var n=B(e);const i=await U(),a=i.transaction(V,"readwrite"),r=a.objectStore(V);var o=await r.get(n);return await r.put(t,n),await a.complete,o&&o.fid===t.fid||L(e,t.fid),t}async function J(e){var t=B(e);const n=await U(),i=n.transaction(V,"readwrite");await i.objectStore(V).delete(t),await i.complete}async function z(e,t){var n=B(e);const i=await U(),a=i.transaction(V,"readwrite"),r=a.objectStore(V);var o=await r.get(n),s=t(o);return void 0===s?await r.delete(n):await r.put(s,n),await a.complete,!s||o&&o.fid===s.fid||L(e,s.fid),s}async function Y(n){let i;var e=await z(n.appConfig,e=>{var t=Z(e||{fid:F(),registrationStatus:0}),t=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:async function(e){let t=await Q(e.appConfig);for(;1===t.registrationStatus;)await N(100),t=await Q(e.appConfig);if(0!==t.registrationStatus)return t;{var{installationEntry:n,registrationPromise:i}=await Y(e);return i||n}}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(D.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=async function(t,n){try{var e=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=O(e),a=M(e),r=t.getImmediate({optional:!0});!r||(o=await r.getHeartbeatsHeader())&&a.append("x-firebase-client",o);var o={fid:n,authVersion:v,appId:e.appId,sdkVersion:b};const s={method:"POST",headers:a,body:JSON.stringify(o)},c=await K(()=>fetch(i,s));if(c.ok){o=await c.json();return{fid:o.fid||n,registrationStatus:2,refreshToken:o.refreshToken,authToken:P(o.authToken)}}throw await A("Create Installation",c)}(t,n);return G(t.appConfig,e)}catch(e){throw j(e)&&409===e.customData.serverCode?await J(t.appConfig):await G(t.appConfig,{fid:n.fid,registrationStatus:0}),e}}(e,i);return{installationEntry:i,registrationPromise:n}}}(n,t);return i=t.registrationPromise,t.installationEntry});return e.fid===$?{installationEntry:await i}:{installationEntry:e,registrationPromise:i}}function Q(e){return z(e,e=>{if(!e)throw D.create("installation-not-found");return Z(e)})}function Z(e){return 1===(t=e).registrationStatus&&t.registrationTime+m<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function X({appConfig:e,heartbeatServiceProvider:t},n){const i=([a,r]=[e,n["fid"]],`${O(a)}/${r}/authTokens:generate`);var a,r;const o=E(e,n),s=t.getImmediate({optional:!0});!s||(c=await s.getHeartbeatsHeader())&&o.append("x-firebase-client",c);var c={installation:{sdkVersion:b,appId:e.appId}};const u={method:"POST",headers:o,body:JSON.stringify(c)},d=await K(()=>fetch(i,u));if(d.ok)return P(await d.json());throw await A("Generate Auth Token",d)}async function ee(i,a=!1){let r;var e=await z(i.appConfig,e=>{if(!ne(e))throw D.create("not-registered");var t,n=e.authToken;if(a||2!==(t=n).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+k}(t)){if(1===n.requestStatus)return r=async function(e,t){let n=await te(e.appConfig);for(;1===n.authToken.requestStatus;)await N(100),n=await te(e.appConfig);var i=n.authToken;return 0===i.requestStatus?ee(e,t):i}(i,a),e;if(!navigator.onLine)throw D.create("app-offline");n=(t=e,n={requestStatus:1,requestTime:Date.now()},Object.assign(Object.assign({},t),{authToken:n}));return r=async function(t,n){try{var i=await X(t,n),e=Object.assign(Object.assign({},n),{authToken:i});return await G(t.appConfig,e),i}catch(e){throw!j(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode?(i=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),await G(t.appConfig,i)):await J(t.appConfig),e}}(i,n),n}return e});return r?await r:e.authToken}function te(e){return z(e,e=>{if(!ne(e))throw D.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+m<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function ne(e){return void 0!==e&&2===e.registrationStatus}async function ie(e,t=!1){var n,i=e;return await((n=(await Y(i)).registrationPromise)&&await n),(await ee(i,t)).token}function ae(e){return D.create("missing-app-config-values",{valueName:e})}const re="installations",oe=e=>{var t=e.getProvider("app").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw ae("App Configuration");if(!e.name)throw ae("App Name");for(const t of["projectId","apiKey","appId"])if(!e.options[t])throw ae(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Et._getProvider(t,"heartbeat"),_delete:()=>Promise.resolve()}},se=e=>{var t=e.getProvider("app").getImmediate();const n=Et._getProvider(t,re).getImmediate();return{getId:()=>async function(e){var t=e;const{installationEntry:n,registrationPromise:i}=await Y(t);return(i||ee(t)).catch(console.error),n.fid}(n),getToken:e=>ie(n,e)}};Et._registerComponent(new g(re,oe,"PUBLIC")),Et._registerComponent(new g("installations-internal",se,"PRIVATE")),Et.registerVersion(h,w),Et.registerVersion(h,w,"esm2017");const ce="/firebase-messaging-sw.js",ue="/firebase-cloud-messaging-push-scope",de="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",pe="https://fcmregistrations.googleapis.com/v1",le="google.c.a.c_id",fe="google.c.a.e";function ge(e){var t=new Uint8Array(e);const n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(I=C=C||{})[I.DATA_MESSAGE=1]="DATA_MESSAGE",I[I.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(C=S=S||{}).PUSH_RECEIVED="push-received",C.NOTIFICATION_CLICKED="notification-clicked";const he="fcm_token_details_db",we="fcm_token_object_Store";async function me(c){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(he))return null}let u=null;const e=await l(he,5,async(e,t,n,i)=>{var a;if(!(t<2)&&e.objectStoreNames.contains(we)){const s=i.objectStore(we);var r,o=await s.index("fcmSenderId").get(c);await s.clear(),o&&(2===t?(r=o).auth&&r.p256dh&&r.endpoint&&(u={token:r.fcmToken,createTime:null!==(a=r.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:ge(r.vapidKey)}}):3===t?(r=o,u={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:ge(r.auth),p256dh:ge(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:ge(r.vapidKey)}}):4===t&&(o=o,u={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ge(o.auth),p256dh:ge(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ge(o.vapidKey)}}))}});return e.close(),await f(he),await f("fcm_vapid_details_db"),await f("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(u)?u:null}const be="firebase-messaging-database",ve=1,ye="firebase-messaging-store";let ke=null;function Ie(){return ke=ke||l(be,ve,(e,t)=>{0===t&&e.createObjectStore(ye)}),ke}async function Se(e){var t=_e(e);const n=await Ie();t=await n.transaction(ye).objectStore(ye).get(t);if(t)return t;t=await me(e.appConfig.senderId);return t?(await Te(e,t),t):void 0}async function Te(e,t){var n=_e(e);const i=await Ie(),a=i.transaction(ye,"readwrite");return await a.objectStore(ye).put(t,n),await a.complete,t}function _e({appConfig:e}){return e.appId}const Ce=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function De(e,t){var n={method:"DELETE",headers:await Oe(e)};try{const r=await fetch(`${je(e.appConfig)}/${t}`,n);var i=await r.json();if(i.error){var a=i.error.message;throw Ce.create("token-unsubscribe-failed",{errorInfo:a})}}catch(e){throw Ce.create("token-unsubscribe-failed",{errorInfo:e})}}function je({projectId:e}){return`${pe}/projects/${e}/registrations`}async function Oe({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Pe({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==de&&(a.web.applicationPubKey=i),a}const Ae=6048e5;async function Me(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const n=atob(t),i=new Uint8Array(n.length);for(let a=0;a<n.length;++a)i[a]=n.charCodeAt(a);return i}(t)})}(e.swRegistration,e.vapidKey);var n,i,a,r,o,s={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ge(t.getKey("auth")),p256dh:ge(t.getKey("p256dh"))},c=await Se(e.firebaseDependencies);if(c){if(n=c.subscriptionOptions,i=s.vapidKey===n.vapidKey,a=s.endpoint===n.endpoint,r=s.auth===n.auth,o=s.p256dh===n.p256dh,i&&a&&r&&o)return Date.now()>=c.createTime+Ae?async function(t,e){try{var n=await async function(e,t){var n=await Oe(e),i=Pe(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(`${je(e.appConfig)}/${t.token}`,i);a=await r.json()}catch(e){throw Ce.create("token-update-failed",{errorInfo:e})}if(a.error){i=a.error.message;throw Ce.create("token-update-failed",{errorInfo:i})}if(!a.token)throw Ce.create("token-update-no-token");return a.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Te(t.firebaseDependencies,i),n}catch(e){throw await Ee(t),e}}(e,{token:c.token,createTime:Date.now(),subscriptionOptions:s}):c.token;try{await De(e.firebaseDependencies,c.token)}catch(e){console.warn(e)}return Ke(e.firebaseDependencies,s)}return Ke(e.firebaseDependencies,s)}async function Ee(e){var t=await Se(e.firebaseDependencies);t&&(await De(e.firebaseDependencies,t.token),await async function(e){var t=_e(e);const n=await Ie(),i=n.transaction(ye,"readwrite");await i.objectStore(ye).delete(t),await i.complete}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Ke(e,t){var n={token:await async function(e,t){var n=await Oe(e),i=Pe(t),i={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(je(e.appConfig),i);a=await r.json()}catch(e){throw Ce.create("token-subscribe-failed",{errorInfo:e})}if(a.error){i=a.error.message;throw Ce.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw Ce.create("token-subscribe-no-token");return a.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await Te(e,n),n.token}function Ne(e){var t,n,i,a={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return n=a,(t=e).notification&&(n.notification={},(i=t.notification.title)&&(n.notification.title=i),(i=t.notification.body)&&(n.notification.body=i),(i=t.notification.image)&&(n.notification.image=i)),t=a,(n=e).data&&(t.data=n.data),n=a,(e=e).fcmOptions&&(n.fcmOptions={},(i=e.fcmOptions.link)&&(n.fcmOptions.link=i),(i=e.fcmOptions.analytics_label)&&(n.fcmOptions.analyticsLabel=i)),a}function xe(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function $e(e){return Ce.create("missing-app-config-values",{valueName:e})}xe("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),xe("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Fe{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw $e("App Configuration Object");if(!e.name)throw $e("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw $e(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function Be(e){try{e.swRegistration=await navigator.serviceWorker.register(ce,{scope:ue}),e.swRegistration.update().catch(()=>{})}catch(e){throw Ce.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}async function He(e,t){if(!navigator)throw Ce.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Ce.create("permission-blocked");var n,i;return n=e,await((i=null==t?void 0:t.vapidKey)?n.vapidKey=i:n.vapidKey||(n.vapidKey=de)),await async function(e,t){if(t||e.swRegistration||await Be(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Ce.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),Me(e)}async function Le(e,t,n){var i=function(e){switch(e){case S.NOTIFICATION_CLICKED:return"notification_open";case S.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);const a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(i,{message_id:n[le],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function Re(e,t){var n,i=t.data;i.isFirebaseMessaging&&(e.onMessageHandler&&i.messageType===S.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Ne(i)):e.onMessageHandler.next(Ne(i))),n=i.data,"object"==typeof(t=n)&&t&&le in t&&"1"===n[fe]&&await Le(e,i.messageType,n))}const qe="@firebase/messaging",Ve=e=>{const t=new Fe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>Re(t,e)),t},We=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>He(t,e)}};function Ue(e){return async function(e){if(!navigator)throw Ce.create("only-available-in-window");return e.swRegistration||await Be(e),Ee(e)}(e=a(e))}function Ge(e,t){return function(e,t){if(!navigator)throw Ce.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=a(e),t)}Et._registerComponent(new g("messaging",Ve,"PUBLIC")),Et._registerComponent(new g("messaging-internal",We,"PRIVATE")),Et.registerVersion(qe,"0.9.12"),Et.registerVersion(qe,"0.9.12","esm2017");const Je="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ze="https://fcmregistrations.googleapis.com/v1",Ye="FCM_MSG",Qe="google.c.a.c_id",Ze=3,Xe=1;function et(e){var t=new Uint8Array(e);const n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(C=T=T||{})[C.DATA_MESSAGE=1]="DATA_MESSAGE",C[C.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(C=_=_||{}).PUSH_RECEIVED="push-received",C.NOTIFICATION_CLICKED="notification-clicked";const tt="fcm_token_details_db",nt="fcm_token_object_Store";async function it(c){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(tt))return null}let u=null;const e=await l(tt,5,async(e,t,n,i)=>{var a;if(!(t<2)&&e.objectStoreNames.contains(nt)){const s=i.objectStore(nt);var r,o=await s.index("fcmSenderId").get(c);await s.clear(),o&&(2===t?(r=o).auth&&r.p256dh&&r.endpoint&&(u={token:r.fcmToken,createTime:null!==(a=r.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:et(r.vapidKey)}}):3===t?(r=o,u={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:et(r.auth),p256dh:et(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:et(r.vapidKey)}}):4===t&&(o=o,u={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:et(o.auth),p256dh:et(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:et(o.vapidKey)}}))}});return e.close(),await f(tt),await f("fcm_vapid_details_db"),await f("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(u)?u:null}const at="firebase-messaging-database",rt=1,ot="firebase-messaging-store";let st=null;function ct(){return st=st||l(at,rt,(e,t)=>{0===t&&e.createObjectStore(ot)}),st}async function ut(e){var t=pt(e);const n=await ct();t=await n.transaction(ot).objectStore(ot).get(t);if(t)return t;t=await it(e.appConfig.senderId);return t?(await dt(e,t),t):void 0}async function dt(e,t){var n=pt(e);const i=await ct(),a=i.transaction(ot,"readwrite");return await a.objectStore(ot).put(t,n),await a.complete,t}function pt({appConfig:e}){return e.appId}const lt=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function ft(e,t){var n={method:"DELETE",headers:await ht(e)};try{const r=await fetch(`${gt(e.appConfig)}/${t}`,n);var i=await r.json();if(i.error){var a=i.error.message;throw lt.create("token-unsubscribe-failed",{errorInfo:a})}}catch(e){throw lt.create("token-unsubscribe-failed",{errorInfo:e})}}function gt({projectId:e}){return`${ze}/projects/${e}/registrations`}async function ht({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wt({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==Je&&(a.web.applicationPubKey=i),a}async function mt(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const n=atob(t),i=new Uint8Array(n.length);for(let a=0;a<n.length;++a)i[a]=n.charCodeAt(a);return i}(t)})}(e.swRegistration,e.vapidKey);var n,i,a,r,o,s={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:et(t.getKey("auth")),p256dh:et(t.getKey("p256dh"))},c=await ut(e.firebaseDependencies);if(c){if(n=c.subscriptionOptions,i=s.vapidKey===n.vapidKey,a=s.endpoint===n.endpoint,r=s.auth===n.auth,o=s.p256dh===n.p256dh,i&&a&&r&&o)return Date.now()>=c.createTime+6048e5?async function(t,e){try{var n=await async function(e,t){var n=await ht(e),i=wt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(`${gt(e.appConfig)}/${t.token}`,i);a=await r.json()}catch(e){throw lt.create("token-update-failed",{errorInfo:e})}if(a.error){i=a.error.message;throw lt.create("token-update-failed",{errorInfo:i})}if(!a.token)throw lt.create("token-update-no-token");return a.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await dt(t.firebaseDependencies,i),n}catch(e){throw await bt(t),e}}(e,{token:c.token,createTime:Date.now(),subscriptionOptions:s}):c.token;try{await ft(e.firebaseDependencies,c.token)}catch(e){console.warn(e)}return vt(e.firebaseDependencies,s)}return vt(e.firebaseDependencies,s)}async function bt(e){var t=await ut(e.firebaseDependencies);t&&(await ft(e.firebaseDependencies,t.token),await async function(e){var t=pt(e);const n=await ct(),i=n.transaction(ot,"readwrite");await i.objectStore(ot).delete(t),await i.complete}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function vt(e,t){var n={token:await async function(e,t){var n=await ht(e),i=wt(t),i={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(gt(e.appConfig),i);a=await r.json()}catch(e){throw lt.create("token-subscribe-failed",{errorInfo:e})}if(a.error){i=a.error.message;throw lt.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw lt.create("token-subscribe-no-token");return a.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await dt(e,n),n.token}async function yt(e,t){var n=function(e,t){var n;const i={};e.from&&(i.project_number=e.from);e.fcmMessageId&&(i.message_id=e.fcmMessageId);i.instance_id=t,e.notification?i.message_type=T.DISPLAY_NOTIFICATION.toString():i.message_type=T.DATA_MESSAGE.toString();i.sdk_platform=Ze.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(i.collapse_key=e.collapse_key);i.event=Xe.toString(),null!==(n=e.fcmOptions)&&void 0!==n&&n.analytics_label&&(i.analytics_label=null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label);return i}(t,await e.firebaseDependencies.installations.getId());!function(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}(e,n)}function kt(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}async function It(e,t){var n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(n){t.deliveryMetricsExportedToBigQueryEnabled&&await yt(t,n);var i,a,r=await Tt();if(r.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=_.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(r,n);n.notification&&await function(e){var t=e["actions"],n=Notification["maxActions"];t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(n=e.title)&&void 0!==n?n:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[Ye]:e},t}(n)),t&&t.onBackgroundMessageHandler&&(r={from:(i=n).from,collapseKey:i.collapse_key,messageId:i.fcmMessageId},n=r,(e=i).notification&&(n.notification={},(a=e.notification.title)&&(n.notification.title=a),(a=e.notification.body)&&(n.notification.body=a),(a=e.notification.image)&&(n.notification.image=a)),e=r,(n=i).data&&(e.data=n.data),n=r,(i=i).fcmOptions&&(n.fcmOptions={},(a=i.fcmOptions.link)&&(n.fcmOptions.link=a),(a=i.fcmOptions.analytics_label)&&(n.fcmOptions.analyticsLabel=a)),r=r,"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(r):t.onBackgroundMessageHandler.next(r))}}async function St(e){const t=null===(r=null===(a=e.notification)||void 0===a?void 0:a.data)||void 0===r?void 0:r[Ye];if(t&&!e.action){e.stopImmediatePropagation(),e.notification.close();var n=function(e){var t;var n=null!==(t=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==t?t:null===(n=e.notification)||void 0===n?void 0:n.click_action;if(n)return n;return function(e){return"object"==typeof e&&e&&Qe in e}(e.data)?self.location.origin:null}(t);if(n){var i,a=new URL(n,self.location.href),r=new URL(self.location.origin);if(a.host===r.host){let e=await async function(e){var t=await Tt();for(const i of t){var n=new URL(i.url,self.location.href);if(e.host===n.host)return i}return null}(a);if(e?e=await e.focus():(e=await self.clients.openWindow(n),i=3e3,await new Promise(e=>{setTimeout(e,i)})),e)return t.messageType=_.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,e.postMessage(t)}}}}function Tt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function _t(e){return lt.create("missing-app-config-values",{valueName:e})}kt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),kt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Ct{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw _t("App Configuration Object");if(!e.name)throw _t("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw _t(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}const Dt=e=>{const t=new Ct(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(It(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n;(n=e["newSubscription"])?(n=await ut(t.firebaseDependencies),await bt(t),t.vapidKey=null!==(n=null===(n=null==n?void 0:n.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==n?n:Je,await mt(t)):await bt(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(St(e))}),t};function jt(e,t){return function(e,t){if(void 0!==self.document)throw lt.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=a(e),t)}Et._registerComponent(new g("messaging-sw",Dt,"PUBLIC"));class Ot{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return async function(e,t){return He(e=a(e),t)}(this._delegate,e)}async deleteToken(){return Ue(this._delegate)}onMessage(e){return Ge(this._delegate,e)}onBackgroundMessage(e){return jt(this._delegate,e)}}const Pt=e=>self&&"ServiceWorkerGlobalScope"in self?new Ot(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Ot(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),At={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?n()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&n()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};t.default.INTERNAL.registerComponent(new g("messaging-compat",Pt,"PUBLIC").setServiceProps(At)),t.default.registerVersion("@firebase/messaging-compat","0.1.12")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging-compat.js.map