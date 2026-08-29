# College Timetable Display

## Quick start

1. Run MongoDB locally, then copy `backend/.env.example` to `backend/.env`.
2. `npm install && npm run install:all`
3. `npm run seed` (creates the administrator and sample data)
4. `npm run dev`

Open `http://localhost:5173`. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env` before seeding. For a phone or another laptop on the same Wi-Fi, open `http://YOUR-COMPUTER-IP:5173`; allow Node.js through Windows Firewall when prompted.

## Public hosting

1. Create a free MongoDB Atlas cluster and add a database user. In Atlas Network Access, allow your deployment service to connect, then copy its MongoDB SRV connection string.
2. Push this project to a private GitHub repository. Create a Render Web Service from the `backend` directory (or use `backend/render.yaml`). Set `MONGODB_URI`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in Render environment variables. Render generates `JWT_SECRET` from the blueprint. After deployment, run `npm run seed` once against that Atlas database from a machine with the same environment variables, or use Render Shell to run it.
3. Import the repository into Vercel. Set the project Root Directory to `frontend`. Add `VITE_API_URL` with the value `https://YOUR-RENDER-SERVICE.onrender.com/api`, then deploy.

Use the Vercel URL from any network. Keep the Atlas connection string, JWT secret, and admin password private.

### GitHub Pages frontend

GitHub Pages can host the public React viewer, but cannot run this project's Express API or MongoDB database. Deploy `backend` to Render and MongoDB to Atlas first. In the GitHub repository, add an Actions variable named `VITE_API_URL` with `https://YOUR-RENDER-SERVICE.onrender.com/api`. Then go to **Settings → Pages**, choose **GitHub Actions** as the source, and push to `main`. The included workflow publishes the frontend at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
