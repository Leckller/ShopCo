import { Link } from 'react-router-dom';
import InfosContent from '../../../Utils/InfosContent';

function InfosCards() {
  return (
    <article>
      {InfosContent.map((info) => (
        <article key={ info.title }>
          <h3>{info.title}</h3>
          {info.subTitles.map((subTitle) => (
            <Link
              key={ subTitle }
              to={ `/Infos/${subTitle.trim()}` }
            >
              {subTitle}
            </Link>
          ))}
        </article>
      ))}
    </article>
  );
}

export default InfosCards;
