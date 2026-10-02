import uuid
from datetime import datetime, timezone

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr, Field

from lib.db import db

router = APIRouter()


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=2000)


class ContactMessage(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@router.post("/contact", response_model=ContactMessage, status_code=201)
async def create_inquiry(input: ContactCreate):
    msg = ContactMessage(**input.model_dump())
    await db.inquiries.insert_one(msg.model_dump())
    return msg
