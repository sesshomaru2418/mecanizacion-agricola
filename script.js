// Datos predeterminados de las herramientas - CORREGIDO PARA USAR IMÁGENES LOCALES
const herramientasPredeterminadas = [
    {
        id: 'tractor',
        nombre: 'Tractor Agrícola',
        imagen: 'imagen/Tractor Agrícola.jpeg',
        descripcion: 'Máquina autopropulsada utilizada para arrastrar o empujar remolques, aperos u otras máquinas agrícolas.',
        caracteristicas: [
            'Potencia: 50-500 HP',
            'Tracción: 2WD o 4WD',
            'Transmisión: Mecánica o hidrostática',
            'Implementos: Toma de fuerza, enganche de tres puntos'
        ],
        usos: 'Labranza, siembra, transporte, cosecha, aplicación de productos fitosanitarios.'
    },
    {
        id: 'arado',
        nombre: 'Arado',
        imagen: 'imagen/arado.jpg',
        descripcion: 'Herramienta utilizada en agricultura para preparar el suelo antes de la siembra mediante la inversión y fragmentación de la capa superficial.',
        caracteristicas: [
            'Arado de vertedera: Para suelos pesados',
            'Arado de discos: Para suelos duros y secos',
            'Arado de cincel: Para labranza vertical',
            'Arado rotativo: Para preparación intensiva'
        ],
        usos: 'Remover y airear el suelo, enterrar residuos de cosechas anteriores, control de malezas.'
    },
    {
        id: 'cosechadora',
        nombre: 'Cosechadora',
        imagen: 'imagen/cosechadora.jpg',
        descripcion: 'Máquina que realiza la recolección de productos agrícolas de forma mecanizada, integrando corte, trilla y limpieza en una sola operación.',
        caracteristicas: [
            'Cabezal de corte',
            'Sistema de trilla',
            'Mecanismo de limpieza',
            'Tolva de almacenamiento'
        ],
        usos: 'Cosecha de cereales (trigo, maíz, arroz), leguminosas y otros cultivos extensivos.'
    }
];

