"""
AIDOS Planner Agent
-------------------
Planner Engine

Reads a user command
↓

Detects the intent
↓

Generates an execution plan
↓

Returns structured JSON
"""

from .intents import (
    INTENT_KEYWORDS,
    UNKNOWN,
)

from .tasks import TASK_TEMPLATES
from .history import add_history
from .utils import write_log


class Planner:

    def detect_intent(self, command: str) -> str:
        """
        Detect the user's intent.
        """

        command = command.lower()

        for keyword, intent in INTENT_KEYWORDS.items():
            if keyword in command:
                return intent

        return UNKNOWN

    def generate_plan(self, command: str):

        intent = self.detect_intent(command)

        # ----------------------------
        # Unknown Command
        # ----------------------------
        if intent == UNKNOWN:

            steps = [
                "I couldn't understand your request.",
                "Try commands like:",
                "• Open Chrome",
                "• Organize Downloads",
                "• Search Google Python",
                "• Open VS Code",
            ]

            add_history(command, intent, steps)

            write_log(
                command,
                intent,
                "UNKNOWN",
            )

            return {
                "command": command,
                "intent": intent,
                "steps": steps,
            }

        # ----------------------------
        # Known Command
        # ----------------------------
        steps = TASK_TEMPLATES[intent]

        add_history(command, intent, steps)

        write_log(
            command,
            intent,
            "SUCCESS",
        )

        return {
            "command": command,
            "intent": intent,
            "steps": steps,
        }


planner = Planner()