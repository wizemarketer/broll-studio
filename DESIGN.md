---
name: B-Roll Studio
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f1'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#506072'
  primary: '#041525'
  on-primary: '#ffffff'
  primary-container: '#1a2a3a'
  on-primary-container: '#8191a5'
  inverse-primary: '#b7c8dd'
  secondary: '#00677d'
  on-secondary: '#ffffff'
  secondary-container: '#50d9fe'
  on-secondary-container: '#005c70'
  tertiary: '#211100'
  on-tertiary: '#ffffff'
  tertiary-container: '#38250d'
  on-tertiary-container: '#a88b6b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4fa'
  primary-fixed-dim: '#b7c8dd'
  on-primary-fixed: '#0c1d2c'
  on-primary-fixed-variant: '#384859'
  secondary-fixed: '#b3ebff'
  secondary-fixed-dim: '#4cd6fb'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#ffddb9'
  tertiary-fixed-dim: '#e2c19e'
  on-tertiary-fixed: '#291803'
  on-tertiary-fixed-variant: '#594328'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e4e2e3'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style
The design system embodies the persona of a **Creative Studio with AI Intelligence**. It balances the precision of an editing suite with the fluid, assistive nature of AI. The aesthetic is **Corporate Modern** with a lean toward a professional workspace—prioritizing clarity, functional elegance, and a sense of "boundless canvas" for video creators.

The target audience consists of content creators, video editors, and marketers who require a reliable, high-fidelity tool that stays out of the way of the creative process while providing sophisticated visual feedback. The UI should feel like a high-end physical studio: organized, stable, and inspiring.

## Colors
The palette is rooted in a professional **Deep Blue** (`#1A2A3A`) that provides a grounded, authoritative foundation for navigation and structural elements. 

- **Primary & Secondary:** The interaction model is driven by **Teal** (`#00B4D8`), used for key actions and interactive states to signify "AI activity" and energy.
- **Accent:** **Coral** (`#FF6B6B`) is reserved for high-attention moments like drag indicators, timeline markers, or critical notifications.
- **Functional Neutral:** The interface uses a clean **Light Gray** (`#F8F9FA`) background to allow video thumbnails and content to pop, with white surfaces used to define clear content containers.

## Typography
This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and clean appearance. The type hierarchy is designed for high readability in dense data environments.

- **Headings:** Use a bold weight (700) with slight negative letter-spacing to create a "locked-in" professional look.
- **Labels:** Use a medium weight (500) and are often paired with icons. In small UI fragments, labels should use uppercase with slight tracking to improve scannability.
- **Body:** Standardized at 16px for comfort, ensuring that scripts and AI-generated suggestions are easy to parse during long editing sessions.

## Layout & Spacing
The layout follows a strict **8px grid system**, ensuring all elements align with mathematical precision. 

- **Grid Model:** A 12-column fluid grid is used for the main dashboard, but the core editing interface utilizes a **Fixed Sidebar / Fluid Content** model. 
- **The Sidebar (280px)** houses the script and AI suggestions, while the **Main Canvas** expands to provide maximum real estate for video preview and timeline manipulation.
- **Breakpoints:** 
  - **Mobile (<768px):** Single column. Sidebar becomes a bottom sheet or a hidden drawer.
  - **Tablet (768px - 1024px):** Reduced margins (16px), 2-column layout for script and preview.
  - **Desktop (>1024px):** Full 3-pane layout (Script -> Preview -> Asset Library).

## Elevation & Depth
Depth is created using **Tonal Layers** supplemented by light, ambient shadows. 

- **Surface Levels:** 
  - **Level 0 (Background):** `#F8F9FA`. Used for the global app background.
  - **Level 1 (Cards/Panels):** `#FFFFFF`. Used for the main workspace panels.
  - **Level 2 (Popovers/Modals):** High elevation with a distinct shadow: `0 2px 12px rgba(26, 42, 58, 0.08)`.
- **Borders:** Thin, subtle borders (`#E8ECF1`) are used to define regions when the background and surface colors are the same, maintaining a flat but structured "blueprint" feel.

## Shapes
The shape language is **Rounded**, striking a balance between the technical rigidity of video editing software and the approachable friendliness of a modern AI tool.

- **Standard Radius:** 8px for buttons and input fields to maintain a compact, professional look.
- **Container Radius:** 12px for cards and major panels to soften the layout.
- **Media Radius:** Video thumbnails should always feature a 4px radius to preserve the "frame" look without appearing too sharp.

## Components
- **Buttons:**
  - **Primary:** Deep Blue background, white text. Solid and authoritative.
  - **Action:** Teal background for "Generate" or "Assemble" actions.
  - **Ghost:** Transparent with Deep Blue border for secondary toolbar actions.
- **Cards:** White background, 12px radius, 1px border. Use the custom ambient shadow when hovering to indicate interactivity.
- **Inputs:** 8px radius, `#E8ECF1` border. Focused state uses a 2px Teal outline.
- **Chips:** Used for "Video Tags" or "Scene Keywords". Light Teal background with Deep Blue text, fully rounded (pill-shaped).
- **Timeline Indicators:** The Coral color is used for the "Playhead" and "Drag Handles" to provide high-contrast visibility against video content.
- **AI Suggestion Lists:** Use a subtle subtle gradient or a "shimmer" effect when loading to reinforce the intelligent nature of the platform.