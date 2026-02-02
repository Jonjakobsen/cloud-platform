# Cloud Self-Service Platform (PoC)

This project is a Proof-of-Concept (PoC) for an **Internal Developer Platform (IDP)**. The goal is to demonstrate how organizations can provide developers with self-service access to cloud resources through a controlled portal that balances speed with enterprise governance.

**Objective:** To create a "Golden Path" where developers can provision specific tools (ML workstations, databases, web apps) without manual waiting times or tickets.

---

## 🏗️ Architecture & Technology

The project is built with a focus on **Cloud Native** principles and separation of concerns:

- **Frontend:** React (Vite) – A dynamic portal for selecting resource types, environments, and cloud providers.
- **Backend:** .NET 8 API – An orchestration unit that maps user requests to infrastructure variables.
- **Infrastructure (IaC):** **Terraform** – Modular code for provisioning resources in both **Azure** and **AWS**.
- **Containerization:** Docker & Docker Compose – The entire platform is containerized for seamless local development and deployment.
- **CI/CD:** **GitHub Actions** – Automatically verifies container builds and validates Terraform syntax on every push.



---

## 🚀 Key Features

- **Multi-Cloud Logic:** The system handles both Azure Resource Groups and AWS VPCs based on user input, managed via Terraform `count` logic.
- **FinOps & Governance:** All resources are automatically tagged with `Department`, `Project`, `Recource type`, and `Environment`. This ensures 100% transparency for cloud cost allocation (Chargeback).
- **Environment Awareness:** Strict separation of `Development`, `Staging`, and `Production` to ensure correct scaling and security policies.
- **Actionable Responses:** The system returns direct access protocols (e.g., `vscode://` for ML workloads or `jdbc://` for databases) to minimize developer friction.

---

## 🛠️ Getting Started (Local Dev Experience)

The platform is fully containerized to ensure a consistent "works on my machine" experience.

1. Ensure **Docker Desktop** is running.
2. Open a terminal in the project root directory.
3. Run the following command:
   ```bash
   docker-compose up --build
4. Access
- **Portal (Frontend):** [http://localhost:5173](http://localhost:5173)
- **API (Backend/Swagger):** [http://localhost:5140/swagger](http://localhost:5140/swagger)

---

## 🛡️ Infrastructure as Code & CI/CD
To ensure high code quality, the infrastructure is automatically validated:

- **Terraform Validate:** GitHub Actions runs `terraform validate` to ensure variables and syntax are correctly mapped against provider schemas.
- **Docker Verification:** Both microservices (frontend/backend) are verified via Docker builds in the pipeline to ensure container immutability.



---

## 📈 Enterprise Use-Cases
- **Data Science:** Requesting an ML Workstation with GPU. The API simulates setup and returns a VS Code Remote link.
- **Application Dev:** Rapid deployment of standardized Web Apps with pre-configured naming conventions and tags.
- **FinOps Tracking:** By enforcing a `Department` selection in the frontend, the platform ensures no resource is created without a clear owner for cost-center allocation.

---

## 👨‍💻 Cloud Platform Engineer Reflection
This project demonstrates my understanding of the modern cloud journey. Instead of allowing infrastructure to be a bottleneck, I have built a solution that abstracts complexity through **Infrastructure as Code (IaC)**. By utilizing Docker Compose for local development and GitHub Actions for automated validation, I demonstrate the ability to deliver tools that support both developer velocity and organizational requirements for security and cost control.