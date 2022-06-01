let tools = ['selenium','cypress','wdio','uft','protractor']

const str = tools.toString();
console.log(str);

const join = tools.join(' * ');
console.log(join);
console.log(tools);

const pop = tools.pop();
console.log(tools);

const push = tools.push('webshare');
console.log(tools);

const sort = tools.sort();
console.log(tools);

const shift = tools.shift()
console.log(tools);

const unshift = tools.unshift('selenium')
console.log(tools);

tools.reverse();
console.log(tools);

tools.forEach((value)=>{
    if(value == 'cypress'){
        console.log('cypress is trending');
    }else{
        console.log('Element is not found');
    }
})