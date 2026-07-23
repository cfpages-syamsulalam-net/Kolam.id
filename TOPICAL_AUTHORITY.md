# Topical Authority — Kolam.id

## Role and boundary

Kolam.id should become an Indonesian owner/operator and project-delivery reference for water-based facilities: swimming pools, ornamental-fish ponds, decorative fountains, and spa/jacuzzi systems. Its strongest evidence-backed role is helping a homeowner, property owner, facility manager, designer, or procurement team move from need recognition through survey, design, contractor selection, construction, commissioning, operation, maintenance, diagnosis, and renovation.

This role follows the repository rather than the domain name alone. The current site is a static WordPress export whose core pages sell pool construction, equipment, plumbing, pump/filter installation, maintenance, and renovation. It also has distinct commercial routes for private, public, children’s, competition-style, infinity, semi-infinity, and waterpark pools, plus fish ponds, fountains, and therapy/jacuzzi pools.

Boundaries:

- Neutral knowledge pages explain decisions, mechanisms, risks, and owner checks. `/`, `/kontraktor/`, `/kolam-renang/`, `/kolam-ikan-hias/`, `/kolam-air-mancur/`, `/kolam-terapi-jacuzzi/`, `/equipment/`, `/instalasi-pemipaan/`, `/pasang-pompa-filter/`, `/maintenance/`, and `/renovasi/` retain commercial intent.
- No article is created by swapping a city, province, or region name. Climate or site articles exist only where rain, heat, coast, groundwater, soil, flooding, seismic movement, or indoor humidity changes the technical decision.
- Medical or therapeutic outcomes are not promised. Health claims require qualified clinical review; the spa/jacuzzi cluster covers facility design, hygiene, operation, and stop conditions.
- Exact dimensions, chemical targets, electrical zones, competition rules, or legal duties must be checked against the current applicable primary source and the project’s competent professionals before publication.
- Kolam.co.id is a separate owned editorial property and may independently cover the same subject. Cross-domain overlap is not cannibalization; this document controls only same-domain intent on Kolam.id.

## Evidence audited

Audit date: 2026-07-23. Repository: `cfpages-syamsulalam-net/Kolam.id`, branch `main`, inspected through a blob-filtered sparse worktree to avoid checking out the location-page bulk.

| Evidence | Observed count/state | Editorial implication |
|---|---:|---|
| Git tree | 9,968 tracked files | Static WordPress export with bundled WordPress assets and large generated-page inventory |
| Root HTML | 3,866 files including the homepage | 3,865 programmatic location pages across nine service families, plus `index.html` |
| Rank Math sitemap index | 11 child maps | Ten post maps and one page map use relative `<loc>` values |
| Child-sitemap URL entries | 2,021 | 20 core page URLs, `/berita`, and 2,000 generated location URLs |
| Compact `sitemap-complete.xml` / README list | 28 URLs | Includes two author archives and five `page-generator-pro` template/copy routes in addition to core pages |
| Core pool-type routes | 12 | Swimming-pool hub plus seven formats; fish pond, fountain, jacuzzi/therapy, and root service coverage |
| Service routes | 7 | Contractor, equipment, plumbing, pump/filter, maintenance, renovation, and contact |
| Location family: contractor swimming pool | 488 HTML | Programmatic city intent; 46 appear in current child sitemaps |
| Location family: contractor ornamental pond | 488 HTML | Programmatic city intent; 48 appear in current child sitemaps |
| Location family: contractor jacuzzi/therapy pool | 488 HTML | Programmatic city intent; 49 appear in current child sitemaps |
| Location family: contractor fountain | 480 HTML | Programmatic city intent; 38 appear in current child sitemaps |
| Location family: pump/filter installation | 441 HTML | Programmatic city intent; 364 appear in current child sitemaps |
| Location family: piping installation | 427 HTML | Misspelled `intalasi-pipa-kolam-*`; 351 appear in current child sitemaps |
| Location family: accessories | 361 HTML | Programmatic city intent; all 361 appear in current child sitemaps |
| Location family: pool care | 361 HTML | Programmatic city intent; 357 appear in current child sitemaps |
| Location family: renovation | 331 HTML | Programmatic city intent; sitemap contains 386 matching URLs, so sitemap/file parity needs a full crawl |
| Repository instructions | No repository-local `AGENTS.md` | Synced portfolio instructions and topical-authority skill govern this plan |
| Global injected scripts | `.head` loads two scripts from `cekkode.github.io` | Function, ownership, privacy, availability, and consent effects require a separate technical review |
| Crawler control | `robots.txt` contains only user-agent and crawl delay | Sitemap discovery, canonical/indexation policy, and generated-page handling need deliberate redesign |

