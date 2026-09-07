// FILE: resolve-point-reset-handoff.js
// CORE-COMPTROLLER-LOGIC
// Point Reset Handoff Resolution
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
// Recognize one already-resolved POINT reset
// request as ready to leave Comptroller.
//
// This file answers only:
//
// "Has one explicit POINT reset request reached
// the Comptroller exit seam?"
//
// POINT HANDOFF REQUIRES:
//
// - pointResetRequested = true
// - escalationScope = "POINT"
//
// When both are true:
//
// - pointResetHandoffReady = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// This file does NOT perform the POINT reset.
//
// It does NOT isolate the point.
//
// It does NOT relink the point.
//
// It does NOT restart the point.
//
// It does NOT choose the external recovery owner.
//
// It does NOT invent an owner.
//
// It declares only:
//
// "This POINT request has reached the
// Comptroller handoff boundary."
//
// POINT remains POINT.
//
// POINT != COMPONENT.
//
// POINT != BROADCAST.
//
// HANDOFF != EXECUTION.
//
// HANDOFF != AUTHORIZATION.
//
// REQUEST != RESET.
//
// Owns only:
//
// - POINT reset-request recognition
// - POINT scope confirmation
// - POINT handoff-ready declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - escalation-scope resolution
// - point isolation
// - point reset execution
// - component reset
// - broadcast reset
// - owner selection
// - authority
// - permission
// - Secretary action
// - Halo policy
// - Octopus movement
// - Biff questioning
// - sync behavior
// - swarm behavior
// - camera behavior
// - event behavior
// - DECchamber evidence storage
// - Flight Control
// - CASE Health
// - archive mutation
// - ledger mutation
// - HTML
//
// HARBOUR MASTER RULE:
//
// Comptroller directs the request to its exit.
//
// Comptroller does not perform the recovery job.
//
// NO AUTHORITY BLEED:
//
// Declaring pointResetHandoffReady does not
// grant authority to execute any reset.
//
// NO STATE BLEED:
//
// This handoff applies only to the exact
// POINT request presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver cannot widen POINT scope.
//
// It cannot emit COMPONENT.
//
// It cannot emit BROADCAST.
//
// It cannot affect unrelated links,
// sessions, lanes, components,
// broadcasts, or fields.
//

export function resolvePointResetHandoff(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      pointResetHandoffReady: null,
      pointResetRequested: null,
      escalationScope: null,
      reason: "POINT_RESET_HANDOFF_INPUT_REQUIRED"
    };
  }

  if (typeof input.pointResetRequested !== "boolean") {
    return {
      ok: false,
      pointResetHandoffReady: null,
      pointResetRequested: null,
      escalationScope: null,
      reason: "POINT_RESET_HANDOFF_REQUEST_RESULT_REQUIRED"
    };
  }

  if (input.pointResetRequested !== true) {
    return {
      ok: true,
      pointResetHandoffReady: false,
      pointResetRequested: false,
      escalationScope: null,
      reason: "POINT_RESET_HANDOFF_NOT_REQUESTED"
    };
  }

  const escalationScope =
    typeof input.escalationScope === "string"
      ? input.escalationScope.trim().toUpperCase()
      : "";

  if (!escalationScope) {
    return {
      ok: false,
      pointResetHandoffReady: null,
      pointResetRequested: true,
      escalationScope: null,
      reason: "POINT_RESET_HANDOFF_SCOPE_REQUIRED"
    };
  }

  if (escalationScope !== "POINT") {
    return {
      ok: false,
      pointResetHandoffReady: false,
      pointResetRequested: true,
      escalationScope,
      reason: "POINT_RESET_HANDOFF_SCOPE_NOT_POINT"
    };
  }

  return {
    ok: true,
    pointResetHandoffReady: true,
    pointResetRequested: true,
    escalationScope: "POINT",
    reason: "POINT_RESET_HANDOFF_READY"
  };
}
