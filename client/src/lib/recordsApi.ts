export type RecordPayload = string | Record<string, unknown>;

export type DataRecord = {
  id: string;
  payload: RecordPayload;
  createdAt: string;
};

export type RecordList = {
  items: DataRecord[];
  count: number;
  limit: number;
};

export type RuntimeMetrics = {
  service: string;
  uptimeSeconds: number;
  recordCount: number;
  memory: {
    rssBytes: number;
    heapUsedBytes: number;
  };
};

export class RecordsApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "RecordsApiError";
    this.status = status;
  }
}

function configuredBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_TS_API_BASE_URL?.trim();
  if (!baseUrl) {
    throw new RecordsApiError(
      "The records service is unavailable because VITE_TS_API_BASE_URL is not configured.",
      0,
    );
  }
  return baseUrl.replace(/\/$/, "");
}

function isRecordPayload(value: unknown): value is RecordPayload {
  return (
    (typeof value === "string" && value.length > 0) ||
    (typeof value === "object" && value !== null && !Array.isArray(value))
  );
}

function isDataRecord(value: unknown): value is DataRecord {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.createdAt === "string" &&
    isRecordPayload(candidate.payload)
  );
}

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${configuredBaseUrl()}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...init?.headers,
    },
    credentials: "omit",
  });

  const body: unknown = await response.json().catch(() => undefined);
  if (!response.ok) {
    const message =
      typeof body === "object" && body !== null && "error" in body && typeof body.error === "string"
        ? body.error
        : `Records service request failed with HTTP ${response.status}.`;
    throw new RecordsApiError(message, response.status);
  }
  return body as T;
}

export async function listRecords(limit = 50): Promise<RecordList> {
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    throw new RecordsApiError("limit must be an integer between 1 and 100", 400);
  }
  const result = await requestJson<unknown>(`/api/data?limit=${limit}`);
  if (
    typeof result !== "object" ||
    result === null ||
    !Array.isArray((result as { items?: unknown }).items) ||
    !(result as { items: unknown[] }).items.every(isDataRecord) ||
    typeof (result as { count?: unknown }).count !== "number" ||
    typeof (result as { limit?: unknown }).limit !== "number"
  ) {
    throw new RecordsApiError("Records service returned an invalid list response.", 502);
  }
  return result as RecordList;
}

export async function createRecord(payload: RecordPayload): Promise<DataRecord> {
  if (!isRecordPayload(payload)) {
    throw new RecordsApiError("payload must be a non-empty string or object", 400);
  }
  const result = await requestJson<unknown>("/api/data", {
    method: "POST",
    body: JSON.stringify({ payload }),
  });
  if (!isDataRecord(result)) {
    throw new RecordsApiError("Records service returned an invalid create response.", 502);
  }
  return result;
}

export async function getRecord(id: string): Promise<DataRecord> {
  if (!id.trim()) throw new RecordsApiError("record id is required", 400);
  const result = await requestJson<unknown>(`/api/data/${encodeURIComponent(id)}`);
  if (!isDataRecord(result)) {
    throw new RecordsApiError("Records service returned an invalid record response.", 502);
  }
  return result;
}

export async function getRuntimeMetrics(): Promise<RuntimeMetrics> {
  const result = await requestJson<unknown>("/metrics");
  if (
    typeof result !== "object" ||
    result === null ||
    typeof (result as { service?: unknown }).service !== "string" ||
    typeof (result as { uptimeSeconds?: unknown }).uptimeSeconds !== "number" ||
    typeof (result as { recordCount?: unknown }).recordCount !== "number"
  ) {
    throw new RecordsApiError("Records service returned invalid runtime metrics.", 502);
  }
  return result as RuntimeMetrics;
}
