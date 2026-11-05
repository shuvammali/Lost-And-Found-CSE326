# 🎒 LPU Lost & Found

A simple campus portal that helps Lovely Professional University (LPU) students report lost belongings, post items they have found, and browse reports from others so items can reach their owners.

🔗 **Live Demo:** [https://nimble-croissant-128388.netlify.app/](https://nimble-croissant-128388.netlify.app/)

---

## ✨ Features

- **Report an item:** choose whether you *lost* or *found* something and fill in the details.
- **Detailed reports:** item name, category, location, date, description and contact information.
- **Categories:** Electronics, Books and Notes, Clothing, Accessories, and Other.
- **Browse reports:** view all reported items as cards in one place.
- **Filter:** show all reports, only lost items, or only found items.
- **Saved in your browser:** reports are stored using the browser's `localStorage`, so they remain after a refresh.
- **Safe rendering:** user-entered text is displayed with `textContent`, which helps prevent HTML injection.
- **Responsive design:** works on desktop and mobile screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and the report form |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla) | Form handling, filtering and `localStorage` |
| Netlify | Hosting |

---

## 📁 Project Structure

```
Lost-And-Found/
├── index.html    # Page layout, report form and items section
├── style.css     # Styling and responsive design
├── script.js     # Form submission, storage and filtering logic
└── README.md
```

---

## 🚀 Getting Started

No installation or build step is required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/shuvammali/Lost-And-Found.git
   ```
2. **Open the project folder**
   ```bash
   cd Lost-And-Found
   ```
3. **Run it** by opening `index.html` in your web browser.

---

## 📖 How to Use

1. Open the website and click **Submit a Report** (or go to **Report an Item**).
2. Select whether you **lost** or **found** an item.
3. Fill in the item name, category, location, date, description and your contact details.
4. Click **Submit Report**.
5. Scroll to **Reported Items** to see your report and use the filter to switch between lost and found items.

---

## ⚠️ Note

This is a student project. Reports are saved only in the local browser through `localStorage`, so they are not shared between different devices or users. Connecting a backend database would be needed to make reports visible to everyone.

---

## 🔮 Future Improvements

- Add a backend and database so reports are shared across all users.
- Add image upload for items.
- Add search and sorting options.
- Add options to edit, delete, or mark a report as resolved.

---

## 👤 Author

**Shuvam Mali**
GitHub: [@shuvammali](https://github.com/shuvammali)

---

⭐ If you like this project, consider giving it a star!
