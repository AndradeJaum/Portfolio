import Image from "next/image";
const Work = () => {
  return (
    <div className="w-[610px] max-w-full mx-auto px-4">
      <div className="hidden">
        <h2 className="text-xl mb-12">Work Experience</h2>
        <div className="w-full flex justify-between mb-12">
          <div className="w-[30%]">
            <p>2023 - present</p>
          </div>
          <div className="w-[65%] grid gap-2">
            <h3 className="text-xl">Full Stack Developer</h3>
            <p>Função do cargo aqui</p>
            <span className="text-gray-600 grid grid-flow-col auto-cols-[1fr]">
              <span>JS</span>
              <span>TS</span>
              <span>Next</span>
              <span>React</span>
              <span>Tailwind</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl mb-12">Side Projects</h2>
        <div className="w-full flex justify-between mb-12">
          <div className="w-[47%] grid gap-2">
            <Image
              src="/images/comunismo.png"
              alt={"Projeto Comunismo"}
              height={10}
              width={400}
              className="rounded-md"
            />
            <h3 className="text-xl">Tittle</h3>
            <p>Project description here, brief and punctual </p>
          </div>
          <div className="w-[47%] grid gap-2">
            <div className="aspect-[2/1] rounded-xl bg-gray-700"></div>
            <h3 className="text-xl">Tittle</h3>
            <p>Project description here, brief and punctual </p>
          </div>
        </div>

        <div className="w-full flex justify-between mb-12">
          <div className="w-[47%] grid gap-2">
            <div className="aspect-[2/1] rounded-xl bg-gray-700"></div>
            <h3 className="text-xl">Tittle</h3>
            <p>Project description here, brief and punctual </p>
          </div>
          <div className="w-[47%] grid gap-2">
            <div className="aspect-[2/1] rounded-xl bg-gray-700"></div>
            <h3 className="text-xl">Tittle</h3>
            <p>Project description here, brief and punctual </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
