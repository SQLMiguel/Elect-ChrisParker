# Copilot Instructions

## Session memory

This repo keeps a persistent memory file at [`MEMORY.md`](../MEMORY.md).

- **At the start of every chat session:** read `MEMORY.md`, then run
  `git --no-pager log --oneline <Last reviewed commit>..HEAD` and `git status --short`
  to learn what changed since the last session. Briefly summarize anything new to the user.
- **Before finishing a session where anything changed:** update `MEMORY.md` — add a Session Log entry
  (newest on top) describing what changed and what is new, refresh **Current State** and **Open Items**,
  and set **Last reviewed commit** / **Last updated**.

## Project notes

- Pushing to `main` auto-deploys to Vercel (production). Don't push without the user's approval.
- Never commit `.env` or secrets; document new env vars in `.env.example`.
