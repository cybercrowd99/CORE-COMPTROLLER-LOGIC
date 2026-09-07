// FILE: resolve-broadcast-reset-completion.js
// CORE-COMPTROLLER-LOGIC
// Broadcast Reset Completion Resolution
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
// after full unplug has been confirmed.
//
// This file answers only:
//
// "Has this declared broadcast reset completed
// because the affected live field is now
// confirmed fully unplugged?"
//
// BROADCAST RESET COMPLETION REQUIRES:
//
// - broadcastResetActive = true
// - fullUnplugConfirmed = true
//
// When both are true:
//
// - broadcastResetCompleted = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// BROADCAST RESET COMPLETION != RESTART
//
// BROADCAST RESET COMPLETION != RELINK
//
// BROADCAST RESET COMPLETION != RETURN TO SERVICE
//
// BROADCAST RESET COMPLETION != AUTHORIZATION
//
// The affected field remains unplugged.
//
// This file does NOT:
//
// - perform the unplug
// - direct the unplug
// - restore any link
// - restart any system
// - reverify any link
// - diagnose failure
// - inspect identity
// - inspect authority
// - inspect permission
// - inspect payload contents
// - erase history
// - erase evidence
// - clear unrelated breaks
//
// Owns only:
//
// - recognition of one active broadcast reset
// - recognition of one confirmed full unplug
// - declaration that the broadcast reset is complete
//
// Does not own:
//
// - DD recognition
// - X-Hard Break detection
// - link reverify
// - broadcast-reset request
// - broadcast-reset activation
// - full-unplug directive
// - full-unplug execution
// - full-unplug confirmation
// - repeated-DD detection
// - Biff questioning
// - failure diagnosis
// - restart
// - relink
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
// HARBOUR MASTER RULE:
//
// Comptroller observes traffic state.
//
// A confirmed unplug is direct evidence that
// the affected declared live field has left
// its prior connected traffic state.
//
// Completion closes only the broadcast-reset
// movement.
//
// It does not create a new movement.
//
// NO AUTHORITY BLEED:
//
// Broadcast-reset completion creates no
// authority to reconnect or restart.
//
// NO STATE BLEED:
//
// Completion applies only to the declared
// affected live field presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver does not change unrelated
// links, sessions, lanes, or fields.
//

export function resolveBroadcastResetCompletion(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      broadcastResetCompleted: null,
      broadcastResetActive: null,
      fullUnplugConfirmed: null,
      reason: "BROADCAST_RESET_COMPLETION_INPUT_REQUIRED"
    };
  }

  if (typeof input.broadcastResetActive !== "boolean") {
    return {
      ok: false,
      broadcastResetCompleted: null,
      broadcastResetActive: null,
      fullUnplugConfirmed: null,
      reason: "BROADCAST_RESET_COMPLETION_ACTIVE_STATE_REQUIRED"
    };
  }

  if (input.broadcastResetActive !== true) {
    return {
      ok: true,
      broadcastResetCompleted: false,
      broadcastResetActive: false,
      fullUnplugConfirmed: null,
      reason: "BROADCAST_RESET_COMPLETION_NOT_ACTIVE"
    };
  }

  if (typeof input.fullUnplugConfirmed !== "boolean") {
    return {
      ok: false,
      broadcastResetCompleted: null,
      broadcastResetActive: true,
      fullUnplugConfirmed: null,
      reason: "BROADCAST_RESET_COMPLETION_UNPLUG_CONFIRMATION_REQUIRED"
    };
  }

  if (input.fullUnplugConfirmed !== true) {
    return {
      ok: true,
      broadcastResetCompleted: false,
      broadcastResetActive: true,
      fullUnplugConfirmed: false,
      reason: "BROADCAST_RESET_COMPLETION_UNPLUG_NOT_CONFIRMED"
    };
  }

  return {
    ok: true,
    broadcastResetCompleted: true,
    broadcastResetActive: true,
    fullUnplugConfirmed: true,
    reason: "BROADCAST_RESET_COMPLETION_RESOLVED"
  };
}
