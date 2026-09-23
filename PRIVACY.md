# Privacy Policy for Home Glance

**Effective date: September 23, 2026**

Home Glance is an independent Android home-screen widget for weather and calendar information. This Privacy Policy explains what data Home Glance processes, why it is needed, and when information may be sent to third-party services.

## Summary

Home Glance does not require an account and does not include advertising, analytics SDKs, or behavioral tracking.

Most settings and calendar processing remain on the device. Some data must be sent to external services when you use weather, location search, update checking, bug reporting, or email contact features.

## Weather and location

If you use automatic weather location, Home Glance requests Android's approximate location permission (ACCESS_COARSE_LOCATION).

The resulting latitude and longitude are stored locally in the app's private preferences and are used to request weather data.

If you use manual location, the city name and resolved coordinates may also be stored locally so the widget can continue using the selected location.

### Open-Meteo

Home Glance uses the Open-Meteo API to obtain weather information. To provide weather data, Home Glance sends the selected location's latitude and longitude to Open-Meteo over HTTPS.

According to Open-Meteo's published privacy information, the free API may keep web-server logs containing information such as IP addresses and geographical coordinates for troubleshooting and abuse prevention, and those log files are deleted after 90 days.

Open-Meteo Terms & Privacy:
https://open-meteo.com/en/terms

### Manual city search

When you search for a city manually, Home Glance uses Android's system Geocoder service. Depending on the Android device and system provider, the city search may be processed by a network-backed geocoding service. Home Glance does not control which geocoding backend is provided by the device manufacturer or Android system.

## Calendar

Calendar access is optional.

If enabled, Home Glance requests READ_CALENDAR permission and reads calendar information needed to display selected events in the widget, including event titles, start/end times, calendar names, event locations when enabled, and event metadata needed for filtering.

Calendar data is processed locally on the device. Home Glance does not send calendar events to Open-Meteo or to a Home Glance server.

## App settings and local storage

Home Glance stores app preferences locally, including selected widget options, weather settings, calendar selections, selected apps, language preferences, and saved weather coordinates.

Home Glance does not operate its own backend server for storing these preferences.

Depending on the Home Glance version installed and the Android device/system settings, Android system backup or device-transfer features may process app data. Newer Home Glance source builds disable Android app-data backup.

## Update checking and downloads

Home Glance can check for new releases using the public GitHub API and can download update APK files from the public Home Glance Releases repository.

GitHub may process network information such as IP address, device information, request time, and service usage information according to its own privacy statement.

GitHub Privacy Statement:
https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

The installation of an update is initiated by the user. Home Glance may request Android permission to install APK files from this source when needed for the in-app update process.

## Bug reports

Home Glance includes a Report a bug option that opens GitHub Issues.

Before opening the page, Home Glance can pre-fill basic technical information such as the Home Glance version, Android version/API level, and device manufacturer/model.

Nothing is submitted automatically. A report is sent only if you choose to create the GitHub issue.

GitHub issues in the public Home Glance Releases repository may be publicly visible. Do not include private or sensitive information in issue text or screenshots.

## Contact developer by email

The Contact developer option opens your email application with a message addressed to:

**vanloocek@gmail.com**

The draft may include the Home Glance version, Android version, and device manufacturer/model.

Nothing is sent automatically. The email is sent only if you choose to send it. Your email provider and the recipient's email provider may process the message according to their own privacy policies.

## Permissions

Home Glance may request or use the following Android permissions:

- Internet — weather data, update checks, and update downloads
- Approximate location — automatic weather location
- Read calendar — displaying calendar events when calendar integration is enabled
- Request package installs — installing an APK update initiated by the user

Location and calendar permissions are optional and can be denied or revoked in Android settings.

## Advertising, analytics and tracking

Home Glance does not include advertising SDKs, analytics SDKs, or behavioral tracking.

Home Glance does not sell user data.

## Data deletion

You can remove Home Glance's locally stored settings by using Factory reset in the app or by clearing the app's data in Android settings.

Uninstalling Home Glance removes the app's local data from the device, subject to any Android system backup or device-transfer behavior applicable to the installed version and device.

Information voluntarily submitted to GitHub Issues or by email is handled by those services and must be removed through the relevant service or by contacting the developer when applicable.

## Changes to this policy

This policy may be updated when Home Glance adds or changes features, permissions, or third-party services.

The latest version of this Privacy Policy will be published in the Home Glance Releases repository.

## Contact

For privacy questions related to Home Glance:

**vanloocek@gmail.com**
