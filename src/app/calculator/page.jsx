'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATERIAL_CONSTANTS, DEFAULT_MATERIAL_RATES } from '@/data/index';
import styles from './page.module.css';

// ── House Cost Calculator ────────────────────────────────────
function HouseCalculator() {
  const [form, setForm] = useState({
    length: '', width: '', floors: '1',
    hasBasement: false, hasParking: false,
    finishType: 'standard',
  });
  const [rates, setRates] = useState(DEFAULT_MATERIAL_RATES);
  const [result, setResult] = useState(null);

  const C = MATERIAL_CONSTANTS;

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));
  const setRate = (k, v) => setRates(prev => ({ ...prev, [k]: v }));

  const calculate = () => {
    const L = parseFloat(form.length);
    const W = parseFloat(form.width);
    const floors = parseInt(form.floors);
    if (!L || !W || L <= 0 || W <= 0) return alert('Please enter valid dimensions.');

    const builtArea = L * W * floors * 0.0929; // sq.ft → m²
    const finishMult = form.finishType === 'economy' ? 0.85 : form.finishType === 'premium' ? 1.25 : 1.0;

    const cement    = +(builtArea * C.cement * finishMult).toFixed(1);
    const steel     = +(builtArea * C.steel * finishMult).toFixed(1);
    const sand      = +(builtArea * C.sand * finishMult * 100).toFixed(1);  // cft
    const aggregate = +(builtArea * C.aggregate * finishMult * 100).toFixed(1);
    const bricks    = Math.round(builtArea * C.bricks * finishMult * 100);
    const pccVol    = +(L * W * 0.0929 * C.pcc).toFixed(3);
    const footingVol= +(builtArea * C.footing).toFixed(3);

    const cementCost    = cement * rates.cement;
    const steelCost     = steel * rates.steel * 1000;
    const sandCost      = (sand / 100) * rates.sand;
    const aggregateCost = (aggregate / 100) * rates.aggregate;
    const brickCost     = bricks * rates.brick;
    const pccCost       = pccVol * rates.pcc;
    const footingCost   = footingVol * rates.footing;
    const foundBrickCost= Math.round(builtArea * C.foundationBricks) * rates.foundationBrick;

    const rawMaterial = cementCost + steelCost + sandCost + aggregateCost + brickCost + pccCost + footingCost + foundBrickCost;
    const labour = rawMaterial * 0.35;
    const finishing = rawMaterial * (form.finishType === 'premium' ? 0.3 : form.finishType === 'economy' ? 0.15 : 0.22);
    const contingency = (rawMaterial + labour + finishing) * 0.05;
    const total = rawMaterial + labour + finishing + contingency;

    setResult({
      material: { cement, steel, sand, aggregate, bricks },
      costs: [
        { name: 'Cement', qty: `${cement} bags`, cost: cementCost },
        { name: 'Steel', qty: `${steel} tonnes`, cost: steelCost },
        { name: 'Sand', qty: `${sand} cft`, cost: sandCost },
        { name: '20mm Aggregate', qty: `${aggregate} cft`, cost: aggregateCost },
        { name: 'Bricks', qty: `${bricks.toLocaleString()} nos`, cost: brickCost },
        { name: 'PCC Work', qty: `${pccVol} m³`, cost: pccCost },
        { name: 'Foundation', qty: `${footingVol} m³`, cost: footingCost },
        { name: 'Foundation Bricks', qty: `${Math.round(builtArea * C.foundationBricks)} nos`, cost: foundBrickCost },
      ],
      summary: { rawMaterial, labour, finishing, contingency, total },
      builtArea: (L * W * floors).toFixed(0),
    });
  };

  const reset = () => { setResult(null); setForm({ length: '', width: '', floors: '1', hasBasement: false, hasParking: false, finishType: 'standard' }); };

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcCardHead}>
        <div className={styles.calcCardTitle}>🏠 House Construction Cost Estimator</div>
        <div className={styles.calcCardSub}>Based on WB PWD SOR 2023–24 & IS 456:2000</div>
      </div>

      {/* Dimensions */}
      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Plot Dimensions</div>
        <div className={styles.inputGrid3}>
          <div>
            <label className="label">Length (ft) *</label>
            <input className="input" type="number" value={form.length} onChange={e => set('length', e.target.value)} placeholder="e.g. 30" />
          </div>
          <div>
            <label className="label">Width (ft) *</label>
            <input className="input" type="number" value={form.width} onChange={e => set('width', e.target.value)} placeholder="e.g. 40" />
          </div>
          <div>
            <label className="label">No. of Floors</label>
            <select className="input" value={form.floors} onChange={e => set('floors', e.target.value)}>
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Floor{n>1?'s':''} (G{n>1?`+${n-1}`:''})</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Finish type */}
      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Finish Grade</div>
        <div className={styles.radioGroup}>
          {[['economy', '🟡 Economy', '−15%'], ['standard', '🟢 Standard', 'Baseline'], ['premium', '🔵 Premium', '+25%']].map(([val, label, note]) => (
            <label key={val} className={styles.radioLabel}>
              <input type="radio" name="finish" value={val} checked={form.finishType === val} onChange={() => set('finishType', val)} />
              {label} <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>({note})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material rates */}
      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Local Material Rates (₹)</div>
        <div className={styles.inputGrid4}>
          {[['cement', 'Cement /bag'], ['steel', 'Steel /kg'], ['sand', 'Sand /brass'], ['aggregate', 'Aggregate /brass'], ['brick', 'Brick /nos']].map(([k, l]) => (
            <div key={k}>
              <label className="label">{l}</label>
              <input className="input" type="number" value={rates[k]} onChange={e => setRate(k, +e.target.value)} />
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className={styles.calcActions}>
        <button className="btn btn-copper" onClick={calculate}>Calculate Cost →</button>
        <button className="btn btn-outline" onClick={reset}>Reset</button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div className={styles.results} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className={styles.totalCard}>
              <div className={styles.totalInner}>
                <div>
                  <span className={styles.totalLabel}>Estimated Total Project Cost</span>
                  <span className={styles.totalVal}>₹ {(result.summary.total / 100000).toFixed(2)} Lakhs</span>
                  <span className={styles.totalNote}>Built area: {result.builtArea} sq.ft · Indicative estimate only</span>
                </div>
                <div className={styles.totalBreakdown}>
                  {[['Materials', result.summary.rawMaterial], ['Labour (35%)', result.summary.labour], ['Finishing', result.summary.finishing], ['Contingency (5%)', result.summary.contingency]].map(([l, v]) => (
                    <div key={l} className={styles.totalBreakItem}>
                      <span className={styles.tbLabel}>{l}</span>
                      <span className={styles.tbVal}>₹ {(v / 100000).toFixed(2)} L</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.boqSection}>
              <div className={styles.boqTitle}>Bill of Quantities (BOQ)</div>
              <div className={styles.boqTable}>
                <div className={styles.boqHeader}>
                  <span>Material</span><span>Quantity</span><span>Unit</span><span>Cost (₹)</span>
                </div>
                {result.costs.map(row => (
                  <div key={row.name} className={styles.boqRow}>
                    <span className={styles.boqName}>{row.name}</span>
                    <span className={styles.boqQty}>{row.qty.split(' ')[0]}</span>
                    <span className={styles.boqUnit}>{row.qty.split(' ').slice(1).join(' ')}</span>
                    <span className={styles.boqCost}>₹ {Math.round(row.cost).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className={styles.disclaimer}>
              ⚠️ This is an indicative estimate based on standard material constants and WB PWD SOR 2023–24 rates.
              Actual costs may vary based on site conditions, design complexity, market rates, and contractor norms.
              Please consult a licensed engineer before making financial decisions.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Slab Material Calculator ─────────────────────────────────
function SlabCalculator() {
  const [form, setForm] = useState({ length: '', width: '', thickness: '125', grade: 'M20' });
  const [result, setResult] = useState(null);

  const GRADE_RATIOS = {
    M15: { cement: 6.34, sand: 0.44, agg: 0.88 },
    M20: { cement: 8.06, sand: 0.41, agg: 0.82 },
    M25: { cement: 9.51, sand: 0.39, agg: 0.78 },
    M30: { cement: 11.0, sand: 0.37, agg: 0.74 },
  };

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const calculate = () => {
    const L = parseFloat(form.length);
    const W = parseFloat(form.width);
    const T = parseFloat(form.thickness) / 1000; // mm → m
    if (!L || !W || L <= 0 || W <= 0) return alert('Enter valid dimensions.');

    const volume = L * W * T;
    const dryVol = volume * 1.54;
    const r = GRADE_RATIOS[form.grade];

    const ratioSum = 1 + r.sand + r.agg;
    // Approximate — actually just use ratio approach
    const cementBags = +((dryVol / (r.sand + r.agg + 1)) * r.cement).toFixed(1);
    const sandCft    = +((dryVol * r.sand / (1 + r.sand + r.agg)) * 35.315).toFixed(1);
    const aggCft     = +((dryVol * r.agg / (1 + r.sand + r.agg)) * 35.315).toFixed(1);
    const steel      = +(volume * 0.8).toFixed(2); // ~0.8% reinforcement

    setResult({ volume: +volume.toFixed(3), cementBags, sandCft, aggCft, steel, grade: form.grade });
  };

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcCardHead}>
        <div className={styles.calcCardTitle}>🧱 Slab Material Calculator</div>
        <div className={styles.calcCardSub}>Compute cement, sand, aggregate & steel for RCC slabs</div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Slab Dimensions</div>
        <div className={styles.inputGrid4}>
          <div>
            <label className="label">Length (m) *</label>
            <input className="input" type="number" value={form.length} onChange={e => set('length', e.target.value)} placeholder="e.g. 5" />
          </div>
          <div>
            <label className="label">Width (m) *</label>
            <input className="input" type="number" value={form.width} onChange={e => set('width', e.target.value)} placeholder="e.g. 4" />
          </div>
          <div>
            <label className="label">Thickness (mm)</label>
            <select className="input" value={form.thickness} onChange={e => set('thickness', e.target.value)}>
              {[100,125,150,175,200,225,250].map(t => <option key={t} value={t}>{t}mm</option>)}
            </select>
          </div>
          <div>
            <label className="label">Concrete Grade</label>
            <select className="input" value={form.grade} onChange={e => set('grade', e.target.value)}>
              {['M15','M20','M25','M30'].map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.calcActions}>
        <button className="btn btn-copper" onClick={calculate}>Calculate →</button>
        <button className="btn btn-outline" onClick={() => { setResult(null); setForm({ length: '', width: '', thickness: '125', grade: 'M20' }); }}>Reset</button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={styles.slabResults}>
            <div className={styles.slabVolCard}>
              <span className={styles.slabVolLabel}>Wet Concrete Volume</span>
              <span className={styles.slabVolVal}>{result.volume} m³</span>
              <span className={styles.slabVolNote}>{form.grade} Grade | Dry volume: {(result.volume * 1.54).toFixed(3)} m³</span>
            </div>

            <div className={styles.slabMatGrid}>
              {[
                { label: 'Cement', qty: result.cementBags, unit: 'bags (50kg)', color: '#B87333' },
                { label: 'Sand (FA)', qty: result.sandCft, unit: 'cft', color: '#C4A882' },
                { label: 'Aggregate (CA)', qty: result.aggCft, unit: 'cft', color: '#3D4F6E' },
                { label: 'Steel (est.)', qty: result.steel, unit: 'kg (0.8%)', color: '#8B4513' },
              ].map(m => (
                <div key={m.label} className={styles.slabMat} style={{ borderTopColor: m.color }}>
                  <span className={styles.slabMatLabel}>{m.label}</span>
                  <span className={styles.slabMatQty} style={{ color: m.color }}>{m.qty}</span>
                  <span className={styles.slabMatUnit}>{m.unit}</span>
                </div>
              ))}
            </div>

            <div className={styles.slabCostCard}>
              <span className={styles.slabCostLabel}>Approx. Material Cost</span>
              <span className={styles.slabCostVal}>
                ₹ {Math.round(result.cementBags * DEFAULT_MATERIAL_RATES.cement + result.sandCft / 35.315 * DEFAULT_MATERIAL_RATES.sand + result.aggCft / 35.315 * DEFAULT_MATERIAL_RATES.aggregate + result.steel * DEFAULT_MATERIAL_RATES.steel).toLocaleString()}
              </span>
            </div>

            <p className={styles.disclaimer}>
              ⚠️ Material quantities computed using standard dry volume method per IS 10262. Steel estimated at 0.8% reinforcement. Actual values depend on detailed structural design.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
const TABS = [
  { id: 'house', label: '🏠 House Cost', component: HouseCalculator },
  { id: 'slab', label: '🧱 Slab Material', component: SlabCalculator },
];

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState('house');
  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || HouseCalculator;

  return (
    <div>
      <section className="page-header">
        <div className="page-header-grid" />
        <div className="page-header-lines">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="page-header-line" style={{ left: `${8 + i * 11}%` }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="page-eyebrow">Tools</span>
            <h1 className="page-title">Construction Calculator</h1>
            <p className="page-description">
              Estimate material quantities and project costs for residential construction based on
              WB PWD SOR 2023–24 and IS code standards.
            </p>
          </motion.div>
        </div>
      </section>

      <div className={`container ${styles.calcPage}`}>
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t.id}
              className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
