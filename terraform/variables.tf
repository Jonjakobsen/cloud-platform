variable "project_name" {
  type        = string
  description = "Navnet på projektet fra API'et"
}

variable "environment" {
  type        = string
  description = "Development, Staging eller Production"
}

variable "cloud_provider" {
  type        = string
  description = "Azure eller AWS"
}

variable "resource_type" {
  type        = string
  description = "WebApp, MachineLearning eller Database"
}

variable "department" {
  type        = string
  description = "IT eller Data & Analytics (vigtigt for FinOps)"
}