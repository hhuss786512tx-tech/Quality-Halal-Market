import React, { useState, useEffect } from 'react';
import { 
  Phone, Menu, X, ShieldCheck, ArrowRight, MapPin, 
  Clock, Printer, Mail, Send, 
  ShoppingCart, Trash2, Maximize2, Rotate3d, Check,
  Truck, Sliders, User, Car,
  AlertCircle, ShoppingBag, Info, Award,
  Plus, Edit, Lock, Unlock, Search, RefreshCw, Eye, EyeOff,
  Package, Sparkles, CheckCircle2, Globe
} from 'lucide-react';

import cardFront from './assets/card_front.jpg';
import cardBack from './assets/card_back.jpg';

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

// Multi-Language Translation Dictionary (English, Urdu, Spanish)
const translations = {
  en: {
    home: "Home",
    departments: "Meat Departments",
    deliveryZone: "Delivery Zone",
    counter: "Butcher Counter",
    aboutUs: "About Us",
    contact: "Contact",
    ownerAccess: "Owner Access",
    ownerDashboard: "Owner Dashboard",
    heroBadge: "100% Hand-Slaughtered Zabiha Halal Guarantee",
    heroTitle: "Your Premium Halal Meat Butcher Counter",
    heroSubtitle: "Sourcing the finest hand-slaughtered Zabiha goat, lamb, beef, chicken, meat pastries, samosas, and Masala Pantry style marinated BBQ botis. Custom cut and trimmed to order by certified halal butchers.",
    shopCounter: "Explore Meat Counter",
    checkDelivery: "Check Delivery",
    openDaily: "Open Daily: 9:00 AM - 9:00 PM",
    deptTitle: "Meat Counter Departments",
    deptDesc: "Every cut of meat and savory pastry we offer is hand-slaughtered, thoroughly inspected, and prepared by our professional butchers.",
    allCuts: "All Cuts",
    goatCat: "Goat",
    beefCat: "Beef",
    chickenCat: "Chicken",
    lambCat: "Lamb",
    marinatedCat: "Marinated",
    pastriesCat: "Pastries",
    customizeCut: "Customize Cut",
    quickAdd: "Quick Add",
    unavailable: "Unavailable",
    outOfStock: "OUT OF STOCK",
    cartTitle: "Your Counter Order",
    emptyCart: "Your counter cart is empty. Select meat cuts or pastries in the Virtual Counter below!",
    subtotal: "Subtotal",
    checkoutBtn: "Checkout counter order",
    customTitle: "Custom Cut Preferences",
    prepStyle: "Butcher Prep Style",
    fatTrim: "Fat Trim Preferences",
    skinPref: "Skin Preference",
    specialNotes: "Special Butcher / Packaging Notes",
    addToOrder: "Add to Order",
    deliveryTitle: "On-Demand Meat Delivery",
    verifyDelivery: "Verify Delivery Zone",
    pickupOpt: "Express Store Pickup",
    deliveryOpt: "On-Demand Delivery",
    placeOrder: "Place Order",
    fullName: "Your Full Name",
    phoneNum: "Phone Number",
    delAddress: "Delivery Address",
    pickupDate: "Pickup Date",
    pickupTime: "Pickup Time",
    orderInstructions: "Additional Butcher / Delivery Instructions",
    trackTitle: "Track Your Counter Order",
    orderPlaced: "Order Placed Successfully",
    contactSubtitle: "Get In Touch",
    contactTitle: "Contact Master Butchers",
    contactDesc: "Have questions about custom cut preparations, party catering boxes, or wholesale meat deliveries? Reach out to our team directly.",
    yourName: "Your Full Name",
    phoneLabel: "Phone Number",
    messageLabel: "Message / Custom Cut Request",
    sendInquiry: "Send Message",
    storeLocationTitle: "Store Location & Hours",
    storeAddressLabel: "Cedar Park Butcher Shop Address",
    openDailyText: "Open Daily: 9:00 AM - 9:00 PM",
    googleMapsBtn: "Open Google Maps",
    callStoreBtn: "Call Store Counter"
  },
  ur: {
    home: "صفحہ اول",
    departments: "گوشت کے شعبے",
    deliveryZone: "ڈلیوری کا علاقہ",
    counter: "ورچوئل کاؤنٹر",
    aboutUs: "ہمارے بارے میں",
    contact: "رابطہ کریں",
    ownerAccess: "مالک کا پورٹل",
    ownerDashboard: "آنر ڈیش بورڈ",
    heroBadge: "100٪ ہاتھ کا ذبح شدہ ذبیحہ حلال ضمانت",
    heroTitle: "آپ کا پریمیم حلال گوشت کاؤنٹر",
    heroSubtitle: "بہترین تازہ ذبیحہ بکرا، دنبہ، گائے، مرغی، قیمہ سموسے اور مسالہ پینٹری جیسے تیار شدہ تکہ بوٹی کا گوشت۔ ماہر قصابوں سے اپنی مرضی کی کٹوائی کروائیں۔",
    shopCounter: "گوشت کاؤنٹر دیکھیں",
    checkDelivery: "ڈلیوری چیک کریں",
    openDaily: "روزانہ کھلا: 9:00 صبح - 9:00 رات",
    deptTitle: "حلال گوشت کے شعبے",
    deptDesc: "تمام قسم کا ذبیحہ حلال گوشت اور قیمے کے سموسے و پیسٹریاں تازہ تیار کی جاتی ہیں۔",
    allCuts: "تمام گوشت اور سموسے",
    goatCat: "بکرا و چھترا",
    beefCat: "گائے کا گوشت",
    chickenCat: "مرغی گوشت",
    lambCat: "دنبہ گوشت",
    marinatedCat: "مربہ تکہ بی بی کیو",
    pastriesCat: "قیمہ سموسے و پیسٹری",
    customizeCut: "کٹوائی پسند کریں",
    quickAdd: "جلدی شامل کریں",
    unavailable: "دستیاب نہیں",
    outOfStock: "ختم ہو گیا ہے",
    cartTitle: "آپ کا گوشت آرڈر",
    emptyCart: "آپ کی کارٹ خالی ہے۔ نیچے کاؤنٹر سے گوشت یا سموسے منتخب کریں!",
    subtotal: "کل رقم",
    checkoutBtn: "آرڈر مکمل کریں",
    customTitle: "کٹوائی کی ترجیحات",
    prepStyle: "کٹوائی کا طریقہ",
    fatTrim: "چربی کم یا زیادہ",
    skinPref: "جلد / چھلکا",
    specialNotes: "خاص ہدایات قصاب کے لیے",
    addToOrder: "آرڈر میں شامل کریں",
    deliveryTitle: "گھر تک گوشت کی ترسیل",
    verifyDelivery: "ڈلیوری چیک کریں",
    pickupOpt: "دوکان سے خود لیں",
    deliveryOpt: "گھر پر ڈلیوری",
    placeOrder: "آرڈر بھیجیں",
    fullName: "آپ کا پورا نام",
    phoneNum: "فون نمبر",
    delAddress: "ڈلیوری کا پتہ",
    pickupDate: "وصولی کی تاریخ",
    pickupTime: "وصولی کا وقت",
    orderInstructions: "اضافی ہدایات",
    trackTitle: "آرڈر کی ترسیل دیکھیں",
    orderPlaced: "آرڈر کامیابی سے درج ہو گیا",
    contactSubtitle: "ہم سے رابطہ کریں",
    contactTitle: "قصاب خانے سے براہ راست رابطہ کریں",
    contactDesc: "اگر آپ کو خاص قسم کے گوشت کی کٹوائی، سموسوں کے ڈبے، یا تقریبات کے آرڈر کے لیے کوئی بھی معلوماتی بات کرنی ہو تو پیغام بھیجیں۔",
    yourName: "آپ کا پورا نام",
    phoneLabel: "فون نمبر",
    messageLabel: "پیغام یا خاص کٹوائی کی تفصیلات",
    sendInquiry: "پیغام بھیجیں",
    storeLocationTitle: "دوکان کا پتہ اور اوقات",
    storeAddressLabel: "سیدار پارک حلال گوشت دوکان",
    openDailyText: "روزانہ کھلا: 9:00 صبح - 9:00 رات",
    googleMapsBtn: "گوگل نقشہ پر دیکھیں",
    callStoreBtn: "کاؤنٹر پر فون کریں"
  },
  es: {
    home: "Inicio",
    departments: "Secciones de Carne",
    deliveryZone: "Zona de Entrega",
    counter: "Mostrador Virtual",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
    ownerAccess: "Acceso Propietario",
    ownerDashboard: "Panel Propietario",
    heroBadge: "Garantía 100% Zabiha Halal Sacrificado a Mano",
    heroTitle: "Su Carnicería Halal de Calidad Premium",
    heroSubtitle: "Ofreciendo los mejores cortes de chivo, cordero, res, pollo, empanadas de carne y marinados estilo Masala Pantry. Cortados a su gusto por carniceros certificados.",
    shopCounter: "Explorar Mostrador",
    checkDelivery: "Verificar Entrega",
    openDaily: "Abierto Todos los Días: 9:00 AM - 9:00 PM",
    deptTitle: "Secciones de la Carnicería",
    deptDesc: "Cada corte de carne y empanada artesanal es sacrificado a mano y preparado al instante por nuestros carniceros profesionales.",
    allCuts: "Todos los Cortes y Pasteles",
    goatCat: "Chivo y Cabrito",
    beefCat: "Cortes de Res Halal",
    chickenCat: "Pollo y Aves",
    lambCat: "Cortes de Cordero",
    marinatedCat: "Marinados y Parrilla",
    pastriesCat: "Empanadas y Pasteles de Carne",
    customizeCut: "Personalizar Corte",
    quickAdd: "Añadir Rápido",
    unavailable: "No Disponible",
    outOfStock: "AGOTADO",
    cartTitle: "Su Pedido del Mostrador",
    emptyCart: "Su carrito está vacío. ¡Seleccione cortes de carne o empanadas abajo!",
    subtotal: "Subtotal",
    checkoutBtn: "Procesar Pedido",
    customTitle: "Preferencias de Corte",
    prepStyle: "Estilo de Corte",
    fatTrim: "Nivel de Grasa",
    skinPref: "Preferencia de Piel",
    specialNotes: "Notas Especiales para el Carnicero",
    addToOrder: "Añadir al Pedido",
    deliveryTitle: "Entrega de Carne a Domicilio",
    verifyDelivery: "Verificar Zona de Entrega",
    pickupOpt: "Recoger en Tienda",
    deliveryOpt: "Entrega a Domicilio",
    placeOrder: "Confirmar Pedido",
    fullName: "Nombre Completo",
    phoneNum: "Teléfono",
    delAddress: "Dirección de Entrega",
    pickupDate: "Fecha de Recogida",
    pickupTime: "Hora de Recogida",
    orderInstructions: "Instrucciones Adicionales",
    trackTitle: "Rastrear su Pedido",
    orderPlaced: "Pedido Realizado con Éxito",
    contactSubtitle: "Contáctenos",
    contactTitle: "Contacto Directo con la Carnicería",
    contactDesc: "¿Tiene preguntas sobre cortes especiales de carne, empanadas para eventos o entregas a domicilio? Envíenos un mensaje directamente.",
    yourName: "Nombre Completo",
    phoneLabel: "Teléfono de Contacto",
    messageLabel: "Mensaje o Detalles del Corte",
    sendInquiry: "Enviar Mensaje",
    storeLocationTitle: "Ubicación y Horarios",
    storeAddressLabel: "Carnicería en Cedar Park, TX",
    openDailyText: "Abierto Todos los Días: 9:00 AM - 9:00 PM",
    googleMapsBtn: "Ver en Google Maps",
    callStoreBtn: "Llamar al Mostrador"
  }
};

