import { parseColorAttributes } from "./parseColor";
import { Layer } from "../../../picasso-dsl/src";
import isBlock, {  } from "../../../picasso-layout/src/isBlock"

const TEST_DATA = {
    "type": "Container",
    "id": "8ABBBE97-6C88-4E16-8822-648E09799E4C",
    "name": "04-ios底部说明",
    "symbolName": "",
    "panel": {
        "properties": {
            "name": "04-ios底部说明",
            "position": {
                "x": 0,
                "y": 0
            },
            "size": {
                "width": 750,
                "height": 1334
            },
            "opacity": 1,
            "radius": [0, 0, 0, 0],
            "symbolName": "",
            "sharedLayerStyleName": "",
            "sharedTextStyleName": ""
        },
        "fills": [{
            "type": 0,
            "color": {
                "red": 209,
                "green": 45,
                "blue": 54,
                "alpha": 1
            }
        }],
        "typefaces": [],
        "borders": [],
        "shadows": [],
        "code": ""
    },
    "structure": {
        "x": 0,
        "y": 0,
        "width": 750,
        "height": 1334,
        "zIndex": 1
    },
    "style": {
        "boxShadow": [],
        "borderRadius": {
            "topLeft": 16,
            "topRight": 16,
            "bottomRight": 16,
            "bottomLeft": 16
        },
        "background": {
            "color": {
                "red": 209,
                "green": 45,
                "blue": 54,
                "alpha": 1
            }
        },
        "width": 750,
        "margin": "0 auto",
        "overflow": "hidden",
        "paddingTop": 0.1
    },
    "value": "imageUrl",
    "children": [{
        "type": "Container",
        "id": "9EE9B969-2928-4A04-8713-2B128A9BE45A",
        "name": "矩形",
        "symbolName": "",
        "panel": {
            "properties": {
                "name": "矩形",
                "position": {
                    "x": 21,
                    "y": 30
                },
                "size": {
                    "width": 709,
                    "height": 414
                },
                "opacity": 1,
                "radius": [16, 16, 16, 16],
                "symbolName": "",
                "sharedLayerStyleName": "",
                "sharedTextStyleName": ""
            },
            "fills": [{
                "type": 0,
                "color": {
                    "red": 255,
                    "green": 255,
                    "blue": 255,
                    "alpha": 1
                }
            }],
            "typefaces": [],
            "borders": [{
                "position": 1,
                "thickness": 1,
                "fill": {
                    "type": 0,
                    "color": {
                        "red": 151,
                        "green": 151,
                        "blue": 151,
                        "alpha": 1
                    }
                }
            }],
            "shadows": [],
            "code": ""
        },
        "structure": {
            "x": 21,
            "y": 30,
            "width": 709,
            "height": 414,
            "border": {
                "left": {
                    "width": 1,
                    "style": "solid",
                    "color": {
                        "red": 151,
                        "green": 151,
                        "blue": 151,
                        "alpha": 1
                    }
                },
                "top": {
                    "width": 1,
                    "style": "solid",
                    "color": {
                        "red": 151,
                        "green": 151,
                        "blue": 151,
                        "alpha": 1
                    }
                },
                "right": {
                    "width": 1,
                    "style": "solid",
                    "color": {
                        "red": 151,
                        "green": 151,
                        "blue": 151,
                        "alpha": 1
                    }
                },
                "bottom": {
                    "width": 1,
                    "style": "solid",
                    "color": {
                        "red": 151,
                        "green": 151,
                        "blue": 151,
                        "alpha": 1
                    }
                }
            },
            "zIndex": 2
        },
        "style": {
            "boxShadow": [],
            "borderRadius": {
                "topLeft": 16,
                "topRight": 16,
                "bottomRight": 16,
                "bottomLeft": 16
            },
            "background": {
                "color": {
                    "red": 255,
                    "green": 255,
                    "blue": 255,
                    "alpha": 1
                }
            },
            "width": 709,
            "marginLeft": 21,
            "marginTop": 30,
            "paddingTop": 0.1
        },
        "children": [{
            "type": "Container",
            "id": "4D778F06-4181-4A1F-A17B-8E5DEC4033F5",
            "name": "矩形",
            "symbolName": "",
            "panel": {
                "properties": {
                    "name": "矩形",
                    "position": {
                        "x": 49,
                        "y": 55
                    },
                    "size": {
                        "width": 654,
                        "height": 108
                    },
                    "opacity": 1,
                    "radius": [16, 16, 16, 16],
                    "symbolName": "",
                    "sharedLayerStyleName": "",
                    "sharedTextStyleName": ""
                },
                "fills": [{
                    "type": 0,
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                }],
                "typefaces": [],
                "borders": [{
                    "position": 1,
                    "thickness": 1,
                    "fill": {
                        "type": 0,
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                }],
                "shadows": [],
                "code": ""
            },
            "structure": {
                "x": 49,
                "y": 55,
                "width": 654,
                "height": 108,
                "border": {
                    "left": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "top": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "right": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "bottom": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                },
                "zIndex": 3
            },
            "style": {
                "boxShadow": [],
                "borderRadius": {
                    "topLeft": 16,
                    "topRight": 16,
                    "bottomRight": 16,
                    "bottomLeft": 16
                },
                "background": {
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                },
                "width": 654,
                "marginLeft": 27,
                "marginTop": 23,
                "paddingTop": 0.1
            },
            "children": [{
                "type": "Text",
                "id": "CA18DF19-42F6-4CE0-B527-CBF5E8AE3922",
                "name": "我是大标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是大标题",
                        "position": {
                            "x": 77,
                            "y": 75
                        },
                        "size": {
                            "width": 145,
                            "height": 41
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [{
                        "type": 0,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        }
                    }],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "letterSpacing": 0,
                        "lineHeight": 41,
                        "paragraphSpacing": 0,
                        "content": "我是大标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 77,
                    "y": 75,
                    "width": 145,
                    "height": 41,
                    "zIndex": 4
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 41,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 145,
                    "marginLeft": 27,
                    "marginTop": 18
                },
                "value": "我是大标题",
                "className": "unconditional"
            }, {
                "type": "Text",
                "id": "80DEE683-A51D-41EB-9BE2-A89BABA57BA4",
                "name": "我是小标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是小标题",
                        "position": {
                            "x": 77,
                            "y": 116
                        },
                        "size": {
                            "width": 90,
                            "height": 25
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "letterSpacing": 0,
                        "lineHeight": 25,
                        "paragraphSpacing": 0,
                        "content": "我是小标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 77,
                    "y": 116,
                    "width": 90,
                    "height": 25,
                    "zIndex": 5
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 25,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 90,
                    "marginLeft": 27
                },
                "value": "我是小标题",
                "className": "feather"
            }],
            "className": "pence"
        }, {
            "type": "Container",
            "id": "039EAE11-FB74-4E5F-B83C-4E28E28F8B29",
            "name": "矩形",
            "symbolName": "",
            "panel": {
                "properties": {
                    "name": "矩形",
                    "position": {
                        "x": 46,
                        "y": 183
                    },
                    "size": {
                        "width": 654,
                        "height": 108
                    },
                    "opacity": 1,
                    "radius": [16, 16, 16, 16],
                    "symbolName": "",
                    "sharedLayerStyleName": "",
                    "sharedTextStyleName": ""
                },
                "fills": [{
                    "type": 0,
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                }],
                "typefaces": [],
                "borders": [{
                    "position": 1,
                    "thickness": 1,
                    "fill": {
                        "type": 0,
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                }],
                "shadows": [],
                "code": ""
            },
            "structure": {
                "x": 46,
                "y": 183,
                "width": 654,
                "height": 108,
                "border": {
                    "left": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "top": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "right": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "bottom": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                },
                "zIndex": 6
            },
            "style": {
                "boxShadow": [],
                "borderRadius": {
                    "topLeft": 16,
                    "topRight": 16,
                    "bottomRight": 16,
                    "bottomLeft": 16
                },
                "background": {
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                },
                "width": 654,
                "marginLeft": 24,
                "marginTop": 20,
                "paddingTop": 0.1
            },
            "children": [{
                "type": "Text",
                "id": "27B9917D-8BC2-4436-9AAE-FEAEA74BEB4F",
                "name": "我是大标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是大标题",
                        "position": {
                            "x": 74,
                            "y": 203
                        },
                        "size": {
                            "width": 145,
                            "height": 41
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [{
                        "type": 0,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        }
                    }],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "letterSpacing": 0,
                        "lineHeight": 41,
                        "paragraphSpacing": 0,
                        "content": "我是大标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 74,
                    "y": 203,
                    "width": 145,
                    "height": 41,
                    "zIndex": 7
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 41,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 145,
                    "marginLeft": 27,
                    "marginTop": 18
                },
                "value": "我是大标题",
                "className": "build"
            }, {
                "type": "Text",
                "id": "FF4724A9-6732-45C8-9840-B6AA28EA3D71",
                "name": "我是小标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是小标题",
                        "position": {
                            "x": 74,
                            "y": 244
                        },
                        "size": {
                            "width": 90,
                            "height": 25
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "letterSpacing": 0,
                        "lineHeight": 25,
                        "paragraphSpacing": 0,
                        "content": "我是小标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 74,
                    "y": 244,
                    "width": 90,
                    "height": 25,
                    "zIndex": 8
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 25,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 90,
                    "marginLeft": 27
                },
                "value": "我是小标题",
                "className": "field"
            }],
            "className": "zoo"
        }, {
            "type": "Container",
            "id": "630B1BEC-B8B4-425D-A5DF-B55B5E6A34E1",
            "name": "矩形",
            "symbolName": "",
            "panel": {
                "properties": {
                    "name": "矩形",
                    "position": {
                        "x": 46,
                        "y": 311
                    },
                    "size": {
                        "width": 654,
                        "height": 108
                    },
                    "opacity": 1,
                    "radius": [16, 16, 16, 16],
                    "symbolName": "",
                    "sharedLayerStyleName": "",
                    "sharedTextStyleName": ""
                },
                "fills": [{
                    "type": 0,
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                }],
                "typefaces": [],
                "borders": [{
                    "position": 1,
                    "thickness": 1,
                    "fill": {
                        "type": 0,
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                }],
                "shadows": [],
                "code": ""
            },
            "structure": {
                "x": 46,
                "y": 311,
                "width": 654,
                "height": 108,
                "border": {
                    "left": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "top": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "right": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    },
                    "bottom": {
                        "width": 1,
                        "style": "solid",
                        "color": {
                            "red": 151,
                            "green": 151,
                            "blue": 151,
                            "alpha": 1
                        }
                    }
                },
                "zIndex": 9
            },
            "style": {
                "boxShadow": [],
                "borderRadius": {
                    "topLeft": 16,
                    "topRight": 16,
                    "bottomRight": 16,
                    "bottomLeft": 16
                },
                "background": {
                    "color": {
                        "red": 255,
                        "green": 108,
                        "blue": 108,
                        "alpha": 1
                    }
                },
                "width": 654,
                "marginLeft": 24,
                "marginTop": 20,
                "paddingTop": 0.1
            },
            "children": [{
                "type": "Text",
                "id": "7BD551E6-5999-41FB-B96D-3FA890A02778",
                "name": "我是大标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是大标题",
                        "position": {
                            "x": 74,
                            "y": 331
                        },
                        "size": {
                            "width": 145,
                            "height": 41
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [{
                        "type": 0,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        }
                    }],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "letterSpacing": 0,
                        "lineHeight": 41,
                        "paragraphSpacing": 0,
                        "content": "我是大标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 74,
                    "y": 331,
                    "width": 145,
                    "height": 41,
                    "zIndex": 10
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 41,
                        "color": {
                            "red": 216,
                            "green": 216,
                            "blue": 216,
                            "alpha": 1
                        },
                        "fontSize": 29,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 145,
                    "marginLeft": 27,
                    "marginTop": 18
                },
                "value": "我是大标题",
                "className": "salad"
            }, {
                "type": "Text",
                "id": "EF6C5287-B862-42B4-869B-950B4E731475",
                "name": "我是小标题",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "我是小标题",
                        "position": {
                            "x": 74,
                            "y": 372
                        },
                        "size": {
                            "width": 90,
                            "height": 25
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 0,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "letterSpacing": 0,
                        "lineHeight": 25,
                        "paragraphSpacing": 0,
                        "content": "我是小标题"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 74,
                    "y": 372,
                    "width": 90,
                    "height": 25,
                    "zIndex": 11
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "left",
                        "lineHeight": 25,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        },
                        "fontSize": 18,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400
                    },
                    "width": 90,
                    "marginLeft": 27
                },
                "value": "我是小标题",
                "className": "ferry"
            }],
            "className": "nationality"
        }],
        "className": "valley"
    }, {
        "type": "Container",
        "id": "D6C76BFF-540E-478F-8A03-8388BE9F749A",
        "name": "背景",
        "symbolName": "",
        "panel": {
            "properties": {
                "name": "背景",
                "position": {
                    "x": 0,
                    "y": 1235
                },
                "size": {
                    "width": 750,
                    "height": 99
                },
                "opacity": 1,
                "radius": [0, 0, 0, 0],
                "symbolName": "",
                "sharedLayerStyleName": "",
                "sharedTextStyleName": ""
            },
            "fills": [{
                "type": 0,
                "color": {
                    "red": 255,
                    "green": 255,
                    "blue": 255,
                    "alpha": 1
                }
            }],
            "typefaces": [],
            "borders": [],
            "shadows": [],
            "code": ""
        },
        "structure": {
            "x": 0,
            "y": 1235,
            "width": 750,
            "height": 99,
            "zIndex": 12
        },
        "style": {
            "boxShadow": [],
            "borderRadius": {
                "topLeft": 0,
                "topRight": 0,
                "bottomRight": 0,
                "bottomLeft": 0
            },
            "background": {
                "color": {
                    "red": 255,
                    "green": 255,
                    "blue": 255,
                    "alpha": 1
                }
            },
            "width": 750,
            "marginTop": 791,
            "paddingTop": 0.1
        },
        "children": [{
            "id": "ekb5t5dh",
            "class": "Row",
            "type": "Container",
            "name": "Row",
            "structure": {
                "zIndex": 18,
                "x": 103,
                "y": 1253,
                "width": 545,
                "height": 41
            },
            "children": [{
                "type": "Image",
                "id": "3B8FC8B9-4EB8-4756-B86A-1ABDE28D02FD",
                "name": "买车-选中",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "买车-选中",
                        "position": {
                            "x": 103,
                            "y": 1252.5438596491229
                        },
                        "size": {
                            "width": 46,
                            "height": 40.35087719298245
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 103,
                    "y": 1253,
                    "width": 46,
                    "height": 40,
                    "zIndex": 13
                },
                "style": {
                    "boxShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        }
                    },
                    "marginLeft": 0
                },
                "value": "https://wos.58cdn.com.cn/cDazYxWcDHJ/picasso/433fdb32578e9a0e90b5db17659d56f74f95b17b.png",
                "children": [],
                "className": "stewardess"
            }, {
                "type": "Image",
                "id": "95A6E078-EF60-4B8D-B37E-0DA49E30BC15",
                "name": "卖车-未选中",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "卖车-未选中",
                        "position": {
                            "x": 352,
                            "y": 1252.5438596491229
                        },
                        "size": {
                            "width": 46,
                            "height": 41.11427216690375
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 352,
                    "y": 1253,
                    "width": 46,
                    "height": 41,
                    "zIndex": 16
                },
                "style": {
                    "boxShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        }
                    },
                    "marginLeft": 203
                },
                "value": "https://wos.58cdn.com.cn/cDazYxWcDHJ/picasso/72f5bd82ee99210c3da7595bc94f821123ec3c82.png",
                "children": [],
                "className": "water"
            }, {
                "type": "Image",
                "id": "CF2E8977-752F-4FC6-9D14-A5B8DBC04B7A",
                "name": "服务-未选中",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "服务-未选中",
                        "position": {
                            "x": 602,
                            "y": 1252.5438596491229
                        },
                        "size": {
                            "width": 46,
                            "height": 41.11427216690375
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 602,
                    "y": 1253,
                    "width": 46,
                    "height": 41,
                    "zIndex": 18
                },
                "style": {
                    "boxShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 1
                        }
                    },
                    "marginLeft": 204
                },
                "value": "https://wos.58cdn.com.cn/cDazYxWcDHJ/picasso/927f21d8cab70dfd352424a739c87b792f0b32dc.png",
                "children": [],
                "className": "manage"
            }],
            "style": {
                "width": "auto",
                "marginTop": 18,
                "display": "flex",
                "flexDirection": "row",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "isCenter": true,
            "className": "limit"
        }, {
            "id": "3iutg5ct",
            "class": "Row",
            "type": "Container",
            "name": "Row",
            "structure": {
                "zIndex": 17,
                "x": 95,
                "y": 1299,
                "width": 550,
                "height": 21
            },
            "children": [{
                "type": "Text",
                "id": "4667DF6B-DD69-4AE6-8548-CF7A2C03B611",
                "name": "二手车",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "二手车",
                        "position": {
                            "x": 95,
                            "y": 1299.9122807017543
                        },
                        "size": {
                            "width": 60,
                            "height": 20
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Medium",
                        "fontWeight": "Medium",
                        "alignment": 2,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 255,
                            "green": 85,
                            "blue": 46,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "letterSpacing": -0.0002956635,
                        "lineHeight": 20,
                        "paragraphSpacing": 0,
                        "content": "二手车"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 95,
                    "y": 1300,
                    "width": 60,
                    "height": 20,
                    "zIndex": 14
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "center",
                        "lineHeight": 20,
                        "color": {
                            "red": 255,
                            "green": 85,
                            "blue": 46,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "fontFamily": "PingFangSC-Medium",
                        "fontWeight": 500,
                        "letterSpacing": 0
                    },
                    "marginLeft": 0
                },
                "value": "二手车",
                "className": "example"
            }, {
                "type": "Text",
                "id": "55A25F4E-D586-4EB1-B3A1-4DD1B4EEE0C9",
                "name": "卖车",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "卖车",
                        "position": {
                            "x": 355,
                            "y": 1298.6842105263158
                        },
                        "size": {
                            "width": 40,
                            "height": 20
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 2,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 51,
                            "green": 51,
                            "blue": 51,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "letterSpacing": -0.0002956635,
                        "lineHeight": 20,
                        "paragraphSpacing": 0,
                        "content": "卖车"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 355,
                    "y": 1299,
                    "width": 40,
                    "height": 20,
                    "zIndex": 15
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "center",
                        "lineHeight": 20,
                        "color": {
                            "red": 51,
                            "green": 51,
                            "blue": 51,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400,
                        "letterSpacing": 0
                    },
                    "marginLeft": 200
                },
                "value": "卖车",
                "className": "purple"
            }, {
                "type": "Text",
                "id": "ED978F9F-30AB-46B8-B36B-11CF96F5A128",
                "name": "服务",
                "symbolName": "",
                "panel": {
                    "properties": {
                        "name": "服务",
                        "position": {
                            "x": 605,
                            "y": 1298.6842105263158
                        },
                        "size": {
                            "width": 40,
                            "height": 20
                        },
                        "opacity": 1,
                        "radius": [0, 0, 0, 0],
                        "symbolName": "",
                        "sharedLayerStyleName": "",
                        "sharedTextStyleName": ""
                    },
                    "fills": [],
                    "typefaces": [{
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": "Regular",
                        "alignment": 2,
                        "verticalAlignment": 0,
                        "color": {
                            "red": 51,
                            "green": 51,
                            "blue": 51,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "letterSpacing": -0.0002956635,
                        "lineHeight": 20,
                        "paragraphSpacing": 0,
                        "content": "服务"
                    }],
                    "borders": [],
                    "shadows": [],
                    "code": ""
                },
                "structure": {
                    "x": 605,
                    "y": 1299,
                    "width": 40,
                    "height": 20,
                    "zIndex": 17
                },
                "style": {
                    "textShadow": [],
                    "borderRadius": {
                        "topLeft": null,
                        "topRight": null,
                        "bottomRight": null,
                        "bottomLeft": null
                    },
                    "background": {},
                    "textStyle": {
                        "textAlign": "center",
                        "lineHeight": 20,
                        "color": {
                            "red": 51,
                            "green": 51,
                            "blue": 51,
                            "alpha": 1
                        },
                        "fontSize": 20,
                        "fontFamily": "PingFangSC-Regular",
                        "fontWeight": 400,
                        "letterSpacing": 0
                    },
                    "marginLeft": 210
                },
                "value": "服务",
                "className": "valid"
            }],
            "style": {
                "width": 550,
                "marginLeft": 95,
                "marginTop": 5,
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center"
            },
            "className": "path"
        }],
        "className": "building"
    }],
    "className": "rat"

};


