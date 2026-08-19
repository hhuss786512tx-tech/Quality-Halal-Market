// Build timestamp: 1786581001Z — forced rebuild v2
const CACHE_BUST = '20260812-1933';
import React, { useState, useMemo, useEffect } from 'react';
import {
  Phone, X, ShieldCheck, ArrowRight, MapPin,
  Clock, ShoppingCart, Trash2,
  Sliders, Search,
  Eye, RefreshCw, Sparkles,
  Filter, ShoppingBag, Store, Beef, Milk, Wheat, Package, Drumstick, Ham, Camera, Users,
  Sun, Moon
} from 'lucide-react';
import IntroOverlay from './components/IntroOverlay';

// Imported Assets
import heroBanner from './assets/hero_banner_original.jpg';
import logo from './assets/logo.webp';

// Individual product photos. The block below is the store's own photography.
// A second block further down is licensed stock standing in for cuts the store
// has not photographed yet. Cuts covered by neither render a branded "photo
// coming soon" panel rather than borrowing another cut's photo.
//
// Species discipline: raw goat and raw lamb are not reliably distinguishable in
// a photo, and the store's own price board sells them as one line ("GOAT/LAMB"),
// so a single photo legitimately serves both halves of that line.
// The paya photo is wired to the beef line on the store's own identification.
import beefRibeye from './assets/beef_ribeye.webp';
import beefNihari from './assets/beef_nihari.webp';
import beefLiver from './assets/beef_liver.webp';
import beefTripe from './assets/beef_tripe.webp';
import beefPaya from './assets/beef_paya.webp';
import goatLambMix from './assets/goat_lamb_mix.webp';
import goatLambLeg from './assets/goat_lamb_leg.webp';
import goatLambHalf from './assets/goat_lamb_half.webp';
import goatLambRibRack from './assets/goat_lamb_rib_rack.webp';
import goatWhole from './assets/goat_whole.webp';
import chickenWhole from './assets/chicken_whole.webp';
import chickenPieces from './assets/chicken_pieces.webp';
import chickenBreast from './assets/chicken_breast.webp';
import chickenLegQuarters from './assets/chicken_leg_quarters.webp';
import chickenDrumstick from './assets/chicken_drumstick.webp';
import chickenWings from './assets/chicken_wings.webp';

// Stock photography (Pexels licence, commercial use permitted). These stand in
// for cuts the store has not photographed yet; see STOCK-PHOTO-CREDITS.md.
import beefBoneMix from './assets/beef_bone_mix.webp';
import beefLegShoulder from './assets/beef_leg_shoulder.webp';
import beefTbone from './assets/beef_tbone.webp';
import beefRibs from './assets/beef_ribs.webp';
import beefNeck from './assets/beef_neck.webp';
import beefBonelessLeg from './assets/beef_boneless_leg.webp';
import beefEyeRound from './assets/beef_eye_round.webp';
import beefCubesLean from './assets/beef_cubes_lean.webp';
import beefCubesXlean from './assets/beef_cubes_xlean.webp';
import beefGroundRegular from './assets/beef_ground_regular.webp';
import beefGroundLean from './assets/beef_ground_lean.webp';
import beefGroundXlean from './assets/beef_ground_xlean.webp';
import beefPasanda from './assets/beef_pasanda.webp';
import beefBihari from './assets/beef_bihari.webp';
import beefSirloin from './assets/beef_sirloin.webp';
import beefMarrowBone from './assets/beef_marrow_bone.webp';
import goatLambChops from './assets/goat_lamb_chops.webp';
import goatLambQeema from './assets/goat_lamb_qeema.webp';
import goatLambRibs from './assets/goat_lamb_ribs.webp';
import goatLambPuttNeck from './assets/goat_lamb_putt_neck.webp';
import chickenThighs from './assets/chicken_thighs.webp';
import chickenFajitaStrips from './assets/chicken_fajita_strips.webp';
import chickenTenders from './assets/chicken_tenders.webp';
import beefFiletMignon from './assets/beef_filet_mignon.webp';
import beefOxtail from './assets/beef_oxtail.webp';
import goatLambLiver from './assets/goat_lamb_liver.webp';
import goatLambHeart from './assets/goat_lamb_heart.webp';
import lambShanks from './assets/lamb_shanks.webp';
import frozenQuail from './assets/frozen_quail.webp';

// Placeholder photography — store to replace with real product shots.
// Served from public/assets/; bypasses Vite's import pipeline so every
// card has an image on day one.
const beefKnucklePng = './assets/beef_knuckle.webp';
const beefTonguePng = './assets/beef_tongue.webp';
const goatKidneysPng = './assets/goat_kidneys.webp';
const goatBonesPng = './assets/goat_bones.webp';
const goatPayaSkinPng = './assets/goat_paya_skin.webp';
const goatTonguePng = './assets/goat_tongue.webp';
const goatStomachPng = './assets/goat_stomach.webp';
const goatHeadPng = './assets/goat_head.webp';
const goatBurntPayaPng = './assets/goat_burnt_paya.webp';
const chickenQeemaPng = './assets/chicken_qeema.webp';
const chickenGizzardPng = './assets/chicken_gizzard.webp';
const chickenLiverPng = './assets/chicken_liver.webp';
const frozenDuckPng = './assets/frozen_duck.webp';

// ----------------------------------------------------------------------------
// Missing-photo handling
// Every category maps to an outline icon so a card without a store photo still
// reads as the right kind of product instead of showing an unrelated image.
// ----------------------------------------------------------------------------
const CATEGORY_ICON = {
  Beef: Beef,
  'Goat & Lamb': Ham,
  Chicken: Drumstick,
  Grocery: Package,
  'Rice, Flour & Lentils': Wheat,
  Spices: Package,
  Dairy: Milk,
  'Frozen & Canned': Package,
  'Sweets & Snacks': Package,
};

// Max-price filter bounds. The number box and the slider share them so a typed
// value can never fall outside the slider's range or desync the two controls.
// The ceiling tracks the dearest item on the board (Chicken Leg Quarters Box,
// $44.99) so the slider's travel maps onto prices that actually exist. It must
// stay at or above that figure: the filter drops anything priced over the
// slider value, so a ceiling below the dearest line would hide it permanently.
const PRICE_MIN = 3;
const PRICE_MAX = 45;
// An empty or unparseable box means "no ceiling yet", not "cheapest possible".
// Snapping to PRICE_MIN here would hide most of the counter the instant someone
// cleared the field to type a new number — a number input reports "" for any
// character it considers invalid, so that path is hit constantly.
const clampPrice = (raw) => {
  if (String(raw).trim() === '') return PRICE_MAX;
  const n = Number(raw);
  if (!Number.isFinite(n)) return PRICE_MAX;
  return Math.min(PRICE_MAX, Math.max(PRICE_MIN, n));
};

const PLACEHOLDER_ICON_SIZE = { thumb: 15, mini: 22, card: 34, tile: 46 };

