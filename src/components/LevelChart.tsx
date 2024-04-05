import { withTranslation, WithTranslation } from "react-i18next";

export const LevelChart = withTranslation()(
  ({ t, name }: { name: string } & WithTranslation) => (
    <div id="levelChart">
      <p className="textChart">{name}</p>
      <div className="backgroundBar">
        <div className={`levelBar ${name.toLocaleLowerCase()}`} />
      </div>
    </div>
  )
);
