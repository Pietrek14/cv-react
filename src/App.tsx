import { Header } from "./components/Header/Header"
import './App.css'
import { EmploymentHistory } from "./components/EmploymentHistory/EmploymentHistory"
import { EducationHistory } from "./components/EducationHistory/EducationHistory"
import { Skills } from "./components/Skills/Skills"
import UnityLogo from "./assets/unity.png"
import UnrealLogo from "./assets/unreal.png"
import JavaLogo from "./assets/java.webp"
import CppLogo from "./assets/cpp.png"
import RustLogo from "./assets/rust.png"
import BevyLogo from "./assets/bevy.png"
import TypeScriptLogo from "./assets/typescript.png"
import ReactLogo from "./assets/react.png"
import { Projects } from "./components/Projects/Projects"
import PangImage from "./assets/pang.png"
import CansatImage from "./assets/cansat.jpg"
import MetaheuristicsImage from "./assets/metaheurystyki.jpg"
import BevyImage from "./assets/bevy2.png"
import { Achievements } from "./components/Achievements/Achievements"
import { Clause } from "./components/Clause/Clause"
import SignatureImage from "./assets/signature.jpg"

function App() {

  const personalInfo = {
    fullName: "Dawid Piotrowski",
    position: "Programista",
    email: "dawidpiotrowski505@gmail.com",
    phoneNumber: "+48 668 439 073",
    githubHandle: "@Pietrek14"
  }

  const employmentHistory = [
    {
      title: "Prowadzenie zajęć z programowania",
      employer: "InstaKod Sp. z o.o.",
      startDate: "2025",
      endDate: "obecnie",
      responsibilities: [
        "Nauka młodzieży szkolnej programowania w języku Python",
        "Prowadzenie dokumentacji zajęć",
        "Komunikacja z uczniami oraz rodzicami",
      ]
    },
    {
      title: "Analiza danych",
      employer: "Przedsiębiorstwo Budowy Szybów S.A.",
      startDate: "2025",
      endDate: "2025",
      responsibilities: [
        "Praca przy projekcie \"Cyfrowy Bliźniak Szybu\"",
        "Analiza danych historycznych",
        "Digitalizacja raportów do wykorzystania do predykcji w procesach produkcyjnych",
      ]
    },
    {
      title: "Automatyzacja procesów",
      employer: "DAGMA Bezpieczeństwo IT",
      startDate: "2023",
      endDate: "2024",
      responsibilities: [
        "Realizacja zadań w ramach oprogramowania infrastruktury SIEM",
        "Automatyzacja powtarzalnych zadań w Pythonie",
      ]
    },
  ]

  const education = [
    {
      school: "Politechnika Śląska",
      startDate: "2024",
      endDate: "obecnie",
      descriptors: [
        "Kierunek Informatyka na Wydziale Matematyki Stosowanej",
        "Uczestnik programu mentorskiego \"Rozwiń skrzydła\"",
        "Stypendysta programu projakościowego dla najlepszych kandydatów na studia",
      ]
    },
    {
      school: "Technikum nr 1 w Gliwicach",
      startDate: "2019",
      endDate: "2024",
      descriptors: [
        "Zdobycie kwalifikacji INF.03 oraz INF.04",
        "Dwukrotny laureat ogólnopolskiego konkursu \"O Złoty Indeks Politechniki Śląskiej\" w dziedzinie Informatyka",
        "Dwukrotny finalista ogólnopolskiego konkursu \"Motorola Science Cup\"",
        "Dwukrotny finalista ogólnopolskiego konkursu \"Mistrzostwa IT\"",
      ]
    },
  ]

  const skills = [
    {
      name: "Unity",
      icon: UnityLogo
    },
    {
      name: "Unreal Engine",
      icon: UnrealLogo
    },
    {
      name: "Java",
      icon: JavaLogo
    },
    {
      name: "C++",
      icon: CppLogo
    },
    {
      name: "Rust",
      icon: RustLogo
    },
    {
      name: "Bevy",
      icon: BevyLogo
    },
    {
      name: "TypeScript",
      icon: TypeScriptLogo
    },
    {
      name: "React",
      icon: ReactLogo
    },
  ];

  const projects = [
    {
      title: "Implementacja gry \"Pang\"",
      description: "Na drugi etap konkursu Motorola Science Cup 2022 przygotowałem własną implementację gry \"Pang\" w silniku Unity, zgodnie ze specyfikacją podaną przez organizatorów. Ten projekt razem z przygotowanym przez moich dwóch kolegów symulatorem bramek logicznych zapewniły nam wejście do finału.",
      links: ["https://github.com/team-nullptr/pang"],
      imageUrl: PangImage
    },
    {
      title: "CanSat Delta-Knurów-2",
      description: "Razem z pięcioma innymi osobami z Koła Naukowego Elektroniki i Informatyki w Knurowie wystartowaliśmy w ogólnopolskim konkursie Cansat stanowiącym jednocześnie eliminacje do międzynarodowego konkursu Europejskiej Agencji Kosmicznej. Celem konkursu było zbudowanie minisatelity wielkości puszki po napoju, badającego warunki atmosferyczne podczas spadania z wysokości. Nasz projekt zapewnił nam wyróżnienie.",
      links: [],
      imageUrl: CansatImage
    },
    {
      title: "Algorytmy metaheurystyczne",
      description: "Jako jeden z dziesięciu najlepszych kandydatów na Politechnikę Śląską zostałem wybrany do uczestnictwa w uczelnianym programie mentorskim \"Rozwiń skrzydła\"  W ramach projektu, pod opieką dr inż. Rafała Broćka przygotowuję artykuł naukowy dotyczący zastosowania algorytmów metaheurystycznych (w szczególności GWO oraz GTOA) w rozwiązywaniu problemów inżynierskich.",
      links: [],
      imageUrl: MetaheuristicsImage
    },
    {
      title: "Silnik do gier Bevy",
      description: "Bevy to drugi największy open-source'owy silnik do gier na platformie GitHub. Razem z kilkoma kolegami często tworzyłem projekty w Bevy, głównie w ramach game jam'ów. Stworzyliśmy też do niego prostą bibliotekę ułatwiającą programowanie animacji. Osobiście wniosłem również wkład w sam kod silnika. Moja praca dotyczyła głównie komponentów UI.",
      links: ["https://github.com/bevyengine/bevy", "https://big-ntertainment-nu.vercel.app/games"],
      imageUrl: BevyImage
    },
  ];

  const achievements = [
    {
      name: "Matura na 100 Procent",
      description: "Za uzyskanie wyników co najmniej 90% z każdego egzaminu maturalnego, do którego podszedłem, a także uzyskanie wyniku 100% z jednego z nich (matematyki), zostałem finalistą Ogólnopolskiego Projektu \"Matura na 100 Procent\", organizowanego przez fundację Zawsze Warto."
    },
    {
      name: "Gliwicki Laur Nauki 2021",
      description: "W roku szkolnym 2020/2021 udało mi się dojść do finału ogólnopolskiego konkursu Motorola Science Cup. Dzięki temu osiągnięciu, wszyscy członkowie mojego zespołu zostali nagrodzeni przez Prezydenta Miasta Gliwice nagrodą Gliwickiego Lauru Nauki."
    },
    {
      name: "Gliwicki Laur Nauki 2022",
      description: "Do finału konkursu Motorola Science Cup udało mi się dotrzeć również w roku szkolnym 2021/2022. Zapewniło mi to kolejną nagrodę Gliwickiego Lauru Nauki."
    },
    {
      name: "Gliwicki Laur Nauki 2023",
      description: "W roku szkolnym 2022/2023 zostałem laureatem pierwszego stopnia olimpiady \"O złoty indeks Politechniki Śląskiej\" w dziedzinie Informatyka. Za to osiągnięcie otrzymałem wyróżnienie w postaci Gliwickiego Lauru Nauki."
    },
    {
      name: "Śląskie. Inwestujemy w talenty",
      description: "W roku szkolnym 2019/2020 wziąłem udział w projekcie stypendialnym \"Śląskie. Inwestujemy w talenty\".  W ramach projektu stworzyłem prostą grę wirtualnej rzeczywistości oraz stronę internetową dotyczącą funkcji matematycznych."
    },
    {
      name: "Nagroda Fundacji im. Franka Hirschvogel",
      description: "Uzyskałem Nagrodę Fundacji Hirschvogel za ukończenie roku szkolnego 2020/2021 z bardzo dobrymi wynikami w nauce."
    },
  ];

  const date = new Date();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const currentDate = `${day}.${month}.${year}`;

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      <Header
        fullName={personalInfo.fullName}
        position={personalInfo.position}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
        githubHandle={personalInfo.githubHandle} />

      <div className="spacer layered-waves-separator" />

      <EmploymentHistory previousEmployments={employmentHistory} />

      <EducationHistory educationHistory={education} />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <div className="spacer wave-separator bg-yellow" />

      <Achievements achievements={achievements} />

      <Clause place="Gliwice" date={currentDate} signatureImageUrl={SignatureImage} />
    </div>
  )
}

export default App
