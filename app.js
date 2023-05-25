const dys = document.getElementById('dys')
const hrs = document.getElementById('hrs')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

const futureDate = new Date("2023-09-12T00:00:00");
// console.log (futureDate)

setInterval( ()=>{
    const date = new Date();

    const differnceTime = futureDate.getTime() - date.getTime();


    dys.innerHTML = Math.floor(differnceTime/1000/60/60/24)
    hrs.innerHTML = Math.floor(differnceTime/1000/60/60) - (Math.floor(differnceTime/1000/60/60/24)*24)
    mins.innerHTML = Math.floor(differnceTime/1000/60) - (Math.floor(differnceTime/1000/60/60)*60)
    secs.innerHTML = Math.floor(differnceTime/1000)- (Math.floor(differnceTime/1000/60)*60)


},1000);