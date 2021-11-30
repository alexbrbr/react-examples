import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const maVariable = "because why not";
  return (
    <div className="app">
      {/* <MonContenuHtml></MonContenuHtml> */}
      {/* <Templating></Templating> */}
      {/* <AvecDesProps
        maFonction={() => maVariable}
        monNombre={1.61803398875}
        uneChaine="trololololo lololo lololo"
        unBoolean={false}
      ></AvecDesProps> */}
      {/* <AvecDesPropsCompliquées
        maFonction={() => maVariable}
        monTableau={[1, 2, 3, "A", "B", "C"]}
        monObjet={{ "cette syntaxte": "un peu barbare" }}
      ></AvecDesPropsCompliquées> */}

      {/* C'est le bon moment pour inspecter et montrer les react dev tools */}
      {/* <UnePropriétéNomméeChildren></UnePropriétéNomméeChildren>
      <UnePropriétéNomméeChildren>
        <p>Par exemple comme ça</p>
      </UnePropriétéNomméeChildren>
      <UnePropriétéNomméeChildren>
        <p className="cool-color">Ou comme ça</p>
      </UnePropriétéNomméeChildren> */}

      {/* <Condition></Condition> */}
      {/* <MaBoucle></MaBoucle> */}
      {/* <QuelquesEvenements></QuelquesEvenements> */}
      {/* <LeHelloWorld></LeHelloWorld> */}
      {/* <AvecDesObjetsEtDesArrays></AvecDesObjetsEtDesArrays> */}
      {/* <EffetDeBord></EffetDeBord> */}
      {/* <UnPetitAppelHTTP></UnPetitAppelHTTP> */}
      <UnAutreAppelHTTPPourLaRoute></UnAutreAppelHTTPPourLaRoute>
    </div>
  );
}

const MonContenuHtml = () => {
  return (
    <main>
      <h1>Salut tout le monde</h1>
      <ul>
        <li>JSX, c'est</li>
        <li>du HTML</li>
        <li>renvoyé par une fonction</li>
        <li>avec juste quelques spécificités à connaitre</li>
      </ul>
      <p className="explication">
        Il faut utiliser <strong>className</strong> au lieu de
        <strike>class</strike>, car c'est un mot clé du JS
      </p>
      <div className="preference">
        <label for="react">Est ce que vous aimez React ?</label>
        <input type="checkbox" name="react" id="react" />
      </div>
      <a href="https://reactjs.org/docs/dom-elements.html">
        Voir les détails ici pour les plus 🤓
      </a>
    </main>
  );
};

function Templating() {
  const nom = "Batman";

  const monEspaceRéservé = "Robin";
  return (
    <p>
      I'm {nom} <br />
      <br />
      <label>
        What's your name ? <input type="text" placeholder={monEspaceRéservé} />
      </label>
    </p>
  );
}

const AvecDesProps = ({
  monNombre,
  uneChaine,
  unBoolean,
  nimpNawak,
  parDefaut = "au cas où",
}) => {
  return (
    <ol>
      <li>Le nombre d'or c'est {monNombre}</li>
      <li>Les paroles d'une chanson à texte : {uneChaine}</li>
      <li>Mon booléen (juste présent) : {String(unBoolean)}</li>
      <li>Un nom bidon pas passé : {String(nimpNawak)}</li>
      <li>Propriété par défaut : {parDefaut}</li>
    </ol>
  );
};

const AvecDesPropsCompliquées = ({ maFonction, monTableau, monObjet }) => {
  return (
    <ol>
      <li>Ma fonction donne : {maFonction()}</li>
      <li>monTableau : {JSON.stringify(monTableau)}</li>
      <li>monObjet : {JSON.stringify(monObjet)}</li>
    </ol>
  );
};

const UnePropriétéNomméeChildren = (props) => {
  return (
    <section className="explication">
      <p>Dans ce composant j'affiche mes children en dessous :</p>
      {props.children}
    </section>
  );
};

function Condition() {
  const siMaCondition = (condition) => {
    if (condition) {
      return <p> là ça marche </p>;
    }
  };
  const erreur = true;
  if (erreur) {
    return "oops une erreur";
  }

  return (
    <div>
      test
      {/* ça marche pas */}
      {/* { 
        if(true) {
          return (<p>test avec ifs</p>);
        }
      } */}
      {true && <p>test avec short circuit</p>}
      {false ? <p>test avec ternaire</p> : null}
      {siMaCondition(false)}
    </div>
  );
}

