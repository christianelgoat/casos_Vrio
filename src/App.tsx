import { useState, useRef } from 'react';
import { CASOS } from './casoEstudio';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Award, RefreshCcw, BookOpen, FileCheck, Activity, ChevronDown, Book } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'casos' | 'evaluacion'>('casos');
  const [currentCase, setCurrentCase] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredState, setAnsweredState] = useState<{ selectedOption: number | null, isCorrect: boolean | null }>({ selectedOption: null, isCorrect: null });

  const activeContent = CASOS[currentCase];

  const audioSuccessRef = useRef<HTMLAudioElement | null>(null);
  const audioFailureRef = useRef<HTMLAudioElement | null>(null);

  const initAudio = () => {
    if (!audioSuccessRef.current) {
      audioSuccessRef.current = new Audio('https://www.myinstants.com/media/sounds/ding-sound-effect_2.mp3');
      audioSuccessRef.current.volume = 0.5;
    }
    if (!audioFailureRef.current) {
      audioFailureRef.current = new Audio('https://www.myinstants.com/media/sounds/wrong-buzzer.mp3');
      audioFailureRef.current.volume = 0.3;
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResults(false);
    setAnsweredState({ selectedOption: null, isCorrect: null });
  };

  const handleOptionClick = (optionIdx: number) => {
    initAudio();
    if (answeredState.selectedOption !== null) return; 
    
    const correct = optionIdx === activeContent.questions[currentQ].a;
    setAnsweredState({ selectedOption: optionIdx, isCorrect: correct });

    if (correct) {
      setScore(s => s + 1);
      audioSuccessRef.current?.play().catch(e => console.log('Audio play error', e));
    } else {
      audioFailureRef.current?.play().catch(e => console.log('Audio play error', e));
    }
  };

  const nextQuestion = () => {
    if (currentQ < activeContent.questions.length - 1) {
      setCurrentQ(curr => curr + 1);
      setAnsweredState({ selectedOption: null, isCorrect: null });
    } else {
      setShowResults(true);
    }
  };

  const changeCase = (newIdx: number) => {
    if (newIdx >= 0 && newIdx < CASOS.length) {
      setCurrentCase(newIdx);
      resetQuiz();
      setActiveTab('casos');
    }
  };

  const changeCaseDropdown = (newIdx: number) => {
    if (newIdx >= 0 && newIdx < CASOS.length) {
      setCurrentCase(newIdx);
      resetQuiz();
    }
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-[#F5F5F3] font-serif text-[#111827] overflow-y-auto">
      
      {/* NAVBAR */}
      <nav className="bg-[#A51C30] text-white px-4 md:px-8 py-3 flex flex-col md:flex-row justify-between items-center shadow-md drop-shadow max-w-full overflow-hidden">
        <div className="flex items-center mb-4 md:mb-0">
          <Award className="text-[#D4AF37] mr-3 shrink-0" size={28}/>
          <span className="font-serif font-bold text-xl tracking-wider uppercase">Élite Stratégique</span>
          <span className="text-[10px] text-[#D4AF37] font-sans font-bold ml-4 uppercase tracking-widest mt-1 hidden sm:inline-block">MIT - Harvard</span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('casos')}
            className={`px-4 py-2 text-xs md:text-sm font-sans font-bold rounded-sm flex items-center transition-colors ${activeTab === 'casos' ? 'bg-white text-[#A51C30] shadow-sm' : 'text-white/90 hover:bg-white/10'}`}>
            <BookOpen size={16} className="mr-2"/> Casos Harvard
          </button>
          <button 
            onClick={() => setActiveTab('evaluacion')}
            className={`px-4 py-2 text-xs md:text-sm font-sans font-bold rounded-sm flex items-center transition-colors ${activeTab === 'evaluacion' ? 'bg-white text-[#A51C30] shadow-sm' : 'text-white/90 hover:bg-white/10'}`}>
            <FileCheck size={16} className="mr-2"/> Evaluación Exprés
          </button>
        </div>
      </nav>

      {/* HEADER */}
      <header className="text-center py-10 md:py-14 px-4">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#A51C30] mb-4 tracking-tight drop-shadow-sm">Estudios de Caso Nivel Harvard/MIT</h1>
        <p className="text-gray-500 font-serif italic text-base md:text-lg flex items-center justify-center">
          <Book size={20} className="mr-2 text-[#D4AF37]"/> Análisis profundo de escenarios empresariales complejos.
        </p>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 pb-24">
        
        {activeTab === 'casos' ? (
          /* VISTA DE CASO (DOCUMENTO) */
          <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Top Toolbar del Documento */}
            <div className="px-6 md:px-10 py-5 text-xs font-sans uppercase font-bold text-gray-400 flex justify-between items-center bg-white">
              <button 
                onClick={() => changeCase(currentCase - 1)}
                disabled={currentCase === 0}
                className={`flex items-center transition-colors ${currentCase === 0 ? 'opacity-30 cursor-not-allowed text-gray-300' : 'hover:text-[#A51C30] cursor-pointer text-gray-500'}`}
              >
                <ChevronLeft size={16} className="mr-1"/> Anterior
              </button>
              <span className="text-gray-500 tracking-widest bg-gray-50 px-3 py-1 rounded border border-gray-100 shadow-sm">Caso {currentCase + 1} / {CASOS.length}</span>
              <button 
                onClick={() => changeCase(currentCase + 1)}
                disabled={currentCase === CASOS.length - 1}
                className={`flex items-center transition-colors ${currentCase === CASOS.length - 1 ? 'opacity-30 cursor-not-allowed text-gray-300' : 'hover:text-[#A51C30] cursor-pointer text-gray-500'}`}
              >
                Siguiente <ChevronRight size={16} className="ml-1"/>
              </button>
            </div>
            <div className="h-1.5 bg-[#A51C30] w-full"></div>
            
            {/* Cuerpo del Documento */}
            <div className="p-6 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#111827] mb-10 flex flex-col md:flex-row md:items-start leading-tight">
                <div className="w-5 h-5 bg-[#D4AF37] mr-4 mt-2 flex-shrink-0 hidden md:block"></div>
                {activeContent.title}
              </h2>
              {activeContent.content}
              
              {/* Bottom Navigation */}
              <div className="mt-16 pt-8 border-t border-gray-200 flex justify-end">
                <button 
                  onClick={() => setActiveTab('evaluacion')}
                  className="flex items-center px-6 py-3 bg-[#111827] hover:bg-black text-white font-sans font-bold tracking-wide rounded text-sm transition-all shadow-md group"
                >
                  <FileCheck className="mr-2" size={18}/> EJECUTAR EVALUACIÓN
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18}/>
                </button>
              </div>
            </div>
          </div>

        ) : (

          /* VISTA DE EVALUACIÓN */
          <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Top Toolbar Evaluación */}
            <div className="px-6 md:px-10 py-5 border-b flex flex-col md:flex-row justify-between items-center text-xs font-sans uppercase font-bold text-gray-500 space-y-4 md:space-y-0 relative">
              <div className="flex items-center text-[#A51C30] tracking-widest"><Activity size={18} className="mr-2"/> Evaluación Activa</div>
              <div className="relative w-full md:w-auto">
                <select 
                  className="appearance-none border border-gray-200 px-4 py-2 pr-10 rounded flex items-center bg-gray-50 hover:bg-gray-100 cursor-pointer text-gray-800 shadow-sm w-full md:w-auto text-ellipsis whitespace-nowrap max-w-full font-serif font-semibold text-sm"
                  value={currentCase}
                  onChange={(e) => changeCaseDropdown(Number(e.target.value))}
                >
                  {CASOS.map((c, idx) => (
                    <option key={c.id} value={idx}>{c.title}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <ChevronDown size={14}/>
                </div>
              </div>
            </div>
            <div className="h-1.5 bg-[#A51C30] w-full"></div>

            <div className="p-6 md:p-12 lg:p-16">
              {!showResults ? (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                  {/* Score Board Header */}
                  <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-6">
                    <div>
                      <p className="text-[#A51C30] text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest mb-2">Impacto Analítico</p>
                      <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#111827] flex items-baseline">
                        Q{currentQ + 1}
                        <span className="text-2xl md:text-3xl text-gray-300 font-light ml-1">/{activeContent.questions.length}</span>
                      </h2>
                    </div>
                    <div className="text-center bg-[#F8F9FA] px-4 md:px-6 py-3 rounded border border-gray-100">
                      <p className="text-gray-400 text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest mb-1">Score Total</p>
                      <div className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37]">{score}</div>
                    </div>
                  </div>

                  {/* Pregunta */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111827] mb-8 leading-relaxed">
                    {activeContent.questions[currentQ].q}
                  </h3>

                  {/* Opciones */}
                  <div className="space-y-4 font-serif">
                    {activeContent.questions[currentQ].options.map((opt, idx) => {
                      const isSelected = answeredState.selectedOption === idx;
                      const isCorrectAnswer = activeContent.questions[currentQ].a === idx;
                      
                      let containerStyle = "border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm text-gray-700 cursor-pointer";
                      let letterStyle = "bg-gray-100 border-gray-200 text-gray-500 group-hover:bg-[#A51C30] group-hover:text-white group-hover:border-[#A51C30]";
                      let rightIcon = null;

                      if (answeredState.selectedOption !== null) {
                        if (isSelected && answeredState.isCorrect) {
                          containerStyle = "border-green-500 bg-green-50/50 text-green-900 shadow-sm ring-1 ring-green-500";
                          letterStyle = "bg-green-500 border-green-500 text-white";
                          rightIcon = <CheckCircle2 className="text-green-600 block flex-shrink-0" size={24}/>;
                        } else if (isSelected && !answeredState.isCorrect) {
                          containerStyle = "border-[#A51C30] bg-[#A51C30]/5 text-[#8a1526] shadow-sm ring-1 ring-[#A51C30]";
                          letterStyle = "bg-[#A51C30] border-[#A51C30] text-white";
                          rightIcon = <XCircle className="text-[#A51C30] block flex-shrink-0" size={24}/>;
                        } else if (isCorrectAnswer) {
                          containerStyle = "border-green-400/50 bg-green-50/30 text-green-800 border-dashed";
                          letterStyle = "bg-green-100 border-green-200 text-green-600";
                          rightIcon = <CheckCircle2 className="text-green-500/50 block flex-shrink-0" size={24}/>;
                        } else {
                          containerStyle = "border-gray-100 bg-gray-50/50 text-gray-400 cursor-not-allowed";
                          letterStyle = "bg-gray-100 border-gray-100 text-gray-300";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(idx)}
                          disabled={answeredState.selectedOption !== null}
                          className={`w-full flex items-center p-4 border rounded transition-all duration-200 text-left group min-h-[5rem] ${containerStyle}`}
                        >
                          <span className={`w-10 h-10 flex-shrink-0 font-sans font-bold text-sm flex items-center justify-center mr-5 transition-colors rounded-sm border ${letterStyle}`}>
                            {letters[idx]}
                          </span>
                          <span className="text-base md:text-lg flex-1 mr-4">{opt}</span>
                          <div className="w-6 hidden md:block">
                            {rightIcon}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer Siguiente */}
                  {answeredState.selectedOption !== null && (
                    <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end animate-in slide-in-from-bottom-2 fade-in duration-300">
                      <button 
                        onClick={nextQuestion}
                        className="flex items-center px-8 py-3.5 bg-[#111827] hover:bg-[#1f2937] text-white font-sans font-bold tracking-wide rounded text-sm transition-all shadow-md group"
                      >
                        {currentQ === activeContent.questions.length - 1 ? 'VER RESULTADOS' : 'SIGUIENTE PREGUNTA'}
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18}/>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 animate-in zoom-in-95 duration-700">
                  <div className="w-40 h-40 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] border-8 border-[#D4AF37] mb-8">
                    <span className="text-gray-400 text-xs font-sans font-bold uppercase tracking-widest mb-1">Certeza</span>
                    <div className="text-5xl font-serif text-[#111827] font-bold">
                      {Math.round((score / activeContent.questions.length) * 100)}<span className="text-3xl text-[#D4AF37]">%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 max-w-2xl mx-auto">
                    <h3 className="text-4xl font-serif text-[#A51C30] font-bold">Diagnóstico Ejecutivo Completado</h3>
                    <p className="text-gray-600 text-xl font-serif leading-relaxed">
                      El comité evaluador ha procesado tus respuestas para el <strong>{activeContent.title}</strong>. Evidenciaste la capacidad de resolución en <strong className="text-[#111827]">{score}</strong> de los <strong className="text-[#111827]">{activeContent.questions.length}</strong> vértices críticos.
                    </p>
                    
                    <div className="mt-8">
                      {score >= 12 ? (
                        <div className="p-6 bg-green-50 border-l-4 border-green-500 text-green-900 text-left font-serif text-lg">
                          <strong>Conclusión: Visión de Director.</strong> Tienes un dominio excepcional de las metodologías estratégicas requeridas en este caso. Tu perspicacia te permite liderar esta reestructuración corporativa exiliando los sesgos cognitivos gerenciales.
                        </div>
                      ) : (
                        <div className="p-6 bg-[#A51C30]/5 border-l-4 border-[#A51C30] text-[#111827] text-left font-serif text-lg">
                          <strong>Conclusión: Riesgo Sistemático de Ruina.</strong> El análisis refleja inconsistencias críticas al evaluar y diagnosticar la supervivencia y ventaja competitiva de la firma. Sugerimos revisar detenidamente la teoría tras este caso.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center mt-12 gap-4">
                    <button 
                      onClick={resetQuiz}
                      className="inline-flex items-center px-8 py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-sans font-bold tracking-widest uppercase rounded shadow-sm hover:shadow transition-all text-sm"
                    >
                      <RefreshCcw className="mr-3" size={18}/> Reevaluar
                    </button>
                    {currentCase < CASOS.length - 1 && (
                      <button 
                        onClick={() => changeCase(currentCase + 1)}
                        className="inline-flex items-center px-8 py-4 bg-[#111827] hover:bg-black text-white font-sans font-bold tracking-widest uppercase rounded shadow hover:shadow-lg transition-all text-sm"
                      >
                        Siguiente Caso <ChevronRight className="ml-3" size={18}/>
                      </button>
                    )}
                  </div>

                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
