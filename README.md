# openclaw-grok

**Grok CLI integration for OpenClaw** — enabling the Grok CLI as a first-class coding agent inside OpenClaw using the Agent Client Protocol (ACP).

> **Status (0.1.0):** Monorepo scaffolding complete. Implementation of ACP harness hardening and OpenClaw plugin bridge begins in subsequent phases. See the approved design document and implementation plan for full details.

## Repository Structure

This is a strict monorepo (pnpm workspaces):

- `packages/grok-harness/` — Grok-side ACP session management, worktree safety, capabilities exposure (Skills, Subagents, MCP, Plan Mode), permission bridging.
- `packages/openclaw-plugin/` — OpenClaw plugin that registers the `grok-cli` provider and bridges OpenClaw's ACP runtime / coding-agent workflows to the harness.
- `specs/` — Design specifications (source of truth).
- `docs/` — Architecture, integration guides, and usage documentation.
- `examples/` — Working examples (post-scaffolding).
- `scripts/` — Development and release scripts.

## Professional Standards

- **License:** MIT
- **Changelog:** Keep a Changelog + Conventional Commits (enforced via commitlint + husky)
- **Co-authorship:** Jesse Smith & Grok Build (visible in package metadata, LICENSE, commits, and documentation)
- **Scope:** Exclusively OpenClaw. No references to other harness projects or non-OpenClaw codebases.

## Getting Started (Developers)

```bash
corepack enable
pnpm install
pnpm build
pnpm lint
```

See CONTRIBUTING.md (added in Task 0.2) for commit guidelines and contribution process.

## Co-Authorship

This project is co-created by:

- Jesse Smith
- Grok Build (xAI)

All commits and releases include appropriate `Co-authored-by` trailers.

---

**Co-authored-by: Jesse Smith**  
**Co-authored-by: Grok Build <grok-build@x.ai>**

*This is the initial monorepo scaffolding commit for Task 0.1.*
