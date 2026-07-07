# AIDOS System Architecture

## Overview

The following diagram illustrates the high-level architecture of the AIDOS (AI Desktop Operating System).

---

## Architecture Diagram

```text
                     User
                             │
                             ▼
        ┌─────────────────────────────────┐
        │     Electron Desktop Client     │
        │  (React + Electron Frontend)    │
        └─────────────────────────────────┘
                             │
                             ▼
        ┌─────────────────────────────────┐
        │        FastAPI Backend          │
        │ Authentication • APIs • Config  │
        └─────────────────────────────────┘
                             │
                             ▼
        ┌─────────────────────────────────┐
        │         Planner Agent           │
        │   Task Planning & Orchestration │
        └─────────────────────────────────┘
          ┌────────────┬────────────┬────────────┐
          ▼            ▼            ▼            ▼
 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │ Desktop     │ │ Browser     │ │ Memory      │ │ Future      │
 │ Agent       │ │ Agent       │ │ Agent       │ │ AI Plugins  │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
          │            │            │
          └────────────┼────────────┘
                       ▼
          ┌──────────────────────────────┐
          │      PostgreSQL Database     │
          └──────────────────────────────┘
```

---

## Component Description

### User
The user interacts with AIDOS through natural language commands.

### Electron Desktop Client
Provides the desktop application built with React and Electron.

### FastAPI Backend
Processes requests, manages APIs, authentication, and configuration.

### Planner Agent
Interprets user intent and orchestrates tasks across specialized agents.

### Desktop Agent
Handles desktop automation such as opening applications, managing files, and interacting with the operating system.

### Browser Agent
Automates browser-based tasks such as navigation, searching, form filling, and downloads.

### Memory Agent
Maintains user preferences, conversation history, and contextual information.

### PostgreSQL Database
Stores persistent application data and memory records.

---

## Future Expansion

Future versions of AIDOS may include:

- Voice Assistant
- Local AI Models
- Plugin Marketplace
- Multi-Agent Collaboration
- Cloud Synchronization
- Mobile Companion Application