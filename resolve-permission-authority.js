// CORE-COMPTROLLER-LOGIC
// Permission + Authority Resolution
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
// - permission recognition
// - authority recognition
// - permission validation
// - authority validation
//
// Does not own:
// - object ID resolution
// - tag ID resolution
// - uIDL resolution
// - lane resolution
// - origin resolution
// - version resolution
// - state resolution
// - location
// - transaction IDs
// - tracking IDs
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolvePermissionAuthority(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      permission: null,
      authority: null,
      reason: "PERMISSION_AUTHORITY_INPUT_REQUIRED"
    };
  }

  const permission =
    typeof input.permission === "string"
      ? input.permission.trim()
      : "";

  const authority =
    typeof input.authority === "string"
      ? input.authority.trim()
      : "";

  if (!permission) {
    return {
      ok: false,
      permission: null,
      authority: authority || null,
      reason: "PERMISSION_REQUIRED"
    };
  }

  if (!authority) {
    return {
      ok: false,
      permission,
      authority: null,
      reason: "AUTHORITY_REQUIRED"
    };
  }

  return {
    ok: true,
    permission,
    authority,
    reason: "PERMISSION_AUTHORITY_RESOLVED"
  };
}
