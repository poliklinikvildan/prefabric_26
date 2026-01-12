<!DOCTYPE html>
<html>
<head>
    <title>Prefab Decision Support Engine</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .form-group { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #0056b3; }
        .result { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .error { color: red; background: #ffe6e6; padding: 10px; border-radius: 4px; }
    </style>
</head>
<body>

<h1>🏗️ Prefab Decision Support Engine</h1>
<p>Analyze prefab structures for optimal material usage and efficiency</p>

<form action="/analyze" method="post">
    <div class="form-group">
        <label for="structure_type">Structure Type:</label>
        <input name="structure_type" placeholder="e.g., Wall, Panel, Frame" required>
    </div>

    <div class="form-group">
        <label for="width_m">Width (meters):</label>
        <input type="number" step="0.1" name="width_m" placeholder="2.5" required>
    </div>

    <div class="form-group">
        <label for="depth_m">Depth (meters):</label>
        <input type="number" step="0.1" name="depth_m" placeholder="1.2" required>
    </div>

    <div class="form-group">
        <label for="height_m">Height (meters):</label>
        <input type="number" step="0.1" name="height_m" placeholder="3.0" required>
    </div>

    <div class="form-group">
        <label for="material">Material:</label>
        <input name="material" placeholder="e.g., Wood, Steel, Concrete" required>
    </div>

    <div class="form-group">
        <label for="priority">Priority:</label>
        <select name="priority">
            <option value="cost">💰 Minimize Cost</option>
            <option value="waste">♻️ Minimize Waste</option>
            <option value="speed">⚡ Faster Assembly</option>
        </select>
    </div>

    <button type="submit">🔍 Run Analysis</button>
</form>

{% if result %}
<div class="result">
    <h2>📊 Analysis Results</h2>
    <p><strong>Structure:</strong> {{ result.structure_type }}</p>
    <p><strong>Dimensions:</strong> {{ result.width_m }}m × {{ result.depth_m }}m × {{ result.height_m }}m</p>
    <p><strong>Material:</strong> {{ result.material }}</p>
    <p><strong>Volume:</strong> {{ result.volume_m3 }} m³</p>
    <p><strong>Surface Area:</strong> {{ result.surface_area_m2 }} m²</p>
    <p><strong>Estimated Waste:</strong> {{ result.waste_ratio_percent }}%</p>
    <p><strong>Efficiency Score:</strong> {{ result.efficiency_score }}/100</p>
    <p><strong>Risk Level:</strong> {{ result.risk_level }}</p>
    <p><strong>Production Time:</strong> {{ result.production_time_hours }} hours</p>
    
    <h4>Cut List (m²)</h4>
    <ul>
    {% if result.cut_list %}
        {% for key, value in result.cut_list.items() %}
            <li>{{ key }} : {{ value }}</li>
        {% endfor %}
    {% else %}
        <li>No cut list available</li>
    {% endif %}
    </ul>
    
    <p><strong>Notes:</strong> {{ result.notes }}</p>
</div>
{% endif %}

{% if error %}
<div class="error">
    <strong>Error:</strong> {{ error }}
</div>
{% endif %}

</body>
</html>
