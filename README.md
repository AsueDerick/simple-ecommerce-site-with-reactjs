
<img width="2430" height="1068" alt="Screenshot from 2025-10-25 19-59-50" src="https://github.com/user-attachments/assets/a4210ba6-b0bf-4a37-b7b1-325394aa3719" />
card sample
<img width="1779" height="873" alt="Screenshot from 2025-10-25 20-02-38" src="https://github.com/user-attachments/assets/414f424c-78f8-45e0-a43c-cc00b4e42ae0" />

# 🛍️ Simple E-commerce Site with ReactJS

A **simple and functional e-commerce web application** built with **ReactJS**.  
This project demonstrates modern React concepts such as **components, hooks, context API**, and **Firebase integration** for real-time data storage.  

---

## 🚀 Features

- 🧱 Modular React components for maintainability  
- 🛒 Add / Remove items from the shopping cart  
- 💰 Dynamic total amount calculation  
- 📦 Checkout form with validation  
- ☁️ Firebase Realtime Database integration  
- 🧭 Modal-based user interface  
- ⚙️ Built with React Hooks (`useState`, `useContext`, `useEffect`)  

---

## 🧠 Technologies Used

- **ReactJS (v18+)**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Firebase Realtime Database**
- **Node.js & npm**

---

## 🧩 Project Structure

```

simple-ecommerce-site-with-reactjs/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── Meals/
│   │   ├── UI/
│   │   └── Layout/
│   ├── Store/
│   │   └── cart-context.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

````

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AsueDerick/simple-ecommerce-site-with-reactjs.git
cd simple-ecommerce-site-with-reactjs
````

### 2️⃣ Install Dependencies

```bash
npm install
```

> ⚠️ Ensure you run this command **inside** the project folder where `package.json` is located.

### 3️⃣ Start the Development Server

```bash
npm start
```

The app will open automatically in your default browser at:

```
http://localhost:3000
```

---

## 🧾 Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm start`     | Runs the app in development mode        |
| `npm run build` | Builds the app for production           |
| `npm test`      | Launches the test runner                |
| `npm run eject` | Ejects configuration (use with caution) |

---

## 🌐 Firebase Setup (Optional)

To connect your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Go to **Realtime Database** and create a new database.
3. Replace the Firebase endpoint URL in `Cart.js`:

   ```js
   fetch("https://your-firebase-database-url.firebaseio.com/orders.json", {
     method: "POST",
     body: JSON.stringify({ user: userData, orderItems: cartCtx.items }),
   });
   ```

---

## 🧰 Common Issues & Fixes

### ❌ `ENOENT: no such file or directory, open 'package.json'`

Ensure you are **inside** the project root directory before running `npm install` or `npm start`.

### ❌ `Module not found: Can't resolve './Checkout.module.css'`

React file paths are **case-sensitive** — confirm that the file name matches exactly:

```
Checkout.module.css
```

### ❌ `Module not found: Error: Can't resolve 'console'`

Add this to your `webpack.config.js` if applicable:

```js
resolve: {
  fallback: { console: require.resolve("console-browserify") },
}
```

---

## 🧑‍💻 Author

**Asue Derick**
👨‍🏫 DevOps Engineer | Cloud & React Developer
📧 [asuederipotas7@gmail.com](mailto:asuederipotas7@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/asuederick)
🐙 [GitHub](https://github.com/AsueDerick)

---

## 🪪 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute it with attribution.

---

## 💡 Notes

This project is part of my React practice series — exploring how to build dynamic and scalable UIs with clean component structures and state management.

> ⭐ If you found this project helpful, please give it a star on GitHub — it motivates and supports continued development!

---

### 📦 Repository Link

👉 [https://github.com/AsueDerick/simple-ecommerce-site-with-reactjs](https://github.com/AsueDerick/simple-ecommerce-site-with-reactjs)


```
