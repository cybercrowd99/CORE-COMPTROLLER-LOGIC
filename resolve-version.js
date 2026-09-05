// CORE-COMPTROLLER-LOGIC
// Version Resolution
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
// - version recognition
// - version validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
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

export function resolveVersion(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      version: null,
      reason: "VERSION_INPUT_REQUIRED"
    };
  }

  const version =
    typeof input.version === "string"
      ? input.version.trim()
      : "";

  if (!version) {
    return {
      ok: false,
      version: null,
      reason: "VERSION_REQUIRED"
    };
  }

  return {
    ok: true,
    version,
    reason: "VERSION_RESOLVED"
  };
}
