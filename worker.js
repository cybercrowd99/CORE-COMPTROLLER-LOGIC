// FILE: worker.js
// CORE-COMPTROLLER-LOGIC
// Cloudflare Worker Entry Boundary
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
// Expose the independent CORE-COMPTROLLER-LOGIC
// organ as its own Cloudflare Worker service.
//
// This Worker answers only:
//
// "Is the Comptroller runtime alive and available
// as an independent service boundary?"
//
// It does NOT:
//
// - execute Comptroller resolvers
// - inspect traffic payloads
// - determine identity
// - determine permission
// - determine authority
// - perform DD recovery
// - perform POINT recovery
// - perform COMPONENT recovery
// - perform BROADCAST recovery
// - perform reset execution
// - perform full unplug
// - perform relink
// - perform return-to-service
// - call Secretary
// - call Halo
// - call Octopus
// - call Biff
// - write DECchamber
// - mutate archive
// - mutate ledger
// - absorb CORE
//
// RUNTIME ROLE:
//
// This file establishes only the Cloudflare
// service boundary for Comptroller.
//
// CORE-COMPTROLLER-LOGIC remains independent.
//
// CORE remains independent.
//
// SERVICE BINDING != NESTING
//
// SERVICE BINDING != AUTHORITY
//
// SERVICE BINDING != EXECUTION
//

const SERVICE_NAME = "CORE-COMPTROLLER-LOGIC";
const SERVICE_ROLE = "REVOCABLE_TRAFFIC_STATE_MONITOR";
const SERVICE_INTERFACE = "CORE_COMPTROLLER";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET") {
      return jsonResponse(
        {
          ok: false,
          service: SERVICE_NAME,
          reason: "METHOD_NOT_ALLOWED"
        },
        405
      );
    }

    if (url.pathname === "/" || url.pathname === "/health") {
      return jsonResponse({
        ok: true,
        service: SERVICE_NAME,
        role: SERVICE_ROLE,
        coreInterface: SERVICE_INTERFACE,
        runtimeAvailable: true,
        authorityTransferred: false,
        executionEnabled: false,
        reason: "COMPTROLLER_RUNTIME_AVAILABLE"
      });
    }

    return jsonResponse(
      {
        ok: false,
        service: SERVICE_NAME,
        reason: "ROUTE_NOT_FOUND"
      },
      404
    );
  }
};
