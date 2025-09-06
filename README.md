# WebAssembly Performance Benchmark – KOSS Interview Task

This project demonstrates the **performance benefits of WebAssembly** over plain JavaScript.  
It was developed as part of the **KOSS (Kharagpur Open Source Society) interview tasks** at IIT Kharagpur.

---

## ✨ Project Overview
- Implemented factorial computation for numbers 1–20.
- Executed computations repeatedly with varying iteration counts.
- Compared runtime performance:
  - **JavaScript implementation** (baseline).
  - **Rust → WebAssembly implementation**.
- Visualized results and analyzed performance improvements.
- Documented findings in a technical presentation (see `/presentations`).

---

## 🛠️ Tech Stack
- **Rust** → compiled to WebAssembly
- **JavaScript (ES6)** for integration logic
- **HTML5** for browser execution environment

---

## 📂 Project Structure

---

## 🚀 How It Works
1. Factorials of numbers 1–20 are computed repeatedly for a large number of iterations.  
2. Execution time is measured for:
   - JavaScript factorial implementation.
   - Rust → WebAssembly factorial implementation.  
3. Results are compared to analyze **performance gains**.

---

## ⚠️ Running Locally
The project was built and tested in a **local environment**.  
Steps (if you want to try it yourself):  
1. Install **Rust** and `wasm-pack`.  
2. Clone the repository and run `wasm-pack build` in the `/src` folder.  
3. Open `index.html` in a browser to execute benchmarks.  

---

## 📖 Learning Outcomes
- Learned how to compile Rust programs into WebAssembly modules.  
- Understood the integration process of WebAssembly with JavaScript in a browser.  
- Explored the trade-offs and performance improvements of WebAssembly in computation-heavy tasks.  

---
