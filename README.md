# Express API Boilerplate

Boilerplate untuk membangun REST API menggunakan Express.js dengan struktur yang terorganisir.

## Fitur

- ✅ Express.js framework
- ✅ Swagger documentation
- ✅ JWT authentication utilities
- ✅ Password hashing dengan bcrypt
- ✅ File upload dengan Multer
- ✅ CORS configuration
- ✅ Security dengan Helmet
- ✅ Request logging dengan Morgan
- ✅ Struktur folder yang terorganisir
- ✅ Base response & error handling

## Struktur Project

```
src/
├── config/          # Konfigurasi aplikasi
├── middlewares/     # Custom middlewares
├── routes/          # Route handlers
│   └── swagger/     # Swagger documentation
├── schemas/         # Response schemas
│   └── responses/   # Base response classes
├── utils/           # Utility functions
└── uploads/         # Uploaded files storage
```

## Instalasi

1. Clone repository atau gunakan sebagai template
2. Install dependencies:
```bash
npm install
```

3. Copy file `.env.example` menjadi `.env` dan sesuaikan konfigurasi:
```bash
cp .env.example .env
```

4. Jalankan aplikasi:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Environment Variables

Buat file `.env` dengan variabel berikut:

```env
PORT=5000
BASE_URL=http://localhost:5000
JWT_KEY=your_secret_key_here
ALLOWED_ORIGINS=http://localhost:3000

# Database Configuration
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=database_name
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
```

## API Documentation

Setelah aplikasi berjalan, dokumentasi Swagger tersedia di:
```
http://localhost:5000/api-docs
```

## Teknologi yang Digunakan

- [Express.js](https://expressjs.com/)
- [Swagger](https://swagger.io/)
- [Multer](https://github.com/expressjs/multer)
- [JWT](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## Lisensi

ISC