const IMAGE = "Image";
const TEXT = "Text";
const CONTAINER = "Container";

///父组件：横向排列
const PARENT_ROW = "Row";
///父组件：纵向排列
const PARENT_COLUMN = "Column";
///父组件：层叠布局
const PARENT_STACK = "stack";

function parseFlutterCode() {

const flutterCode = parseCode();

return {
    jsx: 
    `import 'package:flutter/cupertino.dart';
    import 'package:flutter/material.dart';
    
    class FlutterPage extends StatefulWidget {
      @override
      State<StatefulWidget> createState() {
        return new _FlutterPageState();
      }
    }
    
    class _FlutterPageState extends State<FlutterPage> {
      @override
      Widget build(BuildContext context) {
        return new Scaffold(
            body: ${flutterCode}
        );
      }
    }`
};
}

/**
 * 解析成flutter代码的方法的入口
 */
function parseCode() : any {
    let code = [];
    parseRootContainerCode(TEST_DATA, code);
    return code.join('\n')
}

/**
 * 解析根组件Container
 * @param value
 */
function parseRootContainerCode(componse : any, code : any) {

    const style = componse.style;
    const background = style.background;
    const color = background.color;
    //红、绿、蓝三原色和透明度
    const colorString = parseColorAttributes(color);
    code.push(`Container(`);
    code.push(`color : Color(${colorString}),`);
    //开始解析根组件下面的children

    let childCode = [];
    parseChildren(componse, childCode);
    
    code.push(`child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          ${childCode}
        ],
      ),`)
    code.push(`)`);
}