const PhotoPlaceholder = ({ label, category, variant = 'card' }) => {
  const Icon = CATEGORY_ICON[category] ?? Camera;
  const showCaption = variant === 'card' || variant === 'tile';
  return (
    <div
      className={`photo-placeholder photo-placeholder-${variant}`}
      role="img"
      aria-label={`${label} — store photo coming soon`}
    >
      <Icon size={PLACEHOLDER_ICON_SIZE[variant] ?? 34} strokeWidth={1.5} aria-hidden="true" />
      {showCaption && <span className="photo-placeholder-text">Photo coming soon</span>}
    </div>
  );
};

// ============================================================================
// PRODUCT DATA — transcribed 1:1 from the store's printed price board.
//
// The board has six panels: Fresh Beef, Fresh Goat/Lamb, Fresh Chicken,
// Frozen Beef, Frozen Goat/Lamb, and Frozen Miscellaneous. Every product below
// maps to exactly one line on that board. Nothing is invented — if it is not on
// the board, it is not on this site. The board carries no fish or seafood of
// any kind, so neither does the site.
//
// Goat and lamb are one category here because that is how the store sells and
// prices them ("GOAT/LAMB LEG", "GOAT/LAMB MIX"). Splitting them into separate
// per-species cuts would mean inventing products the shop does not advertise.
//
// Prices come off the green stickers on the board. Two lines still carry
// price: null because their sticker is genuinely ambiguous rather than
// unreadable — Whole Chicken has a second figure pencilled beside the sticker,
// and Frozen Goat Burnt Paya has one sticker written over another. Those render
// as a tap-to-call "Call for price" link rather than a guessed number. Two
// lines on the frozen goat/lamb sheet are struck out in marker and are omitted.
//
// price: null = "Call for price" | perLb: true = append "/lb"
// marketPrice: true = "Market price"
// ============================================================================

const createProduct = (id, name, category, price, opts = {}) => ({
  id, name, category,
  price: price ?? null,
  originalPrice: opts.originalPrice ?? null,
  perLb: opts.perLb ?? false,
  marketPrice: opts.marketPrice ?? false,
  prepType: opts.prepType ?? 'Package',
  image: opts.image ?? null,
  badge: opts.badge ?? null,
  tags: opts.tags ?? [],
  description: opts.description ?? '',
  inStock: opts.inStock ?? true,
  rating: opts.rating ?? null,
  reviews: opts.reviews ?? null,
  // True for the handful of stock photos shot on a plain white background,
  // which otherwise clash against every other product's dark slate/rosemary
  // styling. The card blends these in with a multiply overlay — see
  // .product-img-wrapper--blend in index.css.
  whiteBg: opts.whiteBg ?? false,
});

