# Home Glance — Google Play publishing pack

This folder contains historical Google Play publication drafts and preparation materials. **No Google Play publication of v0.2.8 has been performed.** The current public GitHub prerelease is [v0.2.8](https://github.com/vanloocek-collab/Home-Glance-Releases/releases/tag/0.2.8). Review and update this entire pack against the exact Play build before any future Play submission.

## Prepared assets and drafts

- App icon: `assets/app-icon-512.png`
- Editable feature-graphic source: `assets/feature-graphic-source.svg`
- Store listing copy: `PLAY_STORE_LISTING.md`
- Data Safety draft: `DATA_SAFETY_DRAFT.md`
- App Content draft: `APP_CONTENT_DRAFT.md`
- Release notes: `RELEASE_NOTES_0.2.3.md`
- Screenshot capture plan: `screenshots/CAPTURE_CHECKLIST.md`
- Public privacy page: https://vanloocek-collab.github.io/Home-Glance-Releases/privacy.html

## Future Play build

Prepare and verify a signed `playRelease` AAB only when a Google Play submission is explicitly planned. The Play flavor disables the GitHub self-updater and does not request `REQUEST_INSTALL_PACKAGES`.

Package: `com.vanloocek.homeglance`  
Current GitHub source baseline (not a published Play artifact): `0.2.8` / versionCode `15`  
Historical Play draft notes in this folder: `0.2.3` / versionCode `10`  
Target SDK in the current source: `37`

## Screenshots

The old reference screenshot files have been removed to avoid presenting outdated UI as current. For the default EN-US Play listing, capture a fresh screenshot set with Home Glance set to English (US) and the exact Play build you intend to upload.

## Production access

For a new personal developer account created after 13 November 2023, Google's current requirement is a closed test with at least 12 testers opted in continuously for at least 14 days before applying for production access.
