// FILE: resolve-integrity.js
// CORE-COMPTROLLER-LOGIC
// Integrity Resolution
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
// - integrity state recognition
// - integrity state validation
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
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveIntegrity(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      integrity: null,
      reason: "INTEGRITY_INPUT_REQUIRED"
    };
  }

  const integrity =
    typeof input.integrity === "string"
      ? input.integrity.trim()
      : "";

  if (!integrity) {
    return {
      ok: false,
      integrity: null,
      reason: "INTEGRITY_REQUIRED"
    };
  }

  return {
    ok: true,
    integrity,
    reason: "INTEGRITY_RESOLVED"
  };
}
