"""
AIDOS Planner Agent
-------------------
Task templates for each supported intent.
"""

from .intents import *

TASK_TEMPLATES = {

    # ====================================================
    # File Management
    # ====================================================

    ORGANIZE_DOWNLOADS: [
        "Scan Downloads folder",
        "Identify file types",
        "Create category folders",
        "Move files into folders",
        "Generate organization report",
    ],

    MOVE_FILES: [
        "Locate source files",
        "Locate destination folder",
        "Move selected files",
        "Verify transfer",
    ],

    RENAME_FILES: [
        "Locate target files",
        "Rename files",
        "Verify changes",
    ],

    DELETE_TEMP_FILES: [
        "Scan temporary files",
        "Delete temporary files",
        "Verify cleanup",
    ],

    # ====================================================
    # Applications
    # ====================================================

    OPEN_APPLICATION: [
        "Locate application",
        "Launch application",
        "Wait for application",
        "Confirm launch",
    ],

    # ====================================================
    # Browser
    # ====================================================

    SEARCH_WEB: [
        "Open browser",
        "Navigate to Google",
        "Search query",
        "Return results",
    ],

    OPEN_GMAIL: [
        "Open browser",
        "Navigate to Gmail",
        "Wait for page",
        "Confirm success",
    ],

    OPEN_YOUTUBE: [
        "Open browser",
        "Navigate to YouTube",
        "Wait for page",
        "Confirm success",
    ],

    # ====================================================
    # Search
    # ====================================================

    FIND_FILE: [
        "Scan selected folders",
        "Search matching files",
        "Return matching results",
    ],

    # ====================================================
    # System
    # ====================================================

    SHUTDOWN_SYSTEM: [
        "Verify permission",
        "Prepare shutdown",
        "Await confirmation",
    ],

    RESTART_SYSTEM: [
        "Verify permission",
        "Prepare restart",
        "Await confirmation",
    ],

    SLEEP_SYSTEM: [
        "Prepare sleep mode",
        "Save session",
        "Enter sleep mode",
    ],

    # ====================================================
    # Unknown
    # ====================================================

    UNKNOWN: [
        "Unknown command",
        "Ask user for clarification",
    ],
}