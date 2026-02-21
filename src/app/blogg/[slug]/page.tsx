import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would normally come from a database or CMS
const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  'hvorfor-ventilasjonsrens-er-viktig': {
    title: 'Hvorfor er ventilasjonsrens så viktig?',
    date: '15. januar 2026',
    readTime: '5 min lesetid',
    content: [
      'Ventilasjonsanlegget er hjemmets lunger. Det sørger for frisk luft inn og forurensninger ut. Men hva skjer når det ikke vedlikeholdes?',
      'Over tid samler det seg støv, bakterier, sopp og andre partikler i ventilasjonsanlegget. Dette kan føre til en rekke problemer:',
      '**Dårligere inneklima:** Når kanalene er tilstoppet, får du dårligere luftkvalitet. Dette kan føre til hodepine, tretthet og konsentrasjonsproblemer.',
      '**Helseproblemer:** For personer med allergi eller astma kan et tilsmusset ventilasjonsanlegg forverresymptomene betydelig.',
      '**Økt energiforbruk:** Et tilsmusset anlegg må jobbe hardere for å flytte samme mengde luft. Dette kan øke strømforbruket med opptil 20%.',
      '**Dårlig lukt:** Bakterier og sopp i anlegget kan gi ubehagelig lukt i hele boligen.',
      'Vi anbefaler at ventilasjonsanlegg rengjøres hvert 3-5 år. Ved høyere belastning, som i boliger med kjæledyr eller røyk, kan hyppigere rengjøring være nødvendig.',
      'En profesjonell ventilasjonsrens fjerner alle forurensninger og sikrer at anlegget fungerer optimalt. Resultatet er friskere luft, lavere strømregninger og økt trivsel for hele familien.',
    ],
  },
  '5-tegn-pa-at-varmepumpen-trenger-service': {
    title: '5 tegn på at varmepumpen din trenger service',
    date: '8. januar 2026',
    readTime: '4 min lesetid',
    content: [
      'En varmepumpe er en investering som skal vare i mange år. Men for at den skal fungere optimalt, krever den regelmessig service. Her er fem tegn på at det er på tide:',
      '**1. Redusert varmeeffekt:** Merker du at varmepumpen ikke varmer like godt som før? Det kan være tegn på at den trenger rengjøring eller at kjølemedium må fylles på.',
      '**2. Økt strømforbruk:** En varmepumpe som ikke fungerer optimalt bruker mer strøm. Hvis du ser en uventet økning i strømregningen, kan service være løsningen.',
      '**3. Uvanlige lyder:** Hvis varmepumpen bråker mer enn vanlig, kan det være tegn på tekniske problemer som bør sjekkes av en fagperson.',
      '**4. Is på utedelen:** Litt is er normalt i vinterhalvåret, men hvis utedelen blir full av is, kan det være tegn på feil som må utbedres.',
      '**5. Dårlig lukt:** Ubehagelig lukt fra varmepumpen kan indikere bakterier eller sopp i filteret eller varmeveksleren.',
      'Våre F-gass sertifiserte teknikere utfører grundig service som sikrer optimal ytelse og lang levetid. Vi anbefaler årlig service for best resultat.',
      'Kontakt oss for å bestille service - vi gir deg en uforpliktende befaring og pristilbud.',
    ],
  },
  'slik-bytter-du-filter': {
    title: 'Slik bytter du filter i ventilasjonsanlegget',
    date: '2. januar 2026',
    readTime: '6 min lesetid',
    content: [
      'Å bytte filter i ventilasjonsanlegget er enklere enn du tror! Med vår steg-for-steg guide får du det gjort på bare 5 minutter.',
      '**Steg 1: Finn ventilasjonsaggregatet**\nDette er vanligvis plassert på badet, i bod eller på loft. Det ser ut som en boks med noen ventiler og kanskje en display.',
      '**Steg 2: Skru av anlegget**\nSkru av ventilasjonsanlegget før du starter. Dette gjør arbeidet tryggere og enklere.',
      '**Steg 3: Åpne luken**\nDe fleste aggregater har en luke eller deksel som enkelt kan åpnes. Sjekk bruksanvisningen hvis du er usikker.',
      '**Steg 4: Ta ut gammelt filter**\nFilteret sitter vanligvis i en ramme som kan trekkes ut. Det kan være ett eller to filtre avhengig av anleggstype.',
      '**Steg 5: Sett inn nytt filter**\nSett det nye filteret i rammen. Pass på at det sitter riktig vei - det er vanligvis en pil som viser luftretningen.',
      '**Steg 6: Lukk luken og start anlegget**\nLukk luken godt og start anlegget igjen. Ferdig!',
      'Vi anbefaler å bytte filter 1-2 ganger årlig. Med vårt filterabonnement får du nye filtre automatisk levert hjem - enkelt og praktisk!',
    ],
  },
  'inneklima-og-helse': {
    title: 'Inneklima og helse - hva du bør vite',
    date: '20. desember 2025',
    readTime: '7 min lesetid',
    content: [
      'Vi tilbringer 90% av tiden vår innendørs. Derfor er god inneklimaet essensielt for vår helse og trivsel.',
      'Dårlig inneklima kan føre til en rekke helseplager. De mest vanlige er hodepine, tretthet, øyeirritasjon og konsentrasjonsproblemer. For personer med allergi eller astma kan konsekvensene være mer alvorlige.',
      '**Hva påvirker inneklima?**\nFlere faktorer spiller inn: luftkvalitet, temperatur, luftfuktighet og støy. Ventilasjon er spesielt viktig for luftkvaliteten.',
      '**Betydningen av god ventilasjon**\nEt godt ventilasjonsanlegg fjerner forurensninger som støv, pollen, bakterier og CO2. Det tilfører også frisk luft, som er essensielt for god helse.',
      '**Symptomer på dårlig inneklima:**\n- Hodepine og tretthet\n- Tørr hud og slimhinner\n- Allergi og astmaproblemer\n- Konsentrasjonsvansker\n- Dårlig søvnkvalitet',
      '**Hva kan du gjøre?**\nRegelmessig vedlikehold av ventilasjonsanlegget er viktigste tiltak. I tillegg bør du:\n- Bytte filter 1-2 ganger årlig\n- Lufte ut daglig\n- Unngå overdreven fuktighet\n- Rengjøre jevnlig',
      'Med god ventilasjon og vedlikehold sikrer du et sunt og trivelig inneklima for hele familien.',
    ],
  },
  'spar-penger-med-riktig-vedlikehold': {
    title: 'Spar penger med riktig vedlikehold',
    date: '10. desember 2025',
    readTime: '5 min lesetid',
    content: [
      'Visste du at riktig vedlikehold av ventilasjon og varmepumpe kan spare deg for tusenvis av kroner årlig?',
      '**Lavere strømregning**\nEt godt vedlikeholdt ventilasjonsanlegg bruker opptil 20% mindre strøm enn et tilsmusset anlegg. For en gjennomsnittlig bolig kan det bety besparelser på 2000-4000 kr årlig.',
      '**Færre reparasjoner**\nRegelmessig service reduserer risikoen for kostbare reparasjoner. En service koster typisk 1000-2000 kr, mens en utskifting av varmepumpe kan koste 30 000-50 000 kr.',
      '**Lengre levetid**\nEn godt vedlikeholdt varmepumpe kan vare 15-20 år, mens en som ikke serviceres kan bli utslitt etter 8-10 år.',
      '**Bedre ytelse**\nEn ren og velsmurt varmepumpe gir bedre varmeeffekt. Det betyr at du får mer varme for hver krone du betaler i strøm.',
      '**Våre anbefalinger:**\n- Service varmepumpen årlig\n- Rengjør ventilasjonsanlegget hvert 3-5 år\n- Bytt filter 1-2 ganger årlig\n- Sjekk anleggene regelmessig for unormal drift',
      'Med riktig vedlikehold sikrer du optimal ytelse, lang levetid og lave driftskostnader. Kontakt oss for en uforpliktende befaring!',
    ],
  },
  'vinterklare-varmepumper': {
    title: 'Våre beste tips til vinterklare varmepumper',
    date: '1. november 2025',
    readTime: '6 min lesetid',
    content: [
      'Når kulden setter inn, er det viktig at varmepumpen fungerer optimalt. Her er våre beste tips for å forberede varmepumpen til vinteren.',
      '**1. Rengjør filteret**\nEt rent filter sikrer god luftstrøm og optimal ytelse. Dette er spesielt viktig i vinterhalvåret når varmepumpen jobber hardest.',
      '**2. Sjekk utedelen**\nFjern løv, kvister og andre ting som kan blokkere luftstrømmen rundt utedelen. Sørg for god plass rundt enheten.',
      '**3. Test alle funksjoner**\nKjør varmepumpen på ulike innstillinger for å sjekke at alt fungerer som det skal. Hvis du merker noe uvanlig, kontakt en fagperson.',
      '**4. Sjekk kondensvannslangen**\nKondensvann kan fryse i slangen vinterstid. Sjekk at den er ren og fri for hindringer.',
      '**5. Vurder service**\nHvis det er lenge siden sist service, er nå et godt tidspunkt. En service sikrer optimal ytelse hele vinteren.',
      '**Hva med is på utedelen?**\nLitt is er normalt i vinterhalvåret. Varmepumpen har automatisk avisingsfunksjon som tar seg av dette. Men hvis utedelen blir helt dekket av is, kan det være tegn på feil.',
      '**Temperaturinnstillinger**\nUnngå å sette temperaturen for høyt. 20-22 grader er ideelt for de fleste. Høyere temperatur gir ikke raskere oppvarming, bare høyere strømregning.',
      'Med riktig forberedelse holder varmepumpen deg varm hele vinteren. Kontakt oss hvis du har spørsmål eller trenger service!',
    ],
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Artikkel ikke funnet - AT Ventilasjon',
    };
  }

  return {
    title: `${post.title} - AT Ventilasjon`,
    description: post.content[0],
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/blogg" className="text-orange-600 hover:text-orange-700">
            ← Tilbake til blogg
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <time>{post.date}</time>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="h-96 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-lg mb-12" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
            Trenger du hjelp med ventilasjon eller varmepumpe?
          </h2>
          <p className="text-gray-700 mb-6">
            Kontakt oss for en uforpliktende befaring og pristilbud
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
          >
            Kontakt oss
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blogg/hvorfor-ventilasjonsrens-er-viktig"
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-[#1a365d] mb-2">
                Hvorfor er ventilasjonsrens så viktig?
              </h3>
              <p className="text-gray-600 text-sm">5 min lesetid</p>
            </Link>
            <Link 
              href="/blogg/5-tegn-pa-at-varmepumpen-trenger-service"
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-[#1a365d] mb-2">
                5 tegn på at varmepumpen din trenger service
              </h3>
              <p className="text-gray-600 text-sm">4 min lesetid</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
