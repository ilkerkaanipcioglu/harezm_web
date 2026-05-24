# master_prompts.md — Professional Surrealist Design System (V2.0)

## 0. System Philosophy & Brand DNA
This system is built on a **Dual Identity** architecture. Both styles share the same base structure and stroke weight but differ in their emotional and functional expression.

- **LESSTUPID (Creative Chaos):** The "Exploration Layer". Symbolic, intelligent absurdity. Focuses on curiosity and brand character. *Constraint: Avoid grotesque, disturbing, or horror-themed visuals.*
- **ENY (Controlled Intelligence):** The "Execution Layer". Systematic, scalable, and recognizable. Focuses on "Product Thinking" and functional clarity. *Constraint: Linear/Apple/Stripe level precision.*

---

## 1. Global Constraints (Non-Negotiable)
AI Models (MJ/DALL-E) must strictly adhere to these rules to maintain design system consistency:

- **Focal Object:** Maximum 1 focal object per icon. No background scene complexity.
- **Perspective:** Frontal or 15-degree isometric view. No extreme distortion.
- **Stroke System:** Consistent stroke thickness across all icons (1/12 ratio).
- **Effects:** No gradients, no shadows, no lighting effects, no glow. Flat 2D marker style.
- **Colors:** Background: `#FFFFFF` (Solid White Canvas). Outlines: `#1A1A1A` (Inky Black).
- **Tone:** Intelligent and helpful. No fear, chaos, or confusion.
- **Illustration Logic:** Every ILLU (Large) variant must physically incorporate its corresponding NAV (Simple) icon somewhere within the composition (e.g., as a sign, a stamp, or a subtle motif).

---

## 2. Icon Geometry System
- **Grid:** Icons are built on a perfect square grid.
- **Safe Padding:** 12% internal padding from all edges.
- **Stroke Weight:** 1/12 of the icon's total size (Uniform weight).
- **Corners:** Slightly rounded (soft organic feel), never sharp or jagged.
- **Details:** No micro-details smaller than 2px (at 24px) to ensure scalability.

---

## 3. Brand Color Hierarchy
Color roles are strictly mapped to handle site-specific identity inheritance:

