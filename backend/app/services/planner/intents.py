"""
AIDOS Planner Agent
-------------------
This file defines all supported intents and the keywords
used to identify them from user commands.
"""

# ============================================================
# File Management Intents
# ============================================================

ORGANIZE_DOWNLOADS = "ORGANIZE_DOWNLOADS"
MOVE_FILES = "MOVE_FILES"
RENAME_FILES = "RENAME_FILES"
DELETE_TEMP_FILES = "DELETE_TEMP_FILES"

# ============================================================
# Application Intents
# ============================================================

OPEN_APPLICATION = "OPEN_APPLICATION"

# ============================================================
# Browser Intents
# ============================================================

SEARCH_WEB = "SEARCH_WEB"
OPEN_GMAIL = "OPEN_GMAIL"
OPEN_YOUTUBE = "OPEN_YOUTUBE"

# ============================================================
# Search Intents
# ============================================================

FIND_FILE = "FIND_FILE"

# ============================================================
# System Intents
# ============================================================

SHUTDOWN_SYSTEM = "SHUTDOWN_SYSTEM"
RESTART_SYSTEM = "RESTART_SYSTEM"
SLEEP_SYSTEM = "SLEEP_SYSTEM"

# ============================================================
# Unknown Intent
# ============================================================

UNKNOWN = "UNKNOWN"

# ============================================================
# Intent Keywords
# ============================================================

INTENT_KEYWORDS = {

    # ---------------- File Management ----------------

    "organize": ORGANIZE_DOWNLOADS,
    "downloads": ORGANIZE_DOWNLOADS,

    "move": MOVE_FILES,
    "copy": MOVE_FILES,

    "rename": RENAME_FILES,

    "delete": DELETE_TEMP_FILES,
    "temp": DELETE_TEMP_FILES,
    "temporary": DELETE_TEMP_FILES,

    # ---------------- Applications ----------------

    "open chrome": OPEN_APPLICATION,
    "chrome": OPEN_APPLICATION,

    "open vscode": OPEN_APPLICATION,
    "vs code": OPEN_APPLICATION,
    "vscode": OPEN_APPLICATION,

    "calculator": OPEN_APPLICATION,
    "notepad": OPEN_APPLICATION,
    "paint": OPEN_APPLICATION,

    # ---------------- Browser ----------------

    "search": SEARCH_WEB,
    "google": SEARCH_WEB,
    "search google": SEARCH_WEB,

    "gmail": OPEN_GMAIL,
    "youtube": OPEN_YOUTUBE,

    # ---------------- Search ----------------

    "find": FIND_FILE,
    "resume": FIND_FILE,
    "pdf": FIND_FILE,
    "image": FIND_FILE,
    "images": FIND_FILE,

    # ---------------- System ----------------

    "shutdown": SHUTDOWN_SYSTEM,
    "restart": RESTART_SYSTEM,
    "sleep": SLEEP_SYSTEM,
}