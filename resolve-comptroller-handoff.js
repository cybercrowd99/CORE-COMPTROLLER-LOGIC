// FILE: resolve-comptroller-handoff.js
// CORE-COMPTROLLER-LOGIC
// Comptroller Governed Handoff Resolution
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
// Receive one already-resolved and already-recorded
// Comptroller boundary outcome and determine whether
// anything may leave the Comptroller boundary.
//
// It answers only:
//
// "Does this governed outcome produce a downstream handoff?"
//
// OUTCOME RULES:
//
// AUTHORIZE
// - may produce downstream handoff
//
// DEFLECT
// - produces no downstream handoff
//
// RESET
// - produces no ordinary movement handoff
// - completes governed recovery only
// - later movement must be evaluated as a new governed crossing
//
// IMPORTANT:
//
// AUTHORIZE does not mean movement has occurred.
//
// It means the declared movement may leave Comptroller
// for the next authorized organ.
//
// Secretary still owns authorization/order work assigned
// to Secretary.
//
// Octopus still owns movement.
//
// Comptroller does not become either.
//
// RESET != AUTHORIZE
//
// RESET != MOVEMENT
//
// DEFLECT != DELETE
//
// DELETE != DESTROY
//
// Owns only:
//
// - Comptroller exit eligibility
// - downstream handoff declaration
//
// Does not own:
//
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
// - X-Hard Break detection
// - DD recognition
// - return-to-service review
// - reset completion
// - boundary decision
// - receipt generation
// - crossing receipt record creation
// - Secretary authorization
// - Secretary lane ordering
// - Octopus movement
// - transport
// - financial movement
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// A downstream handoff does not transfer
// Comptroller authority to the receiving organ.
//
// The receiving organ keeps its own authority.
//
// NO STATE BLEED:
//
// The handoff applies only to the declared
// movement and receipt presented here.
//
// BLAST-RADIUS RULE:
//
// Failed handoff resolution stops at the
// Comptroller exit boundary.
//
// Unrelated movements are unaffected.

export function resolveComptrollerHandoff(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      handoffAllowed: null,
      handoffTarget: null,
      receiptId: null,
      reason: "COMPTROLLER_HANDOFF_INPUT_REQUIRED"
    };
  }

  const receiptId =
    typeof input.receiptId === "string"
      ? input.receiptId.trim()
      : "";

  if (!receiptId) {
    return {
      ok: false,
      handoffAllowed: null,
      handoffTarget: null,
      receiptId: null,
      reason: "COMPTROLLER_HANDOFF_RECEIPT_ID_REQUIRED"
    };
  }

  const decision =
    typeof input.decision === "string"
      ? input.decision.trim().toUpperCase()
      : "";

  if (
    decision !== "AUTHORIZE" &&
    decision !== "DEFLECT" &&
    decision !== "RESET"
  ) {
    return {
      ok: false,
      handoffAllowed: null,
      handoffTarget: null,
      receiptId,
      reason: "COMPTROLLER_HANDOFF_DECISION_INVALID"
    };
  }

  if (decision === "DEFLECT") {
    return {
      ok: true,
      handoffAllowed: false,
      handoffTarget: null,
      receiptId,
      reason: "COMPTROLLER_HANDOFF_DEFLECTED"
    };
  }

  if (decision === "RESET") {
    return {
      ok: true,
      handoffAllowed: false,
      handoffTarget: null,
      receiptId,
      reason: "COMPTROLLER_HANDOFF_RESET_COMPLETE_NO_MOVEMENT"
    };
  }

  return {
    ok: true,
    handoffAllowed: true,
    handoffTarget: "SECRETARY",
    receiptId,
    reason: "COMPTROLLER_HANDOFF_TO_SECRETARY"
  };
}
