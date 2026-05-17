/**
 * @file packages/openclaw-plugin/src/index.ts
 *
 * OpenClaw Plugin package entry point.
 *
 * Registers the Grok provider inside OpenClaw and provides the ACP client bridge
 * that drives `grok agent stdio` sessions (via grok-harness hardening).
 *
 * Responsibilities (locked in approved design):
 * - Provider registration for `grok-cli`
 * - ACP client + session management from OpenClaw side
 * - Translation of coding-agent skill / worktree / transcript concepts to ACP
 * - Surfacing of Grok capabilities inside OpenClaw UI
 *
 * THIS IS SCAFFOLDING ONLY (Task 0.1).
 * No provider registration, ACP client, or bridging logic exists yet.
 * Implementation begins in Phase 2 per the official implementation plan.
 *
 * The accompanying openclaw.plugin.json provides the minimal manifest.
 *
 * Co-authored-by: Jesse Smith
 * Co-authored-by: Grok Build <grok-build@x.ai>
 */

export {};
