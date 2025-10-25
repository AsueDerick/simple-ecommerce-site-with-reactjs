# 🛒 Simple E-commerce Site with React.js

A lightweight and modern **React.js** application that simulates an e-commerce shopping experience. This project demonstrates core React concepts such as **components**, **context API**, **reducers**, and **state management**, along with a responsive UI design.

---

## 🚀 Features

* 🧩 **Modular Component Design** – Built with reusable React components.
* 🛍️ **Add & Remove Items** – Users can add items to cart and remove them dynamically.
* 💰 **Cart Management** – Cart total updates in real-time using the **Context API** and **useReducer**.
* ⚡ **Responsive UI** – Fully responsive design suitable for all screen sizes.
* 🔄 **React Hooks** – Implements `useState`, `useContext`, and `useReducer` for clean state handling.
* 🎨 **Clean Styling** – Styled using CSS Modules for modular and maintainable design.

---

## 🧠 Tech Stack

| Category         | Technology                 |
| ---------------- | -------------------------- |
| Frontend         | React.js                   |
| Styling          | CSS Modules                |
| State Management | React Context + useReducer |
| Package Manager  | npm or yarn                |
| Build Tool       | Create React App           |

---

## 📂 Project Structure

```
simple-ecommerce-site-with-reactjs/
│
├── public/                # Static files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Cart/          # Cart components
│   │   ├── Layout/        # App layout components
│   │   └── Shop/          # Product listing
│   │
│   ├── store/             # Context and Reducer logic
│   │   ├── CartContext.js
│   │   └── CartProvider.js
│   │
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
│
└── package.json           # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AsueDerick/simple-ecommerce-site-with-reactjs.git
   ```
2. **Navigate into the project folder:**

   ```bash
   cd simple-ecommerce-site-with-reactjs
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Start the development server:**

   ```bash
   npm start
   ```
5. Open your browser and visit:
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Key React Concepts Used

* **useReducer** for managing complex cart logic (add/remove items).
* **Context API** for global state management.
* **useState & useEffect** for component-level updates.
* **Prop drilling avoidance** through context provider.
* **Error handling with boundaries (recommended for production).**

---

## 🪲 Common Issues

### ❌ Error: “Cannot read properties of undefined (reading 'price')”

This happens when `existingItem` is not found in the cart before accessing its properties.
✅ **Fix:**
Check for item existence before updating:

```js
if (!existingItem) return state;
```

### ❌ Error: “Cannot set properties of undefined (setting '1')”

This can occur if the reducer attempts to modify an undefined array index.
✅ **Fix:**
Ensure the array is copied and updated immutably:

```js
const updatedItems = [...state.items];
updatedItems[existingCartItemIndex] = updatedItem;
```

---

## 🧑‍💻 Author

**Asue Derick**
🎓 DevOps Engineer | React Developer | Cloud Enthusiast
🔗 [GitHub Profile](https://github.com/AsueDerick)

---

## 🪪 License

This project is licensed under the **MIT License** – feel free to use and modify it.

