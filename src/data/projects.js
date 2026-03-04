export const projects = [
  {
    id: 1,
    category: "RESIDENTIAL",
    accentColor: "#B87333",
    title: "Residential Ground Floor",
    description: `
      <p>Two-storey residential building with open parking at ground level. Designed for Zone III seismic loading.</p>
      
      <h4>Structural Specifications</h4>
      <ul>
        <li><strong>Columns:</strong> 9" x 9" using 4 nos. 12mm TMT bars with 8mm stirrups @ 150mm c/c</li>
        <li><strong>Beams:</strong> 9" x 12" using 3 nos. 16mm + 2 nos. 12mm TMT bars with 8mm stirrups @ 125mm c/c</li>
        <li><strong>Slab:</strong> 5" thick one-way slab with 10mm TMT bars @ 150mm c/c main and distribution reinforcement</li>
        <li><strong>Foundation:</strong> Isolated footings 4'6" x 4'6" x 1'6" deep with 12mm TMT bars @ 150mm c/c both ways</li>
        <li><strong>Plinth Beam:</strong> 9" x 12" with 4 nos. 12mm TMT bars and 8mm stirrups @ 200mm c/c</li>
      </ul>
      
      <h4>Concrete Grade & Mix</h4>
      <ul>
        <li><strong>Concrete Grade:</strong> M20 (1:1.5:3 mix ratio)</li>
        <li><strong>Cement:</strong> 43 grade OPC - approximately 46 bags for complete RCC work</li>
        <li><strong>Fine Aggregate (Sand):</strong> 5.0 cubic meters</li>
        <li><strong>Coarse Aggregate (20mm & 10mm):</strong> 10.1 cubic meters</li>
        <li><strong>Concrete Mixer:</strong> 10/7 CFT diesel/electric mixer used for consistent mix quality</li>
      </ul>
      
      <h4>Additional Materials</h4>
      <ul>
        <li><strong>Brickwork:</strong> 9" walls using Class-A burnt clay bricks - approximately 14,500 nos.</li>
        <li><strong>Plastering:</strong> 12mm thick internal, 15mm thick external cement plaster</li>
        <li><strong>Flooring:</strong> Standard ceramic tiles with 40mm thick PCC bed</li>
      </ul>
    `,
    tags: [
      "Residential Planning",
      "G-Floor Design",
      "RCC Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "/assets/images/projects/Ground_Floor_28_x_41_foot.webp",
    plotArea: "1,148 sq.ft",
    estimatedCost: "₹19 Lakhs",
    structure: "RCC Frame",
    foundation: "Isolated Footing",
    caseStudy: {
      problem:
        "The client needed a cost-effective two-storey home on a compact 28' x 41' plot in a Zone III seismic area. The site had a high water table and limited access for heavy machinery, making conventional deep foundation approaches impractical. Additionally, the client required open parking at ground level without compromising the structural integrity of the floors above.",
      solution:
        "An RCC framed structure was designed with carefully sized isolated footings placed above the problematic water table zone. The column grid was optimised so that the ground floor remains column-free for parking while transferring all loads efficiently to the foundation. M20 grade concrete with a 1:1.5:3 mix was specified to balance strength and economy. Seismic detailing per IS 13920 was incorporated into all beam-column joints.",
      challenges: [
        "Designing open parking at ground level without intermediate columns required careful transfer beam sizing to carry the full floor load above.",
        "High water table near the foundation level necessitated rapid concreting and proper curing protocol to prevent water ingress during construction.",
        "Limited site access restricted mixer and material storage, requiring phased delivery scheduling to keep the construction timeline on track.",
        'Zone III seismic detailing added complexity to stirrup spacing and joint design within the tight 9" x 9" column sections.',
      ],
      results: {
        costSaving: "12% under initial budget estimate",
        timeToComplete: "5 months from design to handover",
        clientSatisfaction:
          "Highly satisfied — client commissioned G+1 addition within 18 months",
        structuralRating:
          "IS 456 & IS 13920 compliant, passed local municipal inspection",
      },
      comparison: {
        before: [
          "No formal structural design — builder was planning load-bearing brick walls throughout",
          "No seismic detailing considered for Zone III location",
          "Open parking was deemed 'not possible' by previous consultant",
          "Estimated cost from builder: ₹23 Lakhs without parking",
        ],
        after: [
          "RCC framed structure with engineered column-beam grid enabling open parking",
          "Full IS 13920 seismic detailing on all joints and stirrups",
          "Open parking achieved at ground level with no compromise to upper floor layout",
          "Final cost: ₹19 Lakhs — ₹4 Lakhs savings with better structural safety",
        ],
      },
    },
  },
  {
    id: 2,
    category: "COMMERCIAL",
    accentColor: "#3D4F6E",
    title: "Commercial Cum Residential (G+1)",
    description: `
      <p>Premium duplex with cantilever balconies and staircase slab. IS 456 compliant design.</p>
      
      <h4>Structural Specifications</h4>
      <ul>
        <li><strong>Columns:</strong> 12" x 12" using 8 nos. 16mm TMT bars with 8mm stirrups @ 125mm c/c in seismic zones</li>
        <li><strong>Main Beams:</strong> 12" x 16" using 4 nos. 20mm + 3 nos. 16mm TMT bars with 8mm stirrups @ 100mm c/c at supports</li>
        <li><strong>Secondary Beams:</strong> 9" x 12" with 4 nos. 16mm TMT bars and 8mm stirrups @ 150mm c/c</li>
        <li><strong>Slab:</strong> 6" thick two-way slab with 12mm TMT bars @ 125mm c/c both directions</li>
        <li><strong>Foundation:</strong> Combined footings 8' x 5' x 2' deep with 16mm TMT bars @ 125mm c/c grid</li>
        <li><strong>Shear Walls:</strong> 9" thick RC walls with 12mm bars @ 150mm c/c vertical and horizontal</li>
      </ul>
      
      <h4>Concrete Grade & Mix</h4>
      <ul>
        <li><strong>Concrete Grade:</strong> M25 for columns and beams, M20 for slabs (1:1:2 and 1:1.5:3 respectively)</li>
        <li><strong>Cement:</strong> 53 grade OPC - approximately 215 bags for entire structure</li>
        <li><strong>Fine Aggregate (Sand):</strong> 23.4 cubic meters</li>
        <li><strong>Coarse Aggregate (20mm & 10mm):</strong> 47.2 cubic meters</li>
        <li><strong>Concrete Mixer:</strong> 14/10 CFT heavy-duty diesel mixer for M25 grade consistency</li>
        <li><strong>Admixtures:</strong> Plasticizer used for better workability and reduced water-cement ratio</li>
      </ul>
      
      <h4>Additional Materials</h4>
      <ul>
        <li><strong>Brickwork:</strong> 9" external walls, 4.5" internal walls - approximately 68,000 bricks total</li>
        <li><strong>Reinforcement Steel:</strong> Total 22,344 kg TMT bars (Fe500 grade)</li>
        <li><strong>Waterproofing:</strong> Polymer-based membrane for terrace and bathroom areas</li>
        <li><strong>Formwork:</strong> Plywood shuttering for beams and slabs, steel props for support</li>
      </ul>
    `,
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "G+1 Residential",
      "RCC Frame Structure",
      "Open Span Planning",
    ],
    image:
      "/assets/images/projects/Warehouse_cum_Residential_(G+1)_57_x_47_foot.webp",
    plotArea: "5,586 sq.ft",
    estimatedCost: "₹79 Lakhs",
    structure: "RCC Frame + Shear Wall",
    foundation: "Combined Footing",
    caseStudy: {
      problem:
        "The client required a large mixed-use building on a 57' x 47' plot that would serve as a commercial warehouse at ground level and a premium residential unit on the first floor — a structurally challenging combination due to the conflicting load requirements. The ground floor needed long, unobstructed spans for warehouse operations, while the first floor demanded fine residential finishes that couldn't tolerate any perceptible deflection or vibration.",
      solution:
        "A hybrid structural system combining a robust RCC frame with strategically placed shear walls was designed. M25 grade concrete was specified for all columns and primary beams to handle the heavy combined loads, while secondary elements used M20 for economy. Combined footings were used where columns were closely spaced near the warehouse entry. Cantilever balconies on the residential floor were carefully detailed with reverse cantilever tie-backs to eliminate any visible deflection.",
      challenges: [
        'Achieving clear spans of over 20 feet at the warehouse level required deep main beams (12" x 16") that had to be carefully integrated into the first-floor slab without increasing overall building height.',
        "Shear wall placement had to balance seismic resistance with the client's requirement for large, open warehouse doorways at ground level.",
        "The use of plasticiser admixtures was new to the local contractor — quality training and supervision was required to ensure correct dosage and mixing procedure.",
        "Coordinating plywood shuttering and steel prop spacing for the heavy beam-slab system on a large floor plate required detailed formwork drawings to avoid under-propping.",
      ],
      results: {
        costSaving: "8% saved versus initial RCC flat-plate design option",
        timeToComplete: "9 months including fit-out supervision",
        clientSatisfaction: "Zero punch-list structural defects at handover",
        structuralRating:
          "IS 456 (M25), IS 13920 seismic-compliant; municipal OC obtained",
      },
      comparison: {
        before: [
          "Initial brief: flat-plate concrete system (no beams) — expensive and prone to punching shear",
          "No shear walls — relying entirely on frame action for lateral resistance",
          "Cantilever balconies not considered feasible by client's previous engineer",
          "Estimated cost from initial quote: ₹86 Lakhs",
        ],
        after: [
          "Beam-slab system with shear walls — more economical and seismically robust",
          "Two shear walls integrated into staircase core, invisible in finished layout",
          "Cantilever balconies successfully detailed and constructed with zero deflection issues",
          "Final cost: ₹79 Lakhs — ₹7 Lakhs savings with superior structural performance",
        ],
      },
    },
  },
  {
    id: 3,
    category: "RESIDENTIAL",
    accentColor: "#6B8E6E",
    title: "Commercial Cum Residential (G-Floor)",
    description: `
      <p>Cost-optimized row housing project with 12 units. Standardized structural drawings for rapid construction.</p>
      
      <h4>Structural Specifications</h4>
      <ul>
        <li><strong>Load Bearing Walls:</strong> 9" thick brick masonry walls as primary load bearing elements</li>
        <li><strong>RCC Columns:</strong> 9" x 9" at staircase only, using 4 nos. 12mm TMT bars with 8mm stirrups @ 175mm c/c</li>
        <li><strong>Lintel Beams:</strong> 9" x 9" RCC lintels over all openings with 4 nos. 10mm TMT bars</li>
        <li><strong>Slab:</strong> 5" thick one-way slab spanning on load bearing walls with 10mm TMT bars @ 150mm c/c</li>
        <li><strong>Foundation:</strong> Strip footing 2'6" wide x 1'3" deep under load bearing walls with 10mm bars @ 200mm c/c</li>
        <li><strong>Plinth Band:</strong> 9" x 9" continuous band with 4 nos. 10mm bars and 6mm stirrups @ 200mm c/c</li>
      </ul>
      
      <h4>Concrete Grade & Mix</h4>
      <ul>
        <li><strong>Concrete Grade:</strong> M20 for all RCC work (1:1.5:3 mix)</li>
        <li><strong>Cement:</strong> 43 grade OPC - approximately 52 bags per unit (624 bags total for 12 units)</li>
        <li><strong>Fine Aggregate (Sand):</strong> 5.5 cubic meters per unit</li>
        <li><strong>Coarse Aggregate:</strong> 11.2 cubic meters per unit</li>
        <li><strong>Concrete Mixer:</strong> 7/5 CFT electric mixer for small batches, cost-effective for repetitive units</li>
      </ul>
      
      <h4>Additional Materials (Per Unit)</h4>
      <ul>
        <li><strong>Brickwork:</strong> Class-A burnt clay bricks - approximately 13,800 nos. per unit</li>
        <li><strong>Reinforcement Steel:</strong> 5,520 kg TMT bars per unit (Fe500 grade)</li>
        <li><strong>Mortar:</strong> Cement-sand mortar 1:5 for brickwork, 1:4 for plastering</li>
        <li><strong>DPC:</strong> 40mm thick concrete bed with waterproofing compound at plinth level</li>
      </ul>
    `,
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "Residential Structure",
      "RCC Frame",
      "Staircase Block",
    ],
    image: "/assets/images/projects/Warehouse_cum_Residential_46_x_30_foot.webp",
    plotArea: "1,380 sq.ft each",
    estimatedCost: "₹23 Lakhs",
    structure: "Load Bearing + RCC",
    foundation: "Strip Footing",
    caseStudy: {
      problem:
        "A housing developer needed 12 identical row-house units built rapidly and within a tight per-unit budget of ₹24 Lakhs. Each unit measured 46' x 30' on a flat site with uniform soil bearing capacity. The challenge was to produce a single standardised structural design that could be replicated across all 12 units by local masons without specialised RCC framing skills, yet still meet IS 456 safety requirements.",
      solution:
        "A load-bearing brick masonry structure was chosen over an RCC frame, leveraging the uniform plot layout and flat site to make strip footings viable. A single set of standardised structural drawings was prepared covering every opening, lintel, plinth band, and slab panel — enabling the developer to hand the same drawings to any local mason for every unit. RCC was restricted to staircase columns and lintel beams only, drastically reducing skilled labour needs.",
      challenges: [
        "Ensuring structural uniformity across 12 units built by different mason teams required detailed, annotated drawings with dimensions in both feet-inches and millimetres to avoid interpretation errors.",
        "Load-bearing walls restricted door and window placement, requiring early coordination with the architect to fix all opening sizes before finalising the structural layout.",
        "Procurement of 624 bags of cement and bulk sand/aggregate for 12 units simultaneously required logistics planning to avoid site congestion and material wastage.",
        "Providing a plinth band across all units in a single continuous pour required scheduling coordination across all 12 plots simultaneously.",
      ],
      results: {
        costSaving:
          "₹1 Lakh per unit saved versus an equivalent RCC framed design",
        timeToComplete: "7 months for all 12 units (staggered construction)",
        clientSatisfaction:
          "Developer reordered structural drawings for a second phase of 8 units",
        structuralRating:
          "IS 1905 (masonry) and IS 456 (RCC elements) compliant",
      },
      comparison: {
        before: [
          "Developer's plan: individual RCC framed structures per unit — high skilled labour cost",
          "No standardised drawings — each unit being designed separately, doubling design time",
          "Estimated cost per unit from RCC contractor: ₹24.5 Lakhs",
          "Projected construction timeline: 10 months for all 12 units",
        ],
        after: [
          "Load-bearing masonry with standardised drawings — any local mason team can execute",
          "One set of drawings used for all 12 units — design cost shared across the project",
          "Final cost per unit: ₹23 Lakhs — ₹1.5 Lakhs per unit saved (₹18 Lakhs total project saving)",
          "All 12 units completed in 7 months — 3 months ahead of original estimate",
        ],
      },
    },
  },
  {
    id: 4,
    category: "COMMERCIAL",
    accentColor: "#8B4513",
    title: "Commercial Cum Residential (G+1-Floor)",
    description: `
      <p>Mixed-use commercial building with showroom at ground and office at first floor. Heavy floor load design.</p>
      
      <h4>Structural Specifications</h4>
      <ul>
        <li><strong>Columns:</strong> 12" x 15" for ground floor commercial use, using 8 nos. 20mm TMT bars with 10mm stirrups @ 100mm c/c</li>
        <li><strong>First Floor Columns:</strong> 9" x 12" with 6 nos. 16mm TMT bars and 8mm stirrups @ 150mm c/c</li>
        <li><strong>Ground Floor Beams:</strong> 12" x 18" heavy beams using 5 nos. 25mm + 3 nos. 20mm TMT bars with 10mm stirrups @ 100mm c/c</li>
        <li><strong>First Floor Beams:</strong> 9" x 12" with 4 nos. 16mm TMT bars and 8mm stirrups @ 125mm c/c</li>
        <li><strong>Slab:</strong> 6" thick for commercial loading with 12mm TMT bars @ 100mm c/c main steel</li>
        <li><strong>Foundation:</strong> Raft foundation 1'9" thick with 16mm TMT bars @ 150mm c/c top and bottom mesh</li>
        <li><strong>Staircase:</strong> Waist slab staircase 6" thick with 12mm bars @ 125mm c/c</li>
      </ul>
      
      <h4>Concrete Grade & Mix</h4>
      <ul>
        <li><strong>Foundation:</strong> M25 grade (1:1:2 mix ratio) for raft foundation</li>
        <li><strong>Columns & Beams:</strong> M25 grade for ground floor, M20 for first floor</li>
        <li><strong>Slabs:</strong> M20 grade (1:1.5:3 mix)</li>
        <li><strong>Cement:</strong> 53 grade OPC - approximately 168 bags total</li>
        <li><strong>Fine Aggregate (Sand):</strong> 18.2 cubic meters</li>
        <li><strong>Coarse Aggregate (20mm):</strong> 36.8 cubic meters</li>
        <li><strong>Concrete Mixer:</strong> 14/10 CFT diesel mixer for consistent M25 grade mixing</li>
        <li><strong>Ready Mix Concrete:</strong> Option for M25 foundation to ensure uniform quality</li>
      </ul>
      
      <h4>Additional Materials</h4>
      <ul>
        <li><strong>Reinforcement Steel:</strong> Total 17,680 kg TMT bars (Fe500 grade)</li>
        <li><strong>Brickwork:</strong> 9" external walls - approximately 52,000 bricks</li>
        <li><strong>Commercial Flooring:</strong> Vitrified tiles for ground floor showroom area</li>
        <li><strong>Waterproofing:</strong> Cementitious waterproofing for raft foundation and terrace</li>
        <li><strong>Formwork:</strong> Heavy-duty steel formwork for raft foundation, plywood for vertical elements</li>
      </ul>
    `,
    tags: [
      "Residential Planning",
      "Ground Floor Design",
      "RCC Frame Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "/assets/images/projects/Ground+1_Floor_42-6_x_32_foot.webp",
    plotArea: "1,360 sq.ft",
    estimatedCost: "₹23 Lakhs",
    structure: "RCC Frame",
    foundation: "Raft Foundation",
    caseStudy: {
      problem:
        "The client needed a ground-floor showroom capable of carrying heavy display stock and customer foot traffic, topped by a first-floor office space — all within a tight 42'6\" x 32' plot. The soil report indicated variable bearing capacity across the plot, making individual isolated footings unreliable. The showroom also required a completely column-free interior of approximately 1,200 sq.ft — an unusually large clear span for this plot size.",
      solution:
        'A raft foundation in M25 concrete was selected to distribute loads uniformly across the variable soil and eliminate differential settlement risk. At superstructure level, heavy 12" x 18" ground-floor beams were sized to carry the column-free showroom span, supported by 12" x 15" perimeter columns only. The first floor was designed lighter (9" x 12" columns and beams) since office loads are significantly lower than showroom loads. Cementitious waterproofing was applied to the raft to guard against seasonal water table rise.',
      challenges: [
        'Designing a 1,200 sq.ft column-free showroom required 12" x 18" transfer beams — the heaviest beam sections used across all our projects to date — demanding careful formwork and propping design.',
        "Variable soil bearing capacity across the plot meant the raft had to be designed for the worst-case zone, adding some material cost but ensuring uniform settlement.",
        "The raft foundation pour volume was significant; coordinating a Ready Mix Concrete option for the raft while using site-mixed concrete for the superstructure required careful scheduling.",
        "Integrating the waist-slab staircase between showroom and office without interrupting the clean showroom ceiling required the stair to be positioned within the structural grid.",
      ],
      results: {
        costSaving:
          "Raft vs. piled foundation saved ₹3.5 Lakhs on substructure alone",
        timeToComplete: "6 months from design to occupancy",
        clientSatisfaction:
          "Showroom opened on schedule; client reported zero structural concerns after 2 monsoon seasons",
        structuralRating:
          "IS 456, IS 2950 (raft design) compliant; fire NOC and municipal OC obtained",
      },
      comparison: {
        before: [
          "Initial structural option: isolated footings — risk of differential settlement on variable soil",
          "Proposed column layout: 4 internal columns breaking up showroom space",
          "No waterproofing specified for foundation in original builder plan",
          "Estimated cost from builder with internal columns: ₹21 Lakhs (but poor showroom functionality)",
        ],
        after: [
          "Raft foundation — uniform load distribution, zero differential settlement after 2 monsoons",
          "Completely column-free 1,200 sq.ft showroom floor achieved with perimeter columns only",
          "Cementitious waterproofing on raft — no seepage reported through two full monsoon seasons",
          "Final cost: ₹23 Lakhs — ₹2 Lakhs more than builder quote, but with full column-free showroom and zero settlement risk",
        ],
      },
    },
  },
  {
    id: 5,
    category: "RESIDENTIAL",
    accentColor: "#7B6B9E",
    title: "Residential 3BHK Plan (33'6\" x 33'2\")",
    description: `
      <p>Ground floor 3BHK residential building measuring approximately 33'-6" x 33'-2" with central staircase and spacious dining hall. Designed as an RCC framed structure suitable for Zone III seismic loading with efficient column grid alignment.</p>
      
      <h4>Architectural Highlights</h4>
      <ul>
        <li><strong>Bedrooms:</strong> 3 nos. (11'-10" x 11'-10" approx.)</li>
        <li><strong>Kitchen:</strong> 7'-10" x 8'-7" with dedicated ventilation window</li>
        <li><strong>Dining Hall:</strong> 20'-5" x 11'-1" large common space</li>
        <li><strong>Bathrooms:</strong> 2 nos. attached/common (5'-5" x 8'-7" approx.)</li>
        <li><strong>Staircase:</strong> Central dog-legged RCC staircase</li>
        <li><strong>Front Verandah:</strong> 16'-1" wide entry projection</li>
      </ul>
      
      <h4>Structural Specifications</h4>
      <ul>
        <li><strong>Columns:</strong> 9" x 12" using 6 nos. 12mm TMT bars with 8mm stirrups @ 150mm c/c</li>
        <li><strong>Beams:</strong> 9" x 12" using 2 nos. 16mm + 2 nos. 12mm bottom bars and 2 nos. 12mm top bars with 8mm stirrups @ 125mm c/c</li>
        <li><strong>Slab:</strong> 5" thick two-way slab with 10mm TMT bars @ 150mm c/c both directions</li>
        <li><strong>Staircase:</strong> 6" waist slab with 10mm TMT bars @ 150mm c/c</li>
        <li><strong>Foundation:</strong> Isolated footings 5'-0" x 5'-0" x 1'-6" with 12mm TMT bars @ 150mm c/c both ways</li>
        <li><strong>Plinth Beam:</strong> 9" x 12" with 4 nos. 12mm TMT bars and 8mm stirrups @ 200mm c/c</li>
      </ul>
      
      <h4>Concrete Grade & Mix</h4>
      <ul>
        <li><strong>Concrete Grade:</strong> M20 (1:1.5:3 nominal mix)</li>
        <li><strong>Cement:</strong> 43 grade OPC – approximately 85 bags for complete RCC work</li>
        <li><strong>Fine Aggregate (Sand):</strong> 9.5 cubic meters</li>
        <li><strong>Coarse Aggregate (20mm & 10mm):</strong> 18.5 cubic meters</li>
        <li><strong>Concrete Mixer:</strong> 10/7 CFT diesel/electric mixer used for uniform batching</li>
      </ul>
      
      <h4>Additional Materials</h4>
      <ul>
        <li><strong>Brickwork:</strong> 9" external & 5" internal partition walls – approximately 18,000 nos. bricks</li>
        <li><strong>Plastering:</strong> 12mm internal and 15mm external cement plaster</li>
        <li><strong>Flooring:</strong> Vitrified/ceramic tiles with 40mm PCC base</li>
        <li><strong>Doors & Windows:</strong> Standard flush doors with aluminium sliding windows</li>
      </ul>
    `,
    tags: [
      "3BHK Plan",
      "Central Staircase",
      "RCC Residential",
      "Ground Floor Design",
      "Zone III Structure",
    ],
    image: "/assets/images/projects/Ground_Floor__33_x_33.5__Foot.webp",
    plotArea: "1,115 sq.ft",
    estimatedCost: "₹22 Lakhs",
    structure: "RCC Frame",
    foundation: "Isolated Footing",
    caseStudy: {
      problem:
        "The client wanted a compact 3BHK home on a near-square 33'6\" x 33'2\" plot while maximising liveable area and natural light in all three bedrooms. The central constraint was that the client's family requires a large shared dining space (20'+ wide) for regular family gatherings, but the plot size made this feel incompatible with fitting three properly-sized bedrooms and functional kitchen and bathroom spaces.",
      solution:
        'The column grid was carefully aligned so that the dining hall spans between perimeter columns with no internal obstruction, achieving a 20\'-5" clear dining width. Bedrooms were sized at 11\'-10" x 11\'-10" — above the typical minimum — by eliminating corridor waste through direct-access room arrangement around the central staircase. A 9" x 12" column section was used (rather than the typical 9" x 9") to handle the longer beam spans over the dining area without increasing beam depth visibly.',
      challenges: [
        "Fitting 3 bedrooms, a large dining hall, kitchen, 2 bathrooms, front verandah, and a staircase within 1,115 sq.ft required multiple layout iterations to satisfy both structural column requirements and the client's spatial brief.",
        'The 16\'-1" front verandah projection required careful cantilever detailing to avoid visible downward deflection at the tip while keeping the slab thickness to 5".',
        "Coordinating the dog-legged central staircase so that it aligned with the structural grid — avoiding cutting any primary beam — took iterative design refinement.",
        'Zone III seismic detailing required closer stirrup spacing at beam-column joints, which was technically challenging given the 9" x 12" column dimensions and congested reinforcement.',
      ],
      results: {
        costSaving: "On-budget delivery at ₹22 Lakhs — no variation orders",
        timeToComplete: "4.5 months from drawing approval to possession",
        clientSatisfaction:
          "Client specifically praised the dining hall size and bedroom proportions",
        structuralRating:
          "IS 456 and IS 13920 (Zone III) compliant; all local approvals obtained",
      },
      comparison: {
        before: [
          "Client's original sketch: 3 small bedrooms (9' x 10') with a cramped 12'-wide dining area",
          "Builder's layout: internal load-bearing walls — no scope to open up dining space",
          "Front verandah not included in original brief due to space concerns",
          "Estimated area loss to corridors and walls: ~180 sq.ft in builder's plan",
        ],
        after: [
          "Three full-sized bedrooms at 11'-10\" x 11'-10\" — 18% larger than client's original sketch",
          "RCC frame with optimised column grid — 20'-5\" unobstructed dining hall achieved",
          "Front verandah successfully incorporated with cantilever slab detailing",
          "Net usable area: ~920 sq.ft — 12% more usable space than builder's layout within same footprint",
        ],
      },
    },
  },
];
