import WorkingImg from '../../assets/working.svg';
import './Working.css';

export function Working() {
  return (
    <div className='working-page'>
      <h1>Ainda estamos trabalhando nessa página...</h1>
      <img src={WorkingImg} alt="" />
    </div>
  )
}