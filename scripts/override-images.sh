#!/bin/bash
# Override site meat-shop images with new generated photos from ~/Desktop/meat-shop-images-unzipped
# Converts jpg -> webp (via cwebp) and overwrites src/assets/*.webp
set -euo pipefail

SRC="/Users/abbas/Desktop/meat-shop-images-unzipped"
ASSETS="/Users/abbas/Developer/Quality-Halal-Market/src/assets"

# Listing of "zip-jpg-basename:asset-webp-basename" pairs
PAIRS="
beef-boneless:beef_boneless_leg
beef-cubes:beef_cubes_lean
beef-cubes-extra:beef_cubes_xlean
beef-fillet:beef_filet_mignon
beef-ground-extra:beef_ground_xlean
beef-ground-lean:beef_ground_lean
beef-ground-regular:beef_ground_regular
beef-knuckle:beef_knuckle
beef-leg-shoulder:beef_leg_shoulder
beef-liver:beef_liver
beef-marrow-bone:beef_marrow_bone
beef-pastrami:beef_pastrami
beef-paya:beef_paya
beef-ribs:beef_ribs
beef-ribeye:beef_ribeye
beef-shami:beef_shami
beef-sirloin:beef_sirloin
beef-sirloin-steak:beef_sirloin
beef-tbone:beef_tbone
beef-tongue:beef_tongue
beef-tripe:beef_tripe
beef-with-bone:beef_bone_mix
chicken-breast:chicken_breast
chicken-drumsticks:chicken_drumstick
chicken-fajita:chicken_fajita_strips
chicken-gizzard:chicken_gizzard
chicken-leg-quarters:chicken_leg_quarters
chicken-liver:chicken_liver
chicken-queerma:chicken_qeema
chicken-tenders:chicken_tenders
chicken-whole:chicken_whole
chicken-wings:chicken_wings
duck:frozen_duck
full-goat:goat_whole
goat-boneless:goat_lamb_boneless
goat-bones:goat_bones
goat-burnt-pata:goat_burnt_paya
goat-chops:goat_lamb_chops
goat-head:goat_head
goat-heart:goat_lamb_heart
goat-kidneys:goat_kidneys
goat-leg:goat_lamb_leg
goat-liver:goat_lamb_liver
goat-mix:goat_lamb_mix
goat-paya:goat_paya_skin
goat-putt-neck:goat_lamb_putt_neck
goat-queema:goat_lamb_qeema
goat-rib-rack:goat_lamb_rib_rack
goat-ribs:goat_lamb_ribs
goat-stomach:goat_stomach
goat-tongue:goat_tongue
half-goat:goat_lamb_half
khash:goat_lamb_leg_pair
ox-tail:beef_oxtail
quail:frozen_quail
"

overridden=0
skipped=0
while IFS=: read -r key webp_base; do
  [ -z "$key" ] && continue
  jpg="$SRC/$key.jpg"
  webp="$ASSETS/$webp_base.webp"
  if [ ! -f "$jpg" ]; then
    echo "MISSING JPG: $key"
    skipped=$((skipped+1))
    continue
  fi
  tmp="$webp.tmp"
  cwebp -q 80 "$jpg" -o "$tmp" 2>/dev/null || { echo "CONVERT FAIL: $key"; skipped=$((skipped+1)); continue; }
  mv "$tmp" "$webp"
  echo "OVERRIDDEN: $key.jpg -> $webp_base.webp"
  overridden=$((overridden+1))
done <<< "$PAIRS"

echo "---"
echo "Overridden: $overridden | Skipped: $skipped"
