const questions = [
    {
        question: "Qual a natureza jurídica da FMP?",
        answers: [
            { option: "Estadual", correct: false },
            { option: "Federal", correct: false },
            { option: "Privada", correct: false },
            { option: "Pública e Municipal", correct: true },
        ],
    },
    {
        question: "Quando a FMP foi credenciada pelo MEC?",
        answers: [
            { option: "2005", correct: true },
            { option: "2006", correct: false },
            { option: "2010", correct: false },
            { option: "2011", correct: false },
        ],
    },
    {
        question: "Qual dos seguintes cursos de graduação é oferecido pela FMP?",
        answers: [
            { option: "Administração", correct: true },
            { option: "Medicina", correct: false },
            { option: "Direito", correct: false },
            { option: "Engenharia Civil", correct: false },
        ],
    },
    {
        question: "Em qual bairro de Palhoça a FMP está localizada?",
        answers: [
            { option: "Aririu", correct: false },
            { option: "Ponte do Imaruim", correct: true },
            { option: "Passa Vinte", correct: false },
            { option: "Centro", correct: false },
        ],
    },
    {
        question: "Qual a nota da FMP no Índice Geral de Cursos (IGC) do MEC em 2019?",
        answers: [
            { option: "2", correct: false },
            { option: "5", correct: false },
            { option: "10", correct: false },
            { option: "3", correct: true },
        ],
    },
    {
        question: "Qual curso da FMP recebeu nota 4 no Conceito Preliminar de Curso (CPC) em 2017?",
        answers: [
            { option: "Pedagogia", correct: true },
            { option: "Processos Gerenciais", correct: false },
            { option: "Análise e Desenvolvimento de Sitemas", correct: false },
            { option: "Administração", correct: false },
        ],
    },
    {
        question: "Os cursos de graduação da FMP são pagos ou gratuitos?",
        answers: [
            { option: "Variam de acordo com o curso", correct: false },
            { option: "Gratuitos", correct: true },
            { option: "Parcialmente pagos", correct: false },
            { option: "Pagos", correct: false },
        ],
    },
    {
        question: "Qual dos seguintes cursos é listado como indisponível no site da FMP?",
        answers: [
            { option: "Pedagogia", correct: false },
            { option: "Análise e Desenvolvimento de Sistemas", correct: false },
            { option: "Processos Gerenciais", correct: false },
            { option: "Gestão de Turismo", correct: true },
        ],
    },
    {
        question: "Qual é o foco da FMP em relação à destinação de vagas?",
        answers: [
            { option: "Profissionais já atuantes no mercado de trabalho", correct: false },
            { option: "Alunos de escolas particulares", correct: false },
            { option: "Alunos de escolas públicas residentes em Palhoça", correct: true },
            { option: "Alunos de outros estados", correct: false },
        ],
    },
    {
        question: "A FMP oferece cursos de graduação e pós-graduação. Essa afirmação é verdadeira ou falsa?",
        answers: [
            { option: "Verdadeira", correct: true },
            { option: "Falsa", correct: false },
        ],
    },
    {
        question: "Qual a cidade onde a FMP está localizada?",
        answers: [
            { option: "São José", correct: false },
            { option: "Palhoça", correct: true },
            { option: "Itajai", correct: false },
            { option: "Florianópolis", correct: false },
        ],
    },
    {
        question: "Quem é o coordenador do curso de Pedagogia?",
        answers: [
            { option: "Prof. Rafael", correct: false },
            { option: "Prof. Jackson", correct: true },
            { option: "Prof. Coradini", correct: false },
            { option: "Prof. Alexandre", correct: true },
        ],
    },
    {
        question: "Qual o estado brasileiro onde a FMP está localizada?",
        answers: [
            { option: "SP", correct: false },
            { option: "PR", correct: false },
            { option: "RS", correct: false },
            { option: "SC", correct: true },
        ],
    },
    {
        question: "A FMP é mantida por qual entidade?",
        answers: [
            { option: "Prefeitura Municipal de Palhoça", correct: true },
            { option: "Governo Federal", correct: false },
            { option: "Governo Estadual", correct: false },
            { option: "Iniciativa Privada", correct: false },
        ],
    },
    {
        question: "Qual é o significado da sigla MEC no contexto do credenciamento da FMP?",
        answers: [
            { option: "Ministério da Educação", correct: true },
            { option: "Ministério de Estudos e Cultura", correct: false },
            { option: "Metodologia de Ensino e Currículo", correct: false },
            { option: "Movimento Educacional Comunitário", correct: false },
        ],
    },
    {
        question: "Qual o tipo de curso de Pedagogia oferecido pela FMP?",
        answers: [
            { option: "Bacharelado", correct: false },
            { option: "Licenciatura", correct: true },
            { option: "Pós-graduação", correct: false },
            { option: "Tecnólogo", correct: false },
        ],
    },
    {
        question: "Quem é a coordenadora do curso de ADS?",
        answers: [
            { option: "Profª. Rafaela", correct: false },
            { option: "Profª. Daniela", correct: false },
            { option: "Profª. Simone", correct: true },
            { option: "Profª. Alissane", correct: false },
        ],
    },
    {
        question: "Quem é a professora responsável pelo programa de pesquisa 'ILAB' da FMP?",
        answers: [
            { option: "Profª. Rafaela", correct: false },
            { option: "Profª. Daniela", correct: true },
            { option: "Profª. Simone", correct: false },
            { option: "Profª. Alissane", correct: false },
        ],
    },
    {
        question: "Qual a duração do curso de ADS?",
        answers: [
            { option: "2,5 anos", correct: true },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "2", correct: false },
        ],
    },
    {
        question: "Sabendo a missão da FMP, qual é a altura do Prof. Coradini?",
        answers: [
            { option: "≅ 1.80m", correct: false },
            { option: "≅ 1.77m", correct: false },
            { option: "≅ 1.70m", correct: true },
            { option: "≅ 1.65m", correct: false },
        ],
    },
];

export default questions;