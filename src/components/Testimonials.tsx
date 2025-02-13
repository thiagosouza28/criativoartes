const testimonials = [
  {
    content: "Excelente qualidade de impressão e atendimento super profissional. Recomendo!",
    author: "Maria Silva",
    role: "Designer Gráfica",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "Sempre entregam no prazo e com qualidade impecável. Minha gráfica de confiança!",
    author: "João Santos",
    role: "Arquiteto",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "Ótimos preços e material de primeira linha. Atenderam todas as minhas expectativas.",
    author: "Ana Costa",
    role: "Empresária",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">O que nossos clientes dizem</h2>
          <p className="mt-4 text-xl text-gray-600">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}