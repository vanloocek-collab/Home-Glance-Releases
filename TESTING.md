# Home Glance Testing Checklist

Home Glance is still in public testing. If you want to help, you do not need to test everything — even a few checks on your phone are useful.

## Basic information to include

When reporting a problem or sharing test results, please include:

- Home Glance version
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
- For Material You and Liquid Glass, move the wallpaper visibility slider through low, medium and high values
- Confirm the Material You background follows the current Android system color palette
- Try left, center and right alignment
- Try different text sizes and font styles
- Enable long-text scrolling and verify both weather and calendar text return to the starting position smoothly
- Try several pauses between scrolls
- If a next alarm is set, confirm the alarm icon and time appear correctly in the first widget line
- Resize the widget, then use **Refresh widget** from the Home Glance dashboard and confirm the widget adapts correctly

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
- Test Start time and Countdown modes
- Test ongoing events
- Test event location and calendar name display
- Try the event filters
- Try Today / 24h / 3d / 7d look-ahead
- Tap the calendar area and confirm the selected calendar app opens

## Application

- Confirm the redesigned Home dashboard opens normally
- Open Settings, Weather, Calendar and Application from the dashboard
- Change the app language and confirm the interface updates
- On the Home dashboard, tap **Refresh widget**
- Confirm the refresh card first shows the refreshing state and then **Widget refreshed** only after the widget update finishes
- Change a widget setting, refresh the widget and confirm the change appears
- Resize the widget, refresh it and confirm the layout updates correctly
- Check the Application page
- Test Check for updates
- Test Report a bug
- Test Contact developer
- Open Privacy Policy
- Open Roadmap

## Launchers and devices

Testing on different launchers is especially useful.

If possible, mention whether you use:

- Pixel Launcher
- Samsung One UI Home
- Xiaomi / POCO Launcher
- OnePlus Launcher
- Nova Launcher
- Lawnchair
- another launcher

## How to report a bug

Use **Application → Trouble → Report a bug** in Home Glance.

The app will open GitHub Issues and pre-fill basic device information. Screenshots are very helpful when the problem is visual.

If you do not use GitHub, use **Application → Trouble → Contact developer** instead.

## Feature ideas

Use the **Feature request** template in GitHub Issues if you have an idea for a new option or improvement.

## Thank you

Home Glance is inspired by the simplicity of Another Widget and is being shaped by real-world testing on different Android devices and launchers.

Every useful report helps improve compatibility and reliability.
