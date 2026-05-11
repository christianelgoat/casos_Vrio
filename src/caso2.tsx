import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Target, Activity, Briefcase, RefreshCcw, Network, TriangleAlert } from 'lucide-react';

const dataRoeB = [
  { name: 'Nexar (Pre-Fusión)', ROE: 1.2 },
  { name: 'Zenith (Pre-Fusión)', ROE: 32.5 },
  { name: 'Nexar+Zenith (Post-18 Meses)', ROE: -8.4 },
];

export const caso2 = {
  id: "case-2",
  title: "Caso 2: Fusiones, Choques Culturales y Destrucción de Valor en 'Nexar & Zenith'",
  content: (
    <div className="space-y-8 font-serif leading-relaxed text-base text-gray-800">
      
      {/* Abstracto Ejecutivo */}
      <div className="bg-[#111827] text-white p-6 rounded shadow-lg border-l-4 border-[#D4AF37]">
        <h3 className="text-[#D4AF37] font-bold text-xl mb-4 tracking-wide font-sans uppercase">Abstracto Ejecutivo</h3>
        <p className="mb-4 text-gray-300">
          Nexar Holdings, un banco comercial colosal atrapado en un ROE anémico del 1.2%, adquirió a la ágil Zenith FinTech por $18,000 millones. Zenith ostentaba un ROE del 32.5% impulsado por calificación crediticia basada en Machine Learning y datos no estructurados.
        </p>
        <p className="mb-4 text-gray-300">
          Wall Street aclamó la "sinergia matemática perfecta": capital masivo unido a agilidad predictiva. Sin embargo, Nexar impuso una burocracia paralizante: 14 niveles de aprobación y sistemas COBOL obligatorios, asfixiando por completo el entorno y la agilidad de Zenith.
        </p>
        <p className="text-[#D4AF37] font-bold">
          El 70% de los ingenieros clave de Zenith renunciaron en 90 días ante la violenta asimilación burocrática. Nexar tuvo que declarar un apocalíptico "Impairment Charge" (deterioro de valor) borrando el Goodwill generado, además de sufrir cuantiosas multas bajo normativas GDPR en Europa por pésimas migraciones de datos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PESTEL y Porter */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-4 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <Activity className="mr-2" size={24}/> PESTEL y 5 Fuerzas
          </h4>
          <p className="mb-4">
            Dentro de <strong>PESTEL</strong>, la miopía <strong>Legal</strong> fue catastrófica: no existían cláusulas <em>Non-Compete</em> (no competencia) ni <em>Golden Handcuffs (incentivos de retención)</em>. Asimismo, el factor <strong>Tecnológico</strong> (choque de nube contra mainframes arcaicos) indujo penalidades bajo el factor <strong>Político/Legal (Europa GDPR)</strong>.
          </p>
          <p>
            Al exiliar a los talentos de Zenith, Nexar creó a sus propios verdugos bajo las <strong>5 Fuerzas de Porter</strong>. El <em>Poder de Sustitutos y la Amenaza de Nuevos Entrantes</em> explotó cuando estos ingenieros fundaron 6 nuevas "startups Phoenix" con fondeo de Venture Capital.
          </p>
        </div>

        {/* Gráfico Financiero de Destrucción ROE */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-center">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-4 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <Target className="mr-2" size={24}/> ROE: Destrucción de Valor
          </h4>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={dataRoeB} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" tick={{fontSize: 11, fontWeight: 'bold'}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip wrapperClassName="font-sans text-sm shadow-sm" cursor={{fill: '#F3F4F6'}}/>
                <Legend iconType="square" wrapperStyle={{fontSize: '14px', fontFamily: 'sans-serif', paddingTop: '10px'}}/>
                <Bar dataKey="ROE" name="Return on Equity (%)" fill="#A51C30" radius={[4, 4, 0, 0]} barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VRIO y Contratos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-6 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <Network className="mr-3" size={24}/> Asfixia del Modelo VRIO
          </h4>
          <p className="mb-4">
            Los líderes de Nexar omitieron que el valor de una FinTech no reside puramente en su código protegido, sino en su velocidad iterativa y el conocimiento tácito de sus ingenieros.
          </p>
          <p>
            Bajo el marco <strong>VRIO</strong>, fallaron trágicamente en la <strong>"O" (Organización)</strong>. La asimilación hostil destruyó el tejido cultural y logístico operativo rápido, probando que un recurso no puede brindar Ventaja Competitiva Sostenida si la matriz receptora es incompatible para explotarlo. Sinergia matemática, pero catástrofe humana.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="border-b border-[#D4AF37] pb-2 mb-6 flex items-center text-[#A51C30] font-bold tracking-wide font-sans text-lg">
            <RefreshCcw className="mr-3" size={24}/> El Apocalipsis Contable
          </h4>
          <p className="mb-4">
            Al firmar, la diferencia monumental sobre el valor en libros fue registrada como Goodwill (Fondo de Comercio) asumiendo sinergias.
          </p>
          <p>
            Al desintegrarse el cuerpo vital de Zenith (sus ingenieros y cultura ágil), Nexar fue forzado por auditoría a declarar un masivo <strong>Impairment Charge (Deterioro de Valor)</strong>. Este cargo borró utilidades de forma brutal.
          </p>
        </div>
      </div>

      {/* Cita final de impacto */}
      <div className="mt-8 p-8 shadow border-l-8 border-[#A51C30] bg-[#A51C30]/5 font-serif italic text-[#111827] relative overflow-hidden">
        <div className="absolute top-4 right-4 text-[#A51C30] opacity-10 transform scale-150 origin-top-right">
          <TriangleAlert size={120}/>
        </div>
        <p className="text-xl leading-relaxed relative z-10 font-medium">
          "Nexar no adquirió a Zenith, invadió un ecosistema al que no comprendía y lo sepultó. Su arrogancia procedimental pulverizó la Organización del modelo VRIO logrando lo imposible: transmutar Oro FinTech valiosísimo en simple barro burocrático. Es el colmo contable: comprar talento, asfixiarlo forzadamente, y ver cómo se marcha al instante con tus $18,000 millones."
        </p>
        <p className="mt-6 font-sans font-bold text-sm text-[#A51C30] uppercase tracking-wider relative z-10 block">
          — Conclusión del Harvard Review Audit M&A 2025.
        </p>
      </div>
    </div>
  ),
  questions: [
    { q: "El brutal fracaso de Nexar en estructurar incentivos a largo plazo para el talento estrella falló gravemente en el factor PESTEL:", options: ["Económico (Alta inflación salarial)", "Social (Demografía)", "Legal (Carencia de cláusulas restrictivas y 'Golden Handcuffs')", "Ambiental (Contaminación de datacenters)"], a: 2 },
    { q: "Bajo la lupa VRIO, ¿qué elemento específico desmanteló Nexar de forma letal, neutralizando el valor?", options: ["Exclusividad de propiedad", "Valor nominal", "Organización (O), destruyendo el encaje cultural ágil", "La rareza global (R)"], a: 2 },
    { q: "Cuando un gigante financiero paga un premium asumiendo sinergias, y ese ecosistema huye, la corrección y borrado contable en libros se denomina:", options: ["Amortización acelerada", "Dumping contable", "Impairment Charge (Deterioro del Fondo de Comercio/Goodwill)", "Dilución de dividendos"], a: 2 },
    { q: "Al no retener a los fundadores y provocar su fuga fondeada, Nexar detonó el aumento de esta fuerza de Porter:", options: ["Poder de Proveedores", "Amenaza de Nuevos Entrantes (Startups ágiles)", "Poder impositivo regulador", "Barreras logísticas de salida"], a: 1 },
    { q: "Frente al problema de multas por datos mal administrados en Europa, esto expone inequívocamente el cuadrante PESTEL:", options: ["Económico regional", "Legal asertivizado (normativas GDPR estrictas)", "Ambiental ESG global", "Tecnológico puro hardware"], a: 1 },
    { q: "El fenómeno donde tratar de unir compañías genera pérdida de rentabilidad y destrucción ($1 + $1 = $0.5) se diagnostica como:", options: ["Economía paralela", "Apalancamiento dual", "Sinergia Negativa / Destrucción de Valor M&A", "Costos de transacción fijos"], a: 2 },
    { q: "Para preservar la agilidad de Zenith intacta asilándola de la burocracia bancaria, la estructura debió ser:", options: ["Ring-Fencing (Operaciones autónomas blindadas como subsidiarias)", "Despidos preventivos directivos directos", "Absorción matriz completa corporativa clásica tradicional general de grupo cerrado", "Liquidación de activos"], a: 0 },
    { q: "Al enfrentar '14 niveles de aprobación' burocrática versus 'agilidad de Zenith', la pérdida estructural inmediata es:", options: ["Escala hipotecaria de base", "El hiper-ágil 'Time-to-Market' y la innovación orgánica veloz del entorno original Fintech destruido forzosamente sistemáticamente y burocratizado a la fuerza vertical obligada externa", "Costo unitario de ventas bajísimo local comercial estacional mensual", "La diversificación paralela global general"], a: 1 },
    { q: "Un 'Core Bancario legado en COBOL' evaluado pre-fusión EFI representa innegablemente una:", options: ["Fortaleza Menor de largo plazo aparente", "Oportunidad Macro ambiental externa e indirecta natural general", "Fortaleza Mayor sólida inamovible", "Debilidad Mayor (infraestructura tecnológica paralizante punitiva) inflexible a cambios drásticos externos demandados masivamente a nivel mundial"], a: 3 },
    { q: "Un ROE bancario atrapado en 1.2% históricamente delataba:", options: ["Rendimiento destructor de valor bajo inflación incitando M&A desesperado", "Alta eficiencia marginal en inversiones puras operativas tangibles sinérgicamente rentables constantes a futuro cercano optimista", "Ratios P/E insostenibles", "Liderazgo monopólico asintótico global"], a: 0 },
    { q: "El principal inconveniente con el 'Goodwill' tecnológico al pagar un premium ciego es:", options: ["Cargas tributarias exageradas por dividendos asimétricos marginales de alta fiscalización cruzada mundial general ineficiente", "Que el activo intangible hiper-crítico (El Talento intelectual predictivo) tiene piernas y puede marcharse rápidamente ante hostilidad organizativa grave", "Variabilidad atada al oro y metales volátiles exógenos duros de controlar estadísticamente a escala larga", "Depreciación contable fija lineal paralela a cero amortizable impositivamente legal en corto plazo en países bajos europeos en red limitada"], a: 1 },
    { q: "Una disciplina vital a auditar idénticamente pre-M&A igual al Financial Due Diligence es:", options: ["Estudio logístico macro industrial", "Arquitectura Sindical global", "El 'Cultural Due Diligence' (Auditoría de asimetrías de ethos y agilidad humana procedimental sistémica integral interna vital)", "Tasa WACC global combinada"], a: 2 },
    { q: "Las startups creadas por ex empleados fuertemente fondeadas hoy (Bolsa de Silicon) afirman una tendencia (PESTEL) macroeconómica donde:", options: ["Carencia de fondos mutuos secundarios es predominante constante en la región occidental global actual activa", "Existen colapsos continuos inyectados por los fondos bancarios tradicionales masivos clásicos regulados severamente sin apalancamiento legal permitido vigente limitante", "Regulaciones impositivas son cero absolutas globales inamovibles inalterables por bancos", "Alta liquidez del Venture Capital para inyectar recursos a talento valioso disruptivo que huye por frustraciones burocráticas letales crónicas limitantes de sus aspiraciones"], a: 3 },
    { q: "En la tesis de la banca clásica, el error cognitivo central fue creer ciegamente que:", options: ["Aprobar cuadros matemáticos combinando métricas pasadas teóricas anularía las fricciones y el éxodo colosal de fusiones en el espectro operacional dinámico tangible vivo interno real diario", "Los datos sin estructurar de Zenith eran irrelevantes matemáticamente comparados contra bienes raíces de garantía inmobiliaria clásica en bancos de Norteamérica pura de alcance", "Un buen marketing borra mal producto defectuoso en el nicho B2C agresivamente asediado", "Las regulaciones GDPR eximen a matriz americana siempre bajo estatuto local internacional cruzado dudoso pasivamente permitido en toda red"], a: 0 },
    { q: "La conclusión ejecutiva definitiva de esta macro operación catastrófica infiere que:", options: ["Es menester legal fusionar por la fuerza todos los departamentos de IA innovadores con directores tradicionales de la banca de riesgo histórico comprobado rigurosos metodológicamente siempre que haya exceso de liquidez a pagar rápido en corto plazo a fundadores clave", "La métrica contable del P/E ratio predice holgadamente choques organizacionales y mitiga riesgo cultural post mortem de toda compra enorme", "Rentabilidad ROE pasada no exime castigo en libro contable por devaluación masiva intangible de marca comprada", "La retención agresiva de 'Capacidades Dinámicas' orgánicas debe ser estructurada legal y organizativamente con mayor prioridad de supervivencia sistémica que alinear frías bases de bases de balance legado muerto sin alma ágil del startup comprado entero asimilado malamente a la fuerza pura."], a: 3 }
  ]
};
