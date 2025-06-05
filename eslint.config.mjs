import antfu from "@antfu/eslint-config"

export default antfu({
    stylistic: {
        quotes: "double",
        semi: false,
        indent: 4,
    },
    rules: {
        "style/no-multi-spaces": "off",
    },
})
