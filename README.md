# LPK Information Display

Website informasi digital untuk menampilkan berbagai informasi dari **LPK (Lembaga Pelatihan Kerja)** dalam satu tampilan yang sederhana dan mudah dipantau.

Project ini dibuat menggunakan React dan Tailwind CSS dengan konsep **information display/dashboard**, sehingga dapat digunakan pada monitor atau TV sebagai media informasi di lingkungan LPK.

## ✨ Features

* 📺 **Channel TV**

  * Menampilkan konten video/informasi pada area utama.
* 📅 **Event**

  * Menampilkan informasi kegiatan atau event LPK.
* 👤 **Participant Information**

  * Menampilkan informasi peserta/alumni.
* 📞 **Contact**

  * Menampilkan informasi kontak LPK.
* 📱 **Responsive Layout**

  * Menggunakan layout berbasis CSS Grid dan Flexbox.
* 🖥️ **Display Mode**

  * Dirancang agar dapat digunakan pada layar monitor atau TV.

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **ESLint**

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── aside.tsx
│   ├── ChannelTV.tsx 
│   ├── contact.tsx 
│   ├── event.tsx
│   └── footer.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## 🚀 Installation

Clone repository:

```bash
git clone <repository-url>
```

Masuk ke folder project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Kemudian buka alamat yang diberikan oleh Vite, biasanya:

```text
http://localhost:5173
```

## 🌐 Menjalankan melalui Network

Project juga dapat diakses dari perangkat lain yang berada dalam jaringan yang sama.

Jalankan:

```bash
npm run dev -- --host
```

Vite akan menampilkan alamat seperti:

```text
Network: http://192.168.x.x:5173/
```

Alamat tersebut dapat dibuka melalui laptop atau perangkat lain yang terhubung ke jaringan yang sama.

## 📦 Build untuk Production

Untuk membuat production build:

```bash
npm run build
```

Untuk melihat hasil production build secara lokal:

```bash
npm run preview
```

## 🎯 Purpose

Project ini dibuat sebagai media **digital information display** untuk membantu LPK menampilkan informasi secara terpusat pada layar, seperti:

* Informasi peserta/alumni
* Jadwal atau event
* Konten video
* Informasi kontak
* Informasi lainnya yang berkaitan dengan kegiatan LPK

## 📌 Status

> 🚧 Project masih dalam tahap pengembangan.

Beberapa fitur dan tampilan masih dapat dikembangkan dan disesuaikan dengan kebutuhan LPK.

## 👨‍💻 Developer

Developed by **ARIP**

---

© 2026 LPK Sekai Mirai Cemerlang Indonesia
