// FILE: resolve-component-reset-handoff.js
// CORE-COMPTROLLER-LOGIC
// Component Reset Handoff Resolution
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
// Recognize one already-resolved COMPONENT reset
// request as ready to leave Comptroller.
//
// This file answers only:
//
// "Has one explicit COMPONENT reset request
// reached the Comptroller exit seam?"
//
// COMPONENT HANDOFF REQUIRES:
//
// - componentResetRequested = true
// - escalationScope = "COMPONENT"
//
// When both are true:
//
// - componentResetHandoffReady = true
//
// and this resolver ends.
//
// IMPORTANT:
//
// This file does NOT perform the COMPONENT reset.
//
// It does NOT isolate the component.
//
// It does NOT relink the component.
//
// It does NOT restart the component.
//
// It does NOT choose the external recovery owner.
//
// It does NOT invent an owner.
//
// It declares only:
//
// "This COMPONENT request has reached the
// Comptroller handoff boundary."
//
// COMPONENT remains COMPONENT.
//
// COMPONENT != POINT.
//
// COMPONENT != BROADCAST.
//
// HANDOFF != EXECUTION.
//
// HANDOFF != AUTHORIZATION.
//
// REQUEST != RESET.
//
// Owns only:
//
// - COMPONENT reset-request recognition
// - COMPONENT scope confirmation
// - COMPONENT handoff-ready declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - escalation-scope resolution
// - point reset
// - component isolation
// - component reset execution
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
// Declaring componentResetHandoffReady does not
// grant authority to execute any reset.
//
// NO STATE BLEED:
//
// This handoff applies only to the exact
// COMPONENT request presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver cannot widen COMPONENT scope.
//
// It cannot emit BROADCAST.
//
// It cannot collapse into POINT.
//
// It cannot affect unrelated points,
// links, sessions, lanes, components,
// broadcasts, or fields.
//

export function resolveComponentResetHandoff(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      componentResetHandoffReady: null,
      componentResetRequested: null,
      escalationScope: null,
      reason: "COMPONENT_RESET_HANDOFF_INPUT_REQUIRED"
    };
  }

  if (typeof input.componentResetRequested !== "boolean") {
    return {
      ok: false,
      componentResetHandoffReady: null,
      componentResetRequested: null,
      escalationScope: null,
      reason: "COMPONENT_RESET_HANDOFF_REQUEST_RESULT_REQUIRED"
    };
  }

  if (input.componentResetRequested !== true) {
    return {
      ok: true,
      componentResetHandoffReady: false,
      componentResetRequested: false,
      escalationScope: null,
      reason: "COMPONENT_RESET_HANDOFF_NOT_REQUESTED"
    };
  }

  const escalationScope =
    typeof input.escalationScope === "string"
      ? input.escalationScope.trim().toUpperCase()
      : "";

  if (!escalationScope) {
    return {
      ok: false,
      componentResetHandoffReady: null,
      componentResetRequested: true,
      escalationScope: null,
      reason: "COMPONENT_RESET_HANDOFF_SCOPE_REQUIRED"
    };
  }

  if (escalationScope !== "COMPONENT") {
    return {
      ok: false,
      componentResetHandoffReady: false,
      componentResetRequested: true,
      escalationScope,
      reason: "COMPONENT_RESET_HANDOFF_SCOPE_NOT_COMPONENT"
    };
  }

  return {
    ok: true,
    componentResetHandoffReady: true,
    componentResetRequested: true,
    escalationScope: "COMPONENT",
    reason: "COMPONENT_RESET_HANDOFF_READY"
  };
}