Core-page title and heading inspection confirms a service-led site, not an established knowledge library. It also exposes copy reuse: the semi-infinity route contains a children’s-pool heading, while the public-pool route contains a private-pool heading. Pricing, portfolio, “professional,” and “trusted” claims require current, attributable evidence before reuse.

Primary evidence families identified for publication gates:

- Indonesian pool and spa water-health requirements: current official JDIH Kementerian Kesehatan text, including Permenkes No. 2 Tahun 2023 where applicable.
- Recreational-water risk management: current World Health Organization pool/spa guidance.
- Competition facilities: the current World Aquatics Competition Regulations and facility provisions, checked at publication time.
- Electrical installations around pools and fountains: the current applicable Indonesian adoption and competent electrical design; IEC 60364-7-702 is an international reference, not automatic proof of Indonesian legal compliance.
- Product performance: manufacturer curves, manuals, declarations, warranties, and field measurements for the exact model.

## Existing coverage and risks

| Existing URL/pattern | Observed role/problem | Decision | Destination/owner | Verification needed |
|---|---|---|---|---|
| `/` | Broad service homepage for several pool and water-feature systems | keep | Commercial homepage | Verify service area, portfolio, testimonials, and contact claims |
| `/kontraktor/` and `/kolam-renang/` | Overlapping broad contractor intent | manual review | Choose one general contractor owner; make the other a swimming-pool service hub | Compare Search Console queries, backlinks, conversions, and live canonical tags |
| `/kolam-renang/{pribadi,umum,anak,atletik-olympic,infinity-pool,semi-infinity-pool,waterpark}/` | Commercial format pages; several copied or misplaced headings | expand | Each route owns its matching commercial quote intent | Rewrite from real capability; verify current standards and remove copied claims |
| `/kolam-ikan-hias/` | Commercial pond design/build page mixing koi, aquascape, cultivation, and other intents | expand | Commercial ornamental-pond route | Narrow actual service scope and link to KID-09 education |
| `/kolam-air-mancur/` | Commercial fountain page | expand | Commercial fountain route | Verify installed examples, equipment scope, and maintenance capability |
| `/kolam-terapi-jacuzzi/` | Commercial route combining therapy and jacuzzi language | expand | Commercial spa/jacuzzi route | Remove unsupported health outcomes; obtain clinical review for any therapeutic claim |
| `/equipment/`, `/instalasi-pemipaan/`, `/pasang-pompa-filter/` | Adjacent commercial MEP routes with possible intent overlap | keep | Each owns equipment supply, plumbing installation, or pump/filter installation respectively | Define deliverables, exclusions, warranties, and internal-link distinctions |
| `/maintenance/` | Commercial recurring-care page | keep | Maintenance service route | Publish real task scope, frequency variables, logs, and escalation limits |
| `/renovasi/` | Commercial repair/renovation route | keep | Renovation service route | Separate quote intent from KID-13 diagnosis and owner decision guides |
| `/berita/` | Thin archive-style route rather than clear editorial hub | expand | Knowledge index or newsroom, after taxonomy design | Confirm indexability, pagination, and whether articles will live beneath this path |
| `/author/*/` | Two author archives add little standalone value | noindex | Article bylines and real author/profile pages | Check traffic/backlinks before changing; use valid author credentials |
| `/page-generator-pro/*copy*/` | Five template/copy routes appear in compact sitemap | remove | No public destination unless a real page is intentionally rebuilt | Confirm HTTP/indexation/backlinks; return appropriate status or redirect only with a true equivalent |
| Nine root-level `*-{location}.html` families | 3,865 location-swapped files with incomplete sitemap parity and thin/doorway risk | manual review | One strong national service route per service; retain a local URL only with unique evidence and operational coverage | Full crawl, content-similarity hash, GSC impressions, backlinks, leads, coverage proof, and canonical/noindex state |
| `sitemap_index.xml` plus child maps | 2,021 relative URL entries; parity differs from tracked files | expand | One generated absolute-URL sitemap system | Validate XML, HTTP status, canonical, lastmod accuracy, and inclusion criteria |
| `sitemap-complete.xml` / README | Separate 28-URL inventory disagrees with main index | merge | One canonical sitemap/indexing source | Confirm which file is submitted in GSC and served live |
| `robots.txt` | Crawl-delay only; no sitemap declaration | expand | Site-wide crawl policy | Test live content type/status, add canonical sitemap reference, do not hide pages before crawlers can observe noindex |
| `.head` remote scripts | Unversioned external runtime dependency | manual review | Site integration/security owner | Review source, integrity, privacy/consent, failure mode, and whether self-hosting is preferable |

