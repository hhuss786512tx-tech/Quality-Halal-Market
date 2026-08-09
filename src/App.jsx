import React, { useState, useMemo } from 'react';
import { 
  Phone, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, ShoppingCart, Trash2,
  Sliders, Search, Star, Heart,
  Eye, RefreshCw, Grid, List, Sparkles, CheckCircle2, Award,
  Filter, ShoppingBag, Store, Beef, Milk, Wheat, Package
} from 'lucide-react';
import IntroOverlay from './components/IntroOverlay';

// Imported Assets
import heroBanner from './assets/hero_banner_original.jpg';

// Category showcase photos (keep original stock images for category cards)
import catBeef from './assets/cat_beef.jpg';
import catChicken from './assets/cat_chicken.jpg';
import catGoat from './assets/cat_goat.jpg';
import catLamb from './assets/cat_lamb.jpg';

// Individual product photos
import beefSteak from './assets/beef_steak.jpg';
import beefBrisket from './assets/beef_brisket.jpg';
import beefRibeye from './assets/beef_ribeye.jpg';
import beefGround from './assets/beef_ground.jpg';
import chickenWhole from './assets/chicken_whole.jpg';
import chickenBreast from './assets/chicken_breast.jpg';
import chickenDrumstick from './assets/chicken_drumstick.jpg';
import goatCurry from './assets/goat_curry.jpg';
import goatLeg from './assets/goat_leg.jpg';
import lambRack from './assets/lamb_rack.jpg';
import lambChops from './assets/lamb_chops.jpg';

// ============================================================================
// COMPLETE PRODUCT DATA — matches the JSON spec from Haider
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
  image: opts.image ?? catBeef,
  badge: opts.badge ?? null,
  tags: opts.tags ?? [],
  description: opts.description ?? '',
  inStock: opts.inStock ?? true,
  rating: opts.rating ?? null,
  reviews: opts.reviews ?? null,
});

