# Excel Analytics Dashboard

A modern, responsive dashboard for Excel/CSV analytics using pure HTML, CSS, JS (no frameworks), Node.js, Express, MongoDB.

## Features

- **Login & Registration** – Styled forms with input validation and modern UI.
- **Dashboard** – Animated background, sidebar, header, statistics cards.
- **Charts** – Bar, pie, and line charts using Chart.js.
- **File Upload** – Drag & drop or browse Excel/CSV files.
- **Reports** – Table previews of uploaded data with search and filters.
- **Backend** – Node.js + Express + MongoDB for user and file management.

## Folder Structure

```
excel-analytics-dashboard/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── upload.html
│   ├── reports.html
│   └── favicon.ico
├── package.json
└── README.md
```

## Setup Instructions

### Backend

1. **Install dependencies:**
   ```bash
   cd backend
   npm install express mongoose bcrypt dotenv cors
   ```
2. **Start MongoDB locally.**  
   (Default URI: `mongodb://localhost:27017/excel_dashboard`)
3. **Configure `.env`:**
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/excel_dashboard
   ```
4. **Run server:**
   ```bash
   node server.js
   ```

### Frontend

1. Open `frontend/index.html` in your browser.
2. Use a local server like **Live Server** (VS Code extension) or `python -m http.server` for module imports.
3. Ensure API URLs in JS files point to `http://localhost:5000/...`.

## Usage

1. **Register a new user** via the registration page.
2. **Login** to access the dashboard.
3. **Upload files** on the upload page (CSV/Excel).
4. **View analytics** and **reports** on the dashboard and reports pages.

## Deployment

- **Frontend:** Host as static files (GitHub Pages, Vercel, Netlify, etc.).
- **Backend:** Deploy Node.js server (Heroku, Render, etc.), update API URLs in frontend accordingly.

## Customization

- Add JWT/session authentication for production.
- Integrate Multer and SheetJS for real Excel file parsing/storage.
- Enhance charts and reporting features as needed.

## License

MIT

---

**Enjoy your modern Excel Analytics Dashboard!**