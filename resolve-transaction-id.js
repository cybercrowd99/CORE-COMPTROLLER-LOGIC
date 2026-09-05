// FILE: resolve-transaction-id.js
// CORE-COMPTROLLER-LOGIC
// Transaction ID Resolution
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
// - transaction ID recognition
// - transaction ID validation
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
// - tracking IDs
// - integrity decisions
// - authorize / deflect / reset
// - receipts
// - HTML

export function resolveTransactionId(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      transactionId: null,
      reason: "TRANSACTION_INPUT_REQUIRED"
    };
  }

  const transactionId =
    typeof input.transactionId === "string"
      ? input.transactionId.trim()
      : "";

  if (!transactionId) {
    return {
      ok: false,
      transactionId: null,
      reason: "TRANSACTION_ID_REQUIRED"
    };
  }

  return {
    ok: true,
    transactionId,
    reason: "TRANSACTION_ID_RESOLVED"
  };
}
