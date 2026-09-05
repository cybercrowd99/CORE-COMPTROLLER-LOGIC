// FILE: resolve-lane.js
// CORE-COMPTROLLER-LOGIC
// Lane Resolution
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
// - lane recognition
// - lane validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - origin
// - version
// - state
// - permission
// - authority
// - location
// - transaction IDs
// - tracking IDs
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveLane(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      lane: null,
      reason: "LANE_INPUT_REQUIRED"
    };
  }

  const lane =
    typeof input.lane === "string"
      ? input.lane.trim()
      : "";

  if (!lane) {
    return {
      ok: false,
      lane: null,
      reason: "LANE_REQUIRED"
    };
  }

  return {
    ok: true,
    lane,
    reason: "LANE_RESOLVED"
  };
}
