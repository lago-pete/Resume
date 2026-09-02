# Photos

Drop image files in this folder using the names below. Any slot with no file
shows a labelled placeholder, so you can add photos one at a time.

Accepted extensions (tried automatically, in order): `.jpg` `.jpeg` `.png` `.webp`
Recommended size: ~1200 px on the long edge, < 400 KB each.

| File name                         | Where it shows up                     |
|-----------------------------------|---------------------------------------|
| `profile.jpg`                     | Round photo at the top (use a square) |
| `aviator-1.jpg` … `-3.jpg`        | RC Flight Telemetry System            |
| `rack-1.jpg` … `-3.jpg`           | Smart Rack Monitoring Platform        |
| `baker-boyer-1.jpg` … `-2.jpg`    | Baker Boyer National Bank             |
| `triangle-1.jpg` … `-2.jpg`       | Triangle Fraternity (Leadership)      |

The MTX Operating System project has no photo slots.

## Changing how many photo slots a section has

In `index.html`, find the section's `<div class="photos" ...>` and edit
`data-count`. Example — give the Aviator project 5 photo slots:

```html
<div class="photos" data-count="5" data-prefix="images/aviator-" data-label="photo"></div>
```

An empty slot shows the file name it's waiting for (e.g. `aviator-1.jpg`).
Click a filled photo to open it full size.
