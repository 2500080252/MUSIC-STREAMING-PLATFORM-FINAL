# MusicWave — React + Vite

A client-side music streaming demo rebuilt from the supplied HTML/CSS/JS project.

## Modules
- **User:** sign up, login, profile/logout, browse/search songs, play/pause/skip, favorites, ratings, playlists, recently played.
- **Admin:** separate admin login, dashboard counts, add/delete songs, view/remove registered users.
- **Persistence:** browser `localStorage` stores demo users, session, catalog changes and personal music data.

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Demo admin
- Username: `admin`
- Password: `admin123`

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**; Build command: `npm run build`; Output directory: `dist`.
4. Deploy. `vercel.json` includes an SPA rewrite so client-side routes continue to load.
5. Test signup, login, admin login, and music playback on the deployed URL.

## Important limitations
This is a frontend/demo authentication implementation because the requested storage is `localStorage`. Passwords and the demo admin credential are visible to the browser and can be modified by a user; localStorage is not secure authentication and does not synchronize accounts across browsers/devices. For a real production service, replace this with a backend/auth provider and server-side role checks. Music tracks use public sample MP3 URLs; replace them with audio files you own or are licensed to distribute.

## Free playlist sharing

Users can open **Playlists**, select a playlist, and choose **Share playlist**. MusicWave creates a shareable URL containing the playlist title and track details. Friends can open the link without signing in or having a premium subscription. The shared page can play tracks using the audio URLs included in the shared link.

This is a front-end demo implementation: the playlist data is encoded into the URL, not stored in a shared database. Share links work best after the app is deployed (for example, on Vercel). Anyone with the link can view its contents. For large playlists or private sharing, connect a backend database and add access controls.

## Sleep Timer

MusicWave includes a Sleep Timer page in the sidebar and a timer shortcut in the player. Choose 15, 30, 45, or 60 minutes, start the countdown, and the current audio will pause automatically when the timer reaches zero. You can cancel the timer at any time. The countdown runs in the current browser session and is not synced between devices.

## Help & Support

Users can read FAQs and submit support tickets. Support tickets are stored in browser Local Storage and can be reviewed, resolved, reopened, or deleted from the Admin dashboard. This demo does not send email or sync tickets between devices.

## Playlist sharing

Users can share a playlist using the browser's share sheet or copy a shareable link. Shared playlist links contain the playlist track data in the URL and do not require a premium account.