const MEAT_PRODUCTS = [
  // ========== FRESH BEEF (9–26) ==========
  createProduct('fb1', 'Beef with Bone Mix', 'Fresh Beef', null, { prepType: 'Bone-in', image: beefSteak, description: 'Bone-in beef mix cut to order.' }),
  createProduct('fb2', 'Beef Leg or Shoulder', 'Fresh Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Whole beef leg or shoulder roast.' }),
  createProduct('fb3', 'Beef Rib Eye Steak', 'Fresh Beef', null, { prepType: 'Steaks', image: beefRibeye, description: 'Premium rib eye steak.' }),
  createProduct('fb4', 'Beef T-Bone Steak', 'Fresh Beef', null, { prepType: 'Steaks', image: beefSteak, description: 'Classic T-bone cut.' }),
  createProduct('fb5', 'Beef Ribs Only', 'Fresh Beef', null, { prepType: 'Bone-in', image: beefRibeye, description: 'Beef short ribs.' }),
  createProduct('fb6', 'Beef Neck', 'Fresh Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Beef neck — great for slow cooking.' }),
  createProduct('fb7', 'Beef Fillet Mignon', 'Fresh Beef', null, { prepType: 'Steaks', image: beefSteak, description: 'The most tender beef cut.' }),
  createProduct('fb8', 'Beef Boneless from Leg', 'Fresh Beef', null, { prepType: 'Boneless', image: beefSteak, description: 'Boneless leg cuts.' }),
  createProduct('fb9', 'Fresh Nihari', 'Fresh Beef', null, { prepType: 'Bone-in', image: beefSteak, description: 'Traditional bone-in shank pieces for authentic nihari.' }),
  createProduct('fb10', 'Beef Eye Round Boneless Steak', 'Fresh Beef', null, { prepType: 'Steaks', image: beefSteak, description: 'Lean eye round steak.' }),
  createProduct('fb11', 'Beef Boneless Cubes, Lean', 'Fresh Beef', null, { prepType: 'Cubed', image: beefBrisket, description: 'Lean boneless cubes.' }),
  createProduct('fb12', 'Beef Boneless Cubes, X-Lean', 'Fresh Beef', null, { prepType: 'Cubed', image: beefBrisket, description: 'Extra-lean boneless beef cubes.' }),
  createProduct('fb13', 'Beef Ground, Regular', 'Fresh Beef', null, { prepType: 'Minced', image: beefGround, description: 'Fresh regular ground beef.' }),
  createProduct('fb14', 'Beef Ground, Lean', 'Fresh Beef', null, { prepType: 'Minced', image: beefGround, description: 'Lean ground beef.' }),
  createProduct('fb15', 'Beef Ground, X-Lean', 'Fresh Beef', null, { prepType: 'Minced', image: beefGround, description: 'Extra-lean ground beef.' }),
  createProduct('fb16', 'Beef Pasanda', 'Fresh Beef', null, { prepType: 'Boneless', image: beefSteak, description: 'Thin-sliced Pasanda cut.' }),
  createProduct('fb17', 'Beef Bihari Cut', 'Fresh Beef', null, { prepType: 'Boneless', image: beefBrisket, description: 'Bihari-style thin strips.' }),
  createProduct('fb18', 'Beef Sirloin Steak', 'Fresh Beef', null, { prepType: 'Steaks', image: beefSteak, description: 'Sirloin steak cut.' }),

  // ========== FROZEN BEEF (27–33) ==========
  createProduct('fz1', 'Frozen Beef Paya', 'Frozen Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Frozen beef trotters for paya.' }),
  createProduct('fz2', 'Frozen Ox Tail', 'Frozen Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Frozen ox tail pieces.' }),
  createProduct('fz3', 'Frozen Beef Liver', 'Frozen Beef', null, { prepType: 'Organ', image: beefSteak, description: 'Frozen beef liver.' }),
  createProduct('fz4', 'Beef Marrow Bone', 'Frozen Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Beef marrow bones.' }),
  createProduct('fz5', 'Beef Knuckle / Joint Bone', 'Frozen Beef', null, { prepType: 'Bone-in', image: beefBrisket, description: 'Knuckle and joint bones.' }),
  createProduct('fz6', 'Beef Tripe / Stomach', 'Frozen Beef', null, { prepType: 'Organ', image: beefBrisket, description: 'Beef tripe — stomach lining.' }),
  createProduct('fz7', 'Beef Tongue', 'Frozen Beef', null, { prepType: 'Organ', image: beefRibeye, description: 'Frozen beef tongue.' }),

  // ========== FRESH GOAT / LAMB (34–46) ==========
  createProduct('fg1', 'Half Goat / Lamb', 'Fresh Goat/Lamb', null, { prepType: 'Whole', image: goatCurry, description: 'Half goat or lamb, cut to order.' }),
  createProduct('fg2', 'Full Goat / Lamb', 'Fresh Goat/Lamb', null, { prepType: 'Whole', image: goatCurry, description: 'Whole goat or lamb, fresh cut.' }),
  createProduct('fg3', 'Goat / Lamb Leg', 'Fresh Goat/Lamb', null, { prepType: 'Bone-in', image: goatLeg, description: 'Whole goat or lamb leg.' }),
  createProduct('fg4', 'Goat / Lamb Mix', 'Fresh Goat/Lamb', null, { prepType: 'Bone-in', image: goatCurry, description: 'Bone-in goat or lamb curry mix.' }),
  createProduct('fg5', 'Goat / Lamb Chops', 'Fresh Goat/Lamb', null, { prepType: 'Chops', image: lambChops, description: 'Premium goat or lamb chops.' }),
  createProduct('fg6', 'Goat / Lamb Liver', 'Fresh Goat/Lamb', null, { prepType: 'Organ', image: goatCurry, description: 'Fresh goat or lamb liver.' }),
  createProduct('fg7', 'Goat / Lamb Kidneys', 'Fresh Goat/Lamb', null, { prepType: 'Organ', image: goatCurry, description: 'Fresh goat or lamb kidneys.' }),
  createProduct('fg8', 'Goat / Lamb Qeema', 'Fresh Goat/Lamb', null, { prepType: 'Minced', image: goatCurry, description: 'Fresh-ground goat or lamb qeema.' }),
  createProduct('fg9', 'Goat / Lamb Boneless', 'Fresh Goat/Lamb', null, { prepType: 'Boneless', image: goatLeg, description: 'Boneless goat or lamb shoulder/leg.' }),
  createProduct('fg10', 'Goat / Lamb Heart', 'Fresh Goat/Lamb', null, { prepType: 'Organ', image: goatCurry, description: 'Fresh goat or lamb heart.' }),
  createProduct('fg11', 'Goat / Lamb Ribs', 'Fresh Goat/Lamb', null, { prepType: 'Bone-in', image: goatCurry, description: 'Goat or lamb rib cuts.' }),
  createProduct('fg12', 'Goat / Lamb Putt & Neck', 'Fresh Goat/Lamb', null, { prepType: 'Bone-in', image: goatLeg, description: 'Putt (leg shank) and neck pieces.' }),
  createProduct('fg13', 'Goat / Lamb Rib Rack', 'Fresh Goat/Lamb', null, { prepType: 'Bone-in', image: lambRack, description: 'Full goat or lamb rib rack.' }),

  // ========== FROZEN GOAT / LAMB (47–54) ==========
  createProduct('zg1', 'Frozen Goat / Lamb Leg', 'Frozen Goat/Lamb', null, { prepType: 'Bone-in', image: goatLeg, description: 'Frozen whole goat or lamb leg.' }),
  createProduct('zg2', 'Frozen Lamb Shanks', 'Frozen Goat/Lamb', null, { prepType: 'Bone-in', image: goatLeg, description: 'Frozen lamb shanks.' }),
  createProduct('zg3', 'Frozen Goat Bones', 'Frozen Goat/Lamb', null, { prepType: 'Bone-in', image: goatCurry, description: 'Frozen goat bones for stock.' }),
  createProduct('zg4', 'Frozen Goat Paya with Skin', 'Frozen Goat/Lamb', null, { prepType: 'Bone-in', image: goatCurry, description: 'Goat trotters with skin.' }),
  createProduct('zg5', 'Frozen Goat / Lamb Tongue', 'Frozen Goat/Lamb', null, { prepType: 'Organ', image: goatCurry, description: 'Frozen goat or lamb tongue.' }),
  createProduct('zg6', 'Frozen Goat / Lamb Stomach', 'Frozen Goat/Lamb', null, { prepType: 'Organ', image: goatCurry, description: 'Frozen goat or lamb stomach.' }),
  createProduct('zg7', 'Frozen Goat / Lamb Head', 'Frozen Goat/Lamb', null, { prepType: 'Whole', image: goatCurry, description: 'Frozen goat or lamb head.' }),
  createProduct('zg8', 'Frozen Goat Burnt Paya', 'Frozen Goat/Lamb', null, { prepType: 'Bone-in', image: goatCurry, description: 'Burnt goat paya / trotters.' }),

  // ========== FRESH CHICKEN (55–67) ==========
  createProduct('fc1', 'Whole Chicken', 'Fresh Chicken', null, { prepType: 'Whole', image: chickenWhole, description: 'Fresh whole chicken.' }),
  createProduct('fc2', 'Chicken Leg Quarters', 'Fresh Chicken', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Chicken leg quarters.' }),
  createProduct('fc3', 'Chicken Leg Quarters, Box', 'Fresh Chicken', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Leg quarters by the box.' }),
  createProduct('fc4', 'Chicken Leg Quarters, Half Box', 'Fresh Chicken', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Half box of chicken leg quarters.' }),
  createProduct('fc5', 'Chicken Boneless Breast', 'Fresh Chicken', null, { prepType: 'Boneless', image: chickenBreast, description: 'Boneless skinless chicken breast.' }),
  createProduct('fc6', 'Chicken Boneless Thigh', 'Fresh Chicken', null, { prepType: 'Boneless', image: chickenBreast, description: 'Boneless skinless chicken thighs.' }),
  createProduct('fc7', 'Chicken Drumsticks', 'Fresh Chicken', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Fresh chicken drumsticks.' }),
  createProduct('fc8', 'Tahir Whole Chicken', 'Fresh Chicken', null, { prepType: 'Whole', image: chickenWhole, description: 'Tahir brand whole chicken.' }),
  createProduct('fc9', 'Tahir Leg Quarters', 'Fresh Chicken', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Tahir brand leg quarters.' }),
  createProduct('fc10', 'Tahir Boneless Breast', 'Fresh Chicken', null, { prepType: 'Boneless', image: chickenBreast, description: 'Tahir boneless chicken breast.' }),
  createProduct('fc11', 'Chicken Qeema', 'Fresh Chicken', null, { prepType: 'Minced', image: chickenWhole, description: 'Fresh-ground chicken qeema.' }),
  createProduct('fc12', 'Chicken Fajita / Strips', 'Fresh Chicken', null, { prepType: 'Boneless', image: chickenBreast, description: 'Chicken strips for fajitas.' }),
  createProduct('fc13', 'Chicken Tenders', 'Fresh Chicken', null, { prepType: 'Boneless', image: chickenBreast, description: 'Fresh chicken tenders.' }),

  // ========== FROZEN POULTRY & MORE (68–72) ==========
  createProduct('zp1', 'Chicken Wings', 'Frozen Poultry', null, { prepType: 'Bone-in', image: chickenDrumstick, description: 'Frozen chicken wings.' }),
  createProduct('zp2', 'Chicken Gizzard', 'Frozen Poultry', null, { prepType: 'Organ', image: chickenWhole, description: 'Chicken gizzard.' }),
  createProduct('zp3', 'Chicken Liver', 'Frozen Poultry', null, { prepType: 'Organ', image: chickenWhole, description: 'Frozen chicken liver.' }),
  createProduct('zp4', 'Frozen Quail', 'Frozen Poultry', null, { prepType: 'Whole', image: chickenWhole, description: 'Frozen whole quail.' }),
  createProduct('zp5', 'Frozen Duck', 'Frozen Poultry', null, { prepType: 'Whole', image: chickenWhole, description: 'Frozen whole duck.' }),
];
const GROCERY_RICE = [
  createProduct('gr1', 'Basmati Rice, 10 lb', 'Rice, Flour & Lentils', 18.99, { originalPrice: 22.99, badge: 'PANTRY ESSENTIAL', description: 'Aged extra-long grain aromatic Basmati.' }),
  createProduct('gr2', 'Basmati Rice, 20 lb', 'Rice, Flour & Lentils', 24.99, { originalPrice: 29.99, badge: 'FAMILY SIZE', description: 'Premium Pakistani Basmati.' }),
  createProduct('gr3', 'Sella Rice', 'Rice, Flour & Lentils', 14.99, { originalPrice: 17.99, badge: 'PARBOILED', description: 'Parboiled Sella rice — never sticky.' }),
  createProduct('gr4', 'Atta / Chapati Flour', 'Rice, Flour & Lentils', 14.99, { originalPrice: 17.99, badge: 'FRESH STOCK', description: 'Stone-ground whole wheat flour.' }),
  createProduct('gr5', 'Besan (Gram Flour)', 'Rice, Flour & Lentils', 5.99, { description: 'Fine chickpea flour for pakoras.' }),
  createProduct('gr6', 'Toor Dal', 'Rice, Flour & Lentils', 6.49, { description: 'Split pigeon peas.' }),
  createProduct('gr7', 'Masoor Dal', 'Rice, Flour & Lentils', 4.99, { description: 'Red lentils — quick cooking.' }),
  createProduct('gr8', 'Chana Dal', 'Rice, Flour & Lentils', 5.49, { description: 'Split chickpea lentils.' }),
  createProduct('gr9', 'Chickpeas', 'Rice, Flour & Lentils', 4.49, { description: 'Whole dried chickpeas.' }),
];

const GROCERY_SPICES = [
  createProduct('gs1', 'Garam Masala', 'Spices', 4.99, { description: 'House-blended aromatic masala.' }),
  createProduct('gs2', 'Turmeric Powder', 'Spices', 3.49, { description: 'Pure ground turmeric.' }),
  createProduct('gs3', 'Red Chili Powder', 'Spices', 3.99, { description: 'Hot red chili powder.' }),
  createProduct('gs4', 'Coriander Powder', 'Spices', 3.49, { description: 'Ground coriander seed.' }),
  createProduct('gs5', 'Cumin Seed', 'Spices', 4.49, { description: 'Whole cumin seeds.' }),
  createProduct('gs6', 'Biryani Masala', 'Spices', 5.99, { description: 'Shan Biryani spice mix.' }),
  createProduct('gs7', 'Curry Paste', 'Spices', 4.99, { description: 'Ginger-garlic curry paste.' }),
  createProduct('gs8', 'Saffron', 'Spices', 12.99, { originalPrice: 15.99, badge: 'PREMIUM', description: 'Premium saffron threads.' }),
];

const GROCERY_DAIRY = [
  createProduct('gd1', 'Paneer', 'Dairy', 7.99, { originalPrice: 9.49, badge: 'FRESH', description: 'Fresh Indian-style cheese block.' }),
  createProduct('gd2', 'Yogurt / Dahi', 'Dairy', 3.99, { description: 'Plain whole-milk yogurt.' }),
  createProduct('gd3', 'Ghee', 'Dairy', 16.99, { originalPrice: 19.99, badge: 'PREMIUM', description: 'Pure clarified butter ghee.' }),
  createProduct('gd4', 'Lassi', 'Dairy', 3.49, { description: 'Refreshing yogurt drink.' }),
  createProduct('gd5', 'Halal Cheese', 'Dairy', 5.99, { description: 'Imported halal-certified cheese.' }),
];

const GROCERY_FROZEN = [
  createProduct('gf1', 'Frozen Paratha', 'Frozen & Canned', 8.49, { originalPrice: 10.49, badge: 'FROZEN', description: 'Flaky Malabari-style frozen parathas.' }),
  createProduct('gf2', 'Frozen Samosa', 'Frozen & Canned', 7.99, { description: 'Ready-to-fry vegetable samosas.' }),
  createProduct('gf3', 'Frozen Seekh Kebab', 'Frozen & Canned', 11.99, { originalPrice: 14.99, badge: 'HOT DEAL', description: 'Pre-skewered frozen seekh kebabs.' }),
  createProduct('gf4', 'Frozen Naan', 'Frozen & Canned', 5.99, { description: 'Tandoori-style frozen naan.' }),
  createProduct('gf5', 'Canned Tomatoes', 'Frozen & Canned', 2.99, { description: 'Imported plum tomatoes.' }),
  createProduct('gf6', 'Coconut Milk', 'Frozen & Canned', 3.49, { description: 'Creamy canned coconut milk.' }),
  createProduct('gf7', 'Pickle / Achar', 'Frozen & Canned', 6.99, { description: 'Mixed mango & lime pickle.' }),
];

const GROCERY_SNACKS = [
  createProduct('gk1', 'Gulab Jamun', 'Sweets & Snacks', 6.49, { originalPrice: 7.99, badge: 'SWEETS', description: 'Ready-to-make gulab jamun mix.' }),
  createProduct('gk2', 'Barfi', 'Sweets & Snacks', 9.99, { description: 'Traditional milk fudge squares.' }),
  createProduct('gk3', 'Jalebi', 'Sweets & Snacks', 7.99, { description: 'Crispy syrup-soaked spirals.' }),
  createProduct('gk4', 'Rasmalai', 'Sweets & Snacks', 8.99, { description: 'Creamy paneer dumplings in sweet milk.' }),
  createProduct('gk5', 'Namkeen Mix', 'Sweets & Snacks', 4.99, { description: 'Spiced savory snack mix.' }),
  createProduct('gk6', 'Dates', 'Sweets & Snacks', 12.99, { originalPrice: 15.99, badge: 'TOP SELLER', description: 'Premium Medjool dates.' }),
  createProduct('gk7', 'Baklava', 'Sweets & Snacks', 14.99, { description: 'Layered filo pastry with nuts and honey.' }),
];

const ALL_GROCERY = [...GROCERY_RICE, ...GROCERY_SPICES, ...GROCERY_DAIRY, ...GROCERY_FROZEN, ...GROCERY_SNACKS];

// Meat categories for ribbon nav
const MEAT_CATEGORIES = ['All', 'Fresh Beef', 'Frozen Beef', 'Fresh Goat/Lamb', 'Frozen Goat/Lamb', 'Fresh Chicken', 'Frozen Poultry'];

// Category showcase cards
const PHOTO_CATEGORIES = [
  { name: 'Fresh Beef', title: 'FRESH BEEF', count: '18 Cuts', img: catBeef, badge: 'Premium Cuts' },
  { name: 'Frozen Beef', title: 'FROZEN BEEF', count: '7 Items', img: catBeef, badge: 'Frozen Fresh' },
  { name: 'Fresh Goat/Lamb', title: 'FRESH GOAT/LAMB', count: '13 Cuts', img: catGoat, badge: 'Fresh Halal' },
  { name: 'Frozen Goat/Lamb', title: 'FROZEN GOAT/LAMB', count: '8 Items', img: catLamb, badge: 'Frozen Fresh' },
  { name: 'Fresh Chicken', title: 'FRESH CHICKEN', count: '13 Cuts', img: catChicken, badge: 'Zabiha Halal' },
  { name: 'Frozen Poultry', title: 'FROZEN POULTRY', count: '5 Items', img: catChicken, badge: 'Specialty Poultry' },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMeatCat, setActiveMeatCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cols-3');
  const [sortOption, setSortOption] = useState('default');
  const [priceMaxFilter, setPriceMaxFilter] = useState(35);
  const [selectedPreps, setSelectedPreps] = useState([]);
  const [onlyBoneIn, setOnlyBoneIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('meat');

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [userPoints] = useState(120);

  // Determine groceries sub-tab
  const [grocerySubTab, setGrocerySubTab] = useState('rice');

  const grocerySubCategories = [
    { key: 'rice', label: 'Rice, Flour & Lentils', data: GROCERY_RICE },
    { key: 'spices', label: 'Spices', data: GROCERY_SPICES },
    { key: 'dairy', label: 'Dairy', data: GROCERY_DAIRY },
    { key: 'frozen', label: 'Frozen & Canned', data: GROCERY_FROZEN },
    { key: 'snacks', label: 'Sweets & Snacks', data: GROCERY_SNACKS },
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    let source = activeTab === 'meat' ? MEAT_PRODUCTS : ALL_GROCERY;

    if (activeTab === 'meat') {
      if (activeMeatCat !== 'All') {
        source = source.filter(p => p.category === activeMeatCat);
      }
    } else {
      const sub = grocerySubCategories.find(s => s.key === grocerySubTab);
      if (sub) source = sub.data;
    }

    return source.filter(p => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
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
  }, [activeMeatCat, grocerySubTab, searchQuery, priceMaxFilter, selectedPreps, onlyBoneIn, sortOption, activeTab]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + ((item.price ?? 0) * item.quantity), 0);
  }, [cart]);

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

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
    setActiveMeatCat('All');
    setGrocerySubTab('rice');
    setSearchQuery('');
    setSelectedPreps([]);
  };

  const formatPrice = (product) => {
    if (product.marketPrice) return 'Market price';
    if (product.price === null) return (
      <a href="tel:+15122607677" style={{ color: 'var(--emerald-bright)', fontWeight: 700, fontSize: '0.9rem' }}>
        Call for price
      </a>
    );
    return `$${product.price.toFixed(2)}${product.perLb ? ' / lb' : ''}`;
  };

  return (
    <div className="site-wrapper">
      <IntroOverlay />

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
                <span>Daily: 9:00 AM - 9:00 PM</span>
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
            <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => { handleSwitchTab('meat'); }}>
              <div className="logo-icon-wrap">
                <ShoppingBag size={24} />
              </div>
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
              <div className="reward-badge-btn">
                <Award size={16} />
                <span>{userPoints} Pts</span>
              </div>
              <a href="tel:+15122607677" className="cart-header-btn" style={{ background: 'linear-gradient(135deg, var(--gold-accent) 0%, var(--gold-dark) 100%)', color: '#000' }}>
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

          {/* Department Tabs */}
          <div className="dept-tab-switcher">
            <button className={`dept-tab ${activeTab === 'meat' ? 'active' : ''}`} onClick={() => handleSwitchTab('meat')}>
              <Beef size={18} /><span>Fresh Meat Counter</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <img src={heroBanner} alt="Quality Halal Market" className="hero-bg-img" />
        <div className="container">
          <div className="hero-content-wrap">
            <div className="hero-badge-pill"><Sparkles size={14} /> Savor Every. Last. Bite.</div>
            <h2 className="hero-title">
              {activeTab === 'meat' ? 'Your Premium Halal Meat Butcher Counter' : 'Quality Halal Market'}
            </h2>
            <p className="hero-subtitle">
              {activeTab === 'meat' 
                ? 'Sourcing the finest hand-slaughtered Zabiha beef, goat, lamb, and chicken. Custom cut and trimmed to order.'
                : 'Fresh spices, basmati rice, frozen foods, dairy, sweets, and specialty groceries from South Asia and the Middle East — right here in Cedar Park.'}
            </p>
            <div className="hero-actions">
              <button className="btn-primary-green" onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}>
                <span>{activeTab === 'meat' ? 'Shop Meat Counter' : 'Browse Groceries'}</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-outline-gold" onClick={() => document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' })}>
                <span>Explore Collections</span>
              </button>
              <a href="tel:+15122607677" className="btn-outline-gold" style={{ borderColor: 'var(--primary-green)', color: 'var(--emerald-bright)' }}>
                <Phone size={18} /><span>Call (512) 260-7677</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SHOWCASE */}
      <section id="categories-section" className="categories-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Explore By Category</span>
            <h3 className="section-title-lg">{activeTab === 'meat' ? 'Fresh Cut Meat Market' : 'Grocery & Pantry'}</h3>
            <p className="section-desc">Select a category to filter our inventory.</p>
          </div>
          <div className="photo-categories-grid">
            {PHOTO_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="photo-category-card" onClick={() => {
                { handleSwitchTab('meat'); setActiveMeatCat(cat.name); }
                document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <img src={cat.img} alt={cat.title} className="photo-category-img" />
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

      {/* MEAT CATEGORY RIBBON */}
      {activeTab === 'meat' && (
        <section id="shop-section" className="shop-cat-ribbon-section">
          <div className="container">
            <div className="shop-cat-ribbon-wrap">
              {MEAT_CATEGORIES.map(cat => (
                <button key={cat} className={`shop-cat-pill ${activeMeatCat === cat ? 'active' : ''}`} onClick={() => setActiveMeatCat(cat)}>
                  {cat === 'All' ? (
                    <div className="shop-cat-icon-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-green)', border: '1.5px solid var(--gold-accent)' }}>
                      <ShoppingBag size={16} color="var(--gold-accent)" />
                    </div>
                  ) : (
                    <img src={cat === 'Fresh Beef' ? catBeef : cat === 'Frozen Beef' ? catBeef : cat === 'Fresh Goat/Lamb' ? catGoat : cat === 'Frozen Goat/Lamb' ? catLamb : catChicken} alt={cat} className="shop-cat-icon-thumb" />
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
      )}

      {/* GROCERY SUB-TABS */}
      {activeTab === 'grocery' && (
        <section id="shop-section" className="shop-cat-ribbon-section">
          <div className="container">
            <div className="shop-cat-ribbon-wrap">
              {grocerySubCategories.map(sub => (
                <button key={sub.key} className={`shop-cat-pill ${grocerySubTab === sub.key ? 'active' : ''}`} onClick={() => setGrocerySubTab(sub.key)}>
                  <span style={{ paddingLeft: '0.3rem' }}>{sub.label}</span>
                  <span className="shop-cat-count-badge">{sub.data.length}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <div className="view-switcher-group">
                {['cols-4', 'cols-3', 'cols-2'].map(m => (
                  <button key={m} className={`view-btn ${viewMode === m ? 'active' : ''}`} onClick={() => setViewMode(m)}><Grid size={18} /></button>
                ))}
                <button className={`view-btn ${viewMode === 'list-view' ? 'active' : ''}`} onClick={() => setViewMode('list-view')}><List size={18} /></button>
              </div>
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
                    <input type="number" className="price-num-input" value={priceMaxFilter} onChange={(e) => setPriceMaxFilter(Number(e.target.value))} />
                  </div>
                </div>
                <input type="range" className="price-slider-bar" min="3" max="35" value={priceMaxFilter} onChange={(e) => setPriceMaxFilter(Number(e.target.value))} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Up to ${priceMaxFilter}.00</span>
              </div>
              {activeTab === 'meat' && (
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
                onClick={() => { setActiveMeatCat('All'); setSearchQuery(''); setPriceMaxFilter(35); setSelectedPreps([]); setOnlyBoneIn(false); }}>
                <RefreshCw size={14} /><span>Clear All</span>
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
              <div className={`products-grid-container ${viewMode}`}>
                {filteredProducts.map(p => (
                  <div key={p.id} className="product-card">
                    <div className="product-img-wrapper">
                      <img src={p.image} alt={p.name} className="product-card-img" />
                      <div className="card-badges-stack">
                        <span className="badge-halal">ZABIHA HALAL</span>
                        {p.badge && <span className="badge-sale">{p.badge}</span>}
                      </div>
                      <div className="quick-actions-bar">
                        <button className="action-icon-btn" title="Quick View" onClick={() => setQuickViewProduct(p)}><Eye size={16} /></button>
                        <button className="action-icon-btn" title="Wishlist"><Heart size={16} /></button>
                      </div>
                    </div>
                    <div className="product-card-body">
                      <span className="product-sku-tag" style={{ color: p.marketPrice ? 'var(--gold-accent)' : 'var(--text-muted)' }}>
                        {p.marketPrice ? 'MARKET PRICE' : (activeTab === 'meat' ? p.category.toUpperCase() : 'GROCERY')}
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
                <img src={quickViewProduct.image} alt={quickViewProduct.name} style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
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
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-prep-text">{formatPrice(item)}</p>
                      <div className="cart-item-price-qty">
                        <span className="current-price" style={{ fontSize: '1rem' }}>${((item.price ?? 0) * item.quantity).toFixed(2)}</span>
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
                <div style={{ background: 'rgba(22,163,74,0.1)', border: '1px solid var(--primary-green)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Ready to order? Call us!</p>
                  <a href="tel:+15122607677" className="btn-primary-green" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={18} /><span>Call (512) 260-7677</span>
                  </a>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Open Daily 9 AM – 9 PM</p>
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
              <p><strong>Mon – Sat:</strong> 9 AM – 9 PM<br /><strong>Sun:</strong> 10 AM – 8 PM</p>
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

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="brand-logo" style={{ marginBottom: '1rem' }}>
                <div className="logo-icon-wrap"><ShoppingBag size={20} /></div>
                <div className="logo-text-group"><h1>Quality Halal Market</h1><span>Premium Meats & Groceries</span></div>
              </div>
              <p>Your premier source for 100% hand-slaughtered Zabiha halal meat and Indian, Pakistani & Mediterranean groceries.</p>
            </div>
            <div className="footer-col">
              <h4>Meat</h4>
              <ul>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Fresh Beef'); }}>Fresh Beef</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Frozen Beef'); }}>Frozen Beef</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Fresh Goat/Lamb'); }}>Goat & Lamb</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Fresh Chicken'); }}>Fresh Chicken</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Poultry & More</h4>
              <ul>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Frozen Poultry'); }}>Frozen Poultry</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveMeatCat('Fresh Chicken'); }}>Fresh Chicken</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+15122607677" style={{ color: 'var(--gold-accent)', fontWeight: 700 }}>📞 (512) 260-7677</a></li>
                <li><span>📍 12920 W Parmer Ln #106</span></li>
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
  );
}