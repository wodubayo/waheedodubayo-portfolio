export const lagos = {
  title: 'Lagos Flood Intelligence — mapping floods from space',
  intro:
    'When heavy rain flooded Lagos on 3–4 July 2024, reports came in from Lekki, Ibeju-Lekki and beyond — but no clear map of where the water went. This project builds a reproducible pipeline that compares Sentinel-1 radar imagery from before and after an event to find candidate flooded areas, with the long-term goal of a reusable runbook for any future flood.',
  progress: [
    'Sentinel-1 pair acquired with provenance tracking; preprocessed in ESA SNAP (orbit, calibration, terrain correction)',
    'Backscatter change analysis across 71% of the Lagos study area',
    '400 candidate patches (3.13 km²) with radar and terrain review attributes',
    'Validation against independent evidence (NEMA, GDACS, geolocated imagery) under way',
  ],
  next: ['Independent validation and accuracy assessment', 'Second event (July 2021)'],
  tech: ['Python', 'GeoPandas', 'ESA SNAP', 'QGIS', 'Sentinel-1/2', 'NASADEM', 'Docker'],
  whyCandidates:
    'A darker radar return doesn’t prove flooding. Each patch is reviewed against terrain, historical water, and outside reports before anything is called a flood.',
  mapCaption:
    'Exploratory Sentinel-1 radar-change candidates (unvalidated), July 2024. Not a confirmed flood extent.',
};