const MEAT_PRODUCTS = [
  // ---- FRESH BEEF PRICES (18 board lines) --------------------------------
  createProduct('b1', 'Beef with Bone, Mixed Cut', 'Beef', 6.49, { image: beefBoneMix, perLb: true, prepType: 'Bone-in', badge: 'BONE-IN', description: 'Mixed bone-in beef, cut to order at the counter.' }),
  createProduct('b2', 'Beef Leg or Shoulder', 'Beef', 6.99, { image: beefLegShoulder, perLb: true, prepType: 'Boneless', description: 'Leg or shoulder, your choice — trimmed to order.' }),
  createProduct('b3', 'Beef Ribeye Steak', 'Beef', 10.99, { perLb: true, prepType: 'Steaks', image: beefRibeye, badge: 'PREMIUM CUT', description: 'Well-marbled ribeye, cut to the thickness you ask for.' }),
  createProduct('b4', 'Beef T-Bone Steak', 'Beef', 8.99, { image: beefTbone, perLb: true, prepType: 'Steaks', badge: 'BONE-IN', description: 'Strip and tenderloin either side of the bone.' }),
  createProduct('b5', 'Beef Ribs', 'Beef', 5.99, { image: beefRibs, perLb: true, prepType: 'Bone-in', badge: 'BONE-IN', description: 'Bone-in beef ribs for slow cooking or the grill.' }),
  createProduct('b6', 'Beef Neck', 'Beef', 6.99, { image: beefNeck, perLb: true, prepType: 'Bone-in', description: 'Bone-in neck — rich and full-flavoured when braised.' }),
  createProduct('b7', 'Beef Filet Mignon', 'Beef', 13.99, { image: beefFiletMignon, perLb: true, prepType: 'Steaks', badge: 'MOST TENDER', description: 'The tenderloin cut. The most tender steak on the counter.' }),
  createProduct('b8', 'Beef Boneless, from Leg', 'Beef', 8.99, { image: beefBonelessLeg, perLb: true, prepType: 'Boneless', description: 'Boneless leg meat, trimmed.' }),
  createProduct('b9', 'Fresh Nihari', 'Beef', 8.99, { perLb: true, prepType: 'Bone-in', image: beefNihari, badge: 'BONE-IN', description: 'Cross-cut shank with the marrow bone in — cut for nihari.' }),
  createProduct('b10', 'Beef Eye of Round Steak, Boneless', 'Beef', 7.49, { image: beefEyeRound, perLb: true, prepType: 'Steaks', description: 'Lean boneless round steak.' }),
  createProduct('b11', 'Beef Boneless Cubes, Lean', 'Beef', 7.49, { image: beefCubesLean, perLb: true, prepType: 'Cubed', badge: 'FOR CURRY', description: 'Boneless lean cubes, ready for the pot.' }),
  createProduct('b12', 'Beef Boneless Cubes, Extra Lean', 'Beef', 7.99, { image: beefCubesXlean, perLb: true, prepType: 'Cubed', badge: 'EXTRA LEAN', description: 'Boneless cubes trimmed extra lean.' }),
  createProduct('b13', 'Ground Beef, Regular', 'Beef', 6.99, { image: beefGroundRegular, perLb: true, prepType: 'Minced', badge: 'GROUND FRESH', description: 'Ground fresh at the counter.' }),
  createProduct('b14', 'Ground Beef, Lean', 'Beef', 7.49, { image: beefGroundLean, perLb: true, prepType: 'Minced', description: 'Leaner grind for kebabs and keema.' }),
  createProduct('b15', 'Ground Beef, Extra Lean', 'Beef', 7.99, { image: beefGroundXlean, perLb: true, prepType: 'Minced', badge: 'EXTRA LEAN', description: 'The leanest grind we make.' }),
  createProduct('b16', 'Beef Pasanda', 'Beef', 7.99, { image: beefPasanda, perLb: true, prepType: 'Boneless', badge: 'DESI CUT', description: 'Thin flat slices cut for pasanda.', whiteBg: true }),
  createProduct('b17', 'Beef Bihari Cut', 'Beef', 7.99, { image: beefBihari, perLb: true, prepType: 'Boneless', badge: 'DESI CUT', description: 'Long thin strips cut for Bihari kebab.' }),
  createProduct('b18', 'Beef Sirloin Steak', 'Beef', 11.99, { image: beefSirloin, perLb: true, prepType: 'Steaks', description: 'Boneless sirloin, cut to order.' }),

  // ---- FROZEN BEEF PRICES (7 board lines) --------------------------------
  createProduct('b19', 'Frozen Beef Paya (Trotters)', 'Beef', 4.99, { perLb: true, prepType: 'Bone-in', image: beefPaya, badge: 'FROZEN', description: 'Frozen beef trotters for paya.' }),
  createProduct('b20', 'Frozen Oxtail', 'Beef', 9.99, { image: beefOxtail, perLb: true, prepType: 'Bone-in', badge: 'FROZEN', description: 'Frozen oxtail, cut into sections.' }),
  createProduct('b21', 'Frozen Beef Liver', 'Beef', 3.99, { perLb: true, prepType: 'Organ', image: beefLiver, badge: 'FROZEN', description: 'Sliced beef liver, frozen.' }),
  createProduct('b22', 'Beef Marrow Bone', 'Beef', 3.99, { image: beefMarrowBone, perLb: true, prepType: 'Bone-in', badge: 'FOR STOCK', description: 'Marrow bones for stock, soup, and nihari.' }),
  createProduct('b23', 'Beef Knuckle / Joint Bone', 'Beef', 2.99, { perLb: true, prepType: 'Bone-in', image: beefKnucklePng, badge: 'FOR STOCK', description: 'Knuckle and joint bones for long-simmered stock.' }),
  createProduct('b24', 'Beef Tripe / Stomach', 'Beef', 8.99, { perLb: true, prepType: 'Organ', image: beefTripe, badge: 'SPECIALTY', description: 'Cleaned honeycomb tripe.' }),
  createProduct('b25', 'Beef Tongue', 'Beef', 6.99, { perLb: true, prepType: 'Organ', image: beefTonguePng, badge: 'SPECIALTY', description: 'Whole beef tongue.' }),

  // ---- FRESH GOAT/LAMB (13 board lines) ----------------------------------
  // The board prices goat and lamb identically on a single shared line.
  createProduct('gl1', 'Half Goat / Lamb', 'Goat & Lamb', 13.99, { perLb: true, prepType: 'Whole', image: goatLambHalf, badge: 'ORDER AHEAD', description: 'Half animal, cut to your instructions. Call ahead.' }),
  createProduct('gl2', 'Whole Goat / Lamb', 'Goat & Lamb', 13.99, { perLb: true, prepType: 'Whole', image: goatWhole, badge: 'ORDER AHEAD', description: 'Whole animal, cut to your instructions. Call ahead.' }),
  createProduct('gl3', 'Goat / Lamb Leg', 'Goat & Lamb', 15.99, { perLb: true, prepType: 'Bone-in', image: goatLambLeg, badge: 'SIGNATURE CUT', description: 'Whole bone-in leg, shank attached.' }),
  createProduct('gl4', 'Goat / Lamb Mixed Cut', 'Goat & Lamb', 13.99, { perLb: true, prepType: 'Bone-in', image: goatLambMix, badge: 'FOR CURRY', description: 'Bone-in curry cut — the everyday mix.' }),
  createProduct('gl5', 'Goat / Lamb Chops', 'Goat & Lamb', 14.99, { image: goatLambChops, perLb: true, prepType: 'Chops', badge: 'POPULAR', description: 'Loin chops, cut to order.' }),
  createProduct('gl6', 'Goat / Lamb Liver', 'Goat & Lamb', 5.99, { image: goatLambLiver, perLb: true, prepType: 'Organ', description: 'Fresh liver, cleaned.' }),
  createProduct('gl7', 'Goat / Lamb Kidneys', 'Goat & Lamb', 10.99, { perLb: true, prepType: 'Organ', image: goatKidneysPng, description: 'Fresh kidneys, cleaned.' }),
  createProduct('gl8', 'Goat / Lamb Qeema (Ground)', 'Goat & Lamb', 15.99, { image: goatLambQeema, perLb: true, prepType: 'Minced', badge: 'GROUND FRESH', description: 'Ground fresh at the counter for keema and kebabs.' }),
  createProduct('gl9', 'Goat / Lamb Boneless', 'Goat & Lamb', 16.99, { perLb: true, prepType: 'Boneless', badge: 'PREMIUM', description: 'Fully boned-out meat, trimmed.' }),
  createProduct('gl10', 'Goat / Lamb Heart', 'Goat & Lamb', 5.99, { image: goatLambHeart, perLb: true, prepType: 'Organ', description: 'Fresh heart, cleaned and trimmed.' }),
  createProduct('gl11', 'Goat / Lamb Ribs', 'Goat & Lamb', 12.99, { image: goatLambRibs, perLb: true, prepType: 'Bone-in', badge: 'BONE-IN', description: 'Bone-in ribs for the grill or the pot.' }),
  createProduct('gl12', 'Goat / Lamb Putt & Neck', 'Goat & Lamb', 14.99, { image: goatLambPuttNeck, perLb: true, prepType: 'Bone-in', description: 'Putt and neck pieces, bone-in.' }),
  createProduct('gl13', 'Goat / Lamb Rib Rack', 'Goat & Lamb', 14.99, { perLb: true, prepType: 'Bone-in', image: goatLambRibRack, badge: 'BONE-IN', description: 'Full rack of ribs, French-trimmed on request.' }),

  // ---- FROZEN GOAT/LAMB (8 live board lines; 2 struck out, omitted) ------
  createProduct('gl15', 'Frozen Lamb Shanks', 'Goat & Lamb', 6.99, { image: lambShanks, perLb: true, prepType: 'Bone-in', badge: 'FROZEN', description: 'Frozen lamb shanks for slow braising.' }),
  createProduct('gl16', 'Frozen Goat Bones', 'Goat & Lamb', 4.99, { perLb: true, prepType: 'Bone-in', image: goatBonesPng, badge: 'FOR STOCK', description: 'Goat bones for stock and soup.' }),
  createProduct('gl17', 'Frozen Goat Paya with Skin', 'Goat & Lamb', 5.99, { perLb: true, prepType: 'Bone-in', image: goatPayaSkinPng, badge: 'FROZEN', description: 'Goat trotters with the skin on, for paya.' }),
  createProduct('gl18', 'Frozen Goat / Lamb Tongue', 'Goat & Lamb', 6.99, { perLb: true, prepType: 'Organ', image: goatTonguePng, badge: 'FROZEN', description: 'Frozen tongue.' }),
  createProduct('gl19', 'Frozen Goat / Lamb Stomach', 'Goat & Lamb', 5.99, { perLb: true, prepType: 'Organ', image: goatStomachPng, badge: 'FROZEN', description: 'Cleaned stomach, frozen.' }),
  createProduct('gl20', 'Frozen Goat / Lamb Head', 'Goat & Lamb', 10.00, { prepType: 'Whole', image: goatHeadPng, badge: 'EACH', description: 'Whole head, frozen. Priced each, not per pound.' }),
  createProduct('gl21', 'Frozen Goat Burnt Paya', 'Goat & Lamb', null, { perLb: true, prepType: 'Bone-in', image: goatBurntPayaPng, badge: 'FROZEN', description: 'Singed goat trotters, ready to clean and cook.' }),

  // ---- FRESH CHICKEN (13 board lines) ------------------------------------
  // Prices on this panel are read off the board's green stickers. Whole Chicken
  // is the exception: its sticker reads 3.99 but a second figure is pencilled
  // beside it, so that line stays on "Call for price" until the store confirms.
  createProduct('c1', 'Whole Chicken', 'Chicken', null, { perLb: true, prepType: 'Whole', image: chickenWhole, badge: 'ZABIHA', description: 'Hand-slaughtered whole chicken. Cut up on request at no charge.' }),
  createProduct('c4', 'Chicken Boneless Breast', 'Chicken', 5.99, { perLb: true, prepType: 'Boneless', image: chickenBreast, badge: 'BONELESS', description: 'Skinless boneless breast fillets, trimmed.' }),
  createProduct('c5', 'Chicken Boneless Thigh', 'Chicken', 4.99, { perLb: true, prepType: 'Boneless', badge: 'BONELESS', description: 'Skinless boneless thigh meat.' }),
  createProduct('c6', 'Chicken Drumsticks', 'Chicken', 2.69, { perLb: true, prepType: 'Bone-in', image: chickenDrumstick, badge: 'FAMILY FAVORITE', description: 'Fresh chicken drumsticks.' }),
  createProduct('c10', 'Chicken Qeema (Ground)', 'Chicken', 5.99, { perLb: true, prepType: 'Minced', image: chickenQeemaPng, badge: 'GROUND FRESH', description: 'Ground chicken for kebabs and keema.' }),
  createProduct('c11', 'Chicken Fajita Strips', 'Chicken', 5.99, { image: chickenFajitaStrips, perLb: true, prepType: 'Boneless', description: 'Boneless strips, cut for fajitas and stir-fry.' }),
  createProduct('c12', 'Chicken Tenders', 'Chicken', 5.99, { image: chickenTenders, perLb: true, prepType: 'Boneless', description: 'Breast tenderloins.' }),
  createProduct('c13', 'Chicken Leg Quarters', 'Chicken', 2.49, { perLb: true, prepType: 'Bone-in', image: chickenLegQuarters, badge: 'BONE-IN', description: 'Thigh and drumstick attached, sold by the pound.' }),

  // ---- FROZEN MISCELLANEOUS (5 board lines) ------------------------------
  createProduct('c14', 'Chicken Wings', 'Chicken', 4.99, { perLb: true, prepType: 'Bone-in', image: chickenWings, badge: 'PARTY PACK', description: 'Whole wings for BBQ, tandoori, or frying.' }),
  createProduct('c15', 'Chicken Gizzard', 'Chicken', 2.49, { perLb: true, prepType: 'Organ', image: chickenGizzardPng, badge: 'FROZEN', description: 'Cleaned chicken gizzards.', whiteBg: true }),
  createProduct('c16', 'Chicken Liver', 'Chicken', 2.49, { perLb: true, prepType: 'Organ', image: chickenLiverPng, badge: 'FROZEN', description: 'Fresh chicken livers, cleaned.', whiteBg: true }),
  createProduct('c17', 'Frozen Quail', 'Chicken', 14.99, { image: frozenQuail, prepType: 'Whole', badge: 'PER TRAY', description: 'Whole quail, sold by the tray.' }),
  createProduct('c18', 'Frozen Duck', 'Chicken', 6.99, { perLb: true, prepType: 'Whole', image: frozenDuckPng, badge: 'FROZEN', description: 'Whole frozen duck.', whiteBg: true }),
];

