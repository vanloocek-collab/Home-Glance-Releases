# Home Glance v0.2.2

Home Glance v0.2.2 is a compatibility and reliability update focused on Xiaomi / POCO alarms, launcher text handling, widget resizing and refresh stability.

## What's new

- Fixed incorrect and stale next-alarm times on Xiaomi / POCO devices.
- Fixed temporary `00:00` after disabling an alarm on HyperOS.
- Added direct Settings-provider monitoring for Xiaomi / POCO alarm changes so the widget updates reliably without manual refresh.
- Fixed duplicate ticker text on some POCO and OnePlus launchers.
- Fixed weather text clipping on Xiaomi / POCO.
- Fixed date text remaining clipped after widget resize.
- Improved Refresh Widget full rebuilds and Dynamic Weather transitions to prevent stale launcher state.

## Verification

The release candidate was tested on POCO / Xiaomi and OnePlus 12, including repeated alarm enable/disable cycles, switching between multiple alarms, widget resizing, weather text, Dynamic Weather and manual widget refresh.

Home Glance remains in public testing. Feedback and bug reports are welcome.
