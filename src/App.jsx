import React, { useState, useMemo } from 'react';
import { 
  Phone, Menu, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, Mail, ShoppingCart, Trash2, Maximize2, Check,
  Truck, Sliders, User, Plus, Minus, Search, Star, Heart,
  Eye, RefreshCw, Grid, List, Sparkles, CheckCircle2, Award,
  ChevronDown, Filter, Lock, ShoppingBag, Zap, ExternalLink, PackageCheck, Tag, ToggleLeft, ToggleRight, Settings
} from 'lucide-react';

// Imported Assets
import heroBanner from './assets/hero_banner.jpg';
import catBeef from './assets/cat_beef.jpg';
import catChicken from './assets/cat_chicken.jpg';
import catGoat from './assets/cat_goat.jpg';
import catLamb from './assets/cat_lamb.jpg';
import catMarinated from './assets/cat_marinated.jpg';
import catSeafood from './assets/cat_seafood.jpg';
import catGrocery from './assets/cat_grocery.jpg';

// Comprehensive Meat & Grocery Products Data
const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    sku: 'BK100051',
    name: 'BEEF BREAKFAST STEAK',
    category: 'Beef',
    price: 12.99,
    originalPrice: 15.99,
    prepType: 'Steaks',
    rating: 4.9,
    reviews: 38,
    points: 1,
    image: catBeef,
    badge: 'FRESH CUT',
    isHalal: true,
    inStock: true,
    description: 'Thinly sliced premium beef rib steak, ideal for quick breakfast searing or sizzling steak sandwiches.'
  },
  {
    id: 'p2',
    sku: 'BK100034',
    name: 'BEEF BRISKET BONELESS',
    category: 'Beef',
    price: 14.99,
    originalPrice: 17.99,
    prepType: 'Boneless',
    rating: 4.8,
    reviews: 42,
    points: 1,
    image: catBeef,
    badge: '100% ZABIHA',
    isHalal: true,
    inStock: true,
    description: 'Choice boneless beef brisket with rich fat cap layering. Perfect for low & slow Texas BBQ smoking.'
  },
  {
    id: 'p3',
    sku: 'BK100088',
    name: 'PRIME BEEF RIBEYE STEAK',
    category: 'Beef',
    price: 19.99,
    originalPrice: 23.99,
    prepType: 'Steaks',
    rating: 5.0,
    reviews: 54,
    points: 2,
    image: catBeef,
    badge: 'BEST SELLER',
    isHalal: true,
    inStock: true,
    description: 'Hand-selected thick ribeye with intense marbling. Delivered freshly cut by our master butcher.'
  },
  {
    id: 'p4',
    sku: 'BK100012',
    name: 'HALAL GROUND BEEF LEAN (85/15)',
    category: 'Beef',
    price: 8.99,
    originalPrice: 10.99,
    prepType: 'Minced',
    rating: 4.7,
    reviews: 29,
    points: 1,
    image: catBeef,
    badge: 'DAILY FRESH',
    isHalal: true,
    inStock: true,
    description: 'Freshly minced ground beef ground daily from prime cuts with 85% lean ratio.'
  },
  {
    id: 'p5',
    sku: 'CK200010',
    name: 'HAND CUT CHICKEN (WHOLE)',
    category: 'Hand Cut Chicken',
    price: 4.99,
    originalPrice: 5.99,
    prepType: 'Whole',
    rating: 4.9,
    reviews: 64,
    points: 1,
    image: catChicken,
    badge: '100% HAND-CUT',
    isHalal: true,
    inStock: true,
    description: '100% Hand-slaughtered Zabiha whole chicken. Cleaned and prepared skin-on or skinless upon request.'
  },
  {
    id: 'p6',
    sku: 'CK200025',
    name: 'BONELESS CHICKEN BREAST',
    category: 'Chicken',
    price: 6.99,
    originalPrice: 8.49,
    prepType: 'Boneless',
    rating: 4.9,
    reviews: 81,
    points: 1,
    image: catChicken,
    badge: 'TOP RATED',
    isHalal: true,
    inStock: true,
    description: 'Tender, skinless, boneless chicken breasts. Triple washed and trimmed of excess fat.'
  },
  {
    id: 'p7',
    sku: 'CK200044',
    name: 'ORGANIC CHICKEN DRUMSTICKS',
    category: 'Chicken',
    price: 3.99,
    originalPrice: 4.99,
    prepType: 'Bone-in',
    rating: 4.6,
    reviews: 33,
    points: 1,
    image: catChicken,
    badge: 'HOT DEAL',
    isHalal: true,
    inStock: true,
    description: 'Juicy organic chicken leg drumsticks. Perfect for curries, baking, or air-fryer marinades.'
  },
  {
    id: 'p8',
    sku: 'GT300015',
    name: 'ZABIHA GOAT CURRY CUT (BONE-IN)',
    category: 'Goat',
    price: 15.99,
    originalPrice: 18.99,
    prepType: 'Bone-in',
    rating: 5.0,
    reviews: 92,
    points: 2,
    image: catGoat,
    badge: 'SIGNATURE CUT',
    isHalal: true,
    inStock: true,
    description: 'Young tender goat meat cut into medium curry pieces. Hand-slaughtered Zabiha guaranteed.'
  },
  {
    id: 'p9',
    sku: 'GT300022',
    name: 'GOAT LEG BONELESS',
    category: 'Goat',
    price: 18.99,
    originalPrice: 21.99,
    prepType: 'Boneless',
    rating: 4.9,
    reviews: 47,
    points: 2,
    image: catGoat,
    badge: 'PREMIUM',
    isHalal: true,
    inStock: true,
    description: 'Lean boneless leg of goat meat. Excellent for biryanis, roasts, or custom grinding.'
  },
  {
    id: 'p10',
    sku: 'LM400008',
    name: 'FRENCH TRIMMED LAMB RACK',
    category: 'Lamb',
    price: 22.99,
    originalPrice: 26.99,
    prepType: 'Chops',
    rating: 5.0,
    reviews: 58,
    points: 2,
    image: catLamb,
    badge: 'CHEF CHOICE',
    isHalal: true,
    inStock: true,
    description: 'Exquisitely French trimmed rack of fresh Zabiha lamb. Tender, juicy, and rich in natural flavor.'
  },
  {
    id: 'p11',
    sku: 'LM400019',
    name: 'PREMIUM LAMB CHOPS',
    category: 'Lamb',
    price: 17.99,
    originalPrice: 20.99,
    prepType: 'Chops',
    rating: 4.8,
    reviews: 41,
    points: 2,
    image: catLamb,
    badge: 'POPULAR',
    isHalal: true,
    inStock: true,
    description: 'Freshly cut loin lamb chops, perfect for stovetop searing or charcoal grilling.'
  },
  {
    id: 'p12',
    sku: 'MB500005',
    name: 'SPICY CHICKEN TIKKA BOTI',
    category: 'Marinated BBQ',
    price: 9.99,
    originalPrice: 11.99,
    prepType: 'Marinated',
    rating: 4.9,
    reviews: 112,
    points: 1,
    image: catMarinated,
    badge: 'READY TO GRILL',
    isHalal: true,
    inStock: true,
    description: 'Boneless chicken cubes marinated in house tandoori spices, fresh yogurt, garlic, and lemon juice.'
  },
  {
    id: 'p13',
    sku: 'MB500014',
    name: 'BEEF SEEKH KEBABS (8 PCS)',
    category: 'Marinated BBQ',
    price: 13.99,
    originalPrice: 16.99,
    prepType: 'Marinated',
    rating: 5.0,
    reviews: 76,
    points: 1,
    image: catMarinated,
    badge: 'BUTCHER SPECIAL',
    isHalal: true,
    inStock: true,
    description: 'Pre-skewered seasoned beef seekh kebabs infused with papaya marinade, green chilies, and herbs.'
  },
  {
    id: 'p14',
    sku: 'SF600002',
    name: 'WILD SALMON FILLETS',
    category: 'Seafood & Others',
    price: 16.99,
    originalPrice: 19.99,
    prepType: 'Boneless',
    rating: 4.8,
    reviews: 25,
    points: 2,
    image: catSeafood,
    badge: 'FRESH CATCH',
    isHalal: true,
    inStock: true,
    description: 'Freshly cut skin-on wild caught Atlantic salmon fillets packed with Omega-3s.'
  },
  {
    id: 'p15',
    sku: 'SF600018',
    name: 'JUMBO WILD CAUGHT SHRIMP',
    category: 'Seafood & Others',
    price: 14.99,
    originalPrice: 17.99,
    prepType: 'Whole',
    rating: 4.9,
    reviews: 39,
    points: 1,
    image: catSeafood,
    badge: 'SEAFOOD',
    isHalal: true,
    inStock: true,
    description: 'De-veined raw jumbo shrimp. Ideal for spicy garlic stir-fries or BBQ seafood skewers.'
  },
  {
    id: 'p16',
    sku: 'GR700001',
    name: 'ROYAL AGED BASMATI RICE (10 LBS)',
    category: 'Grocery',
    price: 18.99,
    originalPrice: 22.99,
    prepType: 'Package',
    rating: 4.9,
    reviews: 89,
    points: 2,
    image: catGrocery,
    badge: 'PANTRY ESSENTIAL',
    isHalal: true,
    inStock: true,
    description: 'Extra long grain aged aromatic Basmati rice. The gold standard for authentic biryanis and pulao.'
  }
];

