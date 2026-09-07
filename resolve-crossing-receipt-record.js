// FILE: resolve-crossing-receipt-record.js
// CORE-COMPTROLLER-LOGIC
// Governed Crossing Receipt Record Resolution
//
// One rock.
// One object.
// One movement.
// One function.
// One entrance.
// One exit.
// One actual end.
//
// PURPOSE:
//
// Bind one already-resolved Comptroller boundary outcome
// to the identifiers and context of the declared movement.
//
// It answers only:
//
// "What governed crossing outcome belongs to this receipt?"
//
// This organ does NOT:
//
// - generate receipt IDs
// - generate transaction IDs
// - generate tracking IDs
// - resolve object identity
// - resolve uIDL
// - resolve lane
// - resolve origin
// - resolve version
// - resolve state
// - resolve permission
// - resolve authority
// - resolve location
// - resolve integrity
// - decide AUTHORIZE / DEFLECT / RESET
// - perform reset
// - move anything
// - call Secretary
// - call Octopus
// - write Ledger
// - write Archive
//
// VALID OUTCOMES:
//
// - AUTHORIZE
// - DEFLECT
// - RESET
//
// RECEIPT RULE:
//
// A receipt records the governed outcome.
//
// A receipt does not create authority.
//
// A receipt does not perform movement.
//
// HISTORY RULE:
//
// DEFLECT remains part of history.
//
// RESET remains part of history.
//
// AUTHORIZE remains part of history.
//
// RESET != ERASE HISTORY
//
// DELETE != DESTROY
//
// NO AUTHORITY BLEED:
//
// Binding a decision to a receipt does not
// inherit authority from Comptroller.
//
// NO STATE BLEED:
//
// This record applies only to the declared
// movement and receipt presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// Receipt-record failure affects only the
// recording of this declared movement.

export function resolveCrossingReceiptRecord(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_INPUT_REQUIRED"
    };
  }

  const receiptId =
    typeof input.receiptId === "string"
      ? input.receiptId.trim()
      : "";

  if (!receiptId) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_RECEIPT_ID_REQUIRED"
    };
  }

  const objectId =
    typeof input.objectId === "string"
      ? input.objectId.trim()
      : "";

  if (!objectId) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_OBJECT_ID_REQUIRED"
    };
  }

  const uidlReference =
    typeof input.uidlReference === "string"
      ? input.uidlReference.trim()
      : "";

  if (!uidlReference) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_UIDL_REQUIRED"
    };
  }

  const lane =
    typeof input.lane === "string"
      ? input.lane.trim()
      : "";

  if (!lane) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_LANE_REQUIRED"
    };
  }

  const transactionId =
    typeof input.transactionId === "string"
      ? input.transactionId.trim()
      : "";

  if (!transactionId) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_TRANSACTION_ID_REQUIRED"
    };
  }

  const trackingId =
    typeof input.trackingId === "string"
      ? input.trackingId.trim()
      : "";

  if (!trackingId) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_TRACKING_ID_REQUIRED"
    };
  }

  const decision =
    typeof input.decision === "string"
      ? input.decision.trim().toUpperCase()
      : "";

  if (
    decision !== "AUTHORIZE" &&
    decision !== "DEFLECT" &&
    decision !== "RESET"
  ) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_DECISION_INVALID"
    };
  }

  const decisionReason =
    typeof input.decisionReason === "string"
      ? input.decisionReason.trim()
      : "";

  if (!decisionReason) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_DECISION_REASON_REQUIRED"
    };
  }

  if (!Number.isFinite(input.timestamp)) {
    return {
      ok: false,
      record: null,
      reason: "CROSSING_RECEIPT_RECORD_TIMESTAMP_REQUIRED"
    };
  }

  return {
    ok: true,
    record: {
      receiptId,
      objectId,
      uidlReference,
      lane,
      transactionId,
      trackingId,
      decision,
      decisionReason,
      timestamp: input.timestamp
    },
    reason: "CROSSING_RECEIPT_RECORD_RESOLVED"
  };
}
