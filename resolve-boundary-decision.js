// FILE: resolve-boundary-decision.js
// CORE-COMPTROLLER-LOGIC
// Boundary Decision Resolution
//
// One rock.
// One object.
// One movement.
// One function.
// One entrance.
// One exit.
// One actual end.
//
// Owns only:
// - boundary decision recognition
// - boundary decision validation
//
// Valid decisions:
// - AUTHORIZE
// - DEFLECT
// - RESET
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
// - version resolution
// - state resolution
// - permission resolution
// - authority resolution
// - location resolution
// - transaction ID resolution
// - tracking ID resolution
// - integrity resolution
// - receipts
// - HTML

export function resolveBoundaryDecision(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      decision: null,
      reason: "BOUNDARY_DECISION_INPUT_REQUIRED"
    };
  }

  const decision =
    typeof input.decision === "string"
      ? input.decision.trim().toUpperCase()
      : "";

  if (!decision) {
    return {
      ok: false,
      decision: null,
      reason: "BOUNDARY_DECISION_REQUIRED"
    };
  }

  if (
    decision !== "AUTHORIZE" &&
    decision !== "DEFLECT" &&
    decision !== "RESET"
  ) {
    return {
      ok: false,
      decision: null,
      reason: "BOUNDARY_DECISION_INVALID"
    };
  }

  return {
    ok: true,
    decision,
    reason: "BOUNDARY_DECISION_RESOLVED"
  };
}
