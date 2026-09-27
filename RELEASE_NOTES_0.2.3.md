# Home Glance v0.2.3

Home Glance v0.2.3 refreshes the app interface and improves widget behavior on narrow layouts.

## What's new

- New **Soft Pixel** home banner with a weather-first Material You / Pixel-inspired design.
- Larger **22 dp** widget weather icon.
- Cleaner alarm and calendar glyphs with one consistent default icon style.
- Responsive next-alarm layout:
  - full alarm information when space allows,
  - alarm icon only on narrow widgets,
  - alarm hidden automatically on very small layouts.
- Compact pinned live widget preview in settings.
- Better alarm width calculations across different launchers and devices.
- Added a fallback to the standard Android alarm screen when the alarm app does not provide its own action.

## Fixed

- Restored long-text scrolling.
- Prevented alarm information from being clipped on narrow widgets.
- Improved narrow-widget behavior while preserving the user's selected date format.

## Tested on

- OnePlus 12
- POCO X5 Pro
- POCO X3 NFC
- Motorola Edge 60 Pro

On POCO / HyperOS devices, Google Play Protect may perform an additional scan when the APK is installed manually. If Play Protect reports that the app appears safe, installation can continue normally.

## Upgrade

v0.2.3 can be installed directly over a compatible previous Home Glance release signed with the same key. Existing settings and widget configuration are preserved.

Home Glance remains in public testing. Feedback and bug reports are very welcome.