// Photographic Categories Showcase List (Guided by themeatgrindermarket.com)
const PHOTO_CATEGORIES = [
  { name: 'Beef', title: 'BEEF SELECTION', count: '29 Products', img: catBeef, badge: 'Prime & Choice' },
  { name: 'Chicken', title: 'HALAL CHICKEN', count: '32 Products', img: catChicken, badge: 'Organic Farm' },
  { name: 'Hand Cut Chicken', title: 'HAND CUT CHICKEN', count: '18 Products', img: catChicken, badge: '100% Zabiha' },
  { name: 'Goat', title: 'GOAT CUTS', count: '24 Products', img: catGoat, badge: 'Young & Tender' },
  { name: 'Lamb', title: 'LAMB CHOPS & RACKS', count: '22 Products', img: catLamb, badge: 'Fresh Cut' },
  { name: 'Marinated BBQ', title: 'MARINATED BBQ & KEBABS', count: '15 Products', img: catMarinated, badge: 'House Spices' },
  { name: 'Seafood & Others', title: 'SEAFOOD & FISH', count: '16 Products', img: catSeafood, badge: 'Fresh Catch' },
  { name: 'Grocery', title: 'GROCERY & PANTRY', count: 'Coming Soon', img: catGrocery, badge: 'Specialty Items' }
];

