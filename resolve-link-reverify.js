// FILE: resolve-link-reverify.js
// CORE-COMPTROLLER-LOGIC
// Link Reverify Resolution
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
// Resolve one short Turnstile link-reverify test
// after a recognized DD reset request.
//
// This file answers only:
//
// "Did this one broken live link successfully
// re-establish itself during the short reverify test?"
//
// LINK REVERIFY:
// - applies to one declared broken link
// - requires a recognized DD reset request
// - receives one completed short-test result
// - declares whether that one link was restored
// - declares whether escalation is required
//
// PASS:
//
// - link restored
// - no broadcast reset required from this result
//
// FAIL:
//
// - link not restored
// - escalation required
//
// IMPORTANT:
//
// Link reverify does NOT perform escalation.
//
// Link reverify does NOT perform broadcast reset.
//
// Link reverify does NOT perform full unplug.
//
// Link reverify does NOT authorize movement.
//
// Link reverify does NOT diagnose why the link failed.
//
// Link reverify does NOT erase the break record.
//
// Link reverify does NOT erase DD history.
//
// One failed reverify result may be handed to the
// separate broadcast-reset path.
//
// Owns only:
//
// - short link-reverify result recognition
// - restored-link declaration
// - escalation-required declaration
//
// Does not own:
//
// - DD recognition
// - X-Hard Break creation
// - RED X display
// - repeated-DD pattern detection
// - Biff questioning
// - failure diagnosis
// - authority
// - permission
// - Secretary action
// - Halo policy
// - Octopus movement
// - DECchamber evidence storage
// - Flight Control
// - CASE Health
// - broadcast reset
// - full unplug
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Successful relink does not create authority.
// It only reports that the declared link
// successfully re-established.
//
// NO STATE BLEED:
//
// This result applies only to the one declared
// link presented to this resolver.
//
// BLAST-RADIUS RULE:
//
// A failed link reverify ends here with
// escalationRequired = true.
//
// This file does not touch unrelated links.
//
// Recognized short-test results:
//
// - PASS
// - FAIL
//

export function resolveLinkReverify(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      linkRestored: null,
      escalationRequired: null,
      testResult: null,
      reason: "LINK_REVERIFY_INPUT_REQUIRED"
    };
  }

  if (typeof input.ddResetRequested !== "boolean") {
    return {
      ok: false,
      linkRestored: null,
      escalationRequired: null,
      testResult: null,
      reason: "LINK_REVERIFY_DD_RESULT_REQUIRED"
    };
  }

  if (input.ddResetRequested !== true) {
    return {
      ok: true,
      linkRestored: false,
      escalationRequired: false,
      testResult: null,
      reason: "LINK_REVERIFY_DD_NOT_REQUESTED"
    };
  }

  const testResult =
    typeof input.testResult === "string"
      ? input.testResult.trim().toUpperCase()
      : "";

  if (!testResult) {
    return {
      ok: false,
      linkRestored: null,
      escalationRequired: null,
      testResult: null,
      reason: "LINK_REVERIFY_TEST_RESULT_REQUIRED"
    };
  }

  if (testResult !== "PASS" && testResult !== "FAIL") {
    return {
      ok: false,
      linkRestored: null,
      escalationRequired: null,
      testResult,
      reason: "LINK_REVERIFY_TEST_RESULT_INVALID"
    };
  }

  if (testResult === "FAIL") {
    return {
      ok: true,
      linkRestored: false,
      escalationRequired: true,
      testResult: "FAIL",
      reason: "LINK_REVERIFY_FAILED"
    };
  }

  return {
    ok: true,
    linkRestored: true,
    escalationRequired: false,
    testResult: "PASS",
    reason: "LINK_REVERIFY_PASSED"
  };
}
