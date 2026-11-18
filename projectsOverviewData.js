// Shared "overview" fields for all projects — single source of truth for
// anything Staff's All-Projects grid/list and Client's project overview both
// display (name, location, stage, budget, type, ref, timeline).
// Each dashboard keeps its own deep per-project detail (documents, drawings,
// team leads, invoices, etc.) locally; only these fields are synced.
export const projectsOverviewData = [
  { id: 1, name: '1 Lambourne Drive, Cobham', postcode: 'KT11 2EF', budget: '£185,000', type: 'Side Return & Roof Terrace', ref: 'EA-2026-033', startDate: 'Dec 2025', stage: 'Interior Design', stagePct: 62, initials: '1L' },
  { id: 3, name: '26 Tadorne Road, Tadworth', postcode: 'KT20 5SN', budget: '£210,000', type: 'Single Storey Extension', ref: 'EA-2025-118', startDate: 'Jan 2025', stage: 'Snagging', stagePct: 88, initials: '26' },
  { id: 2, name: 'Bossiney, The Leigh, Kingston upon Thames', postcode: 'KT2 7NL', budget: '£95,000', type: 'Loft Conversion', ref: 'EA-2026-041', startDate: 'Jul 2026', stage: 'Planning Permission', stagePct: 15, initials: 'BL' },
  { id: 4, name: '14 Pinewood Close, Esher', postcode: 'KT10 8JG', budget: '£260,000', type: 'Rear Extension & Basement', ref: 'EA-2026-057', startDate: 'Mar 2026', stage: 'Structural Drawings', stagePct: 33, initials: '14' },
  { id: 5, name: '3 Elm Grove, Weybridge', postcode: 'KT13 8LT', budget: '£340,000', type: 'Double Storey Extension', ref: 'EA-2025-096', startDate: 'Aug 2025', stage: 'Project Management', stagePct: 74, initials: '3E' },
  { id: 6, name: '9 Meadow Bank, Guildford', postcode: 'GU1 4YF', budget: '£120,000', type: 'Loft Conversion & Dormer', ref: 'EA-2026-072', startDate: 'Feb 2026', stage: 'Handover', stagePct: 100, initials: '9M' },
  { id: 7, name: '5 Chestnut Walk, Reigate', postcode: 'RH2 7AL', budget: '£98,000', type: 'Kitchen Extension & Open Plan', ref: 'EA-2026-081', startDate: 'May 2026', stage: 'Tender Design', stagePct: 48, initials: '5C' },
  { id: 8, name: '21 Fairview Road, Banstead', postcode: 'SM7 2DR', budget: '£410,000', type: 'Full Refurbishment & Interiors', ref: 'EA-2026-064', startDate: 'Apr 2026', stage: 'Project Management', stagePct: 58, initials: '21' },
  { id: 9, name: '8 Larkspur Drive, Epsom', postcode: 'KT18 7NQ', budget: '£75,000', type: 'Garden Room & Studio', ref: 'EA-2026-089', startDate: 'Jun 2026', stage: 'Building Regulations', stagePct: 27, initials: '8L' },
  { id: 10, name: '17 Windmill Rise, Dorking', postcode: 'RH4 2EH', budget: '£230,000', type: 'Two Storey Side Extension', ref: 'EA-2025-104', startDate: 'Nov 2025', stage: 'Snagging', stagePct: 91, initials: '17' },
  { id: 11, name: '2 Orchard End, Leatherhead', postcode: 'KT22 8QP', budget: '£110,000', type: 'Loft Conversion', ref: 'EA-2026-094', startDate: 'Jul 2026', stage: 'Interior Design', stagePct: 41, initials: '2O' },
  { id: 12, name: '30 Beacon Hill, Godalming', postcode: 'GU7 1JT', budget: '£520,000', type: 'Basement & Rear Extension', ref: 'EA-2025-132', startDate: 'Oct 2025', stage: 'Handover', stagePct: 100, initials: '30' }
];
