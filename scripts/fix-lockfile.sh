#!/bin/bash
# This script regenerates the pnpm lockfile to sync with package.json
cd /vercel/share/v0-project
pnpm install --frozen-lockfile=false
