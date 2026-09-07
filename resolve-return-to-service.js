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
// Determine whether one declared recovery hold
// is eligible for governed return-to-service.
//
// This file answers only:
//
// "Has this declared held state completed the
// required recovery review so it may be
// considered for return to service?"
//
// RETURN-TO-SERVICE REQUIRES:
//
// - an active declared recovery hold
// - a governed DD_RESET_REQUEST
// - the originating failure condition cleared
// - recovery review passed
//
// IMPORTANT:
//
// HARD X IS NOT REQUIRED.
//
// Hard X belongs to the separate VR gesture
// safety path.
//
// General Turnstile recovery must not depend
// on VR gesture state.
//
// A recovery hold may belong to:
//
// - POINT
// - COMPONENT
// - BROADCAST
//
// This resolver does not determine which scope
// produced the hold.
//
// POINT != COMPONENT
//
// COMPONENT != BROADCAST
//
// DD is a request.
//
// DD is not reset.
//
// Return-to-service approval is not reset.
//
// Return-to-service approval does not reconnect.
//
// Return-to-service approval does not reopen
// the affected lane, link, component, or field.
//
// Return-to-service approval does not authorize
// another organ's movement.
//
// This resolver produces only:
//
// returnToServiceApproved
//
// Owns only:
//
// - recovery-hold recognition
// - recovery-condition recognition
// - recovery-review recognition
// - return-to-service eligibility declaration
//
// Does not own:
//
// - Hard X recognition
// - VR gesture recognition
// - DD recognition
// - failure diagnosis
// - scope classification
// - POINT reset
// - COMPONENT reset
// - BROADCAST reset
// - point isolation
// - component isolation
// - full unplug
// - repair
// - relink
// - restart
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
// - Comptroller traffic direction
// - Secretary authorization
// - Octopus movement
// - receipt generation
// - history deletion
// - archive mutation
// - ledger mutation
// - HTML
//
// HARBOUR MASTER RULE:
//
// Comptroller may observe that recovery
// conditions have been satisfied.
//
// Observation does not create authority.
//
// Approval here means only:
//
// "This held traffic state has satisfied the
// declared recovery conditions required to
// proceed to the next separate recovery seam."
//
// NO AUTHORITY BLEED:
//
// Recovery information does not transfer
// authority from the originating organ.
//
// NO STATE BLEED:
//
// Approval applies only to the declared
// recovery hold presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// Failure of return-to-service review keeps
// only this declared recovery hold from
// progressing.
//
// It does not affect unrelated points,
// components, links, sessions, lanes,
// broadcasts, or fields.
//

export function resolveReturnToService(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      returnToServiceApproved: null,
      recoveryHoldActive: null,
      reason: "RETURN_TO_SERVICE_INPUT_REQUIRED"
    };
  }

  if (typeof input.recoveryHoldActive !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      recoveryHoldActive: null,
      reason: "RETURN_TO_SERVICE_RECOVERY_HOLD_STATE_REQUIRED"
    };
  }

  if (input.recoveryHoldActive !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      recoveryHoldActive: false,
      reason: "RETURN_TO_SERVICE_NO_ACTIVE_RECOVERY_HOLD"
    };
  }

  if (typeof input.ddResetRequested !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_DD_RESULT_REQUIRED"
    };
  }

  if (input.ddResetRequested !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_DD_NOT_REQUESTED"
    };
  }

  if (typeof input.breakCauseCleared !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_CAUSE_RESULT_REQUIRED"
    };
  }

  if (input.breakCauseCleared !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_CAUSE_NOT_CLEARED"
    };
  }

  if (typeof input.recoveryReviewPassed !== "boolean") {
    return {
      ok: false,
      returnToServiceApproved: null,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_RECOVERY_REVIEW_REQUIRED"
    };
  }

  if (input.recoveryReviewPassed !== true) {
    return {
      ok: true,
      returnToServiceApproved: false,
      recoveryHoldActive: true,
      reason: "RETURN_TO_SERVICE_RECOVERY_REVIEW_FAILED"
    };
  }

  return {
    ok: true,
    returnToServiceApproved: true,
    recoveryHoldActive: true,
    reason: "RETURN_TO_SERVICE_APPROVED"
  };
}
