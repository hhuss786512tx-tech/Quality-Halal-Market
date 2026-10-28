import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Phone, MapPin, ShoppingCart } from 'lucide-react';

// "Ask the Butcher" — a rule-based helper that runs entirely in the browser.
// There is no AI service or server behind it: every answer is built from the
// catalog and store facts passed in as props, and nothing the visitor types
// leaves the page. That keeps the Privacy Policy ("no forms, no data
// collected") true. If you ever swap this for a hosted chatbot, update the
// policy first.

const PHONE_HREF = 'tel:+15122607677';
const PHONE_TEXT = '(512) 260-7677';
const MAPS_HREF = 'https://maps.google.com/?q=12920+West+Parmer+Lane+%23106+Cedar+Park+TX+78613';

// Dish → cuts on the board. Only product ids that exist in MEAT_PRODUCTS.
const DISH_CUTS = [
  { words: ['nihari'], label: 'nihari', ids: ['b9', 'b22', 'b2'] },
  { words: ['paya', 'trotter', 'trotters'], label: 'paya', ids: ['b19', 'gl17', 'gl21'] },
  { words: ['biryani', 'pulao', 'yakhni'], label: 'biryani or pulao', ids: ['gl4', 'b1', 'c1'] },
  { words: ['curry', 'karahi', 'korma', 'salan', 'qorma', 'stew'], label: 'curry or karahi', ids: ['gl4', 'b11', 'b1'] },
  { words: ['keema', 'qeema', 'kebab', 'kabab', 'seekh', 'kofta', 'burger', 'mince'], label: 'keema or kebabs', ids: ['gl8', 'b14', 'c10'] },
  { words: ['bbq', 'grill', 'grilling', 'steak', 'steaks'], label: 'the grill', ids: ['b3', 'gl5', 'b18'] },
  { words: ['haleem'], label: 'haleem', ids: ['b8', 'gl9', 'c4'] },
  { words: ['pasanda'], label: 'pasanda', ids: ['b16'] },
  { words: ['bihari'], label: 'Bihari kebab', ids: ['b17'] },
  { words: ['soup', 'stock', 'broth'], label: 'soup or stock', ids: ['b22', 'b23', 'gl16'] },
  { words: ['tikka', 'tandoori', 'fajita', 'wings'], label: 'tikka or tandoori', ids: ['c5', 'c14', 'c11'] },
  { words: ['roast', 'raan'], label: 'a roast or raan', ids: ['gl3', 'gl13', 'gl15'] },
];

const STOP_WORDS = new Set(['the', 'a', 'an', 'do', 'you', 'have', 'sell', 'price', 'prices', 'how', 'much', 'is', 'of', 'for', 'per', 'lb', 'pound', 'what', 'whats', 'any', 'cost', 'costs', 'some', 'i', 'need', 'want', 'get', 'can', 'me', 'your', 'and', 'or', 'to', 'in']);

const QUICK_CHIPS = [
  'Hours today?',
  'Where are you?',
  'How do I order?',
  'Cuts for nihari',
  'Whole goat price',
  'Do you sell groceries?',
];

const words = (text) => text.toLowerCase().replace(/[^a-z0-9\s/-]/g, ' ').split(/[\s/-]+/).filter(Boolean);
const has = (ws, list) => list.some(w => ws.includes(w));
// Plural-tolerant word match: "chops" matches "chop", "wings" matches "wing".
const stem = (w) => w.replace(/(es|s)$/, '');

const priceText = (p) => {
  if (p.price === null) return 'call for price';
  return `$${p.price.toFixed(2)}${p.perLb ? '/lb' : ' each'}`;
};

