import { withTranslation, WithTranslation } from "react-i18next";

export const HeaderSection = withTranslation()(
  ({ t, title }: { title: string } & WithTranslation) => (
    <div className="headerSection">
      <p className="headerTitle">{t(`${title}`)}</p>
      <div className="headerSeparator" />
    </div>
  )
);
