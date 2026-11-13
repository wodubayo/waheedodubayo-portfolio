# Portfolio copy (draft v1)

Positioning: experienced software engineer and product builder, expanding into
geospatial and environmental intelligence. Audience: mixed (recruiters skim,
technical readers click in). Tone: product-minded.

Page order: Hero → Products (Grocr, Lagos, equal billing) → Applied AI (Scallop)
→ Engineering experience → Contact

---

## Hero

**Waheed Odubayo**

I build software that turns messy real-world data into decisions.

20+ years shipping production systems — now building products for households,
cities, and coastlines.

[See the products] · [GitHub](https://github.com/wodubayo) · [LinkedIn](https://linkedin.com/in/waheed-odubayo-853ba24b/)

---

## Products

### Grocr — groceries, in sync
*Android · Prototype*

Grocr keeps a household's food in sync. Families, housemates, and friend
groups share live shopping lists and a common pantry — so nobody double-buys,
forgets the milk, or finds something expired at the back of the shelf.

**Working today**
- Live shared lists — multiple people shopping at once, with who bought what, where, and for how much
- Reusable buddy groups for households, events, and friends
- Pantry inventory with stock levels, expiry alerts, and calorie estimates (Open Food Facts)
- Scan to add — photograph a typed or handwritten list to transcribe it, or a receipt to match purchases to list items
- R.E.G.I.N.A. — a voice and text assistant: "add 2 milk to Weekend Barbecue." Always confirms before changing anything.

**Next:** recipe suggestions from what's already in the pantry · Play Store release

**Built with:** Kotlin · Jetpack Compose · Firebase · Supabase · WebSockets

Images: grocr-home.jpg, grocr-lists.jpg, grocr-list.jpg, grocr-pantry.jpg,
grocr-buddies.jpg, grocr-regina.jpg

Optional polish: crop phone status bars from screenshots.

### Lagos Flood Intelligence — mapping floods from space
*Geospatial pipeline · In progress* · [GitHub](https://github.com/wodubayo/lagos-flood-intelligence)

![](images/lagos-hero-map.png)

When heavy rain flooded Lagos on 3–4 July 2024, reports came in from Lekki,
Ibeju-Lekki and beyond — but no clear map of where the water went. This project
builds a reproducible pipeline that compares Sentinel-1 radar imagery from
before and after an event to find candidate flooded areas, with the long-term
goal of a reusable runbook for any future flood.

![](images/lagos-pipeline.svg)

**Progress so far**
- Sentinel-1 pair acquired with provenance tracking; preprocessed in ESA SNAP (orbit, calibration, terrain correction)
- Backscatter change analysis across 71% of the Lagos study area
- 400 candidate patches (3.13 km²) with radar and terrain review attributes
- Validation against independent evidence (NEMA, GDACS, geolocated imagery) under way

![](images/lagos-before-after.png)
*Radar backscatter on 21 June and 3 July 2024, and the change between them.*

**Why "candidates," not "floods":** a darker radar return doesn't prove
flooding. Each patch is reviewed against terrain, historical water, and
outside reports before anything is called a flood.

![](images/lagos-candidate-detail.png)

**Next:** independent validation and accuracy assessment · second event (July 2021)

**Built with:** Python · GeoPandas · ESA SNAP · QGIS · Sentinel-1/2 · NASADEM · Docker

*Caption (required on map images): Exploratory Sentinel-1 radar-change
candidates (unvalidated), July 2024. Not a confirmed flood extent.*

Detail page only: images/lagos-coverage-map.png

Rule: never claim accuracy, detection rate, or verified flooded area.

---

## Applied AI — Bay Scallop Monitoring with Computer Vision
*MSc Oceanography thesis · University of Rhode Island, 2026 · with Rhode Island DEM*

**The problem.** Bay scallops in Point Judith Pond, Rhode Island, were once a
100,000+ lb/year fishery; today numbers are too low to sustain one, and decades
of restoration have had limited success. Monitoring relies on scuba surveys and
manual image review — slow, small-scale, and hard to repeat. And because
scallop survival is closely tied to eelgrass habitat, counting scallops without
measuring habitat tells only half the story.

**What I built.** An end-to-end deep learning pipeline that finds scallops
*and* measures the habitat around them, from seafloor imagery collected by an
autonomous surface vehicle along RI DEM-selected transects:
- **Detection** — YOLOv5 detector for live scallops (small, camouflaged, often half-buried)
- **Habitat segmentation** — U-Net classifying every pixel as eelgrass or sand/silt, giving each image a habitat composition
- **Representation learning** — GeoCLR, contrastive learning that uses each image's GPS position to learn habitat structure from mostly unlabeled imagery
- **Integration** — detections merged with habitat masks to analyze where scallops occur relative to habitat

**What it revealed.** Scallops occurred most often in **moderate eelgrass
cover (30–60%)** — less in sparse or dense beds. That fits a balance between
protection from predators (lacking in sparse beds) and water exchange and
oxygen (reduced in dense ones): habitat *density* matters, not just presence.

**Engineering decisions**
- **Single-class over multi-class.** Live/dead/face-up shell classes were too sparsely labeled; focusing on live scallops concentrated the model on what matters.
- **Structured augmentation for underwater light.** CLAHE contrast correction, HSV color-space transforms, and rotations to counter strobe hotspots, dark corners, and color loss — applied to training data only.
- **Spatially independent evaluation.** Entire survey lines held out, so results reflect new locations, not memorized ones.
- **Right-sized models.** YOLOv5 generalized better than newer, larger variants on a small, specialized dataset.
- **Bias mitigation.** Identified and corrected systematic eelgrass overestimation from vignetting (15% edge crop) and camera viewing geometry.

**Tools:** Python · OpenCV · MATLAB · CVAT · YOLOv5 · U-Net · GeoCLR

*Data collected with RI DEM; project led by Dr. Chris Roman, URI Graduate School of Oceanography.*
**[Read the full thesis on DigitalCommons@URI →](https://digitalcommons.uri.edu/theses/2719/)**

Rule: method only — no model metrics or seabed imagery on the site.

---

## Engineering experience

20+ years building and shipping production software — from early work in
Nigeria to healthcare SaaS, NASA mission-critical systems, and leading the
teams that build them.

- **LeanTaaS** · Software Engineer · 2023–present
  Surgical scheduling SaaS. Architecture decisions on core scheduling features; leading client data migrations so hospitals go live on the new platform with their full history.
- **NASA (via SAIC)** · Senior Software Engineer · 2015–2019
  Aircraft Operations Division (AOD): built and maintained the parts ordering and inventory system that keeps the division's aircraft supplied, in C# / .NET MVC and AngularJS under CMMI — feature delivery, code and design peer reviews, test plans, and defect resolution.
- **Cradle Solution** · Software Engineer → Lead Engineer → Senior Engineer & Team Lead · 2010–2014, 2019–2023
  Grew from building scalable C#/.NET systems (99%+ uptime), to leading the CMS OASIS C→C1 compliance upgrade, to running Scrum delivery for onshore and offshore teams while staying hands-on in React, Node, and ArangoDB on AWS.
- **Weatherford International** · Software Support Analyst · 2014–2015
- **Early career, Nigeria** · Software Engineer · 2003–2009

**Stack:** C# / .NET · React · Node.js · Kotlin / Android · MongoDB · ArangoDB · SQL Server · AWS · Docker · Python · OpenCV

**Credentials:** AWS Certified Developer · BS Computer Science (UH-Downtown) · MS Oceanography (URI, 2026)

---

## Contact

[GitHub](https://github.com/wodubayo) · [LinkedIn](https://linkedin.com/in/waheed-odubayo-853ba24b/)

(No phone, address, or public email on the site.)
