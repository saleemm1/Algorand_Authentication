# Algorand_Authentication

# AlgoAuth Project

## Overview
AlgoAuth is a project that demonstrates decentralized authentication using Algorand blockchain technology. It consists of a smart contract deployed on Algorand TestNet and a React.js frontend application for interacting with the smart contract.

## Directory Structure
- **backend/**: Contains scripts for deploying the smart contract.
- **frontend/**: Contains the React.js application for interacting with the smart contract.

## Setup

### Backend
1. Ensure you have Python 3.x installed.
2. Install the required packages:
   ```bash
   pip install git+https://github.com/algorand/py-algorand-sdk.git
   ```
3. Deploy the smart contract:
   ```bash
   python backend/deploy_contract.py
   ```

### Frontend
1. Navigate to the project directory:
   ```bash
   cd frontend/algorand-auth-app
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
