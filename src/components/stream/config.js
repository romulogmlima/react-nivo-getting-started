export default {
    keys: [
        "Raoul",
        "Josiane",
        "Marcel",
        "René",
        "Paul",
        "Jacques"
    ],
    margin: {
        "top": 50,
        "right": 110,
        "bottom": 50,
        "left": 60
    },
    axisBottom: {
        "orient": "bottom",
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "",
        "legendOffset": 36
    },
    defs: [
        {
            "id": "dots",
            "type": "patternDots",
            "background": "inherit",
            "color": "#2c998f",
            "size": 4,
            "padding": 2,
            "stagger": true
        },
        {
            "id": "squares",
            "type": "patternSquares",
            "background": "inherit",
            "color": "#e4c912",
            "size": 6,
            "padding": 2,
            "stagger": true
        }
    ],
    fill: [
        {
            "match": {
                "id": "Paul"
            },
            "id": "dots"
        },
        {
            "match": {
                "id": "Marcel"
            },
            "id": "squares"
        }
    ],
    legends: [
        {
            "anchor": "bottom-right",
            "direction": "column",
            "translateX": 100,
            "itemWidth": 80,
            "itemHeight": 20,
            "symbolSize": 12,
            "symbolShape": "circle"
        }
    ]
}

