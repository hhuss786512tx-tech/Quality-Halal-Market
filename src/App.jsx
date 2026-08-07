import React, { useState, useMemo } from 'react';
import { 
  Phone, Menu, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, Mail, ShoppingCart, Trash2, Check,
  Truck, Sliders, Search, Star, Heart,
  Eye, RefreshCw, Grid, List, Sparkles, CheckCircle2, Award,
  ChevronDown, Filter, ShoppingBag, Store,
  Beef, Milk, Wheat, Package
} from 'lucide-react';

// Imported Assets — Meat Counter
import heroBanner from './assets/hero_banner.jpg';
import catBeef from './assets/cat_beef.jpg';
import catChicken from './assets/cat_chicken.jpg';
import catGoat from './assets/cat_goat.jpg';
import catLamb from './assets/cat_lamb.jpg';
import catMarinated from './assets/cat_marinated.jpg';
import catSeafood from './assets/cat_seafood.jpg';
import catGrocery from './assets/cat_grocery.jpg';

// === MEAT COUNTER PRODUCTS ===
const MEAT_PRODUCTS = [
  {
    id: 'p1', sku: 'BK100051', name: 'BEEF BREAKFAST STEAK', category: 'Beef',
    price: 10.99, originalPrice: 13.99, prepType: 'Steaks',
    rating: 4.9, reviews: 38, image: catBeef, badge: 'FRESH CUT',
    isHalal: true, inStock: true,
    description: 'Thinly sliced premium beef rib steak, ideal for quick breakfast searing or sizzling steak sandwiches.'
  },
  {
    id: 'p2', sku: 'BK100034', name: 'BEEF BRISKET BONELESS', category: 'Beef',
    price: 12.99, originalPrice: 15.99, prepType: 'Boneless',
    rating: 4.8, reviews: 42, image: catBeef, badge: '100% ZABIHA',
    isHalal: true, inStock: true,
    description: 'Choice boneless beef brisket with rich fat cap layering. Perfect for low & slow Texas BBQ smoking.'
  },
  {
    id: 'p3', sku: 'BK100088', name: 'PRIME BEEF RIBEYE STEAK', category: 'Beef',
    price: 18.99, originalPrice: 22.99, prepType: 'Steaks',
    rating: 5.0, reviews: 54, image: catBeef, badge: 'BEST SELLER',
    isHalal: true, inStock: true,
    description: 'Hand-selected thick ribeye with intense marbling. Cut fresh daily by our master butcher.'
  },
  {
    id: 'p4', sku: 'BK100012', name: 'HALAL GROUND BEEF LEAN (85/15)', category: 'Beef',
    price: 7.99, originalPrice: 9.99, prepType: 'Minced',
    rating: 4.7, reviews: 29, image: catBeef, badge: 'DAILY FRESH',
    isHalal: true, inStock: true,
    description: 'Freshly ground beef from prime cuts with 85% lean ratio. Ground in-house daily.'
  },
  {
    id: 'p5', sku: 'CK200010', name: 'HAND CUT CHICKEN (WHOLE)', category: 'Hand Cut Chicken',
    price: 3.99, originalPrice: 4.99, prepType: 'Whole',
    rating: 4.9, reviews: 64, image: catChicken, badge: '100% HAND-CUT',
    isHalal: true, inStock: true,
    description: '100% Hand-slaughtered Zabiha whole chicken. Cleaned and prepared skin-on or skinless upon request.'
  },
  {
    id: 'p6', sku: 'CK200025', name: 'BONELESS CHICKEN BREAST', category: 'Chicken',
    price: 5.99, originalPrice: 7.49, prepType: 'Boneless',
    rating: 4.9, reviews: 81, image: catChicken, badge: 'TOP RATED',
    isHalal: true, inStock: true,
    description: 'Tender, skinless, boneless chicken breasts. Triple washed and trimmed of excess fat.'
  },
  {
    id: 'p7', sku: 'CK200044', name: 'ORGANIC CHICKEN DRUMSTICKS', category: 'Chicken',
    price: 3.49, originalPrice: 4.49, prepType: 'Bone-in',
    rating: 4.6, reviews: 33, image: catChicken, badge: 'HOT DEAL',
    isHalal: true, inStock: true,
    description: 'Juicy organic chicken leg drumsticks. Perfect for curries, baking, or air-fryer marinades.'
  },
  {
    id: 'p8', sku: 'GT300015', name: 'ZABIHA GOAT CURRY CUT (BONE-IN)', category: 'Goat',
    price: 13.99, originalPrice: 16.99, prepType: 'Bone-in',
    rating: 5.0, reviews: 92, image: catGoat, badge: 'SIGNATURE CUT',
    isHalal: true, inStock: true,
    description: 'Young tender goat meat cut into medium curry pieces. Hand-slaughtered Zabiha guaranteed.'
  },
  {
    id: 'p9', sku: 'GT300022', name: 'GOAT LEG BONELESS', category: 'Goat',
    price: 16.99, originalPrice: 19.99, prepType: 'Boneless',
    rating: 4.9, reviews: 47, image: catGoat, badge: 'PREMIUM',
    isHalal: true, inStock: true,
    description: 'Lean boneless leg of goat meat. Excellent for biryanis, roasts, or custom grinding.'
  },
  {
    id: 'p10', sku: 'LM400008', name: 'FRENCH TRIMMED LAMB RACK', category: 'Lamb',
    price: 20.99, originalPrice: 24.99, prepType: 'Chops',
    rating: 5.0, reviews: 58, image: catLamb, badge: 'CHEF CHOICE',
    isHalal: true, inStock: true,
    description: 'Exquisitely French trimmed rack of fresh Zabiha lamb. Tender, juicy, and rich in natural flavor.'
  },
  {
    id: 'p11', sku: 'LM400019', name: 'PREMIUM LAMB CHOPS', category: 'Lamb',
    price: 15.99, originalPrice: 18.99, prepType: 'Chops',
    rating: 4.8, reviews: 41, image: catLamb, badge: 'POPULAR',
    isHalal: true, inStock: true,
    description: 'Freshly cut loin lamb chops, perfect for stovetop searing or charcoal grilling.'
  },
  {
    id: 'p12', sku: 'MB500005', name: 'SPICY CHICKEN TIKKA BOTI', category: 'Marinated BBQ',
    price: 8.99, originalPrice: 10.99, prepType: 'Marinated',
    rating: 4.9, reviews: 112, image: catMarinated, badge: 'READY TO GRILL',
    isHalal: true, inStock: true,
    description: 'Boneless chicken cubes marinated in house tandoori spices, fresh yogurt, garlic, and lemon juice.'
  },
  {
    id: 'p13', sku: 'MB500014', name: 'BEEF SEEKH KEBABS (8 PCS)', category: 'Marinated BBQ',
    price: 11.99, originalPrice: 14.99, prepType: 'Marinated',
    rating: 5.0, reviews: 76, image: catMarinated, badge: 'BUTCHER SPECIAL',
    isHalal: true, inStock: true,
    description: 'Pre-skewered seasoned beef seekh kebabs infused with papaya marinade, green chilies, and herbs.'
  },
  {
    id: 'p14', sku: 'SF600002', name: 'WILD SALMON FILLETS', category: 'Seafood & Others',
    price: 14.99, originalPrice: 17.99, prepType: 'Boneless',
    rating: 4.8, reviews: 25, image: catSeafood, badge: 'FRESH CATCH',
    isHalal: true, inStock: true,
    description: 'Freshly cut skin-on wild caught Atlantic salmon fillets packed with Omega-3s.'
  },
  {
    id: 'p15', sku: 'SF600018', name: 'JUMBO WILD CAUGHT SHRIMP', category: 'Seafood & Others',
    price: 12.99, originalPrice: 15.99, prepType: 'Whole',
    rating: 4.9, reviews: 39, image: catSeafood, badge: 'SEAFOOD',
    isHalal: true, inStock: true,
    description: 'De-veined raw jumbo shrimp. Ideal for spicy garlic stir-fries or BBQ seafood skewers.'
  }
];

