# Prefab Decision Support Engine

This project provides standardized analytical outputs for prefab and
construction-related decision processes.

## Purpose
- Generate cut-list estimates
- Estimate material waste ratios
- Output simple risk indicators

## What this is NOT
- Not construction engineering advice
- Not construction engineering instructions
- Not construction engineering robots or construction factory control systems

This software is strictly decision-support.

## Target Users
- Prefab factories
- Construction planning teams
- Analysts and estimators

US-oriented, liability-aware, decision-support only.

## 🏗️ prefabric_26 📁 Project Structure

```
Folder Structure
prefabric_26/
├── app/
│   ├── __init__.py
│   ├── logic.py
│   ├── main.py
│   ├── models.py
│   └── utils.py
├── templates/
│   └── index.html
├── outputs/
│   └── sample_report.txt
├── README.md
├── deploy.md
└── requirements.txt
```
## Quick Setup for VS Code on Your PC
Download the prefabric_26 folder.
Open it in VS Code.
Run these commands in your VS Code terminal (PowerShell):
# 1. Create virtual environment
python -m venv .venv
# 2. Activate it
.\.venv\Scripts\Activate.ps1
# 3. Install the updated dependencies
pip install -r requirements.txt
# 4. Run the app
uvicorn app.main:app --reload
## Live Deployment
**URL:** https://prefabric-26-a.onrender.com/  

**Platform:** Render.com
