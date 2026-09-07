// FILE: resolve-component-reset-request.js
// CORE-COMPTROLLER-LOGIC
// Component Reset Request Resolution
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
// COMPONENT-scope escalation request.
//
// This file answers only:
//
// "Has this already-classified escalation
// explicitly reached COMPONENT scope and
// therefore belongs to the component-reset path?"
//
// COMPONENT RESET REQUEST REQUIRES:
//
// - escalationRequired = true
// - escalationScope = "COMPONENT"
//
// When both are true:
//
// - componentResetRequested = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// escalationRequired = true
//
// does NOT imply:
//
// broadcast reset
//
// POINT may remain POINT.
//
// COMPONENT remains COMPONENT.
//
// BROADCAST remains BROADCAST.
//
// This file does NOT:
//
// - determine escalation scope
// - promote POINT to COMPONENT
// - promote COMPONENT to BROADCAST
// - perform component reset
// - isolate the component
// - restore the component
// - diagnose the failure
// - stop unrelated traffic
// - authorize movement
// - erase history
// - erase DD history
//
// REQUEST != EXECUTION
//
// COMPONENT != POINT
//
// COMPONENT != BROADCAST
//
// Owns only:
//
// - recognition of explicit COMPONENT scope
// - component-reset-request declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - point reset
// - component isolation
// - component reset execution
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
// Recognition of COMPONENT scope does not
// authorize execution of the component reset.
//
// NO STATE BLEED:
//
// This result applies only to the one declared
// affected component presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver must never widen failure scope.
//
// It only recognizes COMPONENT scope that
// already exists upstream.
//

export function resolveComponentResetRequest(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      componentResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "COMPONENT_RESET_REQUEST_INPUT_REQUIRED"
    };
  }

  if (typeof input.escalationRequired !== "boolean") {
    return {
      ok: false,
      componentResetRequested: null,
      escalationRequired: null,
      escalationScope: null,
      reason: "COMPONENT_RESET_REQUEST_ESCALATION_RESULT_REQUIRED"
    };
  }

  if (input.escalationRequired !== true) {
    return {
      ok: true,
      componentResetRequested: false,
      escalationRequired: false,
      escalationScope: null,
      reason: "COMPONENT_RESET_REQUEST_NOT_REQUIRED"
    };
  }

  const escalationScope =
    typeof input.escalationScope === "string"
      ? input.escalationScope.trim().toUpperCase()
      : "";

  if (!escalationScope) {
    return {
      ok: false,
      componentResetRequested: null,
      escalationRequired: true,
      escalationScope: null,
      reason: "COMPONENT_RESET_REQUEST_SCOPE_REQUIRED"
    };
  }

  if (
    escalationScope !== "POINT" &&
    escalationScope !== "COMPONENT" &&
    escalationScope !== "BROADCAST"
  ) {
    return {
      ok: false,
      componentResetRequested: null,
      escalationRequired: true,
      escalationScope,
      reason: "COMPONENT_RESET_REQUEST_SCOPE_INVALID"
    };
  }

  if (escalationScope !== "COMPONENT") {
    return {
      ok: true,
      componentResetRequested: false,
      escalationRequired: true,
      escalationScope,
      reason: "COMPONENT_RESET_REQUEST_SCOPE_NOT_COMPONENT"
    };
  }

  return {
    ok: true,
    componentResetRequested: true,
    escalationRequired: true,
    escalationScope: "COMPONENT",
    reason: "COMPONENT_RESET_REQUEST_RESOLVED"
  };
}
