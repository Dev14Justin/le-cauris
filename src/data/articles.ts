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
    content: `Et si s'organiser suffisait ?
"S'organiser suffira" repose sur une
idée simple mais puissante : en réponse
aux défis sociaux, économiques et culturels que connaissent nos espaces matériels et
immatériels. L'organisation collective efficace peut être un levier décisif. Le titre S'organiser
suffira extrait de la phrase "nous avons besoin
de justice, nous devons réclamer justice mais s'organiser suffira" traduit l'idée que, dans le
chaos apparent, il y a une force de transformation à portée de main, si nous choisissons de
structurer nos efforts. Par cette initiative, le musée souhaite encourager la collaboration et le
dialogue comme réponses aux défis contemporains. Défis que le peuple africain et afro
descendant connaît très bien et qui serait redondant de citer ici.

Onze artistes de quatres nationalités différentes (Togo, Bénin, Burkina Faso,
Cameroun🇨🇲) font cette exposition. Chacun avec son style et son approche agit comme un
prisme qui reflète une facette différente de la condition humaine, des préoccupations
sociales ou des expériences personnelles. La diversité des sujets abordés, qu'il s'agisse de
questions identitaires, culturelles, environnementales, politiques ou purement esthétiques,
permet à l'exposition de toucher un spectre élargi de sensibilités et d'interroger des enjeux
variés. Cela confère à l'ensemble une profondeur à laquelle l'homogénéité ne pourrait
prétendre.

Il est souvent de coutume dans la liturgie des expositions collectives d'amener les artistes à
dire surtout un même thème. Ici ce n'est pas le cas. Le titre et les actions menées
collectivement entre les artistes et le musée pour que ce projet se suffisent. En organisant
une exposition qui célèbre l'action collective avec des voix distinctes sans chercher à les
uniformiser, nous embrassons la complexité même de notion d'organisation. Plutôt que de
diluer les individualités, le choix de juxtaposer des points de vue variées souligne leur
complémentarité et les résonances inattendues qui émergent de leur dialogue. Chaque
pièce devient ainsi une contribution essentielle au
récit global de l'exposition, créant une dynamique d'interaction où la somme dépasse la
simple addition des parties.

Enfin, l'exposition ne propose pas de solutions toutes faites. Elle cherche plutôt à ouvrir des
espaces de dialogue, à nourrir des réflexions
et à inspirer des actes. S'organiser suffira ne prétend pas que l'organisation est une
panacée, mais elle affirme avec force qu'elle est un début, une tentative essentielle et
profondément humaine de résister à l'inertie, au chaos ou à la résignation.

L'exposition continue jusqu'au 22 février 2025
#ArtRevolution : Votre source d'information sur l'actualité artistique.

Publié le 28 janvier 2025`,
  },
  {
    id: "2",
    title: "Biographie de Cosmas Kete",
    category: "Biographie",
    excerpt:
      "Portrait de Cosmaskete KETE Atsou, artiste plasticien Cofondateur d'Art Révolution, dont l'œuvre est entièrement dédiée à la revalorisation de l'identité et des valeurs africaines.",
    date: "Février 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 2/Article 2.jpg",
    images: ["/article/Article 2/Article 2.jpg"],
    content: `KETE Atsou mieux connu sous le nom d'artiste Cosmakete, incarne la fusion entre
l'ingéniosité scientifique, la créativité artistique et l'engagement social. Après une licence en
Économie Internationale, sa passion pour l'Art le conduit sur une voie différente. Après
immersion rapide au Village Artisanal de Lomé, il ouvre les portes de son Atelier CosArt, en
tant que Plasticien Polyvalent. Cosmakete est un digne fils d'Afrique avec un engagement
farouche et une détermination pour le bien-être et l'équilibre de sa société. Après sept (7)
ans au service de son pays comme Professeur des Arts Plastiques, son amour pour l'Afrique
le projette sur la scène internationale avec une tournée sur le Bénin (Cotonou), le
Burkina-Faso (Ouaga) et une exposition au Togo (Lomé) sur le thème " REVALORISATION
DES VALEURS AFRICAINES : GARANTS DE L'HUMANITÉ" dans le cadre de l'éveil de
l'Afrique. Il se définit comme Artisan et Acteur pour le retour aux valeurs et identités
Africaines qu'il qualifie de capital pour le survie de l'humanité.

#ArtRevolution : Votre source d'information sur l'actualité artistique.

Publié le 30 janvier 2025`,
  },
  {
    id: "3",
    title: "Coup de projecteur sur la poésie togolaise: 'Vers et envers'",
    category: "Culture",
    excerpt:
      "Retour sur le Café Littéraire dédié à la poésie de Kodjo Akakpo-Noumado, une soirée d'échange intense qui a célébré la puissance du verbe et la richesse de la tradition orale togolaise.",
    date: "Mars 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 3/Article 3_page-0001.jpg",
    images: [
      "/article/Article 3/Article 3_page-0001.jpg",
      "/article/Article 3/Article 3_page-0002.jpg",
      "/article/Article 3/Article 3_page-0003.jpg",
      "/article/Article 3/Article 3_page-0004.jpg",
    ],
    content: `Le ministère togolais de la Communication, des Médias et de la Culture, en partenariat avec
l'Institut Goethe de Lomé, est fier de lancer Le Livre du Mois, une initiative visant à
promouvoir la richesse de la littérature nationale. Pour le mois de janvier 2025, nous
sommes ravis de mettre en lumière le recueil de poèmes "Vers et envers" de Kodjo
Akakpo-Noumado.

Ce recueil exceptionnel explore des thèmes universels tels que l'amour, le temps qui passe
et la beauté de la nature, offrant une lecture profonde et émouvante.

Pour célébrer cette œuvre, un café littéraire s'est tenu le jeudi 30 janvier 2025, de 19h00 à
21h00, dans la salle de conférence du ministère de la Communication, des Médias et de la
Culture. L'événement a été marqué par la présence de l'artiste plasticien Cosmas Kete , qui
a créé en direct une œuvre d'art en hommage aux femmes du gouvernement, soulignant
leur rôle essentiel dans le développement du pays.

L'œuvre de Cosmaskete représente une femme portant une calebasse remplie de nourriture
(symbole de l'énergie nécessaire pour progresser), enveloppant son enfant dans le drapeau
togolais (représentant la jeunesse et l'avenir), et protégeant fièrement cette jeunesse avec
un parapluie (symbole de protection contre les défis).

#ArtRevolution : Votre source d'information sur l'actualité artistique.

Publié le 04 février 2025`,
  },
  {
    id: "4",
    title: "Lancement officiel du festival Art et Mémoires Édition 3",
    category: "Culture",
    excerpt:
      "Compte-rendu du lancement officiel du festival Art et Mémoires Édition 3, sur le thème: 'L'art au service de la mémoire de la traite négrière et l'unicité en héritage'.",
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
    content: `Le 6 février 2025, a eu lieu le lancement officiel du festival Art&Mémoire 3ème Édition, sur le
thème: "L'art au service de la mémoire de la traite négrière et l'unicité en héritage".
Ce festival se veut un catalyseur pour les mémoires refoulées de l'esclavage, explorant les
impacts de cette période sombre de notre histoire commune, tant sur le continent africain
que dans sa diaspora. Il offre un espace privilégié pour construire des ponts vers un avenir
de réconciliation.
L'artiste plasticien de renom, Cosmas Kete , a été invité à ouvrir cette troisième édition avec
une performance live captivante lors du lancement. Son œuvre révèle une Afrique nouvelle,
consciente de son potentiel et résolument tournée vers un avenir meilleur.
Nous tenons à exprimer notre gratitude à RasSankara Agbako #ArtetMémoires , l'artiste
performeur togolais visionnaire et créateur de ce festival, ainsi qu'à tous les artistes,
partenaires médias et collaborateurs présents. Leur engagement a été essentiel à la
richesse de cet événement.

#ArtRevolution : Votre source d'information sur l'actualité artistique.

Publié le 07 février 2025.`,
  },
  {
    id: "5",
    title: "L'art au service de la paix : Espoir FADU lance 'La Mission de Mon Pinceau' à Lomé",
    category: "Événement",
    excerpt:
      "Retour sur le lancement officiel du programme 'La Mission de Mon Pinceau' d'Espoir FADU, une initiative culturelle ambitieuse dédiée à la paix et au développement en Afrique.",
    date: "Février 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 5/Article 5_page-0001.jpg",
    images: [
      "/article/Article 5/Article 5_page-0001.jpg",
      "/article/Article 5/Article 5_page-0002.jpg",
      "/article/Article 5/Article 5_page-0003.jpg",
      "/article/Article 5/Article 5_page-0004.jpg",
      "/article/Article 5/Article 5_page-0005.jpg",
    ],
    content: `L'art comme vecteur de changement social : c'est la mission que s'est donnée l'artiste
togolais Espoir FADU Espoir Fadu en lançant son ambitieux programme La Mission de
Mon Pinceau le mercredi 26 février 2025 à Lomé. Dans une atmosphère empreinte d'espoir
et de créativité, cet événement a réuni des acteurs clés de la culture, de la paix et du
développement, venus soutenir l'initiative de cet artiste engagé.

Espoir FADU, artiste reconnu pour son talent et son engagement, a décidé de mettre son art
au service du vivre-ensemble et du développement social. Fort de ses nombreuses
distinctions nationales et internationales, il est convaincu que l'art est un puissant outil de
transformation sociale. C'est dans cette optique qu'il a conçu "La Mission de Mon Pinceau",
un programme sur une période de cinq(5) ans renouvelables visant à promouvoir la culture,
la paix et le développement au Togo et en Afrique.

Le programme se décline en plusieurs axes : ateliers de formation artistique,
expositions-ventes et actions sociales. Les quatre premiers mois seront consacrés à des
expositions-ventes, dont les fonds récoltés financeront des actions sociales à travers le
pays. Espoir FADU a également été chargé d'élaborer le guide de maintien de l'ordre pour
les forces de sécurité des 54 États africains, témoignant de son engagement pour la paix et
la sécurité.

Mais au-delà de cette dimension institutionnelle et sécuritaire, le lancement a été marqué
par un hommage vibrant aux racines de l'artiste, rappelant que chaque grand projet puise sa
force dans une histoire personnelle.

En effet, l'artiste plasticien de renom Cosmaskete a offert une performance mémorable en
hommage à son « doyen ». En direct, il a créé une toile symbolique représentant une femme
portant un enfant : un hommage à la mère d'Espoir FADU, décoratrice de talent qui l'a initié
à l'art dès son plus jeune âge. Cette œuvre, montrant l'enfant puisant dans le sac de sa
mère, a ajouté une dimension émotionnelle forte, soulignant l'importance de la transmission
dans cette nouvelle mission.

Les institutions internationales et nationales ont salué l'initiative d'Espoir FADU. Le
représentant de l'UNREC a souligné que "Espoir FADU est bien plus qu'un artiste ; c'est un
véritable acteur de changement qui met son talent au service de la justice, prônant la
tolérance, la paix et le vivre-ensemble." Le Directeur de la promotion des Arts et de la
Culture, AZIATI Vinyo, a quant à lui appelé à une mobilisation collective : "C'est notre
mission à tous, Togolais et Africains."

Pour sceller cette union et exprimer sa gratitude, Espoir FADU a clôturé la cérémonie par un
geste symbolique fort : il a offert plusieurs de ses œuvres aux organisations et aux
personnalités qui l'ont soutenu, marquant ainsi sa reconnaissance envers ceux qui rendent
cette aventure possible.

En conclusion, La Mission de Mon Pinceau est un programme ambitieux et durable qui
promet de laisser une empreinte positive sur la société togolaise et africaine. Espoir FADU,
chantre de la paix et de la cohésion sociale, a su mobiliser autour de lui des partenaires et
des acteurs engagés, faisant de cet événement un moment fort de la vie culturelle togolaise.

#ArtRevolution : Votre source d'information sur l'actualité artistique.

Publié le 28 février 2025.`,
  },
  {
    id: "6",
    title: "Biographie de Lekid",
    category: "Biographie",
    excerpt:
      "Portrait de Lekid, artiste polyvalent togolais dont le parcours atypique et la détermination sans faille font de lui l'une des figures les plus prometteuses de la nouvelle génération artistique togolaise.",
    date: "Mars 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 6/Article 6.jpg",
    images: ["/article/Article 6/Article 6.jpg"],
    content: `LEKID 28 Officiel , de son nom vrai ADJOGLI Kodjo Pascal, est un artiste rappeur,
auteur-compositeur togolais né le **- ** - 2*** à Awatamé. Dès son plus jeune âge, il a été
influencé par deux grandes passions : le football et la musique. Bien qu’il ait passé une
grande partie de son enfance à rêver de devenir footballeur professionnel, son amour pour
la musique a toujours occupé une place spéciale dans sa vie.

Brillant élève, LEKID 28 a su jongler entre ses ambitions sportives, ses études et son intérêt
croissant pour la musique. À un moment donné, il a fait le choix de mettre temporairement
de côté son rêve de football pour se concentrer sur ses études. Cependant, sa passion pour
la musique ne l’a jamais quittée. Pendant ses années d’école, Lekid 28 s'est d'abord fait
connaître grâce à ses freestyles percutants diffusés dans les rues et sur les réseaux
sociaux. Son flow unique et ses paroles engagées ont rapidement séduit un public jeune et
connecté.

Après l’obtention de son BEPC avec mention, LEKID 28 s’est consacré davantage à sa
carrière musicale. Malgré des moyens financiers limités; son père étant conducteur de Taxi
Moto et sa mère une revendeuse du quartier ; il a persévéré. Pendant les vacances
scolaires, il a travaillé dur pour financer ses enregistrements en studio, prouvant ainsi sa
détermination.

En avril 2023, son travail acharné a payé. Un de ses freestyles transformé en chanson a
explosé sur les réseaux sociaux, le révélant au grand public. Cet exploit a marqué le début
de sa notoriété, tant au Togo qu’au Ghana, où il a reçu une attention particulière. Il a été
invité par des stars internationales comme Camidoh et Santrinos Raphaël, affirmant sa
place dans le rap game togolais.

Lekid 28 est considéré comme un artiste prometteur de sa génération. Il a déjà à son actif
plusieurs titres à succès tels que (Aflaouvi freestyle, Zangbétor, Choco Milo, On my way), et
travaille sans relâche pour étendre son influence musicale. Son style original, qu'il qualifie de
#AflaouDrill, est un mélange d'influences diverses qui apporte une fraîcheur nouvelle à la
scène rap togolaise.

Malgré la jeunesse de sa carrière, Lekid 28 a déjà été récompensé pour son talent,
notamment en remportant le deuxième prix dans la catégorie "Meilleure jeune étoile
montante de la musique" lors des cérémonies de récompenses TOGO TALENT D'OR 2024 .

En 2025, Lekid 28 franchit une nouvelle étape dans sa carrière avec la sortie de son premier
EP intitulé GENTRI. Ce projet de cinq titres (On my way, Go get money, Correction, Alpha
Oméga, Password) est disponible sur toutes les plateformes de téléchargement depuis le 01
février 2025.

Lekid 28 originaire d'aflaou continue d'évoluer et d'expérimenter, avec l'ambition de toucher
un public toujours plus large et de laisser une empreinte durable dans l'industrie musicale
togolaise.

#ArtRevolution : Votre source d'information sur l'actualité artistique

Publié le 01 Mars 2025.`,
  },
  {
    id: "7",
    title: "Talakaka Officiel : De la danse à la scène musicale, un artiste qui repousse les limites",
    category: "Musique",
    excerpt:
      "Analyse du dernier opus musical de Talakaka, un album ambitieux qui tisse un dialogue inédit entre les sonorités traditionnelles africaines et les productions musicales contemporaines.",
    date: "Mars 2025",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 7/Article 7.jpg",
    images: ["/article/Article 7/Article 7.jpg"],
    content: `Découvrez l'histoire inspirante de Talakaka, de son vrai nom Yovogan Komi Espoir, un artiste
togolais qui ne cesse de surprendre. Parti de la danse, il a conquis le public sur TikTok grâce
à son énergie et sa créativité.

Talakaka a commencé sa carrière en tant que danseur, collaborant avec les plus grands
noms de la scène musicale togolaise et même internationale. Fondateur du groupe
"Magniere Boys", sa passion ne s'est pas arrêtée là. Animé par une ambition sans bornes, il
franchit un nouveau cap en se lançant dans la musique.

En 2016, il amorce un tournant décisif en lançant sa carrière solo avec "Magniere
Magniere". Depuis, il enchaîne les hits : "Profiter", "Forcé", "Sadness", "IYA", "Enjoy",
"Bless", "Marry You", "APETOR" (feat. Santrinos Raphaël & Black Manu), "High Life" (feat.
Fanicko Fanicko ), "Étéréré", "Gbégné"... Autant de titres qui confirment son statut d'artiste
accompli.

Aujourd'hui, son travail acharné prend tout son sens avec Inside Me, un album de 18 titres
dévoilé le 1er mars 2025. Ce projet ambitieux, empreint d'émotions et de sincérité, reflète
toute l'essence de son art. Il incarne le fruit d'un parcours marqué par le courage, la
persévérance et le dépassement de soi.

Inside Me est également un projet collaboratif, avec la participation d'artistes talentueux tels
que Anodaboy, Mic Flammez Mic Flammez, Dorcy, Writing, Ralycia et Marho.

Avec cet album, Talakaka écrit une nouvelle page de son histoire et s'impose comme l'un
des visages montants de la musique togolaise. Son ascension ne fait que commencer, et
son art continue d'inspirer toute une génération.

#ArtRevolution, Le cauris votre source d'information sur l'actualité artistique

Publié le 10 Mars 2025.`,
  },
  {
    id: "8",
    title: "Lancement du livre 'Un pied à l'école, un pied sur LinkedIn' de Parfait TOKE à Lomé",
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
    content: `Le 9 avril 2025, Parfait Toke , développeur et consultant en innovation numérique,
présentera officiellement son premier livre, "Un pied à l'école, un pied sur LinkedIn". Destiné
aux jeunes professionnels, cet ouvrage offre des stratégies pour développer ses
compétences, bâtir un réseau solide et exploiter pleinement LinkedIn.

Au-delà d'un guide pratique, le livre partage les défis et les leçons tirées du parcours de
l'auteur, soulignant l'importance d'allier études et ambition pour réussir. La précommande est
obligatoire pour assister à l'événement, avec paiement possible sur place.Vous pouvez
effectuer votre précommande en suivant ce lien : 
https://lnkd.in/dmXemB-K

Le paiement pourra être réalisé sur place lors de l'événement. Veuillez noter que seule la
version physique du livre sera disponible en précommande, la version numérique étant
prévue pour une diffusion ultérieure.

Parfait TOKE, également fondateur de communautés technologiques au Togo (Night
Coding, Girls in Coding, etc.), Son implication dans des projets innovants tels que MIABE
CAMPUS, Laitify et Drecio témoigne de son engagement à promouvoir l'excellence
technologique et à encourager l'innovation en Afrique.

Ne manquez pas cette occasion de rencontrer Parfait TOKE, d'échanger avec lui et de vous
inspirer de son parcours.

#ArtRevolution, Le cauris votre source d'information sur l'actualité artistique.

Publié le 31 mars 2025.`,
  },
  {
    id: "9",
    title: "Portrait d'Artiste : Kougblenou Marcel Kodzo, l’art au sommet de son ambition",
    category: "Biographie",
    excerpt:
      "Portrait de KOUGBLENOU Marcel Kodzo, artiste plasticien dont l'œuvre majeure « Le Cauris » a inspiré le nom et la vision fondatrice de la plateforme Art Révolution.",
    date: "Juillet 2024",
    author: "Rédaction Le Cauris",
    imageUrl: "/article/Article 9/Article 9.jpg",
    images: ["/article/Article 9/Article 9.jpg"],
    content: `Découvrez le parcours de Kougblenou Marcel Kodzo, ce jeune prodige de l’art plasticien
togolais qui transforme chaque toile en un message d'excellence.
Tout a commencé sur le sol, son premier support, où il dessinait avant même de savoir lire.
Guidé par un père aimant et formé par des mentors de renom, Marcel a fait de l’art sa «
thérapie ».

Son ascension est marquée par des succès prestigieux :

- Lauréat des concours Campus Talent (HOT 40 et HOT 50).

- Diplômé du CFA en septembre 2024 avec la mention "Très bien". Fidèle à sa devise : « Qui
cherche la perfection obtient l'excellence ».

Le talent de Marcel rayonne désormais au-delà des galeries. Le mercredi 30 octobre 2024,
l'artiste a franchi une étape symbolique majeure en étant reçu par l'Honorable DZREKE
Ayao Gaston, 4ème Vice-Président de l’Assemblée nationale togolaise. À cette occasion,
Marcel lui a offert un magnifique poster, une œuvre personnelle témoignant de la vitalité de
la jeunesse créative du pays. Un geste fort qui souligne la place de l'art au cœur de la
nation.

Aujourd'hui, l'empreinte de Marcel est visible à travers des fresques murales emblématiques
qui embellissent des édifices religieux et universitaires, notamment à l'Université de Lomé.
Dans son atelier d'Adidogomé Lankouvi, il travaille avec une exigence rare, porté par sa
devise : « Qui cherche la perfection obtient l’excellence ». Pour lui, chaque œuvre est une
quête de maîtrise de son style et un espace de réflexion sur la condition humaine, visant à
créer un dialogue intime avec chaque spectateur.

Inspiré par de grands maîtres tels que Léonard de Vinci et Paul Ayi, Marcel nourrit des rêves
de grandeur, aspirant à réaliser un jour l'œuvre la plus chère de l'histoire. S'il porte un regard
lucide sur les défis du secteur artistique au Togo, il reste convaincu que l'art peut offrir un
avenir prospère. Visionnaire et passionné, il incarne cette jeunesse togolaise déterminée à
faire briller sa culture et à repousser les limites de la créativité sur la scène internationale.
Un talent à suivre de très près !

#ArtRevolution : @lecauris votre source d'information sur l'actualité artistique.

Publié le 10 Mars 2024.`,
  },
];
