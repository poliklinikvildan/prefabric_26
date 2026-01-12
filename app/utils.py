def normalize_priority(priority: str) -> str:
    allowed = ["cost", "waste", "speed"]
    priority = priority.lower().strip()
    return priority if priority in allowed else "cost"
