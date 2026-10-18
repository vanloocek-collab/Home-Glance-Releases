# Privacy Policy for Home Glance

Effective date for 0.2.5: October 18, 2026.

Home Glance displays weather, calendar, next alarm, music and connected-headphone information. It has no Home Glance account, advertising SDK, analytics SDK or developer-operated backend for user data.

## Local data and optional access

Settings, widget preferences and caches are stored in the app's private storage. Calendar access is optional and uses Android's READ_CALENDAR permission to display selected events, including their title, timing and optional location. Next-alarm information is read from Android locally. Opening an event, alarm, player or weather app hands the requested action to the selected Android app.

Music access is optional. After you grant Android notification-listener access, Home Glance processes media notifications and media sessions to show the current title, artist, artwork, playback state and progress, and to provide playback controls. Android notification access is broader than media access; Home Glance uses it for its media features. Music metadata is processed locally and is not uploaded to a Home Glance server, weather provider or GitHub.

Optional Bluetooth access reads connected-device information, battery information when available and supported headphone state. Supported ANC controls send commands locally to the connected headset. The app uses legacy Bluetooth permissions on Android 11 and earlier and BLUETOOTH_CONNECT on newer Android versions. This information is not uploaded to a Home Glance server.

Local display/processing does not itself mean information is sent to the developer.

## Weather and location

Automatic location requests Android approximate-location permission. Configured coordinates and numeric weather snapshots are stored privately. Weather requests send the selected coordinates and requested weather parameters over HTTPS to Open-Meteo. The service also receives normal connection information such as your IP address.

Manual city search uses Android's system Geocoder; its provider and possible network processing depend on the device. The selected coordinates are then used for weather requests.

OpenWeather is an optional prepared source requiring a configured API key. Without that configuration it is unavailable. A build that enables it sends weather coordinates and request parameters to OpenWeather rather than silently relabelling Open-Meteo data. The published 0.2.5 build without a key keeps OpenWeather unavailable. System/OEM availability checks do not grant access to an OEM weather database.

Provider information: [Open-Meteo](https://open-meteo.com/en/terms), [OpenWeather](https://openweather.co.uk/privacy-policy).

## Inspirations and GitHub updates

When Inspirations are selected, the app can fetch a shared static catalogue from vanloocek-collab.github.io over HTTPS, with a bundled/local fallback. The request contains no note, calendar event, task, account, language or personal identifier added by Home Glance. Catalogue selection and daily history remain local. GitHub receives normal connection information.

The GitHub distribution checks release metadata using api.github.com and can download the APK from GitHub's release infrastructure. GitHub receives normal request/connection information. Android controls approval to install an APK. The Play distribution disables this updater and excludes REQUEST_INSTALL_PACKAGES.

## Temporarily inactive Google Tasks

In 0.2.5, Google Tasks integration is temporarily disabled in settings, widgets, synchronization and cache reads. Stored preferences and earlier local cache are preserved for possible restoration, but are not displayed or refreshed. This release does not request new Tasks authorization or fetch tasks. A future reactivation requires an updated release and corresponding disclosures. Home Glance does not revoke permissions previously granted in your Google account; those can be managed in Google's account settings.

## Diagnostics and reports

Optional local diagnostics record technical app/device information, settings/status, timings and errors. Diagnostic exports use an allowlist and redaction and intentionally omit event/task titles, music titles/artists, account names, credentials, precise coordinates and Bluetooth MAC addresses. Technical statuses and counts can still appear. Raw media metadata and MAC addresses are excluded from the Music/Bluetooth log messages corrected for this release.

The app can prepare a local diagnostic ZIP or open an email/GitHub issue draft. Nothing is uploaded automatically by that report flow. Review any attachment or draft before choosing to send it; submitted content is handled by the chosen service. Do not include private information in a public issue.

## Storage, deletion and security

You can remove app data by clearing Home Glance storage or uninstalling it; reset controls remove the data covered by those controls. Clearing local data does not delete a previously submitted email/issue or independently revoke Google account authorizations. Weather snapshots are excluded from Android cloud backup/device transfer by the app's backup rules; other storage follows those rules and Android/device behavior.

Network requests made directly by Home Glance use HTTPS. Home Glance does not sell user data or include behavioral tracking. This policy will be updated when features, recipients or permissions change.

Privacy contact: vanloocek@gmail.com.
