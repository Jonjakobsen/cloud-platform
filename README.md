# Cloud Self-Service Platform (Proof of Concept)

This repository contains a proof-of-concept cloud platform designed to demonstrate how internal development teams can provision cloud environments through a governed, API-driven self-service solution.

The project is inspired by enterprise-scale cloud platform patterns used in large organizations.

---

## Purpose

The purpose of this project is to showcase:
- API-first platform design
- Cloud self-service concepts
- Automation and governance thinking
- Separation of concerns between platform, application, and infrastructure

The focus is on **platform engineering principles**, not on building a production-ready application.

---

## Architecture Overview

```
[ React Portal ]
      |
      v
[ ASP.NET Core Platform API ]
      |
      v
[ Provisioning Layer (Terraform / Mock) ]
      |
      v
[ Azure / AWS ]
```

### Components
- **Frontend**: React-based self-service portal
- **Backend**: ASP.NET Core API providing platform services
- **Infrastructure**: Infrastructure-as-Code (Terraform or mocked provisioning)
- **CI/CD**: GitHub Actions

---

## Functional Scope

- Request provisioning of cloud environments (e.g. dev / prod)
- API-driven workflow with validation and policy checks
- Asynchronous provisioning simulation or IaC-based provisioning
- Basic status tracking

---

## Non-goals (Intentional)

The following are explicitly out of scope for this PoC:
- Production-grade UI or design
- Full identity integration (Azure AD implemented conceptually)
- Complete cloud resource coverage
- Advanced cost management implementation

These are excluded to keep the focus on **platform architecture and design decisions**.

---

## Security and Governance (Conceptual)

The platform is designed with the following principles in mind:
- API authentication via tokens (JWT / OAuth2 conceptually)
- Role-based access control (RBAC)
- Naming conventions and mandatory tagging
- Least-privilege access

---

## Technology Stack

- **Backend**: ASP.NET Core (Minimal APIs)
- **Frontend**: React
- **Infrastructure**: Terraform (or mocked provisioning)
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

---

## Repository Structure

```
cloud-platform/
├── backend/        # Platform API
├── frontend/       # Self-service portal
├── infra/          # Infrastructure as Code
│   └── terraform/
├── .github/
│   └── workflows/
└── README.md
```

---

## Status

This project is under active development and intended as a learning and demonstration platform.