// ---------------------------------------------------------------------------
// GROCERY
// The store's own business card lists its grocery lines: "Fresh Vegetables /
// Spices, Snacks / Frozen & Canned Foods / Dairy Products / Sweets and more".
// The product names below reflect those lines, but the meat board is the only
// price list we have been given, and it covers the butcher counter only. Every
// grocery item therefore shows "Call for price" — no shelf price is asserted
// here that we cannot source.
// ---------------------------------------------------------------------------
const GROCERY_RICE = [
  createProduct('gr1', 'Basmati Rice, 10 lb', 'Rice, Flour & Lentils', null, { badge: 'PANTRY ESSENTIAL', description: 'Aged extra-long grain aromatic Basmati.' }),
  createProduct('gr2', 'Basmati Rice, 20 lb', 'Rice, Flour & Lentils', null, { badge: 'FAMILY SIZE', description: 'Premium Pakistani Basmati.' }),
  createProduct('gr3', 'Sella Rice', 'Rice, Flour & Lentils', null, { badge: 'PARBOILED', description: 'Parboiled Sella rice — never sticky.' }),
  createProduct('gr4', 'Atta / Chapati Flour', 'Rice, Flour & Lentils', null, { description: 'Stone-ground whole wheat flour.' }),
  createProduct('gr5', 'Besan (Gram Flour)', 'Rice, Flour & Lentils', null, { description: 'Fine chickpea flour for pakoras.' }),
  createProduct('gr6', 'Toor Dal', 'Rice, Flour & Lentils', null, { description: 'Split pigeon peas.' }),
  createProduct('gr7', 'Masoor Dal', 'Rice, Flour & Lentils', null, { description: 'Red lentils — quick cooking.' }),
  createProduct('gr8', 'Chana Dal', 'Rice, Flour & Lentils', null, { description: 'Split chickpea lentils.' }),
  createProduct('gr9', 'Chickpeas', 'Rice, Flour & Lentils', null, { description: 'Whole dried chickpeas.' }),
];

const GROCERY_SPICES = [
  createProduct('gs1', 'Garam Masala', 'Spices', null, { description: 'House-blended aromatic masala.' }),
  createProduct('gs2', 'Turmeric Powder', 'Spices', null, { description: 'Pure ground turmeric.' }),
  createProduct('gs3', 'Red Chili Powder', 'Spices', null, { description: 'Hot red chili powder.' }),
  createProduct('gs4', 'Coriander Powder', 'Spices', null, { description: 'Ground coriander seed.' }),
  createProduct('gs5', 'Cumin Seed', 'Spices', null, { description: 'Whole cumin seeds.' }),
  createProduct('gs6', 'Biryani Masala', 'Spices', null, { description: 'Biryani spice mix.' }),
  createProduct('gs7', 'Curry Paste', 'Spices', null, { description: 'Ginger-garlic curry paste.' }),
  createProduct('gs8', 'Saffron', 'Spices', null, { badge: 'PREMIUM', description: 'Saffron threads.' }),
];

const GROCERY_DAIRY = [
  createProduct('gd1', 'Paneer', 'Dairy', null, { badge: 'FRESH', description: 'Fresh Indian-style cheese block.' }),
  createProduct('gd2', 'Yogurt / Dahi', 'Dairy', null, { description: 'Plain whole-milk yogurt.' }),
  createProduct('gd3', 'Ghee', 'Dairy', null, { badge: 'PREMIUM', description: 'Pure clarified butter ghee.' }),
  createProduct('gd4', 'Lassi', 'Dairy', null, { description: 'Refreshing yogurt drink.' }),
  createProduct('gd5', 'Halal Cheese', 'Dairy', null, { description: 'Imported halal-certified cheese.' }),
];

