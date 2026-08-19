# Stock photo credits

These product cards use licensed stock photography as a placeholder until the
store supplies its own photo of the cut. Every image is from Pexels under the
Pexels Licence, which permits commercial use without attribution — the credits
below are recorded for provenance, not because they are required.

Every image was checked twice: once by eye, and once against its source
caption. The caption check is not optional — a search for "beef sirloin"
returns pork chops, and minced pork is indistinguishable from minced chicken
at thumbnail size. Several candidates were rejected at that second gate.
Nothing depicting pork is used anywhere on this site.

Two of these are serving suggestions rather than raw product — Frozen Quail
and Goat/Lamb Liver — because no raw photograph of those cuts exists in the
library. Replace them first.

**2026-08-18 photo-integrity audit:** a name/photo cross-check found that five
files on disk (`beef_nihari.webp`, `beef_bihari.webp`, `beef_pasanda.webp`,
`lamb_shanks.webp`, `chicken_boneless_thigh.webp`) had silently reverted to
byte-identical copies of a *different* product's photo, despite this table
still describing the correct, distinct source for each — `beef_nihari.webp`
had never been sourced at all and was just a stray copy of `beef_paya.webp`.
The credits below were never wrong; the files on disk had drifted from them.
Re-fetched from the credited (or a corrected) source and re-verified against
this table for every row touched. If a card ever looks wrong again, `md5`
the file against its neighbors before assuming the source needs replacing —
a duplicate-file bug is cheaper to rule out than a bad sourcing call.

