#!/bin/bash
# Final pass: replace remaining old assets with closest new folder image by genre.
# The 14 old assets below had no exact folder match; map to same-meat/type new image.
set -euo pipefail
SRC="/Users/abbas/Desktop/meat-shop-images-unzipped"
ASSETS="/Users/abbas/Developer/Quality-Halal-Market/src/assets"

PAIRS="
beef-bihari:beef_bihari
beef-nihari:beef_nihari
beef-pasanda:beef_pasanda
beef-sirloin:beef_eye_round
chicken-drumsticks:chicken_pieces
chicken-breast:chicken_boneless_thigh
chicken-breast:chicken_breast_tahir
chicken-leg-quarters:chicken_leg_quarter_box
chicken-leg-quarters:chicken_leg_quarter_half_box
chicken-queerma:chicken_qeema
chicken-drumsticks:chicken_thighs
goat-queema:goat_lamb_qeema
goat-paya:goat_paya_skin
goat-leg:lamb_shanks
"

# beef_nihari/bihari = bone-in stew cuts -> use beef-paya (bone) not sirloin
# override the above with proper mapping
PAIRS="
beef-paya:beef_bihari
beef-paya:beef_nihari
beef-fillet:beef_pasanda
beef-sirloin:beef_eye_round
chicken-drumsticks:chicken_pieces
chicken-breast:chicken_boneless_thigh
chicken-breast:chicken_breast_tahir
chicken-leg-quarters:chicken_leg_quarter_box
chicken-leg-quarters:chicken_leg_quarter_half_box
chicken-queerma:chicken_qeema
chicken-drumsticks:chicken_thighs
goat-queema:goat_lamb_qeema
goat-paya:goat_paya_skin
goat-leg:lamb_shanks
"

count=0
while IFS=: read -r srcname dstbase; do
  [ -z "$srcname" ] && continue
  jpg="$SRC/$srcname.jpg"
  webp="$ASSETS/$dstbase.webp"
  if [ ! -f "$jpg" ]; then echo "MISSING: $srcname"; continue; fi
  cwebp -q 80 "$jpg" -o "$webp.tmp" 2>/dev/null && mv "$webp.tmp" "$webp" && echo "REMAP: $srcname -> $dstbase" && count=$((count+1))
done <<< "$PAIRS"
echo "---"
echo "Remapped: $count"
