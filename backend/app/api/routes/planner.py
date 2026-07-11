from fastapi import APIRouter
from pydantic import BaseModel

from app.services.planner.planner import planner

router = APIRouter()


class PlannerRequest(BaseModel):
    command: str


@router.post("/planner")
def create_plan(request: PlannerRequest):
    return planner.generate_plan(request.command)