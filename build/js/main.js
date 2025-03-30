function factorialJS(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialJS(n - 1);
}

export function benchmarkJS() {
    console.time("JS Factorial");
    for(let j=1;j<=10000;j++){
        for(let i=1;i<=20;i++){
            let result = factorialJS(i);
            //console.log("JS  factorial ",i," : ", result);
        }
    }
    console.timeEnd("JS Factorial");
}