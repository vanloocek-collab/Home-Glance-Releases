# Home Glance Testing Checklist

Home Glance is still in public testing. If you want to help, you do not need to test everything — even a few checks on your phone are useful.

## Which build to test

- **Public testing:** use the [v0.2.3 APK](https://github.com/vanloocek-collab/Home-Glance-Releases/releases/tag/0.2.3). This checklist describes the latest public release.
- **Development testing:** if you receive a separate test APK from the developer, record its version, build source and, if supplied, branch or commit. It may include unreleased changes; do not assume those changes are in the public APK.
- **Experimental features:** test only in the build supplied for that experiment. Experimental development work is not part of v0.2.3 unless it is explicitly listed in the release notes.

An in-place update needs a compatible package name and signing key. Debug, Google Play and GitHub builds may not update one another.

## Basic information to include

When reporting a problem or sharing test results, please include:

- Home Glance version
- Build source
- Branch or commit, if supplied with a development build
- Android version
- Device manufacturer and model
- Launcher
- Whether the problem happens every time or only sometimes

## Installation and updates

- Install Home Glance from the latest APK release
- Open the app and confirm it starts normally
- Add the Home Glance widget to the home screen
- If updating from an older version, confirm that settings are preserved
- Use the in-app update checker and confirm that it can detect, download and install a newer release when available

## Widget

- Confirm the widget loads correctly
- Confirm weather information appears
- Confirm the date is formatted correctly
- Resize the widget if your launcher allows it
- Check whether text is clipped or overlaps
- Test **No background**, **Material You** and **Liquid Glass**
- Test left, center and right alignment
- Try different text sizes and font styles
- Enable long-text scrolling and verify all enabled lines return to the starting position smoothly
- If a next alarm is set, confirm the alarm icon and time appear correctly
- Resize the widget, then use **Refresh widget** and confirm the layout adapts correctly

## Weather

- Test automatic location
- Test manual city search
- Check Celsius / Fahrenheit / system units
- Try a weather refresh
- Test Dynamic weather details
- Test Smart weather insights if weather conditions allow
- Tap the weather area and confirm the selected weather app opens

## Calendar

- Enable calendar integration
- Select one or more calendars
- Confirm the next relevant event appears
- Add, edit and delete a calendar event while the widget is visible
- Test Start time and Countdown modes
- Test ongoing events
- Test event location and calendar name display
- Try the event filters and look-ahead options
- Tap the calendar area and confirm the selected calendar app opens

## Application

- Confirm the Home dashboard opens normally
- Open Settings, Weather, Calendar and Application
- Change the app language and confirm the interface updates
- Use **Refresh widget**
- Check the Application page
- Test Check for updates
- Test Report a bug
- Test Contact developer
- Open Privacy Policy
- Open Roadmap

## Launchers and devices

Testing on different launchers is especially useful. Include your launcher in every report when possible.

Examples: Pixel Launcher, Samsung One UI Home, Xiaomi / POCO Launcher, OnePlus Launcher, Nova Launcher, Lawnchair or another launcher.

## How to report a bug

Use **Application → Trouble → Report a bug** in Home Glance or open a [GitHub issue](https://github.com/vanloocek-collab/Home-Glance-Releases/issues/new/choose).

Screenshots are especially helpful for visual problems.

## Thank you

Every useful report helps improve compatibility and reliability.
