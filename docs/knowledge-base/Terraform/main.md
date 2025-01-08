---
sidebar_label: Intro
title: Intro
sidebar_position: 1
---

## Key Features

- **Infrastructure as Code (IaC)**: Define your infrastructure in configuration files that describe the components needed to run a single application or your entire datacenter.
- **Multi-Cloud Support**: Manage and provision resources across multiple cloud providers and on-premises datacenters.
- **State Management**: Keeps track of the state of your infrastructure, enabling the creation of plans for updates and changes.
- **Resource Graph**: Builds a graph of all your resources, which allows Terraform to create or modify non-dependent resources in parallel.

## Basic Commands

- `terraform init`: Initializes a new or existing Terraform configuration.
- `terraform plan`: Creates an execution plan, showing what actions Terraform will take.
- `terraform apply`: Applies the changes required to reach the desired state of the configuration.
- `terraform destroy`: Removes the resources defined in the configuration.

## Use Cases

- Automating cloud infrastructure setup and management.
- Versioning infrastructure.
- Collaborative infrastructure management.

Terraform is highly valued for its ability to provide a consistent workflow for provisioning and managing infrastructure, making it a preferred tool for DevOps practices.

## Requirements

- [install Terraform](https://developer.hashicorp.com/terraform/install)