// Datos de las buenas prácticas - AMPLIADO
const buenasPracticas = [
    {
        titulo: 'Mantenimiento Preventivo',
        descripcion: 'Programa sistemático de revisiones para garantizar el funcionamiento óptimo y seguro de la maquinaria agrícola.',
        icono: 'fas fa-tools',
        puntos: [
            'Verificación diaria de niveles de fluidos (aceite, combustible, refrigerante, hidráulico)',
            'Inspección visual de neumáticos (presión, desgaste, daños)',
            'Lubricación programada de partes móviles y puntos de engrase',
            'Revisión exhaustiva de sistemas de seguridad (frenos, luces, señales acústicas)',
            'Calibración periódica de sistemas de aplicación y dosificación',
            'Limpieza profunda después de cada jornada de trabajo',
            'Cambio de filtros según horas de operación recomendadas',
            'Ajuste y tensado de correas y cadenas de transmisión',
            'Verificación de sistemas eléctricos y baterías',
            'Documentación de mantenimientos en bitácora de la máquina'
        ],
        frecuencia: 'Diario / Semanal / Mensual',
        beneficios: [
            'Mayor vida útil de la maquinaria',
            'Reducción de costos de reparación',
            'Minimización de tiempos de inactividad',
            'Operación más segura y confiable'
        ]
    },
    {
        titulo: 'Equipo de Protección Personal (EPP)',
        descripcion: 'Conjunto de elementos esenciales para proteger al operario de riesgos asociados a la maquinaria agrícola.',
        icono: 'fas fa-hard-hat',
        puntos: [
            'Casco de seguridad certificado para protección contra impactos',
            'Gafas protectoras anti-empañantes y resistentes a impactos',
            'Guantes de cuero o material resistente para manipulación',
            'Calzado de seguridad con puntera de acero y suela antideslizante',
            'Protectores auditivos con nivel de atenuación adecuado',
            'Ropa de alta visibilidad con material reflectante',
            'Mascarilla respiratoria para polvo y productos químicos',
            'Arnés de seguridad para trabajos en altura',
            'Overol resistente a productos químicos y desgarros',
            'Botiquín de primeros auxilios actualizado y accesible'
        ],
        frecuencia: 'Uso obligatorio durante toda la operación',
        beneficios: [
            'Prevención de lesiones graves',
            'Cumplimiento normativo legal',
            'Mejor concentración del operario',
            'Reducción de enfermedades profesionales'
        ]
    },
    {
        titulo: 'Operación Segura',
        descripcion: 'Protocolos y técnicas para el manejo responsable y seguro de maquinaria agrícola en diferentes condiciones.',
        icono: 'fas fa-user-shield',
        puntos: [
            'Conocimiento completo de controles y funciones antes de operar',
            'Mantenimiento de velocidad segura según condiciones del terreno',
            'Prohibición absoluta de pasajeros adicionales en la cabina',
            'Apagado completo del motor antes de ajustes o mantenimiento',
            'Mantenimiento de distancia segura en pendientes y zanjas',
            'Respeto estricto a señales de advertencia y delimitaciones',
            'Planificación detallada de rutas de trabajo y áreas de maniobra',
            'Comunicación constante con personal de apoyo en campo',
            'Verificación de puntos ciegos antes de movimientos',
            'Procedimientos establecidos para emergencias y contingencias'
        ],
        frecuencia: 'Aplicación constante en todas las operaciones',
        beneficios: [
            'Reducción significativa de accidentes',
            'Optimización del rendimiento operativo',
            'Preservación del medio ambiente',
            'Mejora en la calidad del trabajo'
        ]
    },
    {
        titulo: 'Procedimientos de Emergencia',
        descripcion: 'Protocolos establecidos para responder eficazmente ante situaciones de riesgo o accidentes.',
        icono: 'fas fa-first-aid',
        puntos: [
            'Conocimiento de ubicación y uso de extintores',
            'Procedimiento de evacuación en caso de incendio',
            'Protocolo de primeros auxilios para lesiones comunes',
            'Números de emergencia visibles y accesibles',
            'Procedimiento de rescate en espacios confinados',
            'Protocolo para derrames de combustibles o químicos',
            'Plan de comunicación en caso de accidentes',
            'Simulacros regulares de emergencia',
            'Kit de derrames químicos disponible',
            'Procedimiento de reporte de incidentes'
        ],
        frecuencia: 'Revisión trimestral y simulacros semestrales',
        beneficios: [
            'Respuesta rápida y organizada',
            'Minimización de daños y lesiones',
            'Cumplimiento de normativas',
            'Mayor confianza del personal'
        ]
    },
    {
        titulo: 'Almacenamiento y Transporte Seguro',
        descripcion: 'Buenas prácticas para el almacenamiento y transporte seguro de maquinaria e implementos agrícolas.',
        icono: 'fas fa-warehouse',
        puntos: [
            'Estacionamiento en superficie nivelada y estable',
            'Bloqueo de ruedas y implementos en almacenamiento',
            'Protección contra condiciones climáticas adversas',
            'Orden y limpieza en áreas de almacenamiento',
            'Señalización clara de áreas de riesgo',
            'Procedimientos seguros de carga y descarga',
            'Verificación de amarres y sujeciones en transporte',
            'Respeto de límites de peso y dimensiones',
            'Plan de rutas para transporte de maquinaria',
            'Inspección pre-transporte de vehículos y equipos'
        ],
        frecuencia: 'Aplicación en cada operación de almacenamiento/transporte',
        beneficios: [
            'Prevención de daños a la maquinaria',
            'Reducción de riesgos en logística',
            'Optimización del espacio de almacenamiento',
            'Cumplimiento de regulaciones de transporte'
        ]
    },
    {
        titulo: 'Gestión de Combustibles y Lubricantes',
        descripcion: 'Protocolos seguros para el manejo, almacenamiento y disposición de combustibles y lubricantes.',
        icono: 'fas fa-gas-pump',
        puntos: [
            'Almacenamiento en áreas ventiladas y señalizadas',
            'Uso de recipientes aprobados y etiquetados',
            'Prohibición de fumar en áreas de almacenamiento',
            'Equipo contra incendios disponible y verificado',
            'Procedimiento para derrames y contingencias',
            'Disposición adecuada de lubricantes usados',
            'Control de inventario y rotación de productos',
            'Capacitación en manejo seguro de combustibles',
            'Inspección regular de tanques y tuberías',
            'Documentación de movimientos de combustibles'
        ],
        frecuencia: 'Control diario y auditorías mensuales',
        beneficios: [
            'Prevención de incendios y explosiones',
            'Protección ambiental',
            'Optimización de costos de combustible',
            'Cumplimiento normativo ambiental'
        ]
    }
];

// Datos predeterminados del quiz
const preguntasQuizPredeterminadas = [
    {
        pregunta: '¿Cuál es la función principal de un arado?',
        opciones: [
            { texto: 'Transportar productos', correcta: false },
            { texto: 'Preparar el suelo para la siembra', correcta: true },
            { texto: 'Aplicar pesticidas', correcta: false },
            { texto: 'Cosechar cultivos', correcta: false }
        ]
    },
    {
        pregunta: '¿Qué elemento de protección es esencial al operar un tractor?',
        opciones: [
            { texto: 'Máscara de oxígeno', correcta: false },
            { texto: 'Chaleco reflectante', correcta: false },
            { texto: 'Casco de seguridad', correcta: true },
            { texto: 'Guantes de látex', correcta: false }
        ]
    },
    {
        pregunta: '¿Cuál es el propósito de una sembradora?',
        opciones: [
            { texto: 'Eliminar malezas', correcta: false },
            { texto: 'Fertilizar el suelo', correcta: false },
            { texto: 'Regar los cultivos', correcta: false },
            { texto: 'Colocar semillas a profundidad y distancia específicas', correcta: true }
        ]
    }
];

