// FILE: resolve-unplugged-hold.js
// CORE-COMPTROLLER-LOGIC
// Unplugged Hold Resolution
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
// Resolve one completed broadcast-reset state
// into one stable unplugged hold declaration.
//
// This file answers only:
//
// "Is this affected declared live field now
// fully unplugged and being held in that state
// after broadcast-reset completion?"
//
// UNPLUGGED HOLD REQUIRES:
//
// - broadcastResetCompleted = true
// - fullUnplugConfirmed = true
//
// When both are true:
//
// - unpluggedHoldActive = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// UNPLUGGED HOLD != RESTART
//
// UNPLUGGED HOLD != RELINK
//
// UNPLUGGED HOLD != LINK REVERIFY
//
// UNPLUGGED HOLD != RETURN TO SERVICE
//
// UNPLUGGED HOLD != AUTHORIZATION
//
// The affected field remains unplugged.
//
// This file does NOT:
//
// - perform unplug
// - direct unplug
// - restart anything
// - reconnect anything
// - reverify a connection
// - diagnose the original failure
// - clear history
// - clear evidence
// - create movement
// - authorize movement
//
// Owns only:
//
// - recognition of one completed broadcast reset
// - recognition of one confirmed full unplug
// - declaration of one stable unplugged hold
//
// Does not own:
//
// - DD recognition
// - link reverify
// - broadcast-reset request
// - broadcast-reset resolution
// - full-unplug directive
// - full-unplug execution
// - full-unplug confirmation
// - broadcast-reset completion
// - repeated-DD detection
// - Biff questioning
// - diagnosis
// - restart request
// - restart execution
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
// Comptroller observes the traffic state.
//
// After broadcast reset completes, the affected
// field is no longer live traffic.
//
// It is held unplugged until some separate
// future process changes that state.
//
// HOLD != DELETE
//
// HOLD != DESTROY
//
// HOLD != RESTART
//
// NO AUTHORITY BLEED:
//
// Holding the field unplugged creates no
// authority to restart or reconnect it.
//
// NO STATE BLEED:
//
// This hold applies only to the affected
// declared live field presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver does not affect unrelated
// links, sessions, lanes, or fields.
//

export function resolveUnpluggedHold(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      unpluggedHoldActive: null,
      broadcastResetCompleted: null,
      fullUnplugConfirmed: null,
      reason: "UNPLUGGED_HOLD_INPUT_REQUIRED"
    };
  }

  if (typeof input.broadcastResetCompleted !== "boolean") {
    return {
      ok: false,
      unpluggedHoldActive: null,
      broadcastResetCompleted: null,
      fullUnplugConfirmed: null,
      reason: "UNPLUGGED_HOLD_RESET_COMPLETION_REQUIRED"
    };
  }

  if (input.broadcastResetCompleted !== true) {
    return {
      ok: true,
      unpluggedHoldActive: false,
      broadcastResetCompleted: false,
      fullUnplugConfirmed: null,
      reason: "UNPLUGGED_HOLD_RESET_NOT_COMPLETED"
    };
  }

  if (typeof input.fullUnplugConfirmed !== "boolean") {
    return {
      ok: false,
      unpluggedHoldActive: null,
      broadcastResetCompleted: true,
      fullUnplugConfirmed: null,
      reason: "UNPLUGGED_HOLD_UNPLUG_CONFIRMATION_REQUIRED"
    };
  }

  if (input.fullUnplugConfirmed !== true) {
    return {
      ok: true,
      unpluggedHoldActive: false,
      broadcastResetCompleted: true,
      fullUnplugConfirmed: false,
      reason: "UNPLUGGED_HOLD_UNPLUG_NOT_CONFIRMED"
    };
  }

  return {
    ok: true,
    unpluggedHoldActive: true,
    broadcastResetCompleted: true,
    fullUnplugConfirmed: true,
    reason: "UNPLUGGED_HOLD_RESOLVED"
  };
}
