
console.log('person1: show ticket');
console.log('person2: show ticket');

// const preMovie = async () => 'preMovie';
// preMovie().then((m) => console.log(m));


const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`))
    const addButter = new Promise((resolve, reject) => resolve(`butter`))
    const addColdDrink = new Promise((resolve, reject) => resolve(`colddrink`) )


 let ticket = await promiseWifeBringingTicks;
     console.log(`wife: I have ${ticket}`);
     console.log('husband:  we should go in');
     console.log('wife: no I am hungry');


let popcorn = await getPopcorn;
    console.log(`husband:  I got some ${popcorn}`);
    console.log('husband:  we should go in');
    console.log('wife: no I need butter on my popcorn');

let butter = await addButter;
    console.log(`husband:  I got some ${butter} on Popcorn`);
    console.log('husband:  anything else darling');
    console.log('wife: lets go we are getting late');

let colddrink = await addColdDrink;
    console.log('wife: what about coldDrink');
    console.log(`husband: I got it`);
 return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4: show ticket');
console.log('person5: show ticket');






















// console.log('person1: show ticket');
// console.log('person2: show ticket');

// // example Wife bringing tickets
// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 3000)
// }); 

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have ticket');
//     console.log('husband:  we should go in');
//     console.log('wife: no I am hungry');
//     return new Promise((resolve,reject) => resolve(`${t}popcorn`));
// })

// var getButter = getPopcorn.then((t) => {
//     console.log('husband:  I got some Popcorn');
//     console.log('husband:  we should go in');
//     console.log('wife: no I need butter on my popcorn');
//     return new Promise((resolve,reject) => resolve(`${t}popcorn`));
// })

// getButter.then((t) => console.log(t));
// console.log('person4: show ticket');
// console.log('person5: show ticket');



