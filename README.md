# 📸 Reusable Photo Gallery

A modern **React + Vite + Tailwind CSS photo gallery application** that fetches images from the **Picsum API** and displays them in a responsive grid.  
The project demonstrates **React performance optimization techniques** like `useCallback`, `useMemo`, custom hooks, and reducer-based state management.

---

## 🚀 Features

- 🔍 **Search Photos**  
  Filter photos by author name in real-time.

- ⭐ **Favourite System**  
  Mark and unmark photos as favourites.

- 💾 **Persistent Storage**  
  Favourite photos are saved in **localStorage**.

- ⚡ **Performance Optimization**
  - `useCallback` for stable functions
  - `useMemo` for optimized filtering

- 🪝 **Custom Hook**
  - `useFetchPhotos` to handle API fetching logic.

- 🎯 **Reusable Components**
  - Modular and reusable UI components.

- 📱 **Responsive Layout**
  - Built with **Tailwind CSS grid system**.

---

# 🧠 Concepts Demonstrated

This project focuses on **advanced React patterns** often expected from **mid-level frontend developers**.

### React Hooks

- `useState`
- `useEffect`
- `useCallback`
- `useMemo`
- `useReducer`

### Architecture Patterns

- Custom Hooks
- Component Composition
- Separation of Concerns
- State Persistence with LocalStorage

---

# 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Picsum Photos API**

API used:

```
https://picsum.photos/v2/list
```

---

# 📂 Project Structure

```
src
 ┣ components
 ┃ ┣ Card
 ┃ ┣ Gallery
 ┃ ┗ SearchBar
 ┃
 ┣ hooks
 ┃ ┗ useFetchPhotos.ts
 ┃
 ┣ reducer
 ┃ ┗ toggleReducer.ts
 ┃
 ┣ types
 ┃ ┗ PhotosInterface.ts
 ┃
 ┣ App.tsx
 ┗ main.tsx
```

---

# ⚙️ Installation & Setup

Clone the repository

```bash
git clone https://github.com/adityakanojia/Reusable-Photo-gallery.git
```

Navigate into the project

```bash
cd Reusable-Photo-gallery
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open in browser

```
http://localhost:5173
```

---

# 🎯 Key Implementation Details

### Custom Hook

`useFetchPhotos` handles:

- API requests
- Loading state
- Error handling

### Reducer

`toggleReducer` manages:

- Adding favourite photos
- Removing favourites
- Syncing with localStorage

### Performance Optimizations

`useMemo`

- Prevents expensive filtering operations from running unnecessarily.

`useCallback`

- Prevents unnecessary re-renders of child components.

---

# 📸 Future Improvements

- Infinite scrolling
- Image modal preview
- Dark mode
- Pagination
- Skeleton loading UI

---

# 👨‍💻 Author

**Aditya Kanojia**

GitHub:  
https://github.com/adityakanojia
