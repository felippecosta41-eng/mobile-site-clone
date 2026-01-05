import { Check, Sparkles, BookOpen, Star, Plus, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import cadernoDinheiro from "@/assets/caderno-dinheiro.png";
import bonusMapa from "@/assets/bonus-mapa.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden px-4 pb-8 pt-6">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold-light">
              Sistema Único de Limpeza em Camadas
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="font-serif text-3xl font-bold uppercase tracking-wide text-primary-foreground">
            CADERNO DE IMÃ DE DINHEIRO
          </h1>
          <h2 className="font-serif text-2xl font-semibold text-gold">
            com Ho'oponopono
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mb-4 text-center text-sm text-primary-foreground/90">
          Você sente que o dinheiro foge de você ou que nunca é o suficiente?
        </p>
        <p className="mx-auto mb-8 max-w-sm text-center text-sm leading-relaxed text-primary-foreground/80">
          Este caderno é um espaço sagrado para romper pactos de escassez e abrir os caminhos para a prosperidade ilimitada que já é sua por direito!
        </p>

        {/* Product Mockup */}
        <div className="relative mb-8 flex justify-center">
          <div className="animate-float">
            <img
              src={cadernoDinheiro}
              alt="Caderno Imã de Dinheiro com Ho'oponopono"
              className="h-64 w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button variant="hero" size="xl" className="w-full max-w-xs">
            QUERO ME TORNAR UM IMÃ DE DINHEIRO
          </Button>
        </div>
      </section>

      {/* O que é Section */}
      <section className="bg-card px-4 py-10">
        <h3 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
          O que é o Caderno Imã de Dinheiro com Ho'oponopono?
        </h3>

        <div className="mx-auto max-w-lg space-y-4 text-center text-sm leading-relaxed text-foreground/80">
          <p>
            É um{" "}
            <span className="font-semibold text-primary">
              caderno de ativação financeira
            </span>{" "}
            que une a{" "}
            <span className="font-semibold text-primary">
              sabedoria ancestral do Ho'oponopono
            </span>{" "}
            ao{" "}
            <span className="font-semibold text-gold-dark">
              Método SLC – Sistema de Limpeza em Camadas
            </span>
            , criado especificamente para guiar você para a{" "}
            <span className="font-semibold text-spotify">riqueza</span>.
          </p>
          <p>
            Com práticas guiadas e escritas magnéticas, ele ajuda a{" "}
            <span className="font-semibold text-gold-dark">
              limpar memórias de escassez
            </span>
            ,{" "}
            <span className="font-semibold text-gold-dark">
              liberar bloqueios que impedem o fluxo do dinheiro
            </span>{" "}
            e{" "}
            <span className="font-semibold text-gold-dark">
              reprogramar sua frequência vibracional
            </span>{" "}
            para manifestar{" "}
            <span className="font-semibold text-spotify">
              prosperidade imediata
            </span>{" "}
            e{" "}
            <span className="font-semibold text-spotify">
              segurança financeira
            </span>{" "}
            em todos os níveis da sua vida.
          </p>
        </div>
      </section>

      {/* É para você que Section */}
      <section className="bg-lavender px-4 py-10">
        <h3 className="mb-8 text-center font-serif text-2xl font-bold text-primary">
          É para você que:
        </h3>

        <div className="mx-auto max-w-lg space-y-4">
          {[
            {
              text: (
                <>
                  Está{" "}
                  <span className="font-semibold text-primary">
                    cansado(a) de viver no "limite"
                  </span>{" "}
                  e quer{" "}
                  <span className="font-semibold text-spotify">
                    romper definitivamente com o ciclo da escassez
                  </span>{" "}
                  e das contas que nunca param de chegar.
                </>
              ),
            },
            {
              text: (
                <>
                  Sente{" "}
                  <span className="font-semibold text-primary">
                    ansiedade e medo
                  </span>{" "}
                  em relação ao futuro financeiro ou sente que, por mais que trabalhe, o{" "}
                  <span className="font-semibold text-primary">
                    dinheiro parece "fugir"
                  </span>{" "}
                  das suas mãos.
                </>
              ),
            },
            {
              text: (
                <>
                  Deseja{" "}
                  <span className="font-semibold text-spotify">
                    destravar sua energia de merecimento
                  </span>{" "}
                  para atrair novas oportunidades, promoções, clientes e{" "}
                  <span className="font-semibold text-gold-dark">
                    abundância inesperada
                  </span>
                  .
                </>
              ),
            },
            {
              text: (
                <>
                  Já conhece o{" "}
                  <span className="font-semibold text-primary">
                    Ho'oponopono
                  </span>{" "}
                  e quer direcionar essa ferramenta poderosa especificamente para a{" "}
                  <span className="font-semibold text-spotify">
                    limpeza de crenças limitantes sobre riqueza
                  </span>
                  .
                </>
              ),
            },
            {
              text: (
                <>
                  Quer{" "}
                  <span className="font-semibold text-primary">
                    começar do zero
                  </span>
                  , com um{" "}
                  <span className="font-semibold text-spotify">
                    método prático e infalível
                  </span>{" "}
                  para reprogramar sua mente para o{" "}
                  <span className="font-semibold text-gold-dark">
                    sucesso e a liberdade financeira
                  </span>
                  .
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-soft"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-spotify">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/85">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Veja o que você vai encontrar */}
      <section className="bg-card px-4 py-10">
        <h3 className="mb-2 text-center font-serif text-xl text-foreground/80">
          Veja o que você vai encontrar
        </h3>
        <h4 className="mb-4 text-center font-serif text-2xl font-bold text-primary">
          dentro do Caderno Imã de Dinheiro
        </h4>

        {/* Pages Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-spotify/15 px-4 py-2">
            <BookOpen className="h-4 w-4 text-spotify-dark" />
            <span className="text-sm font-medium text-spotify-dark">
              Mais de 153 páginas de conteúdo transformador
            </span>
          </div>
        </div>

        {/* Conteúdo Programático */}
        <div className="mx-auto max-w-lg">
          <h5 className="mb-4 text-center font-serif text-xl font-bold text-primary">
            Conteúdo Programático
          </h5>
          <p className="mb-2 text-center text-sm text-foreground/70">
            Com o Método SLC – Sistema de Limpeza em Camadas
          </p>
          <p className="mb-8 text-center text-sm font-medium text-spotify">
            ✨ 5 fases de transformação financeira
          </p>

          {/* Phases */}
          <div className="space-y-6">
            {/* Fase 1 */}
            <PhaseSection
              number={1}
              title="DESPERTAR DA CONSCIÊNCIA"
              subtitle="Entenda o que te bloqueia, e prepare o terreno da cura"
              items={[
                "Boas-vindas: criando seu espaço sagrado de transformação",
                "Como usar o Caderno",
                "Como surgem as memórias dolorosas e como elas moldam sua realidade",
                "O que é Ho'oponopono e como ele atua nas suas memórias",
                "As 4 frases sagradas: o poder por trás",
                "O que é o Método SLC – Sistema de Limpeza em Camadas",
                "As 3 Camadas da Cura: Superficial, Recorrente e Profunda",
                "Diagnóstico da Dor: Qual é a sua Camada?",
              ]}
            />

            {/* Fase 2 */}
            <PhaseSection
              number={2}
              title="LIMPEZA SUPERFICIAL: Aliviando as dores do agora"
              subtitle="Libere tensões visíveis, padrões emocionais recentes e sintomas que pesam no seu dia a dia."
              items={[
                "Ativando palavras-gatilho com intenção de cura real",
                "Rituais diários para liberar cargas emocionais",
                "Cura da ansiedade, culpa e sobrecarga",
                "Cura de Conflitos e Mágoas Familiares",
                "Primeiras Liberações: Lidando com Ansiedade, Irritação e Culpa",
                "Ferramentas do SLC e Ho'oponopono: Como Acelerar a Liberação",
              ]}
            />

            {/* Fase 3 */}
            <PhaseSection
              number={3}
              title="LIMPEZA RECORRENTE: Curando padrões que se repetem"
              subtitle="Acesse e limpe raízes profundas: padrões, traumas e feridas invisíveis"
              items={[
                "Cura da Criança Interior e Segurança Emocional",
                "Contratos emocionais inconscientes: por que você repete as mesmas histórias?",
                "Perdão profundo e libertador: Soltando o que prende seu coração",
                "Liberando karma, culpa ancestral e peso do passado",
                "Trabalhando o luto, a saudade e a dor da perda",
                "Curando dor física com fundo emocional",
                "Aliviando tensão mental e harmonizando a saúde vibracional",
              ]}
            />

            {/* Fase 4 */}
            <PhaseSection
              number={4}
              title="LIMPEZA PROFUNDA: Vibrando em uma nova frequência"
              subtitle="Crie espaço para uma nova vibração em todas as áreas da sua vida"
              items={[
                "Curando e desbloqueando os chakras",
                "Limpeza dos Chakras",
                "Reorganizando sua vida com consciência vibracional",
                "Desbloqueio da Abundância com Palavras-Gatilho",
                "Reconstruindo sua Relação com o Dinheiro e o Merecimento",
                "Cura de Relacionamentos Amorosos (mesmo à distância ou após término)",
                "Criando Nova Realidade com Intenção",
              ]}
            />

            {/* Fase 5 */}
            <PhaseSection
              number={5}
              title="INTEGRAÇÃO E RENASCIMENTO: Sua Nova Versão"
              subtitle="Sua nova versão: mais leve, conectada e em paz"
              items={[
                "Como manter o Método SLC e o Ho'oponopono no dia a dia",
                "O que fazer caso apareçam obstáculos, dúvidas e recaídas",
                "Oração de abertura para sua nova versão",
                "DESAFIO PRÁTICO: Consolidando sua Nova Versão",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Transformação Banner */}
      <section className="gradient-purple-section px-4 py-10">
        <h3 className="mb-4 text-center font-serif text-2xl font-bold text-primary-foreground">
          Transformação Completa em 5 Fases
        </h3>
        <p className="mx-auto max-w-sm text-center text-sm leading-relaxed text-primary-foreground/85">
          Um método progressivo que te leva da escassez à abundância, da
          confusão à clareza, do medo financeiro à liberdade e prosperidade.
        </p>
      </section>

      {/* Bônus Section */}
      <section className="bg-card px-4 py-10">
        <h3 className="mb-8 text-center font-serif text-2xl font-bold text-primary">
          Bônus Exclusivo
        </h3>

        <div className="mx-auto max-w-sm">
          <div className="mb-6 flex justify-center">
            <img
              src={bonusMapa}
              alt="Mapa da Limpeza Energética dos Ambientes"
              className="h-56 w-auto drop-shadow-lg"
            />
          </div>

          <h4 className="mb-3 text-center font-serif text-lg font-bold text-primary">
            Mapa da Limpeza Energética dos Ambientes
          </h4>

          <p className="mb-6 text-center text-sm leading-relaxed text-foreground/75">
            Um guia rápido e poderoso para aplicar o Ho'oponopono em sua casa.
            Limpe a energia dos espaços, crie rituais simples e transforme o
            lugar onde você vive em um templo de paz.
          </p>

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-spotify/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-spotify-dark">
              <Star className="h-4 w-4" />
              Incluso Gratuitamente
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="gradient-hero px-4 py-12">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-red-500 bg-red-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-wide text-primary-foreground">
              ⏰ 80% DE DESCONTO HOJE
            </span>
          </div>
        </div>

        {/* Product List */}
        <div className="mx-auto mb-8 max-w-sm rounded-lg bg-card/95 p-4 shadow-elevated">
          <div className="space-y-2 text-xs">
            {[
              { icon: "✓", text: "Caderno Imã de Dinheiro com Ho'oponopono", color: "text-spotify" },
              { icon: "✓", text: "Caixa de Oráculos – Palavras que Curam", color: "text-spotify" },
              { icon: "✓", text: "Diário dos 21 Ciclos de Limpeza e Autocura", color: "text-spotify" },
              { icon: "✓", text: "Meditações Guiadas Ho'oponopono", color: "text-gold-dark" },
              { icon: "✓", text: "Cultivando Amor-Próprio com Ho'oponopono", color: "text-gold-dark" },
              { icon: "✓", text: "Biodescodificador Emocional com Palavras-Gatilho", color: "text-gold-dark" },
              { icon: "✓", text: "Caderno de Cura da Linhagem Familiar", color: "text-gold-dark" },
              { icon: "✓", text: "Mapa da Limpeza Energética dos Ambientes", color: "text-gold-dark" },
              { icon: "✓", text: "Manual dos Arcanjos com Ho'oponopono", color: "text-gold-dark" },
              { icon: "✓", text: "Desenhos Terapêuticos para Colorir", color: "text-purple-medium" },
              { icon: "📄", text: "Material em PDF", color: "text-purple-medium" },
              { icon: "📧", text: "Receba imediatamente em seu e-mail", color: "text-purple-medium" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={item.color}>{item.icon}</span>
                <span className="text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 text-center">
          <p className="text-sm text-primary-foreground/70 line-through">
            Valor Total: R$ 149,90
          </p>
          <h4 className="mt-2 font-serif text-xl font-bold uppercase text-primary-foreground">
            PREÇO SOMENTE HOJE
          </h4>
          <p className="mt-2 font-serif text-4xl font-bold text-spotify">
            5X R$6,51
          </p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Ou R$ 29,90 À Vista
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="hero"
            size="xl"
            className="w-full max-w-xs"
            onClick={scrollToTop}
          >
            🚀 QUERO ACESSO IMEDIATO
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card px-4 py-10">
        <h3 className="mb-8 text-center font-serif text-2xl font-bold text-primary">
          Perguntas Frequentes
        </h3>

        <div className="mx-auto max-w-lg">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                Como vou receber o Caderno?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Você receberá o acesso imediatamente após a confirmação do pagamento, diretamente no seu e-mail cadastrado. Todo o material é digital em formato PDF.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                Posso acessar o material pelo celular?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Sim! O material pode ser acessado de qualquer dispositivo: celular, tablet ou computador. Você pode ler online ou baixar para ler offline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                Tem garantia?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                O Pagamento é seguro?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Totalmente seguro! Utilizamos a plataforma de pagamentos mais confiável do Brasil, com criptografia de dados e proteção total.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                Não estou achando o e-mail com os dados de acesso, o que eu faço?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Verifique sua caixa de spam ou lixo eletrônico. Se ainda não encontrar, entre em contato com nosso suporte que enviaremos novamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="rounded-lg border bg-background px-4">
              <AccordionTrigger className="text-left text-sm font-medium text-spotify hover:no-underline">
                Porque o Diário tem um valor tão baixo?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/70">
                Acreditamos que a transformação deve ser acessível para todos. Nosso objetivo é ajudar o máximo de pessoas a alcançar a prosperidade e a liberdade financeira.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-deep px-4 py-6">
        <p className="text-center text-xs text-primary-foreground/60">
          © 2024 Caderno Imã de Dinheiro com Ho'oponopono. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

// Phase Section Component
interface PhaseSectionProps {
  number: number;
  title: string;
  subtitle: string;
  items: string[];
}

const PhaseSection = ({ number, title, subtitle, items }: PhaseSectionProps) => (
  <div className="rounded-xl border border-border/50 bg-lavender/50 p-4">
    <h6 className="mb-2 font-serif text-lg font-bold text-primary">
      FASE {number} — {title}
    </h6>
    <p className="mb-4 text-xs italic text-foreground/60">{subtitle}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-sm text-foreground/80"
        >
          <span className="shrink-0 text-spotify">{number}-{index + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;