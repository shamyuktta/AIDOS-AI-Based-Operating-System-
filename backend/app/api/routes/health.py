from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "ok",
        "application": "AIDOS",
        "version": "0.1.0"
    }