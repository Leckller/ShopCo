import ModelImg from '../../assets/Models/mainModels.jpeg';

function Model() {
  return (
    <section className="flex justify-center items-center">
      <img
        src={ ModelImg }
        alt="Models"
        className="object-cover w-[500px]"
      />
    </section>
  );
}

export default Model;
