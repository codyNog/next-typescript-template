import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "papaparse";

// 現在のファイルのディレクトリを取得
const currentDir = dirname(fileURLToPath(import.meta.url));

// CSVファイルへの絶対パス
const csvFilePath = join(currentDir, "index.csv");

// CSVファイルを読み込み、JSONに変換する関数
const convertCsvToJson = (csvFilePath) => {
  const csvFile = fs.readFileSync(csvFilePath, "utf8");

  // PapaParseを使用してCSVをパース
  parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    comments: true,
    complete: (result) => {
      // 各列ごとのJSONデータを格納するオブジェクト
      const jsonDataObject = {};

      // 各行に対してJSONを生成
      for (const row of result.data) {
        for (const key of Object.keys(row)) {
          if (!jsonDataObject[key]) {
            jsonDataObject[key] = {};
          }

          jsonDataObject[key][row.key] = row[key];
        }
      }

      // 各列に対応するJSONをファイルに書き込む
      for (const key of Object.keys(jsonDataObject)) {
        const jsonFilePath = join(
          currentDir,
          "../",
          "gen",
          "i18n",
          `${key}.ts`,
        );

        // ディレクトリが存在しない場合は作成
        fs.mkdirSync(dirname(jsonFilePath), { recursive: true });

        fs.writeFileSync(
          jsonFilePath,
          `export default ${JSON.stringify(jsonDataObject[key])} as const;`,
          "utf8",
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
convertCsvToJson(csvFilePath);
