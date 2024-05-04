/*-------------------1---------------------*/

let arr = [1, 4, 3, 0, 4, 5, 4];

let result = arr.filter(function(elem) {
    return elem % 2 == 0 && !elem == 0;
    
});

let result_2 = result.map(function(elem){
    return (Math.sqrt(elem));
})

let result_3 = result_2.reduce(function(i, elem){
    return (i + elem);
})

console.log(result_3)

/*-------------------2---------------------*/

let arr_2 = [1, 4, 3, 0, 4, 5, 4];
let list = {};

for(let key of arr_2) {
    if(list[key] === undefined){
        list[key] = 1;
    } else {
        list[key]++;
    }
}

console.log(list)

/*-------------------3---------------------*/

uniqueItems = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

let list_2 = [];


for(let key of uniqueItems){
    list_2[key] = (list_2[key]||0)+1; 
}

let array = [];
for(let key of uniqueItems){
    if (list_2[array[key]] > 1) {
        array.push(list_2[key])
    }
}

console.log(list_2)

/*-------------------классы---------------------*/
/*Это задание из учебника, по образу которого пытался 
вникнуть в классы. Суть задания в переписывания функции в классы.
 По нему всё понятно, но когда дело касается основной проги - полный аврал*/
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

console.log(Clock)

////////////

function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clocks = new Clock({template: 'h:m:s'});
  clock.start();

