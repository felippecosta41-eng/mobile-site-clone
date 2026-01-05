import { Check, Sparkles, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import cadernoMockup from "@/assets/caderno-mockup.png";
import bonusBook from "@/assets/bonus-book.png";
import lotusGold from "@/assets/lotus-gold.png";

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
            Caderno de Cura
          </h1>
          <h2 className="font-serif text-2xl font-semibold text-gold">
            com Ho'oponopono
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mb-4 text-center text-sm text-primary-foreground/90">
          Tem algo dentro de você pedindo por libertação?
        </p>
        <p className="mx-auto mb-8 max-w-sm text-center text-sm leading-relaxed text-primary-foreground/80">
          Este caderno é um espaço seguro para curar dores, romper ciclos e
          reencontrar sua paz interior.
        </p>

        {/* Product Mockup */}
        <div className="relative mb-8 flex justify-center">
          <div className="animate-float">
            <img
              src={cadernoMockup}
              alt="Caderno de Cura com Ho'oponopono"
              className="h-64 w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button variant="hero" size="xl" className="w-full max-w-xs">
            Quero me curar e prosperar agora
          </Button>
        </div>
      </section>

      {/* O que é Section */}
      <section className="bg-card px-4 py-10">
        <h3 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
          O que é o Caderno de Cura com Ho'oponopono?
        </h3>

        <div className="mx-auto max-w-lg space-y-4 text-center text-sm leading-relaxed text-foreground/80">
          <p>
            É um{" "}
            <span className="font-semibold text-primary">
              caderno terapêutico
            </span>{" "}
            que une a{" "}
            <span className="font-semibold text-primary">
              sabedoria ancestral do Ho'oponopono
            </span>{" "}
            ao{" "}
            <span className="font-semibold text-gold-dark">
              Método SLC – Sistema de Limpeza em Camadas
            </span>
            , criado para guiar você em um processo profundo de{" "}
            <span className="font-semibold text-primary">cura interior</span>.
          </p>
          <p>
            Com práticas guiadas e escritas conscientes, ele ajuda a{" "}
            <span className="font-semibold text-gold-dark">
              limpar memórias dolorosas
            </span>
            ,{" "}
            <span className="font-semibold text-gold-dark">
              liberar bloqueios emocionais
            </span>{" "}
            e{" "}
            <span className="font-semibold text-gold-dark">
              reprogramar sua energia
            </span>{" "}
            para manifestar uma nova realidade nas áreas{" "}
            <span className="font-semibold text-primary">financeira</span>,{" "}
            <span className="font-semibold text-primary">amorosa</span> e de{" "}
            <span className="font-semibold text-primary">
              saúde física e mental
            </span>
            .
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
                    cansado(a)
                  </span>{" "}
                  de{" "}
                  <span className="font-semibold text-primary">
                    repetir padrões
                  </span>{" "}
                  e quer uma{" "}
                  <span className="font-semibold text-primary">
                    transformação real
                  </span>
                </>
              ),
            },
            {
              text: (
                <>
                  Vive com{" "}
                  <span className="font-semibold text-primary">
                    ansiedade, tristeza, estresse
                  </span>{" "}
                  ou sensação de estar travado(a)
                </>
              ),
            },
            {
              text: (
                <>
                  Deseja melhorar sua energia nos{" "}
                  <span className="font-semibold text-primary">
                    relacionamentos
                  </span>
                  , no{" "}
                  <span className="font-semibold text-primary">dinheiro</span> e
                  na{" "}
                  <span className="font-semibold text-primary">
                    saúde física e emocional
                  </span>
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
                  e quer{" "}
                  <span className="font-semibold text-primary">aprofundar</span>
                </>
              ),
            },
            {
              text: (
                <>
                  Ou quer{" "}
                  <span className="font-semibold text-primary">
                    começar do zero
                  </span>
                  , com uma{" "}
                  <span className="font-semibold text-primary">
                    ferramenta prática
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold text-primary">acolhedora</span>
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-soft"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold">
                <Check className="h-4 w-4 text-accent-foreground" />
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
          dentro do Caderno de Cura
        </h4>

        {/* Pages Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2">
            <BookOpen className="h-4 w-4 text-gold-dark" />
            <span className="text-sm font-medium text-gold-dark">
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
          <p className="mb-8 text-center text-sm font-medium text-gold-dark">
            ✨ 5 fases de transformação emocional
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
          Um método progressivo que te leva do sofrimento à liberdade, da
          confusão à clareza, da dor à paz interior duradoura.
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
              src={bonusBook}
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
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
              <Star className="h-4 w-4" />
              Incluso Gratuitamente
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-hero px-4 py-12">
        <div className="mb-6 flex justify-center">
          <img
            src={lotusGold}
            alt="Lotus dourada"
            className="h-20 w-auto animate-pulse-soft"
          />
        </div>

        <h3 className="mb-4 text-center font-serif text-2xl font-bold text-primary-foreground">
          Comece sua jornada de cura agora
        </h3>

        <p className="mx-auto mb-8 max-w-sm text-center text-sm leading-relaxed text-primary-foreground/85">
          Não espere mais para se libertar das dores do passado e criar a vida
          que você merece.
        </p>

        <div className="flex justify-center">
          <Button
            variant="hero"
            size="xl"
            className="w-full max-w-xs"
            onClick={scrollToTop}
          >
            Quero me curar e prosperar agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-deep px-4 py-6">
        <p className="text-center text-xs text-primary-foreground/60">
          © 2024 Caderno de Cura com Ho'oponopono. Todos os direitos reservados.
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
          <span className="shrink-0 text-gold-dark">{number}-{index + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
