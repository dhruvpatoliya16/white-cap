// White Capsule — Product Data
// Source: Official White Capsule company document
// Total: 31 products (15 APIs + 14 Excipients + 2 Intermediates)

export type ProductCategory = 'API' | 'Excipient' | 'Intermediate';

export interface Product {
  id: number;
  category: ProductCategory;
  name: string;
  casNo: string;
  indication: string;
}

export const products: Product[] = [
  // ─── APIs (15) ────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'API',
    name: 'Tri Potassium Citrate Monohydrate',
    casNo: '6100-05-6',
    indication: 'Urinary alkalizer / Potassium supplement',
  },
  {
    id: 2,
    category: 'API',
    name: 'Tricalcium Citrate Tetrahydrate',
    casNo: '5785-44-4',
    indication: 'Calcium supplement / Therapeutic nutrient',
  },
  {
    id: 3,
    category: 'API',
    name: 'Magnesium Citrate Nonahydrate',
    casNo: '153531-96-5',
    indication: 'Osmotic laxative / Magnesium supplement',
  },
  {
    id: 4,
    category: 'API',
    name: 'Almagate',
    casNo: '66827-12-1',
    indication: 'Antacid (aluminum-magnesium basic carbonate)',
  },
  {
    id: 5,
    category: 'API',
    name: 'Aluminum Hydroxide Magnesium Carbonate Co-Dried Gel',
    casNo: '21645-51-2',
    indication: 'Antacid',
  },
  {
    id: 6,
    category: 'API',
    name: 'Dried Aluminum Hydroxide Gel',
    casNo: '21645-51-2',
    indication: 'Antacid / Hyperphosphatemia management',
  },
  {
    id: 7,
    category: 'API',
    name: 'Hydrotalcite Synthetic',
    casNo: '12304-65-3',
    indication: 'Layered double hydroxide antacid',
  },
  {
    id: 8,
    category: 'API',
    name: 'Light / Heavy Magnesium Carbonate',
    casNo: '546-93-0',
    indication: 'Antacid / Magnesium dietary supplement',
  },
  {
    id: 9,
    category: 'API',
    name: 'Light / Heavy Magnesium Oxide',
    casNo: '1309-48-4',
    indication: 'Antacid / Magnesium deficiency therapy',
  },
  {
    id: 10,
    category: 'API',
    name: 'Light Kaolin',
    casNo: '1332-58-7',
    indication: 'Adsorbent anti-diarrheal agent',
  },
  {
    id: 11,
    category: 'API',
    name: 'Magaldrate',
    casNo: '1317-26-6',
    indication: 'Antacid (hydroxy magnesium aluminate complex)',
  },
  {
    id: 12,
    category: 'API',
    name: 'Magnesium Hydroxide',
    casNo: '1309-42-8',
    indication: 'Antacid / Osmotic laxative (Milk of Magnesia)',
  },
  {
    id: 13,
    category: 'API',
    name: 'Magnesium Hydroxide Carbonate',
    casNo: '12125-28-9',
    indication: 'Antacid / Magnesium supplement',
  },
  {
    id: 14,
    category: 'API',
    name: 'Magnesium Hydroxide Paste',
    casNo: '1309-42-8',
    indication: 'Antacid / Antacid suspension precursor',
  },
  {
    id: 15,
    category: 'API',
    name: 'Magnesium Trisilicate',
    casNo: '14987-04-03',
    indication: 'Antacid (slow-acting, protective coating)',
  },

  // ─── Excipients (14) ──────────────────────────────────────────────────────
  {
    id: 16,
    category: 'Excipient',
    name: 'Citric Acid Anhydrous',
    casNo: '77-92-9',
    indication: 'Acidifier, buffering agent, effervescent base',
  },
  {
    id: 17,
    category: 'Excipient',
    name: 'Citric Acid Monohydrate',
    casNo: '5949-29-1',
    indication: 'Acidifier, buffering agent, flavor enhancer',
  },
  {
    id: 18,
    category: 'Excipient',
    name: 'Trisodium Citrate Dihydrate',
    casNo: '6132-04-3',
    indication: 'Buffering agent, anticoagulant, alkalinize agent',
  },
  {
    id: 19,
    category: 'Excipient',
    name: 'Aluminum Magnesium Silicate',
    casNo: '1327-43-1',
    indication: 'Suspending agent, viscosity modifier, stabilizer',
  },
  {
    id: 20,
    category: 'Excipient',
    name: 'Aluminum Silicate',
    casNo: '1332-58-7',
    indication: 'Adsorbent, tablet disintegrant, glidant',
  },
  {
    id: 21,
    category: 'Excipient',
    name: 'Calcium Silicate',
    casNo: '1344-95-2',
    indication: 'Glidant, anti-caking agent, high-oil carrier',
  },
  {
    id: 22,
    category: 'Excipient',
    name: 'Magnesium Aluminum Metasilicate (Neusilin)',
    casNo: '12511-31-8',
    indication: 'Direct compression binder, porous adsorbent',
  },
  {
    id: 23,
    category: 'Excipient',
    name: 'Magnesium Aluminum Silicate Hydrate',
    casNo: '71205-22-6',
    indication: 'Suspending agent, emulsion stabilizer',
  },
  {
    id: 24,
    category: 'Excipient',
    name: 'Magnesium Silicate (Magnesol)',
    casNo: '1343-88-0',
    indication: 'Glidant, anti-caking agent, absorbent',
  },
  {
    id: 25,
    category: 'Excipient',
    name: 'Magnesium Stearate',
    casNo: '557-04-0',
    indication: 'Lubricant for tablets and capsule filling',
  },
  {
    id: 26,
    category: 'Excipient',
    name: 'Benzyl Alcohol',
    casNo: '100-51-6',
    indication: 'Preservative',
  },
  {
    id: 27,
    category: 'Excipient',
    name: 'Sodium Benzoate',
    casNo: '532-32-1',
    indication: 'Preservative & Antimicrobial agent',
  },
  {
    id: 28,
    category: 'Excipient',
    name: 'Potassium Chlorate',
    casNo: '3811-04-9',
    indication: 'Industrial Salt',
  },
  {
    id: 29,
    category: 'Excipient',
    name: 'Potassium Chloride',
    casNo: '7447-40-7',
    indication: 'Minerals and electrolytes',
  },

  // ─── Intermediates (2) ────────────────────────────────────────────────────
  {
    id: 30,
    category: 'Intermediate',
    name: 'Methoxy Acetic Acid',
    casNo: '625-45-6',
    indication: 'Chemical intermediate in organic & drug synthesis',
  },
  {
    id: 31,
    category: 'Intermediate',
    name: 'Glycolic Acid',
    casNo: '79-14-1',
    indication: 'Organic synthesis intermediate / AHA exfoliant',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  API: 'APIs',
  Excipient: 'Excipients',
  Intermediate: 'Intermediates',
};