// Default Category Preset Imagery
const presetImages = {
  goat: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raw_goat_meat.jpg",
  beef: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
  chicken: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Raw_chicken.jpg/1280px-Raw_chicken.jpg",
  lamb: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
  marinated: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Raw_chicken.jpg/1280px-Raw_chicken.jpg",
  pastries: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Inside_Yank_Sing_Chicken_Curry_Puff_Pastry.jpg/1280px-Inside_Yank_Sing_Chicken_Curry_Puff_Pastry.jpg"
};

// Concise 100% Zabiha Hand-Slaughtered Halal Meat & Pastries Catalog
const defaultProducts = [
  // --- GOAT & MUTTON CUTS ---
  {
    id: 1,
    name: "Goat Curry Cut",
    desc: "Fresh Zabiha bone-in goat cubes. Ideal for curry, stew, and biryani.",
    category: "goat",
    price: 12.99,
    unit: "per lb",
    status: "100% Zabiha",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raw_goat_meat.jpg"
  },
  {
    id: 2,
    name: "Ground Goat (Keema)",
    desc: "Freshly minced 100% Zabiha goat meat. Lean and rich in flavor.",
    category: "goat",
    price: 13.99,
    unit: "per lb",
    status: "Minced Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hackfleisch-1.jpg"
  },
  {
    id: 3,
    name: "Goat Chops & Ribs",
    desc: "Juicy, hand-trimmed rib chops. Perfect for grilling or searing.",
    category: "goat",
    price: 14.49,
    unit: "per lb",
    status: "Fresh Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Beef_shank.jpg"
  },
  {
    id: 4,
    name: "Goat Leg (Raan)",
    desc: "Bone-in Zabiha goat leg. Available whole or sliced into steaks.",
    category: "goat",
    price: 13.49,
    unit: "per lb",
    status: "Custom Trim",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 5,
    name: "Goat Shoulder Cut",
    desc: "Tender bone-in goat shoulder chunks. Great for slow stews.",
    category: "goat",
    price: 12.99,
    unit: "per lb",
    status: "Fresh Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 6,
    name: "Goat Biryani Cut",
    desc: "Large bone-in goat chunks sized specifically for dum biryani.",
    category: "goat",
    price: 13.29,
    unit: "per lb",
    status: "Biryani Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 7,
    name: "Goat Shank (Nalli)",
    desc: "Marrow-rich bone-in goat shanks for slow-cooked gravies.",
    category: "goat",
    price: 13.99,
    unit: "per lb",
    status: "Marrow Rich",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Beef_shank.jpg"
  },
  {
    id: 8,
    name: "Boneless Goat Cubes",
    desc: "Pure boneless goat tenderloin cubes, trimmed of excess fat.",
    category: "goat",
    price: 15.99,
    unit: "per lb",
    status: "Pure Boneless",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },

  // --- HALAL BEEF CUTS ---
  {
    id: 9,
    name: "Beef Curry Cut",
    desc: "Grass-fed Zabiha beef bone-in curry chunks. Rich stew base.",
    category: "beef",
    price: 8.99,
    unit: "per lb",
    status: "Grass-Fed",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Raw_beef.jpg"
  },
  {
    id: 10,
    name: "Beef Nihari Shank (Nalli)",
    desc: "Bone-in beef shanks with rich marrow. Perfect for Nihari.",
    category: "beef",
    price: 9.99,
    unit: "per lb",
    status: "Nalli Shank",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Beef_shank.jpg"
  },
  {
    id: 11,
    name: "Ground Beef (Keema)",
    desc: "Fresh lean Zabiha ground beef minced daily at counter.",
    category: "beef",
    price: 7.99,
    unit: "per lb",
    status: "Ground Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hackfleisch-1.jpg"
  },
  {
    id: 12,
    name: "Beef Ribeye Steak",
    desc: "Thick-cut grass-fed Zabiha ribeye. Tender and well marbled.",
    category: "beef",
    price: 14.99,
    unit: "per lb",
    status: "Steakhouse",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 13,
    name: "Beef Bihari Strips",
    desc: "Thinly sliced tender beef strips for wraps and Bihari boti.",
    category: "beef",
    price: 10.99,
    unit: "per lb",
    status: "Thin Sliced",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Raw_beef.jpg"
  },
  {
    id: 14,
    name: "Beef Short Ribs",
    desc: "Meaty beef short ribs. Great for BBQ, smoking, or braising.",
    category: "beef",
    price: 11.99,
    unit: "per lb",
    status: "BBQ Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 15,
    name: "Beef Boneless Cubes",
    desc: "Lean boneless beef trimmed into uniform cooking cubes.",
    category: "beef",
    price: 9.49,
    unit: "per lb",
    status: "Clean Trim",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Raw_beef.jpg"
  },
  {
    id: 16,
    name: "Beef Tenderloin Fillet",
    desc: "Melt-in-your-mouth whole beef tenderloin fillet.",
    category: "beef",
    price: 18.99,
    unit: "per lb",
    status: "Prime Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },

  // --- CHICKEN & POULTRY CUTS ---
  {
    id: 17,
    name: "Whole Skinless Chicken",
    desc: "Fresh Zabiha whole chicken cut to your preference.",
    category: "chicken",
    price: 3.49,
    unit: "per lb",
    status: "Cut Free",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Whole_raw_chicken_-_Japan_Dec_22_2019.jpeg"
  },
  {
    id: 18,
    name: "Chicken Curry Cut",
    desc: "Fresh skinless bone-in chicken pieces for daily curry.",
    category: "chicken",
    price: 3.99,
    unit: "per lb",
    status: "Daily Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Raw_leg_chicken_quarters.jpg"
  },
  {
    id: 19,
    name: "Chicken Breast Cubes",
    desc: "Skinless boneless chicken breast trimmed into uniform cubes.",
    category: "chicken",
    price: 6.49,
    unit: "per lb",
    status: "Pure Boneless",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Raw_chicken.jpg"
  },
  {
    id: 20,
    name: "Boneless Chicken Thighs",
    desc: "Juicy boneless dark meat chicken thighs for grilling.",
    category: "chicken",
    price: 5.99,
    unit: "per lb",
    status: "Juicy Dark",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Raw_chicken_thighs.jpg"
  },
  {
    id: 21,
    name: "Chicken Drumsticks",
    desc: "Plump fresh chicken drumsticks for tandoori or curry.",
    category: "chicken",
    price: 3.79,
    unit: "per lb",
    status: "Farm Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Raw_chicken_drumsticks_%283312851753%29.jpg"
  },
  {
    id: 22,
    name: "Chicken Party Wings",
    desc: "Split chicken wingettes & drumettes ready for frying.",
    category: "chicken",
    price: 3.99,
    unit: "per lb",
    status: "Fresh Split",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Raw_chicken_wings.jpg"
  },
  {
    id: 23,
    name: "Ground Chicken (Keema)",
    desc: "Fresh ground lean chicken minced daily at counter.",
    category: "chicken",
    price: 5.99,
    unit: "per lb",
    status: "Ground Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hackfleisch-1.jpg"
  },

  // --- HALAL LAMB CUTS ---
  {
    id: 24,
    name: "Lamb Chops",
    desc: "Juicy Zabiha lamb rib chops. Great for searing or grilling.",
    category: "lamb",
    price: 14.99,
    unit: "per lb",
    status: "Gourmet Cut",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Beef_shank.jpg"
  },
  {
    id: 25,
    name: "Lamb Curry Cut",
    desc: "Sweet bone-in Zabiha lamb chunks for Rogan Josh & pulao.",
    category: "lamb",
    price: 12.99,
    unit: "per lb",
    status: "Zabiha Halal",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },
  {
    id: 26,
    name: "Lamb Shank (Nalli)",
    desc: "Whole Zabiha lamb shanks rich in meat and bone marrow.",
    category: "lamb",
    price: 13.99,
    unit: "per lb",
    status: "Prime Shank",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Beef_shank.jpg"
  },
  {
    id: 27,
    name: "Lamb Leg",
    desc: "Bone-in lamb leg. Available whole or sliced into steaks.",
    category: "lamb",
    price: 13.49,
    unit: "per lb",
    status: "Custom Trim",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },

  // --- MARINATED & BBQ READY CUTS ---
  {
    id: 28,
    name: "Tandoori Chicken",
    desc: "Zabiha chicken marinated in yogurt, lemon, and tandoori spices.",
    category: "marinated",
    price: 5.49,
    unit: "per lb",
    status: "House Marinade",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Marinated_Tandoori_Chicken_pieces.JPG"
  },
  {
    id: 29,
    name: "Malai Chicken Boti",
    desc: "Tender boneless chicken breast marinated in cream & white pepper.",
    category: "marinated",
    price: 6.99,
    unit: "per lb",
    status: "Creamy Malai",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Raw_chicken.jpg"
  },
  {
    id: 30,
    name: "Bihari Beef Boti",
    desc: "Tenderized beef boti infused with papaya & aromatic Bihari spices.",
    category: "marinated",
    price: 11.99,
    unit: "per lb",
    status: "Ready to BBQ",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Raw_beef_steak%2C_2011.jpg"
  },

  // --- MEAT PASTRIES & SAMOSAS ---
  {
    id: 31,
    name: "Beef Samosas (6-Pk)",
    desc: "Golden crispy pastries filled with spiced ground Zabiha beef.",
    category: "pastries",
    price: 6.99,
    unit: "6-Pk",
    status: "Fresh Baked",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Samosa_4.jpg"
  },
  {
    id: 32,
    name: "Chicken Samosas (6-Pk)",
    desc: "Flaky pastry crust stuffed with seasoned ground chicken & peas.",
    category: "pastries",
    price: 6.49,
    unit: "6-Pk",
    status: "Crispy Flaky",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Samosa_4.jpg"
  },
  {
    id: 33,
    name: "Beef Meat Pie",
    desc: "Bakery golden puff pastry pie stuffed with slow-braised beef.",
    category: "pastries",
    price: 4.99,
    unit: "per pie",
    status: "Freshly Baked",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Inside_Yank_Sing_Chicken_Curry_Puff_Pastry_%2815271515734%29.jpg"
  },
  {
    id: 34,
    name: "Chicken Puff Pastry",
    desc: "Golden buttery puff pastry pocket filled with creamy chicken.",
    category: "pastries",
    price: 4.49,
    unit: "per piece",
    status: "Bakery Fresh",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Inside_Yank_Sing_Chicken_Curry_Puff_Pastry_%2815271515734%29.jpg"
  },
  {
    id: 35,
    name: "Beef Shami Kababs (4-Pk)",
    desc: "Pan-seared spiced beef & lentil patties. Heat and serve.",
    category: "pastries",
    price: 8.99,
    unit: "4-Pk",
    status: "Ready to Heat",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Shami_Kabab.JPG"
  },
  {
    id: 36,
    name: "Halal Beef Empanadas (3-Pack)",
    desc: "Golden pastry turnovers stuffed with savory minced Zabiha beef, herbs, and warm Latin spices.",
    category: "pastries",
    price: 5.99,
    unit: "3-Pack",
    status: "Golden Baked",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Empanada_-_Stu_Spivack.jpg"
  },
  {
    id: 37,
    name: "Spicy Mutton Keema Puff",
    desc: "Traditional bakery-style puff pastry stuffed with spicy minced goat & mutton, green chilies, and coriander.",
    category: "pastries",
    price: 4.99,
    unit: "per piece",
    status: "Hot & Flaky",
    halal: true,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Inside_Yank_Sing_Chicken_Curry_Puff_Pastry_%2815271515734%29.jpg"
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
  const distance = ((hash % 95) / 10) + 1.2;
  const eligible = distance <= 10.0;
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

// Safe localStorage accessor that gracefully handles Incognito mode & blocked storage
const safeGetStorage = (key) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
  } catch (err) {
    console.warn("Storage access denied:", err);
  }
  return null;
};

const safeSetStorage = (key, value) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch (err) {
    console.warn("Storage write denied:", err);
  }
};

