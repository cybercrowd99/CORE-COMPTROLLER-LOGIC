// FILE: resolve-escalation-scope.js
// CORE-COMPTROLLER-LOGIC
// Escalation Scope Resolution
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
// Resolve one explicitly observed affected scope
// after a prior resolver has declared:
//
// escalationRequired = true
//
// This file answers only:
//
// "What affected scope has already been
// explicitly observed for this one failure?"
//
// Recognized affected scopes:
//
// - POINT
// - COMPONENT
// - BROADCAST
//
// This resolver converts:
//
// affectedScope
//
// into the canonical:
//
// escalationScope
//
// consumed by the separate:
//
// - point-reset-request resolver
// - component-reset-request resolver
// - broadcast-reset-request resolver
//
// IMPORTANT:
//
// This file does NOT infer scope.
//
// It does NOT count failed devices.
//
// It does NOT count cameras.
//
// It does NOT count feeds.
//
// It does NOT count users.
//
// It does NOT inspect swarm membership.
//
// It does NOT assume that multiple references
// equal COMPONENT.
//
// It does NOT assume that one failed component
// equals BROADCAST.
//
// It recognizes only the affected scope already
// observed and presented to it.
//
// POINT remains POINT.
//
// COMPONENT remains COMPONENT.
//
// BROADCAST remains BROADCAST.
//
// escalationRequired = true
//
// does NOT itself determine scope.
//
// FAILURE != BROADCAST FAILURE
//
// MULTIPLE REFERENCES != AUTOMATIC COMPONENT FAILURE
//
// COMPONENT FAILURE != AUTOMATIC BROADCAST FAILURE
//
// Owns only:
//
// - escalation-required recognition
// - affected-scope recognition
// - canonical escalation-scope declaration
//
// Does not own:
//
// - DD recognition
// - link reverify
// - failure diagnosis
// - affected-point identification
// - affected-component identification
// - affected-broadcast identification
// - scope promotion
// - point reset request
// - component reset request
// - broadcast reset request
// - reset execution
// - point isolation
// - component isolation
// - broadcast unplug
// - swarm behavior
// - camera behavior
// - sync behavior
// - event discovery
// - authority
// - permission
// - Secretary action
// - Halo policy
// - Octopus movement
// - Biff questioning
// - DECchamber evidence storage
// - Flight Control
// - CASE Health
// - archive mutation
// - ledger mutation
// - HTML
//
// HARBOUR MASTER RULE:
//
// Comptroller may recognize the declared
// traffic impact presented to it.
//
// Recognition of impact is not authority.
//
// Recognition of scope is not permission
// to perform the recovery action.
//
// NO AUTHORITY BLEED:
//
// Declaring escalationScope does not authorize
// any reset, isolation, unplug, relink,
// restart, or movement.
//
// NO STATE BLEED:
//
// The declared escalationScope applies only
// to the exact affected state presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver can never widen scope.
//
// It cannot convert:
//
// POINT -> COMPONENT
//
// or:
//
// COMPONENT -> BROADCAST
//
// Scope promotion, if ever required, must be
// separately observed, separately declared,
// and separately presented.
//
// REQUEST != EXECUTION
//
// SCOPE != AUTHORITY
//
// OBSERVATION != PROMOTION
//

export function resolveEscalationScope(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      escalationRequired: null,
      affectedScope: null,
      escalationScope: null,
      reason: "ESCALATION_SCOPE_INPUT_REQUIRED"
    };
  }

  if (typeof input.escalationRequired !== "boolean") {
    return {
      ok: false,
      escalationRequired: null,
      affectedScope: null,
      escalationScope: null,
      reason: "ESCALATION_SCOPE_ESCALATION_RESULT_REQUIRED"
    };
  }

  if (input.escalationRequired !== true) {
    return {
      ok: true,
      escalationRequired: false,
      affectedScope: null,
      escalationScope: null,
      reason: "ESCALATION_SCOPE_NOT_REQUIRED"
    };
  }

  const affectedScope =
    typeof input.affectedScope === "string"
      ? input.affectedScope.trim().toUpperCase()
      : "";

  if (!affectedScope) {
    return {
      ok: false,
      escalationRequired: true,
      affectedScope: null,
      escalationScope: null,
      reason: "ESCALATION_SCOPE_AFFECTED_SCOPE_REQUIRED"
    };
  }

  if (
    affectedScope !== "POINT" &&
    affectedScope !== "COMPONENT" &&
    affectedScope !== "BROADCAST"
  ) {
    return {
      ok: false,
      escalationRequired: true,
      affectedScope,
      escalationScope: null,
      reason: "ESCALATION_SCOPE_AFFECTED_SCOPE_INVALID"
    };
  }

  return {
    ok: true,
    escalationRequired: true,
    affectedScope,
    escalationScope: affectedScope,
    reason: "ESCALATION_SCOPE_RESOLVED"
  };
}
