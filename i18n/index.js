import fs from "node:fs";
import { parse } from "papaparse";
import csvFile from "./index.csv";

// CSVファイルを読み込み、JSONに変換する関数
const convertCsvToJson = (csvFilePath) => {
  const csvFile = fs.readFileSync(csvFilePath, "utf8");

  // PapaParseを使用してCSVをパース
  parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    comments: false,
    complete: (result) => {
      // 各列ごとのJSONデータを格納するオブジェクト
      const jsonDataObject = {};

      // 各行に対してJSONを生成
      for (const row of result.data) {
        for (const key of Object.keys(row)) {
          if (!jsonDataObject[key]) {
            jsonDataObject[key] = {};
          }

          jsonDataObject[key][row[key]] = row[key];
        }
      }

      // 各列に対応するJSONをファイルに書き込む
      for (const key of Object.keys(jsonDataObject)) {
        const jsonFilePath = `./packages/gen/i18n/${key}.ts`;
        fs.writeFileSync(
          jsonFilePath,
          `export default ${JSON.stringify(jsonDataObject[key])} as const;`,
          null,
          2,
        );
        console.log(
          `Conversion complete. JSON file created at ${jsonFilePath}`,
        );
      }
    },
    error: (error) => {
      console.error("Error parsing CSV:", error.message);
    },
  });
};

// 関数を呼び出し
convertCsvToJson(csvFile);
