// FILE: resolve-receipt.js
// CORE-COMPTROLLER-LOGIC
// Receipt Resolution
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
// - receipt recognition
// - receipt validation
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
// - downstream action execution
// - HTML

export function resolveReceipt(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      receiptId: null,
      reason: "RECEIPT_INPUT_REQUIRED"
    };
  }

  const receiptId =
    typeof input.receiptId === "string"
      ? input.receiptId.trim()
      : "";

  if (!receiptId) {
    return {
      ok: false,
      receiptId: null,
      reason: "RECEIPT_ID_REQUIRED"
    };
  }

  return {
    ok: true,
    receiptId,
    reason: "RECEIPT_RESOLVED"
  };
}
