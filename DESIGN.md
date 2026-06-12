# Design System Specification: Editorial Intelligence

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Ether."** 

ArrLink is not just a software company; it is an engineering atelier. To reflect this, the design system moves away from the "flat and boxed" appearance of standard SaaS platforms toward a high-end, editorial aesthetic. We achieve this through **Intentional Asymmetry** and **Tonal Depth**. By leveraging Material Design's structural logic and infusing it with Glassmorphism, we create a UI that feels like light passing through a high-tech lens—futuristic, precise, and authoritative.

The interface should feel curated. We utilize expansive breathing room (negative space) and a sharp contrast between the utilitarian precision of **Inter** and the intellectual elegance of **Space Grotesk** (serving as a modern, high-tech evolution of the brand’s serif roots).

---

## 2. Colors & Surface Philosophy

### The Pallete Logic
The color system is built on a "Dark Mode First" foundation. We use `surface` (#131313) as our canvas, allowing the `primary` (#f2ca50) gold to act as a laser-focused accent that guides the eye to conversion points.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. 
*   **Boundaries** must be established through background shifts. For example, a `surface-container-low` hero section should transition into a `surface` section without a stroke.
*   **Separation** is achieved through the Spacing Scale or subtle shifts in tonal value.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of glass and stone. 
*   **Foundation:** `surface-container-lowest` (#0e0e0e) for the background.
*   **Content Areas:** `surface-container` (#20201f) for main content blocks.
*   **Interactive Cards:** `surface-container-highest` (#353535) for elements that require the user's immediate attention.

### The "Glass & Gradient" Rule
To elevate the "Aether" feel, use Glassmorphism for floating UI (navigation bars, tooltips, and dropdowns). 
*   **Formula:** `surface-variant` at 60% opacity + `backdrop-filter: blur(20px)`.
*   **Gradients:** Use a subtle linear gradient from `primary` (#f2ca50) to `primary-container` (#d4af37) for Hero CTAs. This creates a metallic, high-fidelity sheen that feels premium rather than "web-native."

---

## 3. Typography
The typography system balances the cold precision of engineering with the warmth of a luxury publication.

*   **Display & Headlines (Space Grotesk):** Used for high-impact statements. The rhythmic, geometric nature of Space Grotesk mirrors the structure of code.
*   **Body & Labels (Inter):** Used for maximum legibility in high-density data environments.

| Level | Token | Font | Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Display LG** | `display-lg` | Space Grotesk | 3.5rem | 700 |
| **Headline MD** | `headline-md` | Space Grotesk | 1.75rem | 500 |
| **Title LG** | `title-lg` | Inter | 1.375rem | 600 |
| **Body LG** | `body-lg` | Inter | 1rem | 400 |
| **Label MD** | `label-md` | Inter | 0.75rem | 500 (Caps) |

---

## 4. Elevation & Depth

### The Layering Principle
Avoid the "sticker" effect. Depth is achieved by "stacking" surface tiers. Place a `surface-container-high` card on a `surface` background to create a soft, natural lift.

### Ambient Shadows
Traditional black shadows are forbidden. 
*   **Shadow Specs:** Blur: 40px, Spread: 0, Opacity: 6%. 
*   **Shadow Color:** Must be a tinted version of `on-surface` (#e5e2e1) to mimic light refracting through glass, rather than a muddy grey.

### The "Ghost Border" Fallback
If accessibility requirements demand a border (e.g., in a complex data table), use a **Ghost Border**.
*   **Token:** `outline-variant` (#4d4635) at 15% opacity.
*   **Style:** 1px width. It should be felt, not seen.

---

## 5. Components

### Navigation (The Glass Rail)
The top navigation must use the Glassmorphism rule. It should feel detached from the content, floating over the page as the user scrolls. Breadcrumbs are mandatory for information density, styled in `label-sm` with `on-surface-variant`.

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), black text (`on-primary`), `md` corner radius.
*   **Secondary:** Glass-fill. `surface-variant` at 20% opacity with a `Ghost Border`.
*   **Tertiary:** No fill. `primary` text with a 2px underline on hover.

### Information Density: Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use 24px of vertical padding and a background shift on hover.
*   **Cards:** No shadows by default. Use `surface-container-low` backgrounds. On hover, transition to `surface-container-high` and apply an **Ambient Shadow**.

### Input Fields
Inputs should use the "Underline" style from Material Design, but refined. 
*   **Background:** `surface-container-highest` at 40% opacity.
*   **Active State:** The bottom border animates from `outline` to `primary` gold.

---

## 6. Do's and Don'ts

### Do
*   **DO** use intentional asymmetry. For example, align text to the left but place supporting imagery or data points off-center to create a dynamic, editorial feel.
*   **DO** prioritize "Breathing Room." Even in high-density data views, use the Spacing Scale to ensure no element feels "cramped."
*   **DO** use `primary` gold sparingly. It is a surgical tool for focus, not a decorative paint.

### Don't
*   **DON'T** use 100% black (#000000) or pure white borders. They break the "Aether" illusion.
*   **DON'T** use standard Material Design drop shadows (Elevation 1-24). Stick strictly to the **Ambient Shadow** and **Tonal Layering** rules.
*   **DON'T** use generic iconography. Use ultra-thin (1pt) stroke icons that match the `on-surface-variant` color.

### Accessibility Note
While we prioritize a "Glass" aesthetic, ensure that all text layers maintain a contrast ratio of at least 4.5:1 against their background. When using Glassmorphism, ensure the `backdrop-blur` is high enough to keep text legible over varying background elements.