from pydantic import BaseModel
from typing import Dict


class PrefabInput(BaseModel):
    structure_type: str
    width_m: float
    depth_m: float
    height_m: float
    material: str
    priority: str  # cost | waste | speed


class PrefabOutput(BaseModel):
    cut_list: Dict[str, float]
    waste_ratio: float
    risk_level: str
    notes: str