| Site | Brand Primary (`[COLOR_PRIMARY]`) | Support/Subtle (`[COLOR_SECONDARY]`) |
| :--- | :--- | :--- |
| **HAREZM** (Plum) | **Plum (#82165F)** | **Subtle Gold or Azure (Rare)** |
| **ENY** (Lime) | **Lime (#B5D400)** | **Slate Blue (#708090) (Rare)** |

**Rule:** `[COLOR_PRIMARY]` must dominate (>80% of color area). `[COLOR_SECONDARY]` is used only for vital support details.

---

## 4. Navigation (NAV) vs. Illustration (ILLU) Separation

### **NAV Variants (16–24px)**
- **Recognition Time:** Must be understood in <1 second.
- **Composition:** Single element, no secondary artifacts, no storytelling.
- **Logic:** Direct function (e.g., Folder = Storage).

### **ILLU Variants (48px+)**
- **Composition:** Can include narrative, metaphor, and secondary elements. **Must incorporate a functional icon element (NAV style) within the design.**
- **Usage:** Marketing, onboarding, empty states.
- **Evolution:** Must be scalable to 3D or animation.

---

## 5. Base Templates

**L-NAV — Lesstupid Navigation**
> *"A minimalist navigation icon of [ikon]. [DETAY]. **Strict single-flow silhouette, thick uniform #1A1A1A marker stroke.** Pure white background (#FFFFFF). Color: isolated splashes of [COLOR_PRIMARY] (80%) and rare [COLOR_SECONDARY] (20%). Intelligent symbolic absurdity. No narrative elements. High legibility at 16px. --v 6.0"*

**L-ILLU — Lesstupid Illustration**
> *"A conceptual surrealist illustration of [ikon]. [DETAY]. **Intelligent symbolic absurdity, no grotesque elements. Must incorporate the simple [ikon] icon as a functional detail within the scene.** Thick #1A1A1A marker lines with visible light pencil hatching. Pure white background (#FFFFFF). Color: layered rough dry-brush blocky splashes of [COLOR_PRIMARY] and subtle [COLOR_SECONDARY]. Professional art, creative chaos. --v 6.0"*

**E-NAV — Eny Navigation**
> *"A minimalist navigation icon of [ikon]. [DETAY]. **Systematic bold silhouette, strict uniform #1A1A1A marker stroke, clean organic geometry.** Pure white background (#FFFFFF). Color: flat precise [COLOR_PRIMARY] accents and rare [COLOR_SECONDARY] details. Product thinking, Apple-level clarity. No narrative elements. High legibility at 16px. --v 6.0"*

**E-ILLU — Eny Illustration**
> *"A conceptual premium illustration of [ikon]. [DETAY]. **Linear and systematic technical illustration. Must integrate the simple [ikon] icon as a precise functional branding element within the composition.** Thick #1A1A1A marker lines, smooth controlled organic ink. Pure white background (#FFFFFF). Color: flat precise [COLOR_PRIMARY] and [COLOR_SECONDARY] dual-highlights. Premium brand aesthetic, no hatching. High-tech product symbolism. --v 6.0"*

---

## 6. Validation Checklist
Each produced icon must pass:
- [ ] Recognizable in <1 second at 16px (NAV).
- [ ] Primary color dominates secondary.
- [ ] No grotesque/disturbing elements (Lesstupid).
- [ ] No narrative/scenic elements (NAV).
- [ ] Matches the 1/12 stroke weight ratio.

---

## BÖLÜM 1 — Genel UI İkonları

### 1. Home
- **L-NAV**: A house silhouette on two thick human legs, mid-step. Strict silhouette, uniform marker stroke, [COLOR_PRIMARY] on the door.
- **L-ILLU**: A surreal intelligent house walking on oversized human legs. Heavy hatching, layered [COLOR_PRIMARY] and subtle [COLOR_SECONDARY] splashes. Symbolic absurdity.
- **E-NAV**: A clean, geometric house silhouette. Product thinking, functional UI recognition, flat [COLOR_PRIMARY] on the door.
- **E-ILLU**: A house confidently walking on two human legs. Systematic premium ink, flat precise [COLOR_PRIMARY] on the legs and [COLOR_SECONDARY] details. **The simple house icon is visible as a small branding mark above the door.**

---

### 2. Search
- **L-NAV**: A magnifying glass silhouette with a large eye integrated into the lens. Strict silhouette, [COLOR_PRIMARY] iris.
- **L-ILLU**: A magnifying glass where the lens is a wide-open, intelligent eye. Precise hatching on the eye's depth, [COLOR_PRIMARY] and subtle [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean, bold magnifying glass silhouette. Minimalist stroke, flat [COLOR_PRIMARY] accent on the handle.
- **E-ILLU**: A magnifying glass with a sleek, high-tech eye inside the lens. Premium ink, flat precise [COLOR_PRIMARY] on the iris. **The simple search icon is etched into the handle of the magnifying glass.**

---

### 3. Notification
- **L-NAV**: A bell silhouette with a tiny face peaking out. Strict silhouette, [COLOR_PRIMARY] on the face.
- **L-ILLU**: A bell vibrating with energy, showing a tiny figure inside. Symbolic movement, heavy hatching, [COLOR_PRIMARY] and [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean, bold bell silhouette. Systematic design, flat [COLOR_PRIMARY] on the clapper.
- **E-ILLU**: A bell with a single minimalist figure sitting inside. Premium ink, flat precise [COLOR_PRIMARY] on the figure. **The simple bell icon is visible as a motif on the side of the figure's robe.**

---

### 4. User / Profile
- **L-NAV**: A user silhouette with a picture frame for a head. Strict silhouette, [COLOR_PRIMARY] on the frame.
- **L-ILLU**: A figure whose head is an elegant floating picture frame. Symbolic identity, clean hatching, [COLOR_PRIMARY] and [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean user silhouette with a circular head. Functional UI recognition, flat [COLOR_PRIMARY] on the torso.
- **E-ILLU**: A user's silhouette with an empty picture frame mounted where the face should be. Premium ink, flat precise [COLOR_PRIMARY] on the frame.

---

### 5. Settings / Gear
- **L-NAV**: A gear with a pair of tiny hands growing from its center. Strict silhouette, [COLOR_PRIMARY] on hands.
- **L-ILLU**: A large gear being turned by dozens of tiny, intelligent hands. Symbolic mechanism, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric gear silhouette. Systematic design, flat [COLOR_PRIMARY] on one gear tooth.
- **E-ILLU**: A gear with a pair of precision dual-hands pushing a single tooth. Premium ink, flat precise [COLOR_PRIMARY] on the hands.

---

### 6. Heart / Like
- **L-NAV**: A thick heart with a single X stitch. Strict silhouette, [COLOR_PRIMARY] on the stitch.
- **L-ILLU**: A beating heart with a single, elegant surgical stitch. Symbolic care, heavy hatching, [COLOR_PRIMARY] and subtle [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean, bold heart silhouette. Functional UI recognition, flat [COLOR_PRIMARY] accent.
- **E-ILLU**: A heart with a single premium bandage and a precise stitch. Premium ink, flat precise [COLOR_PRIMARY] on the bandage.

---

### 7. Send / Arrow
- **L-NAV**: A paper plane silhouette with a tiny hand holding it. Strict silhouette, [COLOR_PRIMARY] on the hand.
- **L-ILLU**: A paper plane with a muscular arm launching it into the air. Symbolic power, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric paper plane silhouette. Bold stroke, flat [COLOR_PRIMARY] on the tail.
- **E-ILLU**: A paper plane with a tiny, minimalist pilot's hand waving from the cockpit. Premium ink, flat precise [COLOR_PRIMARY] on the hand.

---

### 8. Chat / Message
- **L-NAV**: A speech bubble silhouette with a door handle. Strict silhouette, [COLOR_PRIMARY] on handle.
- **L-ILLU**: A speech bubble that is physically a wooden door with a key. Symbolic entry, deep hatching, [COLOR_PRIMARY] and [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean speech bubble silhouette. Product thinking, flat [COLOR_PRIMARY] tail.
- **E-ILLU**: A speech bubble with a tiny, sleek door slightly ajar. Premium ink, flat precise [COLOR_PRIMARY] on the door handle.

---

### 9. Mail / Email
- **L-NAV**: An envelope with tiny running legs. Strict silhouette, [COLOR_PRIMARY] on legs.
- **L-ILLU**: An envelope with human legs sprinting urgently. Symbolic delivery, intense hatching, [COLOR_PRIMARY] and [COLOR_SECONDARY] splashes.
- **E-NAV**: A clean envelope silhouette with a bold seal. Systematic design, flat [COLOR_PRIMARY] seal.
- **E-ILLU**: An envelope with two sleek, athletic legs sprinting mid-stride. Premium ink, flat precise [COLOR_PRIMARY] on the legs.

---

### 10. Calendar
- **L-NAV**: A calendar page with an eraser. Strict silhouette, [COLOR_PRIMARY] on eraser.
- **L-ILLU**: A calendar page where a figure is using an eraser to remove a date. Symbolic time-edit, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean calendar silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the header bar.
- **E-ILLU**: A calendar page with a tiny, precise figure erasing a single date. Premium ink, flat precise [COLOR_PRIMARY] on the eraser.

---

### 11. Camera
- **L-NAV**: A camera body with a large eye as the lens. Strict silhouette, [COLOR_PRIMARY] on iris.
- **L-ILLU**: A camera where the lens is a wide, curious eye taking a photograph of a cloud. Symbolic perspective, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric camera silhouette. Systematic design, flat [COLOR_PRIMARY] on the shutter button.
- **E-ILLU**: A sleek camera body with a minimalist, glowing eye inside the lens. Premium ink, flat precise [COLOR_PRIMARY] on the iris.

---

### 12. Gallery / Photos
- **L-NAV**: A picture frame with a messy cloud inside. Strict silhouette, [COLOR_PRIMARY] on cloud.
- **L-ILLU**: A picture frame full of floating, sentient clouds that are spilling out of the borders. Symbolic memory, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean picture frame silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the frame corner.
- **E-ILLU**: A picture frame showing a stylized, geometric mountain landscape. Premium ink, flat precise [COLOR_PRIMARY] on the mountain peak.

---

### 13. Video
- **L-NAV**: A video camera silhouette with a butterfly wing. Strict silhouette, [COLOR_PRIMARY] on wing.
- **L-ILLU**: A video camera where the film reels are actually large, moving butterfly wings. Symbolic motion, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold video camera silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the recording LED.
- **E-ILLU**: A professional video camera with stylized, geometric butterfly wings integrated into the body. Premium ink, flat precise [COLOR_PRIMARY] on the wings.

---

### 14. Trash / Delete
- **L-NAV**: A trash can with a messy plant growing out. Strict silhouette, [COLOR_PRIMARY] on leaves.
- **L-ILLU**: A trash can where discarded data is being transformed into a rapidly growing oak tree. Symbolic recycling, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold trash can silhouette. Systematic design, flat [COLOR_PRIMARY] on the lid handle.
- **E-ILLU**: A trash can with a single, perfectly drawn seedling growing from the center of the opening. Premium ink, flat precise [COLOR_PRIMARY] on the seedling.

---

### 15. Download
- **L-NAV**: A cloud with a dangling fishing hook. Strict silhouette, [COLOR_PRIMARY] on hook.
- **L-ILLU**: A cloud where a figure is using a fishing rod to pull data-cubes out of the air. Symbolic retrieval, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud with a bold downward arrow. Functional UI recognition, flat [COLOR_PRIMARY] on the arrow head.
- **E-ILLU**: A cloud with a single, perfectly aligned fishing line retrieving a glowing data-cube. Premium ink, flat precise [COLOR_PRIMARY] on the cube.

---

### 16. Upload
- **L-NAV**: A cloud with a tiny hand holding a rocket. Strict silhouette, [COLOR_PRIMARY] on rocket.
- **L-ILLU**: A cloud where a figure is physically throwing data-cubes into a sky-vortex. Symbolic storage, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud icon with a bold upward arrow. Functional UI recognition, flat [COLOR_PRIMARY] on the arrow head.
- **E-ILLU**: A cloud with a single, perfectly aligned beam of light launching a glowing data-cube. Premium ink, flat [COLOR_PRIMARY] on the cube.

---

### 17. Share
- **L-NAV**: Three dots connected by a single, messy vine. Strict silhouette, [COLOR_PRIMARY] on vine.
- **L-ILLU**: Three floating nodes connected by a rapidly growing vine that is blooming with tiny speech bubbles. Symbolic connection, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric share icon. Systematic design, flat [COLOR_PRIMARY] on the central node.
- **E-ILLU**: Three sleek data-nodes connected by precise, glowing fiber-optic lines. Premium ink, flat [COLOR_PRIMARY] on the connection lines.

---

### 18. Link / Attachment
- **L-NAV**: Two chain links made of bone. Strict silhouette, [COLOR_PRIMARY] on one link.
- **L-ILLU**: Two oversized chain links locked together, with tiny robotic hands reinforcing the joint. Symbolic bond, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric paperclip silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the inner loop.
- **E-ILLU**: Two perfectly mirrored chain links interlocking with a sleek, digital glow at the center. Premium ink, flat [COLOR_PRIMARY] on the glow point.

---

### 19. Cloud / Online
- **L-NAV**: A cloud with a single, messy ethernet plug. Strict silhouette, [COLOR_PRIMARY] on plug.
- **L-ILLU**: A massive, fluffy cloud connected to the ground by a single, giant ethernet cable. Symbolic connection, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold cloud silhouette. Systematic design, flat [COLOR_PRIMARY] on the cloud's bottom edge.
- **E-ILLU**: A cloud with a minimalist, glowing circuit-path integrated into its base. Premium ink, flat [COLOR_PRIMARY] on the circuit path.

---

### 20. Lock / Security
- **L-NAV**: A padlock with a single, unblinking eye. Strict silhouette, [COLOR_PRIMARY] on iris.
- **L-ILLU**: A massive padlock where the keyhole is an intelligent eye watching for entry. Symbolic vigilance, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold padlock silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the shackle.
- **E-ILLU**: A sleek, high-tech padlock with a minimalist biometric sensor detail. Premium ink, flat [COLOR_PRIMARY] on the sensor point.

---

### 21. Shield / Protect
- **L-NAV**: A shield silhouette with a thick bandage. Strict silhouette, [COLOR_PRIMARY] on bandage.
- **L-ILLU**: A medieval shield that has been repaired with several high-tech digital patches. Symbolic resilience, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, geometric shield silhouette. Systematic design, flat [COLOR_PRIMARY] on the central crest.
- **E-ILLU**: A professional shield with a single, perfectly aligned diagonal highlight of glowing data. Premium ink, flat [COLOR_PRIMARY] on the highlight.

---

### 22. Key / Access
- **L-NAV**: A key where the head is a tiny, messy brain. Strict silhouette, [COLOR_PRIMARY] on brain.
- **L-ILLU**: A long, ornate key where the teeth are made of binary code and the head is an intelligent brain. Symbolic logic, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold key silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the teeth.
- **E-ILLU**: A minimalist key where the teeth form a clean, geometric data-sequence. Premium ink, flat [COLOR_PRIMARY] on the sequence.

---

### 23. Eye / View
- **L-NAV**: A wide eye with a tiny window as the pupil. Strict silhouette, [COLOR_PRIMARY] on window.
- **L-ILLU**: A giant, intelligent eye looking through a floating window into another dimension. Symbolic vision, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold eye silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the iris.
- **E-ILLU**: A sleek eye with a minimalist lens-reflection detail. Premium ink, flat [COLOR_PRIMARY] on the reflection.

---

### 24. Close / Cancel
- **L-NAV**: A thick X with messy, frayed ends. Strict silhouette, [COLOR_PRIMARY] on one arm.
- **L-ILLU**: A giant X made of two crossed, tattered flags. Symbolic cessation, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold X icon. Systematic design, flat [COLOR_PRIMARY] on the intersection.
- **E-ILLU**: A minimalist, perfectly symmetric X with slightly rounded ends. Premium ink, flat [COLOR_PRIMARY] highlight on the stroke.

---

### 25. Check / Confirm
- **L-NAV**: A checkmark with a single, messy seedling leaf. Strict silhouette, [COLOR_PRIMARY] on leaf.
- **L-ILLU**: A checkmark that has taken root and is blooming with small, digital flowers. Symbolic completion, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold checkmark. Functional UI recognition, flat [COLOR_PRIMARY] on the long arm.
- **E-ILLU**: A minimalist, perfectly balanced checkmark with uniform stroke. Premium ink, flat [COLOR_PRIMARY] accent on the tip.

---

### 26. Plus / Add
- **L-NAV**: A plus sign with a tiny, messy sprout. Strict silhouette, [COLOR_PRIMARY] on sprout.
- **L-ILLU**: A plus sign being constructed by several tiny, intelligent robotic arms. Symbolic growth, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold plus icon. Systematic design, flat [COLOR_PRIMARY] on the horizontal bar.
- **E-ILLU**: A minimalist plus sign with perfectly rounded ends and uniform weight. Premium ink, flat [COLOR_PRIMARY] accent at the center.

---

### 27. Minus / Remove
- **L-NAV**: A minus sign with a tiny, messy eraser. Strict silhouette, [COLOR_PRIMARY] on eraser.
- **L-ILLU**: A minus sign that is physically an eraser being used to clear data. Symbolic subtraction, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold minus icon. Functional UI recognition, flat [COLOR_PRIMARY] on the full bar.
- **E-ILLU**: A minimalist minus sign with perfectly rounded ends and uniform weight. Premium ink, flat [COLOR_PRIMARY] accent.

---

### 28. Info / About
- **L-NAV**: An 'i' inside a lightbulb silhouette. Strict silhouette, [COLOR_PRIMARY] on filament.
- **L-ILLU**: A giant lowercase 'i' that is glowing like a lighthouse lamp. Symbolic guidance, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold 'i' inside a circle. Systematic design, flat [COLOR_PRIMARY] on the dot.
- **E-ILLU**: A sleek, minimalist 'i' with a perfectly circular dot and uniform stroke. Premium ink, flat [COLOR_PRIMARY] on the dot.

---

### 29. Question / Help
- **L-NAV**: A question mark with a tiny, messy face. Strict silhouette, [COLOR_PRIMARY] on the dot.
- **L-ILLU**: A question mark that is physically a person in a thinking pose. Symbolic curiosity, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, bold question mark inside a circle. Functional UI recognition, flat [COLOR_PRIMARY] on the curve.
- **E-ILLU**: A minimalist question mark with a perfectly balanced curve and dot. Premium ink, flat [COLOR_PRIMARY] on the dot.

---

### 30. Menu / Hamburger
- **L-NAV**: Three horizontal lines with mismatched lengths. Strict silhouette, [COLOR_PRIMARY] on middle line.
- **L-ILLU**: Three thick wooden planks stacked to form a menu, with tiny keys hanging from each. Symbolic organization, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: Three clean, perfectly aligned horizontal lines. Systematic design, flat [COLOR_PRIMARY] on the top line.
- **E-ILLU**: Three minimalist, perfectly symmetric lines with slightly rounded ends. Premium ink, flat [COLOR_PRIMARY] accent on the center line.

---

## BÖLÜM 2 — AI & Agent İkonları

### 31. Neural Network
- **L-NAV**: A brain silhouette with messy cable-plugs. Strict silhouette, [COLOR_PRIMARY] on plugs.
- **L-ILLU**: A brain made of tangled ethernet cables looping into a single glowing socket. Symbolic connection, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean brain silhouette with functional data-nodes. Systematic design, flat [COLOR_PRIMARY] on the central node.
- **E-ILLU**: A brain visualized as a sleek geometric network of glowing nodes and fiber-optic paths. Premium ink, flat [COLOR_PRIMARY] on main nodes.

---

### 32. Machine Learning
- **L-NAV**: A robot head with a single, messy pencil. Strict silhouette, [COLOR_PRIMARY] on pencil tip.
- **L-ILLU**: A small robot sitting at a desk, its pencil autonomously solving equations. Symbolic learning, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean robot head silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the eyes.
- **E-ILLU**: A robotic hand carefully arranging perfectly cubes on a grid. Product thinking, flat [COLOR_PRIMARY] on the active cube.

---

### 33. Large Language Model (LLM)
- **L-NAV**: A filing cabinet with a single, messy mouth. Strict silhouette, [COLOR_PRIMARY] on mouth.
- **L-ILLU**: An enormous filing cabinet with a calm human mouth at the base. Symbolic knowledge, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean filing cabinet silhouette with a speech bubble detail. Systematic design, flat [COLOR_PRIMARY] on the bubble.
- **E-ILLU**: A filing cabinet where every drawer is a glowing, multi-colored speech bubble. Premium ink, flat [COLOR_PRIMARY] on the labels.

---

### 34. Prompt Engineering
- **L-NAV**: A quill pen wearing a tiny hard hat. Strict silhouette, [COLOR_PRIMARY] on hat.
- **L-ILLU**: A quill pen wearing a hard hat, writing on a typewriter that spits out gears. Symbolic construction, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean quill pen silhouette with a bold stylus tip. Functional UI recognition, flat [COLOR_PRIMARY] on the tip.
- **E-ILLU**: A digital stylus "sculpting" a block of code metaphorically. Premium ink, flat [COLOR_PRIMARY] on the stylus glow.

---

### 35. Training Data
- **L-NAV**: A conveyor belt feeding a funnel. Strict silhouette, [COLOR_PRIMARY] on funnel.
- **L-ILLU**: Endlessly tiny books feeding into a giant industrial funnel that drips onto a microchip. Symbolic refinement, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean conveyor belt silhouette with three data-blocks. Systematic design, flat [COLOR_PRIMARY] on the first block.
- **E-ILLU**: A stream of diverse data-icons flowing into a sleek geometric prism. Premium ink, flat [COLOR_PRIMARY] on the prism.

---

### 36. Model Output
- **L-NAV**: A printer with a single looping scroll. Strict silhouette, [COLOR_PRIMARY] on scroll.
- **L-ILLU**: A printer whose output scroll wraps around the room. Symbolic infinity, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean printer silhouette with a single page. Functional UI recognition, flat [COLOR_PRIMARY] on the page.
- **E-ILLU**: A printer whose output transforms from binary code to a perfect 3D object. Product thinking, flat [COLOR_PRIMARY] on the object.

---

### 37. Hallucination / Hata
- **L-NAV**: A robot pointing at a map of floating islands. Strict silhouette, [COLOR_PRIMARY] on the islands.
- **L-ILLU**: A robot confidently pointing at a map where cities are made of cake. Symbolic glitch, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean robot head with a warning-pin detail. Systematic design, flat [COLOR_PRIMARY] on the pin.
- **E-ILLU**: A circuit board where one path is blooming with electronic flowers. Premium ink, flat [COLOR_PRIMARY] on the flowers.

---

### 38. Inference
- **L-NAV**: A magnifying glass over a single footprint. Strict silhouette, [COLOR_PRIMARY] on footprint.
- **L-ILLU**: A magnifying glass hovering over thick fog, revealing one sharp footprint. Symbolic deduction, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean magnifying glass silhouette with a logic-path. Functional UI recognition, flat [COLOR_PRIMARY] on the path.
- **E-ILLU**: A dotted line connecting a lightbulb to an obscured object through a path of logic. Premium ink, flat [COLOR_PRIMARY] on the lightbulb.

---

### 39. Embeddings
- **L-NAV**: Two word shapes orbiting a central point. Strict silhouette, [COLOR_PRIMARY] on words.
- **L-ILLU**: Words floating in a 3D grid like stars, orbiting based on weight. Symbolic relationship, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: Three clean, aligned data-points in a vector-space. Systematic design, flat [COLOR_PRIMARY] on the main point.
- **E-ILLU**: A multi-dimensional grid where words are represented by glowing, linked dots. Product thinking, flat [COLOR_PRIMARY] on the cluster.

---

### 40. Fine-Tuning
- **L-NAV**: A robot being fitted with a tiny jacket. Strict silhouette, [COLOR_PRIMARY] on jacket.
- **L-ILLU**: A tailor fitting a suit onto a robot with precision needles. Symbolic adjustment, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean robot head with a precision dial. Functional UI recognition, flat [COLOR_PRIMARY] on the dial.
- **E-ILLU**: A technician using a high-precision digital screwdriver on a glowing machine-screw. Premium ink, flat [COLOR_PRIMARY] on the tool tip.

---

### 41. RAG / Retrieval
- **L-NAV**: A fishing rod cast into a book. Strict silhouette, [COLOR_PRIMARY] on hook.
- **L-ILLU**: A robot pulling a single glowing sentence out of a massive tattered book. Symbolic search, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean book silhouette with a retrieval-arrow. Systematic design, flat [COLOR_PRIMARY] on the arrow.
- **E-ILLU**: A robotic arm retrieving a single glowing data-cube from a library of blocks. Product thinking, flat [COLOR_PRIMARY] on the cube.

---

### 42. Token
- **L-NAV**: A coin stack with a single letter 'A'. Strict silhouette, [COLOR_PRIMARY] on coin.
- **L-ILLU**: A teetering pillar of coins stamped with glowing letters. Symbolic value, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, single coin silhouette with a code-symbol. Functional UI recognition, flat [COLOR_PRIMARY] on the symbol.
- **E-ILLU**: A coin transforming into a digital string of letters through a portal. Premium ink, flat [COLOR_PRIMARY] on the portal.

---

### 43. Context Window
- **L-NAV**: A porthole window looking at data-waves. Strict silhouette, [COLOR_PRIMARY] on waves.
- **L-ILLU**: A porthole window looking into a vast data-ocean. Symbolic scope, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, square window silhouette with a focus-frame. Systematic design, flat [COLOR_PRIMARY] on the frame.
- **E-ILLU**: A telescope focused on a single glowing star among a blurred galaxy. Product thinking, flat [COLOR_PRIMARY] on the target star.

---

### 44. Agentic Loop
- **L-NAV**: An ouroboros made of an ethernet cable. Strict silhouette, [COLOR_PRIMARY] on plug.
- **L-ILLU**: A robot arm eating its own charging cable while writing notes. Symbolic autonomy, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean, circular loop icon with two data-arrows. Functional UI recognition, flat [COLOR_PRIMARY] on the loop.
- **E-ILLU**: A series of glowing circles linked in a continuous, infinite flow. Premium ink, flat [COLOR_PRIMARY] on the active flow.

---

### 45. Tool Use / Agent
- **L-NAV**: A robot hand holding a Swiss Army knife. Strict silhouette, [COLOR_PRIMARY] on knife.
- **L-ILLU**: A robot hand with a Swiss Army knife where blades are web applications. Symbolic utility, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean robotic arm silhouette. Systematic design, flat [COLOR_PRIMARY] on the grip.
- **E-ILLU**: A robotic arm selecting a high-tech tool from a modular wall. Product thinking, flat [COLOR_PRIMARY] on the tool.

---

### 46. Task Planner
- **L-NAV**: A corkboard with a single, messy piece of yarn. Strict silhouette, [COLOR_PRIMARY] on yarn.
- **L-ILLU**: A massive corkboard where tangled yarn spells out "DONE". Symbolic planning, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean calendar-style list icon. Systematic design, flat [COLOR_PRIMARY] on the checkboxes.
- **E-ILLU**: A digital dashboard with perfectly aligned nodes in a flowchart. Product thinking, flat [COLOR_PRIMARY] on the current task node.

---

### 47. Multi-Agent System
- **L-NAV**: Three robots in a row with music instruments. Strict silhouette, [COLOR_PRIMARY] on conductor's baton.
- **L-ILLU**: A marching band of robots all reading the same sheet of music. Symbolic collaboration, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A cluster of three stylized robot heads. Functional UI recognition, flat [COLOR_PRIMARY] on the central head.
- **E-ILLU**: A group of stylized figures collaborating around a glowing data-hub. Premium ink, flat [COLOR_PRIMARY] on the hub.

---

### 48. Memory / Agent
- **L-NAV**: A filing cabinet with a brain inside. Strict silhouette, [COLOR_PRIMARY] on brain.
- **L-ILLU**: A filing cabinet drawer where a brain is sorting through documents. Symbolic storage, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean brain silhouette with a logic-chip detail. Systematic design, flat [COLOR_PRIMARY] on the chip.
- **E-ILLU**: A brain visualized as glowing library shelves with data-blocks. Product thinking, flat [COLOR_PRIMARY] on the most recent memory block.

---

### 49. Feedback Loop
- **L-NAV**: A robot handing paper to a mirror. Strict silhouette, [COLOR_PRIMARY] on paper.
- **L-ILLU**: A robot handing a report to a mirror, which hands back a glowing perfect version. Symbolic improvement, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean circular loop with two opposing arrows. Functional UI recognition, flat [COLOR_PRIMARY] on the return arrow.
- **E-ILLU**: A circular flow where two robotic hands pass and refine an object. Premium ink, flat [COLOR_PRIMARY] on the refining path.

---

### 50. Orchestrator
- **L-NAV**: A conductor's baton and a server rack. Strict silhouette, [COLOR_PRIMARY] on baton.
- **L-ILLU**: A floating baton conducting a vast orchestra of server racks. Symbolic control, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean center node controlling four surrounding nodes. Systematic design, flat [COLOR_PRIMARY] on the center node.
- **E-ILLU**: A center node in a perfectly balanced symmetric network, emitting control signals. Product thinking, flat [COLOR_PRIMARY] on the signals.

---

### 51. Human-in-the-Loop
- **L-NAV**: A robot pressing a human-shaped doorbell. Strict silhouette, [COLOR_PRIMARY] on doorbell.
- **L-ILLU**: A robot politely pressing a giant doorbell on a human silhouette. Symbolic intervention, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A stylized human hand helping a robot hand. Functional UI recognition, flat [COLOR_PRIMARY] on the joint.
- **E-ILLU**: A robot hand reaching toward a human hand to receive a glowing data-cube. Premium ink, flat [COLOR_PRIMARY] on the cube.

---

### 52. Autonomous Action
- **L-NAV**: A robot hand pressing a button while a moon icon shows sleep. Strict silhouette, [COLOR_PRIMARY] on button.
- **L-ILLU**: A robot hand pressing a button while its owner sleeps in a chair behind it. Symbolic independence, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean robotic arm with a gear detail. Systematic design, flat [COLOR_PRIMARY] on the gear.
- **E-ILLU**: A robotic arm performing a complex task independently with an "AUTO" sign nearby. Product thinking, flat [COLOR_PRIMARY] on the sign.

---

### 53. Goal Setting
- **L-NAV**: A target bullseye with an arrow. Strict silhouette, [COLOR_PRIMARY] on bullseye center.
- **L-ILLU**: A robot drawing a bullseye around where its arrow already landed. Symbolic achievement, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean flag silhouette on a data-peak. Functional UI recognition, flat [COLOR_PRIMARY] on the flag.
- **E-ILLU**: A stylized flag being planted on a mountain peak of data-cubes. Premium ink, flat [COLOR_PRIMARY] on the flag.

---

## BÖLÜM 3 — e-Devlet & Finans İkonları

### 54. e-Fatura / Invoice
- **L-NAV**: An invoice silhouette with a spinning seal. Strict silhouette, [COLOR_PRIMARY] on seal.
- **L-ILLU**: A paper invoice that has grown wings and is flying through a cloud of data. Symbolic validation, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean invoice silhouette with a bold seal. Functional UI recognition, flat [COLOR_PRIMARY] on seal.
- **E-ILLU**: A sleek paper invoice with a tiny official GİB seal spinning like a coin. Premium ink, flat [COLOR_PRIMARY] on the seal.

---

### 55. e-Defter / e-Ledger
- **L-NAV**: A leather ledger with a USB spine. Strict silhouette, [COLOR_PRIMARY] on USB port.
- **L-ILLU**: A leather-bound ledger where pages are actually massive gears. Symbolic machine-ledger, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean ledger silhouette with a USB port. Systematic design, flat [COLOR_PRIMARY] on the port.
- **E-ILLU**: A leather-bound ledger whose pages spill out tiny, perfectly aligned gear mechanisms. Product thinking, flat [COLOR_PRIMARY] on the gears.

---

### 56. e-İrsaliye / e-Waybill
- **L-NAV**: An origami truck on a barcode road. Strict silhouette, [COLOR_PRIMARY] on barcode.
- **L-ILLU**: A delivery truck folded from a document, navigating a barcode highway. Symbolic logistics, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean origami truck silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the barcode.
- **E-ILLU**: A delivery truck folded like origami, navigating an elegant barcode surface. Premium ink, flat [COLOR_PRIMARY] on the barcode stripes.

---

### 57. e-Arşiv
- **L-NAV**: A filing cabinet with cloud drawers. Strict silhouette, [COLOR_PRIMARY] on cloud.
- **L-ILLU**: A metallic filing cabinet where every drawer is a fluffy thundercloud. Symbolic preservation, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean filing cabinet silhouette with a cloud icon. Systematic design, flat [COLOR_PRIMARY] on the cloud.
- **E-ILLU**: A white filing cabinet where every drawer is a soft fluffy cloud. Product thinking, flat [COLOR_PRIMARY] on the cloud-center.

---

### 58. GİB Entegrasyon
- **L-NAV**: An official stamp wearing a cape. Strict silhouette, [COLOR_PRIMARY] on cape.
- **L-ILLU**: An official government stamp wearing a superhero cape, catching falling papers. Symbolic power, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean stamp silhouette with a cape-detail. Functional UI recognition, flat [COLOR_PRIMARY] on the cape.
- **E-ILLU**: An official stamp soaring like a superhero, leaving a trail of validated documents. Premium ink, flat [COLOR_PRIMARY] on the cape.

---

### 59. Dijital İmza
- **L-NAV**: A fountain pen signing a document with glowing ink. Strict silhouette, [COLOR_PRIMARY] on ink.
- **L-ILLU**: A fountain pen where the ink line transforms into an electric current. Symbolic security, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean fountain pen silhouette. Systematic design, flat [COLOR_PRIMARY] on the nib.
- **E-ILLU**: A fountain pen signing a document where the ink glows with an electric pulse. Product thinking, flat [COLOR_PRIMARY] on the glow.

---

### 60. KEP / e-Tebligat
- **L-NAV**: An envelope wearing a monocle. Strict silhouette, [COLOR_PRIMARY] on monocle.
- **L-ILLU**: A formal envelope wearing a top hat and monocle, walking with pride. Symbolic importance, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean envelope icon with a notary-seal. Functional UI recognition, flat [COLOR_PRIMARY] on the seal.
- **E-ILLU**: An envelope wearing a notary seal as a monocle, walking on sleek legs. Premium ink, flat [COLOR_PRIMARY] on the seal.

---

### 61. e-Mutabakat
- **L-NAV**: Two documents with shaking hands. Strict silhouette, [COLOR_PRIMARY] on handshake.
- **L-ILLU**: Two huge legal documents extending paper-arms to shake hands. Symbolic agreement, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean double-document icon with a handshake. Systematic design, flat [COLOR_PRIMARY] on the handshake.
- **E-ILLU**: Two clean documents reaching out to shake hands, with glowing signatures. Product thinking, flat [COLOR_PRIMARY] on the signatures.

---

### 62. Nakit Akışı / Cash Flow
- **L-NAV**: An hourglass with winged coins. Strict silhouette, [COLOR_PRIMARY] on coins.
- **L-ILLU**: An hourglass where sand transforms into a swarm of winged gold coins. Symbolic flow, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean hourglass silhouette with a currency symbol. Functional UI recognition, flat [COLOR_PRIMARY] on the symbol.
- **E-ILLU**: An hourglass where liquid flows down and transforms into tiny winged coins. Premium ink, flat [COLOR_PRIMARY] on the coins.

---

### 63. Hazine Yönetimi / Treasury
- **L-NAV**: A vault door with ticker tape. Strict silhouette, [COLOR_PRIMARY] on tape.
- **L-ILLU**: A massive bank vault door with a stock ticker tape scrolling across it. Symbolic protection, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean vault door silhouette. Systematic design, flat [COLOR_PRIMARY] on the dial.
- **E-ILLU**: A bank vault door with a sleek live stock ticker tape scrolling across its center. Product thinking, flat [COLOR_PRIMARY] on the tape.

---

### 64. Enflasyon Muhasebesi
- **L-NAV**: A calculator in an ice block with a flame. Strict silhouette, [COLOR_PRIMARY] on flame.
- **L-ILLU**: A calculator frozen inside a cracked ice block with a campfire beneath it. Symbolic balance, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean calculator inside an ice-cube silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the flame-spark.
- **E-ILLU**: A calculator frozen in an elegant ice block with a precise campfire burning beneath. Premium ink, flat [COLOR_PRIMARY] on the flame.

---

### 65. e-Tahsilat / e-Collection
- **L-NAV**: A magnet pulling gold coins. Strict silhouette, [COLOR_PRIMARY] on coins.
- **L-ILLU**: A giant magnet pulling golden raindrops that transform into coins. Symbolic attraction, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean magnet silhouette with a currency-dot. Systematic design, flat [COLOR_PRIMARY] on the magnet tips.
- **E-ILLU**: A sleek magnet pulling golden raindrops that transform into perfectly minted coins. Product thinking, flat [COLOR_PRIMARY] on the coins.

---

### 66. Regtech / Mevzuat Uyumu
- **L-NAV**: A rulebook with a green traffic light. Strict silhouette, [COLOR_PRIMARY] on light.
- **L-ILLU**: A thick rulebook with active traffic lights growing from every page. Symbolic compliance, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean rulebook silhouette with a checkmark. Functional UI recognition, flat [COLOR_PRIMARY] on the checkmark.
- **E-ILLU**: A thick law book with tiny active traffic lights on every page in a grid. Premium ink, flat [COLOR_PRIMARY] on the green lights.

---

### 67. Vergi Uyumu
- **L-NAV**: A tax form origami crane. Strict silhouette, [COLOR_PRIMARY] on wings.
- **L-ILLU**: A tax form folded into an origami crane soaring toward a government building. Symbolic duty, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean origami crane silhouette. Systematic design, flat [COLOR_PRIMARY] on the wings.
- **E-ILLU**: A tax form folded into a perfect origami crane soaring toward a holographic building. Product thinking, flat [COLOR_PRIMARY] on the building.

---

### 68. KVKK / Veri Gizliliği
- **L-NAV**: A padlock with a privacy curtain. Strict silhouette, [COLOR_PRIMARY] on curtain.
- **L-ILLU**: A massive padlock wearing a velvet privacy curtain with a peeking eye. Symbolic privacy, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean padlock silhouette with a curtain-detail. Functional UI recognition, flat [COLOR_PRIMARY] on the curtain.
- **E-ILLU**: A sleek padlock wearing an elegant privacy curtain with an intelligent eye. Premium ink, flat [COLOR_PRIMARY] on the curtain.

---

## BÖLÜM 4 — SAP İkonları

### 69. SAP FI / Finans
- **L-NAV**: A ledger book with clock pages. Strict silhouette, [COLOR_PRIMARY] on clock hands.
- **L-ILLU**: A general ledger where page numbers are replaced by ticking, vibrating clocks. Symbolic time-value, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean ledger silhouette with a clock-face. Functional UI recognition, flat [COLOR_PRIMARY] on the hands.
- **E-ILLU**: A general ledger where page numbers are replaced by tiny, perfectly synchronized synchronized clocks. Premium ink, flat [COLOR_PRIMARY] on the clock faces.

---

### 70. SAP CO / Controlling
- **L-NAV**: A pie chart dial with a needle. Strict silhouette, [COLOR_PRIMARY] on the needle.
- **L-ILLU**: A dial made of stacked, vibrating pie slices, with a finger-needle pointing to the largest. Symbolic profit, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean dial silhouette with a pie-slice detail. Systematic design, flat [COLOR_PRIMARY] on the needle.
- **E-ILLU**: A large dial of perfectly stacked pie chart slices; a single clock hand pointing to the fattest wedge. Product thinking, flat [COLOR_PRIMARY] on the target wedge.

---

### 71. SAP MM / Malzeme
- **L-NAV**: A warehouse shelf with boxes that have tiny legs. Strict silhouette, [COLOR_PRIMARY] on the legs.
- **L-ILLU**: A warehouse shelf where every box is in a perfectly straight, vibrating queue. Symbolic inventory, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean warehouse shelf silhouette with boxes. Functional UI recognition, flat [COLOR_PRIMARY] on the first box.
- **E-ILLU**: A warehouse shelf where every item has grown tiny, sleek legs and queued politely. Premium ink, flat [COLOR_PRIMARY] on the box labels.

---

### 72. SAP SD / Satış
- **L-NAV**: A shopping cart on a funnel ramp. Strict silhouette, [COLOR_PRIMARY] on wheels.
- **L-ILLU**: A shopping cart racing down a steep funnel-shaped mountain of sales data. Symbolic sales-velocity, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean shopping cart silhouette inside a funnel. Systematic design, flat [COLOR_PRIMARY] on the cart.
- **E-ILLU**: A shopping cart racing downhill on a smooth sales funnel slope. Product thinking, flat [COLOR_PRIMARY] on the cart wheels.

---

### 73. SAP PP / Üretim
- **L-NAV**: A factory line with a robot clipboard. Strict silhouette, [COLOR_PRIMARY] on clipboard.
- **L-ILLU**: A robotic arm with multiple hands juggling parts and checking a massive board. Symbolic efficiency, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean factory chimney silhouette with a gear. Functional UI recognition, flat [COLOR_PRIMARY] on the gear.
- **E-ILLU**: A long, elegant assembly line with one single, highly detailed robot overseer. Premium ink, flat [COLOR_PRIMARY] on the robot's sensor.

---

### 74. SAP HR / İnsan Kaynakları
- **L-NAV**: An org chart with an empty, glowing box. Strict silhouette, [COLOR_PRIMARY] on the empty box.
- **L-ILLU**: An org chart where the boxes have expressive faces, except for one glowing talent-portal. Symbolic hiring, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean org chart silhouette. Systematic design, flat [COLOR_PRIMARY] on the top-node.
- **E-ILLU**: An org chart where boxes have subtle faces, except one box which is a glowing portal. Product thinking, flat [COLOR_PRIMARY] on the portal.

---

### 75. SAP PS / Proje
- **L-NAV**: A Gantt bar with sprinting legs. Strict silhouette, [COLOR_PRIMARY] on legs.
- **L-ILLU**: A Gantt chart bar with athletic legs sprinting toward a giant alarm clock. Symbolic deadline, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean Gantt chart silhouette with a stopwatch. Functional UI recognition, flat [COLOR_PRIMARY] on the bar.
- **E-ILLU**: A Gantt bar that has grown sleek athletic legs and is sprinting confidently toward its deadline. Premium ink, flat [COLOR_PRIMARY] on the legs.

---

### 76. SAP BTP / Platform
- **L-NAV**: A cloud platform with LEGO bricks. Strict silhouette, [COLOR_PRIMARY] on a brick.
- **L-ILLU**: A floating platform where module shapes are swimming and snapping together like sentient LEGOs. Symbolic integration, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud platform silhouette with a gear-center. Systematic design, flat [COLOR_PRIMARY] on the gear.
- **E-ILLU**: A floating platform with sleek module shapes swimming through the air toward a central slot. Product thinking, flat [COLOR_PRIMARY] on the primary module.

---

### 77. SAP S/4HANA
- **L-NAV**: A screen splitting into a hologram. Strict silhouette, [COLOR_PRIMARY] on the holographic side.
- **L-ILLU**: A legacy SAP screen shattering and morphing into a sleek 3D holographic display. Symbolic innovation, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean screen silhouette with a '4' integrated. Functional UI recognition, flat [COLOR_PRIMARY] on the '4'.
- **E-ILLU**: A legacy SAP screen morphing into a sleek holographic display with digital sparks. Premium ink, flat [COLOR_PRIMARY] on the holographic data.

---

### 78. SAP Joule / AI
- **L-NAV**: A lightbulb wearing a business tie. Strict silhouette, [COLOR_PRIMARY] on tie.
- **L-ILLU**: A lightbulb holding a briefcase, plugged directly into a corporate logo. Symbolic business-AI, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean lightbulb silhouette with a circuit-tie. Systematic design, flat [COLOR_PRIMARY] on the tie.
- **E-ILLU**: A lightbulb wearing a sharp business tie, plugged into a minimalist corporate logo socket. Product thinking, flat [COLOR_PRIMARY] on the tie-knot.

---

### 79. SAP AA / Varlık Yönetimi
- **L-NAV**: A filing cabinet with a depreciation curve. Strict silhouette, [COLOR_PRIMARY] on the curve peak.
- **L-ILLU**: A filing cabinet with a sharp depreciation curve physically cutting into the metal. Symbolic asset-decay, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean filing cabinet with a downward chart arrow. Functional UI recognition, flat [COLOR_PRIMARY] on the arrow.
- **E-ILLU**: A filing cabinet with an elegant depreciation curve drawn in a glowing premium line. Premium ink, flat [COLOR_PRIMARY] on the curve peak.

---

### 80. SAP TRM / Hazine
- **L-NAV**: A vault door with ticker tape. Strict silhouette, [COLOR_PRIMARY] on tape.
- **L-ILLU**: A vault door with a live ticker tape scrolling across it so fast the numbers blur. Symbolic speed, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean vault door silhouette with a stock-chart. Systematic design, flat [COLOR_PRIMARY] on the chart.
- **E-ILLU**: A vault door with a real-time, glowing ticker tape scrolling across its center. Product thinking, flat [COLOR_PRIMARY] on the tape.

---

### 81. SAP RE-FX / Gayrimenkul
- **L-NAV**: A blueprint pop-up building. Strict silhouette, [COLOR_PRIMARY] on the building.
- **L-ILLU**: A blueprint folded into a massive 3D pop-up castle too big for the page. Symbolic property, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean blueprint silhouette with a house-frame. Functional UI recognition, flat [COLOR_PRIMARY] on the house.
- **E-ILLU**: A building blueprint that has folded itself into a perfect geometric 3D pop-up. Premium ink, flat [COLOR_PRIMARY] on the main tower.

---

### 82. SAP Signavio
- **L-NAV**: Process lines with water flow. Strict silhouette, [COLOR_PRIMARY] on water arrows.
- **L-ILLU**: A process flow diagram where connecting arrows are made of rushing water. Symbolic flow-fluidity, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean process-node icon with a water-drop. Systematic design, flat [COLOR_PRIMARY] on the drop.
- **E-ILLU**: A process flow where every link is made of clean, flowing water moving data. Product thinking, flat [COLOR_PRIMARY] on the water-path.

---

### 83. SAP Integration Suite
- **L-NAV**: A spiderweb with a hard hat spider. Strict silhouette, [COLOR_PRIMARY] on hat.
- **L-ILLU**: A complex spiderweb where threads are API links, managed by a spider in a hard hat. Symbolic connectivity, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean web-grid silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the central hub.
- **E-ILLU**: A dense spiderweb of API connections managed by a minimalist spider in a sleek hard hat. Premium ink, flat [COLOR_PRIMARY] on the hub.

---

## BÖLÜM 5 — ERP İkonları

### 84. ERP FI / Finans
- **L-NAV**: An abacus with winged gold coins. Strict silhouette, [COLOR_PRIMARY] on first bead.
- **L-ILLU**: An ancient wooden abacus where beads are winged gold coins moving autonomously. Symbolic wealth-logic, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean abacus silhouette with a currency-dot. Functional UI recognition, flat [COLOR_PRIMARY] on one bead.
- **E-ILLU**: A wooden abacus where the beads are perfectly minted gold coins with fluttering wings. Product thinking, flat [COLOR_PRIMARY] on the wings.

---

### 85. ERP MM / Lojistik
- **L-NAV**: A shipping box with running legs. Strict silhouette, [COLOR_PRIMARY] on legs.
- **L-ILLU**: A cardboard box with long sprinting legs leaving a trail of packing peanuts. Symbolic efficiency, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean box silhouette with a barcode detail. Systematic design, flat [COLOR_PRIMARY] on the box tape.
- **E-ILLU**: A cardboard shipping box with two sleek, human legs sprinting urgently. Premium ink, flat [COLOR_PRIMARY] on the legs.

---

### 86. ERP PP / Üretim
- **L-NAV**: A conveyor belt feeding a cloud. Strict silhouette, [COLOR_PRIMARY] on cloud.
- **L-ILLU**: A conveyor belt that starts at a factory and ends in a fluffy cloud. Symbolic production-flow, deep hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean conveyor belt silhouette with three product-blocks. Functional UI recognition, flat [COLOR_PRIMARY] on the central block.
- **E-ILLU**: A conveyor belt emerging from a sleek factory and leading into a soft, glowing cloud. Product thinking, flat [COLOR_PRIMARY] on the cloud-glow.

---

### 87. ERP SD / Satış
- **L-NAV**: A megaphone with flying coins. Strict silhouette, [COLOR_PRIMARY] on coins.
- **L-ILLU**: A megaphone literally shouting a storm of gold coins into the sky. Symbolic sales-broadcast, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean megaphone silhouette with a currency symbol. Systematic design, flat [COLOR_PRIMARY] on the megaphone rim.
- **E-ILLU**: A megaphone emitting a perfectly aligned arc of glowing gold coins. Premium ink, flat [COLOR_PRIMARY] on the coins.

---

### 88. ERP HR / İnsan Kaynakları
- **L-NAV**: An ID card with a tiny seedling sprout. Strict silhouette, [COLOR_PRIMARY] on sprout.
- **L-ILLU**: An ID card where the photo is a seedling growing through the plastic. Symbolic human-growth, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean ID card silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the strap-clip.
- **E-ILLU**: An identification card where the photo is replaced by a perfectly drawn seedling. Product thinking, flat [COLOR_PRIMARY] on the leaves.

---

### 89. Logo Entegrasyon
- **L-NAV**: A puzzle piece with a camel hump. Strict silhouette, [COLOR_PRIMARY] on hump.
- **L-ILLU**: A puzzle piece with a realistic camel hump trudging through data-sand. Symbolic integration-journey, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean puzzle piece silhouette with a hump-detail. Systematic design, flat [COLOR_PRIMARY] on the hump.
- **E-ILLU**: A puzzle piece featuring a stylized camel hump, navigating a perfectly geometric desert. Premium ink, flat [COLOR_PRIMARY] on the hump.

---

### 90. Mikro Entegrasyon
- **L-NAV**: A microscope looking at a microchip. Strict silhouette, [COLOR_PRIMARY] on chip.
- **L-ILLU**: A microscope focused on a chip where circuits are tiny people building a city. Symbolic precision, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean microscope silhouette with a circuit-lens. Functional UI recognition, flat [COLOR_PRIMARY] on the lens.
- **E-ILLU**: A microscope focused on a chip where the circuits form a tiny, glowing metropolis. Product thinking, flat [COLOR_PRIMARY] on the city lights.

---

### 91. Nebim Entegrasyon
- **L-NAV**: A storefront with a cloud roof. Strict silhouette, [COLOR_PRIMARY] on cloud.
- **L-ILLU**: A storefront where the roof is a raincloud watering mannequins with leaves. Symbolic retail-growth, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean storefront silhouette with a cloud-dot. Systematic design, flat [COLOR_PRIMARY] on the cloud.
- **E-ILLU**: A storefront where the roof is a soft cloud; mannequins have tiny elegant leaves. Premium ink, flat [COLOR_PRIMARY] on the leaves.

---

### 92. IAS Canias Entegrasyon
- **L-NAV**: A cog with a Trojan horse inside. Strict silhouette, [COLOR_PRIMARY] on horse.
- **L-ILLU**: A huge cog with a tiny Trojan horse peeking out from its teeth. Symbolic system-entry, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cog silhouette with a horse-crest. Functional UI recognition, flat [COLOR_PRIMARY] on the horse.
- **E-ILLU**: A large industrial cog with a stylized Trojan horse silhouette at the center. Product thinking, flat [COLOR_PRIMARY] on the horse.

---

### 93. Microsoft Dynamics Entegrasyon
- **L-NAV**: A power button with colorful gears. Strict silhouette, [COLOR_PRIMARY] on gears.
- **L-ILLU**: A power button exploding into a kaleidoscope of interlocking gears. Symbolic energy, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean power button silhouette with gear-arcs. Systematic design, flat [COLOR_PRIMARY] on the gear.
- **E-ILLU**: A power button that emits a perfectly organized flow of multi-colored gears. Premium ink, flat [COLOR_PRIMARY] on the gear-flow.

---

### 94. Oracle ERP Entegrasyon
- **L-NAV**: A temple pillar with a data cloud umbrella. Strict silhouette, [COLOR_PRIMARY] on cloud.
- **L-ILLU**: A marble temple pillar alone in a desert with a cloud of digital rain. Symbolic stability, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean pillar silhouette with a cloud-header. Functional UI recognition, flat [COLOR_PRIMARY] on the cloud.
- **E-ILLU**: A marble temple pillar with a sleek cloud of glowing code hovering above. Product thinking, flat [COLOR_PRIMARY] on the cloud.

---

### 95. Bulut ERP / Cloud ERP
- **L-NAV**: A cloud with server rack legs. Strict silhouette, [COLOR_PRIMARY] on server LED.
- **L-ILLU**: A cloud that has landed and grown server-rack legs, walking through a forest. Symbolic agility, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud silhouette with a server-rack base. Systematic design, flat [COLOR_PRIMARY] on the base.
- **E-ILLU**: A cloud with a built-in, sleek server-rack base, hovering just above the ground. Premium ink, flat [COLOR_PRIMARY] on the LEDs.

---

### 96. Mobil ERP
- **L-NAV**: A smartphone with rocket fins. Strict silhouette, [COLOR_PRIMARY] on fins.
- **L-ILLU**: A smartphone with rocket fins; a tiny robot pilot is at the controls. Symbolic mobile-speed, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean smartphone silhouette with a motion-blur detail. Functional UI recognition, flat [COLOR_PRIMARY] on the screen.
- **E-ILLU**: A smartphone with stylized rocket fins, ascending through a sky of data-nodes. Product thinking, flat [COLOR_PRIMARY] on the fins.

---

### 97. ERP Danışmanlığı / Consultant
- **L-NAV**: A briefcase with a wizard hat sticking out. Strict silhouette, [COLOR_PRIMARY] on hat.
- **L-ILLU**: A professional briefcase revealing a glowing wizard hat and floating charts. Symbolic expertise, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean briefcase silhouette with a wizard-crest. Systematic design, flat [COLOR_PRIMARY] on the hat.
- **E-ILLU**: A sleek professional briefcase with a minimalist wizard's hat tucked into the side. Premium ink, flat [COLOR_PRIMARY] on the hat.

---

### 98. Veri Transferi / Data Migration
- **L-NAV**: A truck with a USB cable tail. Strict silhouette, [COLOR_PRIMARY] on USB port.
- **L-ILLU**: A moving truck with a USB exhaust pipe plugging into buildings. Symbolic transfer, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean truck silhouette with a data-arrow. Functional UI recognition, flat [COLOR_PRIMARY] on the arrow.
- **E-ILLU**: A moving truck where the cargo is a giant glowing USB port. Product thinking, flat [COLOR_PRIMARY] on the port.

---

## BÖLÜM 6 — Danışmanlık & Teknik İkonlar

### 99. Teknoloji Danışmanlığı
- **L-NAV**: Binoculars aiming at digital zeros. Strict silhouette, [COLOR_PRIMARY] on zeros.
- **L-ILLU**: Binoculars aimed at a mountain; inside lenses, it's a glowing crystal. Symbolic foresight, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: Clean binoculars silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the lens.
- **E-ILLU**: Binoculars focused on a complex peak; lens resolves it into a glowing geometry. Premium ink, flat [COLOR_PRIMARY] on the geometry.

---

### 100. Süreç Optimizasyonu
- **L-NAV**: A labyrinth with a scissor-cut. Strict silhouette, [COLOR_PRIMARY] on cut-path.
- **L-ILLU**: A labyrinth where giant scissors have cut a straight, glowing shortcut. Symbolic efficiency, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean labyrinth silhouette with a straight-line detail. Systematic design, flat [COLOR_PRIMARY] on the path.
- **E-ILLU**: A complex labyrinth with a perfectly straight path cut by sleek glowing scissors. Product thinking, flat [COLOR_PRIMARY] on the shortcut.

---

### 101. Dijital Dönüşüm
- **L-NAV**: An old TV with butterfly wings. Strict silhouette, [COLOR_PRIMARY] on wings.
- **L-ILLU**: An old TV set cracking open, with digital butterflies emerging. Symbolic metamorphosis, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean TV silhouette morphing into a screen. Functional UI recognition, flat [COLOR_PRIMARY] on the new screen.
- **E-ILLU**: An old TV set morphing into a sleek holographic display with digital butterflies. Premium ink, flat [COLOR_PRIMARY] on the butterflies.

---

### 102. Yazılım Geliştirme
- **L-NAV**: A hammer with code brackets { }. Strict silhouette, [COLOR_PRIMARY] on brackets.
- **L-ILLU**: A hammer with bracket-heads forging a microchip on an anvil. Symbolic construction, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean hammer silhouette with a code-symbol. Systematic design, flat [COLOR_PRIMARY] on the symbol.
- **E-ILLU**: A hammer with brackets for a head, délicately assembling a 3D server model. Product thinking, flat [COLOR_PRIMARY] on the server.

---

### 103. Outsource Destek
- **L-NAV**: A backpack with robotic hands. Strict silhouette, [COLOR_PRIMARY] on hands.
- **L-ILLU**: A backpack that has grown four tireless robotic arms doing tasks. Symbolic assistance, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean backpack silhouette with gear-straps. Functional UI recognition, flat [COLOR_PRIMARY] on the gear.
- **E-ILLU**: A professional backpack with two sleek robotic arms reaching out to help. Premium ink, flat [COLOR_PRIMARY] on the robot's tool.

---

### 104. 7/24 Destek
- **L-NAV**: A sleeping moon with a headset. Strict silhouette, [COLOR_PRIMARY] on headset LED.
- **L-ILLU**: A moon wearing a headset and talking to a star-microphone. Symbolic availability, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean moon silhouette with a headset. Systematic design, flat [COLOR_PRIMARY] on the headset.
- **E-ILLU**: A crescent moon wearing a sleek, high-tech headset, looking alert. Product thinking, flat [COLOR_PRIMARY] on the headset LED.

---

### 105. Eğitim & Workshop
- **L-NAV**: A lightbulb with a seedling inside. Strict silhouette, [COLOR_PRIMARY] on leaves.
- **L-ILLU**: A lightbulb where the filament is a rapidly growing oak tree. Symbolic growth, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean lightbulb silhouette with a graduation-cap base. Functional UI recognition, flat [COLOR_PRIMARY] on the cap.
- **E-ILLU**: A lightbulb with a single perfectly drawn seedling growing inside. Premium ink, flat [COLOR_PRIMARY] on the seedling.

---

### 106. SLA / Garanti
- **L-NAV**: A scroll with an armor plate. Strict silhouette, [COLOR_PRIMARY] on plate.
- **L-ILLU**: A contract scroll wearing a suit of medieval armor. Symbolic protection, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean scroll silhouette with a shield-detail. Systematic design, flat [COLOR_PRIMARY] on the shield.
- **E-ILLU**: A formal contract scroll with a stylized armor plate mounted on front. Product thinking, flat [COLOR_PRIMARY] on the armor highlight.

---

### 107. Bug / Hata
- **L-NAV**: A beetle with binary wings. Strict silhouette, [COLOR_PRIMARY] on wings.
- **L-ILLU**: A beetle made of binary code chewing on an ethernet cable. Symbolic error, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean beetle silhouette with a '0/1' pattern. Functional UI recognition, flat [COLOR_PRIMARY] on the wings.
- **E-ILLU**: A beetle whose wings are clean binary code segments, sitting on a circuit. Premium ink, flat [COLOR_PRIMARY] on the binary.

---

### 108. Deployment / Yayına Alma
- **L-NAV**: A rocket with a parachute. Strict silhouette, [COLOR_PRIMARY] on parachute.
- **L-ILLU**: A rocket spitting out thousands of paper planes instead of fire. Symbolic release, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean rocket silhouette with a launch-icon. Systematic design, flat [COLOR_PRIMARY] on the rocket-tip.
- **E-ILLU**: A rocket launching from a cloud, trailing a stream of glowing paper planes. Product thinking, flat [COLOR_PRIMARY] on the planes.

---

### 109. Database / Veritabanı
- **L-NAV**: A server rack with ocean waves inside. Strict silhouette, [COLOR_PRIMARY] on waves.
- **L-ILLU**: A server rack with a drawer open and data-fish swimming in water. Symbolic depth, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean server-stack silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the middle LED.
- **E-ILLU**: A server rack where one drawer is a glowing pool of digital water and fish. Premium ink, flat [COLOR_PRIMARY] on the fish.

---

### 110. API / Uygulama Arayüzü
- **L-NAV**: Two robots shaking hands. Strict silhouette, [COLOR_PRIMARY] on handshake.
- **L-ILLU**: Two complex robots shaking hands; a data-sun is born at contact. Symbolic connection, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean double-plug silhouette. Systematic design, flat [COLOR_PRIMARY] on the connection point.
- **E-ILLU**: Two minimalist robotic arms shaking hands at the center of a grid. Product thinking, flat [COLOR_PRIMARY] on the handshake.

---

### 111. Microservices
- **L-NAV**: A cluster of dots with a yarn connection. Strict silhouette, [COLOR_PRIMARY] on yarn.
- **L-ILLU**: A swarm of robot spiders working on a single giant machine. Symbolic orchestration, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A cluster of geometric nodes. Functional UI recognition, flat [COLOR_PRIMARY] on the center node.
- **E-ILLU**: A perfectly organized cluster of independent data-nodes with unique tools. Premium ink, flat [COLOR_PRIMARY] on active node.

---

### 112. Version Control / Git
- **L-NAV**: A branching tree with timeline dots. Strict silhouette, [COLOR_PRIMARY] on dots.
- **L-ILLU**: A tree of timelines where a gardener is pruning branches. Symbolic history, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean branching-path icon. Systematic design, flat [COLOR_PRIMARY] on the latest node.
- **E-ILLU**: A stylized tree where branches are timelines; a figure is grafting a branch. Product thinking, flat [COLOR_PRIMARY] on the new branch.

---

### 113. Container / Docker
- **L-NAV**: A shipping container with a whale tail. Strict silhouette, [COLOR_PRIMARY] on tail.
- **L-ILLU**: A container on the back of a whale swimming through binary code. Symbolic portability, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean shipping container silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the corner-lock.
- **E-ILLU**: A shipping container carried by a sleek geometric whale in a sea of stars. Premium ink, flat [COLOR_PRIMARY] on the tail.

---

### 114. Serverless
- **L-NAV**: A cloud with a dangling plug. Strict silhouette, [COLOR_PRIMARY] on plug.
- **L-ILLU**: A cloud where server racks are disappearing into thin air as they work. Symbolic intangibility, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud silhouette with a 'no-stack' symbol. Systematic design, flat [COLOR_PRIMARY] on the cloud.
- **E-ILLU**: A cloud hovering over an empty, glowing server base-plate. Product thinking, flat [COLOR_PRIMARY] on the base-glow.

---

### 115. Cyber Security
- **L-NAV**: A shield silhouette with a digital unblinking eye. Strict silhouette, [COLOR_PRIMARY] on iris.
- **L-ILLU**: A knight's shield where the surface is an active firewall grid. Symbolic defense, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean shield silhouette with a padlock-center. Functional UI recognition, flat [COLOR_PRIMARY] on the padlock.
- **E-ILLU**: A high-tech shield with an integrated, glowing biometric eye. Premium ink, flat [COLOR_PRIMARY] on the eye.

---

### 116. DevOps
- **L-NAV**: An infinity loop with a hammer. Strict silhouette, [COLOR_PRIMARY] on hammer.
- **L-ILLU**: An infinity loop that is physically a conveyor belt for software gears. Symbolic continuity, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean infinity loop with a code-symbol. Systematic design, flat [COLOR_PRIMARY] on the symbol.
- **E-ILLU**: A sleek infinity loop being refined by a robotic arm at the joint. Product thinking, flat [COLOR_PRIMARY] on the arm tool.

---

### 117. Monitoring
- **L-NAV**: A heartbeat line on a monitor with a peeking eye. Strict silhouette, [COLOR_PRIMARY] on line.
- **L-ILLU**: A pulse-monitor where the heartbeat line is made of tiny running figures. Symbolic health, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean monitor silhouette with a pulse. Functional UI recognition, flat [COLOR_PRIMARY] on the pulse peak.
- **E-ILLU**: A sleek monitor showing a perfectly symmetric data-frequency wave. Premium ink, flat [COLOR_PRIMARY] on the wave peak.

---

### 118. Disaster Recovery
- **L-NAV**: A lifebuoy with a server rack. Strict silhouette, [COLOR_PRIMARY] on lifebuoy.
- **L-ILLU**: A lifebuoy being thrown to a sinking server rack in a digital sea. Symbolic rescue, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean lifebuoy silhouette with a refresh-arrow. Systematic design, flat [COLOR_PRIMARY] on the arrow.
- **E-ILLU**: A high-tech lifebuoy floating in a sea of stars, containing a glowing backup-disk. Product thinking, flat [COLOR_PRIMARY] on the disk.

---

### 119. Backup
- **L-NAV**: A vault with a mirror reflection. Strict silhouette, [COLOR_PRIMARY] on reflection.
- **L-ILLU**: A vault where every document is being instantly duplicated by a ghost-hand. Symbolic redundancy, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean double-disk icon. Functional UI recognition, flat [COLOR_PRIMARY] on the back disk.
- **E-ILLU**: A data-cube entering a secure vault while its shadow turns into a second cube. Premium ink, flat [COLOR_PRIMARY] on the twin cube.

---

### 120. Scalability
- **L-NAV**: A building that has grown accordion bellows. Strict silhouette, [COLOR_PRIMARY] on bellows.
- **L-ILLU**: A building that is physically stretching and growing new floors like an accordion. Symbolic growth, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean building silhouette with expansion arrows. Systematic design, flat [COLOR_PRIMARY] on arrows.
- **E-ILLU**: A modular building with sleek, glowing blocks being added automatically to the top. Product thinking, flat [COLOR_PRIMARY] on the new block.

---

### 121. High Availability
- **L-NAV**: A lighthouse with a 24/7 sign. Strict silhouette, [COLOR_PRIMARY] on sign.
- **L-ILLU**: A lighthouse built entirely of glowing server racks, never dimming. Symbolic uptime, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean lighthouse silhouette with a '100%' detail. Functional UI recognition, flat [COLOR_PRIMARY] on the lamp.
- **E-ILLU**: A high-tech lighthouse emitting a beam of data-pulses into a calm night sky. Premium ink, flat [COLOR_PRIMARY] on the pulses.

---

### 122. Load Balancer
- **L-NAV**: A seesaw with equal data-cubes. Strict silhouette, [COLOR_PRIMARY] on cubes.
- **L-ILLU**: A complex mechanical scale balancing a mountain of data with a single feather. Symbolic equilibrium, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean balance-scale icon. Systematic design, flat [COLOR_PRIMARY] on the pivot point.
- **E-ILLU**: A center node distributing glowing data-streams into four perfectly balanced paths. Product thinking, flat [COLOR_PRIMARY] on the streams.

---

### 123. Gateway
- **L-NAV**: A portal with a welcoming robot hand. Strict silhouette, [COLOR_PRIMARY] on hand.
- **L-ILLU**: A massive, ornate digital gate that filters users into different colored streams. Symbolic entry, dense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean gateway/portal silhouette. Functional UI recognition, flat [COLOR_PRIMARY] on the portal rim.
- **E-ILLU**: A sleek, circular portal with a single robotic hand guiding a data-cube through. Premium ink, flat [COLOR_PRIMARY] on the cube.

---

### 124. Cloud Infrastructure
- **L-NAV**: A cloud on robot legs building a wall. Strict silhouette, [COLOR_PRIMARY] on legs.
- **L-ILLU**: A cloud acting as an architect, using blueprints to build a city of servers. Symbolic foundation, heavy hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean cloud icon with a foundation grid. Systematic design, flat [COLOR_PRIMARY] on the grid.
- **E-ILLU**: A cloud hovering over a perfectly geometric infrastructure grid. Product thinking, flat [COLOR_PRIMARY] on the grid nodes.

---

### 125. Technical Support
- **L-NAV**: A wrench with a business tie. Strict silhouette, [COLOR_PRIMARY] on tie.
- **L-ILLU**: A wrench that is physically a specialized robot tool-arm fixing a star. Symbolic help, intense hatching, [COLOR_PRIMARY] splashes.
- **E-NAV**: A clean wrench icon with a headset. Functional UI recognition, flat [COLOR_PRIMARY] on the headset.
- **E-ILLU**: A professional wrench with an integrated, glowing digital diagnostic screen. Premium ink, flat [COLOR_PRIMARY] on the screen.







