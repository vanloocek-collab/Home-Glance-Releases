# Google Play Data Safety — draft

Based on the current Home Glance v0.2.1 Play flavor source. Re-check whenever networking, permissions or dependencies change.

## High-confidence answers

- The app transmits a user-data type off-device: **Yes** (weather coordinates).
- Direct Home Glance network requests are encrypted in transit: **Yes** (HTTPS).
- Accounts: **No**
- Ads: **No**
- Analytics SDKs: **No**
- Advertising ID: **Not used in the reviewed source/dependencies**

## Approximate location

**Type:** Location → Approximate location  
**Collected:** Yes  
**Purpose:** App functionality  
**Optional:** Yes

Reason: Home Glance sends selected latitude/longitude to Open-Meteo to retrieve weather.

**Shared:** Verify at submission time. Google's Data Safety rules exempt transfers to a qualifying service provider from the "shared" label. Open-Meteo is a third-party weather API, so its role should be checked against the exact Play Console wording before final submission. If uncertain, prefer a more conservative declaration rather than under-declaring.

## Calendar

Home Glance reads calendar data locally through Android `CalendarContract` when the user enables calendar integration.

The reviewed source does not send calendar event data to the weather API or to a Home Glance server. Google states that data accessed only on-device and never transmitted off-device does not need to be declared as "collected" in Data Safety.

Keep calendar access disclosed in the privacy policy and permission UX.

## Next alarm

Read locally from Android. No off-device transmission found.

## Manual city search

Home Glance uses Android's system `Geocoder`. The device/system provider may use a network-backed geocoding service. Keep this disclosed in the privacy policy and re-check the form wording at submission.

## Bug reports / email

The app can prefill app version, Android/API version and device manufacturer/model into a GitHub issue or email draft. Nothing is submitted automatically.

Google's Data Safety guidance generally excludes third-party transfers that occur as a specific user-initiated action where the user reasonably expects the transfer.

## Play flavor

The Play flavor disables the GitHub self-updater and does not request `REQUEST_INSTALL_PACKAGES`.

## Final verification before Save

- Re-check every network endpoint in the exact AAB being uploaded.
- Re-check dependencies for analytics/crash/ads SDKs.
- Confirm the Open-Meteo "shared" classification.
- Make sure Data Safety and the privacy policy say the same thing.