export default function App() {
  // State variables
  const [products] = useState(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cols-3');
  const [sortOption, setSortOption] = useState('default');
  const [priceMaxFilter, setPriceMaxFilter] = useState(30);
  const [selectedPreps, setSelectedPreps] = useState([]);
  const [onlyHalalFilter, setOnlyHalalFilter] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Dev & Owner Controls
  const [isDoordashPublic, setIsDoordashPublic] = useState(false); // Default hidden on public site, toggleable in Dev Portal
  const [doordashPromoCode, setDoordashPromoCode] = useState('HALAL5');

  // Cart & Modals
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [ownerDashboardOpen, setOwnerDashboardOpen] = useState(false);
  const [doordashModalOpen, setDoordashModalOpen] = useState(false);
  
  // User Profile
  const [userPoints, setUserPoints] = useState(120);

  // Checkout Form State
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    date: '2026-07-29',
    time: '12:00 PM - 2:00 PM',
    fulfillment: 'delivery',
    notes: ''
  });

  // Custom Prep Options
  const [customPrepOptions, setCustomPrepOptions] = useState({
    weight: '1 lb',
    cutStyle: 'Curry Cut (Medium)',
    fatTrim: 'Standard Trim',
    skinPref: 'Skinless',
    marinade: 'None (Fresh Raw)',
    notes: ''
  });

  // Category counts computation
  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    products.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesSku) return false;
      }
      if (p.price > priceMaxFilter) return false;
      if (selectedPreps.length > 0 && !selectedPreps.includes(p.prepType)) return false;
      if (onlyHalalFilter && !p.isHalal) return false;

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [products, activeCategory, searchQuery, priceMaxFilter, selectedPreps, onlyHalalFilter, sortOption]);

  // Cart Subtotal Calculation
  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cart]);

  const freeDeliveryThreshold = 99;
  const freeDeliveryRemaining = Math.max(0, freeDeliveryThreshold - cartSubtotal);
  const freeDeliveryPercent = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);

  // Cart Handlers
  const handleAddToCart = (product, customOpts = null) => {
    const itemWeight = customOpts ? customOpts.weight : '1 lb';
    const prepStyle = customOpts ? customOpts.cutStyle : 'Standard Butcher Cut';
    
    const cartItemId = `${product.id}-${itemWeight}-${prepStyle}`;
    const existingIndex = cart.findIndex(ci => ci.cartItemId === cartItemId);

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, {
        cartItemId,
        id: product.id,
        name: product.name,
        price: product.price,
        sku: product.sku,
        image: product.image,
        weight: itemWeight,
        prepStyle,
        customOpts: customOpts || { weight: '1 lb', cutStyle: 'Standard Butcher Cut' },
        quantity: 1
      }]);
    }
    setIsCartOpen(true);
    if (quickViewProduct) setQuickViewProduct(null);
  };

  const handleUpdateCartQty = (cartItemId, delta) => {
    const updated = cart.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    setCart(updated);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCart(cart.filter(ci => ci.cartItemId !== cartItemId));
  };

  const togglePrepFilter = (prep) => {
    if (selectedPreps.includes(prep)) {
      setSelectedPreps(selectedPreps.filter(p => p !== prep));
    } else {
      setSelectedPreps([...selectedPreps, prep]);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) return;
    setOrderComplete(true);
    setUserPoints(prev => prev + Math.floor(cartSubtotal));
    setCart([]);
  };

  return (
    <div className="site-wrapper">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="announcement-ticker">
            <span className="announcement-item">
              <ShieldCheck size={16} className="text-gold" />
              100% Hand-Slaughtered Zabiha Halal Guarantee
            </span>
            <span className="announcement-item" style={{ marginLeft: '1.5rem' }}>
              <Truck size={16} />
              Free Same-Day Express Delivery on orders over ${freeDeliveryThreshold}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} className="text-gold" /> 12920 W Parmer Ln #106, Cedar Park, TX
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} /> Open Daily: 9:00 AM - 9:00 PM
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={14} className="text-gold" /> (512) 260-7677
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVBAR */}
      <header className="site-header">
        <div className="container">
          <div className="header-main">
            {/* Brand Logo */}
            <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('All')}>
              <div className="logo-icon-wrap">
                <ShoppingBag size={24} />
              </div>
              <div className="logo-text-group">
                <h1>The Meat Grinder</h1>
                <span>Quality Halal Market</span>
              </div>
            </div>

            {/* Instant Search Bar */}
            <div className="header-search">
              <Search className="header-search-icon" size={18} />
              <input 
                type="text" 
                className="header-search-input" 
                placeholder="Search fresh cuts (e.g. Ribeye, Goat Curry, Chicken Breast)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Header Right Actions */}
            <div className="header-actions">
              {/* Optional DoorDash Badge when enabled by dev/owner */}
              {isDoordashPublic && (
                <button 
                  className="doordash-header-badge"
                  onClick={() => setDoordashModalOpen(true)}
                >
                  <Zap size={14} />
                  <span>DoorDash Delivery</span>
                </button>
              )}

              <div className="reward-badge-btn">
                <Award size={16} />
                <span>{userPoints} Pts</span>
              </div>

              {/* Dev / Owner Control Button */}
              <button 
                className="btn-filter-drawer"
                style={{ padding: '0.5.rem 0.9rem', fontSize: '0.82rem', borderColor: 'var(--gold-accent)', color: 'var(--gold-accent)' }}
                onClick={() => setOwnerDashboardOpen(true)}
              >
                <Settings size={14} />
                <span>Dev / Owner Portal</span>
              </button>

              <button className="cart-header-btn" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart size={20} />
                <span>Counter Cart</span>
                <span className="cart-badge-count">{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER SECTION */}
      <section className="hero-section">
        <img src={heroBanner} alt="The Meat Grinder Artisanal Counter" className="hero-bg-img" />
        <div className="container">
          <div className="hero-content-wrap">
            <div className="hero-badge-pill">
              <Sparkles size={14} /> Savor Every. Last. Bite.
            </div>
            <h2 className="hero-title">
              Your Premium Halal Meat Butcher Counter
            </h2>
            <p className="hero-subtitle">
              Sourcing the finest hand-slaughtered Zabiha goat, lamb, beef, chicken, and marinated BBQ botis. Custom cut and trimmed to order by certified master butchers.
            </p>
            <div className="hero-actions">
              <button className="btn-primary-green" onClick={() => {
                const el = document.getElementById('shop-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Shop Meat Counter</span>
                <ArrowRight size={18} />
              </button>

              {isDoordashPublic && (
                <button className="btn-doordash-red" onClick={() => setDoordashModalOpen(true)}>
                  <Zap size={18} />
                  <span>Order on DoorDash</span>
                </button>
              )}

              <button className="btn-outline-gold" onClick={() => {
                const el = document.getElementById('categories-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Explore Collections</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOORDASH SECTION (Shown publicly ONLY when enabled by Dev/Owner) */}
      {isDoordashPublic && (
        <section className="doordash-section">
          <div className="container">
            <div className="doordash-card-box">
              <div>
                <span className="doordash-badge-tag">
                  <Zap size={14} /> DoorDash On-Demand Delivery
                </span>
                <h2 className="doordash-title">
                  Fresh Zabiha Halal Cuts Delivered Via <span className="text-doordash">DoorDash</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Get custom butcher cuts, marinated BBQ botis, fresh chicken, and specialty halal groceries delivered directly to your home in 30-45 minutes.
                </p>

                <div className="doordash-features-list">
                  <div className="doordash-feature-item">
                    <div className="doordash-feature-icon">
                      <Truck size={18} />
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem' }}>Express 30-45 Min Delivery</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Packed in thermal insulation bags.</span>
                    </div>
                  </div>

                  <div className="doordash-feature-item">
                    <div className="doordash-feature-icon">
                      <PackageCheck size={18} />
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem' }}>DashPass $0 Delivery Fee</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Free delivery for DashPass members.</span>
                    </div>
                  </div>
                </div>

                <button className="btn-doordash-red" onClick={() => setDoordashModalOpen(true)}>
                  <span>Launch DoorDash Storefront</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="doordash-promo-code-box">
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255, 48, 8, 0.2)', color: 'var(--doordash-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Zap size={28} />
                </div>
                <h4 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.4rem' }}>First Order Promo</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Save $5 on your first $30+ DoorDash butcher order.
                </p>
                <div style={{ background: 'var(--bg-dark)', padding: '0.65rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gold-accent)', display: 'inline-block' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '0.15em', color: 'var(--gold-accent)' }}>PROMO: {doordashPromoCode}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PHOTOGRAPHIC CATEGORIES SHOWCASE GRID */}
      <section id="categories-section" className="categories-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Explore By Photo Collection</span>
            <h3 className="section-title-lg">Fresh Cut Meat Market</h3>
            <p className="section-desc">Select your desired cut category to filter our live butcher counter inventory.</p>
          </div>

          <div className="photo-categories-grid">
            {PHOTO_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className="photo-category-card"
                onClick={() => {
                  setActiveCategory(cat.name === 'Grocery' ? 'All' : cat.name);
                  const el = document.getElementById('shop-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <img src={cat.img} alt={cat.title} className="photo-category-img" />
                <div className="photo-category-overlay">
                  <span className="photo-category-badge">{cat.badge}</span>
                  <h4 className="photo-category-title">{cat.title}</h4>
                  <div className="photo-category-count">
                    <span>{cat.count}</span>
                    <div className="photo-category-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SHOP CATEGORY NAVIGATION RIBBON */}
      <section id="shop-section" className="shop-cat-ribbon-section">
        <div className="container">
          <div className="shop-cat-ribbon-wrap">
            <button 
              className={`shop-cat-pill ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <div className="shop-cat-icon-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-green)', border: '1.5px solid var(--gold-accent)' }}>
                <ShoppingBag size={16} color="var(--gold-accent)" />
              </div>
              <span>All Cuts</span>
              <span className="shop-cat-count-badge">{categoryCounts.All || 0}</span>
            </button>
            
            <button 
              className={`shop-cat-pill ${activeCategory === 'Beef' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Beef')}
            >
              <img src={catBeef} alt="Beef" className="shop-cat-icon-thumb" />
              <span>Beef</span>
              <span className="shop-cat-count-badge">{categoryCounts.Beef || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Chicken' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Chicken')}
            >
              <img src={catChicken} alt="Chicken" className="shop-cat-icon-thumb" />
              <span>Chicken</span>
              <span className="shop-cat-count-badge">{categoryCounts.Chicken || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Hand Cut Chicken' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Hand Cut Chicken')}
            >
              <img src={catChicken} alt="Hand Cut Chicken" className="shop-cat-icon-thumb" />
              <span>Hand Cut Chicken</span>
              <span className="shop-cat-count-badge">{categoryCounts['Hand Cut Chicken'] || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Goat' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Goat')}
            >
              <img src={catGoat} alt="Goat" className="shop-cat-icon-thumb" />
              <span>Goat</span>
              <span className="shop-cat-count-badge">{categoryCounts.Goat || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Lamb' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Lamb')}
            >
              <img src={catLamb} alt="Lamb" className="shop-cat-icon-thumb" />
              <span>Lamb</span>
              <span className="shop-cat-count-badge">{categoryCounts.Lamb || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Marinated BBQ' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Marinated BBQ')}
            >
              <img src={catMarinated} alt="Marinated BBQ" className="shop-cat-icon-thumb" />
              <span>Marinated BBQ</span>
              <span className="shop-cat-count-badge">{categoryCounts['Marinated BBQ'] || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Seafood & Others' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Seafood & Others')}
            >
              <img src={catSeafood} alt="Seafood & Others" className="shop-cat-icon-thumb" />
              <span>Seafood & Others</span>
              <span className="shop-cat-count-badge">{categoryCounts['Seafood & Others'] || 0}</span>
            </button>

            <button 
              className={`shop-cat-pill ${activeCategory === 'Grocery' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Grocery')}
            >
              <img src={catGrocery} alt="Grocery" className="shop-cat-icon-thumb" />
              <span>Grocery & Pantry</span>
              <span className="shop-cat-count-badge">{categoryCounts.Grocery || 0}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. SHOP CONTROL TOOLBAR */}
      <section className="shop-toolbar-section">
        <div className="container">
          <div className="shop-toolbar-bar">
            <div className="shop-toolbar-left">
              <button className="btn-filter-drawer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Sliders size={16} />
                <span>{isSidebarOpen ? 'Hide Filters' : 'Filter Products'}</span>
              </button>
              <span className="results-count-text">
                Showing {filteredProducts.length} of {products.length} cuts
              </span>
            </div>

            <div className="shop-toolbar-right">
              <div className="view-switcher-group">
                <button 
                  className={`view-btn ${viewMode === 'cols-4' ? 'active' : ''}`}
                  onClick={() => setViewMode('cols-4')}
                  title="4 Columns Grid"
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'cols-3' ? 'active' : ''}`}
                  onClick={() => setViewMode('cols-3')}
                  title="3 Columns Grid"
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'cols-2' ? 'active' : ''}`}
                  onClick={() => setViewMode('cols-2')}
                  title="2 Columns Grid"
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list-view' ? 'active' : ''}`}
                  onClick={() => setViewMode('list-view')}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>

              <select 
                className="shop-select-box"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
                <option value="rating">Sort by average rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SHOP MAIN LAYOUT */}
      <main className="container">
        <div className={`shop-main-layout ${!isSidebarOpen ? 'no-sidebar' : ''}`}>
          {/* Left Sidebar Filter Drawer */}
          {isSidebarOpen && (
            <aside className="shop-sidebar">
              <div className="filter-widget">
                <h4 className="widget-title">
                  <span>Filter by Price</span>
                  <Filter size={16} />
                </h4>
                <div className="price-range-inputs">
                  <div className="price-input-wrap">
                    <span>Max Price</span>
                    <input 
                      type="number" 
                      className="price-num-input" 
                      value={priceMaxFilter}
                      onChange={(e) => setPriceMaxFilter(Number(e.target.value))}
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  className="price-slider-bar" 
                  min="5" 
                  max="35" 
                  value={priceMaxFilter}
                  onChange={(e) => setPriceMaxFilter(Number(e.target.value))}
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.4rem' }}>
                  Showing cuts up to ${priceMaxFilter}.00 / lb
                </span>
              </div>

              <div className="filter-widget">
                <h4 className="widget-title">Butcher Prep Style</h4>
                <div className="filter-checkbox-list">
                  {['Steaks', 'Boneless', 'Bone-in', 'Minced', 'Chops', 'Whole', 'Marinated'].map((prep, idx) => (
                    <label key={idx} className="filter-checkbox-label">
                      <span>
                        <input 
                          type="checkbox" 
                          checked={selectedPreps.includes(prep)}
                          onChange={() => togglePrepFilter(prep)}
                        />
                        {prep}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-widget">
                <h4 className="widget-title">Halal Certification</h4>
                <label className="filter-checkbox-label">
                  <span>
                    <input 
                      type="checkbox" 
                      checked={onlyHalalFilter}
                      onChange={(e) => setOnlyHalalFilter(e.target.checked)}
                    />
                    100% Hand-Slaughtered
                  </span>
                  <CheckCircle2 size={16} className="text-gold" />
                </label>
              </div>

              <button 
                className="btn-outline-gold" 
                style={{ width: '100%', justifyContent: 'center', padding: '0.6rem' }}
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                  setPriceMaxFilter(35);
                  setSelectedPreps([]);
                  setOnlyHalalFilter(false);
                }}
              >
                <RefreshCw size={14} />
                <span>Clear All Filters</span>
              </button>
            </aside>
          )}

          {/* Product Cards Grid */}
          <section className="shop-products-column">
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)' }}>
                <Search size={48} className="text-muted" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <h3>No meat cuts found matching your filter</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Try clearing your search term or adjusting your price slider.</p>
              </div>
            ) : (
              <div className={`products-grid-container ${viewMode}`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-img-wrapper">
                      <img src={product.image} alt={product.name} className="product-card-img" />
                      <div className="card-badges-stack">
                        <span className="badge-halal">ZABIHA HALAL</span>
                        {product.badge && <span className="badge-sale">{product.badge}</span>}
                      </div>

                      <div className="quick-actions-bar">
                        <button 
                          className="action-icon-btn" 
                          title="Quick View"
                          onClick={() => setQuickViewProduct(product)}
                        >
                          <Eye size={16} />
                        </button>
                        <button className="action-icon-btn" title="Add to Wishlist">
                          <Heart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="product-card-body">
                      <span className="product-sku-tag">SKU: {product.sku}</span>
                      <h3 className="product-title">{product.name}</h3>

                      <div className="rating-stars-wrap">
                        <div className="stars-group">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="var(--gold-accent)" stroke="none" />
                          ))}
                        </div>
                        <span className="rating-count">({product.reviews})</span>
                      </div>

                      <div className="product-pricing-wrap">
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="old-price">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>/ lb</span>
                      </div>

                      <div className="loyalty-earn-pill">
                        <Award size={14} />
                        <span>Purchase & earn {product.points} peso point!</span>
                      </div>

                      <div className="card-bottom-controls">
                        <button 
                          className="btn-add-cart-card"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart size={16} />
                          <span>Add to Cart</span>
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

      {/* 9. DOORDASH MODAL DIALOG */}
      {doordashModalOpen && (
        <div className="modal-overlay" onClick={() => setDoordashModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setDoordashModalOpen(false)}>
              <X size={20} />
            </button>
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 48, 8, 0.15)', color: 'var(--doordash-red)', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 1.25rem auto' }}>
                <Zap size={36} />
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>DoorDash Marketplace</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                Storefront integration ready for DoorDash launch. Promo code <strong style={{ color: 'var(--gold-accent)' }}>{doordashPromoCode}</strong> is configured.
              </p>
              
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--doordash-red)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#ffffff' }}>Store Status:</strong>
                  <span style={{ color: '#4ade80', fontWeight: '700' }}>🟢 Configured & Ready</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#ffffff' }}>Estimated Prep Time:</strong>
                  <span style={{ color: 'var(--text-light)' }}>15 - 20 mins</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ color: '#ffffff' }}>DoorDash Pass:</strong>
                  <span style={{ color: 'var(--gold-accent)', fontWeight: '700' }}>$0 Delivery Fee Eligible</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button 
                  className="btn-doordash-red" 
                  style={{ padding: '0.85rem 2rem' }}
                  onClick={() => alert("DoorDash Storefront preview simulation active.")}
                >
                  <span>DoorDash Storefront Preview</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuickViewProduct(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.name} 
                  style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} 
                />
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ color: 'var(--gold-accent)', fontSize: '0.85rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={16} /> 100% Hand-Slaughtered Zabiha Certified
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    {quickViewProduct.description}
                  </p>
                </div>
              </div>

              <div>
                <span className="product-sku-tag">SKU: {quickViewProduct.sku}</span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{quickViewProduct.name}</h2>
                
                <div className="product-pricing-wrap" style={{ marginBottom: '1.5rem' }}>
                  <span className="current-price" style={{ fontSize: '1.6rem' }}>${quickViewProduct.price.toFixed(2)}</span>
                  {quickViewProduct.originalPrice && (
                    <span className="old-price" style={{ fontSize: '1.1rem' }}>${quickViewProduct.originalPrice.toFixed(2)}</span>
                  )}
                  <span style={{ color: 'var(--text-muted)' }}>/ lb</span>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>Select Quantity / Weight</label>
                  <select 
                    className="shop-select-box" 
                    style={{ width: '100%' }}
                    value={customPrepOptions.weight}
                    onChange={(e) => setCustomPrepOptions({ ...customPrepOptions, weight: e.target.value })}
                  >
                    <option value="1 lb">1 lb (Standard Pack)</option>
                    <option value="2 lbs">2 lbs (Family Size)</option>
                    <option value="5 lbs">5 lbs (Bulk Butchery Pack)</option>
                    <option value="10 lbs">10 lbs (Wholesale Pack)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>Custom Cut Style</label>
                  <select 
                    className="shop-select-box" 
                    style={{ width: '100%' }}
                    value={customPrepOptions.cutStyle}
                    onChange={(e) => setCustomPrepOptions({ ...customPrepOptions, cutStyle: e.target.value })}
                  >
                    <option value="Curry Cut (Medium)">Curry Cut (Medium Pieces)</option>
                    <option value="Biryani Cut (Small)">Biryani Cut (Small Bites)</option>
                    <option value="Roast Cut (Large)">Roast Cut (Large Primal)</option>
                    <option value="Thin Sliced">Thin Sliced / Steak Cut</option>
                    <option value="Whole Uncut">Whole Uncut</option>
                  </select>
                </div>

                <button 
                  className="btn-primary-green" 
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                  onClick={() => handleAddToCart(quickViewProduct, customPrepOptions)}
                >
                  <ShoppingCart size={20} />
                  <span>Add to Counter Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 11. SIDE CART DRAWER */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3 className="cart-drawer-title">Your Counter Cart</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ color: 'var(--text-white)' }}>
                <X size={22} />
              </button>
            </div>

            <div className="free-shipping-bar-wrap">
              <div className="free-shipping-text">
                <span>
                  {freeDeliveryRemaining > 0 
                    ? `Add $${freeDeliveryRemaining.toFixed(2)} more for FREE Express Delivery!` 
                    : '🎉 Congratulations! You unlocked FREE Express Delivery!'}
                </span>
                <span>{Math.round(freeDeliveryPercent)}%</span>
              </div>
              <div className="free-shipping-progress-track">
                <div className="free-shipping-progress-fill" style={{ width: `${freeDeliveryPercent}%` }}></div>
              </div>
            </div>

            <div className="cart-drawer-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <p>Your counter cart is empty. Explore our fresh cuts to add items!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartItemId} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-prep-text">{item.weight} • {item.prepStyle}</p>
                      <div className="cart-item-price-qty">
                        <span className="current-price" style={{ fontSize: '1rem' }}>${(item.price * item.quantity).toFixed(2)}</span>
                        <div className="cart-qty-counter">
                          <button className="qty-btn" onClick={() => handleUpdateCartQty(item.cartItemId, -1)}>-</button>
                          <span className="qty-num">{item.quantity}</span>
                          <button className="qty-btn" onClick={() => handleUpdateCartQty(item.cartItemId, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveFromCart(item.cartItemId)}
                      style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-line">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary-line">
                  <span>Estimated Delivery</span>
                  <span>{cartSubtotal >= freeDeliveryThreshold ? 'FREE' : '$9.99'}</span>
                </div>
                <div className="cart-summary-line total">
                  <span>Total</span>
                  <span className="text-green">${(cartSubtotal + (cartSubtotal >= freeDeliveryThreshold ? 0 : 9.99)).toFixed(2)}</span>
                </div>

                <button 
                  className="btn-primary-green" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem', padding: '1rem' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutModalOpen(true);
                  }}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 12. CHECKOUT MODAL */}
      {checkoutModalOpen && (
        <div className="modal-overlay" onClick={() => setCheckoutModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setCheckoutModalOpen(false)}>
              <X size={20} />
            </button>

            {!orderComplete ? (
              <form onSubmit={handlePlaceOrder}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Checkout & Delivery Details</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.3rem' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="header-search-input" 
                      style={{ paddingLeft: '1rem' }}
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.3rem' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      className="header-search-input" 
                      style={{ paddingLeft: '1rem' }}
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.3rem' }}>Delivery Address *</label>
                  <input 
                    type="text" 
                    required 
                    className="header-search-input" 
                    style={{ paddingLeft: '1rem' }}
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary-green" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', padding: '1rem' }}
                >
                  <span>Confirm Counter Order</span>
                  <Check size={20} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={64} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h2>Order Confirmed!</h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Thank you, {customerInfo.name}! Your order has been placed and assigned to our master butcher counter.
                </p>
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginTop: '1.5rem', textAlign: 'left' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Receipt Summary</h4>
                  <p style={{ fontSize: '0.88rem' }}><strong>Order ID:</strong> #MG-{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p style={{ fontSize: '0.88rem' }}><strong>Fulfillment:</strong> Same-Day Express Delivery ({customerInfo.address})</p>
                  <p style={{ fontSize: '0.88rem' }}><strong>Reward Points Earned:</strong> +{Math.floor(cartSubtotal)} pts</p>
                </div>
                <button 
                  className="btn-outline-gold" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setOrderComplete(false);
                  }}
                >
                  Return to Market
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 13. DEV / OWNER CONTROL PORTAL MODAL */}
      {ownerDashboardOpen && (
        <div className="modal-overlay" onClick={() => setOwnerDashboardOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setOwnerDashboardOpen(false)}>
              <X size={20} />
            </button>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Dev / Owner Control Portal</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Internal stage controls to test integrations and toggle public customer features.
            </p>

            {/* DoorDash Dev Control Section */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--doordash-red)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={18} className="text-doordash" /> DoorDash Integration Stage
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Toggle this switch ON when ready to launch DoorDash publicly on customer storefront.
                  </p>
                </div>

                <button 
                  style={{ 
                    background: isDoordashPublic ? 'var(--doordash-red)' : '#334155',
                    color: '#ffffff',
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isDoordashPublic ? 'var(--shadow-doordash)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsDoordashPublic(!isDoordashPublic)}
                >
                  {isDoordashPublic ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                  <span>{isDoordashPublic ? 'Publicly Live (ON)' : 'Dev Preview (OFF)'}</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>DoorDash Promo Code</label>
                  <input 
                    type="text" 
                    className="price-num-input" 
                    value={doordashPromoCode} 
                    onChange={(e) => setDoordashPromoCode(e.target.value.toUpperCase())}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Dev Preview Action</label>
                  <button 
                    className="btn-doordash-red" 
                    style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center' }}
                    onClick={() => {
                      setOwnerDashboardOpen(false);
                      setDoordashModalOpen(true);
                    }}
                  >
                    <span>Test DoorDash Dialog</span>
                  </button>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <p style={{ color: 'var(--gold-accent)', fontWeight: '700' }}>✓ Counter POS Systems Synchronized & Healthy</p>
            </div>
          </div>
        </div>
      )}

      {/* 14. FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="brand-logo" style={{ marginBottom: '1rem' }}>
                <div className="logo-icon-wrap">
                  <ShoppingBag size={20} />
                </div>
                <div className="logo-text-group">
                  <h1>The Meat Grinder</h1>
                  <span>Quality Halal Market</span>
                </div>
              </div>
              <p>Your premier source for 100% hand-slaughtered Zabiha halal goat, lamb, beef, chicken, and artisan marinated BBQ.</p>
            </div>
            
            <div className="footer-col">
              <h4>Meat Categories</h4>
              <ul>
                <li><a href="#shop-section" onClick={() => setActiveCategory('Beef')}>Prime Beef</a></li>
                <li><a href="#shop-section" onClick={() => setActiveCategory('Chicken')}>Halal Chicken</a></li>
                <li><a href="#shop-section" onClick={() => setActiveCategory('Goat')}>Young Goat</a></li>
                <li><a href="#shop-section" onClick={() => setActiveCategory('Lamb')}>Fresh Lamb</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Store Location & Support</h4>
              <ul>
                <li><span style={{ color: 'var(--gold-accent)', fontWeight: '700' }}>📞 Phone: (512) 260-7677</span></li>
                <li><span>📍 12920 W Parmer Ln #106</span></li>
                <li><span>Cedar Park, TX 78613</span></li>
                <li><span>🕒 Open Daily: 9:00 AM - 9:00 PM</span></li>
                <li><a href="#dev" onClick={() => setOwnerDashboardOpen(true)} style={{ color: 'var(--text-muted)' }}>Dev / Owner Portal</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quality Guarantee</h4>
              <p>Certified 100% Hand-Slaughtered Zabiha Halal. Freshly butchered daily on dark granite and wood blocks.</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} The Meat Grinder & Quality Halal Market. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <ShieldCheck size={18} className="text-gold" />
              <span>100% Zabiha Guarantee</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