The location inventory is not treated as topical coverage. It is an indexation and consolidation problem that must be measured before deletion, redirection, or noindexing. Useful URL history should be preserved only where there is real local service, unique local evidence, or material search/lead value.

## Coverage matrix

| Completeness lens | Topic owners | Coverage decision |
|---|---|---|
| Definition and vocabulary | KID-01, KID-08, KID-09, KID-10, KID-11 | Distinguish systems, synonyms, use cases, and misleading “therapy” language |
| Taxonomy and variants | KID-01, KID-08, KID-09, KID-10, KID-11 | Types are organized by function and engineering difference, not city |
| Anatomy and components | KID-03, KID-04, KID-05, KID-09, KID-10, KID-11 | Shell, hydraulics, treatment, controls, habitat, jets, and fittings |
| Materials and properties | KID-03, KID-15, KID-16 | Structure, waterproofing, finish, corrosion, weathering, and life cycle |
| Mechanisms and science | KID-04, KID-05, KID-06, KID-09, KID-10, KID-11 | Hydraulics, filtration, disinfection, biology, aeration, and heat |
| History and evolution | KID-01, KID-08 | Conventions explained only where they change a current decision |
| Measurement and terminology | KID-02, KID-04, KID-05, KID-06, KID-17 | Dimensions, flow, head, turnover, test results, quantities, and cost structure |
| Need recognition / no action | KID-01, KID-13, KID-17 | Include delay, repair, replace, and “do nothing yet” decisions |
| Survey and diagnosis | KID-02, KID-13, KID-15 | Site evidence and symptom isolation precede recommendations |
| Requirements and design | KID-02 through KID-11, KID-14, KID-15 | Function, user, site, safety, resilience, and maintainability become a brief |
| Comparison and selection | KID-01, KID-03, KID-05, KID-08, KID-17 | Options compared only when the same buyer genuinely chooses between them |
| Budget and procurement | KID-17 | Cost structure, BOQ, bid normalization, contract, warranty, and changes |
| Preparation and construction | KID-02, KID-03, KID-04, KID-07, KID-15 | Access, utilities, groundwater, interfaces, hold points, and tests |
| Commissioning and handover | KID-06, KID-07 | Baselines, training, records, punch list, and acceptance |
| Use and operation | KID-06, KID-09, KID-10, KID-11, KID-12, KID-18 | Normal, peak, seasonal, and emergency operation |
| Inspection and maintenance | KID-05, KID-09 through KID-13, KID-18 | Scheduled checks, logs, cleaning, and replacement triggers |
| Troubleshooting and repair | KID-06, KID-09, KID-10, KID-11, KID-13 | Symptom trees separate diagnosis from unsafe guesswork |
| Upgrade, replacement, end of life | KID-13, KID-16, KID-17 | Repair/retrofit/replace decisions include life-cycle and waste effects |
| Stakeholders | KID-01, KID-02, KID-14, KID-17, KID-18 | Homeowner, designer, contractor, operator, swimmer, child, and public-facility owner paths |
| Building/site types | KID-08, KID-15, KID-18 | Home, hotel, apartment, school, club, public, indoor, roof, and constrained retrofit |
| Geography and climate | KID-15 | Indonesia-wide climate mechanisms; no city swapping |
| Scale and performance | KID-02, KID-04, KID-05, KID-08, KID-18 | Capacity, bather load, dimensions, duty point, and service level |
| New build versus retrofit | KID-02, KID-13, KID-15 | Existing-structure uncertainty and occupied-site sequencing are explicit |
| DIY versus professional | KID-06, KID-12, KID-13, KID-14 | Safe owner checks and firm stop conditions |
| Quality level | KID-03, KID-05, KID-16, KID-17 | Economical, standard, premium, temporary, and long-life choices use evidence, not price labels |
| Safety and health | KID-06, KID-09, KID-11, KID-14, KID-18 | Drowning, suction, shock, slips, chemicals, microbes, heat, and operational closure |
| Failure modes | KID-03 through KID-07, KID-09 through KID-15 | Prevention, symptom, consequence, test, and escalation paths |
| Standards and regulation | KID-06, KID-08, KID-11, KID-14, KID-18 | Current primary-source verification is mandatory before exact claims |
| Environmental impact | KID-15, KID-16 | Water, energy, chemicals, corrosion, waste, heat, and life-cycle choices |
| Evidence quality and myths | All; especially KID-06, KID-08, KID-11, KID-14 | No invented prices, cases, tests, dimensions, dosing, clauses, or therapeutic outcomes |
| Editorial/search formats | All | Fundamentals, comparisons, diagnostics, checklists, diagrams, calculations, and evidence-led commercial support |
| News/trends | N/A as a parent topic | Publish only material rules, technology, or evidence changes inside the owning topic; avoid filler news |

