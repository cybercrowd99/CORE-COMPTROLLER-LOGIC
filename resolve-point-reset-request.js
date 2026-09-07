// FILE: resolve-point-reset-request.js
// CORE-COMPTROLLER-LOGIC
// Point Reset Request Resolution
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
// POINT-scope escalation request.
//
// This file answers only:
//
// "Has this already-classified escalation
// remained at POINT scope and therefore
// belongs to the point-reset path?"
//
// POINT RESET REQUEST REQUIRES:
//
// - escalationRequired = true
// - escalationScope = "POINT"
//
// When both are true:
//
// - pointResetRequested = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// escalationRequired = true
//
// does NOT imply:
//
// component reset
//
// or
//
// broadcast reset
//
// POINT remains POINT.
//
// This file does NOT:
//
// - determine escalation scope
// - promote POINT to COMPONENT
// - promote COMPONENT to BROADCAST
// - perform point reset
// - isolate the point
// - restore the point
// - diagnose the failure
// - stop unrelated traffic
// - authorize movement
// - erase history
// - erase DD history
//
// REQUEST != EXECUTION
//
// POINT != COMPONENT
//
// POINT != BROADCAST
//
// Owns only:
//
// - recognition of explicit POINT scope
// - point-reset-request declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - point isolation
// - point reset execution
// - component reset
// - broadcast reset
// - scope determination
// - scope promotion
// - repeated-DD detection
// - Biff questioning
// - failure diagnosis
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
// Recognition of POINT scope does not authorize
// execution of the point reset.
//
// NO STATE BLEED:
//
// This result applies only to the one declared
// affected point presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver must never widen failure scope.
//
// It only recognizes POINT scope that already
// exists upstream.
//

export function resolvePointResetRequest(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      pointResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "POINT_RESET_REQUEST_INPUT_REQUIRED"
    };
  }

  if (typeof input.escalationRequired !== "boolean") {
    return {
      ok: false,
      pointResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "POINT_RESET_REQUEST_ESCALATION_RESULT_REQUIRED"
    };
  }

  if (input.escalationRequired !== true) {
    return {
      ok: true,
      pointResetRequested: false,
      escalationRequired: false,
      escalationScope: null,
      reason: "POINT_RESET_REQUEST_NOT_REQUIRED"
    };
  }

  const escalationScope =
    typeof input.escalationScope === "string"
      ? input.escalationScope.trim().toUpperCase()
      : "";

  if (!escalationScope) {
    return {
      ok: false,
      pointResetRequested: null,
      escalationRequired: true,
      escalationScope: null,
      reason: "POINT_RESET_REQUEST_SCOPE_REQUIRED"
    };
  }

  if (
    escalationScope !== "POINT" &&
    escalationScope !== "COMPONENT" &&
    escalationScope !== "BROADCAST"
  ) {
    return {
      ok: false,
      pointResetRequested: null,
      escalationRequired: true,
      escalationScope,
      reason: "POINT_RESET_REQUEST_SCOPE_INVALID"
    };
  }

  if (escalationScope !== "POINT") {
    return {
      ok: true,
      pointResetRequested: false,
      escalationRequired: true,
      escalationScope,
      reason: "POINT_RESET_REQUEST_SCOPE_NOT_POINT"
    };
  }

  return {
    ok: true,
    pointResetRequested: true,
    escalationRequired: true,
    escalationScope: "POINT",
    reason: "POINT_RESET_REQUEST_RESOLVED"
  };
}
