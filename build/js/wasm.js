import init, { factorial_wasm } from "../pkg/factorial_wasm.js";

async function benchmarkWASM() {
    await init();
    console.time("WASM Factorial");
    for(let j=1;j<=10000;j++){
        for(let i=1;i<=20;i++){
            let result = factorial_wasm(i);
            //console.log("WASM  factorial ",i," : ", result);
        }
    }
    console.timeEnd("WASM Factorial");
}

export { benchmarkWASM };
