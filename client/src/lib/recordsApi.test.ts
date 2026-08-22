import { afterEach, describe, expect, it, vi } from "vitest";
import { createRecord, listRecords, RecordsApiError } from "./recordsApi";

describe("records API client", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("rejects invalid list limits before making a request", async () => {
    await expect(listRecords(0)).rejects.toMatchObject({ status: 400 });
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it("creates a record using the verified JSON contract", async () => {
    vi.stubEnv("VITE_TS_API_BASE_URL", "http://localhost:3000");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({ id: "record-1", payload: { source: "frontend" }, createdAt: "2026-08-22T12:00:00.000Z" }),
          { status: 201, headers: { "Content-Type": "application/json" } },
        ),
      ),
    );

    await expect(createRecord({ source: "frontend" })).resolves.toEqual({
      id: "record-1",
      payload: { source: "frontend" },
      createdAt: "2026-08-22T12:00:00.000Z",
    });
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/data",
      expect.objectContaining({ method: "POST", credentials: "omit", body: JSON.stringify({ payload: { source: "frontend" } }) }),
    );
  });

  it("surfaces an explicit unavailable-service error when no base URL is configured", async () => {
    vi.stubEnv("VITE_TS_API_BASE_URL", "");
    await expect(listRecords()).rejects.toBeInstanceOf(RecordsApiError);
  });
});
