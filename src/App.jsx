import React, { useState, useEffect } from 'react';
import { 
  Phone, Menu, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, Printer, Mail, Send, 
  ShoppingCart, Trash2, Maximize2, Rotate3d, Check,
  Truck, Sliders, Calendar, DollarSign, User, Car,
  AlertCircle, ShoppingBag, Info, Compass, Award, Star
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

const products = [
  { id: 1, name: "Goat Curry Cut", desc: "Fresh, tender goat meat cut into convenient cubes, perfect for traditional curries, stews, and biryanis.", category: "meat", unit: "Daily Fresh", status: "Daily Fresh", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Tender Lamb Chops", desc: "Juicy, hand-trimmed rib lamb chops, ideal for grilling, pan-searing, or roasting with traditional herb rubs.", category: "meat", unit: "Custom Trimmed", status: "Zabiha Halal", img: "https://images.unsplash.com/photo-1602916298539-78709ca88b48?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Whole Skinless Chicken", desc: "Fresh, clean whole chickens, skinless and cut to your preference (curry cut, 4-piece, or whole for roasting).", category: "meat", unit: "Cut to Order", status: "Popular", img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Halal Beef Ribeye", desc: "Beautifully marbled, thick-cut grass-fed halal beef steaks. Incredibly juicy and packed with flavor.", category: "meat", unit: "Fresh Cut", status: "Steakhouse", img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Fresh Okra (Bhindi)", desc: "Tender, bright green okra pods sourced daily from local farms. Perfect for stir-frying or traditional subzis.", category: "produce", unit: "Fresh Daily", status: "Farm Fresh", img: "https://images.unsplash.com/photo-1627916607244-6b63dcfab019?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Thai Green Chilies", desc: "Crisp, hot green chilies essential for adding that authentic spice kick to South Asian and Mediterranean dishes.", category: "produce", unit: "Fresh Daily", status: "Spicy Accent", img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Vine Roma Tomatoes", desc: "Firm, red, vine-ripened tomatoes, perfect for base gravies, salads, and cooking sauces.", category: "produce", unit: "Fresh Daily", status: "Quality", img: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Premium Turmeric & Cumin", desc: "High-potency ground spices sourced directly. Rich in flavor, color, and natural oils for maximum culinary impact.", category: "spices", unit: "100g / 400g Packs", status: "Pure", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" },
  { id: 9, name: "Spicy Bombay Mix (Chevdo)", desc: "A delicious crunchy blend of chickpea flour noodles, lentils, peanuts, and traditional spices. Great with tea.", category: "spices", unit: "Sealed Bags", status: "Crispy", img: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Premium Basmati Rice", desc: "Aged, extra-long grain aromatic basmati rice. Cooks fluffy, non-sticky, and fragrant every single time.", category: "groceries", unit: "10 lb & 20 lb Bags", status: "Best Seller", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Traditional Pure Ghee", desc: "Clarified butter made from cow's milk, adding a rich buttery aroma to your curries, daals, and traditional sweets.", category: "groceries", unit: "Various Jar Sizes", status: "Essential", img: "https://images.unsplash.com/photo-1589733901241-5e55cd29e18a?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Cold Pressed Olive Oil", desc: "Extra virgin olive oil imported directly from the Mediterranean. Smooth, fruity profile ideal for salads and cooking.", category: "groceries", unit: "Glass & Tins", status: "Mediterranean", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
  { id: 13, name: "Premium Chickpeas", desc: "Plump, tender canned chickpeas, ready-to-use for hummuses, chana masalas, or healthy salads.", category: "frozen", unit: "15 oz Cans", status: "Pantry Staple", img: "https://images.unsplash.com/photo-1585821957076-1003f2c9f914?auto=format&fit=crop&w=600&q=80" },
  { id: 14, name: "Halal Beef Seekh Kababs", desc: "Minced beef spiced with herbs and grilled on skewers, then flash-frozen. Just heat and serve with naan.", category: "frozen", unit: "10-Piece Packs", status: "Ready to Heat", img: "https://images.unsplash.com/photo-1603360946369-fa99d57ee7c5?auto=format&fit=crop&w=600&q=80" },
  { id: 15, name: "Flaky Plain Parathas", desc: "Traditional multi-layered, flaky flatbreads. Pan-fry for minutes to get fresh, crispy hot parathas.", category: "frozen", unit: "5-Piece Packs", status: "Delicious", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" },
  { id: 16, name: "Fresh Creamy Paneer", desc: "Soft, creamy traditional cottage cheese. Perfect for Palak Paneer, Paneer Tikka, and other vegetarian recipes.", category: "sweets", unit: "Sealed Blocks", status: "Fresh", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
  { id: 17, name: "Indo-Pak Sweets (Mithai)", desc: "Assorted traditional sweets including Gulab Jamun, Cham Cham, Barfi, and Laddu. Rich, delicious, and fresh.", category: "sweets", unit: "Per lb / Box", status: "Handcrafted", img: "https://images.unsplash.com/photo-1589187151003-0d3a1aefd22a?auto=format&fit=crop&w=600&q=80" },
  { id: 18, name: "Gourmet Baklava Mix", desc: "Crisp, layered filo pastry filled with crushed pistachios, walnuts, and sweetened with pure honey syrup.", category: "sweets", unit: "Gift Box & Loose", status: "Premium", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80" }
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
  if (product.category !== 'meat') {
    return { packaging: 'Standard Bag', notes: '' };
  }
  const isChicken = product.name.toLowerCase().includes('chicken');
  return {
    style: 'Curry Cut (Medium)',
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
  const [packagingPref, setPackagingPref] = useState('Standard Bag');
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
  const [activeOrder, setActiveOrder] = useState(null); // Receipt Details
  const [curbsideVehicularStatus, setCurbsideVehicularStatus] = useState(''); // "Black Camry", etc
  const [curbsideNotified, setCurbsideNotified] = useState(false);
  const [deliveryStep, setDeliveryStep] = useState(0); // 0: Preparing, 1: Packing, 2: En Route, 3: Delivered

  // Toast State
  const [toast, setToast] = useState({ isOpen: false, title: '', message: '' });

  // Card quantities for catalog level quick-add
  const [cardQuantities, setCardQuantities] = useState(() => {
    const qtys = {};
    products.forEach(p => { qtys[p.id] = 1; });
    return qtys;
  });

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
            <span style="font-size: 0.85rem; color: #64748b; display: block; margin-bottom: 8px;">Fresh Meats & Groceries</span>
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
      }, 9000); // Progress tracker stage every 9 seconds
    }
    return () => clearInterval(timer);
  }, [activeOrder, deliveryStep]);

  // Update configuration defaults when modal product opens
  useEffect(() => {
    if (selectedProduct) {
      setModalQty(1);
      setCustomNotes('');
      if (selectedProduct.category === 'meat') {
        const isChicken = selectedProduct.name.toLowerCase().includes('chicken');
        const isSteak = selectedProduct.name.toLowerCase().includes('ribeye') || selectedProduct.name.toLowerCase().includes('steak');
        setPrepStyle(isSteak ? 'Steakhouse Thick (1.5")' : 'Curry Cut (Medium)');
        setFatTrim('Standard (Balanced)');
        setSkinPref(isChicken ? 'Skinless' : '');
      } else {
        setPackagingPref('Standard Bag');
      }
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
    
    const customizations = selectedProduct.category === 'meat' ? {
      style: prepStyle,
      trim: fatTrim,
      skin: selectedProduct.name.toLowerCase().includes('chicken') ? skinPref : null,
      notes: customNotes
    } : {
      packaging: packagingPref,
      notes: customNotes
    };

    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.name === selectedProduct.name && 
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
          qty: modalQty,
          img: selectedProduct.img,
          unit: selectedProduct.unit,
          customizations 
        }];
      }
    });

    setSelectedProduct(null);
    showToast("Added Customized Item", `${selectedProduct.name} added to your order.`);
  };

  const quickAddToCart = (product, e) => {
    e.stopPropagation();
    const qty = cardQuantities[product.id] || 1;
    const customizations = getDefaultCustomizations(product);
    
    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.name === product.name && 
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
          qty,
          img: product.img,
          unit: product.unit,
          customizations 
        }];
      }
    });

    // Reset card quantity to 1
    setCardQuantities(prev => ({ ...prev, [product.id]: 1 }));
    showToast("Item Added", `${product.name} (x${qty}) added with default cuts.`);
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

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    const activeAddress = orderType === 'delivery' ? checkoutAddress : '';
    const deliveryDetails = activeAddress ? getDeliveryInfo(activeAddress) : null;
    const deliveryFee = (deliveryDetails && deliveryDetails.eligible) ? deliveryDetails.fee : 0;
    const finalFee = cartCountTotal() >= 75 ? 0 : deliveryFee;

    const orderObj = {
      orderId: `#QHM-${Math.floor(10000 + Math.random() * 90000)}`,
      name: checkoutName,
      phone: checkoutPhone,
      type: orderType,
      date: checkoutDate || new Date().toISOString().split('T')[0],
      time: checkoutTime,
      address: activeAddress,
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

  const cartCountTotal = () => cart.reduce((sum, item) => sum + item.qty, 0);

  // Filter products by category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Header Navigation */}
      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <div className="logo-icon">Q</div>
            Quality Halal<span>Market</span>
          </a>
          
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#specialties" className="nav-link">Specialties</a></li>
            <li><a href="#delivery-section" className="nav-link">Delivery Zone</a></li>
            <li><a href="#counter" className="nav-link">Virtual Counter</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          
          <div className="nav-cta">
            <a href="tel:5122607677" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
              <Phone size={16} style={{ marginRight: '8px' }} />
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
            Quality Halal<span>Market</span>
          </a>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Home</a></li>
          <li><a href="#specialties" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">What We Offer</a></li>
          <li><a href="#delivery-section" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Delivery Area</a></li>
          <li><a href="#counter" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Virtual Counter</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">About Us</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="drawer-link">Location & Contact</a></li>
        </ul>
        <div className="drawer-footer">
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
              Your Premium Halal <span>Butcher & Grocery</span>
            </h1>
            <p className="hero-subtitle">
              Sourcing the finest quality hand-slaughtered halal meats and authentic imported specialty groceries. Cut fresh to order by certified butcher professionals.
            </p>
            <div className="hero-btns">
              <a href="#counter" className="btn btn-primary">
                Shop Our Counter
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

      {/* Specialties (What We Offer) Section */}
      <section id="specialties" className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle">Premium Selections</span>
            <h2 className="section-title">Store Departments</h2>
            <p className="section-desc">
              From fresh cuts prepared daily by our certified halal butchers to hard-to-find imports, we cater to all your cooking needs.
            </p>
          </div>
          
          <div className="departments-grid">
            {/* Dept 1 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="/assets/meats.jpg" alt="Fresh Meats" className="dept-img" />
                <div className="dept-badge">Zabiha Halal</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Fresh Halal Meats</h3>
                <p className="dept-desc">Hand-slaughtered goat, tender lamb cuts, fresh skinless chicken, and marbled ribeye steaks custom trimmed to order.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('meat'); }} className="dept-link">
                  Customize Meat Cuts
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 2 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="https://images.unsplash.com/photo-1627916607244-6b63dcfab019?auto=format&fit=crop&w=600&q=80" alt="Fresh Vegetables" className="dept-img" />
                <div className="dept-badge">Locally Sourced</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Fresh Vegetables</h3>
                <p className="dept-desc">Crisp locally sourced green okra (Bhindi), fiery Thai green chilies, vine-ripened Roma tomatoes, and seasonal produce.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('produce'); }} className="dept-link">
                  View Fresh Produce
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 3 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="/assets/spices.jpg" alt="Snacks & Spices" className="dept-img" />
                <div className="dept-badge">Direct Imports</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Snacks & Spices</h3>
                <p className="dept-desc">Aromatic high-potency turmeric, ground cumin, traditional coriander packs, and crunchy spicy Bombay mix (Chevdo) snacks.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('spices'); }} className="dept-link">
                  Explore Spices & Snacks
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 4 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" alt="Groceries & Imports" className="dept-img" />
                <div className="dept-badge">Pantry Staples</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Groceries & Imports</h3>
                <p className="dept-desc">Imported premium aged Basmati rice bags, traditional cow milk pure ghee jars, and cold-pressed extra virgin olive oil tins.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('groceries'); }} className="dept-link">
                  Browse Imports
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 5 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="https://images.unsplash.com/photo-1585821957076-1003f2c9f914?auto=format&fit=crop&w=600&q=80" alt="Frozen & Canned" className="dept-img" />
                <div className="dept-badge">Convenience</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Frozen & Canned</h3>
                <p className="dept-desc">Ready-to-use canned chickpeas, flash-frozen seasoned beef seekh kababs, and multi-layered flaky frozen plain parathas.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('frozen'); }} className="dept-link">
                  View Frozen Selections
                  <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>

            {/* Dept 6 */}
            <div className="dept-card">
              <div className="dept-img-wrapper">
                <img src="https://images.unsplash.com/photo-1589187151003-0d3a1aefd22a?auto=format&fit=crop&w=600&q=80" alt="Dairy & Sweets" className="dept-img" />
                <div className="dept-badge">Handcrafted</div>
              </div>
              <div className="dept-content">
                <h3 className="dept-title">Dairy & Sweets</h3>
                <p className="dept-desc">Fresh paneer blocks, handcrafted Indo-Pak sweets (Gulab Jamun, Cham Cham, Barfi), and crisp gourmet honey baklava boxes.</p>
                <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('sweets'); }} className="dept-link">
                  View Dairy & Sweets
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
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.25rem 0 1rem 0' }}>On-Demand Local Delivery</h2>
              <p className="delivery-subtitle-desc">
                We deliver fresh meats and specialty groceries right to your doorstep within a 10-mile radius. Check your eligibility, estimated delivery time, and dynamic route calculations below.
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
                  <p>Calculating routing distance from Quality Halal Market counter...</p>
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
                <h4>Express Home Delivery</h4>
                <p>Delivered fresh in insulated packing boxes to preserve meat temperature.</p>
              </div>
              <div className="graphic-bento-item glow-gold">
                <div className="icon-circ"><ShieldCheck size={24} /></div>
                <h4>100% Zabiha Guaranteed</h4>
                <p>Every cut matches our strict halal butcher counter guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Counter Section */}
      <section id="counter" className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle">Interactive Counter</span>
            <h2 className="section-title">Virtual Store Counter</h2>
            <p className="section-desc">
              Browse our fresh butcher selections and grocery items, click to customize your cuts/preparation, and place your order directly for delivery or curbside pickup.
            </p>
            
            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Items</button>
              <button className={`tab-btn ${activeCategory === 'meat' ? 'active' : ''}`} onClick={() => setActiveCategory('meat')}>Butcher Counter</button>
              <button className={`tab-btn ${activeCategory === 'produce' ? 'active' : ''}`} onClick={() => setActiveCategory('produce')}>Fresh Produce</button>
              <button className={`tab-btn ${activeCategory === 'spices' ? 'active' : ''}`} onClick={() => setActiveCategory('spices')}>Spices & Snacks</button>
              <button className={`tab-btn ${activeCategory === 'groceries' ? 'active' : ''}`} onClick={() => setActiveCategory('groceries')}>Groceries & Imports</button>
              <button className={`tab-btn ${activeCategory === 'frozen' ? 'active' : ''}`} onClick={() => setActiveCategory('frozen')}>Frozen & Canned</button>
              <button className={`tab-btn ${activeCategory === 'sweets' ? 'active' : ''}`} onClick={() => setActiveCategory('sweets')}>Dairy & Sweets</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((p) => (
              <div 
                key={p.id} 
                className="product-card"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="product-header">
                  <span className="product-category">{p.category === 'meat' ? 'Fresh Meat' : p.category}</span>
                  <span className="product-status">{p.status}</span>
                </div>
                <div className="product-img-wrapper">
                  <img src={p.img} alt={p.name} className="product-img" />
                </div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                
                <div className="product-footer">
                  <span className="product-label">Availability: {p.unit}</span>
                </div>
                
                {/* Direct quick add controls on the card */}
                <div className="product-card-actions">
                  <div className="card-qty-selector">
                    <button className="card-qty-btn minus" onClick={(e) => handleCardQtyChange(p.id, -1, e)}>-</button>
                    <input type="number" className="card-qty-input" value={cardQuantities[p.id] || 1} readOnly />
                    <button className="card-qty-btn plus" onClick={(e) => handleCardQtyChange(p.id, 1, e)}>+</button>
                  </div>
                  <button className="btn btn-primary card-add-btn" onClick={(e) => quickAddToCart(p, e)}>
                    Quick Add
                  </button>
                </div>
              </div>
            ))}
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
                Established with a vision to serve the Cedar Park and greater Austin community with pristine Zabiha Halal meats and authentic imported goods. Under the direct management of <strong>Ali</strong>, our customer service is as quality-oriented as our inventory.
              </p>
              <p>
                Every cut of meat we offer is hand-slaughtered and thoroughly inspected to meet strict halal requirements. We pride ourselves on cleanliness, freshness, and our community-first values.
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
                      <p>Fresh Halal Meats & Premium Groceries</p>
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
                Have questions about our cuts, catering orders, or item availability? Drop us a message or call directly!
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
                  <input type="text" id="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required placeholder="512.555.0199" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Cut Instructions</label>
                  <textarea id="message" required placeholder="Tell us how we can help or specify custom meat cuts..." rows="4"></textarea>
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
                Quality Halal<span>Market</span>
              </div>
              <p>Premium hand-slaughtered zabiha halal meats and specialty grocery items in Cedar Park, TX.</p>
              <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="https://facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4>Our Products</h4>
              <ul className="footer-links">
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('meat')}>Halal Beef & Goat</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('meat')}>Fresh Whole Chicken</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('produce')}>Fresh Produce</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('groceries')}>Imported Spices & Basmati Rice</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('sweets')}>Dairy & Mithai Sweets</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home Page</a></li>
                <li><a href="#specialties">Specialties</a></li>
                <li><a href="#delivery-section">Delivery Options</a></li>
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
            <p>&copy; {new Date().getFullYear()} Quality Halal Market. All Rights Reserved. Managed by Ali.</p>
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
            <p className="empty-cart-msg">Your counter cart is empty. Click items in the Virtual Counter below to customize your cuts!</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="cart-item-category">{item.category}</span>
                    <span className="cart-item-qty-tag">x{item.qty}</span>
                  </div>
                  <h4 className="cart-item-name">{item.name}</h4>
                  
                  {/* Render Item Customizations */}
                  {item.customizations && (
                    <div className="cart-item-custom-tags">
                      {item.customizations.style && <span>🔪 {item.customizations.style}</span>}
                      {item.customizations.trim && <span>🥩 {item.customizations.trim}</span>}
                      {item.customizations.skin && <span>🍗 {item.customizations.skin}</span>}
                      {item.customizations.packaging && <span>📦 {item.customizations.packaging}</span>}
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
          <div className="cart-subtotal-row">
            <span>Selected Items:</span>
            <strong>{cartCountTotal()} items</strong>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '1.25rem' }}
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
              <span className="product-category">{selectedProduct.category === 'meat' ? 'Fresh Meat Counter' : selectedProduct.category}</span>
              <h2 className="product-modal-name">{selectedProduct.name}</h2>
              <p className="product-modal-desc">{selectedProduct.desc}</p>
            </div>

            <div className="product-modal-right">
              <div className="configurator-title">
                <Sliders size={18} style={{ color: 'var(--secondary-light)' }} />
                <h3>Custom Cut Preferences</h3>
              </div>

              {selectedProduct.category === 'meat' ? (
                /* Meat Customizations */
                <div className="configurator-options">
                  <div className="config-group">
                    <label>Butcher Prep Style</label>
                    <div className="config-choices">
                      {selectedProduct.name.toLowerCase().includes('ribeye') ? (
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
              ) : (
                /* Non-Meat Customizations */
                <div className="configurator-options">
                  <div className="config-group">
                    <label>Packaging Options</label>
                    <div className="config-choices">
                      <button className={packagingPref === 'Standard Bag' ? 'active' : ''} onClick={() => setPackagingPref('Standard Bag')}>Standard Bag</button>
                      <button className={packagingPref === 'Vacuum Sealed (For Freezer)' ? 'active' : ''} onClick={() => setPackagingPref('Vacuum Sealed (For Freezer)')}>Vacuum Seal</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="config-group">
                <label>Special Butcher / Packaging Notes</label>
                <textarea 
                  placeholder="e.g. cut in very small pieces, keep fats separate, vacuum seal separately..." 
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
                  Add to Order
                  <ShoppingCart size={16} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>

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
              <div className="summary-title">Order Items Recap</div>
              <div className="summary-items-list">
                {cart.map((item, index) => (
                  <div key={index} className="summary-item-row">
                    <div className="summary-item-name-col">
                      <span className="summary-item-name">{item.name}</span>
                      {item.customizations && (
                        <div className="summary-item-cuts">
                          {item.customizations.style || item.customizations.packaging} 
                          {item.customizations.trim && ` / ${item.customizations.trim}`}
                        </div>
                      )}
                    </div>
                    <span className="summary-item-qty">x{item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total-calc">
                <div className="calc-row">
                  <span>Subtotal:</span>
                  <strong>{cartCountTotal()} items</strong>
                </div>
                {orderType === 'delivery' && (
                  <div className="calc-row">
                    <span>Delivery Fee:</span>
                    <span>
                      {cartCountTotal() >= 75 ? (
                        <strong className="free-text">FREE (Order &gt; $75)</strong>
                      ) : (
                        `$${checkoutAddress ? (getDeliveryInfo(checkoutAddress)?.fee || 4.99) : 4.99}`
                      )}
                    </span>
                  </div>
                )}
                <div className="calc-row grand-total">
                  <span>Estimated Total:</span>
                  <strong>Pay at Pickup/Delivery</strong>
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
                    onChange={(e) => {
                      setCheckoutAddress(e.target.value);
                    }}
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
                <label>Additional Delivery/Instructions</label>
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
                      showToast("Notification Sent", "Ali and the butchers have been alerted.");
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
                      <h4>Ali Has Been Notified!</h4>
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
                  {deliveryStep === 0 && <h4>🥩 Ali is prepping your customized cuts right now...</h4>}
                  {deliveryStep === 1 && <h4>📦 Packaging your order in temperature-insulated bags...</h4>}
                  {deliveryStep === 2 && <h4>🚗 Delivery driver is en route with your fresh items!</h4>}
                  {deliveryStep === 3 && <h4>✅ Order delivered! Thank you for shopping with Quality Halal Market.</h4>}
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
