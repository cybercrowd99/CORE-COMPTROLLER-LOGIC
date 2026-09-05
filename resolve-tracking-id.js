// FILE: resolve-tracking-id.js
// CORE-COMPTROLLER-LOGIC
// Tracking ID Resolution
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
// - tracking ID recognition
// - tracking ID validation
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
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveTrackingId(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      trackingId: null,
      reason: "TRACKING_INPUT_REQUIRED"
    };
  }

  const trackingId =
    typeof input.trackingId === "string"
      ? input.trackingId.trim()
      : "";

  if (!trackingId) {
    return {
      ok: false,
      trackingId: null,
      reason: "TRACKING_ID_REQUIRED"
    };
  }

  return {
    ok: true,
    trackingId,
    reason: "TRACKING_ID_RESOLVED"
  };
}
