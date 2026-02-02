terraform {
  required_providers {
    azurerm = { source = "hashicorp/azurerm", version = "~> 3.0" }
    aws     = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "azurerm" {
  features {}
}

provider "aws" {
  region = "eu-central-1"
}

# --- AZURE RESSOURCE GRUPPE ---
# Oprettes kun hvis CloudProvider er Azure
resource "azurerm_resource_group" "portal_rg" {
  count    = lower(var.cloud_provider) == "azure" ? 1 : 0
  
  # rg-projekt-miljø (f.eks. rg-mitprojekt-production)
  name     = "rg-${lower(var.project_name)}-${lower(var.environment)}"
  location = "West Europe"

  tags = {
    Project      = var.project_name
    Environment  = var.environment
    Department   = var.department
    ManagedBy    = "Norlys-Cloud-Portal"
    ResourceType = var.resource_type
  }
}

# --- AWS VPC (Netværk) ---
# Oprettes kun hvis CloudProvider er AWS
resource "aws_vpc" "portal_vpc" {
  count      = lower(var.cloud_provider) == "aws" ? 1 : 0
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name         = "vpc-${var.project_name}-${var.environment}" # AWS standard
    Project      = var.project_name
    Environment  = var.environment
    Department   = var.department
    ResourceType = var.resource_type
    ManagedBy    = "Norlys-Cloud-Portal"
  }
}