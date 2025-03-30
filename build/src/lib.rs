use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn factorial_wasm(n: u32) -> u64 {
    let mut result = 1;
    for i in 2..=n {
        result *= i as u64;
    }
    result
}

// Sorting function: Accepts Vec<i32>, sorts it, and returns a new sorted array
#[wasm_bindgen]
pub fn sort_wasm(arr: &mut [i32]) {
    arr.sort();
}
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}