function findProducts(ws, products) {
  const terms = ws.filter(w => !STOP_WORDS.has(w) && w.length > 2).map(stem);
  if (terms.length === 0) return [];
  return products
    .map(p => {
      const nameWords = words(`${p.name} ${p.category}`).map(stem);
      const score = terms.reduce((n, t) => n + (nameWords.includes(t) ? 1 : 0), 0);
      return { p, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    // Keep only the best-matching tier: "goat chops" should show the chops,
    // not every goat line that happens to share one word.
    .filter((x, _, all) => x.score === all[0].score)
    .slice(0, 4)
    .map(x => x.p);
}

function isOpenNow() {
  // Store hours are 10 AM – 9 PM Central, every day.
  const hour = Number(new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', hour12: false }));
  return hour >= 10 && hour < 21;
}

function answer(text, products) {
  const ws = words(text);
  const byId = (id) => products.find(p => p.id === id);

  if (has(ws, ['hi', 'hello', 'salam', 'salaam', 'assalamualaikum', 'hey'])) {
    return { text: 'Wa alaikum assalam! Ask me about prices, cuts for a dish, hours, or how to order.' };
  }
  if (has(ws, ['hour', 'hours', 'open', 'close', 'closed', 'closing', 'today', 'sunday', 'friday', 'time'])) {
    return { text: `We're open every day, 10 AM to 9 PM. ${isOpenNow() ? "We're open right now." : "We're closed right now. We open at 10 AM."}` };
  }
  if (has(ws, ['where', 'address', 'location', 'directions', 'located', 'parking', 'map'])) {
    return { text: '12920 West Parmer Lane #106, Cedar Park, TX 78613.', link: { href: MAPS_HREF, label: 'Get directions', icon: 'map' } };
  }
  if (has(ws, ['delivery', 'deliver', 'doordash', 'ship', 'shipping', 'pickup', 'curbside'])) {
    return { text: "This website doesn't take orders, so please call the store and ask about pickup or delivery options.", link: { href: PHONE_HREF, label: `Call ${PHONE_TEXT}`, icon: 'phone' } };
  }
  if (has(ws, ['pay', 'payment', 'card', 'cash', 'credit', 'ebt', 'snap'])) {
    return { text: 'For payment options, please call the store and we can tell you what we accept.', link: { href: PHONE_HREF, label: `Call ${PHONE_TEXT}`, icon: 'phone' } };
  }
  if (has(ws, ['order', 'ordering', 'reserve', 'call', 'phone', 'number'])) {
    return { text: 'Call us at (512) 260-7677 to order. Tip: tap "Add to List" on any cut, then read your list to us over the phone.', link: { href: PHONE_HREF, label: `Call ${PHONE_TEXT}`, icon: 'phone' } };
  }
  if (has(ws, ['halal', 'zabiha', 'zabihah', 'dhabiha', 'slaughter', 'slaughtered', 'certified'])) {
    return { text: 'Yes. Every cut on our counter is 100% hand-slaughtered Zabiha halal: beef, goat, lamb and chicken.' };
  }
  if (has(ws, ['grocery', 'groceries', 'rice', 'spice', 'spices', 'atta', 'flour', 'dal', 'lentil', 'lentils', 'paneer', 'ghee', 'sweets', 'snacks', 'dairy', 'vegetables'])) {
    return { text: 'Yes, we stock Indian, Pakistani and Mediterranean groceries: rice, flour and lentils, spices, dairy, frozen and canned foods, sweets and snacks. Grocery prices are not listed online yet, so please call for current prices.', link: { href: PHONE_HREF, label: `Call ${PHONE_TEXT}`, icon: 'phone' } };
  }
  if (has(ws, ['cut', 'cutting', 'trim', 'custom', 'slice', 'clean']) && !has(ws, ['nihari', 'biryani', 'curry', 'karahi', 'keema', 'kebab'])) {
    return { text: 'Yes. Everything is cut and trimmed to order at the counter, and we cut up a whole chicken on request at no charge. Tell the butcher the size and style you want.' };
  }
  if (has(ws, ['whole', 'half', 'qurbani', 'aqiqah', 'aqeeqah', 'udhiyah', 'eid']) && has(ws, ['goat', 'lamb', 'animal', 'qurbani', 'aqiqah', 'aqeeqah', 'udhiyah', 'eid'])) {
    return {
      text: 'Whole and half goat or lamb are $13.99/lb, cut to your instructions. Please call ahead so we can have it ready.',
      products: ['gl2', 'gl1'].map(byId).filter(Boolean),
      link: { href: PHONE_HREF, label: `Call ahead: ${PHONE_TEXT}`, icon: 'phone' },
    };
  }

  // A product named outright ("chicken wings", "beef paya") beats a dish
  // suggestion, but only when the question says more than the dish word
  // itself: a bare "nihari" or "paya" should still get the full suggestion.
  const found = findProducts(ws, products);
  const dish = DISH_CUTS.find(d => has(ws, d.words));
  const dishStems = dish ? dish.words.map(stem) : [];
  const extraTerms = ws.filter(w => !STOP_WORDS.has(w) && w.length > 2).map(stem).filter(t => !dishStems.includes(t));
  const exact = found.length > 0 && found.length <= 2 && extraTerms.length > 0;
  if (dish && !exact) {
    return { text: `For ${dish.label}, these cuts work well:`, products: dish.ids.map(byId).filter(Boolean) };
  }

  if (found.length > 0) {
    return { text: found.length === 1 ? "Here's what we have:" : "Here's what matches on our counter:", products: found };
  }

  return {
    text: "I'm not sure about that one. The quickest way to get an answer is to call the counter.",
    link: { href: PHONE_HREF, label: `Call ${PHONE_TEXT}`, icon: 'phone' },
  };
}

const GREETING = {
  from: 'bot',
  text: 'Assalamu alaikum! I can look up prices, suggest cuts for a dish, or tell you our hours. What do you need?',
};

export default function ShopHelper({ products, onAddToList }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (text) => {
    const q = text.trim();
    if (!q) return;
    setMessages(m => [...m, { from: 'user', text: q }, { from: 'bot', ...answer(q, products) }]);
    setDraft('');
  };

  return (
    <>
      {open && (
        <div className="helper-panel" role="dialog" aria-label="Ask the Butcher">
          <div className="helper-header">
            <div>
              <strong>Ask the Butcher</strong>
              <span>Prices, cuts and store info</span>
            </div>
            <button className="helper-icon-btn" onClick={() => setOpen(false)} aria-label="Close helper"><X size={18} /></button>
          </div>

          <div className="helper-messages" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`helper-msg helper-msg--${m.from}`}>
                <p>{m.text}</p>
                {m.products?.length > 0 && (
                  <ul className="helper-products">
                    {m.products.map(p => (
                      <li key={p.id}>
                        <div>
                          <span className="helper-product-name">{p.name}</span>
                          <span className="helper-product-price">{priceText(p)}</span>
                        </div>
                        <button className="helper-add-btn" onClick={() => onAddToList(p)} aria-label={`Add ${p.name} to list`}>
                          <ShoppingCart size={14} /><span>Add</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {m.link && (
                  <a className="helper-link" href={m.link.href} {...(m.link.icon === 'map' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {m.link.icon === 'map' ? <MapPin size={14} /> : <Phone size={14} />}
                    <span>{m.link.label}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="helper-chips">
            {QUICK_CHIPS.map(c => (
              <button key={c} className="helper-chip" onClick={() => ask(c)}>{c}</button>
            ))}
          </div>

          <form className="helper-input-row" onSubmit={(e) => { e.preventDefault(); ask(draft); }}>
            <input
              ref={inputRef}
              className="helper-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="e.g. goat chops price"
              aria-label="Ask a question"
            />
            <button type="submit" className="helper-send-btn" aria-label="Send" disabled={!draft.trim()}><Send size={16} /></button>
          </form>
          <p className="helper-footnote">Automatic answers from this page. Nothing you type is sent anywhere.</p>
        </div>
      )}

      <button
        className={`helper-fab ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close Ask the Butcher' : 'Open Ask the Butcher'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && <span>Ask the Butcher</span>}
      </button>
    </>
  );
}
