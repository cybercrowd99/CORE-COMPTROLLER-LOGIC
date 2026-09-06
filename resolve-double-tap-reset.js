// FILE: resolve-double-tap-reset.js
// CORE-COMPTROLLER-LOGIC
// Double-Tap Reset Request Resolution
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
// Recognize and validate the governed DD reset request
// emitted from the active RED X break surface.
//
// DD means:
//
// - request return-to-service review
// - preserve the active break
// - preserve history
// - preserve evidence
// - preserve lineage
// - preserve transaction context
// - preserve tracking context
//
// DD DOES NOT:
//
// - complete reset
// - clear the X-Hard Break
// - reopen the line
// - authorize movement
// - declare neutral X
// - bypass hazard review
// - bypass integrity review
// - assume the originating disruption is repaired
//
// Recognized signal:
//
// - DD_RESET_REQUEST
//
// Owns only:
//
// - DD reset-request recognition
// - DD reset-request validation
// - return-to-service request result
//
// Does not own:
//
// - X-Hard Break resolution
// - hazard detection
// - hostile detection
// - drone control
// - camera control
// - audio control
// - sync control
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
// - boundary decision resolution
// - reset completion
// - neutral X declaration
// - return-to-service authorization
// - receipt resolution
// - Secretary authority
// - Octopus movement
// - Pepper signaling
// - broadcast control
// - swarm control
// - HTML
//
// BLEED RULE:
//
// Recognition of DD does not inherit authority
// from the RED X surface or originating organ.
//
// BLAST RULE:
//
// The DD request applies only to the declared
// active break presented to this resolver.

export function resolveDoubleTapReset(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      resetRequested: null,
      signal: null,
      reason: "DOUBLE_TAP_RESET_INPUT_REQUIRED"
    };
  }

  const signal =
    typeof input.signal === "string"
      ? input.signal.trim().toUpperCase()
      : "";

  if (!signal) {
    return {
      ok: false,
      resetRequested: null,
      signal: null,
      reason: "DOUBLE_TAP_RESET_SIGNAL_REQUIRED"
    };
  }

  if (signal !== "DD_RESET_REQUEST") {
    return {
      ok: false,
      resetRequested: false,
      signal,
      reason: "DOUBLE_TAP_RESET_SIGNAL_NOT_PRESENT"
    };
  }

  return {
    ok: true,
    resetRequested: true,
    signal: "DD_RESET_REQUEST",
    reason: "DOUBLE_TAP_RESET_REQUEST_RESOLVED"
  };
}
