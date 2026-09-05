// FILE: resolve-state.js
// CORE-COMPTROLLER-LOGIC
// State Resolution
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
// - state recognition
// - state validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
// - version resolution
// - permission
// - authority
// - location
// - transaction IDs
// - tracking IDs
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveState(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      state: null,
      reason: "STATE_INPUT_REQUIRED"
    };
  }

  const state =
    typeof input.state === "string"
      ? input.state.trim()
      : "";

  if (!state) {
    return {
      ok: false,
      state: null,
      reason: "STATE_REQUIRED"
    };
  }

  return {
    ok: true,
    state,
    reason: "STATE_RESOLVED"
  };
}
