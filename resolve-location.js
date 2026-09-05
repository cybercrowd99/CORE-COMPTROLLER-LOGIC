// CORE-COMPTROLLER-LOGIC
// Conditional Location Resolution
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
// - location permission recognition
// - location presence validation when allowed
// - location return when allowed
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
// - transaction IDs
// - tracking IDs
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveLocation(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      locationAllowed: false,
      location: null,
      reason: "LOCATION_INPUT_REQUIRED"
    };
  }

  const locationAllowed = input.locationAllowed === true;

  if (!locationAllowed) {
    return {
      ok: true,
      locationAllowed: false,
      location: null,
      reason: "LOCATION_NOT_ALLOWED"
    };
  }

  const location =
    typeof input.location === "string"
      ? input.location.trim()
      : "";

  if (!location) {
    return {
      ok: false,
      locationAllowed: true,
      location: null,
      reason: "LOCATION_REQUIRED"
    };
  }

  return {
    ok: true,
    locationAllowed: true,
    location,
    reason: "LOCATION_RESOLVED"
  };
}
