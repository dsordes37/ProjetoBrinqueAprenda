import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../data/jogos';
import './ProjectThumb.css';

export default function ProjectThumb({ imageSrc="", altText="", projectId='1', projectYear=2025, title="game"}) {

  return (
    <Link to={`/game/${projectYear}/${projectId}`}>
      <div className='container'>
        <img src={getAssetUrl(imageSrc)} alt={altText} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}