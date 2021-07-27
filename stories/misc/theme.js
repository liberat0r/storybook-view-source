export default {
    "textMutedColor": "#666666",
    "base": "light",
    "color": {
        "primary": "#FF4785",
        "secondary": "#1EA7FD",
        "tertiary": "#FAFBFC",
        "ancillary": "#22a699",
        "orange": "#FC521F",
        "gold": "#FFAE00",
        "green": "#66BF3C",
        "seafoam": "#37D5D3",
        "purple": "#6F2CAC",
        "ultraviolet": "#2A0481",
        "lightest": "#FFFFFF",
        "lighter": "#F8F8F8",
        "light": "#F3F3F3",
        "mediumlight": "#EEEEEE",
        "medium": "#DDDDDD",
        "mediumdark": "#999999",
        "dark": "#666666",
        "darker": "#444444",
        "darkest": "#333333",
        "border": "rgba(0,0,0,.1)",
        "positive": "#66BF3C",
        "negative": "#FF4400",
        "warning": "#E69D00",
        "critical": "#FFFFFF",
        "defaultText": "#333333",
        "inverseText": "#FFFFFF"
    },
    "background": {
        "app": "#F6F9FC",
        "bar": "#FFFFFF",
        "content": "#FFFFFF",
        "gridCellSize": 10,
        "hoverable": "rgba(0,0,0,.05)",
        "positive": "#E1FFD4",
        "negative": "#FEDED2",
        "warning": "#FFF5CF",
        "critical": "#FF4400"
    },
    "typography": {
        "fonts": {
            "base": "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
            "mono": "\"Operator Mono\", \"Fira Code Retina\", \"Fira Code\", \"FiraCode-Retina\", \"Andale Mono\", \"Lucida Console\", Consolas, Monaco, monospace"
        },
        "weight": {
            "regular": 400,
            "bold": 700,
            "black": 900
        },
        "size": {
            "s1": 12,
            "s2": 14,
            "s3": 16,
            "m1": 20,
            "m2": 24,
            "m3": 28,
            "l1": 32,
            "l2": 40,
            "l3": 48,
            "code": 90
        }
    },
    "animation": {
        "rotate360": {
            "name": "animation-u07e3c",
            "styles": "@keyframes animation-u07e3c{\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}",
            "anim": 1
        },
        "glow": {
            "name": "animation-r0iffl",
            "styles": "@keyframes animation-r0iffl{\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n}",
            "anim": 1
        },
        "float": {
            "name": "animation-6tolu8",
            "styles": "@keyframes animation-6tolu8{\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n}",
            "anim": 1
        },
        "jiggle": {
            "name": "animation-ynpq7w",
            "styles": "@keyframes animation-ynpq7w{\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n}",
            "anim": 1
        },
        "inlineGlow": {
            "name": "x4tfcc-inlineGlow",
            "styles": "animation:animation-r0iffl 1.5s ease-in-out infinite;color:transparent;cursor:progress;;label:inlineGlow;",
            "map": "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNzQiIsImZpbGUiOiIuLi8uLi9zcmMvYW5pbWF0aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgcnViYmVyOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMzUsIDEuMDUpJyxcbn07XG5cbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2Bcblx0ZnJvbSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbmA7XG5cbmNvbnN0IGdsb3cgPSBrZXlmcmFtZXNgXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAuNDsgfVxuYDtcblxuY29uc3QgZmxvYXQgPSBrZXlmcmFtZXNgXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxuYDtcblxuY29uc3QgamlnZ2xlID0ga2V5ZnJhbWVzYFxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7IH1cbiAgMTIuNSUsIDYyLjUlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsMCwwKTsgfVxuICAzNy41JSwgODcuNSUgeyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsMCwwKTsgIH1cbmA7XG5cbmNvbnN0IGlubGluZUdsb3cgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtnbG93fSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG5gO1xuXG4vLyBob3ZlciAmIGFjdGl2ZSBzdGF0ZSBmb3IgbGlua3MgYW5kIGJ1dHRvbnNcbmNvbnN0IGhvdmVyYWJsZSA9IGNzc2BcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgcm90YXRlMzYwLFxuICBnbG93LFxuICBmbG9hdCxcbiAgamlnZ2xlLFxuICBpbmxpbmVHbG93LFxuICBob3ZlcmFibGUsXG59O1xuIl19 */",
            "next": {
                "name": "animation-r0iffl",
                "styles": "@keyframes animation-r0iffl{\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n}"
            }
        },
        "hoverable": {
            "name": "1o7rzh8-hoverable",
            "styles": "transition:all 150ms ease-out;transform:translate3d(0,0,0);&:hover{transform:translate3d(0,-2px,0);}&:active{transform:translate3d(0,0,0);};label:hoverable;",
            "map": "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NxQiIsImZpbGUiOiIuLi8uLi9zcmMvYW5pbWF0aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgcnViYmVyOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMzUsIDEuMDUpJyxcbn07XG5cbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2Bcblx0ZnJvbSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbmA7XG5cbmNvbnN0IGdsb3cgPSBrZXlmcmFtZXNgXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAuNDsgfVxuYDtcblxuY29uc3QgZmxvYXQgPSBrZXlmcmFtZXNgXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxuYDtcblxuY29uc3QgamlnZ2xlID0ga2V5ZnJhbWVzYFxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7IH1cbiAgMTIuNSUsIDYyLjUlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsMCwwKTsgfVxuICAzNy41JSwgODcuNSUgeyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsMCwwKTsgIH1cbmA7XG5cbmNvbnN0IGlubGluZUdsb3cgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtnbG93fSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG5gO1xuXG4vLyBob3ZlciAmIGFjdGl2ZSBzdGF0ZSBmb3IgbGlua3MgYW5kIGJ1dHRvbnNcbmNvbnN0IGhvdmVyYWJsZSA9IGNzc2BcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgcm90YXRlMzYwLFxuICBnbG93LFxuICBmbG9hdCxcbiAgamlnZ2xlLFxuICBpbmxpbmVHbG93LFxuICBob3ZlcmFibGUsXG59O1xuIl19 */"
        }
    },
    "easing": {
        "rubber": "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
    },
    "input": {
        "border": "rgba(0,0,0,.1)",
        "background": "#FFFFFF",
        "color": "#333333",
        "borderRadius": 4
    },
    "layoutMargin": 10,
    "appBorderColor": "rgba(0,0,0,.1)",
    "appBorderRadius": 4,
    "barTextColor": "#999999",
    "barSelectedColor": "#1EA7FD",
    "barBg": "#FFFFFF",
    "brand": {},
    "code": {
        "token": {
            "fontFamily": "\"Operator Mono\", \"Fira Code Retina\", \"Fira Code\", \"FiraCode-Retina\", \"Andale Mono\", \"Lucida Console\", Consolas, Monaco, monospace",
            "WebkitFontSmoothing": "antialiased",
            "&.tag": {
                "color": "#800000"
            },
            "&.comment": {
                "color": "#008000",
                "fontStyle": "italic"
            },
            "&.prolog": {
                "color": "#008000",
                "fontStyle": "italic"
            },
            "&.doctype": {
                "color": "#008000",
                "fontStyle": "italic"
            },
            "&.cdata": {
                "color": "#008000",
                "fontStyle": "italic"
            },
            "&.string": {
                "color": "#A31515"
            },
            "&.url": {
                "color": "#36acaa"
            },
            "&.symbol": {
                "color": "#36acaa"
            },
            "&.number": {
                "color": "#36acaa"
            },
            "&.boolean": {
                "color": "#36acaa"
            },
            "&.variable": {
                "color": "#36acaa"
            },
            "&.constant": {
                "color": "#36acaa"
            },
            "&.inserted": {
                "color": "#36acaa"
            },
            "&.atrule": {
                "color": "#0000ff"
            },
            "&.keyword": {
                "color": "#0000ff"
            },
            "&.attr-value": {
                "color": "#0000ff"
            },
            "&.punctuation": {
                "color": "#393A34"
            },
            "&.operator": {
                "color": "#393A34"
            },
            "&.function": {
                "color": "#393A34"
            },
            "&.deleted": {
                "color": "#9a050f"
            },
            "&.important": {
                "fontWeight": "bold"
            },
            "&.bold": {
                "fontWeight": "bold"
            },
            "&.italic": {
                "fontStyle": "italic"
            },
            "&.class-name": {
                "color": "#2B91AF"
            },
            "&.selector": {
                "color": "#800000"
            },
            "&.attr-name": {
                "color": "#ff0000"
            },
            "&.property": {
                "color": "#ff0000"
            },
            "&.regex": {
                "color": "#ff0000"
            },
            "&.entity": {
                "color": "#ff0000"
            },
            "&.directive.tag .tag": {
                "background": "#ffff00",
                "color": "#393A34"
            }
        },
        "language-json .token.boolean": {
            "color": "#0000ff"
        },
        "language-json .token.number": {
            "color": "#0000ff"
        },
        "language-json .token.property": {
            "color": "#2B91AF"
        },
        "namespace": {
            "opacity": 0.7
        }
    },
    "addonActionsTheme": {
        "BASE_FONT_FAMILY": "\"Operator Mono\", \"Fira Code Retina\", \"Fira Code\", \"FiraCode-Retina\", \"Andale Mono\", \"Lucida Console\", Consolas, Monaco, monospace",
        "BASE_FONT_SIZE": 13,
        "BASE_LINE_HEIGHT": "18px",
        "BASE_BACKGROUND_COLOR": "transparent",
        "BASE_COLOR": "#333333",
        "OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES": 10,
        "OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES": 5,
        "OBJECT_NAME_COLOR": "rgb(136, 19, 145)",
        "OBJECT_VALUE_NULL_COLOR": "rgb(128, 128, 128)",
        "OBJECT_VALUE_UNDEFINED_COLOR": "rgb(128, 128, 128)",
        "OBJECT_VALUE_REGEXP_COLOR": "rgb(196, 26, 22)",
        "OBJECT_VALUE_STRING_COLOR": "rgb(196, 26, 22)",
        "OBJECT_VALUE_SYMBOL_COLOR": "rgb(196, 26, 22)",
        "OBJECT_VALUE_NUMBER_COLOR": "rgb(28, 0, 207)",
        "OBJECT_VALUE_BOOLEAN_COLOR": "rgb(28, 0, 207)",
        "OBJECT_VALUE_FUNCTION_PREFIX_COLOR": "rgb(13, 34, 170)",
        "HTML_TAG_COLOR": "rgb(168, 148, 166)",
        "HTML_TAGNAME_COLOR": "rgb(136, 18, 128)",
        "HTML_TAGNAME_TEXT_TRANSFORM": "lowercase",
        "HTML_ATTRIBUTE_NAME_COLOR": "rgb(153, 69, 0)",
        "HTML_ATTRIBUTE_VALUE_COLOR": "rgb(26, 26, 166)",
        "HTML_COMMENT_COLOR": "rgb(35, 110, 37)",
        "HTML_DOCTYPE_COLOR": "rgb(192, 192, 192)",
        "ARROW_COLOR": "rgba(0,0,0,0.3)",
        "ARROW_MARGIN_RIGHT": 4,
        "ARROW_FONT_SIZE": 8,
        "ARROW_ANIMATION_DURATION": "0",
        "TREENODE_FONT_FAMILY": "\"Operator Mono\", \"Fira Code Retina\", \"Fira Code\", \"FiraCode-Retina\", \"Andale Mono\", \"Lucida Console\", Consolas, Monaco, monospace",
        "TREENODE_FONT_SIZE": 13,
        "TREENODE_LINE_HEIGHT": "18px",
        "TREENODE_PADDING_LEFT": 12,
        "TABLE_BORDER_COLOR": "#aaa",
        "TABLE_TH_BACKGROUND_COLOR": "#eee",
        "TABLE_TH_HOVER_COLOR": "hsla(0, 0%, 90%, 1)",
        "TABLE_SORT_ICON_COLOR": "#6e6e6e",
        "TABLE_DATA_BACKGROUND_IMAGE": "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
        "TABLE_DATA_BACKGROUND_SIZE": "128px 32px"
    }
}