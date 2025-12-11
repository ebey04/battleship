# 🐾 Exploding Cat Battleship  
_A chaotic feline twist on the classic Battleship game._

**Live Demo:** → (https://ebey04.github.io/battleship/)  

Exploding Cat Battleship is a browser-based strategy game built with modular JavaScript, Webpack, and test-driven development. It’s colorful, loud (literally), and absolutely overrun by angry cats. Each hit triggers a small explosion animation and a matching cat sound effect — which, for the record, caused my own cat, Archie, to lose his mind throughout most of development.

---

## 🎮 Features

- 🚢 Fully functional Battleship gameplay  
- 🐱 Ships reimagined as cat “clowders”  
- 💥 Smoke-puff animations for successful hits  
- 🔊 Audio feedback on hits and misses (cat yowls included!)  
- 🎲 Randomized fleet placement  
- 🧠 Computer AI that tracks its previous moves  
- 🎨 Custom visual theme inspired by dramatic, slightly unhinged cat energy  

---

## 🛠️ Tech Stack

- **JavaScript (ES6 Modules)**
- **Webpack** (bundling, asset loading, dev server)
- **HTML5 & CSS3**
- **Jest** (unit testing for game logic)
- **TDD workflow**  
- **Audio + SVG asset handling**

---

## 🧪 Test-Driven Development

Core game logic — including `Ship`, `Gameboard`, and `Player` — was built with **tests first**, ensuring each part worked cleanly before any DOM logic was introduced.  
This project was my strongest immersion yet into TDD, and the results paid off massively.

---

## 🧩 What I Learned

This is the project where JavaScript finally started to *click* for me.

I’ve always felt like JavaScript was my kryptonite — every concept made sense in isolation, but projects would fall apart the moment I had to connect everything together.  

**Exploding Cat Battleship changed that.**

Here’s why:

### **🔹 Understanding Game Architecture**
I built each module (Ship, Gameboard, Player) with confidence…  
…but then ran straight into a wall when it was time to pull everything together in `index.js`.

Figuring out **how all the pieces actually talk to each other** was a breakthrough moment.  
It forced me to slow down, step back, and rethink the big picture — something that’s extremely real-world in software development.

### **🔹 TDD Made Logic Click**
Using Jest and writing tests *before* implementation finally helped me understand the flow of data through the game.  
It took away the "guessing" and replaced it with clarity and intention.

### **🔹 Outside Learning Matters**
There were moments of real frustration — enough to make me step away from Odin lessons and study external resources about:

- game loops  
- modular architecture  
- event flow  
- DOM separation  

That off-track studying ended up being some of the most valuable time I spent.

### **🔹 First Time Working With Audio**
This was also my first project using sound effects, and if you’ve ever tried previewing 20+ angry cat yowls in a quiet apartment… you will understand why Archie was deeply concerned for my sanity.

---

## 📁 Future Improvements (Version 2 Ideas)

- Keyboard accessibility  
- Responsive layout for small screens  
- Improved computer AI logic  
- Animated cat sprites instead of colored hit markers  
- More sophisticated explosion effects  
- Additional sound variety (sorry Archie)

---

## 🚀 How to Run Locally

```bash
npm install
npm start