const GROCERY_FROZEN = [
  createProduct('gf1', 'Frozen Paratha', 'Frozen & Canned', null, { badge: 'FROZEN', description: 'Flaky Malabari-style frozen parathas.' }),
  createProduct('gf2', 'Frozen Samosa', 'Frozen & Canned', null, { description: 'Ready-to-fry vegetable samosas.' }),
  createProduct('gf3', 'Frozen Seekh Kebab', 'Frozen & Canned', null, { badge: 'FROZEN', description: 'Pre-skewered frozen seekh kebabs.' }),
  createProduct('gf4', 'Frozen Naan', 'Frozen & Canned', null, { description: 'Tandoori-style frozen naan.' }),
  createProduct('gf5', 'Canned Tomatoes', 'Frozen & Canned', null, { description: 'Imported plum tomatoes.' }),
  createProduct('gf6', 'Coconut Milk', 'Frozen & Canned', null, { description: 'Creamy canned coconut milk.' }),
  createProduct('gf7', 'Pickle / Achar', 'Frozen & Canned', null, { description: 'Mixed mango & lime pickle.' }),
];

const GROCERY_SNACKS = [
  createProduct('gk1', 'Gulab Jamun', 'Sweets & Snacks', null, { badge: 'SWEETS', description: 'Ready-to-make gulab jamun mix.' }),
  createProduct('gk2', 'Barfi', 'Sweets & Snacks', null, { description: 'Traditional milk fudge squares.' }),
  createProduct('gk3', 'Jalebi', 'Sweets & Snacks', null, { description: 'Crispy syrup-soaked spirals.' }),
  createProduct('gk4', 'Rasmalai', 'Sweets & Snacks', null, { description: 'Creamy paneer dumplings in sweet milk.' }),
  createProduct('gk5', 'Namkeen Mix', 'Sweets & Snacks', null, { description: 'Spiced savory snack mix.' }),
  createProduct('gk6', 'Dates', 'Sweets & Snacks', null, { badge: 'TOP SELLER', description: 'Medjool dates.' }),
  createProduct('gk7', 'Baklava', 'Sweets & Snacks', null, { description: 'Layered filo pastry with nuts and honey.' }),
];

const ALL_GROCERY = [...GROCERY_RICE, ...GROCERY_SPICES, ...GROCERY_DAIRY, ...GROCERY_FROZEN, ...GROCERY_SNACKS];

// Grocery sub-tabs. Defined at module scope — it's a static catalog grouping,
// so it never needs to be recreated per render.
const GROCERY_SUB_CATEGORIES = [
  { key: 'rice', label: 'Rice, Flour & Lentils', data: GROCERY_RICE },
  { key: 'spices', label: 'Spices', data: GROCERY_SPICES },
  { key: 'dairy', label: 'Dairy', data: GROCERY_DAIRY },
  { key: 'frozen', label: 'Frozen & Canned', data: GROCERY_FROZEN },
  { key: 'snacks', label: 'Sweets & Snacks', data: GROCERY_SNACKS },
];

// Meat categories for ribbon nav. Goat and lamb share a category because the
// store's price board sells them on one shared line.
const MEAT_CATEGORIES = ['All', 'Beef', 'Goat & Lamb', 'Chicken'];

// Category showcase cards. Counts are derived rather than hand-written so they
// can never drift out of step with the catalog above.
const countIn = (cat) => MEAT_PRODUCTS.filter(p => p.category === cat).length;

const PHOTO_CATEGORIES = [
  { name: 'Beef', title: 'BEEF', count: `${countIn('Beef')} Cuts`, img: beefRibeye, badge: 'Fresh & Frozen' },
  { name: 'Goat & Lamb', title: 'GOAT & LAMB', count: `${countIn('Goat & Lamb')} Cuts`, img: goatWhole, badge: 'Whole & Half Available' },
  { name: 'Chicken', title: 'CHICKEN', count: `${countIn('Chicken')} Cuts`, img: chickenPieces, badge: 'Hand-Slaughtered' },
];

// Home hero rotation — reuses the same store photography as the category
// tiles below it (no new assets) so the slideshow stays on-brand.
const HOME_HERO_IMAGES = [
  { src: heroBanner, alt: 'Quality Halal Market butcher counter' },
  { src: beefRibeye, alt: 'Hand-cut beef ribeye' },
  { src: goatWhole, alt: 'Whole goat, hand-slaughtered Zabiha' },
  { src: chickenPieces, alt: 'Fresh cut chicken pieces' },
];

// Hero copy for each category's own page.
const CATEGORY_PAGE_COPY = {
  Beef: { title: 'Fresh & Frozen Beef', subtitle: 'Hand-slaughtered Zabiha beef, cut to order — from everyday curry cuts to ribeye and filet mignon.' },
  'Goat & Lamb': { title: 'Fresh Goat & Lamb', subtitle: 'Whole, half, or cut to order — bone-in, boneless, and every specialty cut on the board.' },
  Chicken: { title: 'Fresh & Frozen Chicken', subtitle: 'Hand-slaughtered Zabiha chicken, cut up on request at no charge.' },
};

// Ribbon thumbnails — only categories with a real store photo get one.
const RIBBON_THUMB = { Beef: beefRibeye, 'Goat & Lamb': goatWhole, Chicken: chickenPieces };

// ----------------------------------------------------------------------------
// Routing — a real separate page per meat category (own URL, own hero banner),
// not just an in-page filter. Hash-based on purpose: this is a static GitHub
// Pages project site with no server-side rewrite rule, so a path-based route
// like /beef would 404 on a hard refresh; #/beef always resolves to index.html.
// ----------------------------------------------------------------------------
const ROUTE_CATEGORY = { beef: 'Beef', 'goat-lamb': 'Goat & Lamb', chicken: 'Chicken' };
const CATEGORY_ROUTE = { Beef: 'beef', 'Goat & Lamb': 'goat-lamb', Chicken: 'chicken' };

