# Home Glance Roadmap

Home Glance is in public testing. This roadmap shows the planned direction of development without promising fixed release dates. Priorities can still change when testing exposes a more important compatibility or reliability issue.

The latest published APK is **v0.2.3**, a public test prerelease. Development builds and experiments are not part of the public download until they are explicitly released.

## Priority 01 — Music widget

Before the broader Another Widget feature-parity work, Home Glance will gain a dedicated music widget.

Planned scope:

- Current track and artist information
- Album information and artwork where Android exposes it
- Play / pause and previous / next controls where supported by the active media session
- Filtering or choosing relevant music players
- A clean Home Glance visual style that stays readable on different widget sizes
- Reliable refresh when playback starts, stops or changes

The goal is a useful media widget that feels native to Home Glance rather than a separate design pasted onto the project.

## Priority 02 — Wireless headphones widget

The second major feature will be a dedicated widget for Bluetooth / wireless headphones.

Planned scope:

- Connection state
- Device name / model
- Battery information
- Left / right / case battery levels when the hardware and Android Bluetooth stack expose them
- ANC / Transparency / Off controls on supported headphones
- A brand-independent core first, with device-specific integrations only where required
- Graceful fallback when a device exposes only basic Bluetooth battery information

The initial compatibility work will focus on real-device testing before expanding support to more brands.

## Phase 1 — Layout, typography and actions

After the two new widgets, development will move to the first Another Widget parity phase.

Planned work:

- Main and secondary text size controls
- Main and secondary text colors and opacity
- Separate light / dark appearance values where useful
- Text shadow controls
- Expanded font selection and custom font support
- Custom date formatting and capitalization
- Widget alignment: left / center / right
- More precise row spacing and clock margins
- Divider controls
- Background color and opacity controls
- Per-area tap actions
- Choose which app opens from clock, weather, calendar and event areas
- Actions such as default app, do nothing and refresh widget

All of these settings should remain visible immediately in the pinned Live Preview.

## Phase 2 — Clock, calendar and weather parity

The second parity phase will bring the remaining core Another Widget options into Home Glance while keeping the current Home Glance design.

### Clock

- Clock on / off
- Clock size, color and opacity
- AM / PM option for 12-hour mode
- Alternative time zone with a custom label
- Configurable clock tap action

### Calendar

- All-day event visibility
- Accepted / tentative / declined event filters
- Busy-only events
- Relative time / countdown controls
- One-line or multi-line event display
- Event time or event location as secondary information
- Configurable event look-ahead window
- Configurable calendar refresh frequency
- Multiple upcoming events
- Direct event details or selected calendar app on tap

### Weather

- Automatic and manual location
- Celsius / Fahrenheit / system units
- Configurable refresh interval
- Multiple weather providers where practical
- Provider-specific API-key handling when required
- Clear provider and network error states
- Expanded weather icon packs
- Configurable weather tap action

## Phase 3 — Smart Glance providers

The third parity phase will recreate the most powerful idea from Another Widget as a modern Home Glance system.

Planned providers:

- Next alarm
- Battery / charging state
- Currently playing music
- Important notifications
- Greetings
- Custom user note / custom information
- Daily steps using a modern Android health integration where possible
- Calendar events as a Smart Glance provider

Planned behavior:

- Every provider can be enabled or disabled independently
- Provider priority can be reordered
- Temporary information can replace normal content only when relevant
- Home Glance automatically returns to the standard view when that information expires
- Notification and media sources can be filtered
- Temporary notification visibility can use configurable timeouts

## Ongoing work

Alongside the roadmap above:

- Fix compatibility issues across Android devices and launchers
- Improve weather, calendar and alarm reliability
- Expand localization
- Improve accessibility
- Keep installation, update and feedback flows stable
- Continue testing on real devices rather than relying only on emulators

## Project philosophy

Home Glance is inspired by the simplicity of Another Widget and aims to become its modern spiritual successor, but the goal is not a visual clone.

The direction is:

**all the useful control Another Widget offered, plus modern Android support, new widgets and active development — without turning the home screen into noise.**
