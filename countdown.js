const daysCount=(document.getElementById("daycount"));

const hoursCount=(document.getElementById("hourcount"));

const minsCount=(document.getElementById("minscount"));

const secsCount=(document.getElementById("secscount"));


setInterval(function() {
const currentdate= (new Date());

const currentYear=(new Date().getFullYear());

const chrismasYear=(new Date(`December 25 ${currentYear} 00:00:00`));

const remainingDays=(chrismasYear-currentdate);

const d =(Math.floor(remainingDays/1000/60/60/24));

const h =(Math.floor((remainingDays/1000/60/60)%24));

const m =(Math.floor((remainingDays/1000/60)%60));

const s =(Math.floor((remainingDays/1000)%60));

daysCount.innerHTML=(d<10? "0"+d: d);
hoursCount.innerHTML=(h<10? "0"+h: h);
minsCount.innerHTML=(m<10? "0"+m: m);
secsCount.innerHTML=(s<10? "0"+s: s);
}, 1000);
