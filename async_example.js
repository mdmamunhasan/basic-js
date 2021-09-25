// Synchronous
/*function processOrder() {
    console.log("processing order for customer 1")

    let currentTime = new Date().getTime();
    while (currentTime + 3000 > new Date().getTime());

    console.log("order processed for customer 1")
}*/

//Asynchronous
/*function processOrder() {
    console.log("processing order for customer 1")

    setTimeout(function () {
        console.log("food cooked customer 1")
    }, 3000)

    console.log("order processed for customer 1")
}*/

/*console.log("take order for customer 1")
processOrder()
console.log("order completed for customer 1")*/

//Controlling
/*function takeOrder(customer, callback){
    console.log(`take order for ${customer}`)
    callback(customer)
}

function processOrder(customer, callback) {
    console.log(`processing order for ${customer}`)

    setTimeout(function () {
        console.log(`food cooked ${customer}`)
        callback(customer)
    }, 3000)
}

function completeOrder(customer){
    console.log(`order completed for ${customer}`)
}

takeOrder('customer1', function (customer){
    processOrder(customer, function (customer){
        completeOrder(customer);
    })
})
console.log('Hello World')*/

let hasMeeting = false;
const meeting = new Promise(function (resolve, reject) {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Vancouver",
            time: "10:00pm"
        }
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled"))
    }
})

function addToCalendar(meetingDetails) {
    return Promise.resolve(`${meetingDetails.name} is scheduled on ${meetingDetails.location} at ${meetingDetails.time}`)
}

/*meeting.then(addToCalendar)
    .then(console.log)
    .catch((err)=>console.log(err))
console.log('Hello World')*/

/*async function myMeeting(){
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
}*/

/*async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    } catch (err) {
        console.log(err);
    }
}

myMeeting();
//console.log(meeting)
console.log('Hello World')*/

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise1 resolved")
    }, 3000)
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise2 resolved")
    }, 2000)
});

Promise.all([promise1, promise2]).then((res)=>{
    console.log(res);
});