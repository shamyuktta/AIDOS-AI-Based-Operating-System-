"""
Planner History
Stores planner history in memory.
"""

from datetime import datetime

history = []


def add_history(command: str, intent: str, steps: list):
    history.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "command": command,
            "intent": intent,
            "steps": steps,
            "status": "SUCCESS",
        }
    )


def get_history():
    return history