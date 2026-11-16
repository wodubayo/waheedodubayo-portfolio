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

I've shipped production software since 2003. Right now I'm building a shared
grocery app and a flood-mapping pipeline for Lagos, and I recently finished an
MSc applying computer vision to scallop surveys.

[See the products] · [GitHub](https://github.com/wodubayo) · [LinkedIn](https://linkedin.com/in/waheed-odubayo-853ba24b/)

---

## Products

### Grocr
*Android · Prototype*

Grocr is a shared grocery list and pantry for families, housemates, and friend
groups. Everyone sees the same list as it changes, so you don't buy milk twice
or find expired yogurt at the back of the fridge.

**Working today**
- Live shared lists: several people can shop at once, and the list shows who bought what, where, and for how much
- Reusable buddy groups for households, events, and friends
- Pantry inventory with stock levels, expiry alerts, and calorie estimates (Open Food Facts)
- Scan to add: photograph a typed or handwritten list to transcribe it, or a receipt to match purchases to list items
- R.E.G.I.N.A., a voice and text assistant: "add 2 milk to Weekend Barbecue." Always confirms before changing anything.

**Next:** recipe suggestions from what's already in the pantry · Play Store release

**Built with:** Kotlin · Jetpack Compose · Firebase · Supabase · WebSockets

Images: grocr-home.jpg, grocr-lists.jpg, grocr-list.jpg, grocr-pantry.jpg,
grocr-buddies.jpg, grocr-regina.jpg

Optional polish: crop phone status bars from screenshots.

### Lagos Flood Intelligence
*Geospatial pipeline · In progress* · [GitHub](https://github.com/wodubayo/lagos-flood-intelligence)

![](images/lagos-hero-map.png)

When heavy rain flooded Lagos on 3–4 July 2024, there were reports from Lekki,
Ibeju-Lekki and other areas, but no clear map of where the water went. This
project is a reproducible pipeline that compares Sentinel-1 radar images from
before and after a flood to find candidate flooded areas. The longer-term goal
is a runbook that can be reused for future floods.

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

## Applied AI: Bay Scallop Monitoring with Computer Vision
*MSc Oceanography thesis · University of Rhode Island, 2026 · with Rhode Island DEM*

**The problem.** Bay scallops in Point Judith Pond, Rhode Island, were once a
100,000+ lb/year fishery; today numbers are too low to sustain one, and decades
of restoration have had limited success. Monitoring relies on scuba surveys and
manual image review, which are slow, cover small areas, and are hard to repeat.
Scallop survival is also closely tied to eelgrass, so a count is much less
useful without habitat data alongside it.

**What I built.** A deep learning pipeline that finds scallops
*and* measures the habitat around them, from seafloor imagery collected by an
autonomous surface vehicle along RI DEM-selected transects:
- **Detection:** YOLOv5 detector for live scallops, which are small, camouflaged, and often half-buried
- **Habitat segmentation:** U-Net classifying every pixel as eelgrass or sand/silt, giving each image a habitat composition
- **Representation learning:** GeoCLR, a contrastive learning method that uses each image's GPS position to learn habitat structure from mostly unlabeled imagery
- **Integration:** detections merged with habitat masks to analyze where scallops occur relative to habitat

**What it revealed.** Scallops occurred most often in **moderate eelgrass
cover (30–60%)** and less often in sparse or dense beds. A likely reason is a
trade-off: sparse beds give less protection from predators, while dense beds
cut down water exchange and oxygen. How much eelgrass there is makes a
difference, as well as whether it's there at all.

**Engineering decisions**
- **Single-class over multi-class.** There were too few labels for dead and face-up shells to train them as separate classes, so the model detects live scallops only.
- **Structured augmentation for underwater light.** CLAHE contrast correction, HSV color-space transforms, and rotations to counter strobe hotspots, dark corners, and color loss. Applied to training data only.
- **Spatially independent evaluation.** Whole survey lines were held out for testing, so results are measured on locations the model never saw.
- **Right-sized models.** YOLOv5 generalized better than newer, larger variants on a small, specialized dataset.
- **Bias mitigation.** Identified and corrected systematic eelgrass overestimation from vignetting (15% edge crop) and camera viewing geometry.

**Tools:** Python · OpenCV · MATLAB · CVAT · YOLOv5 · U-Net · GeoCLR

*Data collected with RI DEM; project led by Dr. Chris Roman, URI Graduate School of Oceanography.*
**[Explore the project site →](https://scallops.waheedodubayo.dev/)** · **[Read the full thesis on DigitalCommons@URI →](https://digitalcommons.uri.edu/theses/2719/)**

Rule: method only. No model metrics or seabed imagery on the site.

---

## Engineering experience

I've worked on financial ledgers in Nigeria, home health software, NASA aircraft
parts inventory, and surgical scheduling, and led engineering teams along the way.

- **LeanTaaS** · Software Engineer · 2023–present
  Surgical scheduling SaaS. Architecture decisions on core scheduling features; leading client data migrations so hospitals go live on the new platform with their full history.
- **NASA (via SAIC)** · Senior Software Engineer · 2015–2019
  Aircraft Operations Division (AOD): built and maintained the parts ordering and inventory system that keeps the division's aircraft supplied, in C# / .NET MVC and AngularJS under CMMI. Work covered feature delivery, code and design reviews, test plans, and defect fixes.
- **Cradle Solution** · Software Engineer → Lead Engineer → Senior Engineer & Team Lead · 2010–2014, 2019–2023
  Home health management software for home health agencies. Started out building C#/.NET systems (99%+ uptime), then led the upgrade to CMS OASIS-C1 (the Medicare home health assessment standard), and later ran Scrum delivery for onshore and offshore teams while still writing React, Node, and ArangoDB code on AWS.
- **Weatherford International** · Software Support Analyst · 2014–2015
- **Early career, Nigeria** · Software Engineer · 2003–2004
  Built a self-balancing sales ledger system for financial accounting.

**Stack:** C# / .NET · React · Node.js · Kotlin / Android · MongoDB · ArangoDB · SQL Server · AWS · Docker · Python · OpenCV

**Credentials:** AWS Certified Developer · BS Computer Science (UH-Downtown) · MS Oceanography (URI, 2026)

---

## Contact

[GitHub](https://github.com/wodubayo) · [LinkedIn](https://linkedin.com/in/waheed-odubayo-853ba24b/)

(No phone, address, or public email on the site.)
