import ModelImg from '../../assets/Models/mainModels.jpeg';

function Model() {
  return (
    <section className="flex justify-center items-center md:min-w-[50%]">
      <img
        src={ ModelImg }
        alt="Models"
        className="object-cover w-[400px]"
      />
    </section>
  );
}

export default Model;
