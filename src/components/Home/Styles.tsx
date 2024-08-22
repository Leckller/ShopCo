import { useNavigate } from 'react-router-dom';
import Casual from '../../assets/Models/Casual.png';
import Gym from '../../assets/Models/Gym.png';
import Party from '../../assets/Models/Party.png';
import Formal from '../../assets/Models/Formal.png';

function Styles() {
  const navigate = useNavigate();
  const styles = [{ title: 'Casual', img: Casual },
    { title: 'Formal', img: Formal },
    { title: 'Party', img: Party },
    { title: 'Gym', img: Gym }];
  return (
    <section
      className="bg-[#F2F0F1] rounded-2xl flex justify-center items-center
        flex-col"
    >
      <h1>BROWSE BY dress STYLE</h1>
      <section className="flex flex-row flex-wrap justify-center gap-5 p-5 ">
        {styles.map((style, i) => (
          <button
            key={ style.title }
            onClick={ () => navigate(`/Category/${style.title}`) }
            className={ `
                flex-grow
                flex flex-row-reverse relative bg-white rounded-[40px]
                ${i === 1 || i === 2 ? 'md:w-[50%]' : 'md:w-[35%]'}
                max-h-[200px]
                overflow-hidden
                ` }
          >
            <h2 className="absolute left-5 top-5">{style.title}</h2>
            <img
              className="object-cover"
              src={ style.img }
              alt={ style.title }
            />
          </button>
        ))}
      </section>
    </section>
  );
}

export default Styles;
