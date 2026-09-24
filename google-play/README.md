# Home Glance — Google Play publishing pack

This folder is the central checklist and source-of-truth for publishing Home Glance on Google Play.

## Ready

- App icon: `assets/app-icon-512.png`
- Editable feature-graphic source: `assets/feature-graphic-source.svg`
- Store listing copy: `PLAY_STORE_LISTING.md`
- Data Safety draft: `DATA_SAFETY_DRAFT.md`
- App Content draft: `APP_CONTENT_DRAFT.md`
- Screenshot capture plan: `screenshots/CAPTURE_CHECKLIST.md`
- Public privacy page: https://vanloocek-collab.github.io/Home-Glance-Releases/privacy.html

## Build

Upload the signed `playRelease` AAB. The Play flavor disables the GitHub self-updater and does not request `REQUEST_INSTALL_PACKAGES`.

Package: `com.vanloocek.homeglance`  
Version: `0.2.1`  
Version code: `8`  
Target SDK: `37`

## Screenshots

The reference screenshots are kept only as working material. For the default EN-US Play listing, capture fresh screenshots with Home Glance set to English (US) and the exact Play build you intend to upload.

## Production access

For a new personal developer account created after 13 November 2023, Google's current requirement is a closed test with at least 12 testers opted in continuously for at least 14 days before applying for production access.
