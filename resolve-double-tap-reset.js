// FILE: resolve-double-tap-reset.js
// CORE-COMPTROLLER-LOGIC
// Double-Tap Reset Resolution
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
// - double-tap reset recognition
// - double-tap reset validation
// - neutral X reset result
//
// Double tap means:
// - end active transient passage state
// - clear active boundary movement state
// - return Comptroller to neutral X
// - preserve historical records
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
// - boundary decision resolution
// - receipt resolution
// - sine/cosine protection-boundary motion
// - HTML

export function resolveDoubleTapReset(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      doubleTap: null,
      neutralX: null,
      reason: "DOUBLE_TAP_INPUT_REQUIRED"
    };
  }

  if (typeof input.doubleTap !== "boolean") {
    return {
      ok: false,
      doubleTap: null,
      neutralX: null,
      reason: "DOUBLE_TAP_STATE_REQUIRED"
    };
  }

  if (input.doubleTap !== true) {
    return {
      ok: false,
      doubleTap: false,
      neutralX: false,
      reason: "DOUBLE_TAP_NOT_TRIGGERED"
    };
  }

  return {
    ok: true,
    doubleTap: true,
    neutralX: true,
    reason: "DOUBLE_TAP_RESET_RESOLVED"
  };
}
