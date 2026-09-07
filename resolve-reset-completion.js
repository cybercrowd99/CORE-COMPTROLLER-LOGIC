// FILE: resolve-reset-completion.js
// CORE-COMPTROLLER-LOGIC
// Governed Reset Completion Resolution
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
// Complete one already-approved governed RESET
// and declare that the active X-Hard Break
// may be cleared from the live movement state.
//
// It answers only:
//
// "Has Comptroller already approved RESET
// for this declared break?"
//
// RESET COMPLETION REQUIRES:
//
// - an active X-Hard Break
// - an approved return-to-service result
// - an already-resolved Comptroller decision of RESET
//
// IMPORTANT:
//
// This resolver does NOT decide whether reset
// should be approved.
//
// That decision belongs upstream.
//
// This resolver only recognizes the completed
// governed conditions and declares:
//
// - active break may be cleared
// - boundary returns to neutral X
// - movement history remains preserved
//
// RESET != ERASE HISTORY
//
// RESET != DELETE
//
// RESET != DESTROY
//
// DD != RESET
//
// RETURN-TO-SERVICE APPROVAL != RESET
//
// X MARKS THIS BREAK.
//
// Owns only:
//
// - reset completion recognition
// - active-break clear declaration
// - neutral X return declaration
//
// Does not own:
//
// - X-Hard Break detection
// - RED X surface
// - DD recognition
// - break diagnosis
// - recovery review
// - return-to-service approval
// - object resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
// - version resolution
// - state resolution
// - permission evaluation
// - authority evaluation
// - location resolution
// - transaction resolution
// - tracking resolution
// - integrity evaluation
// - Comptroller crossing decision
// - boundary decision validation
// - Secretary authorization
// - Octopus movement
// - financial movement
// - history deletion
// - receipt generation
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Reset completion gains no authority from
// the originating break or recovery organ.
//
// NO STATE BLEED:
//
// Completion applies only to the declared
// break presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// Reset completion changes only the active
// break state of this declared movement.

export function resolveResetCompletion(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      resetCompleted: null,
      clearActiveBreak: null,
      neutralX: null,
      reason: "RESET_COMPLETION_INPUT_REQUIRED"
    };
  }

  if (typeof input.xHardBreakActive !== "boolean") {
    return {
      ok: false,
      resetCompleted: null,
      clearActiveBreak: null,
      neutralX: null,
      reason: "RESET_COMPLETION_X_BREAK_STATE_REQUIRED"
    };
  }

  if (input.xHardBreakActive !== true) {
    return {
      ok: true,
      resetCompleted: false,
      clearActiveBreak: false,
      neutralX: true,
      reason: "RESET_COMPLETION_NO_ACTIVE_BREAK"
    };
  }

  if (typeof input.returnToServiceApproved !== "boolean") {
    return {
      ok: false,
      resetCompleted: null,
      clearActiveBreak: null,
      neutralX: null,
      reason: "RESET_COMPLETION_RETURN_TO_SERVICE_RESULT_REQUIRED"
    };
  }

  if (input.returnToServiceApproved !== true) {
    return {
      ok: true,
      resetCompleted: false,
      clearActiveBreak: false,
      neutralX: false,
      reason: "RESET_COMPLETION_RETURN_TO_SERVICE_NOT_APPROVED"
    };
  }

  const decision =
    typeof input.decision === "string"
      ? input.decision.trim().toUpperCase()
      : "";

  if (!decision) {
    return {
      ok: false,
      resetCompleted: null,
      clearActiveBreak: null,
      neutralX: null,
      reason: "RESET_COMPLETION_DECISION_REQUIRED"
    };
  }

  if (decision !== "RESET") {
    return {
      ok: true,
      resetCompleted: false,
      clearActiveBreak: false,
      neutralX: false,
      reason: "RESET_COMPLETION_RESET_NOT_AUTHORIZED"
    };
  }

  return {
    ok: true,
    resetCompleted: true,
    clearActiveBreak: true,
    neutralX: true,
    reason: "RESET_COMPLETION_RESOLVED"
  };
}
