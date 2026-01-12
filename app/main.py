from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from .models import PrefabInput
from .logic import run_decision_engine

app = FastAPI(title="Prefab Decision Support Engine")

templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request}
    )


@app.post("/analyze", response_class=HTMLResponse)
def analyze(
    request: Request,
    structure_type: str = Form(...),
    width_m: float = Form(...),
    depth_m: float = Form(...),
    height_m: float = Form(...),
    material: str = Form(...),
    priority: str = Form(...)
):
    data = PrefabInput(
        structure_type=structure_type,
        width_m=width_m,
        depth_m=depth_m,
        height_m=height_m,
        material=material,
        priority=priority
    )

    result = run_decision_engine(data)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "result": result
        }
    )
