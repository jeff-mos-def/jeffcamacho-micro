---
title: "Home MicroK8s Cluster Implementation"
description: "From eWaste to a scalable Kubernetes cluster using MicroK8s."
date: "11/01/2024"
startDate: "12/20/2025"
endDate: "TBD"  # can be finalized once the project timeline is set
#demoURL: "https://example.com"  # optional
#repoURL: "https://github.com/..."  # optional
status: "To Do"  # "To Do", "Doing", "Done", or "OBE"
draft: false  # optional, defaults to false
---


## Home MicroK8s Cluster Implementation: Scaling My Kubernetes Lab

Setting up a MicroK8s cluster at home is another "*can-I-make-this-work*" project that I’m undertaking to deepen my understanding of Kubernetes and container orchestration. The goal is to design, deploy, and manage a scalable Kubernetes cluster that builds upon my existing homelab environment. This project will allow me to experiment with cluster configurations, containerized applications, and high-availability setups in a practical, hands-on way.

Currently, my homelab consists of a single worker node. The plan is to scale this setup into a multi-node cluster using repurposed hardware, specifically e-waste systems acquired at steep discounts from [Goodwill San Antonio](https://www.goodwillsa.org/) and [Goodwill Online Auctions](https://shopgoodwill.com/). All compute systems used in this project will be sustainable choices, keeping costs low while reducing environmental impact.

I want this to be my "**BIG**" personal project for the year that will allow me to integrate much of what I've outlined in the requirements section.

Here. We. Go.

---

## Objective and Scope

The project’s primary objectives are to:

- Build a scalable [MicroK8s](https://microk8s.io/) cluster that extends my existing single-node setup.
- Use repurposed hardware to reduce e-waste and keep costs low.
- Automate deployment pipelines for sample applications.
- Test high availability and efficient resource utilization across the cluster.

---

## Hardware

The cluster will utilize the following hardware:

- HP EliteDesk 800 G4 DM: Worker node 1
  - Intel Core i7-8700 CPU
  - 64GB RAM 
  - Intel UHD Graphics 630
  - Realtek and Sandisk NVMe storage
  - Intel I219-LM Ethernet
- HP EliteDesk 800 G4 DM: Worker node 2 (to be added)
  - Intel Core i7-8700 CPU
  - 64GB RAM 
  - Intel UHD Graphics 630
  - Realtek and Sandisk NVMe storage
  - Intel I219-LM Ethernet
- Dell Optiplex 3040: Master node
  - Intel Core i5-6500 CPU @ 3.2GHz
  - 1TB HDD
    - I plan to move to an SSD drive for the boot drive.
  - 16GB RAM 

As mentioned, all hardware was sourced from Goodwill under deep discounts or low price bidding, demonstrating that high-performance computing projects can be achieved with minimal environmental impact by repurposing e-waste.

---

## Requirements to Consider

In addition to the core infrastructure setup, the applications and services deployed within the MicroK8s pods will play a key role in defining the cluster's functionality. Since this cluster will serve as a general home server, here are some potential applications and recommendations to include in the requirements:

### Development Tools

  - **[VS Code Server](https://code.visualstudio.com/docs/remote/vscode-server) (or similar)**: A web-based code editor for development accessible from any device.
  - **[Gitea](https://about.gitea.com/)**: A lightweight, self-hosted Git service for managing repositories and collaborative projects.
  - **[Jenkins](https://www.jenkins.io/) or [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)**: For experimenting with continuous integration and deployment pipelines.

### Media Sharing and Management

  - **[Plex](https://www.plex.tv/) or [Jellyfin](https://jellyfin.org/)**: For streaming media content (movies, TV shows, music) across devices.
  - **[Nextcloud](https://nextcloud.com/)**: For file storage and sharing, similar to a private Google Drive.
    - Note: This may be an optional requirement. Nextcloud has been *achingly* hard for me to work with. User error, I guess. I've since gotten a Google Workspace account instead.
  - **[PhotoPrism](https://www.photoprism.app/)**: For managing and browsing personal photo collections.
    - Note: Same as previously mentioned.

### DevOps and Infrastructure Tools

  - **[Portainer](https://www.portainer.io/)**: For managing containers and Kubernetes clusters via a web UI.
  - **[Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/)**: For monitoring cluster health and metrics, such as resource utilization and application performance.
  - **[Traefik](https://traefik.io/traefik/) or [NGINX Ingress](https://github.com/kubernetes/ingress-nginx)**: For routing traffic to applications and providing HTTPS support.

### Network Services

  - **[Pi-hole](https://pi-hole.net/)**: A DNS-level ad and tracker blocker.
  - **[Unbound DNS](https://www.nlnetlabs.nl/projects/unbound/about/)**: To run a local recursive DNS resolver for enhanced privacy.

### Utility Applications

  - **[Home Assistant](https://www.home-assistant.io/)**: For smart home automation and device management.
  - **[Bitwarden](https://bitwarden.com/)**: A self-hosted password manager for secure credential storage.

These applications can be deployed as Kubernetes pods, offering a highly modular, easily scalable setup. The selection depends on specific use cases and resource availability.

---

## Project Phases

To ensure focus and manageable progress, the project is divided into these key phases:

### Planning Phase

- Evaluate the existing homelab environment and its scalability potential.
- Research and acquire additional hardware to expand the cluster:
- Utilize the existing HP EliteDesk 800 G4 DM as the first worker node.
- Add a second HP EliteDesk 800 G4 DM as a second worker node.
- Use the Dell Optiplex 3040 as the master node.
- Define cluster requirements, including the applications mentioned above.
- Develop a project timeline, budget, and checklist of required tools and configurations.

### Implementation Phase

- Add and configure additional nodes to the cluster.
- Install MicroK8s on each node and establish communication between them.
- Set up networking, persistent storage, and cluster monitoring.
- Deploy a sample application to validate the expanded cluster’s functionality.

### Testing and Troubleshooting Phase

- Test cluster performance under various scenarios, including failover and load balancing.
- Monitor metrics like CPU, memory, and storage usage to identify bottlenecks.
- Troubleshoot and resolve any issues with node communication or application performance.

### Documentation and Review Phase

- Document the scaling process, including architecture diagrams and configuration steps.
- Conduct a retrospective to review what worked and identify areas for improvement.
- Generate a performance report for resource allocation and cluster stability.

---

## Deliverables

The following deliverables will provide tangible outputs from the project:

- A cluster architecture diagram showcasing the multi-node setup.
- Step-by-step documentation for scaling from a single node to a multi-node cluster.
- Screenshots or recordings of a sample application running in the cluster.
- A report detailing resource usage, performance, and lessons learned.

---

## Key Outcomes

By expanding my current homelab into a multi-node Kubernetes cluster, I aim to:

- Gain a practical understanding of scaling Kubernetes environments.
- Build expertise in managing physical and software-defined infrastructure.
- Demonstrate project management skills through structured planning and execution.
- Showcase the potential for repurposing e-waste in high-performance IT projects.

---

## Closing Statements

To be clear, this is about... *building*. *Recuding.* *Recycling*. *Reusing.*

There are **plenty** of projects that I've seen kick off where the top-of-the-line equipment is used right out of the gate, no matter what the actual requirement is. This pertains to manufacturing, construction, cloud computing, hell... even *cooking*. If we're savvy, and know what we can do with what we have around us, we can create a *fantastic* product with minimal impact on our environment, our pocket, and our patience.

This can all be summed up in one project vision statement:

> By scaling up from a single worker node with repurposed hardware, I’ll develop skills that are directly transferable to real-world IT infrastructure scenarios while reducing environmental impact.

Wish me luck. 🙃

All the best.

- Jeff