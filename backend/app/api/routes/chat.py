from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):
    return {
        "reply": f"Hello! I'm AIDOS. You said: '{request.message}'. How can I help you today?"
    }