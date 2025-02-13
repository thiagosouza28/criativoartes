import { Printer, Book, Palette, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Impressão Digital",
    description: "Impressões de alta qualidade em diversos formatos e papéis"
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Encadernação",
    description: "Encadernação espiral e capa dura"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Personalização",
    description: "Produtos personalizados para sua empresa ou evento"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Design Gráfico",
    description: "Criação de artes e identidade visual profissional"
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">Nossos Serviços</h2>
          <p className="mt-4 text-xl text-blue-600">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 group"
            >
              <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}