from fastapi import APIRouter
from app.services.planner.history import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"]
)


@router.get("/")
def history():
    return get_history()