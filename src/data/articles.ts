export type ArticleCategory =
  | "Exposition"
  | "Biographie"
  | "Événement"
  | "Culture"
  | "Musique"
  | "Littérature";

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  content: string; // Rich text / paragraphs joined by \n\n
  date: string;
  author: string;
  imageUrl?: string;
  images?: string[]; // Additional images for the detail page
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Exposition au Musée Paul Ahyi – S'organiser Suffira",
    category: "Exposition",
    excerpt:
      "Retour sur l'exposition collective « S'organiser Suffira » au Musée Paul Ahyi, qui a réuni onze artistes pour célébrer la force de la solidarité et de l'organisation collective.",
    date: "Janvier 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 1/Article 1 _page-0001.jpg",
    images: [
      "/article/Article 1/Article 1 _page-0001.jpg",
      "/article/Article 1/Article 1 _page-0002.jpg",
      "/article/Article 1/Article 1 _page-0003.jpg",
      "/article/Article 1/Article 1 _page-0004.jpg",
      "/article/Article 1/Article 1 _page-0005.jpg",
      "/article/Article 1/Article 1 _page-0006.jpg",
    ],
    content: `L'exposition collective « S'organiser Suffira » a ouvert ses portes au Musée Paul Ahyi (Agoè-Caccaveli, Lomé) du 25 janvier au 22 février 2025. Ce rendez-vous artistique d'envergure a réuni onze artistes plasticiens togolais autour d'une vision commune : celle que l'organisation et la solidarité constituent la clef du changement.

Parmi les artistes exposants figuraient des noms reconnus de la scène plastique locale comme Manouchka Shams, Tesprit et Marius Dansou. Chacun a proposé un regard singulier sur la thématique, à travers des œuvres mêlant peintures, sculptures et installations.

Le Musée Paul Ahyi, temple de la culture togolaise, s'est une nouvelle fois imposé comme le cadre idéal pour accueillir des créations qui interpellent le visiteur et l'invitent à la réflexion. L'atmosphère de l'exposition était à la fois contemplative et engagée, conjuguant l'esthétique à un propos résolument politique et social.

Art Révolution a participé activement à la couverture et à la promotion de cet événement, fidèle à sa mission de valorisation des talents africains. L'exposition « S'organiser Suffira » restera dans les mémoires comme une édition qui a su rassembler, inspirer et mobiliser.`,
  },
  {
    id: "2",
    title: "Biographie : Cosmaskete, l'art comme engagement politique",
    category: "Biographie",
    excerpt:
      "Portrait de Cosmaskete (Kete Atsou), artiste plasticien cobondateur d'Art Révolution, dont l'œuvre est entièrement dédiée à la revalorisation de l'identité et des valeurs africaines.",
    date: "Février 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 2/Article 2.jpg",
    images: ["/article/Article 2/Article 2.jpg"],
    content: `Kete Atsou, connu sous le nom d'artiste Cosmaskete, est l'une des figures les plus engagées de la scène artistique togolaise contemporaine. Co-fondateur de la plateforme Art Révolution aux côtés de WOMI Koffi Arsène, il incarne à travers son œuvre une vision profondément africaine de l'art.

Né au Togo, Cosmaskete a très tôt développé une sensibilité particulière pour les symboles, les couleurs et les matières qui définissent l'identité culturelle africaine. Ses tableaux se distinguent par une palette riche et vibrante, et par un recours assumé aux éléments emblématiques du continent : le cauris, les masques, les tissus traditionnels.

Pour lui, peindre n'est pas un acte gratuit. C'est un acte militant. Chaque toile est une déclaration, un manifeste pour la dignité africaine et pour le refus de l'oubli culturel. Sa série « Revalorisation des Valeurs Africaines », exposée en avril 2025 au CETEF Togo 2000, en est l'illustration la plus récente et la plus aboutie.

Cosmaskete est également un passeur de savoirs. Au sein d'Art Révolution, il s'implique dans la formation de jeunes artistes, convaincu que la transmission est la condition première de la survie d'une culture. Son engagement dépasse l'atelier : il est présent dans les écoles, les espaces communautaires, les forums culturels.

« L'art est un miroir. Si vous regardez une œuvre africaine et ne vous y reconnaissez pas, c'est que quelqu'un a brisé ce miroir. Mon travail, c'est de le réparer. » — Cosmaskete`,
  },
  {
    id: "3",
    title: "Café Littéraire – La Poésie de Kodjo Ketohou",
    category: "Culture",
    excerpt:
      "Retour sur le Café Littéraire dédié à la poésie de Kodjo Ketohou, une soirée d'échange intense qui a célébré la puissance du verbe et la richesse de la tradition orale togolaise.",
    date: "Mars 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 3/Article 3_page-0001.jpg",
    images: [
      "/article/Article 3/Article 3_page-0001.jpg",
      "/article/Article 3/Article 3_page-0002.jpg",
      "/article/Article 3/Article 3_page-0003.jpg",
      "/article/Article 3/Article 3_page-0004.jpg",
    ],
    content: `La tradition du Café Littéraire organisé par Art Révolution s'est une nouvelle fois illustrée avec une soirée dédiée à la poésie de Kodjo Ketohou. Face à un public nombreux et attentif, le poète a déclamé ses textes avec une intensité rare, faisant vibrer la salle de résonances à la fois intimes et universelles.

Kodjo Ketohou est l'un des poètes les plus singuliers de sa génération au Togo. Sa langue, à la croisée du français et des langues éwé et mina, tisse des images puissantes autour des thèmes de la mémoire, de la nature, de l'amour et de la résistance. Ses textes empruntent autant à la tradition orale qu'à la modernité littéraire.

La soirée a été l'occasion d'échanges riches entre le poète et le public, autour de la place de la littérature dans la société togolaise, du rôle du poète comme voix du peuple, et des défis de la création littéraire en Afrique francophone.

Art Révolution a voulu, à travers ce Café Littéraire, rappeler que la poésie est aussi une forme d'art visuel : elle peint, elle sculpte, elle compose. En réunissant des artistes plasticiens et des poètes sous un même toit, la plateforme affirme sa conviction que toutes les formes d'expression artistique se nourrissent les unes des autres.

Les œuvres de Cosmaskete exposées ce soir-là — dont sa toile signature mettant en scène une femme portant un enfant au dos — ont répondu en écho silencieux aux mots du poète, dans une harmonie qui a ému plus d'un spectateur.`,
  },
  {
    id: "4",
    title: "Art & Mémoires 2025 – La mémoire comme acte de résistance",
    category: "Culture",
    excerpt:
      "Compte-rendu du Festival Art & Mémoires 2025, tenu du 6 au 16 février à Agbodrafo, Lomé et Kpalimé, autour du thème de la mémoire de la traite négrière et de l'unicité africaine en héritage.",
    date: "Février 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 4/Article 4_page-0001.jpg",
    images: [
      "/article/Article 4/Article 4_page-0001.jpg",
      "/article/Article 4/Article 4_page-0003.jpg",
      "/article/Article 4/Article 4_page-0004.jpg",
      "/article/Article 4/Article 4_page-0005.jpg",
      "/article/Article 4/Article 4_page-0006.jpg",
      "/article/Article 4/Article 4_page-0007.jpg",
      "/article/Article 4/Article 4_page-0008.jpg",
    ],
    content: `Le Festival Art & Mémoires a une fois encore prouvé sa capacité à mobiliser les consciences et les Arts autour d'une cause essentielle : la mémoire de la traite négrière et son inscription dans l'identité africaine contemporaine. Tenu du 6 au 16 février 2025 à Agbodrafo, Lomé et Kpalimé (Togo), et simultanément en Guadeloupe, cet événement a rassemblé artistes, historiens, militants culturels et citoyens engagés.

Le programme de cette édition 2025 était particulièrement dense. Une marche mémorielle a été organisée le 9 février, symbolisant le chemin parcouru par les millions d'Africains arrachés à leur terre. Des conférences ont suivi, réunissant chercheurs et intellectuels pour revisiter l'histoire et ses répercussions sur les sociétés africaines et caribéennes d'aujourd'hui.

Le concert de clôture, le 16 février, a constitué l'un des moments les plus forts du festival. Des artistes venus des deux rives de l'Atlantique — Togo et Guadeloupe — ont fusionné leurs traditions musicales en un dialogue sonore vibrant, rappelant que la mémoire est aussi une fête, une célébration de la survie.

Art Révolution, partenaire de cet événement, a assuré une couverture complète du festival, de l'installation des œuvres aux échanges entre les participants. Les partenaires KEKELI, HUB CITY, wärma et NeHo Liko ont soutenu l'initiative et contribué à son rayonnement.

Le thème « Unicité en héritage » résume bien l'ambition du festival : non pas pleurer le passé, mais en faire une force pour le présent et l'avenir.`,
  },
  {
    id: "5",
    title: "Espoir FADU – Lancement du Programme « La Mission de Mon Pinceau »",
    category: "Événement",
    excerpt:
      "Retour sur le lancement officiel du programme « La Mission de Mon Pinceau » d'Espoir FADU, une initiative culturelle ambitieuse dédiée à la paix et au développement en Afrique.",
    date: "Novembre 2024",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 5/Article 5_page-0001.jpg",
    images: [
      "/article/Article 5/Article 5_page-0001.jpg",
      "/article/Article 5/Article 5_page-0002.jpg",
      "/article/Article 5/Article 5_page-0003.jpg",
      "/article/Article 5/Article 5_page-0004.jpg",
      "/article/Article 5/Article 5_page-0005.jpg",
    ],
    content: `Le programme culturel « La Mission de Mon Pinceau » d'Espoir FADU a été officiellement lancé lors d'une cérémonie de presse tenue à l'Atelier le « Citoyen » à Avenou, Lomé. Cette initiative, portée par l'Association les Messagers de la Jarre de Paix (AMJP) et ses partenaires, se veut un pont entre l'art, la paix et le développement durable en Afrique.

Espoir FADU est un artiste togolais dont le nom porte en lui-même tout un programme : « FADU » — Foi, Amour, Détermination, Unicité. À travers ses œuvres et ses performances, il utilise l'art plastique comme outil de conscientisation et de construction de la paix sociale, notamment auprès des jeunes.

Le lancement du programme a rassemblé des représentants institutionnels, des acteurs culturels, des journalistes et un public de passionnés. La conférence de presse a été l'occasion de présenter les axes du programme : ateliers dans les écoles, expositions itinérantes, interventions dans les zones de conflit ou de tension sociale, et création d'un fonds de soutien aux jeunes artistes.

La bannière du programme, visible lors de l'événement, résumait l'ambition : « Culture – Paix – Développement en Afrique ». Une devise qui s'inscrit parfaitement dans la vision d'Art Révolution, qui a apporté son soutien médiatique à cette initiative.

Art Révolution croit fermement que l'art est un vecteur de transformation sociale, et le programme d'Espoir FADU en est une illustration concrète et inspirante.`,
  },
  {
    id: "6",
    title: "Biographie : Lekid – L'étoile montante de la scène togolaise",
    category: "Biographie",
    excerpt:
      "Portrait de Lekid, jeune artiste polyvalent dont le parcours atypique et la détermination sans faille font de lui l'une des figures les plus prometteuses de la nouvelle génération artistique togolaise.",
    date: "Octobre 2024",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 6/Article 6.jpg",
    images: ["/article/Article 6/Article 6.jpg"],
    content: `Lekid. Un prénom d'artiste qui sonne comme une promesse. Derrière ce nom se cache un jeune créateur togolais dont le talent et la polyvalence n'ont de limites que celles qu'il se fixe lui-même. Musicien, performeur et artiste visuel, Lekid incarne parfaitement la nouvelle génération africaine : connectée au monde, ancrée dans ses racines, déterminée à s'imposer.

Son parcours est tout sauf linéaire. Autodidacte dans l'âme, Lekid a appris son métier dans les rues de Lomé, dans les ateliers de création collective, et en dialogue constant avec des aînés comme Cosmaskete, dont l'influence est visible dans son approche plastique. Mais Lekid a su forger sa propre voix, reconnaissable entre toutes.

Sa musique emprunte aux sonorités de l'Afrique de l'Ouest — le highlife, l'afrobeats, le coupé-décalé — tout en les irriguant d'influences urbaines internationales. Sur scène, il dégage une énergie communicative qui capte immédiatement l'attention du public.

Art Révolution a choisi de mettre Lekid à l'honneur dans cet article car son histoire est celle de milliers de jeunes africains qui créent sans filet, sans lest institutionnel, avec pour seule boussole leur passion et leur foi en leur art. C'est précisément pour ces jeunes talents que la plateforme existe : pour leur offrir visibilité, soutien et réseau.

L'avenir de Lekid s'écrit à l'encre de sa créativité. Nous n'avons pas fini d'entendre parler de lui.`,
  },
  {
    id: "7",
    title: "Talakaka – Décryptage d'un album entre tradition et modernité",
    category: "Musique",
    excerpt:
      "Analyse du dernier opus musical de Talakaka, un album ambitieux qui tisse un dialogue inédit entre les sonorités traditionnelles africaines et les productions musicales contemporaines.",
    date: "Septembre 2024",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 7/Article 7.jpg",
    images: ["/article/Article 7/Article 7.jpg"],
    content: `Avec son nouvel album, Talakaka signe une œuvre qui s'affranchit des cases. Ni purement traditionnel, ni résolument moderne, cet opus se situe dans un espace interstitiel fascinant, là où les genres se rencontrent et s'enrichissent mutuellement.

Le terme « Talakaka » lui-même vient d'une langue du nord du Togo et évoque la résilience, la capacité à se relever après une chute. C'est l'âme de cet album : une musique qui dit la souffrance sans se complaire en elle, et qui célèbre le recommencement, la renaissance.

Dès les premières notes, l'auditeur est frappé par la richesse des arrangements. Les percussions traditionnelles — tam-tams, djembés, calebasses — dialoguent avec des claviers électroniques et des guitares. Les voix, parfois solitaires, parfois en polyphonie, tissent un récit qui traverse les générations.

Les thèmes abordés sont universels : l'amour, la famille, la mélancolie de l'exil, la fierté d'appartenir à une culture millénaire. Mais ils sont traités avec une subtilité qui évite tout folklore de façade. Talakaka ne cherche pas à faire de la tradition un spectacle : il en fait un langage vivant.

Art Révolution a suivi de près la création de cet album et en a assuré la promotion auprès de son communauté. Cet artiste mérite une écoute attentive et un public à la hauteur de son talent.`,
  },
  {
    id: "8",
    title: "Lancement du livre « Un Pied à l'École, Un Pied sur LinkedIn » – Parfait K. Toke",
    category: "Littérature",
    excerpt:
      "Retour sur la cérémonie de lancement du premier livre de Parfait K. Toke, tenu le 9 avril 2025 à Open The Box, Lomé, un événement qui a réuni jeunes professionnels, entrepreneurs et passionnés de développement personnel.",
    date: "Avril 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 8/Article 8_page-0001.jpg",
    images: [
      "/article/Article 8/Article 8_page-0001.jpg",
      "/article/Article 8/Article 8_page-0002.jpg",
      "/article/Article 8/Article 8_page-0003.jpg",
    ],
    content: `Le mercredi 9 avril 2025 à 18h00 GMT, l'espace Open The Box à Lomé a accueilli la cérémonie officielle de lancement du livre « Un Pied à l'École, Un Pied sur LinkedIn » de Parfait K. Toke. La salle était comble, signe de l'attente suscitée par cet ouvrage au titre aussi percutant qu'évocateur.

Parfait K. Toke est une figure bien connue de l'écosystème tech togolaise. Désormais auteur, il signe avec ce premier livre un guide pratique et inspirant destiné à la jeunesse africaine : comment conjuguer études, développement personnel et construction d'une présence professionnelle en ligne, notamment via LinkedIn.

Le lancement a été l'occasion d'un échange animé entre l'auteur et son public. Parfait K. Toke a partagé son parcours, ses doutes, ses apprentissages, et la conviction qui l'a poussé à écrire : celle que la jeunesse africaine a tout pour réussir, à condition d'être outillée, guidée et mise en réseau.

Art Révolution a soutenu médiatiquement cet événement, convaincue que la littérature — comme les arts plastiques ou la musique — est un vecteur de transformation pour les sociétés africaines. La coïncidence des genres et des disciplines dans la programmation d'Art Révolution témoigne de cette vision large et inclusive de la culture.

L'ouvrage est disponible en version physique et numérique. Il s'adresse à tous les jeunes africains qui cherchent à construire leur avenir avec ambition et méthode.`,
  },
  {
    id: "9",
    title: "Biographie : KOUGBLENOU Marcel Kodzo – Le Maître du Cauris",
    category: "Biographie",
    excerpt:
      "Portrait de KOUGBLENOU Marcel Kodzo, artiste plasticien dont l'œuvre majeure « Le Cauris » a inspiré le nom et la vision fondatrice de la plateforme Art Révolution.",
    date: "Juillet 2024",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 9/Article 9.jpg",
    images: ["/article/Article 9/Article 9.jpg"],
    content: `Il est l'artiste dont l'œuvre a tout déclenché. KOUGBLENOU Marcel Kodzo, plasticien togolais de renom, est l'auteur du tableau « Le Cauris » — une peinture qui a capturé l'essence même de l'identité africaine et a inspiré les fondateurs d'Art Révolution au point de donner son nom à toute une plateforme.

Marcel KOUGBLENOU est un homme discret, mais son travail parle avec une éloquence rare. Ses toiles explorent la richesse des symboles africains — le cauris en tête, coquillage millénaire qui fut monnaie d'échange, ornement rituel et signe de prospérité. Sous son pinceau, le cauris devient une métaphore de l'Afrique elle-même : petite en apparence, infinie en profondeur.

L'œuvre « Le Cauris » a été découverte par les fondateurs d'Art Révolution lors d'une exposition à Lomé. Le choc fut immédiat. « Cette peinture disait tout ce que nous voulions faire, tout ce que nous voulions célébrer, » se souvient WOMI Koffi Arsène. C'est ainsi qu'une toile est devenue le nom et le symbole d'une plateforme.

Depuis, KOUGBLENOU Marcel Kodzo a poursuivi son travail avec la même rigueur et la même exigence. Il expose régulièrement au Togo et à l'international, et sa collaboration avec Art Révolution lui a donné une visibilité nouvelle, notamment auprès des collectionneurs et des curateurs africains de la diaspora.

Son œuvre est une invitation à regarder l'Afrique autrement : non pas avec la nostalgie du passé, mais avec la certitude que cette culture, vivante et créatrice, a encore mille choses à dire au monde.`,
  },
];
