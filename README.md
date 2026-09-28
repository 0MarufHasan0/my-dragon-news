# 📰 The Dragon News

> A modern full-stack news platform built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, MongoDB, and Better Auth.**

<div align="center">

### 🌐 Live Demo

<a href="https://my-dragon-news-livid.vercel.app">
  <img src="https://img.shields.io/badge/Live%20Site-Visit%20Now-00C853?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<a href="https://github.com/0MarufHasan0">
  <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

---

## ✨ Overview

**The Dragon News** is a modern, responsive, full-stack news web application where users can discover, read, and explore news from different categories.

The application combines a clean newspaper-inspired interface with modern web technologies, secure authentication, dynamic content rendering, and MongoDB data management.

### What users can do

* 📰 Browse the latest news
* 🔥 Explore trending and breaking news
* 📂 Filter news by category
* 🌍 Explore international news
* ⚽ Browse sports news
* 📖 Read detailed news articles
* 🔐 Create an account and log in
* 🔑 Authenticate using Google or GitHub
* 📱 Use the application seamlessly on mobile, tablet, and desktop

---

## 🚀 Live Demo

**Live Website:**
👉 https://my-dragon-news-livid.vercel.app

The application is deployed on **Vercel** for fast global delivery and seamless deployment.

---

## 🛠️ Tech Stack

### Frontend

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| ⚛️ Next.js      | Full-stack React framework |
| 📘 TypeScript   | Type-safe development      |
| 🎨 Tailwind CSS | Utility-first styling      |
| 🌼 DaisyUI      | UI components              |

### Backend & Database

| Technology            | Purpose                   |
| --------------------- | ------------------------- |
| 🟢 Next.js API Routes | Backend API               |
| 🍃 MongoDB            | Database                  |
| 🔐 Better Auth        | Authentication & sessions |

### Deployment

| Technology | Purpose              |
| ---------- | -------------------- |
| ▲ Vercel   | Hosting & deployment |
| 🍃 MongoDB | Cloud database       |

---

## ✨ Key Features

### 📰 News & Content

* ✅ Category-based news filtering
* ✅ Breaking news section
* ✅ Trending news
* ✅ Latest news
* ✅ International news
* ✅ Sports news
* ✅ Dynamic article pages
* ✅ Author information
* ✅ News rating
* ✅ View count

### 🔐 Authentication

* ✅ Email & password authentication
* ✅ Google OAuth
* ✅ GitHub OAuth
* ✅ Secure session management
* ✅ Protected routes
* ✅ User authentication state

### 🎨 UI & UX

* ✅ Fully responsive design
* ✅ Newspaper-inspired layout
* ✅ Breaking news ticker
* ✅ Sidebar category navigation
* ✅ Card-based news layout
* ✅ Active category highlighting
* ✅ Clean typography
* ✅ Mobile-friendly navigation
* ✅ Modern authentication pages

---

## 🖥️ UI Highlights

### 📰 Newspaper-Style Header

A clean header inspired by traditional newspaper layouts with a modern web interface.

### 🔥 Breaking News Ticker

Users can quickly see important and breaking news from the top of the page.

### 📂 Category Navigation

News can be explored through categories such as:

```text
Home
Breaking News
International
Sports
Politics
Entertainment
Technology
```

### 🧾 News Cards

Each news card can display important information such as:

```text
Title
Author
Category
Rating
Views
Published Date
```

---

# ⚙️ Run Locally

Want to run **The Dragon News** on your own computer?

Follow these steps.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/0MarufHasan0/the-dragon-news.git
```

Then move into the project directory:

```bash
cd the-dragon-news
```

> Replace the repository URL above with your actual GitHub repository URL if your repo name is different.

---

## 2️⃣ Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

## 3️⃣ Create Environment Variables

Create a `.env.local` file in the root directory:

```text
.env.local
```

Add the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### ⚠️ Important

Never upload `.env.local` to GitHub.

Make sure your `.gitignore` contains:

```gitignore
.env
.env.local
.env*.local
```

---

# 🍃 MongoDB Setup

You need a MongoDB database to run this project locally.

### Step 1 — Create a MongoDB Database

Create a database using MongoDB Atlas or a local MongoDB server.

Your connection string will look similar to:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dragon-news
```

### Step 2 — Add the URI

Put the connection string inside:

```env
MONGODB_URI=your_connection_string
```

---

# 🔐 Better Auth Setup

The project uses **Better Auth** for authentication.

Generate a secure secret and add it to:

```env
BETTER_AUTH_SECRET=your_secret
```

For local development:

```env
BETTER_AUTH_URL=http://localhost:3000
```

---

# 🔵 Google Login Setup

If you want Google login to work locally, configure a Google OAuth application.

Add:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

For local development, configure your OAuth callback/redirect URL according to your Better Auth setup, using your local application URL.

Example:

```text
http://localhost:3000/...
```

> The exact callback path depends on how Better Auth is configured in the project.

---

# ⚫ GitHub Login Setup

Create a GitHub OAuth application and add:

```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Configure the local callback URL using:

```text
http://localhost:3000/...
```

> Use the callback path configured by your Better Auth implementation.

---

# ▶️ Start the Development Server

After installing dependencies and configuring `.env.local`, run:

```bash
npm run dev
```

The development server will start at:

### 👉 http://localhost:3000

Open it in your browser:

```text
http://localhost:3000
```

---

## 🧪 Development Workflow

A typical local workflow looks like this:

```text
Clone Repository
      ↓
Install Dependencies
      ↓
Create .env.local
      ↓
Configure MongoDB
      ↓
Configure Better Auth
      ↓
Configure Google/GitHub OAuth
      ↓
Run npm run dev
      ↓
Open localhost:3000
```

---

# 📦 Production Build

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

# 📁 Project Structure

A simplified project structure:

```text
the-dragon-news/
│
├── app/
│   ├── api/
│   ├── login/
│   ├── register/
│   ├── news/
│   └── ...
│
├── components/
│   ├── Navbar/
│   ├── NewsCard/
│   ├── Category/
│   └── ...
│
├── lib/
│   ├── mongodb.ts
│   ├── auth.ts
│   └── ...
│
├── models/
│   └── ...
│
├── public/
│   └── ...
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

> The exact structure may vary depending on your current project implementation.

---

# 🌐 Deployment

The application is deployed using **Vercel**.

For production deployment, add the same required environment variables to your Vercel project:

```text
MONGODB_URI
BETTER_AUTH_SECRET
BETTER_AUTH_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

Also make sure your OAuth providers include the correct production callback URLs.

---

# 🎯 Project Goals

The main goals of this project were to practice and demonstrate:

* Next.js App Router
* TypeScript
* Full-stack application development
* MongoDB integration
* Authentication with Better Auth
* OAuth authentication
* Responsive UI development
* API development
* Dynamic routing
* Modern component architecture
* Production deployment

---

# 🚧 Future Improvements

Some features that can be added in the future:

* 🔎 Advanced news search
* ❤️ Bookmark / favorite articles
* 💬 User comments
* 👍 Like & reaction system
* 📝 Admin dashboard
* ✍️ Create and manage news articles
* 🖼️ Image upload system
* 🔔 Notification system
* 🌙 Dark / light theme
* 📊 Admin analytics dashboard

---

# 👨‍💻 Author

<div align="center">

### Maruf Hasan

**Frontend Web Developer**

I enjoy building modern web applications with
**React • Next.js • TypeScript • Node.js • MongoDB**

<br>

<a href="https://github.com/0MarufHasan0">
  <img src="https://img.shields.io/badge/GitHub-0MarufHasan0-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

**Built with ❤️ using Next.js**

</div>
