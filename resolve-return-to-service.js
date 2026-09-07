// FILE: resolve-return-to-service.js
// CORE-COMPTROLLER-LOGIC
// Governed Return-to-Service Resolution
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
// Determine whether one active X-Hard Break
// is eligible for governed return-to-service.
//
// It answers only:
//
// "Has this declared break completed the
// required recovery review so Comptroller
// may consider RESET?"
//
// RETURN-TO-SERVICE REQUIRES:
//
// - an active X-Hard Break
// - a governed DD_RESET_REQUEST
// - the originating break condition cleared
// - recovery review passed
//
// IMPORTANT:
//
// DD is a request.
//
// DD is not reset.
//
// Return-to-service approval is not reset.
//
// Return-to-service approval does not reopen the line.
//
// This resolver produces only the approval state
// consumed later by the Comptroller crossing decision.
//
// The Comptroller crossing decision must still
// evaluate the ordinary governed crossing conditions.
//
// X MARKS THIS BREAK.
//
// RESET != ERASE HISTORY
//
// DELETE != DESTROY
//
// Owns only:
//
// - return-to-service eligibility recognition
// - return-to-service approval decision
//
// Does not own:
//
// - X-Hard Break detection
// - RED X surface
// - DD recognition
// - break diagnosis
// - hazard diagnosis
// - hostile diagnosis
// - camera diagnosis
// - audio diagnosis
// - drone diagnosis
// - sync diagnosis
// - repair
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
// - reset execution
// - Secretary authorization
// - Octopus movement
// - receipt generation
// - history deletion
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Recovery information does not transfer
// authority from the originating organ.
//
// NO STATE BLEED:
//
// Approval applies only to the declared
// active break presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// Failure of return-to-service review keeps
// this break stopped.
//
// It does not affect unrelated movements.

export function resolveReturnToService(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      returnToServiceApproved: null,
      reason: "RETURN_TO_SERVICE_INPUT_REQUIRED"
    };
  }

  if (typeof input.xHardBreakActive !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      reason: "RETURN_TO_SERVICE_X_BREAK_STATE_REQUIRED"
    };
  }

  if (input.xHardBreakActive !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      reason: "RETURN_TO_SERVICE_NO_ACTIVE_X_BREAK"
    };
  }

  if (typeof input.ddResetRequested !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      reason: "RETURN_TO_SERVICE_DD_RESULT_REQUIRED"
    };
  }

  if (input.ddResetRequested !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      reason: "RETURN_TO_SERVICE_DD_NOT_REQUESTED"
    };
  }

  if (typeof input.breakCauseCleared !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      reason: "RETURN_TO_SERVICE_BREAK_CAUSE_RESULT_REQUIRED"
    };
  }

  if (input.breakCauseCleared !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      reason: "RETURN_TO_SERVICE_BREAK_CAUSE_NOT_CLEARED"
    };
  }

  if (typeof input.recoveryReviewPassed !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      reason: "RETURN_TO_SERVICE_RECOVERY_REVIEW_REQUIRED"
    };
  }

  if (input.recoveryReviewPassed !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      reason: "RETURN_TO_SERVICE_RECOVERY_REVIEW_FAILED"
    };
  }

  return {
    ok: true,
    returnToServiceApproved: true,
    reason: "RETURN_TO_SERVICE_APPROVED"
  };
}