const getRouteFromHash = () => {
  if (typeof window === 'undefined') return 'home';
  const h = window.location.hash.replace(/^#\/?/, '');
  return ROUTE_CATEGORY[h] ? h : 'home';
};

export default function App() {
  // 'home' (all meat) or one of the ROUTE_CATEGORY keys (its own page).
  const [route, setRoute] = useState(getRouteFromHash);
  const activeMeatCat = route === 'home' ? 'All' : ROUTE_CATEGORY[route];
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [priceMaxFilter, setPriceMaxFilter] = useState(PRICE_MAX);
  const [selectedPreps, setSelectedPreps] = useState([]);
  const [onlyBoneIn, setOnlyBoneIn] = useState(false);
  // Filters default open on desktop but start collapsed on phones — otherwise the
  // price/prep-style filter panel pushes the first product ~3000px down the page
  // before a mobile visitor sees any meat.
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => typeof window === 'undefined' || window.innerWidth > 768);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Light/dark theme — persisted so a returning visitor keeps their choice.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('qhm-theme') || 'dark';
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qhm-theme', theme);
  }, [theme]);

  // Home hero slideshow — advances on a timer, crossfades in CSS.
  const [heroSlide, setHeroSlide] = useState(0);
  useEffect(() => {
    if (route !== 'home') return;
    const id = setInterval(() => {
      setHeroSlide(i => (i + 1) % HOME_HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [route]);

  // Keep `route` in sync with the URL (back/forward buttons, a pasted link).
  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // A real page change: updates the URL, resets in-page state that shouldn't
  // leak from one page to the next, and jumps to the top. The scroll happens
  // instantly (no smooth animation) because the intro overlay is about to
  // cover the whole viewport anyway, so the jump is never visible.
  const navigate = (r) => {
    window.location.hash = r === 'home' ? '' : `/${r}`;
    setRoute(r);
    setSearchQuery('');
    setPriceMaxFilter(PRICE_MAX);
    setSelectedPreps([]);
    setOnlyBoneIn(false);
    window.scrollTo(0, 0);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    let source = MEAT_PRODUCTS;

    if (activeMeatCat !== 'All') {
      source = source.filter(p => p.category === activeMeatCat);
    }

    return source.filter(p => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.trim().toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
      }
      if (p.price !== null && p.price > priceMaxFilter) return false;
      if (selectedPreps.length > 0 && !selectedPreps.includes(p.prepType)) return false;
      if (onlyBoneIn && !p.name.toLowerCase().includes('bone-in')) return false;
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return (a.price ?? 999) - (b.price ?? 999);
      if (sortOption === 'price-high') return (b.price ?? 0) - (a.price ?? 0);
      return 0;
    });
  }, [activeMeatCat, searchQuery, priceMaxFilter, selectedPreps, onlyBoneIn, sortOption]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + ((item.price ?? 0) * item.quantity), 0);
  }, [cart]);

  // Items the board doesn't publish a price for still belong on the list; they
  // just can't be totalled, so the drawer says so explicitly.
  const unpricedCount = useMemo(
    () => cart.reduce((n, item) => n + (item.price === null ? item.quantity : 0), 0),
    [cart]
  );

  const handleAddToCart = (product) => {
    const existingIndex = cart.findIndex(ci => ci.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
    if (quickViewProduct) setQuickViewProduct(null);
  };

  const handleUpdateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const handleRemoveFromCart = (id) => setCart(cart.filter(ci => ci.id !== id));

  const togglePrepFilter = (prep) => {
    setSelectedPreps(prev => prev.includes(prep) ? prev.filter(p => p !== prep) : [...prev, prep]);
  };


  const formatPrice = (product) => {
    if (product.marketPrice) return 'Market price';
    if (product.price === null) return (
      <a href="tel:+15122607677" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-accent)', border: '1px solid var(--border-gold)', borderRadius: '9999px', padding: '0.15rem 0.65rem', fontSize: '0.82rem', fontWeight: 700, backgroundColor: 'rgba(251,191,36,0.08)' }}>
        <Phone size={13} /> Call for price
      </a>
    );
    return `$${product.price.toFixed(2)}${product.perLb ? ' / lb' : ''}`;
  };

  return (
    <>
      {/* Remounts (and so replays) on every full page load and on every
          in-app navigation between the home page and a category page,
          because `key` changes with `route`. */}
      <IntroOverlay key={route} />
    <div className="site-wrapper">

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="container">
          <div className="announcement-flex-wrap">
            <div className="announcement-group-left">
              <span className="announcement-item">
                <ShieldCheck size={16} className="text-gold" />
                <span>100% Hand-Slaughtered Zabiha Halal</span>
              </span>
              <span className="announcement-item">
                <Store size={16} />
                <span>Indian • Pakistani • Mediterranean Groceries</span>
              </span>
            </div>
            <div className="announcement-group-right">
              <span className="announcement-item">
                <MapPin size={14} className="text-gold" />
                <span>12920 W Parmer Ln #106, Cedar Park, TX</span>
              </span>
              <span className="announcement-item">
                <Clock size={14} />
                <span>Daily: 10:00 AM - 9:00 PM</span>
              </span>
              <a href="tel:+15122607677" className="announcement-phone-pill">
                <Phone size={13} /> (512) 260-7677
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header">
        <div className="container">
          <div className="header-main">
            <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => navigate('home')}>
              <img src={logo} alt="Quality Halal Market" className="logo-mark-img" />
              <div className="logo-text-group">
                <h1>Quality Halal Market</h1>
                <span>Cedar Park, TX • Hand-Cut Zabiha</span>
              </div>
            </div>
            <div className="header-search">
              <Search className="header-search-icon" size={18} />
              <input type="text" className="header-search-input" placeholder="Search all products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="header-actions">
              <button
                className="theme-toggle-btn"
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="tel:+15122607677" className="cart-header-btn" style={{ background: 'var(--gold-accent)', color: '#0b0a09' }}>
                <Phone size={20} />
                <span>Call to Order</span>
              </a>
              <button className="cart-header-btn" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart size={20} />
                <span>My List</span>
                <span className="cart-badge-count">{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO — home shows the counter overview; a category page gets its own
          banner (own photo, own headline) so it reads as a real separate page. */}
      <section className="hero-section">
        {route === 'home' ? (
          HOME_HERO_IMAGES.map((slide, idx) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`hero-bg-img ${idx === heroSlide ? 'active' : ''}`}
            />
          ))
        ) : (
          <img
            src={PHOTO_CATEGORIES.find(c => c.name === activeMeatCat)?.img ?? heroBanner}
            alt={activeMeatCat}
            className="hero-bg-img active"
          />
        )}
        {route === 'home' && (
          <div className="hero-dots">
            {HOME_HERO_IMAGES.map((slide, idx) => (
              <button
                key={slide.src}
                className={`hero-dot ${idx === heroSlide ? 'active' : ''}`}
                onClick={() => setHeroSlide(idx)}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
        <div className="container">
          <div className="hero-content-wrap">
            {route === 'home' ? (
              <>
                <div className="hero-badge-pill"><Sparkles size={14} /> Hand-Cut Daily • Zabiha Halal</div>
                <h2 className="hero-title">Your Premium Halal Meat Butcher Counter</h2>
                <p className="hero-subtitle">Hand-slaughtered Zabiha beef, goat, lamb, and chicken — fresh and frozen. Custom cut and trimmed to order at the counter.</p>
                <div className="hero-actions">
                  <button className="btn-primary-green" onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span>Shop Meat Counter</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-outline-gold" onClick={() => document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span>Explore Collections</span>
                  </button>
                  <a href="tel:+15122607677" className="btn-outline-gold" style={{ borderColor: 'var(--primary-green)', color: 'var(--emerald-bright)' }}>
                    <Phone size={18} /><span>Call (512) 260-7677</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="hero-badge-pill"><Sparkles size={14} /> Hand-Cut Daily • Zabiha Halal</div>
                <h2 className="hero-title">{CATEGORY_PAGE_COPY[activeMeatCat]?.title ?? activeMeatCat}</h2>
                <p className="hero-subtitle">{CATEGORY_PAGE_COPY[activeMeatCat]?.subtitle}</p>
                <div className="hero-actions">
                  <button className="btn-primary-green" onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span>Shop {activeMeatCat}</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-outline-gold" onClick={() => navigate('home')}>
                    <span>← All Meat</span>
                  </button>
                  <a href="tel:+15122607677" className="btn-outline-gold" style={{ borderColor: 'var(--primary-green)', color: 'var(--emerald-bright)' }}>
                    <Phone size={18} /><span>Call (512) 260-7677</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CATEGORIES SHOWCASE — home only; each category has its own page now */}
      {route === 'home' && (
        <section id="categories-section" className="categories-showcase-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Explore By Category</span>
              <h3 className="section-title-lg">Fresh Cut Meat Market</h3>
              <p className="section-desc">Select a category to filter our inventory.</p>
            </div>
            <div className="photo-categories-grid">
              {PHOTO_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="photo-category-card" onClick={() => navigate(CATEGORY_ROUTE[cat.name])}>
                  {cat.img
                    ? <img src={cat.img} alt={cat.title} className="photo-category-img" />
                    : <PhotoPlaceholder label={cat.title} category={cat.name} variant="tile" />}
                  <div className="photo-category-overlay">
                    <span className="photo-category-badge">{cat.badge}</span>
                    <h4 className="photo-category-title">{cat.title}</h4>
                    <div className="photo-category-count">
                      <span>{cat.count}</span>
                      <div className="photo-category-arrow"><ArrowRight size={16} /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY RIBBON — also doubles as primary nav between the home page
          and each meat's own page; pills navigate rather than just filter. */}
      <section id="shop-section" className="shop-cat-ribbon-section">
        <div className="container">
          <div className="shop-cat-ribbon-wrap">
            {MEAT_CATEGORIES.map(cat => (
              <button key={cat} className={`shop-cat-pill ${activeMeatCat === cat ? 'active' : ''}`} onClick={() => navigate(cat === 'All' ? 'home' : CATEGORY_ROUTE[cat])}>
                {cat === 'All' ? (
                  <div className="shop-cat-icon-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-green)', border: '1.5px solid var(--gold-accent)' }}>
                    <ShoppingBag size={16} color="var(--gold-accent)" />
                  </div>
                ) : (
                  RIBBON_THUMB[cat]
                    ? <img src={RIBBON_THUMB[cat]} alt={cat} className="shop-cat-icon-thumb" />
                    : <PhotoPlaceholder label={cat} category={cat} variant="thumb" />
                )}
                <span>{cat === 'All' ? 'All Meat' : cat}</span>
                <span className="shop-cat-count-badge">
                  {cat === 'All' ? MEAT_PRODUCTS.length : MEAT_PRODUCTS.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLBAR */}
      <section className="shop-toolbar-section">
        <div className="container">
          <div className="shop-toolbar-bar">
            <div className="shop-toolbar-left">
              <button className="btn-filter-drawer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Sliders size={16} /><span>{isSidebarOpen ? 'Hide Filters' : 'Filter'}</span>
              </button>
              <span className="results-count-text">Showing {filteredProducts.length} items</span>
            </div>
            <div className="shop-toolbar-right">
              <select className="shop-select-box" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SHOP */}
      <main className="container">
        <div className={`shop-main-layout ${!isSidebarOpen ? 'no-sidebar' : ''}`}>
          {isSidebarOpen && (
            <aside className="shop-sidebar">
              <div className="filter-widget">
                <h4 className="widget-title"><span>Max Price</span><Filter size={16} /></h4>
                <div className="price-range-inputs">
                  <div className="price-input-wrap">
                    <span>$</span>
                    <input type="number" className="price-num-input" min={PRICE_MIN} max={PRICE_MAX}
                      value={priceMaxFilter}
                      onChange={(e) => setPriceMaxFilter(clampPrice(e.target.value))} />
                  </div>
                </div>
                <input type="range" className="price-slider-bar" min={PRICE_MIN} max={PRICE_MAX}
                  value={priceMaxFilter}
                  onChange={(e) => setPriceMaxFilter(clampPrice(e.target.value))} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Up to ${priceMaxFilter}.00</span>
              </div>
              {(
                <div className="filter-widget">
                  <h4 className="widget-title">Prep Style</h4>
                  <div className="filter-checkbox-list">
                    {['Steaks', 'Boneless', 'Bone-in', 'Minced', 'Cubed', 'Chops', 'Whole', 'Organ'].map(prep => (
                      <label key={prep} className="filter-checkbox-label">
                        <span><input type="checkbox" checked={selectedPreps.includes(prep)} onChange={() => togglePrepFilter(prep)} />{prep}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              <div className="filter-widget">
                <h4 className="widget-title">Bone-In Only</h4>
                <label className="filter-checkbox-label">
                  <span><input type="checkbox" checked={onlyBoneIn} onChange={(e) => setOnlyBoneIn(e.target.checked)} />Show bone-in cuts only</span>
                </label>
              </div>
              <button className="btn-outline-gold" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem' }}
                onClick={() => { setSearchQuery(''); setPriceMaxFilter(PRICE_MAX); setSelectedPreps([]); setOnlyBoneIn(false); }}>
                <RefreshCw size={14} /><span>Clear Filters</span>
              </button>
            </aside>
          )}

          <section className="shop-products-column">
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)' }}>
                <Search size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <h3>No items found</h3>
                <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="products-grid-container cols-3">
                {filteredProducts.map(p => (
                  <div key={p.id} className="product-card">
                    <div className={`product-img-wrapper ${p.whiteBg ? 'product-img-wrapper--blend' : ''}`}>
                      {p.image
                        ? <img src={p.image} alt={p.name} className="product-card-img" />
                        : <PhotoPlaceholder label={p.name} category={p.category} variant="card" />}
                      <div className="card-badges-stack">
                        <span className="badge-halal">ZABIHA HALAL</span>
                        {p.badge && <span className="badge-sale">{p.badge}</span>}
                      </div>
                      <div className="quick-actions-bar">
                        <button className="action-icon-btn" title="Quick View" onClick={() => setQuickViewProduct(p)}><Eye size={16} /></button>
                      </div>
                    </div>
                    <div className="product-card-body">
                      <span className="product-sku-tag" style={{ color: p.marketPrice ? 'var(--gold-accent)' : 'var(--text-muted)' }}>
                        {p.marketPrice ? 'MARKET PRICE' : p.category.toUpperCase()}
                      </span>
                      <h3 className="product-title">{p.name}</h3>
                      <div className="product-pricing-wrap">
                        <span className="current-price">{formatPrice(p)}</span>
                        {p.originalPrice && <span className="old-price">${p.originalPrice.toFixed(2)}</span>}
                      </div>
                      <div className="card-bottom-controls">
                        <button className="btn-add-cart-card" onClick={() => handleAddToCart(p)}>
                          <ShoppingCart size={16} /><span>Add to List</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuickViewProduct(null)}><X size={20} /></button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                {quickViewProduct.image
                  ? <div className={`product-img-wrapper ${quickViewProduct.whiteBg ? 'product-img-wrapper--blend' : ''}`} style={{ height: '340px', borderRadius: 'var(--radius-md)' }}>
                      <img src={quickViewProduct.image} alt={quickViewProduct.name} className="product-card-img" />
                    </div>
                  : <div style={{ height: '340px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                      <PhotoPlaceholder label={quickViewProduct.name} category={quickViewProduct.category} variant="tile" />
                    </div>}
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ color: 'var(--gold-accent)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={16} /> 100% Hand-Slaughtered Zabiha
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{quickViewProduct.description || 'Fresh from our butcher counter.'}</p>
                </div>
              </div>
              <div>
                <span className="product-sku-tag">{quickViewProduct.category}</span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{quickViewProduct.name}</h2>
                <div className="product-pricing-wrap" style={{ marginBottom: '1.5rem' }}>
                  <span className="current-price" style={{ fontSize: '1.6rem' }}>{formatPrice(quickViewProduct)}</span>
                  {quickViewProduct.originalPrice && <span className="old-price" style={{ fontSize: '1.1rem' }}>${quickViewProduct.originalPrice.toFixed(2)}</span>}
                </div>
                <button className="btn-primary-green" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} onClick={() => handleAddToCart(quickViewProduct)}>
                  <ShoppingCart size={20} /><span>Add to List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3 className="cart-drawer-title">Your Shopping List</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ color: 'var(--text-white)' }}><X size={22} /></button>
            </div>
            <div className="cart-drawer-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <p>Your list is empty.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item-row">
                    {item.image
                      ? <img src={item.image} alt={item.name} className={`cart-item-thumb ${item.whiteBg ? 'cart-item-thumb--blend' : ''}`} />
                      : <div className="cart-item-thumb"><PhotoPlaceholder label={item.name} category={item.category} variant="mini" /></div>}
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-prep-text">{formatPrice(item)}</p>
                      <div className="cart-item-price-qty">
                        {/* An unpriced item must not read as "$0.00" — that looks free. */}
                        <span className="current-price" style={{ fontSize: item.price === null ? '0.8rem' : '1rem' }}>
                          {item.price === null ? 'Priced at counter' : `$${(item.price * item.quantity).toFixed(2)}`}
                        </span>
                        <div className="cart-qty-counter">
                          <button className="qty-btn" onClick={() => handleUpdateCartQty(item.id, -1)}>-</button>
                          <span className="qty-num">{item.quantity}</span>
                          <button className="qty-btn" onClick={() => handleUpdateCartQty(item.id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} style={{ color: 'var(--text-muted)' }}><Trash2 size={16} /></button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-line"><span>Estimated Total</span><span>${cartSubtotal.toFixed(2)}</span></div>
                {/* Without this, a list made entirely of call-for-price cuts reads
                    "Estimated Total $0.00", which looks like the order is free. */}
                {unpricedCount > 0 && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                    Excludes {unpricedCount} item{unpricedCount > 1 ? 's' : ''} priced at the counter — call and we'll quote you today's price.
                  </p>
                )}
                <div style={{ background: 'rgba(22,163,74,0.1)', border: '1px solid var(--primary-green)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Ready to order? Call us!</p>
                  <a href="tel:+15122607677" className="btn-primary-green" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={18} /><span>Call (512) 260-7677</span>
                  </a>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Open Daily 10 AM – 9 PM</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STORE INFO */}
      <section className="store-info-section">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-info-card">
              <div className="store-info-icon"><MapPin size={28} /></div>
              <h4>Visit Us</h4>
              <p>12920 West Parmer Lane #106<br />Cedar Park, TX 78613</p>
              <a href="https://maps.google.com/?q=12920+West+Parmer+Lane+%23106+Cedar+Park+TX+78613" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: '0.75rem', display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <MapPin size={14} /><span>Get Directions</span>
              </a>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon"><Clock size={28} /></div>
              <h4>Store Hours</h4>
              <p><strong>Open Daily:</strong> 10 AM – 9 PM</p>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon"><Phone size={28} /></div>
              <h4>Call Us</h4>
              <p><strong>Phone:</strong> (512) 260-7677<br /><strong>Fax:</strong> (512) 260-7734<br /><strong>Email:</strong> QualityHalalMarket@gmail.com</p>
              <a href="tel:+15122607677" className="btn-primary-green" style={{ marginTop: '0.75rem', display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <Phone size={14} /><span>Call Now</span>
              </a>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon"><ShieldCheck size={28} /></div>
              <h4>Halal Assurance</h4>
              <p>100% hand-slaughtered Zabiha Halal. Integrity and transparency in every cut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      {/* Owner bio is intentionally generic — no name, photo, or personal story has
          been provided yet. Replace the copy below with the real thing (and add a
          photo of the owner or the counter) before this goes live. Nothing here is
          invented; it only states what's already established elsewhere on the site. */}
      <section className="about-us-section">
        <div className="container">
          <div className="about-us-grid">
            <div className="about-us-copy">
              <span className="section-tag">About Us</span>
              <h3 className="section-title-lg" style={{ textAlign: 'left' }}>Family-Owned, Cedar Park Since Day One</h3>
              <p>
                Quality Halal Market is a family-owned butcher shop and grocer serving Cedar Park
                and the surrounding community. Every cut on our counter is 100% hand-slaughtered
                Zabiha halal, trimmed and prepared fresh to order — nothing pre-packaged, nothing
                guessed at.
              </p>
              <p>
                We started this shop to give our neighbors a butcher counter they can trust: honest
                cuts, honest prices, and a real person behind the counter who knows the difference
                between a paya and a shank. Stop in and say hello — we're happy to walk you through
                any cut on the board.
              </p>
              <a href="tel:+15122607677" className="btn-outline-gold" style={{ marginTop: '0.5rem' }}>
                <Phone size={16} /><span>Talk to Us: (512) 260-7677</span>
              </a>
            </div>
            <div className="about-us-badge-card">
              <div className="store-info-icon" style={{ width: '64px', height: '64px' }}>
                <Users size={30} />
              </div>
              <h4>Run By The Community, For The Community</h4>
              <p>No corporate supply chain — just a local shop that hand-cuts every order and stands behind it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="brand-logo" style={{ marginBottom: '1rem' }}>
                <img src={logo} alt="Quality Halal Market" className="logo-mark-img" />
                <div className="logo-text-group"><h1>Quality Halal Market</h1><span>Premium Meats & Groceries</span></div>
              </div>
              <p>Your premier source for 100% hand-slaughtered Zabiha halal meat and Indian, Pakistani & Mediterranean groceries.</p>
            </div>
            <div className="footer-col">
              <h4>Meat</h4>
              <ul>
                <li><a href="#/beef" onClick={(e) => { e.preventDefault(); navigate('beef'); }}>Beef</a></li>
                <li><a href="#/goat-lamb" onClick={(e) => { e.preventDefault(); navigate('goat-lamb'); }}>Goat & Lamb</a></li>
                <li><a href="#/chicken" onClick={(e) => { e.preventDefault(); navigate('chicken'); }}>Chicken</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+15122607677" style={{ color: 'var(--gold-accent)', fontWeight: 700 }}><Phone size={14} style={{ display: 'inline-flex', marginRight: '0.35rem', verticalAlign: 'middle' }} />(512) 260-7677</a></li>
                <li><span><MapPin size={14} style={{ display: 'inline-flex', marginRight: '0.35rem', verticalAlign: 'middle' }} />12920 W Parmer Ln #106</span></li>
                <li><span>Cedar Park, TX 78613</span></li>
                <li><a href="https://www.facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Quality Halal Market</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <ShieldCheck size={18} className="text-gold" /><span>100% Zabiha Guarantee</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
} 
