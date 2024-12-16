// Simulating an asynchronous function with a delay
function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback();  // Call 1next task
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback();  // Call2 next task
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback();  // Call 3next task
    }, 1000);
}

task1(function () {
    task2(function () {
        task3(function() {
            console.log("all task completed");
        });
    })
})
//task1(task2(task3(function() {
//console.log("all task completed") })))
//this is the wrong way as arguments are not passed in the correct way

//also the above is call back hell

//to avoid this we use promises