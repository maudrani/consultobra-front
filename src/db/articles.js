import { categories } from "./constants/categories"

export const articles = [

    {
        id: 1,
        header_img: 'img/consultobra/blog/articles/article-1/header.jpg',
        title: '¿Cuánto va a costar mi casa?',
        subtitle: `Muchos profesionales y constructores escuchan a diario esta pregunta, que desearíamos que  sea sencilla de responder pero que lamentablemente no lo es por muchos motivos`,
        html_content:
            `Muchos profesionales y constructores escuchan a diario esta pregunta, que desearíamos que  sea sencilla de responder pero que lamentablemente no lo es por muchos motivos, porque a  pesar de poder conocer el listado completo de materiales que llevaría el edificio y otros gastos,  la inflación los afectaría de forma desigual y esto hace que el presupuesto brindado al inicio no  sea ajustable a futuro, por lo tanto, hacer el presupuesto dividiéndolo en partes  correspondiéndolo con las distintas etapas constructivas y cada uno de ellos con validez  limitada sería una solución más sana.
        <br />
        <br />
        Parece ser que lo importante es conocer un valor, ya mismo, sobre cuánto va a costar, pero es  transcendental aclarar que los números y los tiempos que se manejan en esta industria hacen  que los presupuestos sean justamente eso, supuestos previos de lo que va a costar, y que sirve  solamente a modo orientativo para que el comitente pueda deliberar si puede afrontar una  inversión de estas características.
        <br />
        <br />
        Casi todas las veces se da que el presupuesto no coincide con el valor final del inmueble y esto  se debe a diversos factores (y saquemos del juego a la inflación), estos factores pueden ser,  entre otros, tomas de decisiones que hagan cambiar la obra respecto de lo previsto,  insuficiencia y/u obsolescencia material y la necesidad de cambiar de tecnología, cambios de  profesionales o de fuerza productiva, condiciones laborales, problemas de logística, diferencias  en la variación del precio entre un material (uno de exportación y otro realizado en nuestro  país), etc., y un sinfín de elementos que terminan dificultando las cosas y que no dependen de  nosotros (profesionales, constructores o comitentes).
        <br />
        <br />
        ¿Cuál es el objetivo, entonces, de conocer el precio de un edificio si no es posible que sea  exacto? El objetivo hacer que los números nos hablen y entender si somos capaces de afrontar  una inversión, estudiar la viabilidad de la idea, saber si seremos capaces de desembolsar lo que  la inversión requiera durante el tiempo que dure.
        <br />
        <br />
        ¿Cuándo nos sirve un presupuesto detallado? Cuando se está ejecutando o por ejecutar la  obra y se lo hace por etapas claramente definidas en un marco de tiempo, y con actividades e insumos bien determinados; pensar en un presupuesto detallado desde las fundaciones hasta  las terminaciones está muy bien para obtener un costo superficial final aproximado del edificio  a realizar, pero no tiene demasiado sentido en obra, si entre las fundaciones y las  terminaciones habrá mucha diferencia de tiempo, y tampoco sirve acelerar la obra para  pelearle a la inflación porque significa mucho desembolso de dinero en poco tiempo, mayor  cantidad de insumos y personal dentro de los mismos metros cuadrados que se vuelven  difíciles de controlar, grandes posibilidades de extravíos de materiales y cortocircuitos entre  rubros de la construcción que hará que el presupuesto detallado no refleje la realidad de obra.
        <br />
        <br />
        En resumen, es poco realista pretender conocer cuánto costará un edificio al final de la  inversión, son muchísimos los factores que afectan al precio final; el precio a día de hoy  solamente es estimativo en el presente.
        <br />
        <br />`,
        author: { id: 1, name: 'Gustavo Lazcano', description: 'Arquitecto', img_profile: 'img/consultobra/faces/gustavo-lazcano.jpeg' },
        date_created: '',
        category: categories[0],
        sub_category: 'Arquitectura',
        tags: ['construcción', 'arquitectura', 'costo', 'presupuesto', 'hogar']
    },

    {
        id: 2,
        header_img: 'img/consultobra/blog/articles/article-2/header.jpg',
        title: 'La importancia del vidrio de nuestras aberturas',
        subtitle: `Existen varios tipos de vidrio, pero con conocer la diferencia entre los tres más comunes será suficiente.`,
        html_content:
            `Existen varios tipos de vidrio, pero con conocer la diferencia entre los tres más comunes será suficiente:
        <br />
        <br />
        - Vidro Común, Flotado o “Float”: cuando se rompe, se despedaza en partes que  suelen tener peligrosidad mortal, por lo cual se desaconseja totalmente para  aberturas de edificios.
        <br />
        <br />
        - Vidrio Laminado: no es más que la conformación de dos vidrios comunes  unidos por una lámina que le confiere resistencia y evita que las partes se  separaran entre sí al romperse, disminuyendo el peligro.
        <br />
        <br />
        - Vidrio Templado: son vidrios más resistentes que cuando se rompen estallan  en partes pequeñas que suelen ser menos peligrosas que la forma en que se  parte un vidrio común.
        <br />
        <br />
        Si dividimos el precio final del vidrio en su vida útil podremos conocer el costo de dicho  vidrio por día de vida útil y sabremos que la diferencia en precio entre uno u otro no  hace la diferencia económica al proyecto, como si lo hace en seguridad para el  usuario.
        <br />
        <br />
        Como consejo, es necesario que cuando encarguemos carpinterías con vidrio,  exijamos que sea tipo laminado o templado ya que nuestra seguridad lo vale.
        <br />
        <br />`
        ,
        author: { id: 1, name: 'Gustavo Lazcano', description: 'Arquitecto', img_profile: 'img/consultobra/faces/gustavo-lazcano.jpeg' },
        tags: ['diseño', 'arquitectura', 'info', 'hogar'],
        date_created: '',
        category: categories[0],
        sub_category: 'Arquitectura',
    },

    {
        id: 3,
        header_img: 'img/consultobra/blog/articles/article-3/header.jpg',
        title: '¿Que es el precio por metro cuadrado, como hacerlo y cuando sirve uno detallado?',
        subtitle: `El precio por metro cuadrado (o costo superficial) representa al costo de una edificación dividido por  su superficie cubierta construida ($/m2). Una vez que se ha concluido una edificación, se divide lo que ha  costado hacerla en la superficie que cubre.`,
        html_content:
            `Si nos basamos en la suposición de que dos edificaciones, similares por su función, características técnicas y
            estética, deberían tener un costo proporcionado a sus dimensiones, entonces podemos suponer que ambas
            tendrán un costo análogo (dentro del mismo marco temporal y de ciertos límites). Debido a que ambas
            edificaciones son semejantes, hacer un presupuesto utilizando el costo por metro cuadrado de una
            edificación análoga se denomina presupuesto por analogía. Cabe aclarar que este dato solo sirve para
            edificaciones similares, lo que quiere decir que un tinglado no va a tener el mismo costo superficial que una
            vivienda unifamiliar, sin embargo, se puede suponer que dos tinglados similares pueden tener un costo
            análogo por unidad de superficie construida. El presupuesto por analogía se hace para concluir rápidamente
            dos cosas:
            <br />
            <br />
            - La primera, cuanta superficie seré capaz de construir a la fecha, económicamente hablando, para
            poder limitar la superficie de la edificación a la máxima admisible.
            <br />
            - La segunda, hacer números rápidos para determinar viabilidades de inversión y capacidad de
            retorno.
            <br />
            <br />
            Este tipo de presupuesto suele utilizarse en la etapa de gestación de un proyecto, en la etapa de la
            idea, cuando no se tiene un despiece de la edificación, pero se quiere saber aproximadamente cuánto dinero
            se necesitará para realizarla. Es el puntapié inicial para iniciar un proyecto.
            <br />
            <br />
            Además de este tipo de presupuesto, suelen existir presupuestaciones por elementos que dividen al
            edificio en partes fácilmente reconocibles y cuyas partes suelen tener costos más o menos definidos; por
            ejemplo, techo, paredes, piso, etc. Si bien no hay una definición clara, puede llegar a ser más acertado que el
            presupuesto por analogía a la hora de acercarnos a un valor.
            <br />
            <br />
            Existen otras presupuestaciones que suelen hacerse como la presupuestación global, en la cual no  hay forma alguna de seguir sus avances ya que el precio está aplicado al producto terminado y las  estimaciones de avances suelen hacerse “en el aire” con un criterio de fe en quien presupuesta que, hasta  que no ha entregado el producto final, no se puede considerar un porcentaje de avance más que el visual.
            <br />
            <br />
            Un presupuesto detallado es un listado de ítems que representan trabajos terminados entregables,  los cuales, se presupone, tendrán un costo y que al final se suman. Como es de esperar, una vez concluido el  proyecto completo o la etapa de proyecto, se puede hacer un despiece del edificio o de la parte que se está  por presupuestar y calcular las medidas de dichas partes, lo que se conoce como cómputo métrico o  simplemente “cómputo”, y que suele hacer una persona idónea en el tema (como por ejemplo el arquitecto,  un ingeniero, o el mismo constructor).
            <br />
            <br />
            El objetivo del cómputo métrico es poner en un listado las diferentes piezas que componen la  edificación junto a sus cantidades para calcular el costo de cada una de ellas y poder hacer un seguimiento  futuro de obra. Las partes pueden ser medibles de forma lineal, superficial, volumétrica o por unidad y  tienen un costo referido a la forma de medirlas, por ejemplo, si el elemento es de desarrollo superficial como  un techo, su costo suele estar expresado en $/m2(dinero/unidad superficial) dado que la unidad para medir  es la superficie. Un zócalo por ejemplo tiene un desarrollo lineal, por lo tanto, su costo será expresado en  $/ml (dinero/unidad lineal). Lo que nos dice ese costo es que dicho ítem cuesta una cierta cantidad de dinero  por cada unidad de medida realizado; es por eso que se lo llama costo unitario, al cual se llega mediante  análisis de costos unitarios rigurosamente realizados.
            <br />
            <br />
            En Consultobra contamos con una tabla de costos de la construcción que podrá consultar en  cualquier momento como referencia, que están calculados mediante técnicas de análisis de costos basado en
            actividades que responden al rendimiento obrero, es decir, al tiempo de trabajo estimado para cada  actividad, ya que la forma que tiene la Unión Obrera de la Construcción de la República Argentina (UOCRA) de asignar salarios a constructores es mediante la hora de trabajo. Estos análisis tienen en cuenta además una región geográfica (en este caso el NOA) ya que las condiciones de trabajo y costos de insumos se  tomaron para esta región.
            <br />
            <br />
            Cuando el cómputo métrico está realizado, es decir, cuando el listado de partes con sus cantidades se  ha hecho, solo basta multiplicar esas cantidades por el costo de las partes para calcular el valor final de la  edificación. En Consultobra contamos también con una sección de presupuesto, con la finalidad que los  usuarios puedan realizar presupuestos detallados de sus obras, en los cuales es posible obtener también el  costo superficial de la edificación presupuestada.  

            <br />
            <br />
            Esperamos sinceramente que estas herramientas le sean de utilidad. `
        ,
        author: { id: 1, name: 'Gustavo Lazcano', description: 'Arquitecto', img_profile: 'img/consultobra/faces/gustavo-lazcano.jpeg' },
        tags: ['construcción', 'arquitectura', 'info', 'herramientas'],
        date_created: '',
        category: categories[1],
        sub_category: 'Arquitectura',
    },

    {
        id: 4,
        header_img: 'img/consultobra/blog/articles/article-4/header.jfif',
        title: '¿Quisiera hacer una pared exterior, que ladrillo utilizo?',
        subtitle: `Para responder a esta pregunta habrá que estudiar cada caso. No hay un mampuesto que  tenga todos los beneficios, esto depende de lo que queramos hacer y cada caso presenta su  beneficio en función de lo que se busca.`,
        html_content:
            `Para responder a esta pregunta habrá que estudiar cada caso. No hay un mampuesto que  tenga todos los beneficios, esto depende de lo que queramos hacer y cada caso presenta su  beneficio en función de lo que se busca.
            <br />
            <br />
            Antes se construía con ladrillos cerámicos macizos. Quedan muy estéticos a la vista y son  paredes nobles; todavía las vemos en algunos ingenios hechos por los ingleses en entre el XIX y  XX. Una de sus principales contras es la cantidad de ladrillos insumidos por metro cuadrado de  pared ejecutada y por lo tanto la cantidad de juntas, cemento, cal y arena utilizado y ni hablar  de la mano de obra. Resultó una tecnología duradera que a día de hoy funciona, si buscamos vida útil, basta ver la vieja arrocera de Concepción Tucumán hecha con estas joyitas. Lamentablemente la funcionalidad no lo es todo, también la economía, el medio ambiente, la  comodidad, etc., influyen.
            <br />
            <br />
            Después salió el ladrillo hueco como alternativa no portante que cerraba vanos y también los  hay portantes, utilizan menos material y comprometen así al medio ambiente un poco menos,  las paredes resultan más livianas y por lo tanto cargan menos al suelo, con lo cual se ahorra en  cimiento. Al tener menos masa, el almacenamiento de calor es menor que en la pared de  macizos. El tamaño de los ladrillos superó considerablemente al ladrillo común debido a su  bajo peso; si con el primero en una pared de 20 necesitábamos 84 ladrillos por metro  cuadrado respectivamente, ahora, con los ladrillos huecos necesitaríamos 17 y por lo tanto  menos mano de obra y material para pegarlos.
            <br />
            <br />
            Pero el problema del puente térmico no había sido resuelto por un solo material, se  necesitaron crear paredes dobles o multicapa para darle solución a esto. Una de las soluciones  más prácticas es el SATE (Sistema de aislamiento térmico exterior) que consiste en aplicar una  capa de poliestireno revocado sobre la pared ya existente. La practicidad de este sistema está  en que puede ser aplicado a paredes que no necesariamente han sido construidas pensando  en ser asiladas sino aplicado a algo que ya tenemos; reduce al máximo el paso del calor y por  consiguiente el almacenamiento de calor en la masa de la pared y por lo tanto en verano no  entra el calor al edificio como lo hacía antes a través del muro y en invierno se almacena en el  interior y reduce la pérdida por contacto con superficie fría.
            <br />
            <br />
            En la actualidad se está utilizando mucho el ladrillo HCCA (Hormigón Celular Curado en  Autoclave) con diferentes espesores según la necesidad del cliente o diseño del profesional y  medidas laterales de 25 x 50 (en centímetros) y 20 x 60, según el fabricante. Su densidad  relativamente baja posibilita hacer piezas grandes manipulables por un operario. El beneficio  consecuente es que entran menos ladrillos por metro cuadrado, cerca de 8 a 8,5 y se los suele  pegar con pegamento especial ya que su forma tan prolija permite hacer paredes a plomo y  que, si se lo ejecuta bien, no necesariamente necesitarán revoque grueso (otro ahorro).  Además, su composición le otorga una transmitancia térmica baja, con lo cual el paso de calor  es muy reducido; al tener partículas de aire en el interior (ya que es similar a la piedra pómez si  se lo corta), tiene bajo almacenamiento de calor y, en consecuencia, a futuro permite que el  calor de verano no sea tan agresivo como lo es con otros materiales envolventes y que no sea  necesario hacer un SATE para reducir el paso del calor, haciéndose apto para paredes  exteriores.
            <br />
            <br />
            La respuesta sobre que ladrillo utilizar podría encontrarse en el para qué será el elemento que  estoy por construir, es para cerramiento vertical exterior o solo una división interior, cuanto  esfuerzo debe soportar, tengo que colgar en ellas cosas pesadas etc., será para una piscina,
            porque en cada una de esas respuestas estará la tecnología óptima y más eficiente para cada  caso; una medianera, suele hacerse de mampostería maciza encadenada, una división interior  se puede hacer con mampostería hueca. Se hacen divisiones exteriores también con estos  materiales, pero por una cuestión térmica en edificios de vivienda se están utilizando mucho  los mampuestos de HCCA o aislamientos con SATE.
            <br />
            <br />
            Es fundamental que también podamos pensar a largo plazo. Es así que, si hablamos de  eficiencia térmica, lo que ahorramos hoy en hacer una pared nos va a costar toda la vida útil en gastos de energía eléctrica para sacar el calor que ha entrado a través de ella, si el calor  vuelve a ingresar en el edificio a través de sus componentes, será como sacar agua de un bote  pinchado. Si no utilizamos elementos correctos para cada caso, veamos la forma de eficientizar  nuestros edificios ya construidos porque, como ya vemos, el daño que le hacemos al  medioambiente nos lo estamos haciendo a nosotros mismos. 
            <br />
            <br />`
        ,
        author: { id: 1, name: 'Gustavo Lazcano', description: 'Arquitecto', img_profile: 'img/consultobra/faces/gustavo-lazcano.jpeg' },
        tags: ['construcción', 'arquitectura', 'info', 'herramientas'],
        date_created: '',
        category: categories[1],
        sub_category: 'Arquitectura',
    },


]