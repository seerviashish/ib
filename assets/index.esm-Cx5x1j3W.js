import{g as u,_ as J,d as Q,E as Z,a as ee,c as j,v as te,h as w,F as z,e as se,C as ie,r as k,L as ae,S as L,f as G,j as I}from"./firebase-C2ye9Esx.js";import"./index.esm-GG4fvJyO.js";const R="@firebase/remote-config",O="0.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="remote-config",D=100,N=250,P=500;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}"},g=new Z("remoteconfig","Remote Config",ne);function re(n,e){return n instanceof z&&n.code.indexOf(e)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=!1,ce="",B=0,le=["1","true","t","yes","y","on"];class v{constructor(e,t=ce){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?oe:le.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return B;let e=Number(this._value);return isNaN(e)&&(e=B),e}getSource(){return this._source}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n=ee(),e={}){n=u(n);const t=J(n,Y);if(t.isInitialized()){const i=t.getOptions();if(Q(i,e))return t.getImmediate();throw g.create("already-initialized")}t.initialize({options:e});const s=t.getImmediate();return e.initialFetchResponse&&(s._initializePromise=Promise.all([s._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),s._storage.setActiveConfigEtag(e.initialFetchResponse?.eTag||""),s._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),s._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),s._storageCache.setLastFetchStatus("success"),s._storageCache.setActiveConfig(e.initialFetchResponse?.config||{})]).then(),s._isInitializationComplete=!0),s}async function ge(n){const e=u(n),[t,s]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===s?!1:(await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion)]),!0)}function he(n){const e=u(n);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function ue(n){const e=u(n),t=new W;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const s=e._storageCache.getCustomSignals();s&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(s)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:s}),await e._storageCache.setLastFetchStatus("success")}catch(i){const a=re(i,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(a),i}}function Be(n){const e=u(n);return fe(e._storageCache.getActiveConfig(),e.defaultConfig).reduce((t,s)=>(t[s]=y(n,s),t),{})}function Ue(n,e){return y(u(n),e).asBoolean()}function He(n,e){return y(u(n),e).asNumber()}function Ve(n,e){return y(u(n),e).asString()}function y(n,e){const t=u(n);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=t._storageCache.getActiveConfig();return s&&s[e]!==void 0?new v("remote",s[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new v("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new v("static"))}function $e(n,e){const t=u(n);switch(e){case"debug":t._logger.logLevel=w.DEBUG;break;case"silent":t._logger.logLevel=w.SILENT;break;default:t._logger.logLevel=w.ERROR}}function fe(n={},e={}){return Object.keys({...n,...e})}async function xe(n,e){const t=u(n);if(Object.keys(e).length!==0){for(const s in e){if(s.length>N){t._logger.error(`Custom signal key ${s} is too long, max allowed length is ${N}.`);return}const i=e[s];if(typeof i=="string"&&i.length>P){t._logger.error(`Value supplied for custom signal ${s} is too long, max allowed length is ${P}.`);return}}try{await t._storageCache.setCustomSignals(e)}catch(s){t._logger.error(`Error encountered while setting custom signals: ${s}`)}}}function Ke(n,e){const t=u(n);return t._realtimeHandler.addObserver(e),()=>{t._realtimeHandler.removeObserver(e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,s,i){this.client=e,this.storage=t,this.storageCache=s,this.logger=i}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const s=Date.now()-t,i=s<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[t,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return s;e.eTag=s&&s.eTag;const i=await this.client.fetch(e),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&a.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(a),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n=navigator){return n.languages&&n.languages[0]||n.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,s,i,a,r){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=s,this.projectId=i,this.apiKey=a,this.appId=r}async fetch(e){const[t,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),a=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,r={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},o={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:s,app_id:this.appId,language_code:me(),custom_signals:e.customSignals},c={method:"POST",headers:r,body:JSON.stringify(o)},l=fetch(a,c),d=new Promise((m,b)=>{e.signal.addEventListener(()=>{const F=new Error("The operation was aborted.");F.name="AbortError",b(F)})});let h;try{await Promise.race([l,d]),h=await l}catch(m){let b="fetch-client-network";throw m?.name==="AbortError"&&(b="fetch-timeout"),g.create(b,{originalErrorMessage:m?.message})}let f=h.status;const T=h.headers.get("ETag")||void 0;let C,_,E;if(h.status===200){let m;try{m=await h.json()}catch(b){throw g.create("fetch-client-parse",{originalErrorMessage:b?.message})}C=m.entries,_=m.state,E=m.templateVersion}if(_==="INSTANCE_STATE_UNSPECIFIED"?f=500:_==="NO_CHANGE"?f=304:(_==="NO_TEMPLATE"||_==="EMPTY_CONFIG")&&(C={}),f!==304&&f!==200)throw g.create("fetch-status",{httpStatus:f});return{status:f,eTag:T,config:C,templateVersion:E}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(a),s(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ce(n){if(!(n instanceof z)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class be{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:s}){await _e(e.signal,t);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!Ce(i))throw i;const a={throttleEndTimeMillis:Date.now()+G(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(a),this.attemptFetch(e,a)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=60*1e3,we=720*60*1e3;class Se{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,s,i,a,r){this.app=e,this._client=t,this._storageCache=s,this._storage=i,this._logger=a,this._realtimeHandler=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Ee,minimumFetchIntervalMillis:we},this.defaultConfig={}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n,e){const t=n.target.error||void 0;return g.create(e,{originalErrorMessage:t&&t?.message})}const p="app_namespace_store",ye="firebase_remote_config",Te=1;function Re(){return new Promise((n,e)=>{try{const t=indexedDB.open(ye,Te);t.onerror=s=>{e(S(s,"storage-open"))},t.onsuccess=s=>{n(s.target.result)},t.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(p,{keyPath:"compositeKey"})}}}catch(t){e(g.create("storage-open",{originalErrorMessage:t?.message}))}})}class q{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class ve extends q{constructor(e,t,s,i=Re()){super(),this.appId=e,this.appName=t,this.namespace=s,this.openDbPromise=i}async setCustomSignals(e){const s=(await this.openDbPromise).transaction([p],"readwrite"),i=await this.getWithTransaction("custom_signals",s),a=X(e,i||{});return await this.setWithTransaction("custom_signals",a,s),a}async getWithTransaction(e,t){return new Promise((s,i)=>{const a=t.objectStore(p),r=this.createCompositeKey(e);try{const o=a.get(r);o.onerror=c=>{i(S(c,"storage-get"))},o.onsuccess=c=>{const l=c.target.result;s(l?l.value:void 0)}}catch(o){i(g.create("storage-get",{originalErrorMessage:o?.message}))}})}async setWithTransaction(e,t,s){return new Promise((i,a)=>{const r=s.objectStore(p),o=this.createCompositeKey(e);try{const c=r.put({compositeKey:o,value:t});c.onerror=l=>{a(S(l,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){a(g.create("storage-set",{originalErrorMessage:c?.message}))}})}async get(e){const s=(await this.openDbPromise).transaction([p],"readonly");return this.getWithTransaction(e,s)}async set(e,t){const i=(await this.openDbPromise).transaction([p],"readwrite");return this.setWithTransaction(e,t,i)}async delete(e){const t=await this.openDbPromise;return new Promise((s,i)=>{const r=t.transaction([p],"readwrite").objectStore(p),o=this.createCompositeKey(e);try{const c=r.delete(o);c.onerror=l=>{i(S(l,"storage-delete"))},c.onsuccess=()=>{s()}}catch(c){i(g.create("storage-delete",{originalErrorMessage:c?.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class Me extends q{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=X(e,t),Promise.resolve(this.storage.custom_signals)}}function X(n,e){const t={...e,...n},s=Object.fromEntries(Object.entries(t).filter(([i,a])=>a!==null).map(([i,a])=>typeof a=="number"?[i,a.toString()]:[i,a]));if(Object.keys(s).length>D)throw g.create("custom-signal-max-allowed-signals",{maxSignals:D});return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),i=this.storage.getCustomSignals(),a=await e;a&&(this.lastFetchStatus=a);const r=await t;r&&(this.lastSuccessfulFetchTimestampMillis=r);const o=await s;o&&(this.activeConfig=o);const c=await i;c&&(this.customSignals=c)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!s||s===i[a].context)){i.splice(a,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A extends Ae{static getInstance(){return new A}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="X-Goog-Api-Key",ke="X-Goog-Firebase-Installations-Auth",M=8,U=3,H=-1,V=0,$="featureDisabled",x="retryIntervalSeconds",K="latestTemplateVersionNumber";class Le{constructor(e,t,s,i,a,r,o,c,l,d){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=s,this.namespace=i,this.projectId=a,this.apiKey=r,this.appId=o,this.logger=c,this.storageCache=l,this.cachingClient=d,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=M,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=h=>this.observers.forEach(f=>f.error?.(h)),this.isStatusCodeRetryable=h=>!h||[408,429,502,503,504].includes(h),this.setRetriesRemaining(),A.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const t=(await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0;this.httpRetriesRemaining=Math.max(M-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){const t=((await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0)+1,s=G(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+s),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),s=e*1e3,i=new Date(t+s);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:i,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=M}async establishRealtimeConnection(e,t,s,i){const a=await this.storage.getActiveConfigEtag(),r=await this.storage.getActiveConfigTemplateVersion(),o={[Fe]:this.apiKey,[ke]:s,"Content-Type":"application/json",Accept:"application/json","If-None-Match":a||"*","Content-Encoding":"gzip"},c={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:r,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:o,body:JSON.stringify(c),signal:i})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const s=this.getRealtimeUrl();return await this.establishRealtimeConnection(s,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(H),numFailedStreams:V});const t=new Date(e.backoffEndTimeMillis).getTime(),s=Date.now(),i=Math.max(0,t-s);await this.makeRealtimeHttpConnection(i)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),s=e.indexOf("}",t);return t<0||s<0||t>=s?"":e.substring(t,s+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t){const s=new Set,i=new Set(Object.keys(e||{})),a=new Set(Object.keys(t||{}));for(const r of i)(!a.has(r)||e[r]!==t[r])&&s.add(r);for(const r of a)i.has(r)||s.add(r);return s}async fetchLatestConfig(e,t){const s=e-1,i=U-s,a=this.storageCache.getCustomSignals();a&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(a)}`);const r=new W;try{const o={cacheMaxAgeMillis:0,signal:r,customSignals:a,fetchType:"REALTIME",fetchAttempt:i},c=await this.cachingClient.fetch(o);let l=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(c,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(s,t);return}if(c.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}l==null&&(l={});const d=this.getChangedParams(c.config,l);if(d.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const h={getUpdatedKeys(){return new Set(d)}};this.executeAllListenerCallbacks(h)}catch(o){const c=o instanceof Error?o.message:String(o),l=g.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${c}`});this.propagateError(l)}}async autoFetch(e,t){if(e===0){const a=g.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(a);return}const i=this.getRandomInt(4)*1e3;await new Promise(a=>setTimeout(a,i)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,s="";for(;;){const{done:i,value:a}=await e.read();if(i)break;if(t=this.decoder.decode(a,{stream:!0}),s+=t,t.includes("}")){if(s=this.parseAndValidateConfigUpdateMessage(s),s.length===0)continue;try{const r=JSON.parse(s);if(this.isEventListenersEmpty())break;if($ in r&&r[$]===!0){const o=g.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(o);break}if(K in r){const o=await this.storage.getActiveConfigTemplateVersion(),c=Number(r[K]);o&&c>o&&await this.autoFetch(U,c)}if(x in r){const o=Number(r[x]);await this.updateBackoffMetadataWithRetryInterval(o)}}catch(r){this.logger.debug("Unable to parse latest config update message.",r);const o=r instanceof Error?r.message:String(r);this.propagateError(g.create("update-message-invalid",{originalErrorMessage:o}))}s=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(H),numFailedStreams:V});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let s,i;try{if(s=await this.createRealtimeConnection(),i=s.status,s.ok&&s.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const a=s.body.getReader();this.reader=a,await this.listenForNotifications(a)}}catch(a){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",a)}finally{await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1);const a=!this.isInBackground&&(i===void 0||this.isStatusCodeRetryable(i));if(a&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),a||s?.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const r=`Unable to connect to the server. HTTP status code: ${i}`,o=g.create("stream-error",{originalErrorMessage:r});this.propagateError(o)}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,s=!this.isConnectionActive,i=!this.isInBackground;return e&&t&&s&&i}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=g.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){se(new ie(Y,n,"PUBLIC").setMultipleInstances(!0)),k(R,O),k(R,O,"esm2020");function n(e,{options:t}){const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate(),{projectId:a,apiKey:r,appId:o}=s.options;if(!a)throw g.create("registration-project-id");if(!r)throw g.create("registration-api-key");if(!o)throw g.create("registration-app-id");const c=t?.templateId||"firebase",l=j()?new ve(o,s.name,c):new Me,d=new Ie(l),h=new ae(R);h.logLevel=w.ERROR;const f=new pe(i,L,c,a,r,o),T=new be(f,l),C=new de(T,l,d,h),_=new Le(i,l,L,c,a,r,o,h,d,C),E=new Se(s,C,d,l,h,_);return he(E),E}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(n){return n=u(n),await ue(n),ge(n)}async function ze(){if(!j())return!1;try{return await te()}catch{return!1}}Oe();export{ge as activate,he as ensureInitialized,je as fetchAndActivate,ue as fetchConfig,Be as getAll,Ue as getBoolean,He as getNumber,Pe as getRemoteConfig,Ve as getString,y as getValue,ze as isSupported,Ke as onConfigUpdate,xe as setCustomSignals,$e as setLogLevel};
