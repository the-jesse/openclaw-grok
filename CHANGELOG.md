# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-05-16

### Added
- Monorepo initialization (Task 0.1): pnpm workspaces, two packages (`@openclaw/grok-harness`, `@openclaw/grok-provider`), root TypeScript / ESLint / Prettier / Husky + commitlint configuration.
- MIT license with explicit co-authorship (Jesse Smith & Grok Build).
- Professional scaffolding: `.gitignore`, `.editorconfig`, `tsconfig.json` project references, placeholder source files, directory structure matching the approved design (`packages/`, `specs/`, `docs/`, `examples/`, `scripts/`, `.github/`).
- Initial git repository with Conventional Commits enforcement ready.
- Co-authorship trailers and metadata present from day one.

### Notes
- This release contains **only scaffolding** — no ACP implementation, provider logic, or runtime behavior.
- Full implementation plan and design document govern subsequent phases.
- `pnpm install` verified clean.

**Co-authored-by: Jesse Smith**  
**Co-authored-by: Grok Build <grok-build@x.ai>**
