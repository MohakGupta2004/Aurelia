Authentication notes

1) Environment
- Add MONGODB_URI (Mongo connection string)
- Add JWT_SECRET (secret used to sign tokens)

2) API routes implemented
- POST /api/auth/signup - create user, set httpOnly cookie
- POST /api/auth/login - verify user, set httpOnly cookie
- POST /api/auth/logout - clear cookie
- GET /api/auth/me - verify cookie and return user info

3) Middleware
- middleware.ts protects `/product/*` routes by checking for `token` cookie and redirecting to /login when absent.

4) Notes
- Passwords are hashed with bcryptjs.
- JWTs are signed with jsonwebtoken and stored in an httpOnly cookie.

If you want, I can:
- rename `components/ui/singup.tsx` -> `signup.tsx` and update imports
- switch to NextAuth.js or a session-based approach

