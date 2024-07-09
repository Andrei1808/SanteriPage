import s from "./NotFound.module.scss";

export default function NotFound() {
    return (
      <div className={s.notFound}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>404</h2>
          <h4 className={s.subtitle}>page not found</h4>
        </div>
        <div className={s.nameContainer}>
          <h4 className={s.name}>santerin</h4>
          <p className={s.service}>palvelut</p>
        </div>
      </div>
    );
}
