import { useEffect } from 'react';
import IRoupa from '../../Types/IRoupa';
import Roupa from './Roupa';

function CarrosselRoupas({ roupas, title }: { roupas: IRoupa[], title: string }) {
  // eslint-disable-next-line react-func/max-lines-per-function
  useEffect(() => {
    document.querySelectorAll('.carrossel').forEach((scrollable: any) => {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;
      let isDragging = false;

      scrollable.addEventListener('mousedown', (e: any) => {
        isDown = true;
        scrollable.style.cursor = 'grabbing';
        startX = e.pageX - scrollable.offsetLeft;
        scrollLeft = scrollable.scrollLeft;
      });

      scrollable.addEventListener('mouseleave', () => {
        isDown = false;
        isDragging = false;
        scrollable.style.cursor = 'grab';
      });

      scrollable.addEventListener('mouseup', () => {
        isDown = false;
        scrollable.style.cursor = 'grab';
        if (!isDragging) {
          // Se o mouse não se moveu muito, trate como clique
          console.log('Clique detectado');
        }
        isDragging = false;
      });

      scrollable.addEventListener('mousemove', (e: any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollable.offsetLeft;
        const walk = (x - startX) * 2;
        scrollable.scrollLeft = scrollLeft - walk;

        if (Math.abs(walk) > 5) {
          isDragging = true; // Se mover mais de 5px, considera como arrastar
        }
      });

      // Previne o clique nos itens se houver arrasto
      document.querySelectorAll('.carousel-item').forEach((item) => {
        console.log(item);
        item.addEventListener('click', (e) => {
          if (isDragging) {
            e.preventDefault(); // Previne o clique se houve arrasto
          }
        });
      });
    });
  }, []);

  return (
    <section className="w-[100%] items-center flex flex-col gap-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        className="flex flex-col h-[425px] flex-wrap overflow-x-scroll
        snap-x carrossel gap-10"
      >
        {roupas.map((roupa, i) => (
          <Roupa roupa={ roupa } key={ roupa.nome + i } />
        ))}
      </button>
    </section>
  );
}

export default CarrosselRoupas;
