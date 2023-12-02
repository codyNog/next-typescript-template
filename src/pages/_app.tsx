import { AppProps } from "next/app";
import { I18nProvider } from "~/i18n/locales/pages";
import { Providers } from "~/store/Providers";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <I18nProvider locale={pageProps.locale}>
        <Component {...pageProps} />
      </I18nProvider>
    </Providers>
  );
};

export default App;
