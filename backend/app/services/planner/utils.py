"""
Planner Utilities
"""

from pathlib import Path
from datetime import datetime

# backend/logs/planner.log
LOG_FILE = (
    Path(__file__)
    .resolve()
    .parents[3]
    / "logs"
    / "planner.log"
)


def write_log(command: str, intent: str, status: str):

    LOG_FILE.parent.mkdir(exist_ok=True)

    with open(LOG_FILE, "a", encoding="utf-8") as file:

        file.write(
            f"""
{datetime.now()}

Command : {command}

Intent : {intent}

Status : {status}

-----------------------------------------

"""
        )