/**
 * 解析子组件，该方法会递归调用
 * @param componse 
 */
function parseChildren(componse : any, code : any) {
    let children = componse.children;
    let length = children.length;
    for (let index = 0; index < length; index++) {
        const child = children[index];
        const type = child.type;
        switch (type) {
            case IMAGE:
                parseImageCode(child, code);
                break;
            case TEXT:
                parseTextCode(child, code);
                break;
            case CONTAINER:
                parseContainerCode(child, code);
                break;
            default:
                break;
        }
    }
}

/**
 * 判断一个组件是否有子组件
 * @param componse 
 */
function hasChildren(componse : any) : boolean {
    const children = componse.children;
    if (children != null && children != undefined && children.length != 0) {
        return true;
    }
    return false;
}


/**
 * 解析Image组件
 */
function parseImageCode(componse : any, imageCode : any) {

    //图片宽高
    const positionInfo = componse.structure;
    const width = getFlutterUnit(positionInfo.width);
    const height = getFlutterUnit(positionInfo.height);
    //图片margin
    const style = componse.style;
    const leftMargin = getFlutterUnit(style.marginLeft);
    const rightMargin = getFlutterUnit(style.marginRight);
    const topMargin = getFlutterUnit(style.marginTop);
    const bottomMargin = getFlutterUnit(style.marginBottom);
    //图片圆角
    const radius = style.borderRadius;
    const topLeftRadius = getFlutterUnit(radius.topLeft);
    const topRightRadius = getFlutterUnit(radius.topRight);
    const bottomLeftRadius = getFlutterUnit(radius.bottomLeft);
    const bottomRightRadius = getFlutterUnit(radius.bottomRight);
    //图片路径
    const localPath = componse.value;
    imageCode.push(`
        Container(
            margin: EdgeInsets.only(left: ${leftMargin}, right: ${rightMargin}, top: ${topMargin}, bottom: ${bottomMargin}),
            decoration: BoxDecoration(
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(${topLeftRadius}),
                topRight: Radius.circular(${topRightRadius}),
                bottomLeft: Radius.circular(${bottomLeftRadius}),
                bottomRight: Radius.circular(${bottomRightRadius})
            )
            ),
            child: Image.network(
            "${localPath}",
            width: ${width},
            height: ${height},
            ),
        )
    `);

}

