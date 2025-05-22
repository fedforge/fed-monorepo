# DuckDB Schema Overview

## Purpose

DuckDB is used as FED’s local-first, AI-native, analytics-friendly memory engine. It stores user sessions, consent logs, call transcripts, tool usage, agent metadata, and other ephemeral or persistent records.

It allows for:
- Fast offline querying
- Secure local data snapshots
- Optional sync with OpenHWY
- Context-aware memory recall for agents

---

## 🔢 Tables

### 1. `agent_runs`

Tracks every time an agent is called.

```sql
CREATE TABLE agent_runs (
  id UUID PRIMARY KEY,
  agent TEXT,
  user_id TEXT,
  input TEXT,
  output TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
````

---

### 2. `consents`

Stores consent records and data access approvals.

```sql
CREATE TABLE consents (
  id UUID PRIMARY KEY,
  user_id TEXT,
  context TEXT,
  scope TEXT,
  granted BOOLEAN,
  timestamp TIMESTAMP
);
```

---

### 3. `call_logs`

Stores parsed audio transcripts and call metadata.

```sql
CREATE TABLE call_logs (
  id UUID PRIMARY KEY,
  user_id TEXT,
  broker TEXT,
  duration_seconds INTEGER,
  transcript TEXT,
  flags TEXT[],
  created_at TIMESTAMP
);
```

---

### 4. `tool_usage`

Tracks which tools have been used in a session.

```sql
CREATE TABLE tool_usage (
  id UUID PRIMARY KEY,
  tool_id TEXT,
  user_id TEXT,
  session_id TEXT,
  timestamp TIMESTAMP
);
```

---

### 5. `session_memory`

Optional persistent state between tool usage.

```sql
CREATE TABLE session_memory (
  session_id TEXT PRIMARY KEY,
  user_id TEXT,
  context TEXT,
  memory_json JSON,
  last_updated TIMESTAMP
);
```

---

### 6. `node_participation`

Tracks user opt-in to community rate memory or shared knowledge networks.

```sql
CREATE TABLE node_participation (
  user_id TEXT PRIMARY KEY,
  node_id TEXT,
  joined_at TIMESTAMP,
  consented BOOLEAN
);
```

---

## 🔐 Security Notes

* All tables default to local mode
* Sync to OpenHWY must be explicitly enabled per table
* Redactions are logged under `data_retention.audit`

---

## Query Examples

```sql
SELECT * FROM agent_runs WHERE agent = 'packetpilot' ORDER BY created_at DESC;

SELECT COUNT(*) FROM call_logs WHERE flags @> ['suspicious_rate'];
```

---

## File Location
.project/docs/platforms/FED/duckdb-schema.md
