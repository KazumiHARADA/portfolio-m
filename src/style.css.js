/**
 * Created by haradakazumi on 2017/06/10.
 */
export default {

    base: {
        "font-family": "Roboto, Helvetica, Arial, sans-serif"
    },

    overflow_y_parent: {
        "overflowX": "auto",
        "overflowY": "hidden",
        "width": "100%",
        "white-space": "nowrap"
    },

    overflow_y_child: {
        "display": "inline-block",
        "width": '320px',
        "height": '320px',
        "margin-right": '20px',
        "vertical-align": "top",
        "white-space": "normal"
    },

    work_base: {position: "relative", overflow: "hidden"},

    work_list: {float: "left", left: "47.5%", position: "relative", "list-style-type": "none"},

    work_item: {float: "left", left: "-50%", position: "relative", "margin-right":"20px"},

    work_card: {width: '320px', height: '329px', margin: 'auto'},

    work_card_title : {
        "-webkit-align-self": "flex-end",
        "-ms-flex-item-align": "end",
        "align-self": "flex-end",
        "color": "inherit",
        "display": "flex",
        "font-size": "24px",
        "font-weight": "300",
        "line-height": "normal",
        "overflow": "hidden",
        "-webkit-transform-origin": "149px 48px",
        "transform-origin": "149px 48px",
        "margin": "-4px"
    },

    work_card_text : {margin:"15px",height:"71px"},

    footer: {
        "margin": "0 auto",
        "text-align": "center"
    },

    clear_background: {
        "background": "transparent",
        "box-shadow": "none"
    },

    top_image: {
        "width": "100%"
    },

    section_title: {
        "font-size": "24px"
    }
}