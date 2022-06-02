//* Synchronous
//* Code that executes in a sequence

console.log(`Synch-1`);

// wait for 1ms
//* ========= Async
setTimeout(() => {
    console.log(`Synch-2`);
}, 1)


console.log(`Synch-3`);