// Rotating Hero Meat Cut Background Slideshow Items
const rotatingMeatSlides = [
  {
    name: "Zabiha Goat Curry Cut",
    tag: "🐐 GOAT & MUTTON",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raw_goat_meat.jpg"
  },
  {
    name: "Fresh Poultry Legs",
    tag: "🍗 FRESH POULTRY",
    img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Black Angus Beef Steaks",
    tag: "🥩 ANGUS BEEF",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Artisanal Grilled Meat Cuts",
    tag: "🔥 MARINATED & GRILL",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Bakery Samosas & Pastries",
    tag: "🥟 MEAT PASTRIES",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
  }
];

function App() {
  // Navigation & Language States
  const [currentLang, setCurrentLang] = useState(() => {
    return safeGetStorage('qhm_lang') || 'en';
  });

  const [currentView, setCurrentView] = useState('home'); // 'home' | 'counter'

  const navigateTo = (view, sectionId) => {
    setCurrentView(view);
    const targetId = sectionId || (view === 'counter' ? 'counter' : null);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState({ 1: false, 2: false });
  const [lightboxImg, setLightboxImg] = useState(null);

  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setHeroSlideIdx(prev => (prev + 1) % rotatingMeatSlides.length);
    }, 3200);
    return () => clearInterval(slideTimer);
  }, []);

  // Dynamic Products List with LocalStorage Persistence (Meat & Pastries Catalog v7)
  const [productsList, setProductsList] = useState(() => {
    const saved = safeGetStorage('qhm_products_meat_v9');
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
  const [editingProduct, setEditingProduct] = useState(null);
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
    try {
      const stored = safeGetStorage('qhm_cart');
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error reading cart from localStorage", e);
      return [];
    }
  });
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Customization States
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
  const [orderType, setOrderType] = useState('pickup');
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

  // Persistent Order Queue for Store Owner & Thermal Printing
  const [allOrdersList, setAllOrdersList] = useState(() => {
    try {
      const saved = safeGetStorage('qhm_store_orders_v1');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error reading store orders from localStorage", e);
      return [];
    }
  });
  const [printReceiptOrder, setPrintReceiptOrder] = useState(null);
  const [adminTab, setAdminTab] = useState('inventory'); // 'inventory' | 'orders'

  useEffect(() => {
    safeSetStorage('qhm_store_orders_v1', JSON.stringify(allOrdersList));
  }, [allOrdersList]);

  const generateStorePhoneMessage = (order) => {
    if (!order) return '';
    let text = `🥩 *NEW ORDER ${order.orderId}* 🥩\n`;
    text += `👤 *Customer:* ${order.name}\n`;
    text += `📞 *Phone:* ${order.phone}\n`;
    text += `📋 *Type:* ${order.type.toUpperCase()}\n`;
    if (order.address) text += `📍 *Address:* ${order.address}\n`;
    text += `🕒 *Time:* ${order.date} at ${order.time}\n\n`;
    text += `🛒 *ORDER ITEMS:*\n`;
    order.items.forEach(item => {
      text += `• ${item.qty}x ${item.name} ($${(item.price * item.qty).toFixed(2)})\n`;
      if (item.customizations) {
        if (item.customizations.style) text += `  - Cut: ${item.customizations.style}\n`;
        if (item.customizations.trim) text += `  - Trim: ${item.customizations.trim}\n`;
        if (item.customizations.skin) text += `  - Skin: ${item.customizations.skin}\n`;
        if (item.customizations.notes) text += `  - Notes: ${item.customizations.notes}\n`;
      }
    });
    const subtotal = order.subtotal || 0;
    const fee = order.deliveryFee || 0;
    const total = order.total || (subtotal * 1.0825 + fee);
    text += `\n💰 *TOTAL:* $${total.toFixed(2)}`;
    if (order.notes) text += `\n📝 *Customer Note:* ${order.notes}`;
    return text;
  };

  const dispatchToStorePhone = (order) => {
    const message = generateStorePhoneMessage(order);
    const whatsappUrl = `https://wa.me/15122607677?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showToast("Store Phone Alert Dispatched", `Notification sent to 512.260.7677 for Order ${order.orderId}`);
  };

  const printFrontDeskReceipt = (order) => {
    setPrintReceiptOrder(order);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  // Toast State
  const [toast, setToast] = useState({ isOpen: false, title: '', message: '' });

  // Card quantities for catalog level quick-add
  const [cardQuantities, setCardQuantities] = useState(() => {
    const qtys = {};
    productsList.forEach(p => { qtys[p.id] = 1; });
    return qtys;
  });

  // Translation Helper
  const txt = (key) => {
    return (translations[currentLang] && translations[currentLang][key]) || translations['en'][key] || key;
  };

  // Sync Language
  useEffect(() => {
    safeSetStorage('qhm_lang', currentLang);
  }, [currentLang]);

  // Sync Products to LocalStorage
  useEffect(() => {
    safeSetStorage('qhm_products_meat_v9', JSON.stringify(productsList));
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
    safeSetStorage('qhm_cart', JSON.stringify(cart));
  }, [cart]);

  // Leaflet Map Initialization
  useEffect(() => {
    if (window.L) {
      try {
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
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          });

          const marker = L.marker([storeLat, storeLng], { icon: greenIcon }).addTo(map);
          marker.bindPopup(`
            <div style="color: #0f172a; padding: 5px; font-family: 'Outfit', sans-serif;">
              <strong style="font-size: 1.1rem; color: #064e3b; display: block; margin-bottom: 2px;">Quality Halal Market</strong>
              <span style="font-size: 0.85rem; color: #64748b; display: block; margin-bottom: 8px;">Fresh Zabiha Halal Meats & Pastries</span>
              <a href="https://maps.google.com/?q=Quality+Halal+Market+12920+West+Parmer+Lane+106+Cedar+Park+TX+78613" target="_blank" style="
                display: inline-block;
                background-color: #064e3b;
                color: white;
                padding: 6px 12px;
                border-radius: 6px;
                text-decoration: none;
                font-size: 0.8rem;
                font-weight: 600;
              ">Get Directions &rarr;</a>
            </div>
          `);
        }
      } catch (err) {
        console.warn("Leaflet map initialization skipped:", err);
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
    if (selectedProduct && selectedProduct.name) {
      setModalQty(1);
      setCustomNotes('');
      const prodName = (selectedProduct.name || '').toLowerCase();
      const isChicken = prodName.includes('chicken');
      const isSteak = prodName.includes('ribeye') || prodName.includes('steak');
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
    setCurrentView('counter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      alert("Sorry, this item is currently out of stock!");
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
    showToast("Item Added", `${selectedProduct.name} added to your order.`);
  };

  const quickAddToCart = (product, e) => {
    e.stopPropagation();
    if (product.inStock === false) {
      alert("Sorry, this item is currently out of stock!");
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

  const cartCountTotal = () => (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + (Number(item?.qty) || 0), 0);
  
  const cartSubtotal = () => (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + ((Number(item?.price) || 0) * (Number(item?.qty) || 0)), 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    const activeAddress = orderType === 'delivery' ? checkoutAddress : '';
    const deliveryDetails = activeAddress ? getDeliveryInfo(activeAddress) : null;
    const deliveryFee = (deliveryDetails && deliveryDetails.eligible) ? deliveryDetails.fee : 0;
    const finalFee = cartSubtotal() >= 75 ? 0 : deliveryFee;
    const sub = cartSubtotal();
    const taxAmt = sub * 0.0825;
    const totalAmt = sub + taxAmt + finalFee;

    const orderObj = {
      orderId: `#QHM-${Math.floor(10000 + Math.random() * 90000)}`,
      name: checkoutName,
      phone: checkoutPhone,
      type: orderType,
      date: checkoutDate || new Date().toISOString().split('T')[0],
      time: checkoutTime,
      address: activeAddress,
      subtotal: sub,
      deliveryFee: finalFee,
      tax: taxAmt,
      total: totalAmt,
      notes: checkoutNotes,
      items: [...cart],
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Placed'
    };

    setActiveOrder(orderObj);
    setPrintReceiptOrder(orderObj);
    setAllOrdersList(prev => [orderObj, ...prev]);
    setCurbsideNotified(false);
    setCurbsideVehicularStatus('');
    setDeliveryStep(0);

    // Reset checkout & cart
    setCart([]);
    setIsCheckoutModalOpen(false);
    showToast("Order Successfully Placed!", `Order ID: ${orderObj.orderId}. Notifying store phone (512.260.7677) & front desk printer.`);
  };

  // --- ADMIN PORTAL ACTIONS ---
  const handleAdminLogin = (e) => {
    if (e) e.preventDefault();
    if (adminPasscode === '1234' || adminPasscode === 'admin' || adminPasscode === '') {
      setIsAdminLoggedIn(true);
      showToast("Store Owner Authenticated", "Welcome, Store Owner! You now have full access to manage all items.");
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
      showToast("Item Deleted", `${target.name} removed from inventory.`);
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
      showToast("Item Updated", `Successfully updated "${formName}".`);
    } else {
      const newId = Math.max(...productsList.map(p => p.id), 0) + 1;
      const newProd = {
        id: newId,
        name: formName,
        category: formCategory,
        price: priceNum,
        unit: formUnit,
        status: formStatus,
        img: formImg || presetImages[formCategory] || presetImages.goat,
        desc: formDesc || "Fresh Zabiha halal selection, prepared daily by our certified butchers.",
        halal: formHalal,
        inStock: formInStock
      };
      setProductsList(prev => [newProd, ...prev]);
      setCardQuantities(prev => ({ ...prev, [newId]: 1 }));
      showToast("New Item Added", `"${formName}" is now live on your store counter.`);
    }

    setIsEditorModalOpen(false);
  };

  const handleResetCatalog = () => {
    if (window.confirm("Reset catalog back to original Zabiha Halal meat cuts and pastries list?")) {
      setProductsList(defaultProducts);
      localStorage.removeItem('qhm_products_meat_v5');
      showToast("Catalog Reset", "Restored default Zabiha Halal inventory.");
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
      case 'goat': return txt('goatCat');
      case 'beef': return txt('beefCat');
      case 'chicken': return txt('chickenCat');
      case 'lamb': return txt('lambCat');
      case 'marinated': return txt('marinatedCat');
      case 'pastries': return txt('pastriesCat');
      default: return 'Fresh Meat Cut';
    }
  };

  return (
    <div dir={currentLang === 'ur' ? 'rtl' : 'ltr'}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Top Live Announcement Header Banner */}
      <div className="top-live-banner" style={{ background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #047857 100%)', color: 'white', padding: '0.35rem 2rem', fontSize: '0.8rem', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '1001', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }}></span>
          <span>LIVE STORE COUNTER: Open Today 9:00 AM - 9:00 PM</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>100% Zabiha Halal Guarantee</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>Free Cedar Park Delivery Over $75</span>
        </div>

        {/* Clean Compact Language Switcher */}
        <div className="language-selector" style={{ margin: 0, padding: '2px 8px', background: 'rgba(0,0,0,0.25)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <Globe size={13} style={{ color: '#34d399' }} />
          <select 
            value={currentLang} 
            onChange={(e) => setCurrentLang(e.target.value)}
            className="lang-select"
            aria-label="Select Interface Language"
            style={{ fontSize: '0.78rem', color: 'white', border: 'none', background: 'transparent', padding: '2px 4px', cursor: 'pointer' }}
          >
            <option value="en" style={{ color: 'black' }}>🇬🇧 English</option>
            <option value="ur" style={{ color: 'black' }}>🇵🇰 اردو (Urdu)</option>
            <option value="es" style={{ color: 'black' }}>🇪🇸 Español</option>
          </select>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="header">
        <div className="container nav-container">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="logo" style={{ marginRight: '2.5rem' }}>
            <div className="logo-icon">Q</div>
            Quality Halal<span style={{ marginLeft: '6px' }}>Meat Market</span>
          </a>
          
          <ul className="nav-links" style={{ gap: '1.75rem' }}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a></li>
            <li><a href="#specialties" onClick={(e) => { e.preventDefault(); navigateTo('home', 'specialties'); }} className="nav-link">Departments</a></li>
            <li><a href="#delivery-section" onClick={(e) => { e.preventDefault(); navigateTo('home', 'delivery-section'); }} className="nav-link">Delivery</a></li>
            <li><a href="#counter" onClick={(e) => { e.preventDefault(); navigateTo('counter'); }} className={`nav-link ${currentView === 'counter' ? 'active' : ''}`}>Counter</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('home', 'about'); }} className="nav-link">About</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('home', 'contact'); }} className="nav-link">Contact</a></li>
          </ul>
          
          <div className="nav-cta" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button 
              className={`admin-nav-btn ${isAdminLoggedIn ? 'logged-in' : ''}`}
              onClick={() => setIsAdminModalOpen(true)}
              title="Manage store inventory & meat cuts"
              style={{ padding: '0.55rem 0.9rem', fontSize: '0.82rem' }}
            >
              <ShieldCheck size={15} />
              {isAdminLoggedIn ? "Dashboard" : "Owner Login"}
            </button>

            <button 
              className="btn-cyan-glow" 
              onClick={() => navigateTo('counter')}
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              Order Counter <ArrowRight size={14} />
            </button>
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
          <a href="#home" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home'); }} className="logo">
            <div className="logo-icon">Q</div>
            Quality Halal<span>Meat Market</span>
          </a>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home'); }} className="drawer-link">{txt('home')}</a></li>
          <li><a href="#specialties" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home', 'specialties'); }} className="drawer-link">{txt('departments')}</a></li>
          <li><a href="#delivery-section" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home', 'delivery-section'); }} className="drawer-link">{txt('deliveryZone')}</a></li>
          <li><a href="#counter" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('counter'); }} className="drawer-link">{txt('counter')}</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home', 'about'); }} className="drawer-link">{txt('aboutUs')}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigateTo('home', 'contact'); }} className="drawer-link">{txt('contact')}</a></li>
        </ul>
        <div className="drawer-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="language-selector" style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}>
            <Globe size={16} style={{ color: 'var(--primary-light)' }} />
            <select 
              value={currentLang} 
              onChange={(e) => setCurrentLang(e.target.value)}
              className="lang-select"
              style={{ fontSize: '1rem' }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="ur">🇵🇰 اردو (Urdu)</option>
              <option value="es">🇪🇸 Español (Spanish)</option>
            </select>
          </div>

          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', justifyContent: 'center', borderColor: '#f59e0b', color: '#f59e0b' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsAdminModalOpen(true);
            }}
          >
            <ShieldCheck size={16} />
            {txt('ownerAccess')}
          </button>
          
          <a href="tel:5122607677" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={16} style={{ marginRight: '8px' }} />
            512.260.7677
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="slideshow-stacked-container">
            {rotatingMeatSlides.map((slide, idx) => (
              <img
                key={idx}
                src={slide.img}
                alt={slide.name}
                className={`slideshow-slide-img ${idx === heroSlideIdx ? 'active' : ''}`}
                style={{ filter: 'brightness(0.35) contrast(1.1)' }}
              />
            ))}
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(7, 10, 19, 0.45) 0%, rgba(7, 10, 19, 0.95) 100%)', pointerEvents: 'none' }}></div>
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} style={{ marginRight: '6px', color: 'var(--secondary-light)' }} />
              {txt('heroBadge')}
            </div>
            <h1 className="hero-title">
              Fresh Zabiha Halal <span>Butcher Counter</span>
            </h1>
            <p className="hero-subtitle">
              Sourcing pristine 100% hand-slaughtered Zabiha goat, lamb, beef, chicken, meat pastries & samosas in Cedar Park. Custom cut and trimmed to order by master butchers.
            </p>

            {/* Live Activity & Trust Stats Ticker */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontSize: '0.85rem' }}>
                <Sparkles size={16} style={{ color: '#f59e0b' }} />
                <span><strong>129+</strong> Orders Delivered This Week</span>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontSize: '0.85rem' }}>
                <Award size={16} style={{ color: '#10b981' }} />
                <span>Custom Trimmed to Order</span>
              </div>
            </div>

            <div className="hero-btns">
              <a href="#counter" onClick={(e) => { e.preventDefault(); navigateTo('counter'); }} className="btn-cyan-glow">
                {txt('shopCounter')}
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#delivery-section" onClick={(e) => { e.preventDefault(); navigateTo('home', 'delivery-section'); }} className="btn btn-secondary">
                <Truck size={16} style={{ marginRight: '8px', color: 'var(--primary-light)' }} />
                {txt('checkDelivery')}
              </a>
            </div>
          </div>
          
          {/* Hero Right side: Vertical Live Butcher Counter Showcase Frame with Stacked Dissolve Slideshow */}
          <div className="hero-card-container">
            <div className="live-counter-phone-card">
              <div className="live-counter-header-tag">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444' }}></span>
                <span>📹 LIVE BUTCHER WORK • CEDAR PARK TX</span>
              </div>

              <div className="live-counter-media-body">
                <div className="slideshow-stacked-container">
                  {rotatingMeatSlides.map((slide, idx) => (
                    <img 
                      key={idx}
                      src={slide.img} 
                      alt={slide.name}
                      className={`slideshow-slide-img ${idx === heroSlideIdx ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <div className="live-counter-caption-tag">
                  <div style={{ color: '#34d399', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                    {rotatingMeatSlides[heroSlideIdx].tag}
                  </div>
                  <div>{rotatingMeatSlides[heroSlideIdx].name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '2px', fontWeight: 'normal' }}>
                    100% Hand-Slaughtered Zabiha Halal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentView === 'home' ? (
        <>
          {/* Southern Steer Template: "A Cut Above the Rest" Feature Section */}
          <section className="section bg-light" style={{ padding: '4.5rem 0', background: 'rgba(7, 10, 19, 0.95)' }}>
            <div className="container text-center">
              <h2 className="section-title" style={{ fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'white', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: '800' }}>
                A Cut Above the Rest
              </h2>
              <p style={{ maxWidth: '820px', margin: '0 auto 3rem auto', color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Whether you want goat curry cuts, lamb chops, beef tenderloin, chicken breast, or freshly baked samosas, our artisanal Zabiha meats are a cut above the rest. Our meats are domestically raised, 100% hand-slaughtered, and sustainably sourced so you feel good about what you cook.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {/* Category Card 1 */}
                <div className="category-post-group" style={{ background: `linear-gradient(to top, rgba(7,10,19,0.95) 0%, rgba(7,10,19,0.3) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Raw_leg_chicken_quarters.jpg/1280px-Raw_leg_chicken_quarters.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '360px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Goat &amp; Mutton</h3>
                  <button onClick={() => handleSpecialtyRedirect('goat')} className="btn-red" style={{ margin: '0 auto' }}>Explore Goat Cuts</button>
                </div>

                {/* Category Card 2 */}
                <div className="category-post-group" style={{ background: `linear-gradient(to top, rgba(7,10,19,0.95) 0%, rgba(7,10,19,0.3) 100%), url('https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '360px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Black Angus Beef</h3>
                  <button onClick={() => handleSpecialtyRedirect('beef')} className="btn-red" style={{ margin: '0 auto' }}>Explore Beef Cuts</button>
                </div>

                {/* Category Card 3 */}
                <div className="category-post-group" style={{ background: `linear-gradient(to top, rgba(7,10,19,0.95) 0%, rgba(7,10,19,0.3) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Raw_chicken.jpg/1280px-Raw_chicken.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '360px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Fresh Poultry</h3>
                  <button onClick={() => handleSpecialtyRedirect('chicken')} className="btn-red" style={{ margin: '0 auto' }}>Explore Poultry Cuts</button>
                </div>

                {/* Category Card 4 */}
                <div className="category-post-group" style={{ background: `linear-gradient(to top, rgba(7,10,19,0.95) 0%, rgba(7,10,19,0.3) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Inside_Yank_Sing_Chicken_Curry_Puff_Pastry.jpg/1280px-Inside_Yank_Sing_Chicken_Curry_Puff_Pastry.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '360px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Pastries &amp; Samosas</h3>
                  <button onClick={() => handleSpecialtyRedirect('pastries')} className="btn-red" style={{ margin: '0 auto' }}>Explore Pastries</button>
                </div>
              </div>
            </div>
          </section>

          {/* Southern Steer Template: Double Content Feature Rows */}
          <section className="section" style={{ padding: '4.5rem 0', background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', color: 'white' }}>
                    All about the Experience
                  </h2>
                  <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Creating the perfect meal isn’t just about quality food—it’s about butcher preparation, custom cut thickness, fat trimming, and marinades. At Quality Halal Market, our certified butchers cut and prepare every item to your exact specifications.
                  </p>
                  <button onClick={() => navigateTo('counter')} className="btn-red">
                    View Butcher Counter
                  </button>
                </div>
                <div>
                  <img src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg" alt="Butcher Experience" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', width: '100%', height: '340px', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" alt="Signature Boxes" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', width: '100%', height: '340px', objectFit: 'cover' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', color: 'white' }}>
                    Quality Halal Signature Boxes
                  </h2>
                  <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Looking for convenience and savings? Explore Quality Halal Signature Meat Boxes—from Family Quarter Boxes to Party Grill Boxes, available for express pickup or on-demand delivery!
                  </p>
                  <button onClick={() => navigateTo('counter')} className="btn-red">
                    View Signature Boxes
                  </button>
                </div>
              </div>

            </div>
          </section>



          {/* Featured Fresh Meats Showcase (Homepage Selection) */}
          <section className="section bg-light" style={{ paddingBottom: '3.5rem' }}>
            <div className="container">
              <div className="text-center" style={{ marginBottom: '3rem' }}>
                <span className="subtitle">Curated Fresh Selection</span>
                <h2 className="section-title">Featured Halal Cuts &amp; Best-Sellers</h2>
                <p className="section-desc">
                  A preview of our daily hand-slaughtered Zabiha meats and bakery pastries. Explore our full catalog in the Butcher Counter below!
                </p>
              </div>

              {/* Featured 6 Products Grid */}
              <div className="products-grid">
                {productsList.slice(0, 6).map((p) => {
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
                          <span className="out-of-stock-badge">{txt('outOfStock')}</span>
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
                          {isOut ? txt('unavailable') : (p.category === 'pastries' ? txt('quickAdd') : txt('customizeCut'))}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Big CTA to View Full Butcher Counter */}
              <div className="text-center" style={{ marginTop: '3rem' }}>
                <button 
                  className="btn btn-primary" 
                  style={{ padding: '0.9rem 2.4rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)' }}
                  onClick={() => navigateTo('counter')}
                >
                  Explore Full Butcher Counter (All {productsList.length} Cuts &amp; Pastries)
                  <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          </section>

          {/* Meat Departments Section */}
          <section id="specialties" className="section">
            <div className="container">
              <div className="text-center" style={{ marginBottom: '4rem' }}>
                <span className="subtitle">100% Zabiha Halal</span>
                <h2 className="section-title">{txt('deptTitle')}</h2>
                <p className="section-desc">
                  {txt('deptDesc')}
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
                    <h3 className="dept-title">{txt('goatCat')}</h3>
                    <p className="dept-desc">Hand-slaughtered goat curry cuts, ground keema, tender rib chops, bone-in shoulder, biryani cuts, and whole roasted raan.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('goat'); }} className="dept-link">
                      {txt('shopCounter')}
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
                    <h3 className="dept-title">{txt('beefCat')}</h3>
                    <p className="dept-desc">Grass-fed Zabiha beef curry cuts, bone-in Nalli Nihari shanks, marbled ribeye steaks, lean ground keema, and Bihari boti strips.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('beef'); }} className="dept-link">
                      {txt('shopCounter')}
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
                    <h3 className="dept-title">{txt('chickenCat')}</h3>
                    <p className="dept-desc">Fresh whole skinless chicken cut to order (8/12/16 pcs), boneless breast cubes for tikka, tender drumsticks, and party wings.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('chicken'); }} className="dept-link">
                      {txt('shopCounter')}
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
                    <h3 className="dept-title">{txt('lambCat')}</h3>
                    <p className="dept-desc">Juicy hand-trimmed lamb rib chops, bone-in lamb curry cuts, Nalli shanks for slow cooking, and fresh ground lamb keema.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('lamb'); }} className="dept-link">
                      {txt('shopCounter')}
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
                    <h3 className="dept-title">{txt('marinatedCat')}</h3>
                    <p className="dept-desc">Signature marinated tandoori chicken cuts, tenderized Bihari beef boti, creamy malai boti, prepared spicy seekh kabab skewers.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('marinated'); }} className="dept-link">
                      {txt('shopCounter')}
                      <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                </div>

                {/* Dept 6: Meat Pastries & Samosas */}
                <div className="dept-card">
                  <div className="dept-img-wrapper">
                    <img src={presetImages.pastries} alt="Meat Pastries & Samosas" className="dept-img" />
                    <div className="dept-badge">Fresh Bakery & Snacks</div>
                  </div>
                  <div className="dept-content">
                    <h3 className="dept-title">{txt('pastriesCat')}</h3>
                    <p className="dept-desc">Handcrafted beef & chicken keema samosas, bakery-style beef gravy meat pies, chicken & mushroom puffs, and empanadas.</p>
                    <a href="#counter" onClick={(e) => { e.preventDefault(); handleSpecialtyRedirect('pastries'); }} className="dept-link">
                      {txt('shopCounter')}
                      <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Delivery Address Checker Section */}
          <section id="delivery-section" className="section delivery-checker-section bg-light">
            <div className="container">
              <div className="delivery-grid-layout">
                <div className="delivery-card-main">
                  <span className="subtitle">Uber-Eats Style Delivery</span>
                  <h2 className="section-title" style={{ textAlign: 'left', margin: '0.25rem 0 1rem 0' }}>{txt('deliveryTitle')}</h2>
                  <p className="delivery-subtitle-desc">
                    We deliver fresh Zabiha meat cuts and savory meat pastries right to your doorstep within a 10-mile radius in temperature-controlled insulated packaging.
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
                        {checkingZone ? "Analyzing Zone..." : txt('verifyDelivery')}
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
        </>
      ) : (
        /* Butcher Counter Dedicated Page View Header Banner */
        <>
          <div className="section bg-dark text-white" style={{ paddingTop: '110px', paddingBottom: '2.5rem', background: 'linear-gradient(135deg, #091310 0%, #112820 100%)', textAlign: 'center' }}>
            <div className="container">
              <button 
                className="btn btn-secondary" 
                style={{ marginBottom: '1.5rem', fontSize: '0.85rem', padding: '0.45rem 1.1rem', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}
                onClick={() => navigateTo('home')}
              >
                &larr; Return to Home Page
              </button>
              <br />
              <span className="subtitle" style={{ color: '#10b981' }}>100% Hand-Slaughtered Zabiha Halal</span>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 900, margin: '0.5rem 0', color: '#ffffff' }}>The Butcher Counter</h1>
              <p style={{ maxWidth: '680px', margin: '0 auto', color: '#9ca3af', fontSize: '1.05rem' }}>
                Explore our full catalog of fresh meat cuts, custom butcher preps, marinated BBQ botis, and bakery pastries. Custom cut and trimmed to order.
              </p>
            </div>
          </div>

          {/* Virtual Counter Section */}
          <section id="counter" className="section bg-light">
            <div className="container">
              <div className="text-center" style={{ marginBottom: '4rem' }}>
                <span className="subtitle">Interactive Counter</span>
                <h2 className="section-title">{txt('counter')}</h2>
                <p className="section-desc">
                  Select your fresh Zabiha meat cuts or bakery meat pastries below, choose custom butcher prep styles, and order for store pickup or local delivery.
                </p>
                
                {/* Filter Tabs */}
                <div className="filter-tabs">
                  <button className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>{txt('allCuts')} ({productsList.length})</button>
                  <button className={`tab-btn ${activeCategory === 'goat' ? 'active' : ''}`} onClick={() => setActiveCategory('goat')}>{txt('goatCat')}</button>
                  <button className={`tab-btn ${activeCategory === 'beef' ? 'active' : ''}`} onClick={() => setActiveCategory('beef')}>{txt('beefCat')}</button>
                  <button className={`tab-btn ${activeCategory === 'chicken' ? 'active' : ''}`} onClick={() => setActiveCategory('chicken')}>{txt('chickenCat')}</button>
                  <button className={`tab-btn ${activeCategory === 'lamb' ? 'active' : ''}`} onClick={() => setActiveCategory('lamb')}>{txt('lambCat')}</button>
                  <button className={`tab-btn ${activeCategory === 'marinated' ? 'active' : ''}`} onClick={() => setActiveCategory('marinated')}>{txt('marinatedCat')}</button>
                  <button className={`tab-btn ${activeCategory === 'pastries' ? 'active' : ''}`} onClick={() => setActiveCategory('pastries')}>{txt('pastriesCat')}</button>
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
                          <span className="out-of-stock-badge">{txt('outOfStock')}</span>
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
                          {isOut ? txt('unavailable') : (p.category === 'pastries' ? txt('quickAdd') : txt('customizeCut'))}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-bento-grid">
            
            {/* Left Bento Card: Story & Contact Info */}
            <div className="about-info-card">
              <div className="card-header-badge">
                <Award size={16} style={{ color: 'var(--primary-light)' }} />
                <span>Quality You Can Trust</span>
              </div>
              
              <h2 className="about-title">About Quality Halal Market</h2>
              
              <p className="about-lead">
                Established with a vision to serve Cedar Park and the greater Austin community with pristine <strong>100% Zabiha Halal</strong> meats and handcrafted meat pastries. Under direct management by store owners, our customer service is as quality-oriented as our inventory.
              </p>
              
              <p className="about-text">
                Every cut of meat and pastry we offer is hand-slaughtered, custom trimmed, and thoroughly inspected to meet strict Zabiha halal guidelines.
              </p>

              {/* Contact Info Pills Grid */}
              <div className="about-contact-pills">
                <a href="tel:5122607677" className="contact-pill-item">
                  <div className="pill-icon"><Phone size={18} /></div>
                  <div className="pill-text">
                    <span className="pill-label">Phone Number</span>
                    <strong className="pill-value">512.260.7677</strong>
                  </div>
                </a>

                <div className="contact-pill-item">
                  <div className="pill-icon"><Printer size={18} /></div>
                  <div className="pill-text">
                    <span className="pill-label">Store Fax</span>
                    <strong className="pill-value">512.260.7734</strong>
                  </div>
                </div>

                <a href="mailto:QualityHalalMarket@gmail.com" className="contact-pill-item">
                  <div className="pill-icon"><Mail size={18} /></div>
                  <div className="pill-text">
                    <span className="pill-label">Email Us</span>
                    <strong className="pill-value">QualityHalalMarket@gmail.com</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Bento Card: Interactive Business Cards Showcase */}
            <div className="about-cards-card">
              <div className="card-header-badge yellow">
                <Rotate3d size={16} />
                <span>Store Business Cards • Click to Flip</span>
              </div>

              <div className="business-cards-container">
                {/* Card 1: Front */}
                <div 
                  className={`flip-card-wrapper ${flippedCards[1] ? 'flipped' : ''}`}
                  onClick={() => handleCardFlip(1)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={cardFront} alt="Business Card Front" />
                      <button className="zoom-btn" onClick={(e) => handleOpenLightbox(cardFront, e)}>
                        <Maximize2 size={16} />
                      </button>
                    </div>
                    <div className="flip-card-back">
                      <div className="back-card-design">
                        <div className="logo-icon">Q</div>
                        <h3>Quality Halal Market</h3>
                        <p>100% Zabiha Hand-Slaughtered Meats & Pastries</p>
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
                      <img src={cardBack} alt="Business Card Back" />
                      <button className="zoom-btn" onClick={(e) => handleOpenLightbox(cardBack, e)}>
                        <Maximize2 size={16} />
                      </button>
                    </div>
                    <div className="flip-card-back">
                      <div className="back-card-design">
                        <div className="logo-icon">Q</div>
                        <h3>Store Location & Hours</h3>
                        <p>12920 West Parmer Lane #106<br />Cedar Park, TX 78613</p>
                        <span className="click-to-flip-tag">Click to Flip Back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <div className="contact-bento-grid">
            
            {/* Form Bento Card */}
            <div className="contact-form-card">
              <div className="card-header-badge">
                <Mail size={16} style={{ color: 'var(--primary-light)' }} />
                <span>{txt('contactSubtitle')}</span>
              </div>
              
              <h2 className="contact-title">{txt('contactTitle')}</h2>
              <p className="contact-desc">{txt('contactDesc')}</p>
              
              <form id="inquiryForm" className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const name = document.getElementById('contact-name').value;
                const phone = document.getElementById('contact-phone').value;
                const message = document.getElementById('contact-message').value;

                if (!name || !phone || !message) {
                  alert('Please fill out all fields.');
                  return;
                }

                showToast("Message Sent", `Thank you, ${name}. Our master butcher will contact you shortly.`);
                document.getElementById('inquiryForm').reset();
              }}>
                <div className="form-group-clean">
                  <label htmlFor="contact-name">{txt('yourName')}</label>
                  <input type="text" id="contact-name" required placeholder="Ali Khan" />
                </div>
                
                <div className="form-group-clean">
                  <label htmlFor="contact-phone">{txt('phoneLabel')}</label>
                  <input type="tel" id="contact-phone" required placeholder="512.555.0199" />
                </div>

                <div className="form-group-clean">
                  <label htmlFor="contact-message">{txt('messageLabel')}</label>
                  <textarea id="contact-message" required placeholder="Specify any custom cut orders or catering inquiries..." rows="4"></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-contact-btn">
                  {txt('sendInquiry')}
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Location & Map Bento Card */}
            <div className="contact-map-card">
              <div className="map-header-bar">
                <div className="map-title-group">
                  <MapPin size={20} style={{ color: 'var(--secondary-light)' }} />
                  <div>
                    <h3>{txt('storeLocationTitle')}</h3>
                    <p>{txt('storeAddressLabel')}</p>
                  </div>
                </div>
                <div className="store-hours-chip">
                  <Clock size={14} />
                  <span>{txt('openDailyText')}</span>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="map-frame-wrapper">
                <div id="map" className="store-map"></div>
              </div>

              {/* Map Footer Action Bar */}
              <div className="map-card-footer">
                <div className="store-address-text">
                  <strong>Quality Halal Market</strong>
                  <span>12920 West Parmer Lane #106, Cedar Park, TX 78613</span>
                </div>

                <div className="map-action-buttons">
                  <a href="https://maps.google.com/?q=Quality+Halal+Market+12920+West+Parmer+Lane+106+Cedar+Park+TX+78613" target="_blank" rel="noopener noreferrer" className="btn btn-primary map-btn">
                    <MapPin size={15} />
                    {txt('googleMapsBtn')}
                  </a>
                  <a href="tel:5122607677" className="btn btn-secondary map-btn">
                    <Phone size={15} />
                    {txt('callStoreBtn')}
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
              <p>100% Zabiha hand-slaughtered halal meats and savory meat pastries in Cedar Park, TX.</p>
              <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="https://facebook.com/QualityHalalMarket" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4>Meat Departments</h4>
              <ul className="footer-links">
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('goat')}>{txt('goatCat')}</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('beef')}>{txt('beefCat')}</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('chicken')}>{txt('chickenCat')}</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('lamb')}>{txt('lambCat')}</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('marinated')}>{txt('marinatedCat')}</a></li>
                <li><a href="#counter" onClick={() => handleSpecialtyRedirect('pastries')}>{txt('pastriesCat')}</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">{txt('home')}</a></li>
                <li><a href="#specialties">{txt('departments')}</a></li>
                <li><a href="#delivery-section">{txt('deliveryZone')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsAdminModalOpen(true); }}>{txt('ownerAccess')}</a></li>
                <li><a href="#contact">{txt('contact')}</a></li>
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
            {txt('cartTitle')}
          </h3>
          <button className="cart-drawer-close" onClick={() => setIsCartDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart-msg">{txt('emptyCart')}</p>
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
            <span>{txt('subtotal')} ({cartCountTotal()} items):</span>
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
            {txt('checkoutBtn')}
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
                <h3>{txt('customTitle')}</h3>
              </div>

              <div className="configurator-options">
                <div className="config-group">
                  <label>{txt('prepStyle')}</label>
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
                    <label>{txt('skinPref')}</label>
                    <div className="config-choices">
                      <button className={skinPref === 'Skinless' ? 'active' : ''} onClick={() => setSkinPref('Skinless')}>Skinless</button>
                      <button className={skinPref === 'Skin-On' ? 'active' : ''} onClick={() => setSkinPref('Skin-On')}>Skin-On</button>
                    </div>
                  </div>
                )}

                <div className="config-group">
                  <label>{txt('fatTrim')}</label>
                  <div className="config-choices">
                    <button className={fatTrim === 'Lean (Extra Trimmed)' ? 'active' : ''} onClick={() => setFatTrim('Lean (Extra Trimmed)')}>Extra Trim</button>
                    <button className={fatTrim === 'Standard (Balanced)' ? 'active' : ''} onClick={() => setFatTrim('Standard (Balanced)')}>Standard</button>
                    <button className={fatTrim === 'Juicy (Marbled)' ? 'active' : ''} onClick={() => setFatTrim('Juicy (Marbled)')}>Juicy</button>
                  </div>
                </div>
              </div>

              <div className="config-group">
                <label>{txt('specialNotes')}</label>
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
                  {txt('addToOrder')} - ${(selectedProduct.price * modalQty).toFixed(2)}
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
                  Access management panel to add, edit, or remove meat cuts and pastries in real-time.
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
                      Meat & Pastry Store Owner Dashboard
                    </h2>
                    <p>Logged in as Store Owner • Live catalog sync & order dispatch enabled</p>
                  </div>

                  <div className="admin-actions-bar">
                    <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <button 
                        className={`btn ${adminTab === 'inventory' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setAdminTab('inventory')}
                        style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                      >
                        <Package size={15} />
                        Inventory Catalog ({productsList.length})
                      </button>
                      
                      <button 
                        className={`btn ${adminTab === 'orders' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setAdminTab('orders')}
                        style={{ padding: '0.45rem 1rem', fontSize: '0.85rem', position: 'relative' }}
                      >
                        <ShoppingBag size={15} />
                        Live Orders Queue ({allOrdersList.length})
                        {allOrdersList.length > 0 && (
                          <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#ef4444', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                            {allOrdersList.length}
                          </span>
                        )}
                      </button>
                    </div>

                    {adminTab === 'inventory' && (
                      <>
                        <button className="btn btn-primary" onClick={handleOpenAddProduct} style={{ padding: '0.65rem 1.25rem' }}>
                          <Plus size={16} />
                          Add New Item
                        </button>
                        <button className="btn btn-secondary" onClick={handleResetCatalog} style={{ padding: '0.65rem 1rem' }} title="Reset catalog to initial state">
                          <RefreshCw size={15} />
                          Reset Catalog
                        </button>
                      </>
                    )}

                    <button className="btn btn-secondary" onClick={() => setIsAdminLoggedIn(false)} style={{ padding: '0.65rem 1rem', borderColor: '#ef4444', color: '#ef4444' }}>
                      <Lock size={15} />
                      Lock Portal
                    </button>
                  </div>
                </div>

                {adminTab === 'inventory' ? (
                  <>
                    {/* Dashboard Metrics */}
                    <div className="admin-stats-grid">
                      <div className="admin-stat-card">
                        <div className="admin-stat-icon emerald"><Package /></div>
                        <div className="admin-stat-info">
                          <h3>{productsList.length}</h3>
                          <span>Total Catalog Items</span>
                        </div>
                      </div>

                      <div className="admin-stat-card">
                        <div className="admin-stat-icon amber"><Award /></div>
                        <div className="admin-stat-info">
                          <h3>{productsList.filter(p => p.category === 'pastries').length}</h3>
                          <span>Pastries & Samosas</span>
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
                          placeholder="Search cuts, pastries, status..." 
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
                        <button className={`tab-btn ${adminCategory === 'pastries' ? 'active' : ''}`} onClick={() => setAdminCategory('pastries')}>Pastries</button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* LIVE ORDERS & FRONT DESK PRINTING QUEUE */
                  <div className="admin-orders-queue animate-fade-in" style={{ margin: '1.5rem 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>
                        Live Customer Orders ({allOrdersList.length})
                      </h3>
                      {allOrdersList.length > 0 && (
                        <button 
                          className="btn btn-secondary" 
                          onClick={() => {
                            if (window.confirm("Clear order history?")) setAllOrdersList([]);
                          }}
                          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', borderColor: '#ef4444', color: '#ef4444' }}
                        >
                          Clear Order History
                        </button>
                      )}
                    </div>

                    {allOrdersList.length === 0 ? (
                      <div style={{ padding: '3rem', textAlign: 'center', background: 'rgba(2, 6, 23, 0.4)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
                        <ShoppingBag size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                        <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>No Active Orders Yet</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          When customers place orders online, they will appear here instantly for store phone dispatch and front desk receipt printing.
                        </p>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.25rem' }}>
                        {allOrdersList.map((ord, idx) => (
                          <div key={idx} style={{ background: 'rgba(2, 6, 23, 0.7)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div>
                                <span style={{ color: 'var(--primary-light)', fontWeight: '800', fontSize: '1.1rem' }}>{ord.orderId}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '8px' }}>({ord.createdAt || 'Just Now'})</span>
                              </div>
                              <span style={{ padding: '3px 10px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', background: ord.type === 'pickup' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)', color: ord.type === 'pickup' ? '#10b981' : '#f59e0b', border: '1px solid currentColor' }}>
                                {ord.type}
                              </span>
                            </div>

                            <div style={{ fontSize: '0.88rem', color: 'var(--text-light)', background: 'rgba(255, 255, 255, 0.03)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                              <div><strong>Customer:</strong> {ord.name}</div>
                              <div><strong>Phone:</strong> <a href={`tel:${ord.phone}`} style={{ color: 'var(--primary-light)' }}>{ord.phone}</a></div>
                              {ord.address && <div><strong>Address:</strong> {ord.address}</div>}
                              <div><strong>Scheduled:</strong> {ord.date} at {ord.time}</div>
                            </div>

                            {/* Itemized Butcher Cut List */}
                            <div style={{ fontSize: '0.85rem' }}>
                              <strong style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Items ({ord.items.length}):</strong>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {ord.items.map((it, iIdx) => (
                                  <li key={iIdx} style={{ color: 'white', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                                    <span>
                                      <strong>{it.qty}x</strong> {it.name}
                                      {it.customizations && (
                                        <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                          [{it.customizations.style || 'Standard'}]
                                        </span>
                                      )}
                                    </span>
                                    <strong>${((it.price || 0) * it.qty).toFixed(2)}</strong>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Order Total:</span>
                              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>
                                ${((ord.total) || (ord.subtotal || 0) * 1.0825).toFixed(2)}
                              </span>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button 
                                className="btn btn-primary" 
                                onClick={() => dispatchToStorePhone(ord)}
                                style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.8rem', backgroundColor: '#25D366', borderColor: '#25D366', justifyContent: 'center' }}
                              >
                                📱 Alert Phone
                              </button>
                              
                              <button 
                                className="btn btn-primary" 
                                onClick={() => printFrontDeskReceipt(ord)}
                                style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.8rem', justifyContent: 'center' }}
                              >
                                🖨️ Print Ticket
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

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
            <span className="subtitle">{editingProduct ? 'Update Product' : 'New Product'}</span>
            <h2 style={{ fontSize: '1.8rem', margin: '0.25rem 0 1.5rem 0', color: 'white' }}>
              {editingProduct ? `Edit "${editingProduct.name}"` : 'Add New Item / Pastry'}
            </h2>

            <form onSubmit={handleSaveProduct}>
              <div className="form-group">
                <label>Item Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Zabiha Beef Keema Samosas (6-Pack)"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Department Category</label>
                  <select value={formCategory} onChange={(e) => {
                    setFormCategory(e.target.value);
                    setFormImg(presetImages[e.target.value] || presetImages.goat);
                  }}>
                    <option value="goat">Goat & Mutton</option>
                    <option value="beef">Halal Beef Cuts</option>
                    <option value="chicken">Chicken & Poultry</option>
                    <option value="lamb">Gourmet Lamb Cuts</option>
                    <option value="marinated">Marinated & BBQ Ready</option>
                    <option value="pastries">Meat Pastries & Samosas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Price ($ USD)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    required 
                    placeholder="6.99"
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
                    placeholder="e.g. per lb, 6-Pack, per pie"
                    value={formUnit}
                    onChange={(e) => setFormUnit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Status / Certification Tag</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. 100% Zabiha Halal, Freshly Baked"
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
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.goat)}>Goat</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.beef)}>Beef</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.chicken)}>Chicken</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.lamb)}>Lamb</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.marinated)}>Marinated</button>
                  <button type="button" className="preset-chip" onClick={() => setFormImg(presetImages.pastries)}>Samosas / Pastries</button>
                </div>
              </div>

              <div className="form-group">
                <label>Description & Preparation Notes</label>
                <textarea 
                  rows="3" 
                  placeholder="Describe ingredients, pastry crust style, and reheating tips..."
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
                  {editingProduct ? 'Save Changes' : 'Create Item'}
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
                {txt('pickupOpt')}
              </button>
              <button 
                type="button" 
                className={`type-btn ${orderType === 'delivery' ? 'active' : ''}`}
                onClick={() => setOrderType('delivery')}
              >
                <Truck size={18} />
                {txt('deliveryOpt')}
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
                <label>{txt('fullName')}</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ali Khan" 
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>{txt('phoneNum')}</label>
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
                  <label>{txt('delAddress')}</label>
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
                    <label>{txt('pickupDate')}</label>
                    <input 
                      type="date" 
                      required 
                      value={checkoutDate}
                      onChange={(e) => setCheckoutDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>{txt('pickupTime')}</label>
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
                <label>{txt('orderInstructions')}</label>
                <textarea 
                  placeholder="e.g. Leave package on front porch, or specify vehicle details for curbside pickup..." 
                  rows="2"
                  value={checkoutNotes}
                  onChange={(e) => setCheckoutNotes(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1.1rem' }}>
                {txt('placeOrder')}
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
                {txt('orderPlaced')}
              </div>
              <h2 className="tracking-title">{txt('trackTitle')}</h2>
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
                    Our team is preparing your custom meat & pastry selections now.
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
                        A team member is bringing your order to your <strong>{curbsideVehicularStatus}</strong> now. Please have payment ready. Thank you!
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
                    <div className="node-label">Prepping Order</div>
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
                  {deliveryStep === 0 && <h4>🥩 Our team is prepping your customized order right now...</h4>}
                  {deliveryStep === 1 && <h4>📦 Packaging your order in temperature-insulated bags...</h4>}
                  {deliveryStep === 2 && <h4>🚗 Delivery driver is en route with your fresh items!</h4>}
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

      {/* FRONT DESK THERMAL RECEIPT PRINT AREA (@media print) */}
      <div id="thermal-receipt-print-area" style={{ display: 'none' }}>
        {printReceiptOrder && printReceiptOrder.orderId && (
          <div className="receipt-box" style={{ width: '80mm', fontFamily: 'monospace', padding: '10px', fontSize: '12px', color: 'black', background: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <h2 style={{ fontSize: '18px', margin: '0 0 4px 0', textTransform: 'uppercase' }}>QUALITY HALAL MARKET</h2>
              <p style={{ fontSize: '11px', margin: '0 0 2px 0' }}>100% Zabiha Hand-Slaughtered Meats</p>
              <p style={{ fontSize: '11px', margin: '0 0 2px 0' }}>12920 West Parmer Lane #106, Cedar Park TX</p>
              <p style={{ fontSize: '11px', margin: 0 }}>Tel: (512) 260-7677 | Fax: (512) 260-7734</p>
              <p style={{ fontSize: '11px', margin: 0 }}>Email: QualityHalalMarket@gmail.com</p>
              <div style={{ borderBottom: '1px dashed #000', margin: '8px 0' }}></div>
            </div>

            <div style={{ fontSize: '12px', marginBottom: '10px' }}>
              <div><strong>ORDER #:</strong> {printReceiptOrder.orderId}</div>
              <div><strong>TYPE:</strong> {(printReceiptOrder.type || 'pickup').toUpperCase()}</div>
              <div><strong>DATE/TIME:</strong> {printReceiptOrder.date || ''} at {printReceiptOrder.time || ''}</div>
              <div><strong>CUSTOMER:</strong> {printReceiptOrder.name || ''}</div>
              <div><strong>PHONE:</strong> {printReceiptOrder.phone || ''}</div>
              {printReceiptOrder.address && <div><strong>DELIVERY ADDR:</strong> {printReceiptOrder.address}</div>}
              <div style={{ borderBottom: '1px dashed #000', margin: '8px 0' }}></div>
            </div>

            <div style={{ fontSize: '12px', marginBottom: '10px' }}>
              <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>QTY / ITEM</span>
                <span>AMOUNT</span>
              </div>
              <div style={{ borderBottom: '1px solid #000', marginBottom: '6px' }}></div>
              
              {(printReceiptOrder.items || []).map((item, idx) => (
                <div key={idx} style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>{item.qty}x {item.name}</span>
                    <span>${((item.price || 0) * item.qty).toFixed(2)}</span>
                  </div>
                  {item.customizations && (
                    <div style={{ fontSize: '10px', paddingLeft: '8px', color: '#333' }}>
                      {item.customizations.style && <div>- Cut: {item.customizations.style}</div>}
                      {item.customizations.trim && <div>- Trim: {item.customizations.trim}</div>}
                      {item.customizations.skin && <div>- Skin: {item.customizations.skin}</div>}
                      {item.customizations.notes && <div>- Note: {item.customizations.notes}</div>}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ borderBottom: '1px dashed #000', margin: '8px 0' }}></div>
            </div>

            <div style={{ fontSize: '12px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal:</span>
                <span>${(printReceiptOrder.subtotal || 0).toFixed(2)}</span>
              </div>
              {printReceiptOrder.deliveryFee > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Delivery Fee:</span>
                  <span>${(printReceiptOrder.deliveryFee || 0).toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Est. Tax (8.25%):</span>
                <span>${((printReceiptOrder.subtotal || 0) * 0.0825).toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '14px', marginTop: '4px' }}>
                <span>ORDER TOTAL:</span>
                <span>${((printReceiptOrder.total) || (printReceiptOrder.subtotal || 0) * 1.0825).toFixed(2)}</span>
              </div>
              <div style={{ borderBottom: '1px dashed #000', margin: '8px 0' }}></div>
            </div>

            {printReceiptOrder.notes && (
              <div style={{ fontSize: '11px', marginBottom: '10px' }}>
                <strong>CUSTOMER NOTES:</strong> {printReceiptOrder.notes}
                <div style={{ borderBottom: '1px dashed #000', margin: '8px 0' }}></div>
              </div>
            )}

            <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '12px' }}>
              <p style={{ margin: '0 0 6px 0' }}>BUTCHER SIGNATURE: ____________________</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 2px 0' }}>THANK YOU FOR YOUR ORDER!</p>
              <p style={{ margin: 0 }}>Quality Halal Meat Market - Cedar Park TX</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
