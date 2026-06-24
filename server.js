import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PASSCODE = process.env.VITE_APP_PASSCODE || '1999';

// Parse cookies and form submissions
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Authentication check middleware
const authMiddleware = (req, res, next) => {
  // Allow login page access without session
  if (req.path === '/login') {
    return next();
  }

  // Check if session cookie is valid
  if (req.cookies.portfolio_session === 'unlocked') {
    return next();
  }

  // Otherwise, redirect to login page
  res.redirect('/login');
};

// Login Route (Serve Premium HTML Login Screen)
app.get('/login', (req, res) => {
  if (req.cookies.portfolio_session === 'unlocked') {
    return res.redirect('/');
  }

  const errorMsg = req.query.error ? 'Incorrect passcode. Please try again.' : '';

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portfolio Access Secured</title>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;600&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background-color: #0d0e0f;
          color: #ffffff;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        /* Background Gradients */
        .gradient-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .blob-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: rgba(143, 245, 255, 0.12);
          border-radius: 50%;
          filter: blur(130px);
        }
        .blob-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: rgba(172, 137, 255, 0.12);
          border-radius: 50%;
          filter: blur(130px);
        }
        /* Grid Glow overlay */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 50% 50%, rgba(143, 245, 255, 0.03) 0%, transparent 70%);
          z-index: 0;
        }
        /* Card Layout */
        .login-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 380px;
          margin: 20px;
          padding: 40px 30px;
          background: rgba(30, 32, 33, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(143, 245, 255, 0.05);
          text-align: center;
        }
        .icon-container {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8ff5ff 0%, #ac89ff 50%, #ff59e3 100%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 0 30px rgba(143, 245, 255, 0.25);
        }
        .icon-container svg {
          width: 28px;
          height: 28px;
          stroke: #ffffff;
        }
        h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #8ff5ff 0%, #ac89ff 50%, #ff59e3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p.subtitle {
          color: #ababac;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 35px;
        }
        .input-group {
          margin-bottom: 24px;
          position: relative;
        }
        input[type="password"] {
          width: 100%;
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 4px;
          text-align: center;
          outline: none;
          transition: all 0.3s ease;
        }
        input[type="password"]:focus {
          border-color: rgba(143, 245, 255, 0.5);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(143, 245, 255, 0.1);
        }
        button {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          background: transparent;
          color: #8b5cf6;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.05);
        }
        button:hover {
          background: #8b5cf6;
          color: #ffffff;
          border-color: #8b5cf6;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }
        button:active {
          transform: translateY(0);
        }
        .error-message {
          color: #ff716c;
          font-size: 11px;
          font-weight: 600;
          margin-top: 15px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
      </style>
    </head>
    <body>
      <div class="gradient-bg">
        <div class="blob-1"></div>
        <div class="blob-2"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="login-card">
        <div class="icon-container">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h2>Access Secured</h2>
        <p class="subtitle">Enter passcode to view portfolio</p>

        <form action="/login" method="POST">
          <div class="input-group">
            <input type="password" name="passcode" placeholder="••••" required autofocus autocomplete="off">
          </div>
          <button type="submit">Unlock Access</button>
        </form>

        ${errorMsg ? `<p class="error-message">${errorMsg}</p>` : ''}
      </div>
    </body>
    </html>
  `);
});

// Login POST Handler
app.post('/login', (req, res) => {
  const { passcode } = req.body;

  if (passcode === PASSCODE) {
    // Set a secure session cookie valid for 24 hours
    res.cookie('portfolio_session', 'unlocked', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    });
    return res.redirect('/');
  }

  // Redirect to login page with error flag
  res.redirect('/login?error=1');
});

// Logout Route
app.get('/logout', (req, res) => {
  res.clearCookie('portfolio_session');
  res.redirect('/login');
});

// Apply auth middleware to all remaining static folder routes
app.use(authMiddleware);

// Serve compiled React static assets from /dist
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback all other routing to the main index.html file (for SPA routers)
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