// Variables globales
let herramientas = [];
let preguntasQuiz = [];

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del localStorage
    cargarDatosDesdeStorage();
    
    // Inicializar la aplicación
    inicializarAplicacion();
});

// Función para cargar datos desde localStorage - CORREGIDA
function cargarDatosDesdeStorage() {
    // Cargar herramientas
    const herramientasStorage = JSON.parse(localStorage.getItem('herramientas')) || [];
    
    // Asegurar que las herramientas del administrador también usen rutas locales
    const herramientasStorageCorregidas = herramientasStorage.map(herramienta => {
        // Si la imagen es una URL externa, convertirla a ruta local
        if (herramienta.imagen && herramienta.imagen.startsWith('http')) {
            const nombreArchivo = herramienta.id + '.jpg';
            return {
                ...herramienta,
                imagen: 'imagen/' + nombreArchivo
            };
        }
        return herramienta;
    });
    
    herramientas = [...herramientasPredeterminadas, ...herramientasStorageCorregidas];
    
    // Cargar evaluaciones - CÓDIGO CORREGIDO
    const evaluacionesStorage = JSON.parse(localStorage.getItem('evaluaciones')) || [];
    
    // Convertir las evaluaciones del administrador al formato correcto
    const evaluacionesConvertidas = evaluacionesStorage.map(evaluacion => {
        // Asegurarse de que las opciones tengan el formato correcto
        const opcionesConvertidas = evaluacion.opciones.map(opcion => {
            return {
                texto: opcion.texto || 'Opción no definida',
                correcta: opcion.correcta || false
            };
        });
        
        return {
            pregunta: evaluacion.pregunta || 'Pregunta no definida',
            opciones: opcionesConvertidas
        };
    });
    
    preguntasQuiz = [...preguntasQuizPredeterminadas, ...evaluacionesConvertidas];
    
    console.log('Evaluaciones cargadas:', preguntasQuiz);
    console.log('Herramientas cargadas:', herramientas);
}

// Función para inicializar la aplicación
function inicializarAplicacion() {
    // Cargar herramientas
    cargarHerramientas();
    
    // Cargar buenas prácticas
    cargarBuenasPracticas();
    
    // Cargar quiz
    cargarQuiz();
    
    // Configurar sistema de pestañas
    configurarPestanas();
    
    // Configurar evaluación
    configurarEvaluacion();
}

