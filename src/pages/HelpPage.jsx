import React, { useState } from "react";
import "../styles/HelpPage.css";
import HelpForm from "../components/HelpForm";
import Acordeon from "../components/Acordeon";

const HelpPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <main>
      <div className="help-page">
        <h1>Centro de Ayuda</h1>
        <div className="accordion">
          <Acordeon title="Información de Nosotros">
            <p>
              Fundada en 2024, GamerMania es tu destino definitivo para todos
              los productos de hardware y artículos geek que necesitas. Nos
              especializamos en ofrecer una amplia gama de productos de alta
              calidad para mejorar tu experiencia de juego y tu estilo geek.
              Desde teclados y ratones de última generación hasta figuras
              coleccionables y ropa temática, en GamerMania encontrarás todo lo
              que un verdadero entusiasta puede desear.
            </p>
            <p>
              Nuestra misión es proporcionar a nuestros clientes una experiencia
              de compra inigualable con productos innovadores y exclusivos,
              respaldados por un servicio al cliente excepcional. Ya seas un
              gamer profesional, un entusiasta de la tecnología o un amante de
              la cultura geek, GamerMania tiene algo para ti.
            </p>
            <p>
              <strong>¿Por qué elegirnos?</strong>
            </p>
            <ul>
              <li>
                <strong>Calidad y Variedad:</strong> Ofrecemos solo los mejores
                productos de hardware y artículos geek de marcas reconocidas.
              </li>
              <li>
                <strong>Servicio al Cliente:</strong> Nuestro equipo está
                siempre listo para ayudarte con cualquier consulta o problema
                que puedas tener.
              </li>
              <li>
                <strong>Precios Competitivos:</strong> Trabajamos para ofrecerte
                los mejores productos a precios que se ajusten a tu presupuesto.
              </li>
            </ul>
            <p>
              Únete a la comunidad GamerMania y lleva tu pasión por el gaming y
              la cultura geek al siguiente nivel. ¡Explora nuestro catálogo y
              encuentra tus nuevos artículos favoritos hoy mismo!
            </p>
          </Acordeon>

          <Acordeon title="Cómo Realizar un Pedido">
            <p>
              Para realizar un pedido en GamerMania, sigue estos sencillos
              pasos:
            </p>
            <ol>
              <li>
                <strong>Explora nuestro catálogo:</strong> Navega por nuestras
                categorías de productos y selecciona los artículos que deseas
                comprar.
              </li>
              <li>
                <strong>Agrega al carrito:</strong> Una vez que hayas encontrado
                los productos que te interesan, haz clic en el botón "Agregar al
                carrito" en la página de cada producto. Puedes seguir añadiendo
                más artículos o proceder al carrito para revisar tu selección.
              </li>
              <li>
                <strong>Revisa tu carrito:</strong> Accede a tu carrito de
                compras para verificar que todos los productos y cantidades sean
                correctos. Aquí también puedes ajustar la cantidad o eliminar
                artículos si es necesario.
              </li>
              <li>
                <strong>Procede al checkout:</strong> Haz clic en "Proceder al
                checkout" para comenzar el proceso de pago. Si ya tienes una
                cuenta en GamerMania, inicia sesión con tus credenciales. Si no
                tienes una cuenta, puedes realizar el pedido como invitado.
              </li>
              <li>
                <strong>Completa tu información:</strong> Introduce la
                información de envío y selecciona el método de pago que
                prefieras. Asegúrate de revisar toda la información antes de
                finalizar tu compra.
              </li>
              <li>
                <strong>Confirma tu pedido:</strong> Revisa un resumen de tu
                pedido y confirma la compra. Recibirás un correo electrónico de
                confirmación con los detalles de tu pedido.
              </li>
            </ol>
            <p>
              <strong>Nota:</strong> Puedes realizar un pedido tanto si estás
              registrado como si eres un usuario nuevo. Sin embargo, al crear
              una cuenta en GamerMania, podrás acumular puntos de fidelidad que
              puedes usar para obtener descuentos en futuras compras. Si compras
              como invitado, no podrás acumular estos puntos.
            </p>
          </Acordeon>

          <Acordeon title="Formas de Pago">
            <p>
              En GamerMania, ofrecemos una variedad de métodos de pago para
              facilitar tu compra:
            </p>
            <ul>
              <li>
                <strong>Tarjeta de Crédito/Débito:</strong> Aceptamos tarjetas
                de crédito y débito de las principales marcas, incluyendo Visa,
                MasterCard y American Express.
              </li>
              <li>
                <strong>PayPal:</strong> Puedes optar por pagar a través de
                PayPal para una transacción rápida y segura.
              </li>
              <li>
                <strong>Transferencia Bancaria:</strong> Aceptamos
                transferencias desde cuentas bancarias. Al seleccionar esta
                opción, recibirás los detalles necesarios para completar la
                transferencia.
              </li>
              <li>
                <strong>Pago en Efectivo:</strong> Si prefieres pagar en
                efectivo, puedes seleccionar la opción de "Pago en Efectivo" y
                llevar tu factura a uno de nuestros socios de pago como
                PagoFácil o Rapipago.
              </li>
              <li>
                <strong>Billeteras Virtuales:</strong> También aceptamos pagos a
                través de billeteras virtuales como MercadoPago y otras opciones
                disponibles en nuestra plataforma.
              </li>
            </ul>
            <p>
              Selecciona el método de pago que mejor se adapte a tus necesidades
              durante el proceso de checkout. Si tienes alguna duda sobre los
              métodos de pago disponibles, no dudes en contactarnos.
            </p>
          </Acordeon>

          <Acordeon title="Garantía / Cambios / Devoluciones">
            <p>
              En GamerMania, nos comprometemos a ofrecer productos de alta
              calidad y un excelente servicio al cliente. Para tu tranquilidad,
              contamos con una política de garantía y devoluciones que te
              permite realizar cambios o devolver productos si es necesario.
            </p>

            <h4>Garantía:</h4>
            <p>
              Todos nuestros productos cuentan con una garantía que cubre
              defectos de fabricación. La duración de la garantía puede variar
              según el fabricante y el tipo de producto. Para hacer efectiva la
              garantía, asegúrate de conservar el recibo de compra y de seguir
              las instrucciones específicas del fabricante.
            </p>

            <h4>Cambios:</h4>
            <p>
              Si necesitas cambiar un producto, puedes hacerlo dentro del plazo
              de <strong>30 días</strong> a partir de la fecha de compra. Los
              productos deben estar en su estado original, sin signos de uso, y
              en su embalaje original. Para solicitar un cambio, contacta a
              nuestro servicio al cliente para recibir las instrucciones
              necesarias.
            </p>

            <h4>Devoluciones:</h4>
            <p>
              Para devolver un producto, tienes hasta <strong>30 días</strong>{" "}
              desde la fecha de compra. El producto debe estar en su estado
              original y en su embalaje completo. Los gastos de envío para
              devoluciones corren por cuenta del cliente, salvo que el producto
              esté defectuoso o incorrecto. Una vez recibida y verificada la
              devolución, te reembolsaremos el monto de la compra según el
              método de pago utilizado.
            </p>

            <p>
              <strong>Nota:</strong> Algunos productos, como artículos en oferta
              o productos personalizados, pueden tener políticas de devolución
              diferentes. Consulta las condiciones específicas para estos
              productos en nuestra página de producto o contacta a nuestro
              servicio al cliente para más detalles.
            </p>

            <p>
              Si tienes alguna pregunta o necesitas asistencia con un cambio o
              devolución, no dudes en ponerte en contacto con nosotros. Estamos
              aquí para ayudarte.
            </p>
          </Acordeon>

          <Acordeon title="Formas de Envío">
            <p>
              En GamerMania, ofrecemos diversas opciones de envío para
              adaptarnos a tus necesidades y garantizar que recibas tus
              productos de la manera más conveniente. Puedes elegir entre las
              siguientes formas de envío, cada una con tiempos de entrega y
              características diferentes:
            </p>

            <ul>
              <li>
                <strong>OCA:</strong> Ofrecemos envío a través de OCA, que
                proporciona opciones de entrega estándar y exprés. Los tiempos
                de entrega varían según la ubicación, pero generalmente oscilan
                entre <strong>3 a 7 días hábiles</strong> para destinos dentro
                del país. OCA también ofrece la opción de seguimiento en línea
                para que puedas monitorear el estado de tu pedido.
              </li>

              <li>
                <strong>Correo Argentino:</strong> Puedes elegir el servicio de
                Correo Argentino para tu envío. Ofrecen servicios de entrega
                estándar y urgente, con tiempos de entrega que suelen variar
                entre <strong>4 a 10 días hábiles</strong>, dependiendo de la
                distancia desde nuestro centro de distribución. También cuentan
                con opciones de seguimiento para que estés al tanto del progreso
                de tu pedido.
              </li>

              <li>
                <strong>Andreani:</strong> También ofrecemos el servicio de
                envío a través de Andreani, que proporciona opciones de entrega
                estándar y exprés. Los tiempos de entrega generalmente varían
                entre <strong>2 a 5 días hábiles</strong>, dependiendo de la
                ubicación. Andreani ofrece un sistema de seguimiento detallado
                para que puedas rastrear tu pedido en todo momento.
              </li>

              <li>
                <strong>Envío Express:</strong> Si necesitas que tu pedido
                llegue rápidamente, te ofrecemos opciones de envío express
                mediante diferentes proveedores. Los tiempos de entrega para el
                servicio express son generalmente de{" "}
                <strong>1 a 2 días hábiles</strong>, asegurando una entrega
                rápida y eficiente.
              </li>
            </ul>

            <p>
              <strong>Nota:</strong> Los tiempos de entrega pueden variar según
              la ubicación y las condiciones climáticas o logísticas. Todos los
              envíos incluyen un número de seguimiento que te permitirá
              monitorear el estado de tu pedido en tiempo real.
            </p>

            <p>
              Para más información sobre las opciones de envío disponibles en tu
              área o para seleccionar el método que mejor se adapte a tus
              necesidades, visita nuestra página de checkout o contacta a
              nuestro servicio al cliente.
            </p>
          </Acordeon>

          <Acordeon title="Cómo Seguir un Envío">
            <p>
              Una vez que tu pedido haya sido enviado, te proporcionaremos un
              número de seguimiento que te permitirá rastrear el estado de tu
              paquete en tiempo real. A continuación, te explicamos cómo
              utilizar este número para seguir tu envío:
            </p>

            <ol>
              <li>
                <strong>Recibe tu número de seguimiento:</strong> Tras el envío
                de tu pedido, recibirás un correo electrónico de confirmación
                que incluirá el número de seguimiento y el enlace para rastrear
                tu paquete.
              </li>

              <li>
                <strong>Visita el sitio web del transportista:</strong> Accede
                al sitio web del transportista que está manejando tu envío.
                Dependiendo del servicio seleccionado, los transportistas pueden
                ser OCA, Correo Argentino, Andreani, entre otros.
              </li>

              <li>
                <strong>Introduce tu número de seguimiento:</strong> En el sitio
                web del transportista, busca la sección de "Rastreo" o
                "Seguimiento" y introduce el número de seguimiento proporcionado
                en el campo correspondiente.
              </li>

              <li>
                <strong>Consulta el estado de tu paquete:</strong> Una vez
                ingresado el número de seguimiento, podrás ver la ubicación
                actual de tu paquete, el historial de tránsito y la fecha
                estimada de entrega.
              </li>
            </ol>

            <p>
              <strong>Nota:</strong> Si tienes problemas para rastrear tu envío
              o si el número de seguimiento no parece funcionar, no dudes en
              ponerte en contacto con nuestro servicio al cliente. Estamos aquí
              para ayudarte y resolver cualquier inconveniente que puedas tener.
            </p>

            <p>
              Si necesitas más información sobre cómo seguir tu envío o sobre el
              estado de tu pedido, visita nuestra sección de atención al cliente
              en el sitio web o comunícate con nosotros directamente.
            </p>
          </Acordeon>
        </div>
        <div className="form">
          <h1>Ayuda Personalizada</h1>
          <HelpForm onSuccess={handleFormSuccess} />
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
