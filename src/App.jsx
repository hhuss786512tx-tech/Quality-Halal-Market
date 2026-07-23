import React, { useState, useEffect } from 'react';
import { 
  Phone, Menu, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, Printer, Mail, Send, 
  ShoppingCart, Trash2, Maximize2, Rotate3d, Check,
  Truck, Sliders, User, Car,
  AlertCircle, ShoppingBag, Info, Award,
  Plus, Edit, Lock, Unlock, Search, RefreshCw, Eye, EyeOff,
  Package, Sparkles, CheckCircle2
} from 'lucide-react';

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// High-Resolution Verified Raw Meat Cut Image Presets
const presetImages = {
  goat: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
  beef: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
  chicken: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
  lamb: "https://images.unsplash.com/photo-1602916298539-78709ca88b48?auto=format&fit=crop&w=800&q=80",
  marinated: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80"
};

// Comprehensive 100% Zabiha Hand-Slaughtered Halal Meat Store Catalog
const defaultProducts = [
  // --- GOAT & MUTTON CUTS ---
  {
    id: 1,
    name: "Goat Curry Cut (Bone-In)",
    desc: "Fresh Zabiha goat meat cut into medium curry-sized cubes. Sourced daily, perfect for traditional karahi, korma, stew, and biryanis.",
    category: "goat",
    price: 12.99,
    unit: "per lb",
    status: "100% Zabiha Halal",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Goat Keema (Ground Goat)",
    desc: "Freshly minced 100% Zabiha goat keema. Lean, finely ground, and rich in natural flavor—ideal for keema fry, kebabs, and samosa filling.",
    category: "goat",
    price: 13.99,
    unit: "per lb",
    status: "Hand Slaughtered",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Goat Chops & Ribs",
    desc: "Juicy, hand-trimmed rib goat chops. Excellent for clay oven grilling, pan-searing with spicy herb rubs, or rich gravy chops.",
    category: "goat",
    price: 14.49,
    unit: "per lb",
    status: "Zabiha Halal",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1602916298539-78709ca88b48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Goat Leg (Sliced or Whole Raan)",
    desc: "Premium bone-in Zabiha goat leg. Can be sliced into thick steaks, curry cut, or left whole for festive slow roasted Raan.",
    category: "goat",
    price: 13.49,
    unit: "per lb",
    status: "Custom Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Goat Shoulder Cut (Bone-In)",
    desc: "Tender goat shoulder pieces, rich in flavor. Perfectly suited for slow-simmered goat curries, korma, and stews.",
    category: "goat",
    price: 12.99,
    unit: "per lb",
    status: "Fresh Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Goat Biryani Cut (Large Chunks)",
    desc: "Extra large bone-in goat cuts specially sized for dum biryani so meat stays juicy and intact during long steaming.",
    category: "goat",
    price: 13.29,
    unit: "per lb",
    status: "Specialty Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Goat Shank (Nalli Cut)",
    desc: "Marrow-rich bone-in goat shanks. Slow cook into rich, velvety gravies and traditional soups.",
    category: "goat",
    price: 13.99,
    unit: "per lb",
    status: "Marrow Rich",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Boneless Goat Cubes",
    desc: "Pure boneless tenderloin goat cubes, fully trimmed of excess fat. Excellent for boneless handi, tikka, and stews.",
    category: "goat",
    price: 15.99,
    unit: "per lb",
    status: "Pure Boneless",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
  },

  // --- HALAL BEEF CUTS ---
  {
    id: 9,
    name: "Halal Beef Curry Cut (Bone-In)",
    desc: "Grass-fed Zabiha beef cut into hearty curry chunks. Perfectly balanced fat and bone for rich stew bases and slow cooking.",
    category: "beef",
    price: 8.99,
    unit: "per lb",
    status: "Grass-Fed Halal",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Halal Beef Nihari Shank Cut (Nalli)",
    desc: "Authentic bone-in beef shanks with rich marrow (Nalli cut). Slow-simmers into velvety, aromatic traditional Nihari.",
    category: "beef",
    price: 9.99,
    unit: "per lb",
    status: "Nalli Specialty",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Halal Beef Keema (Lean Ground Beef)",
    desc: "Fresh ground Zabiha beef minced daily at our counter. Clean, lean ground beef for burger patties, keema matar, or seekh kebabs.",
    category: "beef",
    price: 7.99,
    unit: "per lb",
    status: "Ground Fresh",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Halal Beef Ribeye Steak",
    desc: "Beautifully marbled, thick-cut grass-fed Zabiha beef ribeye steaks. Incredibly juicy, tender, and steakhouse quality.",
    category: "beef",
    price: 14.99,
    unit: "per lb",
    status: "Steakhouse Grade",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Halal Beef Bihari Strips (Pasanda Cut)",
    desc: "Thinly sliced, tenderized beef strip cuts. Ideal for authentic Bihari boti marinade, stir-fries, and fajita wraps.",
    category: "beef",
    price: 10.99,
    unit: "per lb",
    status: "Hand Sliced",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Halal Beef Short Ribs",
    desc: "Meaty beef short ribs, perfect for BBQ, smoking, braising, or slow cooker stews.",
    category: "beef",
    price: 11.99,
    unit: "per lb",
    status: "BBQ Prime Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Halal Beef Boneless Cubes",
    desc: "Lean boneless beef cuts trimmed into uniform cooking cubes. Great for beef stew, goulash, or handi recipes.",
    category: "beef",
    price: 9.49,
    unit: "per lb",
    status: "Clean Trimmed",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Halal Beef Tenderloin / Fillet Mignon",
    desc: "Ultra-tender, melt-in-your-mouth whole beef tenderloin fillet. Highest quality beef cut available.",
    category: "beef",
    price: 18.99,
    unit: "per lb",
    status: "Prime Gourmet",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Halal Beef T-Bone Steak",
    desc: "Thick-cut Zabiha beef T-Bone steak featuring both juicy strip loin and tenderloin on the bone.",
    category: "beef",
    price: 15.99,
    unit: "per lb",
    status: "Custom Butcher Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
  },

  // --- CHICKEN & POULTRY CUTS ---
  {
    id: 18,
    name: "Whole Skinless Chicken (Cut to Order)",
    desc: "Fresh, clean Zabiha whole chicken, skinless and cut to your exact preference (curry cut, 4-piece, 8-piece, or whole for roast).",
    category: "chicken",
    price: 3.49,
    unit: "per lb",
    status: "Cut Free",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    name: "Bone-In Chicken Curry Cut",
    desc: "Pre-cut fresh chicken pieces with skinless bone-in perfection. Standard curry-size cuts ready for cooking.",
    category: "chicken",
    price: 3.99,
    unit: "per lb",
    status: "Daily Fresh",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "Boneless Chicken Breast Cubes",
    desc: "100% Zabiha skinless, boneless chicken breast trimmed into uniform cubes. Great for Chicken Tikka, Handi, skewering, or salads.",
    category: "chicken",
    price: 6.49,
    unit: "per lb",
    status: "Pure Boneless",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21,
    name: "Boneless Chicken Thighs",
    desc: "Juicy boneless dark meat chicken thighs. Remains tender and moist under high heat grilling or shawarma style roasting.",
    category: "chicken",
    price: 5.99,
    unit: "per lb",
    status: "Juicy Dark Meat",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    name: "Fresh Halal Chicken Drumsticks",
    desc: "Plump, fresh hand-slaughtered chicken drumsticks. Perfect for tandoori drumsticks, frying, or chicken curry.",
    category: "chicken",
    price: 3.79,
    unit: "per lb",
    status: "Farm Fresh",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23,
    name: "Halal Chicken Party Wings",
    desc: "Freshly split party chicken wingettes and drumettes. Cleaned and trimmed for oven bake, deep fry, or grill.",
    category: "chicken",
    price: 3.99,
    unit: "per lb",
    status: "Fresh Split",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24,
    name: "Halal Chicken Keema (Ground Chicken)",
    desc: "Fresh ground lean chicken breast and thigh meat minced daily at counter for kebabs and chicken keema fry.",
    category: "chicken",
    price: 5.99,
    unit: "per lb",
    status: "Ground Fresh",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 25,
    name: "Whole Baby Chicken (Poussin / Saj)",
    desc: "Tender whole young baby chicken (Poussin), exceptionally tender. Ideal for charcoal grilling and whole bird roasts.",
    category: "chicken",
    price: 4.99,
    unit: "per lb",
    status: "Specialty Poultry",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80"
  },

  // --- HALAL LAMB CUTS ---
  {
    id: 26,
    name: "Tender Lamb Chops (Rib Cut)",
    desc: "Juicy, hand-trimmed Zabiha lamb rib chops. Season with rosemary, garlic, and sea salt for pan searing or grilling.",
    category: "lamb",
    price: 14.99,
    unit: "per lb",
    status: "Gourmet Cut",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1602916298539-78709ca88b48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 27,
    name: "Halal Lamb Curry Cut (Bone-In)",
    desc: "Sweet, succulent bone-in Zabiha lamb chunks. Ideal for Rogan Josh, Kashmiri gravies, and aromatic lamb Yakhni pulao.",
    category: "lamb",
    price: 12.99,
    unit: "per lb",
    status: "Zabiha Halal",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 28,
    name: "Halal Lamb Shank (Nalli)",
    desc: "Whole Zabiha lamb shanks rich in meat and bone marrow. Slow cooks into fall-off-the-bone tender gourmet gravies.",
    category: "lamb",
    price: 13.99,
    unit: "per lb",
    status: "Prime Shank",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 29,
    name: "Halal Lamb Leg (Whole or Sliced)",
    desc: "Premium bone-in lamb leg. Can be sliced into steaks, curry cut, or left whole for slow oven roast.",
    category: "lamb",
    price: 13.49,
    unit: "per lb",
    status: "Custom Trimmed",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 30,
    name: "Halal Lamb Keema (Ground Lamb)",
    desc: "Rich, flavorful ground Zabiha lamb minced fresh daily. Perfect for shepherd's pie, lamb koftas, and stuffed naans.",
    category: "lamb",
    price: 14.99,
    unit: "per lb",
    status: "Ground Fresh",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80"
  },

  // --- MARINATED & BBQ READY CUTS ---
  {
    id: 31,
    name: "Masala Pantry Style Marinated Tandoori Chicken",
    desc: "Signature house marinaded Zabiha chicken cut in yogurt, Kashmiri red chili, garlic, lemon, and tandoori spices. Ready to cook!",
    category: "marinated",
    price: 5.49,
    unit: "per lb",
    status: "House Marinated",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 32,
    name: "Marinated Malai Chicken Boti",
    desc: "Tender boneless chicken breast boti marinated in cream, garlic, green chilies, and white pepper. Mild & luscious.",
    category: "marinated",
    price: 6.99,
    unit: "per lb",
    status: "Creamy Malai",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 33,
    name: "Marinated Bihari Beef Boti",
    desc: "Masala Pantry style tenderized beef boti infused with raw papaya, mustard oil, nutmeg, and aromatic Bihari spices. Charcoal ready!",
    category: "marinated",
    price: 11.99,
    unit: "per lb",
    status: "Ready to BBQ",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 34,
    name: "Halal Beef Seekh Kabab Skewers (Prepared)",
    desc: "Handcrafted minced beef seekh kababs blended with cilantro, green chilies, and roasted spices. Ready for oven or outdoor grill.",
    category: "marinated",
    price: 11.99,
    unit: "6-Piece Pack",
    status: "Crafted Daily",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1603360946369-fa99d57ee7c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 35,
    name: "Marinated Spicy Tandoori Wings",
    desc: "Fresh chicken party wings marinated in spicy Kashmiri chili tikka masala marinade. Perfect for game day BBQ or baking.",
    category: "marinated",
    price: 4.99,
    unit: "per lb",
    status: "Spicy Tikka",
    halal: true,
    inStock: true,
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
  }
];

