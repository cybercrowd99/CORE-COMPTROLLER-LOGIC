// FILE: resolve-x-hard-break.js
// CORE-COMPTROLLER-LOGIC
// X-Hard Break Resolution
//
// Existing CyberCrowd doctrine:
// X means STOP.
// X-Hard Break outranks active movement.
// X-Hard Break does not silently restart.
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
// - X-Hard Break signal recognition
// - X-Hard Break signal validation
// - hard-break state return
//
// Recognized signal:
// - X_HARD_BREAK
//
// Does not own:
// - gesture detection
// - XR detection
// - VR detection
// - hostile detection
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
// - receipt resolution
// - double-tap reset
// - neutral X reset
// - Secretary authorization
// - Octopus movement
// - Pepper signaling
// - broadcast control
// - swarm control
// - authority takeover
// - cross-lane mutation
// - HTML
//
// Bleed rule:
// Recognition of X-Hard Break does not grant authority
// over the organ that produced the signal.
//
// Blast rule:
// The returned break state applies only to the
// declared movement presented to this resolver.

export function resolveXHardBreak(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      hardBreak: null,
      signal: null,
      reason: "X_HARD_BREAK_INPUT_REQUIRED"
    };
  }

  const signal =
    typeof input.signal === "string"
      ? input.signal.trim().toUpperCase()
      : "";

  if (!signal) {
    return {
      ok: false,
      hardBreak: null,
      signal: null,
      reason: "X_HARD_BREAK_SIGNAL_REQUIRED"
    };
  }

  if (signal !== "X_HARD_BREAK") {
    return {
      ok: false,
      hardBreak: false,
      signal,
      reason: "X_HARD_BREAK_SIGNAL_NOT_PRESENT"
    };
  }

  return {
    ok: true,
    hardBreak: true,
    signal: "X_HARD_BREAK",
    reason: "X_HARD_BREAK_RESOLVED"
  };
}
