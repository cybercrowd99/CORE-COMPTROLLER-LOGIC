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
// Recognize only an explicitly declared
// BROADCAST-scope escalation request.
//
// This file answers only:
//
// "Has the already-classified escalation
// explicitly reached BROADCAST scope?"
//
// IMPORTANT:
//
// escalationRequired = true
//
// does NOT mean:
//
// broadcastResetRequested = true
//
// A failed point may remain a POINT failure.
//
// A failed broadcast component may remain a
// COMPONENT failure.
//
// Only an already-declared BROADCAST scope
// may enter the broadcast-reset path.
//
// SCOPE ORDER:
//
// POINT
// COMPONENT
// BROADCAST
//
// Smaller scopes do not automatically widen.
//
// BROADCAST RESET REQUEST REQUIRES:
//
// - escalationRequired = true
// - escalationScope = "BROADCAST"
//
// When both are true:
//
// - broadcastResetRequested = true
//
// and this resolver ends.
//
// This file does NOT:
//
// - determine the escalation scope
// - promote POINT to COMPONENT
// - promote COMPONENT to BROADCAST
// - perform point reset
// - perform component reset
// - perform broadcast reset
// - perform full unplug
// - sever links
// - restore links
// - diagnose failure
// - authorize movement
// - stop unrelated traffic
// - erase history
// - erase DD history
//
// REQUEST != EXECUTION
//
// SCOPE != AUTHORITY
//
// ESCALATION != BROADCAST
//
// Owns only:
//
// - recognition of explicit BROADCAST scope
// - broadcast-reset-request declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - point isolation
// - point reset
// - component isolation
// - component reset
// - scope determination
// - scope promotion
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
// Recognition of BROADCAST scope does not
// authorize execution of the broadcast reset.
//
// NO STATE BLEED:
//
// POINT remains POINT.
//
// COMPONENT remains COMPONENT.
//
// BROADCAST is recognized only when explicitly
// presented as BROADCAST.
//
// BLAST-RADIUS RULE:
//
// This resolver must never widen failure scope.
//
// It only recognizes a scope decision that
// already exists upstream.
//

export function resolveBroadcastResetRequest(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "BROADCAST_RESET_REQUEST_INPUT_REQUIRED"
    };
  }

  if (typeof input.escalationRequired !== "boolean") {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "BROADCAST_RESET_REQUEST_ESCALATION_RESULT_REQUIRED"
    };
  }

  if (input.escalationRequired !== true) {
    return {
      ok: true,
      broadcastResetRequested: false,
      escalationRequired: false,
      escalationScope: null,
      reason: "BROADCAST_RESET_REQUEST_NOT_REQUIRED"
    };
  }

  const escalationScope =
    typeof input.escalationScope === "string"
      ? input.escalationScope.trim().toUpperCase()
      : "";

  if (!escalationScope) {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: true,
      escalationScope: null,
      reason: "BROADCAST_RESET_REQUEST_SCOPE_REQUIRED"
    };
  }

  if (
    escalationScope !== "POINT" &&
    escalationScope !== "COMPONENT" &&
    escalationScope !== "BROADCAST"
  ) {
    return {
      ok: false,
      broadcastResetRequested: null,
      escalationRequired: true,
      escalationScope,
      reason: "BROADCAST_RESET_REQUEST_SCOPE_INVALID"
    };
  }

  if (escalationScope !== "BROADCAST") {
    return {
      ok: true,
      broadcastResetRequested: false,
      escalationRequired: true,
      escalationScope,
      reason: "BROADCAST_RESET_REQUEST_SCOPE_NOT_BROADCAST"
    };
  }

  return {
    ok: true,
    broadcastResetRequested: true,
    escalationRequired: true,
    escalationScope: "BROADCAST",
    reason: "BROADCAST_RESET_REQUEST_RESOLVED"
  };
}
