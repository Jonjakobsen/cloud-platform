# Cloud Self-Service Platform (PoC)

Dette projekt er en Proof-of-Concept på en **Internal Developer Platform (IDP)**. Formålet er at demonstrere, hvordan man kan give udviklere i en organisation som Norlys adgang til cloud-ressourcer via en kontrolleret "Self-Service" portal, der balancerer fart med governance.

> **Mål:** At skabe en "Golden Path", hvor udviklere kan bestille specifikke værktøjer (GPU-maskiner, databaser, web-apps) uden manuel ventetid.

---

## 🏗️ Arkitektur & Teknologi

Projektet er bygget med fokus på **Cloud Native** principper og separation of concerns:

- **Frontend:** React (Vite) – En dynamisk portal, hvor brugere vælger ressourcetype, miljø og cloud-provider.
- **Backend:** .NET 8 API – En orkestreringsenhed, der mapper brugerønsker til specifikke infrastruktur-konfigurationer.
- **Containerization:** Docker & Docker Compose – Hele platformen er containeriseret for nem udrulning.

---

## 🚀 Key Features (Targeting Norlys Cloud Platforms)

- **Dynamisk Provisionering:** API'et skelner mellem forskellige ressourcebehov (f.eks. CPU vs. GPU) og returnerer automatisk de korrekte adgangslinks.
- **Environment Awareness:** Adskillelse af `Development`, `Staging` og `Production` for at sikre korrekt skalering og sikkerhedspolitikker.
- **Actionable Responses:** Systemet returnerer direkte adgangsprotokoller (f.eks. `vscode://` for ML-arbejde eller `jdbc://` for databaser) for at minimere friktion for udvikleren.
- **FinOps & Governance:** Forberedt til automatisk tagging og "auto-shutdown" logik for at kontrollere cloud-omkostninger.

---

## 🛠️ Sådan køres projektet (Local Dev Experience)

Platformen kører fuldt containeriseret for at sikre, at det også "virker på din maskine".

1. Sørg for at have **Docker Desktop** kørende.
2. Åbn en terminal i projektets rodmappe.
3. Kør følgende kommando:
   ```bash
   docker-compose up --build
4. Adgang:

    Portal (Frontend): http://localhost:5173

    API (Backend): http://localhost:5140/swagger

## 📈 Enterprise Use-Cases i denne PoC
Data Science: Bestilling af en ML-Workstation med GPU. API'et simulerer opsætning og returnerer et VS Code Remote link.

Application Dev: Hurtig udrulning af standardiserede Web Apps med præ-konfigurerede domænenavne.

Data Engineering: Provisionering af SQL-databaser med automatiske firewall-regler baseret på det valgte miljø.

## 👨‍💻 Cloud Platform Engineer Refleksion
Dette projekt demonstrerer min forståelse for den moderne cloud-rejse. I stedet for at lade infrastruktur være en flaskehals, har jeg bygget en løsning, der abstraherer kompleksiteten væk. Ved at bruge Docker Compose til lokal udvikling og .NET Minimal APIs til hurtig eksekvering, viser jeg evnen til at levere værktøjer, der understøtter både udviklerens hastighed og organisationens krav til sikkerhed.