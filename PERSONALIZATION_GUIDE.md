# Personalization Guide

Everything you need to change lives in **one file**:

```
src/data/birthdayContent.ts
```

You do not need to touch any component to personalize the site. Just edit the values in that file and save — the dev server will hot-reload automatically.

Look for comments marked `// PERSONALIZE THIS` — those are the fields meant for your own words.

---

## 1. Photos

Put your photo files in `public/photos/`. Reference them in `birthdayContent.ts` with a path starting with `/photos/...`, for example:

```ts
image: '/photos/memory-1.webp'
```

**Recommended dimensions:**
- Memory photos / timeline photos: roughly **1200×1200px** (square) or **1200×800px**, saved as WebP.
- Hero photo (final scene): roughly **1000×1000px**, square.
- Playlist cover: roughly **600×600px**, square.

**How to compress photos:**
- Use [Squoosh](https://squoosh.app) (drag and drop, export as WebP, quality ~75–80) or any batch tool like ImageMagick: `magick input.jpg -resize 1200x1200 -quality 80 output.webp`.
- Aim for under ~200KB per photo where possible.

If a photo file is missing or fails to load, the site automatically shows a soft "a photo belongs here" placeholder instead of a broken image icon — nothing will break while you're still collecting photos.

## 2. Names and nicknames

At the top of `birthdayContent.ts`:

```ts
recipientName: 'Negar',
recipientNickname: 'Neg',
bestFriendNickname: 'My Other Half',
senderName: 'Arina',
birthdayDate: 'July 13',
```

`bestFriendNickname` is used in a few emotionally-weighted spots (envelope address, final page label) — it's intentionally not repeated everywhere so it stays meaningful.

## 3. Messages and letters

- `coverMessage` / `coverSubline` — the very first screen.
- `introductoryMessage` — short line shown at the top of the scrapbook home.
- `mainLetter` — an array of strings, one per paragraph. Add or remove paragraphs freely.
- `finalMessage` — array of strings, one per line, revealed one at a time in the final scene.
- `finalClosingLine` — the very last line, shown after "One more thing…".
- `moonAndSaturnMessage`, `saturnMessage` — short recurring thematic lines.
- `braceletWord` — the word spelled out, one letter per bead, by the tappable friendship-bracelet strip (shown at the end of "Our story" and again near the end of the final scene).
- `hiddenStampMessage` — the note revealed when the flip-stamp decoration on the scrapbook home is tapped.
- `celestialMessages` — a bank of short handwritten-style phrases used as decoration throughout (edit, add, or remove entries; each just needs a unique `id`).

## 4. Memories

The "Our memories" section is image-only by design — a spaced-out grid of photos with no captions or stories shown, and tapping a photo just opens a larger, text-free view of it. Only `id`, `image`, and `imageAlt` actually matter now:

```ts
{
  id: 'memory-1',            // must be unique
  image: '/photos/memory-1.jpg',
  imageAlt: 'Describe the photo for screen readers',   // not shown on screen, but still read aloud by screen readers
}
```

The other fields (`date`, `location`, `caption`, `story`, `whatIRememberMost`, `song`, `lyricExcerpt`, `celestialMessage`) still exist on the `Memory` type and are safe to leave in the placeholder entries or delete — none of them render anywhere in this section anymore.

Add or remove entries freely, the layout adapts automatically. 40 photos are wired up already.

## 5. Timeline ("Our story")

This section is now a single scrolling timeline (no more separate "friendship eras" tab — it was folded in). Edit `timelineEvents`. Each needs a unique `id`, a `date` label (can be a period like "Somewhere in year one"), a `title`, and a `story`. `photo`, `song`, `lyricExcerpt`, and `celestialNote` are optional.

At the end of the timeline there's a tappable friendship-bracelet strip (see `braceletWord` above) — the same one also appears near the end of the final birthday scene.

## 6. "Open when…" letters

Edit `openWhenLetters`. Each has a `label` (shown on the little envelope), a `seal` (one of `'saturn' | 'moon' | 'heart' | 'star' | 'constellation' | 'bracelet' | 'stamp'`), and `paragraphs` (an array of strings — add as many as you like).

## 7. Things I love about you

Edit `reasonsILoveYou`. Each needs `id`, `text`, and a `shape` (purely cosmetic label, one of `'note' | 'ticket' | 'notebook' | 'star' | 'planet' | 'bracelet'`). Add as many as you like — 12+ recommended.

## 8. Favourite lyrics

Edit `favoriteLyrics`. **Only add short excerpts you've written yourself** — do not paste full lyrics. Each entry:

```ts
{
  id: 'lyric-1',
  excerpt: 'A short excerpt you type in yourself',
  songTitle: 'Song title',
  artist: 'Artist',
  whyItMatters: 'Why this lyric matters to the two of you',
  image: '',            // optional
  spotifyUrl: '',        // optional track link
  celestialNote: '',     // optional
}
```

## 9. The Spotify playlist

1. In Spotify, open the playlist you made for her.
2. Click **Share**.
3. Choose **Copy link to playlist** — paste that into `spotifyPlaylistUrl`.
4. Choose **Embed playlist** (or **Copy embed code**) — you'll get an `<iframe src="https://open.spotify.com/embed/playlist/...">`. Copy just the `src` URL value into `spotifyPlaylistEmbedUrl`.
5. Add a cover image to `public/photos/` and reference it in `spotifyPlaylistCover`.
6. Edit `spotifyPlaylistTitle` and `spotifyPlaylistDedication` to taste.

If you leave `spotifyPlaylistUrl` / `spotifyPlaylistEmbedUrl` empty, the site shows a styled "Your playlist will live here" cassette placeholder instead of breaking.

## 10. Background song and voice note

Put your audio files at:

```
public/audio/background-song.mp3
public/audio/voice-note.mp3
```

These paths are already referenced in `backgroundAudioSrc` and `voiceNoteSrc` — no code changes needed, just add the files. If a file is missing, the relevant control (sound toggle / voice note player) quietly disables itself instead of erroring.

Do not commit copyrighted audio you don't have rights to use.

## 11. Theme colours

The site currently uses a cool, bluish "vintage astronomy notebook" palette (matching the constellation section's night sky throughout, instead of a warm paper look). Two places control colours:

1. `theme` object in `birthdayContent.ts` (kept in sync with the CSS values, useful for reference/documentation).
2. The actual CSS custom properties in `src/styles/globals.css` under `:root` — change these to actually change the site's colours:

```css
--paper, --paper-dark, --paper-night, --ink, --muted-ink,
--rose, --burgundy, --sage, --faded-blue, --midnight,
--saturn-gold, --moon-cream, --tape
```

## 12. Moon and Saturn messages

`moonAndSaturnMessage` and `saturnMessage` are the two central lines. `celestialMessages` is a bank of shorter phrases used as decoration — edit, reorder, add, or remove freely.

## 13. The constellation

Edit `constellationName`, `constellationDescription`, and `constellationStars`. Each star needs a unique `id`, `label`, `message` (revealed when tapped), `x`/`y` (0–100, position on the card as a percentage), and `order` (defines the sequence lines connect in). `date`, `photo`, and `song` are optional.

## 14. Testing locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`). Test at roughly 375px width (phone), tablet width, and 1440px+ (desktop) using your browser's device toolbar.

## 15. Resetting your progress (localStorage)

The site remembers what you've opened/discovered in `localStorage` under a few keys prefixed `other-half:`. To reset everything during testing:

1. Open your browser's DevTools → Application/Storage tab → Local Storage → your local dev URL.
2. Delete keys starting with `other-half:`.

Or, from the browser console on the site:

```js
Object.keys(localStorage)
  .filter((k) => k.startsWith('other-half:'))
  .forEach((k) => localStorage.removeItem(k))
location.reload()
```
