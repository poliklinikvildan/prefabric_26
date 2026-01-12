"""
DISCLAIMER:
This module provides analytical decision-support outputs only.
It does NOT provide construction engineering, construction architecture, or construction advice.
All final decisions remain the responsibility of the user.
"""


def generate_cut_list(width: float, depth: float, height: float) -> dict:
    wall_area = 2 * (width + depth) * height
    roof_area = width * depth
    floor_area = width * depth

    return {
        "wall_panels_m2": round(wall_area, 2),
        "roof_panels_m2": round(roof_area, 2),
        "floor_panels_m2": round(floor_area, 2),
    }


def estimate_waste(cut_list: dict) -> float:
    total_area = sum(cut_list.values())
    estimated_waste_area = total_area * 0.12  # deterministic heuristic
    return round(estimated_waste_area / total_area, 2)


def risk_indicator(waste_ratio: float) -> str:
    if waste_ratio < 0.10:
        return "GREEN"
    elif waste_ratio < 0.20:
        return "YELLOW"
    else:
        return "RED"


def run_decision_engine(data):
    cut_list = generate_cut_list(
        data.width_m,
        data.depth_m,
        data.height_m
    )

    waste_ratio = estimate_waste(cut_list)
    risk_level = risk_indicator(waste_ratio)

    return {
        "cut_list": cut_list,
        "waste_ratio": waste_ratio,
        "risk_level": risk_level,
        "notes": "Standardized analytical output. Decision-support only."
    }
