// FILE: resolve-uidl-reference.js
// CORE-COMPTROLLER-LOGIC
// uIDL Reference Resolution
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
// - uIDL reference recognition
// - uIDL reference validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - lane resolution
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

export function resolveUidlReference(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      uidlRef: null,
      reason: "UIDL_INPUT_REQUIRED"
    };
  }

  const uidlRef =
    typeof input.uidlRef === "string"
      ? input.uidlRef.trim()
      : "";

  if (!uidlRef) {
    return {
      ok: false,
      uidlRef: null,
      reason: "UIDL_REFERENCE_REQUIRED"
    };
  }

  return {
    ok: true,
    uidlRef,
    reason: "UIDL_REFERENCE_RESOLVED"
  };
}
