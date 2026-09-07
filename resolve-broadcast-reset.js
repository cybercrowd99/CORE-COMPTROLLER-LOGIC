// FILE: resolve-broadcast-reset.js
// CORE-COMPTROLLER-LOGIC
// Broadcast Reset Resolution
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
// Resolve one confirmed broadcast-reset request
// into one full-unplug declaration for the
// affected declared live field.
//
// This file answers only:
//
// "Has this declared broadcast-reset request
// reached the point where the affected live
// field must be unplugged?"
//
// BROADCAST RESET:
//
// - begins only from an already-resolved
//   broadcastResetRequested = true result
// - declares fullUnplugRequired = true
// - declares broadcastResetActive = true
// - ends there
//
// IMPORTANT:
//
// Broadcast reset is the larger reset.
//
// It is different from local link reverify.
//
// LINK REVERIFY:
//
// - tests one broken link
// - may restore one link
// - may request escalation
//
// BROADCAST RESET:
//
// - does not retry the local link
// - abandons the failed live connection state
// - declares full unplug for the affected field
//
// This file does NOT:
//
// - diagnose why the link failed
// - perform a new link test
// - restore any link
// - restart the system
// - reauthorize movement
// - inspect identity
// - inspect cargo/data
// - inspect authority
// - inspect permission
// - erase history
// - erase DD history
// - erase the original X break
// - archive evidence
// - write ledger records
// - ask why repeated failures occurred
//
// FULL UNPLUG:
//
// fullUnplugRequired = true
//
// means:
//
// the affected declared live field must leave
// its current live connected state.
//
// It does not mean:
//
// delete
// destroy
// purge
// erase
//
// UNPLUG != DESTROY
//
// RESET != DELETE
//
// Owns only:
//
// - confirmed broadcast-reset recognition
// - broadcast-reset-active declaration
// - full-unplug-required declaration
//
// Does not own:
//
// - DD recognition
// - link-reverify
// - escalation-request recognition
// - repeated-DD detection
// - Biff questioning
// - diagnosis
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
// NO AUTHORITY BLEED:
//
// A broadcast-reset request does not grant
// authority beyond this reset state declaration.
//
// NO STATE BLEED:
//
// This result applies only to the affected
// declared live field presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver does not touch unrelated
// links, sessions, lanes, or live fields.
//

export function resolveBroadcastReset(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      broadcastResetActive: null,
      fullUnplugRequired: null,
      reason: "BROADCAST_RESET_INPUT_REQUIRED"
    };
  }

  if (typeof input.broadcastResetRequested !== "boolean") {
    return {
      ok: false,
      broadcastResetActive: null,
      fullUnplugRequired: null,
      reason: "BROADCAST_RESET_REQUEST_RESULT_REQUIRED"
    };
  }

  if (input.broadcastResetRequested !== true) {
    return {
      ok: true,
      broadcastResetActive: false,
      fullUnplugRequired: false,
      reason: "BROADCAST_RESET_NOT_REQUESTED"
    };
  }

  return {
    ok: true,
    broadcastResetActive: true,
    fullUnplugRequired: true,
    reason: "BROADCAST_RESET_RESOLVED"
  };
}