// === GROCERY PRODUCTS ===
const GROCERY_PRODUCTS = [
  {
    id: 'g1', sku: 'GR700001', name: 'ROYAL AGED BASMATI RICE (10 LBS)', category: 'Grocery',
    price: 18.99, originalPrice: 22.99, prepType: 'Package',
    rating: 4.9, reviews: 89, image: catGrocery, badge: 'PANTRY ESSENTIAL',
    isHalal: true, inStock: true,
    description: 'Extra long grain aged aromatic Basmati rice. The gold standard for authentic biryanis and pulao.'
  },
  {
    id: 'g2', sku: 'GR700005', name: 'CHAKKI FRESH ATTA (20 LBS)', category: 'Grocery',
    price: 14.99, originalPrice: 17.99, prepType: 'Package',
    rating: 4.8, reviews: 56, image: catGrocery, badge: 'FRESH STOCK',
    isHalal: true, inStock: true,
    description: 'Stone-ground whole wheat flour for soft, authentic roti and paratha. Imported from India.'
  },
  {
    id: 'g3', sku: 'GR700012', name: 'SHAN MASALA VARIETY PACK (6 BOXES)', category: 'Grocery',
    price: 8.99, originalPrice: 11.99, prepType: 'Package',
    rating: 5.0, reviews: 144, image: catGrocery, badge: 'BEST SELLER',
    isHalal: true, inStock: true,
    description: 'Assorted Shan spice mixes — Biryani, Tikka, Nihari, Korma, Karahi, and Chapli Kebab.'
  },
  {
    id: 'g4', sku: 'GR700018', name: 'FRESH PANEER BLOCK (14 OZ)', category: 'Grocery',
    price: 7.99, originalPrice: 9.49, prepType: 'Package',
    rating: 4.7, reviews: 63, image: catGrocery, badge: 'DAIRY FRESH',
    isHalal: true, inStock: true,
    description: 'Soft, fresh Indian-style paneer cheese. Perfect for palak paneer, tikka masala, or grilled skewers.'
  },
  {
    id: 'g5', sku: 'GR700022', name: 'MANGO PULP (ALPHONSO) 30 OZ', category: 'Grocery',
    price: 5.99, originalPrice: 7.49, prepType: 'Package',
    rating: 4.9, reviews: 78, image: catGrocery, badge: 'IMPORTED',
    isHalal: true, inStock: true,
    description: 'Sweet Alphonso mango pulp from India. Makes incredible lassi, smoothies, and mango ice cream.'
  },
  {
    id: 'g6', sku: 'GR700028', name: 'GULAB JAMUN PRE-MIX (1 KG)', category: 'Grocery',
    price: 6.49, originalPrice: 7.99, prepType: 'Package',
    rating: 4.8, reviews: 41, image: catGrocery, badge: 'SWEETS',
    isHalal: true, inStock: true,
    description: 'Ready-to-make gulab jamun mix. Soft, spongy milk-solid dumplings in rose-scented syrup.'
  },
  {
    id: 'g7', sku: 'GR700031', name: 'LAILA BASMATI RICE (20 LBS)', category: 'Grocery',
    price: 24.99, originalPrice: 29.99, prepType: 'Package',
    rating: 4.9, reviews: 112, image: catGrocery, badge: 'FAMILY SIZE',
    isHalal: true, inStock: true,
    description: 'Premium Pakistani Basmati. Extra-long grain, aged to perfection for fluffy, separate grains every time.'
  },
  {
    id: 'g8', sku: 'GR700040', name: 'DESI GHEE (PURE BUTTER) 2 LBS', category: 'Grocery',
    price: 16.99, originalPrice: 19.99, prepType: 'Package',
    rating: 5.0, reviews: 87, image: catGrocery, badge: 'PREMIUM',
    isHalal: true, inStock: true,
    description: 'Pure clarified butter ghee made from grass-fed cows. Rich, nutty flavor for authentic desi cooking.'
  },
  {
    id: 'g9', sku: 'GR700044', name: 'ROOH AFZA SYRUP (800 ML)', category: 'Grocery',
    price: 7.99, originalPrice: 9.99, prepType: 'Package',
    rating: 4.9, reviews: 196, image: catGrocery, badge: 'RAMADAN FAV',
    isHalal: true, inStock: true,
    description: 'Classic rose-flavored summer drink syrup. Mix with cold milk or water for the perfect iftar refreshment.'
  },
  {
    id: 'g10', sku: 'GR700049', name: 'MEDJOOL DATES (PREMIUM) 2 LBS', category: 'Grocery',
    price: 12.99, originalPrice: 15.99, prepType: 'Package',
    rating: 5.0, reviews: 203, image: catGrocery, badge: 'TOP SELLER',
    isHalal: true, inStock: true,
    description: 'Large, soft, caramel-like Medjool dates. Naturally sweet, fiber-rich, and perfect for breaking fast.'
  },
  {
    id: 'g11', sku: 'GR700053', name: 'TEA INDIA CTC ASSAM (2 LBS)', category: 'Grocery',
    price: 9.99, originalPrice: 12.99, prepType: 'Package',
    rating: 4.7, reviews: 55, image: catGrocery, badge: 'DAIRY AISLE',
    isHalal: true, inStock: true,
    description: 'Strong, malty Assam CTC tea granules. The authentic base for rich, creamy masala chai.'
  },
  {
    id: 'g12', sku: 'GR700058', name: 'PARATHA FROZEN (MALABARI) 10 PCS', category: 'Grocery',
    price: 8.49, originalPrice: 10.49, prepType: 'Package',
    rating: 4.6, reviews: 34, image: catGrocery, badge: 'FROZEN',
    isHalal: true, inStock: true,
    description: 'Flaky, layered Malabari-style frozen parathas. Heat on tawa for 2 minutes — ready to eat.'
  }
];