## Topical map

| Topic ID | Parent topic | Reader outcome | Required subtopics/questions | Evidence/formats | Boundary | Article target |
|---|---|---|---|---|---|---:|
| KID-01 | Pool and water-feature decision fundamentals | Identify the right system, vocabulary, stakeholders, and whether a project should proceed | Pool vs pond vs fountain vs spa; goals; users; lifecycle; constraints; ownership burden; no-action conditions; decision path | Entity map, glossary, decision tree, owner checklist, sourced history where useful | Does not design the site; KID-02 owns survey and requirements. Commercial quotes remain on `/` and system service routes | 6 |
| KID-02 | Site survey, requirements, and design brief | Turn user needs and site facts into a coordinated, testable project brief | Measurements; access; utilities; soil/groundwater clues; users; depth/zones; circulation concept; plant room; drawings; new build vs retrofit | Survey form, dimension diagrams, stakeholder matrix, brief template, expert design review | Does not specify shell, pipe, or equipment engineering; KID-03, KID-04, and KID-05 own those disciplines | 6 |
| KID-03 | Structure, waterproofing, and finishes | Choose a shell/finish strategy and prevent interface defects before construction | Concrete and prefabricated systems; reinforcement concept; penetrations; joints; waterproofing; tiles/mosaic/stone; substrate; tolerances; cracking prevention | Layer diagrams, selection table, mock-up checklist, structural/waterproofing expert review | Does not diagnose an existing leak or crack; KID-13 owns fault isolation and renovation | 6 |
| KID-04 | Hydraulics and pool plumbing | Understand the circulation network and verify a plumbing design/installation | Suction and return paths; skimmer/overflow; inlets; drains; pipe sizing concepts; velocity/head loss; balancing; valves; testing | Hydraulic schematic, calculation worksheet, commissioning checklist, engineer review | Does not select pump/filter models; KID-05 owns equipment duty and selection. Installation quotes remain on `/instalasi-pemipaan/` | 6 |
| KID-05 | Pumps, filtration, treatment equipment, and controls | Select and operate equipment as one matched system | Duty point; turnover; filter media/types; plant room; disinfection/automation; sensors; redundancy; noise; maintainability; replacement | Manufacturer curves, comparison matrix, calculation, plant-room diagram, maintenance records | Does not prescribe water chemistry targets or doses; KID-06 owns water quality. Sales/installation remain on `/equipment/` and `/pasang-pompa-filter/` | 6 |
| KID-06 | Water chemistry, sanitation, and public health | Test, interpret, and manage water safely without unsafe dosing guesses | Physical/chemical/microbial parameters; disinfectant systems; sampling; bather load; algae/cloudiness/odor; chemical storage; startup; closure and escalation | Current JDIH/WHO sources, test-log template, symptom tree, qualified operator review | Does not provide universal dosing or substitute for laboratory/health authority advice. Equipment mechanics belong to KID-05 | 6 |
| KID-07 | Construction, quality control, commissioning, and handover | Follow a gated delivery sequence and accept only demonstrably complete work | Mobilization; excavation; structure; embedded MEP; waterproofing; finish; hold points; pressure/fill tests; startup; snagging; as-builts; training | Stage diagram, inspection/test plan, photo evidence, handover dossier, multidisciplinary review | Does not compare contractors/contracts; KID-17 owns procurement. Does not repair existing defects; KID-13 owns renovation | 6 |
| KID-08 | Swimming-pool formats and performance | Match a pool format to users, site, operating model, and performance requirement | Private; children; shared/public; competition; infinity/semi-infinity; waterpark; depth/zoning; surge and edge systems; accessibility | Format comparison, user-flow diagrams, current World Aquatics check for competition claims, safety review | Each existing `/kolam-renang/*/` route owns its commercial quote intent. This topic remains neutral selection/design education | 6 |
| KID-09 | Ornamental-fish ponds and aquatic ecology | Design and operate a stable habitat rather than treating a fish pond as a swimming pool | Koi/ornamental use; volume/depth; mechanical/biological filtration; oxygen; nitrogen cycle; stocking; water tests; fish signs; outage response | Ecology diagram, filtration train, test log, stocking decision table, aquatic/veterinary review | Does not cover aquaculture production or diagnose/treat disease remotely. `/kolam-ikan-hias/` owns commercial build intent | 6 |
| KID-10 | Fountains and decorative water systems | Choose, size conceptually, and maintain a visually effective water feature | Jet/nozzle types; pumps; wind/splash; catch basin; water loss; treatment; lighting; acoustics; clogging; public interaction | Jet diagrams, wind/splash checklist, manufacturer data, electrical and landscape review | Does not sell construction; `/kolam-air-mancur/` owns quote intent. Electrical protection detail belongs to KID-14 | 6 |
| KID-11 | Spa, jacuzzi, hot-water, and hydrotherapy facilities | Understand the special heat, hygiene, circulation, and user-safety burden | Terminology; jets; ergonomics; heating; turnover; bather load; Legionella and microbes; temperature exposure; cleaning; closure; clinical boundary | Current health guidance, component diagram, operating log, qualified health/MEP review | No medical benefit promises or treatment plans. `/kolam-terapi-jacuzzi/` owns commercial scope; KID-14 owns general electrical/drowning controls | 6 |
| KID-12 | Routine operation, inspection, and maintenance | Build a repeatable care program with records and escalation points | Daily/weekly/monthly tasks; surfaces; debris; filters; tests; rain response; inventory; logs; DIY limits; service scope | Calendar, inspection checklist, maintenance log, task photos, operator review | Does not diagnose a persistent defect; KID-13 owns troubleshooting. `/maintenance/` owns service purchase intent | 6 |
| KID-13 | Troubleshooting, repair, renovation, and retrofit | Isolate symptoms, choose repair vs renovation, and control retrofit risk | Leaks; cracks; pressure/flow; noise; cloudy water interfaces; failed finishes; obsolete equipment; occupied site; upgrade triggers | Symptom trees, non-destructive test plan, repair/replace matrix, case-study template without invented cases | Does not give destructive DIY repair instructions or structural verdicts without inspection. `/renovasi/` owns commercial quote intent | 6 |
| KID-14 | User, suction, electrical, and operational safety | Apply layered controls for drowning, entrapment, shock, slips, access, and incidents | Barriers; supervision; visibility; drains/suction; electrical zones; bonding/protection; slip surfaces; accessibility; emergency plan; closure | Current primary standards, hazard map, inspection checklist, competent safety/electrical review | Does not certify compliance or replace lifeguard, engineer, electrician, or authority approval | 6 |
| KID-15 | Indonesian climate, ground, and building resilience | Adapt design and operation to tropical and difficult site conditions without doorway pages | Intense rain; heat/UV; coastal corrosion; groundwater/uplift; flood; soil movement; seismic interfaces; rooftop/indoor humidity; retrofit constraints | Climate mechanism diagrams, site-risk checklist, corrosion matrix, geotechnical/structural/MEP review | No city-name variants. A local page requires unique climate, rule, supply, or real-project evidence | 6 |
| KID-16 | Water, energy, chemical, and life-cycle efficiency | Reduce resource use without compromising hygiene or safety | Pump energy; covers/heating; water loss; backwash; rain/evaporation; chemical use; durable materials; repair/reuse/recycle; baseline measurement | Metering worksheet, life-cycle comparison, manufacturer curves, waste plan, before/after measurement protocol | Does not claim savings without a baseline. Equipment selection belongs to KID-05 and operating chemistry to KID-06 | 6 |
| KID-17 | Budget, procurement, contracts, and contractor governance | Build a comparable scope, select a capable contractor, and control cost/change risk | Cost components; quantity/BOQ; bid normalization; exclusions; due diligence; schedule; payments; variations; warranties; documentation; disputes | Cost model without invented prices, bid table, due-diligence checklist, contract/procurement review | Does not provide legal advice or a universal price list. Commercial quotes remain on existing service routes | 6 |
| KID-18 | Shared and commercial facility operations | Operate pools for hotels, apartments, schools, clubs, and public users with explicit service levels | User groups; capacity; staffing; SOP; opening checks; peak load; records; complaints; incidents; accessibility; closure/reopening; KPIs | Operating model, RACI, log templates, incident drill, current health/regulatory review | Does not replace facility-specific permits, public-health orders, insurance, or professional operating plans | 6 |

