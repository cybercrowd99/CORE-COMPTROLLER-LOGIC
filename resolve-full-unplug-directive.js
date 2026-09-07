// FILE: resolve-full-unplug-directive.js
// CORE-COMPTROLLER-LOGIC
// Full Unplug Directive Resolution
//
// One rock.
// One object.
// One movement.
// One function.
// One entrance.
// One exit.
// One actual end.
//
// PURPOSE:
//
// Resolve one active broadcast-reset state
// into one full-unplug traffic directive.
//
// This file answers only:
//
// "Has this affected live field reached the
// state where Comptroller must direct it
// to fully unplug?"
//
// HARBOUR MASTER RULE:
//
// Comptroller directs traffic.
//
// Comptroller does not:
//
// - perform the unplug
// - inspect the contents of the link
// - diagnose the failure
// - repair the link
// - restart the link
// - authorize another organ's work
//
// BROADCAST RESET:
//
// An already-resolved broadcast reset may declare:
//
// - broadcastResetActive = true
// - fullUnplugRequired = true
//
// This file receives those declared states.
//
// When both are true:
//
// - fullUnplugDirected = true
//
// and this resolver ends.
//
// DIRECTIVE != EXECUTION
//
// DIRECTIVE != COMPLETION
//
// DIRECTIVE != RESTART
//
// IMPORTANT:
//
// This file does NOT:
//
// - unplug hardware
// - sever network transport
// - close sockets
// - terminate external services
// - perform broadcast reset
// - restore links
// - run link reverify
// - diagnose repeated DD events
// - inspect identity
// - inspect permission
// - inspect authority
// - inspect payload contents
// - erase history
// - erase evidence
//
// Owns only:
//
// - recognition of one active broadcast-reset state
// - recognition of one full-unplug requirement
// - declaration of one full-unplug traffic directive
//
// Does not own:
//
// - DD recognition
// - X-Hard Break detection
// - link reverify
// - broadcast-reset request
// - broadcast-reset resolution
// - physical unplug execution
// - unplug completion
// - repeated-DD detection
// - Biff questioning
// - diagnosis
// - restart
// - return-to-service
// - Secretary authority
// - Halo policy
// - Octopus movement
// - DECchamber evidence storage
// - Flight Control
// - CASE Health
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Directing traffic does not create authority
// over the work performed by the receiving organ.
//
// NO STATE BLEED:
//
// This directive applies only to the affected
// declared live field presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver does not direct unrelated links,
// sessions, lanes, or live fields to unplug.
//

export function resolveFullUnplugDirective(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      fullUnplugDirected: null,
      broadcastResetActive: null,
      fullUnplugRequired: null,
      reason: "FULL_UNPLUG_DIRECTIVE_INPUT_REQUIRED"
    };
  }

  if (typeof input.broadcastResetActive !== "boolean") {
    return {
      ok: false,
      fullUnplugDirected: null,
      broadcastResetActive: null,
      fullUnplugRequired: null,
      reason: "FULL_UNPLUG_DIRECTIVE_BROADCAST_RESET_STATE_REQUIRED"
    };
  }

  if (typeof input.fullUnplugRequired !== "boolean") {
    return {
      ok: false,
      fullUnplugDirected: null,
      broadcastResetActive: input.broadcastResetActive,
      fullUnplugRequired: null,
      reason: "FULL_UNPLUG_DIRECTIVE_REQUIREMENT_REQUIRED"
    };
  }

  if (
    input.broadcastResetActive !== true ||
    input.fullUnplugRequired !== true
  ) {
    return {
      ok: true,
      fullUnplugDirected: false,
      broadcastResetActive: input.broadcastResetActive,
      fullUnplugRequired: input.fullUnplugRequired,
      reason: "FULL_UNPLUG_DIRECTIVE_NOT_REQUIRED"
    };
  }

  return {
    ok: true,
    fullUnplugDirected: true,
    broadcastResetActive: true,
    fullUnplugRequired: true,
    reason: "FULL_UNPLUG_DIRECTIVE_RESOLVED"
  };
}
