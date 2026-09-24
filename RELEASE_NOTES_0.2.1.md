# Home Glance v0.2.1

Home Glance v0.2.1 is a focused reliability update for calendar refresh and widget text animation.

## What's new

- Calendar changes can now refresh the widget automatically instead of waiting for the regular 30-minute widget update window
- Added Android Calendar provider change monitoring using a content-triggered background job
- Calendar event and reminder changes are debounced briefly before refresh so related provider writes can settle
- Fixed clipped standard-mode widget text showing an unwanted ellipsis
- Fixed a first-cycle long-text scrolling glitch that could briefly show two calendar text layers after dismissing a smart weather insight
- Preserved the existing 30-minute system widget refresh as a fallback

## Testing focus

Please pay particular attention to:
- adding a new calendar event while the widget is visible
- editing an existing event
- deleting an event
- changing an event reminder
- dismissing a smart weather insight while calendar scrolling is enabled
- long text in Standard weather mode

Home Glance remains in public testing. Feedback and bug reports are welcome.