| Product | File | Photographer | Source |
|---|---|---|---|
| Beef with Bone, Mixed Cut | `beef_bone_mix.webp` | Luis Becerra Fotógrafo | [Pexels #5774155](https://www.pexels.com/photo/5774155/) — replaced a single tomahawk steak photo that read as one premium cut, not an assorted bone-in mix |
| Fresh Nihari | `beef_nihari.webp` | Emre Vonal | [Pexels #7741801](https://www.pexels.com/photo/close-up-photo-of-raw-meat-7741801/) — cross-cut shank with the marrow bone visible; this file had never been sourced before and was just a duplicate of the Paya photo
| Beef Leg or Shoulder | `beef_leg_shoulder.webp` | Boys in Bristol Photography | [Pexels #20187071](https://www.pexels.com/photo/beef-of-display-20187071/) — recropped to cut the plastic bag out of frame |
| Beef T-Bone Steak | `beef_tbone.webp` | Mohamed  Olwy | [Pexels #36683025](https://www.pexels.com/photo/juicy-t-bone-steak-grilling-over-open-flames-36683025/) |
| Beef Ribs | `beef_ribs.webp` | Maxi Gagliano | [Pexels #4765653](https://www.pexels.com/photo/fresh-meat-on-wooden-chopping-board-4765653/) |
| Beef Neck | `beef_neck.webp` | Christina Voinova | [Pexels #7368034](https://www.pexels.com/photo/raw-beef-slices-on-wooden-chopping-board-7368034/) |
| Beef Filet Mignon | `beef_filet_mignon.webp` | Dương Nhân | [Pexels #27603410](https://www.pexels.com/photo/raw-meat-with-rosemary-on-a-cutting-board-27603410/) |
| Beef Boneless, from Leg | `beef_boneless_leg.webp` | Lee Hanson | [Pexels #37414915](https://www.pexels.com/photo/37414915/) — replaced a bone-in tomahawk photo that contradicted "boneless" |
| Beef Eye of Round Steak | `beef_eye_round.webp` | Marina Utrabo | [Pexels #4661503](https://www.pexels.com/photo/4661503/) — replaced a whole tied roast with actual sliced round steaks; recropped to cut a potato dish out of frame |
| Beef Boneless Cubes, Lean | `beef_cubes_lean.webp` | Laura oliveira | [Pexels #34705701](https://www.pexels.com/photo/fresh-ingredients-for-beef-stew-preparation-34705701/) |
| Beef Boneless Cubes, Extra Lean | `beef_cubes_xlean.webp` | Laura oliveira | [Pexels #34705703](https://www.pexels.com/photo/seared-seasoned-meat-in-a-skillet-with-ingredients-34705703/) |
| Ground Beef, Regular | `beef_ground_regular.webp` | Angele  J | [Pexels #128401](https://www.pexels.com/photo/grind-meat-in-glass-bowl-128401/) |
| Ground Beef, Lean | `beef_ground_lean.webp` | Alexas Fotos | [Pexels #7284305](https://www.pexels.com/photo/strands-of-ground-meat-7284305/) — replaced a corrupted/blank crop |
| Ground Beef, Extra Lean | `beef_ground_xlean.webp` | Theodore Nguyen | [Pexels #27104034](https://www.pexels.com/photo/27104034/) — replaced a corrupted crop showing a single tiny fragment |
| Beef Pasanda | `beef_pasanda.webp` | Han Sen | [Pexels #37032054](https://www.pexels.com/photo/thin-slices-of-wagyu-beef-with-garnish-37032054/) |
| Beef Bihari Cut | `beef_bihari.webp` | Зорина Зуб (Zorina Zub) | [Pexels #16571606](https://www.pexels.com/photo/16571606/) — replaced a single whole steak with actual thin kebab strips |
| Beef Sirloin Steak | `beef_sirloin.webp` | Lukas Blazek | [Pexels #618775](https://www.pexels.com/photo/flat-lay-photography-of-slice-of-meat-on-top-of-chopping-board-sprinkled-with-ground-peppercorns-618775/) |
| Frozen Oxtail | `beef_oxtail.webp` | Gustavo Denuncio | [Pexels #27743370](https://www.pexels.com/photo/27743370/) — replaced a cooked/braised photo with raw bone-in beef chunks (no raw oxtail-specific photo exists in stock libraries) |
| Beef Marrow Bone | `beef_marrow_bone.webp` | Los Muertos Crew | [Pexels #8477057](https://www.pexels.com/photo/slices-of-bone-marrow-on-a-tray-8477057/) |
| Chicken Leg Quarters, Box | `chicken_leg_quarter_box.webp` | Julia Filirovska | [Pexels #7140316](https://www.pexels.com/photo/raw-chicken-legs-placed-on-grill-grate-7140316/) |
| Chicken Leg Quarters, Half Box | `chicken_leg_quarter_half_box.webp` | Julia Filirovska | [Pexels #7140316](https://www.pexels.com/photo/raw-chicken-legs-placed-on-grill-grate-7140316/) — same photo as the Box card (mirrored), replacing one that showed boneless breast fillets instead of leg quarters |
| Tahir Leg Quarters | `chicken_thighs.webp` | Mateusz Feliksik | [Pexels #13376576](https://www.pexels.com/photo/seasoned-meat-on-wooden-chopping-board-13376576/) |
| Tahir Boneless Breast | `chicken_breast_tahir.webp` | Leeloo The First | [Pexels #5769375](https://www.pexels.com/photo/seasoned-raw-chicken-breasts-on-cutting-board-5769375/) |
| Chicken Fajita Strips | `chicken_fajita_strips.webp` | Mateusz Feliksik | [Pexels #13422436](https://www.pexels.com/photo/close-up-photo-fresh-raw-meat-13422436/) — recropped to cut the floral bowl edge out of frame |
| Chicken Tenders | `chicken_tenders.webp` | Towfiqu barbhuiya | [Pexels #12197308](https://www.pexels.com/photo/tenderizing-raw-chicken-breast-with-a-meat-mallet-12197308/) |
| Frozen Quail | `frozen_quail.webp` | José Antonio Otegui Auzmendi | [Pexels #31372374](https://www.pexels.com/photo/rustic-quail-dinner-with-gravy-and-mashed-potatoes-31372374/) |
| Goat / Lamb Chops | `goat_lamb_chops.webp` | Ragil Tagiyev | [Pexels #6281507](https://www.pexels.com/photo/raw-meat-on-a-chopping-board-6281507/) |
| Goat / Lamb Liver | `goat_lamb_liver.webp` | Doğan Alpaslan  Demir | [Pexels #18606644](https://www.pexels.com/photo/meat-and-livers-at-butchery-18606644/) |
| Goat / Lamb Qeema | `goat_lamb_qeema.webp` | Guto Macedo | [Pexels #18273982](https://www.pexels.com/photo/a-meaty-dish-on-a-large-plate-18273982/) |
| Goat / Lamb Heart | `goat_lamb_heart.webp` | Los Muertos Crew | [Pexels #8477054](https://www.pexels.com/photo/man-wearing-a-stripe-apron-holding-a-raw-meat-8477054/) |
| Goat / Lamb Ribs | `goat_lamb_ribs.webp` | Engin Akyurt | [Pexels #13611849](https://www.pexels.com/photo/beef-spareribs-in-close-up-shot-13611849/) |
| Goat / Lamb Putt & Neck | `goat_lamb_putt_neck.webp` | Ragil Tagiyev | [Pexels #6281506](https://www.pexels.com/photo/6281506/) — replaced a shot where props (tomato, lemon, rug) dominated over the meat |
| Frozen Lamb Shanks | `lamb_shanks.webp` | alireza nikzad | [Unsplash](https://unsplash.com/photos/a-piece-of-meat-sitting-on-top-of-a-cutting-board-photo-1630334337820-84afb05acf3a) — replaced a photo of rib bones on a grill (matched its own caption but not the product); recropped to cut a BBQ sauce bottle out of frame |

## Cards still without a photo

Eighteen cuts keep the "photo coming soon" panel. Stock libraries do not carry
them, and what they return instead is actively wrong:

| Cut | What a stock search returns |
|---|---|
| Goat / Lamb Head | bleached animal skulls |
| Goat Paya, Burnt Paya | dog paws, ostrich feet, elephant legs |
| Goat / Lamb Kidneys | kidney beans; "Kidney Cancer" in Scrabble tiles |
| Beef Tongue, Goat / Lamb Tongue | cow noses; people poking their tongues out |
| Frozen Duck | live mallards swimming |
| Chicken Qeema | live roosters — or minced pork |
| Chicken Liver | foie gras; the Royal Liver Building in Liverpool |
| Chicken Gizzard | Argentinian grilled beef intestine |
| Goat / Lamb Stomach | bee honeycomb |
| Beef Knuckle Bone, Goat Bones | deer antlers, fish skeletons, bowls of soup |
| Goat / Lamb Boneless | lamb chops, rolled/stuffed roulades, rack of ribs — nothing showing a plain solid boned-out piece |
| Chicken Boneless Thigh | breast fillets relabeled as thigh, or bone-in skin-on legs — nothing showing actual boneless thigh meat |

These are the cuts worth photographing at the counter on a phone. A wrong
photo on them is worse than an honest placeholder.

## Replacing a stock photo

Drop the store's own photo into `src/assets/` under the same filename and
rebuild — no code change needed. Then delete that row from the table above.