// Helper to calculate deterministic mock delivery info based on address string
const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const getDeliveryInfo = (address) => {
  if (!address || address.trim().length < 5) return null;
  const hash = hashString(address);
  const distance = ((hash % 95) / 10) + 1.2; // Generates 1.2 to 10.7 miles
  const eligible = distance <= 10.0; // 10 miles delivery radius limit
  const fee = eligible ? Number((2.99 + (distance * 0.40)).toFixed(2)) : 0;
  const eta = Math.round(25 + (distance * 2.2));
  return {
    eligible,
    distance: Number(distance.toFixed(1)),
    fee,
    eta: `${eta}-${eta + 12} mins`
  };
};

// Helper for default customizations
const getDefaultCustomizations = (product) => {
  const isChicken = product.name.toLowerCase().includes('chicken');
  const isSteak = product.name.toLowerCase().includes('ribeye') || product.name.toLowerCase().includes('steak');
  return {
    style: isSteak ? 'Steakhouse Thick (1.5")' : 'Curry Cut (Medium)',
    trim: 'Standard (Balanced)',
    skin: isChicken ? 'Skinless' : null,
    notes: ''
  };
};

function App() {
  // Navigation & UI States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState({ 1: false, 2: false });
  const [lightboxImg, setLightboxImg] = useState(null);

  // Dynamic Products List with LocalStorage Persistence (Meat-Only Catalog v3)
  const [productsList, setProductsList] = useState(() => {
    const saved = localStorage.getItem('qhm_products_meat_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return defaultProducts;
  });

  // Store Owner Admin Portal States
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [adminSearch, setAdminSearch] = useState('');
  const [adminCategory, setAdminCategory] = useState('all');

  // Product Add / Edit Form Modal State
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // null = Add, object = Edit
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('goat');
  const [formPrice, setFormPrice] = useState('');
  const [formUnit, setFormUnit] = useState('per lb');
  const [formStatus, setFormStatus] = useState('100% Zabiha Halal');
  const [formImg, setFormImg] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formHalal, setFormHalal] = useState(true);
  const [formInStock, setFormInStock] = useState(true);

  // E-Commerce States
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('qhm_cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Customization States (Inside product configurator modal)
  const [modalQty, setModalQty] = useState(1);
  const [prepStyle, setPrepStyle] = useState('Curry Cut (Medium)');
  const [fatTrim, setFatTrim] = useState('Standard (Balanced)');
  const [skinPref, setSkinPref] = useState('Skinless');
  const [customNotes, setCustomNotes] = useState('');

  // Delivery Checker State
  const [checkerAddress, setCheckerAddress] = useState('');
  const [checkingZone, setCheckingZone] = useState(false);
  const [checkerResult, setCheckerResult] = useState(null);

  // Checkout Form States
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderType, setOrderType] = useState('pickup'); // 'pickup' or 'delivery'
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('12:00');
  const [checkoutNotes, setCheckoutNotes] = useState('');

  // Active Order / Tracking States
  const [activeOrder, setActiveOrder] = useState(null);
  const [curbsideVehicularStatus, setCurbsideVehicularStatus] = useState('');
  const [curbsideNotified, setCurbsideNotified] = useState(false);
  const [deliveryStep, setDeliveryStep] = useState(0);

  // Toast State
  const [toast, setToast] = useState({ isOpen: false, title: '', message: '' });

  // Card quantities for catalog level quick-add
  const [cardQuantities, setCardQuantities] = useState(() => {
    const qtys = {};
    productsList.forEach(p => { qtys[p.id] = 1; });
    return qtys;
  });

  // Sync Products to LocalStorage
  useEffect(() => {
    localStorage.setItem('qhm_products_meat_v3', JSON.stringify(productsList));
  }, [productsList]);

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save Cart to local storage when it updates
  useEffect(() => {
    localStorage.setItem('qhm_cart', JSON.stringify(cart));
  }, [cart]);

  // Leaflet Map Initialization
  useEffect(() => {
    if (window.L) {
      const L = window.L;
      const mapContainer = document.getElementById('map');
      if (mapContainer && !mapContainer._leaflet_id) {
        const storeLat = 30.528438;
        const storeLng = -97.828629;
        const map = L.map('map', { scrollWheelZoom: false }).setView([storeLat, storeLng], 15);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap &copy; CARTO'
        }).addTo(map);
        
        const greenIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="
            width: 20px; 
            height: 20px; 
            background-color: #10b981; 
            border: 3px solid #ffffff; 
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
            animation: pulsePin 2s infinite;
          "></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const marker = L.marker([storeLat, storeLng], { icon: greenIcon }).addTo(map);
        marker.bindPopup(`
          <div style="color: #0f172a; padding: 5px; font-family: 'Outfit', sans-serif;">
            <strong style="font-size: 1.1rem; color: #064e3b; display: block; margin-bottom: 2px;">Quality Halal Market</strong>
            <span style="font-size: 0.85rem; color: #64748b; display: block; margin-bottom: 8px;">Fresh Zabiha Halal Meats</span>
            <a href="https://maps.google.com/?q=Quality+Halal+Market+12920+West+Parmer+Lane+106+Cedar+Park+TX+78613" target="_blank" style="
              display: inline-block;
              background-color: #064e3b;
              color: white;
              padding: 4px 10px;
              font-size: 0.8rem;
              border-radius: 4px;
              font-weight: 600;
            ">Get Directions</a>
          </div>
        `).openPopup();
      }
    }
  }, []);

  // Sync date picker min date
  useEffect(() => {
    if (isCheckoutModalOpen) {
      const today = new Date().toISOString().split('T')[0];
      setCheckoutDate(today);
    }
  }, [isCheckoutModalOpen]);

  // Simulate active order delivery updates
  useEffect(() => {
    let timer;
    if (activeOrder && activeOrder.type === 'delivery' && deliveryStep < 3) {
      timer = setInterval(() => {
        setDeliveryStep(step => {
          if (step >= 3) {
            clearInterval(timer);
            return 3;
          }
          return step + 1;
        });
      }, 9000);
    }
    return () => clearInterval(timer);
  }, [activeOrder, deliveryStep]);

  // Update configuration defaults when modal product opens
  useEffect(() => {
    if (selectedProduct) {
      setModalQty(1);
      setCustomNotes('');
      const isChicken = selectedProduct.name.toLowerCase().includes('chicken');
      const isSteak = selectedProduct.name.toLowerCase().includes('ribeye') || selectedProduct.name.toLowerCase().includes('steak');
      setPrepStyle(isSteak ? 'Steakhouse Thick (1.5")' : 'Curry Cut (Medium)');
      setFatTrim('Standard (Balanced)');
      setSkinPref(isChicken ? 'Skinless' : '');
    }
  }, [selectedProduct]);

  // Toast Helper
  const showToast = (title, message) => {
    setToast({ isOpen: true, title, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isOpen: false }));
    }, 4500);
  };

  // Flip business cards
  const handleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Open Lightbox
  const handleOpenLightbox = (src, e) => {
    e.stopPropagation();
    setLightboxImg(src);
  };

  // Specialty Scroll & Tab Redirect
  const handleSpecialtyRedirect = (category) => {
    setActiveCategory(category);
    const counterSection = document.getElementById('counter');
    if (counterSection) {
      counterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Delivery Checker Action
  const checkDeliveryZone = (e) => {
    e.preventDefault();
    if (!checkerAddress || checkerAddress.trim().length < 5) {
      alert("Please enter a valid address.");
      return;
    }
    setCheckingZone(true);
    setCheckerResult(null);

    setTimeout(() => {
      const result = getDeliveryInfo(checkerAddress);
      setCheckerResult(result);
      setCheckingZone(false);
      
      if (result.eligible) {
        setCheckoutAddress(checkerAddress);
        setOrderType('delivery');
      }
    }, 1500);
  };

  // Cart Functions
  const addToCartFromModal = () => {
    if (!selectedProduct) return;
    if (selectedProduct.inStock === false) {
      alert("Sorry, this meat cut is currently out of stock!");
      return;
    }
    
    const customizations = {
      style: prepStyle,
      trim: fatTrim,
      skin: selectedProduct.name.toLowerCase().includes('chicken') ? skinPref : null,
      notes: customNotes
    };

    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === selectedProduct.id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += modalQty;
        return updated;
      } else {
        return [...prev, { 
          id: selectedProduct.id,
          name: selectedProduct.name, 
          category: selectedProduct.category, 
          price: selectedProduct.price,
          qty: modalQty,
          img: selectedProduct.img,
          unit: selectedProduct.unit,
          customizations 
        }];
      }
    });

    setSelectedProduct(null);
    showToast("Added Customized Meat Cut", `${selectedProduct.name} added to your order.`);
  };

  const quickAddToCart = (product, e) => {
    e.stopPropagation();
    if (product.inStock === false) {
      alert("Sorry, this meat cut is currently out of stock!");
      return;
    }
    const qty = cardQuantities[product.id] || 1;
    const customizations = getDefaultCustomizations(product);
    
    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += qty;
        return updated;
      } else {
        return [...prev, { 
          id: product.id,
          name: product.name, 
          category: product.category, 
          price: product.price,
          qty,
          img: product.img,
          unit: product.unit,
          customizations 
        }];
      }
    });

    setCardQuantities(prev => ({ ...prev, [product.id]: 1 }));
    showToast("Meat Cut Added", `${product.name} (x${qty}) added with default cuts.`);
  };

  const handleCardQtyChange = (productId, delta, e) => {
    e.stopPropagation();
    setCardQuantities(prev => {
      const current = prev[productId] || 1;
      const next = current + delta;
      return { ...prev, [productId]: next > 0 ? next : 1 };
    });
  };

  const updateCartQty = (index, delta) => {
    setCart(prev => {
      const item = prev[index];
      const nextQty = item.qty + delta;
      if (nextQty <= 0) {
        return prev.filter((_, idx) => idx !== index);
      }
      return prev.map((it, idx) => idx === index ? { ...it, qty: nextQty } : it);
    });
  };

  const removeCartItem = (index) => {
    setCart(prev => prev.filter((_, idx) => idx !== index));
  };

  const cartCountTotal = () => cart.reduce((sum, item) => sum + item.qty, 0);
  
  const cartSubtotal = () => cart.reduce((sum, item) => sum + ((item.price || 0) * item.qty), 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    const activeAddress = orderType === 'delivery' ? checkoutAddress : '';
    const deliveryDetails = activeAddress ? getDeliveryInfo(activeAddress) : null;
    const deliveryFee = (deliveryDetails && deliveryDetails.eligible) ? deliveryDetails.fee : 0;
    const finalFee = cartSubtotal() >= 75 ? 0 : deliveryFee;

    const orderObj = {
      orderId: `#QHM-${Math.floor(10000 + Math.random() * 90000)}`,
      name: checkoutName,
      phone: checkoutPhone,
      type: orderType,
      date: checkoutDate || new Date().toISOString().split('T')[0],
      time: checkoutTime,
      address: activeAddress,
      subtotal: cartSubtotal(),
      deliveryFee: finalFee,
      notes: checkoutNotes,
      items: [...cart]
    };

    setActiveOrder(orderObj);
    setCurbsideNotified(false);
    setCurbsideVehicularStatus('');
    setDeliveryStep(0);

    // Reset checkout & cart
    setCart([]);
    setIsCheckoutModalOpen(false);
    showToast("Order Successfully Placed!", `Order ID: ${orderObj.orderId}`);
  };

  // --- ADMIN PORTAL ACTIONS ---
  const handleAdminLogin = (e) => {
    if (e) e.preventDefault();
    if (adminPasscode === '1234' || adminPasscode === 'admin' || adminPasscode === '') {
      setIsAdminLoggedIn(true);
      showToast("Store Owner Authenticated", "Welcome, Store Owner! You now have full access to manage all meat cuts.");
    } else {
      alert("Invalid passcode. Use 1234 or click 'Owner Demo Login'.");
    }
  };

  const handleToggleStock = (productId) => {
    setProductsList(prev => prev.map(p => {
      if (p.id === productId) {
        const nextStock = !p.inStock;
        showToast("Stock Status Updated", `${p.name} is now ${nextStock ? 'In Stock' : 'Out of Stock'}.`);
        return { ...p, inStock: nextStock };
      }
      return p;
    }));
  };

  const handleDeleteProduct = (productId) => {
    const target = productsList.find(p => p.id === productId);
    if (!target) return;
    if (window.confirm(`Are you sure you want to delete "${target.name}" from your butcher inventory?`)) {
      setProductsList(prev => prev.filter(p => p.id !== productId));
      showToast("Cut Deleted", `${target.name} removed from inventory.`);
    }
  };

  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setFormName('');
    setFormCategory('goat');
    setFormPrice('12.99');
    setFormUnit('per lb');
    setFormStatus('100% Zabiha Halal');
    setFormImg(presetImages.goat);
    setFormDesc('');
    setFormHalal(true);
    setFormInStock(true);
    setIsEditorModalOpen(true);
  };

  const handleOpenEditProduct = (product) => {
    setEditingProduct(product);
    setFormName(product.name);
    setFormCategory(product.category);
    setFormPrice(product.price.toString());
    setFormUnit(product.unit);
    setFormStatus(product.status || 'Zabiha Halal');
    setFormImg(product.img);
    setFormDesc(product.desc);
    setFormHalal(product.halal !== false);
    setFormInStock(product.inStock !== false);
    setIsEditorModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formPrice) {
      alert("Please fill out product name and price.");
      return;
    }

    const priceNum = parseFloat(formPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    if (editingProduct) {
      // Update existing item
      setProductsList(prev => prev.map(p => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            name: formName,
            category: formCategory,
            price: priceNum,
            unit: formUnit,
            status: formStatus,
            img: formImg || presetImages[formCategory] || presetImages.goat,
            desc: formDesc,
            halal: formHalal,
            inStock: formInStock
          };
        }
        return p;
      }));
      showToast("Meat Cut Updated", `Successfully updated "${formName}".`);
    } else {
      // Add new item
      const newId = Math.max(...productsList.map(p => p.id), 0) + 1;
      const newProd = {
        id: newId,
        name: formName,
        category: formCategory,
        price: priceNum,
        unit: formUnit,
        status: formStatus,
        img: formImg || presetImages[formCategory] || presetImages.goat,
        desc: formDesc || "Fresh Zabiha halal selection, cut and prepared daily by our certified butchers.",
        halal: formHalal,
        inStock: formInStock
      };
      setProductsList(prev => [newProd, ...prev]);
      setCardQuantities(prev => ({ ...prev, [newId]: 1 }));
      showToast("New Meat Cut Added", `"${formName}" is now live on your store counter.`);
    }

    setIsEditorModalOpen(false);
  };

  const handleResetCatalog = () => {
    if (window.confirm("Reset catalog back to original Zabiha Halal meat cuts list?")) {
      setProductsList(defaultProducts);
      localStorage.removeItem('qhm_products_meat_v3');
      showToast("Catalog Reset", "Restored default Zabiha Halal meat cuts inventory.");
    }
  };

  // Filter Customer Products
  const filteredProducts = activeCategory === 'all'
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  // Filter Admin Products
  const adminFilteredProducts = productsList.filter(p => {
    const matchesCat = adminCategory === 'all' || p.category === adminCategory;
    const matchesSearch = p.name.toLowerCase().includes(adminSearch.toLowerCase()) || 
                          p.desc.toLowerCase().includes(adminSearch.toLowerCase()) ||
                          p.status.toLowerCase().includes(adminSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getCategoryLabel = (cat) => {
    switch(cat) {
      case 'goat': return 'Goat & Mutton';
      case 'beef': return 'Halal Beef Cuts';
      case 'chicken': return 'Chicken & Poultry';
      case 'lamb': return 'Halal Lamb Cuts';
      case 'marinated': return 'Marinated & BBQ';
      default: return 'Fresh Meat Cut';
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Header Navigation */}
      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <div className="logo-icon">Q</div>
            Quality Halal<span>Meat Market</span>
          </a>
          
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#specialties" className="nav-link">Meat Departments</a></li>
            <li><a href="#delivery-section" className="nav-link">Delivery Zone</a></li>
            <li><a href="#counter" className="nav-link">Butcher Counter</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          
          <div className="nav-cta" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button 
              className={`admin-nav-btn ${isAdminLoggedIn ? 'logged-in' : ''}`}
              onClick={() => setIsAdminModalOpen(true)}
              title="Manage store inventory & meat cuts"
            >
              <ShieldCheck size={16} />
              {isAdminLoggedIn ? 'Owner Dashboard' : 'Owner Access'}
            </button>

            <a href="tel:5122607677" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
              <Phone size={15} style={{ marginRight: '6px' }} />
              512.260.7677
            </a>
          </div>
          
          <button className="mobile-nav-toggle" onClick={() => setIsMobileMenuOpen(true)} aria-label="Toggle navigation">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isMobileMenuOpen || isCartDrawerOpen ? 'active' : ''}`}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setIsCartDrawerOpen(false);
        }}
      ></div>

      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <a href="#home" className="logo">
            <div className="logo-icon">Q</div>
            Quality Halal<span>Meat Market</span>
          </a>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Home</a></li>
          <li><a href="#specialties" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Meat Departments</a></li>
          <li><a href="#delivery-section" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Delivery Area</a></li>
          <li><a href="#counter" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Butcher Counter</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">About Us</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Location & Contact</a></li>
        </ul>
        <div className="drawer-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', justifyContent: 'center', borderColor: '#f59e0b', color: '#f59e0b' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsAdminModalOpen(true);
            }}
          >
            <ShieldCheck size={16} />
            Owner Admin Portal
          </button>
          
          <a href="tel:5122607677" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={16} style={{ marginRight: '8px' }} />
            512.260.7677
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} style={{ marginRight: '6px', color: 'var(--secondary-light)' }} />
              100% Hand-Slaughtered Zabiha Halal Guarantee
            </div>
            <h1 className="hero-title">
              Your Premium Halal <span>Meat Butcher Counter</span>
            </h1>
            <p className="hero-subtitle">
              Sourcing the finest hand-slaughtered Zabiha goat, lamb, beef, chicken, and Masala Pantry style marinated BBQ botis. Custom cut and trimmed to order by certified halal butchers.
            </p>
            <div className="hero-btns">
              <a href="#counter" className="btn btn-primary">
                Explore Meat Counter
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#delivery-section" className="btn btn-secondary">
                <Truck size={16} style={{ marginRight: '8px', color: 'var(--primary-light)' }} />
                Check Delivery
              </a>
            </div>
          </div>
          
          <div className="hero-card-container">
            <div className="hero-floating-card">
              <div className="card-top">
                <span className="bullet"></span>
                <span>Cedar Park, TX</span>
              </div>
              <h3>Quality Halal Market</h3>
              <div className="card-info-item">
                <MapPin size={18} />
                <span>12920 W Parmer Ln #106</span>
              </div>
              <div className="card-info-item">
                <Clock size={18} />
                <span>Open Daily: 9:00 AM - 9:00 PM</span>
              </div>
              <div className="card-info-item">
                <Phone size={18} />
                <span>512.260.7677</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meat Departments Section */}
      <section id="specialties" className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle">100% Zabiha Halal</span>
            <h2 className="section-title">Meat Counter Departments</h2>
            <p className="section-desc">
              Every cut of meat we offer is hand-slaughtered, thoroughly inspected, and custom cut by our professional butchers to meet your exact recipe preferences.
            </p>
          </div>
          
          <div className="departments-grid">
            {/* Dept 1 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src={presetImages.goat} alt="Goat & Mutton" className="dept-img" />
                <div className="dept-badge">Zabiha Goat</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Goat & Mutton Cuts</h3>
                <p className="dept-desc">Hand-slaughtered goat curry cuts, ground keema, tender rib chops, bone-in shoulder, biryani cuts, and whole roasted raan.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('goat'); }} className="dept-link">
                  Browse Goat Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 2 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src={presetImages.beef} alt="Halal Beef" className="dept-img" />
                <div className="dept-badge">Grass-Fed Beef</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Halal Beef Cuts</h3>
                <p className="dept-desc">Grass-fed Zabiha beef curry cuts, bone-in Nalli Nihari shanks, marbled ribeye steaks, lean ground keema, and Bihari boti strips.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('beef'); }} className="dept-link">
                  Browse Beef Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 3 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src={presetImages.chicken} alt="Chicken & Poultry" className="dept-img" />
                <div className="dept-badge">Clean & Skinless</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Chicken & Poultry</h3>
                <p className="dept-desc">Fresh whole skinless chicken cut to order (8/12/16 pcs), boneless breast cubes for tikka, tender drumsticks, and party wings.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('chicken'); }} className="dept-link">
                  Browse Chicken Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 4 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src={presetImages.lamb} alt="Gourmet Lamb" className="dept-img" />
                <div className="dept-badge">Gourmet Lamb</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Gourmet Lamb Cuts</h3>
                <p className="dept-desc">Juicy hand-trimmed lamb rib chops, bone-in lamb curry cuts, Nalli shanks for slow cooking, and fresh ground lamb keema.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('lamb'); }} className="dept-link">
                  Browse Lamb Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 5 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src={presetImages.marinated} alt="Marinated & BBQ Ready" className="dept-img" />
                <div className="dept-badge">Masala Pantry Style</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Marinated & BBQ Ready</h3>
                <p className="dept-desc">Signature marinated tandoori chicken cuts, tenderized Bihari beef boti, creamy malai boti, prepared spicy seekh kabab skewers.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('marinated'); }} className="dept-link">
                  Browse Marinated Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Delivery Address Checker Section */}
      <section id="delivery-section" className="section delivery-checker-section">
        <div className="container">
          <div className="delivery-grid-layout">
            <div className="delivery-card-main">
              <span className="subtitle">Uber-Eats Style Delivery</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.25rem 0 1rem 0' }}>On-Demand Meat Delivery</h2>
              <p className="delivery-subtitle-desc">
                We deliver fresh Zabiha meat cuts right to your doorstep within a 10-mile radius in temperature-controlled insulated packaging. Check your eligibility below.
              </p>
              
              <form onSubmit={checkDeliveryZone} className="delivery-check-form">
                <div className="delivery-input-group">
                  <div className="delivery-input-wrapper">
                    <MapPin className="delivery-pin-icon" size={20} />
                    <input 
                      type="text" 
                      placeholder="Enter address (e.g. 14201 RR 620, Cedar Park, TX)" 
                      value={checkerAddress}
                      onChange={(e) => setCheckerAddress(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary checker-btn" disabled={checkingZone}>
                    {checkingZone ? "Analyzing Zone..." : "Verify Delivery Zone"}
                    {!checkingZone && <ArrowRight size={16} />}
                  </button>
                </div>
              </form>

              {checkingZone && (
                <div className="delivery-loader-box">
                  <div className="delivery-spinner"></div>
                  <p>Calculating routing distance from Quality Halal Market butcher counter...</p>
                </div>
              )}

              {checkerResult && (
                <div className={`delivery-result-box ${checkerResult.eligible ? 'eligible' : 'ineligible'}`}>
                  <div className="result-icon-wrapper">
                    {checkerResult.eligible ? <Check size={24} /> : <X size={24} />}
                  </div>
                  <div className="result-details">
                    <h4>{checkerResult.eligible ? "🟢 Delivery Available!" : "🔴 Outside Local Delivery Area"}</h4>
                    <p className="result-text">
                      {checkerResult.eligible ? (
                        <>
                          We deliver to your address. Distance is <strong>{checkerResult.distance} miles</strong>. Estimated ETA: <strong>{checkerResult.eta}</strong>. Delivery Fee: <strong>${checkerResult.fee}</strong> (Free on orders $75+).
                        </>
                      ) : (
                        <>
                          This address is <strong>{checkerResult.distance} miles</strong> away, which exceeds our 10-mile delivery limit. You are welcome to choose <strong>Express Store Pickup</strong>!
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="delivery-info-graphic">
              <div className="graphic-bento-item glow-emerald">
                <div className="icon-circ"><Truck size={24} /></div>
                <h4>Insulated Express Delivery</h4>
                <p>Delivered fresh in temperature-insulated boxes to preserve meat temperature.</p>
              </div>
              <div className="graphic-bento-item glow-gold">
                <div className="icon-circ"><ShieldCheck size={24} /></div>
                <h4>100% Zabiha Guaranteed</h4>
                <p>Every cut matches our strict hand-slaughtered halal butcher guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Counter Section */}
      <section id="counter" className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle">Interactive Butcher Counter</span>
            <h2 className="section-title">Virtual Meat Counter</h2>
            <p className="section-desc">
              Select your fresh Zabiha meat cuts below, choose custom butcher prep styles (curry cut, biryani cut, fat trim, skin preference), and order for store pickup or local delivery.
            </p>
            
            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Meat Cuts ({productsList.length})</button>
              <button className={`tab-btn ${activeCategory === 'goat' ? 'active' : ''}`} onClick={() => setActiveCategory('goat')}>Goat & Mutton</button>
              <button className={`tab-btn ${activeCategory === 'beef' ? 'active' : ''}`} onClick={() => setActiveCategory('beef')}>Halal Beef Cuts</button>
              <button className={`tab-btn ${activeCategory === 'chicken' ? 'active' : ''}`} onClick={() => setActiveCategory('chicken')}>Chicken & Poultry</button>
              <button className={`tab-btn ${activeCategory === 'lamb' ? 'active' : ''}`} onClick={() => setActiveCategory('lamb')}>Lamb Cuts</button>
              <button className={`tab-btn ${activeCategory === 'marinated' ? 'active' : ''}`} onClick={() => setActiveCategory('marinated')}>Marinated & BBQ</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((p) => {
              const isOut = p.inStock === false;
              return (
                <div 
                  key={p.id} 
                  className={`product-card ${isOut ? 'out-of-stock-card' : ''}`}
                  onClick={() => !isOut && setSelectedProduct(p)}
                  style={{ position: 'relative' }}
                >
                  {isOut && (
                    <div className="out-of-stock-overlay">
                      <span className="out-of-stock-badge">OUT OF STOCK</span>
                    </div>
                  )}

                  <div className="product-header">
                    <span className="product-category">{getCategoryLabel(p.category)}</span>
                    <span className="product-halal-badge">
                      <CheckCircle2 size={12} />
                      {p.status || '100% Zabiha Halal'}
                    </span>
                  </div>

                  <div className="product-img-wrapper">
                    <img src={p.img} alt={p.name} className="product-img" />
                  </div>

                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                  
                  <div className="product-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="product-price-tag">
                      ${p.price.toFixed(2)}
                      <span className="product-price-unit">/ {p.unit}</span>
                    </div>
                  </div>
                  
                  {/* Direct quick add controls on the card */}
                  <div className="product-card-actions" onClick={(e) => e.stopPropagation()}>
                    <div className="card-qty-selector">
                      <button className="card-qty-btn minus" disabled={isOut} onClick={(e) => handleCardQtyChange(p.id, -1, e)}>-</button>
                      <input type="number" className="card-qty-input" value={cardQuantities[p.id] || 1} readOnly />
                      <button className="card-qty-btn plus" disabled={isOut} onClick={(e) => handleCardQtyChange(p.id, 1, e)}>+</button>
                    </div>
                    <button 
                      className="btn btn-primary card-add-btn" 
                      disabled={isOut} 
                      onClick={(e) => quickAddToCart(p, e)}
                    >
                      {isOut ? 'Unavailable' : 'Customize Cut'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-content-left">
              <span className="subtitle">Quality You Can Trust</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>About Quality Halal Market</h2>
              <p>
                Established with a vision to serve Cedar Park and the greater Austin community with pristine 100% Zabiha Halal meats. Under direct management by store owners, our customer service is as quality-oriented as our inventory.
              </p>
              <p>
                Every cut of meat we offer is hand-slaughtered, custom trimmed, and thoroughly inspected to meet strict Zabiha halal guidelines. From Masala Pantry inspired marinated botis to fresh daily goat & beef cuts, we guarantee perfection.
              </p>
              
              <div className="contact-details-box">
                <div className="detail-item">
                  <div className="detail-icon"><Phone size={18} /></div>
                  <div className="detail-info">
                    <span>Phone Number</span>
                    <a href="tel:5122607677"><strong>512.260.7677</strong></a>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon"><Printer size={18} /></div>
                  <div className="detail-info">
                    <span>Store Fax</span>
                    <strong>512.260.7734</strong>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon"><Mail size={18} /></div>
                  <div className="detail-info">
                    <span>Email Us</span>
                    <a href="mailto:QualityHalalMarket@gmail.com"><strong>QualityHalalMarket@gmail.com</strong></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="cards-display-right">
              <span className="swipe-hint">
                <Rotate3d size={16} style={{ marginRight: '6px' }} />
                Click card to flip
              </span>

              {/* Card 1: Front */}
              <div 
                className={`flip-card-wrapper ${flippedCards[1] ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(1)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/assets/card_front.jpg" alt="Business Card Front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button className="zoom-btn" onClick={(e) => handleOpenLightbox('/assets/card_front.jpg', e)}>
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-card-design">
                      <div className="logo-icon">Q</div>
                      <h3>Quality Halal Market</h3>
                      <p>Fresh Zabiha Meats & Specialty Cuts</p>
                      <span className="click-to-flip-tag">Click to Flip Back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Back */}
              <div 
                className={`flip-card-wrapper ${flippedCards[2] ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(2)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/assets/card_back.jpg" alt="Business Card Back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button className="zoom-btn" onClick={(e) => handleOpenLightbox('/assets/card_back.jpg', e)}>
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-card-design">
                      <div className="logo-icon">Q</div>
                      <h3>Our Location & Hours</h3>
                      <p>12920 West Parmer Lane #106<br />Cedar Park, TX 78613</p>
                      <span className="click-to-flip-tag">Click to Flip Back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <span className="subtitle">Reach Out</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>Find Us & Get In Touch</h2>
              <p className="section-desc" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                Have questions about custom butchering, party orders, or specialty cuts? Drop us a message or call directly!
              </p>
              
              <form id="inquiryForm" onSubmit={(e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const message = document.getElementById('message').value;

                if (!name || !phone || !message) {
                  alert('Please fill out all fields.');
                  return;
                }

                showToast("Inquiry Sent", `Thank you, ${name}. We will get back to you shortly.`);
                document.getElementById('inquiryForm').reset();
              }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required placeholder="Ali Khan" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required placeholder="512.555.0199" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Custom Cut Request</label>
                  <textarea id="message" required placeholder="Specify any custom cut orders or catering inquiries..." rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Inquiry
                  <Send size={16} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </div>

            <div className="map-wrapper">
              <div id="map" className="store-map"></div>
              <div className="map-card">
                <h4>Store Address</h4>
                <p>12920 West Parmer Lane #106<br />Cedar Park, TX 78613</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <a href="https://maps.google.com/?q=Quality+Halal+Market+12920+West+Parmer+Lane+106+Cedar+Park+TX+78613" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: '1', fontSize: '0.85rem', padding: '0.6rem' }}>
                    Google Maps
                  </a>
                  <a href="https://facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: '1', fontSize: '0.85rem', padding: '0.6rem', gap: '4px' }}>
                    <Facebook size={14} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ color: 'white' }}>
                <div className="logo-icon">Q</div>
                Quality Halal<span>Meat Market</span>
              </div>
              <p>100% Zabiha hand-slaughtered halal meats and custom butcher cuts in Cedar Park, TX.</p>
              <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="https://facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4>Meat Departments</h4>
              <ul className="footer-links">
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('goat')}>Zabiha Goat & Mutton</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('beef')}>Grass-Fed Beef Cuts</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('chicken')}>Fresh Whole Chicken</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('lamb')}>Gourmet Lamb Cuts</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('marinated')}>Marinated & BBQ Cuts</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home Page</a></li>
                <li><a href="#specialties">Meat Departments</a></li>
                <li><a href="#delivery-section">Delivery Options</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsAdminModalOpen(true); }}>Store Owner Portal</a></li>
                <li><a href="#contact">Location & Hours</a></li>
              </ul>
            </div>

            <div>
              <h4>Store Info</h4>
              <ul className="footer-contact-info">
                <li>
                  <MapPin size={18} />
                  <span>12920 W Parmer Ln #106, Cedar Park, TX 78613</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>512.260.7677</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>QualityHalalMarket@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Quality Halal Market. All Rights Reserved. Managed by Store Owner.</p>
            <p>100% Zabiha Hand-Slaughtered Guaranteed.</p>
          </div>
        </div>
      </footer>

      {/* Floating Cart Action Button */}
      <button className="floating-cart-btn" onClick={() => setIsCartDrawerOpen(true)}>
        <ShoppingCart size={24} />
        {cartCountTotal() > 0 && (
          <span className="cart-badge bump">{cartCountTotal()}</span>
        )}
      </button>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartDrawerOpen ? 'active' : ''}`}>
        <div className="cart-drawer-header">
          <h3>
            <ShoppingCart size={24} style={{ color: 'var(--primary-light)' }} />
            Your Counter Order
          </h3>
          <button className="cart-drawer-close" onClick={() => setIsCartDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart-msg">Your counter cart is empty. Select meat cuts in the Virtual Counter below to customize your cuts!</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="cart-item-category">{getCategoryLabel(item.category)}</span>
                    <span className="cart-item-qty-tag">x{item.qty}</span>
                  </div>
                  <h4 className="cart-item-name">{item.name}</h4>
                  
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: '700', marginTop: '2px' }}>
                    ${((item.price || 0) * item.qty).toFixed(2)} (${(item.price || 0).toFixed(2)} / {item.unit || 'unit'})
                  </div>
                  
                  {/* Render Item Customizations */}
                  {item.customizations && (
                    <div className="cart-item-custom-tags">
                      {item.customizations.style && <span>🔪 {item.customizations.style}</span>}
                      {item.customizations.trim && <span>🥩 {item.customizations.trim}</span>}
                      {item.customizations.skin && <span>🍗 {item.customizations.skin}</span>}
                      {item.customizations.notes && (
                        <p className="cart-custom-notes">📝 "{item.customizations.notes}"</p>
                      )}
                    </div>
                  )}
                </div>
                <div className="cart-item-actions">
                  <div className="qty-control">
                    <button onClick={() => updateCartQty(index, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateCartQty(index, 1)}>+</button>
                  </div>
                  <button className="remove-item-btn" onClick={() => removeCartItem(index)} aria-label="Remove item">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="cart-subtotal-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Subtotal ({cartCountTotal()} items):</span>
            <strong style={{ color: 'var(--primary-light)', fontSize: '1.2rem' }}>${cartSubtotal().toFixed(2)}</strong>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}
            disabled={cart.length === 0}
            onClick={() => {
              setIsCartDrawerOpen(false);
              setIsCheckoutModalOpen(true);
            }}
          >
            Checkout counter order
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Business Card Zoom) */}
      {lightboxImg && (
        <div className="modal active" onClick={() => setLightboxImg(null)}>
          <button className="modal-close" onClick={() => setLightboxImg(null)}>&times;</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img className="modal-img" src={lightboxImg} alt="Enlarged business card view" />
          </div>
        </div>
      )}

      {/* Product Custom Configurator Modal */}
      {selectedProduct && (
        <div className="modal active" onClick={() => setSelectedProduct(null)}>
          <button className="modal-close" onClick={() => setSelectedProduct(null)}>&times;</button>
          <div className="modal-content product-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="product-modal-left">
              <div className="product-modal-img-wrapper">
                <img src={selectedProduct.img} alt={selectedProduct.name} />
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '0.5rem 0' }}>
                <span className="product-category">{getCategoryLabel(selectedProduct.category)}</span>
                <span className="product-halal-badge"><CheckCircle2 size={12} /> {selectedProduct.status || '100% Zabiha Halal'}</span>
              </div>
              <h2 className="product-modal-name">{selectedProduct.name}</h2>
              <p className="product-modal-desc">{selectedProduct.desc}</p>

              <div className="product-price-tag" style={{ fontSize: '1.6rem', marginTop: '1rem' }}>
                ${selectedProduct.price.toFixed(2)}
                <span className="product-price-unit">/ {selectedProduct.unit}</span>
              </div>
            </div>

            <div className="product-modal-right">
              <div className="configurator-title">
                <Sliders size={18} style={{ color: 'var(--secondary-light)' }} />
                <h3>Custom Cut Preferences</h3>
              </div>

              <div className="configurator-options">
                <div className="config-group">
                  <label>Butcher Prep Style</label>
                  <div className="config-choices">
                    {selectedProduct.name.toLowerCase().includes('ribeye') || selectedProduct.name.toLowerCase().includes('steak') ? (
                      <>
                        <button className={prepStyle === 'Steakhouse Thick (1.5")' ? 'active' : ''} onClick={() => setPrepStyle('Steakhouse Thick (1.5")')}>Steakhouse 1.5"</button>
                        <button className={prepStyle === 'Medium Cut (1")' ? 'active' : ''} onClick={() => setPrepStyle('Medium Cut (1")')}>Medium 1"</button>
                        <button className={prepStyle === 'Thin Slice' ? 'active' : ''} onClick={() => setPrepStyle('Thin Slice')}>Thin Slice</button>
                      </>
                    ) : (
                      <>
                        <button className={prepStyle === 'Curry Cut (Medium)' ? 'active' : ''} onClick={() => setPrepStyle('Curry Cut (Medium)')}>Curry Cut</button>
                        <button className={prepStyle === 'Biryani Cut (Large)' ? 'active' : ''} onClick={() => setPrepStyle('Biryani Cut (Large)')}>Biryani Cut</button>
                        <button className={prepStyle === 'Boneless Cubes' ? 'active' : ''} onClick={() => setPrepStyle('Boneless Cubes')}>Boneless</button>
                        <button className={prepStyle === 'Whole / Roast Cut' ? 'active' : ''} onClick={() => setPrepStyle('Whole / Roast Cut')}>Whole Roast</button>
                      </>
                    )}
                  </div>
                </div>

                {selectedProduct.name.toLowerCase().includes('chicken') && (
                  <div className="config-group">
                    <label>Skin Preference</label>
                    <div className="config-choices">
                      <button className={skinPref === 'Skinless' ? 'active' : ''} onClick={() => setSkinPref('Skinless')}>Skinless</button>
                      <button className={skinPref === 'Skin-On' ? 'active' : ''} onClick={() => setSkinPref('Skin-On')}>Skin-On</button>
                    </div>
                  </div>
                )}

                <div className="config-group">
                  <label>Fat Trim Preferences</label>
                  <div className="config-choices">
                    <button className={fatTrim === 'Lean (Extra Trimmed)' ? 'active' : ''} onClick={() => setFatTrim('Lean (Extra Trimmed)')}>Extra Trim</button>
                    <button className={fatTrim === 'Standard (Balanced)' ? 'active' : ''} onClick={() => setFatTrim('Standard (Balanced)')}>Standard</button>
                    <button className={fatTrim === 'Juicy (Marbled)' ? 'active' : ''} onClick={() => setFatTrim('Juicy (Marbled)')}>Juicy</button>
                  </div>
                </div>
              </div>

              <div className="config-group">
                <label>Special Butcher / Packaging Notes</label>
                <textarea 
                  placeholder="e.g. cut in small pieces, keep fats separate, vacuum seal separately..." 
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  rows="2"
                />
              </div>

              <div className="product-modal-options">
                <div className="quantity-selector">
                  <button className="qty-btn minus" onClick={() => setModalQty(q => q > 1 ? q - 1 : 1)}>-</button>
                  <input type="number" value={modalQty} readOnly />
                  <button className="qty-btn plus" onClick={() => setModalQty(q => q + 1)}>+</button>
                </div>
                
                <button className="btn btn-primary" onClick={addToCartFromModal} style={{ flexGrow: 1, justifyContent: 'center' }}>
                  Add to Order - ${(selectedProduct.price * modalQty).toFixed(2)}
                  <ShoppingCart size={16} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* STORE OWNER ADMIN DASHBOARD MODAL */}
      {isAdminModalOpen && (
        <div className="modal active" onClick={() => setIsAdminModalOpen(false)}>
          <button className="modal-close" onClick={() => setIsAdminModalOpen(false)}>&times;</button>
          
          <div className="modal-content admin-modal-content" onClick={(e) => e.stopPropagation()}>
            {!isAdminLoggedIn ? (
              /* ADMIN SECURITY AUTH BOX */
              <div className="admin-auth-box animate-fade-in">
                <div className="auth-lock-icon">
                  <Lock size={30} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '0.5rem' }}>Store Owner Portal</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Access management panel to add, edit, or remove meat cuts in real-time.
                </p>

                <form onSubmit={handleAdminLogin}>
                  <div className="form-group" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                    <label>Owner Passcode (Default: 1234)</label>
                    <input 
                      type="password" 
                      placeholder="Enter owner PIN..."
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      style={{ textAlign: 'center', fontSize: '1.1rem', letterSpacing: '0.2em' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Unlock size={16} />
                      Verify & Log In
                    </button>
                    
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={() => handleAdminLogin(null)}
                      style={{ width: '100%', justifyContent: 'center', borderColor: '#f59e0b', color: '#f59e0b' }}
                    >
                      <Sparkles size={16} />
                      1-Click Owner Demo Login
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* ADMIN DASHBOARD MAIN PANEL */
              <div className="admin-dashboard-panel animate-fade-in">
                
                {/* Admin Header Bar */}
                <div className="admin-header-bar">
                  <div className="admin-title-group">
                    <h2>
                      <ShieldCheck size={28} style={{ color: '#10b981' }} />
                      Meat Store Inventory Manager
                    </h2>
                    <p>Logged in as Store Owner • Live Zabiha meat catalog sync enabled</p>
                  </div>

                  <div className="admin-actions-bar">
                    <button className="btn btn-primary" onClick={handleOpenAddProduct} style={{ padding: '0.65rem 1.25rem' }}>
                      <Plus size={16} />
                      Add Meat Cut
                    </button>

                    <button className="btn btn-secondary" onClick={handleResetCatalog} style={{ padding: '0.65rem 1rem' }} title="Reset catalog to initial state">
                      <RefreshCw size={15} />
                      Reset Catalog
                    </button>

                    <button className="btn btn-secondary" onClick={() => setIsAdminLoggedIn(false)} style={{ padding: '0.65rem 1rem', borderColor: '#ef4444', color: '#ef4444' }}>
                      <Lock size={15} />
                      Lock Admin
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="admin-stats-grid">
                  <div className="admin-stat-card">
                    <div className="admin-stat-icon emerald"><Package /></div>
                    <div className="admin-stat-info">
                      <h3>{productsList.length}</h3>
                      <span>Total Meat Cuts</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-icon amber"><Award /></div>
                    <div className="admin-stat-info">
                      <h3>{productsList.filter(p => p.category === 'goat' || p.category === 'lamb').length}</h3>
                      <span>Goat & Lamb Cuts</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-icon blue"><CheckCircle2 /></div>
                    <div className="admin-stat-info">
                      <h3>{productsList.filter(p => p.inStock !== false).length}</h3>
                      <span>Active In Stock</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-icon red"><AlertCircle /></div>
                    <div className="admin-stat-info">
                      <h3>{productsList.filter(p => p.inStock === false).length}</h3>
                      <span>Out of Stock</span>
                    </div>
                  </div>
                </div>

                {/* Filter & Search Toolbar */}
                <div className="admin-toolbar">
                  <div className="admin-search-wrapper">
                    <Search className="admin-search-icon" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search meat cuts, status..." 
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                    />
                  </div>

                  <div className="filter-tabs" style={{ margin: 0 }}>
                    <button className={`tab-btn ${adminCategory === 'all' ? 'active' : ''}`} onClick={() => setAdminCategory('all')}>All ({productsList.length})</button>
                    <button className={`tab-btn ${adminCategory === 'goat' ? 'active' : ''}`} onClick={() => setAdminCategory('goat')}>Goat</button>
                    <button className={`tab-btn ${adminCategory === 'beef' ? 'active' : ''}`} onClick={() => setAdminCategory('beef')}>Beef</button>
                    <button className={`tab-btn ${adminCategory === 'chicken' ? 'active' : ''}`} onClick={() => setAdminCategory('chicken')}>Chicken</button>
                    <button className={`tab-btn ${adminCategory === 'lamb' ? 'active' : ''}`} onClick={() => setAdminCategory('lamb')}>Lamb</button>
                    <button className={`tab-btn ${adminCategory === 'marinated' ? 'active' : ''}`} onClick={() => setAdminCategory('marinated')}>Marinated</button>
                  </div>
                </div>

                {/* Admin Product Items Grid */}
                <div className="admin-products-grid">
                  {adminFilteredProducts.map((p) => {
                    const isOut = p.inStock === false;
                    return (
                      <div key={p.id} className="admin-item-card">
                        <div className="admin-item-header">
                          <img src={p.img} alt={p.name} className="admin-item-img" />
                          <div className="admin-item-meta">
                            <span className="admin-item-category">{getCategoryLabel(p.category)}</span>
                            <h4>{p.name}</h4>
                            <div className="admin-item-price-row">
                              <span className="product-price-tag" style={{ fontSize: '1.1rem' }}>
                                ${p.price.toFixed(2)}
                              </span>
                              <span className="product-price-unit">/ {p.unit}</span>
                            </div>
                          </div>
                        </div>

                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {p.desc}
                        </p>

                        <div className="admin-item-actions-row">
                          <button 
                            className={`stock-toggle-btn ${isOut ? 'out-stock' : 'in-stock'}`}
                            onClick={() => handleToggleStock(p.id)}
                            title="Click to toggle stock availability"
                          >
                            {isOut ? <EyeOff size={14} /> : <Eye size={14} />}
                            {isOut ? 'Out of Stock' : 'In Stock'}
                          </button>

                          <div className="admin-icon-btns">
                            <button 
                              className="icon-action-btn"
                              onClick={() => handleOpenEditProduct(p)}
                              title="Edit product details"
                            >
                              <Edit size={15} />
                            </button>
                            <button 
                              className="icon-action-btn delete-btn"
                              onClick={() => handleDeleteProduct(p.id)}
                              title="Delete product"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </div>
        </div>
      )}

      {/* ADD / EDIT PRODUCT FORM MODAL */}
      {isEditorModalOpen && (
        <div className="modal active" onClick={() => setIsEditorModalOpen(false)}>
          <button className="modal-close" onClick={() => setIsEditorModalOpen(false)}>&times;</button>
          
          <div className="modal-content product-editor-modal" onClick={(e) => e.stopPropagation()}>
            <span className="subtitle">{editingProduct ? 'Update Meat Cut' : 'New Meat Cut'}</span>
            <h2 style={{ fontSize: '1.8rem', margin: '0.25rem 0 1.5rem 0', color: 'white' }}>
              {editingProduct ? `Edit "${editingProduct.name}"` : 'Add New Halal Meat Cut'}
            </h2>

            <form onSubmit={handleSaveProduct}>
              <div className="form-group">
                <label>Meat Cut Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Halal Goat Curry Cut (Bone-In)"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Meat Category</label>
                  <select value={formCategory} onChange={(e) => {
                    setFormCategory(e.target.value);
                    setFormImg(presetImages[e.target.value] || presetImages.goat);
                  }}>
                    <option value="goat">Goat & Mutton</option>
                    <option value="beef">Halal Beef Cuts</option>
                    <option value="chicken">Chicken & Poultry</option>
                    <option value="lamb">Gourmet Lamb Cuts</option>
                    <option value="marinated">Marinated & BBQ Ready</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Price ($ USD)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    required 
                    placeholder="12.99"
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Unit / Portion Label</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. per lb, 6-Piece Pack"
                    value={formUnit}
                    onChange={(e) => setFormUnit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Status / Certification Tag</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. 100% Zabiha Halal, Hand Slaughtered"
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Product Image URL</label>
                <input 
                  type="url" 
                  required 
                  placeholder="https://images.unsplash.com/..."
                  value={formImg}
                  onChange={(e) => setFormImg(e.target.value)}
                />
                
                <div className="preset-url-chips">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Preset Images:</span>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.goat)}>Goat Cut</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.beef)}>Beef Steak</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.chicken)}>Chicken Cut</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.lamb)}>Lamb Chops</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.marinated)}>Marinated BBQ</button>
                </div>
              </div>

              <div className="form-group">
                <label>Description & Butcher Notes</label>
                <textarea 
                  rows="3" 
                  placeholder="Describe tenderness, fat marbling, and best cooking styles..."
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="form-grid-2" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'white' }}>
                  <input 
                    type="checkbox" 
                    checked={formHalal} 
                    onChange={(e) => setFormHalal(e.target.checked)} 
                  />
                  Zabiha Halal Certified Item
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'white' }}>
                  <input 
                    type="checkbox" 
                    checked={formInStock} 
                    onChange={(e) => setFormInStock(e.target.checked)} 
                  />
                  Currently In Stock
                </label>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditorModalOpen(false)} style={{ flex: 1, justifyContent: 'center' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  {editingProduct ? 'Save Changes' : 'Create Meat Cut'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Checkout Form Modal */}
      {isCheckoutModalOpen && (
        <div className="modal active" onClick={() => setIsCheckoutModalOpen(false)}>
          <button className="modal-close" onClick={() => setIsCheckoutModalOpen(false)}>&times;</button>
          <div className="modal-content checkout-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="subtitle">Complete Order Details</span>
            <h2 className="product-modal-name" style={{ fontSize: '2rem', margin: '0.25rem 0 1.5rem 0' }}>Butcher Counter Checkout</h2>
            
            {/* Delivery/Pickup Choice Toggle */}
            <div className="checkout-type-toggle">
              <button 
                type="button" 
                className={`type-btn ${orderType === 'pickup' ? 'active' : ''}`}
                onClick={() => setOrderType('pickup')}
              >
                <ShoppingBag size={18} />
                Express Store Pickup
              </button>
              <button 
                type="button" 
                className={`type-btn ${orderType === 'delivery' ? 'active' : ''}`}
                onClick={() => setOrderType('delivery')}
              >
                <Truck size={18} />
                On-Demand Delivery
              </button>
            </div>

            {/* Order Summary Box */}
            <div className="order-summary-box">
              <div className="summary-title">Meat Cuts Order Recap</div>
              <div className="summary-items-list">
                {cart.map((item, index) => (
                  <div key={index} className="summary-item-row">
                    <div className="summary-item-name-col">
                      <span className="summary-item-name">{item.name}</span>
                      {item.customizations && (
                        <div className="summary-item-cuts">
                          {item.customizations.style} 
                          {item.customizations.trim && ` / ${item.customizations.trim}`}
                        </div>
                      )}
                    </div>
                    <span className="summary-item-qty">x{item.qty} (${((item.price || 0) * item.qty).toFixed(2)})</span>
                  </div>
                ))}
              </div>
              <div className="summary-total-calc">
                <div className="calc-row">
                  <span>Subtotal ({cartCountTotal()} items):</span>
                  <strong>${cartSubtotal().toFixed(2)}</strong>
                </div>
                {orderType === 'delivery' && (
                  <div className="calc-row">
                    <span>Delivery Fee:</span>
                    <span>
                      {cartSubtotal() >= 75 ? (
                        <strong className="free-text">FREE (Order &gt; $75)</strong>
                      ) : (
                        `$${checkoutAddress ? (getDeliveryInfo(checkoutAddress)?.fee || 4.99) : 4.99}`
                      )}
                    </span>
                  </div>
                )}
                <div className="calc-row grand-total">
                  <span>Estimated Total:</span>
                  <strong style={{ color: 'var(--primary-light)' }}>
                    ${(cartSubtotal() + (orderType === 'delivery' && cartSubtotal() < 75 ? (checkoutAddress ? (getDeliveryInfo(checkoutAddress)?.fee || 4.99) : 4.99) : 0)).toFixed(2)}
                  </strong>
                </div>
              </div>
            </div>

            <form onSubmit={handleCheckoutSubmit}>
              <div className="form-group">
                <label>Your Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ali Khan" 
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number (for SMS notifications)</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="512.555.0199" 
                  value={checkoutPhone}
                  onChange={(e) => setCheckoutPhone(e.target.value)}
                />
              </div>

              {orderType === 'delivery' ? (
                /* Delivery Fields */
                <div className="form-group animate-fade-in">
                  <label>Delivery Address</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Street, City, Zip Code" 
                    value={checkoutAddress}
                    onChange={(e) => setCheckoutAddress(e.target.value)}
                  />
                  <small className="help-text">We only deliver within 10 miles of our Cedar Park store.</small>
                </div>
              ) : (
                /* Pickup Fields */
                <div className="checkout-date-time-row animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Pickup Date</label>
                    <input 
                      type="date" 
                      required 
                      value={checkoutDate}
                      onChange={(e) => setCheckoutDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pickup Time</label>
                    <input 
                      type="time" 
                      required 
                      value={checkoutTime}
                      onChange={(e) => setCheckoutTime(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>Additional Butcher / Delivery Instructions</label>
                <textarea 
                  placeholder="e.g. Leave package on front porch, or specify vehicle details for curbside pickup..." 
                  rows="2"
                  value={checkoutNotes}
                  onChange={(e) => setCheckoutNotes(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1.1rem' }}>
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Active Order Confirmation & Tracking Screen */}
      {activeOrder && (
        <div className="modal active">
          <button className="modal-close" onClick={() => setActiveOrder(null)}>&times;</button>
          <div className="modal-content tracking-modal-content">
            
            <div className="tracking-header">
              <div className="success-badge">
                <Check size={20} />
                Order Placed Successfully
              </div>
              <h2 className="tracking-title">Track Your Counter Order</h2>
              <div className="order-meta-info">
                <span>Order Reference: <strong>{activeOrder.orderId}</strong></span>
                <span>Type: <strong style={{ textTransform: 'uppercase' }}>{activeOrder.type}</strong></span>
              </div>
            </div>

            {activeOrder.type === 'pickup' ? (
              /* PICKUP INTERACTION SCREEN */
              <div className="tracking-pickup-screen animate-fade-in">
                <div className="pickup-status-card">
                  <div className="pickup-icon-anim">
                    <ShoppingBag size={48} className="pulsing-icon" />
                  </div>
                  <h3>Express Curbside Pickup Instructions</h3>
                  <p>
                    Your order is scheduled for <strong>{activeOrder.date}</strong> at <strong>{activeOrder.time}</strong>.
                    Our butchers are preparing your custom meat selections now.
                  </p>
                  <div className="spots-info-alert">
                    <Info size={16} />
                    <span>Park in spots <strong>3 or 4</strong> at our Cedar Park store.</span>
                  </div>
                </div>

                <div className="curbside-notify-box">
                  {!curbsideNotified ? (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      if (!curbsideVehicularStatus.trim()) {
                        alert("Please enter car description.");
                        return;
                      }
                      setCurbsideNotified(true);
                      showToast("Notification Sent", "Store team has been alerted.");
                    }}>
                      <h4>Are you outside the shop?</h4>
                      <p>Enter your car description below, and we will bring the order to your car window immediately!</p>
                      
                      <div className="curbside-input-row">
                        <div className="input-with-icon">
                          <Car size={18} />
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Silver Toyota Camry"
                            value={curbsideVehicularStatus}
                            onChange={(e) => setCurbsideVehicularStatus(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary curbside-btn">
                          🚗 Tap: I'm Here!
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="curbside-success-alert animate-scale-up">
                      <div className="alert-check-icon"><Check size={28} /></div>
                      <h4>Store Owner Has Been Notified!</h4>
                      <p>
                        A butcher is bringing your order to your <strong>{curbsideVehicularStatus}</strong> now. Please have payment ready. Thank you!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* DELIVERY REALTIME TRACKING SCREEN */
              <div className="tracking-delivery-screen animate-fade-in">
                
                {/* Simulated Map Visualizer */}
                <div className="delivery-map-visualizer">
                  <div className="map-labels">
                    <span className="label-store">Quality Halal Market</span>
                    <span className="label-home">Your House</span>
                  </div>
                  
                  <div className="map-route-line">
                    <div className="road-path"></div>
                    <div 
                      className="courier-vehicle"
                      style={{ 
                        left: `${(deliveryStep / 3) * 80 + 10}%`,
                        transform: `translateY(-50%) rotate(${deliveryStep === 3 ? 0 : 5}deg)` 
                      }}
                    >
                      <Truck size={24} />
                    </div>
                  </div>

                  <div className="map-pins">
                    <div className="pin pin-store active">
                      <MapPin size={18} />
                    </div>
                    <div className={`pin pin-home ${deliveryStep === 3 ? 'active' : ''}`}>
                      <User size={18} />
                    </div>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div className="tracking-timeline">
                  <div className={`timeline-node ${deliveryStep >= 0 ? 'active' : ''}`}>
                    <div className="node-dot"></div>
                    <div className="node-label">Order Received</div>
                  </div>
                  <div className={`timeline-node ${deliveryStep >= 1 ? 'active' : ''}`}>
                    <div className="node-dot"></div>
                    <div className="node-label">Butchering cuts</div>
                  </div>
                  <div className={`timeline-node ${deliveryStep >= 2 ? 'active' : ''}`}>
                    <div className="node-dot"></div>
                    <div className="node-label">Courier En Route</div>
                  </div>
                  <div className={`timeline-node ${deliveryStep >= 3 ? 'active' : ''}`}>
                    <div className="node-dot"></div>
                    <div className="node-label">Delivered</div>
                  </div>
                </div>

                <div className="delivery-status-indicator">
                  {deliveryStep === 0 && <h4>🥩 Our butchers are prepping your customized meat cuts right now...</h4>}
                  {deliveryStep === 1 && <h4>📦 Packaging your meat cuts in temperature-insulated bags...</h4>}
                  {deliveryStep === 2 && <h4>🚗 Delivery driver is en route with your fresh meat cuts!</h4>}
                  {deliveryStep === 3 && <h4>✅ Order delivered! Thank you for shopping with Quality Halal Meat Market.</h4>}
                  <p>Estimated Arrival: <strong>{deliveryStep === 3 ? "Delivered" : "30-40 minutes"}</strong></p>
                </div>
              </div>
            )}

            {/* Recipient Details & Items List */}
            <div className="tracking-summary-footer">
              <div className="summary-col">
                <h5>Contact Name</h5>
                <p>{activeOrder.name}</p>
              </div>
              <div className="summary-col">
                <h5>Phone Number</h5>
                <p>{activeOrder.phone}</p>
              </div>
              {activeOrder.address && (
                <div className="summary-col" style={{ gridColumn: 'span 2' }}>
                  <h5>Delivery Address</h5>
                  <p>{activeOrder.address}</p>
                </div>
              )}
            </div>

            <button className="btn btn-secondary close-tracking-btn" onClick={() => setActiveOrder(null)}>
              Close Tracking Panel
            </button>
          </div>
        </div>
      )}

      {/* Success Toast Popup */}
      <div className={`success-popup ${toast.isOpen ? 'active' : ''}`}>
        <div className="success-popup-icon">
          <Check size={20} />
        </div>
        <div className="success-popup-body">
          <h4 id="toastTitle">{toast.title}</h4>
          <p id="toastMessage">{toast.message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