function MaBoucle() {
  const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

  return (
    <ol>
      {fibonacci.map((n, index) => (
        <li key={index}>{n}</li>
      ))}
    </ol>
  );
}

function QuelquesEvenements() {
  function tuCritiques(test, event) {
    alert(event.target);
  }
  return (
    // un fragment React, car on a besoin d'un seul parent
    <>
      <div>
        <button onClick={(event) => tuCritiques("test", event)}>
          Ne pas cliquer
        </button>
      </div>
      <hr />
      <div>
        <button onClick={tuCritiques}>Ne pas cliquer non plus </button>
      </div>
      <hr />
      <label for="name">Name (4 to 8 characters):</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="10"
        onChange={(e) => {
          console.log("CH CH CH CH CHANGES");
          console.log(e.target.value);
          console.log("Turn and face the strange");
        }}
        onBlur={() => {
          alert("alerte au blur");
        }}
      />
    </>
  );
}

function LeHelloWorld() {
  const [monCompteur, setMonCompteur] = useState(0);

  return (
    <>
      <h1>{monCompteur}</h1>
      <button
        onClick={() => {
          setMonCompteur(monCompteur + 1);
        }}
      >
        Incrémente toi petit compteur
      </button>
    </>
  );
}

function AvecDesObjetsEtDesArrays() {
  const [personnages, setPersonnages] = useState([
    {
      id: 0,
      name: "Riri",
    },
    {
      id: 1,
      name: "Fifi",
    },
  ]);

  const [nameToAdd, setNameToAdd] = useState("");

  function ajouterUnPerso() {
    const nouveauxPersonnages = [
      ...personnages,
      { id: personnages.length, name: nameToAdd },
    ];
    setPersonnages(nouveauxPersonnages);
  }
  return (
    <>
      {personnages.map((perso) => (
        <p key={perso.id}>{perso.name}</p>
      ))}
      <input onChange={(e) => setNameToAdd(e.target.value)}></input>
      <button
        onClick={() => {
          ajouterUnPerso();
        }}
      >
        Ajouter un personnage
      </button>
    </>
  );
}

function EffetDeBord() {
  const [monCompteur, setMonCompteur] = useState(0);

  // setInterval(() => {
  //   console.log(monCompteur);
  //   console.log("oops");
  //   setMonCompteur(monCompteur + 1);
  // }, 1000);

  useEffect(() => {
    let id = setInterval(() => {
      console.log(monCompteur);
      console.log("yes !!");
      setMonCompteur(monCompteur + 1);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(id);
    };
  }, [monCompteur]);
  return <div>{monCompteur}</div>;
}

function UnPetitAppelHTTP() {
  const [chat, setChat] = useState({});

  function getCatPicture() {
    fetch("https://thatcopy.pw/catapi/rest/", {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((cat) => {
        setChat({ url: cat.url });
        console.log(cat.url);
      });
  }

  useEffect(() => {
    getCatPicture();
  }, []); // [] , donc une seule fois au chargement du composant

  return (
    <>
      <img className="avatar" src={chat.url} />
    </>
  );
}
function UnAutreAppelHTTPPourLaRoute() {
  const [madness, setMadness] = useState(false);
  const [chats, setChats] = useState([]);

  function getCatPicture() {
    fetch("https://thatcopy.pw/catapi/rest/", {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((cat) => {
        setChats([...chats, { url: cat.url }]);
        console.log(cat.url);
      });
  }

  useEffect(() => {
    getCatPicture();
  }, []);

  const rajouterUnChat = () => {
    console.log("rajouterUnChat");
    setTimeout(() => {
      getCatPicture();
    }, 1000);
    // getCatPicture();
  };

  function getClassName() {
    if (madness) {
      return "avatar madness";
    }
    return "avatar";
  }

  return (
    <>
      {chats.map((chat) => (
        <img className={getClassName()} key={chat.url} src={chat.url} />
      ))}
      <button
        onClick={() => {
          rajouterUnChat();
        }}
      >
        Miaou 😼
      </button>
      <hr />
      <button
        onClick={() => {
          setMadness(true);
        }}
      >
        Madness ?? THIS IS SPARTA
      </button>
    </>
  );
}

export default App;
