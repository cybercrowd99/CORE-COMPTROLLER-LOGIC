// FILE: resolve-comptroller-crossing.js
// CORE-COMPTROLLER-LOGIC
// Comptroller Governed Crossing Resolution
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
// Receive the already-resolved and already-evaluated
// facts for one declared movement and determine the
// governed boundary decision.
//
// It answers:
//
// "Can this identified object,
// under this accountable identity,
// in this declared lane,
// from this known state and origin,
// under this current authority,
// with required integrity,
// cross this CyberCrowd boundary now?"
//
// OUTPUT:
//
// - AUTHORIZE
// - DEFLECT
// - RESET
//
// IMPORTANT:
//
// This organ combines governed facts.
//
// It does NOT invent those facts.
//
// Permission must already have been evaluated.
//
// Authority must already have been evaluated.
//
// Integrity must already have been evaluated.
//
// Location must already have been resolved
// when the declared movement requires location.
//
// X-Hard Break outranks ordinary movement.
//
// DD_RESET_REQUEST does not reopen the line.
//
// RESET may be produced only when:
//
// - an X-Hard Break is active
// - a DD reset request exists
// - return-to-service review has approved recovery
// - all required crossing conditions are valid
//
// AUTHORIZE may be produced only when:
//
// - no X-Hard Break is active
// - all required crossing conditions are valid
//
// DEFLECT is produced when:
//
// - required resolution is missing
// - permission is not granted
// - authority is not granted
// - integrity does not pass
// - required location is unresolved
// - X-Hard Break remains active without completed
//   return-to-service approval
//
// DELETE != DESTROY
//
// RESET != ERASE HISTORY
//
// DD != AUTOMATIC REOPEN
//
// X MARKS THIS BREAK.
//
// Owns only:
//
// - governed crossing completeness check
// - governed crossing decision
//
// Does not own:
//
// - object ID resolution
// - tag resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
// - version resolution
// - state resolution
// - permission evaluation
// - authority evaluation
// - location resolution
// - transaction ID resolution
// - tracking ID resolution
// - integrity evaluation
// - X-Hard Break detection
// - DD reset-request recognition
// - return-to-service review
// - Secretary authorization
// - Octopus movement
// - Pepper signaling
// - financial value movement
// - receipt generation
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Reading a governed result does not transfer
// the producing organ's authority to Comptroller.
//
// NO STATE BLEED:
//
// One movement's state applies only to that
// declared movement.
//
// BLAST-RADIUS RULE:
//
// Failure of this crossing check stops this
// movement at this boundary.
//
// It does not disable unrelated CyberCrowd systems.

export function resolveComptrollerCrossing(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_INPUT_REQUIRED"
    };
  }

  const requiredResolutionFields = [
    "objectResolved",
    "uidlResolved",
    "laneResolved",
    "originResolved",
    "versionResolved",
    "stateResolved",
    "transactionResolved",
    "trackingResolved"
  ];

  for (const field of requiredResolutionFields) {
    if (typeof input[field] !== "boolean") {
      return {
        ok: false,
        decision: null,
        reason: `COMPTROLLER_CROSSING_${field.toUpperCase()}_REQUIRED`
      };
    }

    if (input[field] !== true) {
      return {
        ok: true,
        decision: "DEFLECT",
        reason: `COMPTROLLER_CROSSING_${field.toUpperCase()}_FAILED`
      };
    }
  }

  if (typeof input.permissionGranted !== "boolean") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_PERMISSION_RESULT_REQUIRED"
    };
  }

  if (input.permissionGranted !== true) {
    return {
      ok: true,
      decision: "DEFLECT",
      reason: "COMPTROLLER_CROSSING_PERMISSION_DENIED"
    };
  }

  if (typeof input.authorityGranted !== "boolean") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_AUTHORITY_RESULT_REQUIRED"
    };
  }

  if (input.authorityGranted !== true) {
    return {
      ok: true,
      decision: "DEFLECT",
      reason: "COMPTROLLER_CROSSING_AUTHORITY_DENIED"
    };
  }

  if (typeof input.integrityPassed !== "boolean") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_INTEGRITY_RESULT_REQUIRED"
    };
  }

  if (input.integrityPassed !== true) {
    return {
      ok: true,
      decision: "DEFLECT",
      reason: "COMPTROLLER_CROSSING_INTEGRITY_FAILED"
    };
  }

  if (typeof input.locationRequired !== "boolean") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_LOCATION_REQUIREMENT_REQUIRED"
    };
  }

  if (
    input.locationRequired === true &&
    input.locationResolved !== true
  ) {
    return {
      ok: true,
      decision: "DEFLECT",
      reason: "COMPTROLLER_CROSSING_LOCATION_UNRESOLVED"
    };
  }

  if (typeof input.xHardBreakActive !== "boolean") {
    return {
      ok: false,
      decision: null,
      reason: "COMPTROLLER_CROSSING_X_BREAK_STATE_REQUIRED"
    };
  }

  if (input.xHardBreakActive === true) {
    if (input.ddResetRequested !== true) {
      return {
        ok: true,
        decision: "DEFLECT",
        reason: "COMPTROLLER_CROSSING_X_BREAK_ACTIVE"
      };
    }

    if (input.returnToServiceApproved !== true) {
      return {
        ok: true,
        decision: "DEFLECT",
        reason: "COMPTROLLER_CROSSING_RETURN_TO_SERVICE_NOT_APPROVED"
      };
    }

    return {
      ok: true,
      decision: "RESET",
      reason: "COMPTROLLER_CROSSING_RESET_APPROVED"
    };
  }

  return {
    ok: true,
    decision: "AUTHORIZE",
    reason: "COMPTROLLER_CROSSING_AUTHORIZED"
  };
}
