// FILE: resolve-broadcast-reset-request.js
// CORE-COMPTROLLER-LOGIC
// Broadcast Reset Request Resolution
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
// Recognize one escalation request produced after
// a failed Turnstile link-reverify test.
//
// This file answers only:
//
// "Did this failed local link-reverify result
// require escalation into the separate
// broadcast-reset path?"
//
// BROADCAST RESET REQUEST:
//
// - begins only from an already-resolved
//   local link-reverify result
// - recognizes escalationRequired = true
// - declares broadcastResetRequested = true
// - ends there
//
// IMPORTANT:
//
// This file does NOT:
//
// - perform broadcast reset
// - perform full unplug
// - sever links
// - restore links
// - run another link-reverify test
// - diagnose why the link failed
// - authorize movement
// - stop unrelated traffic
// - erase history
// - erase DD history
// - erase the original break
//
// A broadcast-reset request is not the
// broadcast reset itself.
//
// REQUEST != EXECUTION
//
// Owns only:
//
// - escalation-request recognition
// - broadcast-reset-request declaration
//
// Does not own:
//
// - DD recognition
// - X-Hard Break detection
// - RED X display
// - link-reverify execution
// - link restoration
// - repeated-DD detection
// - Biff questioning
// - failure diagnosis
// - broadcast reset execution
// - full unplug execution
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
// Recognition of escalation does not create
// authority to execute the broadcast reset.
//
// NO STATE BLEED:
//
// This request applies only to the declared
// failed link-reverify result presented here.
//
// BLAST-RADIUS RULE:
//
// This file does not unplug or alter any
// additional links.
//
// It only declares that the separate
// broadcast-reset path must be requested.
//

export function resolveBroadcastResetRequest(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: null,
      reason: "BROADCAST_RESET_REQUEST_INPUT_REQUIRED"
    };
  }

  if (typeof input.escalationRequired !== "boolean") {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: null,
      reason: "BROADCAST_RESET_REQUEST_ESCALATION_RESULT_REQUIRED"
    };
  }

  if (input.escalationRequired !== true) {
    return {
      ok: true,
      broadcastResetRequested: false,
      escalationRequired: false,
      reason: "BROADCAST_RESET_REQUEST_NOT_REQUIRED"
    };
  }

  return {
    ok: true,
    broadcastResetRequested: true,
    escalationRequired: true,
    reason: "BROADCAST_RESET_REQUEST_RESOLVED"
  };
}