// Función para cargar las herramientas en la pestaña correspondiente - CORREGIDA
function cargarHerramientas() {
    const toolsGrid = document.querySelector('#herramientas-container');
    if (!toolsGrid) {
        console.error('No se encontró el contenedor de herramientas');
        return;
    }
    
    toolsGrid.innerHTML = '';
    
    // Contador para herramientas del administrador
    const herramientasAdmin = herramientas.length - herramientasPredeterminadas.length;
    
    // Actualizar título si hay herramientas del administrador
    const titulo = document.querySelector('#herramientas .section-title');
    if (titulo && herramientasAdmin > 0) {
        titulo.innerHTML = `Herramientas de Mecanización Agrícola <span class="admin-content-badge">+${herramientasAdmin} nuevas</span>`;
    }
    
    herramientas.forEach((herramienta, index) => {
        const toolCard = document.createElement('div');
        toolCard.className = `tool-card ${index >= herramientasPredeterminadas.length ? 'admin-added' : ''}`;
        
        toolCard.innerHTML = `
            <img src="${herramienta.imagen}" alt="${herramienta.nombre}" onerror="this.src='imagen/default.jpg'">
            <div class="tool-card-content">
                <h3>${herramienta.nombre}</h3>
                <p>${herramienta.descripcion}</p>
                <div class="tool-details">
                    <h4>Características Técnicas:</h4>
                    <ul>
                        ${herramienta.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                    </ul>
                    <h4>Usos Principales:</h4>
                    <p>${herramienta.usos}</p>
                </div>
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
}

// Función para cargar las buenas prácticas
function cargarBuenasPracticas() {
    const practicasContent = document.getElementById('practicas-content');
    if (!practicasContent) return;
    
    practicasContent.innerHTML = '';
    
    buenasPracticas.forEach(practica => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        toolCard.innerHTML = `
            <div class="tool-card-content">
                <h3>${practica.titulo}</h3>
                <p>${practica.descripcion}</p>
                <ul>
                    ${practica.puntos.map(punto => `<li>${punto}</li>`).join('')}
                </ul>
            </div>
        `;
        
        practicasContent.appendChild(toolCard);
    });
}

// Función para cargar el quiz - CORREGIDA
function cargarQuiz() {
    const quizQuestions = document.getElementById('quiz-questions');
    if (!quizQuestions) {
        console.error('No se encontró el contenedor de preguntas del quiz');
        return;
    }
    
    quizQuestions.innerHTML = '';
    
    // Contador para evaluaciones del administrador
    const evaluacionesAdmin = preguntasQuiz.length - preguntasQuizPredeterminadas.length;
    
    // Actualizar título si hay evaluaciones del administrador
    const titulo = document.querySelector('#evaluacion .section-title');
    if (titulo && evaluacionesAdmin > 0) {
        titulo.innerHTML = `Evaluación de Conocimientos <span class="admin-content-badge">+${evaluacionesAdmin} nuevas</span>`;
    }
    
    preguntasQuiz.forEach((pregunta, index) => {
        // Validar que la pregunta tenga la estructura correcta
        if (!pregunta.pregunta || !Array.isArray(pregunta.opciones)) {
            console.warn('Pregunta inválida en el índice:', index, pregunta);
            return;
        }
        
        const questionElement = document.createElement('div');
        questionElement.className = `quiz-question ${index >= preguntasQuizPredeterminadas.length ? 'admin-added' : ''}`;
        
        // Validar y limpiar opciones
        const opcionesValidas = pregunta.opciones.filter(opcion => 
            opcion && opcion.texto && typeof opcion.correcta === 'boolean'
        );
        
        // Si no hay opciones válidas, saltar esta pregunta
        if (opcionesValidas.length === 0) {
            console.warn('Pregunta sin opciones válidas:', pregunta);
            return;
        }
        
        questionElement.innerHTML = `
            <h3>Pregunta ${index + 1}: ${pregunta.pregunta}</h3>
            <div class="quiz-options">
                ${opcionesValidas.map((opcion, opcionIndex) => `
                    <div class="quiz-option" data-correct="${opcion.correcta}">${opcion.texto}</div>
                `).join('')}
            </div>
        `;
        
        quizQuestions.appendChild(questionElement);
    });
    
    console.log('Quiz cargado con', preguntasQuiz.length, 'preguntas');
}

// Función para configurar el sistema de pestañas
function configurarPestanas() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remover clase active de todos los enlaces
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('active');
                });
                
                // Añadir clase active al enlace clickeado
                this.classList.add('active');
                
                // Ocultar todas las pestañas
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Mostrar la pestaña correspondiente
                const tabId = this.getAttribute('data-tab');
                const tabElement = document.getElementById(tabId);
                if (tabElement) {
                    tabElement.classList.add('active');
                }
                
                // Scroll al inicio de la página si no es la pestaña de inicio
                if (tabId !== 'inicio') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Función para configurar la evaluación
function configurarEvaluacion() {
    // Sistema de evaluación
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quiz-option')) {
            // Remover selección previa en la misma pregunta
            const parent = e.target.parentElement;
            parent.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Seleccionar la opción actual
            e.target.classList.add('selected');
        }
    });
    
    const submitButton = document.getElementById('submit-quiz');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const questions = document.querySelectorAll('.quiz-question');
            let correctAnswers = 0;
            let totalQuestions = questions.length;
            
            questions.forEach(question => {
                const selectedOption = question.querySelector('.quiz-option.selected');
                if (selectedOption && selectedOption.getAttribute('data-correct') === 'true') {
                    correctAnswers++;
                }
            });
            
            const resultElement = document.getElementById('quiz-result');
            if (resultElement) {
                resultElement.className = 'quiz-result';
                
                if (correctAnswers === totalQuestions) {
                    resultElement.classList.add('success');
                    resultElement.textContent = `¡Excelente! Has respondido correctamente todas las preguntas (${correctAnswers}/${totalQuestions}).`;
                } else if (correctAnswers >= totalQuestions * 0.7) {
                    resultElement.classList.add('success');
                    resultElement.textContent = `¡Buen trabajo! Has respondido correctamente ${correctAnswers} de ${totalQuestions} preguntas.`;
                } else {
                    resultElement.classList.add('error');
                    resultElement.textContent = `Has respondido correctamente ${correctAnswers} de ${totalQuestions} preguntas. ¡Sigue estudiando!`;
                }
            }
        });
    }
}

// Función para recargar datos (útil cuando se agregan nuevas herramientas/evaluaciones)
function recargarDatos() {
    cargarDatosDesdeStorage();
    cargarHerramientas();
    cargarQuiz();
}

// Exponer función global para recargar datos
window.recargarDatos = recargarDatos;