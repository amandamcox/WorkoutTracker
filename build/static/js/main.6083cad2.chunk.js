(this.webpackJsonpworkoutfrontend=this.webpackJsonpworkoutfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=(a(22),a(1)),l=a.n(s),o=a(3),u=a(4),p=a.n(u),g=a(5),d=function(e){var t=e.onSave,a=Object(n.useState)(""),c=Object(o.a)(a,2),i=c[0],s=c[1];return r.a.createElement("div",{className:"ui form segment",role:"rowgroup"},r.a.createElement("div",{className:"new-exercise-group"},r.a.createElement("div",{className:"ui dropdown align-table-content",role:"cell"},r.a.createElement("label",null,"Exercise",r.a.createElement("select",{id:"new-exercise",onChange:function(e){return s(e.target.value)}},r.a.createElement("option",{value:""},"Exercises"),g.map((function(e){return r.a.createElement("option",{key:e.exercise,value:e.exercise,tracking:e.trackingType},e.exercise)}))))),r.a.createElement("div",{className:"ui input dropdown align-table-content",role:"cell"},r.a.createElement("label",null,"Date",r.a.createElement("input",{id:"new-date",type:"date",defaultValue:(new Date).toLocaleDateString("zh",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/").join("-")}))),r.a.createElement("div",{className:"ui input align-table-content",role:"cell"},i?r.a.createElement("label",null,function(){var e=document.getElementById("new-exercise").options.selectedIndex,t=document.getElementById("new-exercise").options[e].getAttribute("tracking");return"reps"===t?"How many reps?":"time"===t?"How long (in minutes)?":"distance"===t?"How far (in miles)?":"weight"===t?"How much weight (in pounds)?":void 0}(),r.a.createElement("input",{id:"new-tracking",type:"text"})):r.a.createElement("div",{className:"ui input disabled"},r.a.createElement("label",null,"Reps/Time/Dis/lbs",r.a.createElement("input",{id:"new-tracking",type:"text",placeholder:"Tracked Metric"})))),r.a.createElement("div",{className:"align-table-content align-button",role:"cell"},r.a.createElement("button",{onClick:function(){var e={exercise:document.getElementById("new-exercise").value,date:new Date("".concat(document.getElementById("new-date").value,"T08:00:00.000Z")),trackedMetric:document.getElementById("new-tracking").value};t(e)},className:"ui right labeled icon blue button"},r.a.createElement("i",{className:"save icon"}),"Save"))))},m=a(16),k=function(e){var t=e.text,a=e.children,c=e.childSave,i=Object(m.a)(e,["text","children","childSave"]),s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],p=l[1];return r.a.createElement("section",i,u?r.a.createElement("div",null,a,r.a.createElement("div",{className:"edit-buttons"},r.a.createElement("span",{className:"ui clickable-icon",onClick:function(){return e=a.props,c(e.id,e.name),void p(!1);var e}},r.a.createElement("i",{className:"save icon blue"})),r.a.createElement("span",{className:"ui clickable-icon",onClick:function(){return p(!1)}},r.a.createElement("i",{className:"close icon red"})))):r.a.createElement("div",{className:"clickable-icon",onClick:function(){return p(!0)}},r.a.createElement("span",{className:"ui label"},r.a.createElement("i",{className:"icon edit"}),t)))},x=function(e){var t=e.workoutData,a=e.onDelete,c=e.onEdit,i=Object(n.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],p=function(e,t){if(""!==l){var a={};a[t]="date"===t?"".concat(l,"T08:00:00.000Z"):l,c(e,a)}else alert("You must enter a value")},d=function(e){var t=g.find((function(t){return e.exercise===t.exercise}));return"reps"===t.trackingType?"reps":"time"===t.trackingType?"min":"distance"===t.trackingType?"miles":"weight"===t.trackingType?"lbs":void 0};return r.a.createElement("div",{className:"ui segment",role:"table"},r.a.createElement("div",{className:"table-header table-group",role:"rowgroup"},r.a.createElement("div",{role:"columnheader"},"Workout Type"),r.a.createElement("div",{role:"columnheader"},"Date"),r.a.createElement("div",{role:"columnheader"},"Tracking Metric"),r.a.createElement("div",{role:"columnheader"},"Actions")),t.map((function(e){return r.a.createElement("div",{className:"table-group",role:"rowgroup",key:e._id},r.a.createElement("div",{className:"ui input",role:"cell"},r.a.createElement("span",null,e.exercise)),r.a.createElement("div",{className:"ui input",role:"cell"},r.a.createElement(k,{text:new Date(e.date).toLocaleDateString(),childSave:p},r.a.createElement("input",{id:e._id,type:"date",name:"date",className:"edit-inputs",placeholder:new Date(e.date).toLocaleDateString(),onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",{className:"ui input",role:"cell"},r.a.createElement(k,{text:"".concat(e.trackedMetric," ").concat(d(e)),childSave:p},r.a.createElement("input",{id:e._id,type:"text",name:"trackedMetric",className:"edit-inputs",placeholder:String(e.trackedMetric),onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",{role:"cell"},r.a.createElement("i",{className:"trash alternate outline icon clickable-icon red",onClick:function(){return t=e._id,void a(t);var t}})))})))},y="/api/workouts",v=function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(p.a.post(y,e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},T=function(e,t){var a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(p.a.patch("".concat(y,"/").concat(e),t));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}))},w=function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(p.a.delete("".concat(y,"/").concat(e)));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},E=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=function(e){return e.sort((function(e,t){return Date.parse(e.date)>Date.parse(t.date)?-1:Date.parse(e.date)<Date.parse(t.date)?1:0}))};Object(n.useEffect)((function(){!function(){var e,t;l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(p.a.get("/api/workouts"));case 2:e=a.sent,t=i(e.data),c(t);case 5:case"end":return a.stop()}}))}()}),[]);var s=function(e){var t,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.awrap(v(e));case 2:t=r.sent,n=i(a.concat(t)),c(n);case 5:case"end":return r.stop()}}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"navigation",className:"ui secondary pointing stackable menu"},r.a.createElement("span",{className:"active item"},"Add/View Workouts"),r.a.createElement("span",{className:"item"},"Track Progress (TBD)"),r.a.createElement("div",{className:"right menu"},r.a.createElement("span",{className:"item"},"Sign In (TBD)"))),r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",null,"Add A Workout"),r.a.createElement(d,{onSave:s})),r.a.createElement("div",{className:"gray-container"},r.a.createElement("div",{className:"ui container"},a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your Workout History"),r.a.createElement(x,{workoutData:a,onSave:s,onDelete:function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(w(e));case 2:t=i(a.filter((function(t){return t._id!==e}))),c(t);case 4:case"end":return n.stop()}}))},onEdit:function(e,t){var n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.awrap(T(e,t));case 2:n=s.sent,r=i(a.map((function(e){return e._id!==n._id?e:n}))),c(r);case 5:case"end":return s.stop()}}))}})):r.a.createElement("h1",null,"No Saved Workouts"))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"exercise":"Back extension","trackingType":"reps"},{"exercise":"Bench press","trackingType":"weight"},{"exercise":"Bent-over row","trackingType":"weight"},{"exercise":"Bicep curl","trackingType":"weight"},{"exercise":"Bicycle crunch","trackingType":"reps"},{"exercise":"Bird dog","trackingType":"reps"},{"exercise":"Box jumps","trackingType":"reps"},{"exercise":"Burpees","trackingType":"reps"},{"exercise":"Calf raise","trackingType":"weight"},{"exercise":"Chest fly","trackingType":"weight"},{"exercise":"Crunch","trackingType":"reps"},{"exercise":"Cycling","trackingType":"distance"},{"exercise":"Dancing","trackingType":"time"},{"exercise":"Deadlift","trackingType":"weight"},{"exercise":"Donkey kicks","trackingType":"reps"},{"exercise":"Elbow plank","trackingType":"time"},{"exercise":"Elliptical","trackingType":"time"},{"exercise":"Extended plank","trackingType":"time"},{"exercise":"Flutter kicks","trackingType":"reps"},{"exercise":"Glute bridge","trackingType":"reps"},{"exercise":"Heel taps","trackingType":"reps"},{"exercise":"Hip thrust","trackingType":"weight"},{"exercise":"Hundreds","trackingType":"time"},{"exercise":"Kettlebell swing","trackingType":"weight"},{"exercise":"Lateral raise","trackingType":"weight"},{"exercise":"Leg curl","trackingType":"weight"},{"exercise":"Leg extension","trackingType":"weight"},{"exercise":"Leg press","trackingType":"weight"},{"exercise":"Leg raise","trackingType":"reps"},{"exercise":"Lunge","trackingType":"reps"},{"exercise":"Mountain climbers","trackingType":"reps"},{"exercise":"Oblique crunch","trackingType":"reps"},{"exercise":"Pilates","trackingType":"time"},{"exercise":"Plank jacks","trackingType":"reps"},{"exercise":"Pull up","trackingType":"reps"},{"exercise":"Push up","trackingType":"reps"},{"exercise":"Reverse crunch","trackingType":"reps"},{"exercise":"Rowing","trackingType":"time"},{"exercise":"Running","trackingType":"distance"},{"exercise":"Russian twist","trackingType":"reps"},{"exercise":"Shoulder fly","trackingType":"weight"},{"exercise":"Shoulder press","trackingType":"weight"},{"exercise":"Shoulder shrug","trackingType":"weight"},{"exercise":"Side lunges","trackingType":"reps"},{"exercise":"Side plank","trackingType":"time"},{"exercise":"Side skaters","trackingType":"reps"},{"exercise":"Sit up","trackingType":"reps"},{"exercise":"Spin","trackingType":"time"},{"exercise":"Sprinting","trackingType":"distance"},{"exercise":"Squat","trackingType":"reps"},{"exercise":"Stairs","trackingType":"distance"},{"exercise":"Sumo squats","trackingType":"reps"},{"exercise":"Superman","trackingType":"reps"},{"exercise":"Swimming","trackingType":"distance"},{"exercise":"Tricep extension","trackingType":"weight"},{"exercise":"Tricep pull down","trackingType":"weight"},{"exercise":"Upright row","trackingType":"weight"},{"exercise":"V-up","trackingType":"reps"},{"exercise":"Walking","trackingType":"distance"},{"exercise":"Wall sit","trackingType":"time"},{"exercise":"Wood chop","trackingType":"weight"},{"exercise":"Yoga","trackingType":"time"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.6083cad2.chunk.js.map