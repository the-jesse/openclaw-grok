/**
 * @file packages/grok-harness/src/index.ts
 *
 * Grok Harness package entry point.
 *
 * This package provides production hardening for Grok CLI's ACP (`grok agent stdio`)
 * when used as a coding agent driven by OpenClaw.
 *
 * Responsibilities (locked in approved design):
 * - ACP session lifecycle and event streaming
 * - Isolated worktree enforcement and Git safety
 * - Permission/approval bridging for OpenClaw
 * - Exposure of Skills, Subagents/Personas, MCP tools, Plan Mode under ACP control
 *
 * THIS IS SCAFFOLDING ONLY (Task 0.1).
 * No runtime logic, ACP wrappers, or safety implementations exist yet.
 * Implementation begins in Phase 1 per the official implementation plan.
 *
 * Co-authored-by: Jesse Smith
 * Co-authored-by: Grok Build <grok-build@x.ai>
 */

export {};
