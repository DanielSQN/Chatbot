var jerarquia = {
    inicio: {
        pregunta: () => {
            DOMConver.append(optionsMSM.espera)
            inicioChat()
            return `¡Buen dia!. Te ire guiando en el transcurso de la conversacion para que obtengas el mejor de los servicios.<br><br>Selecciona "Iniciar conversación" para comenzar.`
        },
        opciones: {
            inicio : {
                value : "Iniciar conversacion",
                continue: () => jerarquia.visualizateTermAndconditions
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.inicio = valor
        },
        status: true
    },
    visualizateTermAndconditions: {
        pregunta: () => {
            return `En el siguiente enlace encontraras los <a style="text-decoration: revert" href="https://www.google.com" target="_blank">terminos y condiciones</a> referentes al Chatbot desarrollado por el grupo de estudiantes del programa "Desarrollo de sistemas de informacion".<br><br>¿Deseas continuar?`
        },
        opciones: {
            si : {
                value : "Si, Continuar",
                continue: () => jerarquia.getNombre
            },
            no : {
                value : "No, Finalizar",
                continue: () => jerarquia.final
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.termAndCond = valor
        },
        status: true
    },
    getNombre: {
        pregunta: () => {
            $('.reply').css('display', 'block')
            $('#comment')[0].value = ''
            $('#comment')[0].focus()
            return `Para continuar con la conversación<br>¿Puedo comenzar tomando tu nombre y apellido por favor?`
        },
        requiredResponse: true,
        respuesta: (valor) => {
            $('.heading-name-meta').text(`${valor} - (Usuario)`)
            allKeys.nombre = valor
        },
        status: true,
        continue: () => jerarquia.bienvenida
    },
    bienvenida: {
        pregunta: () => {
            return `<b>${allKeys.nombre}</b>, es un gusto saludarte hoy!. ¿En que puedo ayudarte?`
        },
        opciones: {
            proceAsesoramiento : {
                value : "Asesoramiento Cloud",
                continue: () => jerarquia.menu
            },
            infoProductos : {
                value : "Informacion Productos Cloud",
                continue: () => jerarquia.infoProducts
            },
            infoProy : {
                value : "Informacion del proyecto (Chabot Cloud)",
                continue: () => jerarquia.infoProyecto
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.bienvenida = valor
        },
        status: true
    },
    infoProyecto: {
        pregunta: () => {
            return `El proyecto <b>Chatbot Cloud</b> es un proyecto desarrollado por estudiantes del programa de <i>"Desarrollo de sistemas de informacion"</i> de la carrera Ingenieria de Sistemas en Ucompensar.<br><br>El objetivo del proyecto es desarrollar un chatbot que permita a los usuarios obtener informacion sobre los productos y servicios mientras se va asesorando con un acompañamiento uno a uno entre el chatbot y el usuario.<br><br>
            <b>Integrantes:</b><br>
            <ul>
                <li>Daniel Santiago Quintero Niño</li>
                <li>Cesar Augusto Cubillos</li>
                <li>Cristhian Fabian Triana</li>
                <li>Brayan Leonardo Sierra</li>
                <li>Sofia Alejandra Blanco</li>
                <li>Karen Jineth Suta Anzola</li>
            </ul>
            <br>
            <b>Docente:</b><br>
            <ul>
                <li>Ing. Jose de los Santos Solorzano Suarez</li>
            </ul>
            <br>
            A continuacion podra seleccionar una de las siguientes opciones para continuar con la conversacion.
            `
        },
        opciones: {
            docu : {
                value : "Documentacion",
                continue: () => jerarquia.docu
            },
            diagram : {
                value : "Diagramas",
                continue: () => jerarquia.diagram
            },
            repo : {
                value : "Repositorio",
                continue: () => jerarquia.repo
            },
            video : {
                value : "Video",
                continue: () => jerarquia.video
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.infoProyecto = valor
        },
        status: true,
    },
    docu: {
        pregunta: () => {
            return `<b>Documentacion</b><br><br>
            En los siguientes enlaces podras encontrar la documentacion del proyecto:
            <ul>
                <li><a style="text-decoration: revert" href="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grh6fgzyjcuv/b/src/o/files%2FDesarrollo%20de%20sistemas%20de%20informaci%C3%B3n%20proyecto%20corte%202%20(1).pdf" target="_blank">Reporte Proyecto</a></li>
                
                <li><a style="text-decoration: revert" href="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grh6fgzyjcuv/b/src/o/files%2FCostos.xlsx" target="_blank">Costos</a></li>
                
                <li><a style="text-decoration: revert" href="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grh6fgzyjcuv/b/src/o/files%2FPreguntas%20ChatBot%20Almacenamiento.xlsx" target="_blank">Preguntas Almacenamiento</a></li>
                
                <li><a style="text-decoration: revert" href="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grh6fgzyjcuv/b/src/o/files%2FPreguntas%20ChatBot%20VM.xlsx" target="_blank">Preguntas Virtual Machine</a></li>
                
                <li><a style="text-decoration: revert" href="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grh6fgzyjcuv/b/src/o/files%2FPreguntas%20ChatBot%20DB.xlsx target="_blank">Preguntas Base de datos</a></li>
            </ul>
            `
        },
        opciones: {
            atras : {
                value : "Atras (informacion proyecto)",
                continue: () => jerarquia.infoProyecto
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.docu = valor
        },
        status: true,
    },
    diagram: {
        pregunta: () => {
            return `<b>Diagramas</b><br><br>
            Durante el desarrollo del proyecto se realizaron los siguientes diagramas:
            <ul>
                <li><a style="text-decoration: revert" href="#" target="_blank">Diagrama de casos de uso</a></li>
                <li><a style="text-decoration: revert" href="#" target="_blank">Diagrama de clases</a></li>
                <li><a style="text-decoration: revert" href="#" target="_blank">Diagrama de secuencia</a></li>
                <li><a style="text-decoration: revert" href="#" target="_blank">Diagrama de actividades</a></li>
                <li><a style="text-decoration: revert" href="#" target="_blank">Diagrama de estados</a></li>
            </ul>
            `
        },
        opciones: {
            atras : {
                value : "Atras (informacion proyecto)",
                continue: () => jerarquia.infoProyecto
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.docu = valor
        },
        status: true,
    },
    repo: {
        pregunta: () => {
            return `<b>Repositiorio</b><br><br>
            En el siguiente enlace podras encontrar el repositorio del proyecto, en el cual podras encontrar el codigo fuente del proyecto:
            <a style="text-decoration: revert" href="https://github.com/DanielSQN/Chatbot" target="_blank">https://github.com/DanielSQN/Chatbot</a>
            `
        },
        opciones: {
            atras : {
                value : "Atras (informacion proyecto)",
                continue: () => jerarquia.infoProyecto
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.docu = valor
        },
        status: true,
    },
    video: {
        pregunta: () => {
            return `<b>Video</b><br><br>
            A conttinuacion podras previsualizar el video del proyecto, o si lo prefieres puedes dirigirte al enlace para verlo en youtube:
            <a style="text-decoration: revert" href="https://youtu.be/y57ANd_GJkI" target="_blank">Ver en youtube</a>
            `
        },
        url: "https://www.youtube.com/embed/y57ANd_GJkI",
        opciones: {
            atras : {
                value : "Atras (informacion proyecto)",
                continue: () => jerarquia.infoProyecto
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.docu = valor
        },
        status: true,
    },
    infoProducts: {
        pregunta: () => {
            return `De acuerdo, te mostrare la informacion de los productos que ofrecemos.<br><br>¿Que producto deseas conocer?`
        },
        img : "https://miro.medium.com/max/1400/0*o-mZMn_sxmtktAMz",
        opciones: {
            proceAsesoramiento : {
                value : "Microsoft Azure",
                continue: () => jerarquia.MAzure
            },
            infoProductos : {
                value : "Google Cloud",
                continue: () => jerarquia.GCloud
            },
            infoProy : {
                value : "Amazon Web Services",
                continue: () => jerarquia.Aws
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            },
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.infoProducts = valor
        },
        status: true
    },
    MAzure: {
        pregunta: () => {
            return `<b>Microsoft Azure</b> es una plataforma de computación en la nube de Microsoft. Azure ofrece una amplia variedad de servicios de computación en la nube, incluidos análisis, almacenamiento, redes, bases de datos, Internet de las cosas (IoT), inteligencia artificial y contenedores. Estos servicios se pueden utilizar en conjunto o por separado, y se pueden administrar a través de una interfaz de línea de comandos, una interfaz de usuario web o una API.
            <br><br>
            <b>¿Deseas conocer mas sobre este producto?</b><br>
            Ingresa a la siguiente pagina: <a style="text-decoration: revert" href="https://azure.microsoft.com/es-es/" target="_blank">Microsoft Azure</a>`
        },
        img : "https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/10/cloud-computing-azure-00.jpg",
        opciones: {
            verProduct : {
                value : "Atras (Ver productos)",
                continue: () => jerarquia.infoProducts
            },
            returnMenu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.infoProduct = valor
        },
        status: true
    },
    GCloud: {
        pregunta: () => {
            return `<b>Google Cloud</b> es una plataforma de computación en la nube de Google. Tanto si tu negocio ya está inmerso en la transformación digital como si aún se encuentra en la etapa inicial, Google Cloud puede ayudarte a hacer frente a los retos más difíciles. <b>Agiliza tu transformación digital</b> con una plataforma de computación en la nube que ofrece una amplia gama de servicios de IA, aplicaciones, almacenamiento y análisis.
            <br><br>
            <b>¿Deseas conocer mas sobre este producto?</b><br>
            Ingresa a la siguiente pagina: <a style="text-decoration: revert" href="https://cloud.google.com/" target="_blank">Google Cloud</a>`
        },
        img : "https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/10/cloud-computing-google.jpg",
        opciones: {
            verProduct : {
                value : "Atras (Ver productos)",
                continue: () => jerarquia.infoProducts
            },
            returnMenu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.infoProduct = valor
        },
        status: true
    },
    Aws: {
        pregunta: () => {
            return `<b>Amazon Web Services</b>. Independientemente de si necesita potencia de cómputo, almacenamiento para bases de datos, entrega de contenido u otra funcionalidad, AWS cuenta con los servicios necesarios para ayudarlo a crear aplicaciones sofisticadas con mayor flexibilidad, escalabilidad y fiabilidad 
            <br><br>
            <b>¿Deseas conocer mas sobre este producto?</b><br>
            Ingresa a la siguiente pagina: <a style="text-decoration: revert" href="https://aws.amazon.com/es/" target="_blank">Amazon Web Services</a>`
        },
        img : "https://linube.com/blog/wp-content/uploads/amazon-web-services.jpg",
        opciones: {
            verProduct : {
                value : "Atras (Ver productos)",
                continue: () => jerarquia.infoProducts
            },
            returnMenu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.infoProduct = valor
        },
        status: true
    },
    menu: {
        pregunta: () => {
            return `Teniendo en cuenta nuestros productos en comparación (<a href="https://azure.microsoft.com/es-es/" target="_blank">Microsoft Azure</a>,
                <a href="https://cloud.google.com/" target="_blank">Google Cloud</a> y
                <a href="https://aws.amazon.com/es/" target="_blank">Amazon Web Service</a>
                )<br><br>¿Qué estas buscando?`
        },
        opciones: {
            Almacenamiento : {
                value : "Almacenamiento",
                continue: () => jerarquia.almacenamiento
            },
            MaquinaVirtual : {
                value : "Maquina Virtual",
                continue: () => jerarquia.maquinaVirtual
            },
            BaseDatos : {
                value : "Base de Datos",
                continue: () => jerarquia.baseDatos
            },
            menu : {
                value : "Retornar al menu",
                continue: () => jerarquia.bienvenida
            },
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.menu = valor
        },
        status: true
    },
    maquinaVirtual: {
        pregunta: () => {
            return `El camino jeraquico de maquina virtual actualmente no se encuentra disponible, por favor, selecciona otra opción`
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.menu
    },
    baseDatos: {
        pregunta: () => {
            return `El camino jeraquico de base de datos actualmente no se encuentra disponible, por favor, selecciona otra opción`
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.menu
    },
    almacenamiento: {
        pregunta: () => {
            return `¡Muy bien! ¿Cuánto almacenamiento vas a necesitar?`
        },
        opciones: {
            uno : {
                value : "100 GB",
                continue: () => jerarquia.confirmAlma
            },
            dos : {
                value : "250 GB",
                continue: () => jerarquia.confirmAlma
            },
            tres : {
                value : "500 GB",
                continue: () => jerarquia.confirmAlma
            },
            cuatro : {
                value : "750 GB",
                continue: () => jerarquia.confirmAlma
            },
            cinco : {
                value : "1000 GB",
                continue: () => jerarquia.confirmAlma
            },
            seis : {
                value : "5000 GB",
                continue: () => jerarquia.confirmAlma
            },
            siene : {
                value : "10000 GB",
                continue: () => jerarquia.confirmAlma
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.cantidad_almacenamiento = valor
        },
        status: true
    },
    confirmAlma: {
        pregunta: () => {
            return `¿Requieres ${allKeys.cantidad_almacenamiento} de almacenamiento?`
        },
        opciones: {
            Si : {
                value : "!Asi es¡",
                continue: () => jerarquia.continueAlmac
            },
            No : {
                value : "No, debo cambiar mi eleccion",
                continue: () => jerarquia.almacenamiento
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.confirmAlmacenamiento = valor
        },
        status: true
    },
    continueAlmac: {
        pregunta: () => {
            return `Esta bien, ahora me puedes decir si quieres servicio Standard o Premium. <br><br>La diferencia esta en los servicios adicionales que ofrece el servicio Premium como licencias, aplicaciones de escritorio, etc. (Depende de cada proveedor)`
        },
        opciones: {
            std : {
                value : "Standard",
                continue: () => jerarquia.confirmStandard
            },
            prm : {
                value : "Premium",
                continue: () => jerarquia.confirmPremium
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.tipoServAlmacenamiento = valor
        },
        status: true
    },
    confirmStandard: {
        pregunta: () => {
            return `¡Muy bien yo tambien prefiero el servicio Standard!`
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.msmStandard
    },
    confirmPremium: {
        pregunta: () => {
            return `¡Que buena desición, el servicio Premium es lo mejor!`
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.msmPremium
    },
    msmStandard: {
        pregunta: () => {
            // return `¡Excelente, teniendo en cuenta que quieres un servicio de almacenamiento Standard de ${allKeys.cantidad_almacenamiento}.<br>Te recomiendo <b>Azure de Microsoft</b>, este tiene un precio de U$ 0,02 por GB lo que significa que te costara U$ XXXX por un mes`
            return bestRecomendacionAlmacenamiento('Standard', allKeys.cantidad_almacenamiento)
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.continuacionChat
    },
    msmPremium: {
        pregunta: () => {
            // return `¡Muy bien! Ya que has elegido ${allKeys.cantidad_almacenamiento} y con un servicio Premium.<br>Te recomendare <b>Azure de Microsoft</b>, que tiene un costo de U$ 0,15 por GB y una tarifa al mes de U$XXX`

            return bestRecomendacionAlmacenamiento('Premium', allKeys.cantidad_almacenamiento)
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.continuacionChat
    },
    continuacionChat: {
        pregunta: () => {
            return `Finalizaste la configuracion para almacenamiento <br>¿Te ayudo en algo mas?`
        },
        opciones: {
            si : {
                value : "Si, Por favor volver al menu",
                continue: () => jerarquia.menu
            },
            no : {
                value : "No, Gracias por tu servicio",
                continue: () => jerarquia.final
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.continuacionChat = valor
        },
        status: true
    },
    final: {
        pregunta: () => {
            return `<b>${
                    allKeys.nombre
                    ? allKeys.nombre
                    : "Usuario Anonimo"
                    }</b>, el chat se ha finalizado con exito, gracias por usar nuestros servicios <br><br>Esperamos que te haya sido de ayuda, si tienes alguna duda o sugerencia puedes escribirnos a nuestro correo: <a href='mailto:dsantiagoquintero@ucompensar.edu.co'>dsantiagoquintero@ucompensar.edu.co</a>`
        },
        opciones: {
            si : {
                value : "Iniciar chat nuevamente",
                continue: () => jerarquia.inicio
            },
            no : {
                value : "Enviar chat por correo",
                continue: () => jerarquia.sendMail
            }

        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.inicioChat = valor
        },
        status: true
    },
    sendMail: {
        pregunta: () => {
            $('.reply').css('display', 'block')
            $('#comment')[0].value = ''
            $('#comment')[0].focus()
            return `Por favor ingresa tu correo para enviarte la informacion`
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.mail = valor
        },
        status: true,
        continue: () => jerarquia.sendMailConfirm
    },
    sendMailConfirm: {
        pregunta: () => {
            return `¿Es correcto el correo <b>${allKeys.mail}</b>?`
        },
        opciones: {
            si : {
                value : "Si, es correcto",
                continue: () => jerarquia.sendMailConfirm2
            },
            no : {
                value : "No, es incorrecto",
                continue: () => jerarquia.sendMail
            }
        },
        requiredResponse: true,
        respuesta: (valor) => {
            allKeys.confirmMail = valor
        }
    },
    sendMailConfirm2: {
        pregunta: () => {
            // call send Email
            console.log('Llamando a la funcion de enviar correo');
            return `La informacion se ha enviado a <b>${allKeys.mail}</b>`
        },
        requiredResponse: false,
        status: true,
        continue: () => jerarquia.gracias
    },
    gracias: {
        pregunta: () => {
            return `Gracias por usar nuestros servicios`
        },
        requiredResponse: false,
        status: false
    }
}