// Combine all products
const ALL_PRODUCTS = [...MEAT_PRODUCTS, ...GROCERY_PRODUCTS];

// Category photo showcase
const PHOTO_CATEGORIES = [
  { name: 'Beef', title: 'BEEF SELECTION', count: '4 Products', img: catBeef, badge: 'Prime & Choice' },
  { name: 'Chicken', title: 'HALAL CHICKEN', count: '3 Products', img: catChicken, badge: 'Organic Farm' },
  { name: 'Goat', title: 'GOAT CUTS', count: '2 Products', img: catGoat, badge: 'Young & Tender' },
  { name: 'Lamb', title: 'LAMB CHOPS & RACKS', count: '2 Products', img: catLamb, badge: 'Fresh Cut' },
  { name: 'Marinated BBQ', title: 'MARINATED BBQ', count: '2 Products', img: catMarinated, badge: 'House Spices' },
  { name: 'Seafood & Others', title: 'SEAFOOD', count: '2 Products', img: catSeafood, badge: 'Fresh Catch' },
  { name: 'Grocery', title: 'GROCERY & PANTRY', count: '12 Products', img: catGrocery, badge: 'Specialty Items' }
];

// Meat categories for the ribbon nav
const MEAT_CATEGORIES = ['All', 'Beef', 'Chicken', 'Hand Cut Chicken', 'Goat', 'Lamb', 'Marinated BBQ', 'Seafood & Others'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cols-3');
  const [sortOption, setSortOption] = useState('default');
  const [priceMaxFilter, setPriceMaxFilter] = useState(35);
  const [selectedPreps, setSelectedPreps] = useState([]);
  const [onlyHalalFilter, setOnlyHalalFilter] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('meat'); // 'meat' | 'grocery'
  
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [userPoints] = useState(120);

  const [customPrepOptions, setCustomPrepOptions] = useState({
    weight: '1 lb',
    cutStyle: 'Curry Cut (Medium)',
    fatTrim: 'Standard Trim',
    skinPref: 'Skinless',
    marinade: 'None (Fresh Raw)',
    notes: ''
  });

  // Determine which products to show based on active tab
  const displayProducts = useMemo(() => {
    if (activeTab === 'grocery') return GROCERY_PRODUCTS;
    return MEAT_PRODUCTS;
  }, [activeTab]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: MEAT_PRODUCTS.length };
    MEAT_PRODUCTS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let source = activeTab === 'grocery' ? GROCERY_PRODUCTS : MEAT_PRODUCTS;
    return source.filter(p => {
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
  }, [activeTab, activeCategory, searchQuery, priceMaxFilter, selectedPreps, onlyHalalFilter, sortOption]);

  // Cart Subtotal
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

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
    setActiveCategory('All');
    setSearchQuery('');
    setPriceMaxFilter(tab === 'grocery' ? 35 : 35);
    setSelectedPreps([]);
  };

  return (
    <div className="site-wrapper">
      {/* TOP ANNOUNCEMENT BAR */}
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

      {/* MAIN HEADER & NAVBAR */}
      <header className="site-header">
        <div className="container">
          <div className="header-main">
            <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => { setActiveCategory('All'); handleSwitchTab('meat'); }}>
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
              <input 
                type="text" 
                className="header-search-input" 
                placeholder="Search fresh cuts & groceries..." 
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

          {/* Meat vs Grocery Tab Switcher */}
          <div className="dept-tab-switcher">
            <button 
              className={`dept-tab ${activeTab === 'meat' ? 'active' : ''}`}
              onClick={() => handleSwitchTab('meat')}
            >
              <Beef size={18} />
              <span>Fresh Meat Counter</span>
            </button>
            <button 
              className={`dept-tab ${activeTab === 'grocery' ? 'active' : ''}`}
              onClick={() => handleSwitchTab('grocery')}
            >
              <Store size={18} />
              <span>Grocery & Pantry</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="hero-section">
        <img src={heroBanner} alt="Quality Halal Market Artisanal Counter" className="hero-bg-img" />
        <div className="container">
          <div className="hero-content-wrap">
            <div className="hero-badge-pill">
              <Sparkles size={14} /> Savor Every. Last. Bite.
            </div>
            <h2 className="hero-title">
              {activeTab === 'meat' ? 'Your Premium Halal Meat Butcher Counter' : 'Indian • Pakistani • Mediterranean Groceries'}
            </h2>
            <p className="hero-subtitle">
              {activeTab === 'meat' 
                ? 'Sourcing the finest hand-slaughtered Zabiha goat, lamb, beef, and chicken. Custom cut and trimmed to order by certified master butchers.'
                : 'Fresh spices, basmati rice, frozen foods, dairy, sweets, and specialty groceries from South Asia and the Middle East — right here in Cedar Park.'}
            </p>
            <div className="hero-actions">
              <button className="btn-primary-green" onClick={() => {
                const el = document.getElementById('shop-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>{activeTab === 'meat' ? 'Shop Meat Counter' : 'Browse Groceries'}</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-outline-gold" onClick={() => {
                const el = document.getElementById('categories-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Explore Collections</span>
              </button>
              <a href="tel:+15122607677" className="btn-outline-gold" style={{ borderColor: 'var(--primary-green)', color: 'var(--emerald-bright)' }}>
                <Phone size={18} />
                <span>Call (512) 260-7677</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GROCERY DEPARTMENTS (shown when grocery tab active) */}
      {activeTab === 'grocery' && (
        <section className="grocery-depts-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Our Aisles</span>
              <h3 className="section-title-lg">Grocery Departments</h3>
              <p className="section-desc">Everything you need for authentic desi and Mediterranean cooking.</p>
            </div>
            <div className="grocery-dept-grid">
              {[
                { icon: <Beef size={24} />, title: 'Fresh Vegetables', desc: 'Seasonal produce, fresh herbs, ginger, garlic, and green chilies.' },
                { icon: <Sparkles size={24} />, title: 'Spices & Snacks', desc: 'Shan, National, MDH masalas. Namkeen, biscuits, chai biscuits, and more.' },
                { icon: <Package size={24} />, title: 'Frozen & Canned', desc: 'Frozen parathas, samosas, kebabs, canned mango pulp, and coconut milk.' },
                { icon: <Milk size={24} />, title: 'Dairy Products', desc: 'Fresh paneer, desi ghee, yogurt, lassi, and imported cheeses.' },
                { icon: <Heart size={24} />, title: 'Sweets & Mithai', desc: 'Gulab jamun, rasgulla, jalebi mix, soan papdi, and seasonal mithai.' },
                { icon: <Wheat size={24} />, title: 'Rice, Flour & Lentils', desc: 'Basmati rice, chakki atta, masoor, chana, and urad dal in bulk.' }
              ].map((dept, i) => (
                <div key={i} className="grocery-dept-card">
                  <div className="grocery-dept-icon">{dept.icon}</div>
                  <h4>{dept.title}</h4>
                  <p>{dept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PHOTOGRAPHIC CATEGORIES SHOWCASE */}
      {activeTab === 'meat' && (
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
                    if (cat.name === 'Grocery') handleSwitchTab('grocery');
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
      )}

      {/* CATEGORY NAVIGATION RIBBON (meat only) */}
      {activeTab === 'meat' && (
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
              {MEAT_CATEGORIES.filter(c => c !== 'All').map(cat => (
                <button 
                  key={cat}
                  className={`shop-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <img src={
                    cat === 'Beef' ? catBeef : cat === 'Chicken' || cat === 'Hand Cut Chicken' ? catChicken :
                    cat === 'Goat' ? catGoat : cat === 'Lamb' ? catLamb :
                    cat === 'Marinated BBQ' ? catMarinated : catSeafood
                  } alt={cat} className="shop-cat-icon-thumb" />
                  <span>{cat}</span>
                  <span className="shop-cat-count-badge">{categoryCounts[cat] || 0}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SHOP CONTROL TOOLBAR */}
      <section className="shop-toolbar-section">
        <div className="container">
          <div className="shop-toolbar-bar">
            <div className="shop-toolbar-left">
              <button className="btn-filter-drawer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Sliders size={16} />
                <span>{isSidebarOpen ? 'Hide Filters' : 'Filter Products'}</span>
              </button>
              <span className="results-count-text">
                Showing {filteredProducts.length} of {activeTab === 'meat' ? MEAT_PRODUCTS.length : GROCERY_PRODUCTS.length} items
              </span>
            </div>
            <div className="shop-toolbar-right">
              <div className="view-switcher-group">
                {['cols-4', 'cols-3', 'cols-2'].map(mode => (
                  <button 
                    key={mode}
                    className={`view-btn ${viewMode === mode ? 'active' : ''}`}
                    onClick={() => setViewMode(mode)}
                    title={`${mode.replace('cols-', '')} Columns`}
                  >
                    <Grid size={18} />
                  </button>
                ))}
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

      {/* SHOP MAIN LAYOUT */}
      <main className="container">
        <div className={`shop-main-layout ${!isSidebarOpen ? 'no-sidebar' : ''}`}>
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
                  min="3" 
                  max="35" 
                  value={priceMaxFilter}
                  onChange={(e) => setPriceMaxFilter(Number(e.target.value))}
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.4rem' }}>
                  Showing items up to ${priceMaxFilter}.00{activeTab === 'meat' ? ' / lb' : ''}
                </span>
              </div>

              {activeTab === 'meat' && (
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
              )}

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
                <h3>No items found matching your filter</h3>
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
                        <button className="action-icon-btn" title="Quick View" onClick={() => setQuickViewProduct(product)}>
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
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                          {activeTab === 'meat' ? '/ lb' : ''}
                        </span>
                      </div>
                      <div className="loyalty-earn-pill">
                        <Award size={14} />
                        <span>Earn rewards points!</span>
                      </div>
                      <div className="card-bottom-controls">
                        <button className="btn-add-cart-card" onClick={() => handleAddToCart(product)}>
                          <ShoppingCart size={16} />
                          <span>Add to List</span>
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
            <button className="modal-close-btn" onClick={() => setQuickViewProduct(null)}>
              <X size={20} />
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <img src={quickViewProduct.image} alt={quickViewProduct.name} 
                  style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
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
                  <span style={{ color: 'var(--text-muted)' }}>{activeTab === 'meat' ? '/ lb' : ''}</span>
                </div>
                {activeTab === 'meat' && (
                  <>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>Select Quantity / Weight</label>
                      <select className="shop-select-box" style={{ width: '100%' }}
                        value={customPrepOptions.weight}
                        onChange={(e) => setCustomPrepOptions({ ...customPrepOptions, weight: e.target.value })}>
                        <option value="1 lb">1 lb (Standard Pack)</option>
                        <option value="2 lbs">2 lbs (Family Size)</option>
                        <option value="5 lbs">5 lbs (Bulk Pack)</option>
                        <option value="10 lbs">10 lbs (Wholesale)</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>Custom Cut Style</label>
                      <select className="shop-select-box" style={{ width: '100%' }}
                        value={customPrepOptions.cutStyle}
                        onChange={(e) => setCustomPrepOptions({ ...customPrepOptions, cutStyle: e.target.value })}>
                        <option value="Curry Cut (Medium)">Curry Cut (Medium Pieces)</option>
                        <option value="Biryani Cut (Small)">Biryani Cut (Small Bites)</option>
                        <option value="Roast Cut (Large)">Roast Cut (Large Primal)</option>
                        <option value="Thin Sliced">Thin Sliced / Steak Cut</option>
                        <option value="Whole Uncut">Whole Uncut</option>
                      </select>
                    </div>
                  </>
                )}
                <button className="btn-primary-green" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                  onClick={() => handleAddToCart(quickViewProduct, activeTab === 'meat' ? customPrepOptions : null)}>
                  <ShoppingCart size={20} />
                  <span>Add to List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIDE CART DRAWER */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3 className="cart-drawer-title">Your Shopping List</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ color: 'var(--text-white)' }}>
                <X size={22} />
              </button>
            </div>
            <div className="cart-drawer-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <p>Your list is empty. Browse our fresh cuts and groceries to add items!</p>
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
                    <button onClick={() => handleRemoveFromCart(item.cartItemId)} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-line">
                  <span>Estimated Total</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div style={{ background: 'rgba(22, 163, 74, 0.1)', border: '1px solid var(--primary-green)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Ready to order? Call us and we'll have your items ready for pickup or delivery!
                  </p>
                  <a href="tel:+15122607677" className="btn-primary-green" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={18} />
                    <span>Call (512) 260-7677 to Order</span>
                  </a>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Open Daily 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STORE INFO SECTION */}
      <section className="store-info-section">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-info-card">
              <div className="store-info-icon">
                <MapPin size={28} />
              </div>
              <h4>Visit Us</h4>
              <p>12920 West Parmer Lane #106<br />Cedar Park, TX 78613</p>
              <a href="https://maps.google.com/?q=12920+West+Parmer+Lane+%23106+Cedar+Park+TX+78613" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: '0.75rem', display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <MapPin size={14} />
                <span>Get Directions</span>
              </a>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon">
                <Clock size={28} />
              </div>
              <h4>Store Hours</h4>
              <p>
                <strong>Monday – Saturday:</strong> 9:00 AM – 9:00 PM<br />
                <strong>Sunday:</strong> 10:00 AM – 8:00 PM
              </p>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon">
                <Phone size={28} />
              </div>
              <h4>Call Us</h4>
              <p>
                <strong>Phone:</strong> (512) 260-7677<br />
                <strong>Fax:</strong> (512) 260-7734<br />
                <strong>Email:</strong> QualityHalalMarket@gmail.com
              </p>
              <a href="tel:+15122607677" className="btn-primary-green" style={{ marginTop: '0.75rem', display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
            <div className="store-info-card">
              <div className="store-info-icon">
                <ShieldCheck size={28} />
              </div>
              <h4>Halal Assurance</h4>
              <p>All our meat is 100% hand-slaughtered Zabiha Halal. We take pride in serving the Muslim community with integrity and transparency.</p>
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
                <div className="logo-icon-wrap">
                  <ShoppingBag size={20} />
                </div>
                <div className="logo-text-group">
                  <h1>Quality Halal Market</h1>
                  <span>Premium Meats & Groceries</span>
                </div>
              </div>
              <p>Your premier source for 100% hand-slaughtered Zabiha halal meat and Indian, Pakistani & Mediterranean groceries in Cedar Park, TX.</p>
            </div>
            <div className="footer-col">
              <h4>Meat Categories</h4>
              <ul>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveCategory('Beef'); }}>Prime Beef</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveCategory('Chicken'); }}>Halal Chicken</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveCategory('Goat'); }}>Young Goat</a></li>
                <li><a href="#shop-section" onClick={() => { handleSwitchTab('meat'); setActiveCategory('Lamb'); }}>Fresh Lamb</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Grocery Aisles</h4>
              <ul>
                <li><a href="#shop-section" onClick={() => handleSwitchTab('grocery')}>Spices & Masalas</a></li>
                <li><a href="#shop-section" onClick={() => handleSwitchTab('grocery')}>Rice, Flour & Lentils</a></li>
                <li><a href="#shop-section" onClick={() => handleSwitchTab('grocery')}>Frozen & Dairy</a></li>
                <li><a href="#shop-section" onClick={() => handleSwitchTab('grocery')}>Sweets & Snacks</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Store Location & Contact</h4>
              <ul>
                <li><a href="tel:+15122607677" style={{ color: 'var(--gold-accent)', fontWeight: '700' }}>📞 (512) 260-7677</a></li>
                <li><span>📍 12920 W Parmer Ln #106</span></li>
                <li><span>Cedar Park, TX 78613</span></li>
                <li><span>🕒 Open Daily 9 AM – 9 PM</span></li>
                <li><a href="https://www.facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>Facebook Page</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Quality Halal Market. All rights reserved.</span>
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