## Related-domain opportunities

- Kolam.co.id may publish an independent pool encyclopedia or a different owner/consumer perspective. Kolam.id should not suppress a useful article merely because Kolam.co.id covers it; each domain must manage its own internal overlap.
- Kontraktorkolam.co.id can independently focus on contractor purchase intent, scope qualification, and service delivery. Kolam.id may reference the same decisions from the owner/operator perspective.
- Taman.co.id can cover landscape composition and garden experience; Kolam.id owns hydraulic, water-quality, structural, and operating consequences of a fountain or pond.
- Safety.co.id and FireSafety.co.id may cover broader safety systems. Kolam.id owns hazards specific to pools, spas, suction systems, water, wet electrical zones, and aquatic operations.
- Epoxy and construction-material properties may be covered on relevant owned domains. Kolam.id still needs independent, pool-specific substrate, immersion, chemical, slip, and maintenance context.

Cross-domain links should be editorially useful and natural. They must not become a reciprocal-link pattern or substitute for evidence.

## Consolidation plan

1. Crawl the live site and repository inventory into a URL ledger containing status, canonical, robots, sitemap inclusion, title, content hash, GSC impressions/clicks, backlinks, qualified leads, and actual service coverage.
2. Resolve the canonical broad contractor owner between `/kontraktor/` and `/kolam-renang/`; do not redirect until query and conversion evidence is reviewed.
3. Repair the core commercial pages first: remove copied headings, unsupported portfolio/testimonial/price claims, and ambiguous service boundaries.
4. Replace the conflicting sitemap artifacts with one absolute-URL sitemap system whose inclusion is based on indexable canonical pages and truthful `lastmod`.
5. Evaluate all 3,865 location pages by family. Keep only locations with real operational coverage plus unique local evidence; merge or noindex thin variants; redirect only where a true equivalent satisfies the same user intent.
6. Remove template/copy URLs after backlink/indexation review. Noindex author archives unless a useful expert archive is intentionally built.
7. Establish the knowledge URL pattern before publishing, for example `/panduan/<slug>/`, and ensure it cannot collide with commercial routes.
8. Publish the first bounded cluster, measure it, and expand only after quality, indexing, task completion, and commercial signals are acceptable.

