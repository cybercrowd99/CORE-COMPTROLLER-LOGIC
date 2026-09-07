// FILE: resolve-full-unplug-completion.js
// CORE-COMPTROLLER-LOGIC
// Full Unplug Completion Resolution
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
// Resolve one returned completion result for an
// already-directed full-unplug traffic action.
//
// This file answers only:
//
// "Has the affected declared live field
// actually completed the directed full unplug?"
//
// HARBOUR MASTER RULE:
//
// Comptroller directs traffic and observes
// the resulting traffic state.
//
// Comptroller does not perform the unplug.
//
// The execution belongs elsewhere.
//
// This resolver receives only the returned
// completion result.
//
// FULL UNPLUG COMPLETION REQUIRES:
//
// - fullUnplugDirected = true
// - unplugCompleted = true or false
//
// When unplugCompleted = true:
//
// - fullUnplugConfirmed = true
//
// When unplugCompleted = false:
//
// - fullUnplugConfirmed = false
//
// and this resolver ends.
//
// DIRECTIVE != EXECUTION
//
// EXECUTION != CONFIRMATION
//
// CONFIRMATION != RESTART
//
// IMPORTANT:
//
// This file does NOT:
//
// - perform the unplug
// - sever transport
// - close sockets
// - stop hardware
// - perform broadcast reset
// - restore any connection
// - retry any connection
// - diagnose why unplug failed
// - ask why repeated failures occurred
// - authorize movement
// - restart movement
// - erase history
// - erase evidence
//
// Owns only:
//
// - recognition of one prior full-unplug directive
// - recognition of one returned unplug-completion result
// - declaration of full-unplug confirmation
//
// Does not own:
//
// - DD recognition
// - X-Hard Break detection
// - link reverify
// - broadcast-reset request
// - broadcast-reset resolution
// - full-unplug directive
// - full-unplug execution
// - failure diagnosis
// - repeated-DD detection
// - Biff questioning
// - restart
// - return-to-service
// - Secretary authority
// - Halo policy
// - Octopus movement
// - DECchamber evidence storage
// - Flight Control
// - CASE Health
// - archive mutation
// - ledger mutation
// - HTML
//
// NO AUTHORITY BLEED:
//
// Confirmation that unplug occurred does not
// create authority over any other movement.
//
// NO STATE BLEED:
//
// This completion result applies only to the
// affected declared live field presented here.
//
// BLAST-RADIUS RULE:
//
// This resolver does not change the state of
// unrelated links, sessions, lanes, or fields.
//

export function resolveFullUnplugCompletion(input) {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      fullUnplugConfirmed: null,
      fullUnplugDirected: null,
      unplugCompleted: null,
      reason: "FULL_UNPLUG_COMPLETION_INPUT_REQUIRED"
    };
  }

  if (typeof input.fullUnplugDirected !== "boolean") {
    return {
      ok: false,
      fullUnplugConfirmed: null,
      fullUnplugDirected: null,
      unplugCompleted: null,
      reason: "FULL_UNPLUG_COMPLETION_DIRECTIVE_RESULT_REQUIRED"
    };
  }

  if (input.fullUnplugDirected !== true) {
    return {
      ok: true,
      fullUnplugConfirmed: false,
      fullUnplugDirected: false,
      unplugCompleted: null,
      reason: "FULL_UNPLUG_COMPLETION_NOT_DIRECTED"
    };
  }

  if (typeof input.unplugCompleted !== "boolean") {
    return {
      ok: false,
      fullUnplugConfirmed: null,
      fullUnplugDirected: true,
      unplugCompleted: null,
      reason: "FULL_UNPLUG_COMPLETION_RESULT_REQUIRED"
    };
  }

  if (input.unplugCompleted !== true) {
    return {
      ok: true,
      fullUnplugConfirmed: false,
      fullUnplugDirected: true,
      unplugCompleted: false,
      reason: "FULL_UNPLUG_COMPLETION_NOT_CONFIRMED"
    };
  }

  return {
    ok: true,
    fullUnplugConfirmed: true,
    fullUnplugDirected: true,
    unplugCompleted: true,
    reason: "FULL_UNPLUG_COMPLETION_CONFIRMED"
  };
}
