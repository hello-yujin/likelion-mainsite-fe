{
  "plugins"; ["prettier"],
  "env"; {
    "es6"; true,
    "node"; true,
    "browser"; true
  }
  "extends"; [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  "rules"; {
    "import/order"; ["warn"],
    "prettier/prettier"; "error",
    "no-unused-vars"; "warn"
  }
  "ignorePatterns"; ["node_modules/"],
  "settings"; {
    "import/resolver"; {
      "alias"; {
        "map"; [
          ["@api", "./src/app/api/"],
          ["@components", "./src/components/"],
          ["@constants", "./src/constants/"],
          ["@hooks", "./src/hooks/"],
          ["@utils", "./src/utils/"]
        ],
        "extensions"; [".js", ".jsx"]
      }
    }
  }
}
