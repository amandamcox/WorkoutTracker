(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){e.exports=a(136)},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),u=a.n(c),s=a(2),o=a(56),l=a(17),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,isLoggedIn:!1,error:!1,errorMessage:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LOGIN":return Object.assign({},e,{isFetching:!0,isLoggedIn:!1});case"RECEIVE_LOGIN":return Object.assign({},e,{isFetching:!1,isLoggedIn:!0,authObject:t.payload,lastUpdated:t.loginAt,error:!1,errorMessage:null});case"LOG_OUT":return Object.assign({},e,{isFetching:!1,isLoggedIn:!1,authObject:null});case"AUTH_ERROR":return Object.assign({},e,{isFetching:!1,isLoggedIn:!1,error:!0,errorMessage:t.error.message});default:return e}},m=a(14),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,error:!1,errorMessage:null,userWorkouts:[],uniqueUserExercises:[],exercises:[],isEditingTracker:!1,isAddingTracker:!1,isAddingExercise:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SERVER":return Object.assign({},e,{isFetching:!0});case"RECEIVE_WORKOUTS":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,userWorkouts:t.payload,uniqueUserExercises:t.uniqueExercises,lastUpdated:t.receivedAt});case"RECEIVE_EXERCISE_LIST":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,exercises:t.payload});case"ADD_NEW_EXERCISE":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,exercises:[].concat(Object(m.a)(e.exercises),[t.payload]),isAddingExercise:!1});case"ADD_NEW_WORKOUT":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,userWorkouts:[].concat(Object(m.a)(e.userWorkouts),[t.payload]),uniqueUserExercises:Object(m.a)(new Set([].concat(Object(m.a)(e.uniqueUserExercises),[t.payload.exercise]))),lastUpdated:t.receivedAt});case"UPDATE_EDITED_WORKOUT":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,userWorkouts:e.userWorkouts.filter((function(e){return e._id!==t.payload._id})).concat(t.payload),uniqueUserExercises:Object(m.a)(new Set([].concat(Object(m.a)(e.uniqueUserExercises),[t.payload.exercise]))),lastUpdated:t.receivedAt});case"DELETE_WORKOUT":return Object.assign({},e,{isFetching:!1,error:!1,errorMessage:null,userWorkouts:e.userWorkouts.filter((function(e){return e._id!==t.payload})),lastUpdated:t.receivedAt});case"SERVER_ERROR":return Object.assign({},e,{isFetching:!1,error:!0,errorMessage:t.error.message});case"SET_TRACKER_EDITING_STATUS":return Object.assign({},e,{isEditingTracker:t.status,editingWorkout:t.workout});case"SET_TRACKER_ADDING_STATUS":return Object.assign({},e,{isAddingTracker:t.status});case"SET_ADDING_EXERCISE_STATUS":return Object.assign({},e,{isAddingExercise:t.status});default:return e}},E=Object(l.c)({auth:i,tracker:p}),f=Object(l.e)(E,Object(l.d)(Object(l.a)(o.a))),d=a(6),b=a(1),v=a.n(b),g=a(4),h=a(11),O=a.n(h),k={createAccount:function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/users",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/users/login",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},j={getUserWorkouts:function(){var e=Object(g.a)(v.a.mark((function e(t){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{Authorization:"bearer ".concat(t)}},e.next=4,O.a.get("/api/userWorkouts",a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),saveUserWorkout:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={headers:{Authorization:"bearer ".concat(t)}},e.next=4,O.a.post("/api/userWorkouts",a,r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),updateUserWorkout:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.patch("/api/userWorkouts/".concat(t),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),deleteUserWorkout:function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("/api/userWorkouts/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getExercises:function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/exercises");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),addExercise:function(){var e=Object(g.a)(v.a.mark((function e(t){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t},e.prev=1,e.next=4,O.a.post("/api/exercises",a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){var t=e.workouts,a=Object(m.a)(new Set(t.map((function(e){return e.exercise}))));return{type:"RECEIVE_WORKOUTS",payload:t,uniqueExercises:a,receivedAt:Date.now()}},y=function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_SERVER"}),t.prev=1,t.next=4,j.getUserWorkouts(e);case 4:return r=t.sent,t.abrupt("return",a(w(r)));case 8:t.prev=8,t.t0=t.catch(1),a(N(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_SERVER"}),e.prev=1,e.next=4,j.getExercises();case 4:return a=e.sent,e.abrupt("return",t({type:"RECEIVE_EXERCISE_LIST",payload:a}));case 8:e.prev=8,e.t0=e.catch(1),t(N(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return{type:"SERVER_ERROR",error:e}},S=function(e,t){return{type:"SET_TRACKER_EDITING_STATUS",status:e,workout:t}},T=function(e){return{type:"SET_TRACKER_ADDING_STATUS",status:e}},R=function(e){return{type:"SET_ADDING_EXERCISE_STATUS",status:e}},_=function(e){return{type:"RECEIVE_LOGIN",payload:e,loginAt:Date.now()}},A=function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_LOGIN"}),t.prev=1,t.next=4,k.login(e);case 4:return(r=t.sent)&&a(y(r.token)),t.abrupt("return",a(_(r)));case 9:t.prev=9,t.t0=t.catch(1),a(I(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_LOGIN"}),t.prev=1,t.next=4,k.createAccount(e);case 4:return r=t.sent,t.abrupt("return",a(_(r)));case 8:t.prev=8,t.t0=t.catch(1),a(I(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return{type:"AUTH_ERROR",error:e}},D=a(15),W=a(5),C=function(e){return e.sort((function(e,t){return Date.parse(e.date)>Date.parse(t.date)?-1:Date.parse(e.date)<Date.parse(t.date)?1:0}))},L=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,r=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),"".concat(r,"-").concat(a,"-").concat(t)},F=(a(130),function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(""),o=Object(W.a)(u,2),l=o[0],i=o[1],m=Object(s.c)((function(e){return e.tracker.exercises})),p=Object(s.b)();return n.a.createElement("div",null,n.a.createElement("div",{className:"modal-overlay",onClick:function(){return p(R(!1))}}),n.a.createElement("div",{className:"modal"},n.a.createElement("button",{className:"close-button clickable",onClick:function(){return p(R(!1))}},n.a.createElement("i",{className:"fas fa-times"})),n.a.createElement("div",{className:"modal-content"},n.a.createElement("h1",null,"Add an Exercise"),n.a.createElement("p",null,"Enter in an exercise name in the box below. It must be unique and not already in the existing exercise list."),n.a.createElement("input",{autoFocus:!0,value:a,onChange:function(e){return c(e.target.value)}}),l&&n.a.createElement("p",{className:"error-message"},l),n.a.createElement("button",{onClick:function(){var e;if(m.filter((function(e){return e.name===a})).length>0)return i("".concat(a," already exists in exercise list. Please try another exercise."));p((e=a,function(){var t=Object(g.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_SERVER"}),t.prev=1,t.next=4,j.addExercise(e);case 4:return r=t.sent,t.abrupt("return",a({type:"ADD_NEW_EXERCISE",payload:r}));case 8:t.prev=8,t.t0=t.catch(1),a(N(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))},className:"button save-button clickable"},"Add"))))}),M=function(e){var t=e.workoutObject,a=Object(r.useState)(""),c=Object(W.a)(a,2),u=c[0],o=c[1],l=Object(r.useState)(L()),i=Object(W.a)(l,2),m=i[0],p=i[1],E=Object(r.useState)(""),f=Object(W.a)(E,2),d=f[0],b=f[1],h=Object(r.useState)(""),O=Object(W.a)(h,2),k=O[0],w=O[1],y=Object(s.c)((function(e){return e.tracker.exercises})),x=Object(s.c)((function(e){return e.tracker.editingWorkout})),_=Object(s.c)((function(e){return e.tracker.isAddingExercise})),A=Object(s.b)(),U=JSON.parse(window.localStorage.getItem("workoutTracker")).token;Object(r.useEffect)((function(){t&&(o(x.exercise),p(x.date),b(x.trackedMetric),w(x.metricType))}),[t,x]);var I={exercise:u,date:m,trackedMetric:d,metricType:k},D=function(){for(var e=0,t=Object.entries(I);e<t.length;e++){var a=Object(W.a)(t[e],2),r=a[0];return""===a[1]?{status:!1,key:r}:{status:!0}}},C=function(){o(""),p(L()),b(""),w("")};return n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("select",{id:"new-exercise",defaultValue:t?x.exercise:"none",onChange:function(e){return o(e.target.value)}},n.a.createElement("option",{value:"none",disabled:!0},"Exercises"),y.map((function(e){return n.a.createElement("option",{key:e.id,value:e.name},e.name)}))),n.a.createElement("p",null,n.a.createElement("button",{onClick:function(){return A(R(!0))},className:" button new-button clickable"},"Add New Exercise"))),n.a.createElement("div",{className:"table-cell"},n.a.createElement("input",{id:"new-date",type:"date",defaultValue:t?x.date:m,onChange:function(e){return p(e.target.value)}})),n.a.createElement("div",{className:"table-cell"},n.a.createElement("input",{id:"new-tracking",type:"text",defaultValue:t?x.trackedMetric:"",onChange:function(e){return b(e.target.value)}}),n.a.createElement("span",{className:"metric-radios"},["reps","mins","lbs","mi/km"].map((function(e,a){return n.a.createElement("label",{key:a},n.a.createElement("input",{name:"new-metric",type:"radio",value:e,defaultChecked:!(!t||x.metricType!==e),onChange:function(e){return w(e.target.value)}}),e)})))),n.a.createElement("div",{className:"table-cell"},n.a.createElement("button",{onClick:t?function(){var e,t,a=D();if(!a.status)return alert("".concat(a.key," must be entered before saving!"));A((e=x._id,t=I,function(){var a=Object(g.a)(v.a.mark((function a(r){var n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"REQUEST_SERVER"}),a.prev=1,a.next=4,j.updateUserWorkout(e,t);case 4:return n=a.sent,a.abrupt("return",r({type:"UPDATE_EDITED_WORKOUT",payload:n,receivedAt:Date.now()}));case 8:a.prev=8,a.t0=a.catch(1),r(N(a.t0));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}())),A(S(!1,null)),C()}:function(){var e=D();if(!e.status)return alert("".concat(e.key," must be entered before saving!"));A(function(e,t){return function(){var a=Object(g.a)(v.a.mark((function a(r){var n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"REQUEST_SERVER"}),a.prev=1,a.next=4,j.saveUserWorkout(e,t);case 4:return n=a.sent,a.abrupt("return",r({type:"ADD_NEW_WORKOUT",payload:n,receivedAt:Date.now()}));case 8:a.prev=8,a.t0=a.catch(1),r(N(a.t0));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(U,I)),C(),A(T(!1))},className:"button save-button clickable"},"Save")),_&&n.a.createElement(F,null))},V=(a(131),function(){var e=Object(s.c)((function(e){return e.auth.isLoggedIn})),t=Object(s.c)((function(e){return C(e.tracker.userWorkouts)})),a=Object(s.c)((function(e){return e.tracker.isAddingTracker})),c=Object(s.c)((function(e){return e.tracker.isEditingTracker})),u=Object(s.c)((function(e){return e.tracker.editingWorkout})),o=Object(s.b)(),l=JSON.parse(window.localStorage.getItem("workoutTracker")).token;Object(r.useEffect)((function(){e&&t.length>0?o(x()):e&&0===t.length&&(o(y(l)),o(x()))}),[e,l,o]);var i=function(e){var t;o((t=e,function(){var e=Object(g.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"REQUEST_SERVER"}),e.prev=1,e.next=4,j.deleteUserWorkout(t);case 4:return e.abrupt("return",a({type:"DELETE_WORKOUT",payload:t,receivedAt:Date.now()}));case 7:e.prev=7,e.t0=e.catch(1),a(N(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()))};return n.a.createElement("div",{className:"user-workout-container"},n.a.createElement("h1",{className:"header-base"},"Track Your Workouts"),a||c?n.a.createElement("button",{className:"add-button clickable",onClick:function(){o(a?T(!1):S(!1,null))}},n.a.createElement("i",{className:"fas fa-minus"})," Cancel"):n.a.createElement("button",{className:"add-button clickable",onClick:function(){return o(T(!0))}},n.a.createElement("i",{className:"fas fa-plus"}),"Add New Workout"),n.a.createElement("div",{className:"table-container",role:"table"},n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"column-header table-cell"},"Exercise"),n.a.createElement("div",{className:"column-header table-cell"},"Date"),n.a.createElement("div",{className:"column-header table-cell"},"Tracked Metric"),n.a.createElement("div",{className:"column-header table-cell"},"Actions")),a&&n.a.createElement(M,{workoutObject:null}),t.map((function(e){return c&&u._id===e._id?n.a.createElement(M,{workoutObject:e,key:e._id}):n.a.createElement("div",{className:"table-row",key:e._id},n.a.createElement("div",{className:"table-cell"},e.exercise),n.a.createElement("div",{className:"table-cell"},e.date),n.a.createElement("div",{className:"table-cell"},"".concat(e.trackedMetric," ").concat(e.metricType)),n.a.createElement("div",{className:"table-cell"},n.a.createElement("i",{className:"fas fa-edit blue-icon clickable",onClick:function(){return o(S(!0,e))}}),n.a.createElement("i",{className:"fas fa-trash-alt red-icon clickable",onClick:function(){return i(e._id)}})))}))))}),G=a(13),K=function(e){var t=e.chartData,a=Object(r.useRef)();Object(r.useEffect)((function(){if(t&&t.length){var e=G.h(a.current);e.selectAll("g").remove();var r=G.a().scale(i).tickFormat(G.i("%b %d")).tickSize(-2),n=G.b().scale(m).tickFormat((function(e){return e})).tickSize(-u);e.append("g").call(r).attr("transform","translate(0, ".concat(s,")")),e.append("g").call(n).attr("transform","translate(".concat(c.left,", 0)")).append("text").text(t[0].metricType).attr("class","axis-label").attr("y",-60).attr("x",-s/2).attr("transform","rotate(-90)").attr("text-anchor","middle")}}),[t]);var c={top:50,right:10,bottom:50,left:90},u=800-c.left-c.right,s=500-c.top,o=G.c(t,(function(e){return e.date})),l=G.e(t,(function(e){return e.trackedMetric})),i=G.g().range([c.left,800-c.right]).domain(o),m=G.f().range([c.bottom,500-c.top]).domain([l,0]),p=G.d();return p.x((function(e){return i(e.date)})),p.y((function(e){return m(e.trackedMetric)})),n.a.createElement("div",null,n.a.createElement("svg",{width:800,height:500,ref:a},n.a.createElement("path",{d:p(t),fill:"none",stroke:"#000000"})))},q=(a(132),function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)([]),o=Object(W.a)(u,2),l=o[0],i=o[1],m=Object(s.c)((function(e){return e.tracker.uniqueUserExercises})),p=Object(s.c)((function(e){return e.auth.isLoggedIn})),E=Object(s.c)((function(e){return e.tracker.userWorkouts})),f=Object(s.b)(),d=JSON.parse(window.localStorage.getItem("workoutTracker")).token;Object(r.useEffect)((function(){p&&0===E.length&&f(y(d))}),[p,E,d,f]),Object(r.useEffect)((function(){if(a){var e=b(a);e.forEach((function(e){e.date=new Date(e.date),e.trackedMetric=Number(e.trackedMetric)})),i(C(e))}}),[a]);var b=function(e){return JSON.parse(JSON.stringify(E)).filter((function(t){if(t.exercise===e)return t}))};return n.a.createElement("div",{className:"progress-container"},n.a.createElement("h1",null,"Track Your Progress"),n.a.createElement("div",{className:"graph-section"},n.a.createElement("h2",null,"Choose an exercise to populate the graph"),n.a.createElement("select",{onChange:function(e){return c(e.target.value)},defaultValue:"none"},n.a.createElement("option",{value:"none",disabled:!0},"Select an Exercise"),m.map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement(K,{key:a,chartData:l})))}),J=(a(133),function(){var e=Object(s.c)((function(e){return e.auth.isLoggedIn}));return n.a.createElement("div",null,n.a.createElement("div",{className:"hero-image"},n.a.createElement("div",{className:"hero-text-box"},n.a.createElement("h1",{className:"header-base"},"Liberate Your Workouts"),n.a.createElement("p",null,"Ever go to the gym and have trouble remembering what you lifted last time? Training for a marathon and need to map out your progress? Or maybe you just want to see where your fitness journey is taking you?"),n.a.createElement("p",null,"That's where this Workout Tracker comes in. Simply enter in how much you lifted, how far you ran, how long you cycled, or whatever metric you want to track. Then see how you're progressing over time! It couldn't be more simple!"),e?n.a.createElement(d.b,{to:"/track"},n.a.createElement("button",{className:"hero-button clickable"},"Get Tracking!")):n.a.createElement(d.b,{to:"/createaccount"},n.a.createElement("button",{className:"hero-button clickable"},"Create An Account!")))))}),P=(a(54),function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(""),o=Object(W.a)(u,2),l=o[0],i=o[1],m=Object(r.useState)(""),p=Object(W.a)(m,2),E=p[0],f=p[1],b=Object(s.c)((function(e){return e.auth.authObject})),h=Object(s.c)((function(e){return e.auth.isLoggedIn})),O=Object(s.c)((function(e){return e.auth.error})),k=Object(s.b)(),j=Object(D.f)();Object(r.useEffect)((function(){h&&(window.localStorage.setItem("workoutTracker",JSON.stringify(b)),j.push("/track"))}),[h,b,j]),Object(r.useEffect)((function(){O&&alert("Account creation failed. Please try again.")}),[O]);var w=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{k(U({username:a,password:l,name:E})),f(""),c(""),i("")}catch(r){alert("The username, ".concat(a,", already exists. Please pick another one."))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"auth-pages-container"},n.a.createElement("h1",{className:"header-base"},"Create an account"),n.a.createElement("form",{className:"form",onSubmit:w},n.a.createElement("div",null,n.a.createElement("label",null,"Full Name:",n.a.createElement("input",{type:"text",value:E,onChange:function(e){return f(e.target.value)}}))),n.a.createElement("div",null,n.a.createElement("label",null,"Username:",n.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)}}))),n.a.createElement("div",null,n.a.createElement("label",null,"Password:",n.a.createElement("input",{type:"password",value:l,onChange:function(e){return i(e.target.value)}}))),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",className:"clickable"},"Create Account"))),n.a.createElement("div",{className:"info-message"},"Already have an account? ",n.a.createElement(d.b,{to:"/login"},"Log in.")))}),Q=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(""),o=Object(W.a)(u,2),l=o[0],i=o[1],m=Object(s.c)((function(e){return e.auth.authObject})),p=Object(s.c)((function(e){return e.auth.isLoggedIn})),E=Object(s.c)((function(e){return e.auth.error})),f=Object(s.b)(),d=Object(D.f)();Object(r.useEffect)((function(){p&&(window.localStorage.setItem("workoutTracker",JSON.stringify(m)),d.push("/track"))}),[p,m,d]),Object(r.useEffect)((function(){E&&alert("Login failed. Please try again.")}),[E]);var b=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{f(A({username:a,password:l})),c(""),i("")}catch(r){alert(r)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"auth-pages-container"},n.a.createElement("h1",{className:"header-base"},"Login"),n.a.createElement("form",{onSubmit:b,className:"form"},n.a.createElement("div",null,n.a.createElement("label",null,"Username:",n.a.createElement("input",{type:"text",value:a,name:"username",onChange:function(e){return c(e.target.value)}}))),n.a.createElement("div",null,n.a.createElement("label",null,"Password:",n.a.createElement("input",{type:"password",value:l,name:"password",onChange:function(e){return i(e.target.value)}}))),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",className:"clickable"},"Login"))))},X=function(){var e=Object(s.b)(),t=Object(D.f)();return Object(r.useEffect)((function(){e({type:"LOG_OUT"}),window.localStorage.removeItem("workoutTracker"),t.push("/")})),n.a.createElement("div",null,n.a.createElement("h1",null,"Logging out..."))},z=function(){return n.a.createElement(D.c,null,n.a.createElement(D.a,{path:"/track"},n.a.createElement(V,null)),n.a.createElement(D.a,{path:"/progress"},n.a.createElement(q,null)),n.a.createElement(D.a,{path:"/createaccount"},n.a.createElement(P,null)),n.a.createElement(D.a,{path:"/login"},n.a.createElement(Q,null)),n.a.createElement(D.a,{path:"/logout"},n.a.createElement(X,null)),n.a.createElement(D.a,{path:"/"},n.a.createElement(J,null)))},Y=(a(135),function(){var e=Object(s.c)((function(e){return e.auth.isLoggedIn})),t=Object(s.b)();return Object(r.useEffect)((function(){var e=window.localStorage.getItem("workoutTracker");e&&"undefined"!==e&&t(_(JSON.parse(e)))}),[t]),n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement("ul",{className:"menu"},n.a.createElement("li",{className:"logo"},n.a.createElement(d.b,{to:"/"},n.a.createElement("i",{className:"fas fa-dumbbell"}),"Workout Tracker")),e?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/track"},"Add Workout")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/progress"},"View Progress")),n.a.createElement("li",{className:"nav-item button"},n.a.createElement(d.b,{to:"/logout"},"Log Out"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item button"},n.a.createElement(d.b,{to:"/login"},"Log In")),n.a.createElement("li",{className:"nav-item button secondary"},n.a.createElement(d.b,{to:"/createaccount"},"Sign Up"))),n.a.createElement("li",{className:"toggle"},n.a.createElement("a",null,n.a.createElement("i",{className:"fas fa-bars"})))))),n.a.createElement("section",null,n.a.createElement(z,null)),n.a.createElement("footer",null)))});u.a.render(n.a.createElement(s.a,{store:f},n.a.createElement(Y,null)),document.getElementById("root"))},54:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.3411f23b.chunk.js.map