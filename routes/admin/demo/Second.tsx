import schema2component from "../../../utils/schema2component";


const schema = {
    "type": "page",
    "body": {
        "title": "",
        "type": "form",
        "autoFocus": false,
        "api": "",
        "mode": "horizontal",
        "controls": [
            {
                "type": "radios",
                "name": "foo",
                "inline": true,
                "label": " ",
                "options": [
                    {
                        "label": "类型1",
                        "value": 1
                    },
                    {
                        "label": "类型2",
                        "value": 2
                    },
                    {
                        "label": "类型3",
                        "value": 3
                    }
                ]
            },
            {
                "type": "text",
                "name": "text",
                "placeholder": "类型1 可见",
                "visibleOn": "data.foo == 1"
            },
            {
                "type": "text",
                "name": "text2",
                "placeholder": "类型2 不可点",
                "disabledOn": "data.foo == 2"
            },
            {
                "type": "button",
                "label": "类型三不能提交",
                "level": "primary",
                "disabledOn": "data.foo == 3"
            }
        ],
        "submitText": null,
        "actions": []
    }
};

export default schema2component(schema);
