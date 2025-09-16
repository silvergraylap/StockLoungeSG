# StockLounge Setup Instructions

## API Setup (Backend)

1. Navigate to the API directory:

   ```bash
   cd C:\project\STOCKLOUNGE\github_TY\stockLounge-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the API directory with the following content:

   ```
   # Database Configuration
   NODE_ENV=development
   DB_DEV_USERNAME=root
   DB_DEV_PASSWORD=your_mysql_password
   DB_DEV_NAME=stocklounge
   DB_DEV_HOST=localhost
   DB_DEV_PORT=3306
   DB_DEV_DIALECT=mysql

   # Server Configuration
   PORT=8000
   FRONTEND_APP_URL=http://localhost:5173
   COOKIE_SECRET=your_cookie_secret_here

   # Naver API Configuration
   NAVER_CLIENT_ID=your_naver_client_id
   NAVER_CLIENT_SECRET=your_naver_client_secret

   # JWT Configuration
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRES_IN=7d
   ```

4. Start the API server:
   ```bash
   npm start
   ```

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd C:\project\STOCKLOUNGE\github_TY\stockLounge-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Database Setup

1. Create a MySQL database named `stocklounge`
2. The API will automatically create the necessary tables when it starts

## Features Fixed

-  ✅ API authentication routes (login, logout, status)
-  ✅ Upbit API integration for coin data
-  ✅ Naver News API integration
-  ✅ Board API for community posts
-  ✅ CORS configuration
-  ✅ Modern UI design with gradients and animations
-  ✅ Responsive header with user authentication
-  ✅ Landing page with real data integration

## Notes

-  The API runs on port 8000
-  The frontend runs on port 5173
-  Make sure to configure your database credentials in the `.env` file
-  For Naver News API, you'll need to get API keys from Naver Developer Console

