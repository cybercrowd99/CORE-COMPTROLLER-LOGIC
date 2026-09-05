// CORE-COMPTROLLER-LOGIC
// Object ID + Unique Tag Resolution
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
// - permanent object identity resolution
// - unique persistent tag resolution
//
// Does not own:
// - uIDL resolution
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

export function resolveObjectTag(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      objectId: null,
      tagId: null,
      reason: "OBJECT_INPUT_REQUIRED"
    };
  }

  const objectId =
    typeof input.objectId === "string"
      ? input.objectId.trim()
      : "";

  const tagId =
    typeof input.tagId === "string"
      ? input.tagId.trim()
      : "";

  if (!objectId) {
    return {
      ok: false,
      objectId: null,
      tagId: tagId || null,
      reason: "OBJECT_ID_REQUIRED"
    };
  }

  if (!tagId) {
    return {
      ok: false,
      objectId,
      tagId: null,
      reason: "TAG_ID_REQUIRED"
    };
  }

  return {
    ok: true,
    objectId,
    tagId,
    reason: "OBJECT_TAG_RESOLVED"
  };
}
