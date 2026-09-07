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
// for one declared recovery hold.
//
// This file answers only:
//
// "Have the declared governed reset conditions
// for this one recovery hold been completed?"
//
// RESET COMPLETION REQUIRES:
//
// - an active recovery hold
// - an approved return-to-service result
// - an already-resolved decision of RESET
//
// IMPORTANT:
//
// HARD X IS NOT REQUIRED.
//
// Hard X belongs to the separate VR gesture
// safety path.
//
// General reset completion must not create,
// clear, or neutralize VR Hard X state.
//
// Recovery holds may originate from:
//
// - POINT
// - COMPONENT
// - BROADCAST
//
// This resolver does not determine scope.
//
// POINT != COMPONENT
//
// COMPONENT != BROADCAST
//
// RESET COMPLETION != RELINK
//
// RESET COMPLETION != RESTART
//
// RESET COMPLETION != RETURN TO SERVICE
//
// RESET COMPLETION != AUTHORIZATION
//
// DD != RESET
//
// RETURN-TO-SERVICE APPROVAL != RESET
//
// RESET != ERASE HISTORY
//
// RESET != DELETE
//
// RESET != DESTROY
//
// This resolver does NOT decide whether reset
// should be approved.
//
// That decision belongs upstream.
//
// This resolver only recognizes the completed
// governed reset conditions and declares:
//
// - resetCompleted = true
// - clearRecoveryHold = true
//
// and then ends.
//
// Owns only:
//
// - reset-completion recognition
// - recovery-hold clear declaration
//
// Does not own:
//
// - Hard X recognition
// - VR gesture recognition
// - DD recognition
// - failure diagnosis
// - recovery review
// - return-to-service approval
// - scope classification
// - POINT reset execution
// - COMPONENT reset execution
// - BROADCAST reset execution
// - relink
// - restart
// - movement authorization
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
// - financial movement
// - history deletion
// - receipt generation
// - archive mutation
// - ledger mutation
// - HTML
//
// HARBOUR MASTER RULE:
//
// Comptroller observes that the declared
// recovery hold has completed the governed
// reset conditions.
//
// Completion does not create a new movement.
//
// Completion does not authorize another organ.
//
// NO AUTHORITY BLEED:
//
// Reset completion gains no authority from
// the originating recovery or review organs.
//
// NO STATE BLEED:
//
// Completion applies only to the declared
// recovery hold presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// Reset completion clears only this declared
// recovery hold.
//
// It does not affect unrelated points,
// components, links, sessions, lanes,
// broadcasts, or fields.
//

export function resolveResetCompletion(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      resetCompleted: null,
      clearRecoveryHold: null,
      recoveryHoldActive: null,
      reason: "RESET_COMPLETION_INPUT_REQUIRED"
    };
  }

  if (typeof input.recoveryHoldActive !== "boolean") {
    return {
      ok: false,
      resetCompleted: null,
      clearRecoveryHold: null,
      recoveryHoldActive: null,
      reason: "RESET_COMPLETION_RECOVERY_HOLD_STATE_REQUIRED"
    };
  }

  if (input.recoveryHoldActive !== true) {
    return {
      ok: true,
      resetCompleted: false,
      clearRecoveryHold: false,
      recoveryHoldActive: false,
      reason: "RESET_COMPLETION_NO_ACTIVE_RECOVERY_HOLD"
    };
  }

  if (typeof input.returnToServiceApproved !== "boolean") {
    return {
      ok: false,
      resetCompleted: null,
      clearRecoveryHold: null,
      recoveryHoldActive: true,
      reason: "RESET_COMPLETION_RETURN_TO_SERVICE_RESULT_REQUIRED"
    };
  }

  if (input.returnToServiceApproved !== true) {
    return {
      ok: true,
      resetCompleted: false,
      clearRecoveryHold: false,
      recoveryHoldActive: true,
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
      clearRecoveryHold: null,
      recoveryHoldActive: true,
      reason: "RESET_COMPLETION_DECISION_REQUIRED"
    };
  }

  if (decision !== "RESET") {
    return {
      ok: true,
      resetCompleted: false,
      clearRecoveryHold: false,
      recoveryHoldActive: true,
      reason: "RESET_COMPLETION_RESET_NOT_RESOLVED"
    };
  }

  return {
    ok: true,
    resetCompleted: true,
    clearRecoveryHold: true,
    recoveryHoldActive: true,
    reason: "RESET_COMPLETION_RESOLVED"
  };
}
