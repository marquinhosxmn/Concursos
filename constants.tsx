import { 
  BookOpen, 
  Video, 
  FileText, 
  BrainCircuit, 
  Layers, 
  Infinity as InfinityIcon, 
  Download,
  ShieldCheck
} from 'lucide-react';
import { Feature, Testimonial, FaqItem } from './types';

export const FEATURES: Feature[] = [
  {
    title: "+50 Cursos Completos",
    description: "Acesso a um acervo gigantesco com cursos das maiores plataformas do mercado.",
    icon: BookOpen,
  },
  {
    title: "Videoaulas Atualizadas",
    description: "Assista às aulas onde e quando quiser, com qualidade e didática superior.",
    icon: Video,
  },
  {
    title: "PDFs e Apostilas",
    description: "Material escrito completo para você acompanhar as aulas e revisar o conteúdo.",
    icon: FileText,
  },
  {
    title: "Mapas Mentais",
    description: "Acelere sua memorização com esquemas visuais prontos para revisão.",
    icon: BrainCircuit,
  },
  {
    title: "Diversas Bancas",
    description: "Conteúdo focado nas principais bancas examinadoras do país.",
    icon: Layers,
  },
  {
    title: "Acesso Vitalício",
    description: "Pague uma única vez e tenha acesso para sempre, sem mensalidades.",
    icon: InfinityIcon,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Clara Souza",
    role: "Aprovada no TJ-SP",
    image: "https://picsum.photos/id/64/150/150",
    text: "Eu gastava muito dinheiro com assinaturas mensais. O ConcursoPro+ salvou meus estudos! Material organizado e completo.",
  },
  {
    name: "Ricardo Mendes",
    role: "Estudante para PF",
    image: "https://picsum.photos/id/91/150/150",
    text: "Inacreditável a quantidade de conteúdo pelo preço. Os mapas mentais me ajudam muito na revisão final.",
  },
  {
    name: "Fernanda Lima",
    role: "Iniciante em Concursos",
    image: "https://picsum.photos/id/342/150/150",
    text: "Para quem está começando e não pode investir milhares de reais, essa é a melhor opção. Recomendo demais!",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Ao realizar o pagamento único de R$ 29,90, você garante acesso permanente ao grupo e a todas as futuras atualizações sem pagar nenhum centavo a mais.",
  },
  {
    question: "Como recebo o acesso ao material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link exclusivo para entrar no nosso Grupo VIP no Telegram.",
  },
  {
    question: "Preciso pagar mensalidade?",
    answer: "Não. O ConcursoPro+ é um pagamento único. Sem assinaturas, sem cobranças recorrentes e sem surpresas.",
  },
  {
    question: "Funciona no celular?",
    answer: "Perfeitamente. Como o conteúdo está hospedado no Telegram e Drive, você pode acessar, assistir e ler tudo pelo celular, tablet ou computador.",
  },
  {
    question: "Posso baixar os materiais?",
    answer: "Sim, você pode fazer o download dos PDFs, mapas mentais e resumos para estudar offline quando quiser.",
  },
];

export const PLATFORMS = [
  "Estratégia",
  "Focus",
  "GranCursos",
  "AlfaCon",
  "QConcursos",
  "Descomplica",
  "Universo Narrado"
];