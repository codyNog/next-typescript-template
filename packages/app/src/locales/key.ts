// biome-ignore lint/style/useImportType: <explanation>
import key from "gen/i18n/key";

// Add keys for passing dynamic values
type DynamicKey = "preferences.userIp.confirmation" | "";

export type I18nKey = Exclude<keyof typeof key, DynamicKey>;
