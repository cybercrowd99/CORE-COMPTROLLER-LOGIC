// CORE-COMPTROLLER-LOGIC
// Origin Resolution
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
// - origin reference recognition
// - origin reference validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - lane resolution
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

export function resolveOrigin(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      origin: null,
      reason: "ORIGIN_INPUT_REQUIRED"
    };
  }

  const origin =
    typeof input.origin === "string"
      ? input.origin.trim()
      : "";

  if (!origin) {
    return {
      ok: false,
      origin: null,
      reason: "ORIGIN_REQUIRED"
    };
  }

  return {
    ok: true,
    origin,
    reason: "ORIGIN_RESOLVED"
  };
}