## Internal-link architecture

- `/berita/` should become the human-readable knowledge index or link to a dedicated `/panduan/` hub. It links to all KID topic hubs.
- Every article links upward to its `TOPIC:KID-XX` hub. Every hub links to all six children.
- KID-01 decision pages link to KID-02 survey, the relevant system topic (KID-08 through KID-11), KID-17 procurement, and only then the matching commercial route.
- KID-02 design briefs link sequentially to KID-03 structure, KID-04 plumbing, KID-05 equipment, KID-07 delivery, and KID-14 safety.
- Diagnostic pages in KID-06, KID-09, KID-10, KID-11, and KID-13 link to prevention (KID-07/KID-12), safe stop conditions (KID-14), and repair/replace decisions (KID-13/KID-16).
- Comparison pages link to individual-system guides, not to a repeated generic block. Commercial routes receive links only where a reader has completed the relevant decision step.
- KID-15 climate/resilience pages link laterally to the affected structure, hydraulic, equipment, maintenance, and safety pages rather than spawning location variants.
- KID-17 procurement pages link to inspection/test-plan and handover assets so bid comparison includes proof of completion.
- KID-18 facility-operation pages link to KID-06 water quality, KID-12 maintenance, and KID-14 safety as mandatory operational paths.

## Evidence and editorial standards

