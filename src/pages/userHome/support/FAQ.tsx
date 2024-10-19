import { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import { SearchInput } from "../../../components/SearchInput";

interface FAQProps {
  question: string;
  answer: string;
}

const faqs: FAQProps[] = [
  {
    question: '¿Cómo inicio una nueva prueba de propiedades de rocas?',
    answer: 'Para iniciar una nueva prueba, navega a la sección "Pruebas de Propiedades de Rocas" y haz clic en "Iniciar Nueva Prueba". Sigue las instrucciones proporcionadas.'
  },
  {
    question: '¿Qué tipos de rocas están disponibles en la aplicación?',
    answer: 'Actualmente, la aplicación incluye tipos de rocas como Granito, Basalto, Caliza, entre otros. Puedes ver la lista completa en la sección "Tipos de Rocas".'
  }
];

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="support-page">
        <h1>FAQ</h1>
        
        {/* Buscador de FAQs */}

        <div className="faq-search">
          <SearchInput 
            placeholder="Buscar en las preguntas frecuentes..." 
            value={searchTerm} 
            onSearch={setSearchTerm}
            className="faq-input"/>
        </div>

        {/* Lista de FAQs */}
        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <details>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              </div>
            ))
          ) : (
            <p>No se encontraron preguntas frecuentes que coincidan con tu búsqueda.</p>
          )}
        </div>

        {/* Enlaces a otras subsecciones */}
        <div className="support-links">
          <Link to={"/support/documentation"}>Centro de Documentación</Link>
          <Link to={"/support/contact"}>Contacto de Soporte</Link>
          <Link to={"/support/resources"}>Recursos</Link>
        </div>
      </div>
    </section>
  );
};