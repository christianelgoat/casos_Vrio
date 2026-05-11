import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AlertTriangle, TrendingDown, Globe, BarChart3, ShieldAlert, Cpu } from 'lucide-react';

const dataFinanzasA = [
  { quarter: 'Q1-22', ebitda: 480, costosOperativos: 220 },
  { quarter: 'Q2-22', ebitda: 495, costosOperativos: 230 },
  { quarter: 'Q3-22', ebitda: 450, costosOperativos: 250 },
  { quarter: 'Q4-22', ebitda: 410, costosOperativos: 280 },
  { quarter: 'Q1-23', ebitda: 350, costosOperativos: 350 },
  { quarter: 'Q2-23', ebitda: 280, costosOperativos: 420 },
  { quarter: 'Q3-23', ebitda: 180, costosOperativos: 480 },
  { quarter: 'Q4-23', ebitda: 90, costosOperativos: 550 },
];

export const caso1 = {
  id: "case-1",
  title: "Caso 1: El Colapso de la Cadena de Suministro en 'OptimaTech'",
  content: (
    <div className="space-y-8 font-serif leading-relaxed text-base text-gray-800">
      {/* Abstracto Ejecutivo */}
      <div className="bg-[#111827] text-white p-6 md:p-8 rounded shadow-lg border-l-4 border-[#D4AF37]">
        <h3 className="text-[#D4AF37] font-bold text-xl mb-4 tracking-wide font-sans uppercase">Abstracto Ejecutivo</h3>
        <p className="mb-4 text-gray-300">
          OptimaTech, otrora monarca indiscutible en la fabricación de microprocesadores de ultra-baja latencia para dispositivos IoT industriales, se encuentra al borde de la asfixia financiera. Durante una década, sus balances exudaban una perfección irrefutable: una rentabilidad sobre el capital invertido (ROIC) sostenida por encima del 24% y márgenes operativos que rivalizaban con monopolios tecnológicos.
        </p>
        <p className="mb-4 text-gray-300">
          A finales de 2024, la convergencia de tensiones geopolíticas en el Estrecho de Malaca y el endurecimiento de restricciones a la exportación de tierras raras provocaron un infarto inmediato en su hiperoptimizada cadena de suministro dependiente de un único proveedor asiático. La gerencia, intoxicada por su propio éxito histórico y atrapada en un sesgo de confirmación, ignoró las alertas tempranas.
        </p>
        <p className="text-gray-300 font-bold text-[#D4AF37]">
          En apenas 180 días, su EBITDA sufrió una hemorragia crítica, cruzando peligrosamente el umbral de sus masivos costos fijos. Hoy, el Consejo de Administración enfrenta una encrucijada existencial: liquidar activos críticos a precio de remate para inyectar liquidez, o someterse inmediatamente a un proceso de reestructuración radical bajo el Chapter 11.
        </p>
      </div>

      {/* Sección 1: Análisis Histórico y VRIO */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h4 className="border-b border-[#D4AF37] pb-2 mb-6 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-xl">
          <Cpu className="mr-3" size={28}/> Contexto Histórico y Evaluación VRIO
        </h4>
        <p className="mb-4">
          La hegemonía de OptimaTech se erigió sobre una obra maestra de ingeniería logística: el sistema de "Just-in-Time" (JIT) llevado a extremos microscópicos. Al aplicar el marco <strong>VRIO (Valioso, Raro, Inimitable, Organizado)</strong>, la propiedad intelectual de OptimaTech (patentes de silicio) era Valiosa y Rara. Sin embargo, su vulnerabilidad yacía en la "O" de Organización.
        </p>
        <p className="mb-4">
          La arquitectura corporativa de OptimaTech dictaba que el 85% de sus componentes pasivos y sustratos avanzados provinieran de un megaconglomerado en Shenzhen. Mientras el mundo operaba en calma, esta concentración permitía economías de escala irreplicables, generando lo que los analistas denominaron erróneamente un <em>"Monopolio Natural Defacto"</em>.
        </p>
        <p className="p-4 bg-gray-50 border-l-4 border-gray-400 italic text-gray-600">
          "Trataron una vulnerabilidad singular de la cadena de suministro como si fuera una optimización brillante de costos. La soberbia del ROIC los cegó ante el riesgo de ruina. En estrategia, cuando la inimitabilidad depende de la paz geopolítica, no tienes una ventaja, tienes una bomba de tiempo."
        </p>
      </div>

      {/* Grid de PESTEL, Matrices y Gráfico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PESTEL y Porter */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-4 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <Globe className="mr-2" size={24}/> PESTEL & 5 Fuerzas de Porter
          </h4>
          <p className="mb-4">
            El colapso no fue producto de mala tecnología, sino de un <strong>Cisne Negro PESTEL</strong>. El factor <strong>Político/Legal</strong> explotó cuando embargos arancelarios y bloqueos navales paralizaron el corredor asiático de transporte. Simultáneamente, el factor <strong>Económico</strong> detonó: los bancos centrales elevaron las tasas de interés al nivel más alto en dos décadas, encareciendo el capital y desplomando la demanda B2B de IoT en un 30% instantáneo.
          </p>
          <p>
            Bajo las <strong>5 Fuerzas de Porter</strong>, el ecosistema mutó en horas. El <em>Poder de Negociación del Proveedor</em> pasó de ser moderado a ser una dictadura absoluta, ya que OptimaTech carecía de alternativas homologadas (proveedores Tier 2). El corolario fue una <em>Rivalidad de la Industria</em> salvaje, donde los competidores con cadenas "Nearshoring" (producción local) comenzaron a robar agresivamente la cuota de mercado ahogada de OptimaTech.
          </p>
        </div>

        {/* Diagnóstico EFI/EFE */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-4 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <BarChart3 className="mr-2" size={24}/> Diagnóstico Crítico EFI / EFE
          </h4>
          <p className="mb-4">
            Las auditorías internas póstumas revelaron incompetencias asombrosas en la evaluación de riesgo.
          </p>
          <ul className="list-disc pl-5 space-y-3 mb-4">
            <li>
              <strong>Matriz EFI (Evaluación de Factores Internos):</strong> La <em>Dependencia Asiática</em> tenía asignada una ponderación de 0.25 (la más alta), pero la gerencia le dio una calificación ilusoria de 3 (Fortaleza Menor), cuando debió ser un 1 rotundo (Debilidad Crítica). Esto infló artificialmente el score EFI a un aparente desempeño saludable de 2.8.
            </li>
            <li>
              <strong>Matriz EFE (Evaluación de Factores Externos):</strong> Frente a la amenaza de quiebre logístico (calificada con peso 0.20), OptimaTech obtuvo un 1 (Ausencia total de respuesta). Su score EFE real no superaba el 1.7, demostrando una total incapacidad para asimilar disrupciones exógenas.
            </li>
          </ul>
        </div>
      </div>

      {/* Gráfico Financiero de la Hemorragia */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h4 className="border-b border-[#D4AF37] pb-2 mb-6 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-xl">
          <TrendingDown className="mr-3" size={28}/> El Cruce de la Muerte: La Hemorragia del EBITDA
        </h4>
        <p className="mb-6">
          La naturaleza industrial intensiva de OptimaTech exige masivos costos fijos (CAPEX en plantas, mantener salas blancas, I+D). Cuando la cadena de suministro colapsó, los ingresos cesaron, pero los costos operativos continuaron devorando la liquidez. El gráfico a continuación expone el "Apalancamiento Operativo Negativo": el momento preciso donde los Costos Operativos perforan y superan los márgenes del EBITDA, iniciando la quema de caja estructural.
        </p>
        <div className="w-full bg-gray-50 p-4 rounded border border-gray-100">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={dataFinanzasA} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A51C30" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#A51C30" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCostos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#111827" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#111827" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB"/>
              <XAxis dataKey="quarter" tick={{fontSize: 12, fill: '#4B5563'}} tickMargin={10}/>
              <YAxis tick={{fontSize: 12, fill: '#4B5563'}} />
              <Tooltip wrapperClassName="font-sans text-sm shadow-xl" contentStyle={{borderRadius: '8px', border: 'none'}} />
              <Legend iconType="circle" wrapperStyle={{fontSize: '15px', fontFamily: 'sans-serif', paddingTop: '20px'}}/>
              <Area type="monotone" dataKey="ebitda" name="EBITDA Ajustado ($M)" stroke="#A51C30" strokeWidth={3} fillOpacity={1} fill="url(#colorEbitda)" />
              <Area type="monotone" dataKey="costosOperativos" name="Costos Operativos ($M)" stroke="#111827" strokeWidth={3} fillOpacity={1} fill="url(#colorCostos)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cita final de impacto */}
      <div className="mt-8 p-8 shadow border-l-8 border-[#A51C30] bg-[#A51C30]/5 font-serif italic text-[#111827] relative overflow-hidden">
        <div className="absolute top-4 right-4 text-[#A51C30] opacity-10 transform scale-150 origin-top-right">
          <ShieldAlert size={120}/>
        </div>
        <p className="text-xl leading-relaxed relative z-10 font-medium">
          "Un balance inmaculado en tiempos de profunda paz geopolítica no es evidencia de resiliencia ejecutiva, es una mera coincidencia estadística. OptimaTech no fracasó por diseñar malos procesadores; están quebrando porque tercerizaron su instinto de supervivencia corporativa a un océano de distancia. El apalancamiento operativo no discrimina: te hace un titán en la subida, y te aniquila matemáticamente en la bajada."
        </p>
        <p className="mt-6 font-sans font-bold text-sm text-[#A51C30] uppercase tracking-wider relative z-10 block">
          — Intervención del Asesor de Crisis, Reunión de Emergencia de la Junta.
        </p>
      </div>
    </div>
  ),
  questions: [
    { q: "En el inicio de la crisis, ¿cuál fue el factor PESTEL cardinal que actuó como el \"Cisne Negro\" o detonador primario de la ruptura de la cadena de suministro?", options: ["Ambiental (Desastres naturales en fábricas)", "Sociocultural (Cambio en preferencias del consumidor)", "Político (Bloqueos navales y embargos de tierras raras)", "Tecnológico (Obsolescencia del IoT industrial)"], a: 2 },
    { q: "Históricamente, la gerencia sufría de un sesgo cognitivo provocado por su éxito. ¿A qué indicador se anclaban para justificar su complacencia y engañarse sobre el riesgo real?", options: ["Su baja relación Precio/Beneficio (P/E Ratio)", "Su Rentabilidad sobre el Capital Invertido (ROIC) sostenida por encima del 24%", "La apreciación artificial de los activos intangibles", "El reparto agresivo de dividendos"], a: 1 },
    { q: "Aplicando el marco VRIO, se evidencia que OptimaTech falló estructuralmente. Poseían patentes (Valiosas y Raras), pero ¿cuál eslabón del VRIO destruyó la efectividad del recurso al depender únicamente de Asia?", options: ["Inimitabilidad (Fueron rápidamente copiadas)", "Valor (El mercado dejó de pagar el premium)", "Organización (Arquitectura hiper-optimizada pero frágil incapaz de capturar o retener el valor en crisis)", "Rareza (Todos comenzaron a fabricar chips)"], a: 2 },
    { q: "Bajo la óptica de las 5 Fuerzas de Porter, ¿cuál fue el efecto inmediato del embargo logístico y la falta de alternativas viables de componentes (Nearshoring)?", options: ["El Poder de Negociación del Proveedor asiático se transformó en un dominio o limitante vertical absoluto", "La Amenaza de Nuevos Entrantes desapareció por completo", "El Poder de los Compradores (Clientes B2B) aumentó exigiendo más volumen", "Se generaron barreras de salida ecológicas insalvables"], a: 0 },
    { q: "En la anatomía de un colapso por \"Apalancamiento Operativo Negativo\" mostrado en el gráfico, el punto más letal ('Cruce de la Muerte') se conceptualiza cuando:", options: ["Se pagan las deudas a un interés de tasa flotante impredecible", "La hemorragia del EBITDA es cruzada drásticamente hacia abajo por la inercia de costos operativos fijos inflexibles", "Se amortiza la maquinaria de las salas blancas prematuramente", "El capital contable (Equity) iguala a la deuda senior"], a: 1 },
    { q: "En la Matriz EFI de OptimaTech, la \"Dependencia Asiática\" tenía un peso muy alto (0.25). ¿Cuál fue el error metodológico grave de la gerencia al calificarla internamente?", options: ["Puntuarla como 4 (Fortaleza Mayor) engañándose sobre su invulnerabilidad, cuando matemáticamente debió ser un 1 (Debilidad Crítica)", "Excluir el factor de la matriz financiera", "Combinarla asimétricamente con el perfil tecnológico", "Puntuarla como 2 creyendo que era una amenaza externa y no interna"], a: 0 },
    { q: "Si analizamos la Matriz EFE y su score póstumo de 1.7, este resultado nos alerta inequívocamente de que:", options: ["La corporación goza de un entorno inmensamente fértil pero no sabe aprovecharlo", "La corporación es paralítica, pasiva e incapaz de responder mitigando las amenazas externas ni aprovechar oportunidades", "La gestión de talento es el único pilar que sostiene a la empresa", "La estructura está sobre-cubierta con seguros financieros asiáticos"], a: 1 },
    { q: "El factor \"Económico\" en el modelo PESTEL asestó un segundo golpe al desplomar la demanda B2B en un 30%. ¿A qué fenómeno se atribuye esto directamente en el caso?", options: ["Escasez de baterías de litio en el ensamblaje IoT", "Aumento repentino de impuestos aduaneros a fábricas chinas", "Elevación de tasas de interés por bancos centrales que encareció el costo de capital corporativo", "Reducción de liquidez por compra abusiva de criptoactivos corporativos"], a: 2 },
    { q: "La ventaja competitiva de los rivales locales frente a OptimaTech durante la crisis radica en el concepto de:", options: ["Dumping", "Nearshoring y resiliencia de abastecimiento geográficamente próximo", "Adquisiciones apalancadas exclusivas (LBO)", "Off-shoring ultrabarato"], a: 1 },
    { q: "El sistema logístico alabado históricamente, que al final demostró ser su tendón de Aquiles, fue:", options: ["Inventario perpetuo y stock de seguridad inflado a 1 año", "Entregas bajo el modelo \"Just-in-Time\" llevado a extremos físicos sin redundancias", "Drop-shipping puro y duro B2B", "Integración Vertical hacia atrás mediante compra directa de minas asiáticas"], a: 1 },
    { q: "En términos de reestructuración radical para inyectar liquidez y evitar el fallecimiento de la corporación operativa, el caso menciona invocar un proceso legal estandarizado conocido como:", options: ["Liquidación total forzosa Chapter 7", "Declaración oficial de Chapter 11 (Protección y reorganización por bancarrota)", "M&A pasiva con los competidores del sector ('White Knight Merger')", "Emisión privada agresiva IPO"], a: 1 },
    { q: "¿Qué falacia estratégica expone el \"Asesor de Crisis\" en la cita de cierre sobre los balances pasados de la organización?", options: ["Sustituir liquidez a corto plazo por bonos buitres", "Asumir que alta rentabilidad (ROIC) en un mercado sin varianzas geopolíticas (épocas de paz) garantiza la robustez y capacidad resiliente ante cisnes negros", "Subestimar el impacto del marketing de marca frente a los ingenieros B2B", "Priorizar la contabilidad creativa IFRS sobre GAAP"], a: 1 },
    { q: "En ecosistemas de alta exigencia (Hardware), poseer un único proveedor homologado mundial genera un estado de...", options: ["Eficiencia de escala inquebrantable a perpetuidad temporal", "Poder Negociador simétrico perfecto", "Tiranía estratégica de la proveeduría (Cuello de Botella irreemplazable velozmente)", "Alianza Joint Venture táctica natural"], a: 2 },
    { q: "La estrategia genérica de Liderazgo en Costos puede ser una trampa fatal si...", options: ["El diseño de empaque no es eco-friendly", "Los costos bajos dependen de un punto único de falla (Single Point of Failure) en una geografía de alto riesgo inminente", "Las empresas compiten en nichos de altísimo lujo", "La calidad decae paulatinamente al 99%"], a: 1 },
    { q: "Frente a este escenario consumado de hemorragia, ¿cuál es el movimiento de \"Hard Turnaround\" (cirugía corporativa urgente) más coherente si el Chapter 11 es inevitable?", options: ["Adquirir más deudas para seguir pagando dividendos elevando el ratio Deuda/Capital y engañar al mercado accionario", "Invertir brutalmente en campañas de relaciones públicas globales en Asia", "Desinversión agresiva o amputación de unidades de negocio no primordiales ('Non-core') para cubrir pasivos urgentes y renegociar contratos con los acreedores institucionales", "Ampliar líneas de productos para intentar diversificar vendiendo software de analítica básica B2C"], a: 2 }
  ]
};
