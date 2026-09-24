# Privacy Policy for Home Glance

**Effective date: September 24, 2026**

Home Glance is an independent Android home-screen widget for weather, calendar and next-alarm information.

## Summary

Home Glance does not require an account and does not include advertising, analytics SDKs or behavioral tracking.

Most settings, calendar information and alarm information are processed locally on the device. Weather features require a network connection and may send location coordinates to a weather provider.

## Weather and location

If you choose automatic weather location, Home Glance requests Android's approximate location permission (`ACCESS_COARSE_LOCATION`).

The selected latitude and longitude are stored locally in the app's private preferences and are used to request weather data.

Home Glance uses the Open-Meteo API. The selected latitude and longitude are transmitted to Open-Meteo over HTTPS so the service can return weather information.

If you use manual location search, Home Glance uses Android's system `Geocoder`. Depending on the device and Android provider, the search may use a network-backed geocoding service. Home Glance does not control the geocoding backend selected by the device.

Open-Meteo Terms & Privacy:
https://open-meteo.com/en/terms

## Calendar

Calendar integration is optional. If enabled, Home Glance requests `READ_CALENDAR` and reads data such as event title, start/end time, calendar name and event location when that display option is enabled.

Calendar data is processed locally on the device and is not sent to Open-Meteo or to a Home Glance server.

## Next alarm

Home Glance can display the next system alarm. Alarm information is read locally from Android and is not sent to a Home Glance server.

## App settings and local storage

Home Glance stores settings locally, including widget options, language settings, selected calendars, selected weather options and saved weather coordinates.

Home Glance does not operate an account system or a backend server for storing these settings.

## Google Play build

The Google Play distribution of Home Glance does not use the GitHub self-updater and does not request permission to install APK packages.

The separately distributed GitHub build may include an optional GitHub release update checker and APK update flow.

## Bug reports and contact

Home Glance can open GitHub Issues or the user's email app. The draft may contain basic technical information such as Home Glance version, Android version/API level and device manufacturer/model.

Nothing is submitted automatically. Information is sent only if the user chooses to submit the issue or email.

## Security

Network requests made directly by Home Glance use HTTPS.

## Advertising, analytics and tracking

Home Glance does not include advertising SDKs, analytics SDKs or behavioral tracking.

Home Glance does not sell user data.

## Data deletion

Home Glance does not provide user accounts.

Local Home Glance data can be removed using the app's factory-reset option, by clearing the app's storage in Android settings, or by uninstalling the app.

Information voluntarily submitted to GitHub Issues or by email is handled by those services.

## Changes

This policy may be updated when Home Glance changes features, permissions or third-party services.

## Contact

Privacy questions: **vanloocek@gmail.com**
