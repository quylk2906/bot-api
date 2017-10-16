module.exports.getDataFromRequest = function (req) {  
    let data = [
        {
            "title": req["thu-cung"],
            "content": [
                {
                    "title": req["thu-cung-1-title"],
                    "description": req["thu-cung-1-description"],
                    "thumbnail_url": req["thu-cung-1-thumbnail-url"],
                    "link": req["thu-cung-1-link"],
                    "button_text": req["thu-cung-1-button-text"]
                },
                {
                    "title": req["thu-cung-2-title"],
                    "description": req["thu-cung-2-description"],
                    "thumbnail_url": req["thu-cung-2-thumbnail-url"],
                    "link": req["thu-cung-2-link"],
                    "button_text": req["thu-cung-2-button-text"]
                },
                {
                    "title": req["thu-cung-3-title"],
                    "description": req["thu-cung-3-description"],
                    "thumbnail_url": req["thu-cung-3-thumbnail-url"],
                    "link": req["thu-cung-3-link"],
                    "button_text": req["thu-cung-3-button-text"]
                }
            ]
        },
        {
            "title": req["san-pham"],
            "content": [
                {
                    "title": req["san-pham-1-title"],
                    "description": req["san-pham-1-description"],
                    "thumbnail_url": req["san-pham-1-thumbnail-url"],
                    "link": req["san-pham-1-link"],
                    "button_text": req["san-pham-1-button-text"]
                },
                {
                    "title": req["san-pham-2-title"],
                    "description": req["san-pham-2-description"],
                    "thumbnail_url": req["san-pham-2-thumbnail-url"],
                    "link": req["san-pham-2-link"],
                    "button_text": req["san-pham-2-button-text"]
                },
                {
                    "title": req["san-pham-3-title"],
                    "description": req["san-pham-3-description"],
                    "thumbnail_url": req["san-pham-3-thumbnail-url"],
                    "link": req["san-pham-3-link"],
                    "button_text": req["san-pham-3-button-text"]
                }
            ]
        },
        {
            "title": req["dich-vu"],
            "content": [
                {
                    "title": req["dich-vu-1-title"],
                    "description": req["dich-vu-1-description"],
                    "thumbnail_url": req["dich-vu-1-thumbnail-url"],
                    "link": req["dich-vu-1-link"],
                    "button_text": req["dich-vu-1-button-text"]
                },
                {
                    "title": req["dich-vu-2-title"],
                    "description": req["dich-vu-2-description"],
                    "thumbnail_url": req["dich-vu-2-thumbnail-url"],
                    "link": req["dich-vu-2-link"],
                    "button_text": req["dich-vu-2-button-text"]
                },
                {
                    "title": req["dich-vu-3-title"],
                    "description": req["dich-vu-3-description"],
                    "thumbnail_url": req["dich-vu-3-thumbnail-url"],
                    "link": req["dich-vu-3-link"],
                    "button_text": req["dich-vu-3-button-text"]
                }
            ]
        }
    ]

    let persistentMenu = [
        {"menu1": req["menu1"]},
        {"menu2": req["menu2"]},
        {"menu3": req["menu3"]}
    ]
    let dialog = {
        dataDialog: data,
        greetingMessage: req["greeting"],
        persistenMenu: persistentMenu,
        proactiveMessage: "proactiveMessage",
        card: {"card": "card"}
    }

    return dialog
}