- Use Bahasa Indonesia that distinguishes observation, mechanism, decision criterion, and recommendation. Avoid generic “terbaik,” “profesional,” “aman,” or “sesuai standar” claims without named, current evidence.
- Check laws, regulations, standards, and competition rules on the publication/update date. Link to the primary issuer; state jurisdiction and edition. Do not copy paywalled standards or present an international reference as Indonesian law.
- Water-quality content must use the applicable current official Indonesian health requirements and qualified operator/laboratory review. Never publish a universal chemical dose detached from measured volume, test result, product concentration, demand, and label.
- Electrical, structural, geotechnical, waterproofing, hydraulic, public-health, aquatic-life, and clinical claims require the relevant competent reviewer. Make stop conditions visible.
- Use original diagrams, field photos with rights/consent, manufacturer curves for exact models, calculations with assumptions/units, checklists, and redacted real records. Do not invent tests, projects, prices, testimonials, or performance.
- A case study requires a real site, date, initial condition, constraints, method, measurements, result window, limitations, permissions, and commercial disclosure. Otherwise publish it as a hypothetical worked example.
- Safety pages must explain hazard, consequence, prevention layers, inspection, failure response, and when to close the facility or call a professional.
- Health and animal-care pages must avoid remote diagnosis. Describe observable signs, immediate low-risk isolation actions, and referral triggers.
- Review every article annually or sooner when a cited rule, product, health requirement, or World Aquatics edition changes.

## First bounded publication cluster

Wave `W1-foundation` contains 12 connected assets:

1. KID-01A — system-selection map.
2. KID-02A — owner site-survey checklist.
3. KID-02B — requirements brief.
4. KID-04A — circulation-system anatomy.
5. KID-05C — turnover and circulation calculation concepts.
6. KID-06A — water-test interpretation.
7. KID-06E — chemical handling and storage.
8. KID-07F — handover dossier.
9. KID-12A — maintenance calendar.
10. KID-13A — leak diagnosis.
11. KID-14A — layered drowning prevention.
12. KID-17C — bid-comparison normalization.

The cluster is coherent because it supports one complete owner journey: choose the right system, document site/requirements, understand circulation and water safety, accept a finished project, maintain it, diagnose a high-cost symptom, protect users, and compare contractors on the same scope.

Monitor:

- valid sitemap inclusion, crawlability, canonical selection, indexing, and rich-result eligibility where applicable;
- impressions and clicks separated by selection, design, diagnostic, maintenance, safety, and procurement intent;
- scroll/task completion, checklist or template use, and navigation to the next lifecycle step;
- qualified contact, response, conversion, and collected-revenue signals where commercial links are present;
- GSC query/page overlap, unexpected ranking swaps, and title/slug similarity within Kolam.id;
- corrections, expert-review findings, and maintenance effort per asset.

Do not expand to the next wave merely because all 12 pages are published. Continue when the cluster is technically indexable, internally connected, evidence-complete, and producing useful reader or commercial signals without same-domain cannibalization.

## Definition of done

- All 18 topic hubs exist and each owns exactly six distinct catalog briefs.
- Every catalog row has one intent, unique ID/title/slug, a coverage promise, explicit exclusions, valid related IDs, evidence format, priority, and wave.
- All proposed slugs are checked against the complete tracked tree and the live URL crawl before implementation.
- The commercial/educational boundary is visible in copy, navigation, schema, and internal links.
- The location-page inventory has a measured keep/merge/noindex/remove decision; no location page survives merely because a city name was swapped.
- Sitemap, canonical, robots, and HTTP behavior agree on the intended indexable set.
- Safety, water-health, competition, electrical, structural, animal-health, and therapeutic claims pass their stated primary-source and competent-review gates.
- The first wave passes editorial, technical SEO, accessibility, performance, rights/privacy, and security review.
- Success is evaluated through indexation, intent-level impressions, task completion, qualified leads, conversion, and collected income—not article count or ranking alone.