/**
 * 
 * 解析Text组件
 */
function parseTextCode(componse : any, code : any) {
    //解析Text组件
    const style = componse.style;
    const textStyle = style.textStyle;
    const textValue = componse.value;
    const fontSize = getFlutterUnit(textStyle.fontSize);
    const textColorString = parseColorAttributes(textStyle.color);
    const fontWeidht = textStyle.fontWeight;
    const leftMargin = getFlutterUnit(style.marginLeft);
    const topMargin = getFlutterUnit(style.topMargin);
    code.push(`Container(
        margin: EdgeInsets.only(left: ${leftMargin}, top: ${topMargin}),
        child: Text(
          "${textValue}",
          style: TextStyle(
            fontSize: ${fontSize},
            fontWeight: FontWeight.w${fontWeidht},
            color: Color(${textColorString})
          ),
        ),
      )`);
}

/**
 * 解析Container组件
 */
function parseContainerCode(componse : any, code : any) {
    //解析Container组件
    const structure = componse.structure;
    const style = componse.style;
    const containerWidth = getFlutterUnit(structure.width);
    const containerHeight = getFlutterUnit(structure.height);
    const borderRadius = style.borderRadius;

    let hasRadius = true;
    if (borderRadius == undefined) {
        hasRadius = false;
    }
    const topLeftRadius = hasRadius ?  getFlutterUnit(borderRadius.topLeft) : 0;
    const topRightRadius = hasRadius ? getFlutterUnit(borderRadius.topRight) : 0;
    const bottomLeftRadius = hasRadius ?  getFlutterUnit(borderRadius.bottomLeft) : 0;
    const bottomRightRadius = hasRadius ? getFlutterUnit(borderRadius.bottomRight) : 0;

    let hasBackground = true;
    if (style.background == undefined || style.background.color == undefined) {
        hasBackground = false;
    }

    let backgroundColor = "0x00000000";
    if (hasBackground) {
        backgroundColor = parseColorAttributes(style.background.color);
    }
    
    const leftMargin = getFlutterUnit(style.marginLeft);
    const rightMargin = getFlutterUnit(style.marginRight);
    const topMargin = getFlutterUnit(style.marginTop);
    const bottomMargin = getFlutterUnit(style.marginBottom);

    let newCode = [];
    let layoutType = PARENT_ROW;
    //如果有子组件，继续解析
    if (hasChildren(componse)) {
        if (isBlock(componse.children)) {
            //纵向排列
            layoutType = PARENT_COLUMN;
        }
        parseChildren(componse, newCode);
    }



    code.push(`Container(
            width: ${containerWidth},
            height: ${containerHeight},
            decoration: BoxDecoration(
            borderRadius: BorderRadius.only(topLeft: Radius.circular(${topLeftRadius}),
                topRight: Radius.circular(${topRightRadius}), bottomLeft: Radius.circular(${bottomLeftRadius}),
                bottomRight: Radius.circular(${bottomRightRadius})),
            color: Color(${backgroundColor})
            ),
            margin: EdgeInsets.only(left: ${leftMargin}, right: ${rightMargin}, top: ${topMargin}, bottom: ${bottomMargin}),
            child: ${layoutType}(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,  
                children: <Widget>[
                    ${newCode}
                ]))`);
}


/**
 * 获取flutter中用到的单位，默认是2倍图，取值为px / 2
 * @param value 传入的px
 */
function getFlutterUnit(value : any) : number {
    if (value == undefined) {
        return 0;
    }
    return value / 2;
}



console.log(parseFlutterCode().jsx);
